import { pathToFileURL } from 'node:url'
import path from 'node:path'

delete process.env.NODE_ENV

const payloadDist = path.join(process.cwd(), 'node_modules', 'payload', 'dist')
const { findConfig } = await import(pathToFileURL(path.join(payloadDist, 'config', 'find.js')).toString())
const payloadModule = await import(pathToFileURL(path.join(payloadDist, 'index.js')).toString())
const payload = payloadModule.default

const configPath = findConfig()
let config = await import(pathToFileURL(configPath).toString())
if (config.default) config = await config.default

await payload.init({ config, disableOnInit: true })
console.log('\nSchema push done')
await payload.destroy()
process.exit(0)
