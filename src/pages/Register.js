import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";


function Register() {
  // State variables to hold user input
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a user object with the form input values
    const userObj = {
      username,
      name,
      email,
      password,
    };
    console.log(userObj)
    const aa = `${process.env.REACT_APP_BACKEND_URL}/user/register`
    console.log(aa)

    // Send a POST request to the server to register the user
    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/user/register`, userObj)
      .then((res) => {
        if (res.data.status === 201) {
          alert(res.data.message); 
          window.location.href = '/login'
        } else {
          alert(res.data.message); 
        }
      })
      .catch((err) => {
        alert(err); // Display an error notification for request failures
      });
  };

  return (
    <div style={{ margin: "50px" }}>
      <h1 style={{ marginBottom: "20px" }}>Register</h1>
      <Form onSubmit={handleSubmit}>
        {/* Form input fields */}
        <Form.Group className="mb-3" controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Name"
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        {/* Submit button */}
        <Button type="submit" variant="dark">Register</Button>
      </Form>
    </div>
  );
}

export default Register;


