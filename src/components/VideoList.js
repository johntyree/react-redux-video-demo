import React from 'react';
import { connect } from 'react-redux';

import VideoItem from './VideoItem';

const VideoList = ({ videos }) => {
  const renderedList = videos.map(video => {
    return <VideoItem key={video.id.videoId} video={video}/>;
  });
  return (
    <div className="ui relaxed divided list">
      {renderedList}
    </div>
  );
};

const mapStateToProps = ({ videos }) => { return { videos }; };

export default connect(mapStateToProps)(VideoList);
