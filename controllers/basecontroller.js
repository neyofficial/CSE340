const utilities = require("../utilities/")

const baseController = {}

baseController.buildHome = async function (req, res, next) {
  const nav = await utilities.getNav()
  exports.buildHome = async function (req, res) {
  res.render("index", { title: "Home" })
}
  res.render("index", {
    title: "Home",
    nav,
  })
}

module.exports = baseController