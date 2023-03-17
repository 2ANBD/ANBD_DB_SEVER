const express = require("express");
const app = express();
const port = 8080;
const cors = require("cors");
const models = require("./models");

app.use(express.json());
app.use(cors());
app.use("/uploads", express.static("uploads"));

app.get("/products", function (req, res) {
  models.Product.findAll({
    attributes: [/* "imageUrl", */ "name", "kind", "price", "seller", "description"],
  })
    .then((result) => {
      console.log("product 조회결과:", result);
      res.send({ product: result });
    })
    .catch((err) => {
      console.error(err);
      res.send("에러발생");
    });
});

app.post("/products", function (req, res) {
  const body = req.body;

  const { name, description, price, seller } = body;
  models.Product.create({
    name,
    kind,
    price,
    seller,
    description,
  })
    .then((result) => {
      console.log("상품생성결과:", result);
      res.send({ result });
    })
    .catch((err) => {
      console.error(err);
    });
});

app.listen(port, () => {
  console.log("기명섭의 정신이 돌아가고 있습니다.");
  models.sequelize
    .sync()
    .then(function () {
      console.log("연결성공!");
    })
    .catch(function () {
      console.error("error");
      console.log("error");
      process.exit(); //sever 종료
    });
});
