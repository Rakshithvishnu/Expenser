import express from 'express'
import mongoose from 'mongoose';
import cors from 'cors'

const PORT = 4000;
const app = express();
app.use(cors);

mongoose.connect("mongodb+srv://rakshithvishnu5614:bhECwzufTHd4BTLs@expenser.2eclugk.mongodb.net/?retryWrites=true&w=majority")
.then(() => console.log("MongoDB connection is successfull"))
.catch((err) => console.error(err));

app.get('/', (req,res) => {
    res.send("hello world");
})

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
})