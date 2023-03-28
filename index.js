/* require = npm에서 설치한 프로그램을 불러들임. */

/* express module*/
const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
/* html->nodejs cors */
const cors = require("cors");

/* sql 모델링 */
const models = require("./models");
/* 파일업로드관련 */
const multer = require("multer");
// const upload = multer({ dest: "uploads/" });
/* uploads폴더에 파일원본이름 그대로 넣기. */
let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // cb 콜백함수를 통해 전송된 파일 저장 디렉토리 설정
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // cb 콜백함수를 통해 전송된 파일 이름 설정
  },
});
let upload = multer({ storage: storage });

app.use(express.json());
app.use("/uploads", express.static("uploads"));
/* express의 모든요청 허용 */
app.use(cors());
console.log("models:", models);

//webserver app.listen(8080) : 포트 응답
app.listen(port, () => {
  console.log(`Start Server 웹서버 가동중.. port:${port}`);
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

/* 기본루트 */
app.get("/", function (req, res) {
  res.send(`ANBD SERVER : 라우터1/products 라우터2/products2`);
});

/* /products 라우팅 */
app.post("/products", function (req, res) {
  const body = req.body;
  const { category, name, brand, size, price, description, imageUrl, seller } = body;
  /* table생성 */
  models.Product.create({
    category,
    name,
    brand,
    size,
    price,
    description,
    imageUrl,
    seller,
  })
    .then((result) => {
      console.log("상품생성결과:", result);
      res.send({ result }); /* res.send : products페이지에 결과출력 */
    })
    .catch((err) => {
      console.error(err);
    });
});
/* /products2 라우팅 */
app.post("/products2", function (req, res) {
  const body = req.body;
  const { category, name, brand, size, price, description, imageUrl, seller } = body;
  /* table생성 */
  models.Product2.create({
    category,
    name,
    brand,
    size,
    price,
    description,
    imageUrl,
    seller,
  })
    .then((result) => {
      console.log("상품생성결과:", result);
      res.send({ result }); /* res.send : products페이지에 결과출력 */
    })
    .catch((err) => {
      console.error(err);
    });
});

/* /products3 라우팅 */
app.post("/products3", function (req, res) {
  const body = req.body;
  const { category, name, brand, size, price, description, imageUrl, seller } = body;
  /* table생성 */
  models.Product3.create({
    category,
    name,
    brand,
    size,
    price,
    description,
    imageUrl,
    seller,
  })
    .then((result) => {
      console.log("상품생성결과:", result);
      res.send({ result }); /* res.send : products페이지에 결과출력 */
    })
    .catch((err) => {
      console.error(err);
    });
});

/* /products4 라우팅 */
app.post("/products4", function (req, res) {
  const body = req.body;
  const { category, name, brand, size, price, description, imageUrl, seller } = body;
  /* table생성 */
  models.Product4.create({
    category,
    name,
    brand,
    size,
    price,
    description,
    imageUrl,
    seller,
  })
    .then((result) => {
      console.log("상품생성결과:", result);
      res.send({ result }); /* res.send : products페이지에 결과출력 */
    })
    .catch((err) => {
      console.error(err);
    });
});

/* product1 */
app.get("/products", function (req, res) {
  models.Product.findAll({
    order: [["createdAt", "ASC"]],
    attributes: ["id", "category", "name", "brand", "size", "price", "description", "imageUrl", "seller"],
  })
    .then((result) => {
      console.log("product 조회결과:", result);
      /* res.send써도 똑같음 그냥 명확히 하기위해 res.json씀 */
      res.json({ product: result });
    })
    .catch((err) => {
      console.error(err);
      res.send("error!");
    });
});

app.get("/products/:id", (req, res) => {
  const params = req.params;
  const { id } = params;
  models.Product.findOne({
    where: { id: id },
  })
    .then((result) => {
      console.log("조회결과", result);
      res.send({
        product: result,
      });
    })
    .catch((error) => {
      console.error(error);
      res.send("상품조회시 에러가 발생 하였습니다.");
    });
});

/* 추가 */
/* product2 */
app.get("/products2", function (req, res) {
  models.Product2.findAll({
    order: [["createdAt", "ASC"]],
    attributes: ["id", "category", "name", "brand", "size", "price", "description", "imageUrl", "seller"],
  })
    .then((result) => {
      console.log("product2 조회결과:", result);
      /* res.send써도 똑같음 그냥 명확히 하기위해 res.json씀 */
      res.json({ product2: result });
    })
    .catch((err) => {
      console.error(err);
      res.send("error!");
    });
});

app.get("/products2/:id", (req, res) => {
  const params = req.params;
  const { id } = params;
  models.Product2.findOne({
    where: { id: id },
  })
    .then((result) => {
      console.log("조회결과", result);
      res.send({
        product2: result,
      });
    })
    .catch((error) => {
      console.error(error);
      res.send("상품조회시 에러가 발생 하였습니다.");
    });
});

app.post("/purchase/:id", (req, res) => {
  const { id } = req.params;
  models.Product.update(
    {
      soldout: 1,
    },
    {
      where: { id },
    }
  )
    .then((result) => {
      res.send({
        result: true,
      });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("에러가발생했습니다");
    });
});

/* 파일업로드 */
/* 파일여러개면 single말고 array로 쓴다. */
app.post("/image", upload.single("image"), (req, res) => {
  const file = req.file;
  res.send({
    imageUrl: file.path,
  });
});
