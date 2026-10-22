// Warteliste: schickt die Adresse an die Server-Funktion waitlist-join (Supabase, Frankfurt).
// Keine Cookies, kein Tracking, nichts im Browser gespeichert.
(function () {
  var ENDPOINT = 'https://hbfprhnbtajlptdlkefo.supabase.co/functions/v1/waitlist-join';
  var form = document.getElementById('signup-form');
  if (!form) return;
  var email = document.getElementById('email');
  var consent = document.getElementById('consent');
  var honey = document.getElementById('website');
  var status = document.getElementById('status');
  var done = document.getElementById('done');
  var button = form.querySelector('button[type="submit"]');

  function show(msg) {
    status.textContent = msg;
    status.className = msg ? 'status err' : 'status';
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var value = email.value.trim();
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(value)) {
      show('Bitte gib eine gültige E-Mail-Adresse ein.');
      email.focus();
      return;
    }
    if (!consent.checked) {
      show('Bitte bestätige, dass wir dir schreiben dürfen.');
      consent.focus();
      return;
    }
    show('');
    button.disabled = true;
    button.textContent = 'Einen Moment …';
    fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: value, consent: true, website: honey.value })
    })
      .then(function (res) {
        return res.json().catch(function () { return {}; }).then(function (data) {
          if (!res.ok) throw new Error(data.error || 'Das hat nicht geklappt. Bitte versuche es später nochmals.');
        });
      })
      .then(function () {
        form.hidden = true;
        done.hidden = false;
        done.focus();
      })
      .catch(function (err) {
        var msg = err && err.message && err.message !== 'Failed to fetch' && err.message !== 'Load failed'
          ? err.message
          : 'Keine Verbindung. Bitte prüfe dein Internet und versuche es nochmals.';
        show(msg);
        button.disabled = false;
        button.textContent = 'Auf die Warteliste';
      });
  });
})();
