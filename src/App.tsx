import { useReducer } from 'react'
import { type State, type Action } from './type'
import ListOfCasillas from './components/listOfBoxes'
import RandomNumberBox from './components/randomNumberBox'
import Buttons from './components/buttons'
import FinalGame from './components/finalGame'

const initialState: State = {
  boxesCanChange: [false, false, false, false, false],
  numbersInBoxes: [null, null, null, null, null],
  randomNumber: null,
  gameOver: false,
  win: false
}

function checkPossibleBoxes (numbers: number[], randomNumber: number) {

  const newBoxesCanChange = Array(numbers.length).fill(true)

  for (let index = 0; index < numbers.length; index++) {
    if (numbers[index] === null) {
      /* empty */
    } else if (numbers[index] > randomNumber) {
      for (let t = index; t < numbers.length; t++) {
        newBoxesCanChange[t] = false
      }
    } else if (numbers[index] <= randomNumber) {
      for (let t = index; t >= 0; t--) {
        newBoxesCanChange[t] = false
      }
    }
  }

  return newBoxesCanChange
}

function reducer (state: any, action: Action) {
  const { type } = action

  if (type === 'reset') {
    const boxesNumber = state.numbersInBoxes.length
    return {
      ...initialState,
      boxesCanChange: Array(boxesNumber).fill(false),
      numbersInBoxes: Array(boxesNumber).fill(null)
    }
  }

  if (type === 'change_boxes_number') {
    return {
      ...state,
      boxesCanChange: Array(action.paylod).fill(false),
      numbersInBoxes: Array(action.paylod).fill(null)
    }
  }

  if (type === 'generate_new_number') {
    const newRandomNumber: number = Math.floor(Math.random() * 1000)

    const newBoxesCanChange = checkPossibleBoxes(state.numbersInBoxes, newRandomNumber)

    if (newBoxesCanChange.includes(true)) {
      return {
        ...state,
        boxesCanChange: newBoxesCanChange,
        randomNumber: newRandomNumber
      }
    } else {
      return {
        ...state,
        gameOver: true,
        randomNumber: newRandomNumber
      }
    }
  }

  if (type === 'push_number_in_box') {
    const newNumberInBoxes = [...state.numbersInBoxes]
    newNumberInBoxes[action.paylod] = state.randomNumber

    if (newNumberInBoxes.includes(null)) {
      return {
        ...state,
        numbersInBoxes: newNumberInBoxes,
        boxesCanChange: Array(state.numbersInBoxes.length).fill(false),
        randomNumber: null
      }
    } else {
      return {
        ...state,
        numbersInBoxes: newNumberInBoxes,
        boxesCanChange: Array(state.numbersInBoxes.length).fill(false),
        randomNumber: null,
        win: true
      }
    }
  }
}

function App () {

  const [state, dispatch] = useReducer(reducer, initialState)

  const { numbersInBoxes, boxesCanChange, randomNumber, win, gameOver } = state

  function pushNumberInBox (paylod: number) {
    dispatch({ type: 'push_number_in_box', paylod })
  }

  function generateNewNumber () {
    dispatch({ type: 'generate_new_number' })
  }

  function reset () {
    dispatch({ type: 'reset' })
  }

  function changeNumberBoxes (paylod: number) {
    dispatch({ type: 'change_boxes_number', paylod })
  }

  return (
    <div className="App">

      <FinalGame win={win} gameOver={gameOver}/>

      <section>
        <div className='pg'>

          <ListOfCasillas
          pushNumberInBox={pushNumberInBox}
          numbersInBoxes={numbersInBoxes}
          boxesCanChange={boxesCanChange}/>

          <RandomNumberBox
          isGameOver={gameOver}
          isWin={win}
          generateNewNumber={generateNewNumber}
          randomNumber={randomNumber}/>

          <Buttons reset={reset} changeNumberBoxes={changeNumberBoxes} />

        </div>
      </section>
      <footer className=''>
        <h2>by JuanR</h2>
      </footer>
    </div>
  )
}

export default App
