import express from 'express';
import path from 'path';
import morgan from 'morgan';
import mongoose from 'mongoose';
import router from './router';

mongoose.connect('mongodb://ignatiusbill:9PCYZFI5jKXR0M4g@ds129013.mlab.com:29013/crowd-mongodb', { useMongoClient: true });

const app = express();

app.use(morgan('combined'));
app.use('/v1', router);
app.use('/static', express.static(path.join(__dirname, '/assets/sounds')))
app.set('port', process.env.PORT || 3000);

const server = app.listen(app.get('port'), () => {
  console.log('Node app is running on port ', app.get('port'));
});
