const esbuild = require('esbuild')

esbuild.buildSync({
  entryPoints: ['./src/index.js'],
  outfile: './dist/index.js',
})