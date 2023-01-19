import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Alert from './components/Alert';
import Navbar from "./components/Navbar"
import TextForm from './components/TextForm'
import React from "react";
// import Error from './components/Error';
// import ReactDOM from "react-dom/client";
// import {
//   BrowserRouter, Routes, route, Route
// } from "react-router-dom";



function App() {
  const [mode, setMode] = useState('light')
  const toggle = () => {
    if (mode === 'light') {
      setMode("dark")
      document.body.style.backgroundColor = '#042743'
      showAlert("Dark mode enabled", 'success')
      document.title = 'Text-Utils DarkMode'
    } else {
      setMode("light")
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode enabled", 'success')
      document.title = 'Text-Utils LightMode'

    }
  }

  const gray = () => {
    setMode("gray")
    document.body.style.backgroundColor = 'gray'
    showAlert("Gray mode enabled", 'success')
    document.title = 'Text-Utils GrayMode'

  }

  const green = () => {
    setMode("gray")
    document.body.style.backgroundColor = '#146c43'
    showAlert("Green mode enabled", 'success')
    document.title = 'Text-Utils GreenMode'

  }
  const red = () => {
    setMode("gray")
    document.body.style.backgroundColor = '#dc3545'
    showAlert("Red mode enabled", 'success')
    document.title = 'Text-Utils RedMode'

  }

  const light = () => {
    setMode("light")
    document.body.style.backgroundColor = 'white'
    showAlert("light mode enabled", 'success')
    document.title = 'Text-Utils WhiteMode'

  }

  const [alert, setAlert] = useState(null)
  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <TextForm heading='Enter Your Text For Analyzing' mode={mode} showAlert={showAlert} />,
  //     errorElement: <Error/>,
  //   },
  //   {
  //     path: "/About",
  //     element: <About />,
  //   },
  // ]);

  return (
<>
    {/* // <BrowserRouter> */}
      <Navbar title="TextUtils" mode={mode} toggle={toggle} gray={gray} green={green} red={red} light={light} />
      <Alert alert={alert} setAlert={setAlert} />
      <div className='container'>
        {/* <Routes> */}
        <TextForm heading='Enter Your Text For Analyzing' mode={mode} showAlert={showAlert} />
          {/* <Route path="/" element={<TextForm heading='Enter Your Text For Analyzing' mode={mode} showAlert={showAlert} />}/> */}
          {/* <Route path="/About" element={<About/>}/> */}
        {/* </Routes> */}

      </div>
    {/* </BrowserRouter> */}
    </>

  );
}

export default App;
