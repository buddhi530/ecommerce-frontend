import axios from 'axios';
import { useAtom } from 'jotai';
import React, { useState } from 'react'
import { Link,useNavigate } from "react-router-dom";
import {userAtom,countAtom} from '../../state';

const RegisterForm = () => {

const [email,setEmail] = useState("");
const [password,setPassword] = useState("");
const [count,setCount] =useAtom(countAtom);
const [user,setUser] = useAtom(userAtom);
//const [user,setUser] =useAtom(userAtom);
const navigate = useNavigate(); 

const handleSubmit = async (event) =>{
    event.preventDefault();



    try {
       const result = await axios.post("http://localhost:1337/auth/local/",
        {
        password: password,
       identifier:email
        });

        console.log(result.data);

        sessionStorage.setItem("user",JSON.stringify(result.data.user));
        setUser(result.data.user);

        alert("user login succesfully!")

        setPassword("");
        setEmail("");

        navigate("/profile");

    } catch (error) {
    alert("user details Invalid");

    }


}

  return (
    <div className="regidter-container">
        {/* <button onClick={()=>{
            setCount(count +1)
        }}>Increment</button> */}
                <form className='register-form' onSubmit={handleSubmit}>
                    <h2>LOGIN</h2>
                    <p>fill in the information below</p>
           
                    <input type ="email" name="email" placeholder="Email" value={email}
                     onChange={(event)=>{
                        setEmail(event.target.value);
                    }}/>
                    <input type ="password" name="password" placeholder="Password" value={password}
                    onChange={(event)=>{
                        setPassword(event.target.value);
                    }}/>
                  
                    <button type='submit'>LOGIN</button>
                    <Link to="/register" className="register-link">Do not  have an account? Register in here</Link> 
                </form>

        </div>
  )
}

export default RegisterForm;