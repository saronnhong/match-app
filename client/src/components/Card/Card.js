import React from "react";
import "./style.css";

function Card(props) {
    return (
        <div className="card">
            <div className="img-container">
                <img className="cardImg" id={props.id} src={props.url} alt="card_img"/>
            </div>
        </div>
    );
}

export default Card;