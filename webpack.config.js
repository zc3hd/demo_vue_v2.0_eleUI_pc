var path = require('path')
var webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');

var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CleanPlugin = require('clean-webpack-plugin') //webpack插件，用于清除目录文件


module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'webapp/main'),
    // publicPath: '/dist/',
    filename: '[name].js'
  },
  module: {
    rules: [{
      test: /\.vue$/,
      loader: 'vue-loader',
      options: {
        // vue-loader options go here
      }
    }, {
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    }, {
      test: /\.less$/,
      loader: 'less-loader'
    }, {
      test: /\.(eot|svg|ttf|woff|woff2)$/,
      loader: 'file-loader'
    }, {
      test: /\.(png|jpg|gif|svg)$/,
      loader: 'file-loader',
      options: {
        name: '[name].[ext]?[hash]'
      }
    }]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue'
    }
  },
  devServer: {
    port: 1234,
    contentBase: "./webapp",
    historyApiFallback: true,
    hot: true, // 配置HMR之后可以选择开启
    noInfo: true,
    inline: true // 实时刷新
  },
  devtool: '#eval-source-map'
};
// production
if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map';
  module.exports.module = {
    /* 在webpack2.0版本已经将 module.loaders 改为 module.rules 为了兼容性考虑以前的声明方法任然可用，同时链式loader(用!连接)只适用于module.loader
    同时-loader不可省略 */
    rules: [
      // vue
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          // vue-loader options go here
        }
      },
      // css
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      },
      // less
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'less-loader']
        })
      },
      // js
      {
        test: /\.js$/,
        loader: 'babel-loader', //此处不能用use，不知道为啥
        exclude: /node_modules/ //需要排除的目录
      }, 
      // font
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        loader: 'file-loader'
      }, 
      // png
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  };
  module.exports.plugins = (module.exports.plugins || []).concat([
    new HtmlWebpackPlugin({
      // 模版文件
      template: './webapp/index.html'
    }),
    new ExtractTextPlugin('[name].css'),
    new CleanPlugin(['main'], {
      root: '/webapp',
      verbose: true,
      dry: false,
      exclude: ['imgs', 'conf.js']
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendors' // 将公共模块提取，生成名为`vendors`的chunk
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ]);
}
// dev
else {
  module.exports.plugins = (module.exports.plugins || []).concat([
    new HtmlWebpackPlugin({
      // 模板文件也要改
      template: './webapp/index.html' // 模版文件
    }),
    new webpack.HotModuleReplacementPlugin() // 热加载插件
  ]);
}
