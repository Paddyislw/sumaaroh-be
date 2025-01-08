import express, { Request, Response } from 'express'
import mongoose from "mongoose";
import cors from "cors";
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes';
import weddingPreferenceRoutes from './routes/weddingPreferenceRoutes';

dotenv.config();

const app = express()

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGODB_CONNECTION_STRING as string).then(() => {
	console.log("Connected to MongoDB 🐘");
});

app.get("/health", (req: Request, res: Response) => {
	res.status(200).json({ message: "health OK!" });
});

app.use('/api', userRoutes);
app.use('/api', weddingPreferenceRoutes);

app.listen(PORT, () => {
	console.log(`App started on port ${PORT} 🎉`);
})