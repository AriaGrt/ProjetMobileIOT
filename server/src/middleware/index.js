// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  let https = require('https');

// **********************************************
// *** Update or verify the following values. ***
// **********************************************

// Replace the accessKey string value with your valid access key.
  let accessKey = 'bbfee46e00dc4866a3b62d767494faf6';

  let uri = 'westeurope.api.cognitive.microsoft.com';
  let path = '/text/analytics/v2.0/languages';

  let response_handler = function (response) {
    let body = '';
    response.on('data', function (d) {
      body += d;
    });
    response.on('end', function () {
      let body_ = JSON.parse(body);
      let body__ = JSON.stringify(body_, null, '  ');
      console.log(body__);
    });
    response.on('error', function (e) {
      console.log('Error: ' + e.message);
    });
  };

  let get_language = function (documents) {
    let body = JSON.stringify(documents);

    let request_params = {
      method: 'POST',
      hostname: uri,
      path: path,
      headers: {
        'Ocp-Apim-Subscription-Key': accessKey,
      }
    };

    let req = https.request(request_params, response_handler);
    req.write(body);
    req.end();
  }

  let documents = {
    'documents': [
      {'id': '1', 'text': 'This is a document written in English.'},
      {'id': '2', 'text': 'Este es un document escrito en Español.'},
      {'id': '3', 'text': '这是一个用中文写的文件'}
    ]
  };

  get_language(documents);
};
