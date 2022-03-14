const express = require('express')
const app = express()
const mongoose = require('mongoose')

const port = process.env.PORT || 5000


//MIDDLEWARE
app.use(express.json())
app.use('/user', require('./userRouter'))


//ROUTES
app.get('/', (req,res)=>{
    res.json({msg: "Hei Working!!!"})
})


app.listen(port, ()=>{
    console.log("Server is Up and running!!!")
})


//DB Connection
try{

    mongoose.connect("mongodb+srv://crudUser1:crudUser1@sayyam.1shvm.mongodb.net/MongoTut?retryWrites=true&w=majority", 
        console.log("Database Connected")
    )

}catch(err){
    console.log(err)
}