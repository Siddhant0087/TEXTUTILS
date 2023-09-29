import { useState } from 'react';
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
// import TextForm from './Components/TextForm';
import Alert from './Components/Alert';
import React from "react";
import {
  Route,
  BrowserRouter,
  Routes
} from "react-router-dom";

function App() {

  const[mode, setMode] = useState("light");
  const[alert, setAlert] = useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = ()=>{
      if(mode === "dark"){
        setMode('light');
        document.body.style.background = 'white';
        showAlert("Light Mode Is Enable", "success");
      }
      else{
        setMode('dark');
        document.body.style.background = '#00001f';
        showAlert("Dark Mode Is Enable", "success");
      }
  }
  return (
    <>
    <BrowserRouter>
    <Navbar title ="TextUtils" mode = {mode} toggleMode = {toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
    
    <Routes>
    {/* <Route path='/' element='<TextForm showAlert= {showAlert} heading = "Enter The Text To Analysis Below" mode ={mode}'/> */}
    <Route exact path='/' element={<TextForm showAlert= {showAlert} heading = "Enter The Text To Analysis Below" mode ={mode}/>}/>
    <Route exact path='/about' element={<About/>}/>
    </Routes>  
          {/* <Route path="/">
          <TextForm showAlert= {showAlert} heading = "Enter The Text To Analysis Below" mode ={mode}/>
          </Route>
      <TextForm showAlert= {showAlert} heading = "Enter The Text To Analysis Below" mode ={mode}/> */}
    
    </div>
    </BrowserRouter>
    {/* <About/> */}
    </>
  );
}

export default App;
