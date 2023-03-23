import React, { useState } from 'react'
import ShowData from './ShowData'

function GetData() {
    const [data, setData] = useState({ name: '', email: '', pass: '' })
    const [btn, setBtn] = useState(true)


    const handleChange = (e, type) => {
        if (type === 'n') {

            setData((p) => {
                return { ...p, name: e.target.value }
            })
        } else if (type === 'e') {
            setData((pre) => {
                return { ...pre, email: e.target.value }
            })

        } else if (type === 'p') {
            setData((pre) => {
                return { ...pre, pass: e.target.value }
            })
        }
    }

    return (
        <>
            {
                btn
                
                ?
                
                <div>

                <span>name</span>
                <input type={'text'} value={data.name} onChange={(e) => handleChange(e, 'n')} placeholder='enter name'></input>
                <br />


                <span>Email</span>
                <input type={'email'} value={data.email} onChange={(e) => handleChange(e, 'e')} placeholder='enter Email'></input>
                <br />

                <span>Password</span>
                <input type={'password'} value={data.pass} onChange={(e) => handleChange(e, 'p')} placeholder='enter password'></input>

                <button onClick={()=> setBtn(!btn)} >Submit</button>

            </div>
                      :

                <ShowData data={data} />

            }
        </>
    )
}
export default GetData

