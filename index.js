const express = require("express");
const app = express();
const port = 8080;
const cors = require("cors");
const models = require("./models");

app.use(express.json());
app.use(cors());
console.log("models:", models);
// app.use("/uploads", express.static("uploads"));
/* post방식 */
app.post("/products", function (req, res) {
  const body = req.body;
  const { product_id, name, brand, kind, price, description, image, seller } = body;
  /* table생성 */
  models.Product.create({
    product_id,
    name,
    brand,
    kind,
    price,
    description,
    image,
    seller,
  })
    .then((result) => {
      console.log("상품생성결과:", result);
      res.send({ result });
    })
    .catch((err) => {
      console.error(err);
    });
});

/* get방식 */
app.get("/products", function (req, res) {
  models.Product.findAll({
    attributes: ["product_id", "name", "brand", "kind", "price", "description", "image", "seller"],
  })
    .then((result) => {
      console.log("product 조회결과:", result);
      res.send({ product: result });
    })
    .catch((err) => {
      console.error(err);
      res.send("error!");
    });
});

app.listen(port, () => {
  console.log("아나바다 쇼핑몰 서버 구동중..");
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
