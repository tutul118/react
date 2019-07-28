import React from 'react';
import Counter from './Counter'


export default class Count extends React.PureComponent{


    render(){
        return(
            <div>
            <h1>COUNT</h1>
            <Counter/>
            </div>
        )
    };

}