// import mongodb from 'mongodb';
// import express  from 'express';
// import cors from 'cors';
// import dotenv from 'dotenv';

// import demoRoute from './routes/demo.route.js';

const demoRoute = require('./routes/demo.route')
const express = require('express')
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors())
app.use(express.json())

app.use('/routes/demo', demoRoute);
app.use('*', (req, res) => res.status(404).json({error: "not found 404"}));

const uri = process.env.ATLAS_URI;

// const client = new mongodb.MongoClient(uri, { useNewUrlParser: true});
// client.connect(err => {
//   client.close();
// });
mongoose
  .connect(uri, {useNewUrlParser: true})
  .catch(e=>{
    console.error("connection err", e.message)
  })

app.listen(port, ()=>{
    console.log(`server is running on port: ${port}`)
})