import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './App.css';
import AddToDo from './Components/AddTodo'
import ToDoListContainer from './containers/ToDoListContainer';


function App() {
  return (
    <Container>
      <Row className="row">
        <Col xs={12} md={8}>
          <h3>React App</h3>
          <AddToDo />
          <ToDoListContainer />
        </Col>

      </Row>
    </Container>
  );
}

export default App;
