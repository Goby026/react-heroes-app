import React, { useMemo } from 'react';
import "./heroeCard.css";

import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher'
import { HeroCard } from './HeroCard';

export const HeroList = ({ publisher }) => {

    const heroes = useMemo(() => getHeroesByPublisher( publisher ), [ publisher ]);

    // const heroes = getHeroesByPublisher( publisher );
    
    return (
        <div className="card-container mt-2 animate__animated animate__fadeIn">
            {
                heroes.map( (hero)=>{
                    return <HeroCard
                            key={hero.id}
                            superhero= {hero}/>
                })
            }
        </div>
    )
}
