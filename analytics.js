window.dataLayer = window.dataLayer || [];
// get domain
var domain = window.location.host;
// get userId
var userId = window.localStorage.getItem("userId");

function gtag() {
  dataLayer.push(arguments);
}
function analytics() {
  gtag("js", new Date());
  gtag("config", "UA-53624533-8");
  if (
    domain &&
    (domain.indexOf("localhost") >= 0 || domain.indexOf("127.0.0.1") >= 0)
  ) {
    return;
  }
  if (domain && !domain.endsWith("joway.io")) {
    alert("Please remove Joway's personal analytics code !");
    return;
  }
  var event_type = "user_login";
  if (!userId) {
    userId = Math.floor(Math.random() * 1000000000000);
    window.localStorage.setItem("userId", userId);
    event_type = "user_register";
  }
  gtag("set", { user_id: userId });
  gtag("event", event_type);
  gtag("event", event_type + "_" + domain);
}

analytics();
