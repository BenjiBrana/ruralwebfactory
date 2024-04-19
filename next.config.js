module.exports = {
  async headers() {
    return [
      {
        source: '/',
        headers: [
          // X-Content-Type-Options
          { key: 'X-Content-Type-Options', value: 'nosniff' },

          // X-Frame-Options
          { key: 'X-Frame-Options', value: 'DENY' },

          // Cache-Control (pour les autres chemins)
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, must-revalidate',
          },
        ],
      },
    ];
  },
};
