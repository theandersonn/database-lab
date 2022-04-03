import { MongoHelper } from './helpers/mongo-helper';
import env from './config/env';

import add from './scripts/add';

MongoHelper.connect(env.mongoUrl)
  .then(() => console.log(`🚀 mongodb is connected`))
  .catch(() => console.log('Error String to connect'));

// criar item na coleção
const quoteItem = {
  description: "Errei mais de nove mil arremessos na minha carreira. Perdi quase 300 jogos. Vinte e seis vezes fui escolhido para fazer o arremesso final e falhei. Falhei vezes e mais vezes na minha carreira. E foi por causa disso que me tornei um VENCEDOR!",
  author: "Michael Jordan",
  createdAt: new Date(),
  updatedAt: new Date()
}

add(quoteItem, 'quotes');
