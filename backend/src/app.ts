import express from "express";
import { appRouter } from "./routes";
import { enableCors } from "./plugins";

export const app = express();

const ACCEPTED_ORIGINS = [
	"http://localhost:5173",
	"http://localhost:4173",
	"https://shoe-store-app-two.vercel.app",
];

enableCors(app, ACCEPTED_ORIGINS);

app.use(appRouter);
