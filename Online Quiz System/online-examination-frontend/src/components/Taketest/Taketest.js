import React from "react";
import { Redirect } from "react-router-dom";
import { Jumbotron, Image, Row, Col, Button, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "./Taketest.css";
import { AuthContext } from "../../App";

class Taketest extends React.Component {
  render() {
    return (
      <AuthContext.Consumer>
        {(context) => {
          if (!context.isLoggedIn) {
            return <Redirect to="/login" />;
          }
          return (
            <div className="mainDiv">
              <Jumbotron className="design-layout" id="row1">
                <Row lg={3}>
                  <Col>
                    <Image className="allImg" src="practice.png" />{" "}
                  </Col>
                  <Col className="col11">
                    <h1 className="headingTest">ADS</h1>
                    <p>
                      Practice as much as you want.
                      <br />
                      <p className="paraQues">10 ques</p>
                    </p>
                  </Col>
                  <Col className="ml-150">
                    <Nav>
                      <LinkContainer to="/practice">
                        <Nav.Link><Button>Take Test</Button></Nav.Link>
                      </LinkContainer>

                      <LinkContainer to="/practiceresult">
                        <Nav.Link><Button className="btnSeeScores">See Scores</Button></Nav.Link>
                      </LinkContainer>
                    </Nav>
                  </Col>
                </Row>
              </Jumbotron>

              <Jumbotron className="design-layout" id="row1">
                <Row lg={3}>
                  <Col>
                    <Image className="allImg" src="practice.png" />{" "}
                  </Col>
                  <Col className="col11">
                    <h1 className="headingTest">Cloud Computing</h1>
                    <p>
                      Practice as much as you want.
                      <br />
                      <p className="paraQues">10 ques</p>
                    </p>
                  </Col>
                  <Col className="ml-150">
                    <Nav>
                      <LinkContainer to="/practice">
                        <Nav.Link><Button>Take Test</Button></Nav.Link>
                      </LinkContainer>

                      <LinkContainer to="/practiceresult">
                        <Nav.Link><Button className="btnSeeScores">See Scores</Button></Nav.Link>
                      </LinkContainer>
                    </Nav>
                  </Col>
                </Row>
              </Jumbotron>

              <Jumbotron className="design-layout" id="row1">
                <Row lg={3}>
                  <Col>
                    <Image className="allImg" src="practice.png" />{" "}
                  </Col>
                  <Col className="col11">
                    <h1 className="headingTest">ACN</h1>
                    <p>
                      Practice as much as you want.
                      <br />
                      <p className="paraQues">10 ques</p>
                    </p>
                  </Col>
                  <Col className="ml-150">
                    <Nav>
                      <LinkContainer to="/practice">
                        <Nav.Link><Button>Take Test</Button></Nav.Link>
                      </LinkContainer>

                      <LinkContainer to="/practiceresult">
                        <Nav.Link><Button className="btnSeeScores">See Scores</Button></Nav.Link>
                      </LinkContainer>
                    </Nav>
                  </Col>
                </Row>
              </Jumbotron>
             </div>
          );
        }}
      </AuthContext.Consumer>
    );
  }
}

export default Taketest;
