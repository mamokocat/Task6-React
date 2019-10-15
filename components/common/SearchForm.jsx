import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import DefaultButton from './DefaultButton';
import { getSearchQuery } from '../services/api';

class SearchForm extends React.PureComponent {
  render() {
    const { inputValue, onChange, onSearch } = this.props;

    return (
      <div id="search-form" className="container text-center mt-3">
        <h3>Type what are you want to find:</h3>
        <input
          id="search-input"
          type="text"
          onChange={onChange}
          className="form-control"
          value={inputValue}
        />
        <Link
          to={`/search?q=${inputValue}`}
        >
          <DefaultButton onClick={onSearch}>
            {'Search'}
          </DefaultButton>
        </Link>
      </div>
    );
  }
}

SearchForm.propTypes = {
  inputValue: PropTypes.string,
  onChange: PropTypes.func,
  onSearch: PropTypes.func,
};

SearchForm.defaultProps = {
  inputValue: getSearchQuery(),
  onChange: () => {},
  onSearch: () => {},
};

export default SearchForm;
