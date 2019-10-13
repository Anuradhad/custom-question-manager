/*
 * Custom Question Manager Page
 */
import React from 'react';
import PropTypes from 'prop-types';
import CustomDataTable from 'components/CustomDataTable';
import Search from 'components/Search';
import './style.scss';

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    const { loadQuestions } = this.props;
    loadQuestions();
  }

  render() {
    const categories = ['All Categories', 'Company policy', 'Other'];
    return (
      <div className="home-content">
        <h1>Question Manager</h1>
        <Search categories={categories} searchQuestions={this.props.searchQuestions} />
        <CustomDataTable data={this.props.questions.questions} />
      </div>
    );
  }
}

HomePage.propTypes = {
  searchQuestions: PropTypes.func,
  loadQuestions: PropTypes.func,
};
