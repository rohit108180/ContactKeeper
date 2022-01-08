import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import alertContext from '../../context/alert/alertContext';
import authContext from '../../context/auth/authContext';

const Login = () => {



    const [user, setUser] = useState({
        email: '',
        password : '',    
    })


    let history  =  useNavigate();

    const {setAlert} = useContext(alertContext);
    const {login ,error ,clearError, isAuthenticated}  = useContext(authContext);

    useEffect(() => {

        if(isAuthenticated){
            history('/');
        }

        if(error === "Invalid Crudentials "){
            setAlert(error , "danger");
            clearError();
        }

        // eslint-disable-next-line
    }, [error, isAuthenticated])


    const {email ,password} = user;

    const onchange = e =>{
        setUser({...user, [e.target.name] : e.target.value});
    }


    const onSubmit = e =>{
        e.preventDefault();

        // console.log("submit");
        if(email === '' || password === '' ){
            setAlert('Please enter all fields' ,'danger');
        }
        else{
            login({
                email,
                password
            })
        }
    }


    return (
        <div className ="form-container">
            <h1>
                Account <span className="text-primary">Login</span>

            </h1>

            <form onSubmit ={onSubmit}>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input type="text" name="email" value = {email} onChange ={onchange} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input type= "password" name="password" value = {password} onChange ={onchange} />
                </div> 

                <input type="submit" value="login" className ="btn btn-primary btn-block"  />
            </form>

            
        </div>
    )
}

export default Login


