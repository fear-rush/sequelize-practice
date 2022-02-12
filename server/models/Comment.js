module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define("comment", {
    commentBody: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  Comment.associate = (models) => {
    Comment.belongsTo(models.post);
  };

  return Comment;
};
