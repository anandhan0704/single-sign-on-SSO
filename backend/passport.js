const GoogleStrategy = require("passport-google-oauth20").Strategy;
const GithubStrategy = require("passport-github2").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const TwitterStrategy = require("passport-twitter").Strategy;
const passport = require("passport");

const GOOGLE_CLIENT_ID =
  "617416192192-imgkjicn42hcubgi95heid5eoovv9gv8.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

GITHUB_CLIENT_ID = "4286d6bb939d979dcf4c";
GITHUB_CLIENT_SECRET = "91ccc06b4dde4191e28a8d6b765493696476f81d";

FACEBOOK_APP_ID = "your id";
FACEBOOK_APP_SECRET = "your id";

TWITTER_CONSUMER_KEY = "wKsB1sGmJUyc5xKuZnyoOnCc5";
TWITTER_CONSUMER_SECRET = "O2hYGlIOzDWomvdDQ2fSbqOTDESOrn8LO2XSvYwNJKHtYQSIzD";

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.use(
  new GithubStrategy(
    {
      clientID: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_CLIENT_SECRET,
      callbackURL: "/auth/github/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.use(
  new FacebookStrategy(
    {
      clientID: FACEBOOK_APP_ID,
      clientSecret: FACEBOOK_APP_SECRET,
      callbackURL: "/auth/facebook/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.use(
  new TwitterStrategy({
  consumerKey: TWITTER_CONSUMER_KEY,
  consumerSecret: TWITTER_CONSUMER_SECRET,
  callbackURL: "/auth/twitter/callback"
},
function (accessToken, refreshToken, profile, done) {
  done(null, profile);
}
));

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
