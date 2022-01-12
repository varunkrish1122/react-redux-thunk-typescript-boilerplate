const ip = require('ip');
const openBrowser = require('react-dev-utils/openBrowser');

module.exports = (env, options) => {
  // If the local option is provided, serve the app to the local network
  const host = options.local ? ip.address() : undefined;

  const config = {
    mode: 'development',
    devtool: 'inline-source-map',
    target: 'web',
    devServer: {
      host,
      port: 7900, // 7500,
      before() {
        // Respond to any requests for the fhconfig with the
        // hardcoded config file (dependent on environment).
      },
      after() {
        // Open the browser at the root of the app after all
        // other middleware has completed.
        const url = `http${this.https ? 's' : ''}://${this.host}:${this.port}`;
        openBrowser(url);
      },
      // Pass any unhandled routes to index.html to allow
      // the frontend routing to handle the page
      historyApiFallback: true,
      proxy: [
        {
          context: ['/auth', '/api'],
          target: env.PROXY_URL, // 'http://localhost:7900'
          secure: false,
          changeOrigin: true,
        },
      ],
    },
  };

  return config;
};
