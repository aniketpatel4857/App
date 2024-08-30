const mongoose= require("mongoose");


mongoose.connect("mongodb+srv://aniketpatel485772:aniket@cluster0.svxmrel.mongodb.net/khaatabookn19" ).then(()=>{
    console.log("MongoDb Connected")
});

module.exports = mongoose.connection;