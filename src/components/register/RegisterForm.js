import axios from 'axios';
import React, { useState } from 'react'
import { Link,useNavigate } from "react-router-dom";

const RegisterForm = () => {

const [name,setName] = useState("");
const [email,setEmail] = useState("");
const [password,setPassword] = useState("");
const [confirm,setConfirm] = useState("");
// const [errorEmail,setErrorEmail] = useState(false);
// const [errorPassword,setErrorPassword] = useState(false);

const navigate = useNavigate(); //useHistory replace with useNavigate hook in the v6

const handleSubmit = async (event) =>{
    event.preventDefault(); //what happen in here is displaying url all the data prevent by preventdefault method.
    console.log("in here");

    if(password !== confirm){
        alert("Passwords don't match");
        return
    }

    try {
        await axios.post("http://localhost:1337/auth/local/register",
        {username : name,
        password: password,
        email:email
        });

        alert("user regidtration succesfully!")
        setName("");
        setPassword("");
        setConfirm("");
        setEmail("");

        navigate("/login");

    } catch (error) {
    alert("user details Invalid");
    //console.log("new eror email: ",error.response.data.data[0].messages[0].message);
    //setErrorEmail(error.response.data.data[0].messages[0].message) ;  
    // console.log("new eror password: ",error.response.data);
    // setErrorPassword(error.response) ;
    }


}

  return (
    <div className="regidter-container">
            
                <form className='register-form' onSubmit={handleSubmit}>
                    <h2>REGISTER</h2>
                    <p>fill in the information below</p>
                    {/* <div>hihi : {errorEmail}</div>
                    <div>hihi : {errorPassword}</div> */}
                    <input type ="text" name="name" placeholder="Name" value={name}
                     onChange={(event)=>{
                        console.log(event.target.value);
                        setName(event.target.value)}}/>
                    <input type ="email" name="email" placeholder="Email" value={email}
                     onChange={(event)=>{
                        setEmail(event.target.value);
                    }}/>
                    <input type ="password" name="password" placeholder="Password" value={password}
                    onChange={(event)=>{
                        setPassword(event.target.value);
                    }}/>
                    <input type ="password" name="confirmPassword" placeholder="Confirm Passward" value={confirm}
                    onChange={(event)=>{
                        setConfirm(event.target.value);
                    }}/>

                    <button type='submit'>Register</button>
                    <Link to="/login" className="register-link">Already have an account? Login in here</Link> 
                </form>

        </div>
  )
}

export default RegisterForm;