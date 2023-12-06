import express from "express";
import { appRouter } from "./routes";
import { enableCors } from "./plugins";

export const app = express();

const ACCEPTED_ORIGINS = [
	"http://localhost:5173",
	"http://localhost:4173",
	process.env.FRONT_BASE_URL,
];

enableCors(app, ACCEPTED_ORIGINS);

app.use(appRouter);
