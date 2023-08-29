const express = require("express");
const news = require("../../controllers/news/getNews.jsx");
const findNews = require("../../controllers/news/findNews.jsx");
const ctrlWrapper = require("../../helpers/ctrlWrapper");

const router = express.Router();

router.get("/", ctrlWrapper(news));

router.get("/title", ctrlWrapper(findNews));

module.exports = router;
