import { MongoHelper } from '../helpers/mongoose-helper';
import env from '../config/env';

// database connection
MongoHelper.connect(env.mongoUrl)
  .then(() => console.log(`🚀 mongodb is connected`))
  .catch(() => console.log('Error String to connect'));

// item
const quoteItem = {
  description: "Errei mais de nove mil arremessos na minha carreira. Perdi quase 300 jogos. Vinte e seis vezes fui escolhido para fazer o arremesso final e falhei. Falhei vezes e mais vezes na minha carreira. E foi por causa disso que me tornei um VENCEDOR!",
  author: "Michael Jordan",
  createdAt: new Date(),
  updatedAt: new Date()
};

const add = async (item: object, collection: string): Promise<void> => {
  const quoteCollection = await MongoHelper.getCollection(collection);
  await quoteCollection.insertOne(item);
};

add(quoteItem, 'quotes');
