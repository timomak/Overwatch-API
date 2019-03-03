const User = require("./user.model");

module.exports = app => {
  // Register route with JSON
  app.post('/register', (req, res) => {
      const email = req.body.email
      const pwd = req.body.password
      const pwdconf = req.body.passwordConf
      if(pwd === pwdconf){
          var user = new User(req.body)
      } else {
          return res.send({message: "Passwords do not match"})
      }
      user.email = user.email.toLowerCase()
      User.findOne({ email }).then(check => {
          if(!check){
              user.save().then((user) => {
                  // creating token for web based clients
                  var token = jwt.sign({ _id: user._id }, process.env.SECRET, { expiresIn: "60 days" })
                  res.json({
                      result: "Success",
                      userId: user._id,
                      token: token
                  })
              })
          } else {
              res.json({
                  result: "Unsuccessful",
                  message: "This Email is already in use",
              })
        }
      })
  })

  // Log in with JSON
  app.post("/login", (req, res) => {
      const email = req.body.email.toLowerCase()
      const password = req.body.password
      // Find this user name
      User.findOne({ email }, "email password")
          .then(user => {
              if (!user) {
                  // User not found
                  return res.status(401).json({
                      Status: "Unsuccessful",
                      message: "Wrong Email or Password"
                   })
              }
              // Check the password
              user.comparePassword(password, (err, isMatch) => {
                  if (!isMatch) {
                      // Password does not match
                      return res.status(401).json({
                          result: "Unsuccessful",
                          message: "Wrong Email or Password"
                       })
                  }
                  var token = jwt.sign({ _id: user._id }, process.env.SECRET, { expiresIn: "60 days" })
                  return res.status(200).json({
                      result: "Success",
                      userId: user._id,
                      token: token
                  })
              })
          })
          .catch(err => {
              console.log(err)
          })
  })

};
