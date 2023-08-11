const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    static associate(models) {
      Post.belongsTo(models.Photo, {
        foreignKey: 'id',
        target_key: 'idImages'
      });
      
    }
  }

  Post.init(
    {
      // Atributos del modelo 'Post'
      title: DataTypes.STRING,
      price: DataTypes.FLOAT,
      stay: DataTypes.STRING,
      summary: DataTypes.STRING,
      description: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Post',
    }
  );
  return Post;
};
