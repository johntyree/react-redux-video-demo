import React from 'react';

import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.searchBar = React.createRef();
  }

  componentDidMount() {
    this.searchBar.current.submit();
  }

  render() {
      return (
          <div className="ui container">
            <SearchBar ref={this.searchBar} />
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

export default App;
