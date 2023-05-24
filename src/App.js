import React from 'react';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import './App.css';

/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';
import Signup from './Pages/Signup';
import Login from './Pages/Login';

function App() {
  return (
    <div>
      <Router>
        <Routes>
        <Route element={<Home/>} path="/"/>
        <Route element={<Signup/>} path="/signup"/>
        <Route element={<Login/>} path="/login"/>
        
        


        </Routes>
        
      
      </Router>
      
      
    </div>
  );
}

export default App;
