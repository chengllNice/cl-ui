const path = require('path');
// const markdownLoaderOptions = require('./markdown-loader/index')

// const mdLoaderOption = require('./md-loader/index');



module.exports = {
  runtimeCompiler: true,
  // 配置插件
  configureWebpack: {
    resolve: {
      alias: {
        'cl-ui': path.resolve(__dirname, './')
      }
    },
    // externals: {
    //   vue: 'vue',
    // },
    module: {
      rules: [
        {
          test: /\.md$/,
          use: [
            {
              loader: 'vue-loader',
              options: {
                compilerOptions: {
                  preserveWhitespace: false
                }
              }
            },
            {
              loader: path.resolve(__dirname, './md-loader/index.js')
            }
          ],
        },
      ]
    },
    devServer: {
      host: '127.0.0.1',
    }
  },
};
