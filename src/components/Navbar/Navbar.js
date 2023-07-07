import React from 'react';
import '../Navbar/Navbar.css';
export default function Navbar() {
    return ( 
        <nav class="navbar navbar-expand-lg  navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">
            <img src='./image/Hapo_Learn.png' className='imgNavhapo' alt='logo'></img>
          </a>
          <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
            aria-expanded="false" aria-label="Toggle navigation">
              <span class="toggler-icon top-bar"></span>
              <span class="toggler-icon middle-bar"></span>
              <span class="toggler-icon bottom-bar"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-4 mb-lg-0">
              <div className='fontVien'>
            </div></ul>
            <form class="d-flex">  
              <ul class="navbar-nav me-auto mb-2 mb-lg-0 navbar-right">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="/">HOME</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link txtallcour btnallcour" href="/allcourses" type='button'>ALL COURSES</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/loginregister">LOGIN/REGISTER</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/profile">PROFILE</a>
                </li> 
              </ul>
            </form>
            <div className='fontVien2'></div>
          </div>
        </div>
      </nav>
    )
}