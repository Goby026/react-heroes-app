import React from 'react';
import { Link } from 'react-router-dom';
import "./heroeCard.css";

export const HeroCard = ({superhero}) => {
    return (
        <div className="card shadow">
            <div className="card-col-1">
                <img src={`./assets/${superhero.id}.jpg`} alt={superhero.superhero}/>
            </div>
            <div className="card-col-2">
                <img src="" alt=""/>
                <h3>{superhero.superhero}</h3>
                <small>{superhero.alter_ego}</small>
                <p>{superhero.first_appearance}</p>
                <Link to={`./hero/${superhero.id}`} className="mt-3">Mas...</Link>
            </div>
        </div>
    )
}
