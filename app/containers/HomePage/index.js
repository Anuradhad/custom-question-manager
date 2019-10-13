import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import {
  makeSelectQuestions
} from 'containers/App/selectors';
import reducer from './reducer';
import saga from './saga';
import HomePage from './HomePage';
import { searchQuestion, getQuestions } from './actions';

const mapDispatchToProps = (dispatch) => ({
  searchQuestions: (category, text) => dispatch(searchQuestion(category, text)),
  loadQuestions: () => dispatch(getQuestions())
});

const mapStateToProps = createStructuredSelector({
  questions: makeSelectQuestions()
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga });

export default compose(withReducer, withSaga, withConnect)(HomePage);
export { mapDispatchToProps };
