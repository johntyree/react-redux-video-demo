import React from 'react';
import { connect } from 'react-redux';

import youtube from '../apis/youtube';
import { selectVideo, updateTerm, updateVideos } from '../actions';

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
      this.submitSearch();
      this.searchInput.current.select();
    }

    submitSearch = async () => {
      const response = await youtube.get('/search', {
        params: {
          q: this.props.term
        }
      });

      this.props.updateVideos(response.data.items);
      // Take first video from the results
      this.props.selectVideo(response.data.items[0]);
    };


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
  { selectVideo, updateTerm, updateVideos },
  null,
  { forwardRef: true }
)(SearchBar);
