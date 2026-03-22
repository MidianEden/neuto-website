(function () {
  var APP_STORE_URL = "https://apps.apple.com/us/app/neuto-brain-training/id6760794030";
  var params = new URLSearchParams(window.location.search);
  var bypass = params.get("web");

  if (bypass === "1") {
    return;
  }

  if (window.matchMedia && window.matchMedia("(display-mode: standalone)").matches) {
    return;
  }

  if (window.navigator.standalone) {
    return;
  }

  var ua = window.navigator.userAgent || "";
  var platform = window.navigator.platform || "";
  var maxTouchPoints = Number(window.navigator.maxTouchPoints || 0);
  var isiPhoneOrIPad =
    /iPhone|iPad|iPod/i.test(ua) || (platform === "MacIntel" && maxTouchPoints > 1);

  if (!isiPhoneOrIPad) {
    return;
  }

  window.location.replace(APP_STORE_URL);
})();
