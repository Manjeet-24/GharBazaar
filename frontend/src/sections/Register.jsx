import React, { useState, useContext } from "react";
import "./login.css";
import { Container, Row, Col, Form, FormGroup, Button } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";  
import registerImg from "../assets/images/register.png";
import userIcon from "../assets/images/user.png";
import { AuthContext } from "../context/AuthContext";
import { BASE_URL } from "../utils/config";


const Register = () => {
  const [credentials, setCredentials] = useState({
    username: "",  
    email: "",
    password: "",
  });

  const {dispatch} = useContext(AuthContext);
  const Navigate = useNavigate();

  const handleChange = e => {
    setCredentials(prev => ({
        ...prev,
        [e.target.id]: e.target.value
    }));
};

  const handleClick =async e => {
    e.preventDefault();

    try {
      const res = await fetch (`${BASE_URL}/auth/register`, {
        method: "post",
        headers: {
          "content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });

      const result = await res.json();
      if (!res.ok) alert(result.message);
      
      dispatch({type: "REGISTER_SUCCESS", payload: result.user});
      Navigate('/login');

    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <section>
      <Container>
        <Row>
          <Col lg='8' className="m-auto">
            <div className="flex justify-center items-center bg-red-200">
              <div className="login__form">
                <div className="user">
                  <img src={userIcon} alt="" />
                </div>
                <h2>Register</h2>
                <Form onSubmit={handleClick}>
                  <FormGroup>
                    <input type="text" placeholder="Username" required id="username" onChange={handleChange} className="m-2"/>
                  </FormGroup>
                  <FormGroup>
                    <input type="email" placeholder="Email" required id="email" onChange={handleChange} className="m-2"/>
                  </FormGroup>
                  <FormGroup>
                    <input type="password" placeholder="Password" required id="password" onChange={handleChange} className="m-2"/>
                  </FormGroup>
                  <Button className="text-white bg-red-600 m-2 p-3 rounded-xl" type="submit">Create Account</Button>
                </Form>
                <p>Already have an account? <Link to="/login" >Login</Link></p>
              </div>
              <div className="login__img">
                <img src={registerImg} alt="" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Register;