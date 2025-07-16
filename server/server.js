import express from 'express'
import cors from 'cors'
import 'dotenv/config'

const app=express();
const port=process.env.PORT || 3000;

//middleware 
app.use(express.json())
app.use(cors())

//API routes
app.get('/',(req,res)=>{
    res.send("server is live!")
})

app.listen(port,()=>{
    console.log(`server is listening at port:${port}`)
})