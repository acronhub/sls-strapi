module.exports = ({ env }) => ({
    upload: {
      provider: 'google-cloud-storage',
      providerOptions: {
        bucketName: env('BUCKET_NAME', 'strapi-resources'),
        baseUrl: 'https://storage.cloud.google.com/{bucket-name}',
        uniform: true,
      },
    },
  });