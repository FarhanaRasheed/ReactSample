import  { useState } from 'react'

const Calculator = () => {
  const[text, setText] = useState<string>("");
  // STEP-3
  //text is the value from input..setText is virtual saving from step-2
  //is now passed to input value and viewed to user view(text is the value from user)

  const HandleClick=(value: string)=>{
    setText((prev) => prev + value);
  }
  //STEP-2
  //in handleclick fun is used for what to to be do..."9" "+" "8"
  //when on handleclick function is triggerd function done
  //prev bulitin func which stores value,from intial state is 0
  //from 1st...0  is set to prev ..entered text is added to value..
  //now 0+text()==>to above state

  const HandleCalc =()=>{
try{
  setText(eval(text).toString());
}
catch
{setText("Error")}
}
//eval is the userbuilt function for operation..from the 3rd step

  function HandleReset(){
      setText('')
    }
  // function HandleReset(){
  //     e.preventDefault();
  // }    //for clear screen after calculation
    
  return (
  
    <div>
      <h1>
        CALCULATOR
      </h1>
      
        <input type="text" value={text} placeholder="Enter the number..."/><br></br>
{/* //STEP-4
//From step 3 value is viewed here */}
  
  {
    [1,2,3,4,5,6,7,8,9,0].map((num)=>(
    <button key={num} onClick={() =>HandleClick(num.toString())}>{num}
    </button>)
    //STEP-1
//array defined using map(num[is the parameter to store array....])key-num is indexed...{num}=molinn pass cheyyana value..
// num is obejct which value to be passed and what taken from user,//


)}


<button onClick={()=>HandleClick("+")}>+</button>
<button onClick={()=>HandleClick("-")}>-</button>

<button onClick={()=>HandleClick("*")}>*</button>

<button onClick={()=>HandleClick("/")}>/</button>
<button type="submit" onClick={HandleReset}>C</button>
<button onClick={HandleCalc} >=</button>

</div>   


  )
}


export default Calculator


// //array is defined 0-9,
