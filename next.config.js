/* eslint-disable */
const withImages = require('next-images');

module.exports = withImages({
  env: {
    ENV: process.env.NODE_ENV,
    HOST_URL: process.env.HOST_URL || `http://localhost:${process.env.PORT}`,
  },
});
