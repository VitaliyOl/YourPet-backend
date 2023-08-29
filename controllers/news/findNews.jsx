const NewsModel = require("../../models/newsSchema.jsx");
const { HttpError } = require("../../helpers");

const findNews = async (req, res) => {
  const { title, page, limit } = req.query;

  if (!title) {
    throw HttpError(400, "Your request is empty");
  }

  const regex = new RegExp(title, "i");

  try {
    const news = await NewsModel.find({ title: regex })
      .skip((page - 1) * limit)
      .limit(limit);

    if (news.length === 0) {
      throw HttpError(404, "No results for your request");
    }

    res.json({ news, total: news.length });
  } catch (error) {
    res
      .status(error.status || 500)
      .json({ error: error.message || "An error occurred" });
  }
};

module.exports = findNews;
