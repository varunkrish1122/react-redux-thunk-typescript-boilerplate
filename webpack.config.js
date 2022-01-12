const {merge} = require('webpack-merge');

const commonConfig = require('./webpack.common');
const devConfig = require('./webpack.dev');
const prodConfig = require('./webpack.prod');

module.exports = (env, options) => {
  switch (options.mode) {
    case 'development':
      return merge(commonConfig(env, options), devConfig(env, options));
    case 'production':
      return merge(commonConfig(env, options), prodConfig(env, options));
    default:
      throw new Error('No matching configuration was found!');
  }
};
