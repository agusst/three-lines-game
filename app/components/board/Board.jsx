'use client';
import './board.module.css';
import Square from '../square/Square';
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

  const { winner, combination } = calculateWinner(squares);

  const handleOnClick = (index) => {
    if (squares[index] || winner) {
      return;
    }
    const copy = squares.slice();
    copy[index] = isX ? 'X' : 'O';
    onPlay(copy)
  }
  const isBoardFull = !squares.filter(square => !square).length;
  let label = '';
  if (winner) {
    label = `El ganador es ${winner}`;
  } else if (isBoardFull) {
    label = 'Empate';
  } else {
    label = `Turno de ${isX ? 'X' : 'O'}`
  }

  const isResetEnable = winner || isBoardFull;

  return (
    <div>
      <Typography variant="h5" color="indigo" className="mb-2">
        <ResetButton onClick={onReset} isDisable={!isResetEnable}></ResetButton>
        Tablero
      </Typography>
      <Card className="w-72 pb-6">
        <CardBody>
          <div>
            <Typography variant="paragraph" color="gray" className="mb-6 text-center font-bold">
              {label}
            </Typography>
          </div>
          <div className='flex flex-col items-center'>
            {
              [0, 1, 2].map((i, row) => {
                return (
                  <Row key={row} showBorder={i === 1}>
                    {
                      (col) => {
                        const index = row * 3 + col;
                        const highlight = combination?.includes(index);
                        return <Square key={index} value={squares[index]} onClick={() => handleOnClick(index)} showBorder={col === 1} highlight={highlight} />
                      }
                    }
                  </Row>
                )
              })
            }
          </div>
        </CardBody>
      </Card>
    </div>
  )
}
