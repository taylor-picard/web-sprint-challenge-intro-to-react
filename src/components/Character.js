// Write your Character component here

import react from "react";

const Characters = (props) => {
    return (
        <div className='character-info'>
            <h2>{props.starPpl.name}</h2>
            <p>{props.starPpl.birth_year}</p>
            <p>{props.starPpl.species}</p>
            <p>{props.starPpl.gender}</p>
            <p>{props.starPpl.height}</p>
            <p>{props.starPpl.mass}</p>
            <p>{props.starPpl.hair_color}</p>
            <p>{props.starPpl.eye_color}</p>
            <p>{props.starPpl.skin_color}</p>
            <p>{props.starPpl.created}</p>
            <p>{props.starPpl.edited}</p>
            <p>{props.starPpl.homeworld}</p>
            <p>{props.starPpl.films}</p>
            <p>{props.starPpl.vehicles}</p>
            <p>{props.starPpl.starships}</p>
            <p>{props.starPpl.url}</p>
        </div>
    )
}

export default Characters;