const searchYouTube = (options, callback) => {
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    method: 'GET',
    data: {
      part: 'snippet',
      q: options.query,
      order: 'relevance',
      maxResults: options.max || 5,
      videoEmbeddable: true,
      type: 'video',
      key: options.key
    },
    cache: false,
    success: function(data) {
      callback(data.items);
    },
    error: function(xhr) {
      console.log('Sad day no work');
    }
  });
};

window.searchYouTube = _.debounce(searchYouTube, 500);
