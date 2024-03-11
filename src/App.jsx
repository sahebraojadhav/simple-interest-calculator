import { useState } from 'react'
import './App.css'

function App() {
  const [num1, setNum1] = useState(0);
  const [num2,setNum2]=useState(0);
  const [num3,setNum3]=useState(0);
  const[interest,setInterest]=useState(0);
  const[Add,setAdd]=useState(0);

  function calulateInterst(){
    let interstt=(num1*num2*num3)/100;
    setInterest(interstt);
  }

  let reset=()=>{
    window.location.reload();
  }

  return (
    <>
    <div className="app">
      <div className="container">
        <div className="heading-text">
          <h2 className='heading'>Simple Interest Calculator</h2>
          <p className='heading-2'>Calculate your simple interest easily!</p>
        </div>
        <div className="interest-section">
          <h3>Interst Amount (₹)</h3>
          <p className='interest-wrapper'>{interest===0?"calulating...": <p className='interest'>{interest}</p> }</p>
        </div>
        <div className="input-fields">
          <input type="text" placeholder='₹ princiapal amount' className='principal input' onChange={(event)=>setNum1(event.target.value)} />
          <input type="text" placeholder='% Rate of interest' className='roi input' onChange={(event)=>setNum2(event.target.value)} />
          <input type="text" placeholder='Time priod' className='time input' onChange={(event)=>setNum3(event.target.value)}/>
        </div>
        <div className="buttons">
        <button className='calculate' onClick={calulateInterst}>Calculate</button>
        <button className='calculate' onClick={reset}>Reset</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
