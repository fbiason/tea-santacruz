window.fbAsyncInit = function () {
  FB.init({
    appId: "1675286429584538",
    cookie: true,
    xfbml: true,
    version: "v11.0",
  });

  FB.api(
    "/2289963967954556/feed?access_token=4407751cf4b45a31b16bba31f381fad7",
    function (response) {
      var publicaciones = response.data;
      var publicacionesHTML = "";
      for (var i = 0; i < publicaciones.length; i++) {
        if (publicaciones[i].message) {
          publicacionesHTML += "<p>" + publicaciones[i].message + "</p>";
        }
      }
      document.getElementById("publicaciones-facebook").innerHTML =
        publicacionesHTML;
    }
  );
};

(function (d, s, id) {
  var js,
    fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) {
    return;
  }
  js = d.createElement(s);
  js.id = id;
  js.src = "https://connect.facebook.net/en_US/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
})(document, "script", "facebook-jssdk");
