import React from 'react';

class SearchBar extends React.Component {
    constructor(props) {
      super(props);
      this.searchInput = React.createRef();
      this.state = { term: this.props.defaultQuery };
    }

    focus = () => {
      this.searchInput.current.focus();
      this.searchInput.current.select();
    }

    onInputChange = (event) => {
        this.setState({ term: event.target.value });
    };

    onFormSubmit = (event) => {
      event.preventDefault();
      this.props.onFormSubmit(this.state.term);
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
                         value={this.state.term}
                         onChange={this.onInputChange}
                      />
                  </div>
              </form>
            </div>
        );
    }
}

export default SearchBar;
