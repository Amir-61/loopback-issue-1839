module.exports = function (server) {
  var User = server.models.User;
  User.login({email: 'foo@bar.com', password: '1'}, 'user', function (err, accessToken) {
    if (err)
      console.error("ERR:", err);
    else {
      accessToken.user(function (err, data) {
        if (err)
          console.error("ERR:", err);
        else
          console.log("username:", data.username);
      });
    }
  });
};
