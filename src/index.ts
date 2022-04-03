import { MongoHelper } from './helpers/mongo-helper';
import env from './config/env';

MongoHelper.connect(env.mongoUrl)
  .then(() => console.log(`🚀 mongodb is connected`))
  .catch(() => console.log('Error String to connect'));

