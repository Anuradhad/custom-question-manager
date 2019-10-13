import {
  put, takeLatest
} from 'redux-saga/effects';
import { questionsLoaded, questionLoadingError } from 'containers/App/actions';

import { GET_QUESTIONS, SEARCH_QUESTION } from './constants';

import questions from '../../data/questions.json';

/**
 * Get Questions
 */
export function* getQuestions() {
  try {
    const mockQuestions = questions;
    yield put(questionsLoaded(mockQuestions));
  } catch (err) {
    yield put(questionLoadingError(err));
  }
}

export function* searchQuestions(action) {
  const { category, text } = action;
  const filteredQuestions = questions.filter((q) => {
    if (category.toLowerCase() === 'all categories') {
      if (text) {
        if (q.question.includes(text)) return q;
      } else {
        return q;
      }
    }
    if (q.category.toLowerCase() === category.toLowerCase()) {
      if (text) {
        if (q.question.toLowerCase().includes(text.toLowerCase())) return q;
      } else {
        return q;
      }
    }
  }
  );
  yield put(questionsLoaded(filteredQuestions));
}


/**
 * Root saga manages watcher lifecycle
 */
export default function* getData() {
  // Watches for LOAD_REPOS actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(GET_QUESTIONS, getQuestions);
  yield takeLatest(SEARCH_QUESTION, searchQuestions);
}
