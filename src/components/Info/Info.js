import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
import './info.css'

const Info = (props) => {
    const { name, image, born, salary, currentTeam, jersey, nationality } = props.player
    return (
        <div className="player-info">
            <div className="info">
                <img src={image} alt="" />
                <h4>{name}</h4>
                <p>Born : {born}</p>
                <p>Salary : ${salary}</p>
                <p>Current Club : {currentTeam}</p>
                <p>Jersey : {jersey}</p>
                <p>Nationality : {nationality}</p>
                <button className="btn btn-success" onClick={() => props.handleAddPlayer(props.player)}>
                <FontAwesomeIcon icon={faUserPlus} /> Add player</button>
            </div>
        </div>
    );
};

export default Info;