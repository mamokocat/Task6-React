import React from 'react';
import PropTypes from 'prop-types';

import Loading from './Loading';

class GifsComponent extends React.PureComponent {
  render() {
    const { isFetching, gifs, searchInput } = this.props;
    if (isFetching) {
      return <Loading />;
    }
    return (
      <div id="search-output">
        <h4 className="mt-3" key="search-label">
          Search results for `
          {searchInput}
          `:
        </h4>
        {gifs}
      </div>
    );
  }
}

GifsComponent.propTypes = {
  isFetching: PropTypes.bool,
  gifs: PropTypes.arrayOf(PropTypes.object),
  searchInput: PropTypes.string,
};

GifsComponent.defaultProps = {
  isFetching: true,
  gifs: {},
  searchInput: '',
};

export default GifsComponent;
