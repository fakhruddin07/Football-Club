import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Data from './Data/Data.json'
import Info from './components/Info/Info';
import { useState } from 'react';
import { useEffect } from 'react';
import Team from './components/Team/Team';

function App() {
  const [players, setPlayers] = useState([])
  const [team, setTeam] = useState([])
  
  useEffect(() => {
    setPlayers(Data)
  }, [])

  const handleAddPlayer = (player) => {
    const newTeam = [...team, player]
    setTeam(newTeam)
  }

  return (
    <div className="info-container">
      <div className="players-container">
        {
          players.map(player => <Info player={player} key={player.id} handleAddPlayer={handleAddPlayer}></Info>)
        }
      </div>
      <div className="team-container">
        <h1>DX team</h1>
        <Team team={team}></Team>
      </div>
    </div>
  );
}

export default App;
