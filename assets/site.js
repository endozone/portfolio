/* ============================================================================
   SITE CHROME
   ----------------------------------------------------------------------------
   Builds the sidebar navigation and the home page's "Selected works" list from
   the registry in pieces.js. You should not need to edit this file to add or
   edit a piece — that's all done in pieces.js and the piece's own .html file.
   ============================================================================ */
(function () {
  var pieces = window.PIECES || [];
  var sections = window.SECTIONS || [];

  // Which page are we on? e.g. "research-ryanair.html", or "" / "index.html" for home.
  var current = (window.location.pathname.split('/').pop() || '').toLowerCase();
  var isHome = current === '' || current === 'index.html';

  function el(tag, attrs, html) {
    var node = document.createElement(tag);
    if (attrs) {
      for (var k in attrs) {
        if (attrs.hasOwnProperty(k)) node.setAttribute(k, attrs[k]);
      }
    }
    if (html != null) node.innerHTML = html;
    return node;
  }

  // ---- Sidebar -------------------------------------------------------------
  function buildSidebar() {
    var sidebar = document.querySelector('.sidebar');
    if (!sidebar) return;

    // Site name -> home
    sidebar.appendChild(el('a', { href: 'index.html', class: 'name' }, 'MIA CHIN'));

    sections.forEach(function (section) {
      var items = pieces.filter(function (p) { return p.section === section.id; });
      if (!items.length) return;

      var group = el('div', { class: 'nav-group', id: 'group-' + section.id });

      var heading = el('button', { class: 'nav-heading', type: 'button' },
        '<span>' + section.label + '</span><span class="chev">&rsaquo;</span>');
      heading.addEventListener('click', function () { group.classList.toggle('open'); });
      group.appendChild(heading);

      var list = el('ul', { class: 'nav-list' });
      items.forEach(function (p) {
        var li = el('li');
        var link = el('a', { href: p.file }, p.navTitle);
        li.appendChild(link);
        if (p.file.toLowerCase() === current) {
          li.classList.add('active');
          group.classList.add('open'); // auto-open the group containing this page
        }
        list.appendChild(li);
      });
      group.appendChild(list);
      sidebar.appendChild(group);
    });

    // On the home page, open the first group by default (matches the old behavior).
    if (isHome && sections.length) {
      var first = document.getElementById('group-' + sections[0].id);
      if (first) first.classList.add('open');
    }

    sidebar.appendChild(el('div', { class: 'divider' }));
    sidebar.appendChild(el('a', { href: 'cv.pdf', download: 'mia_chin_cv', class: 'nav-link' }, 'CV'));
    sidebar.appendChild(el('a', { href: 'mailto:mchin3@yorku.ca', class: 'nav-link' }, 'Email'));
  }

  // ---- Home page "Selected works" -----------------------------------------
  function buildFeatured() {
    var mount = document.getElementById('featured-list');
    if (!mount) return;

    pieces.filter(function (p) { return p.featured; }).forEach(function (p) {
      var item = el('a', { href: p.file, class: 'featured-item' },
        '<h3>' + p.featured.title + '</h3>' +
        '<span class="tag">' + p.featured.tag + '</span>');
      mount.appendChild(item);
    });
  }

  buildSidebar();
  buildFeatured();
})();
