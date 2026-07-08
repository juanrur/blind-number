interface Props {
  win: boolean
  gameOver: boolean
  reset: () => void
}

export default function FinalGame ({ win, gameOver, reset }: Props) {
  const text = win ? 'WIN' : gameOver ? 'GAME OVER' : ''

  return (
    (gameOver || win) && (
    <dialog className="gameOver">
      <h2>{text}</h2>
      <button onClick={reset}>Reset</button>
    </dialog>
    )
  )
}
