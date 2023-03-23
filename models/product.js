/* DB모델링 : MAKE A TABLE  
sequelize : 테이블과 칼럼생성*/

module.exports = (sequelize, DataTypes) => {
  /* Product : 별칭 */
  const product = sequelize.define("Product", {
    /* 상품번호 pk */
    product_id: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    /* 상품이름 */
    name: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    /* 상품브랜드 */
    brand: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    /* 상품종류 */
    kind: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    /* 판매가격 */
    price: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
    },
    /* 상품설명 */
    description: {
      type: DataTypes.STRING(1000),
      allowNull: true,
    },
    /* 상품사진 */
    image: {
      type: DataTypes.STRING(300),
      allowNull: false,
    },
    /* 판매자 */
    seller: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
  });
  return product;
};
