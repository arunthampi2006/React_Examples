const path = require('path')
const withTypescript = require('@zeit/next-typescript')
const withSASS = require('@zeit/next-sass')
const withCSS = require('@zeit/next-css');
const withMDX = require('@zeit/next-mdx')({
  extension: /.mdx?$/,
  options: {
    hastPlugins: [require('mdx-prism')]
  }
})
const r = require('regexr').default
const cssConfig = {
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1000,
    localIdentName: '[local]_[hash:base64:5]'
  }
}
const typescriptConfig = {}
const mdxConfig = {
  target: 'serverless',
  pageExtensions: ['js','jsx','mdx','md','css']
}
const transpileModulesConfig = {
  transpileModules: [
    '@awaitbox/window-loaded',
    '@svgr/webpack'
  ]
}

const nextConfig = withTranspileModules(withMDX(withCSS({
  ...cssConfig,
  ...mdxConfig,
  ...transpileModulesConfig
})))

function withTranspileModules(nextConfig) {
  const internalRegExps = nextConfig.transpileModules.map(m => {
    if (typeof m === 'string') return r`${r.escape(m)}(?!.*node_modules)`
    if (m instanceof RegExp) return m
    throw new TypeError('transpileModules should contain strings or RegExps only.')
  })

  const externalRegExps = nextConfig.transpileModules.map(m => {
    if (typeof m === 'string') return r`node_modules(?!\/${r.escape(m)}(?!.*node_modules))`
    return m
  })

  let jsRule

  function createJSRule(webpackConfig, nextOptions) {
    const {defaultLoaders} = nextOptions
    webpackConfig.module.rules.push({
      test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
      loader: 'url-loader?limit=100000'
    },{
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack'
        }
      ]
    })

// webpackConfig.module.rules.push(
//   {
//     test: /\.css$/,
//     use: [
//       'style-loader',
//       {
//       loader: require('styled-jsx/webpack').loader,
//       // options: {
//       //   type: 'global'
//       // }
//     }]
//   }
// )

    // webpackConfig.module.rules.push(
    //   {
    //     test: /\.css$/,
    //     use: [
    //       defaultLoaders.babel,
    //       {
    //         loader: require('styled-jsx/webpack').loader,
    //         options: {
    //           type: 'global'
    //         }
    //       }
    //     ]
    //   },
      // {
      //   test: /\.svg$/,
      //   use: [
      //     {
      //       loader: '@svgr/webpack'
      //     }
      //   ]
      // }
    // )
  }

  return {
    ...nextConfig,
    webpack(config, next) {
      config.node = {
        fs: 'empty',
        module: 'empty'
      }
      config.resolve.alias['components'] = path.join(__dirname, 'components')
      config.resolve.alias['static'] = path.join(__dirname, 'static')

      // config.resolve.symlinks = false

      // Next runs the dev config first, then the server config, so we reset rule
      // here when Next switches to the server config
      if (next.isServer) jsRule = null
      if (!jsRule) createJSRule(config, next)

      if (next.isServer && !next.dev) {
        const originalEntry = config.entry
        config.entry = async () => {
          const entries = { ...(await originalEntry())}
          entries['./posts/rss-feed.js'] = './posts/rss-feed.js'
          return entries
        }
      }

      // jsRule.include = internalRegExps
      var externals = config.externals
      config.externals = externals ? externals.map(external => {
        if (typeof external !== "function") return external
        return (ctx, req, cb) => internalRegExps.some(regex => regex.test(req)) ? cb() : external(ctx, req, cb)
      }) : externals

      if (typeof nextConfig.webpack === 'function')
        config = nextConfig.webpack(config, next)

      // console.log('--config.externals--', config)
      return config
    },
    webpackDevMiddleware(config) {
      const ignored = [...config.watchOptions.ignored, ...externalRegExps]
      config.watchOptions.ignored = ignored

      if (typeof nextConfig.webpackDevMiddleware === 'function')
        config = nextConfig.webpackDevMiddleware(config)

      return config
    }
  }
}

module.exports = nextConfig
