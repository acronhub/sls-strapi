module.exports = ({ env }) => ({
  upload: {
    provider: 'google-cloud-storage',
    providerOptions: {
      bucketName: 'strapi-resources',
      publicFiles: false,
      uniform: false,
      basePath: '',
    },
  },
});