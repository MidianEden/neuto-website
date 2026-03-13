window.dataLayer = window.dataLayer || [];

function gtag() {
  window.dataLayer.push(arguments);
}

window.gtag = window.gtag || gtag;
gtag('js', new Date());
gtag('config', 'G-KR710KMWDF');

window.neutoTrack = function neutoTrack(eventName, params) {
  if (typeof eventName !== 'string' || eventName.trim().length === 0) {
    return;
  }
  try {
    window.gtag('event', eventName.trim(), params || {});
  } catch (_) {
    // Keep marketing pages resilient if GA is blocked.
  }
};
