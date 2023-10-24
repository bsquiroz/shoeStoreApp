import { usersCollection } from "../../database/config";
import { ObjectId } from "mongodb";

export class Userservices {
	async findAll() {
		return await usersCollection.find().toArray();
	}

	async findById(user_id: string) {
		return await usersCollection.findOne({
			_id: new ObjectId(user_id),
		});
	}
}
