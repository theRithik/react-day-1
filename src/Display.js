import React from 'react';

const Display =(props)=>{
    const renderMenu=props.product.map((item)=>{
        return(
        
            <div className='container' key={item.id}>
            <h3>{item.name}</h3>
            </div>
            
        )
    })
 return(
    <>
    {renderMenu}
    </>
 )
    
   
}
export default Display;