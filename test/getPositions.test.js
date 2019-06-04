var chai = require("chai");
var chaiHttp = require("chai-http");
var server = require("../server");
var db = require("../models");
var expect = chai.expect;

// Setting up the chai http plugin
chai.use(chaiHttp);

var request;

describe("GET /positions", function() {
  // Before each test begins, create a new request server for testing
  // & delete all examples from the db
  beforeEach(function() {
    request = chai.request(server);
    return db.sequelize.sync({ force: true });
  });

  it("should find all examples", function(done) {
    // Add some examples to the db to test with
    db.tbl_positions.bulkCreate([
      { id: "123", user_name: "This Guy", monthly_period:"1", ticker:"ABR", shares: "3" },
      { id: "456", user_name: "That Guy", monthly_period:"2", ticker:"GHR", shares: "15" },
      { id: "748", user_name: "The Other Guy", monthly_period:"3", ticker:"QHEL", shares: "4" }
    ]).then(function() {
      // Request the route that returns all examples
      request.get("/positions").end(function(err, res) {
        var responseStatus = res.status;
        var responseBody = res.body;

        // Run assertions on the response

        expect(err).to.be.null;

        expect(responseStatus).to.equal(200);

        expect(responseBody)
          .to.be.an("array")
          .that.has.lengthOf(3);

        expect(responseBody[0])
          .to.be.an("object")
          .that.includes({ id: "123", user_name: "First Description", monthly_period:"1", ticker:"ABR", shares: "4" });

        expect(responseBody[1])
          .to.be.an("object")
          .that.includes({ id: "456", user_name: "First Description", monthly_period:"1", ticker:"GHR", shares: "4" });

        expect(responseBody[2])
          .to.be.an("object")
          .that.includes({ id: "748", user_name: "First Description", monthly_period:"1", ticker:"QHEL", shares: "4" });

        // The `done` function is used to end any asynchronous tests
        done();
      });
    });
  });
});
