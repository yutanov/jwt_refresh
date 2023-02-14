module.exports = {
  secret: "some-secret-key",
  // jwtExpiration: 3600,           // 1 hour
  // jwtRefreshExpiration: 86400,   // 24 hours

  /* for test */
  jwtExpiration: 10,          // 1 minute
  jwtRefreshExpiration: 45,  // 2 minutes
};
