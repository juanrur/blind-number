import Box from './box'

interface Props {
  numbersInBoxes: Array<number | null>
  boxesCanChange: boolean[]
  pushNumberInBox: (position: number) => void
}

export default function ListOfBoxes ({ numbersInBoxes, boxesCanChange, pushNumberInBox }: Props) {

  const className = numbersInBoxes.length > 19 ? 'mCasillas casillas' : 'pCasillas casillas'

  return <div className={className}>

    {numbersInBoxes.map((number, index) => {

      return <Box
        isStarted={numbersInBoxes.some(num => num !== null) || boxesCanChange.some(can => can)}
        index={index}
        key={index}
        number={number}
        canChange={boxesCanChange[index]}
        change={() => { pushNumberInBox(index) }}
      />

    })}

  </div>
}
