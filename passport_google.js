const User = mongoose.Schema({
  email,
  password,
  googleId,
  secret,
});

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      callbackURL: "http://localhost:3000/auth/google/secrets",
      userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo",
    },
    async function (accessToken, refreshToken, profile, cb) {
      console.log(profile);

      //   profile -> {
      // id:,
      //   user: {
      // email:
      // }
      // }

      //   We check if the user exists
      // If yes ->
      // Return with null error and the userID
      // If no ->
      // Create a new user -> return their id
      try {
        const user = await User.findOne({ googleId: profile.id });

        if (user) {
          return cb(null, user._id);
        } else {
          const new_user = await User.create({
            email: profile.user.email,
            googleId: profile.id,
          });

          return cb(null, new_user._id);
        }
      } catch (e) {
        return cb(e, null);
      }
    }
  )
);
