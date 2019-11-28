import React from 'react';
import { connect } from 'react-redux';

import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import { selectVideo, updateVideos } from '../actions';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.searchBar = React.createRef();
  }

  componentDidMount() {
    this.searchBar.current.focus();
    this.submitSearch();
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
          <div className="ui container">
            <SearchBar ref={this.searchBar}
                       onFormSubmit={this.submitSearch}/>
            <div className="ui grid">
              <div className="ui row">
                <div className="eleven wide column">
                  <VideoDetail />
                </div>
                <div className="five wide column">
                  <VideoList />
                </div>
              </div>
            </div>
          </div>
      );
  }
}

const mapStateToProps = state => { return state; }

export default connect(
  mapStateToProps,
  { selectVideo, updateVideos },
)(App);
