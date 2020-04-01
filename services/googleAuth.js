const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("../config/keys");

passport.use(
  // google auth initialize
  new GoogleStrategy(
    {
      ...keys.google,
      callbackURL: "/auth/google/callback",
      proxy: true
    },
    async (accessToken, refreshToken, { _json }, done) => {
      //   console.log(profile);

      done(null, _json);
    }
  )
);
