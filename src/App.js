import './App.css';
import {Routes , Route} from 'react-router-dom'
import Home from './components/Home';
import Profile from './components/Profile';
import Login_Register from './components/Login_Register';
import Allcourses from './components/Allcourses';

function App() {
  return (
    <div className="App">
      <header className="App-header"> 
            <ul>
              <div>
                  <div className='image1'>
                    <img src='./image/Hapo_Learn.png'></img>
                  </div>
                   <div className='home'>
                        <button className='home_1'>
                          <a href='/'>HOME</a>
                        </button>
                    </div> 
                    <div className='all'>
                        <button className='all_1'>
                          <a href='/Allcourses'>All Coureses</a>
                        </button>
                    </div> 
                    <div className='login'>
                        <button className='login_1'>
                          <a href='/Login_Register'>Login/Register</a>
                        </button>
                    </div> 
                    <div className='profile'>
                        <button className='pro_1'>
                          <a href='/Profile'>PROFILE</a>
                        </button>
                    </div> 
                
              </div>
            </ul>
        <Routes>
          <Route path='/' element={<Home></Home>} ></Route>
          <Route path='/Profile' element={<Profile></Profile>}></Route>
          <Route path='/Allcourses'element={<Allcourses></Allcourses>} ></Route>
          <Route path='/Login_Register' element= {<Login_Register></Login_Register>} ></Route>
        </Routes> 
      </header>

      <body className='body'>
          <div className='image_body1'>
            <img src='./image/Hapo_Learn_banner 1.png'></img>
          </div>

          <div className='p1_1'>
              <p>Learn Anytime, Anywhere </p>
          </div>

          <div className='p1_2'>
            <p>at HapoLearn<img src='./image/Group 6.png'></img> !</p> 
          </div>
          <div className='p1_3'>
            <p>
            Interactive lessons, "on-the-go"
            practice, peer support.
            </p>
          </div>

          <div className='button_Start'>
            <button className='bt_1'>
              <h2>
                Start Learning Now!
              </h2>
            </button>
          </div>

          <div className='chatBot'>  
            <div className='chatBot_cu1'>
                <img src='./image/Ellipse 7.png'></img>
            </div>
            <div className='chatBot_text1'>
                  <p>
                      HapoLearn
                  </p>                                  
            </div> 
            <div className='button_x1'>  
                  <img src='./image/Exclude.png'></img>
            </div> 
            <div className='chat_learn'>
              <div className='chat1'>
                <p>
                HapoLearn xin chào bạn. <br></br>
                Bạn có cần chúng tôi hỗ trợ gì không? 
                </p>
              </div>
            </div>

            <button className='mes_bt'>
              <div className='mes_logo'>
                <img src='./image/Vector.png'></img>
              </div>
              <div className='mes_bt_bt'>
                <p> 
                  Đăng nhập vào Messenger
                </p>
              </div>
            </button>

            <div className='mes_mes'>
                <p>
                Chat với HapoLearn trong Messenger
                </p>
            </div>
          </div>
          <div className='fon_xam'></div>

          <div>
            <div className='ds_1'>
                <div className='ds_js'>
                  <div className='ds_js_1'>
                    <img src='./image/Rectangle 7.png'></img>
                  </div>
                </div>

                <div className='ds_nd1'>
                  <p>
                  HTML/CSS/js Tutorial
                  </p>
                </div>

                <div className='ds_nd1_2'>
                  <p>
                  I knew hardly anything about HTML, JS, and CSS
                  before entering New Media. I had coded quite a bit,
                  but never touched anything in regards to web
                  development.
                  </p>
                </div>

                <button className='ds_bt_1'>
                    <div className='ds_nd1_bt1'>
                        <h2>
                        Take This Course
                        </h2>         
                    </div>   
                </button>    
              </div>
          
              <div className='ds_2'>
                <div className='ds_js2'>
                  <div className='ds_js_2'>
                    <img src='./image/laravel-1-logo-black-and-white 1.png'></img>           
                  </div>
                </div>
                <div className='ds_nd2'>
                  <p>
                  LARAVEL Tutorial
                  </p>
                </div>

                <div className='ds_nd2_2'>
                  <p>
                  I knew hardly anything about HTML, JS, and CSS
                  before entering New Media. I had coded quite a bit,
                  but never touched anything in regards to web
                  development.
                  </p>
                </div>

                <button className='ds_bt_2'>
                    <div className='ds_nd2_bt2'>
                        <h2>
                        Take This Course
                        </h2>         
                    </div>   
                </button>    
              </div>

              <div className='ds_3'>
                <div className='ds_js3'>
                  <div className='ds_js_3'>
                    <img src='./image/Rectangle 15.png'></img>
                  </div>
                </div>
                <div className='ds_nd3'>
                  <p>
                  PHP Tutorial
                  </p>
                </div>

                <div className='ds_nd3_3'>
                  <p>
                  I knew hardly anything about HTML, JS, and CSS
                  before entering New Media. I had coded quite a bit,
                  but never touched anything in regards to web
                  development.
                  </p>
                </div>

                <button className='ds_bt_3'>
                    <div className='ds_nd3_bt3'>
                        <h2>
                        Take This Course
                        </h2>         
                    </div>   
                </button>
              </div>

          </div>
          <div className='o1' >
            <p>
            Other courses
            </p>   
          </div>
          <div className='o2'></div>

          <div>
          <div className='ds2'>
                <div className='ds2_js4'>
                  <div className='ds2_js_nd4'>
                    <img src='./image/CSS.png'></img>
                  </div>
                </div>

                <div className='ds2_nd4'>
                  <p>
                    CSS Tutorial
                  </p>
                </div>

                <div className='ds2_nd_4'>
                  <p>
                  I knew hardly anything about HTML, JS, and CSS before entering New Media,...
                  </p>
                </div>

                <button className='ds2_bt_4'>
                    <div className='ds2_nd_bt4'>
                        <h2>
                        Take This Course
                        </h2>         
                    </div>   
                </button>    
              </div>

              <div className='ds3'>
                <div className='ds3_js5'>
                  <div className='ds3_js_nd5'>
                    <img src='./image/Group.png'></img>
                  </div>
                </div>

                <div className='ds3_nd5'>
                  <p>
                  Ruby on rails Tutorial
                  </p>
                </div>

                <div className='ds3_nd_5'>
                  <p>
                  I knew hardly anything about HTML, JS, and CSS before entering New Media,...
                  </p>
                </div>

                <button className='ds3_bt_5'>
                    <div className='ds3_nd_bt5'>
                        <h2>
                        Take This Course
                        </h2>         
                    </div>   
                </button>    
              </div>
              <div className='ds4'>
                <div className='ds4_js6'>
                  <div className='ds4_js_nd6'>
                    <img src='./image/java 1.png'></img>
                  </div>
                </div>

                <div className='ds4_nd6'>
                  <p>
                  Java Tutorial
                  </p>
                </div>

                <div className='ds4_nd_6'>
                  <p>
                  I knew hardly anything about HTML, JS, and CSS before entering New Media,...
                  </p>
                </div>

                <button className='ds4_bt_6'>
                    <div className='ds4_nd_bt6'>
                        <h2>
                        Take This Course
                        </h2>         
                    </div>   
                </button>    
              </div>

          </div>  
          <div className='view'>
            <p>
            View All Our Courses
            </p>
             
          </div>
          <div className='muiten'>
              <img src='./image/muiten.png'></img>
          </div>

          <div>
            <div className='fon_den'>
              <img src='./image/Rectangle 17.png'></img>
            </div>
            <div className='laptop'>
              <img src='./image/transparent-1911160_1280.png'></img>
            </div>
            <div className='why'>
              <p>
              Why HapoLearn?
              </p>
            </div>

            <div className='tich1'>
                <img src='./image/tich.png'></img>
            </div>
            <div className='fon_chu1'>
              <p>
              Interactive lessons, "on-the-go" practice, peer support.
              </p>
            </div>
            <div className='tich2'>
                <img src='./image/tich.png'></img>
            </div>
            <div className='fon_chu2'>
              <p>
              Interactive lessons, "on-the-go" practice, peer support.
              </p>
            </div>
            <div className='tich3'>
                <img src='./image/tich.png'></img>
            </div>
            <div className='fon_chu3'>
              <p>
              Interactive lessons, "on-the-go" practice, peer support.
              </p>
            </div>
            <div className='tich4'>
                <img src='./image/tich.png'></img>
            </div>
            <div className='fon_chu4'>
              <p>
              Interactive lessons, "on-the-go" practice, peer support.
              </p>
            </div>
            <div className='tich5'>
                <img src='./image/tich.png'></img>
            </div>
            <div className='fon_chu5'>
              <p>
              Interactive lessons, "on-the-go" practice, peer support.
              </p>
            </div>
          </div>






      </body>



      <footer>

      </footer> 



    </div>
  );
}

export default App;
