import React from 'react';
import { connect } from 'react-redux';
import { addToDo } from '../actions/index';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


let AddToDo = ({dispatch}) => {
    console.log({dispatch});
    let input;
    return(
        <Form onSubmit = {e => {
            e.preventDefault();
            // if(input.value.trim()){
            //     console.log("value",input.value);
            //     return;
            // }
            console.log("value",input.value);
            dispatch(addToDo(input.value));
            input.value='';
        }}> 
           <Form.Group controlId="formBasicEmail">
                <InputGroup>
                    <Form.Control
                        type="text"
                        placeholder="Enter an item"
                        ref={node => {
                        input = node;
                        }}
                    />
                    <InputGroup.Append>
                        <Button type="submit">Add</Button>
                    </InputGroup.Append>
                </InputGroup>
            </Form.Group>
        </Form>
    )
}

AddToDo = connect()(AddToDo);
export default AddToDo;