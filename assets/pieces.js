/* ============================================================================
   THE REGISTRY
   ----------------------------------------------------------------------------
   This is the ONLY place the site learns that a piece exists. The sidebar and
   the "Selected works" list on the home page are both built from this list.

   To add a new piece:
     1. Copy _template.html to a new file (e.g. essay-my-title.html) and write it.
     2. Add ONE entry to the list below.
     3. That's it. The sidebar + home page update themselves.

   Fields:
     section   "essays" | "research" | "projects"   (which sidebar group it goes in)
     navTitle  short label shown in the sidebar
     file      the .html filename you created
     featured  (optional) if present, the piece appears in "Selected works" on the
               home page. { title, tag } is what shows there.

   Order matters: pieces appear in the sidebar (and featured list) in the order
   they are listed here.
   ============================================================================ */

window.PIECES = [
  {
    section: 'essays',
    navTitle: 'The Report on the Fur Trade Accounts, 1879',
    file: 'essay-fur-trade.html',
    featured: { title: 'The Report on the Fur Trade Accounts, 1879', tag: 'Essay · 13 min read' }
  },
  {
    section: 'essays',
    navTitle: 'Business cycles and rational expectations',
    file: 'essay-business-cycles.html'
  },
  {
    section: 'essays',
    navTitle: 'The financial instability hypothesis',
    file: 'essay-financial-instability.html'
  },
  {
    section: 'essays',
    navTitle: 'The rise of prediction markets',
    file: 'essay-prediction-markets.html',
    featured: { title: 'The rise of prediction markets', tag: 'Essay · 12 min read' }
  },
  {
    section: 'research',
    navTitle: 'Ryanair',
    file: 'research-ryanair.html'
  },
  {
    section: 'research',
    navTitle: 'Texas Pacific Land Company',
    file: 'research-texas-pacific-land.html',
    featured: { title: 'Basin & Change: A Brief Look Into the Texas Pacific Land Company', tag: 'Equity research (brief) · 8 min read' }
  },
  {
    section: 'research',
    navTitle: 'TransDigm',
    file: 'research-transdigm.html',
  },
  {
    section: 'projects',
    navTitle: 'One-off projects and builds',
    file: 'projects.html'
  }
];

/* The sidebar groups, in the order they appear. Add a new section here only if
   you introduce a brand-new category of writing. */
window.SECTIONS = [
  { id: 'essays',   label: 'Essays' },
  { id: 'research', label: 'Research' },
  { id: 'projects', label: 'Projects' }
];
