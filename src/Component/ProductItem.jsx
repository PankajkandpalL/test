function ProductItem({name,price}){

    // console.log("Price is :" + price)

    return (
        <div style={ { display:"flex", gap:"10px", alignItems:"center" } } >
            <h3>{name}</h3>
            <h2 style={{fontSize:"18px", color:"red" }}> <span>Rs</span> {price}</h2>
        </div>
    )
}

export {ProductItem}