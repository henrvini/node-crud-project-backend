"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Courses", [
      {
        id: 1,
        unique_code: 503,
        title: "Javascript",
        description: "Learn how to program using Javascript",
        createdAt: new Date(),
        updatedAt: new Date(),
        user_id: 1,
      },
      {
        id: 2,
        unique_code: 501,
        title: "Programming Logic",
        description: "Learn Programming Logic",
        createdAt: new Date(),
        updatedAt: new Date(),
        user_id: 1,
      },
      {
        id: 3,
        unique_code: 312,
        title: "Computing",
        description: "Learn the computer basics",
        createdAt: new Date(),
        updatedAt: new Date(),
        user_id: 1,
      },
      {
        id: 4,
        unique_code: 250,
        title: "Backend Developer",
        description: "Learn how to became a BackEnd Developer",
        createdAt: new Date(),
        updatedAt: new Date(),
        user_id: 5,
      },
      {
        id: 5,
        unique_code: 251,
        title: "Frontend Developer",
        description: "Learn how to became a FrontEnd Developer",
        createdAt: new Date(),
        updatedAt: new Date(),
        user_id: 3,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Courses", null, {});
  },
};
