const { Model, DataTypes } = require("sequelize");

class Course extends Model {
  static init(sequelize) {
    super.init(
      {
        unique_code: {
          allowNull: false,
          type: DataTypes.INTEGER,
        },
        title: {
          allowNull: false,
          type: DataTypes.STRING,
        },
        description: {
          allowNull: false,
          type: DataTypes.STRING,
        },
        user_id: {
          allowNull: false,
          type: DataTypes.INTEGER,
          references: {
            model: "Users",
            key: "id",
          },
          onUpdate: "CASCADE",
          onDelete: "CASCADE",
        },
      },
      {
        sequelize,
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: "user_id", as: "user" });
    this.hasMany(models.CourseModule, {
      foreignKey: "course_id",
      as: "CourseModules",
    });
  }
}

module.exports = Course;
