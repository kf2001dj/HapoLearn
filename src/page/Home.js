import React from "react";
import Navbar from "../components/UI/Navbar";
import Body from "../components/UI/Body";
import Footer from "../components/UI/Footer";

export default function Home(){
    return(
        <div className="Web">
            <Navbar/>
            <Body/>
            <Footer/>
        </div>
    );
}
