/* DB모델링 : MAKE A TABLE  
sequelize : 테이블과 칼럼생성*/

module.exports = (sequelize, DataTypes) => {
  /* Product : 별칭 */
  const product = sequelize.define("Product", {
    /* 카테고리 */
    category: {
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
      allowNull: true,
    },
    /* 상품종류 */
    size: {
      type: DataTypes.STRING(10),
      allowNull: true,
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
    imageUrl: {
      type: DataTypes.STRING(300),
      allowNull: true,
    },
    /* 판매자 */
    seller: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    soldout: {
      type: DataTypes.INTEGER(300),
      allowNull: false,
      defaultValue: 0,
    },
  });
  return product;
};
