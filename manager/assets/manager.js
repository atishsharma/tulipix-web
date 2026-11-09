// tulipix.pro/manager: close the phone menu when a link in it is used.
(function () {
  var m = document.querySelector('.menu');
  if (!m) return;
  m.addEventListener('click', function (e) { if (e.target.closest('a')) m.removeAttribute('open'); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') m.removeAttribute('open'); });
})();
