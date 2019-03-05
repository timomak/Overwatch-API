const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("./../server");
const should = chai.should();
chai.use(chaiHttp);

// Agent that will keep track of our cookies
const agent = chai.request.agent(server);

const User = require("../User/user.model");

describe("User", function() {

  // Should not log in not existing user
  it("should not be able to login if they have not registered", function(done) {
    agent.post("/login", { username: "wrong", password: "nope" }).end(function(err, res) {
      res.status.should.be.equal(401);
      done();
    });
  });

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

  after(function () {
    agent.close()
  });


});
