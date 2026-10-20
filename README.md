# ethan dungeon

Single-file third-person roguelite. `index.html` + `spr/` is the whole site — host as static files.

- `ethan-scoreboard.gs` — Google Apps Script for the shared scoreboard. Deploy it as a web app and paste the URL into `const SCORE_URL` in `index.html`.
- Multiplayer uses PeerJS's public signaling server; no backend needed.
- Arena mode plays on a cut-down build of "[for study only] Summoner rift 3d export" (https://sketchfab.com/3d-models/for-study-only-summoner-rift-3d-export-ac0a9c6676e34d1ebb184d8e93443c77) by Jenioss (https://sketchfab.com/Jenioss), licensed CC-BY-NC-ND-4.0 (http://creativecommons.org/licenses/by-nc-nd/4.0/). `map/rift.glb` is that model with textures shrunk and geometry simplified so it loads in a browser; non-commercial, private use only. `lib/` holds three.js r128's GLTFLoader and the meshopt decoder.
- Arena also offers "dust 2", built from "dust 2 cs 1.6" (https://sketchfab.com/3d-models/dust-2-cs-16-e342a925e7cb4298a8e41dfc15df9e80) by frostychaos144 (https://sketchfab.com/frostychaos144), licensed CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/); `map/dust2.glb` is that model re-encoded (webp textures, meshopt).
- Arena maps "reflection" and "reach" are built from "Reach>Multiplayer>Default>Reflection" (https://sketchfab.com/3d-models/reachmultiplayerdefaultreflection-13c7afeb13914a6196896804d61feaa2) and "Halo 2>Multiplayer>Default>Coagulation" (https://sketchfab.com/3d-models/halo-2multiplayerdefaultcoagulation-4b6f62fea9604bb280645c80ab9ed5b3) by jameslucino117 (https://sketchfab.com/jameslucino117), both CC-BY-4.0. `map/*.js` are base64 copies of the .glb files for hosts that will not serve .glb.
