/*! Built with http://stenciljs.com */
const { h: t } = window.ionicons;
class e {
  constructor() {
    (this.isVisible = !1), (this.lazy = !0);
  }
  componentWillLoad() {
    this.waitUntilVisible(this.el, '50px', () => {
      (this.isVisible = !0), this.loadIcon();
    });
  }
  componentDidUnload() {
    this.io && (this.io.disconnect(), (this.io = void 0));
  }
  waitUntilVisible(t, e, i) {
    if (this.lazy && this.win && this.win.IntersectionObserver) {
      const s = (this.io = new this.win.IntersectionObserver(
        (t) => {
          t[0].isIntersecting && (s.disconnect(), (this.io = void 0), i());
        },
        { rootMargin: e },
      ));
      s.observe(t);
    } else i();
  }
  loadIcon() {
    if (!this.isServer && this.isVisible) {
      const t = this.getUrl();
      t &&
        (function (t) {
          let e = i.get(t);
          return (
            e ||
              ((e = fetch(t, { cache: 'force-cache' }).then((t) =>
                t.ok ? t.text() : Promise.resolve(null),
              )),
              i.set(t, e)),
            e
          );
        })(t).then((t) => {
          this.svgContent = (function (t, e, i) {
            if (e) {
              const s = t.createDocumentFragment(),
                n = t.createElement('div');
              (n.innerHTML = e), s.appendChild(n);
              for (let t = n.childNodes.length - 1; t >= 0; t--)
                'svg' !== n.childNodes[t].nodeName.toLowerCase() &&
                  n.removeChild(n.childNodes[t]);
              const o = n.firstElementChild;
              if (
                o &&
                'svg' === o.nodeName.toLowerCase() &&
                (i && o.setAttribute(i, ''),
                (function t(e) {
                  if (1 === e.nodeType) {
                    if ('script' === e.nodeName.toLowerCase()) return !1;
                    for (var i = 0; i < e.attributes.length; i++) {
                      let t = e.attributes[i].value;
                      if (
                        'string' == typeof t &&
                        0 === t.toLowerCase().indexOf('on')
                      )
                        return !1;
                    }
                    for (i = 0; i < e.childNodes.length; i++)
                      if (!t(e.childNodes[i])) return !1;
                  }
                  return !0;
                })(o))
              )
                return n.innerHTML;
            }
            return '';
          })(this.doc, t, this.el['s-sc']);
        });
    }
    if (!this.ariaLabel) {
      const t = s(this.name, this.mode, this.ios, this.md);
      t &&
        (this.ariaLabel = t
          .replace('ios-', '')
          .replace('md-', '')
          .replace(/\-/g, ' '));
    }
  }
  getUrl() {
    let t = n(this.src);
    return (
      t ||
      ((t = s(this.name, this.mode, this.ios, this.md))
        ? this.getNamedUrl(t)
        : (t = n(this.icon))
          ? t
          : (t = s(this.icon, this.mode, this.ios, this.md))
            ? this.getNamedUrl(t)
            : null)
    );
  }
  getNamedUrl(t) {
    return `${this.resourcesUrl}svg/${t}.svg`;
  }
  hostData() {
    return {
      role: 'img',
      class: Object.assign(
        {},
        ((t = this.color),
        t ? { 'ion-color': !0, [`ion-color-${t}`]: !0 } : null),
        { [`icon-${this.size}`]: !!this.size },
      ),
    };
    var t;
  }
  render() {
    return !this.isServer && this.svgContent
      ? t('div', { class: 'icon-inner', innerHTML: this.svgContent })
      : t('div', { class: 'icon-inner' });
  }
  static get is() {
    return 'ion-icon';
  }
  static get encapsulation() {
    return 'shadow';
  }
  static get properties() {
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
      icon: { type: String, attr: 'icon', watchCallbacks: ['loadIcon'] },
      ios: { type: String, attr: 'ios' },
      isServer: { context: 'isServer' },
      isVisible: { state: !0 },
      lazy: { type: Boolean, attr: 'lazy' },
      md: { type: String, attr: 'md' },
      mode: { type: String, attr: 'mode' },
      name: { type: String, attr: 'name', watchCallbacks: ['loadIcon'] },
      resourcesUrl: { context: 'resourcesUrl' },
      size: { type: String, attr: 'size' },
      src: { type: String, attr: 'src', watchCallbacks: ['loadIcon'] },
      svgContent: { state: !0 },
      win: { context: 'window' },
    };
  }
  static get style() {
    return ':host{display:inline-block;width:1em;height:1em;contain:strict;-webkit-box-sizing:content-box!important;box-sizing:content-box!important}:host(.ion-color){color:var(--ion-color-base)!important}:host(.icon-small){font-size:var(--ion-icon-size-small,18px)!important}:host(.icon-large){font-size:var(--ion-icon-size-large,32px)!important}.icon-inner,svg{display:block;height:100%;width:100%}svg{fill:currentColor;stroke:currentColor}:host(.ion-color-primary){--ion-color-base:var(--ion-color-primary, #3880ff)}:host(.ion-color-secondary){--ion-color-base:var(--ion-color-secondary, #0cd1e8)}:host(.ion-color-tertiary){--ion-color-base:var(--ion-color-tertiary, #f4a942)}:host(.ion-color-success){--ion-color-base:var(--ion-color-success, #10dc60)}:host(.ion-color-warning){--ion-color-base:var(--ion-color-warning, #ffce00)}:host(.ion-color-danger){--ion-color-base:var(--ion-color-danger, #f14141)}:host(.ion-color-light){--ion-color-base:var(--ion-color-light, #f4f5f8)}:host(.ion-color-medium){--ion-color-base:var(--ion-color-medium, #989aa2)}:host(.ion-color-dark){--ion-color-base:var(--ion-color-dark, #222428)}';
  }
}
const i = new Map();
function s(t, e, i, s) {
  return (
    (e = (e || 'md').toLowerCase()),
    i && 'ios' === e
      ? (t = i.toLowerCase())
      : s && 'md' === e
        ? (t = s.toLowerCase())
        : t &&
          ((t = t.toLowerCase()),
          /^md-|^ios-|^logo-/.test(t) || (t = `${e}-${t}`)),
    'string' != typeof t || '' === t.trim()
      ? null
      : '' !== t.replace(/[a-z]|-|\d/gi, '')
        ? null
        : t
  );
}
function n(t) {
  return 'string' == typeof t && (t = t.trim()).length > 0 && /(\/|\.)/.test(t)
    ? t
    : null;
}
export { e as IonIcon };
