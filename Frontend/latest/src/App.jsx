/* eslint-disable no-unused-vars */

import './App.css';
import React from 'react';
import {Login,Signup,Home} from "./Routes/Routes"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateProduct from './Pages/CreateProduct';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path= 'signup' element={<Signup/>}/>
    <Route path= 'CreateProduct' element={<CreateProduct/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
