import youtube from '../apis/youtube';

export const VIDEOS_UPDATED = 'VIDEOS_UPDATED';
export const VIDEO_SELECTED = 'VIDEO_SELECTED';
export const TERM_UPDATED = 'TERM_UPDATED';

export const submitSearch = term => async dispatch => {
  const response = await youtube.get('/search', {
    params: { q: term }
  });

  dispatch(updateVideos(response.data.items));
  // Take first video from the results
  dispatch(selectVideo(response.data.items[0]));
};


export const updateVideos = videos => {
  return {
    type: VIDEOS_UPDATED,
    payload: videos
  };
};

export const selectVideo = video => {
  return {
    type: VIDEO_SELECTED,
    payload: video
  };
};

export const updateTerm = term => {
  return {
    type: TERM_UPDATED,
    payload: term
  };
};
