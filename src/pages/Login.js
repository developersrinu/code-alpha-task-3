

import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

function Login() {
  // State variables to hold user input
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a user object with the form input values
    const userObj = {
      username,
      password,
    };

    // Send a POST request to the server to register the user
    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/user/login`, userObj)
      .then((res) => {
        // Check if the server responded with a status of 201 (successful login)
        if (res.data.status === 200) {
          // Store the authentication token in localStorage
          localStorage.setItem("token", res.data.data.token);
          // Redirect to the '/homepage' route
          window.location.href = '/homepage';
        } else {
          // Display an alert with the server's error message
          alert(res.data.message);
        }
      })
      .catch((err) => {
        // Log any errors to the console and show a generic error alert
        console.error(err);
        alert("An error occurred while logging in.");
      });
  };

  return (
    <div style={{ margin: "50px" }}>
      <h1 style={{ marginBottom: "20px" }}>Login</h1>
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
        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        {/* Submit button */}
        <Button type="submit" variant="dark">Login</Button>
      </Form>
    </div>
  );
}

export default Login;
