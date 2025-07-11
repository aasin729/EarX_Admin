/*! Built with http://stenciljs.com */
ionicons.loadBundle('5nonw4yz', ['exports'], function (e) {
  var t = window.ionicons.h,
    i = (function () {
      function e() {
        (this.isVisible = !1), (this.lazy = !0);
      }
      return (
        (e.prototype.componentWillLoad = function () {
          var e = this;
          this.waitUntilVisible(this.el, '50px', function () {
            (e.isVisible = !0), e.loadIcon();
          });
        }),
        (e.prototype.componentDidUnload = function () {
          this.io && (this.io.disconnect(), (this.io = void 0));
        }),
        (e.prototype.waitUntilVisible = function (e, t, i) {
          var n = this;
          if (this.lazy && this.win && this.win.IntersectionObserver) {
            var r = (this.io = new this.win.IntersectionObserver(
              function (e) {
                e[0].isIntersecting && (r.disconnect(), (n.io = void 0), i());
              },
              { rootMargin: t },
            ));
            r.observe(e);
          } else i();
        }),
        (e.prototype.loadIcon = function () {
          var e = this;
          if (!this.isServer && this.isVisible) {
            var t = this.getUrl();
            t &&
              (function (e) {
                var t = n.get(e);
                return (
                  t ||
                    ((t = fetch(e, { cache: 'force-cache' }).then(function (e) {
                      return e.ok ? e.text() : Promise.resolve(null);
                    })),
                    n.set(e, t)),
                  t
                );
              })(t).then(function (t) {
                e.svgContent = (function (e, t, i) {
                  if (t) {
                    var n = e.createDocumentFragment(),
                      r = e.createElement('div');
                    (r.innerHTML = t), n.appendChild(r);
                    for (var o = r.childNodes.length - 1; o >= 0; o--)
                      'svg' !== r.childNodes[o].nodeName.toLowerCase() &&
                        r.removeChild(r.childNodes[o]);
                    var s = r.firstElementChild;
                    if (
                      s &&
                      'svg' === s.nodeName.toLowerCase() &&
                      (i && s.setAttribute(i, ''),
                      (function e(t) {
                        if (1 === t.nodeType) {
                          if ('script' === t.nodeName.toLowerCase()) return !1;
                          for (var i = 0; i < t.attributes.length; i++) {
                            var n = t.attributes[i].value;
                            if (
                              'string' == typeof n &&
                              0 === n.toLowerCase().indexOf('on')
                            )
                              return !1;
                          }
                          for (i = 0; i < t.childNodes.length; i++)
                            if (!e(t.childNodes[i])) return !1;
                        }
                        return !0;
                      })(s))
                    )
                      return r.innerHTML;
                  }
                  return '';
                })(e.doc, t, e.el['s-sc']);
              });
          }
          if (!this.ariaLabel) {
            var i = r(this.name, this.mode, this.ios, this.md);
            i &&
              (this.ariaLabel = i
                .replace('ios-', '')
                .replace('md-', '')
                .replace(/\-/g, ' '));
          }
        }),
        (e.prototype.getUrl = function () {
          var e = o(this.src);
          return (
            e ||
            ((e = r(this.name, this.mode, this.ios, this.md))
              ? this.getNamedUrl(e)
              : (e = o(this.icon))
                ? e
                : (e = r(this.icon, this.mode, this.ios, this.md))
                  ? this.getNamedUrl(e)
                  : null)
          );
        }),
        (e.prototype.getNamedUrl = function (e) {
          return this.resourcesUrl + 'svg/' + e + '.svg';
        }),
        (e.prototype.hostData = function () {
          var e;
          return {
            role: 'img',
            class: Object.assign(
              {},
              (function (e) {
                var t;
                return e
                  ? (((t = { 'ion-color': !0 })['ion-color-' + e] = !0), t)
                  : null;
              })(this.color),
              ((e = {}), (e['icon-' + this.size] = !!this.size), e),
            ),
          };
        }),
        (e.prototype.render = function () {
          return !this.isServer && this.svgContent
            ? t('div', { class: 'icon-inner', innerHTML: this.svgContent })
            : t('div', { class: 'icon-inner' });
        }),
        Object.defineProperty(e, 'is', {
          get: function () {
            return 'ion-icon';
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(e, 'encapsulation', {
          get: function () {
            return 'shadow';
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(e, 'properties', {
          get: function () {
            return {
              ariaLabel: {
                type: String,
                attr: 'aria-label',
                reflectToAttr: !0,
                mutable: !0,
              },
              color: { type: String, attr: 'color' },
              doc: { context: 'document' },
              el: { elementRef: !0 },
              icon: {
                type: String,
                attr: 'icon',
                watchCallbacks: ['loadIcon'],
              },
              ios: { type: String, attr: 'ios' },
              isServer: { context: 'isServer' },
              isVisible: { state: !0 },
              lazy: { type: Boolean, attr: 'lazy' },
              md: { type: String, attr: 'md' },
              mode: { type: String, attr: 'mode' },
              name: {
                type: String,
                attr: 'name',
                watchCallbacks: ['loadIcon'],
              },
              resourcesUrl: { context: 'resourcesUrl' },
              size: { type: String, attr: 'size' },
              src: { type: String, attr: 'src', watchCallbacks: ['loadIcon'] },
              svgContent: { state: !0 },
              win: { context: 'window' },
            };
          },
          enumerable: !0,
          configurable: !0,
        }),
        Object.defineProperty(e, 'style', {
          get: function () {
            return ':host{display:inline-block;width:1em;height:1em;contain:strict;-webkit-box-sizing:content-box!important;box-sizing:content-box!important}:host(.ion-color){color:var(--ion-color-base)!important}:host(.icon-small){font-size:var(--ion-icon-size-small,18px)!important}:host(.icon-large){font-size:var(--ion-icon-size-large,32px)!important}.icon-inner,svg{display:block;height:100%;width:100%}svg{fill:currentColor;stroke:currentColor}:host(.ion-color-primary){--ion-color-base:var(--ion-color-primary, #3880ff)}:host(.ion-color-secondary){--ion-color-base:var(--ion-color-secondary, #0cd1e8)}:host(.ion-color-tertiary){--ion-color-base:var(--ion-color-tertiary, #f4a942)}:host(.ion-color-success){--ion-color-base:var(--ion-color-success, #10dc60)}:host(.ion-color-warning){--ion-color-base:var(--ion-color-warning, #ffce00)}:host(.ion-color-danger){--ion-color-base:var(--ion-color-danger, #f14141)}:host(.ion-color-light){--ion-color-base:var(--ion-color-light, #f4f5f8)}:host(.ion-color-medium){--ion-color-base:var(--ion-color-medium, #989aa2)}:host(.ion-color-dark){--ion-color-base:var(--ion-color-dark, #222428)}';
          },
          enumerable: !0,
          configurable: !0,
        }),
        e
      );
    })(),
    n = new Map();
  function r(e, t, i, n) {
    return (
      (t = (t || 'md').toLowerCase()),
      i && 'ios' === t
        ? (e = i.toLowerCase())
        : n && 'md' === t
          ? (e = n.toLowerCase())
          : e &&
            ((e = e.toLowerCase()),
            /^md-|^ios-|^logo-/.test(e) || (e = t + '-' + e)),
      'string' != typeof e || '' === e.trim()
        ? null
        : '' !== e.replace(/[a-z]|-|\d/gi, '')
          ? null
          : e
    );
  }
  function o(e) {
    return 'string' == typeof e &&
      (e = e.trim()).length > 0 &&
      /(\/|\.)/.test(e)
      ? e
      : null;
  }
  (e.IonIcon = i), Object.defineProperty(e, '__esModule', { value: !0 });
});
