import React from 'react';
import Header from '../Components/Header';


const Homepage = () => {
  const handleButton = () => {
    window.location.href = '/about';
  };

  const handleCount = () => {
    window.location.href = '/count';
  };
  const handleTodo = () => {
    window.location.href = '/todo';
  };
   const handleCalculator = () => {
    window.location.href = '/calculator';
  };
   const handleTask = () => {
    window.location.href = '/task';
  };


  return (
    <>
   
      <style>
        {`
          .home {
            text-align: center;
            background-color: lightblue;
            height: 100vh;
            width: 100vw;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin: 0;
            padding: 0;
          }

          .title {
            color: blue;
            font-size: 36px;
          }

          .button {
            margin-top: 20px;
          }

          button {
            background-color: black;
            color: white;
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            margin: 10px;
           
            font-size: 16px;
          }

          button:hover {
            opacity: 0.8;
          }
        `}
      </style>
<Header/>
      <div className="home">
        <h1 className="title">HEYY WORLD</h1>

        <div className="button">
          <button onClick={handleButton}>Click Me!!</button>
          <button onClick={handleCount}>Count</button>
          <button onClick={handleTodo}>Todo</button>
          <button onClick={handleCalculator}>Calculator</button>
          <button onClick={handleTask}>Task</button>


        </div>
      </div>
    </>
  );
};

export default Homepage;
