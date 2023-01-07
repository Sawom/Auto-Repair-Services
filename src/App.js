import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './Pages/Home/Home/Home';
import About from './Pages/About/About';
import NotFound from './Pages/NotFound/NotFound';
import { Route, Routes } from 'react-router-dom';
import Header from './Pages/Shared/Header/Header';
import Login from './Pages/Login/Login/Login';
import Experts from './Pages/Home/Experts/Experts';
import Register from './Pages/Login/Register/Register';
import Footer from './Pages/Shared/Footer/Footer';
import Confirm from './Pages/Shared/Confirm/Confirm';
import Require from './Pages/Login/Require/Require';
import ServiceDetails from './Pages/ServiceDetails/ServiceDetails';



function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>} ></Route>
        <Route path="/home" element={<Home></Home>} ></Route>
        <Route path="/about" element={<About></About>} ></Route>
        <Route path="/login" element={<Login></Login>} ></Route>
        <Route path="/register" element={<Register></Register>} ></Route>
        {/* dynamic route */}
        {/* <Route path='/service/:serviceId' element={<ServiceDetails></ServiceDetails>} ></Route> */}
        {/* require page auth */}
        <Route path="/experts" element={
          <Require>
            <Experts></Experts>
          </Require>
        } ></Route>
        <Route path="/confirm" element={
            <Require>
              <Confirm></Confirm>
            </Require>
        } ></Route>
        <Route path="*" element={<NotFound></NotFound>} ></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
