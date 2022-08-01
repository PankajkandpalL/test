import {ProductItem} from './ProductItem.jsx'
import {Button} from './button.jsx'

function Product({item,decre,del,incre}){
    
    // console.log(incre)

    return (
        <div style={
            {
            display:"flex",
             border:"1px solid",
              width:"40%",
               margin:"auto",
              borderRadius:"10px",
              padding:"1rem",
               marginBottom:"20px"
               }
            }
               >
            <ProductItem name={item.name} price={item.price} />
            <Button del={del} decre={decre} incre={incre} id={item.id} quantity={item.quantity} />
        </div>
    )



}

export {Product}