import {
  LOAD_QUESTION_SUCCESS
} from './constants';

// The initial state of the App
export const initialState = {
  loading: false,
  error: false,
  currentUser: false,
  userData: {
    repositories: false,
  },
  questionData: {
    questions: [],
  }
};

function appReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_QUESTION_SUCCESS: {
      const newState = {
        ...state,
        loading: false,
        questionData: {
          questions: action.payload,
        }
      };
      return newState;
    }
    default:
      return state;
  }
}

export default appReducer;
