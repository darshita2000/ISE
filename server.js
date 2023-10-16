const express = require("express");
const Pizza = require("./client/models/pizzaModel");
const db = require("./db");

const app = express();
app.use(express.json());
const path = require('path');


const pizzasRoute = require('./client/routes/pizzasRoute')
const  userRoute = require('./client/routes/userRoute')
const ordersRoute = require('./client/routes/ordersRoute')

app.use('/api/pizzas/',pizzasRoute)
app.use('/api/users/',userRoute)
app.use('/api/orders/',ordersRoute)


    app.use( express.static(path.join(__dirname,'./client/build')));

    app.get('*',(req,res)=>{
        res.sendFile(path.join(__dirname , '/client/build/index.html'));
    });

/*app.get("/",(req,res)=>{
    res.send("Server working");
}); */






const port = process.env.PORT || 8000;
app.listen(port,()=>`Server running on port`);