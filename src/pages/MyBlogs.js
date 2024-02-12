import axios from "axios";
import React, { useEffect, useState } from "react";
import BlogCard from "../components/Blogs/BlogCard";

export function MyBlogs() {
    const [myBlogs, setMyBlogs] = useState([]);
    const token = localStorage.getItem("token");

    useEffect(() => {
        if (!token) {
            window.location.href = "/login";
        } else {
            axios
                .get(`${process.env.REACT_APP_BACKEND_URL}/blog/get-user-blogs`, {
                    headers: {
                        "key": token, // Correct the header name for the token.
                    },
                })
                .then((res) => {
                    if (res.status === 200) {
                        setMyBlogs(res.data.data);
                    } else {
                        alert(res.data.message);
                    }
                })
                .catch((err) => {
                    alert(err);
                });
        }
    }, [token]);

    return (
        <div>
            {myBlogs.map((blog) => (
               
                <BlogCard key={blog._id} blogData={blog} /> // Pass the correct prop name
            ))}
        </div>
    );
}


export default MyBlogs