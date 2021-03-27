module.exports = ({ env }) => ({
  upload: {
    provider: 'google-cloud-storage',
    providerOptions: {
      bucketName: env('BUCKET_NAME', 'strapi-resources'),
      baseUrl: '{bucket-name}',
      uniform: true,
    },
  },
});