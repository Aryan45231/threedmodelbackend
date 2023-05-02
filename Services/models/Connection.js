const mongoose = require("mongoose")
const connect = async ()=>{
    try{
       const data = await mongoose.connect("mongodb+srv://aryan78321:aryan@models.1tbvbvv.mongodb.net/?retryWrites=true&w=majority")
        console.log("connection successful")

    }catch(err){
        console.log(err)
    }
}
connect()
