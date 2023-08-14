interface Props {
  win: boolean
  gameOver: boolean
}

export default function FinalGame ({ win, gameOver }: Props) {
  const text = win ? 'WIN' : gameOver ? 'GAME OVER' : ''

  return (
    <div className="gameOver">
      <h2>{text}</h2>
    </div>
  )
}
