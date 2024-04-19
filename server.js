const express = require('express');
const next = require('next');
const compression = require('compression'); // Importez le module compression
const cacheHeaders = require('./Middleware/CacheHeaders'); // Importez le middleware que vous avez créé

const dev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 3000;

const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  // Appliquer le middleware cacheHeaders
  server.use(cacheHeaders);

  // Activer la compression pour les fichiers spécifiés
  server.use(
    compression({
      filter: function (req, res) {
        if (req.headers['x-no-compression']) {
          // Ne pas compresser les réponses avec l'en-tête X-No-Compression
          return false;
        }
        // Compresser tous les autres types de fichiers
        return compression.filter(req, res);
      },
    })
  );

  // Gérer toutes les autres requêtes avec Next.js
  server.all('*', (req, res) => {
    return handle(req, res);
  });

  // Démarrer le serveur
  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
