import React from 'react';
import { connect } from 'react-redux';
import { updateTerm } from '../actions';

class SearchBar extends React.Component {
    constructor(props) {
      super(props);
      this.searchInput = React.createRef();
    }

    focus = () => {
      this.searchInput.current.focus();
      this.searchInput.current.select();
    }

    onInputChange = (event) => {
      this.props.updateTerm(event.target.value);
    };

    onFormSubmit = (event) => {
      event.preventDefault();
      this.props.onFormSubmit();
      this.searchInput.current.select();
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
  { updateTerm },
  null,
  { forwardRef: true }
)(SearchBar);
