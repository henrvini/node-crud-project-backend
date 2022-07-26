const { Model, DataTypes } = require("sequelize");

class Content extends Model {
  static init(sequelize) {
    super.init(
      {
        module_id: {
          allowNull: false,
          type: DataTypes.INTEGER,
          references: {
            model: "CourseModules",
            key: "id",
          },
          onUpdate: "CASCADE",
          onDelete: "CASCADE",
        },
        title: {
          allowNull: false,
          type: DataTypes.STRING,
        },
        content: {
          allowNull: false,
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
    this.belongsTo(models.CourseModule, { foreignKey: "module_id", as: "module" });
  }
}

module.exports = Content;
