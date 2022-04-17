import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Page/Shared/Navbar/Navbar'
import Home from './Components/Page/Home/Home/Home'
import Blogs from './Components/Page/Blogs/Blogs'
import About from './Components/Page/About/About'
import LogIn from './Components/Page/Log In/LogIn'
import Footer from './Components/Page/Shared/Footer/Footer'
import SignUp from './Components/Page/Sign up/SignUp';
import NotFound from './Components/Page/Shared/NotFound/NotFound';
import CheckOut from './Components/Page/Home/CheckOut/CheckOut';
import RequireAuth from './Components/Page/RequireAuth/RequireAuth';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/checkout' element={
          <RequireAuth>
            <CheckOut></CheckOut>
          </RequireAuth>
        }></Route>
        <Route path='/login' element={<LogIn></LogIn>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
