import React, {useState} from 'react'
import {register} from './Auth'
const Register = () =>{
    const [from,setForm]=userState({
        email:'',
        password:''
    })
    const handleSubmit = async(e)=>{
        e.preventDefault();
        await register(form);
    }
    const InputFields={
        padding : '0.5rem',
        margin:'0.8rem',
        borderRadius:'4px'
    }
    const ButtonStyle={
        BorderRadius: '4px',
        padding:'0.7rem',
        margin:'0.5rem'
    }
    return(
        <div>
            <h1> Ayush Register Form</h1>
        </div>
    )
}
export default Register