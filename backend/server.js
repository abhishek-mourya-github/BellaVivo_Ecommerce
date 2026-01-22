import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectToDB from './database/database.js';
import connectCloudinary from './config/cloudinary.js';
import userRoutes from './routes/user.routes.js'
import productRoutes from './routes/product.route.js';


// app config
const app = express();
const PORT = process.env.PORT || 3000;


// database connection
connectToDB();
connectCloudinary();


// middleware
app.use(express.json());
app.use(cors());


// api endpoints
app.use('/api/user', userRoutes);
app.use('/api/product', productRoutes);


app.get('/', (req, res) => {
    res.send("API working");
})


app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`)
})