const passport = require("passport");

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
      // res.send(req.user);

      res.send(`
        <html>

        <script>
        
        window.opener.parent.postMessage("Hello","*");
        console.log("Hello Log");
        
        </script>
        
        </html>
        `);
    }
  );
};
