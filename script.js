!(function (t, e) {
  "object" == typeof module && "object" == typeof module.exports
    ? (module.exports = t.document
        ? e(t, !0)
        : function (t) {
            if (!t.document)
              throw new Error("jQuery requires a window with a document");
            return e(t);
          })
    : e(t);
})("undefined" != typeof window ? window : this, function (t, e) {
  function i(t) {
    var e = !!t && "length" in t && t.length,
      i = ot.type(t);
    return (
      "function" !== i &&
      !ot.isWindow(t) &&
      ("array" === i ||
        0 === e ||
        ("number" == typeof e && e > 0 && e - 1 in t))
    );
  }
  function n(t, e, i) {
    if (ot.isFunction(e))
      return ot.grep(t, function (t, n) {
        return !!e.call(t, n, t) !== i;
      });
    if (e.nodeType)
      return ot.grep(t, function (t) {
        return (t === e) !== i;
      });
    if ("string" == typeof e) {
      if (mt.test(e)) return ot.filter(e, t, i);
      e = ot.filter(e, t);
    }
    return ot.grep(t, function (t) {
      return J.call(e, t) > -1 !== i;
    });
  }
  function r(t, e) {
    for (; (t = t[e]) && 1 !== t.nodeType; );
    return t;
  }
  function o(t) {
    var e = {};
    return (
      ot.each(t.match(Tt) || [], function (t, i) {
        e[i] = !0;
      }),
      e
    );
  }
  function s() {
    G.removeEventListener("DOMContentLoaded", s),
      t.removeEventListener("load", s),
      ot.ready();
  }
  function a() {
    this.expando = ot.expando + a.uid++;
  }
  function l(t, e, i) {
    var n;
    if (void 0 === i && 1 === t.nodeType)
      if (
        ((n = "data-" + e.replace(It, "-$&").toLowerCase()),
        (i = t.getAttribute(n)),
        "string" == typeof i)
      ) {
        try {
          i =
            "true" === i ||
            ("false" !== i &&
              ("null" === i
                ? null
                : +i + "" === i
                ? +i
                : At.test(i)
                ? ot.parseJSON(i)
                : i));
        } catch (t) {}
        St.set(t, e, i);
      } else i = void 0;
    return i;
  }
  function h(t, e, i, n) {
    var r,
      o = 1,
      s = 20,
      a = n
        ? function () {
            return n.cur();
          }
        : function () {
            return ot.css(t, e, "");
          },
      l = a(),
      h = (i && i[3]) || (ot.cssNumber[e] ? "" : "px"),
      u = (ot.cssNumber[e] || ("px" !== h && +l)) && Pt.exec(ot.css(t, e));
    if (u && u[3] !== h) {
      (h = h || u[3]), (i = i || []), (u = +l || 1);
      do (o = o || ".5"), (u /= o), ot.style(t, e, u + h);
      while (o !== (o = a() / l) && 1 !== o && --s);
    }
    return (
      i &&
        ((u = +u || +l || 0),
        (r = i[1] ? u + (i[1] + 1) * i[2] : +i[2]),
        n && ((n.unit = h), (n.start = u), (n.end = r))),
      r
    );
  }
  function u(t, e) {
    var i =
      "undefined" != typeof t.getElementsByTagName
        ? t.getElementsByTagName(e || "*")
        : "undefined" != typeof t.querySelectorAll
        ? t.querySelectorAll(e || "*")
        : [];
    return void 0 === e || (e && ot.nodeName(t, e)) ? ot.merge([t], i) : i;
  }
  function c(t, e) {
    for (var i = 0, n = t.length; n > i; i++)
      Ct.set(t[i], "globalEval", !e || Ct.get(e[i], "globalEval"));
  }
  function f(t, e, i, n, r) {
    for (
      var o,
        s,
        a,
        l,
        h,
        f,
        d = e.createDocumentFragment(),
        p = [],
        m = 0,
        g = t.length;
      g > m;
      m++
    )
      if (((o = t[m]), o || 0 === o))
        if ("object" === ot.type(o)) ot.merge(p, o.nodeType ? [o] : o);
        else if (zt.test(o)) {
          for (
            s = s || d.appendChild(e.createElement("div")),
              a = (Nt.exec(o) || ["", ""])[1].toLowerCase(),
              l = Mt[a] || Mt._default,
              s.innerHTML = l[1] + ot.htmlPrefilter(o) + l[2],
              f = l[0];
            f--;

          )
            s = s.lastChild;
          ot.merge(p, s.childNodes), (s = d.firstChild), (s.textContent = "");
        } else p.push(e.createTextNode(o));
    for (d.textContent = "", m = 0; (o = p[m++]); )
      if (n && ot.inArray(o, n) > -1) r && r.push(o);
      else if (
        ((h = ot.contains(o.ownerDocument, o)),
        (s = u(d.appendChild(o), "script")),
        h && c(s),
        i)
      )
        for (f = 0; (o = s[f++]); ) Rt.test(o.type || "") && i.push(o);
    return d;
  }
  function d() {
    return !0;
  }
  function p() {
    return !1;
  }
  function m() {
    try {
      return G.activeElement;
    } catch (t) {}
  }
  function g(t, e, i, n, r, o) {
    var s, a;
    if ("object" == typeof e) {
      "string" != typeof i && ((n = n || i), (i = void 0));
      for (a in e) g(t, a, i, n, e[a], o);
      return t;
    }
    if (
      (null == n && null == r
        ? ((r = i), (n = i = void 0))
        : null == r &&
          ("string" == typeof i
            ? ((r = n), (n = void 0))
            : ((r = n), (n = i), (i = void 0))),
      r === !1)
    )
      r = p;
    else if (!r) return t;
    return (
      1 === o &&
        ((s = r),
        (r = function (t) {
          return ot().off(t), s.apply(this, arguments);
        }),
        (r.guid = s.guid || (s.guid = ot.guid++))),
      t.each(function () {
        ot.event.add(this, e, r, n, i);
      })
    );
  }
  function v(t, e) {
    return ot.nodeName(t, "table") &&
      ot.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr")
      ? t.getElementsByTagName("tbody")[0] ||
          t.appendChild(t.ownerDocument.createElement("tbody"))
      : t;
  }
  function y(t) {
    return (t.type = (null !== t.getAttribute("type")) + "/" + t.type), t;
  }
  function _(t) {
    var e = Vt.exec(t.type);
    return e ? (t.type = e[1]) : t.removeAttribute("type"), t;
  }
  function b(t, e) {
    var i, n, r, o, s, a, l, h;
    if (1 === e.nodeType) {
      if (
        Ct.hasData(t) &&
        ((o = Ct.access(t)), (s = Ct.set(e, o)), (h = o.events))
      ) {
        delete s.handle, (s.events = {});
        for (r in h)
          for (i = 0, n = h[r].length; n > i; i++) ot.event.add(e, r, h[r][i]);
      }
      St.hasData(t) &&
        ((a = St.access(t)), (l = ot.extend({}, a)), St.set(e, l));
    }
  }
  function T(t, e) {
    var i = e.nodeName.toLowerCase();
    "input" === i && Lt.test(t.type)
      ? (e.checked = t.checked)
      : ("input" !== i && "textarea" !== i) ||
        (e.defaultValue = t.defaultValue);
  }
  function x(t, e, i, n) {
    e = K.apply([], e);
    var r,
      o,
      s,
      a,
      l,
      h,
      c = 0,
      d = t.length,
      p = d - 1,
      m = e[0],
      g = ot.isFunction(m);
    if (g || (d > 1 && "string" == typeof m && !nt.checkClone && qt.test(m)))
      return t.each(function (r) {
        var o = t.eq(r);
        g && (e[0] = m.call(this, r, o.html())), x(o, e, i, n);
      });
    if (
      d &&
      ((r = f(e, t[0].ownerDocument, !1, t, n)),
      (o = r.firstChild),
      1 === r.childNodes.length && (r = o),
      o || n)
    ) {
      for (s = ot.map(u(r, "script"), y), a = s.length; d > c; c++)
        (l = r),
          c !== p &&
            ((l = ot.clone(l, !0, !0)), a && ot.merge(s, u(l, "script"))),
          i.call(t[c], l, c);
      if (a)
        for (h = s[s.length - 1].ownerDocument, ot.map(s, _), c = 0; a > c; c++)
          (l = s[c]),
            Rt.test(l.type || "") &&
              !Ct.access(l, "globalEval") &&
              ot.contains(h, l) &&
              (l.src
                ? ot._evalUrl && ot._evalUrl(l.src)
                : ot.globalEval(l.textContent.replace(Ut, "")));
    }
    return t;
  }
  function w(t, e, i) {
    for (var n, r = e ? ot.filter(e, t) : t, o = 0; null != (n = r[o]); o++)
      i || 1 !== n.nodeType || ot.cleanData(u(n)),
        n.parentNode &&
          (i && ot.contains(n.ownerDocument, n) && c(u(n, "script")),
          n.parentNode.removeChild(n));
    return t;
  }
  function E(t, e) {
    var i = ot(e.createElement(t)).appendTo(e.body),
      n = ot.css(i[0], "display");
    return i.detach(), n;
  }
  function C(t) {
    var e = G,
      i = Yt[t];
    return (
      i ||
        ((i = E(t, e)),
        ("none" !== i && i) ||
          (($t = (
            $t || ot("<iframe frameborder='0' width='0' height='0'/>")
          ).appendTo(e.documentElement)),
          (e = $t[0].contentDocument),
          e.write(),
          e.close(),
          (i = E(t, e)),
          $t.detach()),
        (Yt[t] = i)),
      i
    );
  }
  function S(t, e, i) {
    var n,
      r,
      o,
      s,
      a = t.style;
    return (
      (i = i || Qt(t)),
      (s = i ? i.getPropertyValue(e) || i[e] : void 0),
      ("" !== s && void 0 !== s) ||
        ot.contains(t.ownerDocument, t) ||
        (s = ot.style(t, e)),
      i &&
        !nt.pixelMarginRight() &&
        Gt.test(s) &&
        Xt.test(e) &&
        ((n = a.width),
        (r = a.minWidth),
        (o = a.maxWidth),
        (a.minWidth = a.maxWidth = a.width = s),
        (s = i.width),
        (a.width = n),
        (a.minWidth = r),
        (a.maxWidth = o)),
      void 0 !== s ? s + "" : s
    );
  }
  function A(t, e) {
    return {
      get: function () {
        return t()
          ? void delete this.get
          : (this.get = e).apply(this, arguments);
      },
    };
  }
  function I(t) {
    if (t in ne) return t;
    for (var e = t[0].toUpperCase() + t.slice(1), i = ie.length; i--; )
      if (((t = ie[i] + e), t in ne)) return t;
  }
  function D(t, e, i) {
    var n = Pt.exec(e);
    return n ? Math.max(0, n[2] - (i || 0)) + (n[3] || "px") : e;
  }
  function P(t, e, i, n, r) {
    for (
      var o = i === (n ? "border" : "content") ? 4 : "width" === e ? 1 : 0,
        s = 0;
      4 > o;
      o += 2
    )
      "margin" === i && (s += ot.css(t, i + kt[o], !0, r)),
        n
          ? ("content" === i && (s -= ot.css(t, "padding" + kt[o], !0, r)),
            "margin" !== i &&
              (s -= ot.css(t, "border" + kt[o] + "Width", !0, r)))
          : ((s += ot.css(t, "padding" + kt[o], !0, r)),
            "padding" !== i &&
              (s += ot.css(t, "border" + kt[o] + "Width", !0, r)));
    return s;
  }
  function k(t, e, i) {
    var n = !0,
      r = "width" === e ? t.offsetWidth : t.offsetHeight,
      o = Qt(t),
      s = "border-box" === ot.css(t, "boxSizing", !1, o);
    if (0 >= r || null == r) {
      if (
        ((r = S(t, e, o)), (0 > r || null == r) && (r = t.style[e]), Gt.test(r))
      )
        return r;
      (n = s && (nt.boxSizingReliable() || r === t.style[e])),
        (r = parseFloat(r) || 0);
    }
    return r + P(t, e, i || (s ? "border" : "content"), n, o) + "px";
  }
  function O(t, e) {
    for (var i, n, r, o = [], s = 0, a = t.length; a > s; s++)
      (n = t[s]),
        n.style &&
          ((o[s] = Ct.get(n, "olddisplay")),
          (i = n.style.display),
          e
            ? (o[s] || "none" !== i || (n.style.display = ""),
              "" === n.style.display &&
                Ot(n) &&
                (o[s] = Ct.access(n, "olddisplay", C(n.nodeName))))
            : ((r = Ot(n)),
              ("none" === i && r) ||
                Ct.set(n, "olddisplay", r ? i : ot.css(n, "display"))));
    for (s = 0; a > s; s++)
      (n = t[s]),
        n.style &&
          ((e && "none" !== n.style.display && "" !== n.style.display) ||
            (n.style.display = e ? o[s] || "" : "none"));
    return t;
  }
  function L(t, e, i, n, r) {
    return new L.prototype.init(t, e, i, n, r);
  }
  function N() {
    return (
      t.setTimeout(function () {
        re = void 0;
      }),
      (re = ot.now())
    );
  }
  function R(t, e) {
    var i,
      n = 0,
      r = {
        height: t,
      };
    for (e = e ? 1 : 0; 4 > n; n += 2 - e)
      (i = kt[n]), (r["margin" + i] = r["padding" + i] = t);
    return e && (r.opacity = r.width = t), r;
  }
  function M(t, e, i) {
    for (
      var n,
        r = (F.tweeners[e] || []).concat(F.tweeners["*"]),
        o = 0,
        s = r.length;
      s > o;
      o++
    )
      if ((n = r[o].call(i, e, t))) return n;
  }
  function z(t, e, i) {
    var n,
      r,
      o,
      s,
      a,
      l,
      h,
      u,
      c = this,
      f = {},
      d = t.style,
      p = t.nodeType && Ot(t),
      m = Ct.get(t, "fxshow");
    i.queue ||
      ((a = ot._queueHooks(t, "fx")),
      null == a.unqueued &&
        ((a.unqueued = 0),
        (l = a.empty.fire),
        (a.empty.fire = function () {
          a.unqueued || l();
        })),
      a.unqueued++,
      c.always(function () {
        c.always(function () {
          a.unqueued--, ot.queue(t, "fx").length || a.empty.fire();
        });
      })),
      1 === t.nodeType &&
        ("height" in e || "width" in e) &&
        ((i.overflow = [d.overflow, d.overflowX, d.overflowY]),
        (h = ot.css(t, "display")),
        (u = "none" === h ? Ct.get(t, "olddisplay") || C(t.nodeName) : h),
        "inline" === u &&
          "none" === ot.css(t, "float") &&
          (d.display = "inline-block")),
      i.overflow &&
        ((d.overflow = "hidden"),
        c.always(function () {
          (d.overflow = i.overflow[0]),
            (d.overflowX = i.overflow[1]),
            (d.overflowY = i.overflow[2]);
        }));
    for (n in e)
      if (((r = e[n]), se.exec(r))) {
        if (
          (delete e[n], (o = o || "toggle" === r), r === (p ? "hide" : "show"))
        ) {
          if ("show" !== r || !m || void 0 === m[n]) continue;
          p = !0;
        }
        f[n] = (m && m[n]) || ot.style(t, n);
      } else h = void 0;
    if (ot.isEmptyObject(f))
      "inline" === ("none" === h ? C(t.nodeName) : h) && (d.display = h);
    else {
      m ? "hidden" in m && (p = m.hidden) : (m = Ct.access(t, "fxshow", {})),
        o && (m.hidden = !p),
        p
          ? ot(t).show()
          : c.done(function () {
              ot(t).hide();
            }),
        c.done(function () {
          var e;
          Ct.remove(t, "fxshow");
          for (e in f) ot.style(t, e, f[e]);
        });
      for (n in f)
        (s = M(p ? m[n] : 0, n, c)),
          n in m ||
            ((m[n] = s.start),
            p &&
              ((s.end = s.start),
              (s.start = "width" === n || "height" === n ? 1 : 0)));
    }
  }
  function j(t, e) {
    var i, n, r, o, s;
    for (i in t)
      if (
        ((n = ot.camelCase(i)),
        (r = e[n]),
        (o = t[i]),
        ot.isArray(o) && ((r = o[1]), (o = t[i] = o[0])),
        i !== n && ((t[n] = o), delete t[i]),
        (s = ot.cssHooks[n]),
        s && "expand" in s)
      ) {
        (o = s.expand(o)), delete t[n];
        for (i in o) i in t || ((t[i] = o[i]), (e[i] = r));
      } else e[n] = r;
  }
  function F(t, e, i) {
    var n,
      r,
      o = 0,
      s = F.prefilters.length,
      a = ot.Deferred().always(function () {
        delete l.elem;
      }),
      l = function () {
        if (r) return !1;
        for (
          var e = re || N(),
            i = Math.max(0, h.startTime + h.duration - e),
            n = i / h.duration || 0,
            o = 1 - n,
            s = 0,
            l = h.tweens.length;
          l > s;
          s++
        )
          h.tweens[s].run(o);
        return (
          a.notifyWith(t, [h, o, i]),
          1 > o && l ? i : (a.resolveWith(t, [h]), !1)
        );
      },
      h = a.promise({
        elem: t,
        props: ot.extend({}, e),
        opts: ot.extend(
          !0,
          {
            specialEasing: {},
            easing: ot.easing._default,
          },
          i
        ),
        originalProperties: e,
        originalOptions: i,
        startTime: re || N(),
        duration: i.duration,
        tweens: [],
        createTween: function (e, i) {
          var n = ot.Tween(
            t,
            h.opts,
            e,
            i,
            h.opts.specialEasing[e] || h.opts.easing
          );
          return h.tweens.push(n), n;
        },
        stop: function (e) {
          var i = 0,
            n = e ? h.tweens.length : 0;
          if (r) return this;
          for (r = !0; n > i; i++) h.tweens[i].run(1);
          return (
            e
              ? (a.notifyWith(t, [h, 1, 0]), a.resolveWith(t, [h, e]))
              : a.rejectWith(t, [h, e]),
            this
          );
        },
      }),
      u = h.props;
    for (j(u, h.opts.specialEasing); s > o; o++)
      if ((n = F.prefilters[o].call(h, t, u, h.opts)))
        return (
          ot.isFunction(n.stop) &&
            (ot._queueHooks(h.elem, h.opts.queue).stop = ot.proxy(n.stop, n)),
          n
        );
    return (
      ot.map(u, M, h),
      ot.isFunction(h.opts.start) && h.opts.start.call(t, h),
      ot.fx.timer(
        ot.extend(l, {
          elem: t,
          anim: h,
          queue: h.opts.queue,
        })
      ),
      h
        .progress(h.opts.progress)
        .done(h.opts.done, h.opts.complete)
        .fail(h.opts.fail)
        .always(h.opts.always)
    );
  }
  function W(t) {
    return (t.getAttribute && t.getAttribute("class")) || "";
  }
  function H(t) {
    return function (e, i) {
      "string" != typeof e && ((i = e), (e = "*"));
      var n,
        r = 0,
        o = e.toLowerCase().match(Tt) || [];
      if (ot.isFunction(i))
        for (; (n = o[r++]); )
          "+" === n[0]
            ? ((n = n.slice(1) || "*"), (t[n] = t[n] || []).unshift(i))
            : (t[n] = t[n] || []).push(i);
    };
  }
  function B(t, e, i, n) {
    function r(a) {
      var l;
      return (
        (o[a] = !0),
        ot.each(t[a] || [], function (t, a) {
          var h = a(e, i, n);
          return "string" != typeof h || s || o[h]
            ? s
              ? !(l = h)
              : void 0
            : (e.dataTypes.unshift(h), r(h), !1);
        }),
        l
      );
    }
    var o = {},
      s = t === Se;
    return r(e.dataTypes[0]) || (!o["*"] && r("*"));
  }
  function q(t, e) {
    var i,
      n,
      r = ot.ajaxSettings.flatOptions || {};
    for (i in e) void 0 !== e[i] && ((r[i] ? t : n || (n = {}))[i] = e[i]);
    return n && ot.extend(!0, t, n), t;
  }
  function V(t, e, i) {
    for (var n, r, o, s, a = t.contents, l = t.dataTypes; "*" === l[0]; )
      l.shift(),
        void 0 === n && (n = t.mimeType || e.getResponseHeader("Content-Type"));
    if (n)
      for (r in a)
        if (a[r] && a[r].test(n)) {
          l.unshift(r);
          break;
        }
    if (l[0] in i) o = l[0];
    else {
      for (r in i) {
        if (!l[0] || t.converters[r + " " + l[0]]) {
          o = r;
          break;
        }
        s || (s = r);
      }
      o = o || s;
    }
    return o ? (o !== l[0] && l.unshift(o), i[o]) : void 0;
  }
  function U(t, e, i, n) {
    var r,
      o,
      s,
      a,
      l,
      h = {},
      u = t.dataTypes.slice();
    if (u[1]) for (s in t.converters) h[s.toLowerCase()] = t.converters[s];
    for (o = u.shift(); o; )
      if (
        (t.responseFields[o] && (i[t.responseFields[o]] = e),
        !l && n && t.dataFilter && (e = t.dataFilter(e, t.dataType)),
        (l = o),
        (o = u.shift()))
      )
        if ("*" === o) o = l;
        else if ("*" !== l && l !== o) {
          if (((s = h[l + " " + o] || h["* " + o]), !s))
            for (r in h)
              if (
                ((a = r.split(" ")),
                a[1] === o && (s = h[l + " " + a[0]] || h["* " + a[0]]))
              ) {
                s === !0
                  ? (s = h[r])
                  : h[r] !== !0 && ((o = a[0]), u.unshift(a[1]));
                break;
              }
          if (s !== !0)
            if (s && t.throws) e = s(e);
            else
              try {
                e = s(e);
              } catch (t) {
                return {
                  state: "parsererror",
                  error: s ? t : "No conversion from " + l + " to " + o,
                };
              }
        }
    return {
      state: "success",
      data: e,
    };
  }
  function $(t, e, i, n) {
    var r;
    if (ot.isArray(e))
      ot.each(e, function (e, r) {
        i || Pe.test(t)
          ? n(t, r)
          : $(
              t + "[" + ("object" == typeof r && null != r ? e : "") + "]",
              r,
              i,
              n
            );
      });
    else if (i || "object" !== ot.type(e)) n(t, e);
    else for (r in e) $(t + "[" + r + "]", e[r], i, n);
  }
  function Y(t) {
    return ot.isWindow(t) ? t : 9 === t.nodeType && t.defaultView;
  }
  var X = [],
    G = t.document,
    Q = X.slice,
    K = X.concat,
    Z = X.push,
    J = X.indexOf,
    tt = {},
    et = tt.toString,
    it = tt.hasOwnProperty,
    nt = {},
    rt = "2.2.4",
    ot = function (t, e) {
      return new ot.fn.init(t, e);
    },
    st = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    at = /^-ms-/,
    lt = /-([\da-z])/gi,
    ht = function (t, e) {
      return e.toUpperCase();
    };
  (ot.fn = ot.prototype =
    {
      jquery: rt,
      constructor: ot,
      selector: "",
      length: 0,
      toArray: function () {
        return Q.call(this);
      },
      get: function (t) {
        return null != t
          ? 0 > t
            ? this[t + this.length]
            : this[t]
          : Q.call(this);
      },
      pushStack: function (t) {
        var e = ot.merge(this.constructor(), t);
        return (e.prevObject = this), (e.context = this.context), e;
      },
      each: function (t) {
        return ot.each(this, t);
      },
      map: function (t) {
        return this.pushStack(
          ot.map(this, function (e, i) {
            return t.call(e, i, e);
          })
        );
      },
      slice: function () {
        return this.pushStack(Q.apply(this, arguments));
      },
      first: function () {
        return this.eq(0);
      },
      last: function () {
        return this.eq(-1);
      },
      eq: function (t) {
        var e = this.length,
          i = +t + (0 > t ? e : 0);
        return this.pushStack(i >= 0 && e > i ? [this[i]] : []);
      },
      end: function () {
        return this.prevObject || this.constructor();
      },
      push: Z,
      sort: X.sort,
      splice: X.splice,
    }),
    (ot.extend = ot.fn.extend =
      function () {
        var t,
          e,
          i,
          n,
          r,
          o,
          s = arguments[0] || {},
          a = 1,
          l = arguments.length,
          h = !1;
        for (
          "boolean" == typeof s && ((h = s), (s = arguments[a] || {}), a++),
            "object" == typeof s || ot.isFunction(s) || (s = {}),
            a === l && ((s = this), a--);
          l > a;
          a++
        )
          if (null != (t = arguments[a]))
            for (e in t)
              (i = s[e]),
                (n = t[e]),
                s !== n &&
                  (h && n && (ot.isPlainObject(n) || (r = ot.isArray(n)))
                    ? (r
                        ? ((r = !1), (o = i && ot.isArray(i) ? i : []))
                        : (o = i && ot.isPlainObject(i) ? i : {}),
                      (s[e] = ot.extend(h, o, n)))
                    : void 0 !== n && (s[e] = n));
        return s;
      }),
    ot.extend({
      expando: "jQuery" + (rt + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function (t) {
        throw new Error(t);
      },
      noop: function () {},
      isFunction: function (t) {
        return "function" === ot.type(t);
      },
      isArray: Array.isArray,
      isWindow: function (t) {
        return null != t && t === t.window;
      },
      isNumeric: function (t) {
        var e = t && t.toString();
        return !ot.isArray(t) && e - parseFloat(e) + 1 >= 0;
      },
      isPlainObject: function (t) {
        var e;
        if ("object" !== ot.type(t) || t.nodeType || ot.isWindow(t)) return !1;
        if (
          t.constructor &&
          !it.call(t, "constructor") &&
          !it.call(t.constructor.prototype || {}, "isPrototypeOf")
        )
          return !1;
        for (e in t);
        return void 0 === e || it.call(t, e);
      },
      isEmptyObject: function (t) {
        var e;
        for (e in t) return !1;
        return !0;
      },
      type: function (t) {
        return null == t
          ? t + ""
          : "object" == typeof t || "function" == typeof t
          ? tt[et.call(t)] || "object"
          : typeof t;
      },
      globalEval: function (t) {
        var e,
          i = eval;
        (t = ot.trim(t)),
          t &&
            (1 === t.indexOf("use strict")
              ? ((e = G.createElement("script")),
                (e.text = t),
                G.head.appendChild(e).parentNode.removeChild(e))
              : i(t));
      },
      camelCase: function (t) {
        return t.replace(at, "ms-").replace(lt, ht);
      },
      nodeName: function (t, e) {
        return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase();
      },
      each: function (t, e) {
        var n,
          r = 0;
        if (i(t))
          for (n = t.length; n > r && e.call(t[r], r, t[r]) !== !1; r++);
        else for (r in t) if (e.call(t[r], r, t[r]) === !1) break;
        return t;
      },
      trim: function (t) {
        return null == t ? "" : (t + "").replace(st, "");
      },
      makeArray: function (t, e) {
        var n = e || [];
        return (
          null != t &&
            (i(Object(t))
              ? ot.merge(n, "string" == typeof t ? [t] : t)
              : Z.call(n, t)),
          n
        );
      },
      inArray: function (t, e, i) {
        return null == e ? -1 : J.call(e, t, i);
      },
      merge: function (t, e) {
        for (var i = +e.length, n = 0, r = t.length; i > n; n++) t[r++] = e[n];
        return (t.length = r), t;
      },
      grep: function (t, e, i) {
        for (var n, r = [], o = 0, s = t.length, a = !i; s > o; o++)
          (n = !e(t[o], o)), n !== a && r.push(t[o]);
        return r;
      },
      map: function (t, e, n) {
        var r,
          o,
          s = 0,
          a = [];
        if (i(t))
          for (r = t.length; r > s; s++)
            (o = e(t[s], s, n)), null != o && a.push(o);
        else for (s in t) (o = e(t[s], s, n)), null != o && a.push(o);
        return K.apply([], a);
      },
      guid: 1,
      proxy: function (t, e) {
        var i, n, r;
        return (
          "string" == typeof e && ((i = t[e]), (e = t), (t = i)),
          ot.isFunction(t)
            ? ((n = Q.call(arguments, 2)),
              (r = function () {
                return t.apply(e || this, n.concat(Q.call(arguments)));
              }),
              (r.guid = t.guid = t.guid || ot.guid++),
              r)
            : void 0
        );
      },
      now: Date.now,
      support: nt,
    }),
    "function" == typeof Symbol &&
      (ot.fn[Symbol.iterator] = X[Symbol.iterator]),
    ot.each(
      "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
        " "
      ),
      function (t, e) {
        tt["[object " + e + "]"] = e.toLowerCase();
      }
    );
  var ut = (function (t) {
    function e(t, e, i, n) {
      var r,
        o,
        s,
        a,
        l,
        h,
        c,
        d,
        p = e && e.ownerDocument,
        m = e ? e.nodeType : 9;
      if (
        ((i = i || []),
        "string" != typeof t || !t || (1 !== m && 9 !== m && 11 !== m))
      )
        return i;
      if (
        !n &&
        ((e ? e.ownerDocument || e : W) !== O && k(e), (e = e || O), N)
      ) {
        if (11 !== m && (h = vt.exec(t)))
          if ((r = h[1])) {
            if (9 === m) {
              if (!(s = e.getElementById(r))) return i;
              if (s.id === r) return i.push(s), i;
            } else if (p && (s = p.getElementById(r)) && j(e, s) && s.id === r)
              return i.push(s), i;
          } else {
            if (h[2]) return Z.apply(i, e.getElementsByTagName(t)), i;
            if (
              (r = h[3]) &&
              T.getElementsByClassName &&
              e.getElementsByClassName
            )
              return Z.apply(i, e.getElementsByClassName(r)), i;
          }
        if (T.qsa && !U[t + " "] && (!R || !R.test(t))) {
          if (1 !== m) (p = e), (d = t);
          else if ("object" !== e.nodeName.toLowerCase()) {
            for (
              (a = e.getAttribute("id"))
                ? (a = a.replace(_t, "\\$&"))
                : e.setAttribute("id", (a = F)),
                c = C(t),
                o = c.length,
                l = ft.test(a) ? "#" + a : "[id='" + a + "']";
              o--;

            )
              c[o] = l + " " + f(c[o]);
            (d = c.join(",")), (p = (yt.test(t) && u(e.parentNode)) || e);
          }
          if (d)
            try {
              return Z.apply(i, p.querySelectorAll(d)), i;
            } catch (t) {
            } finally {
              a === F && e.removeAttribute("id");
            }
        }
      }
      return A(t.replace(at, "$1"), e, i, n);
    }
    function i() {
      function t(i, n) {
        return (
          e.push(i + " ") > x.cacheLength && delete t[e.shift()],
          (t[i + " "] = n)
        );
      }
      var e = [];
      return t;
    }
    function n(t) {
      return (t[F] = !0), t;
    }
    function r(t) {
      var e = O.createElement("div");
      try {
        return !!t(e);
      } catch (t) {
        return !1;
      } finally {
        e.parentNode && e.parentNode.removeChild(e), (e = null);
      }
    }
    function o(t, e) {
      for (var i = t.split("|"), n = i.length; n--; ) x.attrHandle[i[n]] = e;
    }
    function s(t, e) {
      var i = e && t,
        n =
          i &&
          1 === t.nodeType &&
          1 === e.nodeType &&
          (~e.sourceIndex || Y) - (~t.sourceIndex || Y);
      if (n) return n;
      if (i) for (; (i = i.nextSibling); ) if (i === e) return -1;
      return t ? 1 : -1;
    }
    function a(t) {
      return function (e) {
        var i = e.nodeName.toLowerCase();
        return "input" === i && e.type === t;
      };
    }
    function l(t) {
      return function (e) {
        var i = e.nodeName.toLowerCase();
        return ("input" === i || "button" === i) && e.type === t;
      };
    }
    function h(t) {
      return n(function (e) {
        return (
          (e = +e),
          n(function (i, n) {
            for (var r, o = t([], i.length, e), s = o.length; s--; )
              i[(r = o[s])] && (i[r] = !(n[r] = i[r]));
          })
        );
      });
    }
    function u(t) {
      return t && "undefined" != typeof t.getElementsByTagName && t;
    }
    function c() {}
    function f(t) {
      for (var e = 0, i = t.length, n = ""; i > e; e++) n += t[e].value;
      return n;
    }
    function d(t, e, i) {
      var n = e.dir,
        r = i && "parentNode" === n,
        o = B++;
      return e.first
        ? function (e, i, o) {
            for (; (e = e[n]); ) if (1 === e.nodeType || r) return t(e, i, o);
          }
        : function (e, i, s) {
            var a,
              l,
              h,
              u = [H, o];
            if (s) {
              for (; (e = e[n]); )
                if ((1 === e.nodeType || r) && t(e, i, s)) return !0;
            } else
              for (; (e = e[n]); )
                if (1 === e.nodeType || r) {
                  if (
                    ((h = e[F] || (e[F] = {})),
                    (l = h[e.uniqueID] || (h[e.uniqueID] = {})),
                    (a = l[n]) && a[0] === H && a[1] === o)
                  )
                    return (u[2] = a[2]);
                  if (((l[n] = u), (u[2] = t(e, i, s)))) return !0;
                }
          };
    }
    function p(t) {
      return t.length > 1
        ? function (e, i, n) {
            for (var r = t.length; r--; ) if (!t[r](e, i, n)) return !1;
            return !0;
          }
        : t[0];
    }
    function m(t, i, n) {
      for (var r = 0, o = i.length; o > r; r++) e(t, i[r], n);
      return n;
    }
    function g(t, e, i, n, r) {
      for (var o, s = [], a = 0, l = t.length, h = null != e; l > a; a++)
        (o = t[a]) && ((i && !i(o, n, r)) || (s.push(o), h && e.push(a)));
      return s;
    }
    function v(t, e, i, r, o, s) {
      return (
        r && !r[F] && (r = v(r)),
        o && !o[F] && (o = v(o, s)),
        n(function (n, s, a, l) {
          var h,
            u,
            c,
            f = [],
            d = [],
            p = s.length,
            v = n || m(e || "*", a.nodeType ? [a] : a, []),
            y = !t || (!n && e) ? v : g(v, f, t, a, l),
            _ = i ? (o || (n ? t : p || r) ? [] : s) : y;
          if ((i && i(y, _, a, l), r))
            for (h = g(_, d), r(h, [], a, l), u = h.length; u--; )
              (c = h[u]) && (_[d[u]] = !(y[d[u]] = c));
          if (n) {
            if (o || t) {
              if (o) {
                for (h = [], u = _.length; u--; )
                  (c = _[u]) && h.push((y[u] = c));
                o(null, (_ = []), h, l);
              }
              for (u = _.length; u--; )
                (c = _[u]) &&
                  (h = o ? tt(n, c) : f[u]) > -1 &&
                  (n[h] = !(s[h] = c));
            }
          } else (_ = g(_ === s ? _.splice(p, _.length) : _)), o ? o(null, s, _, l) : Z.apply(s, _);
        })
      );
    }
    function y(t) {
      for (
        var e,
          i,
          n,
          r = t.length,
          o = x.relative[t[0].type],
          s = o || x.relative[" "],
          a = o ? 1 : 0,
          l = d(
            function (t) {
              return t === e;
            },
            s,
            !0
          ),
          h = d(
            function (t) {
              return tt(e, t) > -1;
            },
            s,
            !0
          ),
          u = [
            function (t, i, n) {
              var r =
                (!o && (n || i !== I)) ||
                ((e = i).nodeType ? l(t, i, n) : h(t, i, n));
              return (e = null), r;
            },
          ];
        r > a;
        a++
      )
        if ((i = x.relative[t[a].type])) u = [d(p(u), i)];
        else {
          if (((i = x.filter[t[a].type].apply(null, t[a].matches)), i[F])) {
            for (n = ++a; r > n && !x.relative[t[n].type]; n++);
            return v(
              a > 1 && p(u),
              a > 1 &&
                f(
                  t.slice(0, a - 1).concat({
                    value: " " === t[a - 2].type ? "*" : "",
                  })
                ).replace(at, "$1"),
              i,
              n > a && y(t.slice(a, n)),
              r > n && y((t = t.slice(n))),
              r > n && f(t)
            );
          }
          u.push(i);
        }
      return p(u);
    }
    function _(t, i) {
      var r = i.length > 0,
        o = t.length > 0,
        s = function (n, s, a, l, h) {
          var u,
            c,
            f,
            d = 0,
            p = "0",
            m = n && [],
            v = [],
            y = I,
            _ = n || (o && x.find.TAG("*", h)),
            b = (H += null == y ? 1 : Math.random() || 0.1),
            T = _.length;
          for (
            h && (I = s === O || s || h);
            p !== T && null != (u = _[p]);
            p++
          ) {
            if (o && u) {
              for (
                c = 0, s || u.ownerDocument === O || (k(u), (a = !N));
                (f = t[c++]);

              )
                if (f(u, s || O, a)) {
                  l.push(u);
                  break;
                }
              h && (H = b);
            }
            r && ((u = !f && u) && d--, n && m.push(u));
          }
          if (((d += p), r && p !== d)) {
            for (c = 0; (f = i[c++]); ) f(m, v, s, a);
            if (n) {
              if (d > 0) for (; p--; ) m[p] || v[p] || (v[p] = Q.call(l));
              v = g(v);
            }
            Z.apply(l, v),
              h && !n && v.length > 0 && d + i.length > 1 && e.uniqueSort(l);
          }
          return h && ((H = b), (I = y)), m;
        };
      return r ? n(s) : s;
    }
    var b,
      T,
      x,
      w,
      E,
      C,
      S,
      A,
      I,
      D,
      P,
      k,
      O,
      L,
      N,
      R,
      M,
      z,
      j,
      F = "sizzle" + 1 * new Date(),
      W = t.document,
      H = 0,
      B = 0,
      q = i(),
      V = i(),
      U = i(),
      $ = function (t, e) {
        return t === e && (P = !0), 0;
      },
      Y = 1 << 31,
      X = {}.hasOwnProperty,
      G = [],
      Q = G.pop,
      K = G.push,
      Z = G.push,
      J = G.slice,
      tt = function (t, e) {
        for (var i = 0, n = t.length; n > i; i++) if (t[i] === e) return i;
        return -1;
      },
      et =
        "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      it = "[\\x20\\t\\r\\n\\f]",
      nt = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
      rt =
        "\\[" +
        it +
        "*(" +
        nt +
        ")(?:" +
        it +
        "*([*^$|!~]?=)" +
        it +
        "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
        nt +
        "))|)" +
        it +
        "*\\]",
      ot =
        ":(" +
        nt +
        ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
        rt +
        ")*)|.*)\\)|)",
      st = new RegExp(it + "+", "g"),
      at = new RegExp(
        "^" + it + "+|((?:^|[^\\\\])(?:\\\\.)*)" + it + "+$",
        "g"
      ),
      lt = new RegExp("^" + it + "*," + it + "*"),
      ht = new RegExp("^" + it + "*([>+~]|" + it + ")" + it + "*"),
      ut = new RegExp("=" + it + "*([^\\]'\"]*?)" + it + "*\\]", "g"),
      ct = new RegExp(ot),
      ft = new RegExp("^" + nt + "$"),
      dt = {
        ID: new RegExp("^#(" + nt + ")"),
        CLASS: new RegExp("^\\.(" + nt + ")"),
        TAG: new RegExp("^(" + nt + "|[*])"),
        ATTR: new RegExp("^" + rt),
        PSEUDO: new RegExp("^" + ot),
        CHILD: new RegExp(
          "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
            it +
            "*(even|odd|(([+-]|)(\\d*)n|)" +
            it +
            "*(?:([+-]|)" +
            it +
            "*(\\d+)|))" +
            it +
            "*\\)|)",
          "i"
        ),
        bool: new RegExp("^(?:" + et + ")$", "i"),
        needsContext: new RegExp(
          "^" +
            it +
            "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
            it +
            "*((?:-\\d)?\\d*)" +
            it +
            "*\\)|)(?=[^-]|$)",
          "i"
        ),
      },
      pt = /^(?:input|select|textarea|button)$/i,
      mt = /^h\d$/i,
      gt = /^[^{]+\{\s*\[native \w/,
      vt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      yt = /[+~]/,
      _t = /'|\\/g,
      bt = new RegExp("\\\\([\\da-f]{1,6}" + it + "?|(" + it + ")|.)", "ig"),
      Tt = function (t, e, i) {
        var n = "0x" + e - 65536;
        return n !== n || i
          ? e
          : 0 > n
          ? String.fromCharCode(n + 65536)
          : String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320);
      },
      xt = function () {
        k();
      };
    try {
      Z.apply((G = J.call(W.childNodes)), W.childNodes),
        G[W.childNodes.length].nodeType;
    } catch (t) {
      Z = {
        apply: G.length
          ? function (t, e) {
              K.apply(t, J.call(e));
            }
          : function (t, e) {
              for (var i = t.length, n = 0; (t[i++] = e[n++]); );
              t.length = i - 1;
            },
      };
    }
    (T = e.support = {}),
      (E = e.isXML =
        function (t) {
          var e = t && (t.ownerDocument || t).documentElement;
          return !!e && "HTML" !== e.nodeName;
        }),
      (k = e.setDocument =
        function (t) {
          var e,
            i,
            n = t ? t.ownerDocument || t : W;
          return n !== O && 9 === n.nodeType && n.documentElement
            ? ((O = n),
              (L = O.documentElement),
              (N = !E(O)),
              (i = O.defaultView) &&
                i.top !== i &&
                (i.addEventListener
                  ? i.addEventListener("unload", xt, !1)
                  : i.attachEvent && i.attachEvent("onunload", xt)),
              (T.attributes = r(function (t) {
                return (t.className = "i"), !t.getAttribute("className");
              })),
              (T.getElementsByTagName = r(function (t) {
                return (
                  t.appendChild(O.createComment("")),
                  !t.getElementsByTagName("*").length
                );
              })),
              (T.getElementsByClassName = gt.test(O.getElementsByClassName)),
              (T.getById = r(function (t) {
                return (
                  (L.appendChild(t).id = F),
                  !O.getElementsByName || !O.getElementsByName(F).length
                );
              })),
              T.getById
                ? ((x.find.ID = function (t, e) {
                    if ("undefined" != typeof e.getElementById && N) {
                      var i = e.getElementById(t);
                      return i ? [i] : [];
                    }
                  }),
                  (x.filter.ID = function (t) {
                    var e = t.replace(bt, Tt);
                    return function (t) {
                      return t.getAttribute("id") === e;
                    };
                  }))
                : (delete x.find.ID,
                  (x.filter.ID = function (t) {
                    var e = t.replace(bt, Tt);
                    return function (t) {
                      var i =
                        "undefined" != typeof t.getAttributeNode &&
                        t.getAttributeNode("id");
                      return i && i.value === e;
                    };
                  })),
              (x.find.TAG = T.getElementsByTagName
                ? function (t, e) {
                    return "undefined" != typeof e.getElementsByTagName
                      ? e.getElementsByTagName(t)
                      : T.qsa
                      ? e.querySelectorAll(t)
                      : void 0;
                  }
                : function (t, e) {
                    var i,
                      n = [],
                      r = 0,
                      o = e.getElementsByTagName(t);
                    if ("*" === t) {
                      for (; (i = o[r++]); ) 1 === i.nodeType && n.push(i);
                      return n;
                    }
                    return o;
                  }),
              (x.find.CLASS =
                T.getElementsByClassName &&
                function (t, e) {
                  return "undefined" != typeof e.getElementsByClassName && N
                    ? e.getElementsByClassName(t)
                    : void 0;
                }),
              (M = []),
              (R = []),
              (T.qsa = gt.test(O.querySelectorAll)) &&
                (r(function (t) {
                  (L.appendChild(t).innerHTML =
                    "<a id='" +
                    F +
                    "'></a><select id='" +
                    F +
                    "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                    t.querySelectorAll("[msallowcapture^='']").length &&
                      R.push("[*^$]=" + it + "*(?:''|\"\")"),
                    t.querySelectorAll("[selected]").length ||
                      R.push("\\[" + it + "*(?:value|" + et + ")"),
                    t.querySelectorAll("[id~=" + F + "-]").length ||
                      R.push("~="),
                    t.querySelectorAll(":checked").length || R.push(":checked"),
                    t.querySelectorAll("a#" + F + "+*").length ||
                      R.push(".#.+[+~]");
                }),
                r(function (t) {
                  var e = O.createElement("input");
                  e.setAttribute("type", "hidden"),
                    t.appendChild(e).setAttribute("name", "D"),
                    t.querySelectorAll("[name=d]").length &&
                      R.push("name" + it + "*[*^$|!~]?="),
                    t.querySelectorAll(":enabled").length ||
                      R.push(":enabled", ":disabled"),
                    t.querySelectorAll("*,:x"),
                    R.push(",.*:");
                })),
              (T.matchesSelector = gt.test(
                (z =
                  L.matches ||
                  L.webkitMatchesSelector ||
                  L.mozMatchesSelector ||
                  L.oMatchesSelector ||
                  L.msMatchesSelector)
              )) &&
                r(function (t) {
                  (T.disconnectedMatch = z.call(t, "div")),
                    z.call(t, "[s!='']:x"),
                    M.push("!=", ot);
                }),
              (R = R.length && new RegExp(R.join("|"))),
              (M = M.length && new RegExp(M.join("|"))),
              (e = gt.test(L.compareDocumentPosition)),
              (j =
                e || gt.test(L.contains)
                  ? function (t, e) {
                      var i = 9 === t.nodeType ? t.documentElement : t,
                        n = e && e.parentNode;
                      return (
                        t === n ||
                        !(
                          !n ||
                          1 !== n.nodeType ||
                          !(i.contains
                            ? i.contains(n)
                            : t.compareDocumentPosition &&
                              16 & t.compareDocumentPosition(n))
                        )
                      );
                    }
                  : function (t, e) {
                      if (e)
                        for (; (e = e.parentNode); ) if (e === t) return !0;
                      return !1;
                    }),
              ($ = e
                ? function (t, e) {
                    if (t === e) return (P = !0), 0;
                    var i =
                      !t.compareDocumentPosition - !e.compareDocumentPosition;
                    return i
                      ? i
                      : ((i =
                          (t.ownerDocument || t) === (e.ownerDocument || e)
                            ? t.compareDocumentPosition(e)
                            : 1),
                        1 & i ||
                        (!T.sortDetached && e.compareDocumentPosition(t) === i)
                          ? t === O || (t.ownerDocument === W && j(W, t))
                            ? -1
                            : e === O || (e.ownerDocument === W && j(W, e))
                            ? 1
                            : D
                            ? tt(D, t) - tt(D, e)
                            : 0
                          : 4 & i
                          ? -1
                          : 1);
                  }
                : function (t, e) {
                    if (t === e) return (P = !0), 0;
                    var i,
                      n = 0,
                      r = t.parentNode,
                      o = e.parentNode,
                      a = [t],
                      l = [e];
                    if (!r || !o)
                      return t === O
                        ? -1
                        : e === O
                        ? 1
                        : r
                        ? -1
                        : o
                        ? 1
                        : D
                        ? tt(D, t) - tt(D, e)
                        : 0;
                    if (r === o) return s(t, e);
                    for (i = t; (i = i.parentNode); ) a.unshift(i);
                    for (i = e; (i = i.parentNode); ) l.unshift(i);
                    for (; a[n] === l[n]; ) n++;
                    return n
                      ? s(a[n], l[n])
                      : a[n] === W
                      ? -1
                      : l[n] === W
                      ? 1
                      : 0;
                  }),
              O)
            : O;
        }),
      (e.matches = function (t, i) {
        return e(t, null, null, i);
      }),
      (e.matchesSelector = function (t, i) {
        if (
          ((t.ownerDocument || t) !== O && k(t),
          (i = i.replace(ut, "='$1']")),
          T.matchesSelector &&
            N &&
            !U[i + " "] &&
            (!M || !M.test(i)) &&
            (!R || !R.test(i)))
        )
          try {
            var n = z.call(t, i);
            if (
              n ||
              T.disconnectedMatch ||
              (t.document && 11 !== t.document.nodeType)
            )
              return n;
          } catch (t) {}
        return e(i, O, null, [t]).length > 0;
      }),
      (e.contains = function (t, e) {
        return (t.ownerDocument || t) !== O && k(t), j(t, e);
      }),
      (e.attr = function (t, e) {
        (t.ownerDocument || t) !== O && k(t);
        var i = x.attrHandle[e.toLowerCase()],
          n = i && X.call(x.attrHandle, e.toLowerCase()) ? i(t, e, !N) : void 0;
        return void 0 !== n
          ? n
          : T.attributes || !N
          ? t.getAttribute(e)
          : (n = t.getAttributeNode(e)) && n.specified
          ? n.value
          : null;
      }),
      (e.error = function (t) {
        throw new Error("Syntax error, unrecognized expression: " + t);
      }),
      (e.uniqueSort = function (t) {
        var e,
          i = [],
          n = 0,
          r = 0;
        if (
          ((P = !T.detectDuplicates),
          (D = !T.sortStable && t.slice(0)),
          t.sort($),
          P)
        ) {
          for (; (e = t[r++]); ) e === t[r] && (n = i.push(r));
          for (; n--; ) t.splice(i[n], 1);
        }
        return (D = null), t;
      }),
      (w = e.getText =
        function (t) {
          var e,
            i = "",
            n = 0,
            r = t.nodeType;
          if (r) {
            if (1 === r || 9 === r || 11 === r) {
              if ("string" == typeof t.textContent) return t.textContent;
              for (t = t.firstChild; t; t = t.nextSibling) i += w(t);
            } else if (3 === r || 4 === r) return t.nodeValue;
          } else for (; (e = t[n++]); ) i += w(e);
          return i;
        }),
      (x = e.selectors =
        {
          cacheLength: 50,
          createPseudo: n,
          match: dt,
          attrHandle: {},
          find: {},
          relative: {
            ">": {
              dir: "parentNode",
              first: !0,
            },
            " ": {
              dir: "parentNode",
            },
            "+": {
              dir: "previousSibling",
              first: !0,
            },
            "~": {
              dir: "previousSibling",
            },
          },
          preFilter: {
            ATTR: function (t) {
              return (
                (t[1] = t[1].replace(bt, Tt)),
                (t[3] = (t[3] || t[4] || t[5] || "").replace(bt, Tt)),
                "~=" === t[2] && (t[3] = " " + t[3] + " "),
                t.slice(0, 4)
              );
            },
            CHILD: function (t) {
              return (
                (t[1] = t[1].toLowerCase()),
                "nth" === t[1].slice(0, 3)
                  ? (t[3] || e.error(t[0]),
                    (t[4] = +(t[4]
                      ? t[5] + (t[6] || 1)
                      : 2 * ("even" === t[3] || "odd" === t[3]))),
                    (t[5] = +(t[7] + t[8] || "odd" === t[3])))
                  : t[3] && e.error(t[0]),
                t
              );
            },
            PSEUDO: function (t) {
              var e,
                i = !t[6] && t[2];
              return dt.CHILD.test(t[0])
                ? null
                : (t[3]
                    ? (t[2] = t[4] || t[5] || "")
                    : i &&
                      ct.test(i) &&
                      (e = C(i, !0)) &&
                      (e = i.indexOf(")", i.length - e) - i.length) &&
                      ((t[0] = t[0].slice(0, e)), (t[2] = i.slice(0, e))),
                  t.slice(0, 3));
            },
          },
          filter: {
            TAG: function (t) {
              var e = t.replace(bt, Tt).toLowerCase();
              return "*" === t
                ? function () {
                    return !0;
                  }
                : function (t) {
                    return t.nodeName && t.nodeName.toLowerCase() === e;
                  };
            },
            CLASS: function (t) {
              var e = q[t + " "];
              return (
                e ||
                ((e = new RegExp("(^|" + it + ")" + t + "(" + it + "|$)")) &&
                  q(t, function (t) {
                    return e.test(
                      ("string" == typeof t.className && t.className) ||
                        ("undefined" != typeof t.getAttribute &&
                          t.getAttribute("class")) ||
                        ""
                    );
                  }))
              );
            },
            ATTR: function (t, i, n) {
              return function (r) {
                var o = e.attr(r, t);
                return null == o
                  ? "!=" === i
                  : !i ||
                      ((o += ""),
                      "=" === i
                        ? o === n
                        : "!=" === i
                        ? o !== n
                        : "^=" === i
                        ? n && 0 === o.indexOf(n)
                        : "*=" === i
                        ? n && o.indexOf(n) > -1
                        : "$=" === i
                        ? n && o.slice(-n.length) === n
                        : "~=" === i
                        ? (" " + o.replace(st, " ") + " ").indexOf(n) > -1
                        : "|=" === i &&
                          (o === n || o.slice(0, n.length + 1) === n + "-"));
              };
            },
            CHILD: function (t, e, i, n, r) {
              var o = "nth" !== t.slice(0, 3),
                s = "last" !== t.slice(-4),
                a = "of-type" === e;
              return 1 === n && 0 === r
                ? function (t) {
                    return !!t.parentNode;
                  }
                : function (e, i, l) {
                    var h,
                      u,
                      c,
                      f,
                      d,
                      p,
                      m = o !== s ? "nextSibling" : "previousSibling",
                      g = e.parentNode,
                      v = a && e.nodeName.toLowerCase(),
                      y = !l && !a,
                      _ = !1;
                    if (g) {
                      if (o) {
                        for (; m; ) {
                          for (f = e; (f = f[m]); )
                            if (
                              a
                                ? f.nodeName.toLowerCase() === v
                                : 1 === f.nodeType
                            )
                              return !1;
                          p = m = "only" === t && !p && "nextSibling";
                        }
                        return !0;
                      }
                      if (((p = [s ? g.firstChild : g.lastChild]), s && y)) {
                        for (
                          f = g,
                            c = f[F] || (f[F] = {}),
                            u = c[f.uniqueID] || (c[f.uniqueID] = {}),
                            h = u[t] || [],
                            d = h[0] === H && h[1],
                            _ = d && h[2],
                            f = d && g.childNodes[d];
                          (f = (++d && f && f[m]) || (_ = d = 0) || p.pop());

                        )
                          if (1 === f.nodeType && ++_ && f === e) {
                            u[t] = [H, d, _];
                            break;
                          }
                      } else if (
                        (y &&
                          ((f = e),
                          (c = f[F] || (f[F] = {})),
                          (u = c[f.uniqueID] || (c[f.uniqueID] = {})),
                          (h = u[t] || []),
                          (d = h[0] === H && h[1]),
                          (_ = d)),
                        _ === !1)
                      )
                        for (
                          ;
                          (f = (++d && f && f[m]) || (_ = d = 0) || p.pop()) &&
                          ((a
                            ? f.nodeName.toLowerCase() !== v
                            : 1 !== f.nodeType) ||
                            !++_ ||
                            (y &&
                              ((c = f[F] || (f[F] = {})),
                              (u = c[f.uniqueID] || (c[f.uniqueID] = {})),
                              (u[t] = [H, _])),
                            f !== e));

                        );
                      return (_ -= r), _ === n || (_ % n === 0 && _ / n >= 0);
                    }
                  };
            },
            PSEUDO: function (t, i) {
              var r,
                o =
                  x.pseudos[t] ||
                  x.setFilters[t.toLowerCase()] ||
                  e.error("unsupported pseudo: " + t);
              return o[F]
                ? o(i)
                : o.length > 1
                ? ((r = [t, t, "", i]),
                  x.setFilters.hasOwnProperty(t.toLowerCase())
                    ? n(function (t, e) {
                        for (var n, r = o(t, i), s = r.length; s--; )
                          (n = tt(t, r[s])), (t[n] = !(e[n] = r[s]));
                      })
                    : function (t) {
                        return o(t, 0, r);
                      })
                : o;
            },
          },
          pseudos: {
            not: n(function (t) {
              var e = [],
                i = [],
                r = S(t.replace(at, "$1"));
              return r[F]
                ? n(function (t, e, i, n) {
                    for (var o, s = r(t, null, n, []), a = t.length; a--; )
                      (o = s[a]) && (t[a] = !(e[a] = o));
                  })
                : function (t, n, o) {
                    return (
                      (e[0] = t), r(e, null, o, i), (e[0] = null), !i.pop()
                    );
                  };
            }),
            has: n(function (t) {
              return function (i) {
                return e(t, i).length > 0;
              };
            }),
            contains: n(function (t) {
              return (
                (t = t.replace(bt, Tt)),
                function (e) {
                  return (e.textContent || e.innerText || w(e)).indexOf(t) > -1;
                }
              );
            }),
            lang: n(function (t) {
              return (
                ft.test(t || "") || e.error("unsupported lang: " + t),
                (t = t.replace(bt, Tt).toLowerCase()),
                function (e) {
                  var i;
                  do
                    if (
                      (i = N
                        ? e.lang
                        : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                    )
                      return (
                        (i = i.toLowerCase()),
                        i === t || 0 === i.indexOf(t + "-")
                      );
                  while ((e = e.parentNode) && 1 === e.nodeType);
                  return !1;
                }
              );
            }),
            target: function (e) {
              var i = t.location && t.location.hash;
              return i && i.slice(1) === e.id;
            },
            root: function (t) {
              return t === L;
            },
            focus: function (t) {
              return (
                t === O.activeElement &&
                (!O.hasFocus || O.hasFocus()) &&
                !!(t.type || t.href || ~t.tabIndex)
              );
            },
            enabled: function (t) {
              return t.disabled === !1;
            },
            disabled: function (t) {
              return t.disabled === !0;
            },
            checked: function (t) {
              var e = t.nodeName.toLowerCase();
              return (
                ("input" === e && !!t.checked) ||
                ("option" === e && !!t.selected)
              );
            },
            selected: function (t) {
              return (
                t.parentNode && t.parentNode.selectedIndex, t.selected === !0
              );
            },
            empty: function (t) {
              for (t = t.firstChild; t; t = t.nextSibling)
                if (t.nodeType < 6) return !1;
              return !0;
            },
            parent: function (t) {
              return !x.pseudos.empty(t);
            },
            header: function (t) {
              return mt.test(t.nodeName);
            },
            input: function (t) {
              return pt.test(t.nodeName);
            },
            button: function (t) {
              var e = t.nodeName.toLowerCase();
              return ("input" === e && "button" === t.type) || "button" === e;
            },
            text: function (t) {
              var e;
              return (
                "input" === t.nodeName.toLowerCase() &&
                "text" === t.type &&
                (null == (e = t.getAttribute("type")) ||
                  "text" === e.toLowerCase())
              );
            },
            first: h(function () {
              return [0];
            }),
            last: h(function (t, e) {
              return [e - 1];
            }),
            eq: h(function (t, e, i) {
              return [0 > i ? i + e : i];
            }),
            even: h(function (t, e) {
              for (var i = 0; e > i; i += 2) t.push(i);
              return t;
            }),
            odd: h(function (t, e) {
              for (var i = 1; e > i; i += 2) t.push(i);
              return t;
            }),
            lt: h(function (t, e, i) {
              for (var n = 0 > i ? i + e : i; --n >= 0; ) t.push(n);
              return t;
            }),
            gt: h(function (t, e, i) {
              for (var n = 0 > i ? i + e : i; ++n < e; ) t.push(n);
              return t;
            }),
          },
        }),
      (x.pseudos.nth = x.pseudos.eq);
    for (b in {
      radio: !0,
      checkbox: !0,
      file: !0,
      password: !0,
      image: !0,
    })
      x.pseudos[b] = a(b);
    for (b in {
      submit: !0,
      reset: !0,
    })
      x.pseudos[b] = l(b);
    return (
      (c.prototype = x.filters = x.pseudos),
      (x.setFilters = new c()),
      (C = e.tokenize =
        function (t, i) {
          var n,
            r,
            o,
            s,
            a,
            l,
            h,
            u = V[t + " "];
          if (u) return i ? 0 : u.slice(0);
          for (a = t, l = [], h = x.preFilter; a; ) {
            (n && !(r = lt.exec(a))) ||
              (r && (a = a.slice(r[0].length) || a), l.push((o = []))),
              (n = !1),
              (r = ht.exec(a)) &&
                ((n = r.shift()),
                o.push({
                  value: n,
                  type: r[0].replace(at, " "),
                }),
                (a = a.slice(n.length)));
            for (s in x.filter)
              !(r = dt[s].exec(a)) ||
                (h[s] && !(r = h[s](r))) ||
                ((n = r.shift()),
                o.push({
                  value: n,
                  type: s,
                  matches: r,
                }),
                (a = a.slice(n.length)));
            if (!n) break;
          }
          return i ? a.length : a ? e.error(t) : V(t, l).slice(0);
        }),
      (S = e.compile =
        function (t, e) {
          var i,
            n = [],
            r = [],
            o = U[t + " "];
          if (!o) {
            for (e || (e = C(t)), i = e.length; i--; )
              (o = y(e[i])), o[F] ? n.push(o) : r.push(o);
            (o = U(t, _(r, n))), (o.selector = t);
          }
          return o;
        }),
      (A = e.select =
        function (t, e, i, n) {
          var r,
            o,
            s,
            a,
            l,
            h = "function" == typeof t && t,
            c = !n && C((t = h.selector || t));
          if (((i = i || []), 1 === c.length)) {
            if (
              ((o = c[0] = c[0].slice(0)),
              o.length > 2 &&
                "ID" === (s = o[0]).type &&
                T.getById &&
                9 === e.nodeType &&
                N &&
                x.relative[o[1].type])
            ) {
              if (
                ((e = (x.find.ID(s.matches[0].replace(bt, Tt), e) || [])[0]),
                !e)
              )
                return i;
              h && (e = e.parentNode), (t = t.slice(o.shift().value.length));
            }
            for (
              r = dt.needsContext.test(t) ? 0 : o.length;
              r-- && ((s = o[r]), !x.relative[(a = s.type)]);

            )
              if (
                (l = x.find[a]) &&
                (n = l(
                  s.matches[0].replace(bt, Tt),
                  (yt.test(o[0].type) && u(e.parentNode)) || e
                ))
              ) {
                if ((o.splice(r, 1), (t = n.length && f(o)), !t))
                  return Z.apply(i, n), i;
                break;
              }
          }
          return (
            (h || S(t, c))(
              n,
              e,
              !N,
              i,
              !e || (yt.test(t) && u(e.parentNode)) || e
            ),
            i
          );
        }),
      (T.sortStable = F.split("").sort($).join("") === F),
      (T.detectDuplicates = !!P),
      k(),
      (T.sortDetached = r(function (t) {
        return 1 & t.compareDocumentPosition(O.createElement("div"));
      })),
      r(function (t) {
        return (
          (t.innerHTML = "<a href='#'></a>"),
          "#" === t.firstChild.getAttribute("href")
        );
      }) ||
        o("type|href|height|width", function (t, e, i) {
          return i
            ? void 0
            : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2);
        }),
      (T.attributes &&
        r(function (t) {
          return (
            (t.innerHTML = "<input/>"),
            t.firstChild.setAttribute("value", ""),
            "" === t.firstChild.getAttribute("value")
          );
        })) ||
        o("value", function (t, e, i) {
          return i || "input" !== t.nodeName.toLowerCase()
            ? void 0
            : t.defaultValue;
        }),
      r(function (t) {
        return null == t.getAttribute("disabled");
      }) ||
        o(et, function (t, e, i) {
          var n;
          return i
            ? void 0
            : t[e] === !0
            ? e.toLowerCase()
            : (n = t.getAttributeNode(e)) && n.specified
            ? n.value
            : null;
        }),
      e
    );
  })(t);
  (ot.find = ut),
    (ot.expr = ut.selectors),
    (ot.expr[":"] = ot.expr.pseudos),
    (ot.uniqueSort = ot.unique = ut.uniqueSort),
    (ot.text = ut.getText),
    (ot.isXMLDoc = ut.isXML),
    (ot.contains = ut.contains);
  var ct = function (t, e, i) {
      for (var n = [], r = void 0 !== i; (t = t[e]) && 9 !== t.nodeType; )
        if (1 === t.nodeType) {
          if (r && ot(t).is(i)) break;
          n.push(t);
        }
      return n;
    },
    ft = function (t, e) {
      for (var i = []; t; t = t.nextSibling)
        1 === t.nodeType && t !== e && i.push(t);
      return i;
    },
    dt = ot.expr.match.needsContext,
    pt = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
    mt = /^.[^:#\[\.,]*$/;
  (ot.filter = function (t, e, i) {
    var n = e[0];
    return (
      i && (t = ":not(" + t + ")"),
      1 === e.length && 1 === n.nodeType
        ? ot.find.matchesSelector(n, t)
          ? [n]
          : []
        : ot.find.matches(
            t,
            ot.grep(e, function (t) {
              return 1 === t.nodeType;
            })
          )
    );
  }),
    ot.fn.extend({
      find: function (t) {
        var e,
          i = this.length,
          n = [],
          r = this;
        if ("string" != typeof t)
          return this.pushStack(
            ot(t).filter(function () {
              for (e = 0; i > e; e++) if (ot.contains(r[e], this)) return !0;
            })
          );
        for (e = 0; i > e; e++) ot.find(t, r[e], n);
        return (
          (n = this.pushStack(i > 1 ? ot.unique(n) : n)),
          (n.selector = this.selector ? this.selector + " " + t : t),
          n
        );
      },
      filter: function (t) {
        return this.pushStack(n(this, t || [], !1));
      },
      not: function (t) {
        return this.pushStack(n(this, t || [], !0));
      },
      is: function (t) {
        return !!n(
          this,
          "string" == typeof t && dt.test(t) ? ot(t) : t || [],
          !1
        ).length;
      },
    });
  var gt,
    vt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
    yt = (ot.fn.init = function (t, e, i) {
      var n, r;
      if (!t) return this;
      if (((i = i || gt), "string" == typeof t)) {
        if (
          ((n =
            "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3
              ? [null, t, null]
              : vt.exec(t)),
          !n || (!n[1] && e))
        )
          return !e || e.jquery
            ? (e || i).find(t)
            : this.constructor(e).find(t);
        if (n[1]) {
          if (
            ((e = e instanceof ot ? e[0] : e),
            ot.merge(
              this,
              ot.parseHTML(n[1], e && e.nodeType ? e.ownerDocument || e : G, !0)
            ),
            pt.test(n[1]) && ot.isPlainObject(e))
          )
            for (n in e)
              ot.isFunction(this[n]) ? this[n](e[n]) : this.attr(n, e[n]);
          return this;
        }
        return (
          (r = G.getElementById(n[2])),
          r && r.parentNode && ((this.length = 1), (this[0] = r)),
          (this.context = G),
          (this.selector = t),
          this
        );
      }
      return t.nodeType
        ? ((this.context = this[0] = t), (this.length = 1), this)
        : ot.isFunction(t)
        ? void 0 !== i.ready
          ? i.ready(t)
          : t(ot)
        : (void 0 !== t.selector &&
            ((this.selector = t.selector), (this.context = t.context)),
          ot.makeArray(t, this));
    });
  (yt.prototype = ot.fn), (gt = ot(G));
  var _t = /^(?:parents|prev(?:Until|All))/,
    bt = {
      children: !0,
      contents: !0,
      next: !0,
      prev: !0,
    };
  ot.fn.extend({
    has: function (t) {
      var e = ot(t, this),
        i = e.length;
      return this.filter(function () {
        for (var t = 0; i > t; t++) if (ot.contains(this, e[t])) return !0;
      });
    },
    closest: function (t, e) {
      for (
        var i,
          n = 0,
          r = this.length,
          o = [],
          s = dt.test(t) || "string" != typeof t ? ot(t, e || this.context) : 0;
        r > n;
        n++
      )
        for (i = this[n]; i && i !== e; i = i.parentNode)
          if (
            i.nodeType < 11 &&
            (s
              ? s.index(i) > -1
              : 1 === i.nodeType && ot.find.matchesSelector(i, t))
          ) {
            o.push(i);
            break;
          }
      return this.pushStack(o.length > 1 ? ot.uniqueSort(o) : o);
    },
    index: function (t) {
      return t
        ? "string" == typeof t
          ? J.call(ot(t), this[0])
          : J.call(this, t.jquery ? t[0] : t)
        : this[0] && this[0].parentNode
        ? this.first().prevAll().length
        : -1;
    },
    add: function (t, e) {
      return this.pushStack(ot.uniqueSort(ot.merge(this.get(), ot(t, e))));
    },
    addBack: function (t) {
      return this.add(null == t ? this.prevObject : this.prevObject.filter(t));
    },
  }),
    ot.each(
      {
        parent: function (t) {
          var e = t.parentNode;
          return e && 11 !== e.nodeType ? e : null;
        },
        parents: function (t) {
          return ct(t, "parentNode");
        },
        parentsUntil: function (t, e, i) {
          return ct(t, "parentNode", i);
        },
        next: function (t) {
          return r(t, "nextSibling");
        },
        prev: function (t) {
          return r(t, "previousSibling");
        },
        nextAll: function (t) {
          return ct(t, "nextSibling");
        },
        prevAll: function (t) {
          return ct(t, "previousSibling");
        },
        nextUntil: function (t, e, i) {
          return ct(t, "nextSibling", i);
        },
        prevUntil: function (t, e, i) {
          return ct(t, "previousSibling", i);
        },
        siblings: function (t) {
          return ft((t.parentNode || {}).firstChild, t);
        },
        children: function (t) {
          return ft(t.firstChild);
        },
        contents: function (t) {
          return t.contentDocument || ot.merge([], t.childNodes);
        },
      },
      function (t, e) {
        ot.fn[t] = function (i, n) {
          var r = ot.map(this, e, i);
          return (
            "Until" !== t.slice(-5) && (n = i),
            n && "string" == typeof n && (r = ot.filter(n, r)),
            this.length > 1 &&
              (bt[t] || ot.uniqueSort(r), _t.test(t) && r.reverse()),
            this.pushStack(r)
          );
        };
      }
    );
  var Tt = /\S+/g;
  (ot.Callbacks = function (t) {
    t = "string" == typeof t ? o(t) : ot.extend({}, t);
    var e,
      i,
      n,
      r,
      s = [],
      a = [],
      l = -1,
      h = function () {
        for (r = t.once, n = e = !0; a.length; l = -1)
          for (i = a.shift(); ++l < s.length; )
            s[l].apply(i[0], i[1]) === !1 &&
              t.stopOnFalse &&
              ((l = s.length), (i = !1));
        t.memory || (i = !1), (e = !1), r && (s = i ? [] : "");
      },
      u = {
        add: function () {
          return (
            s &&
              (i && !e && ((l = s.length - 1), a.push(i)),
              (function e(i) {
                ot.each(i, function (i, n) {
                  ot.isFunction(n)
                    ? (t.unique && u.has(n)) || s.push(n)
                    : n && n.length && "string" !== ot.type(n) && e(n);
                });
              })(arguments),
              i && !e && h()),
            this
          );
        },
        remove: function () {
          return (
            ot.each(arguments, function (t, e) {
              for (var i; (i = ot.inArray(e, s, i)) > -1; )
                s.splice(i, 1), l >= i && l--;
            }),
            this
          );
        },
        has: function (t) {
          return t ? ot.inArray(t, s) > -1 : s.length > 0;
        },
        empty: function () {
          return s && (s = []), this;
        },
        disable: function () {
          return (r = a = []), (s = i = ""), this;
        },
        disabled: function () {
          return !s;
        },
        lock: function () {
          return (r = a = []), i || (s = i = ""), this;
        },
        locked: function () {
          return !!r;
        },
        fireWith: function (t, i) {
          return (
            r ||
              ((i = i || []),
              (i = [t, i.slice ? i.slice() : i]),
              a.push(i),
              e || h()),
            this
          );
        },
        fire: function () {
          return u.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!n;
        },
      };
    return u;
  }),
    ot.extend({
      Deferred: function (t) {
        var e = [
            ["resolve", "done", ot.Callbacks("once memory"), "resolved"],
            ["reject", "fail", ot.Callbacks("once memory"), "rejected"],
            ["notify", "progress", ot.Callbacks("memory")],
          ],
          i = "pending",
          n = {
            state: function () {
              return i;
            },
            always: function () {
              return r.done(arguments).fail(arguments), this;
            },
            then: function () {
              var t = arguments;
              return ot
                .Deferred(function (i) {
                  ot.each(e, function (e, o) {
                    var s = ot.isFunction(t[e]) && t[e];
                    r[o[1]](function () {
                      var t = s && s.apply(this, arguments);
                      t && ot.isFunction(t.promise)
                        ? t
                            .promise()
                            .progress(i.notify)
                            .done(i.resolve)
                            .fail(i.reject)
                        : i[o[0] + "With"](
                            this === n ? i.promise() : this,
                            s ? [t] : arguments
                          );
                    });
                  }),
                    (t = null);
                })
                .promise();
            },
            promise: function (t) {
              return null != t ? ot.extend(t, n) : n;
            },
          },
          r = {};
        return (
          (n.pipe = n.then),
          ot.each(e, function (t, o) {
            var s = o[2],
              a = o[3];
            (n[o[1]] = s.add),
              a &&
                s.add(
                  function () {
                    i = a;
                  },
                  e[1 ^ t][2].disable,
                  e[2][2].lock
                ),
              (r[o[0]] = function () {
                return r[o[0] + "With"](this === r ? n : this, arguments), this;
              }),
              (r[o[0] + "With"] = s.fireWith);
          }),
          n.promise(r),
          t && t.call(r, r),
          r
        );
      },
      when: function (t) {
        var e,
          i,
          n,
          r = 0,
          o = Q.call(arguments),
          s = o.length,
          a = 1 !== s || (t && ot.isFunction(t.promise)) ? s : 0,
          l = 1 === a ? t : ot.Deferred(),
          h = function (t, i, n) {
            return function (r) {
              (i[t] = this),
                (n[t] = arguments.length > 1 ? Q.call(arguments) : r),
                n === e ? l.notifyWith(i, n) : --a || l.resolveWith(i, n);
            };
          };
        if (s > 1)
          for (e = new Array(s), i = new Array(s), n = new Array(s); s > r; r++)
            o[r] && ot.isFunction(o[r].promise)
              ? o[r]
                  .promise()
                  .progress(h(r, i, e))
                  .done(h(r, n, o))
                  .fail(l.reject)
              : --a;
        return a || l.resolveWith(n, o), l.promise();
      },
    });
  var xt;
  (ot.fn.ready = function (t) {
    return ot.ready.promise().done(t), this;
  }),
    ot.extend({
      isReady: !1,
      readyWait: 1,
      holdReady: function (t) {
        t ? ot.readyWait++ : ot.ready(!0);
      },
      ready: function (t) {
        (t === !0 ? --ot.readyWait : ot.isReady) ||
          ((ot.isReady = !0),
          (t !== !0 && --ot.readyWait > 0) ||
            (xt.resolveWith(G, [ot]),
            ot.fn.triggerHandler &&
              (ot(G).triggerHandler("ready"), ot(G).off("ready"))));
      },
    }),
    (ot.ready.promise = function (e) {
      return (
        xt ||
          ((xt = ot.Deferred()),
          "complete" === G.readyState ||
          ("loading" !== G.readyState && !G.documentElement.doScroll)
            ? t.setTimeout(ot.ready)
            : (G.addEventListener("DOMContentLoaded", s),
              t.addEventListener("load", s))),
        xt.promise(e)
      );
    }),
    ot.ready.promise();
  var wt = function (t, e, i, n, r, o, s) {
      var a = 0,
        l = t.length,
        h = null == i;
      if ("object" === ot.type(i)) {
        r = !0;
        for (a in i) wt(t, e, a, i[a], !0, o, s);
      } else if (
        void 0 !== n &&
        ((r = !0),
        ot.isFunction(n) || (s = !0),
        h &&
          (s
            ? (e.call(t, n), (e = null))
            : ((h = e),
              (e = function (t, e, i) {
                return h.call(ot(t), i);
              }))),
        e)
      )
        for (; l > a; a++) e(t[a], i, s ? n : n.call(t[a], a, e(t[a], i)));
      return r ? t : h ? e.call(t) : l ? e(t[0], i) : o;
    },
    Et = function (t) {
      return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType;
    };
  (a.uid = 1),
    (a.prototype = {
      register: function (t, e) {
        var i = e || {};
        return (
          t.nodeType
            ? (t[this.expando] = i)
            : Object.defineProperty(t, this.expando, {
                value: i,
                writable: !0,
                configurable: !0,
              }),
          t[this.expando]
        );
      },
      cache: function (t) {
        if (!Et(t)) return {};
        var e = t[this.expando];
        return (
          e ||
            ((e = {}),
            Et(t) &&
              (t.nodeType
                ? (t[this.expando] = e)
                : Object.defineProperty(t, this.expando, {
                    value: e,
                    configurable: !0,
                  }))),
          e
        );
      },
      set: function (t, e, i) {
        var n,
          r = this.cache(t);
        if ("string" == typeof e) r[e] = i;
        else for (n in e) r[n] = e[n];
        return r;
      },
      get: function (t, e) {
        return void 0 === e
          ? this.cache(t)
          : t[this.expando] && t[this.expando][e];
      },
      access: function (t, e, i) {
        var n;
        return void 0 === e || (e && "string" == typeof e && void 0 === i)
          ? ((n = this.get(t, e)),
            void 0 !== n ? n : this.get(t, ot.camelCase(e)))
          : (this.set(t, e, i), void 0 !== i ? i : e);
      },
      remove: function (t, e) {
        var i,
          n,
          r,
          o = t[this.expando];
        if (void 0 !== o) {
          if (void 0 === e) this.register(t);
          else {
            ot.isArray(e)
              ? (n = e.concat(e.map(ot.camelCase)))
              : ((r = ot.camelCase(e)),
                e in o
                  ? (n = [e, r])
                  : ((n = r), (n = n in o ? [n] : n.match(Tt) || []))),
              (i = n.length);
            for (; i--; ) delete o[n[i]];
          }
          (void 0 === e || ot.isEmptyObject(o)) &&
            (t.nodeType ? (t[this.expando] = void 0) : delete t[this.expando]);
        }
      },
      hasData: function (t) {
        var e = t[this.expando];
        return void 0 !== e && !ot.isEmptyObject(e);
      },
    });
  var Ct = new a(),
    St = new a(),
    At = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    It = /[A-Z]/g;
  ot.extend({
    hasData: function (t) {
      return St.hasData(t) || Ct.hasData(t);
    },
    data: function (t, e, i) {
      return St.access(t, e, i);
    },
    removeData: function (t, e) {
      St.remove(t, e);
    },
    _data: function (t, e, i) {
      return Ct.access(t, e, i);
    },
    _removeData: function (t, e) {
      Ct.remove(t, e);
    },
  }),
    ot.fn.extend({
      data: function (t, e) {
        var i,
          n,
          r,
          o = this[0],
          s = o && o.attributes;
        if (void 0 === t) {
          if (
            this.length &&
            ((r = St.get(o)), 1 === o.nodeType && !Ct.get(o, "hasDataAttrs"))
          ) {
            for (i = s.length; i--; )
              s[i] &&
                ((n = s[i].name),
                0 === n.indexOf("data-") &&
                  ((n = ot.camelCase(n.slice(5))), l(o, n, r[n])));
            Ct.set(o, "hasDataAttrs", !0);
          }
          return r;
        }
        return "object" == typeof t
          ? this.each(function () {
              St.set(this, t);
            })
          : wt(
              this,
              function (e) {
                var i, n;
                if (o && void 0 === e) {
                  if (
                    ((i =
                      St.get(o, t) ||
                      St.get(o, t.replace(It, "-$&").toLowerCase())),
                    void 0 !== i)
                  )
                    return i;
                  if (((n = ot.camelCase(t)), (i = St.get(o, n)), void 0 !== i))
                    return i;
                  if (((i = l(o, n, void 0)), void 0 !== i)) return i;
                } else
                  (n = ot.camelCase(t)),
                    this.each(function () {
                      var i = St.get(this, n);
                      St.set(this, n, e),
                        t.indexOf("-") > -1 &&
                          void 0 !== i &&
                          St.set(this, t, e);
                    });
              },
              null,
              e,
              arguments.length > 1,
              null,
              !0
            );
      },
      removeData: function (t) {
        return this.each(function () {
          St.remove(this, t);
        });
      },
    }),
    ot.extend({
      queue: function (t, e, i) {
        var n;
        return t
          ? ((e = (e || "fx") + "queue"),
            (n = Ct.get(t, e)),
            i &&
              (!n || ot.isArray(i)
                ? (n = Ct.access(t, e, ot.makeArray(i)))
                : n.push(i)),
            n || [])
          : void 0;
      },
      dequeue: function (t, e) {
        e = e || "fx";
        var i = ot.queue(t, e),
          n = i.length,
          r = i.shift(),
          o = ot._queueHooks(t, e),
          s = function () {
            ot.dequeue(t, e);
          };
        "inprogress" === r && ((r = i.shift()), n--),
          r &&
            ("fx" === e && i.unshift("inprogress"),
            delete o.stop,
            r.call(t, s, o)),
          !n && o && o.empty.fire();
      },
      _queueHooks: function (t, e) {
        var i = e + "queueHooks";
        return (
          Ct.get(t, i) ||
          Ct.access(t, i, {
            empty: ot.Callbacks("once memory").add(function () {
              Ct.remove(t, [e + "queue", i]);
            }),
          })
        );
      },
    }),
    ot.fn.extend({
      queue: function (t, e) {
        var i = 2;
        return (
          "string" != typeof t && ((e = t), (t = "fx"), i--),
          arguments.length < i
            ? ot.queue(this[0], t)
            : void 0 === e
            ? this
            : this.each(function () {
                var i = ot.queue(this, t, e);
                ot._queueHooks(this, t),
                  "fx" === t && "inprogress" !== i[0] && ot.dequeue(this, t);
              })
        );
      },
      dequeue: function (t) {
        return this.each(function () {
          ot.dequeue(this, t);
        });
      },
      clearQueue: function (t) {
        return this.queue(t || "fx", []);
      },
      promise: function (t, e) {
        var i,
          n = 1,
          r = ot.Deferred(),
          o = this,
          s = this.length,
          a = function () {
            --n || r.resolveWith(o, [o]);
          };
        for (
          "string" != typeof t && ((e = t), (t = void 0)), t = t || "fx";
          s--;

        )
          (i = Ct.get(o[s], t + "queueHooks")),
            i && i.empty && (n++, i.empty.add(a));
        return a(), r.promise(e);
      },
    });
  var Dt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    Pt = new RegExp("^(?:([+-])=|)(" + Dt + ")([a-z%]*)$", "i"),
    kt = ["Top", "Right", "Bottom", "Left"],
    Ot = function (t, e) {
      return (
        (t = e || t),
        "none" === ot.css(t, "display") || !ot.contains(t.ownerDocument, t)
      );
    },
    Lt = /^(?:checkbox|radio)$/i,
    Nt = /<([\w:-]+)/,
    Rt = /^$|\/(?:java|ecma)script/i,
    Mt = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      thead: [1, "<table>", "</table>"],
      col: [2, "<table><colgroup>", "</colgroup></table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: [0, "", ""],
    };
  (Mt.optgroup = Mt.option),
    (Mt.tbody = Mt.tfoot = Mt.colgroup = Mt.caption = Mt.thead),
    (Mt.th = Mt.td);
  var zt = /<|&#?\w+;/;
  !(function () {
    var t = G.createDocumentFragment(),
      e = t.appendChild(G.createElement("div")),
      i = G.createElement("input");
    i.setAttribute("type", "radio"),
      i.setAttribute("checked", "checked"),
      i.setAttribute("name", "t"),
      e.appendChild(i),
      (nt.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked),
      (e.innerHTML = "<textarea>x</textarea>"),
      (nt.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue);
  })();
  var jt = /^key/,
    Ft = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
    Wt = /^([^.]*)(?:\.(.+)|)/;
  (ot.event = {
    global: {},
    add: function (t, e, i, n, r) {
      var o,
        s,
        a,
        l,
        h,
        u,
        c,
        f,
        d,
        p,
        m,
        g = Ct.get(t);
      if (g)
        for (
          i.handler && ((o = i), (i = o.handler), (r = o.selector)),
            i.guid || (i.guid = ot.guid++),
            (l = g.events) || (l = g.events = {}),
            (s = g.handle) ||
              (s = g.handle =
                function (e) {
                  return "undefined" != typeof ot &&
                    ot.event.triggered !== e.type
                    ? ot.event.dispatch.apply(t, arguments)
                    : void 0;
                }),
            e = (e || "").match(Tt) || [""],
            h = e.length;
          h--;

        )
          (a = Wt.exec(e[h]) || []),
            (d = m = a[1]),
            (p = (a[2] || "").split(".").sort()),
            d &&
              ((c = ot.event.special[d] || {}),
              (d = (r ? c.delegateType : c.bindType) || d),
              (c = ot.event.special[d] || {}),
              (u = ot.extend(
                {
                  type: d,
                  origType: m,
                  data: n,
                  handler: i,
                  guid: i.guid,
                  selector: r,
                  needsContext: r && ot.expr.match.needsContext.test(r),
                  namespace: p.join("."),
                },
                o
              )),
              (f = l[d]) ||
                ((f = l[d] = []),
                (f.delegateCount = 0),
                (c.setup && c.setup.call(t, n, p, s) !== !1) ||
                  (t.addEventListener && t.addEventListener(d, s))),
              c.add &&
                (c.add.call(t, u), u.handler.guid || (u.handler.guid = i.guid)),
              r ? f.splice(f.delegateCount++, 0, u) : f.push(u),
              (ot.event.global[d] = !0));
    },
    remove: function (t, e, i, n, r) {
      var o,
        s,
        a,
        l,
        h,
        u,
        c,
        f,
        d,
        p,
        m,
        g = Ct.hasData(t) && Ct.get(t);
      if (g && (l = g.events)) {
        for (e = (e || "").match(Tt) || [""], h = e.length; h--; )
          if (
            ((a = Wt.exec(e[h]) || []),
            (d = m = a[1]),
            (p = (a[2] || "").split(".").sort()),
            d)
          ) {
            for (
              c = ot.event.special[d] || {},
                d = (n ? c.delegateType : c.bindType) || d,
                f = l[d] || [],
                a =
                  a[2] &&
                  new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                s = o = f.length;
              o--;

            )
              (u = f[o]),
                (!r && m !== u.origType) ||
                  (i && i.guid !== u.guid) ||
                  (a && !a.test(u.namespace)) ||
                  (n && n !== u.selector && ("**" !== n || !u.selector)) ||
                  (f.splice(o, 1),
                  u.selector && f.delegateCount--,
                  c.remove && c.remove.call(t, u));
            s &&
              !f.length &&
              ((c.teardown && c.teardown.call(t, p, g.handle) !== !1) ||
                ot.removeEvent(t, d, g.handle),
              delete l[d]);
          } else for (d in l) ot.event.remove(t, d + e[h], i, n, !0);
        ot.isEmptyObject(l) && Ct.remove(t, "handle events");
      }
    },
    dispatch: function (t) {
      t = ot.event.fix(t);
      var e,
        i,
        n,
        r,
        o,
        s = [],
        a = Q.call(arguments),
        l = (Ct.get(this, "events") || {})[t.type] || [],
        h = ot.event.special[t.type] || {};
      if (
        ((a[0] = t),
        (t.delegateTarget = this),
        !h.preDispatch || h.preDispatch.call(this, t) !== !1)
      ) {
        for (
          s = ot.event.handlers.call(this, t, l), e = 0;
          (r = s[e++]) && !t.isPropagationStopped();

        )
          for (
            t.currentTarget = r.elem, i = 0;
            (o = r.handlers[i++]) && !t.isImmediatePropagationStopped();

          )
            (t.rnamespace && !t.rnamespace.test(o.namespace)) ||
              ((t.handleObj = o),
              (t.data = o.data),
              (n = (
                (ot.event.special[o.origType] || {}).handle || o.handler
              ).apply(r.elem, a)),
              void 0 !== n &&
                (t.result = n) === !1 &&
                (t.preventDefault(), t.stopPropagation()));
        return h.postDispatch && h.postDispatch.call(this, t), t.result;
      }
    },
    handlers: function (t, e) {
      var i,
        n,
        r,
        o,
        s = [],
        a = e.delegateCount,
        l = t.target;
      if (
        a &&
        l.nodeType &&
        ("click" !== t.type || isNaN(t.button) || t.button < 1)
      )
        for (; l !== this; l = l.parentNode || this)
          if (1 === l.nodeType && (l.disabled !== !0 || "click" !== t.type)) {
            for (n = [], i = 0; a > i; i++)
              (o = e[i]),
                (r = o.selector + " "),
                void 0 === n[r] &&
                  (n[r] = o.needsContext
                    ? ot(r, this).index(l) > -1
                    : ot.find(r, this, null, [l]).length),
                n[r] && n.push(o);
            n.length &&
              s.push({
                elem: l,
                handlers: n,
              });
          }
      return (
        a < e.length &&
          s.push({
            elem: this,
            handlers: e.slice(a),
          }),
        s
      );
    },
    props:
      "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(
        " "
      ),
    fixHooks: {},
    keyHooks: {
      props: "char charCode key keyCode".split(" "),
      filter: function (t, e) {
        return (
          null == t.which &&
            (t.which = null != e.charCode ? e.charCode : e.keyCode),
          t
        );
      },
    },
    mouseHooks: {
      props:
        "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(
          " "
        ),
      filter: function (t, e) {
        var i,
          n,
          r,
          o = e.button;
        return (
          null == t.pageX &&
            null != e.clientX &&
            ((i = t.target.ownerDocument || G),
            (n = i.documentElement),
            (r = i.body),
            (t.pageX =
              e.clientX +
              ((n && n.scrollLeft) || (r && r.scrollLeft) || 0) -
              ((n && n.clientLeft) || (r && r.clientLeft) || 0)),
            (t.pageY =
              e.clientY +
              ((n && n.scrollTop) || (r && r.scrollTop) || 0) -
              ((n && n.clientTop) || (r && r.clientTop) || 0))),
          t.which ||
            void 0 === o ||
            (t.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0),
          t
        );
      },
    },
    fix: function (t) {
      if (t[ot.expando]) return t;
      var e,
        i,
        n,
        r = t.type,
        o = t,
        s = this.fixHooks[r];
      for (
        s ||
          (this.fixHooks[r] = s =
            Ft.test(r) ? this.mouseHooks : jt.test(r) ? this.keyHooks : {}),
          n = s.props ? this.props.concat(s.props) : this.props,
          t = new ot.Event(o),
          e = n.length;
        e--;

      )
        (i = n[e]), (t[i] = o[i]);
      return (
        t.target || (t.target = G),
        3 === t.target.nodeType && (t.target = t.target.parentNode),
        s.filter ? s.filter(t, o) : t
      );
    },
    special: {
      load: {
        noBubble: !0,
      },
      focus: {
        trigger: function () {
          return this !== m() && this.focus ? (this.focus(), !1) : void 0;
        },
        delegateType: "focusin",
      },
      blur: {
        trigger: function () {
          return this === m() && this.blur ? (this.blur(), !1) : void 0;
        },
        delegateType: "focusout",
      },
      click: {
        trigger: function () {
          return "checkbox" === this.type &&
            this.click &&
            ot.nodeName(this, "input")
            ? (this.click(), !1)
            : void 0;
        },
        _default: function (t) {
          return ot.nodeName(t.target, "a");
        },
      },
      beforeunload: {
        postDispatch: function (t) {
          void 0 !== t.result &&
            t.originalEvent &&
            (t.originalEvent.returnValue = t.result);
        },
      },
    },
  }),
    (ot.removeEvent = function (t, e, i) {
      t.removeEventListener && t.removeEventListener(e, i);
    }),
    (ot.Event = function (t, e) {
      return this instanceof ot.Event
        ? (t && t.type
            ? ((this.originalEvent = t),
              (this.type = t.type),
              (this.isDefaultPrevented =
                t.defaultPrevented ||
                (void 0 === t.defaultPrevented && t.returnValue === !1)
                  ? d
                  : p))
            : (this.type = t),
          e && ot.extend(this, e),
          (this.timeStamp = (t && t.timeStamp) || ot.now()),
          void (this[ot.expando] = !0))
        : new ot.Event(t, e);
    }),
    (ot.Event.prototype = {
      constructor: ot.Event,
      isDefaultPrevented: p,
      isPropagationStopped: p,
      isImmediatePropagationStopped: p,
      isSimulated: !1,
      preventDefault: function () {
        var t = this.originalEvent;
        (this.isDefaultPrevented = d),
          t && !this.isSimulated && t.preventDefault();
      },
      stopPropagation: function () {
        var t = this.originalEvent;
        (this.isPropagationStopped = d),
          t && !this.isSimulated && t.stopPropagation();
      },
      stopImmediatePropagation: function () {
        var t = this.originalEvent;
        (this.isImmediatePropagationStopped = d),
          t && !this.isSimulated && t.stopImmediatePropagation(),
          this.stopPropagation();
      },
    }),
    ot.each(
      {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout",
      },
      function (t, e) {
        ot.event.special[t] = {
          delegateType: e,
          bindType: e,
          handle: function (t) {
            var i,
              n = this,
              r = t.relatedTarget,
              o = t.handleObj;
            return (
              (r && (r === n || ot.contains(n, r))) ||
                ((t.type = o.origType),
                (i = o.handler.apply(this, arguments)),
                (t.type = e)),
              i
            );
          },
        };
      }
    ),
    ot.fn.extend({
      on: function (t, e, i, n) {
        return g(this, t, e, i, n);
      },
      one: function (t, e, i, n) {
        return g(this, t, e, i, n, 1);
      },
      off: function (t, e, i) {
        var n, r;
        if (t && t.preventDefault && t.handleObj)
          return (
            (n = t.handleObj),
            ot(t.delegateTarget).off(
              n.namespace ? n.origType + "." + n.namespace : n.origType,
              n.selector,
              n.handler
            ),
            this
          );
        if ("object" == typeof t) {
          for (r in t) this.off(r, e, t[r]);
          return this;
        }
        return (
          (e !== !1 && "function" != typeof e) || ((i = e), (e = void 0)),
          i === !1 && (i = p),
          this.each(function () {
            ot.event.remove(this, t, i, e);
          })
        );
      },
    });
  var Ht =
      /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
    Bt = /<script|<style|<link/i,
    qt = /checked\s*(?:[^=]|=\s*.checked.)/i,
    Vt = /^true\/(.*)/,
    Ut = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  ot.extend({
    htmlPrefilter: function (t) {
      return t.replace(Ht, "<$1></$2>");
    },
    clone: function (t, e, i) {
      var n,
        r,
        o,
        s,
        a = t.cloneNode(!0),
        l = ot.contains(t.ownerDocument, t);
      if (
        !(
          nt.noCloneChecked ||
          (1 !== t.nodeType && 11 !== t.nodeType) ||
          ot.isXMLDoc(t)
        )
      )
        for (s = u(a), o = u(t), n = 0, r = o.length; r > n; n++) T(o[n], s[n]);
      if (e)
        if (i)
          for (o = o || u(t), s = s || u(a), n = 0, r = o.length; r > n; n++)
            b(o[n], s[n]);
        else b(t, a);
      return (
        (s = u(a, "script")), s.length > 0 && c(s, !l && u(t, "script")), a
      );
    },
    cleanData: function (t) {
      for (var e, i, n, r = ot.event.special, o = 0; void 0 !== (i = t[o]); o++)
        if (Et(i)) {
          if ((e = i[Ct.expando])) {
            if (e.events)
              for (n in e.events)
                r[n] ? ot.event.remove(i, n) : ot.removeEvent(i, n, e.handle);
            i[Ct.expando] = void 0;
          }
          i[St.expando] && (i[St.expando] = void 0);
        }
    },
  }),
    ot.fn.extend({
      domManip: x,
      detach: function (t) {
        return w(this, t, !0);
      },
      remove: function (t) {
        return w(this, t);
      },
      text: function (t) {
        return wt(
          this,
          function (t) {
            return void 0 === t
              ? ot.text(this)
              : this.empty().each(function () {
                  (1 !== this.nodeType &&
                    11 !== this.nodeType &&
                    9 !== this.nodeType) ||
                    (this.textContent = t);
                });
          },
          null,
          t,
          arguments.length
        );
      },
      append: function () {
        return x(this, arguments, function (t) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var e = v(this, t);
            e.appendChild(t);
          }
        });
      },
      prepend: function () {
        return x(this, arguments, function (t) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var e = v(this, t);
            e.insertBefore(t, e.firstChild);
          }
        });
      },
      before: function () {
        return x(this, arguments, function (t) {
          this.parentNode && this.parentNode.insertBefore(t, this);
        });
      },
      after: function () {
        return x(this, arguments, function (t) {
          this.parentNode && this.parentNode.insertBefore(t, this.nextSibling);
        });
      },
      empty: function () {
        for (var t, e = 0; null != (t = this[e]); e++)
          1 === t.nodeType && (ot.cleanData(u(t, !1)), (t.textContent = ""));
        return this;
      },
      clone: function (t, e) {
        return (
          (t = null != t && t),
          (e = null == e ? t : e),
          this.map(function () {
            return ot.clone(this, t, e);
          })
        );
      },
      html: function (t) {
        return wt(
          this,
          function (t) {
            var e = this[0] || {},
              i = 0,
              n = this.length;
            if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
            if (
              "string" == typeof t &&
              !Bt.test(t) &&
              !Mt[(Nt.exec(t) || ["", ""])[1].toLowerCase()]
            ) {
              t = ot.htmlPrefilter(t);
              try {
                for (; n > i; i++)
                  (e = this[i] || {}),
                    1 === e.nodeType &&
                      (ot.cleanData(u(e, !1)), (e.innerHTML = t));
                e = 0;
              } catch (t) {}
            }
            e && this.empty().append(t);
          },
          null,
          t,
          arguments.length
        );
      },
      replaceWith: function () {
        var t = [];
        return x(
          this,
          arguments,
          function (e) {
            var i = this.parentNode;
            ot.inArray(this, t) < 0 &&
              (ot.cleanData(u(this)), i && i.replaceChild(e, this));
          },
          t
        );
      },
    }),
    ot.each(
      {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith",
      },
      function (t, e) {
        ot.fn[t] = function (t) {
          for (var i, n = [], r = ot(t), o = r.length - 1, s = 0; o >= s; s++)
            (i = s === o ? this : this.clone(!0)),
              ot(r[s])[e](i),
              Z.apply(n, i.get());
          return this.pushStack(n);
        };
      }
    );
  var $t,
    Yt = {
      HTML: "block",
      BODY: "block",
    },
    Xt = /^margin/,
    Gt = new RegExp("^(" + Dt + ")(?!px)[a-z%]+$", "i"),
    Qt = function (e) {
      var i = e.ownerDocument.defaultView;
      return (i && i.opener) || (i = t), i.getComputedStyle(e);
    },
    Kt = function (t, e, i, n) {
      var r,
        o,
        s = {};
      for (o in e) (s[o] = t.style[o]), (t.style[o] = e[o]);
      r = i.apply(t, n || []);
      for (o in e) t.style[o] = s[o];
      return r;
    },
    Zt = G.documentElement;
  !(function () {
    function e() {
      (a.style.cssText =
        "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%"),
        (a.innerHTML = ""),
        Zt.appendChild(s);
      var e = t.getComputedStyle(a);
      (i = "1%" !== e.top),
        (o = "2px" === e.marginLeft),
        (n = "4px" === e.width),
        (a.style.marginRight = "50%"),
        (r = "4px" === e.marginRight),
        Zt.removeChild(s);
    }
    var i,
      n,
      r,
      o,
      s = G.createElement("div"),
      a = G.createElement("div");
    a.style &&
      ((a.style.backgroundClip = "content-box"),
      (a.cloneNode(!0).style.backgroundClip = ""),
      (nt.clearCloneStyle = "content-box" === a.style.backgroundClip),
      (s.style.cssText =
        "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute"),
      s.appendChild(a),
      ot.extend(nt, {
        pixelPosition: function () {
          return e(), i;
        },
        boxSizingReliable: function () {
          return null == n && e(), n;
        },
        pixelMarginRight: function () {
          return null == n && e(), r;
        },
        reliableMarginLeft: function () {
          return null == n && e(), o;
        },
        reliableMarginRight: function () {
          var e,
            i = a.appendChild(G.createElement("div"));
          return (
            (i.style.cssText = a.style.cssText =
              "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0"),
            (i.style.marginRight = i.style.width = "0"),
            (a.style.width = "1px"),
            Zt.appendChild(s),
            (e = !parseFloat(t.getComputedStyle(i).marginRight)),
            Zt.removeChild(s),
            a.removeChild(i),
            e
          );
        },
      }));
  })();
  var Jt = /^(none|table(?!-c[ea]).+)/,
    te = {
      position: "absolute",
      visibility: "hidden",
      display: "block",
    },
    ee = {
      letterSpacing: "0",
      fontWeight: "400",
    },
    ie = ["Webkit", "O", "Moz", "ms"],
    ne = G.createElement("div").style;
  ot.extend({
    cssHooks: {
      opacity: {
        get: function (t, e) {
          if (e) {
            var i = S(t, "opacity");
            return "" === i ? "1" : i;
          }
        },
      },
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
    },
    cssProps: {
      float: "cssFloat",
    },
    style: function (t, e, i, n) {
      if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
        var r,
          o,
          s,
          a = ot.camelCase(e),
          l = t.style;
        return (
          (e = ot.cssProps[a] || (ot.cssProps[a] = I(a) || a)),
          (s = ot.cssHooks[e] || ot.cssHooks[a]),
          void 0 === i
            ? s && "get" in s && void 0 !== (r = s.get(t, !1, n))
              ? r
              : l[e]
            : ((o = typeof i),
              "string" === o &&
                (r = Pt.exec(i)) &&
                r[1] &&
                ((i = h(t, e, r)), (o = "number")),
              void (
                null != i &&
                i === i &&
                ("number" === o &&
                  (i += (r && r[3]) || (ot.cssNumber[a] ? "" : "px")),
                nt.clearCloneStyle ||
                  "" !== i ||
                  0 !== e.indexOf("background") ||
                  (l[e] = "inherit"),
                (s && "set" in s && void 0 === (i = s.set(t, i, n))) ||
                  (l[e] = i))
              ))
        );
      }
    },
    css: function (t, e, i, n) {
      var r,
        o,
        s,
        a = ot.camelCase(e);
      return (
        (e = ot.cssProps[a] || (ot.cssProps[a] = I(a) || a)),
        (s = ot.cssHooks[e] || ot.cssHooks[a]),
        s && "get" in s && (r = s.get(t, !0, i)),
        void 0 === r && (r = S(t, e, n)),
        "normal" === r && e in ee && (r = ee[e]),
        "" === i || i
          ? ((o = parseFloat(r)), i === !0 || isFinite(o) ? o || 0 : r)
          : r
      );
    },
  }),
    ot.each(["height", "width"], function (t, e) {
      ot.cssHooks[e] = {
        get: function (t, i, n) {
          return i
            ? Jt.test(ot.css(t, "display")) && 0 === t.offsetWidth
              ? Kt(t, te, function () {
                  return k(t, e, n);
                })
              : k(t, e, n)
            : void 0;
        },
        set: function (t, i, n) {
          var r,
            o = n && Qt(t),
            s =
              n &&
              P(t, e, n, "border-box" === ot.css(t, "boxSizing", !1, o), o);
          return (
            s &&
              (r = Pt.exec(i)) &&
              "px" !== (r[3] || "px") &&
              ((t.style[e] = i), (i = ot.css(t, e))),
            D(t, i, s)
          );
        },
      };
    }),
    (ot.cssHooks.marginLeft = A(nt.reliableMarginLeft, function (t, e) {
      return e
        ? (parseFloat(S(t, "marginLeft")) ||
            t.getBoundingClientRect().left -
              Kt(
                t,
                {
                  marginLeft: 0,
                },
                function () {
                  return t.getBoundingClientRect().left;
                }
              )) + "px"
        : void 0;
    })),
    (ot.cssHooks.marginRight = A(nt.reliableMarginRight, function (t, e) {
      return e
        ? Kt(
            t,
            {
              display: "inline-block",
            },
            S,
            [t, "marginRight"]
          )
        : void 0;
    })),
    ot.each(
      {
        margin: "",
        padding: "",
        border: "Width",
      },
      function (t, e) {
        (ot.cssHooks[t + e] = {
          expand: function (i) {
            for (
              var n = 0, r = {}, o = "string" == typeof i ? i.split(" ") : [i];
              4 > n;
              n++
            )
              r[t + kt[n] + e] = o[n] || o[n - 2] || o[0];
            return r;
          },
        }),
          Xt.test(t) || (ot.cssHooks[t + e].set = D);
      }
    ),
    ot.fn.extend({
      css: function (t, e) {
        return wt(
          this,
          function (t, e, i) {
            var n,
              r,
              o = {},
              s = 0;
            if (ot.isArray(e)) {
              for (n = Qt(t), r = e.length; r > s; s++)
                o[e[s]] = ot.css(t, e[s], !1, n);
              return o;
            }
            return void 0 !== i ? ot.style(t, e, i) : ot.css(t, e);
          },
          t,
          e,
          arguments.length > 1
        );
      },
      show: function () {
        return O(this, !0);
      },
      hide: function () {
        return O(this);
      },
      toggle: function (t) {
        return "boolean" == typeof t
          ? t
            ? this.show()
            : this.hide()
          : this.each(function () {
              Ot(this) ? ot(this).show() : ot(this).hide();
            });
      },
    }),
    (ot.Tween = L),
    (L.prototype = {
      constructor: L,
      init: function (t, e, i, n, r, o) {
        (this.elem = t),
          (this.prop = i),
          (this.easing = r || ot.easing._default),
          (this.options = e),
          (this.start = this.now = this.cur()),
          (this.end = n),
          (this.unit = o || (ot.cssNumber[i] ? "" : "px"));
      },
      cur: function () {
        var t = L.propHooks[this.prop];
        return t && t.get ? t.get(this) : L.propHooks._default.get(this);
      },
      run: function (t) {
        var e,
          i = L.propHooks[this.prop];
        return (
          this.options.duration
            ? (this.pos = e =
                ot.easing[this.easing](
                  t,
                  this.options.duration * t,
                  0,
                  1,
                  this.options.duration
                ))
            : (this.pos = e = t),
          (this.now = (this.end - this.start) * e + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          i && i.set ? i.set(this) : L.propHooks._default.set(this),
          this
        );
      },
    }),
    (L.prototype.init.prototype = L.prototype),
    (L.propHooks = {
      _default: {
        get: function (t) {
          var e;
          return 1 !== t.elem.nodeType ||
            (null != t.elem[t.prop] && null == t.elem.style[t.prop])
            ? t.elem[t.prop]
            : ((e = ot.css(t.elem, t.prop, "")), e && "auto" !== e ? e : 0);
        },
        set: function (t) {
          ot.fx.step[t.prop]
            ? ot.fx.step[t.prop](t)
            : 1 !== t.elem.nodeType ||
              (null == t.elem.style[ot.cssProps[t.prop]] &&
                !ot.cssHooks[t.prop])
            ? (t.elem[t.prop] = t.now)
            : ot.style(t.elem, t.prop, t.now + t.unit);
        },
      },
    }),
    (L.propHooks.scrollTop = L.propHooks.scrollLeft =
      {
        set: function (t) {
          t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now);
        },
      }),
    (ot.easing = {
      linear: function (t) {
        return t;
      },
      swing: function (t) {
        return 0.5 - Math.cos(t * Math.PI) / 2;
      },
      _default: "swing",
    }),
    (ot.fx = L.prototype.init),
    (ot.fx.step = {});
  var re,
    oe,
    se = /^(?:toggle|show|hide)$/,
    ae = /queueHooks$/;
  (ot.Animation = ot.extend(F, {
    tweeners: {
      "*": [
        function (t, e) {
          var i = this.createTween(t, e);
          return h(i.elem, t, Pt.exec(e), i), i;
        },
      ],
    },
    tweener: function (t, e) {
      ot.isFunction(t) ? ((e = t), (t = ["*"])) : (t = t.match(Tt));
      for (var i, n = 0, r = t.length; r > n; n++)
        (i = t[n]),
          (F.tweeners[i] = F.tweeners[i] || []),
          F.tweeners[i].unshift(e);
    },
    prefilters: [z],
    prefilter: function (t, e) {
      e ? F.prefilters.unshift(t) : F.prefilters.push(t);
    },
  })),
    (ot.speed = function (t, e, i) {
      var n =
        t && "object" == typeof t
          ? ot.extend({}, t)
          : {
              complete: i || (!i && e) || (ot.isFunction(t) && t),
              duration: t,
              easing: (i && e) || (e && !ot.isFunction(e) && e),
            };
      return (
        (n.duration = ot.fx.off
          ? 0
          : "number" == typeof n.duration
          ? n.duration
          : n.duration in ot.fx.speeds
          ? ot.fx.speeds[n.duration]
          : ot.fx.speeds._default),
        (null != n.queue && n.queue !== !0) || (n.queue = "fx"),
        (n.old = n.complete),
        (n.complete = function () {
          ot.isFunction(n.old) && n.old.call(this),
            n.queue && ot.dequeue(this, n.queue);
        }),
        n
      );
    }),
    ot.fn.extend({
      fadeTo: function (t, e, i, n) {
        return this.filter(Ot).css("opacity", 0).show().end().animate(
          {
            opacity: e,
          },
          t,
          i,
          n
        );
      },
      animate: function (t, e, i, n) {
        var r = ot.isEmptyObject(t),
          o = ot.speed(e, i, n),
          s = function () {
            var e = F(this, ot.extend({}, t), o);
            (r || Ct.get(this, "finish")) && e.stop(!0);
          };
        return (
          (s.finish = s),
          r || o.queue === !1 ? this.each(s) : this.queue(o.queue, s)
        );
      },
      stop: function (t, e, i) {
        var n = function (t) {
          var e = t.stop;
          delete t.stop, e(i);
        };
        return (
          "string" != typeof t && ((i = e), (e = t), (t = void 0)),
          e && t !== !1 && this.queue(t || "fx", []),
          this.each(function () {
            var e = !0,
              r = null != t && t + "queueHooks",
              o = ot.timers,
              s = Ct.get(this);
            if (r) s[r] && s[r].stop && n(s[r]);
            else for (r in s) s[r] && s[r].stop && ae.test(r) && n(s[r]);
            for (r = o.length; r--; )
              o[r].elem !== this ||
                (null != t && o[r].queue !== t) ||
                (o[r].anim.stop(i), (e = !1), o.splice(r, 1));
            (!e && i) || ot.dequeue(this, t);
          })
        );
      },
      finish: function (t) {
        return (
          t !== !1 && (t = t || "fx"),
          this.each(function () {
            var e,
              i = Ct.get(this),
              n = i[t + "queue"],
              r = i[t + "queueHooks"],
              o = ot.timers,
              s = n ? n.length : 0;
            for (
              i.finish = !0,
                ot.queue(this, t, []),
                r && r.stop && r.stop.call(this, !0),
                e = o.length;
              e--;

            )
              o[e].elem === this &&
                o[e].queue === t &&
                (o[e].anim.stop(!0), o.splice(e, 1));
            for (e = 0; s > e; e++)
              n[e] && n[e].finish && n[e].finish.call(this);
            delete i.finish;
          })
        );
      },
    }),
    ot.each(["toggle", "show", "hide"], function (t, e) {
      var i = ot.fn[e];
      ot.fn[e] = function (t, n, r) {
        return null == t || "boolean" == typeof t
          ? i.apply(this, arguments)
          : this.animate(R(e, !0), t, n, r);
      };
    }),
    ot.each(
      {
        slideDown: R("show"),
        slideUp: R("hide"),
        slideToggle: R("toggle"),
        fadeIn: {
          opacity: "show",
        },
        fadeOut: {
          opacity: "hide",
        },
        fadeToggle: {
          opacity: "toggle",
        },
      },
      function (t, e) {
        ot.fn[t] = function (t, i, n) {
          return this.animate(e, t, i, n);
        };
      }
    ),
    (ot.timers = []),
    (ot.fx.tick = function () {
      var t,
        e = 0,
        i = ot.timers;
      for (re = ot.now(); e < i.length; e++)
        (t = i[e]), t() || i[e] !== t || i.splice(e--, 1);
      i.length || ot.fx.stop(), (re = void 0);
    }),
    (ot.fx.timer = function (t) {
      ot.timers.push(t), t() ? ot.fx.start() : ot.timers.pop();
    }),
    (ot.fx.interval = 13),
    (ot.fx.start = function () {
      oe || (oe = t.setInterval(ot.fx.tick, ot.fx.interval));
    }),
    (ot.fx.stop = function () {
      t.clearInterval(oe), (oe = null);
    }),
    (ot.fx.speeds = {
      slow: 600,
      fast: 200,
      _default: 400,
    }),
    (ot.fn.delay = function (e, i) {
      return (
        (e = ot.fx ? ot.fx.speeds[e] || e : e),
        (i = i || "fx"),
        this.queue(i, function (i, n) {
          var r = t.setTimeout(i, e);
          n.stop = function () {
            t.clearTimeout(r);
          };
        })
      );
    }),
    (function () {
      var t = G.createElement("input"),
        e = G.createElement("select"),
        i = e.appendChild(G.createElement("option"));
      (t.type = "checkbox"),
        (nt.checkOn = "" !== t.value),
        (nt.optSelected = i.selected),
        (e.disabled = !0),
        (nt.optDisabled = !i.disabled),
        (t = G.createElement("input")),
        (t.value = "t"),
        (t.type = "radio"),
        (nt.radioValue = "t" === t.value);
    })();
  var le,
    he = ot.expr.attrHandle;
  ot.fn.extend({
    attr: function (t, e) {
      return wt(this, ot.attr, t, e, arguments.length > 1);
    },
    removeAttr: function (t) {
      return this.each(function () {
        ot.removeAttr(this, t);
      });
    },
  }),
    ot.extend({
      attr: function (t, e, i) {
        var n,
          r,
          o = t.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return "undefined" == typeof t.getAttribute
            ? ot.prop(t, e, i)
            : ((1 === o && ot.isXMLDoc(t)) ||
                ((e = e.toLowerCase()),
                (r =
                  ot.attrHooks[e] ||
                  (ot.expr.match.bool.test(e) ? le : void 0))),
              void 0 !== i
                ? null === i
                  ? void ot.removeAttr(t, e)
                  : r && "set" in r && void 0 !== (n = r.set(t, i, e))
                  ? n
                  : (t.setAttribute(e, i + ""), i)
                : r && "get" in r && null !== (n = r.get(t, e))
                ? n
                : ((n = ot.find.attr(t, e)), null == n ? void 0 : n));
      },
      attrHooks: {
        type: {
          set: function (t, e) {
            if (!nt.radioValue && "radio" === e && ot.nodeName(t, "input")) {
              var i = t.value;
              return t.setAttribute("type", e), i && (t.value = i), e;
            }
          },
        },
      },
      removeAttr: function (t, e) {
        var i,
          n,
          r = 0,
          o = e && e.match(Tt);
        if (o && 1 === t.nodeType)
          for (; (i = o[r++]); )
            (n = ot.propFix[i] || i),
              ot.expr.match.bool.test(i) && (t[n] = !1),
              t.removeAttribute(i);
      },
    }),
    (le = {
      set: function (t, e, i) {
        return e === !1 ? ot.removeAttr(t, i) : t.setAttribute(i, i), i;
      },
    }),
    ot.each(ot.expr.match.bool.source.match(/\w+/g), function (t, e) {
      var i = he[e] || ot.find.attr;
      he[e] = function (t, e, n) {
        var r, o;
        return (
          n ||
            ((o = he[e]),
            (he[e] = r),
            (r = null != i(t, e, n) ? e.toLowerCase() : null),
            (he[e] = o)),
          r
        );
      };
    });
  var ue = /^(?:input|select|textarea|button)$/i,
    ce = /^(?:a|area)$/i;
  ot.fn.extend({
    prop: function (t, e) {
      return wt(this, ot.prop, t, e, arguments.length > 1);
    },
    removeProp: function (t) {
      return this.each(function () {
        delete this[ot.propFix[t] || t];
      });
    },
  }),
    ot.extend({
      prop: function (t, e, i) {
        var n,
          r,
          o = t.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return (
            (1 === o && ot.isXMLDoc(t)) ||
              ((e = ot.propFix[e] || e), (r = ot.propHooks[e])),
            void 0 !== i
              ? r && "set" in r && void 0 !== (n = r.set(t, i, e))
                ? n
                : (t[e] = i)
              : r && "get" in r && null !== (n = r.get(t, e))
              ? n
              : t[e]
          );
      },
      propHooks: {
        tabIndex: {
          get: function (t) {
            var e = ot.find.attr(t, "tabindex");
            return e
              ? parseInt(e, 10)
              : ue.test(t.nodeName) || (ce.test(t.nodeName) && t.href)
              ? 0
              : -1;
          },
        },
      },
      propFix: {
        for: "htmlFor",
        class: "className",
      },
    }),
    nt.optSelected ||
      (ot.propHooks.selected = {
        get: function (t) {
          var e = t.parentNode;
          return e && e.parentNode && e.parentNode.selectedIndex, null;
        },
        set: function (t) {
          var e = t.parentNode;
          e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex);
        },
      }),
    ot.each(
      [
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable",
      ],
      function () {
        ot.propFix[this.toLowerCase()] = this;
      }
    );
  var fe = /[\t\r\n\f]/g;
  ot.fn.extend({
    addClass: function (t) {
      var e,
        i,
        n,
        r,
        o,
        s,
        a,
        l = 0;
      if (ot.isFunction(t))
        return this.each(function (e) {
          ot(this).addClass(t.call(this, e, W(this)));
        });
      if ("string" == typeof t && t)
        for (e = t.match(Tt) || []; (i = this[l++]); )
          if (
            ((r = W(i)),
            (n = 1 === i.nodeType && (" " + r + " ").replace(fe, " ")))
          ) {
            for (s = 0; (o = e[s++]); )
              n.indexOf(" " + o + " ") < 0 && (n += o + " ");
            (a = ot.trim(n)), r !== a && i.setAttribute("class", a);
          }
      return this;
    },
    removeClass: function (t) {
      var e,
        i,
        n,
        r,
        o,
        s,
        a,
        l = 0;
      if (ot.isFunction(t))
        return this.each(function (e) {
          ot(this).removeClass(t.call(this, e, W(this)));
        });
      if (!arguments.length) return this.attr("class", "");
      if ("string" == typeof t && t)
        for (e = t.match(Tt) || []; (i = this[l++]); )
          if (
            ((r = W(i)),
            (n = 1 === i.nodeType && (" " + r + " ").replace(fe, " ")))
          ) {
            for (s = 0; (o = e[s++]); )
              for (; n.indexOf(" " + o + " ") > -1; )
                n = n.replace(" " + o + " ", " ");
            (a = ot.trim(n)), r !== a && i.setAttribute("class", a);
          }
      return this;
    },
    toggleClass: function (t, e) {
      var i = typeof t;
      return "boolean" == typeof e && "string" === i
        ? e
          ? this.addClass(t)
          : this.removeClass(t)
        : ot.isFunction(t)
        ? this.each(function (i) {
            ot(this).toggleClass(t.call(this, i, W(this), e), e);
          })
        : this.each(function () {
            var e, n, r, o;
            if ("string" === i)
              for (n = 0, r = ot(this), o = t.match(Tt) || []; (e = o[n++]); )
                r.hasClass(e) ? r.removeClass(e) : r.addClass(e);
            else
              (void 0 !== t && "boolean" !== i) ||
                ((e = W(this)),
                e && Ct.set(this, "__className__", e),
                this.setAttribute &&
                  this.setAttribute(
                    "class",
                    e || t === !1 ? "" : Ct.get(this, "__className__") || ""
                  ));
          });
    },
    hasClass: function (t) {
      var e,
        i,
        n = 0;
      for (e = " " + t + " "; (i = this[n++]); )
        if (
          1 === i.nodeType &&
          (" " + W(i) + " ").replace(fe, " ").indexOf(e) > -1
        )
          return !0;
      return !1;
    },
  });
  var de = /\r/g,
    pe = /[\x20\t\r\n\f]+/g;
  ot.fn.extend({
    val: function (t) {
      var e,
        i,
        n,
        r = this[0];
      return arguments.length
        ? ((n = ot.isFunction(t)),
          this.each(function (i) {
            var r;
            1 === this.nodeType &&
              ((r = n ? t.call(this, i, ot(this).val()) : t),
              null == r
                ? (r = "")
                : "number" == typeof r
                ? (r += "")
                : ot.isArray(r) &&
                  (r = ot.map(r, function (t) {
                    return null == t ? "" : t + "";
                  })),
              (e =
                ot.valHooks[this.type] ||
                ot.valHooks[this.nodeName.toLowerCase()]),
              (e && "set" in e && void 0 !== e.set(this, r, "value")) ||
                (this.value = r));
          }))
        : r
        ? ((e = ot.valHooks[r.type] || ot.valHooks[r.nodeName.toLowerCase()]),
          e && "get" in e && void 0 !== (i = e.get(r, "value"))
            ? i
            : ((i = r.value),
              "string" == typeof i ? i.replace(de, "") : null == i ? "" : i))
        : void 0;
    },
  }),
    ot.extend({
      valHooks: {
        option: {
          get: function (t) {
            var e = ot.find.attr(t, "value");
            return null != e ? e : ot.trim(ot.text(t)).replace(pe, " ");
          },
        },
        select: {
          get: function (t) {
            for (
              var e,
                i,
                n = t.options,
                r = t.selectedIndex,
                o = "select-one" === t.type || 0 > r,
                s = o ? null : [],
                a = o ? r + 1 : n.length,
                l = 0 > r ? a : o ? r : 0;
              a > l;
              l++
            )
              if (
                ((i = n[l]),
                (i.selected || l === r) &&
                  (nt.optDisabled
                    ? !i.disabled
                    : null === i.getAttribute("disabled")) &&
                  (!i.parentNode.disabled ||
                    !ot.nodeName(i.parentNode, "optgroup")))
              ) {
                if (((e = ot(i).val()), o)) return e;
                s.push(e);
              }
            return s;
          },
          set: function (t, e) {
            for (
              var i, n, r = t.options, o = ot.makeArray(e), s = r.length;
              s--;

            )
              (n = r[s]),
                (n.selected = ot.inArray(ot.valHooks.option.get(n), o) > -1) &&
                  (i = !0);
            return i || (t.selectedIndex = -1), o;
          },
        },
      },
    }),
    ot.each(["radio", "checkbox"], function () {
      (ot.valHooks[this] = {
        set: function (t, e) {
          return ot.isArray(e)
            ? (t.checked = ot.inArray(ot(t).val(), e) > -1)
            : void 0;
        },
      }),
        nt.checkOn ||
          (ot.valHooks[this].get = function (t) {
            return null === t.getAttribute("value") ? "on" : t.value;
          });
    });
  var me = /^(?:focusinfocus|focusoutblur)$/;
  ot.extend(ot.event, {
    trigger: function (e, i, n, r) {
      var o,
        s,
        a,
        l,
        h,
        u,
        c,
        f = [n || G],
        d = it.call(e, "type") ? e.type : e,
        p = it.call(e, "namespace") ? e.namespace.split(".") : [];
      if (
        ((s = a = n = n || G),
        3 !== n.nodeType &&
          8 !== n.nodeType &&
          !me.test(d + ot.event.triggered) &&
          (d.indexOf(".") > -1 &&
            ((p = d.split(".")), (d = p.shift()), p.sort()),
          (h = d.indexOf(":") < 0 && "on" + d),
          (e = e[ot.expando] ? e : new ot.Event(d, "object" == typeof e && e)),
          (e.isTrigger = r ? 2 : 3),
          (e.namespace = p.join(".")),
          (e.rnamespace = e.namespace
            ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)")
            : null),
          (e.result = void 0),
          e.target || (e.target = n),
          (i = null == i ? [e] : ot.makeArray(i, [e])),
          (c = ot.event.special[d] || {}),
          r || !c.trigger || c.trigger.apply(n, i) !== !1))
      ) {
        if (!r && !c.noBubble && !ot.isWindow(n)) {
          for (
            l = c.delegateType || d, me.test(l + d) || (s = s.parentNode);
            s;
            s = s.parentNode
          )
            f.push(s), (a = s);
          a === (n.ownerDocument || G) &&
            f.push(a.defaultView || a.parentWindow || t);
        }
        for (o = 0; (s = f[o++]) && !e.isPropagationStopped(); )
          (e.type = o > 1 ? l : c.bindType || d),
            (u = (Ct.get(s, "events") || {})[e.type] && Ct.get(s, "handle")),
            u && u.apply(s, i),
            (u = h && s[h]),
            u &&
              u.apply &&
              Et(s) &&
              ((e.result = u.apply(s, i)),
              e.result === !1 && e.preventDefault());
        return (
          (e.type = d),
          r ||
            e.isDefaultPrevented() ||
            (c._default && c._default.apply(f.pop(), i) !== !1) ||
            !Et(n) ||
            (h &&
              ot.isFunction(n[d]) &&
              !ot.isWindow(n) &&
              ((a = n[h]),
              a && (n[h] = null),
              (ot.event.triggered = d),
              n[d](),
              (ot.event.triggered = void 0),
              a && (n[h] = a))),
          e.result
        );
      }
    },
    simulate: function (t, e, i) {
      var n = ot.extend(new ot.Event(), i, {
        type: t,
        isSimulated: !0,
      });
      ot.event.trigger(n, null, e);
    },
  }),
    ot.fn.extend({
      trigger: function (t, e) {
        return this.each(function () {
          ot.event.trigger(t, e, this);
        });
      },
      triggerHandler: function (t, e) {
        var i = this[0];
        return i ? ot.event.trigger(t, e, i, !0) : void 0;
      },
    }),
    ot.each(
      "blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(
        " "
      ),
      function (t, e) {
        ot.fn[e] = function (t, i) {
          return arguments.length > 0
            ? this.on(e, null, t, i)
            : this.trigger(e);
        };
      }
    ),
    ot.fn.extend({
      hover: function (t, e) {
        return this.mouseenter(t).mouseleave(e || t);
      },
    }),
    (nt.focusin = "onfocusin" in t),
    nt.focusin ||
      ot.each(
        {
          focus: "focusin",
          blur: "focusout",
        },
        function (t, e) {
          var i = function (t) {
            ot.event.simulate(e, t.target, ot.event.fix(t));
          };
          ot.event.special[e] = {
            setup: function () {
              var n = this.ownerDocument || this,
                r = Ct.access(n, e);
              r || n.addEventListener(t, i, !0), Ct.access(n, e, (r || 0) + 1);
            },
            teardown: function () {
              var n = this.ownerDocument || this,
                r = Ct.access(n, e) - 1;
              r
                ? Ct.access(n, e, r)
                : (n.removeEventListener(t, i, !0), Ct.remove(n, e));
            },
          };
        }
      );
  var ge = t.location,
    ve = ot.now(),
    ye = /\?/;
  (ot.parseJSON = function (t) {
    return JSON.parse(t + "");
  }),
    (ot.parseXML = function (e) {
      var i;
      if (!e || "string" != typeof e) return null;
      try {
        i = new t.DOMParser().parseFromString(e, "text/xml");
      } catch (t) {
        i = void 0;
      }
      return (
        (i && !i.getElementsByTagName("parsererror").length) ||
          ot.error("Invalid XML: " + e),
        i
      );
    });
  var _e = /#.*$/,
    be = /([?&])_=[^&]*/,
    Te = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    xe = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
    we = /^(?:GET|HEAD)$/,
    Ee = /^\/\//,
    Ce = {},
    Se = {},
    Ae = "*/".concat("*"),
    Ie = G.createElement("a");
  (Ie.href = ge.href),
    ot.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: ge.href,
        type: "GET",
        isLocal: xe.test(ge.protocol),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": Ae,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript",
        },
        contents: {
          xml: /\bxml\b/,
          html: /\bhtml/,
          json: /\bjson\b/,
        },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON",
        },
        converters: {
          "* text": String,
          "text html": !0,
          "text json": ot.parseJSON,
          "text xml": ot.parseXML,
        },
        flatOptions: {
          url: !0,
          context: !0,
        },
      },
      ajaxSetup: function (t, e) {
        return e ? q(q(t, ot.ajaxSettings), e) : q(ot.ajaxSettings, t);
      },
      ajaxPrefilter: H(Ce),
      ajaxTransport: H(Se),
      ajax: function (e, i) {
        function n(e, i, n, a) {
          var h,
            c,
            y,
            _,
            T,
            w = i;
          2 !== b &&
            ((b = 2),
            l && t.clearTimeout(l),
            (r = void 0),
            (s = a || ""),
            (x.readyState = e > 0 ? 4 : 0),
            (h = (e >= 200 && 300 > e) || 304 === e),
            n && (_ = V(f, x, n)),
            (_ = U(f, _, x, h)),
            h
              ? (f.ifModified &&
                  ((T = x.getResponseHeader("Last-Modified")),
                  T && (ot.lastModified[o] = T),
                  (T = x.getResponseHeader("etag")),
                  T && (ot.etag[o] = T)),
                204 === e || "HEAD" === f.type
                  ? (w = "nocontent")
                  : 304 === e
                  ? (w = "notmodified")
                  : ((w = _.state), (c = _.data), (y = _.error), (h = !y)))
              : ((y = w), (!e && w) || ((w = "error"), 0 > e && (e = 0))),
            (x.status = e),
            (x.statusText = (i || w) + ""),
            h ? m.resolveWith(d, [c, w, x]) : m.rejectWith(d, [x, w, y]),
            x.statusCode(v),
            (v = void 0),
            u && p.trigger(h ? "ajaxSuccess" : "ajaxError", [x, f, h ? c : y]),
            g.fireWith(d, [x, w]),
            u &&
              (p.trigger("ajaxComplete", [x, f]),
              --ot.active || ot.event.trigger("ajaxStop")));
        }
        "object" == typeof e && ((i = e), (e = void 0)), (i = i || {});
        var r,
          o,
          s,
          a,
          l,
          h,
          u,
          c,
          f = ot.ajaxSetup({}, i),
          d = f.context || f,
          p = f.context && (d.nodeType || d.jquery) ? ot(d) : ot.event,
          m = ot.Deferred(),
          g = ot.Callbacks("once memory"),
          v = f.statusCode || {},
          y = {},
          _ = {},
          b = 0,
          T = "canceled",
          x = {
            readyState: 0,
            getResponseHeader: function (t) {
              var e;
              if (2 === b) {
                if (!a)
                  for (a = {}; (e = Te.exec(s)); ) a[e[1].toLowerCase()] = e[2];
                e = a[t.toLowerCase()];
              }
              return null == e ? null : e;
            },
            getAllResponseHeaders: function () {
              return 2 === b ? s : null;
            },
            setRequestHeader: function (t, e) {
              var i = t.toLowerCase();
              return b || ((t = _[i] = _[i] || t), (y[t] = e)), this;
            },
            overrideMimeType: function (t) {
              return b || (f.mimeType = t), this;
            },
            statusCode: function (t) {
              var e;
              if (t)
                if (2 > b) for (e in t) v[e] = [v[e], t[e]];
                else x.always(t[x.status]);
              return this;
            },
            abort: function (t) {
              var e = t || T;
              return r && r.abort(e), n(0, e), this;
            },
          };
        if (
          ((m.promise(x).complete = g.add),
          (x.success = x.done),
          (x.error = x.fail),
          (f.url = ((e || f.url || ge.href) + "")
            .replace(_e, "")
            .replace(Ee, ge.protocol + "//")),
          (f.type = i.method || i.type || f.method || f.type),
          (f.dataTypes = ot
            .trim(f.dataType || "*")
            .toLowerCase()
            .match(Tt) || [""]),
          null == f.crossDomain)
        ) {
          h = G.createElement("a");
          try {
            (h.href = f.url),
              (h.href = h.href),
              (f.crossDomain =
                Ie.protocol + "//" + Ie.host != h.protocol + "//" + h.host);
          } catch (t) {
            f.crossDomain = !0;
          }
        }
        if (
          (f.data &&
            f.processData &&
            "string" != typeof f.data &&
            (f.data = ot.param(f.data, f.traditional)),
          B(Ce, f, i, x),
          2 === b)
        )
          return x;
        (u = ot.event && f.global),
          u && 0 === ot.active++ && ot.event.trigger("ajaxStart"),
          (f.type = f.type.toUpperCase()),
          (f.hasContent = !we.test(f.type)),
          (o = f.url),
          f.hasContent ||
            (f.data &&
              ((o = f.url += (ye.test(o) ? "&" : "?") + f.data), delete f.data),
            f.cache === !1 &&
              (f.url = be.test(o)
                ? o.replace(be, "$1_=" + ve++)
                : o + (ye.test(o) ? "&" : "?") + "_=" + ve++)),
          f.ifModified &&
            (ot.lastModified[o] &&
              x.setRequestHeader("If-Modified-Since", ot.lastModified[o]),
            ot.etag[o] && x.setRequestHeader("If-None-Match", ot.etag[o])),
          ((f.data && f.hasContent && f.contentType !== !1) || i.contentType) &&
            x.setRequestHeader("Content-Type", f.contentType),
          x.setRequestHeader(
            "Accept",
            f.dataTypes[0] && f.accepts[f.dataTypes[0]]
              ? f.accepts[f.dataTypes[0]] +
                  ("*" !== f.dataTypes[0] ? ", " + Ae + "; q=0.01" : "")
              : f.accepts["*"]
          );
        for (c in f.headers) x.setRequestHeader(c, f.headers[c]);
        if (f.beforeSend && (f.beforeSend.call(d, x, f) === !1 || 2 === b))
          return x.abort();
        T = "abort";
        for (c in {
          success: 1,
          error: 1,
          complete: 1,
        })
          x[c](f[c]);
        if ((r = B(Se, f, i, x))) {
          if (((x.readyState = 1), u && p.trigger("ajaxSend", [x, f]), 2 === b))
            return x;
          f.async &&
            f.timeout > 0 &&
            (l = t.setTimeout(function () {
              x.abort("timeout");
            }, f.timeout));
          try {
            (b = 1), r.send(y, n);
          } catch (t) {
            if (!(2 > b)) throw t;
            n(-1, t);
          }
        } else n(-1, "No Transport");
        return x;
      },
      getJSON: function (t, e, i) {
        return ot.get(t, e, i, "json");
      },
      getScript: function (t, e) {
        return ot.get(t, void 0, e, "script");
      },
    }),
    ot.each(["get", "post"], function (t, e) {
      ot[e] = function (t, i, n, r) {
        return (
          ot.isFunction(i) && ((r = r || n), (n = i), (i = void 0)),
          ot.ajax(
            ot.extend(
              {
                url: t,
                type: e,
                dataType: r,
                data: i,
                success: n,
              },
              ot.isPlainObject(t) && t
            )
          )
        );
      };
    }),
    (ot._evalUrl = function (t) {
      return ot.ajax({
        url: t,
        type: "GET",
        dataType: "script",
        async: !1,
        global: !1,
        throws: !0,
      });
    }),
    ot.fn.extend({
      wrapAll: function (t) {
        var e;
        return ot.isFunction(t)
          ? this.each(function (e) {
              ot(this).wrapAll(t.call(this, e));
            })
          : (this[0] &&
              ((e = ot(t, this[0].ownerDocument).eq(0).clone(!0)),
              this[0].parentNode && e.insertBefore(this[0]),
              e
                .map(function () {
                  for (var t = this; t.firstElementChild; )
                    t = t.firstElementChild;
                  return t;
                })
                .append(this)),
            this);
      },
      wrapInner: function (t) {
        return ot.isFunction(t)
          ? this.each(function (e) {
              ot(this).wrapInner(t.call(this, e));
            })
          : this.each(function () {
              var e = ot(this),
                i = e.contents();
              i.length ? i.wrapAll(t) : e.append(t);
            });
      },
      wrap: function (t) {
        var e = ot.isFunction(t);
        return this.each(function (i) {
          ot(this).wrapAll(e ? t.call(this, i) : t);
        });
      },
      unwrap: function () {
        return this.parent()
          .each(function () {
            ot.nodeName(this, "body") || ot(this).replaceWith(this.childNodes);
          })
          .end();
      },
    }),
    (ot.expr.filters.hidden = function (t) {
      return !ot.expr.filters.visible(t);
    }),
    (ot.expr.filters.visible = function (t) {
      return (
        t.offsetWidth > 0 || t.offsetHeight > 0 || t.getClientRects().length > 0
      );
    });
  var De = /%20/g,
    Pe = /\[\]$/,
    ke = /\r?\n/g,
    Oe = /^(?:submit|button|image|reset|file)$/i,
    Le = /^(?:input|select|textarea|keygen)/i;
  (ot.param = function (t, e) {
    var i,
      n = [],
      r = function (t, e) {
        (e = ot.isFunction(e) ? e() : null == e ? "" : e),
          (n[n.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e));
      };
    if (
      (void 0 === e && (e = ot.ajaxSettings && ot.ajaxSettings.traditional),
      ot.isArray(t) || (t.jquery && !ot.isPlainObject(t)))
    )
      ot.each(t, function () {
        r(this.name, this.value);
      });
    else for (i in t) $(i, t[i], e, r);
    return n.join("&").replace(De, "+");
  }),
    ot.fn.extend({
      serialize: function () {
        return ot.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var t = ot.prop(this, "elements");
          return t ? ot.makeArray(t) : this;
        })
          .filter(function () {
            var t = this.type;
            return (
              this.name &&
              !ot(this).is(":disabled") &&
              Le.test(this.nodeName) &&
              !Oe.test(t) &&
              (this.checked || !Lt.test(t))
            );
          })
          .map(function (t, e) {
            var i = ot(this).val();
            return null == i
              ? null
              : ot.isArray(i)
              ? ot.map(i, function (t) {
                  return {
                    name: e.name,
                    value: t.replace(ke, "\r\n"),
                  };
                })
              : {
                  name: e.name,
                  value: i.replace(ke, "\r\n"),
                };
          })
          .get();
      },
    }),
    (ot.ajaxSettings.xhr = function () {
      try {
        return new t.XMLHttpRequest();
      } catch (t) {}
    });
  var Ne = {
      0: 200,
      1223: 204,
    },
    Re = ot.ajaxSettings.xhr();
  (nt.cors = !!Re && "withCredentials" in Re),
    (nt.ajax = Re = !!Re),
    ot.ajaxTransport(function (e) {
      var i, n;
      return nt.cors || (Re && !e.crossDomain)
        ? {
            send: function (r, o) {
              var s,
                a = e.xhr();
              if (
                (a.open(e.type, e.url, e.async, e.username, e.password),
                e.xhrFields)
              )
                for (s in e.xhrFields) a[s] = e.xhrFields[s];
              e.mimeType &&
                a.overrideMimeType &&
                a.overrideMimeType(e.mimeType),
                e.crossDomain ||
                  r["X-Requested-With"] ||
                  (r["X-Requested-With"] = "XMLHttpRequest");
              for (s in r) a.setRequestHeader(s, r[s]);
              (i = function (t) {
                return function () {
                  i &&
                    ((i =
                      n =
                      a.onload =
                      a.onerror =
                      a.onabort =
                      a.onreadystatechange =
                        null),
                    "abort" === t
                      ? a.abort()
                      : "error" === t
                      ? "number" != typeof a.status
                        ? o(0, "error")
                        : o(a.status, a.statusText)
                      : o(
                          Ne[a.status] || a.status,
                          a.statusText,
                          "text" !== (a.responseType || "text") ||
                            "string" != typeof a.responseText
                            ? {
                                binary: a.response,
                              }
                            : {
                                text: a.responseText,
                              },
                          a.getAllResponseHeaders()
                        ));
                };
              }),
                (a.onload = i()),
                (n = a.onerror = i("error")),
                void 0 !== a.onabort
                  ? (a.onabort = n)
                  : (a.onreadystatechange = function () {
                      4 === a.readyState &&
                        t.setTimeout(function () {
                          i && n();
                        });
                    }),
                (i = i("abort"));
              try {
                a.send((e.hasContent && e.data) || null);
              } catch (t) {
                if (i) throw t;
              }
            },
            abort: function () {
              i && i();
            },
          }
        : void 0;
    }),
    ot.ajaxSetup({
      accepts: {
        script:
          "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
      },
      contents: {
        script: /\b(?:java|ecma)script\b/,
      },
      converters: {
        "text script": function (t) {
          return ot.globalEval(t), t;
        },
      },
    }),
    ot.ajaxPrefilter("script", function (t) {
      void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET");
    }),
    ot.ajaxTransport("script", function (t) {
      if (t.crossDomain) {
        var e, i;
        return {
          send: function (n, r) {
            (e = ot("<script>")
              .prop({
                charset: t.scriptCharset,
                src: t.url,
              })
              .on(
                "load error",
                (i = function (t) {
                  e.remove(),
                    (i = null),
                    t && r("error" === t.type ? 404 : 200, t.type);
                })
              )),
              G.head.appendChild(e[0]);
          },
          abort: function () {
            i && i();
          },
        };
      }
    });
  var Me = [],
    ze = /(=)\?(?=&|$)|\?\?/;
  ot.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var t = Me.pop() || ot.expando + "_" + ve++;
      return (this[t] = !0), t;
    },
  }),
    ot.ajaxPrefilter("json jsonp", function (e, i, n) {
      var r,
        o,
        s,
        a =
          e.jsonp !== !1 &&
          (ze.test(e.url)
            ? "url"
            : "string" == typeof e.data &&
              0 ===
                (e.contentType || "").indexOf(
                  "application/x-www-form-urlencoded"
                ) &&
              ze.test(e.data) &&
              "data");
      return a || "jsonp" === e.dataTypes[0]
        ? ((r = e.jsonpCallback =
            ot.isFunction(e.jsonpCallback)
              ? e.jsonpCallback()
              : e.jsonpCallback),
          a
            ? (e[a] = e[a].replace(ze, "$1" + r))
            : e.jsonp !== !1 &&
              (e.url += (ye.test(e.url) ? "&" : "?") + e.jsonp + "=" + r),
          (e.converters["script json"] = function () {
            return s || ot.error(r + " was not called"), s[0];
          }),
          (e.dataTypes[0] = "json"),
          (o = t[r]),
          (t[r] = function () {
            s = arguments;
          }),
          n.always(function () {
            void 0 === o ? ot(t).removeProp(r) : (t[r] = o),
              e[r] && ((e.jsonpCallback = i.jsonpCallback), Me.push(r)),
              s && ot.isFunction(o) && o(s[0]),
              (s = o = void 0);
          }),
          "script")
        : void 0;
    }),
    (ot.parseHTML = function (t, e, i) {
      if (!t || "string" != typeof t) return null;
      "boolean" == typeof e && ((i = e), (e = !1)), (e = e || G);
      var n = pt.exec(t),
        r = !i && [];
      return n
        ? [e.createElement(n[1])]
        : ((n = f([t], e, r)),
          r && r.length && ot(r).remove(),
          ot.merge([], n.childNodes));
    });
  var je = ot.fn.load;
  (ot.fn.load = function (t, e, i) {
    if ("string" != typeof t && je) return je.apply(this, arguments);
    var n,
      r,
      o,
      s = this,
      a = t.indexOf(" ");
    return (
      a > -1 && ((n = ot.trim(t.slice(a))), (t = t.slice(0, a))),
      ot.isFunction(e)
        ? ((i = e), (e = void 0))
        : e && "object" == typeof e && (r = "POST"),
      s.length > 0 &&
        ot
          .ajax({
            url: t,
            type: r || "GET",
            dataType: "html",
            data: e,
          })
          .done(function (t) {
            (o = arguments),
              s.html(n ? ot("<div>").append(ot.parseHTML(t)).find(n) : t);
          })
          .always(
            i &&
              function (t, e) {
                s.each(function () {
                  i.apply(this, o || [t.responseText, e, t]);
                });
              }
          ),
      this
    );
  }),
    ot.each(
      [
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend",
      ],
      function (t, e) {
        ot.fn[e] = function (t) {
          return this.on(e, t);
        };
      }
    ),
    (ot.expr.filters.animated = function (t) {
      return ot.grep(ot.timers, function (e) {
        return t === e.elem;
      }).length;
    }),
    (ot.offset = {
      setOffset: function (t, e, i) {
        var n,
          r,
          o,
          s,
          a,
          l,
          h,
          u = ot.css(t, "position"),
          c = ot(t),
          f = {};
        "static" === u && (t.style.position = "relative"),
          (a = c.offset()),
          (o = ot.css(t, "top")),
          (l = ot.css(t, "left")),
          (h =
            ("absolute" === u || "fixed" === u) &&
            (o + l).indexOf("auto") > -1),
          h
            ? ((n = c.position()), (s = n.top), (r = n.left))
            : ((s = parseFloat(o) || 0), (r = parseFloat(l) || 0)),
          ot.isFunction(e) && (e = e.call(t, i, ot.extend({}, a))),
          null != e.top && (f.top = e.top - a.top + s),
          null != e.left && (f.left = e.left - a.left + r),
          "using" in e ? e.using.call(t, f) : c.css(f);
      },
    }),
    ot.fn.extend({
      offset: function (t) {
        if (arguments.length)
          return void 0 === t
            ? this
            : this.each(function (e) {
                ot.offset.setOffset(this, t, e);
              });
        var e,
          i,
          n = this[0],
          r = {
            top: 0,
            left: 0,
          },
          o = n && n.ownerDocument;
        return o
          ? ((e = o.documentElement),
            ot.contains(e, n)
              ? ((r = n.getBoundingClientRect()),
                (i = Y(o)),
                {
                  top: r.top + i.pageYOffset - e.clientTop,
                  left: r.left + i.pageXOffset - e.clientLeft,
                })
              : r)
          : void 0;
      },
      position: function () {
        if (this[0]) {
          var t,
            e,
            i = this[0],
            n = {
              top: 0,
              left: 0,
            };
          return (
            "fixed" === ot.css(i, "position")
              ? (e = i.getBoundingClientRect())
              : ((t = this.offsetParent()),
                (e = this.offset()),
                ot.nodeName(t[0], "html") || (n = t.offset()),
                (n.top += ot.css(t[0], "borderTopWidth", !0)),
                (n.left += ot.css(t[0], "borderLeftWidth", !0))),
            {
              top: e.top - n.top - ot.css(i, "marginTop", !0),
              left: e.left - n.left - ot.css(i, "marginLeft", !0),
            }
          );
        }
      },
      offsetParent: function () {
        return this.map(function () {
          for (
            var t = this.offsetParent;
            t && "static" === ot.css(t, "position");

          )
            t = t.offsetParent;
          return t || Zt;
        });
      },
    }),
    ot.each(
      {
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset",
      },
      function (t, e) {
        var i = "pageYOffset" === e;
        ot.fn[t] = function (n) {
          return wt(
            this,
            function (t, n, r) {
              var o = Y(t);
              return void 0 === r
                ? o
                  ? o[e]
                  : t[n]
                : void (o
                    ? o.scrollTo(i ? o.pageXOffset : r, i ? r : o.pageYOffset)
                    : (t[n] = r));
            },
            t,
            n,
            arguments.length
          );
        };
      }
    ),
    ot.each(["top", "left"], function (t, e) {
      ot.cssHooks[e] = A(nt.pixelPosition, function (t, i) {
        return i
          ? ((i = S(t, e)), Gt.test(i) ? ot(t).position()[e] + "px" : i)
          : void 0;
      });
    }),
    ot.each(
      {
        Height: "height",
        Width: "width",
      },
      function (t, e) {
        ot.each(
          {
            padding: "inner" + t,
            content: e,
            "": "outer" + t,
          },
          function (i, n) {
            ot.fn[n] = function (n, r) {
              var o = arguments.length && (i || "boolean" != typeof n),
                s = i || (n === !0 || r === !0 ? "margin" : "border");
              return wt(
                this,
                function (e, i, n) {
                  var r;
                  return ot.isWindow(e)
                    ? e.document.documentElement["client" + t]
                    : 9 === e.nodeType
                    ? ((r = e.documentElement),
                      Math.max(
                        e.body["scroll" + t],
                        r["scroll" + t],
                        e.body["offset" + t],
                        r["offset" + t],
                        r["client" + t]
                      ))
                    : void 0 === n
                    ? ot.css(e, i, s)
                    : ot.style(e, i, n, s);
                },
                e,
                o ? n : void 0,
                o,
                null
              );
            };
          }
        );
      }
    ),
    ot.fn.extend({
      bind: function (t, e, i) {
        return this.on(t, null, e, i);
      },
      unbind: function (t, e) {
        return this.off(t, null, e);
      },
      delegate: function (t, e, i, n) {
        return this.on(e, t, i, n);
      },
      undelegate: function (t, e, i) {
        return 1 === arguments.length
          ? this.off(t, "**")
          : this.off(e, t || "**", i);
      },
      size: function () {
        return this.length;
      },
    }),
    (ot.fn.andSelf = ot.fn.addBack),
    "function" == typeof define &&
      define.amd &&
      define("jquery", [], function () {
        return ot;
      });
  var Fe = t.jQuery,
    We = t.$;
  return (
    (ot.noConflict = function (e) {
      return (
        t.$ === ot && (t.$ = We), e && t.jQuery === ot && (t.jQuery = Fe), ot
      );
    }),
    e || (t.jQuery = t.$ = ot),
    ot
  );
});
var _gsScope =
  "undefined" != typeof module && module.exports && "undefined" != typeof global
    ? global
    : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function () {
  "use strict";
  _gsScope._gsDefine(
    "TweenMax",
    ["core.Animation", "core.SimpleTimeline", "TweenLite"],
    function (t, e, i) {
      var n = function (t) {
          var e,
            i = [],
            n = t.length;
          for (e = 0; e !== n; i.push(t[e++]));
          return i;
        },
        r = function (t, e, i) {
          var n,
            r,
            o = t.cycle;
          for (n in o)
            (r = o[n]),
              (t[n] = "function" == typeof r ? r(i, e[i]) : r[i % r.length]);
          delete t.cycle;
        },
        o = function (t, e, n) {
          i.call(this, t, e, n),
            (this._cycle = 0),
            (this._yoyo = this.vars.yoyo === !0),
            (this._repeat = this.vars.repeat || 0),
            (this._repeatDelay = this.vars.repeatDelay || 0),
            (this._dirty = !0),
            (this.render = o.prototype.render);
        },
        s = 1e-10,
        a = i._internals,
        l = a.isSelector,
        h = a.isArray,
        u = (o.prototype = i.to({}, 0.1, {})),
        c = [];
      (o.version = "1.19.0"),
        (u.constructor = o),
        (u.kill()._gc = !1),
        (o.killTweensOf = o.killDelayedCallsTo = i.killTweensOf),
        (o.getTweensOf = i.getTweensOf),
        (o.lagSmoothing = i.lagSmoothing),
        (o.ticker = i.ticker),
        (o.render = i.render),
        (u.invalidate = function () {
          return (
            (this._yoyo = this.vars.yoyo === !0),
            (this._repeat = this.vars.repeat || 0),
            (this._repeatDelay = this.vars.repeatDelay || 0),
            this._uncache(!0),
            i.prototype.invalidate.call(this)
          );
        }),
        (u.updateTo = function (t, e) {
          var n,
            r = this.ratio,
            o = this.vars.immediateRender || t.immediateRender;
          e &&
            this._startTime < this._timeline._time &&
            ((this._startTime = this._timeline._time),
            this._uncache(!1),
            this._gc
              ? this._enabled(!0, !1)
              : this._timeline.insert(this, this._startTime - this._delay));
          for (n in t) this.vars[n] = t[n];
          if (this._initted || o)
            if (e) (this._initted = !1), o && this.render(0, !0, !0);
            else if (
              (this._gc && this._enabled(!0, !1),
              this._notifyPluginsOfEnabled &&
                this._firstPT &&
                i._onPluginEvent("_onDisable", this),
              this._time / this._duration > 0.998)
            ) {
              var s = this._totalTime;
              this.render(0, !0, !1),
                (this._initted = !1),
                this.render(s, !0, !1);
            } else if (
              ((this._initted = !1), this._init(), this._time > 0 || o)
            )
              for (var a, l = 1 / (1 - r), h = this._firstPT; h; )
                (a = h.s + h.c), (h.c *= l), (h.s = a - h.c), (h = h._next);
          return this;
        }),
        (u.render = function (t, e, i) {
          this._initted ||
            (0 === this._duration && this.vars.repeat && this.invalidate());
          var n,
            r,
            o,
            l,
            h,
            u,
            c,
            f,
            d = this._dirty ? this.totalDuration() : this._totalDuration,
            p = this._time,
            m = this._totalTime,
            g = this._cycle,
            v = this._duration,
            y = this._rawPrevTime;
          if (
            (t >= d - 1e-7
              ? ((this._totalTime = d),
                (this._cycle = this._repeat),
                this._yoyo && 0 !== (1 & this._cycle)
                  ? ((this._time = 0),
                    (this.ratio = this._ease._calcEnd
                      ? this._ease.getRatio(0)
                      : 0))
                  : ((this._time = v),
                    (this.ratio = this._ease._calcEnd
                      ? this._ease.getRatio(1)
                      : 1)),
                this._reversed ||
                  ((n = !0),
                  (r = "onComplete"),
                  (i = i || this._timeline.autoRemoveChildren)),
                0 === v &&
                  (this._initted || !this.vars.lazy || i) &&
                  (this._startTime === this._timeline._duration && (t = 0),
                  (0 > y ||
                    (0 >= t && t >= -1e-7) ||
                    (y === s && "isPause" !== this.data)) &&
                    y !== t &&
                    ((i = !0), y > s && (r = "onReverseComplete")),
                  (this._rawPrevTime = f = !e || t || y === t ? t : s)))
              : 1e-7 > t
              ? ((this._totalTime = this._time = this._cycle = 0),
                (this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0),
                (0 !== m || (0 === v && y > 0)) &&
                  ((r = "onReverseComplete"), (n = this._reversed)),
                0 > t &&
                  ((this._active = !1),
                  0 === v &&
                    (this._initted || !this.vars.lazy || i) &&
                    (y >= 0 && (i = !0),
                    (this._rawPrevTime = f = !e || t || y === t ? t : s))),
                this._initted || (i = !0))
              : ((this._totalTime = this._time = t),
                0 !== this._repeat &&
                  ((l = v + this._repeatDelay),
                  (this._cycle = (this._totalTime / l) >> 0),
                  0 !== this._cycle &&
                    this._cycle === this._totalTime / l &&
                    t >= m &&
                    this._cycle--,
                  (this._time = this._totalTime - this._cycle * l),
                  this._yoyo &&
                    0 !== (1 & this._cycle) &&
                    (this._time = v - this._time),
                  this._time > v
                    ? (this._time = v)
                    : this._time < 0 && (this._time = 0)),
                this._easeType
                  ? ((h = this._time / v),
                    (u = this._easeType),
                    (c = this._easePower),
                    (1 === u || (3 === u && h >= 0.5)) && (h = 1 - h),
                    3 === u && (h *= 2),
                    1 === c
                      ? (h *= h)
                      : 2 === c
                      ? (h *= h * h)
                      : 3 === c
                      ? (h *= h * h * h)
                      : 4 === c && (h *= h * h * h * h),
                    1 === u
                      ? (this.ratio = 1 - h)
                      : 2 === u
                      ? (this.ratio = h)
                      : this._time / v < 0.5
                      ? (this.ratio = h / 2)
                      : (this.ratio = 1 - h / 2))
                  : (this.ratio = this._ease.getRatio(this._time / v))),
            p === this._time && !i && g === this._cycle)
          )
            return void (
              m !== this._totalTime &&
              this._onUpdate &&
              (e || this._callback("onUpdate"))
            );
          if (!this._initted) {
            if ((this._init(), !this._initted || this._gc)) return;
            if (
              !i &&
              this._firstPT &&
              ((this.vars.lazy !== !1 && this._duration) ||
                (this.vars.lazy && !this._duration))
            )
              return (
                (this._time = p),
                (this._totalTime = m),
                (this._rawPrevTime = y),
                (this._cycle = g),
                a.lazyTweens.push(this),
                void (this._lazy = [t, e])
              );
            this._time && !n
              ? (this.ratio = this._ease.getRatio(this._time / v))
              : n &&
                this._ease._calcEnd &&
                (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1));
          }
          for (
            this._lazy !== !1 && (this._lazy = !1),
              this._active ||
                (!this._paused &&
                  this._time !== p &&
                  t >= 0 &&
                  (this._active = !0)),
              0 === m &&
                (2 === this._initted && t > 0 && this._init(),
                this._startAt &&
                  (t >= 0
                    ? this._startAt.render(t, e, i)
                    : r || (r = "_dummyGS")),
                this.vars.onStart &&
                  (0 !== this._totalTime || 0 === v) &&
                  (e || this._callback("onStart"))),
              o = this._firstPT;
            o;

          )
            o.f
              ? o.t[o.p](o.c * this.ratio + o.s)
              : (o.t[o.p] = o.c * this.ratio + o.s),
              (o = o._next);
          this._onUpdate &&
            (0 > t &&
              this._startAt &&
              this._startTime &&
              this._startAt.render(t, e, i),
            e || ((this._totalTime !== m || r) && this._callback("onUpdate"))),
            this._cycle !== g &&
              (e ||
                this._gc ||
                (this.vars.onRepeat && this._callback("onRepeat"))),
            r &&
              (!this._gc || i) &&
              (0 > t &&
                this._startAt &&
                !this._onUpdate &&
                this._startTime &&
                this._startAt.render(t, e, i),
              n &&
                (this._timeline.autoRemoveChildren && this._enabled(!1, !1),
                (this._active = !1)),
              !e && this.vars[r] && this._callback(r),
              0 === v &&
                this._rawPrevTime === s &&
                f !== s &&
                (this._rawPrevTime = 0));
        }),
        (o.to = function (t, e, i) {
          return new o(t, e, i);
        }),
        (o.from = function (t, e, i) {
          return (
            (i.runBackwards = !0),
            (i.immediateRender = 0 != i.immediateRender),
            new o(t, e, i)
          );
        }),
        (o.fromTo = function (t, e, i, n) {
          return (
            (n.startAt = i),
            (n.immediateRender =
              0 != n.immediateRender && 0 != i.immediateRender),
            new o(t, e, n)
          );
        }),
        (o.staggerTo = o.allTo =
          function (t, e, s, a, u, f, d) {
            a = a || 0;
            var p,
              m,
              g,
              v,
              y = 0,
              _ = [],
              b = function () {
                s.onComplete &&
                  s.onComplete.apply(s.onCompleteScope || this, arguments),
                  u.apply(d || s.callbackScope || this, f || c);
              },
              T = s.cycle,
              x = s.startAt && s.startAt.cycle;
            for (
              h(t) ||
                ("string" == typeof t && (t = i.selector(t) || t),
                l(t) && (t = n(t))),
                t = t || [],
                0 > a && ((t = n(t)), t.reverse(), (a *= -1)),
                p = t.length - 1,
                g = 0;
              p >= g;
              g++
            ) {
              m = {};
              for (v in s) m[v] = s[v];
              if (
                (T &&
                  (r(m, t, g),
                  null != m.duration && ((e = m.duration), delete m.duration)),
                x)
              ) {
                x = m.startAt = {};
                for (v in s.startAt) x[v] = s.startAt[v];
                r(m.startAt, t, g);
              }
              (m.delay = y + (m.delay || 0)),
                g === p && u && (m.onComplete = b),
                (_[g] = new o(t[g], e, m)),
                (y += a);
            }
            return _;
          }),
        (o.staggerFrom = o.allFrom =
          function (t, e, i, n, r, s, a) {
            return (
              (i.runBackwards = !0),
              (i.immediateRender = 0 != i.immediateRender),
              o.staggerTo(t, e, i, n, r, s, a)
            );
          }),
        (o.staggerFromTo = o.allFromTo =
          function (t, e, i, n, r, s, a, l) {
            return (
              (n.startAt = i),
              (n.immediateRender =
                0 != n.immediateRender && 0 != i.immediateRender),
              o.staggerTo(t, e, n, r, s, a, l)
            );
          }),
        (o.delayedCall = function (t, e, i, n, r) {
          return new o(e, 0, {
            delay: t,
            onComplete: e,
            onCompleteParams: i,
            callbackScope: n,
            onReverseComplete: e,
            onReverseCompleteParams: i,
            immediateRender: !1,
            useFrames: r,
            overwrite: 0,
          });
        }),
        (o.set = function (t, e) {
          return new o(t, 0, e);
        }),
        (o.isTweening = function (t) {
          return i.getTweensOf(t, !0).length > 0;
        });
      var f = function (t, e) {
          for (var n = [], r = 0, o = t._first; o; )
            o instanceof i
              ? (n[r++] = o)
              : (e && (n[r++] = o), (n = n.concat(f(o, e))), (r = n.length)),
              (o = o._next);
          return n;
        },
        d = (o.getAllTweens = function (e) {
          return f(t._rootTimeline, e).concat(f(t._rootFramesTimeline, e));
        });
      (o.killAll = function (t, i, n, r) {
        null == i && (i = !0), null == n && (n = !0);
        var o,
          s,
          a,
          l = d(0 != r),
          h = l.length,
          u = i && n && r;
        for (a = 0; h > a; a++)
          (s = l[a]),
            (u ||
              s instanceof e ||
              ((o = s.target === s.vars.onComplete) && n) ||
              (i && !o)) &&
              (t
                ? s.totalTime(s._reversed ? 0 : s.totalDuration())
                : s._enabled(!1, !1));
      }),
        (o.killChildTweensOf = function (t, e) {
          if (null != t) {
            var r,
              s,
              u,
              c,
              f,
              d = a.tweenLookup;
            if (
              ("string" == typeof t && (t = i.selector(t) || t),
              l(t) && (t = n(t)),
              h(t))
            )
              for (c = t.length; --c > -1; ) o.killChildTweensOf(t[c], e);
            else {
              r = [];
              for (u in d)
                for (s = d[u].target.parentNode; s; )
                  s === t && (r = r.concat(d[u].tweens)), (s = s.parentNode);
              for (f = r.length, c = 0; f > c; c++)
                e && r[c].totalTime(r[c].totalDuration()),
                  r[c]._enabled(!1, !1);
            }
          }
        });
      var p = function (t, i, n, r) {
        (i = i !== !1), (n = n !== !1), (r = r !== !1);
        for (var o, s, a = d(r), l = i && n && r, h = a.length; --h > -1; )
          (s = a[h]),
            (l ||
              s instanceof e ||
              ((o = s.target === s.vars.onComplete) && n) ||
              (i && !o)) &&
              s.paused(t);
      };
      return (
        (o.pauseAll = function (t, e, i) {
          p(!0, t, e, i);
        }),
        (o.resumeAll = function (t, e, i) {
          p(!1, t, e, i);
        }),
        (o.globalTimeScale = function (e) {
          var n = t._rootTimeline,
            r = i.ticker.time;
          return arguments.length
            ? ((e = e || s),
              (n._startTime = r - ((r - n._startTime) * n._timeScale) / e),
              (n = t._rootFramesTimeline),
              (r = i.ticker.frame),
              (n._startTime = r - ((r - n._startTime) * n._timeScale) / e),
              (n._timeScale = t._rootTimeline._timeScale = e),
              e)
            : n._timeScale;
        }),
        (u.progress = function (t, e) {
          return arguments.length
            ? this.totalTime(
                this.duration() *
                  (this._yoyo && 0 !== (1 & this._cycle) ? 1 - t : t) +
                  this._cycle * (this._duration + this._repeatDelay),
                e
              )
            : this._time / this.duration();
        }),
        (u.totalProgress = function (t, e) {
          return arguments.length
            ? this.totalTime(this.totalDuration() * t, e)
            : this._totalTime / this.totalDuration();
        }),
        (u.time = function (t, e) {
          return arguments.length
            ? (this._dirty && this.totalDuration(),
              t > this._duration && (t = this._duration),
              this._yoyo && 0 !== (1 & this._cycle)
                ? (t =
                    this._duration -
                    t +
                    this._cycle * (this._duration + this._repeatDelay))
                : 0 !== this._repeat &&
                  (t += this._cycle * (this._duration + this._repeatDelay)),
              this.totalTime(t, e))
            : this._time;
        }),
        (u.duration = function (e) {
          return arguments.length
            ? t.prototype.duration.call(this, e)
            : this._duration;
        }),
        (u.totalDuration = function (t) {
          return arguments.length
            ? -1 === this._repeat
              ? this
              : this.duration(
                  (t - this._repeat * this._repeatDelay) / (this._repeat + 1)
                )
            : (this._dirty &&
                ((this._totalDuration =
                  -1 === this._repeat
                    ? 999999999999
                    : this._duration * (this._repeat + 1) +
                      this._repeatDelay * this._repeat),
                (this._dirty = !1)),
              this._totalDuration);
        }),
        (u.repeat = function (t) {
          return arguments.length
            ? ((this._repeat = t), this._uncache(!0))
            : this._repeat;
        }),
        (u.repeatDelay = function (t) {
          return arguments.length
            ? ((this._repeatDelay = t), this._uncache(!0))
            : this._repeatDelay;
        }),
        (u.yoyo = function (t) {
          return arguments.length ? ((this._yoyo = t), this) : this._yoyo;
        }),
        o
      );
    },
    !0
  ),
    _gsScope._gsDefine(
      "TimelineLite",
      ["core.Animation", "core.SimpleTimeline", "TweenLite"],
      function (t, e, i) {
        var n = function (t) {
            e.call(this, t),
              (this._labels = {}),
              (this.autoRemoveChildren = this.vars.autoRemoveChildren === !0),
              (this.smoothChildTiming = this.vars.smoothChildTiming === !0),
              (this._sortChildren = !0),
              (this._onUpdate = this.vars.onUpdate);
            var i,
              n,
              r = this.vars;
            for (n in r)
              (i = r[n]),
                l(i) &&
                  -1 !== i.join("").indexOf("{self}") &&
                  (r[n] = this._swapSelfInParams(i));
            l(r.tweens) && this.add(r.tweens, 0, r.align, r.stagger);
          },
          r = 1e-10,
          o = i._internals,
          s = (n._internals = {}),
          a = o.isSelector,
          l = o.isArray,
          h = o.lazyTweens,
          u = o.lazyRender,
          c = _gsScope._gsDefine.globals,
          f = function (t) {
            var e,
              i = {};
            for (e in t) i[e] = t[e];
            return i;
          },
          d = function (t, e, i) {
            var n,
              r,
              o = t.cycle;
            for (n in o)
              (r = o[n]),
                (t[n] =
                  "function" == typeof r ? r.call(e[i], i) : r[i % r.length]);
            delete t.cycle;
          },
          p = (s.pauseCallback = function () {}),
          m = function (t) {
            var e,
              i = [],
              n = t.length;
            for (e = 0; e !== n; i.push(t[e++]));
            return i;
          },
          g = (n.prototype = new e());
        return (
          (n.version = "1.19.0"),
          (g.constructor = n),
          (g.kill()._gc = g._forcingPlayhead = g._hasPause = !1),
          (g.to = function (t, e, n, r) {
            var o = (n.repeat && c.TweenMax) || i;
            return e ? this.add(new o(t, e, n), r) : this.set(t, n, r);
          }),
          (g.from = function (t, e, n, r) {
            return this.add(((n.repeat && c.TweenMax) || i).from(t, e, n), r);
          }),
          (g.fromTo = function (t, e, n, r, o) {
            var s = (r.repeat && c.TweenMax) || i;
            return e ? this.add(s.fromTo(t, e, n, r), o) : this.set(t, r, o);
          }),
          (g.staggerTo = function (t, e, r, o, s, l, h, u) {
            var c,
              p,
              g = new n({
                onComplete: l,
                onCompleteParams: h,
                callbackScope: u,
                smoothChildTiming: this.smoothChildTiming,
              }),
              v = r.cycle;
            for (
              "string" == typeof t && (t = i.selector(t) || t),
                t = t || [],
                a(t) && (t = m(t)),
                o = o || 0,
                0 > o && ((t = m(t)), t.reverse(), (o *= -1)),
                p = 0;
              p < t.length;
              p++
            )
              (c = f(r)),
                c.startAt &&
                  ((c.startAt = f(c.startAt)),
                  c.startAt.cycle && d(c.startAt, t, p)),
                v &&
                  (d(c, t, p),
                  null != c.duration && ((e = c.duration), delete c.duration)),
                g.to(t[p], e, c, p * o);
            return this.add(g, s);
          }),
          (g.staggerFrom = function (t, e, i, n, r, o, s, a) {
            return (
              (i.immediateRender = 0 != i.immediateRender),
              (i.runBackwards = !0),
              this.staggerTo(t, e, i, n, r, o, s, a)
            );
          }),
          (g.staggerFromTo = function (t, e, i, n, r, o, s, a, l) {
            return (
              (n.startAt = i),
              (n.immediateRender =
                0 != n.immediateRender && 0 != i.immediateRender),
              this.staggerTo(t, e, n, r, o, s, a, l)
            );
          }),
          (g.call = function (t, e, n, r) {
            return this.add(i.delayedCall(0, t, e, n), r);
          }),
          (g.set = function (t, e, n) {
            return (
              (n = this._parseTimeOrLabel(n, 0, !0)),
              null == e.immediateRender &&
                (e.immediateRender = n === this._time && !this._paused),
              this.add(new i(t, 0, e), n)
            );
          }),
          (n.exportRoot = function (t, e) {
            (t = t || {}),
              null == t.smoothChildTiming && (t.smoothChildTiming = !0);
            var r,
              o,
              s = new n(t),
              a = s._timeline;
            for (
              null == e && (e = !0),
                a._remove(s, !0),
                s._startTime = 0,
                s._rawPrevTime = s._time = s._totalTime = a._time,
                r = a._first;
              r;

            )
              (o = r._next),
                (e && r instanceof i && r.target === r.vars.onComplete) ||
                  s.add(r, r._startTime - r._delay),
                (r = o);
            return a.add(s, 0), s;
          }),
          (g.add = function (r, o, s, a) {
            var h, u, c, f, d, p;
            if (
              ("number" != typeof o &&
                (o = this._parseTimeOrLabel(o, 0, !0, r)),
              !(r instanceof t))
            ) {
              if (r instanceof Array || (r && r.push && l(r))) {
                for (
                  s = s || "normal", a = a || 0, h = o, u = r.length, c = 0;
                  u > c;
                  c++
                )
                  l((f = r[c])) &&
                    (f = new n({
                      tweens: f,
                    })),
                    this.add(f, h),
                    "string" != typeof f &&
                      "function" != typeof f &&
                      ("sequence" === s
                        ? (h = f._startTime + f.totalDuration() / f._timeScale)
                        : "start" === s && (f._startTime -= f.delay())),
                    (h += a);
                return this._uncache(!0);
              }
              if ("string" == typeof r) return this.addLabel(r, o);
              if ("function" != typeof r)
                throw (
                  "Cannot add " +
                  r +
                  " into the timeline; it is not a tween, timeline, function, or string."
                );
              r = i.delayedCall(0, r);
            }
            if (
              (e.prototype.add.call(this, r, o),
              (this._gc || this._time === this._duration) &&
                !this._paused &&
                this._duration < this.duration())
            )
              for (d = this, p = d.rawTime() > r._startTime; d._timeline; )
                p && d._timeline.smoothChildTiming
                  ? d.totalTime(d._totalTime, !0)
                  : d._gc && d._enabled(!0, !1),
                  (d = d._timeline);
            return this;
          }),
          (g.remove = function (e) {
            if (e instanceof t) {
              this._remove(e, !1);
              var i = (e._timeline = e.vars.useFrames
                ? t._rootFramesTimeline
                : t._rootTimeline);
              return (
                (e._startTime =
                  (e._paused ? e._pauseTime : i._time) -
                  (e._reversed
                    ? e.totalDuration() - e._totalTime
                    : e._totalTime) /
                    e._timeScale),
                this
              );
            }
            if (e instanceof Array || (e && e.push && l(e))) {
              for (var n = e.length; --n > -1; ) this.remove(e[n]);
              return this;
            }
            return "string" == typeof e
              ? this.removeLabel(e)
              : this.kill(null, e);
          }),
          (g._remove = function (t, i) {
            e.prototype._remove.call(this, t, i);
            var n = this._last;
            return (
              n
                ? this._time > n._startTime + n._totalDuration / n._timeScale &&
                  ((this._time = this.duration()),
                  (this._totalTime = this._totalDuration))
                : (this._time =
                    this._totalTime =
                    this._duration =
                    this._totalDuration =
                      0),
              this
            );
          }),
          (g.append = function (t, e) {
            return this.add(t, this._parseTimeOrLabel(null, e, !0, t));
          }),
          (g.insert = g.insertMultiple =
            function (t, e, i, n) {
              return this.add(t, e || 0, i, n);
            }),
          (g.appendMultiple = function (t, e, i, n) {
            return this.add(t, this._parseTimeOrLabel(null, e, !0, t), i, n);
          }),
          (g.addLabel = function (t, e) {
            return (this._labels[t] = this._parseTimeOrLabel(e)), this;
          }),
          (g.addPause = function (t, e, n, r) {
            var o = i.delayedCall(0, p, n, r || this);
            return (
              (o.vars.onComplete = o.vars.onReverseComplete = e),
              (o.data = "isPause"),
              (this._hasPause = !0),
              this.add(o, t)
            );
          }),
          (g.removeLabel = function (t) {
            return delete this._labels[t], this;
          }),
          (g.getLabelTime = function (t) {
            return null != this._labels[t] ? this._labels[t] : -1;
          }),
          (g._parseTimeOrLabel = function (e, i, n, r) {
            var o;
            if (r instanceof t && r.timeline === this) this.remove(r);
            else if (r && (r instanceof Array || (r.push && l(r))))
              for (o = r.length; --o > -1; )
                r[o] instanceof t &&
                  r[o].timeline === this &&
                  this.remove(r[o]);
            if ("string" == typeof i)
              return this._parseTimeOrLabel(
                i,
                n && "number" == typeof e && null == this._labels[i]
                  ? e - this.duration()
                  : 0,
                n
              );
            if (
              ((i = i || 0),
              "string" != typeof e || (!isNaN(e) && null == this._labels[e]))
            )
              null == e && (e = this.duration());
            else {
              if (((o = e.indexOf("=")), -1 === o))
                return null == this._labels[e]
                  ? n
                    ? (this._labels[e] = this.duration() + i)
                    : i
                  : this._labels[e] + i;
              (i =
                parseInt(e.charAt(o - 1) + "1", 10) * Number(e.substr(o + 1))),
                (e =
                  o > 1
                    ? this._parseTimeOrLabel(e.substr(0, o - 1), 0, n)
                    : this.duration());
            }
            return Number(e) + i;
          }),
          (g.seek = function (t, e) {
            return this.totalTime(
              "number" == typeof t ? t : this._parseTimeOrLabel(t),
              e !== !1
            );
          }),
          (g.stop = function () {
            return this.paused(!0);
          }),
          (g.gotoAndPlay = function (t, e) {
            return this.play(t, e);
          }),
          (g.gotoAndStop = function (t, e) {
            return this.pause(t, e);
          }),
          (g.render = function (t, e, i) {
            this._gc && this._enabled(!0, !1);
            var n,
              o,
              s,
              a,
              l,
              c,
              f,
              d = this._dirty ? this.totalDuration() : this._totalDuration,
              p = this._time,
              m = this._startTime,
              g = this._timeScale,
              v = this._paused;
            if (t >= d - 1e-7)
              (this._totalTime = this._time = d),
                this._reversed ||
                  this._hasPausedChild() ||
                  ((o = !0),
                  (a = "onComplete"),
                  (l = !!this._timeline.autoRemoveChildren),
                  0 === this._duration &&
                    ((0 >= t && t >= -1e-7) ||
                      this._rawPrevTime < 0 ||
                      this._rawPrevTime === r) &&
                    this._rawPrevTime !== t &&
                    this._first &&
                    ((l = !0),
                    this._rawPrevTime > r && (a = "onReverseComplete"))),
                (this._rawPrevTime =
                  this._duration || !e || t || this._rawPrevTime === t ? t : r),
                (t = d + 1e-4);
            else if (1e-7 > t)
              if (
                ((this._totalTime = this._time = 0),
                (0 !== p ||
                  (0 === this._duration &&
                    this._rawPrevTime !== r &&
                    (this._rawPrevTime > 0 ||
                      (0 > t && this._rawPrevTime >= 0)))) &&
                  ((a = "onReverseComplete"), (o = this._reversed)),
                0 > t)
              )
                (this._active = !1),
                  this._timeline.autoRemoveChildren && this._reversed
                    ? ((l = o = !0), (a = "onReverseComplete"))
                    : this._rawPrevTime >= 0 && this._first && (l = !0),
                  (this._rawPrevTime = t);
              else {
                if (
                  ((this._rawPrevTime =
                    this._duration || !e || t || this._rawPrevTime === t
                      ? t
                      : r),
                  0 === t && o)
                )
                  for (n = this._first; n && 0 === n._startTime; )
                    n._duration || (o = !1), (n = n._next);
                (t = 0), this._initted || (l = !0);
              }
            else {
              if (this._hasPause && !this._forcingPlayhead && !e) {
                if (t >= p)
                  for (n = this._first; n && n._startTime <= t && !c; )
                    n._duration ||
                      "isPause" !== n.data ||
                      n.ratio ||
                      (0 === n._startTime && 0 === this._rawPrevTime) ||
                      (c = n),
                      (n = n._next);
                else
                  for (n = this._last; n && n._startTime >= t && !c; )
                    n._duration ||
                      ("isPause" === n.data && n._rawPrevTime > 0 && (c = n)),
                      (n = n._prev);
                c &&
                  ((this._time = t = c._startTime),
                  (this._totalTime =
                    t +
                    this._cycle * (this._totalDuration + this._repeatDelay)));
              }
              this._totalTime = this._time = this._rawPrevTime = t;
            }
            if ((this._time !== p && this._first) || i || l || c) {
              if (
                (this._initted || (this._initted = !0),
                this._active ||
                  (!this._paused &&
                    this._time !== p &&
                    t > 0 &&
                    (this._active = !0)),
                0 === p &&
                  this.vars.onStart &&
                  ((0 === this._time && this._duration) ||
                    e ||
                    this._callback("onStart")),
                (f = this._time),
                f >= p)
              )
                for (
                  n = this._first;
                  n &&
                  ((s = n._next), f === this._time && (!this._paused || v));

                )
                  (n._active || (n._startTime <= f && !n._paused && !n._gc)) &&
                    (c === n && this.pause(),
                    n._reversed
                      ? n.render(
                          (n._dirty ? n.totalDuration() : n._totalDuration) -
                            (t - n._startTime) * n._timeScale,
                          e,
                          i
                        )
                      : n.render((t - n._startTime) * n._timeScale, e, i)),
                    (n = s);
              else
                for (
                  n = this._last;
                  n &&
                  ((s = n._prev), f === this._time && (!this._paused || v));

                ) {
                  if (
                    n._active ||
                    (n._startTime <= p && !n._paused && !n._gc)
                  ) {
                    if (c === n) {
                      for (c = n._prev; c && c.endTime() > this._time; )
                        c.render(
                          c._reversed
                            ? c.totalDuration() -
                                (t - c._startTime) * c._timeScale
                            : (t - c._startTime) * c._timeScale,
                          e,
                          i
                        ),
                          (c = c._prev);
                      (c = null), this.pause();
                    }
                    n._reversed
                      ? n.render(
                          (n._dirty ? n.totalDuration() : n._totalDuration) -
                            (t - n._startTime) * n._timeScale,
                          e,
                          i
                        )
                      : n.render((t - n._startTime) * n._timeScale, e, i);
                  }
                  n = s;
                }
              this._onUpdate &&
                (e || (h.length && u(), this._callback("onUpdate"))),
                a &&
                  (this._gc ||
                    ((m === this._startTime || g !== this._timeScale) &&
                      (0 === this._time || d >= this.totalDuration()) &&
                      (o &&
                        (h.length && u(),
                        this._timeline.autoRemoveChildren &&
                          this._enabled(!1, !1),
                        (this._active = !1)),
                      !e && this.vars[a] && this._callback(a))));
            }
          }),
          (g._hasPausedChild = function () {
            for (var t = this._first; t; ) {
              if (t._paused || (t instanceof n && t._hasPausedChild()))
                return !0;
              t = t._next;
            }
            return !1;
          }),
          (g.getChildren = function (t, e, n, r) {
            r = r || -9999999999;
            for (var o = [], s = this._first, a = 0; s; )
              s._startTime < r ||
                (s instanceof i
                  ? e !== !1 && (o[a++] = s)
                  : (n !== !1 && (o[a++] = s),
                    t !== !1 &&
                      ((o = o.concat(s.getChildren(!0, e, n))),
                      (a = o.length)))),
                (s = s._next);
            return o;
          }),
          (g.getTweensOf = function (t, e) {
            var n,
              r,
              o = this._gc,
              s = [],
              a = 0;
            for (
              o && this._enabled(!0, !0), n = i.getTweensOf(t), r = n.length;
              --r > -1;

            )
              (n[r].timeline === this || (e && this._contains(n[r]))) &&
                (s[a++] = n[r]);
            return o && this._enabled(!1, !0), s;
          }),
          (g.recent = function () {
            return this._recent;
          }),
          (g._contains = function (t) {
            for (var e = t.timeline; e; ) {
              if (e === this) return !0;
              e = e.timeline;
            }
            return !1;
          }),
          (g.shiftChildren = function (t, e, i) {
            i = i || 0;
            for (var n, r = this._first, o = this._labels; r; )
              r._startTime >= i && (r._startTime += t), (r = r._next);
            if (e) for (n in o) o[n] >= i && (o[n] += t);
            return this._uncache(!0);
          }),
          (g._kill = function (t, e) {
            if (!t && !e) return this._enabled(!1, !1);
            for (
              var i = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1),
                n = i.length,
                r = !1;
              --n > -1;

            )
              i[n]._kill(t, e) && (r = !0);
            return r;
          }),
          (g.clear = function (t) {
            var e = this.getChildren(!1, !0, !0),
              i = e.length;
            for (this._time = this._totalTime = 0; --i > -1; )
              e[i]._enabled(!1, !1);
            return t !== !1 && (this._labels = {}), this._uncache(!0);
          }),
          (g.invalidate = function () {
            for (var e = this._first; e; ) e.invalidate(), (e = e._next);
            return t.prototype.invalidate.call(this);
          }),
          (g._enabled = function (t, i) {
            if (t === this._gc)
              for (var n = this._first; n; ) n._enabled(t, !0), (n = n._next);
            return e.prototype._enabled.call(this, t, i);
          }),
          (g.totalTime = function (e, i, n) {
            this._forcingPlayhead = !0;
            var r = t.prototype.totalTime.apply(this, arguments);
            return (this._forcingPlayhead = !1), r;
          }),
          (g.duration = function (t) {
            return arguments.length
              ? (0 !== this.duration() &&
                  0 !== t &&
                  this.timeScale(this._duration / t),
                this)
              : (this._dirty && this.totalDuration(), this._duration);
          }),
          (g.totalDuration = function (t) {
            if (!arguments.length) {
              if (this._dirty) {
                for (var e, i, n = 0, r = this._last, o = 999999999999; r; )
                  (e = r._prev),
                    r._dirty && r.totalDuration(),
                    r._startTime > o && this._sortChildren && !r._paused
                      ? this.add(r, r._startTime - r._delay)
                      : (o = r._startTime),
                    r._startTime < 0 &&
                      !r._paused &&
                      ((n -= r._startTime),
                      this._timeline.smoothChildTiming &&
                        (this._startTime += r._startTime / this._timeScale),
                      this.shiftChildren(-r._startTime, !1, -9999999999),
                      (o = 0)),
                    (i = r._startTime + r._totalDuration / r._timeScale),
                    i > n && (n = i),
                    (r = e);
                (this._duration = this._totalDuration = n), (this._dirty = !1);
              }
              return this._totalDuration;
            }
            return t && this.totalDuration()
              ? this.timeScale(this._totalDuration / t)
              : this;
          }),
          (g.paused = function (e) {
            if (!e)
              for (var i = this._first, n = this._time; i; )
                i._startTime === n &&
                  "isPause" === i.data &&
                  (i._rawPrevTime = 0),
                  (i = i._next);
            return t.prototype.paused.apply(this, arguments);
          }),
          (g.usesFrames = function () {
            for (var e = this._timeline; e._timeline; ) e = e._timeline;
            return e === t._rootFramesTimeline;
          }),
          (g.rawTime = function () {
            return this._paused
              ? this._totalTime
              : (this._timeline.rawTime() - this._startTime) * this._timeScale;
          }),
          n
        );
      },
      !0
    ),
    _gsScope._gsDefine(
      "TimelineMax",
      ["TimelineLite", "TweenLite", "easing.Ease"],
      function (t, e, i) {
        var n = function (e) {
            t.call(this, e),
              (this._repeat = this.vars.repeat || 0),
              (this._repeatDelay = this.vars.repeatDelay || 0),
              (this._cycle = 0),
              (this._yoyo = this.vars.yoyo === !0),
              (this._dirty = !0);
          },
          r = 1e-10,
          o = e._internals,
          s = o.lazyTweens,
          a = o.lazyRender,
          l = _gsScope._gsDefine.globals,
          h = new i(null, null, 1, 0),
          u = (n.prototype = new t());
        return (
          (u.constructor = n),
          (u.kill()._gc = !1),
          (n.version = "1.19.0"),
          (u.invalidate = function () {
            return (
              (this._yoyo = this.vars.yoyo === !0),
              (this._repeat = this.vars.repeat || 0),
              (this._repeatDelay = this.vars.repeatDelay || 0),
              this._uncache(!0),
              t.prototype.invalidate.call(this)
            );
          }),
          (u.addCallback = function (t, i, n, r) {
            return this.add(e.delayedCall(0, t, n, r), i);
          }),
          (u.removeCallback = function (t, e) {
            if (t)
              if (null == e) this._kill(null, t);
              else
                for (
                  var i = this.getTweensOf(t, !1),
                    n = i.length,
                    r = this._parseTimeOrLabel(e);
                  --n > -1;

                )
                  i[n]._startTime === r && i[n]._enabled(!1, !1);
            return this;
          }),
          (u.removePause = function (e) {
            return this.removeCallback(t._internals.pauseCallback, e);
          }),
          (u.tweenTo = function (t, i) {
            i = i || {};
            var n,
              r,
              o,
              s = {
                ease: h,
                useFrames: this.usesFrames(),
                immediateRender: !1,
              },
              a = (i.repeat && l.TweenMax) || e;
            for (r in i) s[r] = i[r];
            return (
              (s.time = this._parseTimeOrLabel(t)),
              (n =
                Math.abs(Number(s.time) - this._time) / this._timeScale ||
                0.001),
              (o = new a(this, n, s)),
              (s.onStart = function () {
                o.target.paused(!0),
                  o.vars.time !== o.target.time() &&
                    n === o.duration() &&
                    o.duration(
                      Math.abs(o.vars.time - o.target.time()) /
                        o.target._timeScale
                    ),
                  i.onStart && o._callback("onStart");
              }),
              o
            );
          }),
          (u.tweenFromTo = function (t, e, i) {
            (i = i || {}),
              (t = this._parseTimeOrLabel(t)),
              (i.startAt = {
                onComplete: this.seek,
                onCompleteParams: [t],
                callbackScope: this,
              }),
              (i.immediateRender = i.immediateRender !== !1);
            var n = this.tweenTo(e, i);
            return n.duration(
              Math.abs(n.vars.time - t) / this._timeScale || 0.001
            );
          }),
          (u.render = function (t, e, i) {
            this._gc && this._enabled(!0, !1);
            var n,
              o,
              l,
              h,
              u,
              c,
              f,
              d,
              p = this._dirty ? this.totalDuration() : this._totalDuration,
              m = this._duration,
              g = this._time,
              v = this._totalTime,
              y = this._startTime,
              _ = this._timeScale,
              b = this._rawPrevTime,
              T = this._paused,
              x = this._cycle;
            if (t >= p - 1e-7)
              this._locked ||
                ((this._totalTime = p), (this._cycle = this._repeat)),
                this._reversed ||
                  this._hasPausedChild() ||
                  ((o = !0),
                  (h = "onComplete"),
                  (u = !!this._timeline.autoRemoveChildren),
                  0 === this._duration &&
                    ((0 >= t && t >= -1e-7) || 0 > b || b === r) &&
                    b !== t &&
                    this._first &&
                    ((u = !0), b > r && (h = "onReverseComplete"))),
                (this._rawPrevTime =
                  this._duration || !e || t || this._rawPrevTime === t ? t : r),
                this._yoyo && 0 !== (1 & this._cycle)
                  ? (this._time = t = 0)
                  : ((this._time = m), (t = m + 1e-4));
            else if (1e-7 > t)
              if (
                (this._locked || (this._totalTime = this._cycle = 0),
                (this._time = 0),
                (0 !== g ||
                  (0 === m &&
                    b !== r &&
                    (b > 0 || (0 > t && b >= 0)) &&
                    !this._locked)) &&
                  ((h = "onReverseComplete"), (o = this._reversed)),
                0 > t)
              )
                (this._active = !1),
                  this._timeline.autoRemoveChildren && this._reversed
                    ? ((u = o = !0), (h = "onReverseComplete"))
                    : b >= 0 && this._first && (u = !0),
                  (this._rawPrevTime = t);
              else {
                if (
                  ((this._rawPrevTime =
                    m || !e || t || this._rawPrevTime === t ? t : r),
                  0 === t && o)
                )
                  for (n = this._first; n && 0 === n._startTime; )
                    n._duration || (o = !1), (n = n._next);
                (t = 0), this._initted || (u = !0);
              }
            else if (
              (0 === m && 0 > b && (u = !0),
              (this._time = this._rawPrevTime = t),
              this._locked ||
                ((this._totalTime = t),
                0 !== this._repeat &&
                  ((c = m + this._repeatDelay),
                  (this._cycle = (this._totalTime / c) >> 0),
                  0 !== this._cycle &&
                    this._cycle === this._totalTime / c &&
                    t >= v &&
                    this._cycle--,
                  (this._time = this._totalTime - this._cycle * c),
                  this._yoyo &&
                    0 !== (1 & this._cycle) &&
                    (this._time = m - this._time),
                  this._time > m
                    ? ((this._time = m), (t = m + 1e-4))
                    : this._time < 0
                    ? (this._time = t = 0)
                    : (t = this._time))),
              this._hasPause && !this._forcingPlayhead && !e)
            ) {
              if (((t = this._time), t >= g))
                for (n = this._first; n && n._startTime <= t && !f; )
                  n._duration ||
                    "isPause" !== n.data ||
                    n.ratio ||
                    (0 === n._startTime && 0 === this._rawPrevTime) ||
                    (f = n),
                    (n = n._next);
              else
                for (n = this._last; n && n._startTime >= t && !f; )
                  n._duration ||
                    ("isPause" === n.data && n._rawPrevTime > 0 && (f = n)),
                    (n = n._prev);
              f &&
                ((this._time = t = f._startTime),
                (this._totalTime =
                  t + this._cycle * (this._totalDuration + this._repeatDelay)));
            }
            if (this._cycle !== x && !this._locked) {
              var w = this._yoyo && 0 !== (1 & x),
                E = w === (this._yoyo && 0 !== (1 & this._cycle)),
                C = this._totalTime,
                S = this._cycle,
                A = this._rawPrevTime,
                I = this._time;
              if (
                ((this._totalTime = x * m),
                this._cycle < x ? (w = !w) : (this._totalTime += m),
                (this._time = g),
                (this._rawPrevTime = 0 === m ? b - 1e-4 : b),
                (this._cycle = x),
                (this._locked = !0),
                (g = w ? 0 : m),
                this.render(g, e, 0 === m),
                e ||
                  this._gc ||
                  (this.vars.onRepeat && this._callback("onRepeat")),
                g !== this._time)
              )
                return;
              if (
                (E && ((g = w ? m + 1e-4 : -1e-4), this.render(g, !0, !1)),
                (this._locked = !1),
                this._paused && !T)
              )
                return;
              (this._time = I),
                (this._totalTime = C),
                (this._cycle = S),
                (this._rawPrevTime = A);
            }
            if (!((this._time !== g && this._first) || i || u || f))
              return void (
                v !== this._totalTime &&
                this._onUpdate &&
                (e || this._callback("onUpdate"))
              );
            if (
              (this._initted || (this._initted = !0),
              this._active ||
                (!this._paused &&
                  this._totalTime !== v &&
                  t > 0 &&
                  (this._active = !0)),
              0 === v &&
                this.vars.onStart &&
                ((0 === this._totalTime && this._totalDuration) ||
                  e ||
                  this._callback("onStart")),
              (d = this._time),
              d >= g)
            )
              for (
                n = this._first;
                n && ((l = n._next), d === this._time && (!this._paused || T));

              )
                (n._active ||
                  (n._startTime <= this._time && !n._paused && !n._gc)) &&
                  (f === n && this.pause(),
                  n._reversed
                    ? n.render(
                        (n._dirty ? n.totalDuration() : n._totalDuration) -
                          (t - n._startTime) * n._timeScale,
                        e,
                        i
                      )
                    : n.render((t - n._startTime) * n._timeScale, e, i)),
                  (n = l);
            else
              for (
                n = this._last;
                n && ((l = n._prev), d === this._time && (!this._paused || T));

              ) {
                if (n._active || (n._startTime <= g && !n._paused && !n._gc)) {
                  if (f === n) {
                    for (f = n._prev; f && f.endTime() > this._time; )
                      f.render(
                        f._reversed
                          ? f.totalDuration() -
                              (t - f._startTime) * f._timeScale
                          : (t - f._startTime) * f._timeScale,
                        e,
                        i
                      ),
                        (f = f._prev);
                    (f = null), this.pause();
                  }
                  n._reversed
                    ? n.render(
                        (n._dirty ? n.totalDuration() : n._totalDuration) -
                          (t - n._startTime) * n._timeScale,
                        e,
                        i
                      )
                    : n.render((t - n._startTime) * n._timeScale, e, i);
                }
                n = l;
              }
            this._onUpdate &&
              (e || (s.length && a(), this._callback("onUpdate"))),
              h &&
                (this._locked ||
                  this._gc ||
                  ((y === this._startTime || _ !== this._timeScale) &&
                    (0 === this._time || p >= this.totalDuration()) &&
                    (o &&
                      (s.length && a(),
                      this._timeline.autoRemoveChildren &&
                        this._enabled(!1, !1),
                      (this._active = !1)),
                    !e && this.vars[h] && this._callback(h))));
          }),
          (u.getActive = function (t, e, i) {
            null == t && (t = !0), null == e && (e = !0), null == i && (i = !1);
            var n,
              r,
              o = [],
              s = this.getChildren(t, e, i),
              a = 0,
              l = s.length;
            for (n = 0; l > n; n++) (r = s[n]), r.isActive() && (o[a++] = r);
            return o;
          }),
          (u.getLabelAfter = function (t) {
            t || (0 !== t && (t = this._time));
            var e,
              i = this.getLabelsArray(),
              n = i.length;
            for (e = 0; n > e; e++) if (i[e].time > t) return i[e].name;
            return null;
          }),
          (u.getLabelBefore = function (t) {
            null == t && (t = this._time);
            for (var e = this.getLabelsArray(), i = e.length; --i > -1; )
              if (e[i].time < t) return e[i].name;
            return null;
          }),
          (u.getLabelsArray = function () {
            var t,
              e = [],
              i = 0;
            for (t in this._labels)
              e[i++] = {
                time: this._labels[t],
                name: t,
              };
            return (
              e.sort(function (t, e) {
                return t.time - e.time;
              }),
              e
            );
          }),
          (u.progress = function (t, e) {
            return arguments.length
              ? this.totalTime(
                  this.duration() *
                    (this._yoyo && 0 !== (1 & this._cycle) ? 1 - t : t) +
                    this._cycle * (this._duration + this._repeatDelay),
                  e
                )
              : this._time / this.duration();
          }),
          (u.totalProgress = function (t, e) {
            return arguments.length
              ? this.totalTime(this.totalDuration() * t, e)
              : this._totalTime / this.totalDuration();
          }),
          (u.totalDuration = function (e) {
            return arguments.length
              ? -1 !== this._repeat && e
                ? this.timeScale(this.totalDuration() / e)
                : this
              : (this._dirty &&
                  (t.prototype.totalDuration.call(this),
                  (this._totalDuration =
                    -1 === this._repeat
                      ? 999999999999
                      : this._duration * (this._repeat + 1) +
                        this._repeatDelay * this._repeat)),
                this._totalDuration);
          }),
          (u.time = function (t, e) {
            return arguments.length
              ? (this._dirty && this.totalDuration(),
                t > this._duration && (t = this._duration),
                this._yoyo && 0 !== (1 & this._cycle)
                  ? (t =
                      this._duration -
                      t +
                      this._cycle * (this._duration + this._repeatDelay))
                  : 0 !== this._repeat &&
                    (t += this._cycle * (this._duration + this._repeatDelay)),
                this.totalTime(t, e))
              : this._time;
          }),
          (u.repeat = function (t) {
            return arguments.length
              ? ((this._repeat = t), this._uncache(!0))
              : this._repeat;
          }),
          (u.repeatDelay = function (t) {
            return arguments.length
              ? ((this._repeatDelay = t), this._uncache(!0))
              : this._repeatDelay;
          }),
          (u.yoyo = function (t) {
            return arguments.length ? ((this._yoyo = t), this) : this._yoyo;
          }),
          (u.currentLabel = function (t) {
            return arguments.length
              ? this.seek(t, !0)
              : this.getLabelBefore(this._time + 1e-8);
          }),
          n
        );
      },
      !0
    ),
    (function () {
      var t = 180 / Math.PI,
        e = [],
        i = [],
        n = [],
        r = {},
        o = _gsScope._gsDefine.globals,
        s = function (t, e, i, n) {
          i === n && (i = n - (n - e) / 1e6),
            t === e && (e = t + (i - t) / 1e6),
            (this.a = t),
            (this.b = e),
            (this.c = i),
            (this.d = n),
            (this.da = n - t),
            (this.ca = i - t),
            (this.ba = e - t);
        },
        a =
          ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",
        l = function (t, e, i, n) {
          var r = {
              a: t,
            },
            o = {},
            s = {},
            a = {
              c: n,
            },
            l = (t + e) / 2,
            h = (e + i) / 2,
            u = (i + n) / 2,
            c = (l + h) / 2,
            f = (h + u) / 2,
            d = (f - c) / 8;
          return (
            (r.b = l + (t - l) / 4),
            (o.b = c + d),
            (r.c = o.a = (r.b + o.b) / 2),
            (o.c = s.a = (c + f) / 2),
            (s.b = f - d),
            (a.b = u + (n - u) / 4),
            (s.c = a.a = (s.b + a.b) / 2),
            [r, o, s, a]
          );
        },
        h = function (t, r, o, s, a) {
          var h,
            u,
            c,
            f,
            d,
            p,
            m,
            g,
            v,
            y,
            _,
            b,
            T,
            x = t.length - 1,
            w = 0,
            E = t[0].a;
          for (h = 0; x > h; h++)
            (d = t[w]),
              (u = d.a),
              (c = d.d),
              (f = t[w + 1].d),
              a
                ? ((_ = e[h]),
                  (b = i[h]),
                  (T = ((b + _) * r * 0.25) / (s ? 0.5 : n[h] || 0.5)),
                  (p = c - (c - u) * (s ? 0.5 * r : 0 !== _ ? T / _ : 0)),
                  (m = c + (f - c) * (s ? 0.5 * r : 0 !== b ? T / b : 0)),
                  (g =
                    c - (p + (((m - p) * ((3 * _) / (_ + b) + 0.5)) / 4 || 0))))
                : ((p = c - (c - u) * r * 0.5),
                  (m = c + (f - c) * r * 0.5),
                  (g = c - (p + m) / 2)),
              (p += g),
              (m += g),
              (d.c = v = p),
              0 !== h ? (d.b = E) : (d.b = E = d.a + 0.6 * (d.c - d.a)),
              (d.da = c - u),
              (d.ca = v - u),
              (d.ba = E - u),
              o
                ? ((y = l(u, E, v, c)),
                  t.splice(w, 1, y[0], y[1], y[2], y[3]),
                  (w += 4))
                : w++,
              (E = m);
          (d = t[w]),
            (d.b = E),
            (d.c = E + 0.4 * (d.d - E)),
            (d.da = d.d - d.a),
            (d.ca = d.c - d.a),
            (d.ba = E - d.a),
            o &&
              ((y = l(d.a, E, d.c, d.d)),
              t.splice(w, 1, y[0], y[1], y[2], y[3]));
        },
        u = function (t, n, r, o) {
          var a,
            l,
            h,
            u,
            c,
            f,
            d = [];
          if (o)
            for (t = [o].concat(t), l = t.length; --l > -1; )
              "string" == typeof (f = t[l][n]) &&
                "=" === f.charAt(1) &&
                (t[l][n] = o[n] + Number(f.charAt(0) + f.substr(2)));
          if (((a = t.length - 2), 0 > a))
            return (d[0] = new s(t[0][n], 0, 0, t[-1 > a ? 0 : 1][n])), d;
          for (l = 0; a > l; l++)
            (h = t[l][n]),
              (u = t[l + 1][n]),
              (d[l] = new s(h, 0, 0, u)),
              r &&
                ((c = t[l + 2][n]),
                (e[l] = (e[l] || 0) + (u - h) * (u - h)),
                (i[l] = (i[l] || 0) + (c - u) * (c - u)));
          return (d[l] = new s(t[l][n], 0, 0, t[l + 1][n])), d;
        },
        c = function (t, o, s, l, c, f) {
          var d,
            p,
            m,
            g,
            v,
            y,
            _,
            b,
            T = {},
            x = [],
            w = f || t[0];
          (c = "string" == typeof c ? "," + c + "," : a), null == o && (o = 1);
          for (p in t[0]) x.push(p);
          if (t.length > 1) {
            for (b = t[t.length - 1], _ = !0, d = x.length; --d > -1; )
              if (((p = x[d]), Math.abs(w[p] - b[p]) > 0.05)) {
                _ = !1;
                break;
              }
            _ &&
              ((t = t.concat()),
              f && t.unshift(f),
              t.push(t[1]),
              (f = t[t.length - 3]));
          }
          for (e.length = i.length = n.length = 0, d = x.length; --d > -1; )
            (p = x[d]),
              (r[p] = -1 !== c.indexOf("," + p + ",")),
              (T[p] = u(t, p, r[p], f));
          for (d = e.length; --d > -1; )
            (e[d] = Math.sqrt(e[d])), (i[d] = Math.sqrt(i[d]));
          if (!l) {
            for (d = x.length; --d > -1; )
              if (r[p])
                for (m = T[x[d]], y = m.length - 1, g = 0; y > g; g++)
                  (v = m[g + 1].da / i[g] + m[g].da / e[g] || 0),
                    (n[g] = (n[g] || 0) + v * v);
            for (d = n.length; --d > -1; ) n[d] = Math.sqrt(n[d]);
          }
          for (d = x.length, g = s ? 4 : 1; --d > -1; )
            (p = x[d]),
              (m = T[p]),
              h(m, o, s, l, r[p]),
              _ && (m.splice(0, g), m.splice(m.length - g, g));
          return T;
        },
        f = function (t, e, i) {
          e = e || "soft";
          var n,
            r,
            o,
            a,
            l,
            h,
            u,
            c,
            f,
            d,
            p,
            m = {},
            g = "cubic" === e ? 3 : 2,
            v = "soft" === e,
            y = [];
          if ((v && i && (t = [i].concat(t)), null == t || t.length < g + 1))
            throw "invalid Bezier data";
          for (f in t[0]) y.push(f);
          for (h = y.length; --h > -1; ) {
            for (
              f = y[h], m[f] = l = [], d = 0, c = t.length, u = 0;
              c > u;
              u++
            )
              (n =
                null == i
                  ? t[u][f]
                  : "string" == typeof (p = t[u][f]) && "=" === p.charAt(1)
                  ? i[f] + Number(p.charAt(0) + p.substr(2))
                  : Number(p)),
                v && u > 1 && c - 1 > u && (l[d++] = (n + l[d - 2]) / 2),
                (l[d++] = n);
            for (c = d - g + 1, d = 0, u = 0; c > u; u += g)
              (n = l[u]),
                (r = l[u + 1]),
                (o = l[u + 2]),
                (a = 2 === g ? 0 : l[u + 3]),
                (l[d++] = p =
                  3 === g
                    ? new s(n, r, o, a)
                    : new s(n, (2 * r + n) / 3, (2 * r + o) / 3, o));
            l.length = d;
          }
          return m;
        },
        d = function (t, e, i) {
          for (
            var n, r, o, s, a, l, h, u, c, f, d, p = 1 / i, m = t.length;
            --m > -1;

          )
            for (
              f = t[m],
                o = f.a,
                s = f.d - o,
                a = f.c - o,
                l = f.b - o,
                n = r = 0,
                u = 1;
              i >= u;
              u++
            )
              (h = p * u),
                (c = 1 - h),
                (n = r - (r = (h * h * s + 3 * c * (h * a + c * l)) * h)),
                (d = m * i + u - 1),
                (e[d] = (e[d] || 0) + n * n);
        },
        p = function (t, e) {
          e = e >> 0 || 6;
          var i,
            n,
            r,
            o,
            s = [],
            a = [],
            l = 0,
            h = 0,
            u = e - 1,
            c = [],
            f = [];
          for (i in t) d(t[i], s, e);
          for (r = s.length, n = 0; r > n; n++)
            (l += Math.sqrt(s[n])),
              (o = n % e),
              (f[o] = l),
              o === u &&
                ((h += l),
                (o = (n / e) >> 0),
                (c[o] = f),
                (a[o] = h),
                (l = 0),
                (f = []));
          return {
            length: h,
            lengths: a,
            segments: c,
          };
        },
        m = _gsScope._gsDefine.plugin({
          propName: "bezier",
          priority: -1,
          version: "1.3.7",
          API: 2,
          global: !0,
          init: function (t, e, i) {
            (this._target = t),
              e instanceof Array &&
                (e = {
                  values: e,
                }),
              (this._func = {}),
              (this._mod = {}),
              (this._props = []),
              (this._timeRes =
                null == e.timeResolution ? 6 : parseInt(e.timeResolution, 10));
            var n,
              r,
              o,
              s,
              a,
              l = e.values || [],
              h = {},
              u = l[0],
              d = e.autoRotate || i.vars.orientToBezier;
            this._autoRotate = d
              ? d instanceof Array
                ? d
                : [["x", "y", "rotation", d === !0 ? 0 : Number(d) || 0]]
              : null;
            for (n in u) this._props.push(n);
            for (o = this._props.length; --o > -1; )
              (n = this._props[o]),
                this._overwriteProps.push(n),
                (r = this._func[n] = "function" == typeof t[n]),
                (h[n] = r
                  ? t[
                      n.indexOf("set") ||
                      "function" != typeof t["get" + n.substr(3)]
                        ? n
                        : "get" + n.substr(3)
                    ]()
                  : parseFloat(t[n])),
                a || (h[n] !== l[0][n] && (a = h));
            if (
              ((this._beziers =
                "cubic" !== e.type &&
                "quadratic" !== e.type &&
                "soft" !== e.type
                  ? c(
                      l,
                      isNaN(e.curviness) ? 1 : e.curviness,
                      !1,
                      "thruBasic" === e.type,
                      e.correlate,
                      a
                    )
                  : f(l, e.type, h)),
              (this._segCount = this._beziers[n].length),
              this._timeRes)
            ) {
              var m = p(this._beziers, this._timeRes);
              (this._length = m.length),
                (this._lengths = m.lengths),
                (this._segments = m.segments),
                (this._l1 = this._li = this._s1 = this._si = 0),
                (this._l2 = this._lengths[0]),
                (this._curSeg = this._segments[0]),
                (this._s2 = this._curSeg[0]),
                (this._prec = 1 / this._curSeg.length);
            }
            if ((d = this._autoRotate))
              for (
                this._initialRotations = [],
                  d[0] instanceof Array || (this._autoRotate = d = [d]),
                  o = d.length;
                --o > -1;

              ) {
                for (s = 0; 3 > s; s++)
                  (n = d[o][s]),
                    (this._func[n] =
                      "function" == typeof t[n] &&
                      t[
                        n.indexOf("set") ||
                        "function" != typeof t["get" + n.substr(3)]
                          ? n
                          : "get" + n.substr(3)
                      ]);
                (n = d[o][2]),
                  (this._initialRotations[o] =
                    (this._func[n]
                      ? this._func[n].call(this._target)
                      : this._target[n]) || 0),
                  this._overwriteProps.push(n);
              }
            return (this._startRatio = i.vars.runBackwards ? 1 : 0), !0;
          },
          set: function (e) {
            var i,
              n,
              r,
              o,
              s,
              a,
              l,
              h,
              u,
              c,
              f = this._segCount,
              d = this._func,
              p = this._target,
              m = e !== this._startRatio;
            if (this._timeRes) {
              if (
                ((u = this._lengths),
                (c = this._curSeg),
                (e *= this._length),
                (r = this._li),
                e > this._l2 && f - 1 > r)
              ) {
                for (h = f - 1; h > r && (this._l2 = u[++r]) <= e; );
                (this._l1 = u[r - 1]),
                  (this._li = r),
                  (this._curSeg = c = this._segments[r]),
                  (this._s2 = c[(this._s1 = this._si = 0)]);
              } else if (e < this._l1 && r > 0) {
                for (; r > 0 && (this._l1 = u[--r]) >= e; );
                0 === r && e < this._l1 ? (this._l1 = 0) : r++,
                  (this._l2 = u[r]),
                  (this._li = r),
                  (this._curSeg = c = this._segments[r]),
                  (this._s1 = c[(this._si = c.length - 1) - 1] || 0),
                  (this._s2 = c[this._si]);
              }
              if (
                ((i = r),
                (e -= this._l1),
                (r = this._si),
                e > this._s2 && r < c.length - 1)
              ) {
                for (h = c.length - 1; h > r && (this._s2 = c[++r]) <= e; );
                (this._s1 = c[r - 1]), (this._si = r);
              } else if (e < this._s1 && r > 0) {
                for (; r > 0 && (this._s1 = c[--r]) >= e; );
                0 === r && e < this._s1 ? (this._s1 = 0) : r++,
                  (this._s2 = c[r]),
                  (this._si = r);
              }
              a =
                (r + (e - this._s1) / (this._s2 - this._s1)) * this._prec || 0;
            } else
              (i = 0 > e ? 0 : e >= 1 ? f - 1 : (f * e) >> 0),
                (a = (e - i * (1 / f)) * f);
            for (n = 1 - a, r = this._props.length; --r > -1; )
              (o = this._props[r]),
                (s = this._beziers[o][i]),
                (l = (a * a * s.da + 3 * n * (a * s.ca + n * s.ba)) * a + s.a),
                this._mod[o] && (l = this._mod[o](l, p)),
                d[o] ? p[o](l) : (p[o] = l);
            if (this._autoRotate) {
              var g,
                v,
                y,
                _,
                b,
                T,
                x,
                w = this._autoRotate;
              for (r = w.length; --r > -1; )
                (o = w[r][2]),
                  (T = w[r][3] || 0),
                  (x = w[r][4] === !0 ? 1 : t),
                  (s = this._beziers[w[r][0]]),
                  (g = this._beziers[w[r][1]]),
                  s &&
                    g &&
                    ((s = s[i]),
                    (g = g[i]),
                    (v = s.a + (s.b - s.a) * a),
                    (_ = s.b + (s.c - s.b) * a),
                    (v += (_ - v) * a),
                    (_ += (s.c + (s.d - s.c) * a - _) * a),
                    (y = g.a + (g.b - g.a) * a),
                    (b = g.b + (g.c - g.b) * a),
                    (y += (b - y) * a),
                    (b += (g.c + (g.d - g.c) * a - b) * a),
                    (l = m
                      ? Math.atan2(b - y, _ - v) * x + T
                      : this._initialRotations[r]),
                    this._mod[o] && (l = this._mod[o](l, p)),
                    d[o] ? p[o](l) : (p[o] = l));
            }
          },
        }),
        g = m.prototype;
      (m.bezierThrough = c),
        (m.cubicToQuadratic = l),
        (m._autoCSS = !0),
        (m.quadraticToCubic = function (t, e, i) {
          return new s(t, (2 * e + t) / 3, (2 * e + i) / 3, i);
        }),
        (m._cssRegister = function () {
          var t = o.CSSPlugin;
          if (t) {
            var e = t._internals,
              i = e._parseToProxy,
              n = e._setPluginRatio,
              r = e.CSSPropTween;
            e._registerComplexSpecialProp("bezier", {
              parser: function (t, e, o, s, a, l) {
                e instanceof Array &&
                  (e = {
                    values: e,
                  }),
                  (l = new m());
                var h,
                  u,
                  c,
                  f = e.values,
                  d = f.length - 1,
                  p = [],
                  g = {};
                if (0 > d) return a;
                for (h = 0; d >= h; h++)
                  (c = i(t, f[h], s, a, l, d !== h)), (p[h] = c.end);
                for (u in e) g[u] = e[u];
                return (
                  (g.values = p),
                  (a = new r(t, "bezier", 0, 0, c.pt, 2)),
                  (a.data = c),
                  (a.plugin = l),
                  (a.setRatio = n),
                  0 === g.autoRotate && (g.autoRotate = !0),
                  !g.autoRotate ||
                    g.autoRotate instanceof Array ||
                    ((h = g.autoRotate === !0 ? 0 : Number(g.autoRotate)),
                    (g.autoRotate =
                      null != c.end.left
                        ? [["left", "top", "rotation", h, !1]]
                        : null != c.end.x && [["x", "y", "rotation", h, !1]])),
                  g.autoRotate &&
                    (s._transform || s._enableTransforms(!1),
                    (c.autoRotate = s._target._gsTransform),
                    (c.proxy.rotation = c.autoRotate.rotation || 0),
                    s._overwriteProps.push("rotation")),
                  l._onInitTween(c.proxy, g, s._tween),
                  a
                );
              },
            });
          }
        }),
        (g._mod = function (t) {
          for (var e, i = this._overwriteProps, n = i.length; --n > -1; )
            (e = t[i[n]]), e && "function" == typeof e && (this._mod[i[n]] = e);
        }),
        (g._kill = function (t) {
          var e,
            i,
            n = this._props;
          for (e in this._beziers)
            if (e in t)
              for (
                delete this._beziers[e], delete this._func[e], i = n.length;
                --i > -1;

              )
                n[i] === e && n.splice(i, 1);
          if ((n = this._autoRotate))
            for (i = n.length; --i > -1; ) t[n[i][2]] && n.splice(i, 1);
          return this._super._kill.call(this, t);
        });
    })(),
    _gsScope._gsDefine(
      "plugins.CSSPlugin",
      ["plugins.TweenPlugin", "TweenLite"],
      function (t, e) {
        var i,
          n,
          r,
          o,
          s = function () {
            t.call(this, "css"),
              (this._overwriteProps.length = 0),
              (this.setRatio = s.prototype.setRatio);
          },
          a = _gsScope._gsDefine.globals,
          l = {},
          h = (s.prototype = new t("css"));
        (h.constructor = s),
          (s.version = "1.19.0"),
          (s.API = 2),
          (s.defaultTransformPerspective = 0),
          (s.defaultSkewType = "compensated"),
          (s.defaultSmoothOrigin = !0),
          (h = "px"),
          (s.suffixMap = {
            top: h,
            right: h,
            bottom: h,
            left: h,
            width: h,
            height: h,
            fontSize: h,
            padding: h,
            margin: h,
            perspective: h,
            lineHeight: "",
          });
        var u,
          c,
          f,
          d,
          p,
          m,
          g,
          v,
          y = /(?:\-|\.|\b)(\d|\.|e\-)+/g,
          _ = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
          b = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
          T = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
          x = /(?:\d|\-|\+|=|#|\.)*/g,
          w = /opacity *= *([^)]*)/i,
          E = /opacity:([^;]*)/i,
          C = /alpha\(opacity *=.+?\)/i,
          S = /^(rgb|hsl)/,
          A = /([A-Z])/g,
          I = /-([a-z])/gi,
          D = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
          P = function (t, e) {
            return e.toUpperCase();
          },
          k = /(?:Left|Right|Width)/i,
          O = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
          L = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
          N = /,(?=[^\)]*(?:\(|$))/gi,
          R = /[\s,\(]/i,
          M = Math.PI / 180,
          z = 180 / Math.PI,
          j = {},
          F = document,
          W = function (t) {
            return F.createElementNS
              ? F.createElementNS("http://www.w3.org/1999/xhtml", t)
              : F.createElement(t);
          },
          H = W("div"),
          B = W("img"),
          q = (s._internals = {
            _specialProps: l,
          }),
          V = navigator.userAgent,
          U = (function () {
            var t = V.indexOf("Android"),
              e = W("a");
            return (
              (f =
                -1 !== V.indexOf("Safari") &&
                -1 === V.indexOf("Chrome") &&
                (-1 === t || Number(V.substr(t + 8, 1)) > 3)),
              (p = f && Number(V.substr(V.indexOf("Version/") + 8, 1)) < 6),
              (d = -1 !== V.indexOf("Firefox")),
              (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(V) ||
                /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(V)) &&
                (m = parseFloat(RegExp.$1)),
              !!e &&
                ((e.style.cssText = "top:1px;opacity:.55;"),
                /^0.55/.test(e.style.opacity))
            );
          })(),
          $ = function (t) {
            return w.test(
              "string" == typeof t
                ? t
                : (t.currentStyle ? t.currentStyle.filter : t.style.filter) ||
                    ""
            )
              ? parseFloat(RegExp.$1) / 100
              : 1;
          },
          Y = function (t) {
            window.console && console.log(t);
          },
          X = "",
          G = "",
          Q = function (t, e) {
            e = e || H;
            var i,
              n,
              r = e.style;
            if (void 0 !== r[t]) return t;
            for (
              t = t.charAt(0).toUpperCase() + t.substr(1),
                i = ["O", "Moz", "ms", "Ms", "Webkit"],
                n = 5;
              --n > -1 && void 0 === r[i[n] + t];

            );
            return n >= 0
              ? ((G = 3 === n ? "ms" : i[n]),
                (X = "-" + G.toLowerCase() + "-"),
                G + t)
              : null;
          },
          K = F.defaultView ? F.defaultView.getComputedStyle : function () {},
          Z = (s.getStyle = function (t, e, i, n, r) {
            var o;
            return U || "opacity" !== e
              ? (!n && t.style[e]
                  ? (o = t.style[e])
                  : (i = i || K(t))
                  ? (o =
                      i[e] ||
                      i.getPropertyValue(e) ||
                      i.getPropertyValue(e.replace(A, "-$1").toLowerCase()))
                  : t.currentStyle && (o = t.currentStyle[e]),
                null == r ||
                (o && "none" !== o && "auto" !== o && "auto auto" !== o)
                  ? o
                  : r)
              : $(t);
          }),
          J = (q.convertToPixels = function (t, i, n, r, o) {
            if ("px" === r || !r) return n;
            if ("auto" === r || !n) return 0;
            var a,
              l,
              h,
              u = k.test(i),
              c = t,
              f = H.style,
              d = 0 > n,
              p = 1 === n;
            if (
              (d && (n = -n),
              p && (n *= 100),
              "%" === r && -1 !== i.indexOf("border"))
            )
              a = (n / 100) * (u ? t.clientWidth : t.clientHeight);
            else {
              if (
                ((f.cssText =
                  "border:0 solid red;position:" +
                  Z(t, "position") +
                  ";line-height:0;"),
                "%" !== r &&
                  c.appendChild &&
                  "v" !== r.charAt(0) &&
                  "rem" !== r)
              )
                f[u ? "borderLeftWidth" : "borderTopWidth"] = n + r;
              else {
                if (
                  ((c = t.parentNode || F.body),
                  (l = c._gsCache),
                  (h = e.ticker.frame),
                  l && u && l.time === h)
                )
                  return (l.width * n) / 100;
                f[u ? "width" : "height"] = n + r;
              }
              c.appendChild(H),
                (a = parseFloat(H[u ? "offsetWidth" : "offsetHeight"])),
                c.removeChild(H),
                u &&
                  "%" === r &&
                  s.cacheWidths !== !1 &&
                  ((l = c._gsCache = c._gsCache || {}),
                  (l.time = h),
                  (l.width = (a / n) * 100)),
                0 !== a || o || (a = J(t, i, n, r, !0));
            }
            return p && (a /= 100), d ? -a : a;
          }),
          tt = (q.calculateOffset = function (t, e, i) {
            if ("absolute" !== Z(t, "position", i)) return 0;
            var n = "left" === e ? "Left" : "Top",
              r = Z(t, "margin" + n, i);
            return (
              t["offset" + n] - (J(t, e, parseFloat(r), r.replace(x, "")) || 0)
            );
          }),
          et = function (t, e) {
            var i,
              n,
              r,
              o = {};
            if ((e = e || K(t, null)))
              if ((i = e.length))
                for (; --i > -1; )
                  (r = e[i]),
                    (-1 === r.indexOf("-transform") || It === r) &&
                      (o[r.replace(I, P)] = e.getPropertyValue(r));
              else
                for (i in e)
                  (-1 === i.indexOf("Transform") || At === i) && (o[i] = e[i]);
            else if ((e = t.currentStyle || t.style))
              for (i in e)
                "string" == typeof i &&
                  void 0 === o[i] &&
                  (o[i.replace(I, P)] = e[i]);
            return (
              U || (o.opacity = $(t)),
              (n = Ht(t, e, !1)),
              (o.rotation = n.rotation),
              (o.skewX = n.skewX),
              (o.scaleX = n.scaleX),
              (o.scaleY = n.scaleY),
              (o.x = n.x),
              (o.y = n.y),
              Pt &&
                ((o.z = n.z),
                (o.rotationX = n.rotationX),
                (o.rotationY = n.rotationY),
                (o.scaleZ = n.scaleZ)),
              o.filters && delete o.filters,
              o
            );
          },
          it = function (t, e, i, n, r) {
            var o,
              s,
              a,
              l = {},
              h = t.style;
            for (s in i)
              "cssText" !== s &&
                "length" !== s &&
                isNaN(s) &&
                (e[s] !== (o = i[s]) || (r && r[s])) &&
                -1 === s.indexOf("Origin") &&
                ("number" == typeof o || "string" == typeof o) &&
                ((l[s] =
                  "auto" !== o || ("left" !== s && "top" !== s)
                    ? ("" !== o && "auto" !== o && "none" !== o) ||
                      "string" != typeof e[s] ||
                      "" === e[s].replace(T, "")
                      ? o
                      : 0
                    : tt(t, s)),
                void 0 !== h[s] && (a = new vt(h, s, h[s], a)));
            if (n) for (s in n) "className" !== s && (l[s] = n[s]);
            return {
              difs: l,
              firstMPT: a,
            };
          },
          nt = {
            width: ["Left", "Right"],
            height: ["Top", "Bottom"],
          },
          rt = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
          ot = function (t, e, i) {
            if ("svg" === (t.nodeName + "").toLowerCase())
              return (i || K(t))[e] || 0;
            if (t.getBBox && jt(t)) return t.getBBox()[e] || 0;
            var n = parseFloat("width" === e ? t.offsetWidth : t.offsetHeight),
              r = nt[e],
              o = r.length;
            for (i = i || K(t, null); --o > -1; )
              (n -= parseFloat(Z(t, "padding" + r[o], i, !0)) || 0),
                (n -= parseFloat(Z(t, "border" + r[o] + "Width", i, !0)) || 0);
            return n;
          },
          st = function (t, e) {
            if ("contain" === t || "auto" === t || "auto auto" === t)
              return t + " ";
            (null == t || "" === t) && (t = "0 0");
            var i,
              n = t.split(" "),
              r =
                -1 !== t.indexOf("left")
                  ? "0%"
                  : -1 !== t.indexOf("right")
                  ? "100%"
                  : n[0],
              o =
                -1 !== t.indexOf("top")
                  ? "0%"
                  : -1 !== t.indexOf("bottom")
                  ? "100%"
                  : n[1];
            if (n.length > 3 && !e) {
              for (
                n = t.split(", ").join(",").split(","), t = [], i = 0;
                i < n.length;
                i++
              )
                t.push(st(n[i]));
              return t.join(",");
            }
            return (
              null == o
                ? (o = "center" === r ? "50%" : "0")
                : "center" === o && (o = "50%"),
              ("center" === r ||
                (isNaN(parseFloat(r)) && -1 === (r + "").indexOf("="))) &&
                (r = "50%"),
              (t = r + " " + o + (n.length > 2 ? " " + n[2] : "")),
              e &&
                ((e.oxp = -1 !== r.indexOf("%")),
                (e.oyp = -1 !== o.indexOf("%")),
                (e.oxr = "=" === r.charAt(1)),
                (e.oyr = "=" === o.charAt(1)),
                (e.ox = parseFloat(r.replace(T, ""))),
                (e.oy = parseFloat(o.replace(T, ""))),
                (e.v = t)),
              e || t
            );
          },
          at = function (t, e) {
            return (
              "function" == typeof t && (t = t(v, g)),
              "string" == typeof t && "=" === t.charAt(1)
                ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2))
                : parseFloat(t) - parseFloat(e) || 0
            );
          },
          lt = function (t, e) {
            return (
              "function" == typeof t && (t = t(v, g)),
              null == t
                ? e
                : "string" == typeof t && "=" === t.charAt(1)
                ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) + e
                : parseFloat(t) || 0
            );
          },
          ht = function (t, e, i, n) {
            var r,
              o,
              s,
              a,
              l,
              h = 1e-6;
            return (
              "function" == typeof t && (t = t(v, g)),
              null == t
                ? (a = e)
                : "number" == typeof t
                ? (a = t)
                : ((r = 360),
                  (o = t.split("_")),
                  (l = "=" === t.charAt(1)),
                  (s =
                    (l
                      ? parseInt(t.charAt(0) + "1", 10) *
                        parseFloat(o[0].substr(2))
                      : parseFloat(o[0])) *
                      (-1 === t.indexOf("rad") ? 1 : z) -
                    (l ? 0 : e)),
                  o.length &&
                    (n && (n[i] = e + s),
                    -1 !== t.indexOf("short") &&
                      ((s %= r),
                      s !== s % (r / 2) && (s = 0 > s ? s + r : s - r)),
                    -1 !== t.indexOf("_cw") && 0 > s
                      ? (s = ((s + 9999999999 * r) % r) - ((s / r) | 0) * r)
                      : -1 !== t.indexOf("ccw") &&
                        s > 0 &&
                        (s = ((s - 9999999999 * r) % r) - ((s / r) | 0) * r)),
                  (a = e + s)),
              h > a && a > -h && (a = 0),
              a
            );
          },
          ut = {
            aqua: [0, 255, 255],
            lime: [0, 255, 0],
            silver: [192, 192, 192],
            black: [0, 0, 0],
            maroon: [128, 0, 0],
            teal: [0, 128, 128],
            blue: [0, 0, 255],
            navy: [0, 0, 128],
            white: [255, 255, 255],
            fuchsia: [255, 0, 255],
            olive: [128, 128, 0],
            yellow: [255, 255, 0],
            orange: [255, 165, 0],
            gray: [128, 128, 128],
            purple: [128, 0, 128],
            green: [0, 128, 0],
            red: [255, 0, 0],
            pink: [255, 192, 203],
            cyan: [0, 255, 255],
            transparent: [255, 255, 255, 0],
          },
          ct = function (t, e, i) {
            return (
              (t = 0 > t ? t + 1 : t > 1 ? t - 1 : t),
              (255 *
                (1 > 6 * t
                  ? e + (i - e) * t * 6
                  : 0.5 > t
                  ? i
                  : 2 > 3 * t
                  ? e + (i - e) * (2 / 3 - t) * 6
                  : e) +
                0.5) |
                0
            );
          },
          ft = (s.parseColor = function (t, e) {
            var i, n, r, o, s, a, l, h, u, c, f;
            if (t)
              if ("number" == typeof t) i = [t >> 16, (t >> 8) & 255, 255 & t];
              else {
                if (
                  ("," === t.charAt(t.length - 1) &&
                    (t = t.substr(0, t.length - 1)),
                  ut[t])
                )
                  i = ut[t];
                else if ("#" === t.charAt(0))
                  4 === t.length &&
                    ((n = t.charAt(1)),
                    (r = t.charAt(2)),
                    (o = t.charAt(3)),
                    (t = "#" + n + n + r + r + o + o)),
                    (t = parseInt(t.substr(1), 16)),
                    (i = [t >> 16, (t >> 8) & 255, 255 & t]);
                else if ("hsl" === t.substr(0, 3))
                  if (((i = f = t.match(y)), e)) {
                    if (-1 !== t.indexOf("=")) return t.match(_);
                  } else
                    (s = (Number(i[0]) % 360) / 360),
                      (a = Number(i[1]) / 100),
                      (l = Number(i[2]) / 100),
                      (r = 0.5 >= l ? l * (a + 1) : l + a - l * a),
                      (n = 2 * l - r),
                      i.length > 3 && (i[3] = Number(t[3])),
                      (i[0] = ct(s + 1 / 3, n, r)),
                      (i[1] = ct(s, n, r)),
                      (i[2] = ct(s - 1 / 3, n, r));
                else i = t.match(y) || ut.transparent;
                (i[0] = Number(i[0])),
                  (i[1] = Number(i[1])),
                  (i[2] = Number(i[2])),
                  i.length > 3 && (i[3] = Number(i[3]));
              }
            else i = ut.black;
            return (
              e &&
                !f &&
                ((n = i[0] / 255),
                (r = i[1] / 255),
                (o = i[2] / 255),
                (h = Math.max(n, r, o)),
                (u = Math.min(n, r, o)),
                (l = (h + u) / 2),
                h === u
                  ? (s = a = 0)
                  : ((c = h - u),
                    (a = l > 0.5 ? c / (2 - h - u) : c / (h + u)),
                    (s =
                      h === n
                        ? (r - o) / c + (o > r ? 6 : 0)
                        : h === r
                        ? (o - n) / c + 2
                        : (n - r) / c + 4),
                    (s *= 60)),
                (i[0] = (s + 0.5) | 0),
                (i[1] = (100 * a + 0.5) | 0),
                (i[2] = (100 * l + 0.5) | 0)),
              i
            );
          }),
          dt = function (t, e) {
            var i,
              n,
              r,
              o = t.match(pt) || [],
              s = 0,
              a = o.length ? "" : t;
            for (i = 0; i < o.length; i++)
              (n = o[i]),
                (r = t.substr(s, t.indexOf(n, s) - s)),
                (s += r.length + n.length),
                (n = ft(n, e)),
                3 === n.length && n.push(1),
                (a +=
                  r +
                  (e
                    ? "hsla(" + n[0] + "," + n[1] + "%," + n[2] + "%," + n[3]
                    : "rgba(" + n.join(",")) +
                  ")");
            return a + t.substr(s);
          },
          pt =
            "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
        for (h in ut) pt += "|" + h + "\\b";
        (pt = new RegExp(pt + ")", "gi")),
          (s.colorStringFilter = function (t) {
            var e,
              i = t[0] + t[1];
            pt.test(i) &&
              ((e = -1 !== i.indexOf("hsl(") || -1 !== i.indexOf("hsla(")),
              (t[0] = dt(t[0], e)),
              (t[1] = dt(t[1], e))),
              (pt.lastIndex = 0);
          }),
          e.defaultStringFilter ||
            (e.defaultStringFilter = s.colorStringFilter);
        var mt = function (t, e, i, n) {
            if (null == t)
              return function (t) {
                return t;
              };
            var r,
              o = e ? (t.match(pt) || [""])[0] : "",
              s = t.split(o).join("").match(b) || [],
              a = t.substr(0, t.indexOf(s[0])),
              l = ")" === t.charAt(t.length - 1) ? ")" : "",
              h = -1 !== t.indexOf(" ") ? " " : ",",
              u = s.length,
              c = u > 0 ? s[0].replace(y, "") : "";
            return u
              ? (r = e
                  ? function (t) {
                      var e, f, d, p;
                      if ("number" == typeof t) t += c;
                      else if (n && N.test(t)) {
                        for (
                          p = t.replace(N, "|").split("|"), d = 0;
                          d < p.length;
                          d++
                        )
                          p[d] = r(p[d]);
                        return p.join(",");
                      }
                      if (
                        ((e = (t.match(pt) || [o])[0]),
                        (f = t.split(e).join("").match(b) || []),
                        (d = f.length),
                        u > d--)
                      )
                        for (; ++d < u; )
                          f[d] = i ? f[((d - 1) / 2) | 0] : s[d];
                      return (
                        a +
                        f.join(h) +
                        h +
                        e +
                        l +
                        (-1 !== t.indexOf("inset") ? " inset" : "")
                      );
                    }
                  : function (t) {
                      var e, o, f;
                      if ("number" == typeof t) t += c;
                      else if (n && N.test(t)) {
                        for (
                          o = t.replace(N, "|").split("|"), f = 0;
                          f < o.length;
                          f++
                        )
                          o[f] = r(o[f]);
                        return o.join(",");
                      }
                      if (((e = t.match(b) || []), (f = e.length), u > f--))
                        for (; ++f < u; )
                          e[f] = i ? e[((f - 1) / 2) | 0] : s[f];
                      return a + e.join(h) + l;
                    })
              : function (t) {
                  return t;
                };
          },
          gt = function (t) {
            return (
              (t = t.split(",")),
              function (e, i, n, r, o, s, a) {
                var l,
                  h = (i + "").split(" ");
                for (a = {}, l = 0; 4 > l; l++)
                  a[t[l]] = h[l] = h[l] || h[((l - 1) / 2) >> 0];
                return r.parse(e, a, o, s);
              }
            );
          },
          vt =
            ((q._setPluginRatio = function (t) {
              this.plugin.setRatio(t);
              for (
                var e,
                  i,
                  n,
                  r,
                  o,
                  s = this.data,
                  a = s.proxy,
                  l = s.firstMPT,
                  h = 1e-6;
                l;

              )
                (e = a[l.v]),
                  l.r ? (e = Math.round(e)) : h > e && e > -h && (e = 0),
                  (l.t[l.p] = e),
                  (l = l._next);
              if (
                (s.autoRotate &&
                  (s.autoRotate.rotation = s.mod
                    ? s.mod(a.rotation, this.t)
                    : a.rotation),
                1 === t || 0 === t)
              )
                for (l = s.firstMPT, o = 1 === t ? "e" : "b"; l; ) {
                  if (((i = l.t), i.type)) {
                    if (1 === i.type) {
                      for (r = i.xs0 + i.s + i.xs1, n = 1; n < i.l; n++)
                        r += i["xn" + n] + i["xs" + (n + 1)];
                      i[o] = r;
                    }
                  } else i[o] = i.s + i.xs0;
                  l = l._next;
                }
            }),
            function (t, e, i, n, r) {
              (this.t = t),
                (this.p = e),
                (this.v = i),
                (this.r = r),
                n && ((n._prev = this), (this._next = n));
            }),
          yt =
            ((q._parseToProxy = function (t, e, i, n, r, o) {
              var s,
                a,
                l,
                h,
                u,
                c = n,
                f = {},
                d = {},
                p = i._transform,
                m = j;
              for (
                i._transform = null,
                  j = e,
                  n = u = i.parse(t, e, n, r),
                  j = m,
                  o &&
                    ((i._transform = p),
                    c && ((c._prev = null), c._prev && (c._prev._next = null)));
                n && n !== c;

              ) {
                if (
                  n.type <= 1 &&
                  ((a = n.p),
                  (d[a] = n.s + n.c),
                  (f[a] = n.s),
                  o || ((h = new vt(n, "s", a, h, n.r)), (n.c = 0)),
                  1 === n.type)
                )
                  for (s = n.l; --s > 0; )
                    (l = "xn" + s),
                      (a = n.p + "_" + l),
                      (d[a] = n.data[l]),
                      (f[a] = n[l]),
                      o || (h = new vt(n, l, a, h, n.rxp[l]));
                n = n._next;
              }
              return {
                proxy: f,
                end: d,
                firstMPT: h,
                pt: u,
              };
            }),
            (q.CSSPropTween = function (t, e, n, r, s, a, l, h, u, c, f) {
              (this.t = t),
                (this.p = e),
                (this.s = n),
                (this.c = r),
                (this.n = l || e),
                t instanceof yt || o.push(this.n),
                (this.r = h),
                (this.type = a || 0),
                u && ((this.pr = u), (i = !0)),
                (this.b = void 0 === c ? n : c),
                (this.e = void 0 === f ? n + r : f),
                s && ((this._next = s), (s._prev = this));
            })),
          _t = function (t, e, i, n, r, o) {
            var s = new yt(t, e, i, n - i, r, -1, o);
            return (s.b = i), (s.e = s.xs0 = n), s;
          },
          bt = (s.parseComplex = function (t, e, i, n, r, o, a, l, h, c) {
            (i = i || o || ""),
              "function" == typeof n && (n = n(v, g)),
              (a = new yt(t, e, 0, 0, a, c ? 2 : 1, null, !1, l, i, n)),
              (n += ""),
              r &&
                pt.test(n + i) &&
                ((n = [i, n]), s.colorStringFilter(n), (i = n[0]), (n = n[1]));
            var f,
              d,
              p,
              m,
              b,
              T,
              x,
              w,
              E,
              C,
              S,
              A,
              I,
              D = i.split(", ").join(",").split(" "),
              P = n.split(", ").join(",").split(" "),
              k = D.length,
              O = u !== !1;
            for (
              (-1 !== n.indexOf(",") || -1 !== i.indexOf(",")) &&
                ((D = D.join(" ").replace(N, ", ").split(" ")),
                (P = P.join(" ").replace(N, ", ").split(" ")),
                (k = D.length)),
                k !== P.length && ((D = (o || "").split(" ")), (k = D.length)),
                a.plugin = h,
                a.setRatio = c,
                pt.lastIndex = 0,
                f = 0;
              k > f;
              f++
            )
              if (((m = D[f]), (b = P[f]), (w = parseFloat(m)), w || 0 === w))
                a.appendXtra(
                  "",
                  w,
                  at(b, w),
                  b.replace(_, ""),
                  O && -1 !== b.indexOf("px"),
                  !0
                );
              else if (r && pt.test(m))
                (A = b.indexOf(")") + 1),
                  (A = ")" + (A ? b.substr(A) : "")),
                  (I = -1 !== b.indexOf("hsl") && U),
                  (m = ft(m, I)),
                  (b = ft(b, I)),
                  (E = m.length + b.length > 6),
                  E && !U && 0 === b[3]
                    ? ((a["xs" + a.l] += a.l ? " transparent" : "transparent"),
                      (a.e = a.e.split(P[f]).join("transparent")))
                    : (U || (E = !1),
                      I
                        ? a
                            .appendXtra(
                              E ? "hsla(" : "hsl(",
                              m[0],
                              at(b[0], m[0]),
                              ",",
                              !1,
                              !0
                            )
                            .appendXtra("", m[1], at(b[1], m[1]), "%,", !1)
                            .appendXtra(
                              "",
                              m[2],
                              at(b[2], m[2]),
                              E ? "%," : "%" + A,
                              !1
                            )
                        : a
                            .appendXtra(
                              E ? "rgba(" : "rgb(",
                              m[0],
                              b[0] - m[0],
                              ",",
                              !0,
                              !0
                            )
                            .appendXtra("", m[1], b[1] - m[1], ",", !0)
                            .appendXtra("", m[2], b[2] - m[2], E ? "," : A, !0),
                      E &&
                        ((m = m.length < 4 ? 1 : m[3]),
                        a.appendXtra(
                          "",
                          m,
                          (b.length < 4 ? 1 : b[3]) - m,
                          A,
                          !1
                        ))),
                  (pt.lastIndex = 0);
              else if ((T = m.match(y))) {
                if (((x = b.match(_)), !x || x.length !== T.length)) return a;
                for (p = 0, d = 0; d < T.length; d++)
                  (S = T[d]),
                    (C = m.indexOf(S, p)),
                    a.appendXtra(
                      m.substr(p, C - p),
                      Number(S),
                      at(x[d], S),
                      "",
                      O && "px" === m.substr(C + S.length, 2),
                      0 === d
                    ),
                    (p = C + S.length);
                a["xs" + a.l] += m.substr(p);
              } else a["xs" + a.l] += a.l || a["xs" + a.l] ? " " + b : b;
            if (-1 !== n.indexOf("=") && a.data) {
              for (A = a.xs0 + a.data.s, f = 1; f < a.l; f++)
                A += a["xs" + f] + a.data["xn" + f];
              a.e = A + a["xs" + f];
            }
            return a.l || ((a.type = -1), (a.xs0 = a.e)), a.xfirst || a;
          }),
          Tt = 9;
        for (h = yt.prototype, h.l = h.pr = 0; --Tt > 0; )
          (h["xn" + Tt] = 0), (h["xs" + Tt] = "");
        (h.xs0 = ""),
          (h._next =
            h._prev =
            h.xfirst =
            h.data =
            h.plugin =
            h.setRatio =
            h.rxp =
              null),
          (h.appendXtra = function (t, e, i, n, r, o) {
            var s = this,
              a = s.l;
            return (
              (s["xs" + a] += o && (a || s["xs" + a]) ? " " + t : t || ""),
              i || 0 === a || s.plugin
                ? (s.l++,
                  (s.type = s.setRatio ? 2 : 1),
                  (s["xs" + s.l] = n || ""),
                  a > 0
                    ? ((s.data["xn" + a] = e + i),
                      (s.rxp["xn" + a] = r),
                      (s["xn" + a] = e),
                      s.plugin ||
                        ((s.xfirst = new yt(
                          s,
                          "xn" + a,
                          e,
                          i,
                          s.xfirst || s,
                          0,
                          s.n,
                          r,
                          s.pr
                        )),
                        (s.xfirst.xs0 = 0)),
                      s)
                    : ((s.data = {
                        s: e + i,
                      }),
                      (s.rxp = {}),
                      (s.s = e),
                      (s.c = i),
                      (s.r = r),
                      s))
                : ((s["xs" + a] += e + (n || "")), s)
            );
          });
        var xt = function (t, e) {
            (e = e || {}),
              (this.p = e.prefix ? Q(t) || t : t),
              (l[t] = l[this.p] = this),
              (this.format =
                e.formatter ||
                mt(e.defaultValue, e.color, e.collapsible, e.multi)),
              e.parser && (this.parse = e.parser),
              (this.clrs = e.color),
              (this.multi = e.multi),
              (this.keyword = e.keyword),
              (this.dflt = e.defaultValue),
              (this.pr = e.priority || 0);
          },
          wt = (q._registerComplexSpecialProp = function (t, e, i) {
            "object" != typeof e &&
              (e = {
                parser: i,
              });
            var n,
              r,
              o = t.split(","),
              s = e.defaultValue;
            for (i = i || [s], n = 0; n < o.length; n++)
              (e.prefix = 0 === n && e.prefix),
                (e.defaultValue = i[n] || s),
                (r = new xt(o[n], e));
          }),
          Et = (q._registerPluginProp = function (t) {
            if (!l[t]) {
              var e = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";
              wt(t, {
                parser: function (t, i, n, r, o, s, h) {
                  var u = a.com.greensock.plugins[e];
                  return u
                    ? (u._cssRegister(), l[n].parse(t, i, n, r, o, s, h))
                    : (Y("Error: " + e + " js file not loaded."), o);
                },
              });
            }
          });
        (h = xt.prototype),
          (h.parseComplex = function (t, e, i, n, r, o) {
            var s,
              a,
              l,
              h,
              u,
              c,
              f = this.keyword;
            if (
              (this.multi &&
                (N.test(i) || N.test(e)
                  ? ((a = e.replace(N, "|").split("|")),
                    (l = i.replace(N, "|").split("|")))
                  : f && ((a = [e]), (l = [i]))),
              l)
            ) {
              for (
                h = l.length > a.length ? l.length : a.length, s = 0;
                h > s;
                s++
              )
                (e = a[s] = a[s] || this.dflt),
                  (i = l[s] = l[s] || this.dflt),
                  f &&
                    ((u = e.indexOf(f)),
                    (c = i.indexOf(f)),
                    u !== c &&
                      (-1 === c
                        ? (a[s] = a[s].split(f).join(""))
                        : -1 === u && (a[s] += " " + f)));
              (e = a.join(", ")), (i = l.join(", "));
            }
            return bt(t, this.p, e, i, this.clrs, this.dflt, n, this.pr, r, o);
          }),
          (h.parse = function (t, e, i, n, o, s, a) {
            return this.parseComplex(
              t.style,
              this.format(Z(t, this.p, r, !1, this.dflt)),
              this.format(e),
              o,
              s
            );
          }),
          (s.registerSpecialProp = function (t, e, i) {
            wt(t, {
              parser: function (t, n, r, o, s, a, l) {
                var h = new yt(t, r, 0, 0, s, 2, r, !1, i);
                return (h.plugin = a), (h.setRatio = e(t, n, o._tween, r)), h;
              },
              priority: i,
            });
          }),
          (s.useSVGTransformAttr = f || d);
        var Ct,
          St =
            "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(
              ","
            ),
          At = Q("transform"),
          It = X + "transform",
          Dt = Q("transformOrigin"),
          Pt = null !== Q("perspective"),
          kt = (q.Transform = function () {
            (this.perspective = parseFloat(s.defaultTransformPerspective) || 0),
              (this.force3D =
                !(s.defaultForce3D === !1 || !Pt) &&
                (s.defaultForce3D || "auto"));
          }),
          Ot = window.SVGElement,
          Lt = function (t, e, i) {
            var n,
              r = F.createElementNS("http://www.w3.org/2000/svg", t),
              o = /([a-z])([A-Z])/g;
            for (n in i)
              r.setAttributeNS(null, n.replace(o, "$1-$2").toLowerCase(), i[n]);
            return e.appendChild(r), r;
          },
          Nt = F.documentElement,
          Rt = (function () {
            var t,
              e,
              i,
              n = m || (/Android/i.test(V) && !window.chrome);
            return (
              F.createElementNS &&
                !n &&
                ((t = Lt("svg", Nt)),
                (e = Lt("rect", t, {
                  width: 100,
                  height: 50,
                  x: 100,
                })),
                (i = e.getBoundingClientRect().width),
                (e.style[Dt] = "50% 50%"),
                (e.style[At] = "scaleX(0.5)"),
                (n = i === e.getBoundingClientRect().width && !(d && Pt)),
                Nt.removeChild(t)),
              n
            );
          })(),
          Mt = function (t, e, i, n, r, o) {
            var a,
              l,
              h,
              u,
              c,
              f,
              d,
              p,
              m,
              g,
              v,
              y,
              _,
              b,
              T = t._gsTransform,
              x = Wt(t, !0);
            T && ((_ = T.xOrigin), (b = T.yOrigin)),
              (!n || (a = n.split(" ")).length < 2) &&
                ((d = t.getBBox()),
                (e = st(e).split(" ")),
                (a = [
                  (-1 !== e[0].indexOf("%")
                    ? (parseFloat(e[0]) / 100) * d.width
                    : parseFloat(e[0])) + d.x,
                  (-1 !== e[1].indexOf("%")
                    ? (parseFloat(e[1]) / 100) * d.height
                    : parseFloat(e[1])) + d.y,
                ])),
              (i.xOrigin = u = parseFloat(a[0])),
              (i.yOrigin = c = parseFloat(a[1])),
              n &&
                x !== Ft &&
                ((f = x[0]),
                (d = x[1]),
                (p = x[2]),
                (m = x[3]),
                (g = x[4]),
                (v = x[5]),
                (y = f * m - d * p),
                (l = u * (m / y) + c * (-p / y) + (p * v - m * g) / y),
                (h = u * (-d / y) + c * (f / y) - (f * v - d * g) / y),
                (u = i.xOrigin = a[0] = l),
                (c = i.yOrigin = a[1] = h)),
              T &&
                (o &&
                  ((i.xOffset = T.xOffset), (i.yOffset = T.yOffset), (T = i)),
                r || (r !== !1 && s.defaultSmoothOrigin !== !1)
                  ? ((l = u - _),
                    (h = c - b),
                    (T.xOffset += l * x[0] + h * x[2] - l),
                    (T.yOffset += l * x[1] + h * x[3] - h))
                  : (T.xOffset = T.yOffset = 0)),
              o || t.setAttribute("data-svg-origin", a.join(" "));
          },
          zt = function (t) {
            try {
              return t.getBBox();
            } catch (t) {}
          },
          jt = function (t) {
            return !!(
              Ot &&
              t.getBBox &&
              t.getCTM &&
              zt(t) &&
              (!t.parentNode || (t.parentNode.getBBox && t.parentNode.getCTM))
            );
          },
          Ft = [1, 0, 0, 1, 0, 0],
          Wt = function (t, e) {
            var i,
              n,
              r,
              o,
              s,
              a,
              l = t._gsTransform || new kt(),
              h = 1e5,
              u = t.style;
            if (
              (At
                ? (n = Z(t, It, null, !0))
                : t.currentStyle &&
                  ((n = t.currentStyle.filter.match(O)),
                  (n =
                    n && 4 === n.length
                      ? [
                          n[0].substr(4),
                          Number(n[2].substr(4)),
                          Number(n[1].substr(4)),
                          n[3].substr(4),
                          l.x || 0,
                          l.y || 0,
                        ].join(",")
                      : "")),
              (i = !n || "none" === n || "matrix(1, 0, 0, 1, 0, 0)" === n),
              i &&
                At &&
                ((a = "none" === K(t).display) || !t.parentNode) &&
                (a && ((o = u.display), (u.display = "block")),
                t.parentNode || ((s = 1), Nt.appendChild(t)),
                (n = Z(t, It, null, !0)),
                (i = !n || "none" === n || "matrix(1, 0, 0, 1, 0, 0)" === n),
                o ? (u.display = o) : a && Ut(u, "display"),
                s && Nt.removeChild(t)),
              (l.svg || (t.getBBox && jt(t))) &&
                (i &&
                  -1 !== (u[At] + "").indexOf("matrix") &&
                  ((n = u[At]), (i = 0)),
                (r = t.getAttribute("transform")),
                i &&
                  r &&
                  (-1 !== r.indexOf("matrix")
                    ? ((n = r), (i = 0))
                    : -1 !== r.indexOf("translate") &&
                      ((n =
                        "matrix(1,0,0,1," +
                        r.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",") +
                        ")"),
                      (i = 0)))),
              i)
            )
              return Ft;
            for (r = (n || "").match(y) || [], Tt = r.length; --Tt > -1; )
              (o = Number(r[Tt])),
                (r[Tt] = (s = o - (o |= 0))
                  ? ((s * h + (0 > s ? -0.5 : 0.5)) | 0) / h + o
                  : o);
            return e && r.length > 6
              ? [r[0], r[1], r[4], r[5], r[12], r[13]]
              : r;
          },
          Ht = (q.getTransform = function (t, i, n, r) {
            if (t._gsTransform && n && !r) return t._gsTransform;
            var o,
              a,
              l,
              h,
              u,
              c,
              f = n ? t._gsTransform || new kt() : new kt(),
              d = f.scaleX < 0,
              p = 2e-5,
              m = 1e5,
              g = Pt
                ? parseFloat(Z(t, Dt, i, !1, "0 0 0").split(" ")[2]) ||
                  f.zOrigin ||
                  0
                : 0,
              v = parseFloat(s.defaultTransformPerspective) || 0;
            if (
              ((f.svg = !(!t.getBBox || !jt(t))),
              f.svg &&
                (Mt(
                  t,
                  Z(t, Dt, i, !1, "50% 50%") + "",
                  f,
                  t.getAttribute("data-svg-origin")
                ),
                (Ct = s.useSVGTransformAttr || Rt)),
              (o = Wt(t)),
              o !== Ft)
            ) {
              if (16 === o.length) {
                var y,
                  _,
                  b,
                  T,
                  x,
                  w = o[0],
                  E = o[1],
                  C = o[2],
                  S = o[3],
                  A = o[4],
                  I = o[5],
                  D = o[6],
                  P = o[7],
                  k = o[8],
                  O = o[9],
                  L = o[10],
                  N = o[12],
                  R = o[13],
                  M = o[14],
                  j = o[11],
                  F = Math.atan2(D, L);
                f.zOrigin &&
                  ((M = -f.zOrigin),
                  (N = k * M - o[12]),
                  (R = O * M - o[13]),
                  (M = L * M + f.zOrigin - o[14])),
                  (f.rotationX = F * z),
                  F &&
                    ((T = Math.cos(-F)),
                    (x = Math.sin(-F)),
                    (y = A * T + k * x),
                    (_ = I * T + O * x),
                    (b = D * T + L * x),
                    (k = A * -x + k * T),
                    (O = I * -x + O * T),
                    (L = D * -x + L * T),
                    (j = P * -x + j * T),
                    (A = y),
                    (I = _),
                    (D = b)),
                  (F = Math.atan2(-C, L)),
                  (f.rotationY = F * z),
                  F &&
                    ((T = Math.cos(-F)),
                    (x = Math.sin(-F)),
                    (y = w * T - k * x),
                    (_ = E * T - O * x),
                    (b = C * T - L * x),
                    (O = E * x + O * T),
                    (L = C * x + L * T),
                    (j = S * x + j * T),
                    (w = y),
                    (E = _),
                    (C = b)),
                  (F = Math.atan2(E, w)),
                  (f.rotation = F * z),
                  F &&
                    ((T = Math.cos(-F)),
                    (x = Math.sin(-F)),
                    (w = w * T + A * x),
                    (_ = E * T + I * x),
                    (I = E * -x + I * T),
                    (D = C * -x + D * T),
                    (E = _)),
                  f.rotationX &&
                    Math.abs(f.rotationX) + Math.abs(f.rotation) > 359.9 &&
                    ((f.rotationX = f.rotation = 0),
                    (f.rotationY = 180 - f.rotationY)),
                  (f.scaleX = ((Math.sqrt(w * w + E * E) * m + 0.5) | 0) / m),
                  (f.scaleY = ((Math.sqrt(I * I + O * O) * m + 0.5) | 0) / m),
                  (f.scaleZ = ((Math.sqrt(D * D + L * L) * m + 0.5) | 0) / m),
                  f.rotationX || f.rotationY
                    ? (f.skewX = 0)
                    : ((f.skewX =
                        A || I
                          ? Math.atan2(A, I) * z + f.rotation
                          : f.skewX || 0),
                      Math.abs(f.skewX) > 90 &&
                        Math.abs(f.skewX) < 270 &&
                        (d
                          ? ((f.scaleX *= -1),
                            (f.skewX += f.rotation <= 0 ? 180 : -180),
                            (f.rotation += f.rotation <= 0 ? 180 : -180))
                          : ((f.scaleY *= -1),
                            (f.skewX += f.skewX <= 0 ? 180 : -180)))),
                  (f.perspective = j ? 1 / (0 > j ? -j : j) : 0),
                  (f.x = N),
                  (f.y = R),
                  (f.z = M),
                  f.svg &&
                    ((f.x -= f.xOrigin - (f.xOrigin * w - f.yOrigin * A)),
                    (f.y -= f.yOrigin - (f.yOrigin * E - f.xOrigin * I)));
              } else if (
                !Pt ||
                r ||
                !o.length ||
                f.x !== o[4] ||
                f.y !== o[5] ||
                (!f.rotationX && !f.rotationY)
              ) {
                var W = o.length >= 6,
                  H = W ? o[0] : 1,
                  B = o[1] || 0,
                  q = o[2] || 0,
                  V = W ? o[3] : 1;
                (f.x = o[4] || 0),
                  (f.y = o[5] || 0),
                  (l = Math.sqrt(H * H + B * B)),
                  (h = Math.sqrt(V * V + q * q)),
                  (u = H || B ? Math.atan2(B, H) * z : f.rotation || 0),
                  (c = q || V ? Math.atan2(q, V) * z + u : f.skewX || 0),
                  Math.abs(c) > 90 &&
                    Math.abs(c) < 270 &&
                    (d
                      ? ((l *= -1),
                        (c += 0 >= u ? 180 : -180),
                        (u += 0 >= u ? 180 : -180))
                      : ((h *= -1), (c += 0 >= c ? 180 : -180))),
                  (f.scaleX = l),
                  (f.scaleY = h),
                  (f.rotation = u),
                  (f.skewX = c),
                  Pt &&
                    ((f.rotationX = f.rotationY = f.z = 0),
                    (f.perspective = v),
                    (f.scaleZ = 1)),
                  f.svg &&
                    ((f.x -= f.xOrigin - (f.xOrigin * H + f.yOrigin * q)),
                    (f.y -= f.yOrigin - (f.xOrigin * B + f.yOrigin * V)));
              }
              f.zOrigin = g;
              for (a in f) f[a] < p && f[a] > -p && (f[a] = 0);
            }
            return (
              n &&
                ((t._gsTransform = f),
                f.svg &&
                  (Ct && t.style[At]
                    ? e.delayedCall(0.001, function () {
                        Ut(t.style, At);
                      })
                    : !Ct &&
                      t.getAttribute("transform") &&
                      e.delayedCall(0.001, function () {
                        t.removeAttribute("transform");
                      }))),
              f
            );
          }),
          Bt = function (t) {
            var e,
              i,
              n = this.data,
              r = -n.rotation * M,
              o = r + n.skewX * M,
              s = 1e5,
              a = ((Math.cos(r) * n.scaleX * s) | 0) / s,
              l = ((Math.sin(r) * n.scaleX * s) | 0) / s,
              h = ((Math.sin(o) * -n.scaleY * s) | 0) / s,
              u = ((Math.cos(o) * n.scaleY * s) | 0) / s,
              c = this.t.style,
              f = this.t.currentStyle;
            if (f) {
              (i = l), (l = -h), (h = -i), (e = f.filter), (c.filter = "");
              var d,
                p,
                g = this.t.offsetWidth,
                v = this.t.offsetHeight,
                y = "absolute" !== f.position,
                _ =
                  "progid:DXImageTransform.Microsoft.Matrix(M11=" +
                  a +
                  ", M12=" +
                  l +
                  ", M21=" +
                  h +
                  ", M22=" +
                  u,
                b = n.x + (g * n.xPercent) / 100,
                T = n.y + (v * n.yPercent) / 100;
              if (
                (null != n.ox &&
                  ((d = (n.oxp ? g * n.ox * 0.01 : n.ox) - g / 2),
                  (p = (n.oyp ? v * n.oy * 0.01 : n.oy) - v / 2),
                  (b += d - (d * a + p * l)),
                  (T += p - (d * h + p * u))),
                y
                  ? ((d = g / 2),
                    (p = v / 2),
                    (_ +=
                      ", Dx=" +
                      (d - (d * a + p * l) + b) +
                      ", Dy=" +
                      (p - (d * h + p * u) + T) +
                      ")"))
                  : (_ += ", sizingMethod='auto expand')"),
                -1 !== e.indexOf("DXImageTransform.Microsoft.Matrix(")
                  ? (c.filter = e.replace(L, _))
                  : (c.filter = _ + " " + e),
                (0 === t || 1 === t) &&
                  1 === a &&
                  0 === l &&
                  0 === h &&
                  1 === u &&
                  ((y && -1 === _.indexOf("Dx=0, Dy=0")) ||
                    (w.test(e) && 100 !== parseFloat(RegExp.$1)) ||
                    (-1 === e.indexOf(e.indexOf("Alpha")) &&
                      c.removeAttribute("filter"))),
                !y)
              ) {
                var E,
                  C,
                  S,
                  A = 8 > m ? 1 : -1;
                for (
                  d = n.ieOffsetX || 0,
                    p = n.ieOffsetY || 0,
                    n.ieOffsetX = Math.round(
                      (g - ((0 > a ? -a : a) * g + (0 > l ? -l : l) * v)) / 2 +
                        b
                    ),
                    n.ieOffsetY = Math.round(
                      (v - ((0 > u ? -u : u) * v + (0 > h ? -h : h) * g)) / 2 +
                        T
                    ),
                    Tt = 0;
                  4 > Tt;
                  Tt++
                )
                  (C = rt[Tt]),
                    (E = f[C]),
                    (i =
                      -1 !== E.indexOf("px")
                        ? parseFloat(E)
                        : J(this.t, C, parseFloat(E), E.replace(x, "")) || 0),
                    (S =
                      i !== n[C]
                        ? 2 > Tt
                          ? -n.ieOffsetX
                          : -n.ieOffsetY
                        : 2 > Tt
                        ? d - n.ieOffsetX
                        : p - n.ieOffsetY),
                    (c[C] =
                      (n[C] = Math.round(
                        i - S * (0 === Tt || 2 === Tt ? 1 : A)
                      )) + "px");
              }
            }
          },
          qt =
            (q.set3DTransformRatio =
            q.setTransformRatio =
              function (t) {
                var e,
                  i,
                  n,
                  r,
                  o,
                  s,
                  a,
                  l,
                  h,
                  u,
                  c,
                  f,
                  p,
                  m,
                  g,
                  v,
                  y,
                  _,
                  b,
                  T,
                  x,
                  w,
                  E,
                  C = this.data,
                  S = this.t.style,
                  A = C.rotation,
                  I = C.rotationX,
                  D = C.rotationY,
                  P = C.scaleX,
                  k = C.scaleY,
                  O = C.scaleZ,
                  L = C.x,
                  N = C.y,
                  R = C.z,
                  z = C.svg,
                  j = C.perspective,
                  F = C.force3D;
                if (
                  ((((1 === t || 0 === t) &&
                    "auto" === F &&
                    (this.tween._totalTime === this.tween._totalDuration ||
                      !this.tween._totalTime)) ||
                    !F) &&
                    !R &&
                    !j &&
                    !D &&
                    !I &&
                    1 === O) ||
                  (Ct && z) ||
                  !Pt
                )
                  return void (A || C.skewX || z
                    ? ((A *= M),
                      (w = C.skewX * M),
                      (E = 1e5),
                      (e = Math.cos(A) * P),
                      (r = Math.sin(A) * P),
                      (i = Math.sin(A - w) * -k),
                      (o = Math.cos(A - w) * k),
                      w &&
                        "simple" === C.skewType &&
                        ((y = Math.tan(w - C.skewY * M)),
                        (y = Math.sqrt(1 + y * y)),
                        (i *= y),
                        (o *= y),
                        C.skewY &&
                          ((y = Math.tan(C.skewY * M)),
                          (y = Math.sqrt(1 + y * y)),
                          (e *= y),
                          (r *= y))),
                      z &&
                        ((L +=
                          C.xOrigin -
                          (C.xOrigin * e + C.yOrigin * i) +
                          C.xOffset),
                        (N +=
                          C.yOrigin -
                          (C.xOrigin * r + C.yOrigin * o) +
                          C.yOffset),
                        Ct &&
                          (C.xPercent || C.yPercent) &&
                          ((m = this.t.getBBox()),
                          (L += 0.01 * C.xPercent * m.width),
                          (N += 0.01 * C.yPercent * m.height)),
                        (m = 1e-6),
                        m > L && L > -m && (L = 0),
                        m > N && N > -m && (N = 0)),
                      (b =
                        ((e * E) | 0) / E +
                        "," +
                        ((r * E) | 0) / E +
                        "," +
                        ((i * E) | 0) / E +
                        "," +
                        ((o * E) | 0) / E +
                        "," +
                        L +
                        "," +
                        N +
                        ")"),
                      z && Ct
                        ? this.t.setAttribute("transform", "matrix(" + b)
                        : (S[At] =
                            (C.xPercent || C.yPercent
                              ? "translate(" +
                                C.xPercent +
                                "%," +
                                C.yPercent +
                                "%) matrix("
                              : "matrix(") + b))
                    : (S[At] =
                        (C.xPercent || C.yPercent
                          ? "translate(" +
                            C.xPercent +
                            "%," +
                            C.yPercent +
                            "%) matrix("
                          : "matrix(") +
                        P +
                        ",0,0," +
                        k +
                        "," +
                        L +
                        "," +
                        N +
                        ")"));
                if (
                  (d &&
                    ((m = 1e-4),
                    m > P && P > -m && (P = O = 2e-5),
                    m > k && k > -m && (k = O = 2e-5),
                    !j || C.z || C.rotationX || C.rotationY || (j = 0)),
                  A || C.skewX)
                )
                  (A *= M),
                    (g = e = Math.cos(A)),
                    (v = r = Math.sin(A)),
                    C.skewX &&
                      ((A -= C.skewX * M),
                      (g = Math.cos(A)),
                      (v = Math.sin(A)),
                      "simple" === C.skewType &&
                        ((y = Math.tan((C.skewX - C.skewY) * M)),
                        (y = Math.sqrt(1 + y * y)),
                        (g *= y),
                        (v *= y),
                        C.skewY &&
                          ((y = Math.tan(C.skewY * M)),
                          (y = Math.sqrt(1 + y * y)),
                          (e *= y),
                          (r *= y)))),
                    (i = -v),
                    (o = g);
                else {
                  if (!(D || I || 1 !== O || j || z))
                    return void (S[At] =
                      (C.xPercent || C.yPercent
                        ? "translate(" +
                          C.xPercent +
                          "%," +
                          C.yPercent +
                          "%) translate3d("
                        : "translate3d(") +
                      L +
                      "px," +
                      N +
                      "px," +
                      R +
                      "px)" +
                      (1 !== P || 1 !== k
                        ? " scale(" + P + "," + k + ")"
                        : ""));
                  (e = o = 1), (i = r = 0);
                }
                (h = 1),
                  (n = s = a = l = u = c = 0),
                  (f = j ? -1 / j : 0),
                  (p = C.zOrigin),
                  (m = 1e-6),
                  (T = ","),
                  (x = "0"),
                  (A = D * M),
                  A &&
                    ((g = Math.cos(A)),
                    (v = Math.sin(A)),
                    (a = -v),
                    (u = f * -v),
                    (n = e * v),
                    (s = r * v),
                    (h = g),
                    (f *= g),
                    (e *= g),
                    (r *= g)),
                  (A = I * M),
                  A &&
                    ((g = Math.cos(A)),
                    (v = Math.sin(A)),
                    (y = i * g + n * v),
                    (_ = o * g + s * v),
                    (l = h * v),
                    (c = f * v),
                    (n = i * -v + n * g),
                    (s = o * -v + s * g),
                    (h *= g),
                    (f *= g),
                    (i = y),
                    (o = _)),
                  1 !== O && ((n *= O), (s *= O), (h *= O), (f *= O)),
                  1 !== k && ((i *= k), (o *= k), (l *= k), (c *= k)),
                  1 !== P && ((e *= P), (r *= P), (a *= P), (u *= P)),
                  (p || z) &&
                    (p && ((L += n * -p), (N += s * -p), (R += h * -p + p)),
                    z &&
                      ((L +=
                        C.xOrigin -
                        (C.xOrigin * e + C.yOrigin * i) +
                        C.xOffset),
                      (N +=
                        C.yOrigin -
                        (C.xOrigin * r + C.yOrigin * o) +
                        C.yOffset)),
                    m > L && L > -m && (L = x),
                    m > N && N > -m && (N = x),
                    m > R && R > -m && (R = 0)),
                  (b =
                    C.xPercent || C.yPercent
                      ? "translate(" +
                        C.xPercent +
                        "%," +
                        C.yPercent +
                        "%) matrix3d("
                      : "matrix3d("),
                  (b +=
                    (m > e && e > -m ? x : e) +
                    T +
                    (m > r && r > -m ? x : r) +
                    T +
                    (m > a && a > -m ? x : a)),
                  (b +=
                    T +
                    (m > u && u > -m ? x : u) +
                    T +
                    (m > i && i > -m ? x : i) +
                    T +
                    (m > o && o > -m ? x : o)),
                  I || D || 1 !== O
                    ? ((b +=
                        T +
                        (m > l && l > -m ? x : l) +
                        T +
                        (m > c && c > -m ? x : c) +
                        T +
                        (m > n && n > -m ? x : n)),
                      (b +=
                        T +
                        (m > s && s > -m ? x : s) +
                        T +
                        (m > h && h > -m ? x : h) +
                        T +
                        (m > f && f > -m ? x : f) +
                        T))
                    : (b += ",0,0,0,0,1,0,"),
                  (b += L + T + N + T + R + T + (j ? 1 + -R / j : 1) + ")"),
                  (S[At] = b);
              });
        (h = kt.prototype),
          (h.x =
            h.y =
            h.z =
            h.skewX =
            h.skewY =
            h.rotation =
            h.rotationX =
            h.rotationY =
            h.zOrigin =
            h.xPercent =
            h.yPercent =
            h.xOffset =
            h.yOffset =
              0),
          (h.scaleX = h.scaleY = h.scaleZ = 1),
          wt(
            "transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin",
            {
              parser: function (t, e, i, n, o, a, l) {
                if (n._lastParsedTransform === l) return o;
                n._lastParsedTransform = l;
                var h;
                "function" == typeof l[i] && ((h = l[i]), (l[i] = e));
                var u,
                  c,
                  f,
                  d,
                  p,
                  m,
                  y,
                  _,
                  b,
                  T = t._gsTransform,
                  x = t.style,
                  w = 1e-6,
                  E = St.length,
                  C = l,
                  S = {},
                  A = "transformOrigin",
                  I = Ht(t, r, !0, C.parseTransform),
                  D =
                    C.transform &&
                    ("function" == typeof C.transform
                      ? C.transform(v, g)
                      : C.transform);
                if (((n._transform = I), D && "string" == typeof D && At))
                  (c = H.style),
                    (c[At] = D),
                    (c.display = "block"),
                    (c.position = "absolute"),
                    F.body.appendChild(H),
                    (u = Ht(H, null, !1)),
                    I.svg &&
                      ((m = I.xOrigin),
                      (y = I.yOrigin),
                      (u.x -= I.xOffset),
                      (u.y -= I.yOffset),
                      (C.transformOrigin || C.svgOrigin) &&
                        ((D = {}),
                        Mt(
                          t,
                          st(C.transformOrigin),
                          D,
                          C.svgOrigin,
                          C.smoothOrigin,
                          !0
                        ),
                        (m = D.xOrigin),
                        (y = D.yOrigin),
                        (u.x -= D.xOffset - I.xOffset),
                        (u.y -= D.yOffset - I.yOffset)),
                      (m || y) &&
                        ((_ = Wt(H, !0)),
                        (u.x -= m - (m * _[0] + y * _[2])),
                        (u.y -= y - (m * _[1] + y * _[3])))),
                    F.body.removeChild(H),
                    u.perspective || (u.perspective = I.perspective),
                    null != C.xPercent &&
                      (u.xPercent = lt(C.xPercent, I.xPercent)),
                    null != C.yPercent &&
                      (u.yPercent = lt(C.yPercent, I.yPercent));
                else if ("object" == typeof C) {
                  if (
                    ((u = {
                      scaleX: lt(
                        null != C.scaleX ? C.scaleX : C.scale,
                        I.scaleX
                      ),
                      scaleY: lt(
                        null != C.scaleY ? C.scaleY : C.scale,
                        I.scaleY
                      ),
                      scaleZ: lt(C.scaleZ, I.scaleZ),
                      x: lt(C.x, I.x),
                      y: lt(C.y, I.y),
                      z: lt(C.z, I.z),
                      xPercent: lt(C.xPercent, I.xPercent),
                      yPercent: lt(C.yPercent, I.yPercent),
                      perspective: lt(C.transformPerspective, I.perspective),
                    }),
                    (p = C.directionalRotation),
                    null != p)
                  )
                    if ("object" == typeof p) for (c in p) C[c] = p[c];
                    else C.rotation = p;
                  "string" == typeof C.x &&
                    -1 !== C.x.indexOf("%") &&
                    ((u.x = 0), (u.xPercent = lt(C.x, I.xPercent))),
                    "string" == typeof C.y &&
                      -1 !== C.y.indexOf("%") &&
                      ((u.y = 0), (u.yPercent = lt(C.y, I.yPercent))),
                    (u.rotation = ht(
                      "rotation" in C
                        ? C.rotation
                        : "shortRotation" in C
                        ? C.shortRotation + "_short"
                        : "rotationZ" in C
                        ? C.rotationZ
                        : I.rotation - I.skewY,
                      I.rotation - I.skewY,
                      "rotation",
                      S
                    )),
                    Pt &&
                      ((u.rotationX = ht(
                        "rotationX" in C
                          ? C.rotationX
                          : "shortRotationX" in C
                          ? C.shortRotationX + "_short"
                          : I.rotationX || 0,
                        I.rotationX,
                        "rotationX",
                        S
                      )),
                      (u.rotationY = ht(
                        "rotationY" in C
                          ? C.rotationY
                          : "shortRotationY" in C
                          ? C.shortRotationY + "_short"
                          : I.rotationY || 0,
                        I.rotationY,
                        "rotationY",
                        S
                      ))),
                    (u.skewX = ht(C.skewX, I.skewX - I.skewY)),
                    (u.skewY = ht(C.skewY, I.skewY)) &&
                      ((u.skewX += u.skewY), (u.rotation += u.skewY));
                }
                for (
                  Pt &&
                    null != C.force3D &&
                    ((I.force3D = C.force3D), (d = !0)),
                    I.skewType = C.skewType || I.skewType || s.defaultSkewType,
                    f =
                      I.force3D ||
                      I.z ||
                      I.rotationX ||
                      I.rotationY ||
                      u.z ||
                      u.rotationX ||
                      u.rotationY ||
                      u.perspective,
                    f || null == C.scale || (u.scaleZ = 1);
                  --E > -1;

                )
                  (b = St[E]),
                    (D = u[b] - I[b]),
                    (D > w || -w > D || null != C[b] || null != j[b]) &&
                      ((d = !0),
                      (o = new yt(I, b, I[b], D, o)),
                      b in S && (o.e = S[b]),
                      (o.xs0 = 0),
                      (o.plugin = a),
                      n._overwriteProps.push(o.n));
                return (
                  (D = C.transformOrigin),
                  I.svg &&
                    (D || C.svgOrigin) &&
                    ((m = I.xOffset),
                    (y = I.yOffset),
                    Mt(t, st(D), u, C.svgOrigin, C.smoothOrigin),
                    (o = _t(
                      I,
                      "xOrigin",
                      (T ? I : u).xOrigin,
                      u.xOrigin,
                      o,
                      A
                    )),
                    (o = _t(
                      I,
                      "yOrigin",
                      (T ? I : u).yOrigin,
                      u.yOrigin,
                      o,
                      A
                    )),
                    (m !== I.xOffset || y !== I.yOffset) &&
                      ((o = _t(
                        I,
                        "xOffset",
                        T ? m : I.xOffset,
                        I.xOffset,
                        o,
                        A
                      )),
                      (o = _t(
                        I,
                        "yOffset",
                        T ? y : I.yOffset,
                        I.yOffset,
                        o,
                        A
                      ))),
                    (D = Ct ? null : "0px 0px")),
                  (D || (Pt && f && I.zOrigin)) &&
                    (At
                      ? ((d = !0),
                        (b = Dt),
                        (D = (D || Z(t, b, r, !1, "50% 50%")) + ""),
                        (o = new yt(x, b, 0, 0, o, -1, A)),
                        (o.b = x[b]),
                        (o.plugin = a),
                        Pt
                          ? ((c = I.zOrigin),
                            (D = D.split(" ")),
                            (I.zOrigin =
                              (D.length > 2 && (0 === c || "0px" !== D[2])
                                ? parseFloat(D[2])
                                : c) || 0),
                            (o.xs0 = o.e =
                              D[0] + " " + (D[1] || "50%") + " 0px"),
                            (o = new yt(I, "zOrigin", 0, 0, o, -1, o.n)),
                            (o.b = c),
                            (o.xs0 = o.e = I.zOrigin))
                          : (o.xs0 = o.e = D))
                      : st(D + "", I)),
                  d &&
                    (n._transformType =
                      (I.svg && Ct) || (!f && 3 !== this._transformType)
                        ? 2
                        : 3),
                  h && (l[i] = h),
                  o
                );
              },
              prefix: !0,
            }
          ),
          wt("boxShadow", {
            defaultValue: "0px 0px 0px 0px #999",
            prefix: !0,
            color: !0,
            multi: !0,
            keyword: "inset",
          }),
          wt("borderRadius", {
            defaultValue: "0px",
            parser: function (t, e, i, o, s, a) {
              e = this.format(e);
              var l,
                h,
                u,
                c,
                f,
                d,
                p,
                m,
                g,
                v,
                y,
                _,
                b,
                T,
                x,
                w,
                E = [
                  "borderTopLeftRadius",
                  "borderTopRightRadius",
                  "borderBottomRightRadius",
                  "borderBottomLeftRadius",
                ],
                C = t.style;
              for (
                g = parseFloat(t.offsetWidth),
                  v = parseFloat(t.offsetHeight),
                  l = e.split(" "),
                  h = 0;
                h < E.length;
                h++
              )
                this.p.indexOf("border") && (E[h] = Q(E[h])),
                  (f = c = Z(t, E[h], r, !1, "0px")),
                  -1 !== f.indexOf(" ") &&
                    ((c = f.split(" ")), (f = c[0]), (c = c[1])),
                  (d = u = l[h]),
                  (p = parseFloat(f)),
                  (_ = f.substr((p + "").length)),
                  (b = "=" === d.charAt(1)),
                  b
                    ? ((m = parseInt(d.charAt(0) + "1", 10)),
                      (d = d.substr(2)),
                      (m *= parseFloat(d)),
                      (y = d.substr((m + "").length - (0 > m ? 1 : 0)) || ""))
                    : ((m = parseFloat(d)), (y = d.substr((m + "").length))),
                  "" === y && (y = n[i] || _),
                  y !== _ &&
                    ((T = J(t, "borderLeft", p, _)),
                    (x = J(t, "borderTop", p, _)),
                    "%" === y
                      ? ((f = (T / g) * 100 + "%"), (c = (x / v) * 100 + "%"))
                      : "em" === y
                      ? ((w = J(t, "borderLeft", 1, "em")),
                        (f = T / w + "em"),
                        (c = x / w + "em"))
                      : ((f = T + "px"), (c = x + "px")),
                    b &&
                      ((d = parseFloat(f) + m + y),
                      (u = parseFloat(c) + m + y))),
                  (s = bt(C, E[h], f + " " + c, d + " " + u, !1, "0px", s));
              return s;
            },
            prefix: !0,
            formatter: mt("0px 0px 0px 0px", !1, !0),
          }),
          wt(
            "borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius",
            {
              defaultValue: "0px",
              parser: function (t, e, i, n, o, s) {
                return bt(
                  t.style,
                  i,
                  this.format(Z(t, i, r, !1, "0px 0px")),
                  this.format(e),
                  !1,
                  "0px",
                  o
                );
              },
              prefix: !0,
              formatter: mt("0px 0px", !1, !0),
            }
          ),
          wt("backgroundPosition", {
            defaultValue: "0 0",
            parser: function (t, e, i, n, o, s) {
              var a,
                l,
                h,
                u,
                c,
                f,
                d = "background-position",
                p = r || K(t, null),
                g = this.format(
                  (p
                    ? m
                      ? p.getPropertyValue(d + "-x") +
                        " " +
                        p.getPropertyValue(d + "-y")
                      : p.getPropertyValue(d)
                    : t.currentStyle.backgroundPositionX +
                      " " +
                      t.currentStyle.backgroundPositionY) || "0 0"
                ),
                v = this.format(e);
              if (
                (-1 !== g.indexOf("%")) != (-1 !== v.indexOf("%")) &&
                v.split(",").length < 2 &&
                ((f = Z(t, "backgroundImage").replace(D, "")),
                f && "none" !== f)
              ) {
                for (
                  a = g.split(" "),
                    l = v.split(" "),
                    B.setAttribute("src", f),
                    h = 2;
                  --h > -1;

                )
                  (g = a[h]),
                    (u = -1 !== g.indexOf("%")),
                    u !== (-1 !== l[h].indexOf("%")) &&
                      ((c =
                        0 === h
                          ? t.offsetWidth - B.width
                          : t.offsetHeight - B.height),
                      (a[h] = u
                        ? (parseFloat(g) / 100) * c + "px"
                        : (parseFloat(g) / c) * 100 + "%"));
                g = a.join(" ");
              }
              return this.parseComplex(t.style, g, v, o, s);
            },
            formatter: st,
          }),
          wt("backgroundSize", {
            defaultValue: "0 0",
            formatter: function (t) {
              return (t += ""), st(-1 === t.indexOf(" ") ? t + " " + t : t);
            },
          }),
          wt("perspective", {
            defaultValue: "0px",
            prefix: !0,
          }),
          wt("perspectiveOrigin", {
            defaultValue: "50% 50%",
            prefix: !0,
          }),
          wt("transformStyle", {
            prefix: !0,
          }),
          wt("backfaceVisibility", {
            prefix: !0,
          }),
          wt("userSelect", {
            prefix: !0,
          }),
          wt("margin", {
            parser: gt("marginTop,marginRight,marginBottom,marginLeft"),
          }),
          wt("padding", {
            parser: gt("paddingTop,paddingRight,paddingBottom,paddingLeft"),
          }),
          wt("clip", {
            defaultValue: "rect(0px,0px,0px,0px)",
            parser: function (t, e, i, n, o, s) {
              var a, l, h;
              return (
                9 > m
                  ? ((l = t.currentStyle),
                    (h = 8 > m ? " " : ","),
                    (a =
                      "rect(" +
                      l.clipTop +
                      h +
                      l.clipRight +
                      h +
                      l.clipBottom +
                      h +
                      l.clipLeft +
                      ")"),
                    (e = this.format(e).split(",").join(h)))
                  : ((a = this.format(Z(t, this.p, r, !1, this.dflt))),
                    (e = this.format(e))),
                this.parseComplex(t.style, a, e, o, s)
              );
            },
          }),
          wt("textShadow", {
            defaultValue: "0px 0px 0px #999",
            color: !0,
            multi: !0,
          }),
          wt("autoRound,strictUnits", {
            parser: function (t, e, i, n, r) {
              return r;
            },
          }),
          wt("border", {
            defaultValue: "0px solid #000",
            parser: function (t, e, i, n, o, s) {
              var a = Z(t, "borderTopWidth", r, !1, "0px"),
                l = this.format(e).split(" "),
                h = l[0].replace(x, "");
              return (
                "px" !== h &&
                  (a = parseFloat(a) / J(t, "borderTopWidth", 1, h) + h),
                this.parseComplex(
                  t.style,
                  this.format(
                    a +
                      " " +
                      Z(t, "borderTopStyle", r, !1, "solid") +
                      " " +
                      Z(t, "borderTopColor", r, !1, "#000")
                  ),
                  l.join(" "),
                  o,
                  s
                )
              );
            },
            color: !0,
            formatter: function (t) {
              var e = t.split(" ");
              return (
                e[0] +
                " " +
                (e[1] || "solid") +
                " " +
                (t.match(pt) || ["#000"])[0]
              );
            },
          }),
          wt("borderWidth", {
            parser: gt(
              "borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth"
            ),
          }),
          wt("float,cssFloat,styleFloat", {
            parser: function (t, e, i, n, r, o) {
              var s = t.style,
                a = "cssFloat" in s ? "cssFloat" : "styleFloat";
              return new yt(s, a, 0, 0, r, -1, i, !1, 0, s[a], e);
            },
          });
        var Vt = function (t) {
          var e,
            i = this.t,
            n = i.filter || Z(this.data, "filter") || "",
            r = (this.s + this.c * t) | 0;
          100 === r &&
            (-1 === n.indexOf("atrix(") &&
            -1 === n.indexOf("radient(") &&
            -1 === n.indexOf("oader(")
              ? (i.removeAttribute("filter"), (e = !Z(this.data, "filter")))
              : ((i.filter = n.replace(C, "")), (e = !0))),
            e ||
              (this.xn1 && (i.filter = n = n || "alpha(opacity=" + r + ")"),
              -1 === n.indexOf("pacity")
                ? (0 === r && this.xn1) ||
                  (i.filter = n + " alpha(opacity=" + r + ")")
                : (i.filter = n.replace(w, "opacity=" + r)));
        };
        wt("opacity,alpha,autoAlpha", {
          defaultValue: "1",
          parser: function (t, e, i, n, o, s) {
            var a = parseFloat(Z(t, "opacity", r, !1, "1")),
              l = t.style,
              h = "autoAlpha" === i;
            return (
              "string" == typeof e &&
                "=" === e.charAt(1) &&
                (e =
                  ("-" === e.charAt(0) ? -1 : 1) * parseFloat(e.substr(2)) + a),
              h &&
                1 === a &&
                "hidden" === Z(t, "visibility", r) &&
                0 !== e &&
                (a = 0),
              U
                ? (o = new yt(l, "opacity", a, e - a, o))
                : ((o = new yt(l, "opacity", 100 * a, 100 * (e - a), o)),
                  (o.xn1 = h ? 1 : 0),
                  (l.zoom = 1),
                  (o.type = 2),
                  (o.b = "alpha(opacity=" + o.s + ")"),
                  (o.e = "alpha(opacity=" + (o.s + o.c) + ")"),
                  (o.data = t),
                  (o.plugin = s),
                  (o.setRatio = Vt)),
              h &&
                ((o = new yt(
                  l,
                  "visibility",
                  0,
                  0,
                  o,
                  -1,
                  null,
                  !1,
                  0,
                  0 !== a ? "inherit" : "hidden",
                  0 === e ? "hidden" : "inherit"
                )),
                (o.xs0 = "inherit"),
                n._overwriteProps.push(o.n),
                n._overwriteProps.push(i)),
              o
            );
          },
        });
        var Ut = function (t, e) {
            e &&
              (t.removeProperty
                ? (("ms" === e.substr(0, 2) || "webkit" === e.substr(0, 6)) &&
                    (e = "-" + e),
                  t.removeProperty(e.replace(A, "-$1").toLowerCase()))
                : t.removeAttribute(e));
          },
          $t = function (t) {
            if (((this.t._gsClassPT = this), 1 === t || 0 === t)) {
              this.t.setAttribute("class", 0 === t ? this.b : this.e);
              for (var e = this.data, i = this.t.style; e; )
                e.v ? (i[e.p] = e.v) : Ut(i, e.p), (e = e._next);
              1 === t &&
                this.t._gsClassPT === this &&
                (this.t._gsClassPT = null);
            } else
              this.t.getAttribute("class") !== this.e &&
                this.t.setAttribute("class", this.e);
          };
        wt("className", {
          parser: function (t, e, n, o, s, a, l) {
            var h,
              u,
              c,
              f,
              d,
              p = t.getAttribute("class") || "",
              m = t.style.cssText;
            if (
              ((s = o._classNamePT = new yt(t, n, 0, 0, s, 2)),
              (s.setRatio = $t),
              (s.pr = -11),
              (i = !0),
              (s.b = p),
              (u = et(t, r)),
              (c = t._gsClassPT))
            ) {
              for (f = {}, d = c.data; d; ) (f[d.p] = 1), (d = d._next);
              c.setRatio(1);
            }
            return (
              (t._gsClassPT = s),
              (s.e =
                "=" !== e.charAt(1)
                  ? e
                  : p.replace(
                      new RegExp("(?:\\s|^)" + e.substr(2) + "(?![\\w-])"),
                      ""
                    ) + ("+" === e.charAt(0) ? " " + e.substr(2) : "")),
              t.setAttribute("class", s.e),
              (h = it(t, u, et(t), l, f)),
              t.setAttribute("class", p),
              (s.data = h.firstMPT),
              (t.style.cssText = m),
              (s = s.xfirst = o.parse(t, h.difs, s, a))
            );
          },
        });
        var Yt = function (t) {
          if (
            (1 === t || 0 === t) &&
            this.data._totalTime === this.data._totalDuration &&
            "isFromStart" !== this.data.data
          ) {
            var e,
              i,
              n,
              r,
              o,
              s = this.t.style,
              a = l.transform.parse;
            if ("all" === this.e) (s.cssText = ""), (r = !0);
            else
              for (
                e = this.e.split(" ").join("").split(","), n = e.length;
                --n > -1;

              )
                (i = e[n]),
                  l[i] &&
                    (l[i].parse === a
                      ? (r = !0)
                      : (i = "transformOrigin" === i ? Dt : l[i].p)),
                  Ut(s, i);
            r &&
              (Ut(s, At),
              (o = this.t._gsTransform),
              o &&
                (o.svg &&
                  (this.t.removeAttribute("data-svg-origin"),
                  this.t.removeAttribute("transform")),
                delete this.t._gsTransform));
          }
        };
        for (
          wt("clearProps", {
            parser: function (t, e, n, r, o) {
              return (
                (o = new yt(t, n, 0, 0, o, 2)),
                (o.setRatio = Yt),
                (o.e = e),
                (o.pr = -10),
                (o.data = r._tween),
                (i = !0),
                o
              );
            },
          }),
            h = "bezier,throwProps,physicsProps,physics2D".split(","),
            Tt = h.length;
          Tt--;

        )
          Et(h[Tt]);
        (h = s.prototype),
          (h._firstPT = h._lastParsedTransform = h._transform = null),
          (h._onInitTween = function (t, e, a, h) {
            if (!t.nodeType) return !1;
            (this._target = g = t),
              (this._tween = a),
              (this._vars = e),
              (v = h),
              (u = e.autoRound),
              (i = !1),
              (n = e.suffixMap || s.suffixMap),
              (r = K(t, "")),
              (o = this._overwriteProps);
            var d,
              m,
              y,
              _,
              b,
              T,
              x,
              w,
              C,
              S = t.style;
            if (
              (c &&
                "" === S.zIndex &&
                ((d = Z(t, "zIndex", r)),
                ("auto" === d || "" === d) && this._addLazySet(S, "zIndex", 0)),
              "string" == typeof e &&
                ((_ = S.cssText),
                (d = et(t, r)),
                (S.cssText = _ + ";" + e),
                (d = it(t, d, et(t)).difs),
                !U && E.test(e) && (d.opacity = parseFloat(RegExp.$1)),
                (e = d),
                (S.cssText = _)),
              e.className
                ? (this._firstPT = m =
                    l.className.parse(
                      t,
                      e.className,
                      "className",
                      this,
                      null,
                      null,
                      e
                    ))
                : (this._firstPT = m = this.parse(t, e, null)),
              this._transformType)
            ) {
              for (
                C = 3 === this._transformType,
                  At
                    ? f &&
                      ((c = !0),
                      "" === S.zIndex &&
                        ((x = Z(t, "zIndex", r)),
                        ("auto" === x || "" === x) &&
                          this._addLazySet(S, "zIndex", 0)),
                      p &&
                        this._addLazySet(
                          S,
                          "WebkitBackfaceVisibility",
                          this._vars.WebkitBackfaceVisibility ||
                            (C ? "visible" : "hidden")
                        ))
                    : (S.zoom = 1),
                  y = m;
                y && y._next;

              )
                y = y._next;
              (w = new yt(t, "transform", 0, 0, null, 2)),
                this._linkCSSP(w, null, y),
                (w.setRatio = At ? qt : Bt),
                (w.data = this._transform || Ht(t, r, !0)),
                (w.tween = a),
                (w.pr = -1),
                o.pop();
            }
            if (i) {
              for (; m; ) {
                for (T = m._next, y = _; y && y.pr > m.pr; ) y = y._next;
                (m._prev = y ? y._prev : b) ? (m._prev._next = m) : (_ = m),
                  (m._next = y) ? (y._prev = m) : (b = m),
                  (m = T);
              }
              this._firstPT = _;
            }
            return !0;
          }),
          (h.parse = function (t, e, i, o) {
            var s,
              a,
              h,
              c,
              f,
              d,
              p,
              m,
              y,
              _,
              b = t.style;
            for (s in e)
              (d = e[s]),
                "function" == typeof d && (d = d(v, g)),
                (a = l[s]),
                a
                  ? (i = a.parse(t, d, s, this, i, o, e))
                  : ((f = Z(t, s, r) + ""),
                    (y = "string" == typeof d),
                    "color" === s ||
                    "fill" === s ||
                    "stroke" === s ||
                    -1 !== s.indexOf("Color") ||
                    (y && S.test(d))
                      ? (y ||
                          ((d = ft(d)),
                          (d =
                            (d.length > 3 ? "rgba(" : "rgb(") +
                            d.join(",") +
                            ")")),
                        (i = bt(b, s, f, d, !0, "transparent", i, 0, o)))
                      : y && R.test(d)
                      ? (i = bt(b, s, f, d, !0, null, i, 0, o))
                      : ((h = parseFloat(f)),
                        (p = h || 0 === h ? f.substr((h + "").length) : ""),
                        ("" === f || "auto" === f) &&
                          ("width" === s || "height" === s
                            ? ((h = ot(t, s, r)), (p = "px"))
                            : "left" === s || "top" === s
                            ? ((h = tt(t, s, r)), (p = "px"))
                            : ((h = "opacity" !== s ? 0 : 1), (p = ""))),
                        (_ = y && "=" === d.charAt(1)),
                        _
                          ? ((c = parseInt(d.charAt(0) + "1", 10)),
                            (d = d.substr(2)),
                            (c *= parseFloat(d)),
                            (m = d.replace(x, "")))
                          : ((c = parseFloat(d)),
                            (m = y ? d.replace(x, "") : "")),
                        "" === m && (m = s in n ? n[s] : p),
                        (d = c || 0 === c ? (_ ? c + h : c) + m : e[s]),
                        p !== m &&
                          "" !== m &&
                          (c || 0 === c) &&
                          h &&
                          ((h = J(t, s, h, p)),
                          "%" === m
                            ? ((h /= J(t, s, 100, "%") / 100),
                              e.strictUnits !== !0 && (f = h + "%"))
                            : "em" === m ||
                              "rem" === m ||
                              "vw" === m ||
                              "vh" === m
                            ? (h /= J(t, s, 1, m))
                            : "px" !== m && ((c = J(t, s, c, m)), (m = "px")),
                          _ && (c || 0 === c) && (d = c + h + m)),
                        _ && (c += h),
                        (!h && 0 !== h) || (!c && 0 !== c)
                          ? void 0 !== b[s] &&
                            (d || (d + "" != "NaN" && null != d))
                            ? ((i = new yt(
                                b,
                                s,
                                c || h || 0,
                                0,
                                i,
                                -1,
                                s,
                                !1,
                                0,
                                f,
                                d
                              )),
                              (i.xs0 =
                                "none" !== d ||
                                ("display" !== s && -1 === s.indexOf("Style"))
                                  ? d
                                  : f))
                            : Y("invalid " + s + " tween value: " + e[s])
                          : ((i = new yt(
                              b,
                              s,
                              h,
                              c - h,
                              i,
                              0,
                              s,
                              u !== !1 && ("px" === m || "zIndex" === s),
                              0,
                              f,
                              d
                            )),
                            (i.xs0 = m)))),
                o && i && !i.plugin && (i.plugin = o);
            return i;
          }),
          (h.setRatio = function (t) {
            var e,
              i,
              n,
              r = this._firstPT,
              o = 1e-6;
            if (
              1 !== t ||
              (this._tween._time !== this._tween._duration &&
                0 !== this._tween._time)
            )
              if (
                t ||
                (this._tween._time !== this._tween._duration &&
                  0 !== this._tween._time) ||
                this._tween._rawPrevTime === -1e-6
              )
                for (; r; ) {
                  if (
                    ((e = r.c * t + r.s),
                    r.r ? (e = Math.round(e)) : o > e && e > -o && (e = 0),
                    r.type)
                  )
                    if (1 === r.type)
                      if (((n = r.l), 2 === n))
                        r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2;
                      else if (3 === n)
                        r.t[r.p] =
                          r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3;
                      else if (4 === n)
                        r.t[r.p] =
                          r.xs0 +
                          e +
                          r.xs1 +
                          r.xn1 +
                          r.xs2 +
                          r.xn2 +
                          r.xs3 +
                          r.xn3 +
                          r.xs4;
                      else if (5 === n)
                        r.t[r.p] =
                          r.xs0 +
                          e +
                          r.xs1 +
                          r.xn1 +
                          r.xs2 +
                          r.xn2 +
                          r.xs3 +
                          r.xn3 +
                          r.xs4 +
                          r.xn4 +
                          r.xs5;
                      else {
                        for (i = r.xs0 + e + r.xs1, n = 1; n < r.l; n++)
                          i += r["xn" + n] + r["xs" + (n + 1)];
                        r.t[r.p] = i;
                      }
                    else
                      -1 === r.type
                        ? (r.t[r.p] = r.xs0)
                        : r.setRatio && r.setRatio(t);
                  else r.t[r.p] = e + r.xs0;
                  r = r._next;
                }
              else
                for (; r; )
                  2 !== r.type ? (r.t[r.p] = r.b) : r.setRatio(t),
                    (r = r._next);
            else
              for (; r; ) {
                if (2 !== r.type)
                  if (r.r && -1 !== r.type)
                    if (((e = Math.round(r.s + r.c)), r.type)) {
                      if (1 === r.type) {
                        for (
                          n = r.l, i = r.xs0 + e + r.xs1, n = 1;
                          n < r.l;
                          n++
                        )
                          i += r["xn" + n] + r["xs" + (n + 1)];
                        r.t[r.p] = i;
                      }
                    } else r.t[r.p] = e + r.xs0;
                  else r.t[r.p] = r.e;
                else r.setRatio(t);
                r = r._next;
              }
          }),
          (h._enableTransforms = function (t) {
            (this._transform = this._transform || Ht(this._target, r, !0)),
              (this._transformType =
                (this._transform.svg && Ct) || (!t && 3 !== this._transformType)
                  ? 2
                  : 3);
          });
        var Xt = function (t) {
          (this.t[this.p] = this.e),
            this.data._linkCSSP(this, this._next, null, !0);
        };
        (h._addLazySet = function (t, e, i) {
          var n = (this._firstPT = new yt(t, e, 0, 0, this._firstPT, 2));
          (n.e = i), (n.setRatio = Xt), (n.data = this);
        }),
          (h._linkCSSP = function (t, e, i, n) {
            return (
              t &&
                (e && (e._prev = t),
                t._next && (t._next._prev = t._prev),
                t._prev
                  ? (t._prev._next = t._next)
                  : this._firstPT === t &&
                    ((this._firstPT = t._next), (n = !0)),
                i
                  ? (i._next = t)
                  : n || null !== this._firstPT || (this._firstPT = t),
                (t._next = e),
                (t._prev = i)),
              t
            );
          }),
          (h._mod = function (t) {
            for (var e = this._firstPT; e; )
              "function" == typeof t[e.p] && t[e.p] === Math.round && (e.r = 1),
                (e = e._next);
          }),
          (h._kill = function (e) {
            var i,
              n,
              r,
              o = e;
            if (e.autoAlpha || e.alpha) {
              o = {};
              for (n in e) o[n] = e[n];
              (o.opacity = 1), o.autoAlpha && (o.visibility = 1);
            }
            for (
              e.className &&
                (i = this._classNamePT) &&
                ((r = i.xfirst),
                r && r._prev
                  ? this._linkCSSP(r._prev, i._next, r._prev._prev)
                  : r === this._firstPT && (this._firstPT = i._next),
                i._next && this._linkCSSP(i._next, i._next._next, r._prev),
                (this._classNamePT = null)),
                i = this._firstPT;
              i;

            )
              i.plugin &&
                i.plugin !== n &&
                i.plugin._kill &&
                (i.plugin._kill(e), (n = i.plugin)),
                (i = i._next);
            return t.prototype._kill.call(this, o);
          });
        var Gt = function (t, e, i) {
          var n, r, o, s;
          if (t.slice) for (r = t.length; --r > -1; ) Gt(t[r], e, i);
          else
            for (n = t.childNodes, r = n.length; --r > -1; )
              (o = n[r]),
                (s = o.type),
                o.style && (e.push(et(o)), i && i.push(o)),
                (1 !== s && 9 !== s && 11 !== s) ||
                  !o.childNodes.length ||
                  Gt(o, e, i);
        };
        return (
          (s.cascadeTo = function (t, i, n) {
            var r,
              o,
              s,
              a,
              l = e.to(t, i, n),
              h = [l],
              u = [],
              c = [],
              f = [],
              d = e._internals.reservedProps;
            for (
              t = l._targets || l.target,
                Gt(t, u, f),
                l.render(i, !0, !0),
                Gt(t, c),
                l.render(0, !0, !0),
                l._enabled(!0),
                r = f.length;
              --r > -1;

            )
              if (((o = it(f[r], u[r], c[r])), o.firstMPT)) {
                o = o.difs;
                for (s in n) d[s] && (o[s] = n[s]);
                a = {};
                for (s in o) a[s] = u[r][s];
                h.push(e.fromTo(f[r], i, a, o));
              }
            return h;
          }),
          t.activate([s]),
          s
        );
      },
      !0
    ),
    (function () {
      var t = _gsScope._gsDefine.plugin({
          propName: "roundProps",
          version: "1.6.0",
          priority: -1,
          API: 2,
          init: function (t, e, i) {
            return (this._tween = i), !0;
          },
        }),
        e = function (t) {
          for (; t; ) t.f || t.blob || (t.m = Math.round), (t = t._next);
        },
        i = t.prototype;
      (i._onInitAllProps = function () {
        for (
          var t,
            i,
            n,
            r = this._tween,
            o = r.vars.roundProps.join
              ? r.vars.roundProps
              : r.vars.roundProps.split(","),
            s = o.length,
            a = {},
            l = r._propLookup.roundProps;
          --s > -1;

        )
          a[o[s]] = Math.round;
        for (s = o.length; --s > -1; )
          for (t = o[s], i = r._firstPT; i; )
            (n = i._next),
              i.pg
                ? i.t._mod(a)
                : i.n === t &&
                  (2 === i.f && i.t
                    ? e(i.t._firstPT)
                    : (this._add(i.t, t, i.s, i.c),
                      n && (n._prev = i._prev),
                      i._prev
                        ? (i._prev._next = n)
                        : r._firstPT === i && (r._firstPT = n),
                      (i._next = i._prev = null),
                      (r._propLookup[t] = l))),
              (i = n);
        return !1;
      }),
        (i._add = function (t, e, i, n) {
          this._addTween(t, e, i, i + n, e, Math.round),
            this._overwriteProps.push(e);
        });
    })(),
    (function () {
      _gsScope._gsDefine.plugin({
        propName: "attr",
        API: 2,
        version: "0.6.0",
        init: function (t, e, i, n) {
          var r, o;
          if ("function" != typeof t.setAttribute) return !1;
          for (r in e)
            (o = e[r]),
              "function" == typeof o && (o = o(n, t)),
              this._addTween(
                t,
                "setAttribute",
                t.getAttribute(r) + "",
                o + "",
                r,
                !1,
                r
              ),
              this._overwriteProps.push(r);
          return !0;
        },
      });
    })(),
    (_gsScope._gsDefine.plugin({
      propName: "directionalRotation",
      version: "0.3.0",
      API: 2,
      init: function (t, e, i, n) {
        "object" != typeof e &&
          (e = {
            rotation: e,
          }),
          (this.finals = {});
        var r,
          o,
          s,
          a,
          l,
          h,
          u = e.useRadians === !0 ? 2 * Math.PI : 360,
          c = 1e-6;
        for (r in e)
          "useRadians" !== r &&
            ((a = e[r]),
            "function" == typeof a && (a = a(n, t)),
            (h = (a + "").split("_")),
            (o = h[0]),
            (s = parseFloat(
              "function" != typeof t[r]
                ? t[r]
                : t[
                    r.indexOf("set") ||
                    "function" != typeof t["get" + r.substr(3)]
                      ? r
                      : "get" + r.substr(3)
                  ]()
            )),
            (a = this.finals[r] =
              "string" == typeof o && "=" === o.charAt(1)
                ? s + parseInt(o.charAt(0) + "1", 10) * Number(o.substr(2))
                : Number(o) || 0),
            (l = a - s),
            h.length &&
              ((o = h.join("_")),
              -1 !== o.indexOf("short") &&
                ((l %= u), l !== l % (u / 2) && (l = 0 > l ? l + u : l - u)),
              -1 !== o.indexOf("_cw") && 0 > l
                ? (l = ((l + 9999999999 * u) % u) - ((l / u) | 0) * u)
                : -1 !== o.indexOf("ccw") &&
                  l > 0 &&
                  (l = ((l - 9999999999 * u) % u) - ((l / u) | 0) * u)),
            (l > c || -c > l) &&
              (this._addTween(t, r, s, s + l, r),
              this._overwriteProps.push(r)));
        return !0;
      },
      set: function (t) {
        var e;
        if (1 !== t) this._super.setRatio.call(this, t);
        else
          for (e = this._firstPT; e; )
            e.f ? e.t[e.p](this.finals[e.p]) : (e.t[e.p] = this.finals[e.p]),
              (e = e._next);
      },
    })._autoCSS = !0),
    _gsScope._gsDefine(
      "easing.Back",
      ["easing.Ease"],
      function (t) {
        var e,
          i,
          n,
          r = _gsScope.GreenSockGlobals || _gsScope,
          o = r.com.greensock,
          s = 2 * Math.PI,
          a = Math.PI / 2,
          l = o._class,
          h = function (e, i) {
            var n = l("easing." + e, function () {}, !0),
              r = (n.prototype = new t());
            return (r.constructor = n), (r.getRatio = i), n;
          },
          u = t.register || function () {},
          c = function (t, e, i, n, r) {
            var o = l(
              "easing." + t,
              {
                easeOut: new e(),
                easeIn: new i(),
                easeInOut: new n(),
              },
              !0
            );
            return u(o, t), o;
          },
          f = function (t, e, i) {
            (this.t = t),
              (this.v = e),
              i &&
                ((this.next = i),
                (i.prev = this),
                (this.c = i.v - e),
                (this.gap = i.t - t));
          },
          d = function (e, i) {
            var n = l(
                "easing." + e,
                function (t) {
                  (this._p1 = t || 0 === t ? t : 1.70158),
                    (this._p2 = 1.525 * this._p1);
                },
                !0
              ),
              r = (n.prototype = new t());
            return (
              (r.constructor = n),
              (r.getRatio = i),
              (r.config = function (t) {
                return new n(t);
              }),
              n
            );
          },
          p = c(
            "Back",
            d("BackOut", function (t) {
              return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1;
            }),
            d("BackIn", function (t) {
              return t * t * ((this._p1 + 1) * t - this._p1);
            }),
            d("BackInOut", function (t) {
              return (t *= 2) < 1
                ? 0.5 * t * t * ((this._p2 + 1) * t - this._p2)
                : 0.5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2);
            })
          ),
          m = l(
            "easing.SlowMo",
            function (t, e, i) {
              (e = e || 0 === e ? e : 0.7),
                null == t ? (t = 0.7) : t > 1 && (t = 1),
                (this._p = 1 !== t ? e : 0),
                (this._p1 = (1 - t) / 2),
                (this._p2 = t),
                (this._p3 = this._p1 + this._p2),
                (this._calcEnd = i === !0);
            },
            !0
          ),
          g = (m.prototype = new t());
        return (
          (g.constructor = m),
          (g.getRatio = function (t) {
            var e = t + (0.5 - t) * this._p;
            return t < this._p1
              ? this._calcEnd
                ? 1 - (t = 1 - t / this._p1) * t
                : e - (t = 1 - t / this._p1) * t * t * t * e
              : t > this._p3
              ? this._calcEnd
                ? 1 - (t = (t - this._p3) / this._p1) * t
                : e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t
              : this._calcEnd
              ? 1
              : e;
          }),
          (m.ease = new m(0.7, 0.7)),
          (g.config = m.config =
            function (t, e, i) {
              return new m(t, e, i);
            }),
          (e = l(
            "easing.SteppedEase",
            function (t) {
              (t = t || 1), (this._p1 = 1 / t), (this._p2 = t + 1);
            },
            !0
          )),
          (g = e.prototype = new t()),
          (g.constructor = e),
          (g.getRatio = function (t) {
            return (
              0 > t ? (t = 0) : t >= 1 && (t = 0.999999999),
              ((this._p2 * t) >> 0) * this._p1
            );
          }),
          (g.config = e.config =
            function (t) {
              return new e(t);
            }),
          (i = l(
            "easing.RoughEase",
            function (e) {
              e = e || {};
              for (
                var i,
                  n,
                  r,
                  o,
                  s,
                  a,
                  l = e.taper || "none",
                  h = [],
                  u = 0,
                  c = 0 | (e.points || 20),
                  d = c,
                  p = e.randomize !== !1,
                  m = e.clamp === !0,
                  g = e.template instanceof t ? e.template : null,
                  v = "number" == typeof e.strength ? 0.4 * e.strength : 0.4;
                --d > -1;

              )
                (i = p ? Math.random() : (1 / c) * d),
                  (n = g ? g.getRatio(i) : i),
                  "none" === l
                    ? (r = v)
                    : "out" === l
                    ? ((o = 1 - i), (r = o * o * v))
                    : "in" === l
                    ? (r = i * i * v)
                    : 0.5 > i
                    ? ((o = 2 * i), (r = o * o * 0.5 * v))
                    : ((o = 2 * (1 - i)), (r = o * o * 0.5 * v)),
                  p
                    ? (n += Math.random() * r - 0.5 * r)
                    : d % 2
                    ? (n += 0.5 * r)
                    : (n -= 0.5 * r),
                  m && (n > 1 ? (n = 1) : 0 > n && (n = 0)),
                  (h[u++] = {
                    x: i,
                    y: n,
                  });
              for (
                h.sort(function (t, e) {
                  return t.x - e.x;
                }),
                  a = new f(1, 1, null),
                  d = c;
                --d > -1;

              )
                (s = h[d]), (a = new f(s.x, s.y, a));
              this._prev = new f(0, 0, 0 !== a.t ? a : a.next);
            },
            !0
          )),
          (g = i.prototype = new t()),
          (g.constructor = i),
          (g.getRatio = function (t) {
            var e = this._prev;
            if (t > e.t) {
              for (; e.next && t >= e.t; ) e = e.next;
              e = e.prev;
            } else for (; e.prev && t <= e.t; ) e = e.prev;
            return (this._prev = e), e.v + ((t - e.t) / e.gap) * e.c;
          }),
          (g.config = function (t) {
            return new i(t);
          }),
          (i.ease = new i()),
          c(
            "Bounce",
            h("BounceOut", function (t) {
              return 1 / 2.75 > t
                ? 7.5625 * t * t
                : 2 / 2.75 > t
                ? 7.5625 * (t -= 1.5 / 2.75) * t + 0.75
                : 2.5 / 2.75 > t
                ? 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375
                : 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375;
            }),
            h("BounceIn", function (t) {
              return (t = 1 - t) < 1 / 2.75
                ? 1 - 7.5625 * t * t
                : 2 / 2.75 > t
                ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + 0.75)
                : 2.5 / 2.75 > t
                ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375)
                : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375);
            }),
            h("BounceInOut", function (t) {
              var e = 0.5 > t;
              return (
                (t = e ? 1 - 2 * t : 2 * t - 1),
                (t =
                  1 / 2.75 > t
                    ? 7.5625 * t * t
                    : 2 / 2.75 > t
                    ? 7.5625 * (t -= 1.5 / 2.75) * t + 0.75
                    : 2.5 / 2.75 > t
                    ? 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375
                    : 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375),
                e ? 0.5 * (1 - t) : 0.5 * t + 0.5
              );
            })
          ),
          c(
            "Circ",
            h("CircOut", function (t) {
              return Math.sqrt(1 - (t -= 1) * t);
            }),
            h("CircIn", function (t) {
              return -(Math.sqrt(1 - t * t) - 1);
            }),
            h("CircInOut", function (t) {
              return (t *= 2) < 1
                ? -0.5 * (Math.sqrt(1 - t * t) - 1)
                : 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
            })
          ),
          (n = function (e, i, n) {
            var r = l(
                "easing." + e,
                function (t, e) {
                  (this._p1 = t >= 1 ? t : 1),
                    (this._p2 = (e || n) / (1 > t ? t : 1)),
                    (this._p3 =
                      (this._p2 / s) * (Math.asin(1 / this._p1) || 0)),
                    (this._p2 = s / this._p2);
                },
                !0
              ),
              o = (r.prototype = new t());
            return (
              (o.constructor = r),
              (o.getRatio = i),
              (o.config = function (t, e) {
                return new r(t, e);
              }),
              r
            );
          }),
          c(
            "Elastic",
            n(
              "ElasticOut",
              function (t) {
                return (
                  this._p1 *
                    Math.pow(2, -10 * t) *
                    Math.sin((t - this._p3) * this._p2) +
                  1
                );
              },
              0.3
            ),
            n(
              "ElasticIn",
              function (t) {
                return -(
                  this._p1 *
                  Math.pow(2, 10 * (t -= 1)) *
                  Math.sin((t - this._p3) * this._p2)
                );
              },
              0.3
            ),
            n(
              "ElasticInOut",
              function (t) {
                return (t *= 2) < 1
                  ? -0.5 *
                      (this._p1 *
                        Math.pow(2, 10 * (t -= 1)) *
                        Math.sin((t - this._p3) * this._p2))
                  : this._p1 *
                      Math.pow(2, -10 * (t -= 1)) *
                      Math.sin((t - this._p3) * this._p2) *
                      0.5 +
                      1;
              },
              0.45
            )
          ),
          c(
            "Expo",
            h("ExpoOut", function (t) {
              return 1 - Math.pow(2, -10 * t);
            }),
            h("ExpoIn", function (t) {
              return Math.pow(2, 10 * (t - 1)) - 0.001;
            }),
            h("ExpoInOut", function (t) {
              return (t *= 2) < 1
                ? 0.5 * Math.pow(2, 10 * (t - 1))
                : 0.5 * (2 - Math.pow(2, -10 * (t - 1)));
            })
          ),
          c(
            "Sine",
            h("SineOut", function (t) {
              return Math.sin(t * a);
            }),
            h("SineIn", function (t) {
              return -Math.cos(t * a) + 1;
            }),
            h("SineInOut", function (t) {
              return -0.5 * (Math.cos(Math.PI * t) - 1);
            })
          ),
          l(
            "easing.EaseLookup",
            {
              find: function (e) {
                return t.map[e];
              },
            },
            !0
          ),
          u(r.SlowMo, "SlowMo", "ease,"),
          u(i, "RoughEase", "ease,"),
          u(e, "SteppedEase", "ease,"),
          p
        );
      },
      !0
    );
}),
  _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
  (function (t, e) {
    "use strict";
    var i = {},
      n = (t.GreenSockGlobals = t.GreenSockGlobals || t);
    if (!n.TweenLite) {
      var r,
        o,
        s,
        a,
        l,
        h = function (t) {
          var e,
            i = t.split("."),
            r = n;
          for (e = 0; e < i.length; e++) r[i[e]] = r = r[i[e]] || {};
          return r;
        },
        u = h("com.greensock"),
        c = 1e-10,
        f = function (t) {
          var e,
            i = [],
            n = t.length;
          for (e = 0; e !== n; i.push(t[e++]));
          return i;
        },
        d = function () {},
        p = (function () {
          var t = Object.prototype.toString,
            e = t.call([]);
          return function (i) {
            return (
              null != i &&
              (i instanceof Array ||
                ("object" == typeof i && !!i.push && t.call(i) === e))
            );
          };
        })(),
        m = {},
        g = function (r, o, s, a) {
          (this.sc = m[r] ? m[r].sc : []),
            (m[r] = this),
            (this.gsClass = null),
            (this.func = s);
          var l = [];
          (this.check = function (u) {
            for (var c, f, d, p, v, y = o.length, _ = y; --y > -1; )
              (c = m[o[y]] || new g(o[y], [])).gsClass
                ? ((l[y] = c.gsClass), _--)
                : u && c.sc.push(this);
            if (0 === _ && s) {
              if (
                ((f = ("com.greensock." + r).split(".")),
                (d = f.pop()),
                (p = h(f.join("."))[d] = this.gsClass = s.apply(s, l)),
                a)
              )
                if (
                  ((n[d] = i[d] = p),
                  (v = "undefined" != typeof module && module.exports),
                  !v && "function" == typeof define && define.amd)
                )
                  define(
                    (t.GreenSockAMDPath ? t.GreenSockAMDPath + "/" : "") +
                      r.split(".").pop(),
                    [],
                    function () {
                      return p;
                    }
                  );
                else if (v)
                  if (r === e) {
                    module.exports = i[e] = p;
                    for (y in i) p[y] = i[y];
                  } else i[e] && (i[e][d] = p);
              for (y = 0; y < this.sc.length; y++) this.sc[y].check();
            }
          }),
            this.check(!0);
        },
        v = (t._gsDefine = function (t, e, i, n) {
          return new g(t, e, i, n);
        }),
        y = (u._class = function (t, e, i) {
          return (
            (e = e || function () {}),
            v(
              t,
              [],
              function () {
                return e;
              },
              i
            ),
            e
          );
        });
      v.globals = n;
      var _ = [0, 0, 1, 1],
        b = y(
          "easing.Ease",
          function (t, e, i, n) {
            (this._func = t),
              (this._type = i || 0),
              (this._power = n || 0),
              (this._params = e ? _.concat(e) : _);
          },
          !0
        ),
        T = (b.map = {}),
        x = (b.register = function (t, e, i, n) {
          for (
            var r,
              o,
              s,
              a,
              l = e.split(","),
              h = l.length,
              c = (i || "easeIn,easeOut,easeInOut").split(",");
            --h > -1;

          )
            for (
              o = l[h],
                r = n ? y("easing." + o, null, !0) : u.easing[o] || {},
                s = c.length;
              --s > -1;

            )
              (a = c[s]),
                (T[o + "." + a] =
                  T[a + o] =
                  r[a] =
                    t.getRatio ? t : t[a] || new t());
        });
      for (
        s = b.prototype,
          s._calcEnd = !1,
          s.getRatio = function (t) {
            if (this._func)
              return (
                (this._params[0] = t), this._func.apply(null, this._params)
              );
            var e = this._type,
              i = this._power,
              n = 1 === e ? 1 - t : 2 === e ? t : 0.5 > t ? 2 * t : 2 * (1 - t);
            return (
              1 === i
                ? (n *= n)
                : 2 === i
                ? (n *= n * n)
                : 3 === i
                ? (n *= n * n * n)
                : 4 === i && (n *= n * n * n * n),
              1 === e ? 1 - n : 2 === e ? n : 0.5 > t ? n / 2 : 1 - n / 2
            );
          },
          r = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"],
          o = r.length;
        --o > -1;

      )
        (s = r[o] + ",Power" + o),
          x(new b(null, null, 1, o), s, "easeOut", !0),
          x(
            new b(null, null, 2, o),
            s,
            "easeIn" + (0 === o ? ",easeNone" : "")
          ),
          x(new b(null, null, 3, o), s, "easeInOut");
      (T.linear = u.easing.Linear.easeIn), (T.swing = u.easing.Quad.easeInOut);
      var w = y("events.EventDispatcher", function (t) {
        (this._listeners = {}), (this._eventTarget = t || this);
      });
      (s = w.prototype),
        (s.addEventListener = function (t, e, i, n, r) {
          r = r || 0;
          var o,
            s,
            h = this._listeners[t],
            u = 0;
          for (
            this !== a || l || a.wake(),
              null == h && (this._listeners[t] = h = []),
              s = h.length;
            --s > -1;

          )
            (o = h[s]),
              o.c === e && o.s === i
                ? h.splice(s, 1)
                : 0 === u && o.pr < r && (u = s + 1);
          h.splice(u, 0, {
            c: e,
            s: i,
            up: n,
            pr: r,
          });
        }),
        (s.removeEventListener = function (t, e) {
          var i,
            n = this._listeners[t];
          if (n)
            for (i = n.length; --i > -1; )
              if (n[i].c === e) return void n.splice(i, 1);
        }),
        (s.dispatchEvent = function (t) {
          var e,
            i,
            n,
            r = this._listeners[t];
          if (r)
            for (
              e = r.length, e > 1 && (r = r.slice(0)), i = this._eventTarget;
              --e > -1;

            )
              (n = r[e]),
                n &&
                  (n.up
                    ? n.c.call(n.s || i, {
                        type: t,
                        target: i,
                      })
                    : n.c.call(n.s || i));
        });
      var E = t.requestAnimationFrame,
        C = t.cancelAnimationFrame,
        S =
          Date.now ||
          function () {
            return new Date().getTime();
          },
        A = S();
      for (r = ["ms", "moz", "webkit", "o"], o = r.length; --o > -1 && !E; )
        (E = t[r[o] + "RequestAnimationFrame"]),
          (C =
            t[r[o] + "CancelAnimationFrame"] ||
            t[r[o] + "CancelRequestAnimationFrame"]);
      y("Ticker", function (t, e) {
        var i,
          n,
          r,
          o,
          s,
          h = this,
          u = S(),
          f = !(e === !1 || !E) && "auto",
          p = 500,
          m = 33,
          g = "tick",
          v = function (t) {
            var e,
              a,
              l = S() - A;
            l > p && (u += l - m),
              (A += l),
              (h.time = (A - u) / 1e3),
              (e = h.time - s),
              (!i || e > 0 || t === !0) &&
                (h.frame++, (s += e + (e >= o ? 0.004 : o - e)), (a = !0)),
              t !== !0 && (r = n(v)),
              a && h.dispatchEvent(g);
          };
        w.call(h),
          (h.time = h.frame = 0),
          (h.tick = function () {
            v(!0);
          }),
          (h.lagSmoothing = function (t, e) {
            (p = t || 1 / c), (m = Math.min(e, p, 0));
          }),
          (h.sleep = function () {
            null != r &&
              (f && C ? C(r) : clearTimeout(r),
              (n = d),
              (r = null),
              h === a && (l = !1));
          }),
          (h.wake = function (t) {
            null !== r
              ? h.sleep()
              : t
              ? (u += -A + (A = S()))
              : h.frame > 10 && (A = S() - p + 5),
              (n =
                0 === i
                  ? d
                  : f && E
                  ? E
                  : function (t) {
                      return setTimeout(t, (1e3 * (s - h.time) + 1) | 0);
                    }),
              h === a && (l = !0),
              v(2);
          }),
          (h.fps = function (t) {
            return arguments.length
              ? ((i = t),
                (o = 1 / (i || 60)),
                (s = this.time + o),
                void h.wake())
              : i;
          }),
          (h.useRAF = function (t) {
            return arguments.length ? (h.sleep(), (f = t), void h.fps(i)) : f;
          }),
          h.fps(t),
          setTimeout(function () {
            "auto" === f &&
              h.frame < 5 &&
              "hidden" !== document.visibilityState &&
              h.useRAF(!1);
          }, 1500);
      }),
        (s = u.Ticker.prototype = new u.events.EventDispatcher()),
        (s.constructor = u.Ticker);
      var I = y("core.Animation", function (t, e) {
        if (
          ((this.vars = e = e || {}),
          (this._duration = this._totalDuration = t || 0),
          (this._delay = Number(e.delay) || 0),
          (this._timeScale = 1),
          (this._active = e.immediateRender === !0),
          (this.data = e.data),
          (this._reversed = e.reversed === !0),
          Y)
        ) {
          l || a.wake();
          var i = this.vars.useFrames ? $ : Y;
          i.add(this, i._time), this.vars.paused && this.paused(!0);
        }
      });
      (a = I.ticker = new u.Ticker()),
        (s = I.prototype),
        (s._dirty = s._gc = s._initted = s._paused = !1),
        (s._totalTime = s._time = 0),
        (s._rawPrevTime = -1),
        (s._next = s._last = s._onUpdate = s._timeline = s.timeline = null),
        (s._paused = !1);
      var D = function () {
        l && S() - A > 2e3 && a.wake(), setTimeout(D, 2e3);
      };
      D(),
        (s.play = function (t, e) {
          return null != t && this.seek(t, e), this.reversed(!1).paused(!1);
        }),
        (s.pause = function (t, e) {
          return null != t && this.seek(t, e), this.paused(!0);
        }),
        (s.resume = function (t, e) {
          return null != t && this.seek(t, e), this.paused(!1);
        }),
        (s.seek = function (t, e) {
          return this.totalTime(Number(t), e !== !1);
        }),
        (s.restart = function (t, e) {
          return this.reversed(!1)
            .paused(!1)
            .totalTime(t ? -this._delay : 0, e !== !1, !0);
        }),
        (s.reverse = function (t, e) {
          return (
            null != t && this.seek(t || this.totalDuration(), e),
            this.reversed(!0).paused(!1)
          );
        }),
        (s.render = function (t, e, i) {}),
        (s.invalidate = function () {
          return (
            (this._time = this._totalTime = 0),
            (this._initted = this._gc = !1),
            (this._rawPrevTime = -1),
            (this._gc || !this.timeline) && this._enabled(!0),
            this
          );
        }),
        (s.isActive = function () {
          var t,
            e = this._timeline,
            i = this._startTime;
          return (
            !e ||
            (!this._gc &&
              !this._paused &&
              e.isActive() &&
              (t = e.rawTime()) >= i &&
              t < i + this.totalDuration() / this._timeScale)
          );
        }),
        (s._enabled = function (t, e) {
          return (
            l || a.wake(),
            (this._gc = !t),
            (this._active = this.isActive()),
            e !== !0 &&
              (t && !this.timeline
                ? this._timeline.add(this, this._startTime - this._delay)
                : !t && this.timeline && this._timeline._remove(this, !0)),
            !1
          );
        }),
        (s._kill = function (t, e) {
          return this._enabled(!1, !1);
        }),
        (s.kill = function (t, e) {
          return this._kill(t, e), this;
        }),
        (s._uncache = function (t) {
          for (var e = t ? this : this.timeline; e; )
            (e._dirty = !0), (e = e.timeline);
          return this;
        }),
        (s._swapSelfInParams = function (t) {
          for (var e = t.length, i = t.concat(); --e > -1; )
            "{self}" === t[e] && (i[e] = this);
          return i;
        }),
        (s._callback = function (t) {
          var e = this.vars,
            i = e[t],
            n = e[t + "Params"],
            r = e[t + "Scope"] || e.callbackScope || this,
            o = n ? n.length : 0;
          switch (o) {
            case 0:
              i.call(r);
              break;
            case 1:
              i.call(r, n[0]);
              break;
            case 2:
              i.call(r, n[0], n[1]);
              break;
            default:
              i.apply(r, n);
          }
        }),
        (s.eventCallback = function (t, e, i, n) {
          if ("on" === (t || "").substr(0, 2)) {
            var r = this.vars;
            if (1 === arguments.length) return r[t];
            null == e
              ? delete r[t]
              : ((r[t] = e),
                (r[t + "Params"] =
                  p(i) && -1 !== i.join("").indexOf("{self}")
                    ? this._swapSelfInParams(i)
                    : i),
                (r[t + "Scope"] = n)),
              "onUpdate" === t && (this._onUpdate = e);
          }
          return this;
        }),
        (s.delay = function (t) {
          return arguments.length
            ? (this._timeline.smoothChildTiming &&
                this.startTime(this._startTime + t - this._delay),
              (this._delay = t),
              this)
            : this._delay;
        }),
        (s.duration = function (t) {
          return arguments.length
            ? ((this._duration = this._totalDuration = t),
              this._uncache(!0),
              this._timeline.smoothChildTiming &&
                this._time > 0 &&
                this._time < this._duration &&
                0 !== t &&
                this.totalTime(this._totalTime * (t / this._duration), !0),
              this)
            : ((this._dirty = !1), this._duration);
        }),
        (s.totalDuration = function (t) {
          return (
            (this._dirty = !1),
            arguments.length ? this.duration(t) : this._totalDuration
          );
        }),
        (s.time = function (t, e) {
          return arguments.length
            ? (this._dirty && this.totalDuration(),
              this.totalTime(t > this._duration ? this._duration : t, e))
            : this._time;
        }),
        (s.totalTime = function (t, e, i) {
          if ((l || a.wake(), !arguments.length)) return this._totalTime;
          if (this._timeline) {
            if (
              (0 > t && !i && (t += this.totalDuration()),
              this._timeline.smoothChildTiming)
            ) {
              this._dirty && this.totalDuration();
              var n = this._totalDuration,
                r = this._timeline;
              if (
                (t > n && !i && (t = n),
                (this._startTime =
                  (this._paused ? this._pauseTime : r._time) -
                  (this._reversed ? n - t : t) / this._timeScale),
                r._dirty || this._uncache(!1),
                r._timeline)
              )
                for (; r._timeline; )
                  r._timeline._time !==
                    (r._startTime + r._totalTime) / r._timeScale &&
                    r.totalTime(r._totalTime, !0),
                    (r = r._timeline);
            }
            this._gc && this._enabled(!0, !1),
              (this._totalTime !== t || 0 === this._duration) &&
                (N.length && G(), this.render(t, e, !1), N.length && G());
          }
          return this;
        }),
        (s.progress = s.totalProgress =
          function (t, e) {
            var i = this.duration();
            return arguments.length
              ? this.totalTime(i * t, e)
              : i
              ? this._time / i
              : this.ratio;
          }),
        (s.startTime = function (t) {
          return arguments.length
            ? (t !== this._startTime &&
                ((this._startTime = t),
                this.timeline &&
                  this.timeline._sortChildren &&
                  this.timeline.add(this, t - this._delay)),
              this)
            : this._startTime;
        }),
        (s.endTime = function (t) {
          return (
            this._startTime +
            (0 != t ? this.totalDuration() : this.duration()) / this._timeScale
          );
        }),
        (s.timeScale = function (t) {
          if (!arguments.length) return this._timeScale;
          if (
            ((t = t || c), this._timeline && this._timeline.smoothChildTiming)
          ) {
            var e = this._pauseTime,
              i = e || 0 === e ? e : this._timeline.totalTime();
            this._startTime = i - ((i - this._startTime) * this._timeScale) / t;
          }
          return (this._timeScale = t), this._uncache(!1);
        }),
        (s.reversed = function (t) {
          return arguments.length
            ? (t != this._reversed &&
                ((this._reversed = t),
                this.totalTime(
                  this._timeline && !this._timeline.smoothChildTiming
                    ? this.totalDuration() - this._totalTime
                    : this._totalTime,
                  !0
                )),
              this)
            : this._reversed;
        }),
        (s.paused = function (t) {
          if (!arguments.length) return this._paused;
          var e,
            i,
            n = this._timeline;
          return (
            t != this._paused &&
              n &&
              (l || t || a.wake(),
              (e = n.rawTime()),
              (i = e - this._pauseTime),
              !t &&
                n.smoothChildTiming &&
                ((this._startTime += i), this._uncache(!1)),
              (this._pauseTime = t ? e : null),
              (this._paused = t),
              (this._active = this.isActive()),
              !t &&
                0 !== i &&
                this._initted &&
                this.duration() &&
                ((e = n.smoothChildTiming
                  ? this._totalTime
                  : (e - this._startTime) / this._timeScale),
                this.render(e, e === this._totalTime, !0))),
            this._gc && !t && this._enabled(!0, !1),
            this
          );
        });
      var P = y("core.SimpleTimeline", function (t) {
        I.call(this, 0, t),
          (this.autoRemoveChildren = this.smoothChildTiming = !0);
      });
      (s = P.prototype = new I()),
        (s.constructor = P),
        (s.kill()._gc = !1),
        (s._first = s._last = s._recent = null),
        (s._sortChildren = !1),
        (s.add = s.insert =
          function (t, e, i, n) {
            var r, o;
            if (
              ((t._startTime = Number(e || 0) + t._delay),
              t._paused &&
                this !== t._timeline &&
                (t._pauseTime =
                  t._startTime +
                  (this.rawTime() - t._startTime) / t._timeScale),
              t.timeline && t.timeline._remove(t, !0),
              (t.timeline = t._timeline = this),
              t._gc && t._enabled(!0, !0),
              (r = this._last),
              this._sortChildren)
            )
              for (o = t._startTime; r && r._startTime > o; ) r = r._prev;
            return (
              r
                ? ((t._next = r._next), (r._next = t))
                : ((t._next = this._first), (this._first = t)),
              t._next ? (t._next._prev = t) : (this._last = t),
              (t._prev = r),
              (this._recent = t),
              this._timeline && this._uncache(!0),
              this
            );
          }),
        (s._remove = function (t, e) {
          return (
            t.timeline === this &&
              (e || t._enabled(!1, !0),
              t._prev
                ? (t._prev._next = t._next)
                : this._first === t && (this._first = t._next),
              t._next
                ? (t._next._prev = t._prev)
                : this._last === t && (this._last = t._prev),
              (t._next = t._prev = t.timeline = null),
              t === this._recent && (this._recent = this._last),
              this._timeline && this._uncache(!0)),
            this
          );
        }),
        (s.render = function (t, e, i) {
          var n,
            r = this._first;
          for (this._totalTime = this._time = this._rawPrevTime = t; r; )
            (n = r._next),
              (r._active || (t >= r._startTime && !r._paused)) &&
                (r._reversed
                  ? r.render(
                      (r._dirty ? r.totalDuration() : r._totalDuration) -
                        (t - r._startTime) * r._timeScale,
                      e,
                      i
                    )
                  : r.render((t - r._startTime) * r._timeScale, e, i)),
              (r = n);
        }),
        (s.rawTime = function () {
          return l || a.wake(), this._totalTime;
        });
      var k = y(
          "TweenLite",
          function (e, i, n) {
            if (
              (I.call(this, i, n),
              (this.render = k.prototype.render),
              null == e)
            )
              throw "Cannot tween a null target.";
            this.target = e = "string" != typeof e ? e : k.selector(e) || e;
            var r,
              o,
              s,
              a =
                e.jquery ||
                (e.length &&
                  e !== t &&
                  e[0] &&
                  (e[0] === t || (e[0].nodeType && e[0].style && !e.nodeType))),
              l = this.vars.overwrite;
            if (
              ((this._overwrite = l =
                null == l
                  ? U[k.defaultOverwrite]
                  : "number" == typeof l
                  ? l >> 0
                  : U[l]),
              (a || e instanceof Array || (e.push && p(e))) &&
                "number" != typeof e[0])
            )
              for (
                this._targets = s = f(e),
                  this._propLookup = [],
                  this._siblings = [],
                  r = 0;
                r < s.length;
                r++
              )
                (o = s[r]),
                  o
                    ? "string" != typeof o
                      ? o.length &&
                        o !== t &&
                        o[0] &&
                        (o[0] === t ||
                          (o[0].nodeType && o[0].style && !o.nodeType))
                        ? (s.splice(r--, 1),
                          (this._targets = s = s.concat(f(o))))
                        : ((this._siblings[r] = Q(o, this, !1)),
                          1 === l &&
                            this._siblings[r].length > 1 &&
                            Z(o, this, null, 1, this._siblings[r]))
                      : ((o = s[r--] = k.selector(o)),
                        "string" == typeof o && s.splice(r + 1, 1))
                    : s.splice(r--, 1);
            else
              (this._propLookup = {}),
                (this._siblings = Q(e, this, !1)),
                1 === l &&
                  this._siblings.length > 1 &&
                  Z(e, this, null, 1, this._siblings);
            (this.vars.immediateRender ||
              (0 === i &&
                0 === this._delay &&
                this.vars.immediateRender !== !1)) &&
              ((this._time = -c), this.render(Math.min(0, -this._delay)));
          },
          !0
        ),
        O = function (e) {
          return (
            e &&
            e.length &&
            e !== t &&
            e[0] &&
            (e[0] === t || (e[0].nodeType && e[0].style && !e.nodeType))
          );
        },
        L = function (t, e) {
          var i,
            n = {};
          for (i in t)
            V[i] ||
              (i in e &&
                "transform" !== i &&
                "x" !== i &&
                "y" !== i &&
                "width" !== i &&
                "height" !== i &&
                "className" !== i &&
                "border" !== i) ||
              !(!H[i] || (H[i] && H[i]._autoCSS)) ||
              ((n[i] = t[i]), delete t[i]);
          t.css = n;
        };
      (s = k.prototype = new I()),
        (s.constructor = k),
        (s.kill()._gc = !1),
        (s.ratio = 0),
        (s._firstPT = s._targets = s._overwrittenProps = s._startAt = null),
        (s._notifyPluginsOfEnabled = s._lazy = !1),
        (k.version = "1.19.0"),
        (k.defaultEase = s._ease = new b(null, null, 1, 1)),
        (k.defaultOverwrite = "auto"),
        (k.ticker = a),
        (k.autoSleep = 120),
        (k.lagSmoothing = function (t, e) {
          a.lagSmoothing(t, e);
        }),
        (k.selector =
          t.$ ||
          t.jQuery ||
          function (e) {
            var i = t.$ || t.jQuery;
            return i
              ? ((k.selector = i), i(e))
              : "undefined" == typeof document
              ? e
              : document.querySelectorAll
              ? document.querySelectorAll(e)
              : document.getElementById("#" === e.charAt(0) ? e.substr(1) : e);
          });
      var N = [],
        R = {},
        M = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
        z = function (t) {
          for (var e, i = this._firstPT, n = 1e-6; i; )
            (e = i.blob ? (t ? this.join("") : this.start) : i.c * t + i.s),
              i.m
                ? (e = i.m(e, this._target || i.t))
                : n > e && e > -n && (e = 0),
              i.f ? (i.fp ? i.t[i.p](i.fp, e) : i.t[i.p](e)) : (i.t[i.p] = e),
              (i = i._next);
        },
        j = function (t, e, i, n) {
          var r,
            o,
            s,
            a,
            l,
            h,
            u,
            c = [t, e],
            f = 0,
            d = "",
            p = 0;
          for (
            c.start = t,
              i && (i(c), (t = c[0]), (e = c[1])),
              c.length = 0,
              r = t.match(M) || [],
              o = e.match(M) || [],
              n &&
                ((n._next = null), (n.blob = 1), (c._firstPT = c._applyPT = n)),
              l = o.length,
              a = 0;
            l > a;
            a++
          )
            (u = o[a]),
              (h = e.substr(f, e.indexOf(u, f) - f)),
              (d += h || !a ? h : ","),
              (f += h.length),
              p ? (p = (p + 1) % 5) : "rgba(" === h.substr(-5) && (p = 1),
              u === r[a] || r.length <= a
                ? (d += u)
                : (d && (c.push(d), (d = "")),
                  (s = parseFloat(r[a])),
                  c.push(s),
                  (c._firstPT = {
                    _next: c._firstPT,
                    t: c,
                    p: c.length - 1,
                    s: s,
                    c:
                      ("=" === u.charAt(1)
                        ? parseInt(u.charAt(0) + "1", 10) *
                          parseFloat(u.substr(2))
                        : parseFloat(u) - s) || 0,
                    f: 0,
                    m: p && 4 > p ? Math.round : 0,
                  })),
              (f += u.length);
          return (d += e.substr(f)), d && c.push(d), (c.setRatio = z), c;
        },
        F = function (t, e, i, n, r, o, s, a, l) {
          "function" == typeof n && (n = n(l || 0, t));
          var h,
            u,
            c = "get" === i ? t[e] : i,
            f = typeof t[e],
            d = "string" == typeof n && "=" === n.charAt(1),
            p = {
              t: t,
              p: e,
              s: c,
              f: "function" === f,
              pg: 0,
              n: r || e,
              m: o ? ("function" == typeof o ? o : Math.round) : 0,
              pr: 0,
              c: d
                ? parseInt(n.charAt(0) + "1", 10) * parseFloat(n.substr(2))
                : parseFloat(n) - c || 0,
            };
          return (
            "number" !== f &&
              ("function" === f &&
                "get" === i &&
                ((u =
                  e.indexOf("set") ||
                  "function" != typeof t["get" + e.substr(3)]
                    ? e
                    : "get" + e.substr(3)),
                (p.s = c = s ? t[u](s) : t[u]())),
              "string" == typeof c && (s || isNaN(c))
                ? ((p.fp = s),
                  (h = j(c, n, a || k.defaultStringFilter, p)),
                  (p = {
                    t: h,
                    p: "setRatio",
                    s: 0,
                    c: 1,
                    f: 2,
                    pg: 0,
                    n: r || e,
                    pr: 0,
                    m: 0,
                  }))
                : d ||
                  ((p.s = parseFloat(c)), (p.c = parseFloat(n) - p.s || 0))),
            p.c
              ? ((p._next = this._firstPT) && (p._next._prev = p),
                (this._firstPT = p),
                p)
              : void 0
          );
        },
        W = (k._internals = {
          isArray: p,
          isSelector: O,
          lazyTweens: N,
          blobDif: j,
        }),
        H = (k._plugins = {}),
        B = (W.tweenLookup = {}),
        q = 0,
        V = (W.reservedProps = {
          ease: 1,
          delay: 1,
          overwrite: 1,
          onComplete: 1,
          onCompleteParams: 1,
          onCompleteScope: 1,
          useFrames: 1,
          runBackwards: 1,
          startAt: 1,
          onUpdate: 1,
          onUpdateParams: 1,
          onUpdateScope: 1,
          onStart: 1,
          onStartParams: 1,
          onStartScope: 1,
          onReverseComplete: 1,
          onReverseCompleteParams: 1,
          onReverseCompleteScope: 1,
          onRepeat: 1,
          onRepeatParams: 1,
          onRepeatScope: 1,
          easeParams: 1,
          yoyo: 1,
          immediateRender: 1,
          repeat: 1,
          repeatDelay: 1,
          data: 1,
          paused: 1,
          reversed: 1,
          autoCSS: 1,
          lazy: 1,
          onOverwrite: 1,
          callbackScope: 1,
          stringFilter: 1,
          id: 1,
        }),
        U = {
          none: 0,
          all: 1,
          auto: 2,
          concurrent: 3,
          allOnStart: 4,
          preexisting: 5,
          true: 1,
          false: 0,
        },
        $ = (I._rootFramesTimeline = new P()),
        Y = (I._rootTimeline = new P()),
        X = 30,
        G = (W.lazyRender = function () {
          var t,
            e = N.length;
          for (R = {}; --e > -1; )
            (t = N[e]),
              t &&
                t._lazy !== !1 &&
                (t.render(t._lazy[0], t._lazy[1], !0), (t._lazy = !1));
          N.length = 0;
        });
      (Y._startTime = a.time),
        ($._startTime = a.frame),
        (Y._active = $._active = !0),
        setTimeout(G, 1),
        (I._updateRoot = k.render =
          function () {
            var t, e, i;
            if (
              (N.length && G(),
              Y.render((a.time - Y._startTime) * Y._timeScale, !1, !1),
              $.render((a.frame - $._startTime) * $._timeScale, !1, !1),
              N.length && G(),
              a.frame >= X)
            ) {
              X = a.frame + (parseInt(k.autoSleep, 10) || 120);
              for (i in B) {
                for (e = B[i].tweens, t = e.length; --t > -1; )
                  e[t]._gc && e.splice(t, 1);
                0 === e.length && delete B[i];
              }
              if (
                ((i = Y._first),
                (!i || i._paused) &&
                  k.autoSleep &&
                  !$._first &&
                  1 === a._listeners.tick.length)
              ) {
                for (; i && i._paused; ) i = i._next;
                i || a.sleep();
              }
            }
          }),
        a.addEventListener("tick", I._updateRoot);
      var Q = function (t, e, i) {
          var n,
            r,
            o = t._gsTweenID;
          if (
            (B[o || (t._gsTweenID = o = "t" + q++)] ||
              (B[o] = {
                target: t,
                tweens: [],
              }),
            e && ((n = B[o].tweens), (n[(r = n.length)] = e), i))
          )
            for (; --r > -1; ) n[r] === e && n.splice(r, 1);
          return B[o].tweens;
        },
        K = function (t, e, i, n) {
          var r,
            o,
            s = t.vars.onOverwrite;
          return (
            s && (r = s(t, e, i, n)),
            (s = k.onOverwrite),
            s && (o = s(t, e, i, n)),
            r !== !1 && o !== !1
          );
        },
        Z = function (t, e, i, n, r) {
          var o, s, a, l;
          if (1 === n || n >= 4) {
            for (l = r.length, o = 0; l > o; o++)
              if ((a = r[o]) !== e) a._gc || (a._kill(null, t, e) && (s = !0));
              else if (5 === n) break;
            return s;
          }
          var h,
            u = e._startTime + c,
            f = [],
            d = 0,
            p = 0 === e._duration;
          for (o = r.length; --o > -1; )
            (a = r[o]) === e ||
              a._gc ||
              a._paused ||
              (a._timeline !== e._timeline
                ? ((h = h || J(e, 0, p)), 0 === J(a, h, p) && (f[d++] = a))
                : a._startTime <= u &&
                  a._startTime + a.totalDuration() / a._timeScale > u &&
                  (((p || !a._initted) && u - a._startTime <= 2e-10) ||
                    (f[d++] = a)));
          for (o = d; --o > -1; )
            if (
              ((a = f[o]),
              2 === n && a._kill(i, t, e) && (s = !0),
              2 !== n || (!a._firstPT && a._initted))
            ) {
              if (2 !== n && !K(a, e)) continue;
              a._enabled(!1, !1) && (s = !0);
            }
          return s;
        },
        J = function (t, e, i) {
          for (
            var n = t._timeline, r = n._timeScale, o = t._startTime;
            n._timeline;

          ) {
            if (((o += n._startTime), (r *= n._timeScale), n._paused))
              return -100;
            n = n._timeline;
          }
          return (
            (o /= r),
            o > e
              ? o - e
              : (i && o === e) || (!t._initted && 2 * c > o - e)
              ? c
              : (o += t.totalDuration() / t._timeScale / r) > e + c
              ? 0
              : o - e - c
          );
        };
      (s._init = function () {
        var t,
          e,
          i,
          n,
          r,
          o,
          s = this.vars,
          a = this._overwrittenProps,
          l = this._duration,
          h = !!s.immediateRender,
          u = s.ease;
        if (s.startAt) {
          this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()),
            (r = {});
          for (n in s.startAt) r[n] = s.startAt[n];
          if (
            ((r.overwrite = !1),
            (r.immediateRender = !0),
            (r.lazy = h && s.lazy !== !1),
            (r.startAt = r.delay = null),
            (this._startAt = k.to(this.target, 0, r)),
            h)
          )
            if (this._time > 0) this._startAt = null;
            else if (0 !== l) return;
        } else if (s.runBackwards && 0 !== l)
          if (this._startAt)
            this._startAt.render(-1, !0),
              this._startAt.kill(),
              (this._startAt = null);
          else {
            0 !== this._time && (h = !1), (i = {});
            for (n in s) (V[n] && "autoCSS" !== n) || (i[n] = s[n]);
            if (
              ((i.overwrite = 0),
              (i.data = "isFromStart"),
              (i.lazy = h && s.lazy !== !1),
              (i.immediateRender = h),
              (this._startAt = k.to(this.target, 0, i)),
              h)
            ) {
              if (0 === this._time) return;
            } else
              this._startAt._init(),
                this._startAt._enabled(!1),
                this.vars.immediateRender && (this._startAt = null);
          }
        if (
          ((this._ease = u =
            u
              ? u instanceof b
                ? u
                : "function" == typeof u
                ? new b(u, s.easeParams)
                : T[u] || k.defaultEase
              : k.defaultEase),
          s.easeParams instanceof Array &&
            u.config &&
            (this._ease = u.config.apply(u, s.easeParams)),
          (this._easeType = this._ease._type),
          (this._easePower = this._ease._power),
          (this._firstPT = null),
          this._targets)
        )
          for (o = this._targets.length, t = 0; o > t; t++)
            this._initProps(
              this._targets[t],
              (this._propLookup[t] = {}),
              this._siblings[t],
              a ? a[t] : null,
              t
            ) && (e = !0);
        else
          e = this._initProps(
            this.target,
            this._propLookup,
            this._siblings,
            a,
            0
          );
        if (
          (e && k._onPluginEvent("_onInitAllProps", this),
          a &&
            (this._firstPT ||
              ("function" != typeof this.target && this._enabled(!1, !1))),
          s.runBackwards)
        )
          for (i = this._firstPT; i; )
            (i.s += i.c), (i.c = -i.c), (i = i._next);
        (this._onUpdate = s.onUpdate), (this._initted = !0);
      }),
        (s._initProps = function (e, i, n, r, o) {
          var s, a, l, h, u, c;
          if (null == e) return !1;
          R[e._gsTweenID] && G(),
            this.vars.css ||
              (e.style &&
                e !== t &&
                e.nodeType &&
                H.css &&
                this.vars.autoCSS !== !1 &&
                L(this.vars, e));
          for (s in this.vars)
            if (((c = this.vars[s]), V[s]))
              c &&
                (c instanceof Array || (c.push && p(c))) &&
                -1 !== c.join("").indexOf("{self}") &&
                (this.vars[s] = c = this._swapSelfInParams(c, this));
            else if (
              H[s] &&
              (h = new H[s]())._onInitTween(e, this.vars[s], this, o)
            ) {
              for (
                this._firstPT = u =
                  {
                    _next: this._firstPT,
                    t: h,
                    p: "setRatio",
                    s: 0,
                    c: 1,
                    f: 1,
                    n: s,
                    pg: 1,
                    pr: h._priority,
                    m: 0,
                  },
                  a = h._overwriteProps.length;
                --a > -1;

              )
                i[h._overwriteProps[a]] = this._firstPT;
              (h._priority || h._onInitAllProps) && (l = !0),
                (h._onDisable || h._onEnable) &&
                  (this._notifyPluginsOfEnabled = !0),
                u._next && (u._next._prev = u);
            } else
              i[s] = F.call(
                this,
                e,
                s,
                "get",
                c,
                s,
                0,
                null,
                this.vars.stringFilter,
                o
              );
          return r && this._kill(r, e)
            ? this._initProps(e, i, n, r, o)
            : this._overwrite > 1 &&
              this._firstPT &&
              n.length > 1 &&
              Z(e, this, i, this._overwrite, n)
            ? (this._kill(i, e), this._initProps(e, i, n, r, o))
            : (this._firstPT &&
                ((this.vars.lazy !== !1 && this._duration) ||
                  (this.vars.lazy && !this._duration)) &&
                (R[e._gsTweenID] = !0),
              l);
        }),
        (s.render = function (t, e, i) {
          var n,
            r,
            o,
            s,
            a = this._time,
            l = this._duration,
            h = this._rawPrevTime;
          if (t >= l - 1e-7)
            (this._totalTime = this._time = l),
              (this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1),
              this._reversed ||
                ((n = !0),
                (r = "onComplete"),
                (i = i || this._timeline.autoRemoveChildren)),
              0 === l &&
                (this._initted || !this.vars.lazy || i) &&
                (this._startTime === this._timeline._duration && (t = 0),
                (0 > h ||
                  (0 >= t && t >= -1e-7) ||
                  (h === c && "isPause" !== this.data)) &&
                  h !== t &&
                  ((i = !0), h > c && (r = "onReverseComplete")),
                (this._rawPrevTime = s = !e || t || h === t ? t : c));
          else if (1e-7 > t)
            (this._totalTime = this._time = 0),
              (this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0),
              (0 !== a || (0 === l && h > 0)) &&
                ((r = "onReverseComplete"), (n = this._reversed)),
              0 > t &&
                ((this._active = !1),
                0 === l &&
                  (this._initted || !this.vars.lazy || i) &&
                  (h >= 0 && (h !== c || "isPause" !== this.data) && (i = !0),
                  (this._rawPrevTime = s = !e || t || h === t ? t : c))),
              this._initted || (i = !0);
          else if (((this._totalTime = this._time = t), this._easeType)) {
            var u = t / l,
              f = this._easeType,
              d = this._easePower;
            (1 === f || (3 === f && u >= 0.5)) && (u = 1 - u),
              3 === f && (u *= 2),
              1 === d
                ? (u *= u)
                : 2 === d
                ? (u *= u * u)
                : 3 === d
                ? (u *= u * u * u)
                : 4 === d && (u *= u * u * u * u),
              1 === f
                ? (this.ratio = 1 - u)
                : 2 === f
                ? (this.ratio = u)
                : 0.5 > t / l
                ? (this.ratio = u / 2)
                : (this.ratio = 1 - u / 2);
          } else this.ratio = this._ease.getRatio(t / l);
          if (this._time !== a || i) {
            if (!this._initted) {
              if ((this._init(), !this._initted || this._gc)) return;
              if (
                !i &&
                this._firstPT &&
                ((this.vars.lazy !== !1 && this._duration) ||
                  (this.vars.lazy && !this._duration))
              )
                return (
                  (this._time = this._totalTime = a),
                  (this._rawPrevTime = h),
                  N.push(this),
                  void (this._lazy = [t, e])
                );
              this._time && !n
                ? (this.ratio = this._ease.getRatio(this._time / l))
                : n &&
                  this._ease._calcEnd &&
                  (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1));
            }
            for (
              this._lazy !== !1 && (this._lazy = !1),
                this._active ||
                  (!this._paused &&
                    this._time !== a &&
                    t >= 0 &&
                    (this._active = !0)),
                0 === a &&
                  (this._startAt &&
                    (t >= 0
                      ? this._startAt.render(t, e, i)
                      : r || (r = "_dummyGS")),
                  this.vars.onStart &&
                    (0 !== this._time || 0 === l) &&
                    (e || this._callback("onStart"))),
                o = this._firstPT;
              o;

            )
              o.f
                ? o.t[o.p](o.c * this.ratio + o.s)
                : (o.t[o.p] = o.c * this.ratio + o.s),
                (o = o._next);
            this._onUpdate &&
              (0 > t &&
                this._startAt &&
                t !== -1e-4 &&
                this._startAt.render(t, e, i),
              e ||
                ((this._time !== a || n || i) && this._callback("onUpdate"))),
              r &&
                (!this._gc || i) &&
                (0 > t &&
                  this._startAt &&
                  !this._onUpdate &&
                  t !== -1e-4 &&
                  this._startAt.render(t, e, i),
                n &&
                  (this._timeline.autoRemoveChildren && this._enabled(!1, !1),
                  (this._active = !1)),
                !e && this.vars[r] && this._callback(r),
                0 === l &&
                  this._rawPrevTime === c &&
                  s !== c &&
                  (this._rawPrevTime = 0));
          }
        }),
        (s._kill = function (t, e, i) {
          if (
            ("all" === t && (t = null),
            null == t && (null == e || e === this.target))
          )
            return (this._lazy = !1), this._enabled(!1, !1);
          e =
            "string" != typeof e
              ? e || this._targets || this.target
              : k.selector(e) || e;
          var n,
            r,
            o,
            s,
            a,
            l,
            h,
            u,
            c,
            f =
              i &&
              this._time &&
              i._startTime === this._startTime &&
              this._timeline === i._timeline;
          if ((p(e) || O(e)) && "number" != typeof e[0])
            for (n = e.length; --n > -1; ) this._kill(t, e[n], i) && (l = !0);
          else {
            if (this._targets) {
              for (n = this._targets.length; --n > -1; )
                if (e === this._targets[n]) {
                  (a = this._propLookup[n] || {}),
                    (this._overwrittenProps = this._overwrittenProps || []),
                    (r = this._overwrittenProps[n] =
                      t ? this._overwrittenProps[n] || {} : "all");
                  break;
                }
            } else {
              if (e !== this.target) return !1;
              (a = this._propLookup),
                (r = this._overwrittenProps =
                  t ? this._overwrittenProps || {} : "all");
            }
            if (a) {
              if (
                ((h = t || a),
                (u =
                  t !== r &&
                  "all" !== r &&
                  t !== a &&
                  ("object" != typeof t || !t._tempKill)),
                i && (k.onOverwrite || this.vars.onOverwrite))
              ) {
                for (o in h) a[o] && (c || (c = []), c.push(o));
                if ((c || !t) && !K(this, i, e, c)) return !1;
              }
              for (o in h)
                (s = a[o]) &&
                  (f && (s.f ? s.t[s.p](s.s) : (s.t[s.p] = s.s), (l = !0)),
                  s.pg && s.t._kill(h) && (l = !0),
                  (s.pg && 0 !== s.t._overwriteProps.length) ||
                    (s._prev
                      ? (s._prev._next = s._next)
                      : s === this._firstPT && (this._firstPT = s._next),
                    s._next && (s._next._prev = s._prev),
                    (s._next = s._prev = null)),
                  delete a[o]),
                  u && (r[o] = 1);
              !this._firstPT && this._initted && this._enabled(!1, !1);
            }
          }
          return l;
        }),
        (s.invalidate = function () {
          return (
            this._notifyPluginsOfEnabled &&
              k._onPluginEvent("_onDisable", this),
            (this._firstPT =
              this._overwrittenProps =
              this._startAt =
              this._onUpdate =
                null),
            (this._notifyPluginsOfEnabled = this._active = this._lazy = !1),
            (this._propLookup = this._targets ? {} : []),
            I.prototype.invalidate.call(this),
            this.vars.immediateRender &&
              ((this._time = -c), this.render(Math.min(0, -this._delay))),
            this
          );
        }),
        (s._enabled = function (t, e) {
          if ((l || a.wake(), t && this._gc)) {
            var i,
              n = this._targets;
            if (n)
              for (i = n.length; --i > -1; )
                this._siblings[i] = Q(n[i], this, !0);
            else this._siblings = Q(this.target, this, !0);
          }
          return (
            I.prototype._enabled.call(this, t, e),
            !(!this._notifyPluginsOfEnabled || !this._firstPT) &&
              k._onPluginEvent(t ? "_onEnable" : "_onDisable", this)
          );
        }),
        (k.to = function (t, e, i) {
          return new k(t, e, i);
        }),
        (k.from = function (t, e, i) {
          return (
            (i.runBackwards = !0),
            (i.immediateRender = 0 != i.immediateRender),
            new k(t, e, i)
          );
        }),
        (k.fromTo = function (t, e, i, n) {
          return (
            (n.startAt = i),
            (n.immediateRender =
              0 != n.immediateRender && 0 != i.immediateRender),
            new k(t, e, n)
          );
        }),
        (k.delayedCall = function (t, e, i, n, r) {
          return new k(e, 0, {
            delay: t,
            onComplete: e,
            onCompleteParams: i,
            callbackScope: n,
            onReverseComplete: e,
            onReverseCompleteParams: i,
            immediateRender: !1,
            lazy: !1,
            useFrames: r,
            overwrite: 0,
          });
        }),
        (k.set = function (t, e) {
          return new k(t, 0, e);
        }),
        (k.getTweensOf = function (t, e) {
          if (null == t) return [];
          t = "string" != typeof t ? t : k.selector(t) || t;
          var i, n, r, o;
          if ((p(t) || O(t)) && "number" != typeof t[0]) {
            for (i = t.length, n = []; --i > -1; )
              n = n.concat(k.getTweensOf(t[i], e));
            for (i = n.length; --i > -1; )
              for (o = n[i], r = i; --r > -1; ) o === n[r] && n.splice(i, 1);
          } else
            for (n = Q(t).concat(), i = n.length; --i > -1; )
              (n[i]._gc || (e && !n[i].isActive())) && n.splice(i, 1);
          return n;
        }),
        (k.killTweensOf = k.killDelayedCallsTo =
          function (t, e, i) {
            "object" == typeof e && ((i = e), (e = !1));
            for (var n = k.getTweensOf(t, e), r = n.length; --r > -1; )
              n[r]._kill(i, t);
          });
      var tt = y(
        "plugins.TweenPlugin",
        function (t, e) {
          (this._overwriteProps = (t || "").split(",")),
            (this._propName = this._overwriteProps[0]),
            (this._priority = e || 0),
            (this._super = tt.prototype);
        },
        !0
      );
      if (
        ((s = tt.prototype),
        (tt.version = "1.19.0"),
        (tt.API = 2),
        (s._firstPT = null),
        (s._addTween = F),
        (s.setRatio = z),
        (s._kill = function (t) {
          var e,
            i = this._overwriteProps,
            n = this._firstPT;
          if (null != t[this._propName]) this._overwriteProps = [];
          else for (e = i.length; --e > -1; ) null != t[i[e]] && i.splice(e, 1);
          for (; n; )
            null != t[n.n] &&
              (n._next && (n._next._prev = n._prev),
              n._prev
                ? ((n._prev._next = n._next), (n._prev = null))
                : this._firstPT === n && (this._firstPT = n._next)),
              (n = n._next);
          return !1;
        }),
        (s._mod = s._roundProps =
          function (t) {
            for (var e, i = this._firstPT; i; )
              (e =
                t[this._propName] ||
                (null != i.n && t[i.n.split(this._propName + "_").join("")])),
                e &&
                  "function" == typeof e &&
                  (2 === i.f ? (i.t._applyPT.m = e) : (i.m = e)),
                (i = i._next);
          }),
        (k._onPluginEvent = function (t, e) {
          var i,
            n,
            r,
            o,
            s,
            a = e._firstPT;
          if ("_onInitAllProps" === t) {
            for (; a; ) {
              for (s = a._next, n = r; n && n.pr > a.pr; ) n = n._next;
              (a._prev = n ? n._prev : o) ? (a._prev._next = a) : (r = a),
                (a._next = n) ? (n._prev = a) : (o = a),
                (a = s);
            }
            a = e._firstPT = r;
          }
          for (; a; )
            a.pg && "function" == typeof a.t[t] && a.t[t]() && (i = !0),
              (a = a._next);
          return i;
        }),
        (tt.activate = function (t) {
          for (var e = t.length; --e > -1; )
            t[e].API === tt.API && (H[new t[e]()._propName] = t[e]);
          return !0;
        }),
        (v.plugin = function (t) {
          if (!(t && t.propName && t.init && t.API))
            throw "illegal plugin definition.";
          var e,
            i = t.propName,
            n = t.priority || 0,
            r = t.overwriteProps,
            o = {
              init: "_onInitTween",
              set: "setRatio",
              kill: "_kill",
              round: "_mod",
              mod: "_mod",
              initAll: "_onInitAllProps",
            },
            s = y(
              "plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin",
              function () {
                tt.call(this, i, n), (this._overwriteProps = r || []);
              },
              t.global === !0
            ),
            a = (s.prototype = new tt(i));
          (a.constructor = s), (s.API = t.API);
          for (e in o) "function" == typeof t[e] && (a[o[e]] = t[e]);
          return (s.version = t.version), tt.activate([s]), s;
        }),
        (r = t._gsQueue))
      ) {
        for (o = 0; o < r.length; o++) r[o]();
        for (s in m)
          m[s].func ||
            t.console.log("GSAP encountered missing dependency: " + s);
      }
      l = !1;
    }
  })(
    "undefined" != typeof module &&
      module.exports &&
      "undefined" != typeof global
      ? global
      : this || window,
    "TweenMax"
  );
var _gsScope =
  "undefined" != typeof module && module.exports && "undefined" != typeof global
    ? global
    : this || window;
if (
  ((_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function () {
    "use strict";
    var t = document.documentElement,
      e = window,
      i = function (i, n) {
        var r = "x" === n ? "Width" : "Height",
          o = "scroll" + r,
          s = "client" + r,
          a = document.body;
        return i === e || i === t || i === a
          ? Math.max(t[o], a[o]) - (e["inner" + r] || t[s] || a[s])
          : i[o] - i["offset" + r];
      },
      n = function (t) {
        return (
          "string" == typeof t && (t = TweenLite.selector(t)),
          t.length &&
            t !== e &&
            t[0] &&
            t[0].style &&
            !t.nodeType &&
            (t = t[0]),
          t === e || (t.nodeType && t.style) ? t : null
        );
      },
      r = function (i, n) {
        var r = "scroll" + ("x" === n ? "Left" : "Top");
        return (
          i === e &&
            (null != i.pageXOffset
              ? (r = "page" + n.toUpperCase() + "Offset")
              : (i = null != t[r] ? t : document.body)),
          function () {
            return i[r];
          }
        );
      },
      o = function (i, o) {
        var s = n(i).getBoundingClientRect(),
          a = !o || o === e || o === document.body,
          l = (a ? t : o).getBoundingClientRect(),
          h = {
            x: s.left - l.left,
            y: s.top - l.top,
          };
        return !a && o && ((h.x += r(o, "x")()), (h.y += r(o, "y")())), h;
      },
      s = function (t, e, n) {
        var r = typeof t;
        return "number" === r || ("string" === r && "=" === t.charAt(1))
          ? t
          : "max" === t
          ? i(e, n)
          : Math.min(i(e, n), o(t, e)[n]);
      },
      a = _gsScope._gsDefine.plugin({
        propName: "scrollTo",
        API: 2,
        version: "1.8.0",
        init: function (t, i, n) {
          return (
            (this._wdw = t === e),
            (this._target = t),
            (this._tween = n),
            "object" != typeof i
              ? ((i = {
                  y: i,
                }),
                "string" == typeof i.y &&
                  "max" !== i.y &&
                  "=" !== i.y.charAt(1) &&
                  (i.x = i.y))
              : i.nodeType &&
                (i = {
                  y: i,
                  x: i,
                }),
            (this.vars = i),
            (this._autoKill = i.autoKill !== !1),
            (this.getX = r(t, "x")),
            (this.getY = r(t, "y")),
            (this.x = this.xPrev = this.getX()),
            (this.y = this.yPrev = this.getY()),
            null != i.x
              ? (this._addTween(
                  this,
                  "x",
                  this.x,
                  s(i.x, t, "x") - (i.offsetX || 0),
                  "scrollTo_x",
                  !0
                ),
                this._overwriteProps.push("scrollTo_x"))
              : (this.skipX = !0),
            null != i.y
              ? (this._addTween(
                  this,
                  "y",
                  this.y,
                  s(i.y, t, "y") - (i.offsetY || 0),
                  "scrollTo_y",
                  !0
                ),
                this._overwriteProps.push("scrollTo_y"))
              : (this.skipY = !0),
            !0
          );
        },
        set: function (t) {
          this._super.setRatio.call(this, t);
          var n = this._wdw || !this.skipX ? this.getX() : this.xPrev,
            r = this._wdw || !this.skipY ? this.getY() : this.yPrev,
            o = r - this.yPrev,
            s = n - this.xPrev,
            l = a.autoKillThreshold;
          this.x < 0 && (this.x = 0),
            this.y < 0 && (this.y = 0),
            this._autoKill &&
              (!this.skipX &&
                (s > l || -l > s) &&
                n < i(this._target, "x") &&
                (this.skipX = !0),
              !this.skipY &&
                (o > l || -l > o) &&
                r < i(this._target, "y") &&
                (this.skipY = !0),
              this.skipX &&
                this.skipY &&
                (this._tween.kill(),
                this.vars.onAutoKill &&
                  this.vars.onAutoKill.apply(
                    this.vars.onAutoKillScope || this._tween,
                    this.vars.onAutoKillParams || []
                  ))),
            this._wdw
              ? e.scrollTo(this.skipX ? n : this.x, this.skipY ? r : this.y)
              : (this.skipY || (this._target.scrollTop = this.y),
                this.skipX || (this._target.scrollLeft = this.x)),
            (this.xPrev = this.x),
            (this.yPrev = this.y);
        },
      }),
      l = a.prototype;
    (a.max = i),
      (a.getOffset = o),
      (a.autoKillThreshold = 7),
      (l._kill = function (t) {
        return (
          t.scrollTo_x && (this.skipX = !0),
          t.scrollTo_y && (this.skipY = !0),
          this._super._kill.call(this, t)
        );
      });
  }),
  _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
  (function (t) {
    "use strict";
    var e = function () {
      return (_gsScope.GreenSockGlobals || _gsScope)[t];
    };
    "function" == typeof define && define.amd
      ? define(["TweenLite"], e)
      : "undefined" != typeof module &&
        module.exports &&
        (require("../TweenLite.js"), (module.exports = e()));
  })("ScrollToPlugin"),
  !(function (t, e) {
    "function" == typeof define && define.amd
      ? define(e)
      : "object" == typeof exports
      ? (module.exports = e(require, exports, module))
      : (t.Tether = e());
  })(this, function (t, e, i) {
    "use strict";
    function n(t, e) {
      if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function");
    }
    function r(t) {
      var e = t.getBoundingClientRect(),
        i = {};
      for (var n in e) i[n] = e[n];
      if (t.ownerDocument !== document) {
        var o = t.ownerDocument.defaultView.frameElement;
        if (o) {
          var s = r(o);
          (i.top += s.top),
            (i.bottom += s.top),
            (i.left += s.left),
            (i.right += s.left);
        }
      }
      return i;
    }
    function o(t) {
      var e = getComputedStyle(t) || {},
        i = e.position,
        n = [];
      if ("fixed" === i) return [t];
      for (var r = t; (r = r.parentNode) && r && 1 === r.nodeType; ) {
        var o = void 0;
        try {
          o = getComputedStyle(r);
        } catch (t) {}
        if ("undefined" == typeof o || null === o) return n.push(r), n;
        var s = o,
          a = s.overflow,
          l = s.overflowX,
          h = s.overflowY;
        /(auto|scroll)/.test(a + h + l) &&
          ("absolute" !== i ||
            ["relative", "absolute", "fixed"].indexOf(o.position) >= 0) &&
          n.push(r);
      }
      return (
        n.push(t.ownerDocument.body),
        t.ownerDocument !== document && n.push(t.ownerDocument.defaultView),
        n
      );
    }
    function s() {
      C && document.body.removeChild(C), (C = null);
    }
    function a(t) {
      var e = void 0;
      t === document
        ? ((e = document), (t = document.documentElement))
        : (e = t.ownerDocument);
      var i = e.documentElement,
        n = r(t),
        o = I();
      return (
        (n.top -= o.top),
        (n.left -= o.left),
        "undefined" == typeof n.width &&
          (n.width = document.body.scrollWidth - n.left - n.right),
        "undefined" == typeof n.height &&
          (n.height = document.body.scrollHeight - n.top - n.bottom),
        (n.top = n.top - i.clientTop),
        (n.left = n.left - i.clientLeft),
        (n.right = e.body.clientWidth - n.width - n.left),
        (n.bottom = e.body.clientHeight - n.height - n.top),
        n
      );
    }
    function l(t) {
      return t.offsetParent || document.documentElement;
    }
    function h() {
      if (D) return D;
      var t = document.createElement("div");
      (t.style.width = "100%"), (t.style.height = "200px");
      var e = document.createElement("div");
      u(e.style, {
        position: "absolute",
        top: 0,
        left: 0,
        pointerEvents: "none",
        visibility: "hidden",
        width: "200px",
        height: "150px",
        overflow: "hidden",
      }),
        e.appendChild(t),
        document.body.appendChild(e);
      var i = t.offsetWidth;
      e.style.overflow = "scroll";
      var n = t.offsetWidth;
      i === n && (n = e.clientWidth), document.body.removeChild(e);
      var r = i - n;
      return (D = {
        width: r,
        height: r,
      });
    }
    function u() {
      var t =
          arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
        e = [];
      return (
        Array.prototype.push.apply(e, arguments),
        e.slice(1).forEach(function (e) {
          if (e)
            for (var i in e) ({}.hasOwnProperty.call(e, i) && (t[i] = e[i]));
        }),
        t
      );
    }
    function c(t, e) {
      if ("undefined" != typeof t.classList)
        e.split(" ").forEach(function (e) {
          e.trim() && t.classList.remove(e);
        });
      else {
        var i = new RegExp("(^| )" + e.split(" ").join("|") + "( |$)", "gi"),
          n = p(t).replace(i, " ");
        m(t, n);
      }
    }
    function f(t, e) {
      if ("undefined" != typeof t.classList)
        e.split(" ").forEach(function (e) {
          e.trim() && t.classList.add(e);
        });
      else {
        c(t, e);
        var i = p(t) + (" " + e);
        m(t, i);
      }
    }
    function d(t, e) {
      if ("undefined" != typeof t.classList) return t.classList.contains(e);
      var i = p(t);
      return new RegExp("(^| )" + e + "( |$)", "gi").test(i);
    }
    function p(t) {
      return t.className instanceof
        t.ownerDocument.defaultView.SVGAnimatedString
        ? t.className.baseVal
        : t.className;
    }
    function m(t, e) {
      t.setAttribute("class", e);
    }
    function g(t, e, i) {
      i.forEach(function (i) {
        -1 === e.indexOf(i) && d(t, i) && c(t, i);
      }),
        e.forEach(function (e) {
          d(t, e) || f(t, e);
        });
    }
    function n(t, e) {
      if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function");
    }
    function v(t, e) {
      if ("function" != typeof e && null !== e)
        throw new TypeError(
          "Super expression must either be null or a function, not " + typeof e
        );
      (t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0,
        },
      })),
        e &&
          (Object.setPrototypeOf
            ? Object.setPrototypeOf(t, e)
            : (t.__proto__ = e));
    }
    function y(t, e) {
      var i =
        arguments.length <= 2 || void 0 === arguments[2] ? 1 : arguments[2];
      return t + i >= e && e >= t - i;
    }
    function _() {
      return "undefined" != typeof performance &&
        "undefined" != typeof performance.now
        ? performance.now()
        : +new Date();
    }
    function b() {
      for (
        var t = {
            top: 0,
            left: 0,
          },
          e = arguments.length,
          i = Array(e),
          n = 0;
        e > n;
        n++
      )
        i[n] = arguments[n];
      return (
        i.forEach(function (e) {
          var i = e.top,
            n = e.left;
          "string" == typeof i && (i = parseFloat(i, 10)),
            "string" == typeof n && (n = parseFloat(n, 10)),
            (t.top += i),
            (t.left += n);
        }),
        t
      );
    }
    function T(t, e) {
      return (
        "string" == typeof t.left &&
          -1 !== t.left.indexOf("%") &&
          (t.left = (parseFloat(t.left, 10) / 100) * e.width),
        "string" == typeof t.top &&
          -1 !== t.top.indexOf("%") &&
          (t.top = (parseFloat(t.top, 10) / 100) * e.height),
        t
      );
    }
    function x(t, e) {
      return (
        "scrollParent" === e
          ? (e = t.scrollParents[0])
          : "window" === e &&
            (e = [
              pageXOffset,
              pageYOffset,
              innerWidth + pageXOffset,
              innerHeight + pageYOffset,
            ]),
        e === document && (e = e.documentElement),
        "undefined" != typeof e.nodeType &&
          !(function () {
            var t = e,
              i = a(e),
              n = i,
              r = getComputedStyle(e);
            if (
              ((e = [n.left, n.top, i.width + n.left, i.height + n.top]),
              t.ownerDocument !== document)
            ) {
              var o = t.ownerDocument.defaultView;
              (e[0] += o.pageXOffset),
                (e[1] += o.pageYOffset),
                (e[2] += o.pageXOffset),
                (e[3] += o.pageYOffset);
            }
            G.forEach(function (t, i) {
              (t = t[0].toUpperCase() + t.substr(1)),
                "Top" === t || "Left" === t
                  ? (e[i] += parseFloat(r["border" + t + "Width"]))
                  : (e[i] -= parseFloat(r["border" + t + "Width"]));
            });
          })(),
        e
      );
    }
    var w = (function () {
        function t(t, e) {
          for (var i = 0; i < e.length; i++) {
            var n = e[i];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(t, n.key, n);
          }
        }
        return function (e, i, n) {
          return i && t(e.prototype, i), n && t(e, n), e;
        };
      })(),
      E = void 0;
    "undefined" == typeof E &&
      (E = {
        modules: [],
      });
    var C = null,
      S = (function () {
        var t = 0;
        return function () {
          return ++t;
        };
      })(),
      A = {},
      I = function () {
        var t = C;
        t ||
          ((t = document.createElement("div")),
          t.setAttribute("data-tether-id", S()),
          u(t.style, {
            top: 0,
            left: 0,
            position: "absolute",
          }),
          document.body.appendChild(t),
          (C = t));
        var e = t.getAttribute("data-tether-id");
        return (
          "undefined" == typeof A[e] &&
            ((A[e] = r(t)),
            k(function () {
              delete A[e];
            })),
          A[e]
        );
      },
      D = null,
      P = [],
      k = function (t) {
        P.push(t);
      },
      O = function () {
        for (var t = void 0; (t = P.pop()); ) t();
      },
      L = (function () {
        function t() {
          n(this, t);
        }
        return (
          w(t, [
            {
              key: "on",
              value: function (t, e, i) {
                var n =
                  !(arguments.length <= 3 || void 0 === arguments[3]) &&
                  arguments[3];
                "undefined" == typeof this.bindings && (this.bindings = {}),
                  "undefined" == typeof this.bindings[t] &&
                    (this.bindings[t] = []),
                  this.bindings[t].push({
                    handler: e,
                    ctx: i,
                    once: n,
                  });
              },
            },
            {
              key: "once",
              value: function (t, e, i) {
                this.on(t, e, i, !0);
              },
            },
            {
              key: "off",
              value: function (t, e) {
                if (
                  "undefined" != typeof this.bindings &&
                  "undefined" != typeof this.bindings[t]
                )
                  if ("undefined" == typeof e) delete this.bindings[t];
                  else
                    for (var i = 0; i < this.bindings[t].length; )
                      this.bindings[t][i].handler === e
                        ? this.bindings[t].splice(i, 1)
                        : ++i;
              },
            },
            {
              key: "trigger",
              value: function (t) {
                if ("undefined" != typeof this.bindings && this.bindings[t]) {
                  for (
                    var e = 0,
                      i = arguments.length,
                      n = Array(i > 1 ? i - 1 : 0),
                      r = 1;
                    i > r;
                    r++
                  )
                    n[r - 1] = arguments[r];
                  for (; e < this.bindings[t].length; ) {
                    var o = this.bindings[t][e],
                      s = o.handler,
                      a = o.ctx,
                      l = o.once,
                      h = a;
                    "undefined" == typeof h && (h = this),
                      s.apply(h, n),
                      l ? this.bindings[t].splice(e, 1) : ++e;
                  }
                }
              },
            },
          ]),
          t
        );
      })();
    E.Utils = {
      getActualBoundingClientRect: r,
      getScrollParents: o,
      getBounds: a,
      getOffsetParent: l,
      extend: u,
      addClass: f,
      removeClass: c,
      hasClass: d,
      updateClasses: g,
      defer: k,
      flush: O,
      uniqueId: S,
      Evented: L,
      getScrollBarSize: h,
      removeUtilElements: s,
    };
    var N = (function () {
        function t(t, e) {
          var i = [],
            n = !0,
            r = !1,
            o = void 0;
          try {
            for (
              var s, a = t[Symbol.iterator]();
              !(n = (s = a.next()).done) &&
              (i.push(s.value), !e || i.length !== e);
              n = !0
            );
          } catch (t) {
            (r = !0), (o = t);
          } finally {
            try {
              !n && a.return && a.return();
            } finally {
              if (r) throw o;
            }
          }
          return i;
        }
        return function (e, i) {
          if (Array.isArray(e)) return e;
          if (Symbol.iterator in Object(e)) return t(e, i);
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance"
          );
        };
      })(),
      w = (function () {
        function t(t, e) {
          for (var i = 0; i < e.length; i++) {
            var n = e[i];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(t, n.key, n);
          }
        }
        return function (e, i, n) {
          return i && t(e.prototype, i), n && t(e, n), e;
        };
      })(),
      R = function (t, e, i) {
        for (var n = !0; n; ) {
          var r = t,
            o = e,
            s = i;
          (n = !1), null === r && (r = Function.prototype);
          var a = Object.getOwnPropertyDescriptor(r, o);
          if (void 0 !== a) {
            if ("value" in a) return a.value;
            var l = a.get;
            if (void 0 === l) return;
            return l.call(s);
          }
          var h = Object.getPrototypeOf(r);
          if (null === h) return;
          (t = h), (e = o), (i = s), (n = !0), (a = h = void 0);
        }
      };
    if ("undefined" == typeof E)
      throw new Error("You must include the utils.js file before tether.js");
    var M = E.Utils,
      o = M.getScrollParents,
      a = M.getBounds,
      l = M.getOffsetParent,
      u = M.extend,
      f = M.addClass,
      c = M.removeClass,
      g = M.updateClasses,
      k = M.defer,
      O = M.flush,
      h = M.getScrollBarSize,
      s = M.removeUtilElements,
      z = (function () {
        if ("undefined" == typeof document) return "";
        for (
          var t = document.createElement("div"),
            e = [
              "transform",
              "WebkitTransform",
              "OTransform",
              "MozTransform",
              "msTransform",
            ],
            i = 0;
          i < e.length;
          ++i
        ) {
          var n = e[i];
          if (void 0 !== t.style[n]) return n;
        }
      })(),
      j = [],
      F = function () {
        j.forEach(function (t) {
          t.position(!1);
        }),
          O();
      };
    !(function () {
      var t = null,
        e = null,
        i = null,
        n = function n() {
          return "undefined" != typeof e && e > 16
            ? ((e = Math.min(e - 16, 250)), void (i = setTimeout(n, 250)))
            : void (
                ("undefined" != typeof t && _() - t < 10) ||
                (null != i && (clearTimeout(i), (i = null)),
                (t = _()),
                F(),
                (e = _() - t))
              );
        };
      "undefined" != typeof window &&
        "undefined" != typeof window.addEventListener &&
        ["resize", "scroll", "touchmove"].forEach(function (t) {
          window.addEventListener(t, n);
        });
    })();
    var W = {
        center: "center",
        left: "right",
        right: "left",
      },
      H = {
        middle: "middle",
        top: "bottom",
        bottom: "top",
      },
      B = {
        top: 0,
        left: 0,
        middle: "50%",
        center: "50%",
        bottom: "100%",
        right: "100%",
      },
      q = function (t, e) {
        var i = t.left,
          n = t.top;
        return (
          "auto" === i && (i = W[e.left]),
          "auto" === n && (n = H[e.top]),
          {
            left: i,
            top: n,
          }
        );
      },
      V = function (t) {
        var e = t.left,
          i = t.top;
        return (
          "undefined" != typeof B[t.left] && (e = B[t.left]),
          "undefined" != typeof B[t.top] && (i = B[t.top]),
          {
            left: e,
            top: i,
          }
        );
      },
      U = function (t) {
        var e = t.split(" "),
          i = N(e, 2),
          n = i[0],
          r = i[1];
        return {
          top: n,
          left: r,
        };
      },
      $ = U,
      Y = (function (t) {
        function e(t) {
          var i = this;
          n(this, e),
            R(Object.getPrototypeOf(e.prototype), "constructor", this).call(
              this
            ),
            (this.position = this.position.bind(this)),
            j.push(this),
            (this.history = []),
            this.setOptions(t, !1),
            E.modules.forEach(function (t) {
              "undefined" != typeof t.initialize && t.initialize.call(i);
            }),
            this.position();
        }
        return (
          v(e, t),
          w(e, [
            {
              key: "getClass",
              value: function () {
                var t =
                    arguments.length <= 0 || void 0 === arguments[0]
                      ? ""
                      : arguments[0],
                  e = this.options.classes;
                return "undefined" != typeof e && e[t]
                  ? this.options.classes[t]
                  : this.options.classPrefix
                  ? this.options.classPrefix + "-" + t
                  : t;
              },
            },
            {
              key: "setOptions",
              value: function (t) {
                var e = this,
                  i =
                    arguments.length <= 1 ||
                    void 0 === arguments[1] ||
                    arguments[1],
                  n = {
                    offset: "0 0",
                    targetOffset: "0 0",
                    targetAttachment: "auto auto",
                    classPrefix: "tether",
                  };
                this.options = u(n, t);
                var r = this.options,
                  s = r.element,
                  a = r.target,
                  l = r.targetModifier;
                if (
                  ((this.element = s),
                  (this.target = a),
                  (this.targetModifier = l),
                  "viewport" === this.target
                    ? ((this.target = document.body),
                      (this.targetModifier = "visible"))
                    : "scroll-handle" === this.target &&
                      ((this.target = document.body),
                      (this.targetModifier = "scroll-handle")),
                  ["element", "target"].forEach(function (t) {
                    if ("undefined" == typeof e[t])
                      throw new Error(
                        "Tether Error: Both element and target must be defined"
                      );
                    "undefined" != typeof e[t].jquery
                      ? (e[t] = e[t][0])
                      : "string" == typeof e[t] &&
                        (e[t] = document.querySelector(e[t]));
                  }),
                  f(this.element, this.getClass("element")),
                  this.options.addTargetClasses !== !1 &&
                    f(this.target, this.getClass("target")),
                  !this.options.attachment)
                )
                  throw new Error(
                    "Tether Error: You must provide an attachment"
                  );
                (this.targetAttachment = $(this.options.targetAttachment)),
                  (this.attachment = $(this.options.attachment)),
                  (this.offset = U(this.options.offset)),
                  (this.targetOffset = U(this.options.targetOffset)),
                  "undefined" != typeof this.scrollParents && this.disable(),
                  "scroll-handle" === this.targetModifier
                    ? (this.scrollParents = [this.target])
                    : (this.scrollParents = o(this.target)),
                  this.options.enabled !== !1 && this.enable(i);
              },
            },
            {
              key: "getTargetBounds",
              value: function () {
                if ("undefined" == typeof this.targetModifier)
                  return a(this.target);
                if ("visible" === this.targetModifier) {
                  if (this.target === document.body)
                    return {
                      top: pageYOffset,
                      left: pageXOffset,
                      height: innerHeight,
                      width: innerWidth,
                    };
                  var t = a(this.target),
                    e = {
                      height: t.height,
                      width: t.width,
                      top: t.top,
                      left: t.left,
                    };
                  return (
                    (e.height = Math.min(
                      e.height,
                      t.height - (pageYOffset - t.top)
                    )),
                    (e.height = Math.min(
                      e.height,
                      t.height -
                        (t.top + t.height - (pageYOffset + innerHeight))
                    )),
                    (e.height = Math.min(innerHeight, e.height)),
                    (e.height -= 2),
                    (e.width = Math.min(
                      e.width,
                      t.width - (pageXOffset - t.left)
                    )),
                    (e.width = Math.min(
                      e.width,
                      t.width - (t.left + t.width - (pageXOffset + innerWidth))
                    )),
                    (e.width = Math.min(innerWidth, e.width)),
                    (e.width -= 2),
                    e.top < pageYOffset && (e.top = pageYOffset),
                    e.left < pageXOffset && (e.left = pageXOffset),
                    e
                  );
                }
                if ("scroll-handle" === this.targetModifier) {
                  var t = void 0,
                    i = this.target;
                  i === document.body
                    ? ((i = document.documentElement),
                      (t = {
                        left: pageXOffset,
                        top: pageYOffset,
                        height: innerHeight,
                        width: innerWidth,
                      }))
                    : (t = a(i));
                  var n = getComputedStyle(i),
                    r =
                      i.scrollWidth > i.clientWidth ||
                      [n.overflow, n.overflowX].indexOf("scroll") >= 0 ||
                      this.target !== document.body,
                    o = 0;
                  r && (o = 15);
                  var s =
                      t.height -
                      parseFloat(n.borderTopWidth) -
                      parseFloat(n.borderBottomWidth) -
                      o,
                    e = {
                      width: 15,
                      height: 0.975 * s * (s / i.scrollHeight),
                      left:
                        t.left + t.width - parseFloat(n.borderLeftWidth) - 15,
                    },
                    l = 0;
                  408 > s &&
                    this.target === document.body &&
                    (l = -11e-5 * Math.pow(s, 2) - 0.00727 * s + 22.58),
                    this.target !== document.body &&
                      (e.height = Math.max(e.height, 24));
                  var h = this.target.scrollTop / (i.scrollHeight - s);
                  return (
                    (e.top =
                      h * (s - e.height - l) +
                      t.top +
                      parseFloat(n.borderTopWidth)),
                    this.target === document.body &&
                      (e.height = Math.max(e.height, 24)),
                    e
                  );
                }
              },
            },
            {
              key: "clearCache",
              value: function () {
                this._cache = {};
              },
            },
            {
              key: "cache",
              value: function (t, e) {
                return (
                  "undefined" == typeof this._cache && (this._cache = {}),
                  "undefined" == typeof this._cache[t] &&
                    (this._cache[t] = e.call(this)),
                  this._cache[t]
                );
              },
            },
            {
              key: "enable",
              value: function () {
                var t = this,
                  e =
                    arguments.length <= 0 ||
                    void 0 === arguments[0] ||
                    arguments[0];
                this.options.addTargetClasses !== !1 &&
                  f(this.target, this.getClass("enabled")),
                  f(this.element, this.getClass("enabled")),
                  (this.enabled = !0),
                  this.scrollParents.forEach(function (e) {
                    e !== t.target.ownerDocument &&
                      e.addEventListener("scroll", t.position);
                  }),
                  e && this.position();
              },
            },
            {
              key: "disable",
              value: function () {
                var t = this;
                c(this.target, this.getClass("enabled")),
                  c(this.element, this.getClass("enabled")),
                  (this.enabled = !1),
                  "undefined" != typeof this.scrollParents &&
                    this.scrollParents.forEach(function (e) {
                      e.removeEventListener("scroll", t.position);
                    });
              },
            },
            {
              key: "destroy",
              value: function () {
                var t = this;
                this.disable(),
                  j.forEach(function (e, i) {
                    e === t && j.splice(i, 1);
                  }),
                  0 === j.length && s();
              },
            },
            {
              key: "updateAttachClasses",
              value: function (t, e) {
                var i = this;
                (t = t || this.attachment), (e = e || this.targetAttachment);
                var n = ["left", "top", "bottom", "right", "middle", "center"];
                "undefined" != typeof this._addAttachClasses &&
                  this._addAttachClasses.length &&
                  this._addAttachClasses.splice(
                    0,
                    this._addAttachClasses.length
                  ),
                  "undefined" == typeof this._addAttachClasses &&
                    (this._addAttachClasses = []);
                var r = this._addAttachClasses;
                t.top &&
                  r.push(this.getClass("element-attached") + "-" + t.top),
                  t.left &&
                    r.push(this.getClass("element-attached") + "-" + t.left),
                  e.top &&
                    r.push(this.getClass("target-attached") + "-" + e.top),
                  e.left &&
                    r.push(this.getClass("target-attached") + "-" + e.left);
                var o = [];
                n.forEach(function (t) {
                  o.push(i.getClass("element-attached") + "-" + t),
                    o.push(i.getClass("target-attached") + "-" + t);
                }),
                  k(function () {
                    "undefined" != typeof i._addAttachClasses &&
                      (g(i.element, i._addAttachClasses, o),
                      i.options.addTargetClasses !== !1 &&
                        g(i.target, i._addAttachClasses, o),
                      delete i._addAttachClasses);
                  });
              },
            },
            {
              key: "position",
              value: function () {
                var t = this,
                  e =
                    arguments.length <= 0 ||
                    void 0 === arguments[0] ||
                    arguments[0];
                if (this.enabled) {
                  this.clearCache();
                  var i = q(this.targetAttachment, this.attachment);
                  this.updateAttachClasses(this.attachment, i);
                  var n = this.cache("element-bounds", function () {
                      return a(t.element);
                    }),
                    r = n.width,
                    o = n.height;
                  if (
                    0 === r &&
                    0 === o &&
                    "undefined" != typeof this.lastSize
                  ) {
                    var s = this.lastSize;
                    (r = s.width), (o = s.height);
                  } else
                    this.lastSize = {
                      width: r,
                      height: o,
                    };
                  var u = this.cache("target-bounds", function () {
                      return t.getTargetBounds();
                    }),
                    c = u,
                    f = T(V(this.attachment), {
                      width: r,
                      height: o,
                    }),
                    d = T(V(i), c),
                    p = T(this.offset, {
                      width: r,
                      height: o,
                    }),
                    m = T(this.targetOffset, c);
                  (f = b(f, p)), (d = b(d, m));
                  for (
                    var g = u.left + d.left - f.left,
                      v = u.top + d.top - f.top,
                      y = 0;
                    y < E.modules.length;
                    ++y
                  ) {
                    var _ = E.modules[y],
                      x = _.position.call(this, {
                        left: g,
                        top: v,
                        targetAttachment: i,
                        targetPos: u,
                        elementPos: n,
                        offset: f,
                        targetOffset: d,
                        manualOffset: p,
                        manualTargetOffset: m,
                        scrollbarSize: A,
                        attachment: this.attachment,
                      });
                    if (x === !1) return !1;
                    "undefined" != typeof x &&
                      "object" == typeof x &&
                      ((v = x.top), (g = x.left));
                  }
                  var w = {
                      page: {
                        top: v,
                        left: g,
                      },
                      viewport: {
                        top: v - pageYOffset,
                        bottom: pageYOffset - v - o + innerHeight,
                        left: g - pageXOffset,
                        right: pageXOffset - g - r + innerWidth,
                      },
                    },
                    C = this.target.ownerDocument,
                    S = C.defaultView,
                    A = void 0;
                  return (
                    S.innerHeight > C.documentElement.clientHeight &&
                      ((A = this.cache("scrollbar-size", h)),
                      (w.viewport.bottom -= A.height)),
                    S.innerWidth > C.documentElement.clientWidth &&
                      ((A = this.cache("scrollbar-size", h)),
                      (w.viewport.right -= A.width)),
                    (-1 === ["", "static"].indexOf(C.body.style.position) ||
                      -1 ===
                        ["", "static"].indexOf(
                          C.body.parentElement.style.position
                        )) &&
                      ((w.page.bottom = C.body.scrollHeight - v - o),
                      (w.page.right = C.body.scrollWidth - g - r)),
                    "undefined" != typeof this.options.optimizations &&
                      this.options.optimizations.moveElement !== !1 &&
                      "undefined" == typeof this.targetModifier &&
                      !(function () {
                        var e = t.cache("target-offsetparent", function () {
                            return l(t.target);
                          }),
                          i = t.cache(
                            "target-offsetparent-bounds",
                            function () {
                              return a(e);
                            }
                          ),
                          n = getComputedStyle(e),
                          r = i,
                          o = {};
                        if (
                          (["Top", "Left", "Bottom", "Right"].forEach(function (
                            t
                          ) {
                            o[t.toLowerCase()] = parseFloat(
                              n["border" + t + "Width"]
                            );
                          }),
                          (i.right =
                            C.body.scrollWidth - i.left - r.width + o.right),
                          (i.bottom =
                            C.body.scrollHeight - i.top - r.height + o.bottom),
                          w.page.top >= i.top + o.top &&
                            w.page.bottom >= i.bottom &&
                            w.page.left >= i.left + o.left &&
                            w.page.right >= i.right)
                        ) {
                          var s = e.scrollTop,
                            h = e.scrollLeft;
                          w.offset = {
                            top: w.page.top - i.top + s - o.top,
                            left: w.page.left - i.left + h - o.left,
                          };
                        }
                      })(),
                    this.move(w),
                    this.history.unshift(w),
                    this.history.length > 3 && this.history.pop(),
                    e && O(),
                    !0
                  );
                }
              },
            },
            {
              key: "move",
              value: function (t) {
                var e = this;
                if ("undefined" != typeof this.element.parentNode) {
                  var i = {};
                  for (var n in t) {
                    i[n] = {};
                    for (var r in t[n]) {
                      for (var o = !1, s = 0; s < this.history.length; ++s) {
                        var a = this.history[s];
                        if (
                          "undefined" != typeof a[n] &&
                          !y(a[n][r], t[n][r])
                        ) {
                          o = !0;
                          break;
                        }
                      }
                      o || (i[n][r] = !0);
                    }
                  }
                  var h = {
                      top: "",
                      left: "",
                      right: "",
                      bottom: "",
                    },
                    c = function (t, i) {
                      var n = "undefined" != typeof e.options.optimizations,
                        r = n ? e.options.optimizations.gpu : null;
                      if (r !== !1) {
                        var o = void 0,
                          s = void 0;
                        if (
                          (t.top
                            ? ((h.top = 0), (o = i.top))
                            : ((h.bottom = 0), (o = -i.bottom)),
                          t.left
                            ? ((h.left = 0), (s = i.left))
                            : ((h.right = 0), (s = -i.right)),
                          window.matchMedia)
                        ) {
                          var a =
                            window.matchMedia(
                              "only screen and (min-resolution: 1.3dppx)"
                            ).matches ||
                            window.matchMedia(
                              "only screen and (-webkit-min-device-pixel-ratio: 1.3)"
                            ).matches;
                          a || ((s = Math.round(s)), (o = Math.round(o)));
                        }
                        (h[z] =
                          "translateX(" + s + "px) translateY(" + o + "px)"),
                          "msTransform" !== z && (h[z] += " translateZ(0)");
                      } else
                        t.top
                          ? (h.top = i.top + "px")
                          : (h.bottom = i.bottom + "px"),
                          t.left
                            ? (h.left = i.left + "px")
                            : (h.right = i.right + "px");
                    },
                    f = !1;
                  if (
                    ((i.page.top || i.page.bottom) &&
                    (i.page.left || i.page.right)
                      ? ((h.position = "absolute"), c(i.page, t.page))
                      : (i.viewport.top || i.viewport.bottom) &&
                        (i.viewport.left || i.viewport.right)
                      ? ((h.position = "fixed"), c(i.viewport, t.viewport))
                      : "undefined" != typeof i.offset &&
                        i.offset.top &&
                        i.offset.left
                      ? !(function () {
                          h.position = "absolute";
                          var n = e.cache("target-offsetparent", function () {
                            return l(e.target);
                          });
                          l(e.element) !== n &&
                            k(function () {
                              e.element.parentNode.removeChild(e.element),
                                n.appendChild(e.element);
                            }),
                            c(i.offset, t.offset),
                            (f = !0);
                        })()
                      : ((h.position = "absolute"),
                        c(
                          {
                            top: !0,
                            left: !0,
                          },
                          t.page
                        )),
                    !f)
                  ) {
                    for (
                      var d = !0, p = this.element.parentNode;
                      p && 1 === p.nodeType && "BODY" !== p.tagName;

                    ) {
                      if ("static" !== getComputedStyle(p).position) {
                        d = !1;
                        break;
                      }
                      p = p.parentNode;
                    }
                    d ||
                      (this.element.parentNode.removeChild(this.element),
                      this.element.ownerDocument.body.appendChild(
                        this.element
                      ));
                  }
                  var m = {},
                    g = !1;
                  for (var r in h) {
                    var v = h[r],
                      _ = this.element.style[r];
                    _ !== v && ((g = !0), (m[r] = v));
                  }
                  g &&
                    k(function () {
                      u(e.element.style, m), e.trigger("repositioned");
                    });
                }
              },
            },
          ]),
          e
        );
      })(L);
    (Y.modules = []), (E.position = F);
    var X = u(Y, E),
      N = (function () {
        function t(t, e) {
          var i = [],
            n = !0,
            r = !1,
            o = void 0;
          try {
            for (
              var s, a = t[Symbol.iterator]();
              !(n = (s = a.next()).done) &&
              (i.push(s.value), !e || i.length !== e);
              n = !0
            );
          } catch (t) {
            (r = !0), (o = t);
          } finally {
            try {
              !n && a.return && a.return();
            } finally {
              if (r) throw o;
            }
          }
          return i;
        }
        return function (e, i) {
          if (Array.isArray(e)) return e;
          if (Symbol.iterator in Object(e)) return t(e, i);
          throw new TypeError(
            "Invalid attempt to destructure non-iterable instance"
          );
        };
      })(),
      M = E.Utils,
      a = M.getBounds,
      u = M.extend,
      g = M.updateClasses,
      k = M.defer,
      G = ["left", "top", "right", "bottom"];
    E.modules.push({
      position: function (t) {
        var e = this,
          i = t.top,
          n = t.left,
          r = t.targetAttachment;
        if (!this.options.constraints) return !0;
        var o = this.cache("element-bounds", function () {
            return a(e.element);
          }),
          s = o.height,
          l = o.width;
        if (0 === l && 0 === s && "undefined" != typeof this.lastSize) {
          var h = this.lastSize;
          (l = h.width), (s = h.height);
        }
        var c = this.cache("target-bounds", function () {
            return e.getTargetBounds();
          }),
          f = c.height,
          d = c.width,
          p = [this.getClass("pinned"), this.getClass("out-of-bounds")];
        this.options.constraints.forEach(function (t) {
          var e = t.outOfBoundsClass,
            i = t.pinnedClass;
          e && p.push(e), i && p.push(i);
        }),
          p.forEach(function (t) {
            ["left", "top", "right", "bottom"].forEach(function (e) {
              p.push(t + "-" + e);
            });
          });
        var m = [],
          v = u({}, r),
          y = u({}, this.attachment);
        return (
          this.options.constraints.forEach(function (t) {
            var o = t.to,
              a = t.attachment,
              h = t.pin;
            "undefined" == typeof a && (a = "");
            var u = void 0,
              c = void 0;
            if (a.indexOf(" ") >= 0) {
              var p = a.split(" "),
                g = N(p, 2);
              (c = g[0]), (u = g[1]);
            } else u = c = a;
            var _ = x(e, o);
            ("target" === c || "both" === c) &&
              (i < _[1] && "top" === v.top && ((i += f), (v.top = "bottom")),
              i + s > _[3] &&
                "bottom" === v.top &&
                ((i -= f), (v.top = "top"))),
              "together" === c &&
                ("top" === v.top &&
                  ("bottom" === y.top && i < _[1]
                    ? ((i += f), (v.top = "bottom"), (i += s), (y.top = "top"))
                    : "top" === y.top &&
                      i + s > _[3] &&
                      i - (s - f) >= _[1] &&
                      ((i -= s - f), (v.top = "bottom"), (y.top = "bottom"))),
                "bottom" === v.top &&
                  ("top" === y.top && i + s > _[3]
                    ? ((i -= f), (v.top = "top"), (i -= s), (y.top = "bottom"))
                    : "bottom" === y.top &&
                      i < _[1] &&
                      i + (2 * s - f) <= _[3] &&
                      ((i += s - f), (v.top = "top"), (y.top = "top"))),
                "middle" === v.top &&
                  (i + s > _[3] && "top" === y.top
                    ? ((i -= s), (y.top = "bottom"))
                    : i < _[1] &&
                      "bottom" === y.top &&
                      ((i += s), (y.top = "top")))),
              ("target" === u || "both" === u) &&
                (n < _[0] &&
                  "left" === v.left &&
                  ((n += d), (v.left = "right")),
                n + l > _[2] &&
                  "right" === v.left &&
                  ((n -= d), (v.left = "left"))),
              "together" === u &&
                (n < _[0] && "left" === v.left
                  ? "right" === y.left
                    ? ((n += d),
                      (v.left = "right"),
                      (n += l),
                      (y.left = "left"))
                    : "left" === y.left &&
                      ((n += d),
                      (v.left = "right"),
                      (n -= l),
                      (y.left = "right"))
                  : n + l > _[2] && "right" === v.left
                  ? "left" === y.left
                    ? ((n -= d),
                      (v.left = "left"),
                      (n -= l),
                      (y.left = "right"))
                    : "right" === y.left &&
                      ((n -= d), (v.left = "left"), (n += l), (y.left = "left"))
                  : "center" === v.left &&
                    (n + l > _[2] && "left" === y.left
                      ? ((n -= l), (y.left = "right"))
                      : n < _[0] &&
                        "right" === y.left &&
                        ((n += l), (y.left = "left")))),
              ("element" === c || "both" === c) &&
                (i < _[1] && "bottom" === y.top && ((i += s), (y.top = "top")),
                i + s > _[3] &&
                  "top" === y.top &&
                  ((i -= s), (y.top = "bottom"))),
              ("element" === u || "both" === u) &&
                (n < _[0] &&
                  ("right" === y.left
                    ? ((n += l), (y.left = "left"))
                    : "center" === y.left && ((n += l / 2), (y.left = "left"))),
                n + l > _[2] &&
                  ("left" === y.left
                    ? ((n -= l), (y.left = "right"))
                    : "center" === y.left &&
                      ((n -= l / 2), (y.left = "right")))),
              "string" == typeof h
                ? (h = h.split(",").map(function (t) {
                    return t.trim();
                  }))
                : h === !0 && (h = ["top", "left", "right", "bottom"]),
              (h = h || []);
            var b = [],
              T = [];
            i < _[1] &&
              (h.indexOf("top") >= 0
                ? ((i = _[1]), b.push("top"))
                : T.push("top")),
              i + s > _[3] &&
                (h.indexOf("bottom") >= 0
                  ? ((i = _[3] - s), b.push("bottom"))
                  : T.push("bottom")),
              n < _[0] &&
                (h.indexOf("left") >= 0
                  ? ((n = _[0]), b.push("left"))
                  : T.push("left")),
              n + l > _[2] &&
                (h.indexOf("right") >= 0
                  ? ((n = _[2] - l), b.push("right"))
                  : T.push("right")),
              b.length &&
                !(function () {
                  var t = void 0;
                  (t =
                    "undefined" != typeof e.options.pinnedClass
                      ? e.options.pinnedClass
                      : e.getClass("pinned")),
                    m.push(t),
                    b.forEach(function (e) {
                      m.push(t + "-" + e);
                    });
                })(),
              T.length &&
                !(function () {
                  var t = void 0;
                  (t =
                    "undefined" != typeof e.options.outOfBoundsClass
                      ? e.options.outOfBoundsClass
                      : e.getClass("out-of-bounds")),
                    m.push(t),
                    T.forEach(function (e) {
                      m.push(t + "-" + e);
                    });
                })(),
              (b.indexOf("left") >= 0 || b.indexOf("right") >= 0) &&
                (y.left = v.left = !1),
              (b.indexOf("top") >= 0 || b.indexOf("bottom") >= 0) &&
                (y.top = v.top = !1),
              (v.top !== r.top ||
                v.left !== r.left ||
                y.top !== e.attachment.top ||
                y.left !== e.attachment.left) &&
                (e.updateAttachClasses(y, v),
                e.trigger("update", {
                  attachment: y,
                  targetAttachment: v,
                }));
          }),
          k(function () {
            e.options.addTargetClasses !== !1 && g(e.target, m, p),
              g(e.element, m, p);
          }),
          {
            top: i,
            left: n,
          }
        );
      },
    });
    var M = E.Utils,
      a = M.getBounds,
      g = M.updateClasses,
      k = M.defer;
    E.modules.push({
      position: function (t) {
        var e = this,
          i = t.top,
          n = t.left,
          r = this.cache("element-bounds", function () {
            return a(e.element);
          }),
          o = r.height,
          s = r.width,
          l = this.getTargetBounds(),
          h = i + o,
          u = n + s,
          c = [];
        i <= l.bottom &&
          h >= l.top &&
          ["left", "right"].forEach(function (t) {
            var e = l[t];
            (e === n || e === u) && c.push(t);
          }),
          n <= l.right &&
            u >= l.left &&
            ["top", "bottom"].forEach(function (t) {
              var e = l[t];
              (e === i || e === h) && c.push(t);
            });
        var f = [],
          d = [],
          p = ["left", "top", "right", "bottom"];
        return (
          f.push(this.getClass("abutted")),
          p.forEach(function (t) {
            f.push(e.getClass("abutted") + "-" + t);
          }),
          c.length && d.push(this.getClass("abutted")),
          c.forEach(function (t) {
            d.push(e.getClass("abutted") + "-" + t);
          }),
          k(function () {
            e.options.addTargetClasses !== !1 && g(e.target, d, f),
              g(e.element, d, f);
          }),
          !0
        );
      },
    });
    var N = (function () {
      function t(t, e) {
        var i = [],
          n = !0,
          r = !1,
          o = void 0;
        try {
          for (
            var s, a = t[Symbol.iterator]();
            !(n = (s = a.next()).done) &&
            (i.push(s.value), !e || i.length !== e);
            n = !0
          );
        } catch (t) {
          (r = !0), (o = t);
        } finally {
          try {
            !n && a.return && a.return();
          } finally {
            if (r) throw o;
          }
        }
        return i;
      }
      return function (e, i) {
        if (Array.isArray(e)) return e;
        if (Symbol.iterator in Object(e)) return t(e, i);
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance"
        );
      };
    })();
    return (
      E.modules.push({
        position: function (t) {
          var e = t.top,
            i = t.left;
          if (this.options.shift) {
            var n = this.options.shift;
            "function" == typeof this.options.shift &&
              (n = this.options.shift.call(this, {
                top: e,
                left: i,
              }));
            var r = void 0,
              o = void 0;
            if ("string" == typeof n) {
              (n = n.split(" ")), (n[1] = n[1] || n[0]);
              var s = n,
                a = N(s, 2);
              (r = a[0]),
                (o = a[1]),
                (r = parseFloat(r, 10)),
                (o = parseFloat(o, 10));
            } else (r = n.top), (o = n.left);
            return (
              (e += r),
              (i += o),
              {
                top: e,
                left: i,
              }
            );
          }
        },
      }),
      X
    );
  }),
  "undefined" == typeof jQuery)
)
  throw new Error("Bootstrap's JavaScript requires jQuery");
+(function (t) {
  var e = t.fn.jquery.split(" ")[0].split(".");
  if (
    (e[0] < 2 && e[1] < 9) ||
    (1 == e[0] && 9 == e[1] && e[2] < 1) ||
    e[0] >= 4
  )
    throw new Error(
      "Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0"
    );
})(jQuery),
  +(function () {
    function t(t, e) {
      if (!t)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return !e || ("object" != typeof e && "function" != typeof e) ? t : e;
    }
    function e(t, e) {
      if ("function" != typeof e && null !== e)
        throw new TypeError(
          "Super expression must either be null or a function, not " + typeof e
        );
      (t.prototype = Object.create(e && e.prototype, {
        constructor: {
          value: t,
          enumerable: !1,
          writable: !0,
          configurable: !0,
        },
      })),
        e &&
          (Object.setPrototypeOf
            ? Object.setPrototypeOf(t, e)
            : (t.__proto__ = e));
    }
    function i(t, e) {
      if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function");
    }
    var n =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            },
      r = (function () {
        function t(t, e) {
          for (var i = 0; i < e.length; i++) {
            var n = e[i];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(t, n.key, n);
          }
        }
        return function (e, i, n) {
          return i && t(e.prototype, i), n && t(e, n), e;
        };
      })(),
      o = (function (t) {
        function e(t) {
          return {}.toString
            .call(t)
            .match(/\s([a-zA-Z]+)/)[1]
            .toLowerCase();
        }
        function i(t) {
          return (t[0] || t).nodeType;
        }
        function n() {
          return {
            bindType: a.end,
            delegateType: a.end,
            handle: function (e) {
              if (t(e.target).is(this))
                return e.handleObj.handler.apply(this, arguments);
            },
          };
        }
        function r() {
          if (window.QUnit) return !1;
          var t = document.createElement("bootstrap");
          for (var e in h)
            if (void 0 !== t.style[e])
              return {
                end: h[e],
              };
          return !1;
        }
        function o(e) {
          var i = this,
            n = !1;
          return (
            t(this).one(u.TRANSITION_END, function () {
              n = !0;
            }),
            setTimeout(function () {
              n || u.triggerTransitionEnd(i);
            }, e),
            this
          );
        }
        function s() {
          (a = r()),
            (t.fn.emulateTransitionEnd = o),
            u.supportsTransitionEnd() &&
              (t.event.special[u.TRANSITION_END] = n());
        }
        var a = !1,
          l = 1e6,
          h = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd otransitionend",
            transition: "transitionend",
          },
          u = {
            TRANSITION_END: "bsTransitionEnd",
            getUID: function (t) {
              do t += ~~(Math.random() * l);
              while (document.getElementById(t));
              return t;
            },
            getSelectorFromElement: function (t) {
              var e = t.getAttribute("data-target");
              return (
                e ||
                  ((e = t.getAttribute("href") || ""),
                  (e = /^#[a-z]/i.test(e) ? e : null)),
                e
              );
            },
            reflow: function (t) {
              return t.offsetHeight;
            },
            triggerTransitionEnd: function (e) {
              t(e).trigger(a.end);
            },
            supportsTransitionEnd: function () {
              return Boolean(a);
            },
            typeCheckConfig: function (t, n, r) {
              for (var o in r)
                if (r.hasOwnProperty(o)) {
                  var s = r[o],
                    a = n[o],
                    l = void 0;
                  if (
                    ((l = a && i(a) ? "element" : e(a)), !new RegExp(s).test(l))
                  )
                    throw new Error(
                      t.toUpperCase() +
                        ": " +
                        ('Option "' + o + '" provided type "' + l + '" ') +
                        ('but expected type "' + s + '".')
                    );
                }
            },
          };
        return s(), u;
      })(jQuery),
      s =
        ((function (t) {
          var e = "alert",
            n = "4.0.0-alpha.5",
            s = "bs.alert",
            a = "." + s,
            l = ".data-api",
            h = t.fn[e],
            u = 150,
            c = {
              DISMISS: '[data-dismiss="alert"]',
            },
            f = {
              CLOSE: "close" + a,
              CLOSED: "closed" + a,
              CLICK_DATA_API: "click" + a + l,
            },
            d = {
              ALERT: "alert",
              FADE: "fade",
              ACTIVE: "active",
            },
            p = (function () {
              function e(t) {
                i(this, e), (this._element = t);
              }
              return (
                (e.prototype.close = function (t) {
                  t = t || this._element;
                  var e = this._getRootElement(t),
                    i = this._triggerCloseEvent(e);
                  i.isDefaultPrevented() || this._removeElement(e);
                }),
                (e.prototype.dispose = function () {
                  t.removeData(this._element, s), (this._element = null);
                }),
                (e.prototype._getRootElement = function (e) {
                  var i = o.getSelectorFromElement(e),
                    n = !1;
                  return (
                    i && (n = t(i)[0]),
                    n || (n = t(e).closest("." + d.ALERT)[0]),
                    n
                  );
                }),
                (e.prototype._triggerCloseEvent = function (e) {
                  var i = t.Event(f.CLOSE);
                  return t(e).trigger(i), i;
                }),
                (e.prototype._removeElement = function (e) {
                  var i = this;
                  return (
                    t(e).removeClass(d.ACTIVE),
                    o.supportsTransitionEnd() && t(e).hasClass(d.FADE)
                      ? void t(e)
                          .one(o.TRANSITION_END, function (t) {
                            return i._destroyElement(e, t);
                          })
                          .emulateTransitionEnd(u)
                      : void this._destroyElement(e)
                  );
                }),
                (e.prototype._destroyElement = function (e) {
                  t(e).detach().trigger(f.CLOSED).remove();
                }),
                (e._jQueryInterface = function (i) {
                  return this.each(function () {
                    var n = t(this),
                      r = n.data(s);
                    r || ((r = new e(this)), n.data(s, r)),
                      "close" === i && r[i](this);
                  });
                }),
                (e._handleDismiss = function (t) {
                  return function (e) {
                    e && e.preventDefault(), t.close(this);
                  };
                }),
                r(e, null, [
                  {
                    key: "VERSION",
                    get: function () {
                      return n;
                    },
                  },
                ]),
                e
              );
            })();
          return (
            t(document).on(
              f.CLICK_DATA_API,
              c.DISMISS,
              p._handleDismiss(new p())
            ),
            (t.fn[e] = p._jQueryInterface),
            (t.fn[e].Constructor = p),
            (t.fn[e].noConflict = function () {
              return (t.fn[e] = h), p._jQueryInterface;
            }),
            p
          );
        })(jQuery),
        (function (t) {
          var e = "button",
            n = "4.0.0-alpha.5",
            o = "bs.button",
            s = "." + o,
            a = ".data-api",
            l = t.fn[e],
            h = {
              ACTIVE: "active",
              BUTTON: "btn",
              FOCUS: "focus",
            },
            u = {
              DATA_TOGGLE_CARROT: '[data-toggle^="button"]',
              DATA_TOGGLE: '[data-toggle="buttons"]',
              INPUT: "input",
              ACTIVE: ".active",
              BUTTON: ".btn",
            },
            c = {
              CLICK_DATA_API: "click" + s + a,
              FOCUS_BLUR_DATA_API: "focus" + s + a + " " + ("blur" + s + a),
            },
            f = (function () {
              function e(t) {
                i(this, e), (this._element = t);
              }
              return (
                (e.prototype.toggle = function () {
                  var e = !0,
                    i = t(this._element).closest(u.DATA_TOGGLE)[0];
                  if (i) {
                    var n = t(this._element).find(u.INPUT)[0];
                    if (n) {
                      if ("radio" === n.type)
                        if (n.checked && t(this._element).hasClass(h.ACTIVE))
                          e = !1;
                        else {
                          var r = t(i).find(u.ACTIVE)[0];
                          r && t(r).removeClass(h.ACTIVE);
                        }
                      e &&
                        ((n.checked = !t(this._element).hasClass(h.ACTIVE)),
                        t(this._element).trigger("change")),
                        n.focus();
                    }
                  } else
                    this._element.setAttribute(
                      "aria-pressed",
                      !t(this._element).hasClass(h.ACTIVE)
                    );
                  e && t(this._element).toggleClass(h.ACTIVE);
                }),
                (e.prototype.dispose = function () {
                  t.removeData(this._element, o), (this._element = null);
                }),
                (e._jQueryInterface = function (i) {
                  return this.each(function () {
                    var n = t(this).data(o);
                    n || ((n = new e(this)), t(this).data(o, n)),
                      "toggle" === i && n[i]();
                  });
                }),
                r(e, null, [
                  {
                    key: "VERSION",
                    get: function () {
                      return n;
                    },
                  },
                ]),
                e
              );
            })();
          return (
            t(document)
              .on(c.CLICK_DATA_API, u.DATA_TOGGLE_CARROT, function (e) {
                e.preventDefault();
                var i = e.target;
                t(i).hasClass(h.BUTTON) || (i = t(i).closest(u.BUTTON)),
                  f._jQueryInterface.call(t(i), "toggle");
              })
              .on(c.FOCUS_BLUR_DATA_API, u.DATA_TOGGLE_CARROT, function (e) {
                var i = t(e.target).closest(u.BUTTON)[0];
                t(i).toggleClass(h.FOCUS, /^focus(in)?$/.test(e.type));
              }),
            (t.fn[e] = f._jQueryInterface),
            (t.fn[e].Constructor = f),
            (t.fn[e].noConflict = function () {
              return (t.fn[e] = l), f._jQueryInterface;
            }),
            f
          );
        })(jQuery),
        (function (t) {
          var e = "carousel",
            s = "4.0.0-alpha.5",
            a = "bs.carousel",
            l = "." + a,
            h = ".data-api",
            u = t.fn[e],
            c = 600,
            f = 37,
            d = 39,
            p = {
              interval: 5e3,
              keyboard: !0,
              slide: !1,
              pause: "hover",
              wrap: !0,
            },
            m = {
              interval: "(number|boolean)",
              keyboard: "boolean",
              slide: "(boolean|string)",
              pause: "(string|boolean)",
              wrap: "boolean",
            },
            g = {
              NEXT: "next",
              PREVIOUS: "prev",
            },
            v = {
              SLIDE: "slide" + l,
              SLID: "slid" + l,
              KEYDOWN: "keydown" + l,
              MOUSEENTER: "mouseenter" + l,
              MOUSELEAVE: "mouseleave" + l,
              LOAD_DATA_API: "load" + l + h,
              CLICK_DATA_API: "click" + l + h,
            },
            y = {
              CAROUSEL: "carousel",
              ACTIVE: "active",
              SLIDE: "slide",
              RIGHT: "right",
              LEFT: "left",
              ITEM: "carousel-item",
            },
            _ = {
              ACTIVE: ".active",
              ACTIVE_ITEM: ".active.carousel-item",
              ITEM: ".carousel-item",
              NEXT_PREV: ".next, .prev",
              INDICATORS: ".carousel-indicators",
              DATA_SLIDE: "[data-slide], [data-slide-to]",
              DATA_RIDE: '[data-ride="carousel"]',
            },
            b = (function () {
              function h(e, n) {
                i(this, h),
                  (this._items = null),
                  (this._interval = null),
                  (this._activeElement = null),
                  (this._isPaused = !1),
                  (this._isSliding = !1),
                  (this._config = this._getConfig(n)),
                  (this._element = t(e)[0]),
                  (this._indicatorsElement = t(this._element).find(
                    _.INDICATORS
                  )[0]),
                  this._addEventListeners();
              }
              return (
                (h.prototype.next = function () {
                  this._isSliding || this._slide(g.NEXT);
                }),
                (h.prototype.nextWhenVisible = function () {
                  document.hidden || this.next();
                }),
                (h.prototype.prev = function () {
                  this._isSliding || this._slide(g.PREVIOUS);
                }),
                (h.prototype.pause = function (e) {
                  e || (this._isPaused = !0),
                    t(this._element).find(_.NEXT_PREV)[0] &&
                      o.supportsTransitionEnd() &&
                      (o.triggerTransitionEnd(this._element), this.cycle(!0)),
                    clearInterval(this._interval),
                    (this._interval = null);
                }),
                (h.prototype.cycle = function (t) {
                  t || (this._isPaused = !1),
                    this._interval &&
                      (clearInterval(this._interval), (this._interval = null)),
                    this._config.interval &&
                      !this._isPaused &&
                      (this._interval = setInterval(
                        (document.visibilityState
                          ? this.nextWhenVisible
                          : this.next
                        ).bind(this),
                        this._config.interval
                      ));
                }),
                (h.prototype.to = function (e) {
                  var i = this;
                  this._activeElement = t(this._element).find(_.ACTIVE_ITEM)[0];
                  var n = this._getItemIndex(this._activeElement);
                  if (!(e > this._items.length - 1 || e < 0)) {
                    if (this._isSliding)
                      return void t(this._element).one(v.SLID, function () {
                        return i.to(e);
                      });
                    if (n === e) return this.pause(), void this.cycle();
                    var r = e > n ? g.NEXT : g.PREVIOUS;
                    this._slide(r, this._items[e]);
                  }
                }),
                (h.prototype.dispose = function () {
                  t(this._element).off(l),
                    t.removeData(this._element, a),
                    (this._items = null),
                    (this._config = null),
                    (this._element = null),
                    (this._interval = null),
                    (this._isPaused = null),
                    (this._isSliding = null),
                    (this._activeElement = null),
                    (this._indicatorsElement = null);
                }),
                (h.prototype._getConfig = function (i) {
                  return (
                    (i = t.extend({}, p, i)), o.typeCheckConfig(e, i, m), i
                  );
                }),
                (h.prototype._addEventListeners = function () {
                  var e = this;
                  this._config.keyboard &&
                    t(this._element).on(v.KEYDOWN, function (t) {
                      return e._keydown(t);
                    }),
                    "hover" !== this._config.pause ||
                      "ontouchstart" in document.documentElement ||
                      t(this._element)
                        .on(v.MOUSEENTER, function (t) {
                          return e.pause(t);
                        })
                        .on(v.MOUSELEAVE, function (t) {
                          return e.cycle(t);
                        });
                }),
                (h.prototype._keydown = function (t) {
                  if (
                    (t.preventDefault(),
                    !/input|textarea/i.test(t.target.tagName))
                  )
                    switch (t.which) {
                      case f:
                        this.prev();
                        break;
                      case d:
                        this.next();
                        break;
                      default:
                        return;
                    }
                }),
                (h.prototype._getItemIndex = function (e) {
                  return (
                    (this._items = t.makeArray(t(e).parent().find(_.ITEM))),
                    this._items.indexOf(e)
                  );
                }),
                (h.prototype._getItemByDirection = function (t, e) {
                  var i = t === g.NEXT,
                    n = t === g.PREVIOUS,
                    r = this._getItemIndex(e),
                    o = this._items.length - 1,
                    s = (n && 0 === r) || (i && r === o);
                  if (s && !this._config.wrap) return e;
                  var a = t === g.PREVIOUS ? -1 : 1,
                    l = (r + a) % this._items.length;
                  return l === -1
                    ? this._items[this._items.length - 1]
                    : this._items[l];
                }),
                (h.prototype._triggerSlideEvent = function (e, i) {
                  var n = t.Event(v.SLIDE, {
                    relatedTarget: e,
                    direction: i,
                  });
                  return t(this._element).trigger(n), n;
                }),
                (h.prototype._setActiveIndicatorElement = function (e) {
                  if (this._indicatorsElement) {
                    t(this._indicatorsElement)
                      .find(_.ACTIVE)
                      .removeClass(y.ACTIVE);
                    var i =
                      this._indicatorsElement.children[this._getItemIndex(e)];
                    i && t(i).addClass(y.ACTIVE);
                  }
                }),
                (h.prototype._slide = function (e, i) {
                  var n = this,
                    r = t(this._element).find(_.ACTIVE_ITEM)[0],
                    s = i || (r && this._getItemByDirection(e, r)),
                    a = Boolean(this._interval),
                    l = e === g.NEXT ? y.LEFT : y.RIGHT;
                  if (s && t(s).hasClass(y.ACTIVE))
                    return void (this._isSliding = !1);
                  var h = this._triggerSlideEvent(s, l);
                  if (!h.isDefaultPrevented() && r && s) {
                    (this._isSliding = !0),
                      a && this.pause(),
                      this._setActiveIndicatorElement(s);
                    var u = t.Event(v.SLID, {
                      relatedTarget: s,
                      direction: l,
                    });
                    o.supportsTransitionEnd() &&
                    t(this._element).hasClass(y.SLIDE)
                      ? (t(s).addClass(e),
                        o.reflow(s),
                        t(r).addClass(l),
                        t(s).addClass(l),
                        t(r)
                          .one(o.TRANSITION_END, function () {
                            t(s).removeClass(l).removeClass(e),
                              t(s).addClass(y.ACTIVE),
                              t(r)
                                .removeClass(y.ACTIVE)
                                .removeClass(e)
                                .removeClass(l),
                              (n._isSliding = !1),
                              setTimeout(function () {
                                return t(n._element).trigger(u);
                              }, 0);
                          })
                          .emulateTransitionEnd(c))
                      : (t(r).removeClass(y.ACTIVE),
                        t(s).addClass(y.ACTIVE),
                        (this._isSliding = !1),
                        t(this._element).trigger(u)),
                      a && this.cycle();
                  }
                }),
                (h._jQueryInterface = function (e) {
                  return this.each(function () {
                    var i = t(this).data(a),
                      r = t.extend({}, p, t(this).data());
                    "object" ===
                      ("undefined" == typeof e ? "undefined" : n(e)) &&
                      t.extend(r, e);
                    var o = "string" == typeof e ? e : r.slide;
                    if (
                      (i || ((i = new h(this, r)), t(this).data(a, i)),
                      "number" == typeof e)
                    )
                      i.to(e);
                    else if ("string" == typeof o) {
                      if (void 0 === i[o])
                        throw new Error('No method named "' + o + '"');
                      i[o]();
                    } else r.interval && (i.pause(), i.cycle());
                  });
                }),
                (h._dataApiClickHandler = function (e) {
                  var i = o.getSelectorFromElement(this);
                  if (i) {
                    var n = t(i)[0];
                    if (n && t(n).hasClass(y.CAROUSEL)) {
                      var r = t.extend({}, t(n).data(), t(this).data()),
                        s = this.getAttribute("data-slide-to");
                      s && (r.interval = !1),
                        h._jQueryInterface.call(t(n), r),
                        s && t(n).data(a).to(s),
                        e.preventDefault();
                    }
                  }
                }),
                r(h, null, [
                  {
                    key: "VERSION",
                    get: function () {
                      return s;
                    },
                  },
                  {
                    key: "Default",
                    get: function () {
                      return p;
                    },
                  },
                ]),
                h
              );
            })();
          return (
            t(document).on(
              v.CLICK_DATA_API,
              _.DATA_SLIDE,
              b._dataApiClickHandler
            ),
            t(window).on(v.LOAD_DATA_API, function () {
              t(_.DATA_RIDE).each(function () {
                var e = t(this);
                b._jQueryInterface.call(e, e.data());
              });
            }),
            (t.fn[e] = b._jQueryInterface),
            (t.fn[e].Constructor = b),
            (t.fn[e].noConflict = function () {
              return (t.fn[e] = u), b._jQueryInterface;
            }),
            b
          );
        })(jQuery),
        (function (t) {
          var e = "collapse",
            s = "4.0.0-alpha.5",
            a = "bs.collapse",
            l = "." + a,
            h = ".data-api",
            u = t.fn[e],
            c = 600,
            f = {
              toggle: !0,
              parent: "",
            },
            d = {
              toggle: "boolean",
              parent: "string",
            },
            p = {
              SHOW: "show" + l,
              SHOWN: "shown" + l,
              HIDE: "hide" + l,
              HIDDEN: "hidden" + l,
              CLICK_DATA_API: "click" + l + h,
            },
            m = {
              ACTIVE: "active",
              COLLAPSE: "collapse",
              COLLAPSING: "collapsing",
              COLLAPSED: "collapsed",
            },
            g = {
              WIDTH: "width",
              HEIGHT: "height",
            },
            v = {
              ACTIVES: ".card > .active, .card > .collapsing",
              DATA_TOGGLE: '[data-toggle="collapse"]',
            },
            y = (function () {
              function l(e, n) {
                i(this, l),
                  (this._isTransitioning = !1),
                  (this._element = e),
                  (this._config = this._getConfig(n)),
                  (this._triggerArray = t.makeArray(
                    t(
                      '[data-toggle="collapse"][href="#' +
                        e.id +
                        '"],' +
                        ('[data-toggle="collapse"][data-target="#' +
                          e.id +
                          '"]')
                    )
                  )),
                  (this._parent = this._config.parent
                    ? this._getParent()
                    : null),
                  this._config.parent ||
                    this._addAriaAndCollapsedClass(
                      this._element,
                      this._triggerArray
                    ),
                  this._config.toggle && this.toggle();
              }
              return (
                (l.prototype.toggle = function () {
                  t(this._element).hasClass(m.ACTIVE)
                    ? this.hide()
                    : this.show();
                }),
                (l.prototype.show = function () {
                  var e = this;
                  if (
                    !this._isTransitioning &&
                    !t(this._element).hasClass(m.ACTIVE)
                  ) {
                    var i = void 0,
                      n = void 0;
                    if (
                      (this._parent &&
                        ((i = t.makeArray(t(this._parent).find(v.ACTIVES))),
                        i.length || (i = null)),
                      !(i && ((n = t(i).data(a)), n && n._isTransitioning)))
                    ) {
                      var r = t.Event(p.SHOW);
                      if (
                        (t(this._element).trigger(r), !r.isDefaultPrevented())
                      ) {
                        i &&
                          (l._jQueryInterface.call(t(i), "hide"),
                          n || t(i).data(a, null));
                        var s = this._getDimension();
                        t(this._element)
                          .removeClass(m.COLLAPSE)
                          .addClass(m.COLLAPSING),
                          (this._element.style[s] = 0),
                          this._element.setAttribute("aria-expanded", !0),
                          this._triggerArray.length &&
                            t(this._triggerArray)
                              .removeClass(m.COLLAPSED)
                              .attr("aria-expanded", !0),
                          this.setTransitioning(!0);
                        var h = function () {
                          t(e._element)
                            .removeClass(m.COLLAPSING)
                            .addClass(m.COLLAPSE)
                            .addClass(m.ACTIVE),
                            (e._element.style[s] = ""),
                            e.setTransitioning(!1),
                            t(e._element).trigger(p.SHOWN);
                        };
                        if (!o.supportsTransitionEnd()) return void h();
                        var u = s[0].toUpperCase() + s.slice(1),
                          f = "scroll" + u;
                        t(this._element)
                          .one(o.TRANSITION_END, h)
                          .emulateTransitionEnd(c),
                          (this._element.style[s] = this._element[f] + "px");
                      }
                    }
                  }
                }),
                (l.prototype.hide = function () {
                  var e = this;
                  if (
                    !this._isTransitioning &&
                    t(this._element).hasClass(m.ACTIVE)
                  ) {
                    var i = t.Event(p.HIDE);
                    if (
                      (t(this._element).trigger(i), !i.isDefaultPrevented())
                    ) {
                      var n = this._getDimension(),
                        r = n === g.WIDTH ? "offsetWidth" : "offsetHeight";
                      (this._element.style[n] = this._element[r] + "px"),
                        o.reflow(this._element),
                        t(this._element)
                          .addClass(m.COLLAPSING)
                          .removeClass(m.COLLAPSE)
                          .removeClass(m.ACTIVE),
                        this._element.setAttribute("aria-expanded", !1),
                        this._triggerArray.length &&
                          t(this._triggerArray)
                            .addClass(m.COLLAPSED)
                            .attr("aria-expanded", !1),
                        this.setTransitioning(!0);
                      var s = function () {
                        e.setTransitioning(!1),
                          t(e._element)
                            .removeClass(m.COLLAPSING)
                            .addClass(m.COLLAPSE)
                            .trigger(p.HIDDEN);
                      };
                      return (
                        (this._element.style[n] = ""),
                        o.supportsTransitionEnd()
                          ? void t(this._element)
                              .one(o.TRANSITION_END, s)
                              .emulateTransitionEnd(c)
                          : void s()
                      );
                    }
                  }
                }),
                (l.prototype.setTransitioning = function (t) {
                  this._isTransitioning = t;
                }),
                (l.prototype.dispose = function () {
                  t.removeData(this._element, a),
                    (this._config = null),
                    (this._parent = null),
                    (this._element = null),
                    (this._triggerArray = null),
                    (this._isTransitioning = null);
                }),
                (l.prototype._getConfig = function (i) {
                  return (
                    (i = t.extend({}, f, i)),
                    (i.toggle = Boolean(i.toggle)),
                    o.typeCheckConfig(e, i, d),
                    i
                  );
                }),
                (l.prototype._getDimension = function () {
                  var e = t(this._element).hasClass(g.WIDTH);
                  return e ? g.WIDTH : g.HEIGHT;
                }),
                (l.prototype._getParent = function () {
                  var e = this,
                    i = t(this._config.parent)[0],
                    n =
                      '[data-toggle="collapse"][data-parent="' +
                      this._config.parent +
                      '"]';
                  return (
                    t(i)
                      .find(n)
                      .each(function (t, i) {
                        e._addAriaAndCollapsedClass(
                          l._getTargetFromElement(i),
                          [i]
                        );
                      }),
                    i
                  );
                }),
                (l.prototype._addAriaAndCollapsedClass = function (e, i) {
                  if (e) {
                    var n = t(e).hasClass(m.ACTIVE);
                    e.setAttribute("aria-expanded", n),
                      i.length &&
                        t(i)
                          .toggleClass(m.COLLAPSED, !n)
                          .attr("aria-expanded", n);
                  }
                }),
                (l._getTargetFromElement = function (e) {
                  var i = o.getSelectorFromElement(e);
                  return i ? t(i)[0] : null;
                }),
                (l._jQueryInterface = function (e) {
                  return this.each(function () {
                    var i = t(this),
                      r = i.data(a),
                      o = t.extend(
                        {},
                        f,
                        i.data(),
                        "object" ===
                          ("undefined" == typeof e ? "undefined" : n(e)) && e
                      );
                    if (
                      (!r && o.toggle && /show|hide/.test(e) && (o.toggle = !1),
                      r || ((r = new l(this, o)), i.data(a, r)),
                      "string" == typeof e)
                    ) {
                      if (void 0 === r[e])
                        throw new Error('No method named "' + e + '"');
                      r[e]();
                    }
                  });
                }),
                r(l, null, [
                  {
                    key: "VERSION",
                    get: function () {
                      return s;
                    },
                  },
                  {
                    key: "Default",
                    get: function () {
                      return f;
                    },
                  },
                ]),
                l
              );
            })();
          return (
            t(document).on(p.CLICK_DATA_API, v.DATA_TOGGLE, function (e) {
              e.preventDefault();
              var i = y._getTargetFromElement(this),
                n = t(i).data(a),
                r = n ? "toggle" : t(this).data();
              y._jQueryInterface.call(t(i), r);
            }),
            (t.fn[e] = y._jQueryInterface),
            (t.fn[e].Constructor = y),
            (t.fn[e].noConflict = function () {
              return (t.fn[e] = u), y._jQueryInterface;
            }),
            y
          );
        })(jQuery),
        (function (t) {
          var e = "dropdown",
            n = "4.0.0-alpha.5",
            s = "bs.dropdown",
            a = "." + s,
            l = ".data-api",
            h = t.fn[e],
            u = 27,
            c = 38,
            f = 40,
            d = 3,
            p = {
              HIDE: "hide" + a,
              HIDDEN: "hidden" + a,
              SHOW: "show" + a,
              SHOWN: "shown" + a,
              CLICK: "click" + a,
              CLICK_DATA_API: "click" + a + l,
              KEYDOWN_DATA_API: "keydown" + a + l,
            },
            m = {
              BACKDROP: "dropdown-backdrop",
              DISABLED: "disabled",
              ACTIVE: "active",
            },
            g = {
              BACKDROP: ".dropdown-backdrop",
              DATA_TOGGLE: '[data-toggle="dropdown"]',
              FORM_CHILD: ".dropdown form",
              ROLE_MENU: '[role="menu"]',
              ROLE_LISTBOX: '[role="listbox"]',
              NAVBAR_NAV: ".navbar-nav",
              VISIBLE_ITEMS:
                '[role="menu"] li:not(.disabled) a, [role="listbox"] li:not(.disabled) a',
            },
            v = (function () {
              function e(t) {
                i(this, e), (this._element = t), this._addEventListeners();
              }
              return (
                (e.prototype.toggle = function () {
                  if (this.disabled || t(this).hasClass(m.DISABLED)) return !1;
                  var i = e._getParentFromElement(this),
                    n = t(i).hasClass(m.ACTIVE);
                  if ((e._clearMenus(), n)) return !1;
                  if (
                    "ontouchstart" in document.documentElement &&
                    !t(i).closest(g.NAVBAR_NAV).length
                  ) {
                    var r = document.createElement("div");
                    (r.className = m.BACKDROP),
                      t(r).insertBefore(this),
                      t(r).on("click", e._clearMenus);
                  }
                  var o = {
                      relatedTarget: this,
                    },
                    s = t.Event(p.SHOW, o);
                  return (
                    t(i).trigger(s),
                    !s.isDefaultPrevented() &&
                      (this.focus(),
                      this.setAttribute("aria-expanded", "true"),
                      t(i).toggleClass(m.ACTIVE),
                      t(i).trigger(t.Event(p.SHOWN, o)),
                      !1)
                  );
                }),
                (e.prototype.dispose = function () {
                  t.removeData(this._element, s),
                    t(this._element).off(a),
                    (this._element = null);
                }),
                (e.prototype._addEventListeners = function () {
                  t(this._element).on(p.CLICK, this.toggle);
                }),
                (e._jQueryInterface = function (i) {
                  return this.each(function () {
                    var n = t(this).data(s);
                    if (
                      (n || t(this).data(s, (n = new e(this))),
                      "string" == typeof i)
                    ) {
                      if (void 0 === n[i])
                        throw new Error('No method named "' + i + '"');
                      n[i].call(this);
                    }
                  });
                }),
                (e._clearMenus = function (i) {
                  if (!i || i.which !== d) {
                    var n = t(g.BACKDROP)[0];
                    n && n.parentNode.removeChild(n);
                    for (
                      var r = t.makeArray(t(g.DATA_TOGGLE)), o = 0;
                      o < r.length;
                      o++
                    ) {
                      var s = e._getParentFromElement(r[o]),
                        a = {
                          relatedTarget: r[o],
                        };
                      if (
                        t(s).hasClass(m.ACTIVE) &&
                        !(
                          i &&
                          "click" === i.type &&
                          /input|textarea/i.test(i.target.tagName) &&
                          t.contains(s, i.target)
                        )
                      ) {
                        var l = t.Event(p.HIDE, a);
                        t(s).trigger(l),
                          l.isDefaultPrevented() ||
                            (r[o].setAttribute("aria-expanded", "false"),
                            t(s)
                              .removeClass(m.ACTIVE)
                              .trigger(t.Event(p.HIDDEN, a)));
                      }
                    }
                  }
                }),
                (e._getParentFromElement = function (e) {
                  var i = void 0,
                    n = o.getSelectorFromElement(e);
                  return n && (i = t(n)[0]), i || e.parentNode;
                }),
                (e._dataApiKeydownHandler = function (i) {
                  if (
                    /(38|40|27|32)/.test(i.which) &&
                    !/input|textarea/i.test(i.target.tagName) &&
                    (i.preventDefault(),
                    i.stopPropagation(),
                    !this.disabled && !t(this).hasClass(m.DISABLED))
                  ) {
                    var n = e._getParentFromElement(this),
                      r = t(n).hasClass(m.ACTIVE);
                    if ((!r && i.which !== u) || (r && i.which === u)) {
                      if (i.which === u) {
                        var o = t(n).find(g.DATA_TOGGLE)[0];
                        t(o).trigger("focus");
                      }
                      return void t(this).trigger("click");
                    }
                    var s = t.makeArray(t(g.VISIBLE_ITEMS));
                    if (
                      ((s = s.filter(function (t) {
                        return t.offsetWidth || t.offsetHeight;
                      })),
                      s.length)
                    ) {
                      var a = s.indexOf(i.target);
                      i.which === c && a > 0 && a--,
                        i.which === f && a < s.length - 1 && a++,
                        a < 0 && (a = 0),
                        s[a].focus();
                    }
                  }
                }),
                r(e, null, [
                  {
                    key: "VERSION",
                    get: function () {
                      return n;
                    },
                  },
                ]),
                e
              );
            })();
          return (
            t(document)
              .on(p.KEYDOWN_DATA_API, g.DATA_TOGGLE, v._dataApiKeydownHandler)
              .on(p.KEYDOWN_DATA_API, g.ROLE_MENU, v._dataApiKeydownHandler)
              .on(p.KEYDOWN_DATA_API, g.ROLE_LISTBOX, v._dataApiKeydownHandler)
              .on(p.CLICK_DATA_API, v._clearMenus)
              .on(p.CLICK_DATA_API, g.DATA_TOGGLE, v.prototype.toggle)
              .on(p.CLICK_DATA_API, g.FORM_CHILD, function (t) {
                t.stopPropagation();
              }),
            (t.fn[e] = v._jQueryInterface),
            (t.fn[e].Constructor = v),
            (t.fn[e].noConflict = function () {
              return (t.fn[e] = h), v._jQueryInterface;
            }),
            v
          );
        })(jQuery),
        (function (t) {
          var e = "modal",
            s = "4.0.0-alpha.5",
            a = "bs.modal",
            l = "." + a,
            h = ".data-api",
            u = t.fn[e],
            c = 300,
            f = 150,
            d = 27,
            p = {
              backdrop: !0,
              keyboard: !0,
              focus: !0,
              show: !0,
            },
            m = {
              backdrop: "(boolean|string)",
              keyboard: "boolean",
              focus: "boolean",
              show: "boolean",
            },
            g = {
              HIDE: "hide" + l,
              HIDDEN: "hidden" + l,
              SHOW: "show" + l,
              SHOWN: "shown" + l,
              FOCUSIN: "focusin" + l,
              RESIZE: "resize" + l,
              CLICK_DISMISS: "click.dismiss" + l,
              KEYDOWN_DISMISS: "keydown.dismiss" + l,
              MOUSEUP_DISMISS: "mouseup.dismiss" + l,
              MOUSEDOWN_DISMISS: "mousedown.dismiss" + l,
              CLICK_DATA_API: "click" + l + h,
            },
            v = {
              SCROLLBAR_MEASURER: "modal-scrollbar-measure",
              BACKDROP: "modal-backdrop",
              OPEN: "modal-open",
              FADE: "fade",
              ACTIVE: "active",
            },
            y = {
              DIALOG: ".modal-dialog",
              DATA_TOGGLE: '[data-toggle="modal"]',
              DATA_DISMISS: '[data-dismiss="modal"]',
              FIXED_CONTENT:
                ".navbar-fixed-top, .navbar-fixed-bottom, .is-fixed",
            },
            _ = (function () {
              function h(e, n) {
                i(this, h),
                  (this._config = this._getConfig(n)),
                  (this._element = e),
                  (this._dialog = t(e).find(y.DIALOG)[0]),
                  (this._backdrop = null),
                  (this._isShown = !1),
                  (this._isBodyOverflowing = !1),
                  (this._ignoreBackdropClick = !1),
                  (this._originalBodyPadding = 0),
                  (this._scrollbarWidth = 0);
              }
              return (
                (h.prototype.toggle = function (t) {
                  return this._isShown ? this.hide() : this.show(t);
                }),
                (h.prototype.show = function (e) {
                  var i = this,
                    n = t.Event(g.SHOW, {
                      relatedTarget: e,
                    });
                  t(this._element).trigger(n),
                    this._isShown ||
                      n.isDefaultPrevented() ||
                      ((this._isShown = !0),
                      this._checkScrollbar(),
                      this._setScrollbar(),
                      t(document.body).addClass(v.OPEN),
                      this._setEscapeEvent(),
                      this._setResizeEvent(),
                      t(this._element).on(
                        g.CLICK_DISMISS,
                        y.DATA_DISMISS,
                        function (t) {
                          return i.hide(t);
                        }
                      ),
                      t(this._dialog).on(g.MOUSEDOWN_DISMISS, function () {
                        t(i._element).one(g.MOUSEUP_DISMISS, function (e) {
                          t(e.target).is(i._element) &&
                            (i._ignoreBackdropClick = !0);
                        });
                      }),
                      this._showBackdrop(function () {
                        return i._showElement(e);
                      }));
                }),
                (h.prototype.hide = function (e) {
                  var i = this;
                  e && e.preventDefault();
                  var n = t.Event(g.HIDE);
                  t(this._element).trigger(n),
                    this._isShown &&
                      !n.isDefaultPrevented() &&
                      ((this._isShown = !1),
                      this._setEscapeEvent(),
                      this._setResizeEvent(),
                      t(document).off(g.FOCUSIN),
                      t(this._element).removeClass(v.ACTIVE),
                      t(this._element).off(g.CLICK_DISMISS),
                      t(this._dialog).off(g.MOUSEDOWN_DISMISS),
                      o.supportsTransitionEnd() &&
                      t(this._element).hasClass(v.FADE)
                        ? t(this._element)
                            .one(o.TRANSITION_END, function (t) {
                              return i._hideModal(t);
                            })
                            .emulateTransitionEnd(c)
                        : this._hideModal());
                }),
                (h.prototype.dispose = function () {
                  t.removeData(this._element, a),
                    t(window).off(l),
                    t(document).off(l),
                    t(this._element).off(l),
                    t(this._backdrop).off(l),
                    (this._config = null),
                    (this._element = null),
                    (this._dialog = null),
                    (this._backdrop = null),
                    (this._isShown = null),
                    (this._isBodyOverflowing = null),
                    (this._ignoreBackdropClick = null),
                    (this._originalBodyPadding = null),
                    (this._scrollbarWidth = null);
                }),
                (h.prototype._getConfig = function (i) {
                  return (
                    (i = t.extend({}, p, i)), o.typeCheckConfig(e, i, m), i
                  );
                }),
                (h.prototype._showElement = function (e) {
                  var i = this,
                    n =
                      o.supportsTransitionEnd() &&
                      t(this._element).hasClass(v.FADE);
                  (this._element.parentNode &&
                    this._element.parentNode.nodeType === Node.ELEMENT_NODE) ||
                    document.body.appendChild(this._element),
                    (this._element.style.display = "block"),
                    this._element.removeAttribute("aria-hidden"),
                    (this._element.scrollTop = 0),
                    n && o.reflow(this._element),
                    t(this._element).addClass(v.ACTIVE),
                    this._config.focus && this._enforceFocus();
                  var r = t.Event(g.SHOWN, {
                      relatedTarget: e,
                    }),
                    s = function () {
                      i._config.focus && i._element.focus(),
                        t(i._element).trigger(r);
                    };
                  n
                    ? t(this._dialog)
                        .one(o.TRANSITION_END, s)
                        .emulateTransitionEnd(c)
                    : s();
                }),
                (h.prototype._enforceFocus = function () {
                  var e = this;
                  t(document)
                    .off(g.FOCUSIN)
                    .on(g.FOCUSIN, function (i) {
                      document === i.target ||
                        e._element === i.target ||
                        t(e._element).has(i.target).length ||
                        e._element.focus();
                    });
                }),
                (h.prototype._setEscapeEvent = function () {
                  var e = this;
                  this._isShown && this._config.keyboard
                    ? t(this._element).on(g.KEYDOWN_DISMISS, function (t) {
                        t.which === d && e.hide();
                      })
                    : this._isShown || t(this._element).off(g.KEYDOWN_DISMISS);
                }),
                (h.prototype._setResizeEvent = function () {
                  var e = this;
                  this._isShown
                    ? t(window).on(g.RESIZE, function (t) {
                        return e._handleUpdate(t);
                      })
                    : t(window).off(g.RESIZE);
                }),
                (h.prototype._hideModal = function () {
                  var e = this;
                  (this._element.style.display = "none"),
                    this._element.setAttribute("aria-hidden", "true"),
                    this._showBackdrop(function () {
                      t(document.body).removeClass(v.OPEN),
                        e._resetAdjustments(),
                        e._resetScrollbar(),
                        t(e._element).trigger(g.HIDDEN);
                    });
                }),
                (h.prototype._removeBackdrop = function () {
                  this._backdrop &&
                    (t(this._backdrop).remove(), (this._backdrop = null));
                }),
                (h.prototype._showBackdrop = function (e) {
                  var i = this,
                    n = t(this._element).hasClass(v.FADE) ? v.FADE : "";
                  if (this._isShown && this._config.backdrop) {
                    var r = o.supportsTransitionEnd() && n;
                    if (
                      ((this._backdrop = document.createElement("div")),
                      (this._backdrop.className = v.BACKDROP),
                      n && t(this._backdrop).addClass(n),
                      t(this._backdrop).appendTo(document.body),
                      t(this._element).on(g.CLICK_DISMISS, function (t) {
                        return i._ignoreBackdropClick
                          ? void (i._ignoreBackdropClick = !1)
                          : void (
                              t.target === t.currentTarget &&
                              ("static" === i._config.backdrop
                                ? i._element.focus()
                                : i.hide())
                            );
                      }),
                      r && o.reflow(this._backdrop),
                      t(this._backdrop).addClass(v.ACTIVE),
                      !e)
                    )
                      return;
                    if (!r) return void e();
                    t(this._backdrop)
                      .one(o.TRANSITION_END, e)
                      .emulateTransitionEnd(f);
                  } else if (!this._isShown && this._backdrop) {
                    t(this._backdrop).removeClass(v.ACTIVE);
                    var s = function () {
                      i._removeBackdrop(), e && e();
                    };
                    o.supportsTransitionEnd() &&
                    t(this._element).hasClass(v.FADE)
                      ? t(this._backdrop)
                          .one(o.TRANSITION_END, s)
                          .emulateTransitionEnd(f)
                      : s();
                  } else e && e();
                }),
                (h.prototype._handleUpdate = function () {
                  this._adjustDialog();
                }),
                (h.prototype._adjustDialog = function () {
                  var t =
                    this._element.scrollHeight >
                    document.documentElement.clientHeight;
                  !this._isBodyOverflowing &&
                    t &&
                    (this._element.style.paddingLeft =
                      this._scrollbarWidth + "px"),
                    this._isBodyOverflowing &&
                      !t &&
                      (this._element.style.paddingRight =
                        this._scrollbarWidth + "px");
                }),
                (h.prototype._resetAdjustments = function () {
                  (this._element.style.paddingLeft = ""),
                    (this._element.style.paddingRight = "");
                }),
                (h.prototype._checkScrollbar = function () {
                  (this._isBodyOverflowing =
                    document.body.clientWidth < window.innerWidth),
                    (this._scrollbarWidth = this._getScrollbarWidth());
                }),
                (h.prototype._setScrollbar = function () {
                  var e = parseInt(
                    t(y.FIXED_CONTENT).css("padding-right") || 0,
                    10
                  );
                  (this._originalBodyPadding =
                    document.body.style.paddingRight || ""),
                    this._isBodyOverflowing &&
                      (document.body.style.paddingRight =
                        e + this._scrollbarWidth + "px");
                }),
                (h.prototype._resetScrollbar = function () {
                  document.body.style.paddingRight = this._originalBodyPadding;
                }),
                (h.prototype._getScrollbarWidth = function () {
                  var t = document.createElement("div");
                  (t.className = v.SCROLLBAR_MEASURER),
                    document.body.appendChild(t);
                  var e = t.offsetWidth - t.clientWidth;
                  return document.body.removeChild(t), e;
                }),
                (h._jQueryInterface = function (e, i) {
                  return this.each(function () {
                    var r = t(this).data(a),
                      o = t.extend(
                        {},
                        h.Default,
                        t(this).data(),
                        "object" ===
                          ("undefined" == typeof e ? "undefined" : n(e)) && e
                      );
                    if (
                      (r || ((r = new h(this, o)), t(this).data(a, r)),
                      "string" == typeof e)
                    ) {
                      if (void 0 === r[e])
                        throw new Error('No method named "' + e + '"');
                      r[e](i);
                    } else o.show && r.show(i);
                  });
                }),
                r(h, null, [
                  {
                    key: "VERSION",
                    get: function () {
                      return s;
                    },
                  },
                  {
                    key: "Default",
                    get: function () {
                      return p;
                    },
                  },
                ]),
                h
              );
            })();
          return (
            t(document).on(g.CLICK_DATA_API, y.DATA_TOGGLE, function (e) {
              var i = this,
                n = void 0,
                r = o.getSelectorFromElement(this);
              r && (n = t(r)[0]);
              var s = t(n).data(a)
                ? "toggle"
                : t.extend({}, t(n).data(), t(this).data());
              "A" === this.tagName && e.preventDefault();
              var l = t(n).one(g.SHOW, function (e) {
                e.isDefaultPrevented() ||
                  l.one(g.HIDDEN, function () {
                    t(i).is(":visible") && i.focus();
                  });
              });
              _._jQueryInterface.call(t(n), s, this);
            }),
            (t.fn[e] = _._jQueryInterface),
            (t.fn[e].Constructor = _),
            (t.fn[e].noConflict = function () {
              return (t.fn[e] = u), _._jQueryInterface;
            }),
            _
          );
        })(jQuery),
        (function (t) {
          var e = "scrollspy",
            s = "4.0.0-alpha.5",
            a = "bs.scrollspy",
            l = "." + a,
            h = ".data-api",
            u = t.fn[e],
            c = {
              offset: 10,
              method: "auto",
              target: "",
            },
            f = {
              offset: "number",
              method: "string",
              target: "(string|element)",
            },
            d = {
              ACTIVATE: "activate" + l,
              SCROLL: "scroll" + l,
              LOAD_DATA_API: "load" + l + h,
            },
            p = {
              DROPDOWN_ITEM: "dropdown-item",
              DROPDOWN_MENU: "dropdown-menu",
              NAV_LINK: "nav-link",
              NAV: "nav",
              ACTIVE: "active",
            },
            m = {
              DATA_SPY: '[data-spy="scroll"]',
              ACTIVE: ".active",
              LIST_ITEM: ".list-item",
              LI: "li",
              LI_DROPDOWN: "li.dropdown",
              NAV_LINKS: ".nav-link",
              DROPDOWN: ".dropdown",
              DROPDOWN_ITEMS: ".dropdown-item",
              DROPDOWN_TOGGLE: ".dropdown-toggle",
            },
            g = {
              OFFSET: "offset",
              POSITION: "position",
            },
            v = (function () {
              function h(e, n) {
                var r = this;
                i(this, h),
                  (this._element = e),
                  (this._scrollElement = "BODY" === e.tagName ? window : e),
                  (this._config = this._getConfig(n)),
                  (this._selector =
                    this._config.target +
                    " " +
                    m.NAV_LINKS +
                    "," +
                    (this._config.target + " " + m.DROPDOWN_ITEMS)),
                  (this._offsets = []),
                  (this._targets = []),
                  (this._activeTarget = null),
                  (this._scrollHeight = 0),
                  t(this._scrollElement).on(d.SCROLL, function (t) {
                    return r._process(t);
                  }),
                  this.refresh(),
                  this._process();
              }
              return (
                (h.prototype.refresh = function () {
                  var e = this,
                    i =
                      this._scrollElement !== this._scrollElement.window
                        ? g.POSITION
                        : g.OFFSET,
                    n =
                      "auto" === this._config.method ? i : this._config.method,
                    r = n === g.POSITION ? this._getScrollTop() : 0;
                  (this._offsets = []),
                    (this._targets = []),
                    (this._scrollHeight = this._getScrollHeight());
                  var s = t.makeArray(t(this._selector));
                  s.map(function (e) {
                    var i = void 0,
                      s = o.getSelectorFromElement(e);
                    return (
                      s && (i = t(s)[0]),
                      i && (i.offsetWidth || i.offsetHeight)
                        ? [t(i)[n]().top + r, s]
                        : null
                    );
                  })
                    .filter(function (t) {
                      return t;
                    })
                    .sort(function (t, e) {
                      return t[0] - e[0];
                    })
                    .forEach(function (t) {
                      e._offsets.push(t[0]), e._targets.push(t[1]);
                    });
                }),
                (h.prototype.dispose = function () {
                  t.removeData(this._element, a),
                    t(this._scrollElement).off(l),
                    (this._element = null),
                    (this._scrollElement = null),
                    (this._config = null),
                    (this._selector = null),
                    (this._offsets = null),
                    (this._targets = null),
                    (this._activeTarget = null),
                    (this._scrollHeight = null);
                }),
                (h.prototype._getConfig = function (i) {
                  if (((i = t.extend({}, c, i)), "string" != typeof i.target)) {
                    var n = t(i.target).attr("id");
                    n || ((n = o.getUID(e)), t(i.target).attr("id", n)),
                      (i.target = "#" + n);
                  }
                  return o.typeCheckConfig(e, i, f), i;
                }),
                (h.prototype._getScrollTop = function () {
                  return this._scrollElement === window
                    ? this._scrollElement.scrollY
                    : this._scrollElement.scrollTop;
                }),
                (h.prototype._getScrollHeight = function () {
                  return (
                    this._scrollElement.scrollHeight ||
                    Math.max(
                      document.body.scrollHeight,
                      document.documentElement.scrollHeight
                    )
                  );
                }),
                (h.prototype._process = function () {
                  var t = this._getScrollTop() + this._config.offset,
                    e = this._getScrollHeight(),
                    i =
                      this._config.offset +
                      e -
                      this._scrollElement.offsetHeight;
                  if ((this._scrollHeight !== e && this.refresh(), t >= i)) {
                    var n = this._targets[this._targets.length - 1];
                    this._activeTarget !== n && this._activate(n);
                  }
                  if (this._activeTarget && t < this._offsets[0])
                    return (this._activeTarget = null), void this._clear();
                  for (var r = this._offsets.length; r--; ) {
                    var o =
                      this._activeTarget !== this._targets[r] &&
                      t >= this._offsets[r] &&
                      (void 0 === this._offsets[r + 1] ||
                        t < this._offsets[r + 1]);
                    o && this._activate(this._targets[r]);
                  }
                }),
                (h.prototype._activate = function (e) {
                  (this._activeTarget = e), this._clear();
                  var i = this._selector.split(",");
                  i = i.map(function (t) {
                    return (
                      t +
                      '[data-target="' +
                      e +
                      '"],' +
                      (t + '[href="' + e + '"]')
                    );
                  });
                  var n = t(i.join(","));
                  n.hasClass(p.DROPDOWN_ITEM)
                    ? (n
                        .closest(m.DROPDOWN)
                        .find(m.DROPDOWN_TOGGLE)
                        .addClass(p.ACTIVE),
                      n.addClass(p.ACTIVE))
                    : n.parents(m.LI).find(m.NAV_LINKS).addClass(p.ACTIVE),
                    t(this._scrollElement).trigger(d.ACTIVATE, {
                      relatedTarget: e,
                    });
                }),
                (h.prototype._clear = function () {
                  t(this._selector).filter(m.ACTIVE).removeClass(p.ACTIVE);
                }),
                (h._jQueryInterface = function (e) {
                  return this.each(function () {
                    var i = t(this).data(a),
                      r =
                        ("object" ===
                          ("undefined" == typeof e ? "undefined" : n(e)) &&
                          e) ||
                        null;
                    if (
                      (i || ((i = new h(this, r)), t(this).data(a, i)),
                      "string" == typeof e)
                    ) {
                      if (void 0 === i[e])
                        throw new Error('No method named "' + e + '"');
                      i[e]();
                    }
                  });
                }),
                r(h, null, [
                  {
                    key: "VERSION",
                    get: function () {
                      return s;
                    },
                  },
                  {
                    key: "Default",
                    get: function () {
                      return c;
                    },
                  },
                ]),
                h
              );
            })();
          return (
            t(window).on(d.LOAD_DATA_API, function () {
              for (var e = t.makeArray(t(m.DATA_SPY)), i = e.length; i--; ) {
                var n = t(e[i]);
                v._jQueryInterface.call(n, n.data());
              }
            }),
            (t.fn[e] = v._jQueryInterface),
            (t.fn[e].Constructor = v),
            (t.fn[e].noConflict = function () {
              return (t.fn[e] = u), v._jQueryInterface;
            }),
            v
          );
        })(jQuery),
        (function (t) {
          var e = "tab",
            n = "4.0.0-alpha.5",
            s = "bs.tab",
            a = "." + s,
            l = ".data-api",
            h = t.fn[e],
            u = 150,
            c = {
              HIDE: "hide" + a,
              HIDDEN: "hidden" + a,
              SHOW: "show" + a,
              SHOWN: "shown" + a,
              CLICK_DATA_API: "click" + a + l,
            },
            f = {
              DROPDOWN_MENU: "dropdown-menu",
              ACTIVE: "active",
              FADE: "fade",
              IN: "in",
            },
            d = {
              A: "a",
              LI: "li",
              DROPDOWN: ".dropdown",
              LIST: "ul:not(.dropdown-menu), ol:not(.dropdown-menu)",
              FADE_CHILD: "> .nav-item .fade, > .fade",
              ACTIVE: ".active",
              ACTIVE_CHILD: "> .nav-item > .active, > .active",
              DATA_TOGGLE: '[data-toggle="tab"], [data-toggle="pill"]',
              DROPDOWN_TOGGLE: ".dropdown-toggle",
              DROPDOWN_ACTIVE_CHILD: "> .dropdown-menu .active",
            },
            p = (function () {
              function e(t) {
                i(this, e), (this._element = t);
              }
              return (
                (e.prototype.show = function () {
                  var e = this;
                  if (
                    !this._element.parentNode ||
                    this._element.parentNode.nodeType !== Node.ELEMENT_NODE ||
                    !t(this._element).hasClass(f.ACTIVE)
                  ) {
                    var i = void 0,
                      n = void 0,
                      r = t(this._element).closest(d.LIST)[0],
                      s = o.getSelectorFromElement(this._element);
                    r &&
                      ((n = t.makeArray(t(r).find(d.ACTIVE))),
                      (n = n[n.length - 1]));
                    var a = t.Event(c.HIDE, {
                        relatedTarget: this._element,
                      }),
                      l = t.Event(c.SHOW, {
                        relatedTarget: n,
                      });
                    if (
                      (n && t(n).trigger(a),
                      t(this._element).trigger(l),
                      !l.isDefaultPrevented() && !a.isDefaultPrevented())
                    ) {
                      s && (i = t(s)[0]), this._activate(this._element, r);
                      var h = function () {
                        var i = t.Event(c.HIDDEN, {
                            relatedTarget: e._element,
                          }),
                          r = t.Event(c.SHOWN, {
                            relatedTarget: n,
                          });
                        t(n).trigger(i), t(e._element).trigger(r);
                      };
                      i ? this._activate(i, i.parentNode, h) : h();
                    }
                  }
                }),
                (e.prototype.dispose = function () {
                  t.removeClass(this._element, s), (this._element = null);
                }),
                (e.prototype._activate = function (e, i, n) {
                  var r = this,
                    s = t(i).find(d.ACTIVE_CHILD)[0],
                    a =
                      n &&
                      o.supportsTransitionEnd() &&
                      ((s && t(s).hasClass(f.FADE)) ||
                        Boolean(t(i).find(d.FADE_CHILD)[0])),
                    l = function () {
                      return r._transitionComplete(e, s, a, n);
                    };
                  s && a
                    ? t(s).one(o.TRANSITION_END, l).emulateTransitionEnd(u)
                    : l(),
                    s && t(s).removeClass(f.IN);
                }),
                (e.prototype._transitionComplete = function (e, i, n, r) {
                  if (i) {
                    t(i).removeClass(f.ACTIVE);
                    var s = t(i).find(d.DROPDOWN_ACTIVE_CHILD)[0];
                    s && t(s).removeClass(f.ACTIVE),
                      i.setAttribute("aria-expanded", !1);
                  }
                  if (
                    (t(e).addClass(f.ACTIVE),
                    e.setAttribute("aria-expanded", !0),
                    n
                      ? (o.reflow(e), t(e).addClass(f.IN))
                      : t(e).removeClass(f.FADE),
                    e.parentNode && t(e.parentNode).hasClass(f.DROPDOWN_MENU))
                  ) {
                    var a = t(e).closest(d.DROPDOWN)[0];
                    a && t(a).find(d.DROPDOWN_TOGGLE).addClass(f.ACTIVE),
                      e.setAttribute("aria-expanded", !0);
                  }
                  r && r();
                }),
                (e._jQueryInterface = function (i) {
                  return this.each(function () {
                    var n = t(this),
                      r = n.data(s);
                    if (
                      (r || ((r = r = new e(this)), n.data(s, r)),
                      "string" == typeof i)
                    ) {
                      if (void 0 === r[i])
                        throw new Error('No method named "' + i + '"');
                      r[i]();
                    }
                  });
                }),
                r(e, null, [
                  {
                    key: "VERSION",
                    get: function () {
                      return n;
                    },
                  },
                ]),
                e
              );
            })();
          return (
            t(document).on(c.CLICK_DATA_API, d.DATA_TOGGLE, function (e) {
              e.preventDefault(), p._jQueryInterface.call(t(this), "show");
            }),
            (t.fn[e] = p._jQueryInterface),
            (t.fn[e].Constructor = p),
            (t.fn[e].noConflict = function () {
              return (t.fn[e] = h), p._jQueryInterface;
            }),
            p
          );
        })(jQuery),
        (function (t) {
          if (void 0 === window.Tether)
            throw new Error(
              "Bootstrap tooltips require Tether (http://tether.io/)"
            );
          var e = "tooltip",
            s = "4.0.0-alpha.5",
            a = "bs.tooltip",
            l = "." + a,
            h = t.fn[e],
            u = 150,
            c = "bs-tether",
            f = {
              animation: !0,
              template:
                '<div class="tooltip" role="tooltip"><div class="tooltip-inner"></div></div>',
              trigger: "hover focus",
              title: "",
              delay: 0,
              html: !1,
              selector: !1,
              placement: "top",
              offset: "0 0",
              constraints: [],
            },
            d = {
              animation: "boolean",
              template: "string",
              title: "(string|element|function)",
              trigger: "string",
              delay: "(number|object)",
              html: "boolean",
              selector: "(string|boolean)",
              placement: "(string|function)",
              offset: "string",
              constraints: "array",
            },
            p = {
              TOP: "bottom center",
              RIGHT: "middle left",
              BOTTOM: "top center",
              LEFT: "middle right",
            },
            m = {
              ACTIVE: "active",
              OUT: "out",
            },
            g = {
              HIDE: "hide" + l,
              HIDDEN: "hidden" + l,
              SHOW: "show" + l,
              SHOWN: "shown" + l,
              INSERTED: "inserted" + l,
              CLICK: "click" + l,
              FOCUSIN: "focusin" + l,
              FOCUSOUT: "focusout" + l,
              MOUSEENTER: "mouseenter" + l,
              MOUSELEAVE: "mouseleave" + l,
            },
            v = {
              FADE: "fade",
              ACTIVE: "active",
            },
            y = {
              TOOLTIP: ".tooltip",
              TOOLTIP_INNER: ".tooltip-inner",
            },
            _ = {
              element: !1,
              enabled: !1,
            },
            b = {
              HOVER: "hover",
              FOCUS: "focus",
              CLICK: "click",
              MANUAL: "manual",
            },
            T = (function () {
              function h(t, e) {
                i(this, h),
                  (this._isEnabled = !0),
                  (this._timeout = 0),
                  (this._hoverState = ""),
                  (this._activeTrigger = {}),
                  (this._tether = null),
                  (this.element = t),
                  (this.config = this._getConfig(e)),
                  (this.tip = null),
                  this._setListeners();
              }
              return (
                (h.prototype.enable = function () {
                  this._isEnabled = !0;
                }),
                (h.prototype.disable = function () {
                  this._isEnabled = !1;
                }),
                (h.prototype.toggleEnabled = function () {
                  this._isEnabled = !this._isEnabled;
                }),
                (h.prototype.toggle = function (e) {
                  if (e) {
                    var i = this.constructor.DATA_KEY,
                      n = t(e.currentTarget).data(i);
                    n ||
                      ((n = new this.constructor(
                        e.currentTarget,
                        this._getDelegateConfig()
                      )),
                      t(e.currentTarget).data(i, n)),
                      (n._activeTrigger.click = !n._activeTrigger.click),
                      n._isWithActiveTrigger()
                        ? n._enter(null, n)
                        : n._leave(null, n);
                  } else {
                    if (t(this.getTipElement()).hasClass(v.ACTIVE))
                      return void this._leave(null, this);
                    this._enter(null, this);
                  }
                }),
                (h.prototype.dispose = function () {
                  clearTimeout(this._timeout),
                    this.cleanupTether(),
                    t.removeData(this.element, this.constructor.DATA_KEY),
                    t(this.element).off(this.constructor.EVENT_KEY),
                    this.tip && t(this.tip).remove(),
                    (this._isEnabled = null),
                    (this._timeout = null),
                    (this._hoverState = null),
                    (this._activeTrigger = null),
                    (this._tether = null),
                    (this.element = null),
                    (this.config = null),
                    (this.tip = null);
                }),
                (h.prototype.show = function () {
                  var e = this;
                  if ("none" === t(this.element).css("display"))
                    throw new Error("Please use show on visible elements");
                  var i = t.Event(this.constructor.Event.SHOW);
                  if (this.isWithContent() && this._isEnabled) {
                    t(this.element).trigger(i);
                    var n = t.contains(
                      this.element.ownerDocument.documentElement,
                      this.element
                    );
                    if (i.isDefaultPrevented() || !n) return;
                    var r = this.getTipElement(),
                      s = o.getUID(this.constructor.NAME);
                    r.setAttribute("id", s),
                      this.element.setAttribute("aria-describedby", s),
                      this.setContent(),
                      this.config.animation && t(r).addClass(v.FADE);
                    var a =
                        "function" == typeof this.config.placement
                          ? this.config.placement.call(this, r, this.element)
                          : this.config.placement,
                      l = this._getAttachment(a);
                    t(r)
                      .data(this.constructor.DATA_KEY, this)
                      .appendTo(document.body),
                      t(this.element).trigger(this.constructor.Event.INSERTED),
                      (this._tether = new Tether({
                        attachment: l,
                        element: r,
                        target: this.element,
                        classes: _,
                        classPrefix: c,
                        offset: this.config.offset,
                        constraints: this.config.constraints,
                        addTargetClasses: !1,
                      })),
                      o.reflow(r),
                      this._tether.position(),
                      t(r).addClass(v.ACTIVE);
                    var u = function () {
                      var i = e._hoverState;
                      (e._hoverState = null),
                        t(e.element).trigger(e.constructor.Event.SHOWN),
                        i === m.OUT && e._leave(null, e);
                    };
                    if (
                      o.supportsTransitionEnd() &&
                      t(this.tip).hasClass(v.FADE)
                    )
                      return void t(this.tip)
                        .one(o.TRANSITION_END, u)
                        .emulateTransitionEnd(h._TRANSITION_DURATION);
                    u();
                  }
                }),
                (h.prototype.hide = function (e) {
                  var i = this,
                    n = this.getTipElement(),
                    r = t.Event(this.constructor.Event.HIDE),
                    s = function () {
                      i._hoverState !== m.ACTIVE &&
                        n.parentNode &&
                        n.parentNode.removeChild(n),
                        i.element.removeAttribute("aria-describedby"),
                        t(i.element).trigger(i.constructor.Event.HIDDEN),
                        i.cleanupTether(),
                        e && e();
                    };
                  t(this.element).trigger(r),
                    r.isDefaultPrevented() ||
                      (t(n).removeClass(v.ACTIVE),
                      o.supportsTransitionEnd() && t(this.tip).hasClass(v.FADE)
                        ? t(n).one(o.TRANSITION_END, s).emulateTransitionEnd(u)
                        : s(),
                      (this._hoverState = ""));
                }),
                (h.prototype.isWithContent = function () {
                  return Boolean(this.getTitle());
                }),
                (h.prototype.getTipElement = function () {
                  return (this.tip = this.tip || t(this.config.template)[0]);
                }),
                (h.prototype.setContent = function () {
                  var e = t(this.getTipElement());
                  this.setElementContent(
                    e.find(y.TOOLTIP_INNER),
                    this.getTitle()
                  ),
                    e.removeClass(v.FADE).removeClass(v.ACTIVE),
                    this.cleanupTether();
                }),
                (h.prototype.setElementContent = function (e, i) {
                  var r = this.config.html;
                  "object" === ("undefined" == typeof i ? "undefined" : n(i)) &&
                  (i.nodeType || i.jquery)
                    ? r
                      ? t(i).parent().is(e) || e.empty().append(i)
                      : e.text(t(i).text())
                    : e[r ? "html" : "text"](i);
                }),
                (h.prototype.getTitle = function () {
                  var t = this.element.getAttribute("data-original-title");
                  return (
                    t ||
                      (t =
                        "function" == typeof this.config.title
                          ? this.config.title.call(this.element)
                          : this.config.title),
                    t
                  );
                }),
                (h.prototype.cleanupTether = function () {
                  this._tether && this._tether.destroy();
                }),
                (h.prototype._getAttachment = function (t) {
                  return p[t.toUpperCase()];
                }),
                (h.prototype._setListeners = function () {
                  var e = this,
                    i = this.config.trigger.split(" ");
                  i.forEach(function (i) {
                    if ("click" === i)
                      t(e.element).on(
                        e.constructor.Event.CLICK,
                        e.config.selector,
                        function (t) {
                          return e.toggle(t);
                        }
                      );
                    else if (i !== b.MANUAL) {
                      var n =
                          i === b.HOVER
                            ? e.constructor.Event.MOUSEENTER
                            : e.constructor.Event.FOCUSIN,
                        r =
                          i === b.HOVER
                            ? e.constructor.Event.MOUSELEAVE
                            : e.constructor.Event.FOCUSOUT;
                      t(e.element)
                        .on(n, e.config.selector, function (t) {
                          return e._enter(t);
                        })
                        .on(r, e.config.selector, function (t) {
                          return e._leave(t);
                        });
                    }
                  }),
                    this.config.selector
                      ? (this.config = t.extend({}, this.config, {
                          trigger: "manual",
                          selector: "",
                        }))
                      : this._fixTitle();
                }),
                (h.prototype._fixTitle = function () {
                  var t = n(this.element.getAttribute("data-original-title"));
                  (this.element.getAttribute("title") || "string" !== t) &&
                    (this.element.setAttribute(
                      "data-original-title",
                      this.element.getAttribute("title") || ""
                    ),
                    this.element.setAttribute("title", ""));
                }),
                (h.prototype._enter = function (e, i) {
                  var n = this.constructor.DATA_KEY;
                  return (
                    (i = i || t(e.currentTarget).data(n)),
                    i ||
                      ((i = new this.constructor(
                        e.currentTarget,
                        this._getDelegateConfig()
                      )),
                      t(e.currentTarget).data(n, i)),
                    e &&
                      (i._activeTrigger[
                        "focusin" === e.type ? b.FOCUS : b.HOVER
                      ] = !0),
                    t(i.getTipElement()).hasClass(v.ACTIVE) ||
                    i._hoverState === m.ACTIVE
                      ? void (i._hoverState = m.ACTIVE)
                      : (clearTimeout(i._timeout),
                        (i._hoverState = m.ACTIVE),
                        i.config.delay && i.config.delay.show
                          ? void (i._timeout = setTimeout(function () {
                              i._hoverState === m.ACTIVE && i.show();
                            }, i.config.delay.show))
                          : void i.show())
                  );
                }),
                (h.prototype._leave = function (e, i) {
                  var n = this.constructor.DATA_KEY;
                  if (
                    ((i = i || t(e.currentTarget).data(n)),
                    i ||
                      ((i = new this.constructor(
                        e.currentTarget,
                        this._getDelegateConfig()
                      )),
                      t(e.currentTarget).data(n, i)),
                    e &&
                      (i._activeTrigger[
                        "focusout" === e.type ? b.FOCUS : b.HOVER
                      ] = !1),
                    !i._isWithActiveTrigger())
                  )
                    return (
                      clearTimeout(i._timeout),
                      (i._hoverState = m.OUT),
                      i.config.delay && i.config.delay.hide
                        ? void (i._timeout = setTimeout(function () {
                            i._hoverState === m.OUT && i.hide();
                          }, i.config.delay.hide))
                        : void i.hide()
                    );
                }),
                (h.prototype._isWithActiveTrigger = function () {
                  for (var t in this._activeTrigger)
                    if (this._activeTrigger[t]) return !0;
                  return !1;
                }),
                (h.prototype._getConfig = function (i) {
                  return (
                    (i = t.extend(
                      {},
                      this.constructor.Default,
                      t(this.element).data(),
                      i
                    )),
                    i.delay &&
                      "number" == typeof i.delay &&
                      (i.delay = {
                        show: i.delay,
                        hide: i.delay,
                      }),
                    o.typeCheckConfig(e, i, this.constructor.DefaultType),
                    i
                  );
                }),
                (h.prototype._getDelegateConfig = function () {
                  var t = {};
                  if (this.config)
                    for (var e in this.config)
                      this.constructor.Default[e] !== this.config[e] &&
                        (t[e] = this.config[e]);
                  return t;
                }),
                (h._jQueryInterface = function (e) {
                  return this.each(function () {
                    var i = t(this).data(a),
                      r =
                        "object" ===
                        ("undefined" == typeof e ? "undefined" : n(e))
                          ? e
                          : null;
                    if (
                      (i || !/dispose|hide/.test(e)) &&
                      (i || ((i = new h(this, r)), t(this).data(a, i)),
                      "string" == typeof e)
                    ) {
                      if (void 0 === i[e])
                        throw new Error('No method named "' + e + '"');
                      i[e]();
                    }
                  });
                }),
                r(h, null, [
                  {
                    key: "VERSION",
                    get: function () {
                      return s;
                    },
                  },
                  {
                    key: "Default",
                    get: function () {
                      return f;
                    },
                  },
                  {
                    key: "NAME",
                    get: function () {
                      return e;
                    },
                  },
                  {
                    key: "DATA_KEY",
                    get: function () {
                      return a;
                    },
                  },
                  {
                    key: "Event",
                    get: function () {
                      return g;
                    },
                  },
                  {
                    key: "EVENT_KEY",
                    get: function () {
                      return l;
                    },
                  },
                  {
                    key: "DefaultType",
                    get: function () {
                      return d;
                    },
                  },
                ]),
                h
              );
            })();
          return (
            (t.fn[e] = T._jQueryInterface),
            (t.fn[e].Constructor = T),
            (t.fn[e].noConflict = function () {
              return (t.fn[e] = h), T._jQueryInterface;
            }),
            T
          );
        })(jQuery));
    !(function (o) {
      var a = "popover",
        l = "4.0.0-alpha.5",
        h = "bs.popover",
        u = "." + h,
        c = o.fn[a],
        f = o.extend({}, s.Default, {
          placement: "right",
          trigger: "click",
          content: "",
          template:
            '<div class="popover" role="tooltip"><h3 class="popover-title"></h3><div class="popover-content"></div></div>',
        }),
        d = o.extend({}, s.DefaultType, {
          content: "(string|element|function)",
        }),
        p = {
          FADE: "fade",
          ACTIVE: "active",
        },
        m = {
          TITLE: ".popover-title",
          CONTENT: ".popover-content",
        },
        g = {
          HIDE: "hide" + u,
          HIDDEN: "hidden" + u,
          SHOW: "show" + u,
          SHOWN: "shown" + u,
          INSERTED: "inserted" + u,
          CLICK: "click" + u,
          FOCUSIN: "focusin" + u,
          FOCUSOUT: "focusout" + u,
          MOUSEENTER: "mouseenter" + u,
          MOUSELEAVE: "mouseleave" + u,
        },
        v = (function (s) {
          function c() {
            return i(this, c), t(this, s.apply(this, arguments));
          }
          return (
            e(c, s),
            (c.prototype.isWithContent = function () {
              return this.getTitle() || this._getContent();
            }),
            (c.prototype.getTipElement = function () {
              return (this.tip = this.tip || o(this.config.template)[0]);
            }),
            (c.prototype.setContent = function () {
              var t = o(this.getTipElement());
              this.setElementContent(t.find(m.TITLE), this.getTitle()),
                this.setElementContent(t.find(m.CONTENT), this._getContent()),
                t.removeClass(p.FADE).removeClass(p.ACTIVE),
                this.cleanupTether();
            }),
            (c.prototype._getContent = function () {
              return (
                this.element.getAttribute("data-content") ||
                ("function" == typeof this.config.content
                  ? this.config.content.call(this.element)
                  : this.config.content)
              );
            }),
            (c._jQueryInterface = function (t) {
              return this.each(function () {
                var e = o(this).data(h),
                  i =
                    "object" === ("undefined" == typeof t ? "undefined" : n(t))
                      ? t
                      : null;
                if (
                  (e || !/destroy|hide/.test(t)) &&
                  (e || ((e = new c(this, i)), o(this).data(h, e)),
                  "string" == typeof t)
                ) {
                  if (void 0 === e[t])
                    throw new Error('No method named "' + t + '"');
                  e[t]();
                }
              });
            }),
            r(c, null, [
              {
                key: "VERSION",
                get: function () {
                  return l;
                },
              },
              {
                key: "Default",
                get: function () {
                  return f;
                },
              },
              {
                key: "NAME",
                get: function () {
                  return a;
                },
              },
              {
                key: "DATA_KEY",
                get: function () {
                  return h;
                },
              },
              {
                key: "Event",
                get: function () {
                  return g;
                },
              },
              {
                key: "EVENT_KEY",
                get: function () {
                  return u;
                },
              },
              {
                key: "DefaultType",
                get: function () {
                  return d;
                },
              },
            ]),
            c
          );
        })(s);
      return (
        (o.fn[a] = v._jQueryInterface),
        (o.fn[a].Constructor = v),
        (o.fn[a].noConflict = function () {
          return (o.fn[a] = c), v._jQueryInterface;
        }),
        v
      );
    })(jQuery);
  })(),
  !(function (t) {
    "use strict";
    function e() {
      (r = t.innerWidth || document.documentElement.clientWidth),
        (o = t.innerHeight || document.documentElement.clientHeight);
    }
    function i(t, e, i) {
      t.addEventListener
        ? t.addEventListener(e, i)
        : t.attachEvent("on" + e, function () {
            i.call(t);
          });
    }
    function n(i) {
      t.requestAnimationFrame(function () {
        "scroll" !== i.type && e();
        for (var t = 0, n = p.length; t < n; t++)
          "scroll" !== i.type && (p[t].coverImage(), p[t].clipContainer()),
            p[t].onScroll();
      });
    }
    Date.now ||
      (Date.now = function () {
        return new Date().getTime();
      }),
      t.requestAnimationFrame ||
        !(function () {
          for (
            var e = ["webkit", "moz"], i = 0;
            i < e.length && !t.requestAnimationFrame;
            ++i
          ) {
            var n = e[i];
            (t.requestAnimationFrame = t[n + "RequestAnimationFrame"]),
              (t.cancelAnimationFrame =
                t[n + "CancelAnimationFrame"] ||
                t[n + "CancelRequestAnimationFrame"]);
          }
          if (
            /iP(ad|hone|od).*OS 6/.test(t.navigator.userAgent) ||
            !t.requestAnimationFrame ||
            !t.cancelAnimationFrame
          ) {
            var r = 0;
            (t.requestAnimationFrame = function (t) {
              var e = Date.now(),
                i = Math.max(r + 16, e);
              return setTimeout(function () {
                t((r = i));
              }, i - e);
            }),
              (t.cancelAnimationFrame = clearTimeout);
          }
        })();
    var r,
      o,
      s = (function () {
        if (!t.getComputedStyle) return !1;
        var e,
          i = document.createElement("p"),
          n = {
            webkitTransform: "-webkit-transform",
            OTransform: "-o-transform",
            msTransform: "-ms-transform",
            MozTransform: "-moz-transform",
            transform: "transform",
          };
        (document.body || document.documentElement).insertBefore(i, null);
        for (var r in n)
          "undefined" != typeof i.style[r] &&
            ((i.style[r] = "translate3d(1px,1px,1px)"),
            (e = t.getComputedStyle(i).getPropertyValue(n[r])));
        return (
          (document.body || document.documentElement).removeChild(i),
          "undefined" != typeof e && e.length > 0 && "none" !== e
        );
      })(),
      a = navigator.userAgent.toLowerCase().indexOf("android") > -1,
      l = /iPad|iPhone|iPod/.test(navigator.userAgent) && !t.MSStream,
      h = !!t.opera,
      u = /Edge\/\d+/.test(navigator.userAgent),
      c = /Trident.*rv[ :]*11\./.test(navigator.userAgent),
      f = !!Function("/*@cc_on return document.documentMode===10@*/")(),
      d = document.all && !t.atob;
    e();
    var p = [],
      m = (function () {
        function t(t, i) {
          var n,
            r = this;
          if (
            ((r.$item = t),
            (r.defaults = {
              type: "scroll",
              speed: 0.5,
              imgSrc: null,
              imgWidth: null,
              imgHeight: null,
              enableTransform: !0,
              elementInViewport: null,
              zIndex: -100,
              noAndroid: !1,
              noIos: !0,
              onScroll: null,
              onInit: null,
              onDestroy: null,
              onCoverImage: null,
            }),
            (n = JSON.parse(r.$item.getAttribute("data-jarallax") || "{}")),
            (r.options = r.extend({}, r.defaults, n, i)),
            !((a && r.options.noAndroid) || (l && r.options.noIos)))
          ) {
            r.options.speed = Math.min(
              2,
              Math.max(-1, parseFloat(r.options.speed))
            );
            var o = r.options.elementInViewport;
            o &&
              "object" == typeof o &&
              "undefined" != typeof o.length &&
              (o = o[0]),
              !o instanceof Element && (o = null),
              (r.options.elementInViewport = o),
              (r.instanceID = e++),
              (r.image = {
                src: r.options.imgSrc || null,
                $container: null,
                $item: null,
                width: r.options.imgWidth || null,
                height: r.options.imgHeight || null,
                useImgTag: l || a || h || c || f || u,
              }),
              r.initImg() && r.init();
          }
        }
        var e = 0;
        return t;
      })();
    (m.prototype.css = function (e, i) {
      if ("string" == typeof i)
        return t.getComputedStyle
          ? t.getComputedStyle(e).getPropertyValue(i)
          : e.style[i];
      i.transform && (i.WebkitTransform = i.MozTransform = i.transform);
      for (var n in i) e.style[n] = i[n];
      return e;
    }),
      (m.prototype.extend = function (t) {
        t = t || {};
        for (var e = 1; e < arguments.length; e++)
          if (arguments[e])
            for (var i in arguments[e])
              arguments[e].hasOwnProperty(i) && (t[i] = arguments[e][i]);
        return t;
      }),
      (m.prototype.initImg = function () {
        var t = this;
        return (
          null === t.image.src &&
            (t.image.src = t
              .css(t.$item, "background-image")
              .replace(/^url\(['"]?/g, "")
              .replace(/['"]?\)$/g, "")),
          !(!t.image.src || "none" === t.image.src)
        );
      }),
      (m.prototype.init = function () {
        function t() {
          e.coverImage(),
            e.clipContainer(),
            e.onScroll(!0),
            e.$item.setAttribute(
              "data-jarallax-original-styles",
              e.$item.getAttribute("style")
            ),
            e.options.onInit && e.options.onInit.call(e),
            setTimeout(function () {
              e.$item &&
                e.css(e.$item, {
                  "background-image": "none",
                  "background-attachment": "scroll",
                  "background-size": "auto",
                });
            }, 0);
        }
        var e = this,
          i = {
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            overflow: "hidden",
            pointerEvents: "none",
          },
          n = {
            position: "fixed",
          };
        (e.image.$container = document.createElement("div")),
          e.css(e.image.$container, i),
          e.css(e.image.$container, {
            visibility: "hidden",
            "z-index": e.options.zIndex,
          }),
          e.image.$container.setAttribute(
            "id",
            "jarallax-container-" + e.instanceID
          ),
          e.$item.appendChild(e.image.$container),
          e.image.useImgTag && s && e.options.enableTransform
            ? ((e.image.$item = document.createElement("img")),
              e.image.$item.setAttribute("src", e.image.src),
              (n = e.extend(
                {
                  "max-width": "none",
                },
                i,
                n
              )))
            : ((e.image.$item = document.createElement("div")),
              (n = e.extend(
                {
                  "background-position": "50% 50%",
                  "background-size": "100% auto",
                  "background-repeat": "no-repeat no-repeat",
                  "background-image": 'url("' + e.image.src + '")',
                },
                i,
                n
              ))),
          d && (n.backgroundAttachment = "fixed"),
          (e.parentWithTransform = 0);
        for (
          var r = e.$item;
          null !== r && r !== document && 0 === e.parentWithTransform;

        ) {
          var o =
            e.css(r, "-webkit-transform") ||
            e.css(r, "-moz-transform") ||
            e.css(r, "transform");
          o &&
            "none" !== o &&
            ((e.parentWithTransform = 1),
            e.css(e.image.$container, {
              transform: "translateX(0) translateY(0)",
            })),
            (r = r.parentNode);
        }
        e.css(e.image.$item, n),
          e.image.$container.appendChild(e.image.$item),
          e.image.width && e.image.height
            ? t()
            : e.getImageSize(e.image.src, function (i, n) {
                (e.image.width = i), (e.image.height = n), t();
              }),
          p.push(e);
      }),
      (m.prototype.destroy = function () {
        for (var t = this, e = 0, i = p.length; e < i; e++)
          if (p[e].instanceID === t.instanceID) {
            p.splice(e, 1);
            break;
          }
        var n = t.$item.getAttribute("data-jarallax-original-styles");
        t.$item.removeAttribute("data-jarallax-original-styles"),
          "null" === n
            ? t.$item.removeAttribute("style")
            : t.$item.setAttribute("style", n),
          t.$clipStyles && t.$clipStyles.parentNode.removeChild(t.$clipStyles),
          t.image.$container.parentNode.removeChild(t.image.$container),
          t.options.onDestroy && t.options.onDestroy.call(t),
          delete t.$item.jarallax;
        for (var r in t) delete t[r];
      }),
      (m.prototype.getImageSize = function (t, e) {
        if (t && e) {
          var i = new Image();
          (i.onload = function () {
            e(i.width, i.height);
          }),
            (i.src = t);
        }
      }),
      (m.prototype.clipContainer = function () {
        if (!d) {
          var t = this,
            e = t.image.$container.getBoundingClientRect(),
            i = e.width,
            n = e.height;
          if (!t.$clipStyles) {
            (t.$clipStyles = document.createElement("style")),
              t.$clipStyles.setAttribute("type", "text/css"),
              t.$clipStyles.setAttribute(
                "id",
                "#jarallax-clip-" + t.instanceID
              );
            var r = document.head || document.getElementsByTagName("head")[0];
            r.appendChild(t.$clipStyles);
          }
          var o = [
            "#jarallax-container-" + t.instanceID + " {",
            "   clip: rect(0 " + i + "px " + n + "px 0);",
            "   clip: rect(0, " + i + "px, " + n + "px, 0);",
            "}",
          ].join("\n");
          t.$clipStyles.styleSheet
            ? (t.$clipStyles.styleSheet.cssText = o)
            : (t.$clipStyles.innerHTML = o);
        }
      }),
      (m.prototype.coverImage = function () {
        var t = this;
        if (t.image.width && t.image.height) {
          var e = t.image.$container.getBoundingClientRect(),
            i = e.width,
            n = e.height,
            r = e.left,
            a = t.image.width,
            l = t.image.height,
            h = t.options.speed,
            u =
              "scroll" === t.options.type ||
              "scroll-opacity" === t.options.type,
            c = 0,
            f = 0,
            d = n,
            p = 0,
            m = 0;
          u &&
            ((c = (h * (n + o)) / 2),
            (h < 0 || h > 1) && (c = (h * Math.max(n, o)) / 2),
            h < 0 || h > 1
              ? (d = Math.max(n, o) + 2 * Math.abs(c))
              : (d += Math.abs(o - n) * (1 - h))),
            (f = (d * a) / l),
            f < i && ((f = i), (d = (f * l) / a)),
            (t.bgPosVerticalCenter = 0),
            !(u && d < o) ||
              (s && t.options.enableTransform) ||
              ((t.bgPosVerticalCenter = (o - d) / 2), (d = o)),
            u
              ? ((p = r + (i - f) / 2), (m = (o - d) / 2))
              : ((p = (i - f) / 2), (m = (n - d) / 2)),
            s && t.options.enableTransform && t.parentWithTransform && (p -= r),
            (t.parallaxScrollDistance = c),
            t.css(t.image.$item, {
              width: f + "px",
              height: d + "px",
              marginLeft: p + "px",
              marginTop: m + "px",
            }),
            t.options.onCoverImage && t.options.onCoverImage.call(t);
        }
      }),
      (m.prototype.isVisible = function () {
        return this.isElementInViewport || !1;
      }),
      (m.prototype.onScroll = function (t) {
        var e = this;
        if (e.image.width && e.image.height) {
          var i = e.$item.getBoundingClientRect(),
            n = i.top,
            a = i.height,
            l = {
              position: "absolute",
              visibility: "visible",
              backgroundPosition: "50% 50%",
            },
            h = i;
          if (
            (e.options.elementInViewport &&
              (h = e.options.elementInViewport.getBoundingClientRect()),
            (e.isElementInViewport =
              h.bottom >= 0 && h.right >= 0 && h.top <= o && h.left <= r),
            t || e.isElementInViewport)
          ) {
            var u = Math.max(0, n),
              c = Math.max(0, a + n),
              f = Math.max(0, -n),
              p = Math.max(0, n + a - o),
              m = Math.max(0, a - (n + a - o)),
              g = Math.max(0, -n + o - a),
              v = 1 - (2 * (o - n)) / (o + a),
              y = 1;
            if (
              (a < o
                ? (y = 1 - (f || p) / a)
                : c <= o
                ? (y = c / o)
                : m <= o && (y = m / o),
              ("opacity" !== e.options.type &&
                "scale-opacity" !== e.options.type &&
                "scroll-opacity" !== e.options.type) ||
                ((l.transform = "translate3d(0, 0, 0)"), (l.opacity = y)),
              "scale" === e.options.type || "scale-opacity" === e.options.type)
            ) {
              var _ = 1;
              e.options.speed < 0
                ? (_ -= e.options.speed * y)
                : (_ += e.options.speed * (1 - y)),
                (l.transform = "scale(" + _ + ") translate3d(0, 0, 0)");
            }
            if (
              "scroll" === e.options.type ||
              "scroll-opacity" === e.options.type
            ) {
              var b = e.parallaxScrollDistance * v;
              s && e.options.enableTransform
                ? (e.parentWithTransform && (b -= n),
                  (l.transform = "translate3d(0, " + b + "px, 0)"))
                : e.image.useImgTag
                ? (l.top = b + "px")
                : (e.bgPosVerticalCenter && (b += e.bgPosVerticalCenter),
                  (l.backgroundPosition = "50% " + b + "px")),
                (l.position = d ? "absolute" : "fixed");
            }
            e.css(e.image.$item, l),
              e.options.onScroll &&
                e.options.onScroll.call(e, {
                  section: i,
                  beforeTop: u,
                  beforeTopEnd: c,
                  afterTop: f,
                  beforeBottom: p,
                  beforeBottomEnd: m,
                  afterBottom: g,
                  visiblePercent: y,
                  fromViewportCenter: v,
                });
          }
        }
      }),
      i(t, "scroll", n),
      i(t, "resize", n),
      i(t, "orientationchange", n),
      i(t, "load", n);
    var g = function (t) {
      ("object" == typeof HTMLElement
        ? t instanceof HTMLElement
        : t &&
          "object" == typeof t &&
          null !== t &&
          1 === t.nodeType &&
          "string" == typeof t.nodeName) && (t = [t]);
      var e,
        i = arguments[1],
        n = Array.prototype.slice.call(arguments, 2),
        r = t.length,
        o = 0;
      for (o; o < r; o++)
        if (
          ("object" == typeof i || "undefined" == typeof i
            ? t[o].jarallax || (t[o].jarallax = new m(t[o], i))
            : t[o].jarallax && (e = t[o].jarallax[i].apply(t[o].jarallax, n)),
          "undefined" != typeof e)
        )
          return e;
      return t;
    };
    g.constructor = m;
    var v = t.jarallax;
    if (
      ((t.jarallax = g),
      (t.jarallax.noConflict = function () {
        return (t.jarallax = v), this;
      }),
      "undefined" != typeof jQuery)
    ) {
      var y = function () {
        var e = arguments || [];
        Array.prototype.unshift.call(e, this);
        var i = g.apply(t, e);
        return "object" != typeof i ? i : this;
      };
      y.constructor = m;
      var _ = jQuery.fn.jarallax;
      (jQuery.fn.jarallax = y),
        (jQuery.fn.jarallax.noConflict = function () {
          return (jQuery.fn.jarallax = _), this;
        });
    }
    i(t, "DOMContentLoaded", function () {
      g(document.querySelectorAll("[data-jarallax], [data-jarallax-video]"));
    });
  })(window),
  !(function (t) {
    "use strict";
    function e(t) {
      t = t || {};
      for (var e = 1; e < arguments.length; e++)
        if (arguments[e])
          for (var i in arguments[e])
            arguments[e].hasOwnProperty(i) && (t[i] = arguments[e][i]);
      return t;
    }
    function i() {
      (this._done = []), (this._fail = []);
    }
    function n(t, e, i) {
      t.addEventListener
        ? t.addEventListener(e, i)
        : t.attachEvent("on" + e, function () {
            i.call(t);
          });
    }
    i.prototype = {
      execute: function (t, e) {
        var i = t.length;
        for (e = Array.prototype.slice.call(e); i--; ) t[i].apply(null, e);
      },
      resolve: function () {
        this.execute(this._done, arguments);
      },
      reject: function () {
        this.execute(this._fail, arguments);
      },
      done: function (t) {
        this._done.push(t);
      },
      fail: function (t) {
        this._fail.push(t);
      },
    };
    var r = (function () {
      function t(t, n) {
        var r = this;
        (r.url = t),
          (r.options_default = {
            autoplay: 1,
            loop: 1,
            mute: 1,
            controls: 0,
            startTime: 0,
            endTime: 0,
          }),
          (r.options = e({}, r.options_default, n)),
          (r.videoID = r.parseURL(t)),
          r.videoID && ((r.ID = i++), r.loadAPI(), r.init());
      }
      var i = 0;
      return t;
    })();
    (r.prototype.parseURL = function (t) {
      function e(t) {
        var e = /.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/,
          i = t.match(e);
        return !(!i || 11 !== i[1].length) && i[1];
      }
      function i(t) {
        var e =
            /https?:\/\/(?:www\.|player\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/([^\/]*)\/videos\/|album\/(\d+)\/video\/|video\/|)(\d+)(?:$|\/|\?)/,
          i = t.match(e);
        return !(!i || !i[3]) && i[3];
      }
      function n(t) {
        for (
          var e = t.split(/,(?=mp4\:|webm\:|ogv\:|ogg\:)/),
            i = {},
            n = 0,
            r = 0;
          r < e.length;
          r++
        ) {
          var o = e[r].match(/^(mp4|webm|ogv|ogg)\:(.*)/);
          o &&
            o[1] &&
            o[2] &&
            ((i["ogv" === o[1] ? "ogg" : o[1]] = o[2]), (n = 1));
        }
        return !!n && i;
      }
      var r = e(t),
        o = i(t),
        s = n(t);
      return r
        ? ((this.type = "youtube"), r)
        : o
        ? ((this.type = "vimeo"), o)
        : !!s && ((this.type = "local"), s);
    }),
      (r.prototype.isValid = function () {
        return !!this.videoID;
      }),
      (r.prototype.on = function (t, e) {
        (this.userEventsList = this.userEventsList || []),
          (this.userEventsList[t] || (this.userEventsList[t] = [])).push(e);
      }),
      (r.prototype.off = function (t, e) {
        if (this.userEventsList && this.userEventsList[t])
          if (e)
            for (var i = 0; i < this.userEventsList[t].length; i++)
              this.userEventsList[t][i] === e &&
                (this.userEventsList[t][i] = !1);
          else delete this.userEventsList[t];
      }),
      (r.prototype.fire = function (t) {
        var e = [].slice.call(arguments, 1);
        if (this.userEventsList && "undefined" != typeof this.userEventsList[t])
          for (var i in this.userEventsList[t])
            this.userEventsList[t][i] &&
              this.userEventsList[t][i].apply(this, e);
      });
    var o = 0;
    (r.prototype.play = function (t) {
      var e = this;
      e.player &&
        ("youtube" === e.type &&
          e.player.playVideo &&
          ("undefined" != typeof t && e.player.seekTo(t || 0),
          e.player.playVideo()),
        "vimeo" !== e.type ||
          o ||
          ("undefined" != typeof t
            ? ((o = 1),
              e.player.setCurrentTime(t || 0).then(function () {
                e.player.play(), (o = 0);
              }))
            : e.player.play()),
        "local" === e.type &&
          ("undefined" != typeof t && (e.player.currentTime = t),
          e.player.play()));
    }),
      (r.prototype.pause = function () {
        this.player &&
          ("youtube" === this.type &&
            this.player.pauseVideo &&
            this.player.pauseVideo(),
          "vimeo" === this.type && this.player.pause(),
          "local" === this.type && this.player.pause());
      }),
      (r.prototype.getImageURL = function (t) {
        var e = this;
        if (e.videoImage) return void t(e.videoImage);
        if ("youtube" === e.type) {
          var i = ["maxresdefault", "sddefault", "hqdefault", "0"],
            n = 0,
            r = new Image();
          (r.onload = function () {
            120 !== (this.naturalWidth || this.width) || n === i.length - 1
              ? ((e.videoImage =
                  "https://img.youtube.com/vi/" +
                  e.videoID +
                  "/" +
                  i[n] +
                  ".jpg"),
                t(e.videoImage))
              : (n++,
                (this.src =
                  "https://img.youtube.com/vi/" +
                  e.videoID +
                  "/" +
                  i[n] +
                  ".jpg"));
          }),
            (r.src =
              "https://img.youtube.com/vi/" + e.videoID + "/" + i[n] + ".jpg");
        }
        if ("vimeo" === e.type) {
          var o = new XMLHttpRequest();
          o.open(
            "GET",
            "https://vimeo.com/api/v2/video/" + e.videoID + ".json",
            !0
          ),
            (o.onreadystatechange = function () {
              if (
                4 === this.readyState &&
                this.status >= 200 &&
                this.status < 400
              ) {
                var i = JSON.parse(this.responseText);
                (e.videoImage = i[0].thumbnail_large), t(e.videoImage);
              }
            }),
            o.send(),
            (o = null);
        }
      }),
      (r.prototype.getIframe = function (e) {
        var i = this;
        return i.$iframe
          ? void e(i.$iframe)
          : void i.onAPIready(function () {
              function r(t, e, i) {
                var n = document.createElement("source");
                (n.src = e), (n.type = i), t.appendChild(n);
              }
              var o;
              if (
                (i.$iframe ||
                  ((o = document.createElement("div")),
                  (o.style.display = "none")),
                "youtube" === i.type)
              ) {
                (i.playerOptions = {}),
                  (i.playerOptions.videoId = i.videoID),
                  (i.playerOptions.width =
                    t.innerWidth || document.documentElement.clientWidth),
                  (i.playerOptions.playerVars = {
                    autohide: 1,
                    rel: 0,
                    autoplay: 0,
                  }),
                  i.options.controls ||
                    ((i.playerOptions.playerVars.iv_load_policy = 3),
                    (i.playerOptions.playerVars.modestbranding = 1),
                    (i.playerOptions.playerVars.controls = 0),
                    (i.playerOptions.playerVars.showinfo = 0),
                    (i.playerOptions.playerVars.disablekb = 1));
                var s, a;
                i.playerOptions.events = {
                  onReady: function (t) {
                    i.options.mute && t.target.mute(),
                      i.options.autoplay && i.play(i.options.startTime),
                      i.fire("ready", t);
                  },
                  onStateChange: function (t) {
                    i.options.loop &&
                      t.data === YT.PlayerState.ENDED &&
                      i.play(i.options.startTime),
                      s ||
                        t.data !== YT.PlayerState.PLAYING ||
                        ((s = 1), i.fire("started", t)),
                      t.data === YT.PlayerState.PLAYING && i.fire("play", t),
                      t.data === YT.PlayerState.PAUSED && i.fire("pause", t),
                      t.data === YT.PlayerState.ENDED && i.fire("end", t),
                      i.options.endTime &&
                        (t.data === YT.PlayerState.PLAYING
                          ? (a = setInterval(function () {
                              i.options.endTime &&
                                i.player.getCurrentTime() >=
                                  i.options.endTime &&
                                (i.options.loop
                                  ? i.play(i.options.startTime)
                                  : i.pause());
                            }, 150))
                          : clearInterval(a));
                  },
                };
                var l = !i.$iframe;
                if (l) {
                  var h = document.createElement("div");
                  h.setAttribute("id", i.playerID),
                    o.appendChild(h),
                    document.body.appendChild(o);
                }
                (i.player =
                  i.player || new t.YT.Player(i.playerID, i.playerOptions)),
                  l && (i.$iframe = document.getElementById(i.playerID));
              }
              if ("vimeo" === i.type) {
                (i.playerOptions = ""),
                  (i.playerOptions += "player_id=" + i.playerID),
                  (i.playerOptions += "&autopause=0"),
                  i.options.controls ||
                    (i.playerOptions += "&badge=0&byline=0&portrait=0&title=0"),
                  (i.playerOptions += "&autoplay=0"),
                  (i.playerOptions += "&loop=" + (i.options.loop ? 1 : 0)),
                  i.$iframe ||
                    ((i.$iframe = document.createElement("iframe")),
                    i.$iframe.setAttribute("id", i.playerID),
                    i.$iframe.setAttribute(
                      "src",
                      "https://player.vimeo.com/video/" +
                        i.videoID +
                        "?" +
                        i.playerOptions
                    ),
                    i.$iframe.setAttribute("frameborder", "0"),
                    o.appendChild(i.$iframe),
                    document.body.appendChild(o)),
                  (i.player = i.player || new Vimeo.Player(i.$iframe)),
                  i.player.setVolume(i.options.mute ? 0 : 100),
                  i.options.autoplay && i.play(i.options.startTime);
                var u;
                i.player.on("timeupdate", function (t) {
                  u || i.fire("started", t),
                    (u = 1),
                    i.options.endTime &&
                      i.options.endTime &&
                      t.seconds >= i.options.endTime &&
                      (i.options.loop
                        ? i.play(i.options.startTime)
                        : i.pause());
                }),
                  i.player.on("play", function (t) {
                    i.fire("play", t);
                  }),
                  i.player.on("pause", function (t) {
                    i.fire("pause", t);
                  }),
                  i.player.on("ended", function (t) {
                    i.fire("end", t);
                  }),
                  i.player.on("loaded", function (t) {
                    i.fire("ready", t);
                  });
              }
              if ("local" === i.type) {
                if (!i.$iframe) {
                  (i.$iframe = document.createElement("video")),
                    i.options.mute && i.$iframe.setAttribute("mute", "on"),
                    i.options.loop && i.$iframe.setAttribute("loop", "on"),
                    i.$iframe.setAttribute("id", i.playerID),
                    o.appendChild(i.$iframe),
                    document.body.appendChild(o);
                  for (var c in i.videoID)
                    r(i.$iframe, i.videoID[c], "video/" + c);
                }
                i.player = i.player || i.$iframe;
                var f;
                n(i.player, "playing", function (t) {
                  f || i.fire("started", t), (f = 1);
                }),
                  n(i.player, "timeupdate", function () {
                    i.options.endTime &&
                      i.options.endTime &&
                      this.currentTime >= i.options.endTime &&
                      (i.options.loop
                        ? i.play(i.options.startTime)
                        : i.pause());
                  }),
                  n(i.player, "play", function (t) {
                    i.fire("play", t);
                  }),
                  n(i.player, "pause", function (t) {
                    i.fire("pause", t);
                  }),
                  n(i.player, "ended", function (t) {
                    i.fire("end", t);
                  }),
                  n(i.player, "loadedmetadata", function () {
                    i.fire("ready"),
                      i.options.autoplay && i.play(i.options.startTime);
                  });
              }
              e(i.$iframe);
            });
      }),
      (r.prototype.init = function () {
        var t = this;
        t.playerID = "VideoWorker-" + t.ID;
      });
    var s = 0,
      a = 0;
    r.prototype.loadAPI = function () {
      var e = this;
      if (!s || !a) {
        var i = "";
        if (
          ("youtube" !== e.type ||
            s ||
            ((s = 1), (i = "//www.youtube.com/iframe_api")),
          "vimeo" !== e.type ||
            a ||
            ((a = 1), (i = "//player.vimeo.com/api/player.js")),
          i)
        ) {
          "file://" === t.location.origin && (i = "http:" + i);
          var n = document.createElement("script"),
            r = document.getElementsByTagName("head")[0];
          (n.src = i), r.appendChild(n), (r = null), (n = null);
        }
      }
    };
    var l = 0,
      h = 0,
      u = new i(),
      c = new i();
    (r.prototype.onAPIready = function (e) {
      var i = this;
      if (
        ("youtube" === i.type &&
          (("undefined" != typeof YT && 0 !== YT.loaded) || l
            ? "object" == typeof YT && 1 === YT.loaded
              ? e()
              : u.done(function () {
                  e();
                })
            : ((l = 1),
              (t.onYouTubeIframeAPIReady = function () {
                (t.onYouTubeIframeAPIReady = null), u.resolve("done"), e();
              }))),
        "vimeo" === i.type)
      )
        if ("undefined" != typeof Vimeo || h)
          "undefined" != typeof Vimeo
            ? e()
            : c.done(function () {
                e();
              });
        else {
          h = 1;
          var n = setInterval(function () {
            "undefined" != typeof Vimeo &&
              (clearInterval(n), c.resolve("done"), e());
          }, 20);
        }
      "local" === i.type && e();
    }),
      (t.VideoWorker = r);
  })(window),
  (function () {
    "use strict";
    if ("undefined" != typeof jarallax) {
      var t = jarallax.constructor,
        e = t.prototype.init;
      t.prototype.init = function () {
        var t = this;
        e.apply(t),
          t.video &&
            t.video.getIframe(function (e) {
              var i = e.parentNode;
              t.css(e, {
                position: "fixed",
                top: "0px",
                left: "0px",
                right: "0px",
                bottom: "0px",
                width: "100%",
                height: "100%",
                visibility: "visible",
                zIndex: -1,
              }),
                (t.$video = e),
                t.image.$container.appendChild(e),
                i.parentNode.removeChild(i);
            });
      };
      var i = t.prototype.coverImage;
      t.prototype.coverImage = function () {
        var t = this;
        i.apply(t),
          t.video &&
            "IFRAME" === t.image.$item.nodeName &&
            t.css(t.image.$item, {
              height: t.image.$item.getBoundingClientRect().height + 400 + "px",
              marginTop:
                -200 + parseFloat(t.css(t.image.$item, "margin-top")) + "px",
            });
      };
      var n = t.prototype.initImg;
      t.prototype.initImg = function () {
        var t = this;
        if (
          (t.options.videoSrc ||
            (t.options.videoSrc =
              t.$item.getAttribute("data-jarallax-video") || !1),
          t.options.videoSrc)
        ) {
          var e = new VideoWorker(t.options.videoSrc, {
            startTime: t.options.videoStartTime || 0,
            endTime: t.options.videoEndTime || 0,
          });
          if (
            (e.isValid() &&
              ((t.image.useImgTag = !0),
              e.on("ready", function () {
                var i = t.onScroll;
                t.onScroll = function () {
                  i.apply(t), t.isVisible() ? e.play() : e.pause();
                };
              }),
              e.on("started", function () {
                (t.image.$default_item = t.image.$item),
                  (t.image.$item = t.$video),
                  (t.image.width = t.options.imgWidth = t.image.width || 1280),
                  (t.image.height = t.options.imgHeight =
                    t.image.height || 720),
                  t.coverImage(),
                  t.clipContainer(),
                  t.onScroll(),
                  t.image.$default_item &&
                    (t.image.$default_item.style.display = "none");
              }),
              (t.video = e),
              "local" !== e.type &&
                e.getImageURL(function (e) {
                  (t.image.src = e), t.init();
                })),
            "local" !== e.type)
          )
            return !1;
        }
        return n.apply(t);
      };
      var r = t.prototype.destroy;
      t.prototype.destroy = function () {
        var t = this;
        r.apply(t);
      };
    }
  })(),
  !(function (t, e) {
    "function" == typeof define && define.amd
      ? define("jquery-bridget/jquery-bridget", ["jquery"], function (i) {
          return e(t, i);
        })
      : "object" == typeof module && module.exports
      ? (module.exports = e(t, require("jquery")))
      : (t.jQueryBridget = e(t, t.jQuery));
  })(window, function (t, e) {
    "use strict";
    function i(i, o, a) {
      function l(t, e, n) {
        var r,
          o = "$()." + i + '("' + e + '")';
        return (
          t.each(function (t, l) {
            var h = a.data(l, i);
            if (!h)
              return void s(
                i + " not initialized. Cannot call methods, i.e. " + o
              );
            var u = h[e];
            if (!u || "_" == e.charAt(0))
              return void s(o + " is not a valid method");
            var c = u.apply(h, n);
            r = void 0 === r ? c : r;
          }),
          void 0 !== r ? r : t
        );
      }
      function h(t, e) {
        t.each(function (t, n) {
          var r = a.data(n, i);
          r ? (r.option(e), r._init()) : ((r = new o(n, e)), a.data(n, i, r));
        });
      }
      (a = a || e || t.jQuery),
        a &&
          (o.prototype.option ||
            (o.prototype.option = function (t) {
              a.isPlainObject(t) &&
                (this.options = a.extend(!0, this.options, t));
            }),
          (a.fn[i] = function (t) {
            if ("string" == typeof t) {
              var e = r.call(arguments, 1);
              return l(this, t, e);
            }
            return h(this, t), this;
          }),
          n(a));
    }
    function n(t) {
      !t || (t && t.bridget) || (t.bridget = i);
    }
    var r = Array.prototype.slice,
      o = t.console,
      s =
        "undefined" == typeof o
          ? function () {}
          : function (t) {
              o.error(t);
            };
    return n(e || t.jQuery), i;
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define("ev-emitter/ev-emitter", e)
      : "object" == typeof module && module.exports
      ? (module.exports = e())
      : (t.EvEmitter = e());
  })("undefined" != typeof window ? window : this, function () {
    function t() {}
    var e = t.prototype;
    return (
      (e.on = function (t, e) {
        if (t && e) {
          var i = (this._events = this._events || {}),
            n = (i[t] = i[t] || []);
          return n.indexOf(e) == -1 && n.push(e), this;
        }
      }),
      (e.once = function (t, e) {
        if (t && e) {
          this.on(t, e);
          var i = (this._onceEvents = this._onceEvents || {}),
            n = (i[t] = i[t] || {});
          return (n[e] = !0), this;
        }
      }),
      (e.off = function (t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
          var n = i.indexOf(e);
          return n != -1 && i.splice(n, 1), this;
        }
      }),
      (e.emitEvent = function (t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
          var n = 0,
            r = i[n];
          e = e || [];
          for (var o = this._onceEvents && this._onceEvents[t]; r; ) {
            var s = o && o[r];
            s && (this.off(t, r), delete o[r]),
              r.apply(this, e),
              (n += s ? 0 : 1),
              (r = i[n]);
          }
          return this;
        }
      }),
      t
    );
  }),
  (function (t, e) {
    "use strict";
    "function" == typeof define && define.amd
      ? define("get-size/get-size", [], function () {
          return e();
        })
      : "object" == typeof module && module.exports
      ? (module.exports = e())
      : (t.getSize = e());
  })(window, function () {
    "use strict";
    function t(t) {
      var e = parseFloat(t),
        i = t.indexOf("%") == -1 && !isNaN(e);
      return i && e;
    }
    function e() {}
    function i() {
      for (
        var t = {
            width: 0,
            height: 0,
            innerWidth: 0,
            innerHeight: 0,
            outerWidth: 0,
            outerHeight: 0,
          },
          e = 0;
        e < h;
        e++
      ) {
        var i = l[e];
        t[i] = 0;
      }
      return t;
    }
    function n(t) {
      var e = getComputedStyle(t);
      return (
        e ||
          a(
            "Style returned " +
              e +
              ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"
          ),
        e
      );
    }
    function r() {
      if (!u) {
        u = !0;
        var e = document.createElement("div");
        (e.style.width = "200px"),
          (e.style.padding = "1px 2px 3px 4px"),
          (e.style.borderStyle = "solid"),
          (e.style.borderWidth = "1px 2px 3px 4px"),
          (e.style.boxSizing = "border-box");
        var i = document.body || document.documentElement;
        i.appendChild(e);
        var r = n(e);
        (o.isBoxSizeOuter = s = 200 == t(r.width)), i.removeChild(e);
      }
    }
    function o(e) {
      if (
        (r(),
        "string" == typeof e && (e = document.querySelector(e)),
        e && "object" == typeof e && e.nodeType)
      ) {
        var o = n(e);
        if ("none" == o.display) return i();
        var a = {};
        (a.width = e.offsetWidth), (a.height = e.offsetHeight);
        for (
          var u = (a.isBorderBox = "border-box" == o.boxSizing), c = 0;
          c < h;
          c++
        ) {
          var f = l[c],
            d = o[f],
            p = parseFloat(d);
          a[f] = isNaN(p) ? 0 : p;
        }
        var m = a.paddingLeft + a.paddingRight,
          g = a.paddingTop + a.paddingBottom,
          v = a.marginLeft + a.marginRight,
          y = a.marginTop + a.marginBottom,
          _ = a.borderLeftWidth + a.borderRightWidth,
          b = a.borderTopWidth + a.borderBottomWidth,
          T = u && s,
          x = t(o.width);
        x !== !1 && (a.width = x + (T ? 0 : m + _));
        var w = t(o.height);
        return (
          w !== !1 && (a.height = w + (T ? 0 : g + b)),
          (a.innerWidth = a.width - (m + _)),
          (a.innerHeight = a.height - (g + b)),
          (a.outerWidth = a.width + v),
          (a.outerHeight = a.height + y),
          a
        );
      }
    }
    var s,
      a =
        "undefined" == typeof console
          ? e
          : function (t) {
              console.error(t);
            },
      l = [
        "paddingLeft",
        "paddingRight",
        "paddingTop",
        "paddingBottom",
        "marginLeft",
        "marginRight",
        "marginTop",
        "marginBottom",
        "borderLeftWidth",
        "borderRightWidth",
        "borderTopWidth",
        "borderBottomWidth",
      ],
      h = l.length,
      u = !1;
    return o;
  }),
  (function (t, e) {
    "use strict";
    "function" == typeof define && define.amd
      ? define("desandro-matches-selector/matches-selector", e)
      : "object" == typeof module && module.exports
      ? (module.exports = e())
      : (t.matchesSelector = e());
  })(window, function () {
    "use strict";
    var t = (function () {
      var t = Element.prototype;
      if (t.matches) return "matches";
      if (t.matchesSelector) return "matchesSelector";
      for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
        var n = e[i],
          r = n + "MatchesSelector";
        if (t[r]) return r;
      }
    })();
    return function (e, i) {
      return e[t](i);
    };
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(
          "fizzy-ui-utils/utils",
          ["desandro-matches-selector/matches-selector"],
          function (i) {
            return e(t, i);
          }
        )
      : "object" == typeof module && module.exports
      ? (module.exports = e(t, require("desandro-matches-selector")))
      : (t.fizzyUIUtils = e(t, t.matchesSelector));
  })(window, function (t, e) {
    var i = {};
    (i.extend = function (t, e) {
      for (var i in e) t[i] = e[i];
      return t;
    }),
      (i.modulo = function (t, e) {
        return ((t % e) + e) % e;
      }),
      (i.makeArray = function (t) {
        var e = [];
        if (Array.isArray(t)) e = t;
        else if (t && "number" == typeof t.length)
          for (var i = 0; i < t.length; i++) e.push(t[i]);
        else e.push(t);
        return e;
      }),
      (i.removeFrom = function (t, e) {
        var i = t.indexOf(e);
        i != -1 && t.splice(i, 1);
      }),
      (i.getParent = function (t, i) {
        for (; t != document.body; )
          if (((t = t.parentNode), e(t, i))) return t;
      }),
      (i.getQueryElement = function (t) {
        return "string" == typeof t ? document.querySelector(t) : t;
      }),
      (i.handleEvent = function (t) {
        var e = "on" + t.type;
        this[e] && this[e](t);
      }),
      (i.filterFindElements = function (t, n) {
        t = i.makeArray(t);
        var r = [];
        return (
          t.forEach(function (t) {
            if (t instanceof HTMLElement) {
              if (!n) return void r.push(t);
              e(t, n) && r.push(t);
              for (var i = t.querySelectorAll(n), o = 0; o < i.length; o++)
                r.push(i[o]);
            }
          }),
          r
        );
      }),
      (i.debounceMethod = function (t, e, i) {
        var n = t.prototype[e],
          r = e + "Timeout";
        t.prototype[e] = function () {
          var t = this[r];
          t && clearTimeout(t);
          var e = arguments,
            o = this;
          this[r] = setTimeout(function () {
            n.apply(o, e), delete o[r];
          }, i || 100);
        };
      }),
      (i.docReady = function (t) {
        var e = document.readyState;
        "complete" == e || "interactive" == e
          ? setTimeout(t)
          : document.addEventListener("DOMContentLoaded", t);
      }),
      (i.toDashed = function (t) {
        return t
          .replace(/(.)([A-Z])/g, function (t, e, i) {
            return e + "-" + i;
          })
          .toLowerCase();
      });
    var n = t.console;
    return (
      (i.htmlInit = function (e, r) {
        i.docReady(function () {
          var o = i.toDashed(r),
            s = "data-" + o,
            a = document.querySelectorAll("[" + s + "]"),
            l = document.querySelectorAll(".js-" + o),
            h = i.makeArray(a).concat(i.makeArray(l)),
            u = s + "-options",
            c = t.jQuery;
          h.forEach(function (t) {
            var i,
              o = t.getAttribute(s) || t.getAttribute(u);
            try {
              i = o && JSON.parse(o);
            } catch (e) {
              return void (
                n &&
                n.error("Error parsing " + s + " on " + t.className + ": " + e)
              );
            }
            var a = new e(t, i);
            c && c.data(t, r, a);
          });
        });
      }),
      i
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define("flickity/js/cell", ["get-size/get-size"], function (i) {
          return e(t, i);
        })
      : "object" == typeof module && module.exports
      ? (module.exports = e(t, require("get-size")))
      : ((t.Flickity = t.Flickity || {}), (t.Flickity.Cell = e(t, t.getSize)));
  })(window, function (t, e) {
    function i(t, e) {
      (this.element = t), (this.parent = e), this.create();
    }
    var n = i.prototype;
    return (
      (n.create = function () {
        (this.element.style.position = "absolute"),
          (this.x = 0),
          (this.shift = 0);
      }),
      (n.destroy = function () {
        this.element.style.position = "";
        var t = this.parent.originSide;
        this.element.style[t] = "";
      }),
      (n.getSize = function () {
        this.size = e(this.element);
      }),
      (n.setPosition = function (t) {
        (this.x = t), this.updateTarget(), this.renderPosition(t);
      }),
      (n.updateTarget = n.setDefaultTarget =
        function () {
          var t =
            "left" == this.parent.originSide ? "marginLeft" : "marginRight";
          this.target =
            this.x + this.size[t] + this.size.width * this.parent.cellAlign;
        }),
      (n.renderPosition = function (t) {
        var e = this.parent.originSide;
        this.element.style[e] = this.parent.getPositionValue(t);
      }),
      (n.wrapShift = function (t) {
        (this.shift = t),
          this.renderPosition(this.x + this.parent.slideableWidth * t);
      }),
      (n.remove = function () {
        this.element.parentNode.removeChild(this.element);
      }),
      i
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define("flickity/js/slide", e)
      : "object" == typeof module && module.exports
      ? (module.exports = e())
      : ((t.Flickity = t.Flickity || {}), (t.Flickity.Slide = e()));
  })(window, function () {
    "use strict";
    function t(t) {
      (this.parent = t),
        (this.isOriginLeft = "left" == t.originSide),
        (this.cells = []),
        (this.outerWidth = 0),
        (this.height = 0);
    }
    var e = t.prototype;
    return (
      (e.addCell = function (t) {
        if (
          (this.cells.push(t),
          (this.outerWidth += t.size.outerWidth),
          (this.height = Math.max(t.size.outerHeight, this.height)),
          1 == this.cells.length)
        ) {
          this.x = t.x;
          var e = this.isOriginLeft ? "marginLeft" : "marginRight";
          this.firstMargin = t.size[e];
        }
      }),
      (e.updateTarget = function () {
        var t = this.isOriginLeft ? "marginRight" : "marginLeft",
          e = this.getLastCell(),
          i = e ? e.size[t] : 0,
          n = this.outerWidth - (this.firstMargin + i);
        this.target = this.x + this.firstMargin + n * this.parent.cellAlign;
      }),
      (e.getLastCell = function () {
        return this.cells[this.cells.length - 1];
      }),
      (e.select = function () {
        this.changeSelectedClass("add");
      }),
      (e.unselect = function () {
        this.changeSelectedClass("remove");
      }),
      (e.changeSelectedClass = function (t) {
        this.cells.forEach(function (e) {
          e.element.classList[t]("is-selected");
        });
      }),
      (e.getCellElements = function () {
        return this.cells.map(function (t) {
          return t.element;
        });
      }),
      t
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define("flickity/js/animate", ["fizzy-ui-utils/utils"], function (i) {
          return e(t, i);
        })
      : "object" == typeof module && module.exports
      ? (module.exports = e(t, require("fizzy-ui-utils")))
      : ((t.Flickity = t.Flickity || {}),
        (t.Flickity.animatePrototype = e(t, t.fizzyUIUtils)));
  })(window, function (t, e) {
    var i = t.requestAnimationFrame || t.webkitRequestAnimationFrame,
      n = 0;
    i ||
      (i = function (t) {
        var e = new Date().getTime(),
          i = Math.max(0, 16 - (e - n)),
          r = setTimeout(t, i);
        return (n = e + i), r;
      });
    var r = {};
    (r.startAnimation = function () {
      this.isAnimating ||
        ((this.isAnimating = !0), (this.restingFrames = 0), this.animate());
    }),
      (r.animate = function () {
        this.applyDragForce(), this.applySelectedAttraction();
        var t = this.x;
        if (
          (this.integratePhysics(),
          this.positionSlider(),
          this.settle(t),
          this.isAnimating)
        ) {
          var e = this;
          i(function () {
            e.animate();
          });
        }
      });
    var o = (function () {
      var t = document.documentElement.style;
      return "string" == typeof t.transform ? "transform" : "WebkitTransform";
    })();
    return (
      (r.positionSlider = function () {
        var t = this.x;
        this.options.wrapAround &&
          this.cells.length > 1 &&
          ((t = e.modulo(t, this.slideableWidth)),
          (t -= this.slideableWidth),
          this.shiftWrapCells(t)),
          (t += this.cursorPosition),
          (t = this.options.rightToLeft && o ? -t : t);
        var i = this.getPositionValue(t);
        this.slider.style[o] = this.isAnimating
          ? "translate3d(" + i + ",0,0)"
          : "translateX(" + i + ")";
        var n = this.slides[0];
        if (n) {
          var r = -this.x - n.target,
            s = r / this.slidesWidth;
          this.dispatchEvent("scroll", null, [s, r]);
        }
      }),
      (r.positionSliderAtSelected = function () {
        this.cells.length &&
          ((this.x = -this.selectedSlide.target), this.positionSlider());
      }),
      (r.getPositionValue = function (t) {
        return this.options.percentPosition
          ? 0.01 * Math.round((t / this.size.innerWidth) * 1e4) + "%"
          : Math.round(t) + "px";
      }),
      (r.settle = function (t) {
        this.isPointerDown ||
          Math.round(100 * this.x) != Math.round(100 * t) ||
          this.restingFrames++,
          this.restingFrames > 2 &&
            ((this.isAnimating = !1),
            delete this.isFreeScrolling,
            this.positionSlider(),
            this.dispatchEvent("settle"));
      }),
      (r.shiftWrapCells = function (t) {
        var e = this.cursorPosition + t;
        this._shiftCells(this.beforeShiftCells, e, -1);
        var i =
          this.size.innerWidth -
          (t + this.slideableWidth + this.cursorPosition);
        this._shiftCells(this.afterShiftCells, i, 1);
      }),
      (r._shiftCells = function (t, e, i) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n],
            o = e > 0 ? i : 0;
          r.wrapShift(o), (e -= r.size.outerWidth);
        }
      }),
      (r._unshiftCells = function (t) {
        if (t && t.length) for (var e = 0; e < t.length; e++) t[e].wrapShift(0);
      }),
      (r.integratePhysics = function () {
        (this.x += this.velocity), (this.velocity *= this.getFrictionFactor());
      }),
      (r.applyForce = function (t) {
        this.velocity += t;
      }),
      (r.getFrictionFactor = function () {
        return (
          1 -
          this.options[this.isFreeScrolling ? "freeScrollFriction" : "friction"]
        );
      }),
      (r.getRestingPosition = function () {
        return this.x + this.velocity / (1 - this.getFrictionFactor());
      }),
      (r.applyDragForce = function () {
        if (this.isPointerDown) {
          var t = this.dragX - this.x,
            e = t - this.velocity;
          this.applyForce(e);
        }
      }),
      (r.applySelectedAttraction = function () {
        if (!this.isPointerDown && !this.isFreeScrolling && this.cells.length) {
          var t = this.selectedSlide.target * -1 - this.x,
            e = t * this.options.selectedAttraction;
          this.applyForce(e);
        }
      }),
      r
    );
  }),
  (function (t, e) {
    if ("function" == typeof define && define.amd)
      define("flickity/js/flickity", [
        "ev-emitter/ev-emitter",
        "get-size/get-size",
        "fizzy-ui-utils/utils",
        "./cell",
        "./slide",
        "./animate",
      ], function (i, n, r, o, s, a) {
        return e(t, i, n, r, o, s, a);
      });
    else if ("object" == typeof module && module.exports)
      module.exports = e(
        t,
        require("ev-emitter"),
        require("get-size"),
        require("fizzy-ui-utils"),
        require("./cell"),
        require("./slide"),
        require("./animate")
      );
    else {
      var i = t.Flickity;
      t.Flickity = e(
        t,
        t.EvEmitter,
        t.getSize,
        t.fizzyUIUtils,
        i.Cell,
        i.Slide,
        i.animatePrototype
      );
    }
  })(window, function (t, e, i, n, r, o, s) {
    function a(t, e) {
      for (t = n.makeArray(t); t.length; ) e.appendChild(t.shift());
    }
    function l(t, e) {
      var i = n.getQueryElement(t);
      if (!i)
        return void (c && c.error("Bad element for Flickity: " + (i || t)));
      if (((this.element = i), this.element.flickityGUID)) {
        var r = d[this.element.flickityGUID];
        return r.option(e), r;
      }
      h && (this.$element = h(this.element)),
        (this.options = n.extend({}, this.constructor.defaults)),
        this.option(e),
        this._create();
    }
    var h = t.jQuery,
      u = t.getComputedStyle,
      c = t.console,
      f = 0,
      d = {};
    (l.defaults = {
      accessibility: !0,
      cellAlign: "center",
      freeScrollFriction: 0.075,
      friction: 0.28,
      namespaceJQueryEvents: !0,
      percentPosition: !0,
      resize: !0,
      selectedAttraction: 0.025,
      setGallerySize: !0,
    }),
      (l.createMethods = []);
    var p = l.prototype;
    n.extend(p, e.prototype),
      (p._create = function () {
        var e = (this.guid = ++f);
        (this.element.flickityGUID = e),
          (d[e] = this),
          (this.selectedIndex = 0),
          (this.restingFrames = 0),
          (this.x = 0),
          (this.velocity = 0),
          (this.originSide = this.options.rightToLeft ? "right" : "left"),
          (this.viewport = document.createElement("div")),
          (this.viewport.className = "flickity-viewport"),
          this._createSlider(),
          (this.options.resize || this.options.watchCSS) &&
            t.addEventListener("resize", this),
          l.createMethods.forEach(function (t) {
            this[t]();
          }, this),
          this.options.watchCSS ? this.watchCSS() : this.activate();
      }),
      (p.option = function (t) {
        n.extend(this.options, t);
      }),
      (p.activate = function () {
        if (!this.isActive) {
          (this.isActive = !0),
            this.element.classList.add("flickity-enabled"),
            this.options.rightToLeft &&
              this.element.classList.add("flickity-rtl"),
            this.getSize();
          var t = this._filterFindCellElements(this.element.children);
          a(t, this.slider),
            this.viewport.appendChild(this.slider),
            this.element.appendChild(this.viewport),
            this.reloadCells(),
            this.options.accessibility &&
              ((this.element.tabIndex = 0),
              this.element.addEventListener("keydown", this)),
            this.emitEvent("activate");
          var e,
            i = this.options.initialIndex;
          (e = this.isInitActivated
            ? this.selectedIndex
            : void 0 !== i && this.cells[i]
            ? i
            : 0),
            this.select(e, !1, !0),
            (this.isInitActivated = !0);
        }
      }),
      (p._createSlider = function () {
        var t = document.createElement("div");
        (t.className = "flickity-slider"),
          (t.style[this.originSide] = 0),
          (this.slider = t);
      }),
      (p._filterFindCellElements = function (t) {
        return n.filterFindElements(t, this.options.cellSelector);
      }),
      (p.reloadCells = function () {
        (this.cells = this._makeCells(this.slider.children)),
          this.positionCells(),
          this._getWrapShiftCells(),
          this.setGallerySize();
      }),
      (p._makeCells = function (t) {
        var e = this._filterFindCellElements(t),
          i = e.map(function (t) {
            return new r(t, this);
          }, this);
        return i;
      }),
      (p.getLastCell = function () {
        return this.cells[this.cells.length - 1];
      }),
      (p.getLastSlide = function () {
        return this.slides[this.slides.length - 1];
      }),
      (p.positionCells = function () {
        this._sizeCells(this.cells), this._positionCells(0);
      }),
      (p._positionCells = function (t) {
        (t = t || 0), (this.maxCellHeight = t ? this.maxCellHeight || 0 : 0);
        var e = 0;
        if (t > 0) {
          var i = this.cells[t - 1];
          e = i.x + i.size.outerWidth;
        }
        for (var n = this.cells.length, r = t; r < n; r++) {
          var o = this.cells[r];
          o.setPosition(e),
            (e += o.size.outerWidth),
            (this.maxCellHeight = Math.max(
              o.size.outerHeight,
              this.maxCellHeight
            ));
        }
        (this.slideableWidth = e),
          this.updateSlides(),
          this._containSlides(),
          (this.slidesWidth = n
            ? this.getLastSlide().target - this.slides[0].target
            : 0);
      }),
      (p._sizeCells = function (t) {
        t.forEach(function (t) {
          t.getSize();
        });
      }),
      (p.updateSlides = function () {
        if (((this.slides = []), this.cells.length)) {
          var t = new o(this);
          this.slides.push(t);
          var e = "left" == this.originSide,
            i = e ? "marginRight" : "marginLeft",
            n = this._getCanCellFit();
          this.cells.forEach(function (e, r) {
            if (!t.cells.length) return void t.addCell(e);
            var s =
              t.outerWidth - t.firstMargin + (e.size.outerWidth - e.size[i]);
            n.call(this, r, s)
              ? t.addCell(e)
              : (t.updateTarget(),
                (t = new o(this)),
                this.slides.push(t),
                t.addCell(e));
          }, this),
            t.updateTarget(),
            this.updateSelectedSlide();
        }
      }),
      (p._getCanCellFit = function () {
        var t = this.options.groupCells;
        if (!t)
          return function () {
            return !1;
          };
        if ("number" == typeof t) {
          var e = parseInt(t, 10);
          return function (t) {
            return t % e !== 0;
          };
        }
        var i = "string" == typeof t && t.match(/^(\d+)%$/),
          n = i ? parseInt(i[1], 10) / 100 : 1;
        return function (t, e) {
          return e <= (this.size.innerWidth + 1) * n;
        };
      }),
      (p._init = p.reposition =
        function () {
          this.positionCells(), this.positionSliderAtSelected();
        }),
      (p.getSize = function () {
        (this.size = i(this.element)),
          this.setCellAlign(),
          (this.cursorPosition = this.size.innerWidth * this.cellAlign);
      });
    var m = {
      center: {
        left: 0.5,
        right: 0.5,
      },
      left: {
        left: 0,
        right: 1,
      },
      right: {
        right: 0,
        left: 1,
      },
    };
    return (
      (p.setCellAlign = function () {
        var t = m[this.options.cellAlign];
        this.cellAlign = t ? t[this.originSide] : this.options.cellAlign;
      }),
      (p.setGallerySize = function () {
        if (this.options.setGallerySize) {
          var t =
            this.options.adaptiveHeight && this.selectedSlide
              ? this.selectedSlide.height
              : this.maxCellHeight;
          this.viewport.style.height = t + "px";
        }
      }),
      (p._getWrapShiftCells = function () {
        if (this.options.wrapAround) {
          this._unshiftCells(this.beforeShiftCells),
            this._unshiftCells(this.afterShiftCells);
          var t = this.cursorPosition,
            e = this.cells.length - 1;
          (this.beforeShiftCells = this._getGapCells(t, e, -1)),
            (t = this.size.innerWidth - this.cursorPosition),
            (this.afterShiftCells = this._getGapCells(t, 0, 1));
        }
      }),
      (p._getGapCells = function (t, e, i) {
        for (var n = []; t > 0; ) {
          var r = this.cells[e];
          if (!r) break;
          n.push(r), (e += i), (t -= r.size.outerWidth);
        }
        return n;
      }),
      (p._containSlides = function () {
        if (
          this.options.contain &&
          !this.options.wrapAround &&
          this.cells.length
        ) {
          var t = this.options.rightToLeft,
            e = t ? "marginRight" : "marginLeft",
            i = t ? "marginLeft" : "marginRight",
            n = this.slideableWidth - this.getLastCell().size[i],
            r = n < this.size.innerWidth,
            o = this.cursorPosition + this.cells[0].size[e],
            s = n - this.size.innerWidth * (1 - this.cellAlign);
          this.slides.forEach(function (t) {
            r
              ? (t.target = n * this.cellAlign)
              : ((t.target = Math.max(t.target, o)),
                (t.target = Math.min(t.target, s)));
          }, this);
        }
      }),
      (p.dispatchEvent = function (t, e, i) {
        var n = e ? [e].concat(i) : i;
        if ((this.emitEvent(t, n), h && this.$element)) {
          t += this.options.namespaceJQueryEvents ? ".flickity" : "";
          var r = t;
          if (e) {
            var o = h.Event(e);
            (o.type = t), (r = o);
          }
          this.$element.trigger(r, i);
        }
      }),
      (p.select = function (t, e, i) {
        this.isActive &&
          ((t = parseInt(t, 10)),
          this._wrapSelect(t),
          (this.options.wrapAround || e) &&
            (t = n.modulo(t, this.slides.length)),
          this.slides[t] &&
            ((this.selectedIndex = t),
            this.updateSelectedSlide(),
            i ? this.positionSliderAtSelected() : this.startAnimation(),
            this.options.adaptiveHeight && this.setGallerySize(),
            this.dispatchEvent("select"),
            this.dispatchEvent("cellSelect")));
      }),
      (p._wrapSelect = function (t) {
        var e = this.slides.length,
          i = this.options.wrapAround && e > 1;
        if (!i) return t;
        var r = n.modulo(t, e),
          o = Math.abs(r - this.selectedIndex),
          s = Math.abs(r + e - this.selectedIndex),
          a = Math.abs(r - e - this.selectedIndex);
        !this.isDragSelect && s < o
          ? (t += e)
          : !this.isDragSelect && a < o && (t -= e),
          t < 0
            ? (this.x -= this.slideableWidth)
            : t >= e && (this.x += this.slideableWidth);
      }),
      (p.previous = function (t, e) {
        this.select(this.selectedIndex - 1, t, e);
      }),
      (p.next = function (t, e) {
        this.select(this.selectedIndex + 1, t, e);
      }),
      (p.updateSelectedSlide = function () {
        var t = this.slides[this.selectedIndex];
        t &&
          (this.unselectSelectedSlide(),
          (this.selectedSlide = t),
          t.select(),
          (this.selectedCells = t.cells),
          (this.selectedElements = t.getCellElements()),
          (this.selectedCell = t.cells[0]),
          (this.selectedElement = this.selectedElements[0]));
      }),
      (p.unselectSelectedSlide = function () {
        this.selectedSlide && this.selectedSlide.unselect();
      }),
      (p.selectCell = function (t, e, i) {
        var n;
        "number" == typeof t
          ? (n = this.cells[t])
          : ("string" == typeof t && (t = this.element.querySelector(t)),
            (n = this.getCell(t)));
        for (var r = 0; n && r < this.slides.length; r++) {
          var o = this.slides[r],
            s = o.cells.indexOf(n);
          if (s != -1) return void this.select(r, e, i);
        }
      }),
      (p.getCell = function (t) {
        for (var e = 0; e < this.cells.length; e++) {
          var i = this.cells[e];
          if (i.element == t) return i;
        }
      }),
      (p.getCells = function (t) {
        t = n.makeArray(t);
        var e = [];
        return (
          t.forEach(function (t) {
            var i = this.getCell(t);
            i && e.push(i);
          }, this),
          e
        );
      }),
      (p.getCellElements = function () {
        return this.cells.map(function (t) {
          return t.element;
        });
      }),
      (p.getParentCell = function (t) {
        var e = this.getCell(t);
        return e
          ? e
          : ((t = n.getParent(t, ".flickity-slider > *")), this.getCell(t));
      }),
      (p.getAdjacentCellElements = function (t, e) {
        if (!t) return this.selectedSlide.getCellElements();
        e = void 0 === e ? this.selectedIndex : e;
        var i = this.slides.length;
        if (1 + 2 * t >= i) return this.getCellElements();
        for (var r = [], o = e - t; o <= e + t; o++) {
          var s = this.options.wrapAround ? n.modulo(o, i) : o,
            a = this.slides[s];
          a && (r = r.concat(a.getCellElements()));
        }
        return r;
      }),
      (p.uiChange = function () {
        this.emitEvent("uiChange");
      }),
      (p.childUIPointerDown = function (t) {
        this.emitEvent("childUIPointerDown", [t]);
      }),
      (p.onresize = function () {
        this.watchCSS(), this.resize();
      }),
      n.debounceMethod(l, "onresize", 150),
      (p.resize = function () {
        if (this.isActive) {
          this.getSize(),
            this.options.wrapAround &&
              (this.x = n.modulo(this.x, this.slideableWidth)),
            this.positionCells(),
            this._getWrapShiftCells(),
            this.setGallerySize(),
            this.emitEvent("resize");
          var t = this.selectedElements && this.selectedElements[0];
          this.selectCell(t, !1, !0);
        }
      }),
      (p.watchCSS = function () {
        var t = this.options.watchCSS;
        if (t) {
          var e = u(this.element, ":after").content;
          e.indexOf("flickity") != -1 ? this.activate() : this.deactivate();
        }
      }),
      (p.onkeydown = function (t) {
        if (
          this.options.accessibility &&
          (!document.activeElement || document.activeElement == this.element)
        )
          if (37 == t.keyCode) {
            var e = this.options.rightToLeft ? "next" : "previous";
            this.uiChange(), this[e]();
          } else if (39 == t.keyCode) {
            var i = this.options.rightToLeft ? "previous" : "next";
            this.uiChange(), this[i]();
          }
      }),
      (p.deactivate = function () {
        this.isActive &&
          (this.element.classList.remove("flickity-enabled"),
          this.element.classList.remove("flickity-rtl"),
          this.cells.forEach(function (t) {
            t.destroy();
          }),
          this.unselectSelectedSlide(),
          this.element.removeChild(this.viewport),
          a(this.slider.children, this.element),
          this.options.accessibility &&
            (this.element.removeAttribute("tabIndex"),
            this.element.removeEventListener("keydown", this)),
          (this.isActive = !1),
          this.emitEvent("deactivate"));
      }),
      (p.destroy = function () {
        this.deactivate(),
          t.removeEventListener("resize", this),
          this.emitEvent("destroy"),
          h && this.$element && h.removeData(this.element, "flickity"),
          delete this.element.flickityGUID,
          delete d[this.guid];
      }),
      n.extend(p, s),
      (l.data = function (t) {
        t = n.getQueryElement(t);
        var e = t && t.flickityGUID;
        return e && d[e];
      }),
      n.htmlInit(l, "flickity"),
      h && h.bridget && h.bridget("flickity", l),
      (l.Cell = r),
      l
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(
          "unipointer/unipointer",
          ["ev-emitter/ev-emitter"],
          function (i) {
            return e(t, i);
          }
        )
      : "object" == typeof module && module.exports
      ? (module.exports = e(t, require("ev-emitter")))
      : (t.Unipointer = e(t, t.EvEmitter));
  })(window, function (t, e) {
    function i() {}
    function n() {}
    var r = (n.prototype = Object.create(e.prototype));
    (r.bindStartEvent = function (t) {
      this._bindStartEvent(t, !0);
    }),
      (r.unbindStartEvent = function (t) {
        this._bindStartEvent(t, !1);
      }),
      (r._bindStartEvent = function (e, i) {
        i = void 0 === i || !!i;
        var n = i ? "addEventListener" : "removeEventListener";
        t.navigator.pointerEnabled
          ? e[n]("pointerdown", this)
          : t.navigator.msPointerEnabled
          ? e[n]("MSPointerDown", this)
          : (e[n]("mousedown", this), e[n]("touchstart", this));
      }),
      (r.handleEvent = function (t) {
        var e = "on" + t.type;
        this[e] && this[e](t);
      }),
      (r.getTouch = function (t) {
        for (var e = 0; e < t.length; e++) {
          var i = t[e];
          if (i.identifier == this.pointerIdentifier) return i;
        }
      }),
      (r.onmousedown = function (t) {
        var e = t.button;
        (e && 0 !== e && 1 !== e) || this._pointerDown(t, t);
      }),
      (r.ontouchstart = function (t) {
        this._pointerDown(t, t.changedTouches[0]);
      }),
      (r.onMSPointerDown = r.onpointerdown =
        function (t) {
          this._pointerDown(t, t);
        }),
      (r._pointerDown = function (t, e) {
        this.isPointerDown ||
          ((this.isPointerDown = !0),
          (this.pointerIdentifier =
            void 0 !== e.pointerId ? e.pointerId : e.identifier),
          this.pointerDown(t, e));
      }),
      (r.pointerDown = function (t, e) {
        this._bindPostStartEvents(t), this.emitEvent("pointerDown", [t, e]);
      });
    var o = {
      mousedown: ["mousemove", "mouseup"],
      touchstart: ["touchmove", "touchend", "touchcancel"],
      pointerdown: ["pointermove", "pointerup", "pointercancel"],
      MSPointerDown: ["MSPointerMove", "MSPointerUp", "MSPointerCancel"],
    };
    return (
      (r._bindPostStartEvents = function (e) {
        if (e) {
          var i = o[e.type];
          i.forEach(function (e) {
            t.addEventListener(e, this);
          }, this),
            (this._boundPointerEvents = i);
        }
      }),
      (r._unbindPostStartEvents = function () {
        this._boundPointerEvents &&
          (this._boundPointerEvents.forEach(function (e) {
            t.removeEventListener(e, this);
          }, this),
          delete this._boundPointerEvents);
      }),
      (r.onmousemove = function (t) {
        this._pointerMove(t, t);
      }),
      (r.onMSPointerMove = r.onpointermove =
        function (t) {
          t.pointerId == this.pointerIdentifier && this._pointerMove(t, t);
        }),
      (r.ontouchmove = function (t) {
        var e = this.getTouch(t.changedTouches);
        e && this._pointerMove(t, e);
      }),
      (r._pointerMove = function (t, e) {
        this.pointerMove(t, e);
      }),
      (r.pointerMove = function (t, e) {
        this.emitEvent("pointerMove", [t, e]);
      }),
      (r.onmouseup = function (t) {
        this._pointerUp(t, t);
      }),
      (r.onMSPointerUp = r.onpointerup =
        function (t) {
          t.pointerId == this.pointerIdentifier && this._pointerUp(t, t);
        }),
      (r.ontouchend = function (t) {
        var e = this.getTouch(t.changedTouches);
        e && this._pointerUp(t, e);
      }),
      (r._pointerUp = function (t, e) {
        this._pointerDone(), this.pointerUp(t, e);
      }),
      (r.pointerUp = function (t, e) {
        this.emitEvent("pointerUp", [t, e]);
      }),
      (r._pointerDone = function () {
        (this.isPointerDown = !1),
          delete this.pointerIdentifier,
          this._unbindPostStartEvents(),
          this.pointerDone();
      }),
      (r.pointerDone = i),
      (r.onMSPointerCancel = r.onpointercancel =
        function (t) {
          t.pointerId == this.pointerIdentifier && this._pointerCancel(t, t);
        }),
      (r.ontouchcancel = function (t) {
        var e = this.getTouch(t.changedTouches);
        e && this._pointerCancel(t, e);
      }),
      (r._pointerCancel = function (t, e) {
        this._pointerDone(), this.pointerCancel(t, e);
      }),
      (r.pointerCancel = function (t, e) {
        this.emitEvent("pointerCancel", [t, e]);
      }),
      (n.getPointerPoint = function (t) {
        return {
          x: t.pageX,
          y: t.pageY,
        };
      }),
      n
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(
          "unidragger/unidragger",
          ["unipointer/unipointer"],
          function (i) {
            return e(t, i);
          }
        )
      : "object" == typeof module && module.exports
      ? (module.exports = e(t, require("unipointer")))
      : (t.Unidragger = e(t, t.Unipointer));
  })(window, function (t, e) {
    function i() {}
    function n() {}
    var r = (n.prototype = Object.create(e.prototype));
    (r.bindHandles = function () {
      this._bindHandles(!0);
    }),
      (r.unbindHandles = function () {
        this._bindHandles(!1);
      });
    var o = t.navigator;
    return (
      (r._bindHandles = function (t) {
        t = void 0 === t || !!t;
        var e;
        e = o.pointerEnabled
          ? function (e) {
              e.style.touchAction = t ? "none" : "";
            }
          : o.msPointerEnabled
          ? function (e) {
              e.style.msTouchAction = t ? "none" : "";
            }
          : i;
        for (
          var n = t ? "addEventListener" : "removeEventListener", r = 0;
          r < this.handles.length;
          r++
        ) {
          var s = this.handles[r];
          this._bindStartEvent(s, t), e(s), s[n]("click", this);
        }
      }),
      (r.pointerDown = function (t, e) {
        if ("INPUT" == t.target.nodeName && "range" == t.target.type)
          return (this.isPointerDown = !1), void delete this.pointerIdentifier;
        this._dragPointerDown(t, e);
        var i = document.activeElement;
        i && i.blur && i.blur(),
          this._bindPostStartEvents(t),
          this.emitEvent("pointerDown", [t, e]);
      }),
      (r._dragPointerDown = function (t, i) {
        this.pointerDownPoint = e.getPointerPoint(i);
        var n = this.canPreventDefaultOnPointerDown(t, i);
        n && t.preventDefault();
      }),
      (r.canPreventDefaultOnPointerDown = function (t) {
        return "SELECT" != t.target.nodeName;
      }),
      (r.pointerMove = function (t, e) {
        var i = this._dragPointerMove(t, e);
        this.emitEvent("pointerMove", [t, e, i]), this._dragMove(t, e, i);
      }),
      (r._dragPointerMove = function (t, i) {
        var n = e.getPointerPoint(i),
          r = {
            x: n.x - this.pointerDownPoint.x,
            y: n.y - this.pointerDownPoint.y,
          };
        return (
          !this.isDragging && this.hasDragStarted(r) && this._dragStart(t, i), r
        );
      }),
      (r.hasDragStarted = function (t) {
        return Math.abs(t.x) > 3 || Math.abs(t.y) > 3;
      }),
      (r.pointerUp = function (t, e) {
        this.emitEvent("pointerUp", [t, e]), this._dragPointerUp(t, e);
      }),
      (r._dragPointerUp = function (t, e) {
        this.isDragging ? this._dragEnd(t, e) : this._staticClick(t, e);
      }),
      (r._dragStart = function (t, i) {
        (this.isDragging = !0),
          (this.dragStartPoint = e.getPointerPoint(i)),
          (this.isPreventingClicks = !0),
          this.dragStart(t, i);
      }),
      (r.dragStart = function (t, e) {
        this.emitEvent("dragStart", [t, e]);
      }),
      (r._dragMove = function (t, e, i) {
        this.isDragging && this.dragMove(t, e, i);
      }),
      (r.dragMove = function (t, e, i) {
        t.preventDefault(), this.emitEvent("dragMove", [t, e, i]);
      }),
      (r._dragEnd = function (t, e) {
        (this.isDragging = !1),
          setTimeout(
            function () {
              delete this.isPreventingClicks;
            }.bind(this)
          ),
          this.dragEnd(t, e);
      }),
      (r.dragEnd = function (t, e) {
        this.emitEvent("dragEnd", [t, e]);
      }),
      (r.onclick = function (t) {
        this.isPreventingClicks && t.preventDefault();
      }),
      (r._staticClick = function (t, e) {
        if (!this.isIgnoringMouseUp || "mouseup" != t.type) {
          var i = t.target.nodeName;
          ("INPUT" != i && "TEXTAREA" != i) || t.target.focus(),
            this.staticClick(t, e),
            "mouseup" != t.type &&
              ((this.isIgnoringMouseUp = !0),
              setTimeout(
                function () {
                  delete this.isIgnoringMouseUp;
                }.bind(this),
                400
              ));
        }
      }),
      (r.staticClick = function (t, e) {
        this.emitEvent("staticClick", [t, e]);
      }),
      (n.getPointerPoint = e.getPointerPoint),
      n
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(
          "flickity/js/drag",
          ["./flickity", "unidragger/unidragger", "fizzy-ui-utils/utils"],
          function (i, n, r) {
            return e(t, i, n, r);
          }
        )
      : "object" == typeof module && module.exports
      ? (module.exports = e(
          t,
          require("./flickity"),
          require("unidragger"),
          require("fizzy-ui-utils")
        ))
      : (t.Flickity = e(t, t.Flickity, t.Unidragger, t.fizzyUIUtils));
  })(window, function (t, e, i, n) {
    function r() {
      return {
        x: t.pageXOffset,
        y: t.pageYOffset,
      };
    }
    n.extend(e.defaults, {
      draggable: !0,
      dragThreshold: 3,
    }),
      e.createMethods.push("_createDrag");
    var o = e.prototype;
    n.extend(o, i.prototype);
    var s = "createTouch" in document,
      a = !1;
    (o._createDrag = function () {
      this.on("activate", this.bindDrag),
        this.on("uiChange", this._uiChangeDrag),
        this.on("childUIPointerDown", this._childUIPointerDownDrag),
        this.on("deactivate", this.unbindDrag),
        s && !a && (t.addEventListener("touchmove", function () {}), (a = !0));
    }),
      (o.bindDrag = function () {
        this.options.draggable &&
          !this.isDragBound &&
          (this.element.classList.add("is-draggable"),
          (this.handles = [this.viewport]),
          this.bindHandles(),
          (this.isDragBound = !0));
      }),
      (o.unbindDrag = function () {
        this.isDragBound &&
          (this.element.classList.remove("is-draggable"),
          this.unbindHandles(),
          delete this.isDragBound);
      }),
      (o._uiChangeDrag = function () {
        delete this.isFreeScrolling;
      }),
      (o._childUIPointerDownDrag = function (t) {
        t.preventDefault(), this.pointerDownFocus(t);
      });
    var l = {
        TEXTAREA: !0,
        INPUT: !0,
        OPTION: !0,
      },
      h = {
        radio: !0,
        checkbox: !0,
        button: !0,
        submit: !0,
        image: !0,
        file: !0,
      };
    o.pointerDown = function (e, i) {
      var n = l[e.target.nodeName] && !h[e.target.type];
      if (n)
        return (this.isPointerDown = !1), void delete this.pointerIdentifier;
      this._dragPointerDown(e, i);
      var o = document.activeElement;
      o && o.blur && o != this.element && o != document.body && o.blur(),
        this.pointerDownFocus(e),
        (this.dragX = this.x),
        this.viewport.classList.add("is-pointer-down"),
        this._bindPostStartEvents(e),
        (this.pointerDownScroll = r()),
        t.addEventListener("scroll", this),
        this.dispatchEvent("pointerDown", e, [i]);
    };
    var u = {
        touchstart: !0,
        MSPointerDown: !0,
      },
      c = {
        INPUT: !0,
        SELECT: !0,
      };
    return (
      (o.pointerDownFocus = function (e) {
        if (this.options.accessibility && !u[e.type] && !c[e.target.nodeName]) {
          var i = t.pageYOffset;
          this.element.focus(),
            t.pageYOffset != i && t.scrollTo(t.pageXOffset, i);
        }
      }),
      (o.canPreventDefaultOnPointerDown = function (t) {
        var e = "touchstart" == t.type,
          i = t.target.nodeName;
        return !e && "SELECT" != i;
      }),
      (o.hasDragStarted = function (t) {
        return Math.abs(t.x) > this.options.dragThreshold;
      }),
      (o.pointerUp = function (t, e) {
        delete this.isTouchScrolling,
          this.viewport.classList.remove("is-pointer-down"),
          this.dispatchEvent("pointerUp", t, [e]),
          this._dragPointerUp(t, e);
      }),
      (o.pointerDone = function () {
        t.removeEventListener("scroll", this), delete this.pointerDownScroll;
      }),
      (o.dragStart = function (e, i) {
        (this.dragStartPosition = this.x),
          this.startAnimation(),
          t.removeEventListener("scroll", this),
          this.dispatchEvent("dragStart", e, [i]);
      }),
      (o.pointerMove = function (t, e) {
        var i = this._dragPointerMove(t, e);
        this.dispatchEvent("pointerMove", t, [e, i]), this._dragMove(t, e, i);
      }),
      (o.dragMove = function (t, e, i) {
        t.preventDefault(), (this.previousDragX = this.dragX);
        var n = this.options.rightToLeft ? -1 : 1,
          r = this.dragStartPosition + i.x * n;
        if (!this.options.wrapAround && this.slides.length) {
          var o = Math.max(-this.slides[0].target, this.dragStartPosition);
          r = r > o ? 0.5 * (r + o) : r;
          var s = Math.min(-this.getLastSlide().target, this.dragStartPosition);
          r = r < s ? 0.5 * (r + s) : r;
        }
        (this.dragX = r),
          (this.dragMoveTime = new Date()),
          this.dispatchEvent("dragMove", t, [e, i]);
      }),
      (o.dragEnd = function (t, e) {
        this.options.freeScroll && (this.isFreeScrolling = !0);
        var i = this.dragEndRestingSelect();
        if (this.options.freeScroll && !this.options.wrapAround) {
          var n = this.getRestingPosition();
          this.isFreeScrolling =
            -n > this.slides[0].target && -n < this.getLastSlide().target;
        } else
          this.options.freeScroll ||
            i != this.selectedIndex ||
            (i += this.dragEndBoostSelect());
        delete this.previousDragX,
          (this.isDragSelect = this.options.wrapAround),
          this.select(i),
          delete this.isDragSelect,
          this.dispatchEvent("dragEnd", t, [e]);
      }),
      (o.dragEndRestingSelect = function () {
        var t = this.getRestingPosition(),
          e = Math.abs(this.getSlideDistance(-t, this.selectedIndex)),
          i = this._getClosestResting(t, e, 1),
          n = this._getClosestResting(t, e, -1),
          r = i.distance < n.distance ? i.index : n.index;
        return r;
      }),
      (o._getClosestResting = function (t, e, i) {
        for (
          var n = this.selectedIndex,
            r = 1 / 0,
            o =
              this.options.contain && !this.options.wrapAround
                ? function (t, e) {
                    return t <= e;
                  }
                : function (t, e) {
                    return t < e;
                  };
          o(e, r) &&
          ((n += i), (r = e), (e = this.getSlideDistance(-t, n)), null !== e);

        )
          e = Math.abs(e);
        return {
          distance: r,
          index: n - i,
        };
      }),
      (o.getSlideDistance = function (t, e) {
        var i = this.slides.length,
          r = this.options.wrapAround && i > 1,
          o = r ? n.modulo(e, i) : e,
          s = this.slides[o];
        if (!s) return null;
        var a = r ? this.slideableWidth * Math.floor(e / i) : 0;
        return t - (s.target + a);
      }),
      (o.dragEndBoostSelect = function () {
        if (
          void 0 === this.previousDragX ||
          !this.dragMoveTime ||
          new Date() - this.dragMoveTime > 100
        )
          return 0;
        var t = this.getSlideDistance(-this.dragX, this.selectedIndex),
          e = this.previousDragX - this.dragX;
        return t > 0 && e > 0 ? 1 : t < 0 && e < 0 ? -1 : 0;
      }),
      (o.staticClick = function (t, e) {
        var i = this.getParentCell(t.target),
          n = i && i.element,
          r = i && this.cells.indexOf(i);
        this.dispatchEvent("staticClick", t, [e, n, r]);
      }),
      (o.onscroll = function () {
        var t = r(),
          e = this.pointerDownScroll.x - t.x,
          i = this.pointerDownScroll.y - t.y;
        (Math.abs(e) > 3 || Math.abs(i) > 3) && this._pointerDone();
      }),
      e
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(
          "tap-listener/tap-listener",
          ["unipointer/unipointer"],
          function (i) {
            return e(t, i);
          }
        )
      : "object" == typeof module && module.exports
      ? (module.exports = e(t, require("unipointer")))
      : (t.TapListener = e(t, t.Unipointer));
  })(window, function (t, e) {
    function i(t) {
      this.bindTap(t);
    }
    var n = (i.prototype = Object.create(e.prototype));
    return (
      (n.bindTap = function (t) {
        t &&
          (this.unbindTap(),
          (this.tapElement = t),
          this._bindStartEvent(t, !0));
      }),
      (n.unbindTap = function () {
        this.tapElement &&
          (this._bindStartEvent(this.tapElement, !0), delete this.tapElement);
      }),
      (n.pointerUp = function (i, n) {
        if (!this.isIgnoringMouseUp || "mouseup" != i.type) {
          var r = e.getPointerPoint(n),
            o = this.tapElement.getBoundingClientRect(),
            s = t.pageXOffset,
            a = t.pageYOffset,
            l =
              r.x >= o.left + s &&
              r.x <= o.right + s &&
              r.y >= o.top + a &&
              r.y <= o.bottom + a;
          if ((l && this.emitEvent("tap", [i, n]), "mouseup" != i.type)) {
            this.isIgnoringMouseUp = !0;
            var h = this;
            setTimeout(function () {
              delete h.isIgnoringMouseUp;
            }, 400);
          }
        }
      }),
      (n.destroy = function () {
        this.pointerDone(), this.unbindTap();
      }),
      i
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(
          "flickity/js/prev-next-button",
          ["./flickity", "tap-listener/tap-listener", "fizzy-ui-utils/utils"],
          function (i, n, r) {
            return e(t, i, n, r);
          }
        )
      : "object" == typeof module && module.exports
      ? (module.exports = e(
          t,
          require("./flickity"),
          require("tap-listener"),
          require("fizzy-ui-utils")
        ))
      : e(t, t.Flickity, t.TapListener, t.fizzyUIUtils);
  })(window, function (t, e, i, n) {
    "use strict";
    function r(t, e) {
      (this.direction = t), (this.parent = e), this._create();
    }
    function o(t) {
      return "string" == typeof t
        ? t
        : "M " +
            t.x0 +
            ",50 L " +
            t.x1 +
            "," +
            (t.y1 + 50) +
            " L " +
            t.x2 +
            "," +
            (t.y2 + 50) +
            " L " +
            t.x3 +
            ",50  L " +
            t.x2 +
            "," +
            (50 - t.y2) +
            " L " +
            t.x1 +
            "," +
            (50 - t.y1) +
            " Z";
    }
    var s = "http://www.w3.org/2000/svg";
    (r.prototype = new i()),
      (r.prototype._create = function () {
        (this.isEnabled = !0), (this.isPrevious = this.direction == -1);
        var t = this.parent.options.rightToLeft ? 1 : -1;
        this.isLeft = this.direction == t;
        var e = (this.element = document.createElement("button"));
        (e.className = "flickity-prev-next-button"),
          (e.className += this.isPrevious ? " previous" : " next"),
          e.setAttribute("type", "button"),
          this.disable(),
          e.setAttribute("aria-label", this.isPrevious ? "previous" : "next");
        var i = this.createSVG();
        e.appendChild(i),
          this.on("tap", this.onTap),
          this.parent.on("select", this.update.bind(this)),
          this.on(
            "pointerDown",
            this.parent.childUIPointerDown.bind(this.parent)
          );
      }),
      (r.prototype.activate = function () {
        this.bindTap(this.element),
          this.element.addEventListener("click", this),
          this.parent.element.appendChild(this.element);
      }),
      (r.prototype.deactivate = function () {
        this.parent.element.removeChild(this.element),
          i.prototype.destroy.call(this),
          this.element.removeEventListener("click", this);
      }),
      (r.prototype.createSVG = function () {
        var t = document.createElementNS(s, "svg");
        t.setAttribute("viewBox", "0 0 100 100");
        var e = document.createElementNS(s, "path"),
          i = o(this.parent.options.arrowShape);
        return (
          e.setAttribute("d", i),
          e.setAttribute("class", "arrow"),
          this.isLeft ||
            e.setAttribute("transform", "translate(100, 100) rotate(180) "),
          t.appendChild(e),
          t
        );
      }),
      (r.prototype.onTap = function () {
        if (this.isEnabled) {
          this.parent.uiChange();
          var t = this.isPrevious ? "previous" : "next";
          this.parent[t]();
        }
      }),
      (r.prototype.handleEvent = n.handleEvent),
      (r.prototype.onclick = function () {
        var t = document.activeElement;
        t && t == this.element && this.onTap();
      }),
      (r.prototype.enable = function () {
        this.isEnabled || ((this.element.disabled = !1), (this.isEnabled = !0));
      }),
      (r.prototype.disable = function () {
        this.isEnabled && ((this.element.disabled = !0), (this.isEnabled = !1));
      }),
      (r.prototype.update = function () {
        var t = this.parent.slides;
        if (this.parent.options.wrapAround && t.length > 1)
          return void this.enable();
        var e = t.length ? t.length - 1 : 0,
          i = this.isPrevious ? 0 : e,
          n = this.parent.selectedIndex == i ? "disable" : "enable";
        this[n]();
      }),
      (r.prototype.destroy = function () {
        this.deactivate();
      }),
      n.extend(e.defaults, {
        prevNextButtons: !0,
        arrowShape: {
          x0: 10,
          x1: 60,
          y1: 50,
          x2: 70,
          y2: 40,
          x3: 30,
        },
      }),
      e.createMethods.push("_createPrevNextButtons");
    var a = e.prototype;
    return (
      (a._createPrevNextButtons = function () {
        this.options.prevNextButtons &&
          ((this.prevButton = new r(-1, this)),
          (this.nextButton = new r(1, this)),
          this.on("activate", this.activatePrevNextButtons));
      }),
      (a.activatePrevNextButtons = function () {
        this.prevButton.activate(),
          this.nextButton.activate(),
          this.on("deactivate", this.deactivatePrevNextButtons);
      }),
      (a.deactivatePrevNextButtons = function () {
        this.prevButton.deactivate(),
          this.nextButton.deactivate(),
          this.off("deactivate", this.deactivatePrevNextButtons);
      }),
      (e.PrevNextButton = r),
      e
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(
          "flickity/js/page-dots",
          ["./flickity", "tap-listener/tap-listener", "fizzy-ui-utils/utils"],
          function (i, n, r) {
            return e(t, i, n, r);
          }
        )
      : "object" == typeof module && module.exports
      ? (module.exports = e(
          t,
          require("./flickity"),
          require("tap-listener"),
          require("fizzy-ui-utils")
        ))
      : e(t, t.Flickity, t.TapListener, t.fizzyUIUtils);
  })(window, function (t, e, i, n) {
    function r(t) {
      (this.parent = t), this._create();
    }
    (r.prototype = new i()),
      (r.prototype._create = function () {
        (this.holder = document.createElement("ol")),
          (this.holder.className = "flickity-page-dots"),
          (this.dots = []),
          this.on("tap", this.onTap),
          this.on(
            "pointerDown",
            this.parent.childUIPointerDown.bind(this.parent)
          );
      }),
      (r.prototype.activate = function () {
        this.setDots(),
          this.bindTap(this.holder),
          this.parent.element.appendChild(this.holder);
      }),
      (r.prototype.deactivate = function () {
        this.parent.element.removeChild(this.holder),
          i.prototype.destroy.call(this);
      }),
      (r.prototype.setDots = function () {
        var t = this.parent.slides.length - this.dots.length;
        t > 0 ? this.addDots(t) : t < 0 && this.removeDots(-t);
      }),
      (r.prototype.addDots = function (t) {
        for (var e = document.createDocumentFragment(), i = []; t; ) {
          var n = document.createElement("li");
          (n.className = "dot"), e.appendChild(n), i.push(n), t--;
        }
        this.holder.appendChild(e), (this.dots = this.dots.concat(i));
      }),
      (r.prototype.removeDots = function (t) {
        var e = this.dots.splice(this.dots.length - t, t);
        e.forEach(function (t) {
          this.holder.removeChild(t);
        }, this);
      }),
      (r.prototype.updateSelected = function () {
        this.selectedDot && (this.selectedDot.className = "dot"),
          this.dots.length &&
            ((this.selectedDot = this.dots[this.parent.selectedIndex]),
            (this.selectedDot.className = "dot is-selected"));
      }),
      (r.prototype.onTap = function (t) {
        var e = t.target;
        if ("LI" == e.nodeName) {
          this.parent.uiChange();
          var i = this.dots.indexOf(e);
          this.parent.select(i);
        }
      }),
      (r.prototype.destroy = function () {
        this.deactivate();
      }),
      (e.PageDots = r),
      n.extend(e.defaults, {
        pageDots: !0,
      }),
      e.createMethods.push("_createPageDots");
    var o = e.prototype;
    return (
      (o._createPageDots = function () {
        this.options.pageDots &&
          ((this.pageDots = new r(this)),
          this.on("activate", this.activatePageDots),
          this.on("select", this.updateSelectedPageDots),
          this.on("cellChange", this.updatePageDots),
          this.on("resize", this.updatePageDots),
          this.on("deactivate", this.deactivatePageDots));
      }),
      (o.activatePageDots = function () {
        this.pageDots.activate();
      }),
      (o.updateSelectedPageDots = function () {
        this.pageDots.updateSelected();
      }),
      (o.updatePageDots = function () {
        this.pageDots.setDots();
      }),
      (o.deactivatePageDots = function () {
        this.pageDots.deactivate();
      }),
      (e.PageDots = r),
      e
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(
          "flickity/js/player",
          ["ev-emitter/ev-emitter", "fizzy-ui-utils/utils", "./flickity"],
          function (t, i, n) {
            return e(t, i, n);
          }
        )
      : "object" == typeof module && module.exports
      ? (module.exports = e(
          require("ev-emitter"),
          require("fizzy-ui-utils"),
          require("./flickity")
        ))
      : e(t.EvEmitter, t.fizzyUIUtils, t.Flickity);
  })(window, function (t, e, i) {
    function n(t) {
      (this.parent = t),
        (this.state = "stopped"),
        o &&
          ((this.onVisibilityChange = function () {
            this.visibilityChange();
          }.bind(this)),
          (this.onVisibilityPlay = function () {
            this.visibilityPlay();
          }.bind(this)));
    }
    var r, o;
    "hidden" in document
      ? ((r = "hidden"), (o = "visibilitychange"))
      : "webkitHidden" in document &&
        ((r = "webkitHidden"), (o = "webkitvisibilitychange")),
      (n.prototype = Object.create(t.prototype)),
      (n.prototype.play = function () {
        if ("playing" != this.state) {
          var t = document[r];
          if (o && t)
            return void document.addEventListener(o, this.onVisibilityPlay);
          (this.state = "playing"),
            o && document.addEventListener(o, this.onVisibilityChange),
            this.tick();
        }
      }),
      (n.prototype.tick = function () {
        if ("playing" == this.state) {
          var t = this.parent.options.autoPlay;
          t = "number" == typeof t ? t : 3e3;
          var e = this;
          this.clear(),
            (this.timeout = setTimeout(function () {
              e.parent.next(!0), e.tick();
            }, t));
        }
      }),
      (n.prototype.stop = function () {
        (this.state = "stopped"),
          this.clear(),
          o && document.removeEventListener(o, this.onVisibilityChange);
      }),
      (n.prototype.clear = function () {
        clearTimeout(this.timeout);
      }),
      (n.prototype.pause = function () {
        "playing" == this.state && ((this.state = "paused"), this.clear());
      }),
      (n.prototype.unpause = function () {
        "paused" == this.state && this.play();
      }),
      (n.prototype.visibilityChange = function () {
        var t = document[r];
        this[t ? "pause" : "unpause"]();
      }),
      (n.prototype.visibilityPlay = function () {
        this.play(), document.removeEventListener(o, this.onVisibilityPlay);
      }),
      e.extend(i.defaults, {
        pauseAutoPlayOnHover: !0,
      }),
      i.createMethods.push("_createPlayer");
    var s = i.prototype;
    return (
      (s._createPlayer = function () {
        (this.player = new n(this)),
          this.on("activate", this.activatePlayer),
          this.on("uiChange", this.stopPlayer),
          this.on("pointerDown", this.stopPlayer),
          this.on("deactivate", this.deactivatePlayer);
      }),
      (s.activatePlayer = function () {
        this.options.autoPlay &&
          (this.player.play(),
          this.element.addEventListener("mouseenter", this));
      }),
      (s.playPlayer = function () {
        this.player.play();
      }),
      (s.stopPlayer = function () {
        this.player.stop();
      }),
      (s.pausePlayer = function () {
        this.player.pause();
      }),
      (s.unpausePlayer = function () {
        this.player.unpause();
      }),
      (s.deactivatePlayer = function () {
        this.player.stop(),
          this.element.removeEventListener("mouseenter", this);
      }),
      (s.onmouseenter = function () {
        this.options.pauseAutoPlayOnHover &&
          (this.player.pause(),
          this.element.addEventListener("mouseleave", this));
      }),
      (s.onmouseleave = function () {
        this.player.unpause(),
          this.element.removeEventListener("mouseleave", this);
      }),
      (i.Player = n),
      i
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(
          "flickity/js/add-remove-cell",
          ["./flickity", "fizzy-ui-utils/utils"],
          function (i, n) {
            return e(t, i, n);
          }
        )
      : "object" == typeof module && module.exports
      ? (module.exports = e(
          t,
          require("./flickity"),
          require("fizzy-ui-utils")
        ))
      : e(t, t.Flickity, t.fizzyUIUtils);
  })(window, function (t, e, i) {
    function n(t) {
      var e = document.createDocumentFragment();
      return (
        t.forEach(function (t) {
          e.appendChild(t.element);
        }),
        e
      );
    }
    var r = e.prototype;
    return (
      (r.insert = function (t, e) {
        var i = this._makeCells(t);
        if (i && i.length) {
          var r = this.cells.length;
          e = void 0 === e ? r : e;
          var o = n(i),
            s = e == r;
          if (s) this.slider.appendChild(o);
          else {
            var a = this.cells[e].element;
            this.slider.insertBefore(o, a);
          }
          if (0 === e) this.cells = i.concat(this.cells);
          else if (s) this.cells = this.cells.concat(i);
          else {
            var l = this.cells.splice(e, r - e);
            this.cells = this.cells.concat(i).concat(l);
          }
          this._sizeCells(i);
          var h = e > this.selectedIndex ? 0 : i.length;
          this._cellAddedRemoved(e, h);
        }
      }),
      (r.append = function (t) {
        this.insert(t, this.cells.length);
      }),
      (r.prepend = function (t) {
        this.insert(t, 0);
      }),
      (r.remove = function (t) {
        var e,
          n,
          r = this.getCells(t),
          o = 0,
          s = r.length;
        for (e = 0; e < s; e++) {
          n = r[e];
          var a = this.cells.indexOf(n) < this.selectedIndex;
          o -= a ? 1 : 0;
        }
        for (e = 0; e < s; e++)
          (n = r[e]), n.remove(), i.removeFrom(this.cells, n);
        r.length && this._cellAddedRemoved(0, o);
      }),
      (r._cellAddedRemoved = function (t, e) {
        (e = e || 0),
          (this.selectedIndex += e),
          (this.selectedIndex = Math.max(
            0,
            Math.min(this.slides.length - 1, this.selectedIndex)
          )),
          this.cellChange(t, !0),
          this.emitEvent("cellAddedRemoved", [t, e]);
      }),
      (r.cellSizeChange = function (t) {
        var e = this.getCell(t);
        if (e) {
          e.getSize();
          var i = this.cells.indexOf(e);
          this.cellChange(i);
        }
      }),
      (r.cellChange = function (t, e) {
        var i = this.slideableWidth;
        if (
          (this._positionCells(t),
          this._getWrapShiftCells(),
          this.setGallerySize(),
          this.emitEvent("cellChange", [t]),
          this.options.freeScroll)
        ) {
          var n = i - this.slideableWidth;
          (this.x += n * this.cellAlign), this.positionSlider();
        } else
          e && this.positionSliderAtSelected(), this.select(this.selectedIndex);
      }),
      e
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(
          "flickity/js/lazyload",
          ["./flickity", "fizzy-ui-utils/utils"],
          function (i, n) {
            return e(t, i, n);
          }
        )
      : "object" == typeof module && module.exports
      ? (module.exports = e(
          t,
          require("./flickity"),
          require("fizzy-ui-utils")
        ))
      : e(t, t.Flickity, t.fizzyUIUtils);
  })(window, function (t, e, i) {
    "use strict";
    function n(t) {
      if ("IMG" == t.nodeName && t.getAttribute("data-flickity-lazyload"))
        return [t];
      var e = t.querySelectorAll("img[data-flickity-lazyload]");
      return i.makeArray(e);
    }
    function r(t, e) {
      (this.img = t), (this.flickity = e), this.load();
    }
    e.createMethods.push("_createLazyload");
    var o = e.prototype;
    return (
      (o._createLazyload = function () {
        this.on("select", this.lazyLoad);
      }),
      (o.lazyLoad = function () {
        var t = this.options.lazyLoad;
        if (t) {
          var e = "number" == typeof t ? t : 0,
            i = this.getAdjacentCellElements(e),
            o = [];
          i.forEach(function (t) {
            var e = n(t);
            o = o.concat(e);
          }),
            o.forEach(function (t) {
              new r(t, this);
            }, this);
        }
      }),
      (r.prototype.handleEvent = i.handleEvent),
      (r.prototype.load = function () {
        this.img.addEventListener("load", this),
          this.img.addEventListener("error", this),
          (this.img.src = this.img.getAttribute("data-flickity-lazyload")),
          this.img.removeAttribute("data-flickity-lazyload");
      }),
      (r.prototype.onload = function (t) {
        this.complete(t, "flickity-lazyloaded");
      }),
      (r.prototype.onerror = function (t) {
        this.complete(t, "flickity-lazyerror");
      }),
      (r.prototype.complete = function (t, e) {
        this.img.removeEventListener("load", this),
          this.img.removeEventListener("error", this);
        var i = this.flickity.getParentCell(this.img),
          n = i && i.element;
        this.flickity.cellSizeChange(n),
          this.img.classList.add(e),
          this.flickity.dispatchEvent("lazyLoad", t, n);
      }),
      (e.LazyLoader = r),
      e
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(
          "flickity/js/index",
          [
            "./flickity",
            "./drag",
            "./prev-next-button",
            "./page-dots",
            "./player",
            "./add-remove-cell",
            "./lazyload",
          ],
          e
        )
      : "object" == typeof module &&
        module.exports &&
        (module.exports = e(
          require("./flickity"),
          require("./drag"),
          require("./prev-next-button"),
          require("./page-dots"),
          require("./player"),
          require("./add-remove-cell"),
          require("./lazyload")
        ));
  })(window, function (t) {
    return t;
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(
          "flickity-as-nav-for/as-nav-for",
          ["flickity/js/index", "fizzy-ui-utils/utils"],
          e
        )
      : "object" == typeof module && module.exports
      ? (module.exports = e(require("flickity"), require("fizzy-ui-utils")))
      : (t.Flickity = e(t.Flickity, t.fizzyUIUtils));
  })(window, function (t, e) {
    function i(t, e, i) {
      return (e - t) * i + t;
    }
    t.createMethods.push("_createAsNavFor");
    var n = t.prototype;
    return (
      (n._createAsNavFor = function () {
        this.on("activate", this.activateAsNavFor),
          this.on("deactivate", this.deactivateAsNavFor),
          this.on("destroy", this.destroyAsNavFor);
        var t = this.options.asNavFor;
        if (t) {
          var e = this;
          setTimeout(function () {
            e.setNavCompanion(t);
          });
        }
      }),
      (n.setNavCompanion = function (i) {
        i = e.getQueryElement(i);
        var n = t.data(i);
        if (n && n != this) {
          this.navCompanion = n;
          var r = this;
          (this.onNavCompanionSelect = function () {
            r.navCompanionSelect();
          }),
            n.on("select", this.onNavCompanionSelect),
            this.on("staticClick", this.onNavStaticClick),
            this.navCompanionSelect(!0);
        }
      }),
      (n.navCompanionSelect = function (t) {
        if (this.navCompanion) {
          var e = this.navCompanion.selectedCells[0],
            n = this.navCompanion.cells.indexOf(e),
            r = n + this.navCompanion.selectedCells.length - 1,
            o = Math.floor(i(n, r, this.navCompanion.cellAlign));
          if (
            (this.selectCell(o, !1, t),
            this.removeNavSelectedElements(),
            !(o >= this.cells.length))
          ) {
            var s = this.cells.slice(n, r + 1);
            (this.navSelectedElements = s.map(function (t) {
              return t.element;
            })),
              this.changeNavSelectedClass("add");
          }
        }
      }),
      (n.changeNavSelectedClass = function (t) {
        this.navSelectedElements.forEach(function (e) {
          e.classList[t]("is-nav-selected");
        });
      }),
      (n.activateAsNavFor = function () {
        this.navCompanionSelect(!0);
      }),
      (n.removeNavSelectedElements = function () {
        this.navSelectedElements &&
          (this.changeNavSelectedClass("remove"),
          delete this.navSelectedElements);
      }),
      (n.onNavStaticClick = function (t, e, i, n) {
        "number" == typeof n && this.navCompanion.selectCell(n);
      }),
      (n.deactivateAsNavFor = function () {
        this.removeNavSelectedElements();
      }),
      (n.destroyAsNavFor = function () {
        this.navCompanion &&
          (this.navCompanion.off("select", this.onNavCompanionSelect),
          this.off("staticClick", this.onNavStaticClick),
          delete this.navCompanion);
      }),
      t
    );
  }),
  (function (t, e) {
    "use strict";
    "function" == typeof define && define.amd
      ? define(
          "imagesloaded/imagesloaded",
          ["ev-emitter/ev-emitter"],
          function (i) {
            return e(t, i);
          }
        )
      : "object" == typeof module && module.exports
      ? (module.exports = e(t, require("ev-emitter")))
      : (t.imagesLoaded = e(t, t.EvEmitter));
  })(window, function (t, e) {
    function i(t, e) {
      for (var i in e) t[i] = e[i];
      return t;
    }
    function n(t) {
      var e = [];
      if (Array.isArray(t)) e = t;
      else if ("number" == typeof t.length)
        for (var i = 0; i < t.length; i++) e.push(t[i]);
      else e.push(t);
      return e;
    }
    function r(t, e, o) {
      return this instanceof r
        ? ("string" == typeof t && (t = document.querySelectorAll(t)),
          (this.elements = n(t)),
          (this.options = i({}, this.options)),
          "function" == typeof e ? (o = e) : i(this.options, e),
          o && this.on("always", o),
          this.getImages(),
          a && (this.jqDeferred = new a.Deferred()),
          void setTimeout(
            function () {
              this.check();
            }.bind(this)
          ))
        : new r(t, e, o);
    }
    function o(t) {
      this.img = t;
    }
    function s(t, e) {
      (this.url = t), (this.element = e), (this.img = new Image());
    }
    var a = t.jQuery,
      l = t.console;
    (r.prototype = Object.create(e.prototype)),
      (r.prototype.options = {}),
      (r.prototype.getImages = function () {
        (this.images = []), this.elements.forEach(this.addElementImages, this);
      }),
      (r.prototype.addElementImages = function (t) {
        "IMG" == t.nodeName && this.addImage(t),
          this.options.background === !0 && this.addElementBackgroundImages(t);
        var e = t.nodeType;
        if (e && h[e]) {
          for (var i = t.querySelectorAll("img"), n = 0; n < i.length; n++) {
            var r = i[n];
            this.addImage(r);
          }
          if ("string" == typeof this.options.background) {
            var o = t.querySelectorAll(this.options.background);
            for (n = 0; n < o.length; n++) {
              var s = o[n];
              this.addElementBackgroundImages(s);
            }
          }
        }
      });
    var h = {
      1: !0,
      9: !0,
      11: !0,
    };
    return (
      (r.prototype.addElementBackgroundImages = function (t) {
        var e = getComputedStyle(t);
        if (e)
          for (
            var i = /url\((['"])?(.*?)\1\)/gi, n = i.exec(e.backgroundImage);
            null !== n;

          ) {
            var r = n && n[2];
            r && this.addBackground(r, t), (n = i.exec(e.backgroundImage));
          }
      }),
      (r.prototype.addImage = function (t) {
        var e = new o(t);
        this.images.push(e);
      }),
      (r.prototype.addBackground = function (t, e) {
        var i = new s(t, e);
        this.images.push(i);
      }),
      (r.prototype.check = function () {
        function t(t, i, n) {
          setTimeout(function () {
            e.progress(t, i, n);
          });
        }
        var e = this;
        return (
          (this.progressedCount = 0),
          (this.hasAnyBroken = !1),
          this.images.length
            ? void this.images.forEach(function (e) {
                e.once("progress", t), e.check();
              })
            : void this.complete()
        );
      }),
      (r.prototype.progress = function (t, e, i) {
        this.progressedCount++,
          (this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded),
          this.emitEvent("progress", [this, t, e]),
          this.jqDeferred &&
            this.jqDeferred.notify &&
            this.jqDeferred.notify(this, t),
          this.progressedCount == this.images.length && this.complete(),
          this.options.debug && l && l.log("progress: " + i, t, e);
      }),
      (r.prototype.complete = function () {
        var t = this.hasAnyBroken ? "fail" : "done";
        if (
          ((this.isComplete = !0),
          this.emitEvent(t, [this]),
          this.emitEvent("always", [this]),
          this.jqDeferred)
        ) {
          var e = this.hasAnyBroken ? "reject" : "resolve";
          this.jqDeferred[e](this);
        }
      }),
      (o.prototype = Object.create(e.prototype)),
      (o.prototype.check = function () {
        var t = this.getIsImageComplete();
        return t
          ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth")
          : ((this.proxyImage = new Image()),
            this.proxyImage.addEventListener("load", this),
            this.proxyImage.addEventListener("error", this),
            this.img.addEventListener("load", this),
            this.img.addEventListener("error", this),
            void (this.proxyImage.src = this.img.src));
      }),
      (o.prototype.getIsImageComplete = function () {
        return this.img.complete && void 0 !== this.img.naturalWidth;
      }),
      (o.prototype.confirm = function (t, e) {
        (this.isLoaded = t), this.emitEvent("progress", [this, this.img, e]);
      }),
      (o.prototype.handleEvent = function (t) {
        var e = "on" + t.type;
        this[e] && this[e](t);
      }),
      (o.prototype.onload = function () {
        this.confirm(!0, "onload"), this.unbindEvents();
      }),
      (o.prototype.onerror = function () {
        this.confirm(!1, "onerror"), this.unbindEvents();
      }),
      (o.prototype.unbindEvents = function () {
        this.proxyImage.removeEventListener("load", this),
          this.proxyImage.removeEventListener("error", this),
          this.img.removeEventListener("load", this),
          this.img.removeEventListener("error", this);
      }),
      (s.prototype = Object.create(o.prototype)),
      (s.prototype.check = function () {
        this.img.addEventListener("load", this),
          this.img.addEventListener("error", this),
          (this.img.src = this.url);
        var t = this.getIsImageComplete();
        t &&
          (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"),
          this.unbindEvents());
      }),
      (s.prototype.unbindEvents = function () {
        this.img.removeEventListener("load", this),
          this.img.removeEventListener("error", this);
      }),
      (s.prototype.confirm = function (t, e) {
        (this.isLoaded = t),
          this.emitEvent("progress", [this, this.element, e]);
      }),
      (r.makeJQueryPlugin = function (e) {
        (e = e || t.jQuery),
          e &&
            ((a = e),
            (a.fn.imagesLoaded = function (t, e) {
              var i = new r(this, t, e);
              return i.jqDeferred.promise(a(this));
            }));
      }),
      r.makeJQueryPlugin(),
      r
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(
          ["flickity/js/index", "imagesloaded/imagesloaded"],
          function (i, n) {
            return e(t, i, n);
          }
        )
      : "object" == typeof module && module.exports
      ? (module.exports = e(t, require("flickity"), require("imagesloaded")))
      : (t.Flickity = e(t, t.Flickity, t.imagesLoaded));
  })(window, function (t, e, i) {
    "use strict";
    e.createMethods.push("_createImagesLoaded");
    var n = e.prototype;
    return (
      (n._createImagesLoaded = function () {
        this.on("activate", this.imagesLoaded);
      }),
      (n.imagesLoaded = function () {
        function t(t, i) {
          var n = e.getParentCell(i.img);
          e.cellSizeChange(n && n.element),
            e.options.freeScroll || e.positionSliderAtSelected();
        }
        if (this.options.imagesLoaded) {
          var e = this;
          i(this.slider).on("progress", t);
        }
      }),
      e
    );
  }),
  !(function (t, e) {
    "use strict";
    "function" == typeof define && define.amd
      ? define("jquery-bridget/jquery-bridget", ["jquery"], function (i) {
          e(t, i);
        })
      : "object" == typeof module && module.exports
      ? (module.exports = e(t, require("jquery")))
      : (t.jQueryBridget = e(t, t.jQuery));
  })(window, function (t, e) {
    "use strict";
    function i(i, o, a) {
      function l(t, e, n) {
        var r,
          o = "$()." + i + '("' + e + '")';
        return (
          t.each(function (t, l) {
            var h = a.data(l, i);
            if (!h)
              return void s(
                i + " not initialized. Cannot call methods, i.e. " + o
              );
            var u = h[e];
            if (!u || "_" == e.charAt(0))
              return void s(o + " is not a valid method");
            var c = u.apply(h, n);
            r = void 0 === r ? c : r;
          }),
          void 0 !== r ? r : t
        );
      }
      function h(t, e) {
        t.each(function (t, n) {
          var r = a.data(n, i);
          r ? (r.option(e), r._init()) : ((r = new o(n, e)), a.data(n, i, r));
        });
      }
      (a = a || e || t.jQuery),
        a &&
          (o.prototype.option ||
            (o.prototype.option = function (t) {
              a.isPlainObject(t) &&
                (this.options = a.extend(!0, this.options, t));
            }),
          (a.fn[i] = function (t) {
            if ("string" == typeof t) {
              var e = r.call(arguments, 1);
              return l(this, t, e);
            }
            return h(this, t), this;
          }),
          n(a));
    }
    function n(t) {
      !t || (t && t.bridget) || (t.bridget = i);
    }
    var r = Array.prototype.slice,
      o = t.console,
      s =
        "undefined" == typeof o
          ? function () {}
          : function (t) {
              o.error(t);
            };
    return n(e || t.jQuery), i;
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define("ev-emitter/ev-emitter", e)
      : "object" == typeof module && module.exports
      ? (module.exports = e())
      : (t.EvEmitter = e());
  })("undefined" != typeof window ? window : this, function () {
    function t() {}
    var e = t.prototype;
    return (
      (e.on = function (t, e) {
        if (t && e) {
          var i = (this._events = this._events || {}),
            n = (i[t] = i[t] || []);
          return -1 == n.indexOf(e) && n.push(e), this;
        }
      }),
      (e.once = function (t, e) {
        if (t && e) {
          this.on(t, e);
          var i = (this._onceEvents = this._onceEvents || {}),
            n = (i[t] = i[t] || {});
          return (n[e] = !0), this;
        }
      }),
      (e.off = function (t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
          var n = i.indexOf(e);
          return -1 != n && i.splice(n, 1), this;
        }
      }),
      (e.emitEvent = function (t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
          var n = 0,
            r = i[n];
          e = e || [];
          for (var o = this._onceEvents && this._onceEvents[t]; r; ) {
            var s = o && o[r];
            s && (this.off(t, r), delete o[r]),
              r.apply(this, e),
              (n += s ? 0 : 1),
              (r = i[n]);
          }
          return this;
        }
      }),
      t
    );
  }),
  (function (t, e) {
    "use strict";
    "function" == typeof define && define.amd
      ? define("get-size/get-size", [], function () {
          return e();
        })
      : "object" == typeof module && module.exports
      ? (module.exports = e())
      : (t.getSize = e());
  })(window, function () {
    "use strict";
    function t(t) {
      var e = parseFloat(t),
        i = -1 == t.indexOf("%") && !isNaN(e);
      return i && e;
    }
    function e() {}
    function i() {
      for (
        var t = {
            width: 0,
            height: 0,
            innerWidth: 0,
            innerHeight: 0,
            outerWidth: 0,
            outerHeight: 0,
          },
          e = 0;
        h > e;
        e++
      ) {
        var i = l[e];
        t[i] = 0;
      }
      return t;
    }
    function n(t) {
      var e = getComputedStyle(t);
      return (
        e ||
          a(
            "Style returned " +
              e +
              ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"
          ),
        e
      );
    }
    function r() {
      if (!u) {
        u = !0;
        var e = document.createElement("div");
        (e.style.width = "200px"),
          (e.style.padding = "1px 2px 3px 4px"),
          (e.style.borderStyle = "solid"),
          (e.style.borderWidth = "1px 2px 3px 4px"),
          (e.style.boxSizing = "border-box");
        var i = document.body || document.documentElement;
        i.appendChild(e);
        var r = n(e);
        (o.isBoxSizeOuter = s = 200 == t(r.width)), i.removeChild(e);
      }
    }
    function o(e) {
      if (
        (r(),
        "string" == typeof e && (e = document.querySelector(e)),
        e && "object" == typeof e && e.nodeType)
      ) {
        var o = n(e);
        if ("none" == o.display) return i();
        var a = {};
        (a.width = e.offsetWidth), (a.height = e.offsetHeight);
        for (
          var u = (a.isBorderBox = "border-box" == o.boxSizing), c = 0;
          h > c;
          c++
        ) {
          var f = l[c],
            d = o[f],
            p = parseFloat(d);
          a[f] = isNaN(p) ? 0 : p;
        }
        var m = a.paddingLeft + a.paddingRight,
          g = a.paddingTop + a.paddingBottom,
          v = a.marginLeft + a.marginRight,
          y = a.marginTop + a.marginBottom,
          _ = a.borderLeftWidth + a.borderRightWidth,
          b = a.borderTopWidth + a.borderBottomWidth,
          T = u && s,
          x = t(o.width);
        x !== !1 && (a.width = x + (T ? 0 : m + _));
        var w = t(o.height);
        return (
          w !== !1 && (a.height = w + (T ? 0 : g + b)),
          (a.innerWidth = a.width - (m + _)),
          (a.innerHeight = a.height - (g + b)),
          (a.outerWidth = a.width + v),
          (a.outerHeight = a.height + y),
          a
        );
      }
    }
    var s,
      a =
        "undefined" == typeof console
          ? e
          : function (t) {
              console.error(t);
            },
      l = [
        "paddingLeft",
        "paddingRight",
        "paddingTop",
        "paddingBottom",
        "marginLeft",
        "marginRight",
        "marginTop",
        "marginBottom",
        "borderLeftWidth",
        "borderRightWidth",
        "borderTopWidth",
        "borderBottomWidth",
      ],
      h = l.length,
      u = !1;
    return o;
  }),
  (function (t, e) {
    "use strict";
    "function" == typeof define && define.amd
      ? define("desandro-matches-selector/matches-selector", e)
      : "object" == typeof module && module.exports
      ? (module.exports = e())
      : (t.matchesSelector = e());
  })(window, function () {
    "use strict";
    var t = (function () {
      var t = Element.prototype;
      if (t.matches) return "matches";
      if (t.matchesSelector) return "matchesSelector";
      for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
        var n = e[i],
          r = n + "MatchesSelector";
        if (t[r]) return r;
      }
    })();
    return function (e, i) {
      return e[t](i);
    };
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(
          "fizzy-ui-utils/utils",
          ["desandro-matches-selector/matches-selector"],
          function (i) {
            return e(t, i);
          }
        )
      : "object" == typeof module && module.exports
      ? (module.exports = e(t, require("desandro-matches-selector")))
      : (t.fizzyUIUtils = e(t, t.matchesSelector));
  })(window, function (t, e) {
    var i = {};
    (i.extend = function (t, e) {
      for (var i in e) t[i] = e[i];
      return t;
    }),
      (i.modulo = function (t, e) {
        return ((t % e) + e) % e;
      }),
      (i.makeArray = function (t) {
        var e = [];
        if (Array.isArray(t)) e = t;
        else if (t && "number" == typeof t.length)
          for (var i = 0; i < t.length; i++) e.push(t[i]);
        else e.push(t);
        return e;
      }),
      (i.removeFrom = function (t, e) {
        var i = t.indexOf(e);
        -1 != i && t.splice(i, 1);
      }),
      (i.getParent = function (t, i) {
        for (; t != document.body; )
          if (((t = t.parentNode), e(t, i))) return t;
      }),
      (i.getQueryElement = function (t) {
        return "string" == typeof t ? document.querySelector(t) : t;
      }),
      (i.handleEvent = function (t) {
        var e = "on" + t.type;
        this[e] && this[e](t);
      }),
      (i.filterFindElements = function (t, n) {
        t = i.makeArray(t);
        var r = [];
        return (
          t.forEach(function (t) {
            if (t instanceof HTMLElement) {
              if (!n) return void r.push(t);
              e(t, n) && r.push(t);
              for (var i = t.querySelectorAll(n), o = 0; o < i.length; o++)
                r.push(i[o]);
            }
          }),
          r
        );
      }),
      (i.debounceMethod = function (t, e, i) {
        var n = t.prototype[e],
          r = e + "Timeout";
        t.prototype[e] = function () {
          var t = this[r];
          t && clearTimeout(t);
          var e = arguments,
            o = this;
          this[r] = setTimeout(function () {
            n.apply(o, e), delete o[r];
          }, i || 100);
        };
      }),
      (i.docReady = function (t) {
        var e = document.readyState;
        "complete" == e || "interactive" == e
          ? t()
          : document.addEventListener("DOMContentLoaded", t);
      }),
      (i.toDashed = function (t) {
        return t
          .replace(/(.)([A-Z])/g, function (t, e, i) {
            return e + "-" + i;
          })
          .toLowerCase();
      });
    var n = t.console;
    return (
      (i.htmlInit = function (e, r) {
        i.docReady(function () {
          var o = i.toDashed(r),
            s = "data-" + o,
            a = document.querySelectorAll("[" + s + "]"),
            l = document.querySelectorAll(".js-" + o),
            h = i.makeArray(a).concat(i.makeArray(l)),
            u = s + "-options",
            c = t.jQuery;
          h.forEach(function (t) {
            var i,
              o = t.getAttribute(s) || t.getAttribute(u);
            try {
              i = o && JSON.parse(o);
            } catch (e) {
              return void (
                n &&
                n.error("Error parsing " + s + " on " + t.className + ": " + e)
              );
            }
            var a = new e(t, i);
            c && c.data(t, r, a);
          });
        });
      }),
      i
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(
          "outlayer/item",
          ["ev-emitter/ev-emitter", "get-size/get-size"],
          e
        )
      : "object" == typeof module && module.exports
      ? (module.exports = e(require("ev-emitter"), require("get-size")))
      : ((t.Outlayer = {}), (t.Outlayer.Item = e(t.EvEmitter, t.getSize)));
  })(window, function (t, e) {
    "use strict";
    function i(t) {
      for (var e in t) return !1;
      return (e = null), !0;
    }
    function n(t, e) {
      t &&
        ((this.element = t),
        (this.layout = e),
        (this.position = {
          x: 0,
          y: 0,
        }),
        this._create());
    }
    function r(t) {
      return t.replace(/([A-Z])/g, function (t) {
        return "-" + t.toLowerCase();
      });
    }
    var o = document.documentElement.style,
      s = "string" == typeof o.transition ? "transition" : "WebkitTransition",
      a = "string" == typeof o.transform ? "transform" : "WebkitTransform",
      l = {
        WebkitTransition: "webkitTransitionEnd",
        transition: "transitionend",
      }[s],
      h = {
        transform: a,
        transition: s,
        transitionDuration: s + "Duration",
        transitionProperty: s + "Property",
        transitionDelay: s + "Delay",
      },
      u = (n.prototype = Object.create(t.prototype));
    (u.constructor = n),
      (u._create = function () {
        (this._transn = {
          ingProperties: {},
          clean: {},
          onEnd: {},
        }),
          this.css({
            position: "absolute",
          });
      }),
      (u.handleEvent = function (t) {
        var e = "on" + t.type;
        this[e] && this[e](t);
      }),
      (u.getSize = function () {
        this.size = e(this.element);
      }),
      (u.css = function (t) {
        var e = this.element.style;
        for (var i in t) {
          var n = h[i] || i;
          e[n] = t[i];
        }
      }),
      (u.getPosition = function () {
        var t = getComputedStyle(this.element),
          e = this.layout._getOption("originLeft"),
          i = this.layout._getOption("originTop"),
          n = t[e ? "left" : "right"],
          r = t[i ? "top" : "bottom"],
          o = this.layout.size,
          s =
            -1 != n.indexOf("%")
              ? (parseFloat(n) / 100) * o.width
              : parseInt(n, 10),
          a =
            -1 != r.indexOf("%")
              ? (parseFloat(r) / 100) * o.height
              : parseInt(r, 10);
        (s = isNaN(s) ? 0 : s),
          (a = isNaN(a) ? 0 : a),
          (s -= e ? o.paddingLeft : o.paddingRight),
          (a -= i ? o.paddingTop : o.paddingBottom),
          (this.position.x = s),
          (this.position.y = a);
      }),
      (u.layoutPosition = function () {
        var t = this.layout.size,
          e = {},
          i = this.layout._getOption("originLeft"),
          n = this.layout._getOption("originTop"),
          r = i ? "paddingLeft" : "paddingRight",
          o = i ? "left" : "right",
          s = i ? "right" : "left",
          a = this.position.x + t[r];
        (e[o] = this.getXValue(a)), (e[s] = "");
        var l = n ? "paddingTop" : "paddingBottom",
          h = n ? "top" : "bottom",
          u = n ? "bottom" : "top",
          c = this.position.y + t[l];
        (e[h] = this.getYValue(c)),
          (e[u] = ""),
          this.css(e),
          this.emitEvent("layout", [this]);
      }),
      (u.getXValue = function (t) {
        var e = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && !e
          ? (t / this.layout.size.width) * 100 + "%"
          : t + "px";
      }),
      (u.getYValue = function (t) {
        var e = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && e
          ? (t / this.layout.size.height) * 100 + "%"
          : t + "px";
      }),
      (u._transitionTo = function (t, e) {
        this.getPosition();
        var i = this.position.x,
          n = this.position.y,
          r = parseInt(t, 10),
          o = parseInt(e, 10),
          s = r === this.position.x && o === this.position.y;
        if ((this.setPosition(t, e), s && !this.isTransitioning))
          return void this.layoutPosition();
        var a = t - i,
          l = e - n,
          h = {};
        (h.transform = this.getTranslate(a, l)),
          this.transition({
            to: h,
            onTransitionEnd: {
              transform: this.layoutPosition,
            },
            isCleaning: !0,
          });
      }),
      (u.getTranslate = function (t, e) {
        var i = this.layout._getOption("originLeft"),
          n = this.layout._getOption("originTop");
        return (
          (t = i ? t : -t),
          (e = n ? e : -e),
          "translate3d(" + t + "px, " + e + "px, 0)"
        );
      }),
      (u.goTo = function (t, e) {
        this.setPosition(t, e), this.layoutPosition();
      }),
      (u.moveTo = u._transitionTo),
      (u.setPosition = function (t, e) {
        (this.position.x = parseInt(t, 10)),
          (this.position.y = parseInt(e, 10));
      }),
      (u._nonTransition = function (t) {
        this.css(t.to), t.isCleaning && this._removeStyles(t.to);
        for (var e in t.onTransitionEnd) t.onTransitionEnd[e].call(this);
      }),
      (u.transition = function (t) {
        if (!parseFloat(this.layout.options.transitionDuration))
          return void this._nonTransition(t);
        var e = this._transn;
        for (var i in t.onTransitionEnd) e.onEnd[i] = t.onTransitionEnd[i];
        for (i in t.to)
          (e.ingProperties[i] = !0), t.isCleaning && (e.clean[i] = !0);
        if (t.from) {
          this.css(t.from);
          var n = this.element.offsetHeight;
          n = null;
        }
        this.enableTransition(t.to),
          this.css(t.to),
          (this.isTransitioning = !0);
      });
    var c = "opacity," + r(a);
    (u.enableTransition = function () {
      if (!this.isTransitioning) {
        var t = this.layout.options.transitionDuration;
        (t = "number" == typeof t ? t + "ms" : t),
          this.css({
            transitionProperty: c,
            transitionDuration: t,
            transitionDelay: this.staggerDelay || 0,
          }),
          this.element.addEventListener(l, this, !1);
      }
    }),
      (u.onwebkitTransitionEnd = function (t) {
        this.ontransitionend(t);
      }),
      (u.onotransitionend = function (t) {
        this.ontransitionend(t);
      });
    var f = {
      "-webkit-transform": "transform",
    };
    (u.ontransitionend = function (t) {
      if (t.target === this.element) {
        var e = this._transn,
          n = f[t.propertyName] || t.propertyName;
        if (
          (delete e.ingProperties[n],
          i(e.ingProperties) && this.disableTransition(),
          n in e.clean &&
            ((this.element.style[t.propertyName] = ""), delete e.clean[n]),
          n in e.onEnd)
        ) {
          var r = e.onEnd[n];
          r.call(this), delete e.onEnd[n];
        }
        this.emitEvent("transitionEnd", [this]);
      }
    }),
      (u.disableTransition = function () {
        this.removeTransitionStyles(),
          this.element.removeEventListener(l, this, !1),
          (this.isTransitioning = !1);
      }),
      (u._removeStyles = function (t) {
        var e = {};
        for (var i in t) e[i] = "";
        this.css(e);
      });
    var d = {
      transitionProperty: "",
      transitionDuration: "",
      transitionDelay: "",
    };
    return (
      (u.removeTransitionStyles = function () {
        this.css(d);
      }),
      (u.stagger = function (t) {
        (t = isNaN(t) ? 0 : t), (this.staggerDelay = t + "ms");
      }),
      (u.removeElem = function () {
        this.element.parentNode.removeChild(this.element),
          this.css({
            display: "",
          }),
          this.emitEvent("remove", [this]);
      }),
      (u.remove = function () {
        return s && parseFloat(this.layout.options.transitionDuration)
          ? (this.once("transitionEnd", function () {
              this.removeElem();
            }),
            void this.hide())
          : void this.removeElem();
      }),
      (u.reveal = function () {
        delete this.isHidden,
          this.css({
            display: "",
          });
        var t = this.layout.options,
          e = {},
          i = this.getHideRevealTransitionEndProperty("visibleStyle");
        (e[i] = this.onRevealTransitionEnd),
          this.transition({
            from: t.hiddenStyle,
            to: t.visibleStyle,
            isCleaning: !0,
            onTransitionEnd: e,
          });
      }),
      (u.onRevealTransitionEnd = function () {
        this.isHidden || this.emitEvent("reveal");
      }),
      (u.getHideRevealTransitionEndProperty = function (t) {
        var e = this.layout.options[t];
        if (e.opacity) return "opacity";
        for (var i in e) return i;
      }),
      (u.hide = function () {
        (this.isHidden = !0),
          this.css({
            display: "",
          });
        var t = this.layout.options,
          e = {},
          i = this.getHideRevealTransitionEndProperty("hiddenStyle");
        (e[i] = this.onHideTransitionEnd),
          this.transition({
            from: t.visibleStyle,
            to: t.hiddenStyle,
            isCleaning: !0,
            onTransitionEnd: e,
          });
      }),
      (u.onHideTransitionEnd = function () {
        this.isHidden &&
          (this.css({
            display: "none",
          }),
          this.emitEvent("hide"));
      }),
      (u.destroy = function () {
        this.css({
          position: "",
          left: "",
          right: "",
          top: "",
          bottom: "",
          transition: "",
          transform: "",
        });
      }),
      n
    );
  }),
  (function (t, e) {
    "use strict";
    "function" == typeof define && define.amd
      ? define(
          "outlayer/outlayer",
          [
            "ev-emitter/ev-emitter",
            "get-size/get-size",
            "fizzy-ui-utils/utils",
            "./item",
          ],
          function (i, n, r, o) {
            return e(t, i, n, r, o);
          }
        )
      : "object" == typeof module && module.exports
      ? (module.exports = e(
          t,
          require("ev-emitter"),
          require("get-size"),
          require("fizzy-ui-utils"),
          require("./item")
        ))
      : (t.Outlayer = e(
          t,
          t.EvEmitter,
          t.getSize,
          t.fizzyUIUtils,
          t.Outlayer.Item
        ));
  })(window, function (t, e, i, n, r) {
    "use strict";
    function o(t, e) {
      var i = n.getQueryElement(t);
      if (!i)
        return void (
          l &&
          l.error(
            "Bad element for " + this.constructor.namespace + ": " + (i || t)
          )
        );
      (this.element = i),
        h && (this.$element = h(this.element)),
        (this.options = n.extend({}, this.constructor.defaults)),
        this.option(e);
      var r = ++c;
      (this.element.outlayerGUID = r), (f[r] = this), this._create();
      var o = this._getOption("initLayout");
      o && this.layout();
    }
    function s(t) {
      function e() {
        t.apply(this, arguments);
      }
      return (
        (e.prototype = Object.create(t.prototype)),
        (e.prototype.constructor = e),
        e
      );
    }
    function a(t) {
      if ("number" == typeof t) return t;
      var e = t.match(/(^\d*\.?\d*)(\w*)/),
        i = e && e[1],
        n = e && e[2];
      if (!i.length) return 0;
      i = parseFloat(i);
      var r = p[n] || 1;
      return i * r;
    }
    var l = t.console,
      h = t.jQuery,
      u = function () {},
      c = 0,
      f = {};
    (o.namespace = "outlayer"),
      (o.Item = r),
      (o.defaults = {
        containerStyle: {
          position: "relative",
        },
        initLayout: !0,
        originLeft: !0,
        originTop: !0,
        resize: !0,
        resizeContainer: !0,
        transitionDuration: "0.4s",
        hiddenStyle: {
          opacity: 0,
          transform: "scale(0.001)",
        },
        visibleStyle: {
          opacity: 1,
          transform: "scale(1)",
        },
      });
    var d = o.prototype;
    n.extend(d, e.prototype),
      (d.option = function (t) {
        n.extend(this.options, t);
      }),
      (d._getOption = function (t) {
        var e = this.constructor.compatOptions[t];
        return e && void 0 !== this.options[e]
          ? this.options[e]
          : this.options[t];
      }),
      (o.compatOptions = {
        initLayout: "isInitLayout",
        horizontal: "isHorizontal",
        layoutInstant: "isLayoutInstant",
        originLeft: "isOriginLeft",
        originTop: "isOriginTop",
        resize: "isResizeBound",
        resizeContainer: "isResizingContainer",
      }),
      (d._create = function () {
        this.reloadItems(),
          (this.stamps = []),
          this.stamp(this.options.stamp),
          n.extend(this.element.style, this.options.containerStyle);
        var t = this._getOption("resize");
        t && this.bindResize();
      }),
      (d.reloadItems = function () {
        this.items = this._itemize(this.element.children);
      }),
      (d._itemize = function (t) {
        for (
          var e = this._filterFindItemElements(t),
            i = this.constructor.Item,
            n = [],
            r = 0;
          r < e.length;
          r++
        ) {
          var o = e[r],
            s = new i(o, this);
          n.push(s);
        }
        return n;
      }),
      (d._filterFindItemElements = function (t) {
        return n.filterFindElements(t, this.options.itemSelector);
      }),
      (d.getItemElements = function () {
        return this.items.map(function (t) {
          return t.element;
        });
      }),
      (d.layout = function () {
        this._resetLayout(), this._manageStamps();
        var t = this._getOption("layoutInstant"),
          e = void 0 !== t ? t : !this._isLayoutInited;
        this.layoutItems(this.items, e), (this._isLayoutInited = !0);
      }),
      (d._init = d.layout),
      (d._resetLayout = function () {
        this.getSize();
      }),
      (d.getSize = function () {
        this.size = i(this.element);
      }),
      (d._getMeasurement = function (t, e) {
        var n,
          r = this.options[t];
        r
          ? ("string" == typeof r
              ? (n = this.element.querySelector(r))
              : r instanceof HTMLElement && (n = r),
            (this[t] = n ? i(n)[e] : r))
          : (this[t] = 0);
      }),
      (d.layoutItems = function (t, e) {
        (t = this._getItemsForLayout(t)),
          this._layoutItems(t, e),
          this._postLayout();
      }),
      (d._getItemsForLayout = function (t) {
        return t.filter(function (t) {
          return !t.isIgnored;
        });
      }),
      (d._layoutItems = function (t, e) {
        if ((this._emitCompleteOnItems("layout", t), t && t.length)) {
          var i = [];
          t.forEach(function (t) {
            var n = this._getItemLayoutPosition(t);
            (n.item = t), (n.isInstant = e || t.isLayoutInstant), i.push(n);
          }, this),
            this._processLayoutQueue(i);
        }
      }),
      (d._getItemLayoutPosition = function () {
        return {
          x: 0,
          y: 0,
        };
      }),
      (d._processLayoutQueue = function (t) {
        this.updateStagger(),
          t.forEach(function (t, e) {
            this._positionItem(t.item, t.x, t.y, t.isInstant, e);
          }, this);
      }),
      (d.updateStagger = function () {
        var t = this.options.stagger;
        return null === t || void 0 === t
          ? void (this.stagger = 0)
          : ((this.stagger = a(t)), this.stagger);
      }),
      (d._positionItem = function (t, e, i, n, r) {
        n ? t.goTo(e, i) : (t.stagger(r * this.stagger), t.moveTo(e, i));
      }),
      (d._postLayout = function () {
        this.resizeContainer();
      }),
      (d.resizeContainer = function () {
        var t = this._getOption("resizeContainer");
        if (t) {
          var e = this._getContainerSize();
          e &&
            (this._setContainerMeasure(e.width, !0),
            this._setContainerMeasure(e.height, !1));
        }
      }),
      (d._getContainerSize = u),
      (d._setContainerMeasure = function (t, e) {
        if (void 0 !== t) {
          var i = this.size;
          i.isBorderBox &&
            (t += e
              ? i.paddingLeft +
                i.paddingRight +
                i.borderLeftWidth +
                i.borderRightWidth
              : i.paddingBottom +
                i.paddingTop +
                i.borderTopWidth +
                i.borderBottomWidth),
            (t = Math.max(t, 0)),
            (this.element.style[e ? "width" : "height"] = t + "px");
        }
      }),
      (d._emitCompleteOnItems = function (t, e) {
        function i() {
          r.dispatchEvent(t + "Complete", null, [e]);
        }
        function n() {
          s++, s == o && i();
        }
        var r = this,
          o = e.length;
        if (!e || !o) return void i();
        var s = 0;
        e.forEach(function (e) {
          e.once(t, n);
        });
      }),
      (d.dispatchEvent = function (t, e, i) {
        var n = e ? [e].concat(i) : i;
        if ((this.emitEvent(t, n), h))
          if (((this.$element = this.$element || h(this.element)), e)) {
            var r = h.Event(e);
            (r.type = t), this.$element.trigger(r, i);
          } else this.$element.trigger(t, i);
      }),
      (d.ignore = function (t) {
        var e = this.getItem(t);
        e && (e.isIgnored = !0);
      }),
      (d.unignore = function (t) {
        var e = this.getItem(t);
        e && delete e.isIgnored;
      }),
      (d.stamp = function (t) {
        (t = this._find(t)),
          t &&
            ((this.stamps = this.stamps.concat(t)),
            t.forEach(this.ignore, this));
      }),
      (d.unstamp = function (t) {
        (t = this._find(t)),
          t &&
            t.forEach(function (t) {
              n.removeFrom(this.stamps, t), this.unignore(t);
            }, this);
      }),
      (d._find = function (t) {
        return t
          ? ("string" == typeof t && (t = this.element.querySelectorAll(t)),
            (t = n.makeArray(t)))
          : void 0;
      }),
      (d._manageStamps = function () {
        this.stamps &&
          this.stamps.length &&
          (this._getBoundingRect(),
          this.stamps.forEach(this._manageStamp, this));
      }),
      (d._getBoundingRect = function () {
        var t = this.element.getBoundingClientRect(),
          e = this.size;
        this._boundingRect = {
          left: t.left + e.paddingLeft + e.borderLeftWidth,
          top: t.top + e.paddingTop + e.borderTopWidth,
          right: t.right - (e.paddingRight + e.borderRightWidth),
          bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth),
        };
      }),
      (d._manageStamp = u),
      (d._getElementOffset = function (t) {
        var e = t.getBoundingClientRect(),
          n = this._boundingRect,
          r = i(t),
          o = {
            left: e.left - n.left - r.marginLeft,
            top: e.top - n.top - r.marginTop,
            right: n.right - e.right - r.marginRight,
            bottom: n.bottom - e.bottom - r.marginBottom,
          };
        return o;
      }),
      (d.handleEvent = n.handleEvent),
      (d.bindResize = function () {
        t.addEventListener("resize", this), (this.isResizeBound = !0);
      }),
      (d.unbindResize = function () {
        t.removeEventListener("resize", this), (this.isResizeBound = !1);
      }),
      (d.onresize = function () {
        this.resize();
      }),
      n.debounceMethod(o, "onresize", 100),
      (d.resize = function () {
        this.isResizeBound && this.needsResizeLayout() && this.layout();
      }),
      (d.needsResizeLayout = function () {
        var t = i(this.element),
          e = this.size && t;
        return e && t.innerWidth !== this.size.innerWidth;
      }),
      (d.addItems = function (t) {
        var e = this._itemize(t);
        return e.length && (this.items = this.items.concat(e)), e;
      }),
      (d.appended = function (t) {
        var e = this.addItems(t);
        e.length && (this.layoutItems(e, !0), this.reveal(e));
      }),
      (d.prepended = function (t) {
        var e = this._itemize(t);
        if (e.length) {
          var i = this.items.slice(0);
          (this.items = e.concat(i)),
            this._resetLayout(),
            this._manageStamps(),
            this.layoutItems(e, !0),
            this.reveal(e),
            this.layoutItems(i);
        }
      }),
      (d.reveal = function (t) {
        if ((this._emitCompleteOnItems("reveal", t), t && t.length)) {
          var e = this.updateStagger();
          t.forEach(function (t, i) {
            t.stagger(i * e), t.reveal();
          });
        }
      }),
      (d.hide = function (t) {
        if ((this._emitCompleteOnItems("hide", t), t && t.length)) {
          var e = this.updateStagger();
          t.forEach(function (t, i) {
            t.stagger(i * e), t.hide();
          });
        }
      }),
      (d.revealItemElements = function (t) {
        var e = this.getItems(t);
        this.reveal(e);
      }),
      (d.hideItemElements = function (t) {
        var e = this.getItems(t);
        this.hide(e);
      }),
      (d.getItem = function (t) {
        for (var e = 0; e < this.items.length; e++) {
          var i = this.items[e];
          if (i.element == t) return i;
        }
      }),
      (d.getItems = function (t) {
        t = n.makeArray(t);
        var e = [];
        return (
          t.forEach(function (t) {
            var i = this.getItem(t);
            i && e.push(i);
          }, this),
          e
        );
      }),
      (d.remove = function (t) {
        var e = this.getItems(t);
        this._emitCompleteOnItems("remove", e),
          e &&
            e.length &&
            e.forEach(function (t) {
              t.remove(), n.removeFrom(this.items, t);
            }, this);
      }),
      (d.destroy = function () {
        var t = this.element.style;
        (t.height = ""),
          (t.position = ""),
          (t.width = ""),
          this.items.forEach(function (t) {
            t.destroy();
          }),
          this.unbindResize();
        var e = this.element.outlayerGUID;
        delete f[e],
          delete this.element.outlayerGUID,
          h && h.removeData(this.element, this.constructor.namespace);
      }),
      (o.data = function (t) {
        t = n.getQueryElement(t);
        var e = t && t.outlayerGUID;
        return e && f[e];
      }),
      (o.create = function (t, e) {
        var i = s(o);
        return (
          (i.defaults = n.extend({}, o.defaults)),
          n.extend(i.defaults, e),
          (i.compatOptions = n.extend({}, o.compatOptions)),
          (i.namespace = t),
          (i.data = o.data),
          (i.Item = s(r)),
          n.htmlInit(i, t),
          h && h.bridget && h.bridget(t, i),
          i
        );
      });
    var p = {
      ms: 1,
      s: 1e3,
    };
    return (o.Item = r), o;
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define("isotope/js/item", ["outlayer/outlayer"], e)
      : "object" == typeof module && module.exports
      ? (module.exports = e(require("outlayer")))
      : ((t.Isotope = t.Isotope || {}), (t.Isotope.Item = e(t.Outlayer)));
  })(window, function (t) {
    "use strict";
    function e() {
      t.Item.apply(this, arguments);
    }
    var i = (e.prototype = Object.create(t.Item.prototype)),
      n = i._create;
    (i._create = function () {
      (this.id = this.layout.itemGUID++), n.call(this), (this.sortData = {});
    }),
      (i.updateSortData = function () {
        if (!this.isIgnored) {
          (this.sortData.id = this.id),
            (this.sortData["original-order"] = this.id),
            (this.sortData.random = Math.random());
          var t = this.layout.options.getSortData,
            e = this.layout._sorters;
          for (var i in t) {
            var n = e[i];
            this.sortData[i] = n(this.element, this);
          }
        }
      });
    var r = i.destroy;
    return (
      (i.destroy = function () {
        r.apply(this, arguments),
          this.css({
            display: "",
          });
      }),
      e
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(
          "isotope/js/layout-mode",
          ["get-size/get-size", "outlayer/outlayer"],
          e
        )
      : "object" == typeof module && module.exports
      ? (module.exports = e(require("get-size"), require("outlayer")))
      : ((t.Isotope = t.Isotope || {}),
        (t.Isotope.LayoutMode = e(t.getSize, t.Outlayer)));
  })(window, function (t, e) {
    "use strict";
    function i(t) {
      (this.isotope = t),
        t &&
          ((this.options = t.options[this.namespace]),
          (this.element = t.element),
          (this.items = t.filteredItems),
          (this.size = t.size));
    }
    var n = i.prototype,
      r = [
        "_resetLayout",
        "_getItemLayoutPosition",
        "_manageStamp",
        "_getContainerSize",
        "_getElementOffset",
        "needsResizeLayout",
        "_getOption",
      ];
    return (
      r.forEach(function (t) {
        n[t] = function () {
          return e.prototype[t].apply(this.isotope, arguments);
        };
      }),
      (n.needsVerticalResizeLayout = function () {
        var e = t(this.isotope.element),
          i = this.isotope.size && e;
        return i && e.innerHeight != this.isotope.size.innerHeight;
      }),
      (n._getMeasurement = function () {
        this.isotope._getMeasurement.apply(this, arguments);
      }),
      (n.getColumnWidth = function () {
        this.getSegmentSize("column", "Width");
      }),
      (n.getRowHeight = function () {
        this.getSegmentSize("row", "Height");
      }),
      (n.getSegmentSize = function (t, e) {
        var i = t + e,
          n = "outer" + e;
        if ((this._getMeasurement(i, n), !this[i])) {
          var r = this.getFirstItemSize();
          this[i] = (r && r[n]) || this.isotope.size["inner" + e];
        }
      }),
      (n.getFirstItemSize = function () {
        var e = this.isotope.filteredItems[0];
        return e && e.element && t(e.element);
      }),
      (n.layout = function () {
        this.isotope.layout.apply(this.isotope, arguments);
      }),
      (n.getSize = function () {
        this.isotope.getSize(), (this.size = this.isotope.size);
      }),
      (i.modes = {}),
      (i.create = function (t, e) {
        function r() {
          i.apply(this, arguments);
        }
        return (
          (r.prototype = Object.create(n)),
          (r.prototype.constructor = r),
          e && (r.options = e),
          (r.prototype.namespace = t),
          (i.modes[t] = r),
          r
        );
      }),
      i
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define("masonry/masonry", ["outlayer/outlayer", "get-size/get-size"], e)
      : "object" == typeof module && module.exports
      ? (module.exports = e(require("outlayer"), require("get-size")))
      : (t.Masonry = e(t.Outlayer, t.getSize));
  })(window, function (t, e) {
    var i = t.create("masonry");
    return (
      (i.compatOptions.fitWidth = "isFitWidth"),
      (i.prototype._resetLayout = function () {
        this.getSize(),
          this._getMeasurement("columnWidth", "outerWidth"),
          this._getMeasurement("gutter", "outerWidth"),
          this.measureColumns(),
          (this.colYs = []);
        for (var t = 0; t < this.cols; t++) this.colYs.push(0);
        this.maxY = 0;
      }),
      (i.prototype.measureColumns = function () {
        if ((this.getContainerWidth(), !this.columnWidth)) {
          var t = this.items[0],
            i = t && t.element;
          this.columnWidth = (i && e(i).outerWidth) || this.containerWidth;
        }
        var n = (this.columnWidth += this.gutter),
          r = this.containerWidth + this.gutter,
          o = r / n,
          s = n - (r % n),
          a = s && 1 > s ? "round" : "floor";
        (o = Math[a](o)), (this.cols = Math.max(o, 1));
      }),
      (i.prototype.getContainerWidth = function () {
        var t = this._getOption("fitWidth"),
          i = t ? this.element.parentNode : this.element,
          n = e(i);
        this.containerWidth = n && n.innerWidth;
      }),
      (i.prototype._getItemLayoutPosition = function (t) {
        t.getSize();
        var e = t.size.outerWidth % this.columnWidth,
          i = e && 1 > e ? "round" : "ceil",
          n = Math[i](t.size.outerWidth / this.columnWidth);
        n = Math.min(n, this.cols);
        for (
          var r = this._getColGroup(n),
            o = Math.min.apply(Math, r),
            s = r.indexOf(o),
            a = {
              x: this.columnWidth * s,
              y: o,
            },
            l = o + t.size.outerHeight,
            h = this.cols + 1 - r.length,
            u = 0;
          h > u;
          u++
        )
          this.colYs[s + u] = l;
        return a;
      }),
      (i.prototype._getColGroup = function (t) {
        if (2 > t) return this.colYs;
        for (var e = [], i = this.cols + 1 - t, n = 0; i > n; n++) {
          var r = this.colYs.slice(n, n + t);
          e[n] = Math.max.apply(Math, r);
        }
        return e;
      }),
      (i.prototype._manageStamp = function (t) {
        var i = e(t),
          n = this._getElementOffset(t),
          r = this._getOption("originLeft"),
          o = r ? n.left : n.right,
          s = o + i.outerWidth,
          a = Math.floor(o / this.columnWidth);
        a = Math.max(0, a);
        var l = Math.floor(s / this.columnWidth);
        (l -= s % this.columnWidth ? 0 : 1), (l = Math.min(this.cols - 1, l));
        for (
          var h = this._getOption("originTop"),
            u = (h ? n.top : n.bottom) + i.outerHeight,
            c = a;
          l >= c;
          c++
        )
          this.colYs[c] = Math.max(u, this.colYs[c]);
      }),
      (i.prototype._getContainerSize = function () {
        this.maxY = Math.max.apply(Math, this.colYs);
        var t = {
          height: this.maxY,
        };
        return (
          this._getOption("fitWidth") &&
            (t.width = this._getContainerFitWidth()),
          t
        );
      }),
      (i.prototype._getContainerFitWidth = function () {
        for (var t = 0, e = this.cols; --e && 0 === this.colYs[e]; ) t++;
        return (this.cols - t) * this.columnWidth - this.gutter;
      }),
      (i.prototype.needsResizeLayout = function () {
        var t = this.containerWidth;
        return this.getContainerWidth(), t != this.containerWidth;
      }),
      i
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(
          "isotope/js/layout-modes/masonry",
          ["../layout-mode", "masonry/masonry"],
          e
        )
      : "object" == typeof module && module.exports
      ? (module.exports = e(
          require("../layout-mode"),
          require("masonry-layout")
        ))
      : e(t.Isotope.LayoutMode, t.Masonry);
  })(window, function (t, e) {
    "use strict";
    var i = t.create("masonry"),
      n = i.prototype,
      r = {
        _getElementOffset: !0,
        layout: !0,
        _getMeasurement: !0,
      };
    for (var o in e.prototype) r[o] || (n[o] = e.prototype[o]);
    var s = n.measureColumns;
    n.measureColumns = function () {
      (this.items = this.isotope.filteredItems), s.call(this);
    };
    var a = n._getOption;
    return (
      (n._getOption = function (t) {
        return "fitWidth" == t
          ? void 0 !== this.options.isFitWidth
            ? this.options.isFitWidth
            : this.options.fitWidth
          : a.apply(this.isotope, arguments);
      }),
      i
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define("isotope/js/layout-modes/fit-rows", ["../layout-mode"], e)
      : "object" == typeof exports
      ? (module.exports = e(require("../layout-mode")))
      : e(t.Isotope.LayoutMode);
  })(window, function (t) {
    "use strict";
    var e = t.create("fitRows"),
      i = e.prototype;
    return (
      (i._resetLayout = function () {
        (this.x = 0),
          (this.y = 0),
          (this.maxY = 0),
          this._getMeasurement("gutter", "outerWidth");
      }),
      (i._getItemLayoutPosition = function (t) {
        t.getSize();
        var e = t.size.outerWidth + this.gutter,
          i = this.isotope.size.innerWidth + this.gutter;
        0 !== this.x && e + this.x > i && ((this.x = 0), (this.y = this.maxY));
        var n = {
          x: this.x,
          y: this.y,
        };
        return (
          (this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight)),
          (this.x += e),
          n
        );
      }),
      (i._getContainerSize = function () {
        return {
          height: this.maxY,
        };
      }),
      e
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define("isotope/js/layout-modes/vertical", ["../layout-mode"], e)
      : "object" == typeof module && module.exports
      ? (module.exports = e(require("../layout-mode")))
      : e(t.Isotope.LayoutMode);
  })(window, function (t) {
    "use strict";
    var e = t.create("vertical", {
        horizontalAlignment: 0,
      }),
      i = e.prototype;
    return (
      (i._resetLayout = function () {
        this.y = 0;
      }),
      (i._getItemLayoutPosition = function (t) {
        t.getSize();
        var e =
            (this.isotope.size.innerWidth - t.size.outerWidth) *
            this.options.horizontalAlignment,
          i = this.y;
        return (
          (this.y += t.size.outerHeight),
          {
            x: e,
            y: i,
          }
        );
      }),
      (i._getContainerSize = function () {
        return {
          height: this.y,
        };
      }),
      e
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(
          [
            "outlayer/outlayer",
            "get-size/get-size",
            "desandro-matches-selector/matches-selector",
            "fizzy-ui-utils/utils",
            "isotope/js/item",
            "isotope/js/layout-mode",
            "isotope/js/layout-modes/masonry",
            "isotope/js/layout-modes/fit-rows",
            "isotope/js/layout-modes/vertical",
          ],
          function (i, n, r, o, s, a) {
            return e(t, i, n, r, o, s, a);
          }
        )
      : "object" == typeof module && module.exports
      ? (module.exports = e(
          t,
          require("outlayer"),
          require("get-size"),
          require("desandro-matches-selector"),
          require("fizzy-ui-utils"),
          require("isotope/js/item"),
          require("isotope/js/layout-mode"),
          require("isotope/js/layout-modes/masonry"),
          require("isotope/js/layout-modes/fit-rows"),
          require("isotope/js/layout-modes/vertical")
        ))
      : (t.Isotope = e(
          t,
          t.Outlayer,
          t.getSize,
          t.matchesSelector,
          t.fizzyUIUtils,
          t.Isotope.Item,
          t.Isotope.LayoutMode
        ));
  })(window, function (t, e, i, n, r, o, s) {
    function a(t, e) {
      return function (i, n) {
        for (var r = 0; r < t.length; r++) {
          var o = t[r],
            s = i.sortData[o],
            a = n.sortData[o];
          if (s > a || a > s) {
            var l = void 0 !== e[o] ? e[o] : e,
              h = l ? 1 : -1;
            return (s > a ? 1 : -1) * h;
          }
        }
        return 0;
      };
    }
    var l = t.jQuery,
      h = String.prototype.trim
        ? function (t) {
            return t.trim();
          }
        : function (t) {
            return t.replace(/^\s+|\s+$/g, "");
          },
      u = e.create("isotope", {
        layoutMode: "masonry",
        isJQueryFiltering: !0,
        sortAscending: !0,
      });
    (u.Item = o), (u.LayoutMode = s);
    var c = u.prototype;
    (c._create = function () {
      (this.itemGUID = 0),
        (this._sorters = {}),
        this._getSorters(),
        e.prototype._create.call(this),
        (this.modes = {}),
        (this.filteredItems = this.items),
        (this.sortHistory = ["original-order"]);
      for (var t in s.modes) this._initLayoutMode(t);
    }),
      (c.reloadItems = function () {
        (this.itemGUID = 0), e.prototype.reloadItems.call(this);
      }),
      (c._itemize = function () {
        for (
          var t = e.prototype._itemize.apply(this, arguments), i = 0;
          i < t.length;
          i++
        ) {
          var n = t[i];
          n.id = this.itemGUID++;
        }
        return this._updateItemsSortData(t), t;
      }),
      (c._initLayoutMode = function (t) {
        var e = s.modes[t],
          i = this.options[t] || {};
        (this.options[t] = e.options ? r.extend(e.options, i) : i),
          (this.modes[t] = new e(this));
      }),
      (c.layout = function () {
        return !this._isLayoutInited && this._getOption("initLayout")
          ? void this.arrange()
          : void this._layout();
      }),
      (c._layout = function () {
        var t = this._getIsInstant();
        this._resetLayout(),
          this._manageStamps(),
          this.layoutItems(this.filteredItems, t),
          (this._isLayoutInited = !0);
      }),
      (c.arrange = function (t) {
        this.option(t), this._getIsInstant();
        var e = this._filter(this.items);
        (this.filteredItems = e.matches),
          this._bindArrangeComplete(),
          this._isInstant
            ? this._noTransition(this._hideReveal, [e])
            : this._hideReveal(e),
          this._sort(),
          this._layout();
      }),
      (c._init = c.arrange),
      (c._hideReveal = function (t) {
        this.reveal(t.needReveal), this.hide(t.needHide);
      }),
      (c._getIsInstant = function () {
        var t = this._getOption("layoutInstant"),
          e = void 0 !== t ? t : !this._isLayoutInited;
        return (this._isInstant = e), e;
      }),
      (c._bindArrangeComplete = function () {
        function t() {
          e &&
            i &&
            n &&
            r.dispatchEvent("arrangeComplete", null, [r.filteredItems]);
        }
        var e,
          i,
          n,
          r = this;
        this.once("layoutComplete", function () {
          (e = !0), t();
        }),
          this.once("hideComplete", function () {
            (i = !0), t();
          }),
          this.once("revealComplete", function () {
            (n = !0), t();
          });
      }),
      (c._filter = function (t) {
        var e = this.options.filter;
        e = e || "*";
        for (
          var i = [], n = [], r = [], o = this._getFilterTest(e), s = 0;
          s < t.length;
          s++
        ) {
          var a = t[s];
          if (!a.isIgnored) {
            var l = o(a);
            l && i.push(a),
              l && a.isHidden ? n.push(a) : l || a.isHidden || r.push(a);
          }
        }
        return {
          matches: i,
          needReveal: n,
          needHide: r,
        };
      }),
      (c._getFilterTest = function (t) {
        return l && this.options.isJQueryFiltering
          ? function (e) {
              return l(e.element).is(t);
            }
          : "function" == typeof t
          ? function (e) {
              return t(e.element);
            }
          : function (e) {
              return n(e.element, t);
            };
      }),
      (c.updateSortData = function (t) {
        var e;
        t ? ((t = r.makeArray(t)), (e = this.getItems(t))) : (e = this.items),
          this._getSorters(),
          this._updateItemsSortData(e);
      }),
      (c._getSorters = function () {
        var t = this.options.getSortData;
        for (var e in t) {
          var i = t[e];
          this._sorters[e] = f(i);
        }
      }),
      (c._updateItemsSortData = function (t) {
        for (var e = t && t.length, i = 0; e && e > i; i++) {
          var n = t[i];
          n.updateSortData();
        }
      });
    var f = (function () {
      function t(t) {
        if ("string" != typeof t) return t;
        var i = h(t).split(" "),
          n = i[0],
          r = n.match(/^\[(.+)\]$/),
          o = r && r[1],
          s = e(o, n),
          a = u.sortDataParsers[i[1]];
        return (t = a
          ? function (t) {
              return t && a(s(t));
            }
          : function (t) {
              return t && s(t);
            });
      }
      function e(t, e) {
        return t
          ? function (e) {
              return e.getAttribute(t);
            }
          : function (t) {
              var i = t.querySelector(e);
              return i && i.textContent;
            };
      }
      return t;
    })();
    (u.sortDataParsers = {
      parseInt: function (t) {
        return parseInt(t, 10);
      },
      parseFloat: function (t) {
        return parseFloat(t);
      },
    }),
      (c._sort = function () {
        var t = this.options.sortBy;
        if (t) {
          var e = [].concat.apply(t, this.sortHistory),
            i = a(e, this.options.sortAscending);
          this.filteredItems.sort(i),
            t != this.sortHistory[0] && this.sortHistory.unshift(t);
        }
      }),
      (c._mode = function () {
        var t = this.options.layoutMode,
          e = this.modes[t];
        if (!e) throw new Error("No layout mode: " + t);
        return (e.options = this.options[t]), e;
      }),
      (c._resetLayout = function () {
        e.prototype._resetLayout.call(this), this._mode()._resetLayout();
      }),
      (c._getItemLayoutPosition = function (t) {
        return this._mode()._getItemLayoutPosition(t);
      }),
      (c._manageStamp = function (t) {
        this._mode()._manageStamp(t);
      }),
      (c._getContainerSize = function () {
        return this._mode()._getContainerSize();
      }),
      (c.needsResizeLayout = function () {
        return this._mode().needsResizeLayout();
      }),
      (c.appended = function (t) {
        var e = this.addItems(t);
        if (e.length) {
          var i = this._filterRevealAdded(e);
          this.filteredItems = this.filteredItems.concat(i);
        }
      }),
      (c.prepended = function (t) {
        var e = this._itemize(t);
        if (e.length) {
          this._resetLayout(), this._manageStamps();
          var i = this._filterRevealAdded(e);
          this.layoutItems(this.filteredItems),
            (this.filteredItems = i.concat(this.filteredItems)),
            (this.items = e.concat(this.items));
        }
      }),
      (c._filterRevealAdded = function (t) {
        var e = this._filter(t);
        return (
          this.hide(e.needHide),
          this.reveal(e.matches),
          this.layoutItems(e.matches, !0),
          e.matches
        );
      }),
      (c.insert = function (t) {
        var e = this.addItems(t);
        if (e.length) {
          var i,
            n,
            r = e.length;
          for (i = 0; r > i; i++)
            (n = e[i]), this.element.appendChild(n.element);
          var o = this._filter(e).matches;
          for (i = 0; r > i; i++) e[i].isLayoutInstant = !0;
          for (this.arrange(), i = 0; r > i; i++) delete e[i].isLayoutInstant;
          this.reveal(o);
        }
      });
    var d = c.remove;
    return (
      (c.remove = function (t) {
        t = r.makeArray(t);
        var e = this.getItems(t);
        d.call(this, t);
        for (var i = e && e.length, n = 0; i && i > n; n++) {
          var o = e[n];
          r.removeFrom(this.filteredItems, o);
        }
      }),
      (c.shuffle = function () {
        for (var t = 0; t < this.items.length; t++) {
          var e = this.items[t];
          e.sortData.random = Math.random();
        }
        (this.options.sortBy = "random"), this._sort(), this._layout();
      }),
      (c._noTransition = function (t, e) {
        var i = this.options.transitionDuration;
        this.options.transitionDuration = 0;
        var n = t.apply(this, e);
        return (this.options.transitionDuration = i), n;
      }),
      (c.getFilteredItemElements = function () {
        return this.filteredItems.map(function (t) {
          return t.element;
        });
      }),
      u
    );
  }),
  !(function (t, e, i, n) {
    "use strict";
    function r(t, e, i) {
      return setTimeout(h(t, i), e);
    }
    function o(t, e, i) {
      return !!Array.isArray(t) && (s(t, i[e], i), !0);
    }
    function s(t, e, i) {
      var r;
      if (t)
        if (t.forEach) t.forEach(e, i);
        else if (t.length !== n)
          for (r = 0; r < t.length; ) e.call(i, t[r], r, t), r++;
        else for (r in t) t.hasOwnProperty(r) && e.call(i, t[r], r, t);
    }
    function a(e, i, n) {
      var r = "DEPRECATED METHOD: " + i + "\n" + n + " AT \n";
      return function () {
        var i = new Error("get-stack-trace"),
          n =
            i && i.stack
              ? i.stack
                  .replace(/^[^\(]+?[\n$]/gm, "")
                  .replace(/^\s+at\s+/gm, "")
                  .replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@")
              : "Unknown Stack Trace",
          o = t.console && (t.console.warn || t.console.log);
        return o && o.call(t.console, r, n), e.apply(this, arguments);
      };
    }
    function l(t, e, i) {
      var n,
        r = e.prototype;
      (n = t.prototype = Object.create(r)),
        (n.constructor = t),
        (n._super = r),
        i && ct(n, i);
    }
    function h(t, e) {
      return function () {
        return t.apply(e, arguments);
      };
    }
    function u(t, e) {
      return typeof t == pt ? t.apply(e ? e[0] || n : n, e) : t;
    }
    function c(t, e) {
      return t === n ? e : t;
    }
    function f(t, e, i) {
      s(g(e), function (e) {
        t.addEventListener(e, i, !1);
      });
    }
    function d(t, e, i) {
      s(g(e), function (e) {
        t.removeEventListener(e, i, !1);
      });
    }
    function p(t, e) {
      for (; t; ) {
        if (t == e) return !0;
        t = t.parentNode;
      }
      return !1;
    }
    function m(t, e) {
      return t.indexOf(e) > -1;
    }
    function g(t) {
      return t.trim().split(/\s+/g);
    }
    function v(t, e, i) {
      if (t.indexOf && !i) return t.indexOf(e);
      for (var n = 0; n < t.length; ) {
        if ((i && t[n][i] == e) || (!i && t[n] === e)) return n;
        n++;
      }
      return -1;
    }
    function y(t) {
      return Array.prototype.slice.call(t, 0);
    }
    function _(t, e, i) {
      for (var n = [], r = [], o = 0; o < t.length; ) {
        var s = e ? t[o][e] : t[o];
        v(r, s) < 0 && n.push(t[o]), (r[o] = s), o++;
      }
      return (
        i &&
          (n = e
            ? n.sort(function (t, i) {
                return t[e] > i[e];
              })
            : n.sort()),
        n
      );
    }
    function b(t, e) {
      for (
        var i, r, o = e[0].toUpperCase() + e.slice(1), s = 0;
        s < ft.length;

      ) {
        if (((i = ft[s]), (r = i ? i + o : e), r in t)) return r;
        s++;
      }
      return n;
    }
    function T() {
      return bt++;
    }
    function x(e) {
      var i = e.ownerDocument || e;
      return i.defaultView || i.parentWindow || t;
    }
    function w(t, e) {
      var i = this;
      (this.manager = t),
        (this.callback = e),
        (this.element = t.element),
        (this.target = t.options.inputTarget),
        (this.domHandler = function (e) {
          u(t.options.enable, [t]) && i.handler(e);
        }),
        this.init();
    }
    function E(t) {
      var e,
        i = t.options.inputClass;
      return new (e = i ? i : wt ? j : Et ? H : xt ? q : z)(t, C);
    }
    function C(t, e, i) {
      var n = i.pointers.length,
        r = i.changedPointers.length,
        o = e & Pt && n - r === 0,
        s = e & (Ot | Lt) && n - r === 0;
      (i.isFirst = !!o),
        (i.isFinal = !!s),
        o && (t.session = {}),
        (i.eventType = e),
        S(t, i),
        t.emit("hammer.input", i),
        t.recognize(i),
        (t.session.prevInput = i);
    }
    function S(t, e) {
      var i = t.session,
        n = e.pointers,
        r = n.length;
      i.firstInput || (i.firstInput = D(e)),
        r > 1 && !i.firstMultiple
          ? (i.firstMultiple = D(e))
          : 1 === r && (i.firstMultiple = !1);
      var o = i.firstInput,
        s = i.firstMultiple,
        a = s ? s.center : o.center,
        l = (e.center = P(n));
      (e.timeStamp = vt()),
        (e.deltaTime = e.timeStamp - o.timeStamp),
        (e.angle = N(a, l)),
        (e.distance = L(a, l)),
        A(i, e),
        (e.offsetDirection = O(e.deltaX, e.deltaY));
      var h = k(e.deltaTime, e.deltaX, e.deltaY);
      (e.overallVelocityX = h.x),
        (e.overallVelocityY = h.y),
        (e.overallVelocity = gt(h.x) > gt(h.y) ? h.x : h.y),
        (e.scale = s ? M(s.pointers, n) : 1),
        (e.rotation = s ? R(s.pointers, n) : 0),
        (e.maxPointers = i.prevInput
          ? e.pointers.length > i.prevInput.maxPointers
            ? e.pointers.length
            : i.prevInput.maxPointers
          : e.pointers.length),
        I(i, e);
      var u = t.element;
      p(e.srcEvent.target, u) && (u = e.srcEvent.target), (e.target = u);
    }
    function A(t, e) {
      var i = e.center,
        n = t.offsetDelta || {},
        r = t.prevDelta || {},
        o = t.prevInput || {};
      (e.eventType !== Pt && o.eventType !== Ot) ||
        ((r = t.prevDelta =
          {
            x: o.deltaX || 0,
            y: o.deltaY || 0,
          }),
        (n = t.offsetDelta =
          {
            x: i.x,
            y: i.y,
          })),
        (e.deltaX = r.x + (i.x - n.x)),
        (e.deltaY = r.y + (i.y - n.y));
    }
    function I(t, e) {
      var i,
        r,
        o,
        s,
        a = t.lastInterval || e,
        l = e.timeStamp - a.timeStamp;
      if (e.eventType != Lt && (l > Dt || a.velocity === n)) {
        var h = e.deltaX - a.deltaX,
          u = e.deltaY - a.deltaY,
          c = k(l, h, u);
        (r = c.x),
          (o = c.y),
          (i = gt(c.x) > gt(c.y) ? c.x : c.y),
          (s = O(h, u)),
          (t.lastInterval = e);
      } else
        (i = a.velocity),
          (r = a.velocityX),
          (o = a.velocityY),
          (s = a.direction);
      (e.velocity = i), (e.velocityX = r), (e.velocityY = o), (e.direction = s);
    }
    function D(t) {
      for (var e = [], i = 0; i < t.pointers.length; )
        (e[i] = {
          clientX: mt(t.pointers[i].clientX),
          clientY: mt(t.pointers[i].clientY),
        }),
          i++;
      return {
        timeStamp: vt(),
        pointers: e,
        center: P(e),
        deltaX: t.deltaX,
        deltaY: t.deltaY,
      };
    }
    function P(t) {
      var e = t.length;
      if (1 === e)
        return {
          x: mt(t[0].clientX),
          y: mt(t[0].clientY),
        };
      for (var i = 0, n = 0, r = 0; e > r; )
        (i += t[r].clientX), (n += t[r].clientY), r++;
      return {
        x: mt(i / e),
        y: mt(n / e),
      };
    }
    function k(t, e, i) {
      return {
        x: e / t || 0,
        y: i / t || 0,
      };
    }
    function O(t, e) {
      return t === e
        ? Nt
        : gt(t) >= gt(e)
        ? 0 > t
          ? Rt
          : Mt
        : 0 > e
        ? zt
        : jt;
    }
    function L(t, e, i) {
      i || (i = Bt);
      var n = e[i[0]] - t[i[0]],
        r = e[i[1]] - t[i[1]];
      return Math.sqrt(n * n + r * r);
    }
    function N(t, e, i) {
      i || (i = Bt);
      var n = e[i[0]] - t[i[0]],
        r = e[i[1]] - t[i[1]];
      return (180 * Math.atan2(r, n)) / Math.PI;
    }
    function R(t, e) {
      return N(e[1], e[0], qt) + N(t[1], t[0], qt);
    }
    function M(t, e) {
      return L(e[0], e[1], qt) / L(t[0], t[1], qt);
    }
    function z() {
      (this.evEl = Ut),
        (this.evWin = $t),
        (this.pressed = !1),
        w.apply(this, arguments);
    }
    function j() {
      (this.evEl = Gt),
        (this.evWin = Qt),
        w.apply(this, arguments),
        (this.store = this.manager.session.pointerEvents = []);
    }
    function F() {
      (this.evTarget = Zt),
        (this.evWin = Jt),
        (this.started = !1),
        w.apply(this, arguments);
    }
    function W(t, e) {
      var i = y(t.touches),
        n = y(t.changedTouches);
      return e & (Ot | Lt) && (i = _(i.concat(n), "identifier", !0)), [i, n];
    }
    function H() {
      (this.evTarget = ee), (this.targetIds = {}), w.apply(this, arguments);
    }
    function B(t, e) {
      var i = y(t.touches),
        n = this.targetIds;
      if (e & (Pt | kt) && 1 === i.length)
        return (n[i[0].identifier] = !0), [i, i];
      var r,
        o,
        s = y(t.changedTouches),
        a = [],
        l = this.target;
      if (
        ((o = i.filter(function (t) {
          return p(t.target, l);
        })),
        e === Pt)
      )
        for (r = 0; r < o.length; ) (n[o[r].identifier] = !0), r++;
      for (r = 0; r < s.length; )
        n[s[r].identifier] && a.push(s[r]),
          e & (Ot | Lt) && delete n[s[r].identifier],
          r++;
      return a.length ? [_(o.concat(a), "identifier", !0), a] : void 0;
    }
    function q() {
      w.apply(this, arguments);
      var t = h(this.handler, this);
      (this.touch = new H(this.manager, t)),
        (this.mouse = new z(this.manager, t)),
        (this.primaryTouch = null),
        (this.lastTouches = []);
    }
    function V(t, e) {
      t & Pt
        ? ((this.primaryTouch = e.changedPointers[0].identifier),
          U.call(this, e))
        : t & (Ot | Lt) && U.call(this, e);
    }
    function U(t) {
      var e = t.changedPointers[0];
      if (e.identifier === this.primaryTouch) {
        var i = {
          x: e.clientX,
          y: e.clientY,
        };
        this.lastTouches.push(i);
        var n = this.lastTouches,
          r = function () {
            var t = n.indexOf(i);
            t > -1 && n.splice(t, 1);
          };
        setTimeout(r, ie);
      }
    }
    function $(t) {
      for (
        var e = t.srcEvent.clientX, i = t.srcEvent.clientY, n = 0;
        n < this.lastTouches.length;
        n++
      ) {
        var r = this.lastTouches[n],
          o = Math.abs(e - r.x),
          s = Math.abs(i - r.y);
        if (ne >= o && ne >= s) return !0;
      }
      return !1;
    }
    function Y(t, e) {
      (this.manager = t), this.set(e);
    }
    function X(t) {
      if (m(t, he)) return he;
      var e = m(t, ue),
        i = m(t, ce);
      return e && i ? he : e || i ? (e ? ue : ce) : m(t, le) ? le : ae;
    }
    function G() {
      if (!oe) return !1;
      var e = {},
        i = t.CSS && t.CSS.supports;
      return (
        [
          "auto",
          "manipulation",
          "pan-y",
          "pan-x",
          "pan-x pan-y",
          "none",
        ].forEach(function (n) {
          e[n] = !i || t.CSS.supports("touch-action", n);
        }),
        e
      );
    }
    function Q(t) {
      (this.options = ct({}, this.defaults, t || {})),
        (this.id = T()),
        (this.manager = null),
        (this.options.enable = c(this.options.enable, !0)),
        (this.state = de),
        (this.simultaneous = {}),
        (this.requireFail = []);
    }
    function K(t) {
      return t & ye
        ? "cancel"
        : t & ge
        ? "end"
        : t & me
        ? "move"
        : t & pe
        ? "start"
        : "";
    }
    function Z(t) {
      return t == jt
        ? "down"
        : t == zt
        ? "up"
        : t == Rt
        ? "left"
        : t == Mt
        ? "right"
        : "";
    }
    function J(t, e) {
      var i = e.manager;
      return i ? i.get(t) : t;
    }
    function tt() {
      Q.apply(this, arguments);
    }
    function et() {
      tt.apply(this, arguments), (this.pX = null), (this.pY = null);
    }
    function it() {
      tt.apply(this, arguments);
    }
    function nt() {
      Q.apply(this, arguments), (this._timer = null), (this._input = null);
    }
    function rt() {
      tt.apply(this, arguments);
    }
    function ot() {
      tt.apply(this, arguments);
    }
    function st() {
      Q.apply(this, arguments),
        (this.pTime = !1),
        (this.pCenter = !1),
        (this._timer = null),
        (this._input = null),
        (this.count = 0);
    }
    function at(t, e) {
      return (
        (e = e || {}),
        (e.recognizers = c(e.recognizers, at.defaults.preset)),
        new lt(t, e)
      );
    }
    function lt(t, e) {
      (this.options = ct({}, at.defaults, e || {})),
        (this.options.inputTarget = this.options.inputTarget || t),
        (this.handlers = {}),
        (this.session = {}),
        (this.recognizers = []),
        (this.oldCssProps = {}),
        (this.element = t),
        (this.input = E(this)),
        (this.touchAction = new Y(this, this.options.touchAction)),
        ht(this, !0),
        s(
          this.options.recognizers,
          function (t) {
            var e = this.add(new t[0](t[1]));
            t[2] && e.recognizeWith(t[2]), t[3] && e.requireFailure(t[3]);
          },
          this
        );
    }
    function ht(t, e) {
      var i = t.element;
      if (i.style) {
        var n;
        s(t.options.cssProps, function (r, o) {
          (n = b(i.style, o)),
            e
              ? ((t.oldCssProps[n] = i.style[n]), (i.style[n] = r))
              : (i.style[n] = t.oldCssProps[n] || "");
        }),
          e || (t.oldCssProps = {});
      }
    }
    function ut(t, i) {
      var n = e.createEvent("Event");
      n.initEvent(t, !0, !0), (n.gesture = i), i.target.dispatchEvent(n);
    }
    var ct,
      ft = ["", "webkit", "Moz", "MS", "ms", "o"],
      dt = e.createElement("div"),
      pt = "function",
      mt = Math.round,
      gt = Math.abs,
      vt = Date.now;
    ct =
      "function" != typeof Object.assign
        ? function (t) {
            if (t === n || null === t)
              throw new TypeError("Cannot convert undefined or null to object");
            for (var e = Object(t), i = 1; i < arguments.length; i++) {
              var r = arguments[i];
              if (r !== n && null !== r)
                for (var o in r) r.hasOwnProperty(o) && (e[o] = r[o]);
            }
            return e;
          }
        : Object.assign;
    var yt = a(
        function (t, e, i) {
          for (var r = Object.keys(e), o = 0; o < r.length; )
            (!i || (i && t[r[o]] === n)) && (t[r[o]] = e[r[o]]), o++;
          return t;
        },
        "extend",
        "Use `assign`."
      ),
      _t = a(
        function (t, e) {
          return yt(t, e, !0);
        },
        "merge",
        "Use `assign`."
      ),
      bt = 1,
      Tt = /mobile|tablet|ip(ad|hone|od)|android/i,
      xt = "ontouchstart" in t,
      wt = b(t, "PointerEvent") !== n,
      Et = xt && Tt.test(navigator.userAgent),
      Ct = "touch",
      St = "pen",
      At = "mouse",
      It = "kinect",
      Dt = 25,
      Pt = 1,
      kt = 2,
      Ot = 4,
      Lt = 8,
      Nt = 1,
      Rt = 2,
      Mt = 4,
      zt = 8,
      jt = 16,
      Ft = Rt | Mt,
      Wt = zt | jt,
      Ht = Ft | Wt,
      Bt = ["x", "y"],
      qt = ["clientX", "clientY"];
    w.prototype = {
      handler: function () {},
      init: function () {
        this.evEl && f(this.element, this.evEl, this.domHandler),
          this.evTarget && f(this.target, this.evTarget, this.domHandler),
          this.evWin && f(x(this.element), this.evWin, this.domHandler);
      },
      destroy: function () {
        this.evEl && d(this.element, this.evEl, this.domHandler),
          this.evTarget && d(this.target, this.evTarget, this.domHandler),
          this.evWin && d(x(this.element), this.evWin, this.domHandler);
      },
    };
    var Vt = {
        mousedown: Pt,
        mousemove: kt,
        mouseup: Ot,
      },
      Ut = "mousedown",
      $t = "mousemove mouseup";
    l(z, w, {
      handler: function (t) {
        var e = Vt[t.type];
        e & Pt && 0 === t.button && (this.pressed = !0),
          e & kt && 1 !== t.which && (e = Ot),
          this.pressed &&
            (e & Ot && (this.pressed = !1),
            this.callback(this.manager, e, {
              pointers: [t],
              changedPointers: [t],
              pointerType: At,
              srcEvent: t,
            }));
      },
    });
    var Yt = {
        pointerdown: Pt,
        pointermove: kt,
        pointerup: Ot,
        pointercancel: Lt,
        pointerout: Lt,
      },
      Xt = {
        2: Ct,
        3: St,
        4: At,
        5: It,
      },
      Gt = "pointerdown",
      Qt = "pointermove pointerup pointercancel";
    t.MSPointerEvent &&
      !t.PointerEvent &&
      ((Gt = "MSPointerDown"),
      (Qt = "MSPointerMove MSPointerUp MSPointerCancel")),
      l(j, w, {
        handler: function (t) {
          var e = this.store,
            i = !1,
            n = t.type.toLowerCase().replace("ms", ""),
            r = Yt[n],
            o = Xt[t.pointerType] || t.pointerType,
            s = o == Ct,
            a = v(e, t.pointerId, "pointerId");
          r & Pt && (0 === t.button || s)
            ? 0 > a && (e.push(t), (a = e.length - 1))
            : r & (Ot | Lt) && (i = !0),
            0 > a ||
              ((e[a] = t),
              this.callback(this.manager, r, {
                pointers: e,
                changedPointers: [t],
                pointerType: o,
                srcEvent: t,
              }),
              i && e.splice(a, 1));
        },
      });
    var Kt = {
        touchstart: Pt,
        touchmove: kt,
        touchend: Ot,
        touchcancel: Lt,
      },
      Zt = "touchstart",
      Jt = "touchstart touchmove touchend touchcancel";
    l(F, w, {
      handler: function (t) {
        var e = Kt[t.type];
        if ((e === Pt && (this.started = !0), this.started)) {
          var i = W.call(this, t, e);
          e & (Ot | Lt) &&
            i[0].length - i[1].length === 0 &&
            (this.started = !1),
            this.callback(this.manager, e, {
              pointers: i[0],
              changedPointers: i[1],
              pointerType: Ct,
              srcEvent: t,
            });
        }
      },
    });
    var te = {
        touchstart: Pt,
        touchmove: kt,
        touchend: Ot,
        touchcancel: Lt,
      },
      ee = "touchstart touchmove touchend touchcancel";
    l(H, w, {
      handler: function (t) {
        var e = te[t.type],
          i = B.call(this, t, e);
        i &&
          this.callback(this.manager, e, {
            pointers: i[0],
            changedPointers: i[1],
            pointerType: Ct,
            srcEvent: t,
          });
      },
    });
    var ie = 2500,
      ne = 25;
    l(q, w, {
      handler: function (t, e, i) {
        var n = i.pointerType == Ct,
          r = i.pointerType == At;
        if (
          !(r && i.sourceCapabilities && i.sourceCapabilities.firesTouchEvents)
        ) {
          if (n) V.call(this, e, i);
          else if (r && $.call(this, i)) return;
          this.callback(t, e, i);
        }
      },
      destroy: function () {
        this.touch.destroy(), this.mouse.destroy();
      },
    });
    var re = b(dt.style, "touchAction"),
      oe = re !== n,
      se = "compute",
      ae = "auto",
      le = "manipulation",
      he = "none",
      ue = "pan-x",
      ce = "pan-y",
      fe = G();
    Y.prototype = {
      set: function (t) {
        t == se && (t = this.compute()),
          oe &&
            this.manager.element.style &&
            fe[t] &&
            (this.manager.element.style[re] = t),
          (this.actions = t.toLowerCase().trim());
      },
      update: function () {
        this.set(this.manager.options.touchAction);
      },
      compute: function () {
        var t = [];
        return (
          s(this.manager.recognizers, function (e) {
            u(e.options.enable, [e]) && (t = t.concat(e.getTouchAction()));
          }),
          X(t.join(" "))
        );
      },
      preventDefaults: function (t) {
        var e = t.srcEvent,
          i = t.offsetDirection;
        if (this.manager.session.prevented) return void e.preventDefault();
        var n = this.actions,
          r = m(n, he) && !fe[he],
          o = m(n, ce) && !fe[ce],
          s = m(n, ue) && !fe[ue];
        if (r) {
          var a = 1 === t.pointers.length,
            l = t.distance < 2,
            h = t.deltaTime < 250;
          if (a && l && h) return;
        }
        return s && o
          ? void 0
          : r || (o && i & Ft) || (s && i & Wt)
          ? this.preventSrc(e)
          : void 0;
      },
      preventSrc: function (t) {
        (this.manager.session.prevented = !0), t.preventDefault();
      },
    };
    var de = 1,
      pe = 2,
      me = 4,
      ge = 8,
      ve = ge,
      ye = 16,
      _e = 32;
    (Q.prototype = {
      defaults: {},
      set: function (t) {
        return (
          ct(this.options, t),
          this.manager && this.manager.touchAction.update(),
          this
        );
      },
      recognizeWith: function (t) {
        if (o(t, "recognizeWith", this)) return this;
        var e = this.simultaneous;
        return (
          (t = J(t, this)),
          e[t.id] || ((e[t.id] = t), t.recognizeWith(this)),
          this
        );
      },
      dropRecognizeWith: function (t) {
        return o(t, "dropRecognizeWith", this)
          ? this
          : ((t = J(t, this)), delete this.simultaneous[t.id], this);
      },
      requireFailure: function (t) {
        if (o(t, "requireFailure", this)) return this;
        var e = this.requireFail;
        return (
          (t = J(t, this)),
          -1 === v(e, t) && (e.push(t), t.requireFailure(this)),
          this
        );
      },
      dropRequireFailure: function (t) {
        if (o(t, "dropRequireFailure", this)) return this;
        t = J(t, this);
        var e = v(this.requireFail, t);
        return e > -1 && this.requireFail.splice(e, 1), this;
      },
      hasRequireFailures: function () {
        return this.requireFail.length > 0;
      },
      canRecognizeWith: function (t) {
        return !!this.simultaneous[t.id];
      },
      emit: function (t) {
        function e(e) {
          i.manager.emit(e, t);
        }
        var i = this,
          n = this.state;
        ge > n && e(i.options.event + K(n)),
          e(i.options.event),
          t.additionalEvent && e(t.additionalEvent),
          n >= ge && e(i.options.event + K(n));
      },
      tryEmit: function (t) {
        return this.canEmit() ? this.emit(t) : void (this.state = _e);
      },
      canEmit: function () {
        for (var t = 0; t < this.requireFail.length; ) {
          if (!(this.requireFail[t].state & (_e | de))) return !1;
          t++;
        }
        return !0;
      },
      recognize: function (t) {
        var e = ct({}, t);
        return u(this.options.enable, [this, e])
          ? (this.state & (ve | ye | _e) && (this.state = de),
            (this.state = this.process(e)),
            void (this.state & (pe | me | ge | ye) && this.tryEmit(e)))
          : (this.reset(), void (this.state = _e));
      },
      process: function (t) {},
      getTouchAction: function () {},
      reset: function () {},
    }),
      l(tt, Q, {
        defaults: {
          pointers: 1,
        },
        attrTest: function (t) {
          var e = this.options.pointers;
          return 0 === e || t.pointers.length === e;
        },
        process: function (t) {
          var e = this.state,
            i = t.eventType,
            n = e & (pe | me),
            r = this.attrTest(t);
          return n && (i & Lt || !r)
            ? e | ye
            : n || r
            ? i & Ot
              ? e | ge
              : e & pe
              ? e | me
              : pe
            : _e;
        },
      }),
      l(et, tt, {
        defaults: {
          event: "pan",
          threshold: 10,
          pointers: 1,
          direction: Ht,
        },
        getTouchAction: function () {
          var t = this.options.direction,
            e = [];
          return t & Ft && e.push(ce), t & Wt && e.push(ue), e;
        },
        directionTest: function (t) {
          var e = this.options,
            i = !0,
            n = t.distance,
            r = t.direction,
            o = t.deltaX,
            s = t.deltaY;
          return (
            r & e.direction ||
              (e.direction & Ft
                ? ((r = 0 === o ? Nt : 0 > o ? Rt : Mt),
                  (i = o != this.pX),
                  (n = Math.abs(t.deltaX)))
                : ((r = 0 === s ? Nt : 0 > s ? zt : jt),
                  (i = s != this.pY),
                  (n = Math.abs(t.deltaY)))),
            (t.direction = r),
            i && n > e.threshold && r & e.direction
          );
        },
        attrTest: function (t) {
          return (
            tt.prototype.attrTest.call(this, t) &&
            (this.state & pe || (!(this.state & pe) && this.directionTest(t)))
          );
        },
        emit: function (t) {
          (this.pX = t.deltaX), (this.pY = t.deltaY);
          var e = Z(t.direction);
          e && (t.additionalEvent = this.options.event + e),
            this._super.emit.call(this, t);
        },
      }),
      l(it, tt, {
        defaults: {
          event: "pinch",
          threshold: 0,
          pointers: 2,
        },
        getTouchAction: function () {
          return [he];
        },
        attrTest: function (t) {
          return (
            this._super.attrTest.call(this, t) &&
            (Math.abs(t.scale - 1) > this.options.threshold || this.state & pe)
          );
        },
        emit: function (t) {
          if (1 !== t.scale) {
            var e = t.scale < 1 ? "in" : "out";
            t.additionalEvent = this.options.event + e;
          }
          this._super.emit.call(this, t);
        },
      }),
      l(nt, Q, {
        defaults: {
          event: "press",
          pointers: 1,
          time: 251,
          threshold: 9,
        },
        getTouchAction: function () {
          return [ae];
        },
        process: function (t) {
          var e = this.options,
            i = t.pointers.length === e.pointers,
            n = t.distance < e.threshold,
            o = t.deltaTime > e.time;
          if (((this._input = t), !n || !i || (t.eventType & (Ot | Lt) && !o)))
            this.reset();
          else if (t.eventType & Pt)
            this.reset(),
              (this._timer = r(
                function () {
                  (this.state = ve), this.tryEmit();
                },
                e.time,
                this
              ));
          else if (t.eventType & Ot) return ve;
          return _e;
        },
        reset: function () {
          clearTimeout(this._timer);
        },
        emit: function (t) {
          this.state === ve &&
            (t && t.eventType & Ot
              ? this.manager.emit(this.options.event + "up", t)
              : ((this._input.timeStamp = vt()),
                this.manager.emit(this.options.event, this._input)));
        },
      }),
      l(rt, tt, {
        defaults: {
          event: "rotate",
          threshold: 0,
          pointers: 2,
        },
        getTouchAction: function () {
          return [he];
        },
        attrTest: function (t) {
          return (
            this._super.attrTest.call(this, t) &&
            (Math.abs(t.rotation) > this.options.threshold || this.state & pe)
          );
        },
      }),
      l(ot, tt, {
        defaults: {
          event: "swipe",
          threshold: 10,
          velocity: 0.3,
          direction: Ft | Wt,
          pointers: 1,
        },
        getTouchAction: function () {
          return et.prototype.getTouchAction.call(this);
        },
        attrTest: function (t) {
          var e,
            i = this.options.direction;
          return (
            i & (Ft | Wt)
              ? (e = t.overallVelocity)
              : i & Ft
              ? (e = t.overallVelocityX)
              : i & Wt && (e = t.overallVelocityY),
            this._super.attrTest.call(this, t) &&
              i & t.offsetDirection &&
              t.distance > this.options.threshold &&
              t.maxPointers == this.options.pointers &&
              gt(e) > this.options.velocity &&
              t.eventType & Ot
          );
        },
        emit: function (t) {
          var e = Z(t.offsetDirection);
          e && this.manager.emit(this.options.event + e, t),
            this.manager.emit(this.options.event, t);
        },
      }),
      l(st, Q, {
        defaults: {
          event: "tap",
          pointers: 1,
          taps: 1,
          interval: 300,
          time: 250,
          threshold: 9,
          posThreshold: 10,
        },
        getTouchAction: function () {
          return [le];
        },
        process: function (t) {
          var e = this.options,
            i = t.pointers.length === e.pointers,
            n = t.distance < e.threshold,
            o = t.deltaTime < e.time;
          if ((this.reset(), t.eventType & Pt && 0 === this.count))
            return this.failTimeout();
          if (n && o && i) {
            if (t.eventType != Ot) return this.failTimeout();
            var s = !this.pTime || t.timeStamp - this.pTime < e.interval,
              a = !this.pCenter || L(this.pCenter, t.center) < e.posThreshold;
            (this.pTime = t.timeStamp),
              (this.pCenter = t.center),
              a && s ? (this.count += 1) : (this.count = 1),
              (this._input = t);
            var l = this.count % e.taps;
            if (0 === l)
              return this.hasRequireFailures()
                ? ((this._timer = r(
                    function () {
                      (this.state = ve), this.tryEmit();
                    },
                    e.interval,
                    this
                  )),
                  pe)
                : ve;
          }
          return _e;
        },
        failTimeout: function () {
          return (
            (this._timer = r(
              function () {
                this.state = _e;
              },
              this.options.interval,
              this
            )),
            _e
          );
        },
        reset: function () {
          clearTimeout(this._timer);
        },
        emit: function () {
          this.state == ve &&
            ((this._input.tapCount = this.count),
            this.manager.emit(this.options.event, this._input));
        },
      }),
      (at.VERSION = "2.0.7"),
      (at.defaults = {
        domEvents: !1,
        touchAction: se,
        enable: !0,
        inputTarget: null,
        inputClass: null,
        preset: [
          [
            rt,
            {
              enable: !1,
            },
          ],
          [
            it,
            {
              enable: !1,
            },
            ["rotate"],
          ],
          [
            ot,
            {
              direction: Ft,
            },
          ],
          [
            et,
            {
              direction: Ft,
            },
            ["swipe"],
          ],
          [st],
          [
            st,
            {
              event: "doubletap",
              taps: 2,
            },
            ["tap"],
          ],
          [nt],
        ],
        cssProps: {
          userSelect: "none",
          touchSelect: "none",
          touchCallout: "none",
          contentZooming: "none",
          userDrag: "none",
          tapHighlightColor: "rgba(0,0,0,0)",
        },
      });
    var be = 1,
      Te = 2;
    (lt.prototype = {
      set: function (t) {
        return (
          ct(this.options, t),
          t.touchAction && this.touchAction.update(),
          t.inputTarget &&
            (this.input.destroy(),
            (this.input.target = t.inputTarget),
            this.input.init()),
          this
        );
      },
      stop: function (t) {
        this.session.stopped = t ? Te : be;
      },
      recognize: function (t) {
        var e = this.session;
        if (!e.stopped) {
          this.touchAction.preventDefaults(t);
          var i,
            n = this.recognizers,
            r = e.curRecognizer;
          (!r || (r && r.state & ve)) && (r = e.curRecognizer = null);
          for (var o = 0; o < n.length; )
            (i = n[o]),
              e.stopped === Te || (r && i != r && !i.canRecognizeWith(r))
                ? i.reset()
                : i.recognize(t),
              !r && i.state & (pe | me | ge) && (r = e.curRecognizer = i),
              o++;
        }
      },
      get: function (t) {
        if (t instanceof Q) return t;
        for (var e = this.recognizers, i = 0; i < e.length; i++)
          if (e[i].options.event == t) return e[i];
        return null;
      },
      add: function (t) {
        if (o(t, "add", this)) return this;
        var e = this.get(t.options.event);
        return (
          e && this.remove(e),
          this.recognizers.push(t),
          (t.manager = this),
          this.touchAction.update(),
          t
        );
      },
      remove: function (t) {
        if (o(t, "remove", this)) return this;
        if ((t = this.get(t))) {
          var e = this.recognizers,
            i = v(e, t);
          -1 !== i && (e.splice(i, 1), this.touchAction.update());
        }
        return this;
      },
      on: function (t, e) {
        if (t !== n && e !== n) {
          var i = this.handlers;
          return (
            s(g(t), function (t) {
              (i[t] = i[t] || []), i[t].push(e);
            }),
            this
          );
        }
      },
      off: function (t, e) {
        if (t !== n) {
          var i = this.handlers;
          return (
            s(g(t), function (t) {
              e ? i[t] && i[t].splice(v(i[t], e), 1) : delete i[t];
            }),
            this
          );
        }
      },
      emit: function (t, e) {
        this.options.domEvents && ut(t, e);
        var i = this.handlers[t] && this.handlers[t].slice();
        if (i && i.length) {
          (e.type = t),
            (e.preventDefault = function () {
              e.srcEvent.preventDefault();
            });
          for (var n = 0; n < i.length; ) i[n](e), n++;
        }
      },
      destroy: function () {
        this.element && ht(this, !1),
          (this.handlers = {}),
          (this.session = {}),
          this.input.destroy(),
          (this.element = null);
      },
    }),
      ct(at, {
        INPUT_START: Pt,
        INPUT_MOVE: kt,
        INPUT_END: Ot,
        INPUT_CANCEL: Lt,
        STATE_POSSIBLE: de,
        STATE_BEGAN: pe,
        STATE_CHANGED: me,
        STATE_ENDED: ge,
        STATE_RECOGNIZED: ve,
        STATE_CANCELLED: ye,
        STATE_FAILED: _e,
        DIRECTION_NONE: Nt,
        DIRECTION_LEFT: Rt,
        DIRECTION_RIGHT: Mt,
        DIRECTION_UP: zt,
        DIRECTION_DOWN: jt,
        DIRECTION_HORIZONTAL: Ft,
        DIRECTION_VERTICAL: Wt,
        DIRECTION_ALL: Ht,
        Manager: lt,
        Input: w,
        TouchAction: Y,
        TouchInput: H,
        MouseInput: z,
        PointerEventInput: j,
        TouchMouseInput: q,
        SingleTouchInput: F,
        Recognizer: Q,
        AttrRecognizer: tt,
        Tap: st,
        Pan: et,
        Swipe: ot,
        Pinch: it,
        Rotate: rt,
        Press: nt,
        on: f,
        off: d,
        each: s,
        merge: _t,
        extend: yt,
        assign: ct,
        inherit: l,
        bindFn: h,
        prefixed: b,
      });
    var xe =
      "undefined" != typeof t ? t : "undefined" != typeof self ? self : {};
    (xe.Hammer = at),
      "function" == typeof define && define.amd
        ? define(function () {
            return at;
          })
        : "undefined" != typeof module && module.exports
        ? (module.exports = at)
        : (t[i] = at);
  })(window, document, "Hammer"),
  !(function (t) {
    return "function" == typeof define && define.amd
      ? define(["jquery"], function (e) {
          return t(e, window, document);
        })
      : "object" == typeof exports
      ? (module.exports = t(require("jquery"), window, document))
      : t(jQuery, window, document);
  })(function (t, e, i) {
    "use strict";
    var n,
      r,
      o,
      s,
      a,
      l,
      h,
      u,
      c,
      f,
      d,
      p,
      m,
      g,
      v,
      y,
      _,
      b,
      T,
      x,
      w,
      E,
      C,
      S,
      A,
      I,
      D,
      P,
      k,
      O,
      L;
    (C = {
      paneClass: "nano-pane",
      sliderClass: "nano-slider",
      contentClass: "nano-content",
      iOSNativeScrolling: !1,
      preventPageScrolling: !1,
      disableResize: !1,
      alwaysVisible: !1,
      flashDelay: 1500,
      sliderMinHeight: 20,
      sliderMaxHeight: null,
      documentContext: null,
      windowContext: null,
    }),
      (b = "scrollbar"),
      (_ = "scroll"),
      (c = "mousedown"),
      (f = "mouseenter"),
      (d = "mousemove"),
      (m = "mousewheel"),
      (p = "mouseup"),
      (y = "resize"),
      (a = "drag"),
      (l = "enter"),
      (x = "up"),
      (v = "panedown"),
      (o = "DOMMouseScroll"),
      (s = "down"),
      (w = "wheel"),
      (h = "keydown"),
      (u = "keyup"),
      (T = "touchmove"),
      (n =
        "Microsoft Internet Explorer" === e.navigator.appName &&
        /msie 7./i.test(e.navigator.appVersion) &&
        e.ActiveXObject),
      (r = null),
      (D = e.requestAnimationFrame),
      (E = e.cancelAnimationFrame),
      (k = i.createElement("div").style),
      (L = (function () {
        var t, e, i, n, r, o;
        for (
          n = ["t", "webkitT", "MozT", "msT", "OT"], t = r = 0, o = n.length;
          o > r;
          t = ++r
        )
          if (((i = n[t]), (e = n[t] + "ransform"), e in k))
            return n[t].substr(0, n[t].length - 1);
        return !1;
      })()),
      (O = function (t) {
        return (
          L !== !1 &&
          ("" === L ? t : L + t.charAt(0).toUpperCase() + t.substr(1))
        );
      }),
      (P = O("transform")),
      (A = P !== !1),
      (S = function () {
        var t, e, n;
        return (
          (t = i.createElement("div")),
          (e = t.style),
          (e.position = "absolute"),
          (e.width = "100px"),
          (e.height = "100px"),
          (e.overflow = _),
          (e.top = "-9999px"),
          i.body.appendChild(t),
          (n = t.offsetWidth - t.clientWidth),
          i.body.removeChild(t),
          n
        );
      }),
      (I = function () {
        var t, i, n;
        return (
          (i = e.navigator.userAgent),
          !!(t = /(?=.+Mac OS X)(?=.+Firefox)/.test(i)) &&
            ((n = /Firefox\/\d{2}\./.exec(i)),
            n && (n = n[0].replace(/\D+/g, "")),
            t && +n > 23)
        );
      }),
      (g = (function () {
        function h(n, o) {
          (this.el = n),
            (this.options = o),
            r || (r = S()),
            (this.$el = t(this.el)),
            (this.doc = t(this.options.documentContext || i)),
            (this.win = t(this.options.windowContext || e)),
            (this.body = this.doc.find("body")),
            (this.$content = this.$el.children(
              "." + this.options.contentClass
            )),
            this.$content.attr("tabindex", this.options.tabIndex || 0),
            (this.content = this.$content[0]),
            (this.previousPosition = 0),
            this.options.iOSNativeScrolling &&
            null != this.el.style.WebkitOverflowScrolling
              ? this.nativeScrolling()
              : this.generate(),
            this.createEvents(),
            this.addEvents(),
            this.reset();
        }
        return (
          (h.prototype.preventScrolling = function (t, e) {
            if (this.isActive)
              if (t.type === o)
                ((e === s && t.originalEvent.detail > 0) ||
                  (e === x && t.originalEvent.detail < 0)) &&
                  t.preventDefault();
              else if (t.type === m) {
                if (!t.originalEvent || !t.originalEvent.wheelDelta) return;
                ((e === s && t.originalEvent.wheelDelta < 0) ||
                  (e === x && t.originalEvent.wheelDelta > 0)) &&
                  t.preventDefault();
              }
          }),
          (h.prototype.nativeScrolling = function () {
            this.$content.css({
              WebkitOverflowScrolling: "touch",
            }),
              (this.iOSNativeScrolling = !0),
              (this.isActive = !0);
          }),
          (h.prototype.updateScrollValues = function () {
            var t, e;
            (t = this.content),
              (this.maxScrollTop = t.scrollHeight - t.clientHeight),
              (this.prevScrollTop = this.contentScrollTop || 0),
              (this.contentScrollTop = t.scrollTop),
              (e =
                this.contentScrollTop > this.previousPosition
                  ? "down"
                  : this.contentScrollTop < this.previousPosition
                  ? "up"
                  : "same"),
              (this.previousPosition = this.contentScrollTop),
              "same" !== e &&
                this.$el.trigger("update", {
                  position: this.contentScrollTop,
                  maximum: this.maxScrollTop,
                  direction: e,
                }),
              this.iOSNativeScrolling ||
                ((this.maxSliderTop = this.paneHeight - this.sliderHeight),
                (this.sliderTop =
                  0 === this.maxScrollTop
                    ? 0
                    : (this.contentScrollTop * this.maxSliderTop) /
                      this.maxScrollTop));
          }),
          (h.prototype.setOnScrollStyles = function () {
            var t;
            A
              ? ((t = {}), (t[P] = "translate(0, " + this.sliderTop + "px)"))
              : (t = {
                  top: this.sliderTop,
                }),
              D
                ? (E && this.scrollRAF && E(this.scrollRAF),
                  (this.scrollRAF = D(
                    (function (e) {
                      return function () {
                        return (e.scrollRAF = null), e.slider.css(t);
                      };
                    })(this)
                  )))
                : this.slider.css(t);
          }),
          (h.prototype.createEvents = function () {
            this.events = {
              down: (function (t) {
                return function (e) {
                  return (
                    (t.isBeingDragged = !0),
                    (t.offsetY = e.pageY - t.slider.offset().top),
                    t.slider.is(e.target) || (t.offsetY = 0),
                    t.pane.addClass("active"),
                    t.doc.bind(d, t.events[a]).bind(p, t.events[x]),
                    t.body.bind(f, t.events[l]),
                    !1
                  );
                };
              })(this),
              drag: (function (t) {
                return function (e) {
                  return (
                    (t.sliderY =
                      e.pageY -
                      t.$el.offset().top -
                      t.paneTop -
                      (t.offsetY || 0.5 * t.sliderHeight)),
                    t.scroll(),
                    t.contentScrollTop >= t.maxScrollTop &&
                    t.prevScrollTop !== t.maxScrollTop
                      ? t.$el.trigger("scrollend")
                      : 0 === t.contentScrollTop &&
                        0 !== t.prevScrollTop &&
                        t.$el.trigger("scrolltop"),
                    !1
                  );
                };
              })(this),
              up: (function (t) {
                return function (e) {
                  return (
                    (t.isBeingDragged = !1),
                    t.pane.removeClass("active"),
                    t.doc.unbind(d, t.events[a]).unbind(p, t.events[x]),
                    t.body.unbind(f, t.events[l]),
                    !1
                  );
                };
              })(this),
              resize: (function (t) {
                return function (e) {
                  t.reset();
                };
              })(this),
              panedown: (function (t) {
                return function (e) {
                  return (
                    (t.sliderY =
                      (e.offsetY || e.originalEvent.layerY) -
                      0.5 * t.sliderHeight),
                    t.scroll(),
                    t.events.down(e),
                    !1
                  );
                };
              })(this),
              scroll: (function (t) {
                return function (e) {
                  t.updateScrollValues(),
                    t.isBeingDragged ||
                      (t.iOSNativeScrolling ||
                        ((t.sliderY = t.sliderTop), t.setOnScrollStyles()),
                      null != e &&
                        (t.contentScrollTop >= t.maxScrollTop
                          ? (t.options.preventPageScrolling &&
                              t.preventScrolling(e, s),
                            t.prevScrollTop !== t.maxScrollTop &&
                              t.$el.trigger("scrollend"))
                          : 0 === t.contentScrollTop &&
                            (t.options.preventPageScrolling &&
                              t.preventScrolling(e, x),
                            0 !== t.prevScrollTop &&
                              t.$el.trigger("scrolltop"))));
                };
              })(this),
              wheel: (function (t) {
                return function (e) {
                  var i;
                  if (null != e)
                    return (
                      (i =
                        e.delta ||
                        e.wheelDelta ||
                        (e.originalEvent && e.originalEvent.wheelDelta) ||
                        -e.detail ||
                        (e.originalEvent && -e.originalEvent.detail)),
                      i && (t.sliderY += -i / 3),
                      t.scroll(),
                      !1
                    );
                };
              })(this),
              enter: (function (t) {
                return function (e) {
                  var i;
                  if (t.isBeingDragged)
                    return 1 !== (e.buttons || e.which)
                      ? (i = t.events)[x].apply(i, arguments)
                      : void 0;
                };
              })(this),
            };
          }),
          (h.prototype.addEvents = function () {
            var t;
            this.removeEvents(),
              (t = this.events),
              this.options.disableResize || this.win.bind(y, t[y]),
              this.iOSNativeScrolling ||
                (this.slider.bind(c, t[s]),
                this.pane.bind(c, t[v]).bind("" + m + " " + o, t[w])),
              this.$content.bind("" + _ + " " + m + " " + o + " " + T, t[_]);
          }),
          (h.prototype.removeEvents = function () {
            var t;
            (t = this.events),
              this.win.unbind(y, t[y]),
              this.iOSNativeScrolling ||
                (this.slider.unbind(), this.pane.unbind()),
              this.$content.unbind("" + _ + " " + m + " " + o + " " + T, t[_]);
          }),
          (h.prototype.generate = function () {
            var t, i, n, o, s, a, l;
            return (
              (o = this.options),
              (a = o.paneClass),
              (l = o.sliderClass),
              (t = o.contentClass),
              (s = this.$el.children("." + a)).length ||
                s.children("." + l).length ||
                this.$el.append(
                  '<div class="' + a + '"><div class="' + l + '" /></div>'
                ),
              (this.pane = this.$el.children("." + a)),
              (this.slider = this.pane.find("." + l)),
              0 === r && I()
                ? ((n = e
                    .getComputedStyle(this.content, null)
                    .getPropertyValue("padding-right")
                    .replace(/[^0-9.]+/g, "")),
                  (i = {
                    right: -14,
                    paddingRight: +n + 14,
                  }))
                : r &&
                  ((i = {
                    right: -r,
                  }),
                  this.$el.addClass("has-scrollbar")),
              null != i && this.$content.css(i),
              this
            );
          }),
          (h.prototype.restore = function () {
            (this.stopped = !1),
              this.iOSNativeScrolling || this.pane.show(),
              this.addEvents();
          }),
          (h.prototype.reset = function () {
            var t, e, i, o, s, a, l, h, u, c, f, d;
            return this.iOSNativeScrolling
              ? void (this.contentHeight = this.content.scrollHeight)
              : (this.$el.find("." + this.options.paneClass).length ||
                  this.generate().stop(),
                this.stopped && this.restore(),
                (t = this.content),
                (o = t.style),
                (s = o.overflowY),
                n &&
                  this.$content.css({
                    height: this.$content.height(),
                  }),
                (e = t.scrollHeight + r),
                (c = parseInt(this.$el.css("max-height"), 10)),
                c > 0 &&
                  (this.$el.height(""),
                  this.$el.height(t.scrollHeight > c ? c : t.scrollHeight)),
                (l = this.pane.outerHeight(!1)),
                (u = parseInt(this.pane.css("top"), 10)),
                (a = parseInt(this.pane.css("bottom"), 10)),
                (h = l + u + a),
                (d = Math.round((h / e) * l)),
                d < this.options.sliderMinHeight
                  ? (d = this.options.sliderMinHeight)
                  : null != this.options.sliderMaxHeight &&
                    d > this.options.sliderMaxHeight &&
                    (d = this.options.sliderMaxHeight),
                s === _ && o.overflowX !== _ && (d += r),
                (this.maxSliderTop = h - d),
                (this.contentHeight = e),
                (this.paneHeight = l),
                (this.paneOuterHeight = h),
                (this.sliderHeight = d),
                (this.paneTop = u),
                this.slider.height(d),
                this.events.scroll(),
                this.pane.show(),
                (this.isActive = !0),
                t.scrollHeight === t.clientHeight ||
                (this.pane.outerHeight(!0) >= t.scrollHeight && s !== _)
                  ? (this.pane.hide(), (this.isActive = !1))
                  : this.el.clientHeight === t.scrollHeight && s === _
                  ? this.slider.hide()
                  : this.slider.show(),
                this.pane.css({
                  opacity: this.options.alwaysVisible ? 1 : "",
                  visibility: this.options.alwaysVisible ? "visible" : "",
                }),
                (i = this.$content.css("position")),
                ("static" === i || "relative" === i) &&
                  ((f = parseInt(this.$content.css("right"), 10)),
                  f &&
                    this.$content.css({
                      right: "",
                      marginRight: f,
                    })),
                this);
          }),
          (h.prototype.scroll = function () {
            return this.isActive
              ? ((this.sliderY = Math.max(0, this.sliderY)),
                (this.sliderY = Math.min(this.maxSliderTop, this.sliderY)),
                this.$content.scrollTop(
                  (this.maxScrollTop * this.sliderY) / this.maxSliderTop
                ),
                this.iOSNativeScrolling ||
                  (this.updateScrollValues(), this.setOnScrollStyles()),
                this)
              : void 0;
          }),
          (h.prototype.scrollBottom = function (t) {
            return this.isActive
              ? (this.$content
                  .scrollTop(this.contentHeight - this.$content.height() - t)
                  .trigger(m),
                this.stop().restore(),
                this)
              : void 0;
          }),
          (h.prototype.scrollTop = function (t) {
            return this.isActive
              ? (this.$content.scrollTop(+t).trigger(m),
                this.stop().restore(),
                this)
              : void 0;
          }),
          (h.prototype.scrollTo = function (t) {
            return this.isActive
              ? (this.scrollTop(this.$el.find(t).get(0).offsetTop), this)
              : void 0;
          }),
          (h.prototype.stop = function () {
            return (
              E &&
                this.scrollRAF &&
                (E(this.scrollRAF), (this.scrollRAF = null)),
              (this.stopped = !0),
              this.removeEvents(),
              this.iOSNativeScrolling || this.pane.hide(),
              this
            );
          }),
          (h.prototype.destroy = function () {
            return (
              this.stopped || this.stop(),
              !this.iOSNativeScrolling &&
                this.pane.length &&
                this.pane.remove(),
              n && this.$content.height(""),
              this.$content.removeAttr("tabindex"),
              this.$el.hasClass("has-scrollbar") &&
                (this.$el.removeClass("has-scrollbar"),
                this.$content.css({
                  right: "",
                })),
              this
            );
          }),
          (h.prototype.flash = function () {
            return !this.iOSNativeScrolling && this.isActive
              ? (this.reset(),
                this.pane.addClass("flashed"),
                setTimeout(
                  (function (t) {
                    return function () {
                      t.pane.removeClass("flashed");
                    };
                  })(this),
                  this.options.flashDelay
                ),
                this)
              : void 0;
          }),
          h
        );
      })()),
      (t.fn.nanoScroller = function (e) {
        return this.each(function () {
          var i, n;
          if (
            ((n = this.nanoscroller) ||
              ((i = t.extend({}, C, e)),
              (this.nanoscroller = n = new g(this, i))),
            e && "object" == typeof e)
          ) {
            if ((t.extend(n.options, e), null != e.scrollBottom))
              return n.scrollBottom(e.scrollBottom);
            if (null != e.scrollTop) return n.scrollTop(e.scrollTop);
            if (e.scrollTo) return n.scrollTo(e.scrollTo);
            if ("bottom" === e.scroll) return n.scrollBottom(0);
            if ("top" === e.scroll) return n.scrollTop(0);
            if (e.scroll && e.scroll instanceof t) return n.scrollTo(e.scroll);
            if (e.stop) return n.stop();
            if (e.destroy) return n.destroy();
            if (e.flash) return n.flash();
          }
          return n.reset();
        });
      }),
      (t.fn.nanoScroller.Constructor = g);
  }),
  (function () {
    "use strict";
    function t(t, e) {
      if (!(t instanceof e))
        throw new TypeError("Cannot call a class as a function");
    }
    function e() {
      (S = w.width()), (A = w.height()), (I = E.height());
    }
    function i(t) {
      "function" == typeof t
        ? D.push(t)
        : window.dispatchEvent(new Event("resize"));
    }
    function n() {
      var t = w.scrollTop(),
        e = "";
      (e = t > L ? "down" : t < L ? "up" : "none"),
        0 === t ? (e = "start") : t >= I - A && (e = "end");
      for (var i in k) "function" == typeof k[i] && k[i](e, t, L, w);
      L = t;
    }
    function r(t) {
      k.push(t);
    }
    function o() {
      var t = document.createElement("div");
      (t.className = "nk-body-scrollbar-measure"), C[0].appendChild(t);
      var e = t.offsetWidth - t.clientWidth;
      return C[0].removeChild(t), e;
    }
    function s() {
      var t = window.innerWidth;
      if (!t) {
        var e = document.documentElement.getBoundingClientRect();
        t = e.right - Math.abs(e.left);
      }
      (R = C[0].clientWidth < t), (M = o());
    }
    function a() {
      "undefined" == typeof z && (z = C.css("padding-right") || ""),
        R && C.add(j).css("paddingRight", M + "px");
    }
    function l() {
      C.css("paddingRight", z), j.css("paddingRight", "");
    }
    function h(t) {
      t && !N
        ? ((N = 1), s(), a(), C.css("overflow", "hidden"))
        : !t && N && ((N = 0), C.css("overflow", ""), l());
    }
    function u(t, e) {
      var i = !1,
        n = 0.7;
      (i =
        "top" === t
          ? 0
          : "bottom" === t
          ? Math.max(0, I - A)
          : "number" == typeof t
          ? t
          : !!t.offset && t.offset().top),
        i !== !1 && w.scrollTop() !== i
          ? (T.to(w, n, {
              scrollTo: {
                y: i,
                autoKill: !0,
              },
              ease: Power2.easeOut,
              autoKill: !0,
              overwrite: 5,
            }),
            e && T.delayedCall(n, e))
          : "function" == typeof e && e();
    }
    function c() {
      function t() {
        var t = w.scrollTop() >= a;
        t
          ? (o.addClass("nk-navbar-fixed"), l.show())
          : (o.removeClass("nk-navbar-fixed"), l.hide());
      }
      function e(t) {
        if (t.parent().is(".nk-nav")) {
          var e = t.children(".dropdown"),
            i = t.parents(".nk-navbar:eq(0)"),
            n = "auto" !== e.css("right"),
            r = {
              marginLeft: "",
              marginRight: "",
              marginTop: 0,
              display: "block",
            };
          e.css(r);
          var o = e[0].getBoundingClientRect(),
            s = t[0].getBoundingClientRect();
          o.left < 0
            ? (r.marginLeft = -o.left)
            : o.right > S && (r.marginLeft = S - o.right);
          var a = o.left + (r.marginLeft || 0);
          a > s.left && (r.marginLeft = (r.marginLeft || 0) - (a - s.left)),
            n && ((r.marginRight = -1 * r.marginLeft), (r.marginLeft = "")),
            (r.marginTop = i.innerHeight() - e.offset().top + i.offset().top),
            (r.display = "none"),
            e.css(r);
        }
      }
      function i(t) {
        t.length &&
          (t.removeClass("open"),
          T.to(t.children(".dropdown"), 0.3, {
            opacity: 0,
            display: "none",
          }),
          w.trigger("nk-closed-submenu", [t]));
      }
      function n(t) {
        t.hasClass("open") ||
          (e(t),
          T.to(t.children(".dropdown"), 0.3, {
            opacity: 1,
            display: "block",
          }),
          t.addClass("open"),
          w.trigger("nk-opened-submenu", [t]));
      }
      var r = this,
        o = b(".nk-navbar-top"),
        s = b("[data-nav-mobile]");
      s.length &&
        s.each(function () {
          var t = b(b(this).html()),
            e = b(b(this).attr("data-nav-mobile"));
          e.find(".nk-navbar-mobile-content > ul.nk-nav").append(t);
        });
      var a = o.length ? o.offset().top : 0,
        l = b("<div>").hide();
      o.hasClass("nk-navbar-sticky") &&
        (w.on("scroll resize", t),
        t(),
        o.after(l),
        r.debounceResize(function () {
          l.height(o.innerHeight());
        }));
      var h = void 0;
      o
        .on("mouseenter", "li.nk-drop-item", function () {
          var t = b(this),
            e = t
              .siblings(".open")
              .add(t.siblings().find(".open"))
              .add(t.parents(".nk-nav:eq(0)").siblings().find(".open"))
              .add(t.parents(".nk-nav:eq(0)").siblings(".open"))
              .add(
                t.parents(".nk-nav:eq(0)").parent().siblings().find(".open")
              );
          clearTimeout(h), i(e), n(t);
        })
        .on("mouseleave", "li.nk-drop-item", function () {
          var t = b(this);
          clearTimeout(h),
            (h = setTimeout(function () {
              i(t);
            }, 200));
        }),
        o.on("mouseleave", function () {
          clearTimeout(h),
            (h = setTimeout(function () {
              i(o.find(".open"));
            }, 400));
        });
      o.filter(".nk-navbar-autohide");
      r.throttleScroll(function (t, e) {
        o.hasClass("nk-navbar-transparent") &&
          o.hasClass("nk-navbar-sticky") &&
          o[(e > 70 ? "add" : "remove") + "Class"]("nk-navbar-solid");
      });
    }
    function f() {
      var t = this,
        e = b(".nk-navbar-full"),
        i = (b(".nk-navbar-top"), e.find(".nk-nav-social")),
        n = void 0;
      (t.fullscreenNavbarIsOpened = function () {
        return n;
      }),
        (t.toggleFullscreenNavbar = function () {
          t[n ? "closeFullscreenNavbar" : "openFullscreenNavbar"]();
        }),
        (t.openFullscreenNavbar = function () {
          if (!n && e.length) {
            n = 1;
            var r = e.find(
              ".nk-nav .nk-drop-item.open > .dropdown:not(.closed) > li > a"
            );
            r.length || (r = e.find(".nk-nav > li > a")),
              b(".nk-navbar-full-toggle").addClass("active"),
              T.set(r, {
                opacity: 0,
                force3D: !0,
              }),
              T.set(i, {
                opacity: 0,
                force3D: !0,
              }),
              T.to(e, 0.5, {
                opacity: 1,
                force3D: !0,
                display: "block",
                onComplete: function () {
                  t.initPluginNano(e);
                },
              }),
              T.staggerTo(
                r,
                0.3,
                {
                  y: 0,
                  opacity: 1,
                  delay: 0.2,
                },
                0.05
              ),
              T.to(i, 0.3, {
                y: 0,
                opacity: 1,
                delay: 0.4,
              }),
              e.addClass("open"),
              t.bodyOverflow(1),
              w.trigger("nk-open-full-navbar", [e]);
          }
        }),
        (t.closeFullscreenNavbar = function (i) {
          n &&
            e.length &&
            ((n = 0),
            b(".nk-navbar-full-toggle").removeClass("active"),
            T.to(e, 0.5, {
              opacity: 0,
              force3D: !0,
              display: "none",
              onComplete: function () {
                i || t.bodyOverflow(0);
              },
            }),
            e.removeClass("open"),
            w.trigger("nk-close-full-navbar", [e]));
        }),
        E.on("click", ".nk-navbar-full-toggle", function (e) {
          t.toggleFullscreenNavbar(), e.preventDefault();
        });
    }
    function d() {
      function t(t) {
        var e = t.parents(".nk-navbar:eq(0)"),
          n = e.find(".nk-nav"),
          r = e.find(".nk-drop-item.open > .dropdown:not(.closed)"),
          o = r.parents(".dropdown.closed:eq(0)"),
          s = t.parents(".nano:eq(0)"),
          a = s.children(".nano-content"),
          l = t.parents(".nk-nav-row:eq(0)"),
          h = l.siblings(".nk-nav-row");
        if (r.length) {
          var u = r.innerHeight();
          l.hasClass("nk-nav-row-center") &&
            !(function () {
              r.css({
                top: 0,
              });
              var t = s.innerHeight(),
                e = t,
                i = s.offset().top,
                n = r.offset().top;
              h.length &&
                h.each(function () {
                  e -= b(this).innerHeight();
                });
              var l = 0;
              u < e
                ? ((l = i - n - a.scrollTop()), (l += (t - u) / 2))
                : (l = -parseFloat(o.css("top")) || 0),
                r.css({
                  top: l,
                });
            })(),
            n.css("height", u),
            i.initPluginNano(e),
            T.to(a, 0.3, {
              scrollTo: {
                y: 0,
              },
              delay: 0.2,
            });
        } else n.css("height", "");
        i.initPluginNano(e);
      }
      function e(t, e) {
        var i = e.find("> .dropdown > li > a"),
          n = e.parent().find("> li > a");
        if (t) e.addClass("open").parent().addClass("closed");
        else {
          e.removeClass("open").parent().removeClass("closed");
          var r = i;
          (i = n), (n = r);
        }
        T.set(
          i,
          {
            x: t ? "15%" : "-15%",
            opacity: 0,
            display: "block",
          },
          0.1
        ),
          T.staggerTo(
            i,
            0.2,
            {
              x: "0%",
              opacity: 1,
              delay: 0.1,
            },
            0.03
          ),
          T.staggerTo(
            n,
            0.2,
            {
              x: t ? "-15%" : "15%",
              opacity: 0,
            },
            0.03,
            function () {
              n.css("display", "none");
            }
          );
      }
      var i = this,
        n = b(".nk-navbar-full");
      n
        .find(".dropdown")
        .prepend('<li class="bropdown-back"><a href="#">Back</a></li>'),
        n.on("click", ".nk-drop-item > a", function (i) {
          e(!0, b(this).parent()), t(b(this)), i.preventDefault();
        }),
        n.on("click", ".bropdown-back > a", function (i) {
          e(!1, b(this).parent().parent().parent()),
            t(b(this)),
            i.preventDefault();
        });
    }
    function p() {
      function t() {
        r.closeFullscreenNavbar();
      }
      function e(t) {
        for (var e = 0; e < s.length; e++) if (s[e].hash === t) return e;
        return !1;
      }
      function i() {
        for (var t = 0; t < s.length; t++) {
          var e = s[t],
            i = 0,
            n = A;
          e.$block.length &&
            ((i = e.$block.offset().top), (n = e.$block.innerHeight())),
            (e.activate = i - A / 2),
            (e.deactivate = i + n - A / 2);
        }
      }
      function n(t, e) {
        for (var i = 0; i < s.length; i++) {
          var n = s[i],
            r = e >= n.activate && e < n.deactivate;
          n.$item[r ? "addClass" : "removeClass"]("active");
        }
      }
      var r = this;
      E.on(
        "click",
        ".nk-navbar a, a.nk-header-title-scroll-down",
        function (e) {
          var i = this.hash,
            n = this.baseURI === window.location.href;
          if (i && n) {
            var o = b(i),
              s = i.replace(/^#/, "");
            (o.length || "top" === s || "bottom" === s) &&
              (t(),
              o.length &&
                !b(this).hasClass("nk-header-title-scroll-down") &&
                (o.attr("id", ""),
                (document.location.hash = s),
                o.attr("id", s)),
              r.scrollTo(o.length ? o : s),
              e.preventDefault());
          }
        }
      );
      var o = b('.nk-navbar .nk-nav > li > a[href*="#"]'),
        s = [];
      o.each(function () {
        var t = this.hash.replace(/^#/, "");
        if (t) {
          var i = b(this).parent(),
            n = b("#" + t);
          if ((t && n.length) || "top" === t) {
            var r = e(t);
            r === !1
              ? s.push({
                  hash: t,
                  $item: i,
                  $block: n,
                })
              : (s[r].$item = s[r].$item.add(i));
          }
        }
      }),
        s.length &&
          (i(),
          n("static", w.scrollTop()),
          r.throttleScroll(n),
          r.debounceResize(i));
    }
    function m(t) {
      "undefined" != typeof b.fn.nanoScroller &&
        (t || E).find(".nano").nanoScroller();
    }
    function g() {
      if ("undefined" != typeof b.fn.jarallax) {
        b(".bg-image-parallax").jarallax({
          speed: 0.8,
        });
      }
    }
    function v() {
      function t(t) {
        t.on("dragStart", function () {
          b(this).find(".flickity-viewport").addClass("is-dragging");
        }),
          t.on("dragEnd", function () {
            b(this).find(".flickity-viewport").removeClass("is-dragging");
          });
      }
      if ("undefined" != typeof window.Flickity) {
        var e = b(".nk-carousel");
        e.length &&
          (e.children(".nk-carousel-inner").each(function () {
            b(this).flickity({
              pageDots: "true" === b(this).parent().attr("data-dots") || !1,
              autoPlay:
                parseFloat(b(this).parent().attr("data-autoplay")) || !1,
              prevNextButtons: !1,
              wrapAround: !0,
              cellAlign: "center",
            });
          }),
          t(e.children(".nk-carousel-inner"))),
          b(".nk-carousel-2 > .nk-carousel-inner").each(function () {
            b(this).flickity({
              pageDots: "true" === b(this).parent().attr("data-dots") || !1,
              autoPlay:
                parseFloat(b(this).parent().attr("data-autoplay")) || !1,
              prevNextButtons: !1,
              wrapAround: !0,
              imagesLoaded: !0,
              cellAlign: "center",
            }),
              t(b(this));
          });
      }
    }
    function y() {
      if ("undefined" != typeof window.Isotope) {
        var t = this;
        b(".nk-isotope").each(function () {
          var e = b(this),
            i = e.isotope({
              itemSelector: ".nk-isotope-item",
            });
          i.imagesLoaded().progress(function () {
            i.isotope("layout");
          }),
            i.on("arrangeComplete", function () {
              t.debounceResize();
            });
          var n = [];
          (n = e.parent().hasClass("nk-portfolio-list")
            ? e.parent().prev(".nk-isotope-filter")
            : e.prev(".nk-isotope-filter")),
            n.length &&
              n.on("click", "[data-filter]", function (t) {
                t.preventDefault();
                var e = b(this).attr("data-filter");
                b(this).addClass("active").siblings().removeClass("active"),
                  i.isotope({
                    filter: "*" === e ? "" : "[data-filter*=" + e + "]",
                  });
              });
        }),
          C.on("click", '[href="#nk-toggle-filter"]:not(.busy)', function (t) {
            var e = b(this).parent(".nk-pagination"),
              n = e.next(".nk-isotope-filter"),
              r = n.hasClass("nk-isotope-filter-active");
            if (e.length && n.length)
              if (
                (t.preventDefault(), t.stopPropagation(), e.addClass("busy"), r)
              )
                T.staggerTo(
                  n.children(),
                  0.2,
                  {
                    y: -10,
                    opacity: 0,
                  },
                  0.04,
                  function () {
                    T.to(n, 0.4, {
                      height: 0,
                      marginBottom: 0,
                      marginTop: 0,
                      force3D: !0,
                      display: "none",
                      onComplete: function () {
                        e.removeClass("nk-isotope-filter-active"),
                          n.removeClass("nk-isotope-filter-active"),
                          e.removeClass("busy"),
                          i();
                      },
                    });
                  }
                );
              else {
                n.css("height", "auto");
                var o = n.height();
                n.css("height", 0),
                  T.set(n.children(), {
                    y: -10,
                    opacity: 0,
                  }),
                  T.to(n, 0.4, {
                    height: o,
                    marginBottom: 30,
                    marginTop: -23,
                    force3D: !0,
                    display: "block",
                    onComplete: function () {
                      T.staggerTo(
                        n.children(),
                        0.2,
                        {
                          y: 0,
                          opacity: 1,
                        },
                        0.04,
                        function () {
                          e.addClass("nk-isotope-filter-active"),
                            n.addClass("nk-isotope-filter-active"),
                            e.removeClass("busy"),
                            i();
                        }
                      );
                    },
                  });
              }
          });
      }
    }
    var _ = (function () {
        function t(t, e) {
          for (var i = 0; i < e.length; i++) {
            var n = e[i];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(t, n.key, n);
          }
        }
        return function (e, i, n) {
          return i && t(e.prototype, i), n && t(e, n), e;
        };
      })(),
      b = jQuery,
      T = window.TweenMax,
      x =
        (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream,
        /Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/g.test(
          navigator.userAgent || navigator.vendor || window.opera
        ));
    "ontouchstart" in window ||
      (window.DocumentTouch && document instanceof DocumentTouch);
    b("html").addClass(x ? "is-mobile" : "is-desktop");
    var w = b(window),
      E = b(document),
      C = b("body"),
      S = 0,
      A = 0,
      I = 0;
    e(), w.on("resize load orientationchange", e);
    var D = [],
      P = void 0;
    w.on("load resize orientationchange", function (t) {
      D.length &&
        (clearTimeout(P),
        (P = setTimeout(function () {
          for (var e = 0; e < D.length; e++) D[e](t);
        }, 50)));
    });
    var k = [],
      O = void 0,
      L = 0;
    w.on("scroll load resize orientationchange", function () {
      k.length && (O = !0);
    }),
      setInterval(function () {
        O && ((O = !1), window.requestAnimationFrame(n));
      }, 250);
    var N = void 0,
      R = void 0,
      M = void 0,
      z = void 0,
      j = b(".nk-navbar-full"),
      F = (function () {
        function e() {
          t(this, e);
        }
        return (
          _(e, [
            {
              key: "init",
              value: function () {
                var t = this;
                return (
                  t.initNavbar(),
                  t.initNavbarFullscreen(),
                  t.initNavbarDropEffect1(),
                  t.initAnchors(),
                  t.initPluginNano(),
                  t.initPluginJarallax(),
                  t.initPluginFlickity(),
                  t.initPluginIsotope(),
                  t
                );
              },
            },
            {
              key: "debounceResize",
              value: function (t) {
                return i.call(this, t);
              },
            },
            {
              key: "throttleScroll",
              value: function (t) {
                return r.call(this, t);
              },
            },
            {
              key: "bodyOverflow",
              value: function (t) {
                return h.call(this, t);
              },
            },
            {
              key: "scrollTo",
              value: function (t, e) {
                return u.call(this, t, e);
              },
            },
            {
              key: "initNavbar",
              value: function () {
                return c.call(this);
              },
            },
            {
              key: "initNavbarFullscreen",
              value: function () {
                return f.call(this);
              },
            },
            {
              key: "initNavbarDropEffect1",
              value: function () {
                return d.call(this);
              },
            },
            {
              key: "initAnchors",
              value: function () {
                return p.call(this);
              },
            },
            {
              key: "initPluginNano",
              value: function (t) {
                return m.call(this, t);
              },
            },
            {
              key: "initPluginJarallax",
              value: function (t) {
                return g.call(this, t);
              },
            },
            {
              key: "initPluginFlickity",
              value: function (t) {
                return v.call(this, t);
              },
            },
            {
              key: "initPluginIsotope",
              value: function (t) {
                return y.call(this, t);
              },
            },
          ]),
          e
        );
      })();
    (window.Snow = new F()), window.Snow.init();
  })();

//

var TxtRotate = function (el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = "";
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function () {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

  var that = this;
  var delta = 300 - Math.random() * 100;

  if (this.isDeleting) {
    delta /= 2;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === "") {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function () {
    that.tick();
  }, delta);
};

window.onload = function () {
  var elements = document.getElementsByClassName("txt-rotate");
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute("data-rotate");
    var period = elements[i].getAttribute("data-period");
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #666 }";
  document.body.appendChild(css);
};

//   title section header word change
(function () {
  let words = ["UI/UX Designer", "Coding Coach", "Front-End Web Developer"],
    i = 0;
  setInterval(function () {
    $("#changingtitle").fadeOut(function () {
      $(this)
        .html(words[(i = (i + 1) % words.length)])
        .fadeIn();
    });
  }, 2000);
})();

//   contact section header word change
(function () {
  let words = ["Speak", "Chit", "Chat", "Talk", "Connect"],
    i = 0;
  setInterval(function () {
    $("#changingword").fadeOut(function () {
      $(this)
        .html(words[(i = (i + 1) % words.length)])
        .fadeIn();
    });
  }, 2000);
})();
