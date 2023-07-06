import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Login_register from "../components/Body_Login/Login_register";
import SignUp from "../components/Body_signup/SignUp";
import { Routes,Route } from "react-router-dom";
function Login_Register(){
    return(
        <div>
            <Navbar/>
            <Login_register/>  
            <Routes>
                <Route path="/up" element= {<SignUp></SignUp>}></Route>
            </Routes>
            <Footer/>
        </div>
    )
}
export default Login_Register;