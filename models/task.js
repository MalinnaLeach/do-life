'use strict';
module.exports = function(sequelize, DataTypes) {
  var Task = sequelize.define('Task', {
    description: DataTypes.TEXT,
    status: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Task.belongsToMany(models.Tag, {through: 'TaskTag', foreignKey: 'taskId'});
      }
    }
  });
  return Task;
};
