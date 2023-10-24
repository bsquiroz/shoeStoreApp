import "dotenv/config";
import { MongoClient } from "mongodb";
export const client = new MongoClient(process.env.MONGO_URI);

export const connectClient = async () => {
	try {
		await client.connect();
		console.log("connectado a la base de datos");
	} catch (error) {
		console.log(error);
	}
};

const challengeDB = client.db("challenge");

export const productsCollection = challengeDB.collection("products");
export const usersCollection = challengeDB.collection("users");
