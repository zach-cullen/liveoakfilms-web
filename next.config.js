const urls = require("./lib/redirects")

const generateRedirects = () => {
  return urls.map(url => {
    return {
      source: `/${url}`,
      destination: `https://www.liveoakfilms.com/${url}`,
      permanent: false,
      basePath: false
    }
  })
}

module.exports = {
  async redirects() {
    return generateRedirects();
  },
}