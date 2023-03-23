import React from 'react'

function ShowData({data}){
  return (
    <div>
        Name : {data.name}
        <br/>
        email : {data.email}
        <br/>
        password : {data.pass}

        <button>back</button>
    </div>
  )
}

export default ShowData