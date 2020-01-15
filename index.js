


/**
 * fetch data from national park site
 */
const apiKey = 'Y5c5WxI0LgAzf39Y8sbYO1lAN7fhUcjqPDSdrUUj';
const searchUrl = 'https://developer.nps.gov/api/v1/parks';

function getParks(stateCode, maxResults=10) {
  const params = {
    q : "stateCode=" + stateCode,
    maxResults,
  };
  const queryString = formatQueryString(params);
  const url = searchUrl  + '?' + queryString + '&api_key=' + apiKey;

  console.log(url);
  fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(response.statusText);
    })
    .then(responseJson => displayResults(responseJson, maxResults))
    .catch(err => {
      $('#js-error-message').text(`Something went wrong: ${err.message}`);
    });

}

/**
 * format query string url function
 */

function formatQueryString (params) {
  const queryItems = Object.keys(params)
    .map(key => `${(params[key])}`);
  console.log(queryItems);
  return queryItems.join('&');

}
/**
  * display results function
  */

function displayResults(responseJson, maxResults) {
  console.log(responseJson);
  $('#results-list').empty();
  // iterate through the items array
  for (let i = 0; i < responseJson.data.length && i < maxResults; i++){

    $('#results-list').append(
      `<li><h3>${responseJson.data[i].fullName}</h3>
      <p>${responseJson.data[i].description}</p>
      <a href=${responseJson.data[i].url}>Link Here</a>
      </li>`
    )};
}

//display the results section  
//   $('#results').removeClass('hidden');



/**
 * watch form function
 */

function watchForm() {
  $('form').submit(event => {
    event.preventDefault();
    const searchTerm = $('#js-search-term').val().split(' ').join('&');
    const maxResults = $('#js-max-results').val();
    getParks(searchTerm, maxResults);
  });
}

$(watchForm)