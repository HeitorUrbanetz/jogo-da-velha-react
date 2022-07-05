export const winnerX = (mapItems, setWin) => {
    if (mapItems['1'] === 'X' && mapItems['2'] === 'X' && mapItems['3'] === 'X') {
        setWin('X GANHOU');
    } else if (mapItems['4'] === 'X' && mapItems['5'] === 'X' && mapItems['6'] === 'X') {
        setWin('X GANHOU');
    } else if (mapItems['7'] === 'X' && mapItems['8'] === 'X' && mapItems['9'] === 'X') {
        setWin('X GANHOU');
    } else if (mapItems['1'] === 'X' && mapItems['4'] === 'X' && mapItems['7'] === 'X') {
        setWin('X GANHOU');
    } else if (mapItems['2'] === 'X' && mapItems['5'] === 'X' && mapItems['9'] === 'X' && mapItems['8'] !== '' && mapItems['8'] !== 'O') {
        setWin('X GANHOU');
    } else if (mapItems['2'] === 'X' && mapItems['5'] === 'X' && mapItems['8'] === 'X') {
        setWin('X GANHOU');
    } else if (mapItems['3'] === 'X' && mapItems['6'] === 'X' && mapItems['9'] === 'X') {
        setWin('X GANHOU');
    } else if (mapItems['1'] === 'X' && mapItems['5'] === 'X' && mapItems['9'] === 'X') {
        setWin('X GANHOU');
    } else if (mapItems['3'] === 'X' && mapItems['5'] === 'X' && mapItems['7'] === 'X') {
        setWin('X GANHOU');
    } else if (
        mapItems['1'] !== '' && 
        mapItems['2'] !== '' && 
        mapItems['3'] !== '' && 
        mapItems['4'] !== '' && 
        mapItems['5'] !== '' && 
        mapItems['6'] !== '' && 
        mapItems['7'] !== '' && 
        mapItems['8'] !== '' && 
        mapItems['9'] !== '') 
        {
          setWin('DEU VELHA!');
        }
}

export const winnerY = (mapItems, setWin) => {
    if (mapItems['1'] === 'O' && mapItems['2'] === 'O' && mapItems['3'] === 'O') {
          setWin('O GANHOU');
      } else if (mapItems['4'] === 'O' && mapItems['5'] === 'O' && mapItems['6'] === 'O') {
          setWin('O GANHOU');
      } else if (mapItems['7'] === 'O' && mapItems['8'] === 'O' && mapItems['9'] === 'O') {
          setWin('O GANHOU');
      } else if (mapItems['1'] === 'O' && mapItems['4'] === 'O' && mapItems['7'] === 'O') {
          setWin('O GANHOU');
      } else if (mapItems['2'] === 'O' && mapItems['5'] === 'O' && mapItems['9'] === 'O' && mapItems['8'] !== '' && mapItems['8'] !== 'X') {
          setWin('O GANHOU');
      } else if (mapItems['2'] === 'O' && mapItems['5'] === 'O' && mapItems['8'] === 'O') {
          setWin('O GANHOU');
      } else if (mapItems['3'] === 'O' && mapItems['6'] === 'O' && mapItems['9'] === 'O') {
          setWin('O GANHOU');
      } else if (mapItems['1'] === 'O' && mapItems['5'] === 'O' && mapItems['9'] === 'O') {
          setWin('O GANHOU');
      } else if (mapItems['3'] === 'O' && mapItems['5'] === 'O' && mapItems['7'] === 'O') {
          setWin('O GANHOU');
      } 
}

