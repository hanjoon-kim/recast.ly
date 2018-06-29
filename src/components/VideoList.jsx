var VideoList = (props) => (
  <div className="video-list">
    {props.videos.map(video => 
      <VideoListEntry video={video} 
        videoListClick = {props.clickProp}
      />
    )}
  </div>
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {

};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.

window.VideoList = VideoList;

 













