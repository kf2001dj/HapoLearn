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
          <div className='mes_dangnhap'>
            <div className='mes_logo'>
              <img src='./image/Vector.png'></img>
            </div>
            
            <div className='mes_button'>
              <p> 
                Đăng nhập vào Messenger
              </p>
            </div>

            <div className='mes_mes'>
              <p>
              Chat với HapoLearn trong Messenger
              </p>
            </div>


          </div>

        </div>

   

        
      </body>

      <footer>

      </footer> 



    </div>
  );
}

export default App;
