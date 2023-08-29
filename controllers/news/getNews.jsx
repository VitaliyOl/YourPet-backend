const NewsModel = require("../../models/newsSchema.jsx");

const news = async (req, res, next) => {
  const { page, limit } = req.query;

  const newsAll = await NewsModel.find({});
  const news = await NewsModel.find({}, null, {
    skip: (page - 1) * limit,
    limit: limit,
  });

  console.log();

  res.json({ news, total: newsAll.length });
};

module.exports = news;
