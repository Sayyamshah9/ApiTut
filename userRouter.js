const userRouter = require('express').Router()
const userSchema = require('./userSchema')

userRouter.post('/', async(req,res)=>{


    const saveUser = await new userSchema({

        name:req.body.name,
        phn:req.body.phn

    })

    try{
        const dataSaved = saveUser.save()
        res.json(dataSaved)
    }catch(err){
        res.json({message:err})
    }

})

module.exports = userRouter