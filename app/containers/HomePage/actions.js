import { SEARCH_QUESTION, GET_QUESTIONS } from './constants';

export function getQuestions() {
  return {
    type: GET_QUESTIONS,
  };
}

export function searchQuestion(category, text) {
  return {
    type: SEARCH_QUESTION,
    category,
    text
  };
}
