const mongoose = require('mongoose');
mongodbURI="mongodb+srv://ruvidu:ruvidurox17321@expensetracker.8yjqq.mongodb.net/expenseTracker?retryWrites=true&w=majority"
mongoose.connect(mongodbURI,{ useNewUrlParser: true,useUnifiedTopology: true});

const dbObject = mongoose.connection

dbObject.on('connected' , ()=>{
    console.log("DB connection Successfull")
})

dbObject.on('error', ()=> {
    console.log('DB connection failed')
})

module.exports = mongoose