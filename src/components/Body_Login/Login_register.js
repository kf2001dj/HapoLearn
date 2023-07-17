import './Login_register.css';

export default function Login_register(){
    return(
   
        <div className='body-login'>
            <div className='container text-center login_signinHapo'>
                <div className='row'>
                    <div className='col-md'>
                        <form action=''>
                            <p className='sign'>Sign in to HapoLearn</p>        
                            <div className='form-user'>
                                <p className='txtUser'>Username</p>
                                <input className='form-ip' type='text'></input>
                            </div>
                            <div className='form-pass'>
                                <p className='txtPassword_signin'>Password</p>
                                <input className='form-pa' type='text'></input>
                            </div>
                            <button className='btnSign'>
                                <a href='/'>
                                    <p className='txtBtsign'>Sign in</p>
                                </a>
                            </button>
                            <div className='forgot'>
                                <a href='/resetpassword'>
                                   <p className='txtForgot'>
                                    Forgot password
                                    </p> 
                                </a>
                            </div>
                            <div className='btnIndex'></div> 
                            <div className='btnIndex2'></div>
                            <p className='txtIn'> Sign in with</p>
                            <button className='btnGoogle'> 
                                <img src='./image/Google.png'></img>
                                <p className='txtGoogle'> Google</p>
                            </button>
                            <div className='btnNew'></div>
                            <div className='btnNew2'></div>
                            <p className='txtOr'>or New to HapoLearn</p>

                            <a href='/signup' className='txtCreate btnCreat' type='button'>
                                Create New Account
                            </a>
                          
                        </form>
                    </div>
                </div>
            </div>
        </div>
       

    )

}