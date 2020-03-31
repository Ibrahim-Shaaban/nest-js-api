import * as mongoose from 'mongoose';

export const ItemShcema = new mongoose.Schema({
  name: String,
  descrition: Number,
  quantity: Number,
});
