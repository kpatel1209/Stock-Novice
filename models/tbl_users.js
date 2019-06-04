"use strict";

// model.tblUsers
module.exports = (sequelize, DataTypes) => {

  const tbl_users = sequelize.define("tbl_users", {
    user_id: {
      //type: DataTypes.UUID,
      //defaultValue: DataTypes.UUIDV4,
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      notNull: true
    },
    user_name: {
      type: DataTypes.STRING(15),
      unique: true,
      notNull: true
    },
    user_password: {
      type: DataTypes.STRING(15),
      //notNull: true
    },
    user_email: {
      type: DataTypes.STRING(63),
      //notNull: true
    },
    monthly_period: {
      type: DataTypes.INTEGER,
      notNull: true,
      defaultValue: 1,
    },
    cash: {
      type: DataTypes.INTEGER,
      notNull: true,
      defaultValue: 100000,
    }
  }, {
    underscored: true,
    timestamps: true,
  });

  // sequelize model table associations
  tbl_users.associate = function (db) {

    tbl_users.belongsTo(db.tbl_periods, {
      foreignKey: "monthly_period",
      targetKey: "monthly_period"
    });

    tbl_users.hasMany(db.tbl_transactions, {
      sourceKey: "user_name",
      foreignKey: "user_name"
    });

    tbl_users.hasMany(db.tbl_positions, {
      sourceKey: "user_name",
      foreignKey: "user_name"
    });

    // add additional associations inside single tbl_name.associate block

  };
  //*/

  return tbl_users;

};