'use strict';
module.exports = function(sequelize, DataTypes) {
  var TaskTag = sequelize.define('TaskTag', {
    taskId: DataTypes.INTEGER,
    tagId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        
      }
    }
  });
  return TaskTag;
};
