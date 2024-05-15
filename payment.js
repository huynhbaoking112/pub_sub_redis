const express = require("express")
const app = express()
const redis = require("redis")




const client = redis.createClient()
const subscribe = client.duplicate()
subscribe.connect();




//sub
subscribe.subscribe('ordersystem', message =>{
    console.log(message);
})


app.listen(3001, ()=>{
    console.log("Server payment is running on 3001");
})