// import YOUTUBE_API_KEY from '../config/youtube.js';

var changeVideoList = (videos) => ({
  //TODO:  Return some action object to change the list of videos in VideoList.
  type: 'CHANGE_VIDEO_LIST',
  videos: videos
});

export default changeVideoList;
