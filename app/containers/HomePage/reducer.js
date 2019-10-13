import { GET_QUESTIONS } from './constants';

// The initial state of the App
const initialState = {
  questions: [],
};

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case GET_QUESTIONS:
      return { ...state, questions: action.payload };
    default:
      return state;
  }
}

export default homeReducer;
