// import YOUTUBE_API_KEY from '../config/youtube.js';


var changeVideo = (video) => {
  //TODO:  Return some action object to change the currently playing video.
  // what we want to manipulate: ${video.id.videoId}
  return {
    type: 'CHANGE_VIDEO',
    video: video
  };
};

export default changeVideo;

/*

Action object:
{
  type: "COMPLETE-TODO",
  payload: index
}

Action creator:
const completeTodoAt = (index) => ({
  type: "COMPLETE-TODO",
  payload: index
})

*/