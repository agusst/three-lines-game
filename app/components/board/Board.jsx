'use client';
import './board.css';
import Square from '../square/square';
import { calculateWinner } from '../utils';
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import ResetButton from '../reset-button/ResetButton';

export default function Board({ isX, squares, onPlay, onReset }) {

  const handleOnClick = (index) => {
    if (squares[index] || calculateWinner(squares)) {
      return;
    }
    const copy = squares.slice();
    copy[index] = isX ? 'X' : 'O';
    onPlay(copy)
  }
  const winner = calculateWinner(squares);
  const isBoardFull = !squares.filter(square => !square).length;
  let label = '';
  if (winner) {
    label = `El ganador es: ${winner}`;
  } else if (isBoardFull) {
    label = 'Fin del juego';
  } else {
    label = `Turno de: ${isX ? 'X' : 'O'}`
  }

  const isResetEnable = winner || isBoardFull;
  return (
    <>
      <Card className="w-96">
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-6">
            {label}
          </Typography>
          <div className='flex flex-col items-center'>
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
          </div>
        </CardBody>
        <CardFooter className='flex flex-row-reverse pt-0'>
          <ResetButton onClick={onReset} isDisable={!isResetEnable}></ResetButton>
        </CardFooter>
      </Card>
    </>
  )
}
