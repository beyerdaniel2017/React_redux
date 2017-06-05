const express     = require('express');
const bodyParser  = require('body-parser');
const morgan      = require('morgan');
const path        = require('path');

const port = process.env.PORT || 8080;

const app = express();

// Log requests to console
app.use(morgan('dev'));

// Use body-parser to get POST requests for API use
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static(path.join(__dirname, 'lib/public')));

app.get('*', function(req, res) {
    res.sendfile('./index.html');
});

// START THE SERVER
app.listen(port, function () {
    console.log('Magic happens on port ' + port);
});