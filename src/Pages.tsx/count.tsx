import React from 'react'

const Count = () => {
  const [count, setCount] = React.useState<number>(0);

  function handleIncrement() {
    setCount(count + 3);
  }
  function handleDecrement() {
    setCount(count - 1);
  }
  function handleReset() {
    setCount(0);
  }

  return (
    <>
      <style>
        {`
          .count-container {
            height: 100vh;
            width: 100vw;
            background-color: lightgreen;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }
          h1 {
            color: white;
          }
          button {
            background-color: black;
            color: white;
            margin: 10px;
            padding: 10px 20px;
            border-radius: 8px;
            border: none;
            cursor: pointer;
          }
          button:hover {
            background-color: grey;
          }
        `}
      </style>

      <div className="count-container">
        <h1>Count Page</h1>
        <p>Welcome to Count Page</p>
        <h2>{count}</h2>

        <div>
          <button onClick={handleIncrement}>Count + 3</button>
          <button onClick={handleDecrement}>Count - 1</button>
          <button onClick={handleReset}>Reset</button>
        </div>
      </div>
    </>
  );
};

export default Count;
