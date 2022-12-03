const express=require('express')
const app=express()
const dbConnect=require('./mongodb')
const mongodb=require('mongodb')

app.use(express.json())

app.delete('/:RoutePath',async(req,res)=>{
    let data=await dbConnect()
    let result=await data.deleteOne({_id:new mongodb.ObjectId(req.params.RoutePath)})
 
    res.send(result)
})

app.listen(5000)