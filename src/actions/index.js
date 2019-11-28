export const VIDEOS_UPDATED = 'VIDEOS_UPDATED';
export const VIDEO_SELECTED = 'VIDEO_SELECTED';
export const TERM_UPDATED = 'TERM_UPDATED';

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
