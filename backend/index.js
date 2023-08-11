const userModel = require('./db/config');

const express = require('express')

const app = express();
app.use(express.json())

// Route start from here 

app.post('/register', (req, res)=>{
    const userData = req.body;
    const data = new userModel(userData);
    data.save().then(()=>{
        res.json({msg:"Data save sucessfull", userexist:true})
    })
    console.log(userData);
    res.json("DATA AAYA ");
})

app.listen(7000, ()=>{
    console.log("http:/localhost:7000");
})