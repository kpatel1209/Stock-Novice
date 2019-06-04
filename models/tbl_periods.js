"use strict";

// model.tblUsers
module.exports = (sequelize, DataTypes) => {

  const tbl_periods = sequelize.define("tbl_periods", {
    period_id: {
      //type: DataTypes.UUID,
      //defaultValue: DataTypes.UUIDV4,
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      notNull: true
    },
    monthly_period: {
      type: DataTypes.INTEGER,
      unique: true,
      notNull: true,
    },
    price_date: {
      type: DataTypes.DATE,
      notNull: true,
    }
  }, {
    timestamps: false,
  });

  // sequelize model table associations
  tbl_periods.associate = function (db) {
    
    tbl_periods.hasMany(db.tbl_transactions, {
      sourceKey: "monthly_period",
      foreignKey: "monthly_period"
    });

    tbl_periods.hasMany(db.tbl_positions, {
      sourceKey: "monthly_period",
      foreignKey: "monthly_period"
    });

    // add additional associations inside single tbl_name.associate block

  };

  return tbl_periods;

};