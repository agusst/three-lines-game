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
import Row from './row/Row';

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
    <div>
      <Typography variant="h5" color="blue" className="mb-2">
        Tablero
      </Typography>
      <Card className="w-96">
        <CardBody>
          <Typography variant="paragraph" color="blue-gray" className="mb-6">
            {label}
          </Typography>
          <div className='flex flex-col items-center'>
            {
              [0, 1, 2].map((square, row) => {
                const index = row * 3;
                return (
                  <Row key={row}>
                    {(col) => <Square key={index + col} value={squares[index + col]} onClick={() => handleOnClick(index + col)} />}
                  </Row>
                )
              })
            }
          </div>
        </CardBody>
        <CardFooter className='flex flex-row-reverse pt-0'>
          <ResetButton onClick={onReset} isDisable={!isResetEnable}></ResetButton>
        </CardFooter>
      </Card>
    </div>
  )
}
