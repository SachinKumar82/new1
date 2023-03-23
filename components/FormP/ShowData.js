
function ShowData({data,setBtn}){
    
     return(
        <>
            <div>
            Name : {data.name} <br/>
            email : {data.email} <br/>
            password : {data.password} <br/>

            <button onClick={()=> setBtn((p)=>!p)}>Back</button>
        </div>    

        </>
    )
}
export default ShowData 