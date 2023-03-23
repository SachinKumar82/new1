function ShowData({name, age, ...rest}){
    // console.log(rest)
    return(
        <>
            <h2>My name is : { name }</h2>
            <h2>my age is : {age}</h2>
            <h2>Mobile - {rest.m} </h2>
            <h2>description - {rest.des} </h2>
        </>
    )
}

export default ShowData