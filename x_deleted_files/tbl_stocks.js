"use strict";

// model.tblStocks
module.exports = (sequelize, DataTypes) => {

  const tbl_stocks = sequelize.define("tbl_stocks", {
    stock_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      notNull: true
    },
    stock: {
      type: DataTypes.STRING(255),
      notNull: true
    },
    ticker: {
      type: DataTypes.STRING(255),
      unique: true,
      notNull: true
    }
  }, {
    timestamps: false
  });

  /*
  tblUsers.associate = function (db) {

    tblUsers.belongsTo(db.tblTransactions, {
      foreignKey: "ticker",
      targetKey: "ticker"
    });

    tblStocks.hasMany(db.tblTransactions, {
      foreignKey: "ticker",
      sourceKey: "ticker"
    });

    // add another association inside single tblUsers.associate block

  };
  */
 
  return tbl_stocks;

};
