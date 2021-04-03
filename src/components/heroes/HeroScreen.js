import React, { useMemo } from 'react'
import { Redirect, useParams } from 'react-router'
import { getHeroById } from '../../selectors/getHeroById';

export const HeroScreen = ({history}) => {

    const {heroeId} = useParams();

    const hero = useMemo(() => getHeroById(heroeId), [ heroeId ]);

    // const hero = getHeroById(heroeId);

    if(!hero){
        return <Redirect to="/" />
    }

    const handleBack = ()=>{
        history.goBack();
    }

    const {
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters
    } = hero;

    return (
        <div className="detail-container mt-3 shadow animate__animated animate__fadeIn">
            <div className="detail-col-1">
                <img src={`../assets/${heroeId}.jpg`} alt=""/>
            </div>
            <div className="detail-col-2">
                <h3 className="title">{superhero}</h3>
                <ul>
                    <li><span>Alter ego: </span>{alter_ego}</li>
                    <li><span>First appareance: </span>{first_appearance}</li>
                    <li><span>Publication: </span>{publisher}</li>
                </ul>
                <h4 htmlFor="">Characters</h4>
                <p>
                    {characters}
                </p>
                <button onClick={handleBack} className="btn-danger">Volver</button>
            </div>
        </div>
    )
}
