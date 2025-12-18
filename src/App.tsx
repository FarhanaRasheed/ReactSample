// import { useState } from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
// import viteLogo from '/vite.svg'
// import './App.css';
import Homepage from './Pages/Homepage'
import About from './Pages/about';
import Count from './Pages/count';
import Todo from './Pages/Todo';
import Calculator from './Pages/Calculator';
import Task from './Pages/Task';



function App() {
 

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/count" element={<Count/>}/>
      <Route path="/todo" element={<Todo/>}/>
      <Route path="/calculator" element={<Calculator/>}/>
       <Route path="/task" element={<Task/>}/>
      </Routes>
      </BrowserRouter>
     </>
  );
}

export default App
