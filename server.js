var express = require('express');
var morgan  = require('morgan');
var bodyParser = require('body-parser');
var member = require('./routes/member');
var app     = express();

var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080,
    ip   = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';


app.engine('html', require('ejs').renderFile);
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.render('index.html', { pageCountMessage : null});
});

app.use('/members', member);

// error handling
app.use(function(err, req, res, next){
  console.error(err.stack);
  res.status(500).send('Something bad happened!');
});

app.listen(port, ip);
console.log('Server running on http://%s:%s', ip, port);

module.exports = app ;
/*

var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080,
    ip   = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';







app.listen(port, ip, () => {
  console.log('Server running on http://%s:%s', ip, port);
});

module.exports = app ;
*/