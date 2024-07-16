import mongoose from "mongoose";

const uri = process.env.MONGODB_URI as string;

export const ConnectDB = async () => {
  await mongoose.connect(uri);
  console.log("DB Connected");
};

// const options = {};
//
// let client: MongoClient;
// let clientPromise: Promise<MongoClient>;
//
// if (!process.env.MONGODB_URI) {
//   throw new Error("Please add your Mongo URI to .env.local");
// }
//
// client = new MongoClient(uri, options);
// clientPromise = client.connect();
// console.log("connected");
// export default clientPromise;
