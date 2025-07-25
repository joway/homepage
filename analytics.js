window.dataLayer = window.dataLayer || [];
// get domain
var domain = window.location.hostname;
// get userId
var userId = window.localStorage.getItem("userId");
var domains = ['joway.io', 'localhost', '127.0.0.1']
var isAna = false
domains.forEach(function (d) {
  if (domain && domain.endsWith(d)) {
    isAna = true
  }
})
// var isAds = domain && domain.endsWith("blog.joway.io");

function unamiAnalytics() {
  var UMAMI = document.createElement('script');
  UMAMI.setAttribute('src','https://analytics.umami.is/script.js');
  UMAMI.setAttribute('data-website-id','18b4f3e5-9feb-4c17-909f-bf19c7c77544');
  document.head.appendChild(UMAMI);
}

function gtag() {
  dataLayer.push(arguments);
}
function googleAnalytics() {
  if (!isAna) {
    alert("Please remove Joway's personal analytics code !");
    return;
  }
  gtag("js", new Date());
  gtag("config", "UA-53624533-8");
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

// if (isAds) {
//   // ad sense
//   var ad_sense_script = document.createElement("script");
//   ad_sense_script.setAttribute(
//     "src",
//     "//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
//   );
//   document.head.appendChild(ad_sense_script);

//   (adsbygoogle = window.adsbygoogle || []).push({
//     google_ad_client: "ca-pub-6400651395935595",
//     enable_page_level_ads: true
//   });
// }

unamiAnalytics();
googleAnalytics();
