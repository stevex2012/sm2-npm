// 打包
const esbuild = require('esbuild')
const path = require('path')
const fs = require('fs')

const entry = path.resolve(__dirname, './src/index.js')
const outfile = path.resolve(__dirname, './lib')

esbuild.buildSync({
  entryPoints: [entry],
  outfile: path.join(outfile, './index.js'),
  format: 'cjs',
})

const dTsContent = fs.readFileSync(
  path.resolve(__dirname, './src/index.d.ts'),
  'utf-8'
)

fs.writeFileSync(path.join(outfile, './index.d.ts'), dTsContent, 'utf-8')
