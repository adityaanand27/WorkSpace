import { useState } from "react";
import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import Textarea from "./components/Textarea";
import Alert from "./components/Alert";
import About from "./components/About";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";
function App() {
 const[mode,usemode]=useState('light'); 
 const [alert,setalert]=useState('null')

 const showalert= (message,type) => {
   setalert({
    msg : message,type : type
   })
 }
 const toggle=()=>{
   if(mode==='dark'){
      usemode('light')
      document.body.style.backgroundColor='white'
      showalert("Light Mode On","success")
      setInterval(() => {
        document.title="Workspace is amazing "
      }, 2000);
      setInterval(() => {
        document.title="Install it Now"
      }, 1500);
    
   }
   else{
    usemode('dark')
    document.body.style.backgroundColor='grey'
    showalert("Dark Mode On","success")
   }

 }
  return (
  <>
  {/* <Router> */}
  <Navbar mode={mode} togglemode={toggle}/>
  <Alert alert = {alert}></Alert>
  <div className="container my-3">
  {/* <Switch> */}
          {/* <Route path="/about"> */}
            <About />
          {/* </Route> */}
         
          {/* <Route path="/"> */}
            <Textarea mode={mode}/>
          {/* </Route> */}
  {/* </Switch> */}
  
 
  </div>
  {/* </Router> */}
  </>
  );
}

export default App;
