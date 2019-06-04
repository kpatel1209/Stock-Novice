"use strict";

// model.tblPrices
module.exports = (sequelize, DataTypes) => {

  const tbl_stocks = sequelize.define("tbl_stocks", {
    stock_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      notNull: true
    },
    ticker: {
      type: DataTypes.STRING(15),
      unique: true,
      notNull: true
    },
    stock: {
      type: DataTypes.STRING(31),
      notNull: true
    }
  }, {
    timestamps: false
  });

  // sequelize model table associations
  tbl_stocks.associate = function (db) {

    tbl_stocks.hasMany(db.tbl_prices, {
      sourceKey: "ticker",
      foreignKey: "ticker"
    });

    tbl_stocks.hasMany(db.tbl_transactions, {
      sourceKey: "ticker",
      foreignKey: "ticker"
    });

    tbl_stocks.hasMany(db.tbl_positions, {
      sourceKey: "ticker",
      foreignKey: "ticker"
    });

    // add additional associations inside single tbl_name.associate block

  };

  return tbl_stocks;

};