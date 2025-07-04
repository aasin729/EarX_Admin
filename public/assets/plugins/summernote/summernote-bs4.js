/*! For license information please see summernote-bs4.min.js.LICENSE.txt */ !(function (
  t,
  e,
) {
  if ('object' == typeof exports && 'object' == typeof module)
    module.exports = e(require('jquery'));
  else if ('function' == typeof define && define.amd) define(['jquery'], e);
  else {
    var n = 'object' == typeof exports ? e(require('jquery')) : e(t.jQuery);
    for (var o in n) ('object' == typeof exports ? exports : t)[o] = n[o];
  }
})(window, function (t) {
  return (function (t) {
    var e = {};

    function n(o) {
      if (e[o]) return e[o].exports;
      var i = (e[o] = {
        i: o,
        l: !1,
        exports: {},
      });
      return t[o].call(i.exports, i, i.exports, n), (i.l = !0), i.exports;
    }
    return (
      (n.m = t),
      (n.c = e),
      (n.d = function (t, e, o) {
        n.o(t, e) ||
          Object.defineProperty(t, e, {
            enumerable: !0,
            get: o,
          });
      }),
      (n.r = function (t) {
        'undefined' != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(t, Symbol.toStringTag, {
            value: 'Module',
          }),
          Object.defineProperty(t, '__esModule', {
            value: !0,
          });
      }),
      (n.t = function (t, e) {
        if ((1 & e && (t = n(t)), 8 & e)) return t;
        if (4 & e && 'object' == typeof t && t && t.__esModule) return t;
        var o = Object.create(null);
        if (
          (n.r(o),
          Object.defineProperty(o, 'default', {
            enumerable: !0,
            value: t,
          }),
          2 & e && 'string' != typeof t)
        )
          for (var i in t)
            n.d(
              o,
              i,
              function (e) {
                return t[e];
              }.bind(null, i),
            );
        return o;
      }),
      (n.n = function (t) {
        var e =
          t && t.__esModule
            ? function () {
                return t.default;
              }
            : function () {
                return t;
              };
        return n.d(e, 'a', e), e;
      }),
      (n.o = function (t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
      }),
      (n.p = ''),
      n((n.s = 53))
    );
  })({
    0: function (e, n) {
      e.exports = t;
    },
    1: function (t, e, n) {
      'use strict';
      var o = n(0),
        i = n.n(o);

      function r(t) {
        return (r =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  'function' == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? 'symbol'
                  : typeof t;
              })(t);
      }

      function a(t, e) {
        for (var n = 0; n < e.length; n++) {
          var o = e[n];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            'value' in o && (o.writable = !0),
            Object.defineProperty(t, o.key, o);
        }
      }
      var s = (function () {
        function t(e, n, o, i) {
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError('Cannot call a class as a function');
          })(this, t),
            (this.markup = e),
            (this.children = n),
            (this.options = o),
            (this.callback = i);
        }
        var e, n, o;
        return (
          (e = t),
          (n = [
            {
              key: 'render',
              value: function (t) {
                var e = i()(this.markup);
                if (
                  (this.options &&
                    this.options.contents &&
                    e.html(this.options.contents),
                  this.options &&
                    this.options.className &&
                    e.addClass(this.options.className),
                  this.options &&
                    this.options.data &&
                    i.a.each(this.options.data, function (t, n) {
                      e.attr('data-' + t, n);
                    }),
                  this.options &&
                    this.options.click &&
                    e.on('click', this.options.click),
                  this.children)
                ) {
                  var n = e.find('.note-children-container');
                  this.children.forEach(function (t) {
                    t.render(n.length ? n : e);
                  });
                }
                return (
                  this.callback && this.callback(e, this.options),
                  this.options &&
                    this.options.callback &&
                    this.options.callback(e),
                  t && t.append(e),
                  e
                );
              },
            },
          ]) && a(e.prototype, n),
          o && a(e, o),
          t
        );
      })();
      e.a = {
        create: function (t, e) {
          return function () {
            var n = 'object' === r(arguments[1]) ? arguments[1] : arguments[0],
              o = Array.isArray(arguments[0]) ? arguments[0] : [];
            return n && n.children && (o = n.children), new s(t, o, n, e);
          };
        },
      };
    },
    2: function (t, e) {
      (function (e) {
        t.exports = e;
      }).call(this, {});
    },
    3: function (t, e, n) {
      'use strict';
      var o = n(0),
        i = n.n(o);
      (i.a.summernote = i.a.summernote || {
        lang: {},
      }),
        i.a.extend(i.a.summernote.lang, {
          'en-US': {
            font: {
              bold: 'Bold',
              italic: 'Italic',
              underline: 'Underline',
              clear: 'Remove Font Style',
              height: 'Line Height',
              name: 'Font Family',
              strikethrough: 'Strikethrough',
              subscript: 'Subscript',
              superscript: 'Superscript',
              size: 'Font Size',
              sizeunit: 'Font Size Unit',
            },
            image: {
              image: 'Picture',
              insert: 'Insert Image',
              resizeFull: 'Resize full',
              resizeHalf: 'Resize half',
              resizeQuarter: 'Resize quarter',
              resizeNone: 'Original size',
              floatLeft: 'Float Left',
              floatRight: 'Float Right',
              floatNone: 'Remove float',
              shapeRounded: 'Shape: Rounded',
              shapeCircle: 'Shape: Circle',
              shapeThumbnail: 'Shape: Thumbnail',
              shapeNone: 'Shape: None',
              dragImageHere: 'Drag image or text here',
              dropImage: 'Drop image or Text',
              selectFromFiles: 'Select from files',
              maximumFileSize: 'Maximum file size',
              maximumFileSizeError: 'Maximum file size exceeded.',
              url: 'Image URL',
              remove: 'Remove Image',
              original: 'Original',
            },
            video: {
              video: 'Video',
              videoLink: 'Video Link',
              insert: 'Insert Video',
              url: 'Video URL',
              providers:
                '(YouTube, Vimeo, Vine, Instagram, DailyMotion or Youku)',
            },
            link: {
              link: 'Link',
              insert: 'Insert Link',
              unlink: 'Unlink',
              edit: 'Edit',
              textToDisplay: 'Text to display',
              url: 'To what URL should this link go?',
              openInNewWindow: 'Open in new window',
              useProtocol: 'Use default protocol',
            },
            table: {
              table: 'Table',
              addRowAbove: 'Add row above',
              addRowBelow: 'Add row below',
              addColLeft: 'Add column left',
              addColRight: 'Add column right',
              delRow: 'Delete row',
              delCol: 'Delete column',
              delTable: 'Delete table',
            },
            hr: {
              insert: 'Insert Horizontal Rule',
            },
            style: {
              style: 'Style',
              p: 'Normal',
              blockquote: 'Quote',
              pre: 'Code',
              h1: 'Header 1',
              h2: 'Header 2',
              h3: 'Header 3',
              h4: 'Header 4',
              h5: 'Header 5',
              h6: 'Header 6',
            },
            lists: {
              unordered: 'Unordered list',
              ordered: 'Ordered list',
            },
            options: {
              help: 'Help',
              fullscreen: 'Full Screen',
              codeview: 'Code View',
            },
            paragraph: {
              paragraph: 'Paragraph',
              outdent: 'Outdent',
              indent: 'Indent',
              left: 'Align left',
              center: 'Align center',
              right: 'Align right',
              justify: 'Justify full',
            },
            color: {
              recent: 'Recent Color',
              more: 'More Color',
              background: 'Background Color',
              foreground: 'Text Color',
              transparent: 'Transparent',
              setTransparent: 'Set transparent',
              reset: 'Reset',
              resetToDefault: 'Reset to default',
              cpSelect: 'Select',
            },
            shortcut: {
              shortcuts: 'Keyboard shortcuts',
              close: 'Close',
              textFormatting: 'Text formatting',
              action: 'Action',
              paragraphFormatting: 'Paragraph formatting',
              documentStyle: 'Document Style',
              extraKeys: 'Extra keys',
            },
            help: {
              escape: 'Escape',
              insertParagraph: 'Insert Paragraph',
              undo: 'Undo the last command',
              redo: 'Redo the last command',
              tab: 'Tab',
              untab: 'Untab',
              bold: 'Set a bold style',
              italic: 'Set a italic style',
              underline: 'Set a underline style',
              strikethrough: 'Set a strikethrough style',
              removeFormat: 'Clean a style',
              justifyLeft: 'Set left align',
              justifyCenter: 'Set center align',
              justifyRight: 'Set right align',
              justifyFull: 'Set full align',
              insertUnorderedList: 'Toggle unordered list',
              insertOrderedList: 'Toggle ordered list',
              outdent: 'Outdent on current paragraph',
              indent: 'Indent on current paragraph',
              formatPara: "Change current block's format as a paragraph(P tag)",
              formatH1: "Change current block's format as H1",
              formatH2: "Change current block's format as H2",
              formatH3: "Change current block's format as H3",
              formatH4: "Change current block's format as H4",
              formatH5: "Change current block's format as H5",
              formatH6: "Change current block's format as H6",
              insertHorizontalRule: 'Insert horizontal rule',
              'linkDialog.show': 'Show Link Dialog',
            },
            history: {
              undo: 'Undo',
              redo: 'Redo',
            },
            specialChar: {
              specialChar: 'SPECIAL CHARACTERS',
              select: 'Select Special characters',
            },
            output: {
              noSelection: 'No Selection Made!',
            },
          },
        });
      var r = 'function' == typeof define && n(2),
        a = ['sans-serif', 'serif', 'monospace', 'cursive', 'fantasy'];

      function s(t) {
        return -1 === i.a.inArray(t.toLowerCase(), a) ? "'".concat(t, "'") : t;
      }
      var l,
        c = navigator.userAgent,
        u = /MSIE|Trident/i.test(c);
      if (u) {
        var d = /MSIE (\d+[.]\d+)/.exec(c);
        d && (l = parseFloat(d[1])),
          (d = /Trident\/.*rv:([0-9]{1,}[.0-9]{0,})/.exec(c)) &&
            (l = parseFloat(d[1]));
      }
      var h = /Edge\/\d+/.test(c),
        f =
          'ontouchstart' in window ||
          navigator.MaxTouchPoints > 0 ||
          navigator.msMaxTouchPoints > 0,
        p = u
          ? 'DOMCharacterDataModified DOMSubtreeModified DOMNodeInserted'
          : 'input',
        m = {
          isMac: navigator.appVersion.indexOf('Mac') > -1,
          isMSIE: u,
          isEdge: h,
          isFF: !h && /firefox/i.test(c),
          isPhantom: /PhantomJS/i.test(c),
          isWebkit: !h && /webkit/i.test(c),
          isChrome: !h && /chrome/i.test(c),
          isSafari: !h && /safari/i.test(c) && !/chrome/i.test(c),
          browserVersion: l,
          jqueryVersion: parseFloat(i.a.fn.jquery),
          isSupportAmd: r,
          isSupportTouch: f,
          isFontInstalled: function (t) {
            var e = 'Comic Sans MS' === t ? 'Courier New' : 'Comic Sans MS',
              n = document.createElement('canvas').getContext('2d');
            n.font = "200px '" + e + "'";
            var o = n.measureText('mmmmmmmmmmwwwww').width;
            return (
              (n.font = '200px ' + s(t) + ', "' + e + '"'),
              o !== n.measureText('mmmmmmmmmmwwwww').width
            );
          },
          isW3CRangeSupport: !!document.createRange,
          inputEventName: p,
          genericFontFamilies: a,
          validFontName: s,
        };
      var v = 0;
      var g = {
        eq: function (t) {
          return function (e) {
            return t === e;
          };
        },
        eq2: function (t, e) {
          return t === e;
        },
        peq2: function (t) {
          return function (e, n) {
            return e[t] === n[t];
          };
        },
        ok: function () {
          return !0;
        },
        fail: function () {
          return !1;
        },
        self: function (t) {
          return t;
        },
        not: function (t) {
          return function () {
            return !t.apply(t, arguments);
          };
        },
        and: function (t, e) {
          return function (n) {
            return t(n) && e(n);
          };
        },
        invoke: function (t, e) {
          return function () {
            return t[e].apply(t, arguments);
          };
        },
        resetUniqueId: function () {
          v = 0;
        },
        uniqueId: function (t) {
          var e = ++v + '';
          return t ? t + e : e;
        },
        rect2bnd: function (t) {
          var e = i()(document);
          return {
            top: t.top + e.scrollTop(),
            left: t.left + e.scrollLeft(),
            width: t.right - t.left,
            height: t.bottom - t.top,
          };
        },
        invertObject: function (t) {
          var e = {};
          for (var n in t)
            Object.prototype.hasOwnProperty.call(t, n) && (e[t[n]] = n);
          return e;
        },
        namespaceToCamel: function (t, e) {
          return (
            (e = e || '') +
            t
              .split('.')
              .map(function (t) {
                return t.substring(0, 1).toUpperCase() + t.substring(1);
              })
              .join('')
          );
        },
        debounce: function (t, e, n) {
          var o;
          return function () {
            var i = this,
              r = arguments,
              a = function () {
                (o = null), n || t.apply(i, r);
              },
              s = n && !o;
            clearTimeout(o), (o = setTimeout(a, e)), s && t.apply(i, r);
          };
        },
        isValidUrl: function (t) {
          return /[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/gi.test(
            t,
          );
        },
      };

      function b(t) {
        return t[0];
      }

      function y(t) {
        return t[t.length - 1];
      }

      function k(t) {
        return t.slice(1);
      }

      function w(t, e) {
        if (t && t.length && e) {
          if (t.indexOf) return -1 !== t.indexOf(e);
          if (t.contains) return t.contains(e);
        }
        return !1;
      }
      var C = {
          head: b,
          last: y,
          initial: function (t) {
            return t.slice(0, t.length - 1);
          },
          tail: k,
          prev: function (t, e) {
            if (t && t.length && e) {
              var n = t.indexOf(e);
              return -1 === n ? null : t[n - 1];
            }
            return null;
          },
          next: function (t, e) {
            if (t && t.length && e) {
              var n = t.indexOf(e);
              return -1 === n ? null : t[n + 1];
            }
            return null;
          },
          find: function (t, e) {
            for (var n = 0, o = t.length; n < o; n++) {
              var i = t[n];
              if (e(i)) return i;
            }
          },
          contains: w,
          all: function (t, e) {
            for (var n = 0, o = t.length; n < o; n++) if (!e(t[n])) return !1;
            return !0;
          },
          sum: function (t, e) {
            return (
              (e = e || g.self),
              t.reduce(function (t, n) {
                return t + e(n);
              }, 0)
            );
          },
          from: function (t) {
            for (var e = [], n = t.length, o = -1; ++o < n; ) e[o] = t[o];
            return e;
          },
          isEmpty: function (t) {
            return !t || !t.length;
          },
          clusterBy: function (t, e) {
            return t.length
              ? k(t).reduce(
                  function (t, n) {
                    var o = y(t);
                    return (
                      e(y(o), n) ? (o[o.length] = n) : (t[t.length] = [n]), t
                    );
                  },
                  [[b(t)]],
                )
              : [];
          },
          compact: function (t) {
            for (var e = [], n = 0, o = t.length; n < o; n++)
              t[n] && e.push(t[n]);
            return e;
          },
          unique: function (t) {
            for (var e = [], n = 0, o = t.length; n < o; n++)
              w(e, t[n]) || e.push(t[n]);
            return e;
          },
        },
        x = String.fromCharCode(160);

      function S(t) {
        return t && i()(t).hasClass('note-editable');
      }

      function T(t) {
        return (
          (t = t.toUpperCase()),
          function (e) {
            return e && e.nodeName.toUpperCase() === t;
          }
        );
      }

      function E(t) {
        return t && 3 === t.nodeType;
      }

      function I(t) {
        return (
          t &&
          /^BR|^IMG|^HR|^IFRAME|^BUTTON|^INPUT|^AUDIO|^VIDEO|^EMBED/.test(
            t.nodeName.toUpperCase(),
          )
        );
      }

      function $(t) {
        return (
          !S(t) && t && /^DIV|^P|^LI|^H[1-7]/.test(t.nodeName.toUpperCase())
        );
      }
      var N = T('PRE'),
        P = T('LI');
      var R = T('TABLE'),
        L = T('DATA');

      function A(t) {
        return !(B(t) || F(t) || D(t) || $(t) || R(t) || z(t) || L(t));
      }

      function F(t) {
        return t && /^UL|^OL/.test(t.nodeName.toUpperCase());
      }
      var D = T('HR');

      function H(t) {
        return t && /^TD|^TH/.test(t.nodeName.toUpperCase());
      }
      var z = T('BLOCKQUOTE');

      function B(t) {
        return H(t) || z(t) || S(t);
      }
      var M = T('A');
      var O = T('BODY');
      var j = m.isMSIE && m.browserVersion < 11 ? '&nbsp;' : '<br>';

      function U(t) {
        return E(t) ? t.nodeValue.length : t ? t.childNodes.length : 0;
      }

      function W(t) {
        var e = U(t);
        return (
          0 === e ||
          (!E(t) && 1 === e && t.innerHTML === j) ||
          !(!C.all(t.childNodes, E) || '' !== t.innerHTML)
        );
      }

      function K(t) {
        I(t) || U(t) || (t.innerHTML = j);
      }

      function q(t, e) {
        for (; t; ) {
          if (e(t)) return t;
          if (S(t)) break;
          t = t.parentNode;
        }
        return null;
      }

      function V(t, e) {
        e = e || g.fail;
        var n = [];
        return (
          q(t, function (t) {
            return S(t) || n.push(t), e(t);
          }),
          n
        );
      }

      function _(t, e) {
        e = e || g.fail;
        for (var n = []; t && !e(t); ) n.push(t), (t = t.nextSibling);
        return n;
      }

      function G(t, e) {
        var n = e.nextSibling,
          o = e.parentNode;
        return n ? o.insertBefore(t, n) : o.appendChild(t), t;
      }

      function Y(t, e) {
        return (
          i.a.each(e, function (e, n) {
            t.appendChild(n);
          }),
          t
        );
      }

      function Z(t) {
        return 0 === t.offset;
      }

      function X(t) {
        return t.offset === U(t.node);
      }

      function Q(t) {
        return Z(t) || X(t);
      }

      function J(t, e) {
        for (; t && t !== e; ) {
          if (0 !== et(t)) return !1;
          t = t.parentNode;
        }
        return !0;
      }

      function tt(t, e) {
        if (!e) return !1;
        for (; t && t !== e; ) {
          if (et(t) !== U(t.parentNode) - 1) return !1;
          t = t.parentNode;
        }
        return !0;
      }

      function et(t) {
        for (var e = 0; (t = t.previousSibling); ) e += 1;
        return e;
      }

      function nt(t) {
        return !!(t && t.childNodes && t.childNodes.length);
      }

      function ot(t, e) {
        var n, o;
        if (0 === t.offset) {
          if (S(t.node)) return null;
          (n = t.node.parentNode), (o = et(t.node));
        } else
          nt(t.node)
            ? (o = U((n = t.node.childNodes[t.offset - 1])))
            : ((n = t.node), (o = e ? 0 : t.offset - 1));
        return {
          node: n,
          offset: o,
        };
      }

      function it(t, e) {
        var n, o;
        if (U(t.node) === t.offset) {
          if (S(t.node)) return null;
          var i = at(t.node);
          i
            ? ((n = i), (o = 0))
            : ((n = t.node.parentNode), (o = et(t.node) + 1));
        } else
          nt(t.node)
            ? ((n = t.node.childNodes[t.offset]), (o = 0))
            : ((n = t.node), (o = e ? U(t.node) : t.offset + 1));
        return {
          node: n,
          offset: o,
        };
      }

      function rt(t, e) {
        var n, o;
        if (W(t.node))
          return {
            node: (n = t.node.nextSibling),
            offset: (o = 0),
          };
        if (U(t.node) === t.offset) {
          if (S(t.node)) return null;
          var i = at(t.node);
          i
            ? ((n = i), (o = 0))
            : ((n = t.node.parentNode), (o = et(t.node) + 1)),
            S(n) && ((n = t.node.nextSibling), (o = 0));
        } else if (nt(t.node)) {
          if (((o = 0), W((n = t.node.childNodes[t.offset])))) return null;
        } else if (((n = t.node), (o = e ? U(t.node) : t.offset + 1), W(n)))
          return null;
        return {
          node: n,
          offset: o,
        };
      }

      function at(t) {
        if (t.nextSibling && t.parent === t.nextSibling.parent)
          return E(t.nextSibling) ? t.nextSibling : at(t.nextSibling);
      }

      function st(t, e) {
        return t.node === e.node && t.offset === e.offset;
      }

      function lt(t, e) {
        var n = e && e.isSkipPaddingBlankHTML,
          o = e && e.isNotSplitEdgePoint,
          i = e && e.isDiscardEmptySplits;
        if ((i && (n = !0), Q(t) && (E(t.node) || o))) {
          if (Z(t)) return t.node;
          if (X(t)) return t.node.nextSibling;
        }
        if (E(t.node)) return t.node.splitText(t.offset);
        var r = t.node.childNodes[t.offset],
          a = G(t.node.cloneNode(!1), t.node);
        return (
          Y(a, _(r)),
          n || (K(t.node), K(a)),
          i && (W(t.node) && dt(t.node), W(a)) ? (dt(a), t.node.nextSibling) : a
        );
      }

      function ct(t, e, n) {
        var o = V(e.node, g.eq(t));
        return o.length
          ? 1 === o.length
            ? lt(e, n)
            : o.reduce(function (t, o) {
                return (
                  t === e.node && (t = lt(e, n)),
                  lt(
                    {
                      node: o,
                      offset: t ? et(t) : U(o),
                    },
                    n,
                  )
                );
              })
          : null;
      }

      function ut(t) {
        return document.createElement(t);
      }

      function dt(t, e) {
        if (t && t.parentNode) {
          if (t.removeNode) return t.removeNode(e);
          var n = t.parentNode;
          if (!e) {
            for (var o = [], i = 0, r = t.childNodes.length; i < r; i++)
              o.push(t.childNodes[i]);
            for (var a = 0, s = o.length; a < s; a++) n.insertBefore(o[a], t);
          }
          n.removeChild(t);
        }
      }
      var ht = T('TEXTAREA');

      function ft(t, e) {
        var n = ht(t[0]) ? t.val() : t.html();
        return e ? n.replace(/[\n\r]/g, '') : n;
      }
      var pt = {
        NBSP_CHAR: x,
        ZERO_WIDTH_NBSP_CHAR: '\ufeff',
        blank: j,
        emptyPara: '<p>'.concat(j, '</p>'),
        makePredByNodeName: T,
        isEditable: S,
        isControlSizing: function (t) {
          return t && i()(t).hasClass('note-control-sizing');
        },
        isText: E,
        isElement: function (t) {
          return t && 1 === t.nodeType;
        },
        isVoid: I,
        isPara: $,
        isPurePara: function (t) {
          return $(t) && !P(t);
        },
        isHeading: function (t) {
          return t && /^H[1-7]/.test(t.nodeName.toUpperCase());
        },
        isInline: A,
        isBlock: g.not(A),
        isBodyInline: function (t) {
          return A(t) && !q(t, $);
        },
        isBody: O,
        isParaInline: function (t) {
          return A(t) && !!q(t, $);
        },
        isPre: N,
        isList: F,
        isTable: R,
        isData: L,
        isCell: H,
        isBlockquote: z,
        isBodyContainer: B,
        isAnchor: M,
        isDiv: T('DIV'),
        isLi: P,
        isBR: T('BR'),
        isSpan: T('SPAN'),
        isB: T('B'),
        isU: T('U'),
        isS: T('S'),
        isI: T('I'),
        isImg: T('IMG'),
        isTextarea: ht,
        deepestChildIsEmpty: function (t) {
          do {
            if (
              null === t.firstElementChild ||
              '' === t.firstElementChild.innerHTML
            )
              break;
          } while ((t = t.firstElementChild));
          return W(t);
        },
        isEmpty: W,
        isEmptyAnchor: g.and(M, W),
        isClosestSibling: function (t, e) {
          return t.nextSibling === e || t.previousSibling === e;
        },
        withClosestSiblings: function (t, e) {
          e = e || g.ok;
          var n = [];
          return (
            t.previousSibling &&
              e(t.previousSibling) &&
              n.push(t.previousSibling),
            n.push(t),
            t.nextSibling && e(t.nextSibling) && n.push(t.nextSibling),
            n
          );
        },
        nodeLength: U,
        isLeftEdgePoint: Z,
        isRightEdgePoint: X,
        isEdgePoint: Q,
        isLeftEdgeOf: J,
        isRightEdgeOf: tt,
        isLeftEdgePointOf: function (t, e) {
          return Z(t) && J(t.node, e);
        },
        isRightEdgePointOf: function (t, e) {
          return X(t) && tt(t.node, e);
        },
        prevPoint: ot,
        nextPoint: it,
        nextPointWithEmptyNode: rt,
        isSamePoint: st,
        isVisiblePoint: function (t) {
          if (E(t.node) || !nt(t.node) || W(t.node)) return !0;
          var e = t.node.childNodes[t.offset - 1],
            n = t.node.childNodes[t.offset];
          return !((e && !I(e)) || (n && !I(n)));
        },
        prevPointUntil: function (t, e) {
          for (; t; ) {
            if (e(t)) return t;
            t = ot(t);
          }
          return null;
        },
        nextPointUntil: function (t, e) {
          for (; t; ) {
            if (e(t)) return t;
            t = it(t);
          }
          return null;
        },
        isCharPoint: function (t) {
          if (!E(t.node)) return !1;
          var e = t.node.nodeValue.charAt(t.offset - 1);
          return e && ' ' !== e && e !== x;
        },
        isSpacePoint: function (t) {
          if (!E(t.node)) return !1;
          var e = t.node.nodeValue.charAt(t.offset - 1);
          return ' ' === e || e === x;
        },
        walkPoint: function (t, e, n, o) {
          for (var i = t; i && (n(i), !st(i, e)); ) {
            i = rt(i, o && t.node !== i.node && e.node !== i.node);
          }
        },
        ancestor: q,
        singleChildAncestor: function (t, e) {
          for (t = t.parentNode; t && 1 === U(t); ) {
            if (e(t)) return t;
            if (S(t)) break;
            t = t.parentNode;
          }
          return null;
        },
        listAncestor: V,
        lastAncestor: function (t, e) {
          var n = V(t);
          return C.last(n.filter(e));
        },
        listNext: _,
        listPrev: function (t, e) {
          e = e || g.fail;
          for (var n = []; t && !e(t); ) n.push(t), (t = t.previousSibling);
          return n;
        },
        listDescendant: function (t, e) {
          var n = [];
          return (
            (e = e || g.ok),
            (function o(i) {
              t !== i && e(i) && n.push(i);
              for (var r = 0, a = i.childNodes.length; r < a; r++)
                o(i.childNodes[r]);
            })(t),
            n
          );
        },
        commonAncestor: function (t, e) {
          for (var n = V(t), o = e; o; o = o.parentNode)
            if (n.indexOf(o) > -1) return o;
          return null;
        },
        wrap: function (t, e) {
          var n = t.parentNode,
            o = i()('<' + e + '>')[0];
          return n.insertBefore(o, t), o.appendChild(t), o;
        },
        insertAfter: G,
        appendChildNodes: Y,
        position: et,
        hasChildren: nt,
        makeOffsetPath: function (t, e) {
          return V(e, g.eq(t)).map(et).reverse();
        },
        fromOffsetPath: function (t, e) {
          for (var n = t, o = 0, i = e.length; o < i; o++)
            n =
              n.childNodes.length <= e[o]
                ? n.childNodes[n.childNodes.length - 1]
                : n.childNodes[e[o]];
          return n;
        },
        splitTree: ct,
        splitPoint: function (t, e) {
          var n,
            o,
            i = e ? $ : B,
            r = V(t.node, i),
            a = C.last(r) || t.node;
          i(a) ? ((n = r[r.length - 2]), (o = a)) : (o = (n = a).parentNode);
          var s =
            n &&
            ct(n, t, {
              isSkipPaddingBlankHTML: e,
              isNotSplitEdgePoint: e,
            });
          return (
            s || o !== t.node || (s = t.node.childNodes[t.offset]),
            {
              rightNode: s,
              container: o,
            }
          );
        },
        create: ut,
        createText: function (t) {
          return document.createTextNode(t);
        },
        remove: dt,
        removeWhile: function (t, e) {
          for (; t && !S(t) && e(t); ) {
            var n = t.parentNode;
            dt(t), (t = n);
          }
        },
        replace: function (t, e) {
          if (t.nodeName.toUpperCase() === e.toUpperCase()) return t;
          var n = ut(e);
          return (
            t.style.cssText && (n.style.cssText = t.style.cssText),
            Y(n, C.from(t.childNodes)),
            G(n, t),
            dt(t),
            n
          );
        },
        html: function (t, e) {
          var n = ft(t);
          if (e) {
            n = (n = n.replace(
              /<(\/?)(\b(?!!)[^>\s]*)(.*?)(\s*\/?>)/g,
              function (t, e, n) {
                n = n.toUpperCase();
                var o = /^DIV|^TD|^TH|^P|^LI|^H[1-7]/.test(n) && !!e,
                  i = /^BLOCKQUOTE|^TABLE|^TBODY|^TR|^HR|^UL|^OL/.test(n);
                return t + (o || i ? '\n' : '');
              },
            )).trim();
          }
          return n;
        },
        value: ft,
        posFromPlaceholder: function (t) {
          var e = i()(t),
            n = e.offset(),
            o = e.outerHeight(!0);
          return {
            left: n.left,
            top: n.top + o,
          };
        },
        attachEvents: function (t, e) {
          Object.keys(e).forEach(function (n) {
            t.on(n, e[n]);
          });
        },
        detachEvents: function (t, e) {
          Object.keys(e).forEach(function (n) {
            t.off(n, e[n]);
          });
        },
        isCustomStyleTag: function (t) {
          return t && !E(t) && C.contains(t.classList, 'note-styletag');
        },
      };

      function mt(t, e) {
        for (var n = 0; n < e.length; n++) {
          var o = e[n];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            'value' in o && (o.writable = !0),
            Object.defineProperty(t, o.key, o);
        }
      }
      var vt = (function () {
        function t(e, n) {
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError('Cannot call a class as a function');
          })(this, t),
            (this.$note = e),
            (this.memos = {}),
            (this.modules = {}),
            (this.layoutInfo = {}),
            (this.options = i.a.extend(!0, {}, n)),
            (i.a.summernote.ui = i.a.summernote.ui_template(this.options)),
            (this.ui = i.a.summernote.ui),
            this.initialize();
        }
        var e, n, o;
        return (
          (e = t),
          (n = [
            {
              key: 'initialize',
              value: function () {
                return (
                  (this.layoutInfo = this.ui.createLayout(this.$note)),
                  this._initialize(),
                  this.$note.hide(),
                  this
                );
              },
            },
            {
              key: 'destroy',
              value: function () {
                this._destroy(),
                  this.$note.removeData('summernote'),
                  this.ui.removeLayout(this.$note, this.layoutInfo);
              },
            },
            {
              key: 'reset',
              value: function () {
                var t = this.isDisabled();
                this.code(pt.emptyPara),
                  this._destroy(),
                  this._initialize(),
                  t && this.disable();
              },
            },
            {
              key: '_initialize',
              value: function () {
                var t = this;
                (this.options.id = g.uniqueId(i.a.now())),
                  (this.options.container =
                    this.options.container || this.layoutInfo.editor);
                var e = i.a.extend({}, this.options.buttons);
                Object.keys(e).forEach(function (n) {
                  t.memo('button.' + n, e[n]);
                });
                var n = i.a.extend(
                  {},
                  this.options.modules,
                  i.a.summernote.plugins || {},
                );
                Object.keys(n).forEach(function (e) {
                  t.module(e, n[e], !0);
                }),
                  Object.keys(this.modules).forEach(function (e) {
                    t.initializeModule(e);
                  });
              },
            },
            {
              key: '_destroy',
              value: function () {
                var t = this;
                Object.keys(this.modules)
                  .reverse()
                  .forEach(function (e) {
                    t.removeModule(e);
                  }),
                  Object.keys(this.memos).forEach(function (e) {
                    t.removeMemo(e);
                  }),
                  this.triggerEvent('destroy', this);
              },
            },
            {
              key: 'code',
              value: function (t) {
                var e = this.invoke('codeview.isActivated');
                if (void 0 === t)
                  return (
                    this.invoke('codeview.sync'),
                    e
                      ? this.layoutInfo.codable.val()
                      : this.layoutInfo.editable.html()
                  );
                e
                  ? this.invoke('codeview.sync', t)
                  : this.layoutInfo.editable.html(t),
                  this.$note.val(t),
                  this.triggerEvent('change', t, this.layoutInfo.editable);
              },
            },
            {
              key: 'isDisabled',
              value: function () {
                return (
                  'false' === this.layoutInfo.editable.attr('contenteditable')
                );
              },
            },
            {
              key: 'enable',
              value: function () {
                this.layoutInfo.editable.attr('contenteditable', !0),
                  this.invoke('toolbar.activate', !0),
                  this.triggerEvent('disable', !1),
                  (this.options.editing = !0);
              },
            },
            {
              key: 'disable',
              value: function () {
                this.invoke('codeview.isActivated') &&
                  this.invoke('codeview.deactivate'),
                  this.layoutInfo.editable.attr('contenteditable', !1),
                  (this.options.editing = !1),
                  this.invoke('toolbar.deactivate', !0),
                  this.triggerEvent('disable', !0);
              },
            },
            {
              key: 'triggerEvent',
              value: function () {
                var t = C.head(arguments),
                  e = C.tail(C.from(arguments)),
                  n = this.options.callbacks[g.namespaceToCamel(t, 'on')];
                n && n.apply(this.$note[0], e),
                  this.$note.trigger('summernote.' + t, e);
              },
            },
            {
              key: 'initializeModule',
              value: function (t) {
                var e = this.modules[t];
                (e.shouldInitialize = e.shouldInitialize || g.ok),
                  e.shouldInitialize() &&
                    (e.initialize && e.initialize(),
                    e.events && pt.attachEvents(this.$note, e.events));
              },
            },
            {
              key: 'module',
              value: function (t, e, n) {
                if (1 === arguments.length) return this.modules[t];
                (this.modules[t] = new e(this)), n || this.initializeModule(t);
              },
            },
            {
              key: 'removeModule',
              value: function (t) {
                var e = this.modules[t];
                e.shouldInitialize() &&
                  (e.events && pt.detachEvents(this.$note, e.events),
                  e.destroy && e.destroy()),
                  delete this.modules[t];
              },
            },
            {
              key: 'memo',
              value: function (t, e) {
                if (1 === arguments.length) return this.memos[t];
                this.memos[t] = e;
              },
            },
            {
              key: 'removeMemo',
              value: function (t) {
                this.memos[t] &&
                  this.memos[t].destroy &&
                  this.memos[t].destroy(),
                  delete this.memos[t];
              },
            },
            {
              key: 'createInvokeHandlerAndUpdateState',
              value: function (t, e) {
                var n = this;
                return function (o) {
                  n.createInvokeHandler(t, e)(o),
                    n.invoke('buttons.updateCurrentStyle');
                };
              },
            },
            {
              key: 'createInvokeHandler',
              value: function (t, e) {
                var n = this;
                return function (o) {
                  o.preventDefault();
                  var r = i()(o.target);
                  n.invoke(t, e || r.closest('[data-value]').data('value'), r);
                };
              },
            },
            {
              key: 'invoke',
              value: function () {
                var t = C.head(arguments),
                  e = C.tail(C.from(arguments)),
                  n = t.split('.'),
                  o = n.length > 1,
                  i = o && C.head(n),
                  r = o ? C.last(n) : C.head(n),
                  a = this.modules[i || 'editor'];
                return !i && this[r]
                  ? this[r].apply(this, e)
                  : a && a[r] && a.shouldInitialize()
                    ? a[r].apply(a, e)
                    : void 0;
              },
            },
          ]) && mt(e.prototype, n),
          o && mt(e, o),
          t
        );
      })();

      function gt(t, e) {
        for (var n = 0; n < e.length; n++) {
          var o = e[n];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            'value' in o && (o.writable = !0),
            Object.defineProperty(t, o.key, o);
        }
      }

      function bt(t, e) {
        var n,
          o,
          i = t.parentElement(),
          r = document.body.createTextRange(),
          a = C.from(i.childNodes);
        for (n = 0; n < a.length; n++)
          if (!pt.isText(a[n])) {
            if (
              (r.moveToElementText(a[n]),
              r.compareEndPoints('StartToStart', t) >= 0)
            )
              break;
            o = a[n];
          }
        if (0 !== n && pt.isText(a[n - 1])) {
          var s = document.body.createTextRange(),
            l = null;
          s.moveToElementText(o || i),
            s.collapse(!o),
            (l = o ? o.nextSibling : i.firstChild);
          var c = t.duplicate();
          c.setEndPoint('StartToStart', s);
          for (
            var u = c.text.replace(/[\r\n]/g, '').length;
            u > l.nodeValue.length && l.nextSibling;

          )
            (u -= l.nodeValue.length), (l = l.nextSibling);
          l.nodeValue;
          e &&
            l.nextSibling &&
            pt.isText(l.nextSibling) &&
            u === l.nodeValue.length &&
            ((u -= l.nodeValue.length), (l = l.nextSibling)),
            (i = l),
            (n = u);
        }
        return {
          cont: i,
          offset: n,
        };
      }

      function yt(t) {
        var e = document.body.createTextRange(),
          n = (function t(e, n) {
            var o, i;
            if (pt.isText(e)) {
              var r = pt.listPrev(e, g.not(pt.isText)),
                a = C.last(r).previousSibling;
              (o = a || e.parentNode),
                (n += C.sum(C.tail(r), pt.nodeLength)),
                (i = !a);
            } else {
              if (((o = e.childNodes[n] || e), pt.isText(o))) return t(o, 0);
              (n = 0), (i = !1);
            }
            return {
              node: o,
              collapseToStart: i,
              offset: n,
            };
          })(t.node, t.offset);
        return (
          e.moveToElementText(n.node),
          e.collapse(n.collapseToStart),
          e.moveStart('character', n.offset),
          e
        );
      }
      i.a.fn.extend({
        summernote: function () {
          var t = i.a.type(C.head(arguments)),
            e = 'string' === t,
            n = 'object' === t,
            o = i.a.extend(
              {},
              i.a.summernote.options,
              n ? C.head(arguments) : {},
            );
          (o.langInfo = i.a.extend(
            !0,
            {},
            i.a.summernote.lang['en-US'],
            i.a.summernote.lang[o.lang],
          )),
            (o.icons = i.a.extend(
              !0,
              {},
              i.a.summernote.options.icons,
              o.icons,
            )),
            (o.tooltip = 'auto' === o.tooltip ? !m.isSupportTouch : o.tooltip),
            this.each(function (t, e) {
              var n = i()(e);
              if (!n.data('summernote')) {
                var r = new vt(n, o);
                n.data('summernote', r),
                  n.data('summernote').triggerEvent('init', r.layoutInfo);
              }
            });
          var r = this.first();
          if (r.length) {
            var a = r.data('summernote');
            if (e) return a.invoke.apply(a, C.from(arguments));
            o.focus && a.invoke('editor.focus');
          }
          return this;
        },
      });
      var kt = (function () {
          function t(e, n, o, i) {
            !(function (t, e) {
              if (!(t instanceof e))
                throw new TypeError('Cannot call a class as a function');
            })(this, t),
              (this.sc = e),
              (this.so = n),
              (this.ec = o),
              (this.eo = i),
              (this.isOnEditable = this.makeIsOn(pt.isEditable)),
              (this.isOnList = this.makeIsOn(pt.isList)),
              (this.isOnAnchor = this.makeIsOn(pt.isAnchor)),
              (this.isOnCell = this.makeIsOn(pt.isCell)),
              (this.isOnData = this.makeIsOn(pt.isData));
          }
          var e, n, o;
          return (
            (e = t),
            (n = [
              {
                key: 'nativeRange',
                value: function () {
                  if (m.isW3CRangeSupport) {
                    var t = document.createRange();
                    return (
                      t.setStart(this.sc, this.so),
                      t.setEnd(this.ec, this.eo),
                      t
                    );
                  }
                  var e = yt({
                    node: this.sc,
                    offset: this.so,
                  });
                  return (
                    e.setEndPoint(
                      'EndToEnd',
                      yt({
                        node: this.ec,
                        offset: this.eo,
                      }),
                    ),
                    e
                  );
                },
              },
              {
                key: 'getPoints',
                value: function () {
                  return {
                    sc: this.sc,
                    so: this.so,
                    ec: this.ec,
                    eo: this.eo,
                  };
                },
              },
              {
                key: 'getStartPoint',
                value: function () {
                  return {
                    node: this.sc,
                    offset: this.so,
                  };
                },
              },
              {
                key: 'getEndPoint',
                value: function () {
                  return {
                    node: this.ec,
                    offset: this.eo,
                  };
                },
              },
              {
                key: 'select',
                value: function () {
                  var t = this.nativeRange();
                  if (m.isW3CRangeSupport) {
                    var e = document.getSelection();
                    e.rangeCount > 0 && e.removeAllRanges(), e.addRange(t);
                  } else t.select();
                  return this;
                },
              },
              {
                key: 'scrollIntoView',
                value: function (t) {
                  var e = i()(t).height();
                  return (
                    t.scrollTop + e < this.sc.offsetTop &&
                      (t.scrollTop += Math.abs(
                        t.scrollTop + e - this.sc.offsetTop,
                      )),
                    this
                  );
                },
              },
              {
                key: 'normalize',
                value: function () {
                  var e = function (t, e) {
                      if (!t) return t;
                      if (
                        pt.isVisiblePoint(t) &&
                        (!pt.isEdgePoint(t) ||
                          (pt.isRightEdgePoint(t) && !e) ||
                          (pt.isLeftEdgePoint(t) && e) ||
                          (pt.isRightEdgePoint(t) &&
                            e &&
                            pt.isVoid(t.node.nextSibling)) ||
                          (pt.isLeftEdgePoint(t) &&
                            !e &&
                            pt.isVoid(t.node.previousSibling)) ||
                          (pt.isBlock(t.node) && pt.isEmpty(t.node)))
                      )
                        return t;
                      var n = pt.ancestor(t.node, pt.isBlock),
                        o = !1;
                      if (!o) {
                        var i = pt.prevPoint(t) || {
                          node: null,
                        };
                        o =
                          (pt.isLeftEdgePointOf(t, n) || pt.isVoid(i.node)) &&
                          !e;
                      }
                      var r = !1;
                      if (!r) {
                        var a = pt.nextPoint(t) || {
                          node: null,
                        };
                        r =
                          (pt.isRightEdgePointOf(t, n) || pt.isVoid(a.node)) &&
                          e;
                      }
                      if (o || r) {
                        if (pt.isVisiblePoint(t)) return t;
                        e = !e;
                      }
                      return (
                        (e
                          ? pt.nextPointUntil(
                              pt.nextPoint(t),
                              pt.isVisiblePoint,
                            )
                          : pt.prevPointUntil(
                              pt.prevPoint(t),
                              pt.isVisiblePoint,
                            )) || t
                      );
                    },
                    n = e(this.getEndPoint(), !1),
                    o = this.isCollapsed() ? n : e(this.getStartPoint(), !0);
                  return new t(o.node, o.offset, n.node, n.offset);
                },
              },
              {
                key: 'nodes',
                value: function (t, e) {
                  t = t || g.ok;
                  var n = e && e.includeAncestor,
                    o = e && e.fullyContains,
                    i = this.getStartPoint(),
                    r = this.getEndPoint(),
                    a = [],
                    s = [];
                  return (
                    pt.walkPoint(
                      i,
                      r,
                      function (e) {
                        var i;
                        pt.isEditable(e.node) ||
                          (o
                            ? (pt.isLeftEdgePoint(e) && s.push(e.node),
                              pt.isRightEdgePoint(e) &&
                                C.contains(s, e.node) &&
                                (i = e.node))
                            : (i = n ? pt.ancestor(e.node, t) : e.node),
                          i && t(i) && a.push(i));
                      },
                      !0,
                    ),
                    C.unique(a)
                  );
                },
              },
              {
                key: 'commonAncestor',
                value: function () {
                  return pt.commonAncestor(this.sc, this.ec);
                },
              },
              {
                key: 'expand',
                value: function (e) {
                  var n = pt.ancestor(this.sc, e),
                    o = pt.ancestor(this.ec, e);
                  if (!n && !o)
                    return new t(this.sc, this.so, this.ec, this.eo);
                  var i = this.getPoints();
                  return (
                    n && ((i.sc = n), (i.so = 0)),
                    o && ((i.ec = o), (i.eo = pt.nodeLength(o))),
                    new t(i.sc, i.so, i.ec, i.eo)
                  );
                },
              },
              {
                key: 'collapse',
                value: function (e) {
                  return e
                    ? new t(this.sc, this.so, this.sc, this.so)
                    : new t(this.ec, this.eo, this.ec, this.eo);
                },
              },
              {
                key: 'splitText',
                value: function () {
                  var e = this.sc === this.ec,
                    n = this.getPoints();
                  return (
                    pt.isText(this.ec) &&
                      !pt.isEdgePoint(this.getEndPoint()) &&
                      this.ec.splitText(this.eo),
                    pt.isText(this.sc) &&
                      !pt.isEdgePoint(this.getStartPoint()) &&
                      ((n.sc = this.sc.splitText(this.so)),
                      (n.so = 0),
                      e && ((n.ec = n.sc), (n.eo = this.eo - this.so))),
                    new t(n.sc, n.so, n.ec, n.eo)
                  );
                },
              },
              {
                key: 'deleteContents',
                value: function () {
                  if (this.isCollapsed()) return this;
                  var e = this.splitText(),
                    n = e.nodes(null, {
                      fullyContains: !0,
                    }),
                    o = pt.prevPointUntil(e.getStartPoint(), function (t) {
                      return !C.contains(n, t.node);
                    }),
                    r = [];
                  return (
                    i.a.each(n, function (t, e) {
                      var n = e.parentNode;
                      o.node !== n && 1 === pt.nodeLength(n) && r.push(n),
                        pt.remove(e, !1);
                    }),
                    i.a.each(r, function (t, e) {
                      pt.remove(e, !1);
                    }),
                    new t(o.node, o.offset, o.node, o.offset).normalize()
                  );
                },
              },
              {
                key: 'makeIsOn',
                value: function (t) {
                  return function () {
                    var e = pt.ancestor(this.sc, t);
                    return !!e && e === pt.ancestor(this.ec, t);
                  };
                },
              },
              {
                key: 'isLeftEdgeOf',
                value: function (t) {
                  if (!pt.isLeftEdgePoint(this.getStartPoint())) return !1;
                  var e = pt.ancestor(this.sc, t);
                  return e && pt.isLeftEdgeOf(this.sc, e);
                },
              },
              {
                key: 'isCollapsed',
                value: function () {
                  return this.sc === this.ec && this.so === this.eo;
                },
              },
              {
                key: 'wrapBodyInlineWithPara',
                value: function () {
                  if (pt.isBodyContainer(this.sc) && pt.isEmpty(this.sc))
                    return (
                      (this.sc.innerHTML = pt.emptyPara),
                      new t(this.sc.firstChild, 0, this.sc.firstChild, 0)
                    );
                  var e,
                    n = this.normalize();
                  if (pt.isParaInline(this.sc) || pt.isPara(this.sc)) return n;
                  if (pt.isInline(n.sc)) {
                    var o = pt.listAncestor(n.sc, g.not(pt.isInline));
                    (e = C.last(o)),
                      pt.isInline(e) ||
                        (e = o[o.length - 2] || n.sc.childNodes[n.so]);
                  } else e = n.sc.childNodes[n.so > 0 ? n.so - 1 : 0];
                  if (e) {
                    var i = pt.listPrev(e, pt.isParaInline).reverse();
                    if (
                      (i = i.concat(
                        pt.listNext(e.nextSibling, pt.isParaInline),
                      )).length
                    ) {
                      var r = pt.wrap(C.head(i), 'p');
                      pt.appendChildNodes(r, C.tail(i));
                    }
                  }
                  return this.normalize();
                },
              },
              {
                key: 'insertNode',
                value: function (t) {
                  var e = this;
                  (pt.isText(t) || pt.isInline(t)) &&
                    (e = this.wrapBodyInlineWithPara().deleteContents());
                  var n = pt.splitPoint(e.getStartPoint(), pt.isInline(t));
                  return (
                    n.rightNode
                      ? (n.rightNode.parentNode.insertBefore(t, n.rightNode),
                        pt.isEmpty(n.rightNode) &&
                          pt.isPara(t) &&
                          n.rightNode.parentNode.removeChild(n.rightNode))
                      : n.container.appendChild(t),
                    t
                  );
                },
              },
              {
                key: 'pasteHTML',
                value: function (t) {
                  t = i.a.trim(t);
                  var e = i()('<div></div>').html(t)[0],
                    n = C.from(e.childNodes),
                    o = this,
                    r = !1;
                  return (
                    o.so >= 0 && ((n = n.reverse()), (r = !0)),
                    (n = n.map(function (t) {
                      return o.insertNode(t);
                    })),
                    r && (n = n.reverse()),
                    n
                  );
                },
              },
              {
                key: 'toString',
                value: function () {
                  var t = this.nativeRange();
                  return m.isW3CRangeSupport ? t.toString() : t.text;
                },
              },
              {
                key: 'getWordRange',
                value: function (e) {
                  var n = this.getEndPoint();
                  if (!pt.isCharPoint(n)) return this;
                  var o = pt.prevPointUntil(n, function (t) {
                    return !pt.isCharPoint(t);
                  });
                  return (
                    e &&
                      (n = pt.nextPointUntil(n, function (t) {
                        return !pt.isCharPoint(t);
                      })),
                    new t(o.node, o.offset, n.node, n.offset)
                  );
                },
              },
              {
                key: 'getWordsRange',
                value: function (e) {
                  var n = this.getEndPoint(),
                    o = function (t) {
                      return !pt.isCharPoint(t) && !pt.isSpacePoint(t);
                    };
                  if (o(n)) return this;
                  var i = pt.prevPointUntil(n, o);
                  return (
                    e && (n = pt.nextPointUntil(n, o)),
                    new t(i.node, i.offset, n.node, n.offset)
                  );
                },
              },
              {
                key: 'getWordsMatchRange',
                value: function (e) {
                  var n = this.getEndPoint(),
                    o = pt.prevPointUntil(n, function (o) {
                      if (!pt.isCharPoint(o) && !pt.isSpacePoint(o)) return !0;
                      var i = new t(o.node, o.offset, n.node, n.offset),
                        r = e.exec(i.toString());
                      return r && 0 === r.index;
                    }),
                    i = new t(o.node, o.offset, n.node, n.offset),
                    r = i.toString(),
                    a = e.exec(r);
                  return a && a[0].length === r.length ? i : null;
                },
              },
              {
                key: 'bookmark',
                value: function (t) {
                  return {
                    s: {
                      path: pt.makeOffsetPath(t, this.sc),
                      offset: this.so,
                    },
                    e: {
                      path: pt.makeOffsetPath(t, this.ec),
                      offset: this.eo,
                    },
                  };
                },
              },
              {
                key: 'paraBookmark',
                value: function (t) {
                  return {
                    s: {
                      path: C.tail(pt.makeOffsetPath(C.head(t), this.sc)),
                      offset: this.so,
                    },
                    e: {
                      path: C.tail(pt.makeOffsetPath(C.last(t), this.ec)),
                      offset: this.eo,
                    },
                  };
                },
              },
              {
                key: 'getClientRects',
                value: function () {
                  return this.nativeRange().getClientRects();
                },
              },
            ]) && gt(e.prototype, n),
            o && gt(e, o),
            t
          );
        })(),
        wt = {
          create: function (t, e, n, o) {
            if (4 === arguments.length) return new kt(t, e, n, o);
            if (2 === arguments.length) return new kt(t, e, (n = t), (o = e));
            var i = this.createFromSelection();
            if (!i && 1 === arguments.length) {
              var r = arguments[0];
              return (
                pt.isEditable(r) && (r = r.lastChild),
                this.createFromBodyElement(
                  r,
                  pt.emptyPara === arguments[0].innerHTML,
                )
              );
            }
            return i;
          },
          createFromBodyElement: function (t) {
            var e =
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              n = this.createFromNode(t);
            return n.collapse(e);
          },
          createFromSelection: function () {
            var t, e, n, o;
            if (m.isW3CRangeSupport) {
              var i = document.getSelection();
              if (!i || 0 === i.rangeCount) return null;
              if (pt.isBody(i.anchorNode)) return null;
              var r = i.getRangeAt(0);
              (t = r.startContainer),
                (e = r.startOffset),
                (n = r.endContainer),
                (o = r.endOffset);
            } else {
              var a = document.selection.createRange(),
                s = a.duplicate();
              s.collapse(!1);
              var l = a;
              l.collapse(!0);
              var c = bt(l, !0),
                u = bt(s, !1);
              pt.isText(c.node) &&
                pt.isLeftEdgePoint(c) &&
                pt.isTextNode(u.node) &&
                pt.isRightEdgePoint(u) &&
                u.node.nextSibling === c.node &&
                (c = u),
                (t = c.cont),
                (e = c.offset),
                (n = u.cont),
                (o = u.offset);
            }
            return new kt(t, e, n, o);
          },
          createFromNode: function (t) {
            var e = t,
              n = 0,
              o = t,
              i = pt.nodeLength(o);
            return (
              pt.isVoid(e) &&
                ((n = pt.listPrev(e).length - 1), (e = e.parentNode)),
              pt.isBR(o)
                ? ((i = pt.listPrev(o).length - 1), (o = o.parentNode))
                : pt.isVoid(o) &&
                  ((i = pt.listPrev(o).length), (o = o.parentNode)),
              this.create(e, n, o, i)
            );
          },
          createFromNodeBefore: function (t) {
            return this.createFromNode(t).collapse(!0);
          },
          createFromNodeAfter: function (t) {
            return this.createFromNode(t).collapse();
          },
          createFromBookmark: function (t, e) {
            var n = pt.fromOffsetPath(t, e.s.path),
              o = e.s.offset,
              i = pt.fromOffsetPath(t, e.e.path),
              r = e.e.offset;
            return new kt(n, o, i, r);
          },
          createFromParaBookmark: function (t, e) {
            var n = t.s.offset,
              o = t.e.offset,
              i = pt.fromOffsetPath(C.head(e), t.s.path),
              r = pt.fromOffsetPath(C.last(e), t.e.path);
            return new kt(i, n, r, o);
          },
        },
        Ct = {
          BACKSPACE: 8,
          TAB: 9,
          ENTER: 13,
          ESCAPE: 27,
          SPACE: 32,
          DELETE: 46,
          LEFT: 37,
          UP: 38,
          RIGHT: 39,
          DOWN: 40,
          NUM0: 48,
          NUM1: 49,
          NUM2: 50,
          NUM3: 51,
          NUM4: 52,
          NUM5: 53,
          NUM6: 54,
          NUM7: 55,
          NUM8: 56,
          B: 66,
          E: 69,
          I: 73,
          J: 74,
          K: 75,
          L: 76,
          R: 82,
          S: 83,
          U: 85,
          V: 86,
          Y: 89,
          Z: 90,
          SLASH: 191,
          LEFTBRACKET: 219,
          BACKSLASH: 220,
          RIGHTBRACKET: 221,
          HOME: 36,
          END: 35,
          PAGEUP: 33,
          PAGEDOWN: 34,
        },
        xt = {
          isEdit: function (t) {
            return C.contains(
              [Ct.BACKSPACE, Ct.TAB, Ct.ENTER, Ct.SPACE, Ct.DELETE],
              t,
            );
          },
          isMove: function (t) {
            return C.contains([Ct.LEFT, Ct.UP, Ct.RIGHT, Ct.DOWN], t);
          },
          isNavigation: function (t) {
            return C.contains([Ct.HOME, Ct.END, Ct.PAGEUP, Ct.PAGEDOWN], t);
          },
          nameFromCode: g.invertObject(Ct),
          code: Ct,
        };

      function St(t, e) {
        for (var n = 0; n < e.length; n++) {
          var o = e[n];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            'value' in o && (o.writable = !0),
            Object.defineProperty(t, o.key, o);
        }
      }
      var Tt = (function () {
        function t(e) {
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError('Cannot call a class as a function');
          })(this, t),
            (this.stack = []),
            (this.stackOffset = -1),
            (this.context = e),
            (this.$editable = e.layoutInfo.editable),
            (this.editable = this.$editable[0]);
        }
        var e, n, o;
        return (
          (e = t),
          (n = [
            {
              key: 'makeSnapshot',
              value: function () {
                var t = wt.create(this.editable);
                return {
                  contents: this.$editable.html(),
                  bookmark:
                    t && t.isOnEditable()
                      ? t.bookmark(this.editable)
                      : {
                          s: {
                            path: [],
                            offset: 0,
                          },
                          e: {
                            path: [],
                            offset: 0,
                          },
                        },
                };
              },
            },
            {
              key: 'applySnapshot',
              value: function (t) {
                null !== t.contents && this.$editable.html(t.contents),
                  null !== t.bookmark &&
                    wt.createFromBookmark(this.editable, t.bookmark).select();
              },
            },
            {
              key: 'rewind',
              value: function () {
                this.$editable.html() !==
                  this.stack[this.stackOffset].contents && this.recordUndo(),
                  (this.stackOffset = 0),
                  this.applySnapshot(this.stack[this.stackOffset]);
              },
            },
            {
              key: 'commit',
              value: function () {
                (this.stack = []), (this.stackOffset = -1), this.recordUndo();
              },
            },
            {
              key: 'reset',
              value: function () {
                (this.stack = []),
                  (this.stackOffset = -1),
                  this.$editable.html(''),
                  this.recordUndo();
              },
            },
            {
              key: 'undo',
              value: function () {
                this.$editable.html() !==
                  this.stack[this.stackOffset].contents && this.recordUndo(),
                  this.stackOffset > 0 &&
                    (this.stackOffset--,
                    this.applySnapshot(this.stack[this.stackOffset]));
              },
            },
            {
              key: 'redo',
              value: function () {
                this.stack.length - 1 > this.stackOffset &&
                  (this.stackOffset++,
                  this.applySnapshot(this.stack[this.stackOffset]));
              },
            },
            {
              key: 'recordUndo',
              value: function () {
                this.stackOffset++,
                  this.stack.length > this.stackOffset &&
                    (this.stack = this.stack.slice(0, this.stackOffset)),
                  this.stack.push(this.makeSnapshot()),
                  this.stack.length > this.context.options.historyLimit &&
                    (this.stack.shift(), (this.stackOffset -= 1));
              },
            },
          ]) && St(e.prototype, n),
          o && St(e, o),
          t
        );
      })();

      function Et(t, e) {
        for (var n = 0; n < e.length; n++) {
          var o = e[n];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            'value' in o && (o.writable = !0),
            Object.defineProperty(t, o.key, o);
        }
      }
      var It = (function () {
        function t() {
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError('Cannot call a class as a function');
          })(this, t);
        }
        var e, n, o;
        return (
          (e = t),
          (n = [
            {
              key: 'jQueryCSS',
              value: function (t, e) {
                if (m.jqueryVersion < 1.9) {
                  var n = {};
                  return (
                    i.a.each(e, function (e, o) {
                      n[o] = t.css(o);
                    }),
                    n
                  );
                }
                return t.css(e);
              },
            },
            {
              key: 'fromNode',
              value: function (t) {
                var e =
                    this.jQueryCSS(t, [
                      'font-family',
                      'font-size',
                      'text-align',
                      'list-style-type',
                      'line-height',
                    ]) || {},
                  n = t[0].style.fontSize || e['font-size'];
                return (
                  (e['font-size'] = parseInt(n, 10)),
                  (e['font-size-unit'] = n.match(/[a-z%]+$/)),
                  e
                );
              },
            },
            {
              key: 'stylePara',
              value: function (t, e) {
                i.a.each(
                  t.nodes(pt.isPara, {
                    includeAncestor: !0,
                  }),
                  function (t, n) {
                    i()(n).css(e);
                  },
                );
              },
            },
            {
              key: 'styleNodes',
              value: function (t, e) {
                t = t.splitText();
                var n = (e && e.nodeName) || 'SPAN',
                  o = !(!e || !e.expandClosestSibling),
                  r = !(!e || !e.onlyPartialContains);
                if (t.isCollapsed()) return [t.insertNode(pt.create(n))];
                var a = pt.makePredByNodeName(n),
                  s = t
                    .nodes(pt.isText, {
                      fullyContains: !0,
                    })
                    .map(function (t) {
                      return pt.singleChildAncestor(t, a) || pt.wrap(t, n);
                    });
                if (o) {
                  if (r) {
                    var l = t.nodes();
                    a = g.and(a, function (t) {
                      return C.contains(l, t);
                    });
                  }
                  return s.map(function (t) {
                    var e = pt.withClosestSiblings(t, a),
                      n = C.head(e),
                      o = C.tail(e);
                    return (
                      i.a.each(o, function (t, e) {
                        pt.appendChildNodes(n, e.childNodes), pt.remove(e);
                      }),
                      C.head(e)
                    );
                  });
                }
                return s;
              },
            },
            {
              key: 'current',
              value: function (t) {
                var e = i()(pt.isElement(t.sc) ? t.sc : t.sc.parentNode),
                  n = this.fromNode(e);
                try {
                  n = i.a.extend(n, {
                    'font-bold': document.queryCommandState('bold')
                      ? 'bold'
                      : 'normal',
                    'font-italic': document.queryCommandState('italic')
                      ? 'italic'
                      : 'normal',
                    'font-underline': document.queryCommandState('underline')
                      ? 'underline'
                      : 'normal',
                    'font-subscript': document.queryCommandState('subscript')
                      ? 'subscript'
                      : 'normal',
                    'font-superscript': document.queryCommandState(
                      'superscript',
                    )
                      ? 'superscript'
                      : 'normal',
                    'font-strikethrough': document.queryCommandState(
                      'strikethrough',
                    )
                      ? 'strikethrough'
                      : 'normal',
                    'font-family':
                      document.queryCommandValue('fontname') ||
                      n['font-family'],
                  });
                } catch (t) {}
                if (t.isOnList()) {
                  var o =
                    ['circle', 'disc', 'disc-leading-zero', 'square'].indexOf(
                      n['list-style-type'],
                    ) > -1;
                  n['list-style'] = o ? 'unordered' : 'ordered';
                } else n['list-style'] = 'none';
                var r = pt.ancestor(t.sc, pt.isPara);
                if (r && r.style['line-height'])
                  n['line-height'] = r.style.lineHeight;
                else {
                  var a =
                    parseInt(n['line-height'], 10) /
                    parseInt(n['font-size'], 10);
                  n['line-height'] = a.toFixed(1);
                }
                return (
                  (n.anchor = t.isOnAnchor() && pt.ancestor(t.sc, pt.isAnchor)),
                  (n.ancestors = pt.listAncestor(t.sc, pt.isEditable)),
                  (n.range = t),
                  n
                );
              },
            },
          ]) && Et(e.prototype, n),
          o && Et(e, o),
          t
        );
      })();

      function $t(t, e) {
        for (var n = 0; n < e.length; n++) {
          var o = e[n];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            'value' in o && (o.writable = !0),
            Object.defineProperty(t, o.key, o);
        }
      }
      var Nt = (function () {
        function t() {
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError('Cannot call a class as a function');
          })(this, t);
        }
        var e, n, o;
        return (
          (e = t),
          (n = [
            {
              key: 'insertOrderedList',
              value: function (t) {
                this.toggleList('OL', t);
              },
            },
            {
              key: 'insertUnorderedList',
              value: function (t) {
                this.toggleList('UL', t);
              },
            },
            {
              key: 'indent',
              value: function (t) {
                var e = this,
                  n = wt.create(t).wrapBodyInlineWithPara(),
                  o = n.nodes(pt.isPara, {
                    includeAncestor: !0,
                  }),
                  r = C.clusterBy(o, g.peq2('parentNode'));
                i.a.each(r, function (t, n) {
                  var o = C.head(n);
                  if (pt.isLi(o)) {
                    var r = e.findList(o.previousSibling);
                    r
                      ? n.map(function (t) {
                          return r.appendChild(t);
                        })
                      : (e.wrapList(n, o.parentNode.nodeName),
                        n
                          .map(function (t) {
                            return t.parentNode;
                          })
                          .map(function (t) {
                            return e.appendToPrevious(t);
                          }));
                  } else
                    i.a.each(n, function (t, e) {
                      i()(e).css('marginLeft', function (t, e) {
                        return (parseInt(e, 10) || 0) + 25;
                      });
                    });
                }),
                  n.select();
              },
            },
            {
              key: 'outdent',
              value: function (t) {
                var e = this,
                  n = wt.create(t).wrapBodyInlineWithPara(),
                  o = n.nodes(pt.isPara, {
                    includeAncestor: !0,
                  }),
                  r = C.clusterBy(o, g.peq2('parentNode'));
                i.a.each(r, function (t, n) {
                  var o = C.head(n);
                  pt.isLi(o)
                    ? e.releaseList([n])
                    : i.a.each(n, function (t, e) {
                        i()(e).css('marginLeft', function (t, e) {
                          return (e = parseInt(e, 10) || 0) > 25 ? e - 25 : '';
                        });
                      });
                }),
                  n.select();
              },
            },
            {
              key: 'toggleList',
              value: function (t, e) {
                var n = this,
                  o = wt.create(e).wrapBodyInlineWithPara(),
                  r = o.nodes(pt.isPara, {
                    includeAncestor: !0,
                  }),
                  a = o.paraBookmark(r),
                  s = C.clusterBy(r, g.peq2('parentNode'));
                if (C.find(r, pt.isPurePara)) {
                  var l = [];
                  i.a.each(s, function (e, o) {
                    l = l.concat(n.wrapList(o, t));
                  }),
                    (r = l);
                } else {
                  var c = o
                    .nodes(pt.isList, {
                      includeAncestor: !0,
                    })
                    .filter(function (e) {
                      return !i.a.nodeName(e, t);
                    });
                  c.length
                    ? i.a.each(c, function (e, n) {
                        pt.replace(n, t);
                      })
                    : (r = this.releaseList(s, !0));
                }
                wt.createFromParaBookmark(a, r).select();
              },
            },
            {
              key: 'wrapList',
              value: function (t, e) {
                var n = C.head(t),
                  o = C.last(t),
                  i = pt.isList(n.previousSibling) && n.previousSibling,
                  r = pt.isList(o.nextSibling) && o.nextSibling,
                  a = i || pt.insertAfter(pt.create(e || 'UL'), o);
                return (
                  (t = t.map(function (t) {
                    return pt.isPurePara(t) ? pt.replace(t, 'LI') : t;
                  })),
                  pt.appendChildNodes(a, t),
                  r &&
                    (pt.appendChildNodes(a, C.from(r.childNodes)),
                    pt.remove(r)),
                  t
                );
              },
            },
            {
              key: 'releaseList',
              value: function (t, e) {
                var n = this,
                  o = [];
                return (
                  i.a.each(t, function (t, r) {
                    var a = C.head(r),
                      s = C.last(r),
                      l = e ? pt.lastAncestor(a, pt.isList) : a.parentNode,
                      c = l.parentNode;
                    if ('LI' === l.parentNode.nodeName)
                      r.map(function (t) {
                        var e = n.findNextSiblings(t);
                        c.nextSibling
                          ? c.parentNode.insertBefore(t, c.nextSibling)
                          : c.parentNode.appendChild(t),
                          e.length &&
                            (n.wrapList(e, l.nodeName),
                            t.appendChild(e[0].parentNode));
                      }),
                        0 === l.children.length && c.removeChild(l),
                        0 === c.childNodes.length &&
                          c.parentNode.removeChild(c);
                    else {
                      var u =
                          l.childNodes.length > 1
                            ? pt.splitTree(
                                l,
                                {
                                  node: s.parentNode,
                                  offset: pt.position(s) + 1,
                                },
                                {
                                  isSkipPaddingBlankHTML: !0,
                                },
                              )
                            : null,
                        d = pt.splitTree(
                          l,
                          {
                            node: a.parentNode,
                            offset: pt.position(a),
                          },
                          {
                            isSkipPaddingBlankHTML: !0,
                          },
                        );
                      (r = e
                        ? pt.listDescendant(d, pt.isLi)
                        : C.from(d.childNodes).filter(pt.isLi)),
                        (!e && pt.isList(l.parentNode)) ||
                          (r = r.map(function (t) {
                            return pt.replace(t, 'P');
                          })),
                        i.a.each(C.from(r).reverse(), function (t, e) {
                          pt.insertAfter(e, l);
                        });
                      var h = C.compact([l, d, u]);
                      i.a.each(h, function (t, e) {
                        var n = [e].concat(pt.listDescendant(e, pt.isList));
                        i.a.each(n.reverse(), function (t, e) {
                          pt.nodeLength(e) || pt.remove(e, !0);
                        });
                      });
                    }
                    o = o.concat(r);
                  }),
                  o
                );
              },
            },
            {
              key: 'appendToPrevious',
              value: function (t) {
                return t.previousSibling
                  ? pt.appendChildNodes(t.previousSibling, [t])
                  : this.wrapList([t], 'LI');
              },
            },
            {
              key: 'findList',
              value: function (t) {
                return t
                  ? C.find(t.children, function (t) {
                      return ['OL', 'UL'].indexOf(t.nodeName) > -1;
                    })
                  : null;
              },
            },
            {
              key: 'findNextSiblings',
              value: function (t) {
                for (var e = []; t.nextSibling; )
                  e.push(t.nextSibling), (t = t.nextSibling);
                return e;
              },
            },
          ]) && $t(e.prototype, n),
          o && $t(e, o),
          t
        );
      })();

      function Pt(t, e) {
        for (var n = 0; n < e.length; n++) {
          var o = e[n];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            'value' in o && (o.writable = !0),
            Object.defineProperty(t, o.key, o);
        }
      }
      var Rt = (function () {
        function t(e) {
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError('Cannot call a class as a function');
          })(this, t),
            (this.bullet = new Nt()),
            (this.options = e.options);
        }
        var e, n, o;
        return (
          (e = t),
          (n = [
            {
              key: 'insertTab',
              value: function (t, e) {
                var n = pt.createText(new Array(e + 1).join(pt.NBSP_CHAR));
                (t = t.deleteContents()).insertNode(n, !0),
                  (t = wt.create(n, e)).select();
              },
            },
            {
              key: 'insertParagraph',
              value: function (t, e) {
                e = (e = (e =
                  e || wt.create(t)).deleteContents()).wrapBodyInlineWithPara();
                var n,
                  o = pt.ancestor(e.sc, pt.isPara);
                if (o) {
                  if (
                    pt.isLi(o) &&
                    (pt.isEmpty(o) || pt.deepestChildIsEmpty(o))
                  )
                    return void this.bullet.toggleList(o.parentNode.nodeName);
                  var r = null;
                  if (
                    (1 === this.options.blockquoteBreakingLevel
                      ? (r = pt.ancestor(o, pt.isBlockquote))
                      : 2 === this.options.blockquoteBreakingLevel &&
                        (r = pt.lastAncestor(o, pt.isBlockquote)),
                    r)
                  ) {
                    (n = i()(pt.emptyPara)[0]),
                      pt.isRightEdgePoint(e.getStartPoint()) &&
                        pt.isBR(e.sc.nextSibling) &&
                        i()(e.sc.nextSibling).remove();
                    var a = pt.splitTree(r, e.getStartPoint(), {
                      isDiscardEmptySplits: !0,
                    });
                    a ? a.parentNode.insertBefore(n, a) : pt.insertAfter(n, r);
                  } else {
                    n = pt.splitTree(o, e.getStartPoint());
                    var s = pt.listDescendant(o, pt.isEmptyAnchor);
                    (s = s.concat(pt.listDescendant(n, pt.isEmptyAnchor))),
                      i.a.each(s, function (t, e) {
                        pt.remove(e);
                      }),
                      (pt.isHeading(n) ||
                        pt.isPre(n) ||
                        pt.isCustomStyleTag(n)) &&
                        pt.isEmpty(n) &&
                        (n = pt.replace(n, 'p'));
                  }
                } else {
                  var l = e.sc.childNodes[e.so];
                  (n = i()(pt.emptyPara)[0]),
                    l ? e.sc.insertBefore(n, l) : e.sc.appendChild(n);
                }
                wt.create(n, 0).normalize().select().scrollIntoView(t);
              },
            },
          ]) && Pt(e.prototype, n),
          o && Pt(e, o),
          t
        );
      })();

      function Lt(t, e) {
        for (var n = 0; n < e.length; n++) {
          var o = e[n];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            'value' in o && (o.writable = !0),
            Object.defineProperty(t, o.key, o);
        }
      }
      var At = function t(e, n, o, i) {
        var r = {
            colPos: 0,
            rowPos: 0,
          },
          a = [],
          s = [];

        function l(t, e, n, o, i, r, s) {
          var l = {
            baseRow: n,
            baseCell: o,
            isRowSpan: i,
            isColSpan: r,
            isVirtual: s,
          };
          a[t] || (a[t] = []), (a[t][e] = l);
        }

        function c(t, e, n, o) {
          return {
            baseCell: t.baseCell,
            action: e,
            virtualTable: {
              rowIndex: n,
              cellIndex: o,
            },
          };
        }

        function u(t, e) {
          if (!a[t]) return e;
          if (!a[t][e]) return e;
          for (var n = e; a[t][n]; ) if ((n++, !a[t][n])) return n;
        }

        function d(t, e) {
          var n = u(t.rowIndex, e.cellIndex),
            o = e.colSpan > 1,
            i = e.rowSpan > 1,
            a = t.rowIndex === r.rowPos && e.cellIndex === r.colPos;
          l(t.rowIndex, n, t, e, i, o, !1);
          var s = e.attributes.rowSpan
            ? parseInt(e.attributes.rowSpan.value, 10)
            : 0;
          if (s > 1)
            for (var c = 1; c < s; c++) {
              var d = t.rowIndex + c;
              h(d, n, e, a), l(d, n, t, e, !0, o, !0);
            }
          var f = e.attributes.colSpan
            ? parseInt(e.attributes.colSpan.value, 10)
            : 0;
          if (f > 1)
            for (var p = 1; p < f; p++) {
              var m = u(t.rowIndex, n + p);
              h(t.rowIndex, m, e, a), l(t.rowIndex, m, t, e, i, !0, !0);
            }
        }

        function h(t, e, n, o) {
          t === r.rowPos &&
            r.colPos >= n.cellIndex &&
            n.cellIndex <= e &&
            !o &&
            r.colPos++;
        }

        function f(e) {
          switch (n) {
            case t.where.Column:
              if (e.isColSpan) return t.resultAction.SubtractSpanCount;
              break;
            case t.where.Row:
              if (!e.isVirtual && e.isRowSpan) return t.resultAction.AddCell;
              if (e.isRowSpan) return t.resultAction.SubtractSpanCount;
          }
          return t.resultAction.RemoveCell;
        }

        function p(e) {
          switch (n) {
            case t.where.Column:
              if (e.isColSpan) return t.resultAction.SumSpanCount;
              if (e.isRowSpan && e.isVirtual) return t.resultAction.Ignore;
              break;
            case t.where.Row:
              if (e.isRowSpan) return t.resultAction.SumSpanCount;
              if (e.isColSpan && e.isVirtual) return t.resultAction.Ignore;
          }
          return t.resultAction.AddCell;
        }
        (this.getActionList = function () {
          for (
            var e = n === t.where.Row ? r.rowPos : -1,
              i = n === t.where.Column ? r.colPos : -1,
              l = 0,
              u = !0;
            u;

          ) {
            var d = e >= 0 ? e : l,
              h = i >= 0 ? i : l,
              m = a[d];
            if (!m) return (u = !1), s;
            var v = m[h];
            if (!v) return (u = !1), s;
            var g = t.resultAction.Ignore;
            switch (o) {
              case t.requestAction.Add:
                g = p(v);
                break;
              case t.requestAction.Delete:
                g = f(v);
            }
            s.push(c(v, g, d, h)), l++;
          }
          return s;
        }),
          e &&
            e.tagName &&
            ('td' === e.tagName.toLowerCase() ||
              'th' === e.tagName.toLowerCase()) &&
            ((r.colPos = e.cellIndex),
            e.parentElement &&
              e.parentElement.tagName &&
              'tr' === e.parentElement.tagName.toLowerCase() &&
              (r.rowPos = e.parentElement.rowIndex)),
          (function () {
            for (var t = i.rows, e = 0; e < t.length; e++)
              for (var n = t[e].cells, o = 0; o < n.length; o++) d(t[e], n[o]);
          })();
      };
      (At.where = {
        Row: 0,
        Column: 1,
      }),
        (At.requestAction = {
          Add: 0,
          Delete: 1,
        }),
        (At.resultAction = {
          Ignore: 0,
          SubtractSpanCount: 1,
          RemoveCell: 2,
          AddCell: 3,
          SumSpanCount: 4,
        });
      var Ft = (function () {
        function t() {
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError('Cannot call a class as a function');
          })(this, t);
        }
        var e, n, o;
        return (
          (e = t),
          (n = [
            {
              key: 'tab',
              value: function (t, e) {
                var n = pt.ancestor(t.commonAncestor(), pt.isCell),
                  o = pt.ancestor(n, pt.isTable),
                  i = pt.listDescendant(o, pt.isCell),
                  r = C[e ? 'prev' : 'next'](i, n);
                r && wt.create(r, 0).select();
              },
            },
            {
              key: 'addRow',
              value: function (t, e) {
                for (
                  var n = pt.ancestor(t.commonAncestor(), pt.isCell),
                    o = i()(n).closest('tr'),
                    r = this.recoverAttributes(o),
                    a = i()('<tr' + r + '></tr>'),
                    s = new At(
                      n,
                      At.where.Row,
                      At.requestAction.Add,
                      i()(o).closest('table')[0],
                    ).getActionList(),
                    l = 0;
                  l < s.length;
                  l++
                ) {
                  var c = s[l],
                    u = this.recoverAttributes(c.baseCell);
                  switch (c.action) {
                    case At.resultAction.AddCell:
                      a.append('<td' + u + '>' + pt.blank + '</td>');
                      break;
                    case At.resultAction.SumSpanCount:
                      if (
                        'top' === e &&
                        (c.baseCell.parent
                          ? c.baseCell.closest('tr').rowIndex
                          : 0) <= o[0].rowIndex
                      ) {
                        var d = i()('<div></div>')
                          .append(
                            i()(
                              '<td' + u + '>' + pt.blank + '</td>',
                            ).removeAttr('rowspan'),
                          )
                          .html();
                        a.append(d);
                        break;
                      }
                      var h = parseInt(c.baseCell.rowSpan, 10);
                      h++, c.baseCell.setAttribute('rowSpan', h);
                  }
                }
                if ('top' === e) o.before(a);
                else {
                  if (n.rowSpan > 1) {
                    var f = o[0].rowIndex + (n.rowSpan - 2);
                    return void i()(i()(o).parent().find('tr')[f]).after(
                      i()(a),
                    );
                  }
                  o.after(a);
                }
              },
            },
            {
              key: 'addCol',
              value: function (t, e) {
                var n = pt.ancestor(t.commonAncestor(), pt.isCell),
                  o = i()(n).closest('tr');
                i()(o).siblings().push(o);
                for (
                  var r = new At(
                      n,
                      At.where.Column,
                      At.requestAction.Add,
                      i()(o).closest('table')[0],
                    ).getActionList(),
                    a = 0;
                  a < r.length;
                  a++
                ) {
                  var s = r[a],
                    l = this.recoverAttributes(s.baseCell);
                  switch (s.action) {
                    case At.resultAction.AddCell:
                      'right' === e
                        ? i()(s.baseCell).after(
                            '<td' + l + '>' + pt.blank + '</td>',
                          )
                        : i()(s.baseCell).before(
                            '<td' + l + '>' + pt.blank + '</td>',
                          );
                      break;
                    case At.resultAction.SumSpanCount:
                      if ('right' === e) {
                        var c = parseInt(s.baseCell.colSpan, 10);
                        c++, s.baseCell.setAttribute('colSpan', c);
                      } else
                        i()(s.baseCell).before(
                          '<td' + l + '>' + pt.blank + '</td>',
                        );
                  }
                }
              },
            },
            {
              key: 'recoverAttributes',
              value: function (t) {
                var e = '';
                if (!t) return e;
                for (var n = t.attributes || [], o = 0; o < n.length; o++)
                  'id' !== n[o].name.toLowerCase() &&
                    n[o].specified &&
                    (e += ' ' + n[o].name + "='" + n[o].value + "'");
                return e;
              },
            },
            {
              key: 'deleteRow',
              value: function (t) {
                for (
                  var e = pt.ancestor(t.commonAncestor(), pt.isCell),
                    n = i()(e).closest('tr'),
                    o = n.children('td, th').index(i()(e)),
                    r = n[0].rowIndex,
                    a = new At(
                      e,
                      At.where.Row,
                      At.requestAction.Delete,
                      i()(n).closest('table')[0],
                    ).getActionList(),
                    s = 0;
                  s < a.length;
                  s++
                )
                  if (a[s]) {
                    var l = a[s].baseCell,
                      c = a[s].virtualTable,
                      u = l.rowSpan && l.rowSpan > 1,
                      d = u ? parseInt(l.rowSpan, 10) : 0;
                    switch (a[s].action) {
                      case At.resultAction.Ignore:
                        continue;
                      case At.resultAction.AddCell:
                        var h = n.next('tr')[0];
                        if (!h) continue;
                        var f = n[0].cells[o];
                        u &&
                          (d > 2
                            ? (d--,
                              h.insertBefore(f, h.cells[o]),
                              h.cells[o].setAttribute('rowSpan', d),
                              (h.cells[o].innerHTML = ''))
                            : 2 === d &&
                              (h.insertBefore(f, h.cells[o]),
                              h.cells[o].removeAttribute('rowSpan'),
                              (h.cells[o].innerHTML = '')));
                        continue;
                      case At.resultAction.SubtractSpanCount:
                        u &&
                          (d > 2
                            ? (d--,
                              l.setAttribute('rowSpan', d),
                              c.rowIndex !== r &&
                                l.cellIndex === o &&
                                (l.innerHTML = ''))
                            : 2 === d &&
                              (l.removeAttribute('rowSpan'),
                              c.rowIndex !== r &&
                                l.cellIndex === o &&
                                (l.innerHTML = '')));
                        continue;
                      case At.resultAction.RemoveCell:
                        continue;
                    }
                  }
                n.remove();
              },
            },
            {
              key: 'deleteCol',
              value: function (t) {
                for (
                  var e = pt.ancestor(t.commonAncestor(), pt.isCell),
                    n = i()(e).closest('tr'),
                    o = n.children('td, th').index(i()(e)),
                    r = new At(
                      e,
                      At.where.Column,
                      At.requestAction.Delete,
                      i()(n).closest('table')[0],
                    ).getActionList(),
                    a = 0;
                  a < r.length;
                  a++
                )
                  if (r[a])
                    switch (r[a].action) {
                      case At.resultAction.Ignore:
                        continue;
                      case At.resultAction.SubtractSpanCount:
                        var s = r[a].baseCell;
                        if (s.colSpan && s.colSpan > 1) {
                          var l = s.colSpan ? parseInt(s.colSpan, 10) : 0;
                          l > 2
                            ? (l--,
                              s.setAttribute('colSpan', l),
                              s.cellIndex === o && (s.innerHTML = ''))
                            : 2 === l &&
                              (s.removeAttribute('colSpan'),
                              s.cellIndex === o && (s.innerHTML = ''));
                        }
                        continue;
                      case At.resultAction.RemoveCell:
                        pt.remove(r[a].baseCell, !0);
                        continue;
                    }
              },
            },
            {
              key: 'createTable',
              value: function (t, e, n) {
                for (var o, r = [], a = 0; a < t; a++)
                  r.push('<td>' + pt.blank + '</td>');
                o = r.join('');
                for (var s, l = [], c = 0; c < e; c++)
                  l.push('<tr>' + o + '</tr>');
                s = l.join('');
                var u = i()('<table>' + s + '</table>');
                return (
                  n && n.tableClassName && u.addClass(n.tableClassName), u[0]
                );
              },
            },
            {
              key: 'deleteTable',
              value: function (t) {
                var e = pt.ancestor(t.commonAncestor(), pt.isCell);
                i()(e).closest('table').remove();
              },
            },
          ]) && Lt(e.prototype, n),
          o && Lt(e, o),
          t
        );
      })();

      function Dt(t, e) {
        for (var n = 0; n < e.length; n++) {
          var o = e[n];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            'value' in o && (o.writable = !0),
            Object.defineProperty(t, o.key, o);
        }
      }
      var Ht = (function () {
        function t(e) {
          var n = this;
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError('Cannot call a class as a function');
          })(this, t),
            (this.context = e),
            (this.$note = e.layoutInfo.note),
            (this.$editor = e.layoutInfo.editor),
            (this.$editable = e.layoutInfo.editable),
            (this.options = e.options),
            (this.lang = this.options.langInfo),
            (this.editable = this.$editable[0]),
            (this.lastRange = null),
            (this.snapshot = null),
            (this.style = new It()),
            (this.table = new Ft()),
            (this.typing = new Rt(e)),
            (this.bullet = new Nt()),
            (this.history = new Tt(e)),
            this.context.memo('help.escape', this.lang.help.escape),
            this.context.memo('help.undo', this.lang.help.undo),
            this.context.memo('help.redo', this.lang.help.redo),
            this.context.memo('help.tab', this.lang.help.tab),
            this.context.memo('help.untab', this.lang.help.untab),
            this.context.memo(
              'help.insertParagraph',
              this.lang.help.insertParagraph,
            ),
            this.context.memo(
              'help.insertOrderedList',
              this.lang.help.insertOrderedList,
            ),
            this.context.memo(
              'help.insertUnorderedList',
              this.lang.help.insertUnorderedList,
            ),
            this.context.memo('help.indent', this.lang.help.indent),
            this.context.memo('help.outdent', this.lang.help.outdent),
            this.context.memo('help.formatPara', this.lang.help.formatPara),
            this.context.memo(
              'help.insertHorizontalRule',
              this.lang.help.insertHorizontalRule,
            ),
            this.context.memo('help.fontName', this.lang.help.fontName);
          for (
            var o = [
                'bold',
                'italic',
                'underline',
                'strikethrough',
                'superscript',
                'subscript',
                'justifyLeft',
                'justifyCenter',
                'justifyRight',
                'justifyFull',
                'formatBlock',
                'removeFormat',
                'backColor',
              ],
              r = 0,
              a = o.length;
            r < a;
            r++
          )
            (this[o[r]] = (function (t) {
              return function (e) {
                n.beforeCommand(),
                  document.execCommand(t, !1, e),
                  n.afterCommand(!0);
              };
            })(o[r])),
              this.context.memo('help.' + o[r], this.lang.help[o[r]]);
          (this.fontName = this.wrapCommand(function (t) {
            return n.fontStyling('font-family', m.validFontName(t));
          })),
            (this.fontSize = this.wrapCommand(function (t) {
              var e = n.currentStyle()['font-size-unit'];
              return n.fontStyling('font-size', t + e);
            })),
            (this.fontSizeUnit = this.wrapCommand(function (t) {
              var e = n.currentStyle()['font-size'];
              return n.fontStyling('font-size', e + t);
            }));
          for (var s = 1; s <= 6; s++)
            (this['formatH' + s] = (function (t) {
              return function () {
                n.formatBlock('H' + t);
              };
            })(s)),
              this.context.memo(
                'help.formatH' + s,
                this.lang.help['formatH' + s],
              );
          (this.insertParagraph = this.wrapCommand(function () {
            n.typing.insertParagraph(n.editable);
          })),
            (this.insertOrderedList = this.wrapCommand(function () {
              n.bullet.insertOrderedList(n.editable);
            })),
            (this.insertUnorderedList = this.wrapCommand(function () {
              n.bullet.insertUnorderedList(n.editable);
            })),
            (this.indent = this.wrapCommand(function () {
              n.bullet.indent(n.editable);
            })),
            (this.outdent = this.wrapCommand(function () {
              n.bullet.outdent(n.editable);
            })),
            (this.insertNode = this.wrapCommand(function (t) {
              n.isLimited(i()(t).text().length) ||
                (n.getLastRange().insertNode(t),
                n.setLastRange(wt.createFromNodeAfter(t).select()));
            })),
            (this.insertText = this.wrapCommand(function (t) {
              if (!n.isLimited(t.length)) {
                var e = n.getLastRange().insertNode(pt.createText(t));
                n.setLastRange(wt.create(e, pt.nodeLength(e)).select());
              }
            })),
            (this.pasteHTML = this.wrapCommand(function (t) {
              if (!n.isLimited(t.length)) {
                t = n.context.invoke('codeview.purify', t);
                var e = n.getLastRange().pasteHTML(t);
                n.setLastRange(wt.createFromNodeAfter(C.last(e)).select());
              }
            })),
            (this.formatBlock = this.wrapCommand(function (t, e) {
              var o = n.options.callbacks.onApplyCustomStyle;
              o
                ? o.call(n, e, n.context, n.onFormatBlock)
                : n.onFormatBlock(t, e);
            })),
            (this.insertHorizontalRule = this.wrapCommand(function () {
              var t = n.getLastRange().insertNode(pt.create('HR'));
              t.nextSibling &&
                n.setLastRange(
                  wt.create(t.nextSibling, 0).normalize().select(),
                );
            })),
            (this.lineHeight = this.wrapCommand(function (t) {
              n.style.stylePara(n.getLastRange(), {
                lineHeight: t,
              });
            })),
            (this.createLink = this.wrapCommand(function (t) {
              var e = t.url,
                o = t.text,
                r = t.isNewWindow,
                a = t.checkProtocol,
                s = t.range || n.getLastRange(),
                l = o.length - s.toString().length;
              if (!(l > 0 && n.isLimited(l))) {
                var c = s.toString() !== o;
                'string' == typeof e && (e = e.trim()),
                  n.options.onCreateLink
                    ? (e = n.options.onCreateLink(e))
                    : a &&
                      (e = /^([A-Za-z][A-Za-z0-9+-.]*\:|#|\/)/.test(e)
                        ? e
                        : n.options.defaultProtocol + e);
                var u = [];
                if (c) {
                  var d = (s = s.deleteContents()).insertNode(
                    i()('<A>' + o + '</A>')[0],
                  );
                  u.push(d);
                } else
                  u = n.style.styleNodes(s, {
                    nodeName: 'A',
                    expandClosestSibling: !0,
                    onlyPartialContains: !0,
                  });
                i.a.each(u, function (t, n) {
                  i()(n).attr('href', e),
                    r
                      ? i()(n).attr('target', '_blank')
                      : i()(n).removeAttr('target');
                }),
                  n.setLastRange(n.createRangeFromList(u).select());
              }
            })),
            (this.color = this.wrapCommand(function (t) {
              var e = t.foreColor,
                n = t.backColor;
              e && document.execCommand('foreColor', !1, e),
                n && document.execCommand('backColor', !1, n);
            })),
            (this.foreColor = this.wrapCommand(function (t) {
              document.execCommand('foreColor', !1, t);
            })),
            (this.insertTable = this.wrapCommand(function (t) {
              var e = t.split('x');
              n.getLastRange()
                .deleteContents()
                .insertNode(n.table.createTable(e[0], e[1], n.options));
            })),
            (this.removeMedia = this.wrapCommand(function () {
              var t = i()(n.restoreTarget()).parent();
              t.closest('figure').length
                ? t.closest('figure').remove()
                : (t = i()(n.restoreTarget()).detach()),
                n.context.triggerEvent('media.delete', t, n.$editable);
            })),
            (this.floatMe = this.wrapCommand(function (t) {
              var e = i()(n.restoreTarget());
              e.toggleClass('note-float-left', 'left' === t),
                e.toggleClass('note-float-right', 'right' === t),
                e.css('float', 'none' === t ? '' : t);
            })),
            (this.resize = this.wrapCommand(function (t) {
              var e = i()(n.restoreTarget());
              0 === (t = parseFloat(t))
                ? e.css('width', '')
                : e.css({
                    width: 100 * t + '%',
                    height: '',
                  });
            }));
        }
        var e, n, o;
        return (
          (e = t),
          (n = [
            {
              key: 'initialize',
              value: function () {
                var t = this;
                this.$editable
                  .on('keydown', function (e) {
                    if (
                      (e.keyCode === xt.code.ENTER &&
                        t.context.triggerEvent('enter', e),
                      t.context.triggerEvent('keydown', e),
                      (t.snapshot = t.history.makeSnapshot()),
                      (t.hasKeyShortCut = !1),
                      e.isDefaultPrevented() ||
                        (t.options.shortcuts
                          ? (t.hasKeyShortCut = t.handleKeyMap(e))
                          : t.preventDefaultEditableShortCuts(e)),
                      t.isLimited(1, e))
                    ) {
                      var n = t.getLastRange();
                      if (n.eo - n.so == 0) return !1;
                    }
                    t.setLastRange(),
                      t.options.recordEveryKeystroke &&
                        !1 === t.hasKeyShortCut &&
                        t.history.recordUndo();
                  })
                  .on('keyup', function (e) {
                    t.setLastRange(), t.context.triggerEvent('keyup', e);
                  })
                  .on('focus', function (e) {
                    t.setLastRange(), t.context.triggerEvent('focus', e);
                  })
                  .on('blur', function (e) {
                    t.context.triggerEvent('blur', e);
                  })
                  .on('mousedown', function (e) {
                    t.context.triggerEvent('mousedown', e);
                  })
                  .on('mouseup', function (e) {
                    t.setLastRange(),
                      t.history.recordUndo(),
                      t.context.triggerEvent('mouseup', e);
                  })
                  .on('scroll', function (e) {
                    t.context.triggerEvent('scroll', e);
                  })
                  .on('paste', function (e) {
                    t.setLastRange(), t.context.triggerEvent('paste', e);
                  })
                  .on('input', function () {
                    t.isLimited(0) &&
                      t.snapshot &&
                      t.history.applySnapshot(t.snapshot);
                  }),
                  this.$editable.attr('spellcheck', this.options.spellCheck),
                  this.$editable.attr('autocorrect', this.options.spellCheck),
                  this.options.disableGrammar &&
                    this.$editable.attr('data-gramm', !1),
                  this.$editable.html(pt.html(this.$note) || pt.emptyPara),
                  this.$editable.on(
                    m.inputEventName,
                    g.debounce(function () {
                      t.context.triggerEvent(
                        'change',
                        t.$editable.html(),
                        t.$editable,
                      );
                    }, 10),
                  ),
                  this.$editable
                    .on('focusin', function (e) {
                      t.context.triggerEvent('focusin', e);
                    })
                    .on('focusout', function (e) {
                      t.context.triggerEvent('focusout', e);
                    }),
                  this.options.airMode
                    ? this.options.overrideContextMenu &&
                      this.$editor.on('contextmenu', function (e) {
                        return t.context.triggerEvent('contextmenu', e), !1;
                      })
                    : (this.options.width &&
                        this.$editor.outerWidth(this.options.width),
                      this.options.height &&
                        this.$editable.outerHeight(this.options.height),
                      this.options.maxHeight &&
                        this.$editable.css(
                          'max-height',
                          this.options.maxHeight,
                        ),
                      this.options.minHeight &&
                        this.$editable.css(
                          'min-height',
                          this.options.minHeight,
                        )),
                  this.history.recordUndo(),
                  this.setLastRange();
              },
            },
            {
              key: 'destroy',
              value: function () {
                this.$editable.off();
              },
            },
            {
              key: 'handleKeyMap',
              value: function (t) {
                var e = this.options.keyMap[m.isMac ? 'mac' : 'pc'],
                  n = [];
                t.metaKey && n.push('CMD'),
                  t.ctrlKey && !t.altKey && n.push('CTRL'),
                  t.shiftKey && n.push('SHIFT');
                var o = xt.nameFromCode[t.keyCode];
                o && n.push(o);
                var i = e[n.join('+')];
                if ('TAB' !== o || this.options.tabDisable)
                  if (i) {
                    if (!1 !== this.context.invoke(i))
                      return t.preventDefault(), !0;
                  } else xt.isEdit(t.keyCode) && this.afterCommand();
                else this.afterCommand();
                return !1;
              },
            },
            {
              key: 'preventDefaultEditableShortCuts',
              value: function (t) {
                (t.ctrlKey || t.metaKey) &&
                  C.contains([66, 73, 85], t.keyCode) &&
                  t.preventDefault();
              },
            },
            {
              key: 'isLimited',
              value: function (t, e) {
                return (
                  (t = t || 0),
                  (void 0 === e ||
                    !(
                      xt.isMove(e.keyCode) ||
                      xt.isNavigation(e.keyCode) ||
                      e.ctrlKey ||
                      e.metaKey ||
                      C.contains([xt.code.BACKSPACE, xt.code.DELETE], e.keyCode)
                    )) &&
                    this.options.maxTextLength > 0 &&
                    this.$editable.text().length + t >
                      this.options.maxTextLength
                );
              },
            },
            {
              key: 'createRange',
              value: function () {
                return this.focus(), this.setLastRange(), this.getLastRange();
              },
            },
            {
              key: 'createRangeFromList',
              value: function (t) {
                var e = wt.createFromNodeBefore(C.head(t)).getStartPoint(),
                  n = wt.createFromNodeAfter(C.last(t)).getEndPoint();
                return wt.create(e.node, e.offset, n.node, n.offset);
              },
            },
            {
              key: 'setLastRange',
              value: function (t) {
                t
                  ? (this.lastRange = t)
                  : ((this.lastRange = wt.create(this.editable)),
                    0 ===
                      i()(this.lastRange.sc).closest('.note-editable').length &&
                      (this.lastRange = wt.createFromBodyElement(
                        this.editable,
                      )));
              },
            },
            {
              key: 'getLastRange',
              value: function () {
                return this.lastRange || this.setLastRange(), this.lastRange;
              },
            },
            {
              key: 'saveRange',
              value: function (t) {
                t && this.getLastRange().collapse().select();
              },
            },
            {
              key: 'restoreRange',
              value: function () {
                this.lastRange && (this.lastRange.select(), this.focus());
              },
            },
            {
              key: 'saveTarget',
              value: function (t) {
                this.$editable.data('target', t);
              },
            },
            {
              key: 'clearTarget',
              value: function () {
                this.$editable.removeData('target');
              },
            },
            {
              key: 'restoreTarget',
              value: function () {
                return this.$editable.data('target');
              },
            },
            {
              key: 'currentStyle',
              value: function () {
                var t = wt.create();
                return (
                  t && (t = t.normalize()),
                  t
                    ? this.style.current(t)
                    : this.style.fromNode(this.$editable)
                );
              },
            },
            {
              key: 'styleFromNode',
              value: function (t) {
                return this.style.fromNode(t);
              },
            },
            {
              key: 'undo',
              value: function () {
                this.context.triggerEvent(
                  'before.command',
                  this.$editable.html(),
                ),
                  this.history.undo(),
                  this.context.triggerEvent(
                    'change',
                    this.$editable.html(),
                    this.$editable,
                  );
              },
            },
            {
              key: 'commit',
              value: function () {
                this.context.triggerEvent(
                  'before.command',
                  this.$editable.html(),
                ),
                  this.history.commit(),
                  this.context.triggerEvent(
                    'change',
                    this.$editable.html(),
                    this.$editable,
                  );
              },
            },
            {
              key: 'redo',
              value: function () {
                this.context.triggerEvent(
                  'before.command',
                  this.$editable.html(),
                ),
                  this.history.redo(),
                  this.context.triggerEvent(
                    'change',
                    this.$editable.html(),
                    this.$editable,
                  );
              },
            },
            {
              key: 'beforeCommand',
              value: function () {
                this.context.triggerEvent(
                  'before.command',
                  this.$editable.html(),
                ),
                  document.execCommand(
                    'styleWithCSS',
                    !1,
                    this.options.styleWithCSS,
                  ),
                  this.focus();
              },
            },
            {
              key: 'afterCommand',
              value: function (t) {
                this.normalizeContent(),
                  this.history.recordUndo(),
                  t ||
                    this.context.triggerEvent(
                      'change',
                      this.$editable.html(),
                      this.$editable,
                    );
              },
            },
            {
              key: 'tab',
              value: function () {
                var t = this.getLastRange();
                if (t.isCollapsed() && t.isOnCell()) this.table.tab(t);
                else {
                  if (0 === this.options.tabSize) return !1;
                  this.isLimited(this.options.tabSize) ||
                    (this.beforeCommand(),
                    this.typing.insertTab(t, this.options.tabSize),
                    this.afterCommand());
                }
              },
            },
            {
              key: 'untab',
              value: function () {
                var t = this.getLastRange();
                if (t.isCollapsed() && t.isOnCell()) this.table.tab(t, !0);
                else if (0 === this.options.tabSize) return !1;
              },
            },
            {
              key: 'wrapCommand',
              value: function (t) {
                return function () {
                  this.beforeCommand(),
                    t.apply(this, arguments),
                    this.afterCommand();
                };
              },
            },
            {
              key: 'insertImage',
              value: function (t, e) {
                var n,
                  o = this;
                return ((n = t),
                i.a
                  .Deferred(function (t) {
                    var e = i()('<img>');
                    e.one('load', function () {
                      e.off('error abort'), t.resolve(e);
                    })
                      .one('error abort', function () {
                        e.off('load').detach(), t.reject(e);
                      })
                      .css({
                        display: 'none',
                      })
                      .appendTo(document.body)
                      .attr('src', n);
                  })
                  .promise())
                  .then(function (t) {
                    o.beforeCommand(),
                      'function' == typeof e
                        ? e(t)
                        : ('string' == typeof e && t.attr('data-filename', e),
                          t.css(
                            'width',
                            Math.min(o.$editable.width(), t.width()),
                          )),
                      t.show(),
                      o.getLastRange().insertNode(t[0]),
                      o.setLastRange(wt.createFromNodeAfter(t[0]).select()),
                      o.afterCommand();
                  })
                  .fail(function (t) {
                    o.context.triggerEvent('image.upload.error', t);
                  });
              },
            },
            {
              key: 'insertImagesAsDataURL',
              value: function (t) {
                var e = this;
                i.a.each(t, function (t, n) {
                  var o = n.name;
                  e.options.maximumImageFileSize &&
                  e.options.maximumImageFileSize < n.size
                    ? e.context.triggerEvent(
                        'image.upload.error',
                        e.lang.image.maximumFileSizeError,
                      )
                    : (function (t) {
                        return i.a
                          .Deferred(function (e) {
                            i.a
                              .extend(new FileReader(), {
                                onload: function (t) {
                                  var n = t.target.result;
                                  e.resolve(n);
                                },
                                onerror: function (t) {
                                  e.reject(t);
                                },
                              })
                              .readAsDataURL(t);
                          })
                          .promise();
                      })(n)
                        .then(function (t) {
                          return e.insertImage(t, o);
                        })
                        .fail(function () {
                          e.context.triggerEvent('image.upload.error');
                        });
                });
              },
            },
            {
              key: 'insertImagesOrCallback',
              value: function (t) {
                this.options.callbacks.onImageUpload
                  ? this.context.triggerEvent('image.upload', t)
                  : this.insertImagesAsDataURL(t);
              },
            },
            {
              key: 'getSelectedText',
              value: function () {
                var t = this.getLastRange();
                return (
                  t.isOnAnchor() &&
                    (t = wt.createFromNode(pt.ancestor(t.sc, pt.isAnchor))),
                  t.toString()
                );
              },
            },
            {
              key: 'onFormatBlock',
              value: function (t, e) {
                if (
                  (document.execCommand(
                    'FormatBlock',
                    !1,
                    m.isMSIE ? '<' + t + '>' : t,
                  ),
                  e &&
                    e.length &&
                    (e[0].tagName.toUpperCase() !== t.toUpperCase() &&
                      (e = e.find(t)),
                    e && e.length))
                ) {
                  var n = e[0].className || '';
                  if (n) {
                    var o = this.createRange();
                    i()([o.sc, o.ec]).closest(t).addClass(n);
                  }
                }
              },
            },
            {
              key: 'formatPara',
              value: function () {
                this.formatBlock('P');
              },
            },
            {
              key: 'fontStyling',
              value: function (t, e) {
                var n = this.getLastRange();
                if ('' !== n) {
                  var o = this.style.styleNodes(n);
                  if (
                    (this.$editor.find('.note-status-output').html(''),
                    i()(o).css(t, e),
                    n.isCollapsed())
                  ) {
                    var r = C.head(o);
                    r &&
                      !pt.nodeLength(r) &&
                      ((r.innerHTML = pt.ZERO_WIDTH_NBSP_CHAR),
                      wt.createFromNode(r.firstChild).select(),
                      this.setLastRange(),
                      this.$editable.data('bogus', r));
                  } else
                    this.setLastRange(this.createRangeFromList(o).select());
                } else {
                  var a = i.a.now();
                  this.$editor
                    .find('.note-status-output')
                    .html(
                      '<div id="note-status-output-' +
                        a +
                        '" class="alert alert-info">' +
                        this.lang.output.noSelection +
                        '</div>',
                    ),
                    setTimeout(function () {
                      i()('#note-status-output-' + a).remove();
                    }, 5e3);
                }
              },
            },
            {
              key: 'unlink',
              value: function () {
                var t = this.getLastRange();
                if (t.isOnAnchor()) {
                  var e = pt.ancestor(t.sc, pt.isAnchor);
                  (t = wt.createFromNode(e)).select(),
                    this.setLastRange(),
                    this.beforeCommand(),
                    document.execCommand('unlink'),
                    this.afterCommand();
                }
              },
            },
            {
              key: 'getLinkInfo',
              value: function () {
                var t = this.getLastRange().expand(pt.isAnchor),
                  e = i()(C.head(t.nodes(pt.isAnchor))),
                  n = {
                    range: t,
                    text: t.toString(),
                    url: e.length ? e.attr('href') : '',
                  };
                return (
                  e.length && (n.isNewWindow = '_blank' === e.attr('target')), n
                );
              },
            },
            {
              key: 'addRow',
              value: function (t) {
                var e = this.getLastRange(this.$editable);
                e.isCollapsed() &&
                  e.isOnCell() &&
                  (this.beforeCommand(),
                  this.table.addRow(e, t),
                  this.afterCommand());
              },
            },
            {
              key: 'addCol',
              value: function (t) {
                var e = this.getLastRange(this.$editable);
                e.isCollapsed() &&
                  e.isOnCell() &&
                  (this.beforeCommand(),
                  this.table.addCol(e, t),
                  this.afterCommand());
              },
            },
            {
              key: 'deleteRow',
              value: function () {
                var t = this.getLastRange(this.$editable);
                t.isCollapsed() &&
                  t.isOnCell() &&
                  (this.beforeCommand(),
                  this.table.deleteRow(t),
                  this.afterCommand());
              },
            },
            {
              key: 'deleteCol',
              value: function () {
                var t = this.getLastRange(this.$editable);
                t.isCollapsed() &&
                  t.isOnCell() &&
                  (this.beforeCommand(),
                  this.table.deleteCol(t),
                  this.afterCommand());
              },
            },
            {
              key: 'deleteTable',
              value: function () {
                var t = this.getLastRange(this.$editable);
                t.isCollapsed() &&
                  t.isOnCell() &&
                  (this.beforeCommand(),
                  this.table.deleteTable(t),
                  this.afterCommand());
              },
            },
            {
              key: 'resizeTo',
              value: function (t, e, n) {
                var o;
                if (n) {
                  var i = t.y / t.x,
                    r = e.data('ratio');
                  o = {
                    width: r > i ? t.x : t.y / r,
                    height: r > i ? t.x * r : t.y,
                  };
                } else
                  o = {
                    width: t.x,
                    height: t.y,
                  };
                e.css(o);
              },
            },
            {
              key: 'hasFocus',
              value: function () {
                return this.$editable.is(':focus');
              },
            },
            {
              key: 'focus',
              value: function () {
                this.hasFocus() || this.$editable.focus();
              },
            },
            {
              key: 'isEmpty',
              value: function () {
                return (
                  pt.isEmpty(this.$editable[0]) ||
                  pt.emptyPara === this.$editable.html()
                );
              },
            },
            {
              key: 'empty',
              value: function () {
                this.context.invoke('code', pt.emptyPara);
              },
            },
            {
              key: 'normalizeContent',
              value: function () {
                this.$editable[0].normalize();
              },
            },
          ]) && Dt(e.prototype, n),
          o && Dt(e, o),
          t
        );
      })();

      function zt(t, e) {
        for (var n = 0; n < e.length; n++) {
          var o = e[n];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            'value' in o && (o.writable = !0),
            Object.defineProperty(t, o.key, o);
        }
      }
      var Bt = (function () {
        function t(e) {
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError('Cannot call a class as a function');
          })(this, t),
            (this.context = e),
            (this.$editable = e.layoutInfo.editable);
        }
        var e, n, o;
        return (
          (e = t),
          (n = [
            {
              key: 'initialize',
              value: function () {
                this.$editable.on('paste', this.pasteByEvent.bind(this));
              },
            },
            {
              key: 'pasteByEvent',
              value: function (t) {
                var e = this,
                  n = t.originalEvent.clipboardData;
                if (n && n.items && n.items.length) {
                  var o = n.items.length > 1 ? n.items[1] : C.head(n.items);
                  'file' === o.kind && -1 !== o.type.indexOf('image/')
                    ? (this.context.invoke('editor.insertImagesOrCallback', [
                        o.getAsFile(),
                      ]),
                      t.preventDefault())
                    : 'string' === o.kind &&
                      this.context.invoke(
                        'editor.isLimited',
                        n.getData('Text').length,
                      ) &&
                      t.preventDefault();
                } else if (window.clipboardData) {
                  var i = window.clipboardData.getData('text');
                  this.context.invoke('editor.isLimited', i.length) &&
                    t.preventDefault();
                }
                setTimeout(function () {
                  e.context.invoke('editor.afterCommand');
                }, 10);
              },
            },
          ]) && zt(e.prototype, n),
          o && zt(e, o),
          t
        );
      })();

      function Mt(t, e) {
        for (var n = 0; n < e.length; n++) {
          var o = e[n];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            'value' in o && (o.writable = !0),
            Object.defineProperty(t, o.key, o);
        }
      }
      var Ot = (function () {
        function t(e) {
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError('Cannot call a class as a function');
          })(this, t),
            (this.context = e),
            (this.$eventListener = i()(document)),
            (this.$editor = e.layoutInfo.editor),
            (this.$editable = e.layoutInfo.editable),
            (this.options = e.options),
            (this.lang = this.options.langInfo),
            (this.documentEventHandlers = {}),
            (this.$dropzone = i()(
              [
                '<div class="note-dropzone">',
                '<div class="note-dropzone-message"></div>',
                '</div>',
              ].join(''),
            ).prependTo(this.$editor));
        }
        var e, n, o;
        return (
          (e = t),
          (n = [
            {
              key: 'initialize',
              value: function () {
                this.options.disableDragAndDrop
                  ? ((this.documentEventHandlers.onDrop = function (t) {
                      t.preventDefault();
                    }),
                    (this.$eventListener = this.$dropzone),
                    this.$eventListener.on(
                      'drop',
                      this.documentEventHandlers.onDrop,
                    ))
                  : this.attachDragAndDropEvent();
              },
            },
            {
              key: 'attachDragAndDropEvent',
              value: function () {
                var t = this,
                  e = i()(),
                  n = this.$dropzone.find('.note-dropzone-message');
                (this.documentEventHandlers.onDragenter = function (o) {
                  var i = t.context.invoke('codeview.isActivated'),
                    r = t.$editor.width() > 0 && t.$editor.height() > 0;
                  i ||
                    e.length ||
                    !r ||
                    (t.$editor.addClass('dragover'),
                    t.$dropzone.width(t.$editor.width()),
                    t.$dropzone.height(t.$editor.height()),
                    n.text(t.lang.image.dragImageHere)),
                    (e = e.add(o.target));
                }),
                  (this.documentEventHandlers.onDragleave = function (n) {
                    ((e = e.not(n.target)).length &&
                      'BODY' !== n.target.nodeName) ||
                      ((e = i()()), t.$editor.removeClass('dragover'));
                  }),
                  (this.documentEventHandlers.onDrop = function () {
                    (e = i()()), t.$editor.removeClass('dragover');
                  }),
                  this.$eventListener
                    .on('dragenter', this.documentEventHandlers.onDragenter)
                    .on('dragleave', this.documentEventHandlers.onDragleave)
                    .on('drop', this.documentEventHandlers.onDrop),
                  this.$dropzone
                    .on('dragenter', function () {
                      t.$dropzone.addClass('hover'),
                        n.text(t.lang.image.dropImage);
                    })
                    .on('dragleave', function () {
                      t.$dropzone.removeClass('hover'),
                        n.text(t.lang.image.dragImageHere);
                    }),
                  this.$dropzone
                    .on('drop', function (e) {
                      var n = e.originalEvent.dataTransfer;
                      e.preventDefault(),
                        n && n.files && n.files.length
                          ? (t.$editable.focus(),
                            t.context.invoke(
                              'editor.insertImagesOrCallback',
                              n.files,
                            ))
                          : i.a.each(n.types, function (e, o) {
                              if (!(o.toLowerCase().indexOf('_moz_') > -1)) {
                                var r = n.getData(o);
                                o.toLowerCase().indexOf('text') > -1
                                  ? t.context.invoke('editor.pasteHTML', r)
                                  : i()(r).each(function (e, n) {
                                      t.context.invoke('editor.insertNode', n);
                                    });
                              }
                            });
                    })
                    .on('dragover', !1);
              },
            },
            {
              key: 'destroy',
              value: function () {
                var t = this;
                Object.keys(this.documentEventHandlers).forEach(function (e) {
                  t.$eventListener.off(
                    e.substr(2).toLowerCase(),
                    t.documentEventHandlers[e],
                  );
                }),
                  (this.documentEventHandlers = {});
              },
            },
          ]) && Mt(e.prototype, n),
          o && Mt(e, o),
          t
        );
      })();

      function jt(t) {
        if ('undefined' == typeof Symbol || null == t[Symbol.iterator]) {
          if (
            Array.isArray(t) ||
            (t = (function (t, e) {
              if (!t) return;
              if ('string' == typeof t) return Ut(t, e);
              var n = Object.prototype.toString.call(t).slice(8, -1);
              'Object' === n && t.constructor && (n = t.constructor.name);
              if ('Map' === n || 'Set' === n) return Array.from(n);
              if (
                'Arguments' === n ||
                /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
              )
                return Ut(t, e);
            })(t))
          ) {
            var e = 0,
              n = function () {};
            return {
              s: n,
              n: function () {
                return e >= t.length
                  ? {
                      done: !0,
                    }
                  : {
                      done: !1,
                      value: t[e++],
                    };
              },
              e: function (t) {
                throw t;
              },
              f: n,
            };
          }
          throw new TypeError(
            'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
          );
        }
        var o,
          i,
          r = !0,
          a = !1;
        return {
          s: function () {
            o = t[Symbol.iterator]();
          },
          n: function () {
            var t = o.next();
            return (r = t.done), t;
          },
          e: function (t) {
            (a = !0), (i = t);
          },
          f: function () {
            try {
              r || null == o.return || o.return();
            } finally {
              if (a) throw i;
            }
          },
        };
      }

      function Ut(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, o = new Array(e); n < e; n++) o[n] = t[n];
        return o;
      }

      function Wt(t, e) {
        for (var n = 0; n < e.length; n++) {
          var o = e[n];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            'value' in o && (o.writable = !0),
            Object.defineProperty(t, o.key, o);
        }
      }
      var Kt = (function () {
        function t(e) {
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError('Cannot call a class as a function');
          })(this, t),
            (this.context = e),
            (this.$editor = e.layoutInfo.editor),
            (this.$editable = e.layoutInfo.editable),
            (this.$codable = e.layoutInfo.codable),
            (this.options = e.options),
            (this.CodeMirrorConstructor = window.CodeMirror),
            this.options.codemirror.CodeMirrorConstructor &&
              (this.CodeMirrorConstructor =
                this.options.codemirror.CodeMirrorConstructor);
        }
        var e, n, o;
        return (
          (e = t),
          (n = [
            {
              key: 'sync',
              value: function (t) {
                var e = this.isActivated(),
                  n = this.CodeMirrorConstructor;
                e &&
                  (t
                    ? n
                      ? this.$codable.data('cmEditor').getDoc().setValue(t)
                      : this.$codable.val(t)
                    : n && this.$codable.data('cmEditor').save());
              },
            },
            {
              key: 'initialize',
              value: function () {
                var t = this;
                this.$codable.on('keyup', function (e) {
                  e.keyCode === xt.code.ESCAPE && t.deactivate();
                });
              },
            },
            {
              key: 'isActivated',
              value: function () {
                return this.$editor.hasClass('codeview');
              },
            },
            {
              key: 'toggle',
              value: function () {
                this.isActivated() ? this.deactivate() : this.activate(),
                  this.context.triggerEvent('codeview.toggled');
              },
            },
            {
              key: 'purify',
              value: function (t) {
                if (
                  this.options.codeviewFilter &&
                  ((t = t.replace(this.options.codeviewFilterRegex, '')),
                  this.options.codeviewIframeFilter)
                ) {
                  var e = this.options.codeviewIframeWhitelistSrc.concat(
                    this.options.codeviewIframeWhitelistSrcBase,
                  );
                  t = t.replace(
                    /(<iframe.*?>.*?(?:<\/iframe>)?)/gi,
                    function (t) {
                      if (
                        /<.+src(?==?('|"|\s)?)[\s\S]+src(?=('|"|\s)?)[^>]*?>/i.test(
                          t,
                        )
                      )
                        return '';
                      var n,
                        o = jt(e);
                      try {
                        for (o.s(); !(n = o.n()).done; ) {
                          var i = n.value;
                          if (
                            new RegExp(
                              'src="(https?:)?//' +
                                i.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&') +
                                '/(.+)"',
                            ).test(t)
                          )
                            return t;
                        }
                      } catch (t) {
                        o.e(t);
                      } finally {
                        o.f();
                      }
                      return '';
                    },
                  );
                }
                return t;
              },
            },
            {
              key: 'activate',
              value: function () {
                var t = this,
                  e = this.CodeMirrorConstructor;
                if (
                  (this.$codable.val(
                    pt.html(this.$editable, this.options.prettifyHtml),
                  ),
                  this.$codable.height(this.$editable.height()),
                  this.context.invoke('toolbar.updateCodeview', !0),
                  this.context.invoke('airPopover.updateCodeview', !0),
                  this.$editor.addClass('codeview'),
                  this.$codable.focus(),
                  e)
                ) {
                  var n = e.fromTextArea(
                    this.$codable[0],
                    this.options.codemirror,
                  );
                  if (this.options.codemirror.tern) {
                    var o = new e.TernServer(this.options.codemirror.tern);
                    (n.ternServer = o),
                      n.on('cursorActivity', function (t) {
                        o.updateArgHints(t);
                      });
                  }
                  n.on('blur', function (e) {
                    t.context.triggerEvent('blur.codeview', n.getValue(), e);
                  }),
                    n.on('change', function () {
                      t.context.triggerEvent(
                        'change.codeview',
                        n.getValue(),
                        n,
                      );
                    }),
                    n.setSize(null, this.$editable.outerHeight()),
                    this.$codable.data('cmEditor', n);
                } else
                  this.$codable.on('blur', function (e) {
                    t.context.triggerEvent(
                      'blur.codeview',
                      t.$codable.val(),
                      e,
                    );
                  }),
                    this.$codable.on('input', function () {
                      t.context.triggerEvent(
                        'change.codeview',
                        t.$codable.val(),
                        t.$codable,
                      );
                    });
              },
            },
            {
              key: 'deactivate',
              value: function () {
                if (this.CodeMirrorConstructor) {
                  var t = this.$codable.data('cmEditor');
                  this.$codable.val(t.getValue()), t.toTextArea();
                }
                var e = this.purify(
                    pt.value(this.$codable, this.options.prettifyHtml) ||
                      pt.emptyPara,
                  ),
                  n = this.$editable.html() !== e;
                this.$editable.html(e),
                  this.$editable.height(
                    this.options.height ? this.$codable.height() : 'auto',
                  ),
                  this.$editor.removeClass('codeview'),
                  n &&
                    this.context.triggerEvent(
                      'change',
                      this.$editable.html(),
                      this.$editable,
                    ),
                  this.$editable.focus(),
                  this.context.invoke('toolbar.updateCodeview', !1),
                  this.context.invoke('airPopover.updateCodeview', !1);
              },
            },
            {
              key: 'destroy',
              value: function () {
                this.isActivated() && this.deactivate();
              },
            },
          ]) && Wt(e.prototype, n),
          o && Wt(e, o),
          t
        );
      })();

      function qt(t, e) {
        for (var n = 0; n < e.length; n++) {
          var o = e[n];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            'value' in o && (o.writable = !0),
            Object.defineProperty(t, o.key, o);
        }
      }
      var Vt = (function () {
        function t(e) {
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError('Cannot call a class as a function');
          })(this, t),
            (this.$document = i()(document)),
            (this.$statusbar = e.layoutInfo.statusbar),
            (this.$editable = e.layoutInfo.editable),
            (this.options = e.options);
        }
        var e, n, o;
        return (
          (e = t),
          (n = [
            {
              key: 'initialize',
              value: function () {
                var t = this;
                this.options.airMode || this.options.disableResizeEditor
                  ? this.destroy()
                  : this.$statusbar.on('mousedown', function (e) {
                      e.preventDefault(), e.stopPropagation();
                      var n =
                          t.$editable.offset().top - t.$document.scrollTop(),
                        o = function (e) {
                          var o = e.clientY - (n + 24);
                          (o =
                            t.options.minheight > 0
                              ? Math.max(o, t.options.minheight)
                              : o),
                            (o =
                              t.options.maxHeight > 0
                                ? Math.min(o, t.options.maxHeight)
                                : o),
                            t.$editable.height(o);
                        };
                      t.$document
                        .on('mousemove', o)
                        .one('mouseup', function () {
                          t.$document.off('mousemove', o);
                        });
                    });
              },
            },
            {
              key: 'destroy',
              value: function () {
                this.$statusbar.off(), this.$statusbar.addClass('locked');
              },
            },
          ]) && qt(e.prototype, n),
          o && qt(e, o),
          t
        );
      })();

      function _t(t, e) {
        for (var n = 0; n < e.length; n++) {
          var o = e[n];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            'value' in o && (o.writable = !0),
            Object.defineProperty(t, o.key, o);
        }
      }
      var Gt = (function () {
        function t(e) {
          var n = this;
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError('Cannot call a class as a function');
          })(this, t),
            (this.context = e),
            (this.$editor = e.layoutInfo.editor),
            (this.$toolbar = e.layoutInfo.toolbar),
            (this.$editable = e.layoutInfo.editable),
            (this.$codable = e.layoutInfo.codable),
            (this.$window = i()(window)),
            (this.$scrollbar = i()('html, body')),
            (this.onResize = function () {
              n.resizeTo({
                h: n.$window.height() - n.$toolbar.outerHeight(),
              });
            });
        }
        var e, n, o;
        return (
          (e = t),
          (n = [
            {
              key: 'resizeTo',
              value: function (t) {
                this.$editable.css('height', t.h),
                  this.$codable.css('height', t.h),
                  this.$codable.data('cmeditor') &&
                    this.$codable.data('cmeditor').setsize(null, t.h);
              },
            },
            {
              key: 'toggle',
              value: function () {
                this.$editor.toggleClass('fullscreen'),
                  this.isFullscreen()
                    ? (this.$editable.data(
                        'orgHeight',
                        this.$editable.css('height'),
                      ),
                      this.$editable.data(
                        'orgMaxHeight',
                        this.$editable.css('maxHeight'),
                      ),
                      this.$editable.css('maxHeight', ''),
                      this.$window
                        .on('resize', this.onResize)
                        .trigger('resize'),
                      this.$scrollbar.css('overflow', 'hidden'))
                    : (this.$window.off('resize', this.onResize),
                      this.resizeTo({
                        h: this.$editable.data('orgHeight'),
                      }),
                      this.$editable.css(
                        'maxHeight',
                        this.$editable.css('orgMaxHeight'),
                      ),
                      this.$scrollbar.css('overflow', 'visible')),
                  this.context.invoke(
                    'toolbar.updateFullscreen',
                    this.isFullscreen(),
                  );
              },
            },
            {
              key: 'isFullscreen',
              value: function () {
                return this.$editor.hasClass('fullscreen');
              },
            },
          ]) && _t(e.prototype, n),
          o && _t(e, o),
          t
        );
      })();

      function Yt(t, e) {
        for (var n = 0; n < e.length; n++) {
          var o = e[n];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            'value' in o && (o.writable = !0),
            Object.defineProperty(t, o.key, o);
        }
      }
      var Zt = (function () {
        function t(e) {
          var n = this;
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError('Cannot call a class as a function');
          })(this, t),
            (this.context = e),
            (this.$document = i()(document)),
            (this.$editingArea = e.layoutInfo.editingArea),
            (this.options = e.options),
            (this.lang = this.options.langInfo),
            (this.events = {
              'summernote.mousedown': function (t, e) {
                n.update(e.target, e) && e.preventDefault();
              },
              'summernote.keyup summernote.scroll summernote.change summernote.dialog.shown':
                function () {
                  n.update();
                },
              'summernote.disable summernote.blur': function () {
                n.hide();
              },
              'summernote.codeview.toggled': function () {
                n.update();
              },
            });
        }
        var e, n, o;
        return (
          (e = t),
          (n = [
            {
              key: 'initialize',
              value: function () {
                var t = this;
                (this.$handle = i()(
                  [
                    '<div class="note-handle">',
                    '<div class="note-control-selection">',
                    '<div class="note-control-selection-bg"></div>',
                    '<div class="note-control-holder note-control-nw"></div>',
                    '<div class="note-control-holder note-control-ne"></div>',
                    '<div class="note-control-holder note-control-sw"></div>',
                    '<div class="',
                    this.options.disableResizeImage
                      ? 'note-control-holder'
                      : 'note-control-sizing',
                    ' note-control-se"></div>',
                    this.options.disableResizeImage
                      ? ''
                      : '<div class="note-control-selection-info"></div>',
                    '</div>',
                    '</div>',
                  ].join(''),
                ).prependTo(this.$editingArea)),
                  this.$handle.on('mousedown', function (e) {
                    if (pt.isControlSizing(e.target)) {
                      e.preventDefault(), e.stopPropagation();
                      var n = t.$handle
                          .find('.note-control-selection')
                          .data('target'),
                        o = n.offset(),
                        i = t.$document.scrollTop(),
                        r = function (e) {
                          t.context.invoke(
                            'editor.resizeTo',
                            {
                              x: e.clientX - o.left,
                              y: e.clientY - (o.top - i),
                            },
                            n,
                            !e.shiftKey,
                          ),
                            t.update(n[0], e);
                        };
                      t.$document
                        .on('mousemove', r)
                        .one('mouseup', function (e) {
                          e.preventDefault(),
                            t.$document.off('mousemove', r),
                            t.context.invoke('editor.afterCommand');
                        }),
                        n.data('ratio') ||
                          n.data('ratio', n.height() / n.width());
                    }
                  }),
                  this.$handle.on('wheel', function (e) {
                    e.preventDefault(), t.update();
                  });
              },
            },
            {
              key: 'destroy',
              value: function () {
                this.$handle.remove();
              },
            },
            {
              key: 'update',
              value: function (t, e) {
                if (this.context.isDisabled()) return !1;
                var n = pt.isImg(t),
                  o = this.$handle.find('.note-control-selection');
                if ((this.context.invoke('imagePopover.update', t, e), n)) {
                  var r = i()(t),
                    a = r.position(),
                    s = {
                      left: a.left + parseInt(r.css('marginLeft'), 10),
                      top: a.top + parseInt(r.css('marginTop'), 10),
                    },
                    l = {
                      w: r.outerWidth(!1),
                      h: r.outerHeight(!1),
                    };
                  o.css({
                    display: 'block',
                    left: s.left,
                    top: s.top,
                    width: l.w,
                    height: l.h,
                  }).data('target', r);
                  var c = new Image();
                  c.src = r.attr('src');
                  var u =
                    l.w +
                    'x' +
                    l.h +
                    ' (' +
                    this.lang.image.original +
                    ': ' +
                    c.width +
                    'x' +
                    c.height +
                    ')';
                  o.find('.note-control-selection-info').text(u),
                    this.context.invoke('editor.saveTarget', t);
                } else this.hide();
                return n;
              },
            },
            {
              key: 'hide',
              value: function () {
                this.context.invoke('editor.clearTarget'),
                  this.$handle.children().hide();
              },
            },
          ]) && Yt(e.prototype, n),
          o && Yt(e, o),
          t
        );
      })();

      function Xt(t, e) {
        for (var n = 0; n < e.length; n++) {
          var o = e[n];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            'value' in o && (o.writable = !0),
            Object.defineProperty(t, o.key, o);
        }
      }
      var Qt =
          /^([A-Za-z][A-Za-z0-9+-.]*\:[\/]{2}|tel:|mailto:[A-Z0-9._%+-]+@)?(www\.)?(.+)$/i,
        Jt = (function () {
          function t(e) {
            var n = this;
            !(function (t, e) {
              if (!(t instanceof e))
                throw new TypeError('Cannot call a class as a function');
            })(this, t),
              (this.context = e),
              (this.options = e.options),
              (this.events = {
                'summernote.keyup': function (t, e) {
                  e.isDefaultPrevented() || n.handleKeyup(e);
                },
                'summernote.keydown': function (t, e) {
                  n.handleKeydown(e);
                },
              });
          }
          var e, n, o;
          return (
            (e = t),
            (n = [
              {
                key: 'initialize',
                value: function () {
                  this.lastWordRange = null;
                },
              },
              {
                key: 'destroy',
                value: function () {
                  this.lastWordRange = null;
                },
              },
              {
                key: 'replace',
                value: function () {
                  if (this.lastWordRange) {
                    var t = this.lastWordRange.toString(),
                      e = t.match(Qt);
                    if (e && (e[1] || e[2])) {
                      var n = e[1] ? t : 'http://' + t,
                        o = this.options.showDomainOnlyForAutolink
                          ? t
                              .replace(
                                /^(?:https?:\/\/)?(?:tel?:?)?(?:mailto?:?)?(?:www\.)?/i,
                                '',
                              )
                              .split('/')[0]
                          : t,
                        r = i()('<a />').html(o).attr('href', n)[0];
                      this.context.options.linkTargetBlank &&
                        i()(r).attr('target', '_blank'),
                        this.lastWordRange.insertNode(r),
                        (this.lastWordRange = null),
                        this.context.invoke('editor.focus');
                    }
                  }
                },
              },
              {
                key: 'handleKeydown',
                value: function (t) {
                  if (C.contains([xt.code.ENTER, xt.code.SPACE], t.keyCode)) {
                    var e = this.context
                      .invoke('editor.createRange')
                      .getWordRange();
                    this.lastWordRange = e;
                  }
                },
              },
              {
                key: 'handleKeyup',
                value: function (t) {
                  C.contains([xt.code.ENTER, xt.code.SPACE], t.keyCode) &&
                    this.replace();
                },
              },
            ]) && Xt(e.prototype, n),
            o && Xt(e, o),
            t
          );
        })();

      function te(t, e) {
        for (var n = 0; n < e.length; n++) {
          var o = e[n];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            'value' in o && (o.writable = !0),
            Object.defineProperty(t, o.key, o);
        }
      }
      var ee = (function () {
        function t(e) {
          var n = this;
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError('Cannot call a class as a function');
          })(this, t),
            (this.$note = e.layoutInfo.note),
            (this.events = {
              'summernote.change': function () {
                n.$note.val(e.invoke('code'));
              },
            });
        }
        var e, n, o;
        return (
          (e = t),
          (n = [
            {
              key: 'shouldInitialize',
              value: function () {
                return pt.isTextarea(this.$note[0]);
              },
            },
          ]) && te(e.prototype, n),
          o && te(e, o),
          t
        );
      })();

      function ne(t, e) {
        for (var n = 0; n < e.length; n++) {
          var o = e[n];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            'value' in o && (o.writable = !0),
            Object.defineProperty(t, o.key, o);
        }
      }
      var oe = (function () {
        function t(e) {
          var n = this;
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError('Cannot call a class as a function');
          })(this, t),
            (this.context = e),
            (this.options = e.options.replace || {}),
            (this.keys = [
              xt.code.ENTER,
              xt.code.SPACE,
              xt.code.PERIOD,
              xt.code.COMMA,
              xt.code.SEMICOLON,
              xt.code.SLASH,
            ]),
            (this.previousKeydownCode = null),
            (this.events = {
              'summernote.keyup': function (t, e) {
                e.isDefaultPrevented() || n.handleKeyup(e);
              },
              'summernote.keydown': function (t, e) {
                n.handleKeydown(e);
              },
            });
        }
        var e, n, o;
        return (
          (e = t),
          (n = [
            {
              key: 'shouldInitialize',
              value: function () {
                return !!this.options.match;
              },
            },
            {
              key: 'initialize',
              value: function () {
                this.lastWord = null;
              },
            },
            {
              key: 'destroy',
              value: function () {
                this.lastWord = null;
              },
            },
            {
              key: 'replace',
              value: function () {
                if (this.lastWord) {
                  var t = this,
                    e = this.lastWord.toString();
                  this.options.match(e, function (e) {
                    if (e) {
                      var n = '';
                      if (
                        ('string' == typeof e
                          ? (n = pt.createText(e))
                          : e instanceof jQuery
                            ? (n = e[0])
                            : e instanceof Node && (n = e),
                        !n)
                      )
                        return;
                      t.lastWord.insertNode(n),
                        (t.lastWord = null),
                        t.context.invoke('editor.focus');
                    }
                  });
                }
              },
            },
            {
              key: 'handleKeydown',
              value: function (t) {
                if (
                  this.previousKeydownCode &&
                  C.contains(this.keys, this.previousKeydownCode)
                )
                  this.previousKeydownCode = t.keyCode;
                else {
                  if (C.contains(this.keys, t.keyCode)) {
                    var e = this.context
                      .invoke('editor.createRange')
                      .getWordRange();
                    this.lastWord = e;
                  }
                  this.previousKeydownCode = t.keyCode;
                }
              },
            },
            {
              key: 'handleKeyup',
              value: function (t) {
                C.contains(this.keys, t.keyCode) && this.replace();
              },
            },
          ]) && ne(e.prototype, n),
          o && ne(e, o),
          t
        );
      })();

      function ie(t, e) {
        for (var n = 0; n < e.length; n++) {
          var o = e[n];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            'value' in o && (o.writable = !0),
            Object.defineProperty(t, o.key, o);
        }
      }
      var re = (function () {
        function t(e) {
          var n = this;
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError('Cannot call a class as a function');
          })(this, t),
            (this.context = e),
            (this.$editingArea = e.layoutInfo.editingArea),
            (this.options = e.options),
            !0 === this.options.inheritPlaceholder &&
              (this.options.placeholder =
                this.context.$note.attr('placeholder') ||
                this.options.placeholder),
            (this.events = {
              'summernote.init summernote.change': function () {
                n.update();
              },
              'summernote.codeview.toggled': function () {
                n.update();
              },
            });
        }
        var e, n, o;
        return (
          (e = t),
          (n = [
            {
              key: 'shouldInitialize',
              value: function () {
                return !!this.options.placeholder;
              },
            },
            {
              key: 'initialize',
              value: function () {
                var t = this;
                (this.$placeholder = i()('<div class="note-placeholder">')),
                  this.$placeholder
                    .on('click', function () {
                      t.context.invoke('focus');
                    })
                    .html(this.options.placeholder)
                    .prependTo(this.$editingArea),
                  this.update();
              },
            },
            {
              key: 'destroy',
              value: function () {
                this.$placeholder.remove();
              },
            },
            {
              key: 'update',
              value: function () {
                var t =
                  !this.context.invoke('codeview.isActivated') &&
                  this.context.invoke('editor.isEmpty');
                this.$placeholder.toggle(t);
              },
            },
          ]) && ie(e.prototype, n),
          o && ie(e, o),
          t
        );
      })();

      function ae(t, e) {
        for (var n = 0; n < e.length; n++) {
          var o = e[n];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            'value' in o && (o.writable = !0),
            Object.defineProperty(t, o.key, o);
        }
      }
      var se = (function () {
        function t(e) {
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError('Cannot call a class as a function');
          })(this, t),
            (this.ui = i.a.summernote.ui),
            (this.context = e),
            (this.$toolbar = e.layoutInfo.toolbar),
            (this.options = e.options),
            (this.lang = this.options.langInfo),
            (this.invertedKeyMap = g.invertObject(
              this.options.keyMap[m.isMac ? 'mac' : 'pc'],
            ));
        }
        var e, n, o;
        return (
          (e = t),
          (n = [
            {
              key: 'representShortcut',
              value: function (t) {
                var e = this.invertedKeyMap[t];
                return this.options.shortcuts && e
                  ? (m.isMac &&
                      (e = e.replace('CMD', '⌘').replace('SHIFT', '⇧')),
                    ' (' +
                      (e = e
                        .replace('BACKSLASH', '\\')
                        .replace('SLASH', '/')
                        .replace('LEFTBRACKET', '[')
                        .replace('RIGHTBRACKET', ']')) +
                      ')')
                  : '';
              },
            },
            {
              key: 'button',
              value: function (t) {
                return (
                  !this.options.tooltip && t.tooltip && delete t.tooltip,
                  (t.container = this.options.container),
                  this.ui.button(t)
                );
              },
            },
            {
              key: 'initialize',
              value: function () {
                this.addToolbarButtons(),
                  this.addImagePopoverButtons(),
                  this.addLinkPopoverButtons(),
                  this.addTablePopoverButtons(),
                  (this.fontInstalledMap = {});
              },
            },
            {
              key: 'destroy',
              value: function () {
                delete this.fontInstalledMap;
              },
            },
            {
              key: 'isFontInstalled',
              value: function (t) {
                return (
                  Object.prototype.hasOwnProperty.call(
                    this.fontInstalledMap,
                    t,
                  ) ||
                    (this.fontInstalledMap[t] =
                      m.isFontInstalled(t) ||
                      C.contains(this.options.fontNamesIgnoreCheck, t)),
                  this.fontInstalledMap[t]
                );
              },
            },
            {
              key: 'isFontDeservedToAdd',
              value: function (t) {
                return (
                  '' !== (t = t.toLowerCase()) &&
                  this.isFontInstalled(t) &&
                  -1 === m.genericFontFamilies.indexOf(t)
                );
              },
            },
            {
              key: 'colorPalette',
              value: function (t, e, n, o) {
                var r = this;
                return this.ui
                  .buttonGroup({
                    className: 'note-color ' + t,
                    children: [
                      this.button({
                        className: 'note-current-color-button',
                        contents: this.ui.icon(
                          this.options.icons.font + ' note-recent-color',
                        ),
                        tooltip: e,
                        click: function (t) {
                          var e = i()(t.currentTarget);
                          n && o
                            ? r.context.invoke('editor.color', {
                                backColor: e.attr('data-backColor'),
                                foreColor: e.attr('data-foreColor'),
                              })
                            : n
                              ? r.context.invoke('editor.color', {
                                  backColor: e.attr('data-backColor'),
                                })
                              : o &&
                                r.context.invoke('editor.color', {
                                  foreColor: e.attr('data-foreColor'),
                                });
                        },
                        callback: function (t) {
                          var e = t.find('.note-recent-color');
                          n &&
                            (e.css(
                              'background-color',
                              r.options.colorButton.backColor,
                            ),
                            t.attr(
                              'data-backColor',
                              r.options.colorButton.backColor,
                            )),
                            o
                              ? (e.css(
                                  'color',
                                  r.options.colorButton.foreColor,
                                ),
                                t.attr(
                                  'data-foreColor',
                                  r.options.colorButton.foreColor,
                                ))
                              : e.css('color', 'transparent');
                        },
                      }),
                      this.button({
                        className: 'dropdown-toggle',
                        contents: this.ui.dropdownButtonContents(
                          '',
                          this.options,
                        ),
                        tooltip: this.lang.color.more,
                        data: {
                          toggle: 'dropdown',
                        },
                      }),
                      this.ui.dropdown({
                        items:
                          (n
                            ? [
                                '<div class="note-palette">',
                                '<div class="note-palette-title">' +
                                  this.lang.color.background +
                                  '</div>',
                                '<div>',
                                '<button type="button" class="note-color-reset btn btn-light btn-default" data-event="backColor" data-value="transparent">',
                                this.lang.color.transparent,
                                '</button>',
                                '</div>',
                                '<div class="note-holder" data-event="backColor">\x3c!-- back colors --\x3e</div>',
                                '<div>',
                                '<button type="button" class="note-color-select btn btn-light btn-default" data-event="openPalette" data-value="backColorPicker">',
                                this.lang.color.cpSelect,
                                '</button>',
                                '<input type="color" id="backColorPicker" class="note-btn note-color-select-btn" value="' +
                                  this.options.colorButton.backColor +
                                  '" data-event="backColorPalette">',
                                '</div>',
                                '<div class="note-holder-custom" id="backColorPalette" data-event="backColor"></div>',
                                '</div>',
                              ].join('')
                            : '') +
                          (o
                            ? [
                                '<div class="note-palette">',
                                '<div class="note-palette-title">' +
                                  this.lang.color.foreground +
                                  '</div>',
                                '<div>',
                                '<button type="button" class="note-color-reset btn btn-light btn-default" data-event="removeFormat" data-value="foreColor">',
                                this.lang.color.resetToDefault,
                                '</button>',
                                '</div>',
                                '<div class="note-holder" data-event="foreColor">\x3c!-- fore colors --\x3e</div>',
                                '<div>',
                                '<button type="button" class="note-color-select btn btn-light btn-default" data-event="openPalette" data-value="foreColorPicker">',
                                this.lang.color.cpSelect,
                                '</button>',
                                '<input type="color" id="foreColorPicker" class="note-btn note-color-select-btn" value="' +
                                  this.options.colorButton.foreColor +
                                  '" data-event="foreColorPalette">',
                                '</div>',
                                '<div class="note-holder-custom" id="foreColorPalette" data-event="foreColor"></div>',
                                '</div>',
                              ].join('')
                            : ''),
                        callback: function (t) {
                          t.find('.note-holder').each(function (t, e) {
                            var n = i()(e);
                            n.append(
                              r.ui
                                .palette({
                                  colors: r.options.colors,
                                  colorsName: r.options.colorsName,
                                  eventName: n.data('event'),
                                  container: r.options.container,
                                  tooltip: r.options.tooltip,
                                })
                                .render(),
                            );
                          });
                          var e = [
                            [
                              '#FFFFFF',
                              '#FFFFFF',
                              '#FFFFFF',
                              '#FFFFFF',
                              '#FFFFFF',
                              '#FFFFFF',
                              '#FFFFFF',
                              '#FFFFFF',
                            ],
                          ];
                          t.find('.note-holder-custom').each(function (t, n) {
                            var o = i()(n);
                            o.append(
                              r.ui
                                .palette({
                                  colors: e,
                                  colorsName: e,
                                  eventName: o.data('event'),
                                  container: r.options.container,
                                  tooltip: r.options.tooltip,
                                })
                                .render(),
                            );
                          }),
                            t.find('input[type=color]').each(function (e, n) {
                              i()(n).change(function () {
                                var e = t
                                    .find('#' + i()(this).data('event'))
                                    .find('.note-color-btn')
                                    .first(),
                                  n = this.value.toUpperCase();
                                e
                                  .css('background-color', n)
                                  .attr('aria-label', n)
                                  .attr('data-value', n)
                                  .attr('data-original-title', n),
                                  e.click();
                              });
                            });
                        },
                        click: function (e) {
                          e.stopPropagation();
                          var n = i()('.' + t).find('.note-dropdown-menu'),
                            o = i()(e.target),
                            a = o.data('event'),
                            s = o.attr('data-value');
                          if ('openPalette' === a) {
                            var l = n.find('#' + s),
                              c = i()(
                                n
                                  .find('#' + l.data('event'))
                                  .find('.note-color-row')[0],
                              ),
                              u = c.find('.note-color-btn').last().detach(),
                              d = l.val();
                            u
                              .css('background-color', d)
                              .attr('aria-label', d)
                              .attr('data-value', d)
                              .attr('data-original-title', d),
                              c.prepend(u),
                              l.click();
                          } else {
                            if (C.contains(['backColor', 'foreColor'], a)) {
                              var h =
                                  'backColor' === a
                                    ? 'background-color'
                                    : 'color',
                                f = o
                                  .closest('.note-color')
                                  .find('.note-recent-color'),
                                p = o
                                  .closest('.note-color')
                                  .find('.note-current-color-button');
                              f.css(h, s), p.attr('data-' + a, s);
                            }
                            r.context.invoke('editor.' + a, s);
                          }
                        },
                      }),
                    ],
                  })
                  .render();
              },
            },
            {
              key: 'addToolbarButtons',
              value: function () {
                var t = this;
                this.context.memo('button.style', function () {
                  return t.ui
                    .buttonGroup([
                      t.button({
                        className: 'dropdown-toggle',
                        contents: t.ui.dropdownButtonContents(
                          t.ui.icon(t.options.icons.magic),
                          t.options,
                        ),
                        tooltip: t.lang.style.style,
                        data: {
                          toggle: 'dropdown',
                        },
                      }),
                      t.ui.dropdown({
                        className: 'dropdown-style',
                        items: t.options.styleTags,
                        title: t.lang.style.style,
                        template: function (e) {
                          'string' == typeof e &&
                            (e = {
                              tag: e,
                              title: Object.prototype.hasOwnProperty.call(
                                t.lang.style,
                                e,
                              )
                                ? t.lang.style[e]
                                : e,
                            });
                          var n = e.tag,
                            o = e.title;
                          return (
                            '<' +
                            n +
                            (e.style ? ' style="' + e.style + '" ' : '') +
                            (e.className
                              ? ' class="' + e.className + '"'
                              : '') +
                            '>' +
                            o +
                            '</' +
                            n +
                            '>'
                          );
                        },
                        click:
                          t.context.createInvokeHandler('editor.formatBlock'),
                      }),
                    ])
                    .render();
                });
                for (
                  var e = function (e, n) {
                      var o = t.options.styleTags[e];
                      t.context.memo('button.style.' + o, function () {
                        return t
                          .button({
                            className: 'note-btn-style-' + o,
                            contents:
                              '<div data-value="' +
                              o +
                              '">' +
                              o.toUpperCase() +
                              '</div>',
                            tooltip: t.lang.style[o],
                            click:
                              t.context.createInvokeHandler(
                                'editor.formatBlock',
                              ),
                          })
                          .render();
                      });
                    },
                    n = 0,
                    o = this.options.styleTags.length;
                  n < o;
                  n++
                )
                  e(n);
                this.context.memo('button.bold', function () {
                  return t
                    .button({
                      className: 'note-btn-bold',
                      contents: t.ui.icon(t.options.icons.bold),
                      tooltip: t.lang.font.bold + t.representShortcut('bold'),
                      click:
                        t.context.createInvokeHandlerAndUpdateState(
                          'editor.bold',
                        ),
                    })
                    .render();
                }),
                  this.context.memo('button.italic', function () {
                    return t
                      .button({
                        className: 'note-btn-italic',
                        contents: t.ui.icon(t.options.icons.italic),
                        tooltip:
                          t.lang.font.italic + t.representShortcut('italic'),
                        click:
                          t.context.createInvokeHandlerAndUpdateState(
                            'editor.italic',
                          ),
                      })
                      .render();
                  }),
                  this.context.memo('button.underline', function () {
                    return t
                      .button({
                        className: 'note-btn-underline',
                        contents: t.ui.icon(t.options.icons.underline),
                        tooltip:
                          t.lang.font.underline +
                          t.representShortcut('underline'),
                        click:
                          t.context.createInvokeHandlerAndUpdateState(
                            'editor.underline',
                          ),
                      })
                      .render();
                  }),
                  this.context.memo('button.clear', function () {
                    return t
                      .button({
                        contents: t.ui.icon(t.options.icons.eraser),
                        tooltip:
                          t.lang.font.clear +
                          t.representShortcut('removeFormat'),
                        click: t.context.createInvokeHandler(
                          'editor.removeFormat',
                        ),
                      })
                      .render();
                  }),
                  this.context.memo('button.strikethrough', function () {
                    return t
                      .button({
                        className: 'note-btn-strikethrough',
                        contents: t.ui.icon(t.options.icons.strikethrough),
                        tooltip:
                          t.lang.font.strikethrough +
                          t.representShortcut('strikethrough'),
                        click: t.context.createInvokeHandlerAndUpdateState(
                          'editor.strikethrough',
                        ),
                      })
                      .render();
                  }),
                  this.context.memo('button.superscript', function () {
                    return t
                      .button({
                        className: 'note-btn-superscript',
                        contents: t.ui.icon(t.options.icons.superscript),
                        tooltip: t.lang.font.superscript,
                        click:
                          t.context.createInvokeHandlerAndUpdateState(
                            'editor.superscript',
                          ),
                      })
                      .render();
                  }),
                  this.context.memo('button.subscript', function () {
                    return t
                      .button({
                        className: 'note-btn-subscript',
                        contents: t.ui.icon(t.options.icons.subscript),
                        tooltip: t.lang.font.subscript,
                        click:
                          t.context.createInvokeHandlerAndUpdateState(
                            'editor.subscript',
                          ),
                      })
                      .render();
                  }),
                  this.context.memo('button.fontname', function () {
                    var e = t.context.invoke('editor.currentStyle');
                    return (
                      t.options.addDefaultFonts &&
                        i.a.each(e['font-family'].split(','), function (e, n) {
                          (n = n.trim().replace(/['"]+/g, '')),
                            t.isFontDeservedToAdd(n) &&
                              -1 === t.options.fontNames.indexOf(n) &&
                              t.options.fontNames.push(n);
                        }),
                      t.ui
                        .buttonGroup([
                          t.button({
                            className: 'dropdown-toggle',
                            contents: t.ui.dropdownButtonContents(
                              '<span class="note-current-fontname"></span>',
                              t.options,
                            ),
                            tooltip: t.lang.font.name,
                            data: {
                              toggle: 'dropdown',
                            },
                          }),
                          t.ui.dropdownCheck({
                            className: 'dropdown-fontname',
                            checkClassName: t.options.icons.menuCheck,
                            items: t.options.fontNames.filter(
                              t.isFontInstalled.bind(t),
                            ),
                            title: t.lang.font.name,
                            template: function (t) {
                              return (
                                '<span style="font-family: ' +
                                m.validFontName(t) +
                                '">' +
                                t +
                                '</span>'
                              );
                            },
                            click:
                              t.context.createInvokeHandlerAndUpdateState(
                                'editor.fontName',
                              ),
                          }),
                        ])
                        .render()
                    );
                  }),
                  this.context.memo('button.fontsize', function () {
                    return t.ui
                      .buttonGroup([
                        t.button({
                          className: 'dropdown-toggle',
                          contents: t.ui.dropdownButtonContents(
                            '<span class="note-current-fontsize"></span>',
                            t.options,
                          ),
                          tooltip: t.lang.font.size,
                          data: {
                            toggle: 'dropdown',
                          },
                        }),
                        t.ui.dropdownCheck({
                          className: 'dropdown-fontsize',
                          checkClassName: t.options.icons.menuCheck,
                          items: t.options.fontSizes,
                          title: t.lang.font.size,
                          click:
                            t.context.createInvokeHandlerAndUpdateState(
                              'editor.fontSize',
                            ),
                        }),
                      ])
                      .render();
                  }),
                  this.context.memo('button.fontsizeunit', function () {
                    return t.ui
                      .buttonGroup([
                        t.button({
                          className: 'dropdown-toggle',
                          contents: t.ui.dropdownButtonContents(
                            '<span class="note-current-fontsizeunit"></span>',
                            t.options,
                          ),
                          tooltip: t.lang.font.sizeunit,
                          data: {
                            toggle: 'dropdown',
                          },
                        }),
                        t.ui.dropdownCheck({
                          className: 'dropdown-fontsizeunit',
                          checkClassName: t.options.icons.menuCheck,
                          items: t.options.fontSizeUnits,
                          title: t.lang.font.sizeunit,
                          click: t.context.createInvokeHandlerAndUpdateState(
                            'editor.fontSizeUnit',
                          ),
                        }),
                      ])
                      .render();
                  }),
                  this.context.memo('button.color', function () {
                    return t.colorPalette(
                      'note-color-all',
                      t.lang.color.recent,
                      !0,
                      !0,
                    );
                  }),
                  this.context.memo('button.forecolor', function () {
                    return t.colorPalette(
                      'note-color-fore',
                      t.lang.color.foreground,
                      !1,
                      !0,
                    );
                  }),
                  this.context.memo('button.backcolor', function () {
                    return t.colorPalette(
                      'note-color-back',
                      t.lang.color.background,
                      !0,
                      !1,
                    );
                  }),
                  this.context.memo('button.ul', function () {
                    return t
                      .button({
                        contents: t.ui.icon(t.options.icons.unorderedlist),
                        tooltip:
                          t.lang.lists.unordered +
                          t.representShortcut('insertUnorderedList'),
                        click: t.context.createInvokeHandler(
                          'editor.insertUnorderedList',
                        ),
                      })
                      .render();
                  }),
                  this.context.memo('button.ol', function () {
                    return t
                      .button({
                        contents: t.ui.icon(t.options.icons.orderedlist),
                        tooltip:
                          t.lang.lists.ordered +
                          t.representShortcut('insertOrderedList'),
                        click: t.context.createInvokeHandler(
                          'editor.insertOrderedList',
                        ),
                      })
                      .render();
                  });
                var r = this.button({
                    contents: this.ui.icon(this.options.icons.alignLeft),
                    tooltip:
                      this.lang.paragraph.left +
                      this.representShortcut('justifyLeft'),
                    click:
                      this.context.createInvokeHandler('editor.justifyLeft'),
                  }),
                  a = this.button({
                    contents: this.ui.icon(this.options.icons.alignCenter),
                    tooltip:
                      this.lang.paragraph.center +
                      this.representShortcut('justifyCenter'),
                    click: this.context.createInvokeHandler(
                      'editor.justifyCenter',
                    ),
                  }),
                  s = this.button({
                    contents: this.ui.icon(this.options.icons.alignRight),
                    tooltip:
                      this.lang.paragraph.right +
                      this.representShortcut('justifyRight'),
                    click: this.context.createInvokeHandler(
                      'editor.justifyRight',
                    ),
                  }),
                  l = this.button({
                    contents: this.ui.icon(this.options.icons.alignJustify),
                    tooltip:
                      this.lang.paragraph.justify +
                      this.representShortcut('justifyFull'),
                    click:
                      this.context.createInvokeHandler('editor.justifyFull'),
                  }),
                  c = this.button({
                    contents: this.ui.icon(this.options.icons.outdent),
                    tooltip:
                      this.lang.paragraph.outdent +
                      this.representShortcut('outdent'),
                    click: this.context.createInvokeHandler('editor.outdent'),
                  }),
                  u = this.button({
                    contents: this.ui.icon(this.options.icons.indent),
                    tooltip:
                      this.lang.paragraph.indent +
                      this.representShortcut('indent'),
                    click: this.context.createInvokeHandler('editor.indent'),
                  });
                this.context.memo('button.justifyLeft', g.invoke(r, 'render')),
                  this.context.memo(
                    'button.justifyCenter',
                    g.invoke(a, 'render'),
                  ),
                  this.context.memo(
                    'button.justifyRight',
                    g.invoke(s, 'render'),
                  ),
                  this.context.memo(
                    'button.justifyFull',
                    g.invoke(l, 'render'),
                  ),
                  this.context.memo('button.outdent', g.invoke(c, 'render')),
                  this.context.memo('button.indent', g.invoke(u, 'render')),
                  this.context.memo('button.paragraph', function () {
                    return t.ui
                      .buttonGroup([
                        t.button({
                          className: 'dropdown-toggle',
                          contents: t.ui.dropdownButtonContents(
                            t.ui.icon(t.options.icons.alignLeft),
                            t.options,
                          ),
                          tooltip: t.lang.paragraph.paragraph,
                          data: {
                            toggle: 'dropdown',
                          },
                        }),
                        t.ui.dropdown([
                          t.ui.buttonGroup({
                            className: 'note-align',
                            children: [r, a, s, l],
                          }),
                          t.ui.buttonGroup({
                            className: 'note-list',
                            children: [c, u],
                          }),
                        ]),
                      ])
                      .render();
                  }),
                  this.context.memo('button.height', function () {
                    return t.ui
                      .buttonGroup([
                        t.button({
                          className: 'dropdown-toggle',
                          contents: t.ui.dropdownButtonContents(
                            t.ui.icon(t.options.icons.textHeight),
                            t.options,
                          ),
                          tooltip: t.lang.font.height,
                          data: {
                            toggle: 'dropdown',
                          },
                        }),
                        t.ui.dropdownCheck({
                          items: t.options.lineHeights,
                          checkClassName: t.options.icons.menuCheck,
                          className: 'dropdown-line-height',
                          title: t.lang.font.height,
                          click:
                            t.context.createInvokeHandler('editor.lineHeight'),
                        }),
                      ])
                      .render();
                  }),
                  this.context.memo('button.table', function () {
                    return t.ui
                      .buttonGroup(
                        [
                          t.button({
                            className: 'dropdown-toggle',
                            contents: t.ui.dropdownButtonContents(
                              t.ui.icon(t.options.icons.table),
                              t.options,
                            ),
                            tooltip: t.lang.table.table,
                            data: {
                              toggle: 'dropdown',
                            },
                          }),
                          t.ui.dropdown({
                            title: t.lang.table.table,
                            className: 'note-table',
                            items: [
                              '<div class="note-dimension-picker">',
                              '<div class="note-dimension-picker-mousecatcher" data-event="insertTable" data-value="1x1"></div>',
                              '<div class="note-dimension-picker-highlighted"></div>',
                              '<div class="note-dimension-picker-unhighlighted"></div>',
                              '</div>',
                              '<div class="note-dimension-display">1 x 1</div>',
                            ].join(''),
                          }),
                        ],
                        {
                          callback: function (e) {
                            e.find('.note-dimension-picker-mousecatcher')
                              .css({
                                width: t.options.insertTableMaxSize.col + 'em',
                                height: t.options.insertTableMaxSize.row + 'em',
                              })
                              .mousedown(
                                t.context.createInvokeHandler(
                                  'editor.insertTable',
                                ),
                              )
                              .on('mousemove', t.tableMoveHandler.bind(t));
                          },
                        },
                      )
                      .render();
                  }),
                  this.context.memo('button.link', function () {
                    return t
                      .button({
                        contents: t.ui.icon(t.options.icons.link),
                        tooltip:
                          t.lang.link.link +
                          t.representShortcut('linkDialog.show'),
                        click: t.context.createInvokeHandler('linkDialog.show'),
                      })
                      .render();
                  }),
                  this.context.memo('button.picture', function () {
                    return t
                      .button({
                        contents: t.ui.icon(t.options.icons.picture),
                        tooltip: t.lang.image.image,
                        click:
                          t.context.createInvokeHandler('imageDialog.show'),
                      })
                      .render();
                  }),
                  this.context.memo('button.video', function () {
                    return t
                      .button({
                        contents: t.ui.icon(t.options.icons.video),
                        tooltip: t.lang.video.video,
                        click:
                          t.context.createInvokeHandler('videoDialog.show'),
                      })
                      .render();
                  }),
                  this.context.memo('button.hr', function () {
                    return t
                      .button({
                        contents: t.ui.icon(t.options.icons.minus),
                        tooltip:
                          t.lang.hr.insert +
                          t.representShortcut('insertHorizontalRule'),
                        click: t.context.createInvokeHandler(
                          'editor.insertHorizontalRule',
                        ),
                      })
                      .render();
                  }),
                  this.context.memo('button.fullscreen', function () {
                    return t
                      .button({
                        className: 'btn-fullscreen note-codeview-keep',
                        contents: t.ui.icon(t.options.icons.arrowsAlt),
                        tooltip: t.lang.options.fullscreen,
                        click:
                          t.context.createInvokeHandler('fullscreen.toggle'),
                      })
                      .render();
                  }),
                  this.context.memo('button.codeview', function () {
                    return t
                      .button({
                        className: 'btn-codeview note-codeview-keep',
                        contents: t.ui.icon(t.options.icons.code),
                        tooltip: t.lang.options.codeview,
                        click: t.context.createInvokeHandler('codeview.toggle'),
                      })
                      .render();
                  }),
                  this.context.memo('button.redo', function () {
                    return t
                      .button({
                        contents: t.ui.icon(t.options.icons.redo),
                        tooltip:
                          t.lang.history.redo + t.representShortcut('redo'),
                        click: t.context.createInvokeHandler('editor.redo'),
                      })
                      .render();
                  }),
                  this.context.memo('button.undo', function () {
                    return t
                      .button({
                        contents: t.ui.icon(t.options.icons.undo),
                        tooltip:
                          t.lang.history.undo + t.representShortcut('undo'),
                        click: t.context.createInvokeHandler('editor.undo'),
                      })
                      .render();
                  }),
                  this.context.memo('button.help', function () {
                    return t
                      .button({
                        contents: t.ui.icon(t.options.icons.question),
                        tooltip: t.lang.options.help,
                        click: t.context.createInvokeHandler('helpDialog.show'),
                      })
                      .render();
                  });
              },
            },
            {
              key: 'addImagePopoverButtons',
              value: function () {
                var t = this;
                this.context.memo('button.resizeFull', function () {
                  return t
                    .button({
                      contents: '<span class="note-fontsize-10">100%</span>',
                      tooltip: t.lang.image.resizeFull,
                      click: t.context.createInvokeHandler(
                        'editor.resize',
                        '1',
                      ),
                    })
                    .render();
                }),
                  this.context.memo('button.resizeHalf', function () {
                    return t
                      .button({
                        contents: '<span class="note-fontsize-10">50%</span>',
                        tooltip: t.lang.image.resizeHalf,
                        click: t.context.createInvokeHandler(
                          'editor.resize',
                          '0.5',
                        ),
                      })
                      .render();
                  }),
                  this.context.memo('button.resizeQuarter', function () {
                    return t
                      .button({
                        contents: '<span class="note-fontsize-10">25%</span>',
                        tooltip: t.lang.image.resizeQuarter,
                        click: t.context.createInvokeHandler(
                          'editor.resize',
                          '0.25',
                        ),
                      })
                      .render();
                  }),
                  this.context.memo('button.resizeNone', function () {
                    return t
                      .button({
                        contents: t.ui.icon(t.options.icons.rollback),
                        tooltip: t.lang.image.resizeNone,
                        click: t.context.createInvokeHandler(
                          'editor.resize',
                          '0',
                        ),
                      })
                      .render();
                  }),
                  this.context.memo('button.floatLeft', function () {
                    return t
                      .button({
                        contents: t.ui.icon(t.options.icons.floatLeft),
                        tooltip: t.lang.image.floatLeft,
                        click: t.context.createInvokeHandler(
                          'editor.floatMe',
                          'left',
                        ),
                      })
                      .render();
                  }),
                  this.context.memo('button.floatRight', function () {
                    return t
                      .button({
                        contents: t.ui.icon(t.options.icons.floatRight),
                        tooltip: t.lang.image.floatRight,
                        click: t.context.createInvokeHandler(
                          'editor.floatMe',
                          'right',
                        ),
                      })
                      .render();
                  }),
                  this.context.memo('button.floatNone', function () {
                    return t
                      .button({
                        contents: t.ui.icon(t.options.icons.rollback),
                        tooltip: t.lang.image.floatNone,
                        click: t.context.createInvokeHandler(
                          'editor.floatMe',
                          'none',
                        ),
                      })
                      .render();
                  }),
                  this.context.memo('button.removeMedia', function () {
                    return t
                      .button({
                        contents: t.ui.icon(t.options.icons.trash),
                        tooltip: t.lang.image.remove,
                        click:
                          t.context.createInvokeHandler('editor.removeMedia'),
                      })
                      .render();
                  });
              },
            },
            {
              key: 'addLinkPopoverButtons',
              value: function () {
                var t = this;
                this.context.memo('button.linkDialogShow', function () {
                  return t
                    .button({
                      contents: t.ui.icon(t.options.icons.link),
                      tooltip: t.lang.link.edit,
                      click: t.context.createInvokeHandler('linkDialog.show'),
                    })
                    .render();
                }),
                  this.context.memo('button.unlink', function () {
                    return t
                      .button({
                        contents: t.ui.icon(t.options.icons.unlink),
                        tooltip: t.lang.link.unlink,
                        click: t.context.createInvokeHandler('editor.unlink'),
                      })
                      .render();
                  });
              },
            },
            {
              key: 'addTablePopoverButtons',
              value: function () {
                var t = this;
                this.context.memo('button.addRowUp', function () {
                  return t
                    .button({
                      className: 'btn-md',
                      contents: t.ui.icon(t.options.icons.rowAbove),
                      tooltip: t.lang.table.addRowAbove,
                      click: t.context.createInvokeHandler(
                        'editor.addRow',
                        'top',
                      ),
                    })
                    .render();
                }),
                  this.context.memo('button.addRowDown', function () {
                    return t
                      .button({
                        className: 'btn-md',
                        contents: t.ui.icon(t.options.icons.rowBelow),
                        tooltip: t.lang.table.addRowBelow,
                        click: t.context.createInvokeHandler(
                          'editor.addRow',
                          'bottom',
                        ),
                      })
                      .render();
                  }),
                  this.context.memo('button.addColLeft', function () {
                    return t
                      .button({
                        className: 'btn-md',
                        contents: t.ui.icon(t.options.icons.colBefore),
                        tooltip: t.lang.table.addColLeft,
                        click: t.context.createInvokeHandler(
                          'editor.addCol',
                          'left',
                        ),
                      })
                      .render();
                  }),
                  this.context.memo('button.addColRight', function () {
                    return t
                      .button({
                        className: 'btn-md',
                        contents: t.ui.icon(t.options.icons.colAfter),
                        tooltip: t.lang.table.addColRight,
                        click: t.context.createInvokeHandler(
                          'editor.addCol',
                          'right',
                        ),
                      })
                      .render();
                  }),
                  this.context.memo('button.deleteRow', function () {
                    return t
                      .button({
                        className: 'btn-md',
                        contents: t.ui.icon(t.options.icons.rowRemove),
                        tooltip: t.lang.table.delRow,
                        click:
                          t.context.createInvokeHandler('editor.deleteRow'),
                      })
                      .render();
                  }),
                  this.context.memo('button.deleteCol', function () {
                    return t
                      .button({
                        className: 'btn-md',
                        contents: t.ui.icon(t.options.icons.colRemove),
                        tooltip: t.lang.table.delCol,
                        click:
                          t.context.createInvokeHandler('editor.deleteCol'),
                      })
                      .render();
                  }),
                  this.context.memo('button.deleteTable', function () {
                    return t
                      .button({
                        className: 'btn-md',
                        contents: t.ui.icon(t.options.icons.trash),
                        tooltip: t.lang.table.delTable,
                        click:
                          t.context.createInvokeHandler('editor.deleteTable'),
                      })
                      .render();
                  });
              },
            },
            {
              key: 'build',
              value: function (t, e) {
                for (var n = 0, o = e.length; n < o; n++) {
                  for (
                    var i = e[n],
                      r = Array.isArray(i) ? i[0] : i,
                      a = Array.isArray(i)
                        ? 1 === i.length
                          ? [i[0]]
                          : i[1]
                        : [i],
                      s = this.ui
                        .buttonGroup({
                          className: 'note-' + r,
                        })
                        .render(),
                      l = 0,
                      c = a.length;
                    l < c;
                    l++
                  ) {
                    var u = this.context.memo('button.' + a[l]);
                    u && s.append('function' == typeof u ? u(this.context) : u);
                  }
                  s.appendTo(t);
                }
              },
            },
            {
              key: 'updateCurrentStyle',
              value: function (t) {
                var e = this,
                  n = t || this.$toolbar,
                  o = this.context.invoke('editor.currentStyle');
                if (
                  (this.updateBtnStates(n, {
                    '.note-btn-bold': function () {
                      return 'bold' === o['font-bold'];
                    },
                    '.note-btn-italic': function () {
                      return 'italic' === o['font-italic'];
                    },
                    '.note-btn-underline': function () {
                      return 'underline' === o['font-underline'];
                    },
                    '.note-btn-subscript': function () {
                      return 'subscript' === o['font-subscript'];
                    },
                    '.note-btn-superscript': function () {
                      return 'superscript' === o['font-superscript'];
                    },
                    '.note-btn-strikethrough': function () {
                      return 'strikethrough' === o['font-strikethrough'];
                    },
                  }),
                  o['font-family'])
                ) {
                  var r = o['font-family'].split(',').map(function (t) {
                      return t
                        .replace(/[\'\"]/g, '')
                        .replace(/\s+$/, '')
                        .replace(/^\s+/, '');
                    }),
                    a = C.find(r, this.isFontInstalled.bind(this));
                  n.find('.dropdown-fontname a').each(function (t, e) {
                    var n = i()(e),
                      o = n.data('value') + '' == a + '';
                    n.toggleClass('checked', o);
                  }),
                    n
                      .find('.note-current-fontname')
                      .text(a)
                      .css('font-family', a);
                }
                if (o['font-size']) {
                  var s = o['font-size'];
                  n.find('.dropdown-fontsize a').each(function (t, e) {
                    var n = i()(e),
                      o = n.data('value') + '' == s + '';
                    n.toggleClass('checked', o);
                  }),
                    n.find('.note-current-fontsize').text(s);
                  var l = o['font-size-unit'];
                  n.find('.dropdown-fontsizeunit a').each(function (t, e) {
                    var n = i()(e),
                      o = n.data('value') + '' == l + '';
                    n.toggleClass('checked', o);
                  }),
                    n.find('.note-current-fontsizeunit').text(l);
                }
                if (o['line-height']) {
                  var c = o['line-height'];
                  n.find('.dropdown-line-height li a').each(function (t, n) {
                    var o = i()(n).data('value') + '' == c + '';
                    e.className = o ? 'checked' : '';
                  });
                }
              },
            },
            {
              key: 'updateBtnStates',
              value: function (t, e) {
                var n = this;
                i.a.each(e, function (e, o) {
                  n.ui.toggleBtnActive(t.find(e), o());
                });
              },
            },
            {
              key: 'tableMoveHandler',
              value: function (t) {
                var e,
                  n = i()(t.target.parentNode),
                  o = n.next(),
                  r = n.find('.note-dimension-picker-mousecatcher'),
                  a = n.find('.note-dimension-picker-highlighted'),
                  s = n.find('.note-dimension-picker-unhighlighted');
                if (void 0 === t.offsetX) {
                  var l = i()(t.target).offset();
                  e = {
                    x: t.pageX - l.left,
                    y: t.pageY - l.top,
                  };
                } else
                  e = {
                    x: t.offsetX,
                    y: t.offsetY,
                  };
                var c = Math.ceil(e.x / 18) || 1,
                  u = Math.ceil(e.y / 18) || 1;
                a.css({
                  width: c + 'em',
                  height: u + 'em',
                }),
                  r.data('value', c + 'x' + u),
                  c > 3 &&
                    c < this.options.insertTableMaxSize.col &&
                    s.css({
                      width: c + 1 + 'em',
                    }),
                  u > 3 &&
                    u < this.options.insertTableMaxSize.row &&
                    s.css({
                      height: u + 1 + 'em',
                    }),
                  o.html(c + ' x ' + u);
              },
            },
          ]) && ae(e.prototype, n),
          o && ae(e, o),
          t
        );
      })();

      function le(t, e) {
        for (var n = 0; n < e.length; n++) {
          var o = e[n];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            'value' in o && (o.writable = !0),
            Object.defineProperty(t, o.key, o);
        }
      }
      var ce = (function () {
        function t(e) {
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError('Cannot call a class as a function');
          })(this, t),
            (this.context = e),
            (this.$window = i()(window)),
            (this.$document = i()(document)),
            (this.ui = i.a.summernote.ui),
            (this.$note = e.layoutInfo.note),
            (this.$editor = e.layoutInfo.editor),
            (this.$toolbar = e.layoutInfo.toolbar),
            (this.$editable = e.layoutInfo.editable),
            (this.$statusbar = e.layoutInfo.statusbar),
            (this.options = e.options),
            (this.isFollowing = !1),
            (this.followScroll = this.followScroll.bind(this));
        }
        var e, n, o;
        return (
          (e = t),
          (n = [
            {
              key: 'shouldInitialize',
              value: function () {
                return !this.options.airMode;
              },
            },
            {
              key: 'initialize',
              value: function () {
                var t = this;
                (this.options.toolbar = this.options.toolbar || []),
                  this.options.toolbar.length
                    ? this.context.invoke(
                        'buttons.build',
                        this.$toolbar,
                        this.options.toolbar,
                      )
                    : this.$toolbar.hide(),
                  this.options.toolbarContainer &&
                    this.$toolbar.appendTo(this.options.toolbarContainer),
                  this.changeContainer(!1),
                  this.$note.on(
                    'summernote.keyup summernote.mouseup summernote.change',
                    function () {
                      t.context.invoke('buttons.updateCurrentStyle');
                    },
                  ),
                  this.context.invoke('buttons.updateCurrentStyle'),
                  this.options.followingToolbar &&
                    this.$window.on('scroll resize', this.followScroll);
              },
            },
            {
              key: 'destroy',
              value: function () {
                this.$toolbar.children().remove(),
                  this.options.followingToolbar &&
                    this.$window.off('scroll resize', this.followScroll);
              },
            },
            {
              key: 'followScroll',
              value: function () {
                if (this.$editor.hasClass('fullscreen')) return !1;
                var t = this.$editor.outerHeight(),
                  e = this.$editor.width(),
                  n = this.$toolbar.height(),
                  o = this.$statusbar.height(),
                  r = 0;
                this.options.otherStaticBar &&
                  (r = i()(this.options.otherStaticBar).outerHeight());
                var a = this.$document.scrollTop(),
                  s = this.$editor.offset().top,
                  l = s - r,
                  c = s + t - r - n - o;
                !this.isFollowing && a > l && a < c - n
                  ? ((this.isFollowing = !0),
                    this.$editable.css({
                      marginTop: this.$toolbar.outerHeight(),
                    }),
                    this.$toolbar.css({
                      position: 'fixed',
                      top: r,
                      width: e,
                      zIndex: 1e3,
                    }))
                  : this.isFollowing &&
                    (a < l || a > c) &&
                    ((this.isFollowing = !1),
                    this.$toolbar.css({
                      position: 'relative',
                      top: 0,
                      width: '100%',
                      zIndex: 'auto',
                    }),
                    this.$editable.css({
                      marginTop: '',
                    }));
              },
            },
            {
              key: 'changeContainer',
              value: function (t) {
                t
                  ? this.$toolbar.prependTo(this.$editor)
                  : this.options.toolbarContainer &&
                    this.$toolbar.appendTo(this.options.toolbarContainer),
                  this.options.followingToolbar && this.followScroll();
              },
            },
            {
              key: 'updateFullscreen',
              value: function (t) {
                this.ui.toggleBtnActive(
                  this.$toolbar.find('.btn-fullscreen'),
                  t,
                ),
                  this.changeContainer(t);
              },
            },
            {
              key: 'updateCodeview',
              value: function (t) {
                this.ui.toggleBtnActive(this.$toolbar.find('.btn-codeview'), t),
                  t ? this.deactivate() : this.activate();
              },
            },
            {
              key: 'activate',
              value: function (t) {
                var e = this.$toolbar.find('button');
                t || (e = e.not('.note-codeview-keep')),
                  this.ui.toggleBtn(e, !0);
              },
            },
            {
              key: 'deactivate',
              value: function (t) {
                var e = this.$toolbar.find('button');
                t || (e = e.not('.note-codeview-keep')),
                  this.ui.toggleBtn(e, !1);
              },
            },
          ]) && le(e.prototype, n),
          o && le(e, o),
          t
        );
      })();

      function ue(t, e) {
        for (var n = 0; n < e.length; n++) {
          var o = e[n];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            'value' in o && (o.writable = !0),
            Object.defineProperty(t, o.key, o);
        }
      }
      var de = (function () {
        function t(e) {
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError('Cannot call a class as a function');
          })(this, t),
            (this.context = e),
            (this.ui = i.a.summernote.ui),
            (this.$body = i()(document.body)),
            (this.$editor = e.layoutInfo.editor),
            (this.options = e.options),
            (this.lang = this.options.langInfo),
            e.memo(
              'help.linkDialog.show',
              this.options.langInfo.help['linkDialog.show'],
            );
        }
        var e, n, o;
        return (
          (e = t),
          (n = [
            {
              key: 'initialize',
              value: function () {
                var t = this.options.dialogsInBody
                    ? this.$body
                    : this.options.container,
                  e = [
                    '<div class="form-group note-form-group">',
                    '<label for="note-dialog-link-txt-'
                      .concat(this.options.id, '" class="note-form-label">')
                      .concat(this.lang.link.textToDisplay, '</label>'),
                    '<input id="note-dialog-link-txt-'.concat(
                      this.options.id,
                      '" class="note-link-text form-control note-form-control note-input" type="text"/>',
                    ),
                    '</div>',
                    '<div class="form-group note-form-group">',
                    '<label for="note-dialog-link-url-'
                      .concat(this.options.id, '" class="note-form-label">')
                      .concat(this.lang.link.url, '</label>'),
                    '<input id="note-dialog-link-url-'.concat(
                      this.options.id,
                      '" class="note-link-url form-control note-form-control note-input" type="text" value="http://"/>',
                    ),
                    '</div>',
                    this.options.disableLinkTarget
                      ? ''
                      : i()('<div/>')
                          .append(
                            this.ui
                              .checkbox({
                                className: 'sn-checkbox-open-in-new-window',
                                text: this.lang.link.openInNewWindow,
                                checked: !0,
                              })
                              .render(),
                          )
                          .html(),
                    i()('<div/>')
                      .append(
                        this.ui
                          .checkbox({
                            className: 'sn-checkbox-use-protocol',
                            text: this.lang.link.useProtocol,
                            checked: !0,
                          })
                          .render(),
                      )
                      .html(),
                  ].join(''),
                  n = '<input type="button" href="#!" class="'
                    .concat(
                      'btn btn-primary note-btn note-btn-primary note-link-btn',
                      '" value="',
                    )
                    .concat(this.lang.link.insert, '" disabled>');
                this.$dialog = this.ui
                  .dialog({
                    className: 'link-dialog',
                    title: this.lang.link.insert,
                    fade: this.options.dialogsFade,
                    body: e,
                    footer: n,
                  })
                  .render()
                  .appendTo(t);
              },
            },
            {
              key: 'destroy',
              value: function () {
                this.ui.hideDialog(this.$dialog), this.$dialog.remove();
              },
            },
            {
              key: 'bindEnterKey',
              value: function (t, e) {
                t.on('keypress', function (t) {
                  t.keyCode === xt.code.ENTER &&
                    (t.preventDefault(), e.trigger('click'));
                });
              },
            },
            {
              key: 'toggleLinkBtn',
              value: function (t, e, n) {
                this.ui.toggleBtn(t, e.val() && n.val());
              },
            },
            {
              key: 'showLinkDialog',
              value: function (t) {
                var e = this;
                return i.a
                  .Deferred(function (n) {
                    var o = e.$dialog.find('.note-link-text'),
                      i = e.$dialog.find('.note-link-url'),
                      r = e.$dialog.find('.note-link-btn'),
                      a = e.$dialog.find(
                        '.sn-checkbox-open-in-new-window input[type=checkbox]',
                      ),
                      s = e.$dialog.find(
                        '.sn-checkbox-use-protocol input[type=checkbox]',
                      );
                    e.ui.onDialogShown(e.$dialog, function () {
                      e.context.triggerEvent('dialog.shown'),
                        !t.url && g.isValidUrl(t.text) && (t.url = t.text),
                        o
                          .on('input paste propertychange', function () {
                            (t.text = o.val()), e.toggleLinkBtn(r, o, i);
                          })
                          .val(t.text),
                        i
                          .on('input paste propertychange', function () {
                            t.text || o.val(i.val()), e.toggleLinkBtn(r, o, i);
                          })
                          .val(t.url),
                        m.isSupportTouch || i.trigger('focus'),
                        e.toggleLinkBtn(r, o, i),
                        e.bindEnterKey(i, r),
                        e.bindEnterKey(o, r);
                      var l =
                        void 0 !== t.isNewWindow
                          ? t.isNewWindow
                          : e.context.options.linkTargetBlank;
                      a.prop('checked', l);
                      var c = !t.url && e.context.options.useProtocol;
                      s.prop('checked', c),
                        r.one('click', function (r) {
                          r.preventDefault(),
                            n.resolve({
                              range: t.range,
                              url: i.val(),
                              text: o.val(),
                              isNewWindow: a.is(':checked'),
                              checkProtocol: s.is(':checked'),
                            }),
                            e.ui.hideDialog(e.$dialog);
                        });
                    }),
                      e.ui.onDialogHidden(e.$dialog, function () {
                        o.off(),
                          i.off(),
                          r.off(),
                          'pending' === n.state() && n.reject();
                      }),
                      e.ui.showDialog(e.$dialog);
                  })
                  .promise();
              },
            },
            {
              key: 'show',
              value: function () {
                var t = this,
                  e = this.context.invoke('editor.getLinkInfo');
                this.context.invoke('editor.saveRange'),
                  this.showLinkDialog(e)
                    .then(function (e) {
                      t.context.invoke('editor.restoreRange'),
                        t.context.invoke('editor.createLink', e);
                    })
                    .fail(function () {
                      t.context.invoke('editor.restoreRange');
                    });
              },
            },
          ]) && ue(e.prototype, n),
          o && ue(e, o),
          t
        );
      })();

      function he(t, e) {
        for (var n = 0; n < e.length; n++) {
          var o = e[n];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            'value' in o && (o.writable = !0),
            Object.defineProperty(t, o.key, o);
        }
      }
      var fe = (function () {
        function t(e) {
          var n = this;
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError('Cannot call a class as a function');
          })(this, t),
            (this.context = e),
            (this.ui = i.a.summernote.ui),
            (this.options = e.options),
            (this.events = {
              'summernote.keyup summernote.mouseup summernote.change summernote.scroll':
                function () {
                  n.update();
                },
              'summernote.disable summernote.dialog.shown summernote.blur':
                function () {
                  n.hide();
                },
            });
        }
        var e, n, o;
        return (
          (e = t),
          (n = [
            {
              key: 'shouldInitialize',
              value: function () {
                return !C.isEmpty(this.options.popover.link);
              },
            },
            {
              key: 'initialize',
              value: function () {
                this.$popover = this.ui
                  .popover({
                    className: 'note-link-popover',
                    callback: function (t) {
                      t.find('.popover-content,.note-popover-content').prepend(
                        '<span><a target="_blank"></a>&nbsp;</span>',
                      );
                    },
                  })
                  .render()
                  .appendTo(this.options.container);
                var t = this.$popover.find(
                  '.popover-content,.note-popover-content',
                );
                this.context.invoke(
                  'buttons.build',
                  t,
                  this.options.popover.link,
                ),
                  this.$popover.on('mousedown', function (t) {
                    t.preventDefault();
                  });
              },
            },
            {
              key: 'destroy',
              value: function () {
                this.$popover.remove();
              },
            },
            {
              key: 'update',
              value: function () {
                if (this.context.invoke('editor.hasFocus')) {
                  var t = this.context.invoke('editor.getLastRange');
                  if (t.isCollapsed() && t.isOnAnchor()) {
                    var e = pt.ancestor(t.sc, pt.isAnchor),
                      n = i()(e).attr('href');
                    this.$popover.find('a').attr('href', n).text(n);
                    var o = pt.posFromPlaceholder(e),
                      r = i()(this.options.container).offset();
                    (o.top -= r.top),
                      (o.left -= r.left),
                      this.$popover.css({
                        display: 'block',
                        left: o.left,
                        top: o.top,
                      });
                  } else this.hide();
                } else this.hide();
              },
            },
            {
              key: 'hide',
              value: function () {
                this.$popover.hide();
              },
            },
          ]) && he(e.prototype, n),
          o && he(e, o),
          t
        );
      })();

      function pe(t, e) {
        for (var n = 0; n < e.length; n++) {
          var o = e[n];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            'value' in o && (o.writable = !0),
            Object.defineProperty(t, o.key, o);
        }
      }
      var me = (function () {
        function t(e) {
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError('Cannot call a class as a function');
          })(this, t),
            (this.context = e),
            (this.ui = i.a.summernote.ui),
            (this.$body = i()(document.body)),
            (this.$editor = e.layoutInfo.editor),
            (this.options = e.options),
            (this.lang = this.options.langInfo);
        }
        var e, n, o;
        return (
          (e = t),
          (n = [
            {
              key: 'initialize',
              value: function () {
                var t = '';
                if (this.options.maximumImageFileSize) {
                  var e = Math.floor(
                      Math.log(this.options.maximumImageFileSize) /
                        Math.log(1024),
                    ),
                    n =
                      1 *
                        (
                          this.options.maximumImageFileSize / Math.pow(1024, e)
                        ).toFixed(2) +
                      ' ' +
                      ' KMGTP'[e] +
                      'B';
                  t = '<small>'.concat(
                    this.lang.image.maximumFileSize + ' : ' + n,
                    '</small>',
                  );
                }
                var o = this.options.dialogsInBody
                    ? this.$body
                    : this.options.container,
                  i = [
                    '<div class="form-group note-form-group note-group-select-from-files">',
                    '<label for="note-dialog-image-file-' +
                      this.options.id +
                      '" class="note-form-label">' +
                      this.lang.image.selectFromFiles +
                      '</label>',
                    '<input id="note-dialog-image-file-' +
                      this.options.id +
                      '" class="note-image-input form-control-file note-form-control note-input" ',
                    ' type="file" name="files" accept="image/*" multiple="multiple"/>',
                    t,
                    '</div>',
                    '<div class="form-group note-group-image-url">',
                    '<label for="note-dialog-image-url-' +
                      this.options.id +
                      '" class="note-form-label">' +
                      this.lang.image.url +
                      '</label>',
                    '<input id="note-dialog-image-url-' +
                      this.options.id +
                      '" class="note-image-url form-control note-form-control note-input" type="text"/>',
                    '</div>',
                  ].join(''),
                  r = '<input type="button" href="#!" class="'
                    .concat(
                      'btn btn-primary note-btn note-btn-primary note-image-btn',
                      '" value="',
                    )
                    .concat(this.lang.image.insert, '" disabled>');
                this.$dialog = this.ui
                  .dialog({
                    title: this.lang.image.insert,
                    fade: this.options.dialogsFade,
                    body: i,
                    footer: r,
                  })
                  .render()
                  .appendTo(o);
              },
            },
            {
              key: 'destroy',
              value: function () {
                this.ui.hideDialog(this.$dialog), this.$dialog.remove();
              },
            },
            {
              key: 'bindEnterKey',
              value: function (t, e) {
                t.on('keypress', function (t) {
                  t.keyCode === xt.code.ENTER &&
                    (t.preventDefault(), e.trigger('click'));
                });
              },
            },
            {
              key: 'show',
              value: function () {
                var t = this;
                this.context.invoke('editor.saveRange'),
                  this.showImageDialog()
                    .then(function (e) {
                      t.ui.hideDialog(t.$dialog),
                        t.context.invoke('editor.restoreRange'),
                        'string' == typeof e
                          ? t.options.callbacks.onImageLinkInsert
                            ? t.context.triggerEvent('image.link.insert', e)
                            : t.context.invoke('editor.insertImage', e)
                          : t.context.invoke(
                              'editor.insertImagesOrCallback',
                              e,
                            );
                    })
                    .fail(function () {
                      t.context.invoke('editor.restoreRange');
                    });
              },
            },
            {
              key: 'showImageDialog',
              value: function () {
                var t = this;
                return i.a.Deferred(function (e) {
                  var n = t.$dialog.find('.note-image-input'),
                    o = t.$dialog.find('.note-image-url'),
                    i = t.$dialog.find('.note-image-btn');
                  t.ui.onDialogShown(t.$dialog, function () {
                    t.context.triggerEvent('dialog.shown'),
                      n.replaceWith(
                        n
                          .clone()
                          .on('change', function (t) {
                            e.resolve(t.target.files || t.target.value);
                          })
                          .val(''),
                      ),
                      o
                        .on('input paste propertychange', function () {
                          t.ui.toggleBtn(i, o.val());
                        })
                        .val(''),
                      m.isSupportTouch || o.trigger('focus'),
                      i.click(function (t) {
                        t.preventDefault(), e.resolve(o.val());
                      }),
                      t.bindEnterKey(o, i);
                  }),
                    t.ui.onDialogHidden(t.$dialog, function () {
                      n.off(),
                        o.off(),
                        i.off(),
                        'pending' === e.state() && e.reject();
                    }),
                    t.ui.showDialog(t.$dialog);
                });
              },
            },
          ]) && pe(e.prototype, n),
          o && pe(e, o),
          t
        );
      })();

      function ve(t, e) {
        for (var n = 0; n < e.length; n++) {
          var o = e[n];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            'value' in o && (o.writable = !0),
            Object.defineProperty(t, o.key, o);
        }
      }
      var ge = (function () {
        function t(e) {
          var n = this;
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError('Cannot call a class as a function');
          })(this, t),
            (this.context = e),
            (this.ui = i.a.summernote.ui),
            (this.editable = e.layoutInfo.editable[0]),
            (this.options = e.options),
            (this.events = {
              'summernote.disable summernote.blur': function () {
                n.hide();
              },
            });
        }
        var e, n, o;
        return (
          (e = t),
          (n = [
            {
              key: 'shouldInitialize',
              value: function () {
                return !C.isEmpty(this.options.popover.image);
              },
            },
            {
              key: 'initialize',
              value: function () {
                this.$popover = this.ui
                  .popover({
                    className: 'note-image-popover',
                  })
                  .render()
                  .appendTo(this.options.container);
                var t = this.$popover.find(
                  '.popover-content,.note-popover-content',
                );
                this.context.invoke(
                  'buttons.build',
                  t,
                  this.options.popover.image,
                ),
                  this.$popover.on('mousedown', function (t) {
                    t.preventDefault();
                  });
              },
            },
            {
              key: 'destroy',
              value: function () {
                this.$popover.remove();
              },
            },
            {
              key: 'update',
              value: function (t, e) {
                if (pt.isImg(t)) {
                  var n = i()(t).offset(),
                    o = i()(this.options.container).offset(),
                    r = {};
                  this.options.popatmouse
                    ? ((r.left = e.pageX - 20), (r.top = e.pageY))
                    : (r = n),
                    (r.top -= o.top),
                    (r.left -= o.left),
                    this.$popover.css({
                      display: 'block',
                      left: r.left,
                      top: r.top,
                    });
                } else this.hide();
              },
            },
            {
              key: 'hide',
              value: function () {
                this.$popover.hide();
              },
            },
          ]) && ve(e.prototype, n),
          o && ve(e, o),
          t
        );
      })();

      function be(t, e) {
        for (var n = 0; n < e.length; n++) {
          var o = e[n];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            'value' in o && (o.writable = !0),
            Object.defineProperty(t, o.key, o);
        }
      }
      var ye = (function () {
        function t(e) {
          var n = this;
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError('Cannot call a class as a function');
          })(this, t),
            (this.context = e),
            (this.ui = i.a.summernote.ui),
            (this.options = e.options),
            (this.events = {
              'summernote.mousedown': function (t, e) {
                n.update(e.target);
              },
              'summernote.keyup summernote.scroll summernote.change':
                function () {
                  n.update();
                },
              'summernote.disable summernote.blur': function () {
                n.hide();
              },
            });
        }
        var e, n, o;
        return (
          (e = t),
          (n = [
            {
              key: 'shouldInitialize',
              value: function () {
                return !C.isEmpty(this.options.popover.table);
              },
            },
            {
              key: 'initialize',
              value: function () {
                this.$popover = this.ui
                  .popover({
                    className: 'note-table-popover',
                  })
                  .render()
                  .appendTo(this.options.container);
                var t = this.$popover.find(
                  '.popover-content,.note-popover-content',
                );
                this.context.invoke(
                  'buttons.build',
                  t,
                  this.options.popover.table,
                ),
                  m.isFF &&
                    document.execCommand('enableInlineTableEditing', !1, !1),
                  this.$popover.on('mousedown', function (t) {
                    t.preventDefault();
                  });
              },
            },
            {
              key: 'destroy',
              value: function () {
                this.$popover.remove();
              },
            },
            {
              key: 'update',
              value: function (t) {
                if (this.context.isDisabled()) return !1;
                var e = pt.isCell(t);
                if (e) {
                  var n = pt.posFromPlaceholder(t),
                    o = i()(this.options.container).offset();
                  (n.top -= o.top),
                    (n.left -= o.left),
                    this.$popover.css({
                      display: 'block',
                      left: n.left,
                      top: n.top,
                    });
                } else this.hide();
                return e;
              },
            },
            {
              key: 'hide',
              value: function () {
                this.$popover.hide();
              },
            },
          ]) && be(e.prototype, n),
          o && be(e, o),
          t
        );
      })();

      function ke(t, e) {
        for (var n = 0; n < e.length; n++) {
          var o = e[n];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            'value' in o && (o.writable = !0),
            Object.defineProperty(t, o.key, o);
        }
      }
      var we = (function () {
        function t(e) {
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError('Cannot call a class as a function');
          })(this, t),
            (this.context = e),
            (this.ui = i.a.summernote.ui),
            (this.$body = i()(document.body)),
            (this.$editor = e.layoutInfo.editor),
            (this.options = e.options),
            (this.lang = this.options.langInfo);
        }
        var e, n, o;
        return (
          (e = t),
          (n = [
            {
              key: 'initialize',
              value: function () {
                var t = this.options.dialogsInBody
                    ? this.$body
                    : this.options.container,
                  e = [
                    '<div class="form-group note-form-group row-fluid">',
                    '<label for="note-dialog-video-url-'
                      .concat(this.options.id, '" class="note-form-label">')
                      .concat(
                        this.lang.video.url,
                        ' <small class="text-muted">',
                      )
                      .concat(this.lang.video.providers, '</small></label>'),
                    '<input id="note-dialog-video-url-'.concat(
                      this.options.id,
                      '" class="note-video-url form-control note-form-control note-input" type="text"/>',
                    ),
                    '</div>',
                  ].join(''),
                  n = '<input type="button" href="#!" class="'
                    .concat(
                      'btn btn-primary note-btn note-btn-primary note-video-btn',
                      '" value="',
                    )
                    .concat(this.lang.video.insert, '" disabled>');
                this.$dialog = this.ui
                  .dialog({
                    title: this.lang.video.insert,
                    fade: this.options.dialogsFade,
                    body: e,
                    footer: n,
                  })
                  .render()
                  .appendTo(t);
              },
            },
            {
              key: 'destroy',
              value: function () {
                this.ui.hideDialog(this.$dialog), this.$dialog.remove();
              },
            },
            {
              key: 'bindEnterKey',
              value: function (t, e) {
                t.on('keypress', function (t) {
                  t.keyCode === xt.code.ENTER &&
                    (t.preventDefault(), e.trigger('click'));
                });
              },
            },
            {
              key: 'createVideoNode',
              value: function (t) {
                var e,
                  n = t.match(
                    /\/\/(?:(?:www|m)\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w|-]{11})(?:(?:[\?&]t=)(\S+))?$/,
                  ),
                  o = t.match(
                    /(?:www\.|\/\/)instagram\.com\/p\/(.[a-zA-Z0-9_-]*)/,
                  ),
                  r = t.match(/\/\/vine\.co\/v\/([a-zA-Z0-9]+)/),
                  a = t.match(
                    /\/\/(player\.)?vimeo\.com\/([a-z]*\/)*(\d+)[?]?.*/,
                  ),
                  s = t.match(
                    /.+dailymotion.com\/(video|hub)\/([^_]+)[^#]*(#video=([^_&]+))?/,
                  ),
                  l = t.match(/\/\/v\.youku\.com\/v_show\/id_(\w+)=*\.html/),
                  c = t.match(/\/\/v\.qq\.com.*?vid=(.+)/),
                  u = t.match(
                    /\/\/v\.qq\.com\/x?\/?(page|cover).*?\/([^\/]+)\.html\??.*/,
                  ),
                  d = t.match(/^.+.(mp4|m4v)$/),
                  h = t.match(/^.+.(ogg|ogv)$/),
                  f = t.match(/^.+.(webm)$/),
                  p = t.match(
                    /(?:www\.|\/\/)facebook\.com\/([^\/]+)\/videos\/([0-9]+)/,
                  );
                if (n && 11 === n[1].length) {
                  var m = n[1],
                    v = 0;
                  if (void 0 !== n[2]) {
                    var g = n[2].match(/^(?:(\d+)h)?(?:(\d+)m)?(?:(\d+)s)?$/);
                    if (g)
                      for (
                        var b = [3600, 60, 1], y = 0, k = b.length;
                        y < k;
                        y++
                      )
                        v +=
                          void 0 !== g[y + 1]
                            ? b[y] * parseInt(g[y + 1], 10)
                            : 0;
                  }
                  e = i()('<iframe>')
                    .attr('frameborder', 0)
                    .attr(
                      'src',
                      '//www.youtube.com/embed/' +
                        m +
                        (v > 0 ? '?start=' + v : ''),
                    )
                    .attr('width', '640')
                    .attr('height', '360');
                } else if (o && o[0].length)
                  e = i()('<iframe>')
                    .attr('frameborder', 0)
                    .attr('src', 'https://instagram.com/p/' + o[1] + '/embed/')
                    .attr('width', '612')
                    .attr('height', '710')
                    .attr('scrolling', 'no')
                    .attr('allowtransparency', 'true');
                else if (r && r[0].length)
                  e = i()('<iframe>')
                    .attr('frameborder', 0)
                    .attr('src', r[0] + '/embed/simple')
                    .attr('width', '600')
                    .attr('height', '600')
                    .attr('class', 'vine-embed');
                else if (a && a[3].length)
                  e = i()(
                    '<iframe webkitallowfullscreen mozallowfullscreen allowfullscreen>',
                  )
                    .attr('frameborder', 0)
                    .attr('src', '//player.vimeo.com/video/' + a[3])
                    .attr('width', '640')
                    .attr('height', '360');
                else if (s && s[2].length)
                  e = i()('<iframe>')
                    .attr('frameborder', 0)
                    .attr('src', '//www.dailymotion.com/embed/video/' + s[2])
                    .attr('width', '640')
                    .attr('height', '360');
                else if (l && l[1].length)
                  e = i()(
                    '<iframe webkitallowfullscreen mozallowfullscreen allowfullscreen>',
                  )
                    .attr('frameborder', 0)
                    .attr('height', '498')
                    .attr('width', '510')
                    .attr('src', '//player.youku.com/embed/' + l[1]);
                else if ((c && c[1].length) || (u && u[2].length)) {
                  var w = c && c[1].length ? c[1] : u[2];
                  e = i()(
                    '<iframe webkitallowfullscreen mozallowfullscreen allowfullscreen>',
                  )
                    .attr('frameborder', 0)
                    .attr('height', '310')
                    .attr('width', '500')
                    .attr(
                      'src',
                      'https://v.qq.com/txp/iframe/player.html?vid=' +
                        w +
                        '&amp;auhref=0',
                    );
                } else if (d || h || f)
                  e = i()('<video controls>')
                    .attr('src', t)
                    .attr('width', '640')
                    .attr('height', '360');
                else {
                  if (!p || !p[0].length) return !1;
                  e = i()('<iframe>')
                    .attr('frameborder', 0)
                    .attr(
                      'src',
                      'https://www.facebook.com/plugins/video.php?href=' +
                        encodeURIComponent(p[0]) +
                        '&show_text=0&width=560',
                    )
                    .attr('width', '560')
                    .attr('height', '301')
                    .attr('scrolling', 'no')
                    .attr('allowtransparency', 'true');
                }
                return e.addClass('note-video-clip'), e[0];
              },
            },
            {
              key: 'show',
              value: function () {
                var t = this,
                  e = this.context.invoke('editor.getSelectedText');
                this.context.invoke('editor.saveRange'),
                  this.showVideoDialog(e)
                    .then(function (e) {
                      t.ui.hideDialog(t.$dialog),
                        t.context.invoke('editor.restoreRange');
                      var n = t.createVideoNode(e);
                      n && t.context.invoke('editor.insertNode', n);
                    })
                    .fail(function () {
                      t.context.invoke('editor.restoreRange');
                    });
              },
            },
            {
              key: 'showVideoDialog',
              value: function () {
                var t = this;
                return i.a.Deferred(function (e) {
                  var n = t.$dialog.find('.note-video-url'),
                    o = t.$dialog.find('.note-video-btn');
                  t.ui.onDialogShown(t.$dialog, function () {
                    t.context.triggerEvent('dialog.shown'),
                      n.on('input paste propertychange', function () {
                        t.ui.toggleBtn(o, n.val());
                      }),
                      m.isSupportTouch || n.trigger('focus'),
                      o.click(function (t) {
                        t.preventDefault(), e.resolve(n.val());
                      }),
                      t.bindEnterKey(n, o);
                  }),
                    t.ui.onDialogHidden(t.$dialog, function () {
                      n.off(), o.off(), 'pending' === e.state() && e.reject();
                    }),
                    t.ui.showDialog(t.$dialog);
                });
              },
            },
          ]) && ke(e.prototype, n),
          o && ke(e, o),
          t
        );
      })();

      function Ce(t, e) {
        for (var n = 0; n < e.length; n++) {
          var o = e[n];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            'value' in o && (o.writable = !0),
            Object.defineProperty(t, o.key, o);
        }
      }
      var xe = (function () {
        function t(e) {
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError('Cannot call a class as a function');
          })(this, t),
            (this.context = e),
            (this.ui = i.a.summernote.ui),
            (this.$body = i()(document.body)),
            (this.$editor = e.layoutInfo.editor),
            (this.options = e.options),
            (this.lang = this.options.langInfo);
        }
        var e, n, o;
        return (
          (e = t),
          (n = [
            {
              key: 'initialize',
              value: function () {
                var t = this.options.dialogsInBody
                    ? this.$body
                    : this.options.container,
                  e = [
                    '<p class="text-center">',
                    '<a href="http://summernote.org/" target="_blank">Summernote 0.8.18</a> · ',
                    '<a href="https://github.com/summernote/summernote" target="_blank">Project</a> · ',
                    '<a href="https://github.com/summernote/summernote/issues" target="_blank">Issues</a>',
                    '</p>',
                  ].join('');
                this.$dialog = this.ui
                  .dialog({
                    title: this.lang.options.help,
                    fade: this.options.dialogsFade,
                    body: this.createShortcutList(),
                    footer: e,
                    callback: function (t) {
                      t.find('.modal-body,.note-modal-body').css({
                        'max-height': 300,
                        overflow: 'scroll',
                      });
                    },
                  })
                  .render()
                  .appendTo(t);
              },
            },
            {
              key: 'destroy',
              value: function () {
                this.ui.hideDialog(this.$dialog), this.$dialog.remove();
              },
            },
            {
              key: 'createShortcutList',
              value: function () {
                var t = this,
                  e = this.options.keyMap[m.isMac ? 'mac' : 'pc'];
                return Object.keys(e)
                  .map(function (n) {
                    var o = e[n],
                      r = i()('<div><div class="help-list-item"></div></div>');
                    return (
                      r
                        .append(
                          i()('<label><kbd>' + n + '</kdb></label>').css({
                            width: 180,
                            'margin-right': 10,
                          }),
                        )
                        .append(
                          i()('<span/>').html(t.context.memo('help.' + o) || o),
                        ),
                      r.html()
                    );
                  })
                  .join('');
              },
            },
            {
              key: 'showHelpDialog',
              value: function () {
                var t = this;
                return i.a
                  .Deferred(function (e) {
                    t.ui.onDialogShown(t.$dialog, function () {
                      t.context.triggerEvent('dialog.shown'), e.resolve();
                    }),
                      t.ui.showDialog(t.$dialog);
                  })
                  .promise();
              },
            },
            {
              key: 'show',
              value: function () {
                var t = this;
                this.context.invoke('editor.saveRange'),
                  this.showHelpDialog().then(function () {
                    t.context.invoke('editor.restoreRange');
                  });
              },
            },
          ]) && Ce(e.prototype, n),
          o && Ce(e, o),
          t
        );
      })();

      function Se(t, e) {
        for (var n = 0; n < e.length; n++) {
          var o = e[n];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            'value' in o && (o.writable = !0),
            Object.defineProperty(t, o.key, o);
        }
      }
      var Te = (function () {
        function t(e) {
          var n = this;
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError('Cannot call a class as a function');
          })(this, t),
            (this.context = e),
            (this.ui = i.a.summernote.ui),
            (this.options = e.options),
            (this.hidable = !0),
            (this.onContextmenu = !1),
            (this.pageX = null),
            (this.pageY = null),
            (this.events = {
              'summernote.contextmenu': function (t) {
                n.options.editing &&
                  (t.preventDefault(),
                  t.stopPropagation(),
                  (n.onContextmenu = !0),
                  n.update(!0));
              },
              'summernote.mousedown': function (t, e) {
                (n.pageX = e.pageX), (n.pageY = e.pageY);
              },
              'summernote.keyup summernote.mouseup summernote.scroll':
                function (t, e) {
                  n.options.editing &&
                    !n.onContextmenu &&
                    ((n.pageX = e.pageX), (n.pageY = e.pageY), n.update()),
                    (n.onContextmenu = !1);
                },
              'summernote.disable summernote.change summernote.dialog.shown summernote.blur':
                function () {
                  n.hide();
                },
              'summernote.focusout': function () {
                n.$popover.is(':active,:focus') || n.hide();
              },
            });
        }
        var e, n, o;
        return (
          (e = t),
          (n = [
            {
              key: 'shouldInitialize',
              value: function () {
                return (
                  this.options.airMode && !C.isEmpty(this.options.popover.air)
                );
              },
            },
            {
              key: 'initialize',
              value: function () {
                var t = this;
                this.$popover = this.ui
                  .popover({
                    className: 'note-air-popover',
                  })
                  .render()
                  .appendTo(this.options.container);
                var e = this.$popover.find('.popover-content');
                this.context.invoke(
                  'buttons.build',
                  e,
                  this.options.popover.air,
                ),
                  this.$popover.on('mousedown', function () {
                    t.hidable = !1;
                  }),
                  this.$popover.on('mouseup', function () {
                    t.hidable = !0;
                  });
              },
            },
            {
              key: 'destroy',
              value: function () {
                this.$popover.remove();
              },
            },
            {
              key: 'update',
              value: function (t) {
                var e = this.context.invoke('editor.currentStyle');
                if (!e.range || (e.range.isCollapsed() && !t)) this.hide();
                else {
                  var n = {
                      left: this.pageX,
                      top: this.pageY,
                    },
                    o = i()(this.options.container).offset();
                  (n.top -= o.top),
                    (n.left -= o.left),
                    this.$popover.css({
                      display: 'block',
                      left: Math.max(n.left, 0) + -5,
                      top: n.top + 5,
                    }),
                    this.context.invoke(
                      'buttons.updateCurrentStyle',
                      this.$popover,
                    );
                }
              },
            },
            {
              key: 'updateCodeview',
              value: function (t) {
                this.ui.toggleBtnActive(this.$popover.find('.btn-codeview'), t),
                  t && this.hide();
              },
            },
            {
              key: 'hide',
              value: function () {
                this.hidable && this.$popover.hide();
              },
            },
          ]) && Se(e.prototype, n),
          o && Se(e, o),
          t
        );
      })();

      function Ee(t, e) {
        for (var n = 0; n < e.length; n++) {
          var o = e[n];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            'value' in o && (o.writable = !0),
            Object.defineProperty(t, o.key, o);
        }
      }
      var Ie = (function () {
        function t(e) {
          var n = this;
          !(function (t, e) {
            if (!(t instanceof e))
              throw new TypeError('Cannot call a class as a function');
          })(this, t),
            (this.context = e),
            (this.ui = i.a.summernote.ui),
            (this.$editable = e.layoutInfo.editable),
            (this.options = e.options),
            (this.hint = this.options.hint || []),
            (this.direction = this.options.hintDirection || 'bottom'),
            (this.hints = Array.isArray(this.hint) ? this.hint : [this.hint]),
            (this.events = {
              'summernote.keyup': function (t, e) {
                e.isDefaultPrevented() || n.handleKeyup(e);
              },
              'summernote.keydown': function (t, e) {
                n.handleKeydown(e);
              },
              'summernote.disable summernote.dialog.shown summernote.blur':
                function () {
                  n.hide();
                },
            });
        }
        var e, n, o;
        return (
          (e = t),
          (n = [
            {
              key: 'shouldInitialize',
              value: function () {
                return this.hints.length > 0;
              },
            },
            {
              key: 'initialize',
              value: function () {
                var t = this;
                (this.lastWordRange = null),
                  (this.matchingWord = null),
                  (this.$popover = this.ui
                    .popover({
                      className: 'note-hint-popover',
                      hideArrow: !0,
                      direction: '',
                    })
                    .render()
                    .appendTo(this.options.container)),
                  this.$popover.hide(),
                  (this.$content = this.$popover.find(
                    '.popover-content,.note-popover-content',
                  )),
                  this.$content.on('click', '.note-hint-item', function (e) {
                    t.$content.find('.active').removeClass('active'),
                      i()(e.currentTarget).addClass('active'),
                      t.replace();
                  }),
                  this.$popover.on('mousedown', function (t) {
                    t.preventDefault();
                  });
              },
            },
            {
              key: 'destroy',
              value: function () {
                this.$popover.remove();
              },
            },
            {
              key: 'selectItem',
              value: function (t) {
                this.$content.find('.active').removeClass('active'),
                  t.addClass('active'),
                  (this.$content[0].scrollTop =
                    t[0].offsetTop - this.$content.innerHeight() / 2);
              },
            },
            {
              key: 'moveDown',
              value: function () {
                var t = this.$content.find('.note-hint-item.active'),
                  e = t.next();
                if (e.length) this.selectItem(e);
                else {
                  var n = t.parent().next();
                  n.length ||
                    (n = this.$content.find('.note-hint-group').first()),
                    this.selectItem(n.find('.note-hint-item').first());
                }
              },
            },
            {
              key: 'moveUp',
              value: function () {
                var t = this.$content.find('.note-hint-item.active'),
                  e = t.prev();
                if (e.length) this.selectItem(e);
                else {
                  var n = t.parent().prev();
                  n.length ||
                    (n = this.$content.find('.note-hint-group').last()),
                    this.selectItem(n.find('.note-hint-item').last());
                }
              },
            },
            {
              key: 'replace',
              value: function () {
                var t = this.$content.find('.note-hint-item.active');
                if (t.length) {
                  var e = this.nodeFromItem(t);
                  if (
                    null !== this.matchingWord &&
                    0 === this.matchingWord.length
                  )
                    this.lastWordRange.so = this.lastWordRange.eo;
                  else if (
                    null !== this.matchingWord &&
                    this.matchingWord.length > 0 &&
                    !this.lastWordRange.isCollapsed()
                  ) {
                    var n =
                      this.lastWordRange.eo -
                      this.lastWordRange.so -
                      this.matchingWord.length;
                    n > 0 && (this.lastWordRange.so += n);
                  }
                  if (
                    (this.lastWordRange.insertNode(e),
                    'next' === this.options.hintSelect)
                  ) {
                    var o = document.createTextNode('');
                    i()(e).after(o), wt.createFromNodeBefore(o).select();
                  } else wt.createFromNodeAfter(e).select();
                  (this.lastWordRange = null),
                    this.hide(),
                    this.context.invoke('editor.focus');
                }
              },
            },
            {
              key: 'nodeFromItem',
              value: function (t) {
                var e = this.hints[t.data('index')],
                  n = t.data('item'),
                  o = e.content ? e.content(n) : n;
                return 'string' == typeof o && (o = pt.createText(o)), o;
              },
            },
            {
              key: 'createItemTemplates',
              value: function (t, e) {
                var n = this.hints[t];
                return e.map(function (e) {
                  var o = i()('<div class="note-hint-item"/>');
                  return (
                    o.append(n.template ? n.template(e) : e + ''),
                    o.data({
                      index: t,
                      item: e,
                    }),
                    o
                  );
                });
              },
            },
            {
              key: 'handleKeydown',
              value: function (t) {
                this.$popover.is(':visible') &&
                  (t.keyCode === xt.code.ENTER
                    ? (t.preventDefault(), this.replace())
                    : t.keyCode === xt.code.UP
                      ? (t.preventDefault(), this.moveUp())
                      : t.keyCode === xt.code.DOWN &&
                        (t.preventDefault(), this.moveDown()));
              },
            },
            {
              key: 'searchKeyword',
              value: function (t, e, n) {
                var o = this.hints[t];
                if (o && o.match.test(e) && o.search) {
                  var i = o.match.exec(e);
                  (this.matchingWord = i[0]), o.search(i[1], n);
                } else n();
              },
            },
            {
              key: 'createGroup',
              value: function (t, e) {
                var n = this,
                  o = i()(
                    '<div class="note-hint-group note-hint-group-' +
                      t +
                      '"></div>',
                  );
                return (
                  this.searchKeyword(t, e, function (e) {
                    (e = e || []).length &&
                      (o.html(n.createItemTemplates(t, e)), n.show());
                  }),
                  o
                );
              },
            },
            {
              key: 'handleKeyup',
              value: function (t) {
                var e = this;
                if (
                  !C.contains(
                    [xt.code.ENTER, xt.code.UP, xt.code.DOWN],
                    t.keyCode,
                  )
                ) {
                  var n,
                    o,
                    r = this.context.invoke('editor.getLastRange');
                  if ('words' === this.options.hintMode) {
                    if (
                      ((n = r.getWordsRange(r)),
                      (o = n.toString()),
                      this.hints.forEach(function (t) {
                        if (t.match.test(o))
                          return (n = r.getWordsMatchRange(t.match)), !1;
                      }),
                      !n)
                    )
                      return void this.hide();
                    o = n.toString();
                  } else (n = r.getWordRange()), (o = n.toString());
                  if (this.hints.length && o) {
                    this.$content.empty();
                    var a = g.rect2bnd(C.last(n.getClientRects())),
                      s = i()(this.options.container).offset();
                    a &&
                      ((a.top -= s.top),
                      (a.left -= s.left),
                      this.$popover.hide(),
                      (this.lastWordRange = n),
                      this.hints.forEach(function (t, n) {
                        t.match.test(o) &&
                          e.createGroup(n, o).appendTo(e.$content);
                      }),
                      this.$content
                        .find('.note-hint-item:first')
                        .addClass('active'),
                      'top' === this.direction
                        ? this.$popover.css({
                            left: a.left,
                            top: a.top - this.$popover.outerHeight() - 5,
                          })
                        : this.$popover.css({
                            left: a.left,
                            top: a.top + a.height + 5,
                          }));
                  } else this.hide();
                }
              },
            },
            {
              key: 'show',
              value: function () {
                this.$popover.show();
              },
            },
            {
              key: 'hide',
              value: function () {
                this.$popover.hide();
              },
            },
          ]) && Ee(e.prototype, n),
          o && Ee(e, o),
          t
        );
      })();
      i.a.summernote = i.a.extend(i.a.summernote, {
        version: '0.8.18',
        plugins: {},
        dom: pt,
        range: wt,
        lists: C,
        options: {
          langInfo: i.a.summernote.lang['en-US'],
          editing: !0,
          modules: {
            editor: Ht,
            clipboard: Bt,
            dropzone: Ot,
            codeview: Kt,
            statusbar: Vt,
            fullscreen: Gt,
            handle: Zt,
            hintPopover: Ie,
            autoLink: Jt,
            autoSync: ee,
            autoReplace: oe,
            placeholder: re,
            buttons: se,
            toolbar: ce,
            linkDialog: de,
            linkPopover: fe,
            imageDialog: me,
            imagePopover: ge,
            tablePopover: ye,
            videoDialog: we,
            helpDialog: xe,
            airPopover: Te,
          },
          buttons: {},
          lang: 'en-US',
          followingToolbar: !1,
          toolbarPosition: 'top',
          otherStaticBar: '',
          codeviewKeepButton: !1,
          toolbar: [
            ['style', ['style']],
            ['font', ['bold', 'underline', 'clear']],
            ['fontname', ['fontname']],
            ['color', ['color']],
            ['para', ['ul', 'ol', 'paragraph']],
            ['table', ['table']],
            ['insert', ['link', 'picture', 'video']],
            ['view', ['fullscreen', 'codeview', 'help']],
          ],
          popatmouse: !0,
          popover: {
            image: [
              [
                'resize',
                ['resizeFull', 'resizeHalf', 'resizeQuarter', 'resizeNone'],
              ],
              ['float', ['floatLeft', 'floatRight', 'floatNone']],
              ['remove', ['removeMedia']],
            ],
            link: [['link', ['linkDialogShow', 'unlink']]],
            table: [
              ['add', ['addRowDown', 'addRowUp', 'addColLeft', 'addColRight']],
              ['delete', ['deleteRow', 'deleteCol', 'deleteTable']],
            ],
            air: [
              ['color', ['color']],
              ['font', ['bold', 'underline', 'clear']],
              ['para', ['ul', 'paragraph']],
              ['table', ['table']],
              ['insert', ['link', 'picture']],
              ['view', ['fullscreen', 'codeview']],
            ],
          },
          airMode: !1,
          overrideContextMenu: !1,
          width: null,
          height: null,
          linkTargetBlank: !0,
          useProtocol: !0,
          defaultProtocol: 'http://',
          focus: !1,
          tabDisabled: !1,
          tabSize: 4,
          styleWithCSS: !1,
          shortcuts: !0,
          textareaAutoSync: !0,
          tooltip: 'auto',
          container: null,
          maxTextLength: 0,
          blockquoteBreakingLevel: 2,
          spellCheck: !0,
          disableGrammar: !1,
          placeholder: null,
          inheritPlaceholder: !1,
          recordEveryKeystroke: !1,
          historyLimit: 200,
          showDomainOnlyForAutolink: !1,
          hintMode: 'word',
          hintSelect: 'after',
          hintDirection: 'bottom',
          styleTags: [
            'p',
            'blockquote',
            'pre',
            'h1',
            'h2',
            'h3',
            'h4',
            'h5',
            'h6',
          ],
          fontNames: [
            'Arial',
            'Arial Black',
            'Comic Sans MS',
            'Courier New',
            'Helvetica Neue',
            'Helvetica',
            'Impact',
            'Lucida Grande',
            'Tahoma',
            'Times New Roman',
            'Verdana',
          ],
          fontNamesIgnoreCheck: [],
          addDefaultFonts: !0,
          fontSizes: ['8', '9', '10', '11', '12', '14', '18', '24', '36'],
          fontSizeUnits: ['px', 'pt'],
          colors: [
            [
              '#000000',
              '#424242',
              '#636363',
              '#9C9C94',
              '#CEC6CE',
              '#EFEFEF',
              '#F7F7F7',
              '#FFFFFF',
            ],
            [
              '#FF0000',
              '#FF9C00',
              '#FFFF00',
              '#00FF00',
              '#00FFFF',
              '#0000FF',
              '#9C00FF',
              '#FF00FF',
            ],
            [
              '#F7C6CE',
              '#FFE7CE',
              '#FFEFC6',
              '#D6EFD6',
              '#CEDEE7',
              '#CEE7F7',
              '#D6D6E7',
              '#E7D6DE',
            ],
            [
              '#E79C9C',
              '#FFC69C',
              '#FFE79C',
              '#B5D6A5',
              '#A5C6CE',
              '#9CC6EF',
              '#B5A5D6',
              '#D6A5BD',
            ],
            [
              '#E76363',
              '#F7AD6B',
              '#FFD663',
              '#94BD7B',
              '#73A5AD',
              '#6BADDE',
              '#8C7BC6',
              '#C67BA5',
            ],
            [
              '#CE0000',
              '#E79439',
              '#EFC631',
              '#6BA54A',
              '#4A7B8C',
              '#3984C6',
              '#634AA5',
              '#A54A7B',
            ],
            [
              '#9C0000',
              '#B56308',
              '#BD9400',
              '#397B21',
              '#104A5A',
              '#085294',
              '#311873',
              '#731842',
            ],
            [
              '#630000',
              '#7B3900',
              '#846300',
              '#295218',
              '#083139',
              '#003163',
              '#21104A',
              '#4A1031',
            ],
          ],
          colorsName: [
            [
              'Black',
              'Tundora',
              'Dove Gray',
              'Star Dust',
              'Pale Slate',
              'Gallery',
              'Alabaster',
              'White',
            ],
            [
              'Red',
              'Orange Peel',
              'Yellow',
              'Green',
              'Cyan',
              'Blue',
              'Electric Violet',
              'Magenta',
            ],
            [
              'Azalea',
              'Karry',
              'Egg White',
              'Zanah',
              'Botticelli',
              'Tropical Blue',
              'Mischka',
              'Twilight',
            ],
            [
              'Tonys Pink',
              'Peach Orange',
              'Cream Brulee',
              'Sprout',
              'Casper',
              'Perano',
              'Cold Purple',
              'Careys Pink',
            ],
            [
              'Mandy',
              'Rajah',
              'Dandelion',
              'Olivine',
              'Gulf Stream',
              'Viking',
              'Blue Marguerite',
              'Puce',
            ],
            [
              'Guardsman Red',
              'Fire Bush',
              'Golden Dream',
              'Chelsea Cucumber',
              'Smalt Blue',
              'Boston Blue',
              'Butterfly Bush',
              'Cadillac',
            ],
            [
              'Sangria',
              'Mai Tai',
              'Buddha Gold',
              'Forest Green',
              'Eden',
              'Venice Blue',
              'Meteorite',
              'Claret',
            ],
            [
              'Rosewood',
              'Cinnamon',
              'Olive',
              'Parsley',
              'Tiber',
              'Midnight Blue',
              'Valentino',
              'Loulou',
            ],
          ],
          colorButton: {
            foreColor: '#000000',
            backColor: '#FFFF00',
          },
          lineHeights: ['1.0', '1.2', '1.4', '1.5', '1.6', '1.8', '2.0', '3.0'],
          tableClassName: 'table table-bordered',
          insertTableMaxSize: {
            col: 10,
            row: 10,
          },
          dialogsInBody: !1,
          dialogsFade: !1,
          maximumImageFileSize: null,
          callbacks: {
            onBeforeCommand: null,
            onBlur: null,
            onBlurCodeview: null,
            onChange: null,
            onChangeCodeview: null,
            onDialogShown: null,
            onEnter: null,
            onFocus: null,
            onImageLinkInsert: null,
            onImageUpload: null,
            onImageUploadError: null,
            onInit: null,
            onKeydown: null,
            onKeyup: null,
            onMousedown: null,
            onMouseup: null,
            onPaste: null,
            onScroll: null,
          },
          codemirror: {
            mode: 'text/html',
            htmlMode: !0,
            lineNumbers: !0,
          },
          codeviewFilter: !1,
          codeviewFilterRegex:
            /<\/*(?:applet|b(?:ase|gsound|link)|embed|frame(?:set)?|ilayer|l(?:ayer|ink)|meta|object|s(?:cript|tyle)|t(?:itle|extarea)|xml)[^>]*?>/gi,
          codeviewIframeFilter: !0,
          codeviewIframeWhitelistSrc: [],
          codeviewIframeWhitelistSrcBase: [
            'www.youtube.com',
            'www.youtube-nocookie.com',
            'www.facebook.com',
            'vine.co',
            'instagram.com',
            'player.vimeo.com',
            'www.dailymotion.com',
            'player.youku.com',
            'v.qq.com',
          ],
          keyMap: {
            pc: {
              ESC: 'escape',
              ENTER: 'insertParagraph',
              'CTRL+Z': 'undo',
              'CTRL+Y': 'redo',
              TAB: 'tab',
              'SHIFT+TAB': 'untab',
              'CTRL+B': 'bold',
              'CTRL+I': 'italic',
              'CTRL+U': 'underline',
              'CTRL+SHIFT+S': 'strikethrough',
              'CTRL+BACKSLASH': 'removeFormat',
              'CTRL+SHIFT+L': 'justifyLeft',
              'CTRL+SHIFT+E': 'justifyCenter',
              'CTRL+SHIFT+R': 'justifyRight',
              'CTRL+SHIFT+J': 'justifyFull',
              'CTRL+SHIFT+NUM7': 'insertUnorderedList',
              'CTRL+SHIFT+NUM8': 'insertOrderedList',
              'CTRL+LEFTBRACKET': 'outdent',
              'CTRL+RIGHTBRACKET': 'indent',
              'CTRL+NUM0': 'formatPara',
              'CTRL+NUM1': 'formatH1',
              'CTRL+NUM2': 'formatH2',
              'CTRL+NUM3': 'formatH3',
              'CTRL+NUM4': 'formatH4',
              'CTRL+NUM5': 'formatH5',
              'CTRL+NUM6': 'formatH6',
              'CTRL+ENTER': 'insertHorizontalRule',
              'CTRL+K': 'linkDialog.show',
            },
            mac: {
              ESC: 'escape',
              ENTER: 'insertParagraph',
              'CMD+Z': 'undo',
              'CMD+SHIFT+Z': 'redo',
              TAB: 'tab',
              'SHIFT+TAB': 'untab',
              'CMD+B': 'bold',
              'CMD+I': 'italic',
              'CMD+U': 'underline',
              'CMD+SHIFT+S': 'strikethrough',
              'CMD+BACKSLASH': 'removeFormat',
              'CMD+SHIFT+L': 'justifyLeft',
              'CMD+SHIFT+E': 'justifyCenter',
              'CMD+SHIFT+R': 'justifyRight',
              'CMD+SHIFT+J': 'justifyFull',
              'CMD+SHIFT+NUM7': 'insertUnorderedList',
              'CMD+SHIFT+NUM8': 'insertOrderedList',
              'CMD+LEFTBRACKET': 'outdent',
              'CMD+RIGHTBRACKET': 'indent',
              'CMD+NUM0': 'formatPara',
              'CMD+NUM1': 'formatH1',
              'CMD+NUM2': 'formatH2',
              'CMD+NUM3': 'formatH3',
              'CMD+NUM4': 'formatH4',
              'CMD+NUM5': 'formatH5',
              'CMD+NUM6': 'formatH6',
              'CMD+ENTER': 'insertHorizontalRule',
              'CMD+K': 'linkDialog.show',
            },
          },
          icons: {
            align: 'note-icon-align',
            alignCenter: 'note-icon-align-center',
            alignJustify: 'note-icon-align-justify',
            alignLeft: 'note-icon-align-left',
            alignRight: 'note-icon-align-right',
            rowBelow: 'note-icon-row-below',
            colBefore: 'note-icon-col-before',
            colAfter: 'note-icon-col-after',
            rowAbove: 'note-icon-row-above',
            rowRemove: 'note-icon-row-remove',
            colRemove: 'note-icon-col-remove',
            indent: 'note-icon-align-indent',
            outdent: 'note-icon-align-outdent',
            arrowsAlt: 'note-icon-arrows-alt',
            bold: 'note-icon-bold',
            caret: 'note-icon-caret',
            circle: 'note-icon-circle',
            close: 'note-icon-close',
            code: 'note-icon-code',
            eraser: 'note-icon-eraser',
            floatLeft: 'note-icon-float-left',
            floatRight: 'note-icon-float-right',
            font: 'note-icon-font',
            frame: 'note-icon-frame',
            italic: 'note-icon-italic',
            link: 'note-icon-link',
            unlink: 'note-icon-chain-broken',
            magic: 'note-icon-magic',
            menuCheck: 'note-icon-menu-check',
            minus: 'note-icon-minus',
            orderedlist: 'note-icon-orderedlist',
            pencil: 'note-icon-pencil',
            picture: 'note-icon-picture',
            question: 'note-icon-question',
            redo: 'note-icon-redo',
            rollback: 'note-icon-rollback',
            square: 'note-icon-square',
            strikethrough: 'note-icon-strikethrough',
            subscript: 'note-icon-subscript',
            superscript: 'note-icon-superscript',
            table: 'note-icon-table',
            textHeight: 'note-icon-text-height',
            trash: 'note-icon-trash',
            underline: 'note-icon-underline',
            undo: 'note-icon-undo',
            unorderedlist: 'note-icon-unorderedlist',
            video: 'note-icon-video',
          },
        },
      });
    },
    5: function (t, e, n) {},
    53: function (t, e, n) {
      'use strict';
      n.r(e);
      var o = n(0),
        i = n.n(o),
        r = n(1);

      function a(t) {
        return (a =
          'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  'function' == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? 'symbol'
                  : typeof t;
              })(t);
      }
      var s = r.a.create('<div class="note-editor note-frame card"/>'),
        l = r.a.create(
          '<div class="note-toolbar card-header" role="toolbar"/>',
        ),
        c = r.a.create('<div class="note-editing-area"/>'),
        u = r.a.create(
          '<textarea class="note-codable" aria-multiline="true"/>',
        ),
        d = r.a.create(
          '<div class="note-editable card-block" contentEditable="true" role="textbox" aria-multiline="true"/>',
        ),
        h = r.a.create(
          [
            '<output class="note-status-output" role="status" aria-live="polite"></output>',
            '<div class="note-statusbar" role="status">',
            '<div class="note-resizebar" aria-label="Resize">',
            '<div class="note-icon-bar"></div>',
            '<div class="note-icon-bar"></div>',
            '<div class="note-icon-bar"></div>',
            '</div>',
            '</div>',
          ].join(''),
        ),
        f = r.a.create('<div class="note-editor note-airframe"/>'),
        p = r.a.create(
          [
            '<div class="note-editable" contentEditable="true" role="textbox" aria-multiline="true"></div>',
            '<output class="note-status-output" role="status" aria-live="polite"></output>',
          ].join(''),
        ),
        m = r.a.create('<div class="note-btn-group btn-group">'),
        v = r.a.create(
          '<div class="note-dropdown-menu dropdown-menu" role="list">',
          function (t, e) {
            var n = Array.isArray(e.items)
              ? e.items
                  .map(function (t) {
                    var n = 'string' == typeof t ? t : t.value || '',
                      o = e.template ? e.template(t) : t,
                      i = 'object' === a(t) ? t.option : void 0;
                    return (
                      '<a class="dropdown-item" href="#!" ' +
                      ('data-value="' +
                        n +
                        '"' +
                        (void 0 !== i ? ' data-option="' + i + '"' : '')) +
                      ' role="listitem" aria-label="' +
                      n +
                      '">' +
                      o +
                      '</a>'
                    );
                  })
                  .join('')
              : e.items;
            t.html(n).attr({
              'aria-label': e.title,
            }),
              e && e.codeviewKeepButton && t.addClass('note-codeview-keep');
          },
        ),
        g = function (t) {
          return t;
        },
        b = r.a.create(
          '<div class="note-dropdown-menu dropdown-menu note-check" role="list">',
          function (t, e) {
            var n = Array.isArray(e.items)
              ? e.items
                  .map(function (t) {
                    var n = 'string' == typeof t ? t : t.value || '',
                      o = e.template ? e.template(t) : t;
                    return (
                      '<a class="dropdown-item" href="#!" data-value="' +
                      n +
                      '" role="listitem" aria-label="' +
                      t +
                      '">' +
                      C(e.checkClassName) +
                      ' ' +
                      o +
                      '</a>'
                    );
                  })
                  .join('')
              : e.items;
            t.html(n).attr({
              'aria-label': e.title,
            }),
              e && e.codeviewKeepButton && t.addClass('note-codeview-keep');
          },
        ),
        y = r.a.create(
          '<div class="modal note-modal" aria-hidden="false" tabindex="-1" role="dialog"/>',
          function (t, e) {
            e.fade && t.addClass('fade'),
              t.attr({
                'aria-label': e.title,
              }),
              t.html(
                [
                  '<div class="modal-dialog">',
                  '<div class="modal-content">',
                  e.title
                    ? '<div class="modal-header"><h4 class="modal-title">' +
                      e.title +
                      '</h4><button type="button" class="close" data-dismiss="modal" aria-label="Close" aria-hidden="true">&times;</button></div>'
                    : '',
                  '<div class="modal-body">' + e.body + '</div>',
                  e.footer
                    ? '<div class="modal-footer">' + e.footer + '</div>'
                    : '',
                  '</div>',
                  '</div>',
                ].join(''),
              );
          },
        ),
        k = r.a.create(
          [
            '<div class="note-popover popover in">',
            '<div class="arrow"></div>',
            '<div class="popover-content note-children-container"></div>',
            '</div>',
          ].join(''),
          function (t, e) {
            var n = void 0 !== e.direction ? e.direction : 'bottom';
            t.addClass(n), e.hideArrow && t.find('.arrow').hide();
          },
        ),
        w = r.a.create('<div class="form-check"></div>', function (t, e) {
          t.html(
            [
              '<label class="form-check-label"' +
                (e.id ? ' for="note-' + e.id + '"' : '') +
                '>',
              '<input type="checkbox" class="form-check-input"' +
                (e.id ? ' id="note-' + e.id + '"' : ''),
              e.checked ? ' checked' : '',
              ' aria-label="' + (e.text ? e.text : '') + '"',
              ' aria-checked="' + (e.checked ? 'true' : 'false') + '"/>',
              ' ' + (e.text ? e.text : '') + '</label>',
            ].join(''),
          );
        }),
        C = function (t, e) {
          return '<' + (e = e || 'i') + ' class="' + t + '"></' + e + '>';
        },
        x = function (t) {
          return {
            editor: s,
            toolbar: l,
            editingArea: c,
            codable: u,
            editable: d,
            statusbar: h,
            airEditor: f,
            airEditable: p,
            buttonGroup: m,
            dropdown: v,
            dropdownButtonContents: g,
            dropdownCheck: b,
            dialog: y,
            popover: k,
            icon: C,
            checkbox: w,
            options: t,
            palette: function (e, n) {
              return r.a.create(
                '<div class="note-color-palette"/>',
                function (e, n) {
                  for (var o = [], i = 0, r = n.colors.length; i < r; i++) {
                    for (
                      var a = n.eventName,
                        s = n.colors[i],
                        l = n.colorsName[i],
                        c = [],
                        u = 0,
                        d = s.length;
                      u < d;
                      u++
                    ) {
                      var h = s[u],
                        f = l[u];
                      c.push(
                        [
                          '<button type="button" class="note-color-btn"',
                          'style="background-color:',
                          h,
                          '" ',
                          'data-event="',
                          a,
                          '" ',
                          'data-value="',
                          h,
                          '" ',
                          'title="',
                          f,
                          '" ',
                          'aria-label="',
                          f,
                          '" ',
                          'data-bs-toggle="button" tabindex="-1"></button>',
                        ].join(''),
                      );
                    }
                    o.push(
                      '<div class="note-color-row">' + c.join('') + '</div>',
                    );
                  }
                  e.html(o.join('')),
                    n.tooltip &&
                      e.find('.note-color-btn').tooltip({
                        container: n.container || t.container,
                        trigger: 'hover',
                        placement: 'bottom',
                      });
                },
              )(e, n);
            },
            button: function (e, n) {
              return r.a.create(
                '<button type="button" class="note-btn btn btn-light btn-sm" tabindex="-1">',
                function (e, n) {
                  n &&
                    n.tooltip &&
                    e
                      .attr({
                        title: n.tooltip,
                        'aria-label': n.tooltip,
                      })
                      .tooltip({
                        container: n.container || t.container,
                        trigger: 'hover',
                        placement: 'bottom',
                      })
                      .on('click', function (t) {
                        i()(t.currentTarget).tooltip('hide');
                      }),
                    n && n.codeviewButton && e.addClass('note-codeview-keep');
                },
              )(e, n);
            },
            toggleBtn: function (t, e) {
              t.toggleClass('disabled', !e), t.attr('disabled', !e);
            },
            toggleBtnActive: function (t, e) {
              t.toggleClass('active', e);
            },
            onDialogShown: function (t, e) {
              t.one('shown.bs.modal', e);
            },
            onDialogHidden: function (t, e) {
              t.one('hidden.bs.modal', e);
            },
            showDialog: function (t) {
              t.modal('show');
            },
            hideDialog: function (t) {
              t.modal('hide');
            },
            createLayout: function (e) {
              var n = (
                t.airMode
                  ? f([c([u(), p()])])
                  : 'bottom' === t.toolbarPosition
                    ? s([c([u(), d()]), l(), h()])
                    : s([l(), c([u(), d()]), h()])
              ).render();
              return (
                n.insertAfter(e),
                {
                  note: e,
                  editor: n,
                  toolbar: n.find('.note-toolbar'),
                  editingArea: n.find('.note-editing-area'),
                  editable: n.find('.note-editable'),
                  codable: n.find('.note-codable'),
                  statusbar: n.find('.note-statusbar'),
                }
              );
            },
            removeLayout: function (t, e) {
              t.html(e.editable.html()), e.editor.remove(), t.show();
            },
          };
        };
      n(3), n(5);
      (i.a.summernote = i.a.extend(i.a.summernote, {
        ui_template: x,
        interface: 'bs4',
      })),
        (i.a.summernote.options.styleTags = [
          'p',
          {
            title: 'Blockquote',
            tag: 'blockquote',
            className: 'blockquote',
            value: 'blockquote',
          },
          'pre',
          'h1',
          'h2',
          'h3',
          'h4',
          'h5',
          'h6',
        ]);
    },
  });
});
//# sourceMappingURL=summernote-bs4.min.js.map
