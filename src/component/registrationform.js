import React, { useState } from 'react';
import {database} from '../firebase';
import { ref,push,child,update } from "firebase/database";
//here we will create a new function for  registration form
import './style.css';
function Registrationform() {

    const[firstName,setFirstName]=useState(null);
    const[lastName,setLastName]=useState(null);
    const[email,setEmail]=useState(null);
    const[Password,setPassword]=useState(null);
    const[confirmPassword,setConfirmPassword]=useState(null);

    const handleInputChange = (e)=>{
        const{id, value} = e.target;
        if(id==="firstName"){
            setFirstName(value);
        }
        if(id==="lastName"){
            setLastName(value);
        }
        if(id==="email"){
            setEmail(value);
        }
        if(id==="Password"){
            setPassword(value);
        }
        if(id==="confirmPassword"){
            setConfirmPassword(value);
        }
    } 
        const handleSubmit = () => {
            if(Password === confirmPassword){
                
                window.alert("You have been successfully registered in Ayush in V1.0");
                let obj ={
                    firstName : firstName,
                    lastName : lastName,
                    email : email,
                    Password : Password,
                    ConfirmPassword : confirmPassword,
                }
                const newPostKey = push(child(ref(database), 'posts')).key;
                const updates = {};
                updates['/' + newPostKey] = obj;
                return update(ref(database),updates);
                //window.alert("you have been successfully registered in Ayush V1.0");
                
            }else{
                window.alert("Password and Confirm Password is not same");
                setPassword("");
                setConfirmPassword("");
            }
        
    }
    return(
        <div className="form">
            <div className="form-body">
                <div className='userName'>
                    <label className = "form_label" for="firstName" >Enter First Name</label>
                    <input classname="form_input" type="text" id="firstName"
                    value={firstName}onChange = {(e)=> handleInputChange(e)}placeholder="First name"/>
                </div>
                <div className='lastname'>
                    <label className = "form_label" for="lastName" >Enter Your Last Name</label>
                    <input classname="form_input" type="text" id="lastName"value={lastName}onchange ={(e)=> handleInputChange(e)}
                    placeholder="Last Name"/>
                </div>
                <div className='email'>
                    <label className = "form_label" for="email" >Enter your emailAddress</label>
                    <input classname="form_input" type="email" id="email"value={email}onChange ={(e)=> handleInputChange(e)}
                    placeholder="abc@gmail.com"/>
                </div>
                <div className='Password'>
                    <label className = "form_label" for="Password" >Enter Password</label>
                    <input classname="form_input" type="Password" id="Password"value={Password}onChange = {(e)=> handleInputChange(e)}
                    placeholder="***********"/>
                </div>
                <div className='confirm.password'>
                    <label className = "form_label" for="confirmpassword" >confirm A password</label>
                    <input classname="form_input" type="text" id="confirmPassword"value={confirmPassword}onChange ={(e)=> handleInputChange(e)}
                    placeholder="************"/>
                </div>
                <button onClick={()=>handleSubmit()} type="submit" class="btn">Click Here For Ayush Registration
                </button>                                              
            </div>
            
        </div>
    )
} 
export default Registrationform;