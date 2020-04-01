const passport = require("passport");
const jwt = require("jsonwebtoken");
const { jwtSecret } = require("../config/keys");

module.exports = app => {
  app.get("/api/authTest", (req, res) => {
    res.send({ hi: "Holla" });
  });

  app.get(
    "/auth/google",
    passport.authenticate("google", {
      session: false,
      scope: ["openid", "profile", "email"]
    })
  );

  app.get(
    "/auth/google/callback",
    passport.authenticate("google", { session: false }),
    (req, res) => {
      const token = jwt.sign(req.user, jwtSecret, { expiresIn: "30d" });

      res.send(`
        <html>
          <script>
            window.opener.parent.postMessage("${token}");
            console.log("Hello Log");
            window.close();
          </script> 
        </html>
        `);
    }
  );
};
