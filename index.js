const express = require('express'),
      bodyParser = require('body-parser'),
      cors = require('cors'),
      app = express();
const router = require('./router');
var models = require('./models');

var port = env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
router(app);
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));


models.sequelize.sync().then(function() {
  app.listen(port);
  console.log('Your server is running on port ' + port + '.');
});
