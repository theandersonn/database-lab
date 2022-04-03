import { MongoHelper } from '../helpers/mongo-helper';

const add = async (item: object, collection: string): Promise<void> => {
  const quoteCollection = await MongoHelper.getCollection(collection);
  await quoteCollection.insertOne(item);
};

export default add;
