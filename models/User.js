const { Model, DataTypes } = require("sequelize");

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: {
          allowNull: false,
          type: DataTypes.STRING,
        },
        email: {
          allowNull: false,
          unique: true,
          type: DataTypes.STRING,
        },
        status: {
          allowNull: false,
          type: DataTypes.BOOLEAN,
        },
      },
      {
        sequelize,
      }
    );
  }

  static associate(models) {
    this.hasMany(models.Course, { foreignKey: "user_id", as: "Courses" });
    this.hasMany(models.CourseModule, {
      foreignKey: "user_id",
      as: "CourseModules",
    });
  }
}

module.exports = User;
