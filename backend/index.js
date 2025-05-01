import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import connectDB from './utils/db.js'
import movieRoute from './routes/movieRoute.js'
import path from 'path'
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, '../.env') });

connectDB()
const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}))

app.use('/api/v1/movies', movieRoute);

app.use(express.static(path.join(__dirname, "../frontend/dist")));
app.get('*rest', (_, res) => {
    res.sendFile(path.resolve(__dirname, "../frontend", "dist", "index.html"))
})

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server is running on ${process.env.PORT}`)
})