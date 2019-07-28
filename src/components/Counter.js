import React from 'react';

export default class Counter extends React.PureComponent {

    constructor(props) {
         super(props)

        this.state = {
             name: 'counting'
        }
    }
        changeName() {
            this.setState ({
             name:'counted'
            })
        }



    render() {
        return (
            <div>
                <button onClick={() =>this.changeName()}>{this.state.name}</button>
            </div>
        )
    };
}


