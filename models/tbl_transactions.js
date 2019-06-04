"use strict";

// model.tblTransactions
module.exports = (sequelize, DataTypes) => {

  const tbl_transactions = sequelize.define("tbl_transactions", {
    trx_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      notNull: true
    },
    user_name: {
      type: DataTypes.STRING(255),
      notNull: true
    },
    monthly_period: {
      type: DataTypes.INTEGER,
      notNull: true
    },
    buy_sell: {
      type: DataTypes.STRING(15),
      notNull: true
    },
    ticker: {
      type: DataTypes.STRING(15),
      notNull: true
    },
    ticker_period: {
      type: DataTypes.STRING(15),
      notNull: true
    },
    trx_shares: {
      type: DataTypes.INTEGER,
      notNull: true,
      defaultValue: 0
    },
    trx_price: {
      type: DataTypes.INTEGER,
      notNull: true
    },
    trx_value: {
      type: DataTypes.INTEGER,
      notNull: true,
      defaultValue: 0
    }
  }, {
    underscored: true,
    timestamps: true
  });

  // sequelize model table associations
  tbl_transactions.associate = function (db) {

    tbl_transactions.belongsTo(db.tbl_users, {
      foreignKey: "user_name",
      targetKey: "user_name"
    });

    tbl_transactions.belongsTo(db.tbl_periods, {
      foreignKey: "monthly_period",
      targetKey: "monthly_period"
    });

    tbl_transactions.belongsTo(db.tbl_stocks, {
      foreignKey: "ticker",
      targetKey: "ticker"
    });

    tbl_transactions.belongsTo(db.tbl_prices, {
      foreignKey: "ticker_period",
      targetKey: "ticker_period"
    });

    // add additional associations inside single tbl_name.associate block

  };
  //*/


  return tbl_transactions;

};