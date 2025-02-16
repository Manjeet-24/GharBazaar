import React, { useState, useContext } from "react";
import "./login.css";
import { Container, Row, Col, Form, FormGroup, Button } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";  
import loginImg from "../assets/images/login.png";
import userIcon from "../assets/images/user.png";
import { AuthContext } from "../context/AuthContext";
import { BASE_URL } from "./../utils/config";



const Login = () => {
  const [credentials, setCredentials] = useState({
    email: undefined,
    password: undefined,
});

  const {dispatch} = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = e => {
    setCredentials(prev => ({
        ...prev,
        [e.target.id]: e.target.value
    }));
};

  const handleClick = async e => {
    e.preventDefault();

    dispatch({type: "LOGIN_START"});

    try {
     const res = await fetch (`${BASE_URL}/auth/login`, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(credentials),
      });

      const result = await res.json();
      if (!res.ok) alert(result.message);

      console.log(result.data);

      dispatch({type: "LOGIN_SUCCESS", payload: result.data});
      navigate("/");
    } catch (err) {
      dispatch({type: "LOGIN_FAILURE", payload: err.message });
    }
  };

  return (
    <section>
      <Container className="bg-red-200 flex justify-center items-center">
        <Row>
          <Col lg='8' className="m-auto">
            <div className="flex justify-center items-center">
              <div className="login__img">
                <img src={loginImg} alt="" />
              </div>
              <div className="login__form">
                <div className="user">
                  <img src={userIcon} alt="" />
                </div>
                <h2>Login</h2>
                <Form onSubmit={handleClick}>
                  <FormGroup>
                    <input type="email" placeholder="Email" required id="email" onChange={handleChange} className="m-2"/>
                  </FormGroup>
                  <FormGroup>
                    <input type="password" placeholder="Password" required id="password" onChange={handleChange} className="m-2"/>
                  </FormGroup>
                  <Button className="text-black bg-red-600 p-2 rounded-xl m-2" type="submit">Login</Button>
                </Form>
                <p className="text-black">Don't have an account? <Link to="/register" className="text-black">Create</Link></p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Login;
