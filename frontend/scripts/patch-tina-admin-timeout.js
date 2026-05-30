const fs = require('fs')
const path = require('path')

const adminIndexPath = path.join(__dirname, '..', 'public', 'admin', 'index.html')

if (!fs.existsSync(adminIndexPath)) {
  throw new Error(`Tina admin index not found at ${adminIndexPath}`)
}

const original = fs.readFileSync(adminIndexPath, 'utf8')
const patched = original.replace('}, 2000)', '}, 10000)')

if (patched === original) {
  throw new Error('Could not patch Tina admin asset timeout')
}

fs.writeFileSync(adminIndexPath, patched)
