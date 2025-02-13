function getResultsFromOMDB(searchTerm) {
    $.getJSON("http://www.omdbapi.com/?apikey=YOUR_API_KEY&s=" + searchTerm, function(data) {
      $('#results').text(JSON.stringify(data));
    });
  }
  