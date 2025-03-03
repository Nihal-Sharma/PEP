const mongoose = require('mongoose');
url = "mongodb+srv://ggwp69:ggwp69@cluster0.ll6ot.mongodb.net/medconnect?retryWrites=true&w=majority&appName=Cluster0"


function connectMongoDb(){
    return mongoose.connect(url).then(()=>{console.log("Database Connected")}).catch((err)=>{console.log(err)})
}

module.exports = connectMongoDb