import React from 'react';
import Cats from './Cats'

export default class Article extends React.PureComponent{
    render(){
        return(
            <div>
                <h1>CAT</h1>
             <Cats/>
            </div>            
        )
    }
}