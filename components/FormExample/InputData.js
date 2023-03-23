import { useState } from "react"
import Output from "./Output"

function InputData(){
    const [data,setData] = useState({name : '' , email:'', password:''})
    const [btn , setBtn] = useState('true')
    const [error,setError] = useState('')


    function Hook(e,type){
        if(type === "name"){
            setData((pre)=>{
                return({...pre,name : e.target.value})
            })
        }
        else if(type === "email"){
            setData((pre)=>{
                return({...pre,email:e.target.value})
            })
        }
        else if(type === "password"){
            setData((pre)=>{
                return({...pre,password:e.target.value})
            })
        }
    }

    function redirect(){
        const em = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        const pa = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;



        if(data.name.length<=3){
            setError("name is required")
        }
        else if(!em.test(data.email)){
            setError("email is reuqired")
        }
         else if(!pa.test(data.password)){
                setError('password is not valid')
             }
        
         else{
            setError('')
            setBtn(!btn)
        }
    }
    return(
       
        <>
         {
            btn
            ?
            <div>

            <span>Name  
            <br/>
            <input type={'text'} value={data.name} placeholder="enter name" onChange={(e)=> Hook(e,"name")}/>
        </span>
        <br/>
        <span>Email 
            <br/>
            <input type={'email'} value={data.email} placeholder="enter email" onChange={(e)=> Hook(e,"email")}/>
        </span>
        <br/>
        <span>Password  
            <br/>
            <input type={'password'} value={data.password} placeholder="enter password" onChange={(e)=> Hook(e,"password")}/>
        </span>
        <br/>
        <button onClick={()=>redirect()}>Submit</button>
            <h3 style={{color:"red"}}>{error}</h3>
        
            </div>
            :
        <Output data= {data} setBtn={setBtn} />

        }
        
        </>
    )
}
export default InputData