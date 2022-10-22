const express = require("express");
const recipeController = require("../controllers/recipeController");

const router = express.Router();

/**
 * App Routes
 **/
router.get("/", recipeController.homepage);

module.exports = router;
