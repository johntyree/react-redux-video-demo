import React from 'react';
import { connect } from 'react-redux';

import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null,
    };
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

    this.setState({
      videos: response.data.items,
      // Take first video from the results
      selectedVideo: response.data.items[0]
    });

  };

  onVideoSelect = video => {
    this.setState({ selectedVideo: video });
  }

  render() {
      return (
          <div className="ui container">
            <SearchBar ref={this.searchBar}
                       onFormSubmit={this.submitSearch}/>
            <div className="ui grid">
              <div className="ui row">
                <div className="eleven wide column">
                  <VideoDetail video={this.state.selectedVideo} />
                </div>
                <div className="five wide column">
                  <VideoList onVideoSelect={this.onVideoSelect}
                             videos={this.state.videos}/>
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
)(App);
