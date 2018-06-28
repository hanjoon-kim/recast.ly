var searchYouTube = (options, callback) => {
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: {
      q: options.query,
      key: options.key,
      maxResults: options.max,
      videoEmbeddable: 'true',
      part: 'snippet',
      type: 'video'
    },
    // part: 'snippet',
    success: function(data) {
      callback(data.items);
    },
    error: function(error) {
      console.log('error', error);
    }
  })
  
}

window.searchYouTube = searchYouTube;
