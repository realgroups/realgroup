module.exports = function(app, db, initDb)
{
  app.get('/', function (req, res) {
      // try to initialize the db on every request if it's not already
      // initialized.
      if (!db) {
        initDb(function(err){});
      }
      if (db) {
        var col = db.collection('counts');
        // Create a document with request IP and current time of request
        col.insert({ip: req.ip, date: Date.now()});
        col.count(function(err, count){
          if (err) {
            console.log('Error running count. Message:\n'+err);
          }
          res.render('index.html', { pageCountMessage : count, dbInfo: dbDetails });
        });
      } else {
        res.render('index.html', { pageCountMessage : null});
      }
    });
    
    app.get('/pagecount', function (req, res) {
      // try to initialize the db on every request if it's not already
      // initialized.
      if (!db) {
        initDb(function(err){});
      }
      if (db) {
        db.collection('counts').count(function(err, count ){
          res.send('{ pageCount: ' + count + '}');
        });
      } else {
        res.send('{ pageCount: -1 }');
      }
    });
}
