const express = require("express");
const app = express();
const passport = require("passport");
require("./services/googleAuth");

app.get("/api/test", (req, res) => {
  res.send("Fetched from express server");
});

app.get("/api/redirect", (req, res) => {
  res.redirect("/");
});

require("./routes/authRoutes")(app);

// For deployment setup
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on PORT ${PORT}`);
});
