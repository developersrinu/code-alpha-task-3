import axios from "axios";
import React, { useEffect, useState } from "react";
import BlogCard from "../components/Blogs/BlogCard";

function Homepage() {
  const [homepageBlogs, setHomepageBlogs] = useState();
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      window.location.href = "/login";
    } else {
      axios
        .get(`${process.env.REACT_APP_BACKEND_URL}/blog/homepage-blogs`, {
          headers: {
            "key": token,
          },
        })
        .then((res) => {
          if (res.status === 200) {
            setHomepageBlogs(res.data.data);
          } else {
            console.log(res.data.message);
            // const l = res.data.message
            // console,log(l)
          }
        })
        .catch((err) => {
          alert("Could you kindly follow someone and take a look at their blogs");
        });
    }
  }, [token]);

  return (
    <div>
      <h1 style={{ margin: "30px" }}>Homepage</h1>
  
      {homepageBlogs ? (
        homepageBlogs.map((blog) => (
          <BlogCard key={blog._id} blogData={blog} homepage={true} />
        ))
      ) : (
        <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
          <div>Could you kindly follow someone and take a look at their blogs</div>
        </div>
      )}
    </div>
  );
}

export default Homepage;
