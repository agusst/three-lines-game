import Image from 'next/image'
import Board from './components/board/board';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <Board />
    </main> 
  )
}
