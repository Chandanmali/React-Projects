const express = require("express")
const mongoose = require("mongoose")
const { userModel } = require("./Model/model.js")
const app = express()
const PORT = 3000
const jwt = require("jsonwebtoken")
const JWT_SECRETE = "chandanmali@2111@123"
const cors = require("cors")

app.use(cors())
app.use(express.json())  //middleware
mongoose.connect("mongodb+srv://chandanmali21117_db_user:chandan21117@cluster0.hzefken.mongodb.net/crypto-app").then(() => console.log("Mongodb conneted successfully")).catch(() => console.log("mongoDB connection faild"))

app.post('/signup', async(req, res) => {
    const name = req.body.name
    const password = req.body.password
    const email = req.body.email

    await userModel.create({
        name: name,
        password: password,
        email: email
    })

    res.json({msg: "signup done successfully"})
})

app.post("/login", async(req, res) => {
    const name = req.body.name
    const password = req.body.password

     const response = await userModel.findOne({
        name: name,
        password: password
     })
     console.log(response)

     if(response)
     {
        const token = jwt.sign({
            userId: response._id
        }, JWT_SECRETE)

        res.json({token: token})
     }

     else{
        res.json({msg: "user not found"})
     }
})

app.listen(PORT, () => {
   console.log("server running at ", PORT)
})