import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

function CreateBlog() {
  // State variables to hold user input
  const [title, setTitle] = useState("");
  const [textBody, setTextBody] = useState("");
  const token = localStorage.getItem("token");


  useEffect(() => {
    if (!token) {
      window.location.href = "/login";
    }
  }, [token]);

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a blog object with the form input values
    const blogObj = {
      title,
      textBody
    };

    // Send a POST request to the server to create the blog
    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/blog/create-blog`, blogObj, {
        headers: {
          "key": token,
        },
      })
      .then((res) => {
        if (res.data.status === 201) {
          window.location.href = "/my-blogs";
        } else {
          alert(res.data.message);
        }
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <div style={{ margin: "50px" }}>
      <h1 style={{ marginBottom: "20px" }}>Create your Blog</h1>
      <Form onSubmit={handleSubmit}>
        {/* Form input fields */}
        <Form.Group className="mb-3" controlId="title">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="textBody">
          <Form.Label>Blog Content</Form.Label>
          <Form.Control
            as="textarea"
            rows={5}
            placeholder="Enter Blog Content"
            onChange={(e) => setTextBody(e.target.value)}
          />
        </Form.Group>

        {/* Submit button */}
        <Button type="submit" variant="dark">Create Blog</Button>
      </Form>
    </div>
  );
}

export default CreateBlog;

