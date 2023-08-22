export interface State {
  boxesCanChange: boolean[]
  numbersInBoxes: Array<number | null>
  randomNumber: number | null
  gameOver: boolean
  win: boolean
}

export type Action =
  | { type: 'reset' }
  | { type: 'change_boxes_number', paylod: number }
  | { type: 'generate_new_number' }
  | { type: 'push_number_in_box', paylod: number }
