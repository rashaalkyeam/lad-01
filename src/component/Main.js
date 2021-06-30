import React, { component } from 'react'
import Home from './Home'
import Horned from './Horned.json';
import { Form, Button } from 'react-bootstrap/';
import FormInfoModal from './FormInfoModal';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            horns:'',
            showModal: false
        }
    }



    handleClose = () =>{
        this.setState({
            showModal:false
        })
    }
    submitForm = (event) =>{
        event.preventDefault();
        this.setState ({
            
            horns: event.target.horns.value,
            showModal:true
        })}
    render() {
        return(
            <div>
                <Form onSubmit={this.submitForm}>
                    <Form.Group aria-label="Default select example">
                        <Form.Label>choose your favorite cat breed</Form.Label>
                        <Form.Control as='select' name='horns'>
                        <option>All </option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="100">wow...</option>
                        </Form.Control>
                    </Form.Group>
                    <Button  variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>


        {Horned.map((item)=>{
            return(
            <Home Home title={item.title} description={item.description} image_url={item.image_url} />
            )
        })} 
        </div>
    
        )
       
    }
}

export default Main;