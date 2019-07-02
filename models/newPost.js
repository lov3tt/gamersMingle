module.exports = function(sequelize, DataTypes) {
    var newPost = sequelize.define("newPost", {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      body: {
        type: DataTypes.TEXT,
        allowNull: false,
        len: [1]
      }
    });
  
    newPost.associate = function(models) {
    
      newPost.belongsTo(models.user, {
        foreignKey: {
          allowNull: true
        }
      });
    };
  
    return newPost;
  };