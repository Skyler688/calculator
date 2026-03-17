const router = require("express").Router();

const homePage = require("./endpoints/root");

router.get("/", homePage);

module.exports = router;
