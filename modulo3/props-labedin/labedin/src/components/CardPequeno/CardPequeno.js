import React from "react";
import './CardPequeno.css';

function CardPequeno (props) {
    return (
        <div className="card-pequeno-container">
            <img src={ props.imagem }/>
            <h4>{props.texto}</h4>
            <p>{ props.dados }</p>
        </div>
    )
}

export default CardPequeno;