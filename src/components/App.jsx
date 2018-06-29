class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      option: { 
        key: window.YOUTUBE_API_KEY,
        query: 'dogs',
        max: 5
      },
      videos: exampleVideoData,
      currentVideo: exampleVideoData[0]
    },
    this.updateInput = this.updateInput.bind(this);

  }

  updateInput(event) {
    var self = this;
    //Grab our old option in the current state
    var newOption = this.state.option;
    //Update the query property of the old option to make it a new state
    newOption.query = event.target.value;
    //Stick back the new option back into state
    this.setState({option: newOption});
    searchYouTube(this.state.option, self.getVideo.bind(this));
  } 

  handleClick(video) {
    this.setState({currentVideo: video});
  }

  // handleSearch(text) {
  //   console.log($('.input').val());
  // }
  
  

  componentDidMount() {
    var self = this;
    searchYouTube(this.state.option, self.getVideo.bind(this));
  }

  getVideo(videos) {
    this.setState({
      videos: videos,
      currentVideo: videos[0]
    });
  }
  
  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search updateInput={this.updateInput} />
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.currentVideo}/>
          </div>
          <div className="col-md-5">
            <VideoList videos= {this.state.videos} clickProp = {this.handleClick.bind(this)}
            />
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
//   <div><h5><em>videoPlayer</em>  </h5></div>
window.App = App;

