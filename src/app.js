import express from 'express';
import dotenv from 'dotenv';
import configMiddlewares from '@middlewares/index.js';

//Debe cargar primero para asegurarse utilizar las variables de entorno
dotenv.config();
const app = express();

//Middlewares
configMiddlewares(app);

//Database
const connectToMongoDB = async () => {
  try {
    const mongoURI = process.env.MONGO_URI;
    await mongoose.connect(mongoURI);
    console.log('Se conecto a MongoDB');
  } catch (err) {
    console.log('Hubo un error al conectar a MongoDB', err);
  }
};
connectToMongoDB();

export default app;
