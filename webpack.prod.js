const CompressionPlugin = require('compression-webpack-plugin');
const zlib = require('zlib');

module.exports = () => {
  const config = {
    mode: 'production',
    devtool: false,
    optimization: {
      splitChunks: {
        // include all types of chunks
        chunks: 'all',
      },
    },
    plugins: [
      // compress for gzip which the default algorithm
      new CompressionPlugin({
        filename: '[path][base].gz',
        test: /\.js$/,
        threshold: 10240,
        minRatio: 0.8,
      }),
      // compress for brotli
      // https://en.wikipedia.org/wiki/Brotli
      new CompressionPlugin({
        filename: '[path][base].br',
        test: /\.js$/,
        algorithm: 'brotliCompress',
        threshold: 10240,
        minRatio: 0.8,
        compressionOptions: {
          params: {
            [zlib.constants.BROTLI_PARAM_QUALITY]: 11,
          },
        },
      }),
      //new BundleAnalyzerPlugin(),
    ],
  };

  return config;
};
