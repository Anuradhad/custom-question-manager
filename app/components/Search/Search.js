import React from 'react';
import PropTypes from 'prop-types';
import FormButton from 'components/FormButton';
import DropDown from 'components/DropDown';
import './style.scss';

class Search extends React.Component {
  render() {
    const searchQuestionsHandler = (e) => {
      e.preventDefault();
      const { category, searchstring } = e.target.elements;
      this.props.searchQuestions(category.value, searchstring.value);
    };
    return (
      <div className="search">
        <form className="search-form" onSubmit={searchQuestionsHandler}>
          <input name="searchstring" id="searchstring" className="form-control" type="text" placeholder="Search By Question" onChange={this.onsearchQuestion} /><br></br>
          <DropDown name="category" items={this.props.categories} />
          <FormButton buttonType="submit" text="Search" />
        </form>
      </div>
    );
  }
}
Search.propTypes = {
  categories: PropTypes.array,
  searchQuestions: PropTypes.func,
};

export default Search;
