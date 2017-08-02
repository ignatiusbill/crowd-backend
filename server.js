import express from 'express';
import morgan from 'morgan';
import mongoose from 'mongoose';
import router from './router';

mongoose.connect('mongodb://ignatiusbill:9PCYZFI5jKXR0M4g@ds129013.mlab.com:29013/crowd-mongodb', { useMongoClient: true });

const app = express();

app.use(morgan('combined'));
app.use('/v1', router);

const server = app.listen(8000, () => {
  const { address, port } = server.address();
  console.log(`Listening at http://${address}:${port}`);
});
