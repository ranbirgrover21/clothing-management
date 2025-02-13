import express, { Request, Response } from 'express';
import mongoose from 'mongoose';

const app = express();
const port = 5001;

mongoose.connect('mongodb://localhost:27017/mydatabase')
.then(() => console.log("Connected to MongoDB"))
.catch((err) => console.log("Failed to connect to mongoDB", err));

app.get('/api/message', (req: Request, res: Response) => {
  res.send('Backend is running!');
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
