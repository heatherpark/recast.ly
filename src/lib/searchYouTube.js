var searchYouTube = ({key, query, max = 5}, callback) => {
  // TODO
  console.log("Search youtube function");
  $.get('https://www.googleapis.com/youtube/v3/search', {
    part: 'snippet',
    key: key,
    q: query,
    maxResults: max,
    type: 'video',
    videoEmbeddable: 'true'
  })
  .done(({items}) => {
    if (callback) {
      callback(items);
    }
  })
  .fail(({responseJSON}) => {
    console.log('error happened did not retrieve videos');
    responseJSON.error.errors.forEach((err) =>
      console.error(err)
    );
  });
};

window.searchYouTube = searchYouTube;






