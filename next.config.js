module.exports = {
  async redirects() {
    return [
      {
        source: '/squarespace',
        destination: 'https://www.liveoakfilms.com/',
        permanent: false,
        basePath: false
      },
    ]
  },
};