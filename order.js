const express = require("express")
const app = express()
const redis = require("redis")


//pub
const publish = redis.createClient()
publish.connect()
publish.on("connect", () => {
    console.log("Connect success");
})

app.get("/order", (req, res) => {
    const order = [
        {
            productId: 1,
            price: 5000
        },
        {
            productId: 2,
            price: 10000
        }
    ]

   
    //Step - payment.js and sendmail
    publish.publish('ordersystem', JSON.stringify(order))


   res.json({
    status: 'success',
    message: 'Thank you!'
   }) 
})



app.listen(3000, ()=>{
    console.log("Server order is running on 3000");
})