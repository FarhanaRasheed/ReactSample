// import { useState } from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
// import viteLogo from '/vite.svg'
// import './App.css';
import Homepage from './Pages.tsx/Homepage'
import About from './Pages.tsx/about';
import Count from './Pages.tsx/count';
import Todo from './Pages.tsx/Todo';
import Calculator from './Pages.tsx/Calculator';
import Task from './Pages.tsx/Task';



function App() {
 

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/home" element={<Homepage/>}/>
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
