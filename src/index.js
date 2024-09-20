import { useState } from "react"
import ReactDOM from "react-dom/client"

import "./style.css"

const root =ReactDOM.createRoot(document.getElementById("root"))

function Counter()
{
    const [firstNumber,setfirstNumber] = useState("");
    const [secondNumber,setscoundNumber] = useState("");
    const [result,setResult] = useState("")

     const handlefirstNumber=(evt) =>{
        setfirstNumber(evt.target.value)
     }

     const handlescoundNumber=(evt) =>{
        setscoundNumber(evt.target.value)
     }

     const handleResult =(evt) =>{
        evt.preventDefault(); 
        const sum = Number(firstNumber) + Number(secondNumber); 
        setResult(sum); 
     }


     return(
    <div class="card">
        <h1>Add two Numbers</h1>

        <form>
         <h2>First Number:</h2>
        <input class="inputbox" value={firstNumber} onChange={handlefirstNumber} type="number" placeholder="Enter First Number"></input><br/>

        <h2>Second Number:</h2>
        <input class="inputbox" value={secondNumber} onChange={handlescoundNumber} type="number" placeholder="Enter Second Number"></input><br/>

        <button  class="button" onClick={handleResult}>Submit</button>
    

        </form>
         <h1>Result:  {result}</h1>
    </div>
)
}

root.render(<Counter/>)