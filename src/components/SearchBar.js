import React from 'react';
import { connect } from 'react-redux';

import { updateTerm, submitSearch } from '../actions';

class SearchBar extends React.Component {
    constructor(props) {
      super(props);
      this.searchInput = React.createRef();
    }

    focus = () => {
      this.searchInput.current.focus();
      this.searchInput.current.select();
    }

    submit = () => {
      this.focus();
      this.props.submitSearch(this.props.term);
    }

    onInputChange = (event) => {
      this.props.updateTerm(event.target.value);
    };

    onFormSubmit = (event) => {
      if (event) event.preventDefault();
      this.submit();
    }

    render() {
        return (
            <div className="search-bar ui segment">
              <form onSubmit={this.onFormSubmit} className="ui form">
                  <div className="field">
                      <label>Video Search</label>
                      <input
                         ref={this.searchInput}
                         type="text"
                         value={this.props.term}
                         onChange={this.onInputChange}
                      />
                  </div>
              </form>
            </div>
        );
    }
}

const mapStateToProps = ({ term }) => {
  return { term };
};

export default connect(
  mapStateToProps,
  { submitSearch, updateTerm },
  null,
  { forwardRef: true }
)(SearchBar);
