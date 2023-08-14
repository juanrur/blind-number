import '../App.css'

interface Props {
  number: number | null
  canChange: boolean
  change: () => void
}

export default function Box ({ number, canChange, change }: Props) {
  const clase = canChange ? 'casillaA casilla' : 'casilla'

  function handleClick () {
    if (canChange) change()
  }

  return (
    <button
      style={number !== null ? { backgroundColor: '#555' } : {}}
      className={clase}
      onClick={handleClick}
    >
      {number}
    </button>
  )
}
