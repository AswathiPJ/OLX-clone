import React, { useContext, useEffect } from 'react';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import { getAuth, onAuthStateChanged } from "firebase/auth";

import './App.css';

/**
 * ?  =====Import Components=====
 */
import Home from './Pages/Home';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Create from './Pages/Create';
import { AuthContext, FirebaseContext } from './store/Context';

function App() {
  const {setUser}=useContext(AuthContext)
  const {firebase}=useContext(FirebaseContext)

  useEffect(()=>{
    const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  setUser(user)
})


  })
  return (
    <div>
      <Router>
        <Routes>
        <Route element={<Home/>} path="/"/>
        <Route element={<Signup/>} path="/signup"/>
        <Route element={<Login/>} path="/login"/>
        <Route element={<Create/>} path="/create"/>
        
        


        </Routes>
        
      
      </Router>
      
      
    </div>
  );
}

export default App;
