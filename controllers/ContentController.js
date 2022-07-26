const CourseModule = require("../models/CourseModule");
const Content = require("../models/Content");

module.exports = {
  async index(req, res) {
    const { module_id } = req.params;

    const courseModule = await CourseModule.findByPk(module_id, {
      include: { association: "Contents" },
    });

    if (!courseModule) {
      return res.status(400).json({ error: "Module not found" });
    }
    return res.json(courseModule.Contents);
  },

  async indexAll(req, res) {
    return res.json(await Content.findAll());
  },

  async detail(req, res) {
    const { content_id } = req.params;

    return res.json(await Content.findByPk(content_id));
  },

  async store(req, res) {
    const { title, content, status, module_id } = req.body;

    const courseModule = await CourseModule.findByPk(module_id);

    if (!courseModule) {
      return res.status(400).json({ error: "Module not found" });
    }

    const _content = await Content.create({
      title,
      content,
      status,
      module_id,
    });
    return res.json(_content);
  },

  async update(req, res) {
    const { title, content, status, content_id } = req.body;

    const content_ = await Content.findByPk(content_id);

    if (!content_) {
      return res.status(400).json({ error: "Content not found " });
    }

    Content.update(
      {
        title,
        content,
        status,
      },
      {
        where: { id: content_id },
      }
    );
    return res.status(200).json({ msg: "Content updated successfully" });
  },

  async updateStatus(req, res) {
    const { id, title, content, status } = req.body;

    Content.update(
      {
        title,
        content,
        status,
      },
      {
        where: { id },
      }
    );

    return res.status(200).json({ msg: "Content updated successfully" });
  },

  async delete(req, res) {
    const { content_id } = req.params;

    const content = await Content.findByPk(content_id);

    if (!content) {
      return res.status(400).json({ error: "Content not found" });
    }

    Content.destroy({
      where: { id: content_id },
    });
    return res.status(200).json({ msg: "Content deleted successfully" });
  },
};
