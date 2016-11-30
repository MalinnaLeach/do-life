const express = require('express');
const _ourController = require('./controllers/_our-controller');

module.exports = function(app) {
  const apiRoutes = express.Router();
  apiRoutes.get('/tasks', _ourController.tasks);
  apiRoutes.post('/tasks', _ourController.newTask);
  apiRoutes.post('/tasks/delete', _ourController.deleteTask);
  apiRoutes.post('/tasks/status', _ourController.updateStatus);
  apiRoutes.post('/tasks/tag', _ourController.addTag);
  apiRoutes.get('/tags', _ourController.tags);
  apiRoutes.get('/tasktags', _ourController.tasktags);
  app.use('/api', apiRoutes);

  const homepage = express.Router();
  app.use('', homepage)
  app.use(express.static('public/build'));
  homepage.get('/',  _ourController.homepage)
}
