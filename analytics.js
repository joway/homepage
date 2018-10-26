window.dataLayer = window.dataLayer || [];
function gtag() {
  dataLayer.push(arguments);
}
gtag("js", new Date());
gtag("config", "UA-53624533-8");
// get domain
var domain = window.location.host;
// get userId
var userId = window.localStorage.getItem("userId");
var event_type = "user_login";
if (!userId) {
  userId = Math.floor(Math.random() * 1000000000000);
  window.localStorage.setItem("userId", userId);
  event_type = "user_register";
}
gtag("set", { user_id: userId });
gtag("event", event_type, { method: domain });
console.log("welcome", userId, "!");
