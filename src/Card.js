import React from "react";
import './NetflisCss.css'

function Card (props) 
{
    return (
        <div className="cards">
            <div className="card">
                <img src={props.imageSrc} alt="pics" className="card__img" />
                <div className="card__info">
                    <span className="card__category">{props.title}</span>
                    <h3 className="card_title">{props.heading}</h3>
                    <a href={props.link} target="_blank">
                        <button>Watch Now</button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Card;