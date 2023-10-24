import express from "express";
import { appRouter } from "./routes";
import { enableCors } from "./plugins";

export const app = express();

const ACCEPTED_ORIGINS = [
	"http://localhost:5173",
	"https://shoe-store-omega.vercel.app",
];
enableCors(app, ACCEPTED_ORIGINS);

app.use(appRouter);
