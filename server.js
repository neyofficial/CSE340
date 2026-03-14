/* ******************************************
 * Primary server file
 ******************************************/

const express = require("express")
require("dotenv").config()

const app = express()

// Import static routes
const staticRoutes = require("./routes/static")

// View engine
app.set("view engine", "ejs")

// Use static routes
app.use(staticRoutes)

// Index Route
app.get("/", function (req, res) {
  res.render("index", { title: "Home" })
})

// Server
const port = process.env.PORT || 5500

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})