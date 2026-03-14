/* ******************************************
 * server.js
 * Primary file of the application
 ******************************************/

/* ***********************
 * Require Statements
 *************************/
const express = require("express")
require("dotenv").config()

const app = express()
const staticRoutes = require("./routes/static")

/* ***********************
 * Routes
 *************************/
app.use("/", staticRoutes)

/* ***********************
 * Local Server Information
 *************************/
const port = process.env.PORT || 5500
const host = process.env.HOST || "localhost"

/* ***********************
 * Log statement to confirm server operation
 *************************/
app.listen(port, () => {
  console.log(`App listening at http://${host}:${port}`)
})