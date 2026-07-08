import { useEffect, useRef } from 'react'

interface Props {
  win: boolean
  gameOver: boolean
  reset: () => void
}

export default function FinalGame ({ win, gameOver, reset }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const text = win ? 'WIN' : gameOver ? 'GAME OVER' : ''

  useEffect(() => {
    const dialog = dialogRef.current
    if (dialog == null) return

    if (gameOver || win) {
      dialog.showModal()
    }

    return () => {
      dialog.close()
    }
  }, [gameOver, win])

  return (
    <dialog ref={dialogRef} className="gameOver">
      <h2>{text}</h2>
      <button onClick={reset}>Reset</button>
    </dialog>
  )
}
