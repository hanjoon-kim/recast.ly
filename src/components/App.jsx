class App extends React.Component {

  constructor(props) {
    super(props);
    console.log(this.props.videos);
    this.state = {
      // videos: {window.exampleVideoData}
      done: false
    };
  }
  
  onMouseClick() {

  }
  
  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search />
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.props.videos[0]}/>
          </div>
          <div className="col-md-5">
            <VideoList videos= {this.props.videos}/>
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

