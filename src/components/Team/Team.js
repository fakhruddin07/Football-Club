import React from 'react';
import './Team.css'

const Team = (props) => {
    const team = props.team
    const total = team.reduce((total, item) => total + parseFloat(item.salary) ,0)
    return (
        <div className="my-team">
            <h3>Team member : {team.length}</h3>
            <p><b>Name</b> : {
                team.map(player => <li style={{listStyle:'none'}}>{player.name} : ${player.salary}</li>)
                }
            </p>
            <h5><b>Total amount</b> : ${total}</h5>
        </div>
    );
};

export default Team;