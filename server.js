const express = require('express');
const path = require('path');

class App {
  constructor() {
    this.port = 8080 || process.env.PORT;
    this.express = express();
    this.middleware();
    this.routes();
    this.listen();
  }

  middleware() {
    this.express.use(express.static('public'));
  }

  routes() {
    this.express.get('*', (req, res) => {
      res.sendFile('index.html');
    });
  }

  listen() {
    this.express.listen(this.port, () => {
      console.log(`Magic happens on port ${this.port}`);
    });
  }
}

new App();
