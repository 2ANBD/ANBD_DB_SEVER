/* DB모델링 : MAKE A TABLE  
sequelize : 테이블과 칼럼생성*/

module.exports = (sequelize, DataTypes) => {
  const product = sequelize.define("Product", {
    /* 상품사진 */
    imageUrl: {
      type: DataTypes.STRING(300),
      allowNull: true,
    },
    /* 상품이름 */
    name: {
      type: DataTypes.STRING(100),
      allowNull: false /* == not null */,
    },
    /* 상품종류 */
    kind: {
      type: DataTypes.STRING(100),
      allowNull: false /* == not null */,
    },
    /* 가격 */
    price: {
      type: DataTypes.INTEGER(10),
      allowNull: false /* == not null */,
    },
    /* 판매자 */
    seller: {
      type: DataTypes.STRING(30),
      allowNull: false /* == not null */,
    },
    /* 상품설명 */
    description: {
      type: DataTypes.STRING(300),
      allowNull: false,
    },
  });
  return product;
};
