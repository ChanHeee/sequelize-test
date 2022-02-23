const express = require("express")
const Item = require("../models/item")

const router = express.Router()

router.get("/", (req, res) => {
  res.send("hi")
})

router.post("/", async (req, res, next) => {
  try {
    const exItem = await Item.findOne({ where: { name: req.body.name } })

    console.log(exItem)
    if (exItem) {
      res.json({
        error: {
          message: "Item already exists",
        },
      })
    } else {
      await Item.create({
        name: req.body.name,
        quantity: req.body.quantity,
      })
      res.redirect("/")
    }
  } catch (error) {
    console.error(error)
    next(error)
  }
})

module.exports = router
