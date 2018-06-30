var VideoList = (props) => (
  <div className="video-list">
    {props.videos.map(video => 
      <VideoListEntry video={video} 
        videoListClick = {props.clickProp}
      />
    )}
  </div>
);

VideoList.propTypes = {

window.VideoList = VideoList;
