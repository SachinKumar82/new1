
function Output({data , setBtn}){
    return(
        <> 
            name is: {data.name} <br/>
            email is : {data.email} <br/>
            password is : {data.password} <br/>

            <button onClick={()=> setBtn((p)=>!p) }>Back</button>


        </>
    )
}
export default Output