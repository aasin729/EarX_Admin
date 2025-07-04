export function applyPolyfill(window, document) {
  /*!
whatwg-fetch, 2.0.3
https://github.com/github/fetch
Copyright (c) 2014-2016 GitHub, Inc. - MIT License
*/
  (function (e) {
    function l(a) {
      'string' !== typeof a && (a = String(a));
      if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(a))
        throw new TypeError('Invalid character in header field name');
      return a.toLowerCase();
    }
    function q(a) {
      'string' !== typeof a && (a = String(a));
      return a;
    }
    function n(a) {
      var b = {
        next: function () {
          var b = a.shift();
          return { done: void 0 === b, value: b };
        },
      };
      g.iterable &&
        (b[Symbol.iterator] = function () {
          return b;
        });
      return b;
    }
    function d(a) {
      this.map = {};
      a instanceof d
        ? a.forEach(function (a, c) {
            this.append(c, a);
          }, this)
        : Array.isArray(a)
          ? a.forEach(function (a) {
              this.append(a[0], a[1]);
            }, this)
          : a &&
            Object.getOwnPropertyNames(a).forEach(function (b) {
              this.append(b, a[b]);
            }, this);
    }
    function p(a) {
      if (a.bodyUsed) return Promise.reject(new TypeError('Already read'));
      a.bodyUsed = !0;
    }
    function r(a) {
      return new Promise(function (b, c) {
        a.onload = function () {
          b(a.result);
        };
        a.onerror = function () {
          c(a.error);
        };
      });
    }
    function w(a) {
      var b = new FileReader(),
        c = r(b);
      b.readAsArrayBuffer(a);
      return c;
    }
    function x(a) {
      a = new Uint8Array(a);
      for (var b = Array(a.length), c = 0; c < a.length; c++)
        b[c] = String.fromCharCode(a[c]);
      return b.join('');
    }
    function t(a) {
      if (a.slice) return a.slice(0);
      var b = new Uint8Array(a.byteLength);
      b.set(new Uint8Array(a));
      return b.buffer;
    }
    function u() {
      this.bodyUsed = !1;
      this._initBody = function (a) {
        if ((this._bodyInit = a))
          if ('string' === typeof a) this._bodyText = a;
          else if (g.blob && Blob.prototype.isPrototypeOf(a))
            this._bodyBlob = a;
          else if (g.formData && FormData.prototype.isPrototypeOf(a))
            this._bodyFormData = a;
          else if (g.searchParams && URLSearchParams.prototype.isPrototypeOf(a))
            this._bodyText = a.toString();
          else if (g.arrayBuffer && g.blob && y(a))
            (this._bodyArrayBuffer = t(a.buffer)),
              (this._bodyInit = new Blob([this._bodyArrayBuffer]));
          else if (
            g.arrayBuffer &&
            (ArrayBuffer.prototype.isPrototypeOf(a) || z(a))
          )
            this._bodyArrayBuffer = t(a);
          else throw Error('unsupported BodyInit type');
        else this._bodyText = '';
        this.headers.get('content-type') ||
          ('string' === typeof a
            ? this.headers.set('content-type', 'text/plain;charset=UTF-8')
            : this._bodyBlob && this._bodyBlob.type
              ? this.headers.set('content-type', this._bodyBlob.type)
              : g.searchParams &&
                URLSearchParams.prototype.isPrototypeOf(a) &&
                this.headers.set(
                  'content-type',
                  'application/x-www-form-urlencoded;charset=UTF-8',
                ));
      };
      g.blob &&
        ((this.blob = function () {
          var a = p(this);
          if (a) return a;
          if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
          if (this._bodyArrayBuffer)
            return Promise.resolve(new Blob([this._bodyArrayBuffer]));
          if (this._bodyFormData)
            throw Error('could not read FormData body as blob');
          return Promise.resolve(new Blob([this._bodyText]));
        }),
        (this.arrayBuffer = function () {
          return this._bodyArrayBuffer
            ? p(this) || Promise.resolve(this._bodyArrayBuffer)
            : this.blob().then(w);
        }));
      this.text = function () {
        var a = p(this);
        if (a) return a;
        if (this._bodyBlob) {
          a = this._bodyBlob;
          var b = new FileReader(),
            c = r(b);
          b.readAsText(a);
          return c;
        }
        if (this._bodyArrayBuffer)
          return Promise.resolve(x(this._bodyArrayBuffer));
        if (this._bodyFormData)
          throw Error('could not read FormData body as text');
        return Promise.resolve(this._bodyText);
      };
      g.formData &&
        (this.formData = function () {
          return this.text().then(A);
        });
      this.json = function () {
        return this.text().then(JSON.parse);
      };
      return this;
    }
    function k(a, b) {
      b = b || {};
      var c = b.body;
      if (a instanceof k) {
        if (a.bodyUsed) throw new TypeError('Already read');
        this.url = a.url;
        this.credentials = a.credentials;
        b.headers || (this.headers = new d(a.headers));
        this.method = a.method;
        this.mode = a.mode;
        c || null == a._bodyInit || ((c = a._bodyInit), (a.bodyUsed = !0));
      } else this.url = String(a);
      this.credentials = b.credentials || this.credentials || 'omit';
      if (b.headers || !this.headers) this.headers = new d(b.headers);
      var v = b.method || this.method || 'GET',
        g = v.toUpperCase();
      this.method = -1 < B.indexOf(g) ? g : v;
      this.mode = b.mode || this.mode || null;
      this.referrer = null;
      if (('GET' === this.method || 'HEAD' === this.method) && c)
        throw new TypeError('Body not allowed for GET or HEAD requests');
      this._initBody(c);
    }
    function A(a) {
      var b = new FormData();
      a.trim()
        .split('&')
        .forEach(function (a) {
          if (a) {
            var c = a.split('=');
            a = c.shift().replace(/\+/g, ' ');
            c = c.join('=').replace(/\+/g, ' ');
            b.append(decodeURIComponent(a), decodeURIComponent(c));
          }
        });
      return b;
    }
    function C(a) {
      var b = new d();
      a.replace(/\r?\n[\t ]+/g, ' ')
        .split(/\r?\n/)
        .forEach(function (a) {
          var c = a.split(':');
          if ((a = c.shift().trim())) (c = c.join(':').trim()), b.append(a, c);
        });
      return b;
    }
    function h(a, b) {
      b || (b = {});
      this.type = 'default';
      this.status = void 0 === b.status ? 200 : b.status;
      this.ok = 200 <= this.status && 300 > this.status;
      this.statusText = 'statusText' in b ? b.statusText : 'OK';
      this.headers = new d(b.headers);
      this.url = b.url || '';
      this._initBody(a);
    }
    if (!e.fetch) {
      var D = 'Symbol' in e && 'iterator' in Symbol,
        m;
      if ((m = 'FileReader' in e && 'Blob' in e))
        try {
          new Blob(), (m = !0);
        } catch (a) {
          m = !1;
        }
      var g = {
        searchParams: 'URLSearchParams' in e,
        iterable: D,
        blob: m,
        formData: 'FormData' in e,
        arrayBuffer: 'ArrayBuffer' in e,
      };
      if (g.arrayBuffer) {
        var E =
          '[object Int8Array];[object Uint8Array];[object Uint8ClampedArray];[object Int16Array];[object Uint16Array];[object Int32Array];[object Uint32Array];[object Float32Array];[object Float64Array]'.split(
            ';',
          );
        var y = function (a) {
          return a && DataView.prototype.isPrototypeOf(a);
        };
        var z =
          ArrayBuffer.isView ||
          function (a) {
            return a && -1 < E.indexOf(Object.prototype.toString.call(a));
          };
      }
      d.prototype.append = function (a, b) {
        a = l(a);
        b = q(b);
        var c = this.map[a];
        this.map[a] = c ? c + ',' + b : b;
      };
      d.prototype['delete'] = function (a) {
        delete this.map[l(a)];
      };
      d.prototype.get = function (a) {
        a = l(a);
        return this.has(a) ? this.map[a] : null;
      };
      d.prototype.has = function (a) {
        return this.map.hasOwnProperty(l(a));
      };
      d.prototype.set = function (a, b) {
        this.map[l(a)] = q(b);
      };
      d.prototype.forEach = function (a, b) {
        for (var c in this.map)
          this.map.hasOwnProperty(c) && a.call(b, this.map[c], c, this);
      };
      d.prototype.keys = function () {
        var a = [];
        this.forEach(function (b, c) {
          a.push(c);
        });
        return n(a);
      };
      d.prototype.values = function () {
        var a = [];
        this.forEach(function (b) {
          a.push(b);
        });
        return n(a);
      };
      d.prototype.entries = function () {
        var a = [];
        this.forEach(function (b, c) {
          a.push([c, b]);
        });
        return n(a);
      };
      g.iterable && (d.prototype[Symbol.iterator] = d.prototype.entries);
      var B = 'DELETE GET HEAD OPTIONS POST PUT'.split(' ');
      k.prototype.clone = function () {
        return new k(this, { body: this._bodyInit });
      };
      u.call(k.prototype);
      u.call(h.prototype);
      h.prototype.clone = function () {
        return new h(this._bodyInit, {
          status: this.status,
          statusText: this.statusText,
          headers: new d(this.headers),
          url: this.url,
        });
      };
      h.error = function () {
        var a = new h(null, { status: 0, statusText: '' });
        a.type = 'error';
        return a;
      };
      var F = [301, 302, 303, 307, 308];
      h.redirect = function (a, b) {
        if (-1 === F.indexOf(b)) throw new RangeError('Invalid status code');
        return new h(null, { status: b, headers: { location: a } });
      };
      e.Headers = d;
      e.Request = k;
      e.Response = h;
      e.fetch = function (a, b) {
        return new Promise(function (c, d) {
          var e = new k(a, b),
            f = new XMLHttpRequest();
          f.onload = function () {
            var a = {
              status: f.status,
              statusText: f.statusText,
              headers: C(f.getAllResponseHeaders() || ''),
            };
            a.url =
              'responseURL' in f
                ? f.responseURL
                : a.headers.get('X-Request-URL');
            c(new h('response' in f ? f.response : f.responseText, a));
          };
          f.onerror = function () {
            d(new TypeError('Network request failed'));
          };
          f.ontimeout = function () {
            d(new TypeError('Network request failed'));
          };
          f.open(e.method, e.url, !0);
          'include' === e.credentials
            ? (f.withCredentials = !0)
            : 'omit' === e.credentials && (f.withCredentials = !1);
          'responseType' in f && g.blob && (f.responseType = 'blob');
          e.headers.forEach(function (a, b) {
            f.setRequestHeader(b, a);
          });
          f.send('undefined' === typeof e._bodyInit ? null : e._bodyInit);
        });
      };
      e.fetch.polyfill = !0;
    }
  })('undefined' !== typeof self ? self : window);
}
