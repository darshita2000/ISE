const mongoose = require("mongoose");

const mongoURL = 'mongodb+srv://darshinishi2000:Rohit%4045@cluster0.zr6yzyx.mongodb.net/mern_pizza'

mongoose.connect(mongoURL,{useUnifiedTopology:true, useNewUrlParser:true});

const db = mongoose.connection;
db.on('connected' ,()=>{
    console.log('Mongo DB connection successful');
})
db.on('error' ,()=> {
    console.log('Mongo DB connection failed');
});

module.exports = mongoose