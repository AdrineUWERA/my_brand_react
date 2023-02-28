import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/UI/Navbar";
import Footer from "./components/UI/Footer";
import Home from "./pages/Home";
import SingleBlog from "./pages/SingleBlog";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import DashboardHome from "./pages/AdminDashboard/AdHome";
import ViewAllBlogs from "./pages/AdminDashboard/AdViewBlogs";
import AllMessages from "./pages/AdminDashboard/AdMessage";
import UpdateBlog from "./pages/AdminDashboard/AdUpdateBlog";
import AddBlog from "./pages/AdminDashboard/AdAddBlog";

function App() {
  return <div className="App">
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route exact path="/" element={<Home />}/> 
      </Routes>
      <Routes>
        <Route exact path="/blog" element={<SingleBlog />}/> 
      </Routes>
      <Routes>
        <Route exact path="/login" element={<Login />}/> 
      </Routes>
      <Routes>
        <Route exact path="/signup" element={<SignUp />}/> 
      </Routes>
      <Routes>
        <Route exact path="/admin-dashboard" element={<DashboardHome />}/> 
      </Routes>
      <Routes>
        <Route exact path="/ad-view-blogs" element={<ViewAllBlogs />}/> 
      </Routes>
      <Routes>
        <Route exact path="/ad-add-blog" element={<AddBlog />}/> 
      </Routes>
      <Routes>
        <Route exact path="/ad-update-blog" element={<UpdateBlog />}/> 
      </Routes>
      <Routes>
        <Route exact path="/ad-messages" element={<AllMessages />}/> 
      </Routes>
      {/* <Footer/> */}
    </Router>
  </div>;
}

export default App;
