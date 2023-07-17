import React from 'react';

import './Sign_Up.css';
export default function Sign_Up()
{
    return(
        <div className='body-signup'>
            <div className='container text-center login_signupHapo'>
                <div className='row'>
                    <div className='col-md'>
                        <form action=''>
                            <p className='signup'>Sign up to HapoLearn</p>        
                            <div className='form-user-signup'>
                                <p className='txtUser-signup'>Username</p>
                                <input className='form-ipup' type='text'></input>
                            </div>
                            <div className='form-email'>
                                <p className='txtemail_signup'>Email</p>
                                <input className='form-email-signup' type='text'></input>
                            </div>
                            <div className='form-passup'>
                                <p className='txtpass_signup'>Password</p>
                                <input className='form-passup-signup' type='text'></input>
                            </div>
                            <div className='form-comfirm'>
                                <p className='txtcomfirm_signup'>Comfirm Password</p>
                                <input className='form-comfig-signup' type='text'></input>
                            </div>
                            <a href='/loginregister' className='txtCreate-signup btnsignuplock' type='button'>
                                Sign Up
                            </a>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}