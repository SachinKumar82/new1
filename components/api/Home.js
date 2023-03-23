// import React, { useEffect, useState } from 'react'
// import axios from 'axios'
// import './home.css'

// function Home() {
//     const [data, setData] = useState([])
//     const url = 'https://637ba39972f3ce38ea9137e6.mockapi.io/mogha/sachin'
    
//     const fetch = ()=>{
//         axios.get(url)
//         .then((res)=>{
//             setData(res.data)
//         })
//         .catch((err)=>{
//             console.log(err)
//         })
//     }

//     useEffect(()=>{
//          fetch()
//     },[])

//     const updateData = ()=>{
//         const uurl = 'https://637ba39972f3ce38ea9137e6.mockapi.io/mogha/sachin/1'
//         const newdata = {
//             name : 'Lovepreet',
//             city : 'Mohali'
//         }
//         axios.put(uurl, newdata)
//         .then((res)=>{
//             console.log(res)
//         })
//     }

//   return (
//     <div className='body-min'>
//         <button onClick={updateData}>update date</button>
//         {
//             data.map((val,i)=>{
//                 return <div className='main'>
//                     <img src={val.avatar}></img>
//                     <h4>name : {val.name}</h4>
//                     <h4>City : {val.city}</h4>
//                 </div>
//             })
//         }
//     </div>
//   )
// }

// export default Home