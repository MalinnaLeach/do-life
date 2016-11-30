var models = require('../models');

exports.tasks = function (req, res, next) {
  models.Task.findAll({include: [{model: models.Tag}]}).then(function(tasks){
    res.status(200).json({
      tasks
    })
  })
}

exports.newTask = function (req, res, next) {
    models.Task.create({description: req.body.description, status: ""})
    .then(function() {
      res.redirect('/');
    });
}

exports.deleteTask = function (req, res, next) {
  models.Task.find({where: {id: req.body.id}}).then(function(task) {
    return task.destroy();
  })
}

exports.updateStatus = function (req, res, next) {
  models.Task.find({ where: {id: req.body.id} }).then(function(task) {
    return task.update({ status: req.body.status });
  })
}

exports.addTag = function (req, res, next) {
  models.Task.find({ where: {id: req.body.id} }).then(function(task) {
    models.Tag.findOrCreate({where: {name: req.body.tag}}).then(function(tag) {
      return task.addTag([tag[0].id]);
    })
  })
}

exports.tags = function (req, res, next) {
  models.Tag.findAll().then(function(tags){
    res.status(200).json({
      tags
    })
  })
}

exports.tasktags = function (req, res, next) {
  models.TaskTag.findAll().then(function(tags){
    res.status(200).json({
      tags
    })
  })
}

exports.homepage = function(req, res, next) {
  res.redirect('index.html');
}
