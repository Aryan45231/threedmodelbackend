const mongoose = require("mongoose")

const ThreeDModels = new mongoose.Schema({
    uploadername:{
        type:String
    },
    modelname:{
        type:String
    },
    file:{
        type:String
    }
})
  const dataModel = mongoose.model("threeDModel" , ThreeDModels)
//  const apz= async()=>{
//     const data = await   dataModel.find()
//     console.log(data)
//  }
//  apz()
  module.exports=dataModel