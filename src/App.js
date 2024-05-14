import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Login from './User/Login.jsx';
import Register from "./User/Register.jsx";
import Navigation from "./User/Navigation.jsx";
import Admin from "./User/Admin.jsx"
import Carouselpage from './User/Carouselpage.jsx';
import Card from './User/Card.jsx'
// import logo from './logo.svg';
// import './App.css';

function App() {
  return (
   <div>
{/* <Login/> */}
{/* <Navigation/> */}
{/* <Register/> */}
<BrowserRouter>
<Routes>
  <Route path="/login" element={<Login/>}/>
  <Route path="/register" element={<Register/>}/>
  <Route path="/navbar" element={<Navigation/>}/>
  <Route path="/admin" element={<Admin/>}/>
  <Route path="/carousel" element={<Carouselpage/>}/>
  <Route path="/card" element={<Card/>}/>
</Routes>
</BrowserRouter>
   </div>
  );
}

export default App;
