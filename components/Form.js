import "./Form.css"
import { useState } from "react";
function Form() {

    const [firstname ,  setFirstName] = useState('');
    const [middlename , setMiddleName] = useState('');
    const [lastname ,    setLastName] = useState('');
    const [month , setMonth] = useState('')
    const [day , setDay] = useState('')
    const [year , setYear] = useState('')
    const [gender , setGender] = useState('')
    // const [female , setFemale] = useState('')
    // const [other , setOther] = useState('')

    function handleChange(e){
        setFirstName(e)
    }
    
    function handleChange1(e){
        setMiddleName(e)
    }
    
    function handleChange2(e){
        setLastName(e)
    }
    return (
        <> 
        <h1>College Admission Form 

        <hr></hr>
        </h1>
        <p>Enter Your Admission Information Below</p> 
        <br/>
        <br/>
        <br/>
            <span >
                Name :
                <input type="text" placeholder="Enter your FirstName" id="name"
                  onChange={(e)=> handleChange(e.target.value)}></input>
                <input type="text" placeholder="Enter your MiddleName" id="name"
                  onChange={(e)=> handleChange1(e.target.value)}></input>
                <input type="text" placeholder="Enter your LastName" id="name"
                onChange={(e)=> handleChange2(e.target.value)}></input>
            </span>
            
            <br />
            <br />
            <span>
                Birth :
                <select id="month"  onChange={(e)=> setMonth(e.target.value)}>
                        <option>Month</option>
                        <option>january </option>
                        <option>feb</option>
                        <option>March</option>
                        <option>April</option>
                        <option>May</option>
                        <option>June</option>
                        <option>July</option>
                        <option>Aug</option>
                        <option>Sep</option>
                        <option>Oct</option>
                        <option>Nov</option>
                        <option>Dec</option>
                    </select>

                        
                <select id="day"  onChange={(e)=> setDay(e.target.value)}>
                        <option>Day</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        <option>6</option>
                        <option>7</option>
                        
                    </select>

                            
                <select id="year"  onChange={(e)=> setYear(e.target.value)}>
                        <option>Year</option>
                        <option>1999</option>
                        <option>2000</option>
                        <option>2001</option>
                        <option>2002</option>
                        <option>2003</option>
                        <option>2004</option>
                        <option>2005</option>
                        <option>2006</option>
                        <option>2007</option>
                        <option>2008</option>
                        <option>2009</option>
                        <option>2010</option>
                        <option>2011</option>
                        
                    </select>
                
            </span>
            <br />
            <br />
                <span> Gender :

              <input type="radio"  name="gender"  id="gender"  onChange={(e)=> setGender('Male')} /> Male
            <input type="radio"  name="gender" id="gender"  onChange={(e)=> setGender('female')} /> Female
             <input type="radio"  name="gender" id="gender"  onChange={(e)=> setGender('other')} /> Other
                    

                   <label id="country">

                     of which country Are you a Citizen ? 
                   </label>
                    
                <select id="city">
                        <option>Please Select</option>
                        <option>Up</option>
                        <option>Uk</option>
                        <option>HR</option>
                        <option>HP</option>
                        <option>AP</option>
                        <option>Bihar</option>
                        
                    </select>
                </span>

                   <div>
                   <h2>My name is :{firstname}{middlename}{lastname} <br/>
                        {month}/{day}/{year} <br/>
                        Gender : {gender} </h2>

                    </div> 
                </>
    )
}
export default Form