import { useState } from "react";
import ShowData from "./ShowData";

function GData() {

    const [data, setData] = useState({ name: '', email: '', password: '' });
    const [btn, setBtn] = useState('true')
    const [error, setError] = useState('')

    function handleChange(e, type) {
        if (type === "n") {
            setData((pre) => {
                return { ...pre, name: e.target.value }
            })
        }
        else if (type === "e") {
            setData((pre) => {
                return { ...pre, email: e.target.value }
            })
        }
        else if (type === "p") {
            setData((pre) => {
                return { ...pre, password: e.target.value }
            })
        }
    }

    const redirect = ()=>{
        const em = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        // console.log(!em.test(data.email))

        if(data.name.length<=3){
            setError('Name is not valid')
        }else if(!em.test(data.email)) {
            setError('Email is not valid')
        }else if(data.password.length<5) {
            setError('password is not valid')
        }else{
            setError('')
            setBtn(!btn)
        }
    }

    return (
        <>
            {
                btn
                    ?

                    <div>

                        <span>Name:
                            <input type={'text'} value={data.name} placeholder="enter name" onChange={(e) => handleChange(e, "n")}></input>
                        </span>
                        <br />
                        <span>Email:
                            <input type={'email'} value={data.email} placeholder="enter email" onChange={(e) => handleChange(e, "e")}></input>
                        </span>
                        <br />
                        <span>Password:
                            <input type={'password'} value={data.password} placeholder="enter password" onChange={(e) => handleChange(e, "p")}></input>
                        </span>
                        <br />
                        <h3 style={{color:'red'}} >{error}</h3>

                        <button onClick={redirect}>Submit</button>
                    </div>

                    :
                    <ShowData data={data} setBtn={setBtn}></ShowData>


            }


        </>
    )
}
export default GData