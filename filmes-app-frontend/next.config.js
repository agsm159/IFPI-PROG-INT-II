const withImages = require('next-images')

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
}

module.exports = withImages({
  esModule: true,
})
