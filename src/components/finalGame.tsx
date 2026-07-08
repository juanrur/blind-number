import { useEffect, useRef } from 'react'
import ResetIcon from '../icons/reset'

interface Props {
  win: boolean
  gameOver: boolean
  reset: () => void
}

export default function FinalGame ({ win, gameOver, reset }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const isOpen = win || gameOver
  const title = win ? '¡Victoria!' : 'Game Over'
  const message = win
    ? 'Has completado todas las casillas. ¡Gran trabajo!'
    : 'No quedan movimientos posibles. ¡Inténtalo de nuevo!'

  useEffect(() => {
    const dialog = dialogRef.current
    if (dialog == null) return

    if (isOpen) {
      dialog.showModal()
    } else {
      dialog.close()
    }

    return () => {
      dialog.close()
    }
  }, [isOpen])

  return (
    <dialog ref={dialogRef} className={`gameOver ${win ? 'win' : gameOver ? 'lose' : ''}`}>
      <h2>{title}</h2>
      <p>{message}</p>
      <button onClick={reset}>
        <ResetIcon className='reset-icon' />
        Jugar de nuevo
      </button>
    </dialog>
  )
}
