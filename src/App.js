import './App.css';
import {Routes , Route} from 'react-router-dom';
import Home from './page/Home';
import Profile from './page/Profile';
import Login_Register from './page/Login_Register';
import Allcourses from './page/Allcourses';

function App() {
  return (
    <Routes>
          <Route path='/' element={<Home/>} ></Route>
          <Route path='/profile' element={<Profile></Profile>}></Route>
          <Route path='/allcourses' element={<Allcourses></Allcourses>} ></Route>
          <Route path='/loginregister' element= {<Login_Register></Login_Register>} ></Route>
    </Routes> 
 );

}

export default App;
