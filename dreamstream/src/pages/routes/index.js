const path = require("path");
const router = require("express").Router();
// const apiRoutes = require("./api");

// API Routes
// router.use("/api", apiRoutes);
app.use("/api", apiRoutes);

app.get('/authorized', function (req, res) {
  res.send('Secured Resource');
});

router.get('/user', checkJwt, (req, res) => {
  const user = req.user;
  console.log(user);
});

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
