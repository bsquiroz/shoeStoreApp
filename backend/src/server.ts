import "dotenv/config";

import { connectClient } from "./database/config";
import { app } from "./app";

const PORT = process.env.PORT || 3002;

(async () => {
	try {
		await connectClient();
	} catch (error) {
		console.log(error);
	}
})();

app.listen(PORT, () => {
	console.log(`run server http://localhost:${PORT}`);
});
