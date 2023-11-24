'use client';
import { useState } from 'react';
import Board from './components/board/Board';
import History from './components/history/History';

export default function Home() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [isX, setIsX] = useState(true);
  const currentSquares = history[history.length - 1];
  const handleOnPlay = (squares) => {
    setHistory([...history, squares]);
    setIsX(!isX);
  }
  const handleOnReset = () => {
    setHistory([Array(9).fill(null)]);
    setIsX(true);
  }
  const handleOnJump = (index) => {
    setHistory(history.slice(0, index + 1))
    setIsX(index % 2 === 0);
  }
  return (
    <main className="flex min-h-screen justify-center gap-4 items-center p-24">
      <Board isX={isX} squares={currentSquares} onPlay={handleOnPlay} onReset={handleOnReset} />
      <History history={history} onClick={handleOnJump} />
    </main>
  )
}
