
export default function Navbar() {
    function handleClick() {
        console.log('Hello')
    }
    return ( 
        <nav class="navbar navbar-expand-lg  shadow-lg ">
            <div class="container">
                <a class="navbar-brand " href="/">
                    <img src='./image/Hapo_Learn.png'  className="imgHapo"/>
                </a>
                <button class="navbar-toggler" 
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#toggle" 
                    >
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="toggle" >
                    <ul class="navbar-nav ml-auto pb-1">
                        <li class="nav-item">
                            <a class="nav-link active"  href="#">
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
                        </li>
                        <li class="nav-item">
                            <a class="nav-link " href="#">
                                <button className='btn'>
                                    <a href='/Profile'>PROFILE</a>
                                </button>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}