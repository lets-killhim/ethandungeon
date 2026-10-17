# ethan dungeon

Single-file third-person roguelite. `index.html` + `spr/` is the whole site — host as static files.

- `ethan-scoreboard.gs` — Google Apps Script for the shared scoreboard. Deploy it as a web app and paste the URL into `const SCORE_URL` in `index.html`.
- Multiplayer uses PeerJS's public signaling server; no backend needed.
