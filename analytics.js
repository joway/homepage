window.dataLayer = window.dataLayer || [];
// get domain
var domain = window.location.host;
// get userId
var userId = window.localStorage.getItem("userId");
var isAna = domain && !domain.endsWith("joway.io");
var isAds = domain && domain.endsWith("blog.joway.io");

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
  if (isAna) {
    alert("Please remove Joway's personal analytics code !");
    return;
  }
  var event_action = "login";
  if (!userId) {
    userId = Math.floor(Math.random() * 1000000000000);
    window.localStorage.setItem("userId", userId);
    event_action = "register";
  }
  gtag("set", { user_id: userId });
  gtag("event", event_action, {
    event_category: "user",
    event_label: domain
  });
}

analytics();

if (isAds) {
  // ad sense
  var ad_sense_script = document.createElement("script");
  ad_sense_script.setAttribute(
    "src",
    "//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
  );
  document.head.appendChild(ad_sense_script);

  (adsbygoogle = window.adsbygoogle || []).push({
    google_ad_client: "ca-pub-6400651395935595",
    enable_page_level_ads: true
  });
}
