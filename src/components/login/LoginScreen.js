import React from 'react'

export const LoginScreen = ({history}) => {
    const handleLogin = ()=>{
        // history.push('/marvel');
        history.replace('/');
    }
    return (
        <>
            <h1>Login</h1>

            <button onClick={handleLogin}>
                Login
            </button>
        </>
    )
}
