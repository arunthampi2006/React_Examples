const fs = require('fs')
const path = require('path')

const dir = path.join(process.cwd(), '/pages/newPosts/')
const meta = /export\s+const\s+meta\s+=\s+({[\s\S]*?\n})/
const files = fs.readdirSync(dir).filter(file => file.endsWith('.md') || file.endsWith('.mdx'))

module.exports = files
  .map(
    (file, i) => {
      const name = path.join(dir,file)
      const contents = fs.readFileSync(name,'utf-8')
      const match = meta.match(contents)

      if (!match || typeof match[1] !== 'string') {
        throw new Error(`${name} needs export const meta = Object`)
      }

      const metaN = eval('('+ match[1] +')')

      return {
        ...metaN,
        path: '/newPosts/' + file.replace(/\.mdx?$/, ''),
        i
      }
    }
  )
  .filter(fMeta => fMeta.published)
  .sort((a,b) => new Date(b.publishedAt) - new Date(a.publishedAt))
