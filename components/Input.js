import { useState } from "react"
import ShowData from "./ShowData"

function Input(){

    const [name, setName] = useState('')
    const [age, setAge] = useState(0)
    const [mobile, setMobile] = useState(0)

    return(
        <>
            <span>Name</span>
            <input type='text' placeholder="enter name" onChange={(e)=> setName(e.target.value)} ></input>
            
            <br/>
            <span>Age</span>
            <input type='number' placeholder="enter Age.." onChange={(e)=> setAge(e.target.value)} ></input>
            
            <br/>
            <span>enter Mobile number</span>
            <input type='number' placeholder="enter mobile..." onChange={(e)=> setMobile(e.target.value)} ></input>
            
            <ShowData name={name} age = {age} m = {mobile} des={"this is the hello page"} />
            
        </>
    )
}

export default Input