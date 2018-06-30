var Search = (props) => (
  <div className="search-bar form-inline">
    <input onChange={props.updateInput} className="form-control" type="text" />
    <button onClick={props.updateInput} className="btn hidden-sm-down">
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </div> 
);

VideoList.propTypes = {
};

window.Search = Search;
