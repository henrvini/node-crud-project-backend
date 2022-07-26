const User = require("../models/User");
const Course = require("../models/Course");
const CourseModule = require("../models/CourseModule");

module.exports = {
  async index(req, res) {
    const { course_id } = req.params;

    const course = await Course.findByPk(course_id, {
      include: { association: "CourseModules" },
    });

    if (!course) {
      return res.status(400).json({ error: "User not found" });
    }

    return res.json(course.CourseModules);
  },

  async indexAll(req, res) {
    return res.json(await CourseModule.findAll());
  },

  async detail(req, res) {
    const { module_id } = req.params;

    return res.json(await CourseModule.findByPk(module_id));
  },

  async store(req, res) {
    const { course_id, user_id, title, description } = req.body;

    const user = await User.findByPk(user_id);
    const course = await Course.findByPk(course_id);

    if (!user || !course) {
      return res.status(400).json({ error: "User or Course not found" });
    }

    const courseModule = await CourseModule.create({
      title,
      description,
      course_id,
      user_id,
    });
    return res.json(courseModule);
  },

  async update(req, res) {
    const { id, title, description } = req.body;

    const courseModule = await CourseModule.findByPk(id);

    if (!courseModule) {
      return res.status(400).json({ error: "Module not found" });
    }

    CourseModule.update(
      {
        id,
        title,
        description,
      },
      {
        where: { id },
      }
    );
    return res.status(200).json({ msg: "Module updated successfully" });
  },

  async delete(req, res) {
    const { module_id } = req.params;

    const courseModule = await CourseModule.findByPk(module_id);

    if (!courseModule) {
      return res.status(400).json({ error: "Module not found" });
    }

    CourseModule.destroy({
      where: { id: module_id },
    });
    return res.status(200).json({ msg: "Module deleted successfully" });
  },
};
