import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import _ from 'lodash';

var handleVideoSearch = (q) => {

  //TODO:  Write an asynchronous action to handle a video search!

  // combination of currentVideo action and videoList action
  return _.debounce((dispatch) => {
    var options = {
      key: YOUTUBE_API_KEY,
      query: q
    };

    searchYouTube(options, (videos) => {
      dispatch(changeVideo(videos[0]));
      dispatch(changeVideoList(videos));

    });
  });
};
// NEW API KEY: AIzaSyAz-29Ql0514hevrMbLMLMaexFQRSJOiGo
export default handleVideoSearch;

// .then(json => {
//   dispatch({ type: 'VIDEO_SEARCH', videos: q });
// });