let express = require("express")
let fs = require("fs")
const productController = express.Router()

let products = fs.readFileSync(`${__dirname}/../data/products.json`)
let pro = JSON.parse(products)

productController.get("/", (req,res)=>{
    res.send(pro)
})

productController.get("/", (req,res)=>{
    
    const { id,tag,color,size } = req.query;
    
    let results = pro.filter((p)=>{
        if(id)
        {
            return p.id ===parseInt(id)
        }
        if(tag)
        {
        return p.tag === tag
        }
        if(color)
        {
            return p.color === (color)
        }
        if(size)
        {
            return p.size === size
        }
        return true
    })
    
    res.send(results)
})


productController.get("/:id", (req,res)=>{


    let { id } = req.params

    let filter = pro.filter((el)=>{
        return el.id === parseInt(id)
    })

    res.send(filter)

})

productController.delete("/:id", (req,res)=>{

    let { id } = req.params

    let filter = pro.filter((el)=>{
        return el.id !== parseInt(id)
    })

    fs.writeFileSync(`${__dirname}/../data/products.json`, JSON.stringify(filter), {encoding : "utf-8"})
    res.sendStatus(201)

})


productController.post("/", (req,res)=>{

    let data = req.body

    let newId = Number(pro[pro.length-1].id) + 1
    let newData = {
        ...data,
        id : newId
    }

    pro.push(newData)

    fs.writeFileSync(`${__dirname}/../data/products.json`, JSON.stringify(pro), { encoding : "utf-8" })
    res.sendStatus(201)

})



module.exports = productController