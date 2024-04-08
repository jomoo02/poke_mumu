import mongoose from 'mongoose';

export async function connectMongoose() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('db connect');
  } catch (error) {
    console.error('db connect erorr!', error);
  }
}

export async function disconnectMongoose() {
  try {
    await mongoose.disconnect();
    console.log('db disconnect');
  } catch (error) {
    console.error('db disconnect erorr!', error);
  }
}
