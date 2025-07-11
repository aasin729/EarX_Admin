/*!
 * ionicons: Core, ES5
 * Built with http://stenciljs.com
 */
function n(n, t) {
  var e = 'data-' + n.n;
  return t && t !== _ ? e + '-' + t : e;
}
function t(n) {
  return { t: n[0], e: n[1], r: !!n[2], i: !!n[3], o: !!n[4] };
}
function e(n, t) {
  if (S(t) && 'object' != typeof t && 'function' != typeof t) {
    if (n === Boolean || 3 === n) return 'false' !== t && ('' === t || !!t);
    if (n === Number || 4 === n) return parseFloat(t);
    if (n === String || 2 === n) return t.toString();
  }
  return t;
}
function r(n, t, e, r) {
  var i = n.u.get(t);
  i &&
    ((r = i['s-ld'] || i.$activeLoading) &&
      ((e = r.indexOf(t)) > -1 && r.splice(e, 1),
      r.length || (i['s-init'] && i['s-init'](), i.$initLoad && i.$initLoad())),
    n.u.delete(t));
}
function i(n, t) {
  for (var e, r, i = null, o = !1, u = !1, f = arguments.length; f-- > 2; )
    R.push(arguments[f]);
  for (; R.length > 0; ) {
    var c = R.pop();
    if (c && void 0 !== c.pop) for (f = c.length; f--; ) R.push(c[f]);
    else
      'boolean' == typeof c && (c = null),
        (u = 'function' != typeof n) &&
          (null == c
            ? (c = '')
            : 'number' == typeof c
              ? (c = String(c))
              : 'string' != typeof c && (u = !1)),
        u && o
          ? (i[i.length - 1].vtext += c)
          : null === i
            ? (i = [u ? { vtext: c } : c])
            : i.push(u ? { vtext: c } : c),
        (o = u);
  }
  if (null != t) {
    if ((t.className && (t.class = t.className), 'object' == typeof t.class)) {
      for (f in t.class) t.class[f] && R.push(f);
      (t.class = R.join(' ')), (R.length = 0);
    }
    null != t.key && (e = t.key), null != t.name && (r = t.name);
  }
  return 'function' == typeof n
    ? n(Object.assign({}, t, { children: i }), F)
    : {
        vtag: n,
        vchildren: i,
        vtext: void 0,
        vattrs: t,
        vkey: e,
        vname: r,
        f: void 0,
        c: !1,
      };
}
function o(n) {
  return {
    vtag: n.vtag,
    vchildren: n.vchildren,
    vtext: n.vtext,
    vattrs: n.vattrs,
    vkey: n.vkey,
    vname: n.vname,
  };
}
function u(n, t, e, r) {
  t.split(' ').forEach(function (t) {
    (n[t] = !0),
      e &&
        ((n[t + '-' + e] = !0),
        r && (n[t + '-' + e + '-' + r] = n[t + '-' + r] = !0));
  });
}
function f(n, t) {
  n.a.has(t) ||
    (n.a.set(t, !0),
    n.s
      ? n.queue.write(function () {
          return c(n, t);
        })
      : n.queue.tick(function () {
          return c(n, t);
        }));
}
function c(n, t, e, r, i, o) {
  if ((n.a.delete(t), !n.l.has(t))) {
    if (((r = n.v.get(t)), (e = !r))) {
      if (
        ((i = n.u.get(t)) && i.$rendered && (i['s-rn'] = !0), i && !i['s-rn'])
      )
        return (
          (i['s-rc'] = i['s-rc'] || []).push(function () {
            c(n, t);
          }),
          void (i.$onRender = i['s-rc'])
        );
      r = (function u(n, t, e, r, i, o, f) {
        try {
          (function c(n, t, e, r, i, o, u) {
            for (u in (n.d.set(r, e),
            n.p.has(e) || n.p.set(e, {}),
            ((o = Object.assign(
              { color: { type: String } },
              t.properties,
            )).mode = { type: String }),
            o))
              s(n, o[u], e, r, u, i);
          })(n, (i = n.m(t).y), t, (r = new i()), e),
            (function a(n, t, e) {
              if (t) {
                var r = n.d.get(e);
                t.forEach(function (t) {
                  e[t.method] = {
                    emit: function (e) {
                      n.b(r, t.name, {
                        bubbles: t.bubbles,
                        composed: t.composed,
                        cancelable: t.cancelable,
                        detail: e,
                      });
                    },
                  };
                });
              }
            })(n, i.events, r);
          try {
            if ((o = n.w.get(t))) {
              for (f = 0; f < o.length; f += 2) r[o[f]](o[f + 1]);
              n.w.delete(t);
            }
          } catch (e) {
            n.g(e, 2, t);
          }
        } catch (e) {
          (r = {}), n.g(e, 7, t, !0);
        }
        return n.v.set(t, r), r;
      })(n, t, n.M.get(t));
      try {
        r.componentWillLoad && (o = r.componentWillLoad());
      } catch (e) {
        n.g(e, 3, t);
      }
    } else
      try {
        r.componentWillUpdate && (o = r.componentWillUpdate());
      } catch (e) {
        n.g(e, 5, t);
      }
    o && o.then
      ? o.then(function () {
          return a(n, t, r, e);
        })
      : a(n, t, r, e);
  }
}
function a(n, t, e, r) {
  (function o(n, t, e, r) {
    try {
      var o,
        f,
        c = t.y.host,
        a = t.y.encapsulation,
        s = 'shadow' === a && n.k.j;
      if (
        ((o = (function l(n, t, e) {
          return (
            n &&
              Object.keys(n).forEach(function (r) {
                n[r].reflectToAttr && ((e = e || {})[r] = t[r]);
              }),
            e
          );
        })(t.y.properties, r)),
        (f = s ? e.shadowRoot : e),
        !e['s-rn'])
      ) {
        n.A(n, n.k, t, e);
        var v = e['s-sc'];
        v &&
          (n.k.O(
            e,
            (function d(n) {
              return n + '-host';
            })(v),
            '',
          ),
          r.render ||
            n.k.O(
              e,
              (function p(n) {
                return n + '-slot';
              })(v),
              '',
            ));
      }
      if (r.render || r.hostData || c || o) {
        n.P = !0;
        var h = r.render && r.render(),
          y = void 0;
        if ((y = r.hostData && r.hostData()) && t.C) {
          var m = Object.keys(y).reduce(function (n, e) {
            return t.C[e] ? n.concat(e) : t.C[D(e)] ? n.concat(D(e)) : n;
          }, []);
          if (m.length > 0)
            throw new Error(
              'The following keys were attempted to be set with hostData() from the ' +
                t.n +
                ' component: ' +
                m.join(', ') +
                '. If you would like to modify these please set @Prop({ mutable: true, reflectToAttr: true}) on the @Prop() decorator.',
            );
        }
        o && (y = y ? Object.assign(y, o) : o),
          (n.P = !1),
          c &&
            (y = (function b(n, t, e) {
              return (
                (n = n || {}),
                Object.keys(t).forEach(function (r) {
                  'theme' === r
                    ? u((n.class = n.class || {}), t[r], e.mode, e.color)
                    : 'class' === r
                      ? u((n[r] = n[r] || {}), t[r])
                      : (n[r] = t[r]);
                }),
                n
              );
            })(y, c, r));
        var w = n.T.get(e) || {};
        w.f = f;
        var g = i(null, y, h);
        (g.c = !0), n.T.set(e, n.render(e, w, g, s, a));
      }
      n._ && n._.x(e),
        (e['s-rn'] = !0),
        e.$onRender && (e['s-rc'] = e.$onRender),
        e['s-rc'] &&
          (e['s-rc'].forEach(function (n) {
            return n();
          }),
          (e['s-rc'] = null));
    } catch (t) {
      (n.P = !1), n.g(t, 8, e, !0);
    }
  })(n, n.m(t), t, e);
  try {
    r
      ? t['s-init']()
      : (e.componentDidUpdate && e.componentDidUpdate(), g(n.T.get(t))),
      t['s-hmr-load'] && t['s-hmr-load']();
  } catch (e) {
    n.g(e, 6, t, !0);
  }
}
function s(n, t, r, i, o, u, f, c) {
  if (t.type || t.state) {
    var a = n.p.get(r);
    t.state ||
      (!t.attr ||
        (void 0 !== a[o] && '' !== a[o]) ||
        ((f = u && u.N) && S((c = f[t.attr])) && (a[o] = e(t.type, c))),
      r.hasOwnProperty(o) &&
        (void 0 === a[o] && (a[o] = e(t.type, r[o])),
        'mode' !== o && delete r[o])),
      i.hasOwnProperty(o) && void 0 === a[o] && (a[o] = i[o]),
      t.watchCallbacks && (a[H + o] = t.watchCallbacks.slice()),
      d(
        i,
        o,
        function s(t) {
          return (t = n.p.get(n.d.get(this))) && t[o];
        },
        function p(e, r) {
          (r = n.d.get(this)) && (t.state || t.mutable) && l(n, r, o, e);
        },
      );
  } else if (t.elementRef) v(i, o, r);
  else if (t.method) v(r, o, i[o].bind(i));
  else if (t.context) {
    var h = n.S(t.context);
    void 0 !== h && v(i, o, (h.W && h.W(r)) || h);
  } else t.connect && v(i, o, n.D(t.connect));
}
function l(n, t, e, r, i, o, u) {
  (i = n.p.get(t)) || n.p.set(t, (i = {}));
  var c = i[e];
  if (r !== c && ((i[e] = r), (o = n.v.get(t)))) {
    if ((u = i[H + e]))
      for (var a = 0; a < u.length; a++)
        try {
          o[u[a]].call(o, r, c, e);
        } catch (n) {}
    !n.P && t['s-rn'] && f(n, t);
  }
}
function v(n, t, e) {
  Object.defineProperty(n, t, { configurable: !0, value: e });
}
function d(n, t, e, r) {
  Object.defineProperty(n, t, { configurable: !0, get: e, set: r });
}
function p(n, t, e, r, i) {
  var o = t !== (t = t.replace(/^xlink\:?/, '')),
    u = q[t] || r;
  (u && (!e || 'false' === e)) || i
    ? o
      ? n.removeAttributeNS(I, W(t))
      : n.removeAttribute(t)
    : 'function' != typeof e &&
      (u && (e = ''), o ? n.setAttributeNS(I, W(t), e) : n.setAttribute(t, e));
}
function h(n, t, e, r, i, o, u) {
  if ('class' !== e || o)
    if ('style' === e) {
      for (var f in r)
        (i && null != i[f]) || (/-/.test(f) ? t.style.L(f) : (t.style[f] = ''));
      for (var f in i)
        (r && i[f] === r[f]) ||
          (/-/.test(f) ? t.style.setProperty(f, i[f]) : (t.style[f] = i[f]));
    } else if ('o' !== e[0] || 'n' !== e[1] || !/[A-Z]/.test(e[2]) || e in t)
      if (
        'list' !== e &&
        'type' !== e &&
        !o &&
        (e in t ||
          (-1 !== ['object', 'function'].indexOf(typeof i) && null !== i))
      ) {
        var c = n.m(t);
        c && c.C && c.C[e]
          ? (m(t, e, i),
            u && c.C[e].R && p(t, c.C[e].F, i, 3 === c.C[e].H, null == i))
          : 'ref' !== e &&
            (m(t, e, null == i ? '' : i),
            (null != i && !1 !== i) || n.k.q(t, e));
      } else
        null != i && 'key' !== e
          ? p(t, e, i)
          : (o || (n.k.I(t, e) && (null == i || !1 === i))) && n.k.q(t, e);
    else
      (e = W(e) in t ? W(e.substring(2)) : W(e[2]) + e.substring(3)),
        i ? i !== r && n.k.B(t, e, i) : n.k.U(t, e);
  else if (r !== i) {
    var a = y(r),
      s = y(i),
      l = a.filter(function (n) {
        return !s.includes(n);
      }),
      v = y(t.className).filter(function (n) {
        return !l.includes(n);
      }),
      d = s.filter(function (n) {
        return !a.includes(n) && !v.includes(n);
      });
    v.push.apply(v, d), (t.className = v.join(' '));
  }
}
function y(n) {
  return null == n || '' === n ? [] : n.trim().split(/\s+/);
}
function m(n, t, e) {
  try {
    n[t] = e;
  } catch (n) {}
}
function b(n, t, e, r, i) {
  var o = 11 === e.f.nodeType && e.f.host ? e.f.host : e.f,
    u = (t && t.vattrs) || x,
    f = e.vattrs || x;
  for (i in u)
    (f && null != f[i]) || null == u[i] || h(n, o, i, u[i], void 0, r, e.c);
  for (i in f)
    (i in u && f[i] === ('value' === i || 'checked' === i ? o[i] : u[i])) ||
      h(n, o, i, u[i], f[i], r, e.c);
}
function w(n, t) {
  function e(i, o, u, f, c, v, y, m, w) {
    if (
      ((m = o.vchildren[u]),
      a ||
        ((d = !0),
        'slot' === m.vtag &&
          (l && t.O(f, l + '-slot', ''),
          m.vchildren ? (m.z = !0) : (m.Q = !0))),
      S(m.vtext))
    )
      m.f = t.Y(m.vtext);
    else if (m.Q) m.f = t.Y('');
    else {
      if (
        ((v = m.f =
          B || 'svg' === m.vtag
            ? t.Z('http://www.w3.org/2000/svg', m.vtag)
            : t.G(m.z ? 'slot-fb' : m.vtag)),
        (B = 'svg' === m.vtag || ('foreignObject' !== m.vtag && B)),
        b(n, null, m, B),
        S(l) && v['s-si'] !== l && t.O(v, (v['s-si'] = l), ''),
        S(s) &&
          t.O(
            v,
            T,
            s +
              '.' +
              u +
              ((function n(t) {
                if (t)
                  for (var e = 0; e < t.length; e++)
                    if ('slot' !== t[e].vtag || n(t[e].vchildren)) return !0;
                return !1;
              })(m.vchildren)
                ? ''
                : '.'),
          ),
        m.vchildren)
      )
        for (c = 0; c < m.vchildren.length; ++c)
          (y = e(i, m, c, v)) &&
            (S(s) &&
              3 === y.nodeType &&
              !y['s-cr'] &&
              t.J(v, t.K('s.' + s + '.' + c)),
            t.J(v, y),
            S(s) &&
              3 === y.nodeType &&
              !y['s-cr'] &&
              (t.J(v, t.K('/')), t.J(v, t.Y(' '))));
      'svg' === m.vtag && (B = !1);
    }
    return (
      (m.f['s-hn'] = p),
      (m.z || m.Q) &&
        ((m.f['s-sr'] = !0),
        (m.f['s-cr'] = h),
        (m.f['s-sn'] = m.vname || ''),
        (w = i && i.vchildren && i.vchildren[u]) &&
          w.vtag === m.vtag &&
          i.f &&
          r(i.f)),
      m.f
    );
  }
  function r(e, i, o, u) {
    n.V = !0;
    var a = t.X(e);
    for (o = a.length - 1; o >= 0; o--)
      (u = a[o])['s-hn'] !== p &&
        u['s-ol'] &&
        (t.nn(u),
        t.tn(c(u), u, f(u)),
        t.nn(u['s-ol']),
        (u['s-ol'] = null),
        (d = !0)),
        i && r(u, i);
    n.V = !1;
  }
  function i(n, r, i, o, u, c, a, s) {
    var l = n['s-cr'] || n.$defaultHolder;
    for (
      (a = (l && t.en(l)) || n).shadowRoot &&
      t.rn(a) === p &&
      (a = a.shadowRoot);
      u <= c;
      ++u
    )
      o[u] &&
        (s = S(o[u].vtext) ? t.Y(o[u].vtext) : e(null, i, u, n)) &&
        ((o[u].f = s), t.tn(a, s, f(r)));
  }
  function o(n, e, i, o) {
    for (; e <= i; ++e)
      S(n[e]) &&
        ((o = n[e].f),
        (v = !0),
        o['s-ol'] ? t.nn(o['s-ol']) : r(o, !0),
        t.nn(o));
  }
  function u(n, t) {
    return (
      n.vtag === t.vtag &&
      n.vkey === t.vkey &&
      ('slot' !== n.vtag || n.vname === t.vname)
    );
  }
  function f(n) {
    return n && n['s-ol'] ? n['s-ol'] : n;
  }
  function c(n) {
    return t.en(n['s-ol'] ? n['s-ol'] : n);
  }
  var a,
    s,
    l,
    v,
    d,
    p,
    h,
    y = [];
  return function m(w, g, M, j, k, $, A, E, O, P, T, _) {
    if (
      ((p = t.rn(w)),
      (h = w['s-cr']),
      (a = j),
      (s = 'shadow' !== k ? $ : null),
      (l = w['s-sc']),
      (d = v = !1),
      (function a(s, l, v) {
        var d = (l.f = s.f),
          p = s.vchildren,
          h = l.vchildren;
        (B = l.f && S(t.in(l.f)) && void 0 !== l.f.ownerSVGElement),
          (B = 'svg' === l.vtag || ('foreignObject' !== l.vtag && B)),
          S(l.vtext)
            ? (v = d['s-cr'] || d.$defaultHolder)
              ? t.on(t.en(v), l.vtext)
              : s.vtext !== l.vtext && t.on(d, l.vtext)
            : ('slot' !== l.vtag && b(n, s, l, B),
              S(p) && S(h)
                ? (function y(n, s, l, v, d, p, h, m) {
                    for (
                      var b = 0,
                        w = 0,
                        g = s.length - 1,
                        M = s[0],
                        j = s[g],
                        k = v.length - 1,
                        $ = v[0],
                        A = v[k];
                      b <= g && w <= k;

                    )
                      if (null == M) M = s[++b];
                      else if (null == j) j = s[--g];
                      else if (null == $) $ = v[++w];
                      else if (null == A) A = v[--k];
                      else if (u(M, $)) a(M, $), (M = s[++b]), ($ = v[++w]);
                      else if (u(j, A)) a(j, A), (j = s[--g]), (A = v[--k]);
                      else if (u(M, A))
                        ('slot' !== M.vtag && 'slot' !== A.vtag) ||
                          r(t.en(M.f)),
                          a(M, A),
                          t.tn(n, M.f, t.un(j.f)),
                          (M = s[++b]),
                          (A = v[--k]);
                      else if (u(j, $))
                        ('slot' !== M.vtag && 'slot' !== A.vtag) ||
                          r(t.en(j.f)),
                          a(j, $),
                          t.tn(n, j.f, M.f),
                          (j = s[--g]),
                          ($ = v[++w]);
                      else {
                        for (d = null, p = b; p <= g; ++p)
                          if (s[p] && S(s[p].vkey) && s[p].vkey === $.vkey) {
                            d = p;
                            break;
                          }
                        S(d)
                          ? ((m = s[d]).vtag !== $.vtag
                              ? (h = e(s && s[w], l, d, n))
                              : (a(m, $), (s[d] = void 0), (h = m.f)),
                            ($ = v[++w]))
                          : ((h = e(s && s[w], l, w, n)), ($ = v[++w])),
                          h && t.tn(c(M.f), h, f(M.f));
                      }
                    b > g
                      ? i(n, null == v[k + 1] ? null : v[k + 1].f, l, v, w, k)
                      : w > k && o(s, b, g);
                  })(d, p, l, h)
                : S(h)
                  ? (S(s.vtext) && t.on(d, ''),
                    i(d, null, l, h, 0, h.length - 1))
                  : S(p) && o(p, 0, p.length - 1)),
          B && 'svg' === l.vtag && (B = !1);
      })(g, M),
      S(s) && t.O(g.f, C, s),
      d)
    ) {
      for (
        (function n(e, r, i, o, u, f, c, a, s, l) {
          for (u = 0, f = (r = t.X(e)).length; u < f; u++) {
            if ((i = r[u])['s-sr'] && (o = i['s-cr']))
              for (
                a = t.X(t.en(o)), s = i['s-sn'], c = a.length - 1;
                c >= 0;
                c--
              )
                (o = a[c])['s-cn'] ||
                  o['s-nr'] ||
                  o['s-hn'] === i['s-hn'] ||
                  ((((3 === (l = t.fn(o)) || 8 === l) && '' === s) ||
                    (1 === l && null === t.cn(o, 'slot') && '' === s) ||
                    (1 === l && t.cn(o, 'slot') === s)) &&
                    (y.some(function (n) {
                      return n.an === o;
                    }) ||
                      ((v = !0), (o['s-sn'] = s), y.push({ sn: i, an: o }))));
            1 === t.fn(i) && n(i);
          }
        })(M.f),
          A = 0;
        A < y.length;
        A++
      )
        (E = y[A]).an['s-ol'] ||
          (((O = t.Y(''))['s-nr'] = E.an),
          t.tn(t.en(E.an), (E.an['s-ol'] = O), E.an));
      for (n.V = !0, A = 0; A < y.length; A++) {
        for (
          E = y[A], T = t.en(E.sn), _ = t.un(E.sn), O = E.an['s-ol'];
          (O = t.ln(O));

        )
          if (
            (P = O['s-nr']) &&
            P &&
            P['s-sn'] === E.an['s-sn'] &&
            T === t.en(P) &&
            (P = t.un(P)) &&
            P &&
            !P['s-nr']
          ) {
            _ = P;
            break;
          }
        ((!_ && T !== t.en(E.an)) || t.un(E.an) !== _) &&
          E.an !== _ &&
          (t.nn(E.an), t.tn(T, E.an, _));
      }
      n.V = !1;
    }
    return (
      v &&
        (function n(e, r, i, o, u, f, c, a) {
          for (o = 0, u = (i = t.X(e)).length; o < u; o++)
            if (((r = i[o]), 1 === t.fn(r))) {
              if (r['s-sr'])
                for (c = r['s-sn'], r.hidden = !1, f = 0; f < u; f++)
                  if (i[f]['s-hn'] !== r['s-hn'])
                    if (((a = t.fn(i[f])), '' !== c)) {
                      if (1 === a && c === t.cn(i[f], 'slot')) {
                        r.hidden = !0;
                        break;
                      }
                    } else if (
                      1 === a ||
                      (3 === a && '' !== t.vn(i[f]).trim())
                    ) {
                      r.hidden = !0;
                      break;
                    }
              n(r);
            }
        })(M.f),
      (y.length = 0),
      M
    );
  };
}
function g(n, t) {
  n &&
    (n.vattrs && n.vattrs.ref && n.vattrs.ref(t ? null : n.f),
    n.vchildren &&
      n.vchildren.forEach(function (n) {
        g(n, t);
      }));
}
function M(n, t) {
  var e = n.m(t);
  e.dn &&
    e.dn.forEach(function (e) {
      e.r ||
        n.k.B(
          t,
          e.t,
          (function r(n, t, e, i) {
            return function (r) {
              (i = n.v.get(t))
                ? i[e](r)
                : ((i = n.w.get(t) || []).push(e, r), n.w.set(t, i));
            };
          })(n, t, e.e),
          e.o,
          e.i,
        );
    });
}
function j(n, t) {
  var e = { nodeName: t },
    r = n.m(e);
  if (!r || !r.y) return Promise.resolve(null);
  var i = r.y,
    o = (function u(n) {
      return Object.keys(n).reduce(
        function (t, e) {
          var r,
            i = n[e],
            o = { name: e };
          if (i.state) (r = 'states'), (o.pn = i.watchCallbacks || []);
          else if (i.elementRef) r = 'elements';
          else if (i.method) r = 'methods';
          else {
            r = 'props';
            var u = 'any';
            i.type &&
              ((u = i.type), 'function' == typeof i.type && (u = i.type.name)),
              (o.type = u.toLowerCase()),
              (o.mutable = i.mutable || !1),
              (o.connect = i.connect || '-'),
              (o.context = i.connect || '-'),
              (o.pn = i.watchCallbacks || []);
          }
          return t[r].push(o), t;
        },
        { hn: [], yn: [], mn: [], bn: [] },
      );
    })(i.properties || {}),
    f = (r.dn || []).map(function (n) {
      return {
        wn: n.t,
        capture: n.o,
        disabled: n.r,
        passive: n.i,
        method: n.e,
      };
    }),
    c = i.events || [],
    a = Object.assign(
      {
        gn: i.is,
        Mn: r.jn || 'unknown',
        encapsulation: i.encapsulation || 'none',
      },
      o,
      { events: { kn: c, listeners: f } },
    );
  return Promise.resolve(a);
}
function k(n, t, e, r, i) {
  return (
    e.mode || (e.mode = n.$n(e)),
    e['s-cr'] ||
      n.cn(e, C) ||
      (n.j && 1 === t.encapsulation) ||
      ((e['s-cr'] = n.Y('')),
      (e['s-cr']['s-cn'] = !0),
      n.tn(e, e['s-cr'], n.X(e)[0])),
    n.j ||
      1 !== t.encapsulation ||
      'shadowRoot' in HTMLElement.prototype ||
      (e.shadowRoot = e),
    1 === t.encapsulation && n.j && !e.shadowRoot && n.An(e, { mode: 'open' }),
    (r = { En: e['s-id'], N: {} }),
    t.C &&
      Object.keys(t.C).forEach(function (o) {
        (i = t.C[o].F) && (r.N[i] = n.cn(e, i));
      }),
    r
  );
}
function $(n, t, i, o) {
  (i.connectedCallback = function () {
    (function e(n, t, r) {
      n.On.has(r) || (n.On.set(r, !0), M(n, r)),
        n.l.delete(r),
        n.Pn.has(r) ||
          (n.Pn.set(r, !0),
          r['s-id'] || (r['s-id'] = n.Cn()),
          (function i(n, t, e) {
            for (e = t; (e = n.k.in(e)); )
              if (n.Tn(e)) {
                n._n.has(t) ||
                  (n.u.set(t, e),
                  e.$activeLoading && (e['s-ld'] = e.$activeLoading),
                  (e['s-ld'] = e['s-ld'] || []).push(t));
                break;
              }
          })(n, r),
          n.queue.tick(function () {
            n.M.set(r, k(n.k, t, r)), n.xn(t, r);
          }));
    })(n, t, this);
  }),
    (i.attributeChangedCallback = function (n, r, i) {
      (function o(n, t, r, i, u, f, c) {
        if (n && i !== u)
          for (f in n)
            if ((c = n[f]).F && W(c.F) === W(r)) {
              t[f] = e(c.H, u);
              break;
            }
      })(t.C, this, n, r, i);
    }),
    (i.disconnectedCallback = function () {
      (function t(n, e) {
        if (
          !n.V &&
          (function i(n, t) {
            for (; t; ) {
              if (!n.en(t)) return 9 !== n.fn(t);
              t = n.en(t);
            }
          })(n.k, e)
        ) {
          n.l.set(e, !0), r(n, e), g(n.T.get(e), !0), n.k.U(e), n.On.delete(e);
          var o = n.v.get(e);
          o && o.componentDidUnload && o.componentDidUnload(),
            n._ && n._.Nn(e),
            [n.u, n.Sn, n.M].forEach(function (n) {
              return n.delete(e);
            });
        }
      })(n, this);
    }),
    (i['s-init'] = function () {
      (function t(n, e, i, o, u) {
        if (
          !n._n.has(e) &&
          (o = n.v.get(e)) &&
          !n.l.has(e) &&
          (!e['s-ld'] || !e['s-ld'].length)
        ) {
          delete e['s-ld'], n._n.set(e, !0);
          try {
            g(n.T.get(e)),
              (u = n.Sn.get(e)) &&
                (u.forEach(function (n) {
                  return n(e);
                }),
                n.Sn.delete(e)),
              o.componentDidLoad && o.componentDidLoad();
          } catch (t) {
            n.g(t, 4, e);
          }
          e.classList.add(i), r(n, e);
        }
      })(n, this, o);
    }),
    (i['s-hmr'] = function (e) {
      (function r(n, t, e, i) {
        (t.y = null), n._n.delete(e);
        var o = n.v.get(e);
        o && (n.d.delete(o), n.v.delete(e)),
          n.k.U(e),
          n.On.delete(e),
          (t.dn = null),
          (e['s-hmr-load'] = function () {
            delete e['s-hmr-load'],
              (function r(n, t, e) {
                n.On.has(e) ||
                  (n.On.set(e, !0),
                  t.y &&
                    t.y.listeners &&
                    ((t.dn = t.y.listeners.map(function (n) {
                      return {
                        e: n.method,
                        t: n.name,
                        o: !!n.capture,
                        i: !!n.passive,
                        r: !!n.disabled,
                      };
                    })),
                    M(n, e)));
              })(n, t, e);
          }),
          n.M.set(e, k(n.k, t, e)),
          n.xn(t, e, i);
      })(n, t, this, e);
    }),
    (i.forceUpdate = function () {
      f(n, this);
    }),
    (function u(n, t, r) {
      t &&
        Object.keys(t).forEach(function (i) {
          var o = t[i],
            u = o.Wn;
          1 === u || 2 === u
            ? d(
                r,
                i,
                function t() {
                  return (n.p.get(this) || {})[i];
                },
                function t(r) {
                  l(n, this, i, e(o.H, r));
                },
              )
            : 6 === u && v(r, i, L);
        });
    })(n, t.C, i);
}
function A(n, t, e, r) {
  return function () {
    var i = arguments;
    return (function o(n, t, e) {
      var r = t[e],
        i = n.Dn.body;
      return i
        ? (r || (r = i.querySelector(e)),
          r || ((r = t[e] = n.G(e)), n.J(i, r)),
          r.componentOnReady())
        : Promise.resolve();
    })(n, t, e).then(function (n) {
      return n[r].apply(n, i);
    });
  };
}
function E(t, e, r, o, u, c) {
  var a = { html: {} },
    s = {},
    l = (r[t] = r[t] || {}),
    v = (function d(n, t, e) {
      n.Ln ||
        ((n.Ln = function (n, t, e, r) {
          return n.addEventListener(t, e, r);
        }),
        (n.Rn = function (n, t, e, r) {
          return n.removeEventListener(t, e, r);
        }));
      var r = new WeakMap(),
        i = {
          Dn: e,
          Fn: !1,
          fn: function (n) {
            return n.nodeType;
          },
          G: function (n) {
            return e.createElement(n);
          },
          Z: function (n, t) {
            return e.createElementNS(n, t);
          },
          Y: function (n) {
            return e.createTextNode(n);
          },
          K: function (n) {
            return e.createComment(n);
          },
          tn: function (n, t, e) {
            return n.insertBefore(t, e);
          },
          nn: function (n) {
            return n.remove();
          },
          J: function (n, t) {
            return n.appendChild(t);
          },
          X: function (n) {
            return n.childNodes;
          },
          en: function (n) {
            return n.parentNode;
          },
          un: function (n) {
            return n.nextSibling;
          },
          ln: function (n) {
            return n.previousSibling;
          },
          rn: function (n) {
            return W(n.nodeName);
          },
          vn: function (n) {
            return n.textContent;
          },
          on: function (n, t) {
            return (n.textContent = t);
          },
          cn: function (n, t) {
            return n.getAttribute(t);
          },
          O: function (n, t, e) {
            return n.setAttribute(t, e);
          },
          Hn: function (n, t, e, r) {
            return n.setAttributeNS(t, e, r);
          },
          q: function (n, t) {
            return n.removeAttribute(t);
          },
          I: function (n, t) {
            return n.hasAttribute(t);
          },
          $n: function (t) {
            return t.getAttribute('mode') || (n.Context || {}).mode;
          },
          qn: function (n, r) {
            return 'child' === r
              ? n.firstElementChild
              : 'parent' === r
                ? i.in(n)
                : 'body' === r
                  ? e.body
                  : 'document' === r
                    ? e
                    : 'window' === r
                      ? t
                      : n;
          },
          B: function (t, e, o, u, f, c, a, s) {
            var l = e,
              v = t,
              d = r.get(t);
            if (
              (d && d[l] && d[l](),
              'string' == typeof c
                ? (v = i.qn(t, c))
                : 'object' == typeof c
                  ? (v = c)
                  : (s = e.split(':')).length > 1 &&
                    ((v = i.qn(t, s[0])), (e = s[1])),
              v)
            ) {
              var p = o;
              (s = e.split('.')).length > 1 &&
                ((e = s[0]),
                (p = function (n) {
                  n.keyCode === N[s[1]] && o(n);
                })),
                (a = i.Fn ? { capture: !!u, passive: !!f } : !!u),
                n.Ln(v, e, p, a),
                d || r.set(t, (d = {})),
                (d[l] = function () {
                  v && n.Rn(v, e, p, a), (d[l] = null);
                });
            }
          },
          U: function (n, t) {
            var e = r.get(n);
            e &&
              (t
                ? e[t] && e[t]()
                : Object.keys(e).forEach(function (n) {
                    e[n] && e[n]();
                  }));
          },
          An: function (n, t) {
            return n.attachShadow(t);
          },
        };
      (i.j = !!i.Dn.documentElement.attachShadow),
        t.location.search.indexOf('shadow=false') > 0 && (i.j = !1),
        'function' != typeof t.CustomEvent &&
          ((t.CustomEvent = function (n, t, r) {
            return (
              (r = e.createEvent('CustomEvent')).initCustomEvent(
                n,
                t.bubbles,
                t.cancelable,
                t.detail,
              ),
              r
            );
          }),
          (t.CustomEvent.prototype = t.Event.prototype)),
        (i.In = function (n, e, r) {
          return n && n.dispatchEvent(new t.CustomEvent(e, r));
        });
      try {
        t.addEventListener(
          'e',
          null,
          Object.defineProperty({}, 'passive', {
            get: function () {
              return (i.Fn = !0);
            },
          }),
        );
      } catch (n) {}
      return (
        (i.in = function (n, t) {
          return (t = i.en(n)) && 11 === i.fn(t) ? t.host : t;
        }),
        i
      );
    })(l, r, o);
  (e.isServer = e.isPrerender = !(e.isClient = !0)),
    (e.window = r),
    (e.location = r.location),
    (e.document = o),
    (e.resourcesUrl = e.publicPath = u),
    (e.enableListener = function (n, t, e, r, i) {
      return (function o(n, t, e, r, i, u) {
        if (t) {
          var f = n.d.get(t),
            c = n.m(f);
          if (c && c.dn)
            if (r) {
              var a = c.dn.find(function (n) {
                return n.t === e;
              });
              a &&
                n.k.B(
                  f,
                  e,
                  function (n) {
                    return t[a.e](n);
                  },
                  a.o,
                  void 0 === u ? a.i : !!u,
                  i,
                );
            } else n.k.U(f, e);
        }
      })(y, n, t, e, r, i);
    }),
    (e.emit = function (n, t, r) {
      return v.In(n, e.eventNameFn ? e.eventNameFn(t) : t, r);
    }),
    (l.h = i),
    (l.Context = e);
  var p =
      (r['s-defined'] =
      r.$definedCmps =
        r['s-defined'] || r.$definedCmps || {}),
    h = 0,
    y = {
      k: v,
      Bn: function m(n, t) {
        if (!r.customElements.get(n.n)) {
          $(y, (a[n.n] = n), t.prototype, c);
          var e = (t.observedAttributes = []);
          for (var i in n.C) n.C[i].F && e.push(n.C[i].F);
          r.customElements.define(n.n, t);
        }
      },
      b: e.emit,
      m: function (n) {
        return a[v.rn(n)];
      },
      S: function (n) {
        return e[n];
      },
      isClient: !0,
      Tn: function (n) {
        return !(!p[v.rn(n)] && !y.m(n));
      },
      Cn: function () {
        return t + h++;
      },
      g: function (n, t, e) {},
      D: function (n) {
        return (function t(n, e, r) {
          return {
            create: A(n, e, r, 'create'),
            componentOnReady: A(n, e, r, 'componentOnReady'),
          };
        })(v, s, n);
      },
      queue: (e.queue = (function b(n, t) {
        function e(n) {
          for (var t = 0; t < n.length; t++)
            try {
              n[t]();
            } catch (n) {}
          n.length = 0;
        }
        function r(n, t) {
          for (var e = 0; e < n.length && o() < t; )
            try {
              n[e++]();
            } catch (n) {}
          e === n.length ? (n.length = 0) : 0 !== e && n.splice(0, e);
        }
        function i() {
          l++, e(c);
          var t = o() + 7 * Math.ceil(l * (1 / 22));
          r(a, t),
            r(s, t),
            a.length > 0 && (s.push.apply(s, a), (a.length = 0)),
            (v = c.length + a.length + s.length > 0) ? n.raf(i) : (l = 0);
        }
        var o = function () {
            return t.performance.now();
          },
          u = Promise.resolve(),
          f = [],
          c = [],
          a = [],
          s = [],
          l = 0,
          v = !1;
        return (
          n.raf || (n.raf = t.requestAnimationFrame.bind(t)),
          {
            tick: function (n) {
              f.push(n),
                1 === f.length &&
                  u.then(function () {
                    return e(f);
                  });
            },
            read: function (t) {
              c.push(t), v || ((v = !0), n.raf(i));
            },
            write: function (t) {
              a.push(t), v || ((v = !0), n.raf(i));
            },
          }
        );
      })(l, r)),
      xn: function g(n, t, e) {
        if (n.y) f(y, t);
        else {
          var r = {
            mode: t.mode,
            scoped: 2 === n.encapsulation || (1 === n.encapsulation && !v.j),
          };
          n.jn(r).then(function (e) {
            try {
              (n.y = e),
                (function r(n, t, e, i, o) {
                  if (i) {
                    var u = t.n + (o || _);
                    t[u] || (t[u] = i);
                  }
                })(0, n, n.encapsulation, e.style, e.styleMode);
            } catch (t) {
              n.y = function i() {};
            }
            f(y, t);
          });
        }
      },
      u: new WeakMap(),
      Un: new WeakMap(),
      Pn: new WeakMap(),
      On: new WeakMap(),
      _n: new WeakMap(),
      d: new WeakMap(),
      M: new WeakMap(),
      v: new WeakMap(),
      l: new WeakMap(),
      a: new WeakMap(),
      Sn: new WeakMap(),
      w: new WeakMap(),
      T: new WeakMap(),
      p: new WeakMap(),
    };
  y.render = w(y, v);
  var M = v.Dn.documentElement;
  return (
    (M['s-ld'] = []),
    (M['s-rn'] = !0),
    (M['s-init'] = function () {
      y._n.set(M, (l.loaded = y.s = !0)),
        v.In(r, 'appload', { detail: { namespace: t } });
    }),
    (y.A = function (t, e, r, i) {
      (function o(t, e, r, i) {
        var o = r.encapsulation,
          u = 2 === o || (1 === o && !t.k.j),
          f = r.n + i.mode,
          c = r[f];
        if (
          (u && (i['s-sc'] = n(r, i.mode)),
          c || ((c = r[(f = r.n + _)]), u && (i['s-sc'] = n(r))),
          c)
        ) {
          var a = e.Dn.head;
          if (e.j)
            if (1 === o) a = i.shadowRoot;
            else
              for (var s = i; (s = e.en(s)); )
                if (s.host && s.host.shadowRoot) {
                  a = s.host.shadowRoot;
                  break;
                }
          var l = t.Un.get(a);
          if ((l || t.Un.set(a, (l = {})), !l[f])) {
            var v = void 0;
            if (
              (t._
                ? (v = t._.zn(i, f, c))
                : (((v = e.G('style')).innerHTML = c), (l[f] = !0)),
              v)
            ) {
              e.O(v, 'data-style-tag', r.n),
                i.mode && e.O(v, 'data-style-mode', r.n),
                i['s-sc'] && e.O(v, 'data-style-scoped', 'true');
              var d = a.querySelectorAll('[data-styles]');
              e.tn(
                a,
                v,
                (d.length && d[d.length - 1].nextSibling) || a.firstChild,
              );
            }
          }
        }
      })(t, e, r, i);
    }),
    (function k(n, t, e, r) {
      var i = (e.Qn = e.Qn || {});
      return (
        (i.Yn = i.Yn || []),
        i.Yn.push(
          (function o(n, t, e) {
            return {
              namespace: t,
              Zn: function (n) {
                return n && n.tagName
                  ? Promise.all([
                      j(e, n.tagName),
                      (function t(n, e) {
                        return Promise.resolve(n.v.get(e));
                      })(e, n),
                    ]).then(function (n) {
                      return n[0] && n[1] ? { Gn: n[0], Jn: n[1] } : null;
                    })
                  : Promise.resolve(null);
              },
              Kn: function (n) {
                return j(e, n);
              },
              Vn: function () {
                return Promise.all(
                  n.components.map(function (n) {
                    return j(e, n[0]);
                  }),
                ).then(function (n) {
                  return n.filter(function (n) {
                    return n;
                  });
                });
              },
            };
          })(n, t, r),
        ),
        i.Zn ||
          (i.Zn = function (n) {
            return Promise.all(
              i.Yn.map(function (t) {
                return t.Zn(n);
              }),
            ).then(function (n) {
              return n.find(function (n) {
                return !!n;
              });
            });
          }),
        i.Vn ||
          (i.Vn = function () {
            var n = [];
            return (
              i.Yn.forEach(function (t) {
                n.push(t.Vn());
              }),
              Promise.all(n).then(function (n) {
                var t = [];
                return (
                  n.forEach(function (n) {
                    n.forEach(function (n) {
                      t.push(n);
                    });
                  }),
                  t
                );
              })
            );
          }),
        i
      );
    })(l, t, r, y),
    (function E(n, t, e, r, i, o) {
      if (
        ((t.componentOnReady = function (t, e) {
          if (!t.nodeName.includes('-')) return e(null), !1;
          var r = n.m(t);
          if (r)
            if (n._n.has(t)) e(t);
            else {
              var i = n.Sn.get(t) || [];
              i.push(e), n.Sn.set(t, i);
            }
          return !!r;
        }),
        i)
      ) {
        for (o = i.length - 1; o >= 0; o--)
          t.componentOnReady(i[o][0], i[o][1]) && i.splice(o, 1);
        for (o = 0; o < r.length; o++) if (!e[r[o]].componentOnReady) return;
        for (o = 0; o < i.length; o++) i[o][1](null);
        i.length = 0;
      }
    })(y, l, r, r['s-apps'], r['s-cr']),
    (l.initialized = !0),
    y
  );
}
function O(n, e, r) {
  void 0 === r && (r = {}), (e = Array.isArray(e) ? e : [e]);
  var i = n.document,
    o = r.hydratedCssClass || 'hydrated',
    u = e
      .filter(function (n) {
        return n[2];
      })
      .map(function (n) {
        return n[0];
      });
  if (u.length) {
    var f = i.createElement('style');
    (f.innerHTML =
      u.join() + '{visibility:hidden}.' + o + '{visibility:inherit}'),
      f.setAttribute('data-styles', ''),
      i.head.insertBefore(f, i.head.firstChild);
  }
  var c = r.namespace || 'ionicons';
  z ||
    ((z = !0),
    (function a(n, t, e) {
      (n['s-apps'] = n['s-apps'] || []).push(t),
        e.componentOnReady ||
          (e.componentOnReady = function t() {
            function e(t) {
              if (r.nodeName.indexOf('-') > 0) {
                for (var e = n['s-apps'], i = 0, o = 0; o < e.length; o++)
                  if (n[e[o]].componentOnReady) {
                    if (n[e[o]].componentOnReady(r, t)) return;
                    i++;
                  }
                if (i < e.length)
                  return void (n['s-cr'] = n['s-cr'] || []).push([r, t]);
              }
              t(null);
            }
            var r = this;
            return n.Promise ? new n.Promise(e) : { then: e };
          });
    })(n, c, n.HTMLElement.prototype)),
    applyPolyfills(n, function () {
      if (!U[c]) {
        var u = {},
          f = r.resourcesUrl || './';
        P(c, u, n, i, f, o), (U[c] = E(c, u, n, i, f, o));
      }
      e.forEach(function (e) {
        var r;
        !(function i(n) {
          return /\{\s*\[native code\]\s*\}/.test('' + n);
        })(n.customElements.define)
          ? ((r = function (t) {
              return n.HTMLElement.call(this, t);
            }).prototype = Object.create(n.HTMLElement.prototype, {
              constructor: { value: r, configurable: !0 },
            }))
          : (r = new Function('w', 'return class extends w.HTMLElement{}')(n)),
          U[c].Bn(
            (function o(n, e, r) {
              var i = { n: n[0], C: { color: { F: 'color' } } };
              i.jn = n[1];
              var o = n[3];
              if (o)
                for (e = 0; e < o.length; e++)
                  (r = o[e]),
                    (i.C[r[0]] = {
                      Wn: r[1],
                      R: !!r[2],
                      F: 'string' == typeof r[3] ? r[3] : r[3] ? r[0] : 0,
                      H: r[4],
                    });
              return (i.encapsulation = n[4]), n[5] && (i.dn = n[5].map(t)), i;
            })(e),
            r,
          );
      });
    });
}
(this && this.Xn) || Object.setPrototypeOf || Array;
var P = function () {};
function applyPolyfills(n, t) {
  n.nt = (function () {
    function t() {
      var n = setTimeout;
      return function () {
        return n(e, 1);
      };
    }
    function e() {
      for (var n = 0; n < b; n += 2)
        (0, P[n])(P[n + 1]), (P[n] = void 0), (P[n + 1] = void 0);
      b = 0;
    }
    function r(n, t) {
      var e = this,
        r = new this.constructor(o);
      void 0 === r[T] && h(r);
      var i = e.tt;
      if (i) {
        var u = arguments[i - 1];
        M(function () {
          return p(i, r, u, e.et);
        });
      } else v(e, r, n, t);
      return r;
    }
    function i(n) {
      if (n && 'object' == typeof n && n.constructor === this) return n;
      var t = new this(o);
      return c(t, n), t;
    }
    function o() {}
    function u(n) {
      try {
        return n.then;
      } catch (n) {
        return (S.error = n), S;
      }
    }
    function f(n, t, e) {
      t.constructor === n.constructor && e === r && t.constructor.resolve === i
        ? (function (n, t) {
            t.tt === x
              ? s(n, t.et)
              : t.tt === N
                ? l(n, t.et)
                : v(
                    t,
                    void 0,
                    function (t) {
                      return c(n, t);
                    },
                    function (t) {
                      return l(n, t);
                    },
                  );
          })(n, t)
        : e === S
          ? (l(n, S.error), (S.error = null))
          : void 0 === e
            ? s(n, t)
            : 'function' == typeof e
              ? (function (n, t, e) {
                  M(function (n) {
                    var r = !1,
                      i = (function (n, t, e, r) {
                        try {
                          n.call(t, e, r);
                        } catch (n) {
                          return n;
                        }
                      })(
                        e,
                        t,
                        function (e) {
                          r || ((r = !0), t !== e ? c(n, e) : s(n, e));
                        },
                        function (t) {
                          r || ((r = !0), l(n, t));
                        },
                        n.rt,
                      );
                    !r && i && ((r = !0), l(n, i));
                  }, n);
                })(n, t, e)
              : s(n, t);
    }
    function c(n, t) {
      if (n === t) l(n, new TypeError('cannot resolve promise w/ itself'));
      else {
        var e = typeof t;
        null === t || ('object' !== e && 'function' !== e)
          ? s(n, t)
          : f(n, t, u(t));
      }
    }
    function a(n) {
      n.it && n.it(n.et), d(n);
    }
    function s(n, t) {
      n.tt === _ && ((n.et = t), (n.tt = x), 0 !== n.ot.length && M(d, n));
    }
    function l(n, t) {
      n.tt === _ && ((n.tt = N), (n.et = t), M(a, n));
    }
    function v(n, t, e, r) {
      var i = n.ot,
        o = i.length;
      (n.it = null),
        (i[o] = t),
        (i[o + x] = e),
        (i[o + N] = r),
        0 === o && n.tt && M(d, n);
    }
    function d(n) {
      var t = n.ot,
        e = n.tt;
      if (0 !== t.length) {
        for (var r, i, o = n.et, u = 0; u < t.length; u += 3)
          (r = t[u]), (i = t[u + e]), r ? p(e, r, i, o) : i(o);
        n.ot.length = 0;
      }
    }
    function p(n, t, e, r) {
      var i = 'function' == typeof e,
        o = void 0,
        u = void 0,
        f = void 0,
        a = void 0;
      if (i) {
        try {
          o = e(r);
        } catch (n) {
          (S.error = n), (o = S);
        }
        if (
          (o === S ? ((a = !0), (u = o.error), (o.error = null)) : (f = !0),
          t === o)
        )
          return void l(t, new TypeError('Cannot return same promise'));
      } else (o = r), (f = !0);
      t.tt === _ &&
        (i && f
          ? c(t, o)
          : a
            ? l(t, u)
            : n === x
              ? s(t, o)
              : n === N && l(t, o));
    }
    function h(n) {
      (n[T] = W++), (n.tt = void 0), (n.et = void 0), (n.ot = []);
    }
    var y,
      m = Array.isArray
        ? Array.isArray
        : function (n) {
            return '[object Array]' === Object.prototype.toString.call(n);
          },
      b = 0,
      w = void 0,
      g = void 0,
      M = function (n, t) {
        (P[b] = n), (P[b + 1] = t), 2 === (b += 2) && (g ? g(e) : C());
      },
      j = (y = void 0 !== n ? n : void 0) || {},
      k = j.ut || j.ft;
    j = 'undefined' == typeof self;
    var $,
      A,
      E,
      O =
        'undefined' != typeof Uint8ClampedArray &&
        'undefined' != typeof importScripts &&
        'undefined' != typeof MessageChannel,
      P = Array(1e3),
      C = void 0;
    C = k
      ? (($ = 0),
        (A = new k(e)),
        (E = document.createTextNode('')),
        A.observe(E, { characterData: !0 }),
        function () {
          E.data = $ = ++$ % 2;
        })
      : O
        ? (function () {
            var n = new MessageChannel();
            return (
              (n.ct.onmessage = e),
              function () {
                return n.at.postMessage(0);
              }
            );
          })()
        : void 0 === y && 'function' == typeof require
          ? (function () {
              try {
                var n = Function('return this')().st('vertx');
                return void 0 !== (w = n.lt || n.vt)
                  ? function () {
                      w(e);
                    }
                  : t();
              } catch (n) {
                return t();
              }
            })()
          : t();
    var T = Math.random().toString(36).substring(2),
      _ = void 0,
      x = 1,
      N = 2,
      S = { error: null },
      W = 0,
      D = (function () {
        function n(n, t) {
          (this.dt = n),
            (this.pt = new n(o)),
            this.pt[T] || h(this.pt),
            m(t)
              ? ((this.ht = this.length = t.length),
                (this.et = Array(this.length)),
                0 === this.length
                  ? s(this.pt, this.et)
                  : ((this.length = this.length || 0),
                    this.yt(t),
                    0 === this.ht && s(this.pt, this.et)))
              : l(this.pt, Error('Array Methods must be provided an Array'));
        }
        return (
          (n.prototype.yt = function (n) {
            for (var t = 0; this.tt === _ && t < n.length; t++)
              this.mt(n[t], t);
          }),
          (n.prototype.mt = function (n, t) {
            var e = this.dt,
              c = e.resolve;
            c === i
              ? (c = u(n)) === r && n.tt !== _
                ? this.bt(n.tt, t, n.et)
                : 'function' != typeof c
                  ? (this.ht--, (this.et[t] = n))
                  : e === L
                    ? (f((e = new e(o)), n, c), this.wt(e, t))
                    : this.wt(
                        new e(function (t) {
                          return t(n);
                        }),
                        t,
                      )
              : this.wt(c(n), t);
          }),
          (n.prototype.bt = function (n, t, e) {
            var r = this.pt;
            r.tt === _ && (this.ht--, n === N ? l(r, e) : (this.et[t] = e)),
              0 === this.ht && s(r, this.et);
          }),
          (n.prototype.wt = function (n, t) {
            var e = this;
            v(
              n,
              void 0,
              function (n) {
                return e.bt(x, t, n);
              },
              function (n) {
                return e.bt(N, t, n);
              },
            );
          }),
          n
        );
      })(),
      L = (function () {
        function n(t) {
          if (
            ((this[T] = W++),
            (this.et = this.tt = void 0),
            (this.ot = []),
            o !== t)
          ) {
            if ('function' != typeof t)
              throw new TypeError('Must pass a resolver fn as 1st arg');
            if (!(this instanceof n))
              throw new TypeError(
                "Failed to construct 'Promise': Use the 'new' operator.",
              );
            !(function (n, t) {
              try {
                t(
                  function (t) {
                    c(n, t);
                  },
                  function (t) {
                    l(n, t);
                  },
                );
              } catch (t) {
                l(n, t);
              }
            })(this, t);
          }
        }
        return (
          (n.prototype.catch = function (n) {
            return this.then(null, n);
          }),
          (n.prototype.finally = function (n) {
            var t = this.constructor;
            return this.then(
              function (e) {
                return t.resolve(n()).then(function () {
                  return e;
                });
              },
              function (e) {
                return t.resolve(n()).then(function () {
                  throw e;
                });
              },
            );
          }),
          n
        );
      })();
    return (
      (L.prototype.then = r),
      (L.all = function (n) {
        return new D(this, n).pt;
      }),
      (L.race = function (n) {
        var t = this;
        return m(n)
          ? new t(function (e, r) {
              for (var i = n.length, o = 0; o < i; o++)
                t.resolve(n[o]).then(e, r);
            })
          : new t(function (n, t) {
              return t(new TypeError('Must pass array to race'));
            });
      }),
      (L.resolve = i),
      (L.reject = function (n) {
        var t = new this(o);
        return l(t, n), t;
      }),
      (L.gt = function (n) {
        g = n;
      }),
      (L.Mt = function (n) {
        M = n;
      }),
      (L.jt = M),
      (L.kt = function () {
        var n = void 0;
        if ('undefined' != typeof global) n = global;
        else if ('undefined' != typeof self) n = self;
        else
          try {
            n = Function('return this')();
          } catch (n) {
            throw Error('polyfill failed');
          }
        var t = n.Promise;
        if (t) {
          var e = null;
          try {
            e = Object.prototype.toString.call(t.resolve());
          } catch (n) {}
          if ('[object Promise]' === e && !t.$t) return;
        }
        n.Promise = L;
      }),
      (L.Promise = L),
      L.kt(),
      L
    );
  })();
  var e = [];
  (n.customElements &&
    (!n.Element ||
      (n.Element.prototype.closest &&
        n.Element.prototype.matches &&
        n.Element.prototype.remove))) ||
    e.push(import('./polyfills/dom.js')),
    ('function' == typeof Object.assign && Object.entries) ||
      e.push(import('./polyfills/object.js')),
    (Array.prototype.find && Array.prototype.includes) ||
      e.push(import('./polyfills/array.js')),
    (String.prototype.startsWith && String.prototype.endsWith) ||
      e.push(import('./polyfills/string.js')),
    n.fetch || e.push(import('./polyfills/fetch.js')),
    Promise.all(e).then(function (e) {
      e.forEach(function (t) {
        t.applyPolyfill(n, n.document);
      }),
        t();
    });
}
var C = 'data-ssrv',
  T = 'data-ssrc',
  _ = '$',
  x = {},
  N = {
    enter: 13,
    escape: 27,
    space: 32,
    tab: 9,
    left: 37,
    up: 38,
    right: 39,
    down: 40,
  },
  S = function (n) {
    return null != n;
  },
  W = function (n) {
    return n.toLowerCase();
  },
  D = function (n) {
    return W(n)
      .split('-')
      .map(function (n) {
        return n.charAt(0).toUpperCase() + n.slice(1);
      })
      .join('');
  },
  L = function () {},
  R = [],
  F = {
    forEach: function (n, t) {
      n.forEach(function (n) {
        return t(o(n));
      });
    },
    map: function (n, t) {
      return n.map(function (n) {
        return (function e(n) {
          return {
            vtag: n.vtag,
            vchildren: n.vchildren,
            vtext: n.vtext,
            vattrs: n.vattrs,
            vkey: n.vkey,
            vname: n.vname,
          };
        })(t(o(n)));
      });
    },
  },
  H = 'wc-',
  q = {
    allowfullscreen: 1,
    async: 1,
    autofocus: 1,
    autoplay: 1,
    checked: 1,
    controls: 1,
    disabled: 1,
    enabled: 1,
    formnovalidate: 1,
    hidden: 1,
    multiple: 1,
    noresize: 1,
    readonly: 1,
    required: 1,
    selected: 1,
    spellcheck: 1,
  },
  I = 'http://www.w3.org/1999/xlink',
  B = !1,
  U = {},
  z = !1;
export { O as defineCustomElement, i as h };
