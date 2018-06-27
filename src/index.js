// TODO: Render the `App` component to the DOM
var App = () => (
  <div>
    <h2>Priya and Hanjoon's Video Site</h2>
    <VideoPlayer video={window.exampleVideoData[0]}/>
    <VideoList videos= {window.exampleVideoData}/>
    <div></div>
  </div>
);



ReactDOM.render(
  <App />,
  document.getElementById('app')
);

//How do we pull data from the exampleVideoData to include in the HTML