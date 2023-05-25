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
import View from './Pages/ViewPost';
import { AuthContext, FirebaseContext } from './store/Context';
import Post from './store/PostContext';

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
      <Post>

      
      <Router>
        <Routes>
        <Route element={<Home/>} path="/"/>
        <Route element={<Signup/>} path="/signup"/>
        <Route element={<Login/>} path="/login"/>
        <Route element={<Create/>} path="/create"/>
        <Route element={<View/>} path="/view"/>
        
        


        </Routes>
        
      
      </Router>
      </Post>
      
      
    </div>
  );
}

export default App;
