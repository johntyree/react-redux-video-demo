import { combineReducers } from 'redux';
import { VIDEOS_UPDATED, VIDEO_SELECTED, TERM_UPDATED } from '../actions';


const videosReducer = (videos = [], action) => {
  if (action.type === VIDEOS_UPDATED) {
    return action.payload;
  }
  return videos;
};


const selectedVideoReducer = (video = null, action) => {
  if (action.type === VIDEO_SELECTED) {
    return action.payload;
  }
  return video;
}


const termReducer = (term = null, action) => {
  if (action.type === TERM_UPDATED) {
    return action.payload;
  }
  return term;
}


export default combineReducers({
  selectedVideo: selectedVideoReducer,
  term: termReducer,
  videos: videosReducer
});
