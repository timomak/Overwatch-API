const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("./../server");
const should = chai.should();
chai.use(chaiHttp);

// Agent that will keep track of our cookies
const agent = chai.request.agent(server);

const User = require("../User/user.model");

describe("User", function() {
  // TESTS WILL GO HERE.
  //
  // it("should not be able to login if they have not registered", function(done) {
  //   agent.post("/login", { email: "wrong@wrong.com", password: "nope" }).end(function(err, res) {
  //     res.status.should.be.equal(401);
  //     done();
  //   });
  // });


  // it("Should just work", function(done) {
  //   chai
  //     .request(server)
  //     // Get route should return all heroes.
  //     .get("/user/test")
  //     .end(function(err, res) {
  //       if (err) {
  //         return done(err);
  //       }
  //       res.status.should.be.equal(200);
  //       // res.should.be.equal("test")
  //       return done(); // Call done if the test completed successfully.
  //     });
  // });


  // signup
  it("should be able to signup", function(done) {
    User.findOneAndDelete({ username: "testone" }, function() {
      agent
        .post("/sign-up")
        .send({ username: "testone", password: "password" })
        .end(function(err, res) {
          console.log(res.body);
          res.should.have.status(200);
          agent.should.have.cookie("nToken");
          done();
        });
    });
  });
});
