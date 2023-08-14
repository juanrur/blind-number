
interface Props {
  generateNewNumber: () => void
  randomNumber: number | null
  isWin: boolean
  isGameOver: boolean
}

export default function RandomNumberBox ({ isGameOver, isWin, generateNewNumber, randomNumber }: Props) {

  function handleClick () {
    if (randomNumber === null && !isWin) generateNewNumber()
  }

  return <button
    style={isGameOver ? { background: '#f00' } : randomNumber !== null ? { background: '#00aF7A' } : {}}
    className={'numeroRandom casilla'}
    onClick={handleClick}
    >
    {randomNumber === null ? 'generate new number' : isWin ? '' : randomNumber}
    </button>
}
