let express = require("express")
let userContoller = require("./controller/users.controller")
let productController = require("./controller/products.controller")

let app = express()
app.use(express.json())

app.use("/users", userContoller)
app.use("/products", productController)

app.listen(8000, ()=>{
    console.log("running")
})