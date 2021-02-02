const express = require('express')
const mongoose = require('mongoose')

const users = require('./routes/api/users')
const profile = require('./routes/api/profile')
const posts = require('./routes/api/posts')

const app = express();
const db = require('./config/keys').mongoURI;
mongoose
    .connect(db,{ useUnifiedTopology: true,useNewUrlParser: true })
    .then(()=>{console.log('DATABASE CONNECTED')})
    .catch(()=>{console.log(`DATABASE ERROR -----> ${err}`)})
//----------------------
app.get('/',(req,res)=>{
    res.send('Hello')
})

app.use('/api/user',users)
app.use('/api/profile',profile)
app.use('/api/post',posts)





//-----------------------
const port = process.env.PORT||5000;
app.listen(port,()=>{
    console.log(`Server Started on ${port}`)
})