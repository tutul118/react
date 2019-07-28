import React from 'react';

export default class Cats extends React.PureComponent{

    constructor(props) {
        super(props)
    
        this.state = {
          message:'click'   
        }
    }
    
   changeMessage(){
       this.setState({
           message:'The cat is a small carnivorous mammal. It is the only domesticated species in the family Felidae and often referred to as the domestic cat to distinguish it from wild members of the family.'
       })
   }

    render(){
        return(
            <div>
                <div>Cats-{this.state.message}</div>
               <button onClick={() =>this.changeMessage()}>OPEN</button> 
            </div>
        )
    }

}