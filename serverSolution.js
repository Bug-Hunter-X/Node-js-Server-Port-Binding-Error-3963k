const express = require('express');
const app = express();
const port = 3000;

const startServer = () => {
  app.get('/', (req, res) => {
    res.send('Hello World!');
  });

  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  }).on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      console.error(`Port ${port} is already in use. Please choose a different port.`);
      process.exit(1);
    } else {
      console.error(`Failed to start server: ${err}`);
      process.exit(1);
    }
  });
};

startServer();