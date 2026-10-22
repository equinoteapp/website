# equinote.app

Website von Equinote: Startseite mit Warteliste und Datenschutzerklärung.
Reines HTML und CSS, veröffentlicht mit GitHub Pages unter https://equinote.app.

- Keine Cookies, kein Tracking, keine Schriften oder Skripte von anderen Anbietern.
- Das Formular schickt die E-Mail-Adresse an die Edge Function `waitlist-join`
  (Supabase, Frankfurt). Der Code dazu liegt im privaten App-Repository.
- `datenschutz.html` wird aus `src/content/datenschutzerklaerung.ts` der App
  erzeugt. Bei Änderungen dort auch hier nachführen.
