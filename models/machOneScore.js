module.exports = (sequelize, DataTypes) => {
    const machOneScore = sequelize.define('machOneScore', {
      score: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1],
        },
      },
    });
  
    machOneScore.associate = (models) => {
      machOneScore.belongsTo(models.User, {
        foreignKey: {
          allowNull: false,
        },
      });
    };
  
    return machOneScore;
  };
  