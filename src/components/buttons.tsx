import '../App.css'

interface Props {
  reset: () => void
  changeNumberBoxes: (number: number) => void
}

export default function Buttons ({ changeNumberBoxes, reset }: Props) {

  function handleClick (event: React.MouseEvent<HTMLElement>) {
    const newNumberBoxes = event.target.innerHTML
    changeNumberBoxes(Number(newNumberBoxes))
  }
  return (
    <div className="botones">
      <button className="c5" onClick={handleClick}>
        5
      </button>
      <button className="c10" onClick={handleClick}>
        10
      </button>
      <button className="c20" onClick={handleClick}>
        20
      </button>
      <button className="reiniciar" onClick={reset}>

      </button>
    </div>
  )
}
