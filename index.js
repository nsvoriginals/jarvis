import express from 'express'

const port=3000
const app=express()

app.use(express.json())

app.get('/get',(req,res)=>{
    res.json({"message":"Hi there testing ec2"})
})

app.listen(port,()=>{
    console.log("server is runnning")
})