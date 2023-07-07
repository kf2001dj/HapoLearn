import React from "react";

import Navbar from "../components/Navbar/Navbar";

import Pass from "../components/Password/Pass";

import Footpass from "../components/Footer/Footpass";

export default function Password()
{
    return(
        <div className="backpass">
            <Navbar/>
            <Pass/>
            <Footpass/>
        </div>


    )
}