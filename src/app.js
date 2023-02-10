import express from 'express';
import mongoose from 'mongoose';
import routes from './routes';

import Cliente from './models/Cliente.js';

class App{
  constructor(){
    this.server = express();

    mongoose.connect('mongodb+srv://rethink:rethink@dbrethink.stirxne.mongodb.net/rethink?retryWrites=true&w=majority',{
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })

    this.middlewares();
    this.routes();
  }
  middlewares(){
    this.server.use(express.json());

  }
  routes(){
    this.server.use(routes);
  }
}

export default new App().server;