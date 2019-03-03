const app = require("./../server");
const chai = require("chai");
const chaiHttp = require("chai-http");
const should = chai.should();

chai.use(chaiHttp);


describe("Testing Player Get Routes:", function() {
  it("Should load a player's data", function(done) {
    this.timeout(20000);
    chai
      .request(app)
      // Get route should return all heroes.
      .get("/pc/us/GamersCCCP-1569")
      .end(function(err, res) {
        if (err) {
          return done(err);
        }
        res.status.should.be.equal(200);
        return done(); // Call done if the test completed successfully.
      });
  });
});
