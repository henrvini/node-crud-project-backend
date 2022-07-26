const { Model, DataTypes } = require("sequelize");

class CourseModule extends Model {
  static init(sequelize) {
    super.init(
      {
        title: {
          allowNull: false,
          type: DataTypes.STRING,
        },
        description: {
          allowNull: false,
          type: DataTypes.STRING,
        },
        course_id: {
          allowNull: false,
          type: DataTypes.INTEGER,
          references: {
            model: "Courses",
            key: "id",
          },
          onUpdate: "CASCADE",
          onDelete: "CASCADE",
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
    this.belongsTo(models.Course, { foreignKey: "course_id", as: "course" });
    this.belongsTo(models.User, { foreignKey: "user_id", as: "user" });
    this.hasMany(models.Content, { foreignKey: "module_id", as: "Contents" });
  }
}

module.exports = CourseModule;
