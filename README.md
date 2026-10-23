# equinote.app

Website von Equinote: Startseite mit Warteliste und Datenschutzerklärung.
Reines HTML und CSS, veröffentlicht mit GitHub Pages unter https://equinote.app.

- Keine Cookies, kein Tracking, keine Schriften oder Skripte von anderen Anbietern.
- Das Formular schickt die E-Mail-Adresse an die Edge Function `waitlist-join`
  (Supabase, Frankfurt). Der Code dazu liegt im privaten App-Repository.
- Anmeldung mit Bestätigung per E-Mail (Double-Opt-in): Der Link in der Mail
  führt über `waitlist-confirm` auf `bestaetigt.html` oder, wenn er abgelaufen
  ist, auf `link-abgelaufen.html` (beide mit noindex).
- `datenschutz.html` wird aus `src/content/datenschutzerklaerung.ts` der App
  erzeugt. Bei Änderungen dort auch hier nachführen.
