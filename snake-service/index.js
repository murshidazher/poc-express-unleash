const fetch = require('node-fetch');
const express = require('express');
const { initialize, InMemStorageProvider } = require('unleash-client');
const snakeNames = require('snake-names');

const app = express();

const unleash = initialize({
  url: process.env.UNLEASH_URL,
  appName: 'default-app',
  refreshInterval: 5,
  customHeaders: {
    Authorization: process.env.UNLEASH_API_TOKEN,
  },
  storageProvider: new InMemStorageProvider(),
});


unleash.on('ready', () => {
  console.log.bind(console, 'ready')
});

// optional error handling when using unleash directly
unleash.on('error', console.error);


app.get('/',  (req, res) => {
  const isNewFeatureEnabled = unleash.isEnabled("fflag-get-three-snake-names");
  console.log("fflag-get-three-snake-names", isNewFeatureEnabled);

  res.json({
    names: isNewFeatureEnabled? snakeNames.random(3): snakeNames.random(1)
  })
})

app.listen(8080, async () => {
  console.log('🚀 app listening on port 8080')
})


// graceful shutdown
const shutDown = () => {
    console.log('Received kill signal, shutting down gracefully');
    server.close(() => {
      console.log('Closed out remaining connections');
      unleash.stop();
      process.exit(0);
    });

    setTimeout(() => {
        console.error('Could not close connections in time, forcefully shutting down');
        process.exit(1);
    }, 10000);
}

process.on('SIGTERM', shutDown);
process.on('SIGINT', shutDown);
