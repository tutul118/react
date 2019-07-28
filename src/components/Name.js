import React from 'react';

const Name = (props) => {
    console.log(props)
    return(
        <div>
         <h1>Hello {props.names}</h1> 
     
        </div>
    )
}

export default Name;
