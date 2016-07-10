/**
 * Request to the json type using XMLHttpRequest
 *
 * @param {Object} options - configuration for the request
 * @param {function} successHandler - for success in the request
 * @param {function} errorHandler - for failed requests
 *
 */
export default function makeRequest(options, successHandler, errorHandler) {
  let xmlhttp  = new XMLHttpRequest();
  let headers  = options.headers;
  let dataSend = options.data || null;

  xmlhttp.open('GET', options.url, true);

  xmlhttp.responseType = 'json';

  for (let header in headers) {
    if (headers.hasOwnProperty(header)) {
      xmlhttp.setRequestHeader(header, headers[header]);
    }
  }

  xmlhttp.onreadystatechange = () => {

    if (xmlhttp.readyState === xmlhttp.DONE) {
      if (xmlhttp.status === 200) {
        successHandler && successHandler( xmlhttp.response );
      } else {
        errorHandler && errorHandler(xmlhttp.status);
      }
    }
  };

  xmlhttp.send(dataSend);
}
