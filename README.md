
# 아나바다 중고 쇼핑몰 프로젝트

> PWA 앱으로 제작한 react(프론트엔드) + node.js(웹서버) 프로젝트 중고 쇼핑몰 입니다.<br>
> 프론트는 리액트를 사용하여 제작, 백엔드는 nodejs의 express를 활용하여 구현한 프로젝트입니다.

---

## 🔗 배포URL

[https://port-0-anbd-db-sever-6g2llfcbue07.sel3.cloudtype.app/]

---

## 기술스택

![Nodejs][node-image]&nbsp;&nbsp;&nbsp;![Express][express-image] ![Sequelize][sequelize-image] ![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)

---

# 개발 환경 설정

```bash
$ npm i cors ^2.8.5
$ npm i express ^4.18.2
$ npm i multer ^1.4.5-lts.1
$ npm i sequelize ^6.29.3
$ npm i sqlite3 ^5.1.6
$ node index.js
```

# API

- SERVER

  - sqlite db (create)
  - [post] "/products" 상품 등록
  - [post] "/image" 이미지 업로드
  - [post] "/purchase/:id" 상품구매 (update)

  - [get] "/products" 상품 정보 조회
  - [get] "/products/:id" 상품 상세 정보 조회

---

- 테이블구조<br><br> -![image](https://user-images.githubusercontent.com/120350411/228760902-5b976b97-476a-4773-b386-e32a7fb93d6e.png)

[express-image]: https://img.shields.io/badge/express-000000?style=for-the-badge&logo=express&logoColor=white
[pwa-image]: https://img.shields.io/badge/pwa-6109AC?style=for-the-badge&logo=pwa&logoColor=white
[sequelize-image]: https://img.shields.io/badge/sequelize-52B0E7?style=for-the-badge&logo=sequelize&logoColor=white
[node-image]: https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white
[npm-image]: https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white
