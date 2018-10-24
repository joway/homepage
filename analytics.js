// get domain
var domain = window.location.host;
// get userId
var userId = window.localStorage.getItem('userId');
if (!userId) {
  userId = Math.floor(Math.random() * 1000000000000);
  window.localStorage.setItem('userId', userId)
  gtag('event', 'user_register', { 'domain': domain });
} else {
  gtag('event', 'user_login', { 'domain': domain });
}
console.log('welcome', userId, '!');
window.dataLayer = window.dataLayer || [];
var dataLayer = window.dataLayer
function gtag() { dataLayer.push(arguments); }
gtag('js', new Date());
gtag('config', 'UA-53624533-8');
gtag('set', { 'user_id': userId });
