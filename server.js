//  OpenShift sample Node application
var morgan  = require('morgan'),
    express = require('express'),
    app     = express();

var router  = require('./router')(app);


app.engine('html', require('ejs').renderFile);
app.use(morgan('combined'))



// error handling
app.use(function(err, req, res, next){
  console.error(err.stack);
  res.status(500).send('Something bad happened!');
});

app.listen(port, ip);
console.log('Server running on http://%s:%s', ip, port);

module.exports = app ;