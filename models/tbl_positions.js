"use strict";

// model.tbl_positions
module.exports = (sequelize, DataTypes) => {

  const tbl_positions = sequelize.define("tbl_positions", {
    pos_id: {
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
      notNull: true,
      defaultValue: 1
    },
    ticker: {
      type: DataTypes.STRING(15),
      notNull: true
    },
    ticker_period: {
      type: DataTypes.STRING(15),
      notNull: true
    },
    pos_shares: {
      type: DataTypes.INTEGER,
      notNull: true,
      defaultValue: 0
    },
    pos_price: {
      type: DataTypes.INTEGER,
      notNull: true
    },
    pos_value: {
      type: DataTypes.INTEGER,
      notNull: true,
      defaultValue: 0
    }
  }, {
    underscored: true,
    timestamps: true
  });

  // sequelize model table associations
  tbl_positions.associate = function (db) {

    tbl_positions.belongsTo(db.tbl_users, {
      foreignKey: "user_name",
      targetKey: "user_name"
    });

    tbl_positions.belongsTo(db.tbl_periods, {
      foreignKey: "monthly_period",
      targetKey: "monthly_period"
    });

    tbl_positions.belongsTo(db.tbl_stocks, {
      foreignKey: "ticker",
      targetKey: "ticker"
    });

    tbl_positions.belongsTo(db.tbl_prices, {
      foreignKey: "ticker_period",
      targetKey: "ticker_period"
    });

    // add additional associations inside single tbl_name.associate block

  };

  return tbl_positions;

};