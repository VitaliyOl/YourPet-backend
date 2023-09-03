const express = require("express");
const news = require("../../controllers/news/getNews.jsx");
const findNews = require("../../controllers/news/findNews.jsx");
const filteredNews = require("../../controllers/news/filteredNews.jsx");
const ctrlWrapper = require("../../helpers/ctrlWrapper");

const router = express.Router();

router.get("/", ctrlWrapper(news));

router.get("/title", ctrlWrapper(findNews));

router.get("/filter", ctrlWrapper(filteredNews));

module.exports = router;
