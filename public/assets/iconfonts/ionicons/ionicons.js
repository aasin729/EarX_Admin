/*!
 * Built with http://stenciljs.com
 * 2018-06-29T13:20:28
 */
!(function (e, n, t, r, i, o, s, c, u, a, l, d, p, m) {
  for (
    (l = e.ionicons = e.ionicons || {}).components = u,
      (p = u
        .filter(function (e) {
          return e[2];
        })
        .map(function (e) {
          return e[0];
        })).length &&
        (((d = n.createElement('style')).innerHTML =
          p.join() + '{visibility:hidden}.hydrated{visibility:inherit}'),
        d.setAttribute('data-styles', ''),
        n.head.insertBefore(d, n.head.firstChild)),
      (function (e, n, t) {
        (e['s-apps'] = e['s-apps'] || []).push('ionicons'),
          t.componentOnReady ||
            (t.componentOnReady = function () {
              var n = this;
              function t(t) {
                if (n.nodeName.indexOf('-') > 0) {
                  for (var r = e['s-apps'], i = 0, o = 0; o < r.length; o++)
                    if (e[r[o]].componentOnReady) {
                      if (e[r[o]].componentOnReady(n, t)) return;
                      i++;
                    }
                  if (i < r.length)
                    return void (e['s-cr'] = e['s-cr'] || []).push([n, t]);
                }
                t(null);
              }
              return e.Promise ? new e.Promise(t) : { then: t };
            });
      })(e, 0, a),
      i = i || l.resourcesUrl,
      d = (p = n.querySelectorAll('script')).length - 1;
    d >= 0 && !(m = p[d]).src && !m.hasAttribute('data-resources-url');
    d--
  );
  (p = m.getAttribute('data-resources-url')),
    !i && p && (i = p),
    !i &&
      m.src &&
      (i =
        (p = m.src.split('/').slice(0, -1)).join('/') +
        (p.length ? '/' : '') +
        'ionicons/'),
    (d = n.createElement('script')),
    (function (e, n, t, r) {
      return (
        !(n.search.indexOf('core=esm') > 0) &&
        (!(
          !(n.search.indexOf('core=es5') > 0 || 'file:' === n.protocol) &&
          e.customElements &&
          e.customElements.define &&
          e.fetch &&
          e.CSS &&
          e.CSS.supports &&
          e.CSS.supports('color', 'var(--c)') &&
          'noModule' in t
        ) ||
          (function (e) {
            try {
              return new Function('import("")'), !1;
            } catch (e) {}
            return !0;
          })())
      );
    })(e, e.location, d)
      ? (d.src = i + 'ionicons.z18qlu2u.js')
      : ((d.src = i + 'ionicons.suuqn5vt.js'),
        d.setAttribute('type', 'module'),
        d.setAttribute('crossorigin', !0)),
    d.setAttribute('data-resources-url', i),
    d.setAttribute('data-namespace', 'ionicons'),
    n.head.appendChild(d);
})(
  window,
  document,
  0,
  0,
  0,
  0,
  0,
  0,
  [
    [
      'ion-icon',
      '5nonw4yz',
      1,
      [
        ['ariaLabel', 2, 1, 'aria-label', 2],
        ['color', 1, 0, 1, 2],
        ['doc', 3, 0, 0, 0, 'document'],
        ['el', 7],
        ['icon', 1, 0, 1, 2],
        ['ios', 1, 0, 1, 2],
        ['isServer', 3, 0, 0, 0, 'isServer'],
        ['isVisible', 5],
        ['lazy', 1, 0, 1, 3],
        ['md', 1, 0, 1, 2],
        ['mode', 1, 0, 1, 2],
        ['name', 1, 0, 1, 2],
        ['resourcesUrl', 3, 0, 0, 0, 'resourcesUrl'],
        ['size', 1, 0, 1, 2],
        ['src', 1, 0, 1, 2],
        ['svgContent', 5],
        ['win', 3, 0, 0, 0, 'window'],
      ],
      1,
    ],
  ],
  HTMLElement.prototype,
);
