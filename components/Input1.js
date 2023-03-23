import { useState } from "react"

import ShowData1 from "./ShowData1"


// function Input1(){

//     const [name , setName] = useState('');

//     function handleChange(e){
//         setName(e)
//     }

//     return(
//         <>
//         <span> Name: 
//             <input type="text" placeholder="enter your name" onChange={(e)=> handleChange(e.target.value)} ></input>
//         </span>
//         <h2>
//             My Name is : {name}
//         </h2>
//         </>
//     )
// }



function Input1(){
    const [name,setName] =useState('')
    return(
        <>
        <span>Name: <input type="text"  placeholder="enter your name" onChange={(e)=>setName(e.target.value)}></input> </span>
         <ShowData1 name= {name } /> 
        </>
    )
}
export default Input1