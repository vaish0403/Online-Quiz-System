import React from 'react';
import "./Main.css";
import { Container, Row,Col,Image,Navbar, Button,Nav } from 'react-bootstrap';

import {LinkContainer} from 'react-router-bootstrap';

class Main extends React.Component{
  render(){
    return(
        <Container>
        <Row lg={2}>
          <Col><br/><br/>
            <Image src="image2.jpg" />
          </Col>
          <Col>    
            <h1><br/>Test</h1>
            <br/>
                <Image src="icon1.png"/>
                <Navbar.Brand>
                <p>Take the test online anytime, anywhere</p>
                </Navbar.Brand>
            <LinkContainer to="/taketest">
              <Nav.Link>
                <Button style={{ margin:"0px 20px 0px 0px" , color: "white", background: "#000066", border: "0px #000066"}} size="lg">TAKE A TEST</Button>
            </Nav.Link>
            </LinkContainer>
          </Col>
          </Row>
        </Container>
    )};
}

export default Main;