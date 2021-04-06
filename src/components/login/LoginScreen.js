import React, { useContext } from 'react';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';
import './login.css';

export const LoginScreen = ({history}) => {

    // declaramos el context
    const { dispatch } = useContext(AuthContext);    

    // funcion del boton login
    const handleLogin = ()=>{
        // history.push('/marvel');
        
        dispatch({
            type: types.login,
            payload: {
                name: 'Grover'
            }
        });

        history.replace('/');
    }
    return (
        <>
            <div className="login-title">
                <h1>HEROES APP</h1>
            </div>
            <hr/>
            <div className="login">

                <div className="login-container shadow">
                    
                    <h2>Login</h2>

                    <label htmlFor="user">User</label>
                    <input type="text" name="user" id="user" autoComplete="off"/>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" autoComplete="off"/>

                    <button onClick={handleLogin} className="btn-success">
                        Login
                    </button>
                </div>
                
            </div>
        </>
    )
}
