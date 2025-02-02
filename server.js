const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

//This is wrong. The server is listening on port 3000 which is fine.
//But if we make a mistake in our port number or try to bind to a port that is already in use by another application 
// then this will throw an error.
//To fix this we can check if the port is available before listening