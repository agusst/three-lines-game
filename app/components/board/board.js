'use client';
import './board.css';
import Square from '../square/square';
import { useState } from 'react';
import { calculateWinner } from '../utils';

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isX, setIsX] = useState(true);
  const handleOnClick = (index) => {
    if (squares[index] || calculateWinner(squares)) {
      return;
    }
    const copy = squares.slice();
    copy[index] = isX ? 'X' : 'O'; 
    setSquares(copy);
    setIsX(!isX);
  }
  const winner = calculateWinner(squares);
  let label = '';
  if (winner) {
    label = `El ganador es: ${winner}`;
  } else {
    label = `Turno de: ${isX ? 'X' : 'O'}`
  }

  return (
    <>
      <div>{label}</div>
      <div>
        <Square value={squares[0]} onClick={() => handleOnClick(0)} />
        <Square value={squares[1]} onClick={() => handleOnClick(1)} />
        <Square value={squares[2]} onClick={() => handleOnClick(2)} />
      </div>
      <div>
        <Square value={squares[3]} onClick={() => handleOnClick(3)} />
        <Square value={squares[4]} onClick={() => handleOnClick(4)} />
        <Square value={squares[5]} onClick={() => handleOnClick(5)} />
      </div>
      <div>
        <Square value={squares[6]} onClick={() => handleOnClick(6)} />
        <Square value={squares[7]} onClick={() => handleOnClick(7)} />
        <Square value={squares[8]} onClick={() => handleOnClick(8)} />
      </div>
    </>
  )
}
