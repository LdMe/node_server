import mongoose from 'mongoose';
const host = process.env.MONGODB_HOST || 'mongo-petanca';
const port = process.env.MONGODB_PORT || 27017;
const db = process.env.MONGODB_DB || 'petanca';
const MONGODB_URI = `mongodb://${host}:${port}/${db}`;

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Conexión exitosa a MongoDB'))
  .catch((error) => console.error('Error al conectarse a MongoDB: ', error));

export default mongoose;