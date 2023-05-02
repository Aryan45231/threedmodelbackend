// IMPORTING LIBERARIES
const http = require("http")
const express = require("express")
const app = express()
const cors = require("cors")
const server = http.createServer(app)
const dotenv = require("dotenv")
const multer = require("multer")
require("./Services/models/Connection")
const dataModel = require("./Services/models/ThreeDModels/ThreeDModels_Model")
const upload = multer({dest:"./upload"})
// USING NECESSARY REQUIREMENTS
dotenv.config()
  app.use(cors({
    origin: process.env.FrontEndUrl,
    methods: ["GET", "POST  "]
}))
app.use(express.json())
app.use(express.urlencoded({extended:true , limit:"50mb"}))
app.use(express.static("./upload"))

app.post("/uploadmodel", upload.single("modelFile") ,(req,res)=>{
   try{
    res.status(200).json({
       status:true,
       filename :req.file.filename
    })
   }catch(err){
      res.status(400).json({
        error:"filea already exist"
      })
   }
})
app.get("/" , (req, res)=>res.send("hello workd"))
app.post("/savemodeldata", async (req,res)=>{
   const data  =  new dataModel({...req.body})
   await  data.save()
   res.status(200).json({
    status:true
   })
})
app.get("/getmodledata", async (req,res)=>{
  const data = await dataModel.find()
  res.status(200).json({data})
})
// STARTING
const PORT = process.env.PORT
server.listen(PORT, ()=>{
  console.log(`server is running at ${PORT}`) 
})

