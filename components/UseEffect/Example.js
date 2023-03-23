// import {useState}  from 'react'
// function Example(){
//     const [val , setvalue] = useState(0)
//     const [count , setCount]  = useState(0)
//     return(
//         <>
//         <h2>value :{val}</h2>
//         <h2>value :{count}</h2>
//        <button onClick={()=>setvalue(val+1)}>Click Me</button>
//        <button onClick={()=>setCount(count+1)}>Click Me</button>
//         </>
//     )
// }
// export default Example



import React, { useEffect, useState } from 'react'

function Example() {
    const[hour,setHour]=useState(0);
    const[minute,setMinute]=useState(0);
    const[second,setSecond]=useState(0);

    useEffect(()=>{
        
        setTimeout(()=>{
            setSecond((pre)=>pre+1)
       },100)
    
            if(second===60){
                setMinute((pre)=>pre+1)
                setSecond(0)
            }
            else if(minute===60){
                setHour((pre)=>pre+1)
                setMinute(0)
            }

    })
    
  return (
    <>
    
    <div>
        <h2>
            {hour} : {minute} : {second}
            </h2> 

            
    </div>
    </>
  )
}

export default Example