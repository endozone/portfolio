# How to add or edit a piece

The site is now organized so that **each essay, research brief, and project lives
in its own `.html` file** at the top level of this folder. You almost never have
to touch the layout, the styling, or the navigation — those are shared and built
automatically.

## The pieces (as of the reorg)

| File                                   | What it is                          |
| -------------------------------------- | ----------------------------------- |
| `index.html`                           | The home page ("Hi there.")         |
| `essay-fur-trade.html`                 | Essay — Fur Trade Accounts, 1879    |
| `essay-business-cycles.html`           | Essay — Business Cycles             |
| `essay-financial-instability.html`     | Essay — Financial Instability       |
| `essay-prediction-markets.html`        | Essay — Prediction Markets          |
| `research-ryanair.html`                | Research — Ryanair                  |
| `research-texas-pacific-land.html`     | Research — Texas Pacific Land       |
| `projects.html`                        | Projects list                       |

Shared machinery lives in `assets/`:

- `assets/style.css` — all the styling (edit once, applies everywhere).
- `assets/pieces.js` — **the registry**: the single list of every piece.
- `assets/site.js` — builds the sidebar + the home page's "Selected works" list.

---

## To EDIT an existing piece

1. Open its `.html` file (see the table above).
2. Everything between `<!-- ==== PIECE BODY START ==== -->` and
   `<!-- ==== PIECE BODY END ==== -->` is your writing. Edit it freely.
3. The three lines just above the body — `eyebrow`, `<h1>` title, and `meta`
   (reading time) — are also edited right there in the file.
4. Save and refresh the page in your browser. Done.

You do **not** need to touch `index.html` or the sidebar to edit a piece.

---

## To ADD a new piece — 3 steps

1. **Copy `_template.html`** to a new file. Name it after the piece, e.g.
   `essay-my-new-title.html` (essays start with `essay-`, research with
   `research-`, by convention — but any name works).

2. **Write it.** Change the `<title>`, the `eyebrow`, the `<h1>`, and the `meta`,
   then write your content in the body area. `_template.html` has copy-paste
   snippets for headings, images, charts, quotes, and footnotes.

3. **Register it** — add ONE entry to the list in `assets/pieces.js`:

   ```js
   {
     section: 'essays',                      // 'essays' | 'research' | 'projects'
     navTitle: 'My new title',               // the label shown in the sidebar
     file: 'essay-my-new-title.html'         // the file you just created
   },
   ```

   That's what makes it appear in the sidebar. The order of entries in
   `pieces.js` is the order they appear in the sidebar.

That's it — the sidebar updates itself on every page.

### Optional: feature it on the home page

To make a piece show up under "Selected works" on the home page, add a
`featured` field to its registry entry:

```js
{
  section: 'essays',
  navTitle: 'My new title',
  file: 'essay-my-new-title.html',
  featured: { title: 'My New Title (as shown on the home page)', tag: 'Essay · 10 min read' }
},
```

---

## Images and charts

Keep putting images in `images/` and charts in `charts/` exactly like before.
Because every piece file sits at the top level of the folder, the paths are the
same everywhere — `src="charts/RYAAY/arpp.png"`, `src="images/report1.jpg"`, etc.

---

## Adding a brand-new section

Only if you ever want a category beyond Essays / Research / Projects: add it to
the `window.SECTIONS` list at the bottom of `assets/pieces.js`, then use that
section's `id` in your pieces. Most of the time you won't need this.
