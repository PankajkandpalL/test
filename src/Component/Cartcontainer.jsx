import {Cart} from './Cart.jsx'
// import {Total} from './Total.jsx'

function CartContainer(){


    let item = [
        {
            id:1,
            name:"Pastry",
            price:35,
            quantity:1,
        },
        {
            id:2,
            name:"Biryani",
            price:100,
            quantity:1,
        },
        {
            id:3,
            name:"Momo",
            price:70,
            quantity:1,
        },
    ] 

    return (
        <>
        <Cart item={item} />
        {/* <Total /> */}
        </>
    )
}

export {CartContainer}