import React, { useMemo } from 'react';
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../heroes/HeroCard';
import queryString  from 'query-string';
import './search.css';
import { useLocation } from 'react-router';
import { getHeroesByName } from '../../selectors/getHeroesByName';

export const SearchScreen = ({history}) => {

    const location = useLocation();
    const {q=''} = queryString.parse(location.search);    
    const [inputValues, handleInputChange] = useForm({
        search: q
    });
    
    const {search} = inputValues;

    const heroesFiltered = useMemo(() => getHeroesByName(q), [q]);

    const handleSearch = (e)=>{
        e.preventDefault();
        history.push(`?q=${search}`);
    }
    return (
        <div className="search-container mt-3 animate__animated animate__fadeIn">
            <div className="search-col-1">
                <form onSubmit={handleSearch}>
                    <label htmlFor="">Search Hero</label>
                    <input
                        type="text"
                        name="search"
                        value={search}
                        onChange={handleInputChange}
                        autoComplete="off"/>
                    <button type="submit" className="mt-2 btn-info">Search</button>
                </form>
            </div>
            <div className="search-col-2">
                {
                    (q ==='')
                        &&
                        <div>
                            Search a hero
                        </div>
                }
                {
                    (q !=='' && heroesFiltered.length === 0)
                        &&
                        <div>
                            There's no hero with {q}
                        </div>
                }
                {
                    heroesFiltered.map( (hero)=>{
                        return <HeroCard key={hero.id} superhero={hero}/>
                    } )
                }
            </div>
        </div>
    )
}
