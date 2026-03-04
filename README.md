# ocd2kki

An unofficial desktop client of Yume 2kki on ynoproject.net (Yume Nikki Online Project)

# Screenshots

<img src="docs/menu.png"></br>
<img src="docs/game.png"></br>
<img src="docs/settings.png"></br>
<img src="docs/expeditions.png">

# How

ocd2kki is using NeutralinoJS, by using user's available browsers or webview for displaying "[https://ynoproject.net/2kki/](https://ynoproject.net/2kki/)" and inject a custom interface for more "native-like" experience.

ocd2kki isn't hosting or stealing any YNOproject or Yume 2kki developers assets or gamedata.

ocd2kki is open-source at [https://github.com/kinnnine/ocd2kki](https://github.com/kinnnine/ocd2kki)

# Why

- Separate from your main browser
- Native-Like experience
- Lightweight download (only 3mb)

# Features

- Window size is cropped and fit to a game screen
- Menu buttons when hovering top of game screen
- Quit the game from main menu works

# Build

Requirements:

- node
- npm or pnpm
- neutralinojs/neu

Install neutralinojs CLI
``
npm install -g @neutralinojs/neu
``

Build release
``
./make.sh build
``

Development run
``
./make.sh run
``

# History

ocd2kki was originally created on NW.js but due to stupidity cloudflare turnstile won't play nicely, thanks to NeutralinoJS for solving this issue by replacing NW.js entirely.

### Things to point out on NW.js

- Embedded with chromium, doesn't need user's system browser
- iframe with nwfaketop work flawlessly, able to load any remote url
- iframe with onload function gives you lemon

### But

- Weird issue with useragent thingy
- You can play just fine but unable to sign-in or even register due to cloudflare turnstile

### Any good news?

- I don't need to rewrite the script since the way NeutralinoJS works, similar to iframe onload injection but use "injectScript" inside neutralino.config.json
- Friendship ended with NW.js iframe, now NeutralinoJS with user's system webview is my best friend
- You can now sign-in, hell yeah

That's it.

# Roadmap

- [ ] Able to chat
- [ ] Toast notification
- [ ] ocd2kki-specific settings
- [ ] Fix badges floating modal size
- [ ] Fix right menu buttons position
- [ ] Discord RPC
- [ ] Supports other fangames from YNOProject
- [ ] Rewrite in Rust/Tauri
