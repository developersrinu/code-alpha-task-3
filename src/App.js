import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./pages/Login";
import CreateBlog from "./pages/CreateBlog";
import MyBlogs from "./pages/MyBlogs"
import Homepage from './pages/HomePage'
import Header from "./components/common/Header";
import Users from "./pages/Users";


function App() {
  return (
  <BrowserRouter>
   <Header />
  <Routes>
  <Route path="/" element={<Register />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/create-blog" element={<CreateBlog />}/>
        <Route path="/my-blogs" element={<MyBlogs />}/>
        <Route path="/homepage" element={<Homepage />}/>
        <Route path="/users" element={<Users />}/>
  </Routes>
  </BrowserRouter>
  );
}

export default App;
