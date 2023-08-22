import { useReducer } from 'react'
import ListOfCasillas from './components/listOfBoxes'
import RandomNumberBox from './components/randomNumberBox'
import Buttons from './components/buttons'
import FinalGame from './components/finalGame'
import { reducer, initialState } from './logic/reducer'
import './App.css'

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

        <div className='casillas-container'>

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
      <footer className=''>
        <h2>by JuanR</h2>
      </footer>
    </div>
  )
}

export default App
