import React from 'react';
import Search from './Search';

const Navigate =()=>{
    return(
        <div className="nav-bar">
<ul>
    <li className= "nav">Home</li>
    <li className= "nav">Profile</li>
    <li className= "nav">Contact</li>
     <li>
         <Search/>
     </li>
</ul>
        </div>
    )
}

export default Navigate;