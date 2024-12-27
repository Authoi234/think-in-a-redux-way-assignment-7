import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import SideNav from './components/SideNav';
import Home from './components/Home';
import AddFormPage from './components/AddFormPage';

function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 md:px-8 ">
        <SideNav></SideNav>
        <div className="lg:pl-[14rem]  mt-[5.8125rem]">
          <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/job/addoredit' element={<AddFormPage></AddFormPage>}></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
