let express = require("express")
let fs = require("fs")
const userContoller = express.Router()
let usersInfo = require("../data/users.json")

// let users = fs.readFileSync(`${__dirname}/../data/users.json`,{encoding : "utf-8"})
// let usersInfo = JSON.parse(users)


userContoller.get("/", (req,res)=>{
    res.send(usersInfo)
})

userContoller.get("/:id", (req,res)=>{
    
    let { id } = req.params

    let filter = usersInfo.filter((el)=>{
        return el.id === parseInt(id)
    })

    res.send(filter)

})

userContoller.delete("/:id", (req,res)=>{
    
    let { id } = req.params

    let filter = usersInfo.filter((el)=>{
        return el.id !== parseInt(id)
    })

    fs.writeFileSync(`${__dirname}/../data/users.json`, JSON.stringify(filter), { encoding : "utf-8" })
    res.sendStatus(200)

})

userContoller.post("/", (req,res)=>{

    let data = req.body

    let newId = Number(usersInfo[usersInfo.length-1].id) + 1
    let newData = {
        ...data,
        id : newId
    }

    usersInfo.push(newData)
    console.log(usersInfo)

    fs.writeFileSync(`${__dirname}/../data/users.json`, JSON.stringify(usersInfo), { encoding : "utf-8" })
    res.sendStatus(201)

})

module.exports = userContoller