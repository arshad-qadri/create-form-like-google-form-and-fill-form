const express = require('express');
const cors = require('cors');
const router = require('./routes');
const connectDB = require('./configs');

const app = express();

connectDB()

app.use(express.json())
app.use(cors())
app.use("/api", router)


const port =5000
app.listen(port, ()=>{
    console.log(`Server listening on on port ${port}`);
})