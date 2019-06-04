"use strict";

// model.tblPrices
module.exports = (sequelize, DataTypes) => {

  const tbl_prices = sequelize.define("tbl_prices", {
    price_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      notNull: true
    },
    ticker_period: {
      type: DataTypes.STRING(15),
      unique: true,
      notNull: true
    },
    price: {
      type: DataTypes.INTEGER,
      notNull: true
    }
  }, {
    timestamps: false
  });

  // sequelize model table associations
  tbl_prices.associate = function (db) {

    tbl_prices.belongsTo(db.tbl_stocks, {
      foreignKey: "ticker",
      targetKey: "ticker"
    });

    tbl_prices.hasMany(db.tbl_transactions, {
      sourceKey: "ticker_period",
      foreignKey: "ticker_period"
    });

    tbl_prices.hasMany(db.tbl_positions, {
      sourceKey: "ticker_period",
      foreignKey: "ticker_period"
    });

    // add additional associations inside single tbl_name.associate block

  };

  return tbl_prices;

};