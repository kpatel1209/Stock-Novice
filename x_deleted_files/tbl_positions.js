"use strict";

// model.tbl_positions
module.exports = (sequelize, DataTypes) => {

  const tbl_positions = sequelize.define("tbl_positions", {
    position_id: {
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
    stock: {
      type: DataTypes.STRING(255),
      notNull: true
    },
    ticker: {
      type: DataTypes.STRING(255),
      notNull: true
    },
    shares: {
      type: DataTypes.INTEGER,
      notNull: true
    }/*,
    cost: {
      type: DataTypes.VIRTUAL,
      get() {
        return this.getDataValue("shares") * 2;
      }
    }
    */
  }, {
    underscored: true,
    timestamps: true
  });

  /* sequelize model table associations
  tbl_positions.associate = function (db) {

    tbl_positions.belongsTo(db.tbl_users, {
      foreignKey: "user_name",
      targetKey: "user_name"
    });
  
    tbl_positions.hasMany(db.tbl_prices, {
      sourceKey: "ticker",
      foreignKey: "ticker"
    });
  

    // add additional associations inside single tbl_name.associate block

  };
  //*/
  
  return tbl_positions;

};