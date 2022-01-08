import React, { useContext, useEffect, useState } from 'react'
import alertContext from '../../context/alert/alertContext';
import authContext from '../../context/auth/authContext';
import { useNavigate } from "react-router-dom";

const Register = (props) => {

    let history  =  useNavigate();

    const [user, setUser] = useState({
        name: '',
        email: '',
        password : '',
        password2 :'' 
    
    })


    const {setAlert} = useContext(alertContext);
    const {register ,error ,clearError, isAuthenticated}  = useContext(authContext);

    useEffect(() => {

        if(isAuthenticated){
            history('/');
        }

        if(error === "user already exists"){
            setAlert(error , "danger");
            clearError();
        }

        // eslint-disable-next-line
    }, [error, isAuthenticated])



    const {name , email ,password, password2} = user;

    const onchange = e =>{
        setUser({...user, [e.target.name] : e.target.value});
    }


    const onSubmit = e =>{

        
        e.preventDefault();

        // console.log("submit");
        if(name === '' || email === '' || password === ''|| password2 ==='' ){
            setAlert('Please enter all fields' ,'danger');
        }
        else if(password !== password2){
            setAlert('Passwords do not match' ,'danger');
        }
        else{
            register({
                name,
                email,
                password
            })
        }
    }


    return (
        <div className ="form-container">
            <h1>
                Account <span className="text-primary">Register</span>

            </h1>

            <form onSubmit ={onSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" value = {name} onChange ={onchange} />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="text" name="email" value = {email} onChange ={onchange} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type= "password" name="password" value = {password} onChange ={onchange} />
                </div>
                <div className="form-group">
                    <label htmlFor="password2"> Confirm Password:</label>
                    <input type= "password" name="password2" value = {password2} onChange ={onchange} />
                </div>

                <input type="submit" value="register" className ="btn btn-primary btn-block" />
            </form>

            
        </div>
    )
}

export default Register


