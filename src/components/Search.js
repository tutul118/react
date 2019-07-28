import React from 'react'
import {Form,FormControl,Button} from 'react-bootstrap';

export default class Search extends React.PureComponent {
constructor(props) {
    super(props)

    this.state = {
         title: 'search it out'
    }
}


    render() {
        return (
            <div>
               <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-light">Search</Button>
    </Form>
            </div>
        )
    }
}



