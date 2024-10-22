import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes, BrowserRouter ,useParams  } from "react-router-dom";
import Todo from './comp /Todo';
import Home from './comp /Home';


function App() {

  return (
    <>

     <BrowserRouter>
      <Routes>
        <Route path="/" element={<div><Home/></div>} />       
        <Route path="/todo" element={<div><Todo/></div>} />        
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
