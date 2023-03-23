import { useEffect, useState } from "react"
import axios from 'axios'
import './home.css'

function Home(){

    const [data , setData] = useState([])
    const url = 'https://637ba39972f3ce38ea9137e6.mockapi.io/mogha/sachin'
    function fetch(){
            axios.get(url)
            .then((res)=>{
                setData(res.data)
            })
            
    }
    useEffect(()=>{
        fetch()
    },[])

    function update(id){
        const uurl = `https://637ba39972f3ce38ea9137e6.mockapi.io/mogha/sachin/${id}`
        const newdata = {
            name : "chashma",
            city : "saharanpur"
            }
                axios.put(uurl,newdata)
                .then((res)=>{
                    fetch()

                })
    }

    function delet(id){
        const url = `https://637ba39972f3ce38ea9137e6.mockapi.io/mogha/sachin/${id}`
        axios.delete(url)
        .then((res)=>{
            fetch()
        })

    }
    
    return(
        <div className="main-body">
            {

              data.map((val,index)=>{
                return <div className="main">
                    <img src= {val.avatar}></img>
                    <h4>name : {val.name}</h4>
                    <h4>city : {val.city}</h4>
                    <button onClick={()=>update(val.id)}>update</button>
                    <button onClick={()=>delet(val.id)}>Delete</button>
                </div>
              })
        }
        </div>
    )
}
export default Home