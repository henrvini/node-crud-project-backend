const User = require("../models/User");

module.exports = {
  async index(req, res) {
    const users = await User.findAll();
    return res.json(users);
  },

  async store(req, res) {
    const { name, email, status } = req.body;
    const user = await User.create({ name, email, status });
    return res.json(user);
  },

  async detail(req, res) {
    const { user_id } = req.params;

    const user = await User.findByPk(user_id);

    return res.json(user);
  },

  async update(req, res) {
    const { name, email, status, user_id } = req.body;

    User.update(
      {
        name,
        email,
        status,
      },
      {
        where: { id: user_id },
      }
    );
    return res.status(200).json({ msg: "User updated successfully" });
  },

  async delete(req, res) {
    const { user_id } = req.params;

    const user = await User.findByPk(user_id);

    if (!user) {
      return res.status(400).json({ error: "User not found" });
    }

    User.destroy({
      where: { id: user_id },
    });
    return res.status(200).json({ msg: "User deleted successfully" });
  },
};
