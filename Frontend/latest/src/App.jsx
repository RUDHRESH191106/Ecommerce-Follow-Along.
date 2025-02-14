/* eslint-disable no-unused-vars */

import './App.css';
import React from 'react';
import {Login,Signup,Home, CreateProduct, MyProducts} from "./Routes/Routes"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path= '/signup' element={<Signup/>}/>
    <Route path= '/CreateProduct' element={<CreateProduct/>}/>
    <Route path= '/myProduct' element={<MyProducts/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
