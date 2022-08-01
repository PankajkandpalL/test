function Total({item}){

    const total = item.reduce((acc,el)=>{
        return acc+(el.quantity*el.price)
    },0)

    return (
        <h1>{total}</h1>
    )
}


export {Total}