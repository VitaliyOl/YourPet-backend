const NewsModel = require("../../models/newsSchema.jsx");
const { HttpError } = require("../../helpers");

const findNewsByFilters = async (req, res) => {
  const { sex, year, page, limit } = req.query;
  const filter = {};

  if (sex) {
    filter.sex = sex;
  }

  if (year) {
    filter.year = year;
  }

  try {
    const news = await NewsModel.find(filter)
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

module.exports = findNewsByFilters;
