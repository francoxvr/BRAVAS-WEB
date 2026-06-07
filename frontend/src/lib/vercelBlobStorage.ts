/**
 * Adaptador de almacenamiento para Vercel Blob usando autenticacion OIDC.
 *
 * Las cuentas nuevas de Vercel ya no generan el token estatico
 * BLOB_READ_WRITE_TOKEN: en su lugar usan OIDC (BLOB_STORE_ID +
 * VERCEL_OIDC_TOKEN, ambas inyectadas automaticamente por Vercel en runtime
 * y disponibles localmente via `vercel env pull`). El SDK @vercel/blob
 * resuelve esas credenciales solo si no se le pasa un `token` explicito,
 * asi que este adaptador llama a put/del/head sin token.
 *
 * El plugin oficial @payloadcms/storage-vercel-blob exige un token estatico
 * con formato vercel_blob_rw_<storeId>_<random> y se autodeshabilita sin el,
 * por eso este adaptador propio reemplaza esa pieza.
 */
import { cloudStoragePlugin } from '@payloadcms/plugin-cloud-storage'
import { getFileKey } from '@payloadcms/plugin-cloud-storage/utilities'
import type {
  Adapter,
  GenerateURL,
  HandleDelete,
  HandleUpload,
  StaticHandler,
} from '@payloadcms/plugin-cloud-storage/types'
import { del, put } from '@vercel/blob'
import type { Plugin, UploadCollectionSlug } from 'payload'

function publicBaseUrl(): string {
  const storeId = (process.env.BLOB_STORE_ID ?? '').replace(/^store_/, '').toLowerCase()
  return `https://${storeId}.public.blob.vercel-storage.com`
}

function buildFileUrl(collectionPrefix: string, docPrefix: string | undefined, filename: string): string {
  const { fileKey } = getFileKey({ collectionPrefix, docPrefix, filename })
  const encodedKey = fileKey.split('/').map(encodeURIComponent).join('/')
  return `${publicBaseUrl()}/${encodedKey}`
}

const adapter: Adapter = ({ prefix = '' }) => {
  const generateURL: GenerateURL = ({ filename, prefix: docPrefix }) =>
    buildFileUrl(prefix, docPrefix, filename)

  const handleDelete: HandleDelete = async ({ doc, filename }) => {
    await del(buildFileUrl(prefix, doc.prefix, filename))
  }

  const handleUpload: HandleUpload = async ({ data, file }) => {
    const { fileKey } = getFileKey({ collectionPrefix: prefix, docPrefix: data.prefix, filename: file.filename })
    await put(fileKey, file.buffer, {
      access: 'public',
      addRandomSuffix: false,
      contentType: file.mimeType,
    })
    return data
  }

  const staticHandler: StaticHandler = async (_req, { params }) =>
    Response.redirect(buildFileUrl(prefix, params.prefix, params.filename), 302)

  return {
    name: 'vercel-blob-oidc',
    generateURL,
    handleDelete,
    handleUpload,
    staticHandler,
  }
}

export const vercelBlobStorage = (collections: UploadCollectionSlug[]): Plugin => (incomingConfig) => {
  const config = {
    ...incomingConfig,
    collections: (incomingConfig.collections ?? []).map((collection) => {
      if (!collections.includes(collection.slug as UploadCollectionSlug)) return collection
      return {
        ...collection,
        upload: {
          ...(typeof collection.upload === 'object' ? collection.upload : {}),
          disableLocalStorage: true,
        },
      }
    }),
  }

  return cloudStoragePlugin({
    collections: Object.fromEntries(collections.map((slug) => [slug, { adapter }])),
  })(config)
}
