import React from "react";
import Navbar from "../components/Navbar/Navbar";
import FooterSign from "../components/Footer/FooterSign";
import Login_register from "../components/Body_Login/Login_register";
function Login_Register(){
    return(
        <div className="backcolo">
            <Navbar/>
            <Login_register/>  
            <FooterSign/>
        </div>
    )
}
export default Login_Register;