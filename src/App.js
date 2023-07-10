import './App.css';
import {Routes , Route} from 'react-router-dom';
import Home from './page/Home';
import Profile from './page/Profile';
import Login_Register from './page/Login_Register';
import Allcourses from './page/Allcourses';
import SignUp from './page/SignUp';
import Password from './page/Password';
import Course_detail from './page/Course_detail';
function App() {
  return (
    <Routes>
          <Route path='/' element={<Home/>} ></Route>
          <Route path='/profile' element={<Profile></Profile>}></Route>
          <Route path='/allcourses' element={<Allcourses></Allcourses>} ></Route>
          <Route path='/loginregister' element= {<Login_Register></Login_Register>} ></Route>
          <Route path='/signup' element= {<SignUp></SignUp>}></Route>
          <Route path='/resetpassword' element= {<Password></Password>}></Route>
          <Route path='/course' element= {<Course_detail></Course_detail>}></Route>
    </Routes> 
 );

}

export default App;
