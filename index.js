exports.mime = 'text/coffeescript';
exports.processor = function (pathname, headers, body, callback) {
    try {
        body = require('coffee-script').compile(body.toString());
        headers['Content-Type'] = 'application/javascript';
    } catch (err) {
        console.error('Failed to compile CoffeeScript file, ' + pathname);
        console.error(err.stack || err.message || err.toString());
    }
    callback(headers, body);
};
