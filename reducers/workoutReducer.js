const workoutState = {all: [], current: null}

export const workoutReducer = (state = workoutState, action) => {
  switch (action.type) {
    case 'SET_WORKOUTS':
      return {...state, all: action.payload}
    case 'SET_WORKOUT':
      return {...state, current: action.payload}
    default:
      return state
  }
}