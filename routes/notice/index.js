const express = require("express");
const notice = require("../../controllers/pets/getNotices");

const router = express.Router();

router.get("/", notice);

module.exports = router;
