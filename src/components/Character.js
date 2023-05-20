// Write your Character component here

import react from "react";

const Characters = (props) => {
    return (
        <div className='character-info'>
            <h1>{props.char.name}</h1>
            <p>{props.char.birth_year}</p>
            <p>{props.char.species}</p>
            <p>{props.char.gender}</p>
            <p>{props.char.height}</p>
            <p>{props.char.mass}</p>
            <p>{props.char.hair_color}</p>
            <p>{props.char.eye_color}</p>
            <p>{props.char.skin_color}</p>
            <p>{props.char.created}</p>
            <p>{props.char.edited}</p>
            <p>{props.char.homeworld}</p>
            <p>{props.char.films}</p>
            <p>{props.char.vehicles}</p>
            <p>{props.char.starships}</p>
            <p>{props.char.url}</p>
        </div>
    )
}

export default Characters;