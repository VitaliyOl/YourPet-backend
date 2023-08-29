const express = require("express");
const news = require("../../controllers/news/getNews.jsx");
const ctrlWrapper = require("../../helpers/ctrlWrapper");

const router = express.Router();

router.get("/", ctrlWrapper(news));

module.exports = router;
