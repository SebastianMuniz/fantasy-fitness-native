import { SET_EXERCISES } from '../actions/actionTypes'

const exerciseState = []

export const exerciseReducer = (state = exerciseState, action) => {

  switch (action.type) {
    case SET_EXERCISES:
    console.log(action.payload);
      return [...state, ...action.payload]
    default:
      return state
  }
}
