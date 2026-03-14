const express = require("express")
const router = express.Router()

// Serve static files from the public folder
router.use(express.static("public"))

// Home route
router.get("/", (req, res) => {
  res.render("index")
})

module.exports = router