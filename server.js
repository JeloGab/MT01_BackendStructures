import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';  
import userRoutes from './routes/userRoutes.js';

dotenv.config();
const app = express();

app.use(express.json());
app.use('/api/students', userRoutes);
app.use(cors({
    origin: 'http://localhost:3000',
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
}));

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to MongoDB');
    app.listen(process.env.PORT || 5000, () =>
        { console.log(`Server running on port ${process.env.PORT || 5000}`)
});
}).catch(err => console.log("failed",err))