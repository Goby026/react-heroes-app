import React, { useEffect, useReducer } from 'react';
import { AuthContext } from './auth/AuthContext';
import { authReducer } from './auth/authReducer';
import { AppRouter } from './routers/AppRouter';

const init = ()=> {
    return JSON.parse(localStorage.getItem('user')) || {
        logged: false
    };
}

export const HeroesApp = () => {

    // seteando los datos que tendra el context, en este caso se esta usando un reducer para enviarlo a traves de toda la aplicación, para poder usar las bondades del reducer en cualquier componente
    const [user, dispatch] = useReducer(authReducer, {}, init);

    //cuando se cargue este componente, se registrará los datos del usuario en el localStorage
    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(user));
    }, [user]);

    return (
        <AuthContext.Provider value={{ user, dispatch }}>
            <AppRouter/>
        </AuthContext.Provider>
    )
}
