interface Props {
  number: number | null
  canChange: boolean
  change: () => void
  index: number
  isStarted: boolean
}

export default function Box ({ number, canChange, change, index, isStarted }: Props) {
  const clase = canChange ? 'casillaA casilla' : 'casilla'

  function handleClick () {
    if (canChange) change()
  }

  console.log('isStarted', isStarted)

  return (
    <button
      style={number !== null ? { backgroundColor: '#555' } : {}}
      className={clase}
      onClick={handleClick}
    >
      {
        isStarted
          ? number
          : <span className="box-placeholder">{index + 1}</span>
      }
    </button>
  )
}
