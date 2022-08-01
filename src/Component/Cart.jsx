import { useState } from "react"
import {Product} from './Product.jsx'
import {Total} from './Total.jsx'

function Cart(props){
    

    let [data,setdata] = useState(props.item)
    // console.log("data is -->", data.quantity)

    let incre = (id) => {

        let updated = data.map((el)=>{
            if(el.id===id)
            {
                return {
                    ...el,
                    quantity : el.quantity+1,
                }
            }
            else{
                return el;
            }
        }) 
        setdata(updated)
    }

    let decre = (id) => {

        let updated = data.map((el)=>{
            if(el.id===id && el.quantity>1)
            {
                return {
                    ...el,
                    quantity : el.quantity-1,
                }
            }
            else{
                return el;
            }
        }) 
        setdata(updated)
    }

    let del = (id) => {
        let filtered = data.filter(el => el.id!==id)
        setdata(filtered)
    }
    

    return (
       <>
            {
                data.map((item)=>(
                    <Product del={del} decre={decre} incre={incre} item={item} />
                ))
            }
            <Total item={data} />
       </> 
    )
    
}

export {Cart}