const User = require("../models/User");
const Course = require("../models/Course");

module.exports = {
  async index(req, res) {
    const course = await Course.findAll();
    return res.json(course);
  },

  async detail(req, res) {
    const { course_id } = req.params;

    const course = await Course.findByPk(course_id);

    return res.json(course);
  },

  async store(req, res) {
    const { unique_code, title, description, user_id } = req.body;

    const user = await User.findByPk(user_id);

    if (!user) {
      return res.status(400).json({ error: "User not found" });
    }

    const course = await Course.create({
      unique_code,
      title,
      description,
      user_id,
    });
    return res.status(200).json(course);
  },

  async update(req, res) {
    const { id, unique_code, title, description, user_id } = req.body;

    const user = await User.findByPk(user_id);

    if (!user) {
      return res.status(400).json({ error: "User not found" });
    }

    Course.update(
      {
        unique_code,
        title,
        description,
        user_id,
      },
      {
        where: { id },
      }
    );
    return res.status(200).json({ msg: "Course updated successfully" });
  },

  async delete(req, res) {
    const { course_id } = req.params;

    const course = await Course.findByPk(course_id);

    if (!course) {
      return res.status(400).json({ error: "Course not found" });
    }

    Course.destroy({
      where: { id: course_id },
    });
    return res.status(200).json({ msg: "Course deleted successfully" });
  },
};
