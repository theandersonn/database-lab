import mongoose, { Collection } from 'mongoose';

export const MongoHelper = {
  client: mongoose,
  uri: null,

  async connect(uri: string): Promise<void> {
    this.uri = uri;
    this.client = await mongoose.connect(uri);
  },

  async disconnect(): Promise<void> {
    await this.client.disconnect();
    this.client = null;
  },

  async getCollection(name: string): Promise<Collection> {
    if (!this.client) {
      await this.connect(this.uri);
    }
    return this.client.connection.collection(name);
  }
}
