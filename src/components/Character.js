// Write your Character component here

import react from "react";

const Characters = (props) => {
    return (
        <h1>{props.char.name}</h1>
    )
}

export default Characters;