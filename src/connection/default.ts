import mongoose from 'mongoose';
async function connect() {
  await mongoose.connect(process.env.MONGODB_URI as string);
}

connect()
  // eslint-disable-next-line no-console
  .then(response => console.log(response))
  // eslint-disable-next-line no-console
  .catch( err => console.log(err));

export default mongoose;