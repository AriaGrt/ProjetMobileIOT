const https = require('https');

module.exports = {
    postText: async (req, res, next) => {
        req.body.text = req.body.text || "";
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
                if(typeof body_.documents[0] === 'undefined'){
                    res.send('');
                }else{
                    res.send(body_.documents[0].detectedLanguages[0].name);
                }
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
        };

        let documents = {
            'documents': [{
                'id': 1,
                'text': req.body.text
            }]
        };

        get_language(documents);
    }
};