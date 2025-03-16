import "./App.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/pages/Login";
import SignUp from "./components/pages/SignUp";
import ProtectedRoute from "./components/individualcomp/ProtectedRoute";
import HomePage from "./components/pages/HomePage";
import About from "./components/pages/About";
import AdminPage from "./components/pages/AdminPage";
import Contact from "./components/pages/Contact";

function App() {
  return (
    <div>
      <Router>
      <Routes>        
        <Route path = "/createaccount" element = {<SignUp/>}/>
        <Route path = "/login"   element = {<Login/>}/>
        <Route path = "/"        element = {<HomePage/>} />  
        <Route path = "/admin"   element = {<ProtectedRoute><AdminPage /></ProtectedRoute>}/>
        <Route path = "/contact" element = {<Contact/>}/>
        <Route path = "/about"   element = {<About/>}/>
      </Routes>
      </Router>      
    </div>
  );
}

export default App;
