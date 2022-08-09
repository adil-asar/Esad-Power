import React from 'react'
import Navbar from './components/Navbar'
import './index.css'
import {Route,Routes} from 'react-router-dom'
import Home from './components/Home.jsx'

const App = () => {
  return (
    <>
    <Navbar >
      </Navbar>


    <Routes>
    <Route path="/" element={<Home/>} exact />
    
      </Routes>
   
    </>
  );
};

export default App