import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

const userEmail = 'tester@gmail.com';
function App() {
  const [darkMode, setDarkMode] = useState(false);
  const darkmodeEnableDisable = ()=>{
    if (darkMode === false){
      setDarkMode(true);
      document.body.style.backgroundColor= "#565c5e";
      document.body.style.color= "white";
    }else{
      setDarkMode(false);
      document.body.style.backgroundColor= "white";
      document.body.style.color= "black";
    }
  }
  return (
    <div>
        <Router>
          <Navbar title="My React App" user={userEmail} react_link="https://legacy.reactjs.org/docs/getting-started.html" mode={darkMode} darkMode={darkmodeEnableDisable} />
          <Routes>
            <Route path='/' element={
              <div className="container">
                <TextForm title="Enter your text below for conversion" mode={darkMode} />
              </div>
            } />
            <Route path='/about' element={<About />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
