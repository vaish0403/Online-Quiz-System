import React from "react";
import { Form, Button, Nav } from "react-bootstrap";
import "./Login.css";
import { LinkContainer } from "react-router-bootstrap";
import { Redirect } from "react-router-dom";
import { AuthContext } from "../../App";

const initialState = {
  email: "",
  password: "",
};

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...initialState };
  }

  handleChange(e) {
    const { id, value } = e.target;
    this.setState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  }
  onSubmit(context) {
    fetch("http://localhost:8000/api/auth/login", {
      method: "post",
      body: JSON.stringify(this.state),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(
        (result) => {
          if (result && result.length > 0) {
            this.setState(
              (prevState) => ({
                ...prevState,
              }),
              () => {
                let userObj = result[0];
                userObj.isActualTestGiven = userObj.isActualTestGiven === 1 ? true : false;
                userObj.isPurchased = userObj.isPurchased === 1 ? true : false;
                context.setAuth({ isLoggedIn: true, user: userObj });
                this.props.history.push("/");
              }
            );
          } else {
            alert("Incorrect email or password!.");
          }
        },
        (error) => {
          console.error(error);
        }
      );
  }

  render() {
    const { email, password } = this.state;
    return (
      <AuthContext.Consumer>
        {(context) => {
          if (context.isLoggedIn) {
            return <Redirect to="/" />;
          }
          return (
            <div className="container-fluid">
              <div className="d-flex justify-content-center">
                <Form className="formLogin">
                  <h2 className="display-3">Login</h2>
                  <Form.Group>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      id="email"
                      value={email}
                      onChange={(e) => this.handleChange(e)}
                      required
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      id="password"
                      value={password}
                      onChange={(e) => this.handleChange(e)}
                      required
                    />
                  </Form.Group>
                  <hr />
                  <LinkContainer to="/register">
                    <Nav.Link className="link-text">
                      CREATE AN ACCOUNT? SIGN UP
                    </Nav.Link>
                  </LinkContainer>
                  <hr />

                  <Button
                    style={{
                      color: "white",
                      background: "#000066",
                      border: "0px #000066",
                    }}
                    className="float-right"
                    type="button"
                    onClick={() => {
                      this.onSubmit(context);
                    }}
                    disabled={!(email.length > 0 && password.length > 0)}
                  >
                    Submit
                  </Button>
                </Form>
              </div>
            </div>
          );
        }}
      </AuthContext.Consumer>
    );
  }
}

export default Login;
