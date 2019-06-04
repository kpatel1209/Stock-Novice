"use strict";
const log = global.console.log;

const path = require("path");
const db = require("../models"); // requiring dir defaults to index.js
const Op = db.Sequelize.Op;
const logic = require("./logic");

module.exports = function (app) {

  // METHOD route

  // GET /
  app.get("/", (req, res) => {
    log(`route: "${req.url}"`);
    res.sendFile(path.join(__dirname, "../views/index.html"));
  });

  // POST /login
  app.post("/login", (req, res) => {
    log(`route: "${req.url}"`);
    log(`__dirname: ${__dirname}`);
    // create user
    const userPassword = logic.getRandom(100000, 999999);
    db.tbl_users.findOrCreate({
      where: {
        user_name: req.body.user_name,
      },
      defaults: {
        user_password: userPassword,
        user_email: req.body.user_email
      }
    }).then(function (sqlUser) {
      if (!sqlUser[1]) {
        // if NOT true: new sqlUser
        sqlUser = logic.parseSequelize(sqlUser);
        log("user already exists, sqlUser");
        log(sqlUser);
        db.tbl_positions.findAll({
          where: {
            user_name: req.body.user_name
          }
        }).then(function (sqlPositions) {
          sqlPositions = logic.parseSequelize(sqlPositions);
          log("sqlPositions:");
          log(sqlPositions);
          db.tbl_transactions.findAll({
            where: {
              user_name: req.body.user_name
            }
          }).then(function (sqlTransactions) {
            sqlTransactions = logic.parseSequelize(sqlTransactions);
            log("sqlTransactions:");
            log(sqlTransactions);
            res.render("index", {
              user: sqlUser,
              positions: sqlPositions,
              transactions: sqlTransactions
            });
          });
        });
      } else {
        // else new sqlUser
        sqlUser = logic.parseSequelize(sqlUser);
        log("created new user, sqlUser:");
        log(sqlUser);
        db.tbl_positions.bulkCreate(
          [{
            user_name: req.body.user_name,
            ticker: "SP500",
            ticker_period: "SP500_1",
            pos_price: 1386
          },
          {
            user_name: req.body.user_name,
            ticker: "DJI",
            ticker_period: "DJI_1",
            pos_price: 12818
          },
          {
            user_name: req.body.user_name,
            ticker: "NDAQ",
            ticker_period: "NDAQ_1",
            pos_price: 36
          },
          {
            user_name: req.body.user_name,
            ticker: "JPM",
            ticker_period: "JPM_1",
            pos_price: 48
          },
          {
            user_name: req.body.user_name,
            ticker: "BAC",
            ticker_period: "BAC_1",
            pos_price: 38
          },
          {
            user_name: req.body.user_name,
            ticker: "WFC",
            ticker_period: "WFC_1",
            pos_price: 30
          },
          {
            user_name: req.body.user_name,
            ticker: "AAPL",
            ticker_period: "AAPL_1",
            pos_price: 25
          },
          {
            user_name: req.body.user_name,
            ticker: "GOOGL",
            ticker_period: "GOOGL_1",
            pos_price: 289
          },
          {
            user_name: req.body.user_name,
            ticker: "AMZN",
            ticker_period: "AMZN_1",
            pos_price: 78
          }
          ]
        ).then(function (sqlPositions) {
          sqlPositions = logic.parseSequelize(sqlPositions);
          log("created new positions, sqlPositions:");
          log(sqlPositions);
          res.render("index", {
            user: sqlUser,
            positions: sqlPositions
          });
        });
      } // end if
    });
  });

  // GET /positions route
  app.get("/positions", function (req, res) {
    log(`route: "${req.url}"`);
    db.tbl_positions.findAll({
      where: {
        user_name: "test_user",
        monthly_period: 1
      }
    }).then(function (sqlPositions) {
      sqlPositions = logic.parseSequelize(sqlPositions, ["user_name"], ["test_user"]);
      log("sqlStocks:");
      log(sqlPositions);
      db.tbl_users.findOne({
        where: {
          user_name: "test_user"
        }
      }).then(function (sqlUser) {
        //sqlUser = logic.parseSequelize(sqlUser);
        log("sqlUser");
        log(sqlUser);
        db.tbl_transactions.findAll({
          where: {
            user_name: "test_user"
          }
        }).then(function (sqlTransactions) {
          sqlTransactions = logic.parseSequelize(sqlTransactions);
          log("sqlTransactions:");
          log(sqlTransactions);
          res.render("index", {
            positions: sqlPositions,
            user: sqlUser,
            transactions: sqlTransactions
          });
        });
      });
    });
  });

  // POST /buy_sell route
  app.post("/buy_sell", function (req, res) {
    log(`route: "${req.url}"`);
    log(`__dirname: ${__dirname}`);
    let shares = logic.negateSellShares(parseInt(req.body.shares), req.body.buy_sell);
    log(`router shares: ${typeof(shares)} ${shares}`);
    db.tbl_transactions.create({
      user_name: req.body.user_name,
      monthly_period: parseInt(req.body.monthly_period),
      buy_sell: req.body.buy_sell,
      stock: req.body.stock,
      ticker: req.body.ticker,
      ticker_period: req.body.ticker.concat("_", req.body.monthly_period),
      trx_shares: parseInt(shares),
      trx_price: parseInt(req.body.price),
      trx_value: parseInt(shares * req.body.price)
    }).then(function (sqlNewTransaction) {
      // sqlNewTransaction = logic.parseSequelize(sqlNewTransaction);
      log("sqlNewTransaction:");
      log(sqlNewTransaction);
      db.tbl_positions.findAll({
        where: {
          user_name: req.body.user_name,
          monthly_period: parseInt(req.body.monthly_period)
        }
      }).then(function (sqlPositions) {
        sqlPositions = logic.parseSequelize(sqlPositions);
        log("sqlPositions:");
        log(sqlPositions);
        db.tbl_users.findOne({
          where: {
            user_name: req.body.user_name
          }
        }).then(function (sqlUser) {
          //sqlUser = logic.parseSequelize(sqlUser);
          log("sqlUser");
          log(sqlUser);
          db.tbl_transactions.findAll({
            where: {
              user_name: req.body.user_name
            }
          }).then(function (sqlTransactions) {
            sqlTransactions = logic.parseSequelize(sqlTransactions);
            log("sqlTransactions:");
            log(sqlTransactions);
            res.render("index", {
              positions: sqlPositions,
              user: sqlUser,
              transactions: sqlTransactions
            });
          });
        });
      });
    });
  });

  // GET /transactions route
  app.get("/transactions", function (req, res) {
    log(`route: "${req.url}"`);
    log(`__dirname: ${__dirname}`);
    db.tbl_transactions.findAll({}).then(function (sqlTransactions) {
      //log(sqlTransactions);
      sqlTransactions = logic.parseSequelize(sqlTransactions);
      log(sqlTransactions);
      /*
      res.render("index", {
        stocks: tblStocksResult
      });
      */
      res.json(sqlTransactions);
    });
  });

  // POST /next route
  app.post("/next", function (req, res) {
    log(`route: "${req.url}"`);
    log(`__dirname: ${__dirname}`);
    //res.redirect("/positions");
  });

};