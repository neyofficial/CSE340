const express = require("express")
const router = express.Router()
const path = require("path")

// Serve static files
router.use(express.static("public"))

// Home route
router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.ejs"))
})

module.exports = router

