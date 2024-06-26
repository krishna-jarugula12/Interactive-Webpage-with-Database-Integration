
import React from 'react'
import './App.css';
import Main from './Main'
import Home from './Home'
import Contact from './Contact'
import Customerdetails from './Customerdetails'
import Contactdetails from './Contactdetails';
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/Main' element={<Main/>}></Route>
      <Route path='/Contact' element={<Contact/>}></Route>
      <Route path='/Customerdetails' element={<Customerdetails/>}></Route>
      <Route path='/Contactdetails' element={<Contactdetails/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
