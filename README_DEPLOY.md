# Academic Project Page

This is a minimal academic homepage / research snapshot page.

## Main edits

Most content is controlled from `config.js`.

### Add publication images

Put images in `assets/`, then edit each publication entry in `config.js`:

```js
image: "assets/your_teaser.png"
```

The current placeholders are:

```text
assets/cno_thumbnail.svg
assets/motioncfg_thumbnail.svg
```

Replace them with your real teaser figures when ready.

## Run locally

```bash
python -m http.server 8000
```

Open `http://localhost:8000`.

## Deploy with GitHub Pages

Upload all files to a GitHub repository, then enable:

```text
Settings → Pages → Deploy from a branch → main / root
```
