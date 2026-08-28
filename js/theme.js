/* Theme toggle. The no-flash initializer lives inline in each page's <head>;
   this file only wires up the button. */
(function () {
  var root = document.documentElement;
  var btn = document.querySelector('.themetoggle');
  if (!btn) return;

  function current() {
    var chosen = root.getAttribute('data-theme');
    if (chosen === 'dark' || chosen === 'light') return chosen;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function relabel() {
    var next = current() === 'dark' ? 'light' : 'dark';
    btn.setAttribute('aria-label', 'Switch to ' + next + ' theme');
    btn.setAttribute('title', 'Switch to ' + next + ' theme');
  }

  relabel();

  btn.addEventListener('click', function () {
    var next = current() === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try { localStorage.setItem('theme', next); } catch (e) {}
    relabel();
  });

  /* If the visitor never chose explicitly, follow the OS when it changes. */
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function () {
    var stored = null;
    try { stored = localStorage.getItem('theme'); } catch (e) {}
    if (!stored) relabel();
  });
})();
