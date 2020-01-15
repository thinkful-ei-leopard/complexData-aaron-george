


/**
 * fetch data from national park site
 */
const apiKey = 'Y5c5WxI0LgAzf39Y8sbYO1lAN7fhUcjqPDSdrUUj';
const searchUrl = 'https://developer.nps.gov/api/v1/parks?';

function getParks(stateCode, maxResults=10) {
  const params = {
    key : apiKey,
    q : stateCode,
    maxResults,
  };
  const queryString = formatQueryString(params);
  const url = searchUrl  + '?' + queryString + '&api_key=' + apiKey;


  fetch(url)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(response.statusText);
    })
    .then(responseJson => displayResults(responseJson))
    .catch(err => {
      $('#js-error-message').text(`Something went wrong: ${err.message}`);
    });

}

/**
 * format query string url function
 */

function formatQueryString (params) {

}
/**
  * display results function
  */

function displayResults() {

}

/**
 * watch form function
 */

 function watchForm() {
     
 }