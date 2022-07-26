"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("CourseModules", [
      {
        id: 1,
        course_id: 1,
        title: "Objects",
        description: "Learn how to use and understand objects",
        createdAt: new Date(),
        updatedAt: new Date(),
        user_id: 1,
      },
      {
        id: 2,
        course_id: 1,
        title: "Hooks",
        description: "Learn how to use and understand hooks",
        createdAt: new Date(),
        updatedAt: new Date(),
        user_id: 1,
      },
      {
        id: 3,
        course_id: 1,
        title: "Variables",
        description: "Learn how to use and understand variables",
        createdAt: new Date(),
        updatedAt: new Date(),
        user_id: 1,
      },
      {
        id: 4,
        course_id: 1,
        title: "JSON",
        description: "Learn how to use and understand JSON",
        createdAt: new Date(),
        updatedAt: new Date(),
        user_id: 1,
      },
      {
        id: 5,
        course_id: 1,
        title: "Functions",
        description: "Learn how to use and understand Functions",
        createdAt: new Date(),
        updatedAt: new Date(),
        user_id: 1,
      },
      {
        id: 6,
        course_id: 2,
        title: "Algorithms",
        description: "Learn what algorithms is and how it works",
        createdAt: new Date(),
        updatedAt: new Date(),
        user_id: 1,
      },
      {
        id: 7,
        course_id: 2,
        title: "Technology",
        description: "Learn what technology is and why is so important",
        createdAt: new Date(),
        updatedAt: new Date(),
        user_id: 1,
      },
      {
        id: 8,
        course_id: 3,
        title: "Hardware",
        description: "Learn what hardware is and how it works",
        createdAt: new Date(),
        updatedAt: new Date(),
        user_id: 1,
      },
      {
        id: 9,
        course_id: 3,
        title: "Internet",
        description: "Learn what internet is and how it works",
        createdAt: new Date(),
        updatedAt: new Date(),
        user_id: 1,
      },
      {
        id: 10,
        course_id: 3,
        title: "Software",
        description: "Learn what software is and how it works",
        createdAt: new Date(),
        updatedAt: new Date(),
        user_id: 1,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("CourseModules", null, {});
  },
};
