const express = require("express")
const Item = require("../models/item")

const router = express.Router()

router.get("/", async (req, res, next) => {
  try {
    const items = await Item.findAll()
    res.render("main", { items })
  } catch (err) {
    console.log(err)
    next(err)
  }
})

module.exports = router
