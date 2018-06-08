//  OpenShift sample Node application
var morgan  = require('morgan'),
    express = require('express'),
    app     = express(),
    router  = require('./router')(app);

var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080,
    ip   = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';

app.engine('html', require('ejs').renderFile);
app.use(morgan('combined'));



// error handling
app.use(function(err, req, res, next){
  console.error(err.stack);
  res.status(500).send('Something bad happened!');
});

app.listen(port, ip);
console.log('Server running on http://%s:%s', ip, port);

module.exports = app ;