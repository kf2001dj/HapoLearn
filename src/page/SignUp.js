import React from "react";

import Navbar from "../components/Navbar/Navbar";

import Sign_Up from "../components/SignUp/Sign_Up";

import FooterSign from "../components/Footer/FooterSign";
export default function SignUp()
{
    return(
        <div className="backcolo">
            <Navbar/>
            <Sign_Up/>
            <FooterSign/>
        </div>


    )
}