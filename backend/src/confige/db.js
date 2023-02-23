const mongoose=require("mongoose");

const connect = () => {
    return mongoose.connect(
        "mongodb+srv://love:love@cluster0.uizuy7y.mongodb.net/DaWai-Wala?retryWrites=true&w=majority"
    )
}

module.exports=connect;