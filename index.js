const express = require("express")
const morgan = require("morgan")
const nunjucks = require("nunjucks")

const pageRouter = require("./routes/page")

const app = express()
app.set("view engine", "html")
nunjucks.configure("views", {
  express: app,
  watch: true,
})

app.use(morgan("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use("/", pageRouter)

app.use((req, res, next) => {
  const error = new Error(`${req.method} ${req.url} 라우터가 없습니다.`)
  error.status = 404
  next(error)
})

app.use((err, req, res, next) => {
  res.locals.message = err.message
  res.locals.error = err
  res.status(err.status || 500)
  res.render("error")
})

app.listen(5000, () => {
  console.log("5000번 포트에서 대기 중")
})
