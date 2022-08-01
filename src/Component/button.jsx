function Button ( {quantity,del,id,decre,incre} ){


    return (
        <div style={{marginTop:"20px",marginLeft:"60px"}}>
            <button  onClick={()=>incre(id)}>+</button>&nbsp;&nbsp;
            <span>{quantity}</span>&nbsp;&nbsp;
            <button disabled={quantity===1} onClick={()=>decre(id)} >-</button>
            <button onClick={()=>del(id)}>Del</button>
        </div>

    )
}
export {Button}