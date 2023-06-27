
export default function Navbar() {
    function handleClick() {
        console.log('Hello')
    }
    return ( 
        <nav class="navbar navbar-expand-lg bg-body-tertiary ">
            <div class="container-fluid ">
                <a class="navbar-brand " href="/">
                    <div className='imgHapo'>
                        <img src='./image/Hapo_Learn.png' />
                    </div>
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" >
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent" >
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">
                                <button className='btn btn_active'>
                                    <a href='/'>HOME</a>
                                </button>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">
                                <button className='btn'>
                                    <a href='/Allcourses'>All COURSES</a>
                                </button>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">
                                <button className='btn'>
                                    <a href='/Login_Register'>LOGIN/REGISTER</a>
                                </button>
                            </a>
                        {/* <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><hr class="dropdown-divider"/></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul> */}
                        </li>
                        <li class="nav-item">
                            <a class="nav-link " href="#">
                                <button className='btn'>
                                    <a href='/Profile'>PROFILE</a>
                                </button>
                            </a>
                        </li>
                    </ul>
                {/* <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form> */}
                </div>
            </div>
        </nav>
    );
}