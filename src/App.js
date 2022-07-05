import { useEffect, useState } from "react";

function App() {
  const [alternate, setAlternate] = useState(0);
  const [nextAlternate] = useState(alternate + 1);
  const options = ['X', 'O'];
  const [win, setWin] = useState('');

  const [mapItens, setMap] = useState({
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

  const initialMap = {
      "1": "",
      "4": "",
      "7": "",
      "2": "",
      "5": "",
      "8": "",
      "3": "",
      "6": "",
      "9": ""
  }

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
    if (mapItens['1'] === 'X' && mapItens['2'] === 'X' && mapItens['3'] === 'X') {
      setWin('X GANHOU');
    } else if (mapItens['4'] === 'X' && mapItens['5'] === 'X' && mapItens['6'] === 'X') {
      setWin('X GANHOU');
    } else if (mapItens['7'] === 'X' && mapItens['8'] === 'X' && mapItens['9'] === 'X') {
      setWin('X GANHOU');
    } else if (mapItens['1'] === 'X' && mapItens['4'] === 'X' && mapItens['7'] === 'X') {
      setWin('X GANHOU');
    } else if (mapItens['2'] === 'X' && mapItens['5'] === 'X' && mapItens['9'] === 'X' && mapItens['8'] !== '' && mapItens['8'] !== 'O') {
      setWin('X GANHOU');
    } else if (mapItens['2'] === 'X' && mapItens['5'] === 'X' && mapItens['8'] === 'X') {
      setWin('X GANHOU');
    } else if (mapItens['3'] === 'X' && mapItens['6'] === 'X' && mapItens['9'] === 'X') {
      setWin('X GANHOU');
    } else if (mapItens['1'] === 'X' && mapItens['5'] === 'X' && mapItens['9'] === 'X') {
      setWin('X GANHOU');
    } else if (mapItens['3'] === 'X' && mapItens['5'] === 'X' && mapItens['7'] === 'X') {
      setWin('X GANHOU');
    } 
  }, [mapItens]);

  useEffect(() => {
    if (mapItens['1'] === 'O' && mapItens['2'] === 'O' && mapItens['3'] === 'O') {
      setWin('O GANHOU');
    } else if (mapItens['4'] === 'O' && mapItens['5'] === 'O' && mapItens['6'] === 'O') {
      setWin('O GANHOU');
    } else if (mapItens['7'] === 'O' && mapItens['8'] === 'O' && mapItens['9'] === 'O') {
      setWin('O GANHOU');
    } else if (mapItens['1'] === 'O' && mapItens['4'] === 'O' && mapItens['7'] === 'O') {
      setWin('O GANHOU');
    } else if (mapItens['2'] === 'O' && mapItens['5'] === 'O' && mapItens['9'] === 'O' && mapItens['8'] !== '' && mapItens['8'] !== 'X') {
      setWin('O GANHOU');
    } else if (mapItens['2'] === 'O' && mapItens['5'] === 'O' && mapItens['8'] === 'O') {
      setWin('O GANHOU');
    } else if (mapItens['3'] === 'O' && mapItens['6'] === 'O' && mapItens['9'] === 'O') {
      setWin('O GANHOU');
    } else if (mapItens['1'] === 'O' && mapItens['5'] === 'O' && mapItens['9'] === 'O') {
      setWin('O GANHOU');
    } else if (mapItens['3'] === 'O' && mapItens['5'] === 'O' && mapItens['7'] === 'O') {
      setWin('O GANHOU');
    } else if (mapItens['1'] && 
    mapItens['2'] !== '' && 
    mapItens['3'] !== '' && 
    mapItens['4'] !== '' && 
    mapItens['5'] !== '' && 
    mapItens['6'] !== '' && 
    mapItens['7'] !== '' && 
    mapItens['8'] !== '' && 
    mapItens['9']) {
      setWin('DEU VELHA!');
    }
  }, [mapItens]);

  useEffect(() => {
    for (let pos in mapItens) {
      const value = mapItens[pos];
      if (value !== '' && value === 'X') {
        console.log(value)
      }
    }
  }, [mapItens]);

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


    setMap({...mapItens, [`${ids.id}`]: options[alternate]});

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
  }

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
