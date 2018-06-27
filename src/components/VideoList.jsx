var VideoList = (exampleVideoData) => (
  <div className="video-list">
    <div><h5><em>videoListEntry</em><VideoListEntry video={window.exampleVideoData[0]}/></h5></div>
    <div><h5><em>videoListEntry</em><VideoListEntry video={window.exampleVideoData[1]}/></h5></div>
    <div><h5><em>videoListEntry</em><VideoListEntry video={window.exampleVideoData[2]}/></h5></div>
    <div><h5><em>videoListEntry</em><VideoListEntry video={window.exampleVideoData[3]}/></h5></div>
    <div><h5><em>videoListEntry</em><VideoListEntry video={window.exampleVideoData[4]}/></h5></div>
  </div>
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: window.exampleVideoData,
  currentVideo: window.exampleVideoData[0]
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
window.VideoList = VideoList;


// ReactDOM.render(
//   <VideoList videos={videos} />,
//   document.getElementById('app')
// );