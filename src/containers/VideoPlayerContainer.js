import { connect } from 'react-redux';
import VideoPlayer from '../components/VideoPlayer.js';

var mapStateToProps = (state) => ({
  videos: state.currentVideo
});
var VideoPlayerContainer = connect(mapStateToProps, null) (VideoPlayer);
// var mapDispatchToProps = (dispatch) => ({
//   handleVideoListEntryTitleClick: (video) => {
//     dispatch(changeVideo(video));
//   }
// });

//TODO: define a VideoPlayerContainer component which will hook up your action
//dispatchers with your VideoPlayer component props.

export default VideoPlayerContainer;
