import React, { useState } from 'react'

function List() {
    const [data, setData] = useState([])
    const [title, setTitle] = useState('')
    const [des, setDes] = useState('')

    const setdata = () => {
        setData((pre) => [...pre, { title: title, des: des }])
    }

    return (
        <>

            <input onChange={(e) => setTitle(e.target.value)}></input>
            <input onChange={(e) => setDes(e.target.value)}></input>

            <button onClick={setdata} >add</button>
            {
                data.map((val, i) => {
                    return <div key={i}>
                        <h1 >Tilte : {val.title} </h1>
                        <h1 >description : {val.des} </h1>

                    </div>


                })
            }
        </>
    )
}

export default List