import { type State, type Action } from '../type'

export const initialState: State = {
  boxesCanChange: [false, false, false, false, false],
  numbersInBoxes: [null, null, null, null, null],
  randomNumber: null,
  gameOver: false,
  win: false
}

function checkPossibleBoxes (numbers: Array<number | null>, randomNumber: number) {

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

export function reducer (state: State, action: Action): State {
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

  return {
    ...state
  }
}
