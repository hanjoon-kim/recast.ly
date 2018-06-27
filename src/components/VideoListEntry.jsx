var VideoListEntry = () => (
  <div className="video-list-entry media">
    <div className="media-left media-middle">
      <img className="media-object" src="https://i.ytimg.com/vi/1w8Z0UOXVaY/default.jpg" alt="" />
    </div>
    <div className="media-body">
      <div className="video-list-entry-title">'Hello Hanjoon'</div>
      <div className="video-list-entry-detail">'Hello Priya'</div>
    </div>
  </div>
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoListEntry.propTypes = {
  video: window.exampleVideoData,
  currentVideo: window.exampleVideoData[0]
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.VideoListEntry = VideoListEntry;

// ReactDOM.render(
//   <VideoListEntry />,
//   document.getElementById('video-list')
// );