import typescript from 'rollup-plugin-typescript'
import pluginCommonjs from '@rollup/plugin-commonjs'
import replace from 'rollup-plugin-replace'
import pkg from './package.json' assert { type: 'json' }

const banner = `
/*

${pkg.name} v${pkg.version}
${pkg.repository.url}

Copyright (c) ${pkg.author.name}

This source code is licensed under the ${pkg.license} license found in the
LICENSE file in the root directory of this source tree.

@bannerend*/
`

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
console.log(pkg.main, 'file dir')
export default [
  // Create CommonJS and ES Module for Node and modern browsers
  {
    input: 'src/index.ts',
    output: [
      {
        file: pkg.main,
        format: 'cjs',
        banner,
        exports: 'default',
      },
      {
        file: pkg.module,
        format: 'es', // the preferred format
        banner,
      },
      {
        file: pkg.browser,
        format: 'umd',
        name: 'Blowfish', // the global which can be used in a browser
        banner,
      },
    ],
    external,
    plugins,
  },
]