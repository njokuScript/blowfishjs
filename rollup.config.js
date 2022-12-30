import typescript from 'rollup-plugin-typescript2'
import pluginCommonjs from '@rollup/plugin-commonjs'
import replace from 'rollup-plugin-replace'
import pkg from './package.json' assert { type: 'json' }
import terser from '@rollup/plugin-terser'

const banner = `
/*

${pkg.name} v${pkg.version}
${pkg.repository.url}

Copyright (c) ${pkg.author.name}

This source code is licensed under the ${pkg.license} license found in the
LICENSE file in the root directory of this source tree.

@bannerend*/
`
const devMode = process.env.NODE_ENV === 'development'
console.log(`${devMode ? 'development' : 'production'} mode bundle`)

const external = [...Object.keys(pkg.dependencies || {})]
const plugins = [
  typescript(),
  pluginCommonjs({
    extensions: ['.js', '.ts'],
  }),
  replace({
    __REPLACE_VERSION__: pkg.version,
  }),
]

if (process.env.NODE_ENV === 'production') {
  plugins.push(terser())
}
export default [
  // Create CommonJS and ES Module for Node and modern browsers
  {
    input: 'src/index.ts',
    output: [
      {
        file: pkg.main,
        format: 'cjs',
        banner,
        exports: 'auto',
      },
      {
        file: pkg.module,
        format: 'es', // ES Module format
        banner,
      },
      {
        file: pkg.browser,
        format: 'umd',
        name: 'Blowfish', // the global which can be used in a browser
        banner,
      },
    ],
    external: ['axios'],
    plugins,
  },
]
