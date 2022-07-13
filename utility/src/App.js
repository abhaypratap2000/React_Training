import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import React, { useState } from 'react';


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message , type)=>{
    setAlert({
      msg : message,
      type : type
    })
  }


   const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has enabled","Success")
      
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has enabled","Success")
    }
  }
  return (
    <>
      <Navbar
        title="TextUtils2"
        home="About US"
        mode={mode}
        toggleMode={toggleMode}/>

      <Alert alert={alert}/>

      <div className="container form-group">
        <TextForm showAlert = {showAlert} heading="Enter the text to analyze" mode={mode} />
        {/* <About/> */}
      </div>
    </>
  );
}
export default App;
