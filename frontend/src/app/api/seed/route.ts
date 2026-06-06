import { NextRequest, NextResponse } from 'next/server'
import { getPayload } from 'payload'
import config from '@payload-config'
import path from 'path'
import fs from 'fs'

const sources = [
  { slug: 'site-config', file: 'tina/content/config.json' },
  { slug: 'footer',      file: 'tina/content/footer.json' },
  { slug: 'home',        file: 'tina/content/pages/home.json' },
  { slug: 'servicios',   file: 'tina/content/pages/servicios.json' },
  { slug: 'nosotros',    file: 'tina/content/pages/nosotros.json' },
  { slug: 'contacto',    file: 'tina/content/pages/contacto.json' },
  { slug: 'legal',       file: 'tina/content/pages/legal.json' },
] as const

export async function POST(request: NextRequest) {
  const secret = request.headers.get('x-seed-secret')
  if (!process.env.SEED_SECRET || secret !== process.env.SEED_SECRET) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const payload = await getPayload({ config })
  const seeded: string[] = []

  for (const { slug, file } of sources) {
    const filePath = path.join(process.cwd(), file)
    const content = JSON.parse(fs.readFileSync(filePath, 'utf8'))
    await payload.updateGlobal({
      slug: slug as Parameters<typeof payload.updateGlobal>[0]['slug'],
      data: { content },
      overrideAccess: true,
    })
    seeded.push(slug)
  }

  return NextResponse.json({ ok: true, seeded })
}
