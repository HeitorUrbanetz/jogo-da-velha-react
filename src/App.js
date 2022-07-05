import { useEffect, useState } from "react";
import { initialMap } from "./functions/initialMap";
import { winnerY, winnerX } from "./functions/setWin";

function App() {
  const [alternate, setAlternate] = useState(0);
  const [nextAlternate] = useState(alternate + 1);
  const options = ['X', 'O'];
  const [win, setWin] = useState('');

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

  const renders = () => {
    const render = [];

    for (let i = 1, max = 4; i < max; i++) {
         render.push(
          <div key={i} id={i} className="square" onClick={() => showV(i)}></div>
        )
      }
      return render;
  };
  const rendersMID = () => {
    const render = [];
    for (let i = 4, max = 7; i < max; i++) {
         render.push(
          <div key={i} id={i} className="square" onClick={() => showV(i)}></div>
        )
      }
      return render;
  };
  const rendersBottom = () => {
    const render = [];
    for (let i = 7, max = 10; i < max; i++) {
         render.push(
          <div key={i} id={i} className="square-bottom" onClick={() => showV(i)}></div>
        )
      }
      return render;
  };

  useEffect(() => {
    winnerX(mapItems, setWin);
    winnerY(mapItems, setWin);
  }, [mapItems]);

  const showV = (i) => {
    if (win !== '') {
      return;
    }

    const ids = document?.getElementById(`${i}`);
    ids.innerHTML = options[alternate];

    if (ids.textContent === 'X') {
      ids.style.color = '#5c7cfa'
    } else {
      ids.style.color = '#ff6b6b'
    }


    setMap({...mapItems, [`${ids.id}`]: options[alternate]});

    setAlternate(() => {
      if (alternate + 1 > options.length -1) {
        return 0;
      } else {
        return nextAlternate;
      }
    });
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
              {renders()}
          </div>
          <div className="game-pos">
              {rendersMID()}
          </div>
          <div className="game-pos">
              {rendersBottom()}
          </div>
        </div>

        <div className="buttons">
          {
            (win === '') ? 
            <div>
              <p>VEZ DO <strong>{options[alternate]}</strong> JOGAR</p>
            </div> : 

            <div className="gain">
            <div className="victory">
              <h1><strong style={(win === 'X GANHOU') ? {color:'#5c7cfa'} : {color: "#ff6b6b"}}>{win}</strong></h1>
            </div>
              <button onClick={clean}>RECOMEÇAR</button>
            </div>
          }
            
        </div>
    </div>
  );
}

export default App;
