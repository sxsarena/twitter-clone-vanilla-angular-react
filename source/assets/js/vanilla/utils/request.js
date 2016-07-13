import { Promise } from 'es6-promise';

/**
 * Request to the json type using XMLHttpRequest
 *
 * @param {Object} options - configuration for the request
 * @param {function} successHandler - for success in the request
 * @param {function} errorHandler - for failed requests
 *
 */
export default function makeRequestJson(options, successHandler, errorHandler) {
  let xmlhttp  = new XMLHttpRequest();
  let headers  = options.headers;
  let dataSend = options.data || null;
  let method   = options.method || 'GET';

  return new Promise(function(resolve, reject){
    xmlhttp.open(method, options.url, true);

    for (let header in headers) {
      if (headers.hasOwnProperty(header)) {
        xmlhttp.setRequestHeader(header, headers[header]);
      }
    }

    xmlhttp.onload = () => {
      if (xmlhttp.status >= 200 && xmlhttp.status < 400) {
        resolve( JSON.parse(xmlhttp.responseText) );
      } else {
        reject(xmlhttp.statusText);
      }
    };

    xmlhttp.onerror = function() {
      reject(xmlhttp.statusText);
    };

    xmlhttp.send(dataSend);
  });
}
