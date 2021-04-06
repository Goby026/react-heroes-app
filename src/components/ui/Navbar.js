import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { AuthContext } from '../../auth/AuthContext';
import { types } from '../../types/types';

import "./navbar.css";

export const Navbar = () => {

    // desestructurar el objeto user del contexto y extremos la propiedad name de dicho objeto
    const { user:{name}, dispatch } = useContext(AuthContext);

    // hook para obtener la informacion del history, ya que al estar en el componente Navbar, no pertenecemos directamente al router, entonces no se dispone directamente de las propiedades del history
    const history = useHistory();

    const handleLogout = ()=>{
        dispatch({
            type: types.logout
        });

        history.replace('/login');
    }

    return (
        <nav>
            <div className="logo">
                <img src="./assets/logo.png" alt=""/>
            </div>
            <ul className="menu">
                <p>{ name }</p>
                <li>
                    <Link to="/dc">DC</Link>
                </li>
                <li>
                    <Link to="/marvel">Marvel</Link>
                </li>
                <li>
                    <Link to="/search">Search</Link>
                </li>
                <li>
                    <button onClick={handleLogout} className="btn-danger">Logout</button>
                </li>
            </ul>
        </nav>
    )
}
