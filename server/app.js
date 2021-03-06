const express = require('express');
const app = express();
const cors = require('cors');
var routes = require('./routes/routes');
const mongoose = require('mongoose');
require('dotenv').config();


const port = 5000;


app.use(cors());
app.use(express.json());
app.use('/',routes);

const URI=process.env.URI

mongoose.connect(URI,{ useNewUrlParser:true,useUnifiedTopology:true })
    .then(()=>console.log("Connected"))
    .catch(err=>console.log(err.message));
const connection = mongoose.connection;
connection.once('open',()=>{
    console.log("MongoDB connected successfully.")
})


app.listen(port,'127.0.0.1',()=>console.log(`Server running on port ${port}`));
