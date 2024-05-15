const express = require("express")
const app = express()
const redis = require("redis")


//redis
const client = redis.createClient()
const subscribe = client.duplicate()
subscribe.connect()


subscribe.subscribe('ordersystem', (message)=>{
    console.log(message);
})


app.listen(3002, ()=>{
    console.log("Server sendEmail is running on 3002");
})