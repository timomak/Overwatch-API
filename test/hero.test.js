const app = require("./../server");
const chai = require("chai");
const chaiHttp = require("chai-http");
const should = chai.should();

chai.use(chaiHttp);


describe("Testing Hero Get Routes:", function() {
  // Testing if the heroes page loads
  it("Should load all heroes", function(done) {
    chai
      .request(app)
      // Get route should return all heroes.
      .get("/heroes")
      .end(function(err, res) {
        if (err) {
          return done(err);
        }
        res.status.should.be.equal(200);
        return done(); // Call done if the test completed successfully.
      });
  });
  it("Should load a heroes", function(done) {
    chai
      .request(app)
      // Get route should return all heroes.
      .get("/heroes/1")
      .end(function(err, res) {
        if (err) {
          return done(err);
        }
        res.status.should.be.equal(200);
        return done(); // Call done if the test completed successfully.
      });
  });
});
