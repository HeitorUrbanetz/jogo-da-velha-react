import { useEffect, useState } from "react";
import { initialMap } from "./functions/initialMap";
import { winnerY, winnerX } from "./functions/setWin";
import { renders, rendersMID, rendersBottom } from "./functions/renders";

function App() {
  const [alternate, setAlternate] = useState(0);
  const [nextAlternate] = useState(alternate + 1);
  const options = ['X', 'O'];
  const players = ['A', 'B'];
  const [win, setWin] = useState('');
  const [points, setPoints] = useState(0);
  const [pointsB, setPointsB] = useState(0);

  const [mapItems, setMap] = useState({
    "1": "",
    "4": "",
    "7": "",
    "2": "",
    "5": "",
    "8": "",
    "3": "",
    "6": "",
    "9": ""
  });

  useEffect(() => {
    winnerX(mapItems, setWin, setPoints);
    winnerY(mapItems, setWin, setPointsB);
  }, [mapItems]);

  useEffect(() => {
    const victory = document?.querySelector('.show-victory');

    if (victory?.textContent === 'DEU VELHA !') {
      victory.style.color = '#000';
    }
  }, [win]);


  const showV = (i) => {
    if (win !== '') {
      return;
    }

    const ids = document?.getElementById(`${i}`);
    if (ids.textContent === '') {
      ids.innerHTML = options[alternate];
      setMap({...mapItems, [`${ids.id}`]: options[alternate]});
      setAlternate(() => {
        if (alternate + 1 > options.length -1) {
          return 0;
        } else {
          return nextAlternate;
        }
      });
    }

    if (ids.textContent === 'X') {
      ids.style.color = '#5c7cfa'
    } else {
      ids.style.color = '#ff6b6b'
    }
  };

  const clean = () => {
      const square = document.querySelectorAll('[class^="square"]');
      setAlternate(0);
      square.forEach(el => {
        el.textContent = '';
      });
      setMap(initialMap);
      setWin('');
  };

  return (
    <div className="App">
        <div className="game">
          <div className={`game-pos`}>
              {renders(showV)}
          </div>
          <div className="game-pos">
              {rendersMID(showV)}
          </div>
          <div className="game-pos">
              {rendersBottom(showV)}
          </div>
        </div>

        <div className="points">
          <h1 className="placar">Placar </h1>
          <h1 className="player-A">Jogador A: {points}</h1>
          <h1 className="player-B">Jogador B: {pointsB}</h1>
        </div>

        <div className="buttons">
          {
            (win === '') ? 
            <div style={options[alternate] === 'X' ? {color:'#5c7cfa'} : {color: "#ff6b6b"} }>
              <p>VEZ DO <strong>{players[alternate]}</strong> JOGAR</p>
            </div> : 

            <div className="gain">
            <div className="victory">
              <h1><strong className="show-victory" style={(win === 'Jogador A GANHOU') ? {color:'#5c7cfa'} : {color: "#ff6b6b"}}>{win.toUpperCase()} !</strong></h1>
            </div>
              <button onClick={clean}>RECOMEÇAR</button>
            </div>
          }
        </div>

        <div className="me">Made by Heitor Urbanetz</div>
    </div>
  );
}

export default App;
