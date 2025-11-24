var Pd = (e) => {
  throw TypeError(e);
};
var ql = (e, t, n) => t.has(e) || Pd("Cannot " + n);
var P = (e, t, n) => (
    ql(e, t, "read from private field"), n ? n.call(e) : t.get(e)
  ),
  re = (e, t, n) =>
    t.has(e)
      ? Pd("Cannot add the same private member more than once")
      : t instanceof WeakSet
      ? t.add(e)
      : t.set(e, n),
  G = (e, t, n, r) => (
    ql(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n
  ),
  De = (e, t, n) => (ql(e, t, "access private method"), n);
var Wi = (e, t, n, r) => ({
  set _(o) {
    G(e, t, o, n);
  },
  get _() {
    return P(e, t, r);
  },
});
function y0(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const o in r)
        if (o !== "default" && !(o in e)) {
          const i = Object.getOwnPropertyDescriptor(r, o);
          i &&
            Object.defineProperty(
              e,
              o,
              i.get ? i : { enumerable: !0, get: () => r[o] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
  new MutationObserver((o) => {
    for (const i of o)
      if (i.type === "childList")
        for (const s of i.addedNodes)
          s.tagName === "LINK" && s.rel === "modulepreload" && r(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(o) {
    const i = {};
    return (
      o.integrity && (i.integrity = o.integrity),
      o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : o.crossOrigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    );
  }
  function r(o) {
    if (o.ep) return;
    o.ep = !0;
    const i = n(o);
    fetch(o.href, i);
  }
})();
function $p(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Bp = { exports: {} },
  pl = {},
  Up = { exports: {} },
  Z = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Mi = Symbol.for("react.element"),
  x0 = Symbol.for("react.portal"),
  w0 = Symbol.for("react.fragment"),
  S0 = Symbol.for("react.strict_mode"),
  C0 = Symbol.for("react.profiler"),
  E0 = Symbol.for("react.provider"),
  b0 = Symbol.for("react.context"),
  N0 = Symbol.for("react.forward_ref"),
  k0 = Symbol.for("react.suspense"),
  P0 = Symbol.for("react.memo"),
  T0 = Symbol.for("react.lazy"),
  Td = Symbol.iterator;
function R0(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Td && e[Td]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Wp = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Vp = Object.assign,
  Hp = {};
function Eo(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Hp),
    (this.updater = n || Wp);
}
Eo.prototype.isReactComponent = {};
Eo.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
Eo.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Qp() {}
Qp.prototype = Eo.prototype;
function Zu(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Hp),
    (this.updater = n || Wp);
}
var Ju = (Zu.prototype = new Qp());
Ju.constructor = Zu;
Vp(Ju, Eo.prototype);
Ju.isPureReactComponent = !0;
var Rd = Array.isArray,
  Kp = Object.prototype.hasOwnProperty,
  ec = { current: null },
  Gp = { key: !0, ref: !0, __self: !0, __source: !0 };
function Yp(e, t, n) {
  var r,
    o = {},
    i = null,
    s = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (s = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      Kp.call(t, r) && !Gp.hasOwnProperty(r) && (o[r] = t[r]);
  var l = arguments.length - 2;
  if (l === 1) o.children = n;
  else if (1 < l) {
    for (var a = Array(l), u = 0; u < l; u++) a[u] = arguments[u + 2];
    o.children = a;
  }
  if (e && e.defaultProps)
    for (r in ((l = e.defaultProps), l)) o[r] === void 0 && (o[r] = l[r]);
  return {
    $$typeof: Mi,
    type: e,
    key: i,
    ref: s,
    props: o,
    _owner: ec.current,
  };
}
function j0(e, t) {
  return {
    $$typeof: Mi,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function tc(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Mi;
}
function O0(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var jd = /\/+/g;
function Zl(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? O0("" + e.key)
    : t.toString(36);
}
function vs(e, t, n, r, o) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var s = !1;
  if (e === null) s = !0;
  else
    switch (i) {
      case "string":
      case "number":
        s = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Mi:
          case x0:
            s = !0;
        }
    }
  if (s)
    return (
      (s = e),
      (o = o(s)),
      (e = r === "" ? "." + Zl(s, 0) : r),
      Rd(o)
        ? ((n = ""),
          e != null && (n = e.replace(jd, "$&/") + "/"),
          vs(o, t, n, "", function (u) {
            return u;
          }))
        : o != null &&
          (tc(o) &&
            (o = j0(
              o,
              n +
                (!o.key || (s && s.key === o.key)
                  ? ""
                  : ("" + o.key).replace(jd, "$&/") + "/") +
                e
            )),
          t.push(o)),
      1
    );
  if (((s = 0), (r = r === "" ? "." : r + ":"), Rd(e)))
    for (var l = 0; l < e.length; l++) {
      i = e[l];
      var a = r + Zl(i, l);
      s += vs(i, t, n, a, o);
    }
  else if (((a = R0(e)), typeof a == "function"))
    for (e = a.call(e), l = 0; !(i = e.next()).done; )
      (i = i.value), (a = r + Zl(i, l++)), (s += vs(i, t, n, a, o));
  else if (i === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return s;
}
function Vi(e, t, n) {
  if (e == null) return e;
  var r = [],
    o = 0;
  return (
    vs(e, r, "", "", function (i) {
      return t.call(n, i, o++);
    }),
    r
  );
}
function _0(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Qe = { current: null },
  gs = { transition: null },
  A0 = {
    ReactCurrentDispatcher: Qe,
    ReactCurrentBatchConfig: gs,
    ReactCurrentOwner: ec,
  };
function Xp() {
  throw Error("act(...) is not supported in production builds of React.");
}
Z.Children = {
  map: Vi,
  forEach: function (e, t, n) {
    Vi(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Vi(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Vi(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!tc(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
Z.Component = Eo;
Z.Fragment = w0;
Z.Profiler = C0;
Z.PureComponent = Zu;
Z.StrictMode = S0;
Z.Suspense = k0;
Z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = A0;
Z.act = Xp;
Z.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = Vp({}, e.props),
    o = e.key,
    i = e.ref,
    s = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (s = ec.current)),
      t.key !== void 0 && (o = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var l = e.type.defaultProps;
    for (a in t)
      Kp.call(t, a) &&
        !Gp.hasOwnProperty(a) &&
        (r[a] = t[a] === void 0 && l !== void 0 ? l[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    l = Array(a);
    for (var u = 0; u < a; u++) l[u] = arguments[u + 2];
    r.children = l;
  }
  return { $$typeof: Mi, type: e.type, key: o, ref: i, props: r, _owner: s };
};
Z.createContext = function (e) {
  return (
    (e = {
      $$typeof: b0,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: E0, _context: e }),
    (e.Consumer = e)
  );
};
Z.createElement = Yp;
Z.createFactory = function (e) {
  var t = Yp.bind(null, e);
  return (t.type = e), t;
};
Z.createRef = function () {
  return { current: null };
};
Z.forwardRef = function (e) {
  return { $$typeof: N0, render: e };
};
Z.isValidElement = tc;
Z.lazy = function (e) {
  return { $$typeof: T0, _payload: { _status: -1, _result: e }, _init: _0 };
};
Z.memo = function (e, t) {
  return { $$typeof: P0, type: e, compare: t === void 0 ? null : t };
};
Z.startTransition = function (e) {
  var t = gs.transition;
  gs.transition = {};
  try {
    e();
  } finally {
    gs.transition = t;
  }
};
Z.unstable_act = Xp;
Z.useCallback = function (e, t) {
  return Qe.current.useCallback(e, t);
};
Z.useContext = function (e) {
  return Qe.current.useContext(e);
};
Z.useDebugValue = function () {};
Z.useDeferredValue = function (e) {
  return Qe.current.useDeferredValue(e);
};
Z.useEffect = function (e, t) {
  return Qe.current.useEffect(e, t);
};
Z.useId = function () {
  return Qe.current.useId();
};
Z.useImperativeHandle = function (e, t, n) {
  return Qe.current.useImperativeHandle(e, t, n);
};
Z.useInsertionEffect = function (e, t) {
  return Qe.current.useInsertionEffect(e, t);
};
Z.useLayoutEffect = function (e, t) {
  return Qe.current.useLayoutEffect(e, t);
};
Z.useMemo = function (e, t) {
  return Qe.current.useMemo(e, t);
};
Z.useReducer = function (e, t, n) {
  return Qe.current.useReducer(e, t, n);
};
Z.useRef = function (e) {
  return Qe.current.useRef(e);
};
Z.useState = function (e) {
  return Qe.current.useState(e);
};
Z.useSyncExternalStore = function (e, t, n) {
  return Qe.current.useSyncExternalStore(e, t, n);
};
Z.useTransition = function () {
  return Qe.current.useTransition();
};
Z.version = "18.3.1";
Up.exports = Z;
var f = Up.exports;
const A = $p(f),
  nc = y0({ __proto__: null, default: A }, [f]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var M0 = f,
  I0 = Symbol.for("react.element"),
  D0 = Symbol.for("react.fragment"),
  L0 = Object.prototype.hasOwnProperty,
  F0 = M0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  z0 = { key: !0, ref: !0, __self: !0, __source: !0 };
function qp(e, t, n) {
  var r,
    o = {},
    i = null,
    s = null;
  n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (s = t.ref);
  for (r in t) L0.call(t, r) && !z0.hasOwnProperty(r) && (o[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
  return {
    $$typeof: I0,
    type: e,
    key: i,
    ref: s,
    props: o,
    _owner: F0.current,
  };
}
pl.Fragment = D0;
pl.jsx = qp;
pl.jsxs = qp;
Bp.exports = pl;
var c = Bp.exports,
  Zp = { exports: {} },
  st = {},
  Jp = { exports: {} },
  eh = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(k, T) {
    var D = k.length;
    k.push(T);
    e: for (; 0 < D; ) {
      var V = (D - 1) >>> 1,
        B = k[V];
      if (0 < o(B, T)) (k[V] = T), (k[D] = B), (D = V);
      else break e;
    }
  }
  function n(k) {
    return k.length === 0 ? null : k[0];
  }
  function r(k) {
    if (k.length === 0) return null;
    var T = k[0],
      D = k.pop();
    if (D !== T) {
      k[0] = D;
      e: for (var V = 0, B = k.length, Y = B >>> 1; V < Y; ) {
        var Q = 2 * (V + 1) - 1,
          ce = k[Q],
          we = Q + 1,
          L = k[we];
        if (0 > o(ce, D))
          we < B && 0 > o(L, ce)
            ? ((k[V] = L), (k[we] = D), (V = we))
            : ((k[V] = ce), (k[Q] = D), (V = Q));
        else if (we < B && 0 > o(L, D)) (k[V] = L), (k[we] = D), (V = we);
        else break e;
      }
    }
    return T;
  }
  function o(k, T) {
    var D = k.sortIndex - T.sortIndex;
    return D !== 0 ? D : k.id - T.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var s = Date,
      l = s.now();
    e.unstable_now = function () {
      return s.now() - l;
    };
  }
  var a = [],
    u = [],
    d = 1,
    p = null,
    g = 3,
    m = !1,
    S = !1,
    v = !1,
    w = typeof setTimeout == "function" ? setTimeout : null,
    y = typeof clearTimeout == "function" ? clearTimeout : null,
    h = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function x(k) {
    for (var T = n(u); T !== null; ) {
      if (T.callback === null) r(u);
      else if (T.startTime <= k)
        r(u), (T.sortIndex = T.expirationTime), t(a, T);
      else break;
      T = n(u);
    }
  }
  function C(k) {
    if (((v = !1), x(k), !S))
      if (n(a) !== null) (S = !0), z(E);
      else {
        var T = n(u);
        T !== null && U(C, T.startTime - k);
      }
  }
  function E(k, T) {
    (S = !1), v && ((v = !1), y(R), (R = -1)), (m = !0);
    var D = g;
    try {
      for (
        x(T), p = n(a);
        p !== null && (!(p.expirationTime > T) || (k && !$()));

      ) {
        var V = p.callback;
        if (typeof V == "function") {
          (p.callback = null), (g = p.priorityLevel);
          var B = V(p.expirationTime <= T);
          (T = e.unstable_now()),
            typeof B == "function" ? (p.callback = B) : p === n(a) && r(a),
            x(T);
        } else r(a);
        p = n(a);
      }
      if (p !== null) var Y = !0;
      else {
        var Q = n(u);
        Q !== null && U(C, Q.startTime - T), (Y = !1);
      }
      return Y;
    } finally {
      (p = null), (g = D), (m = !1);
    }
  }
  var N = !1,
    b = null,
    R = -1,
    O = 5,
    _ = -1;
  function $() {
    return !(e.unstable_now() - _ < O);
  }
  function I() {
    if (b !== null) {
      var k = e.unstable_now();
      _ = k;
      var T = !0;
      try {
        T = b(!0, k);
      } finally {
        T ? W() : ((N = !1), (b = null));
      }
    } else N = !1;
  }
  var W;
  if (typeof h == "function")
    W = function () {
      h(I);
    };
  else if (typeof MessageChannel < "u") {
    var M = new MessageChannel(),
      H = M.port2;
    (M.port1.onmessage = I),
      (W = function () {
        H.postMessage(null);
      });
  } else
    W = function () {
      w(I, 0);
    };
  function z(k) {
    (b = k), N || ((N = !0), W());
  }
  function U(k, T) {
    R = w(function () {
      k(e.unstable_now());
    }, T);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (k) {
      k.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      S || m || ((S = !0), z(E));
    }),
    (e.unstable_forceFrameRate = function (k) {
      0 > k || 125 < k
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (O = 0 < k ? Math.floor(1e3 / k) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return g;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(a);
    }),
    (e.unstable_next = function (k) {
      switch (g) {
        case 1:
        case 2:
        case 3:
          var T = 3;
          break;
        default:
          T = g;
      }
      var D = g;
      g = T;
      try {
        return k();
      } finally {
        g = D;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (k, T) {
      switch (k) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          k = 3;
      }
      var D = g;
      g = k;
      try {
        return T();
      } finally {
        g = D;
      }
    }),
    (e.unstable_scheduleCallback = function (k, T, D) {
      var V = e.unstable_now();
      switch (
        (typeof D == "object" && D !== null
          ? ((D = D.delay), (D = typeof D == "number" && 0 < D ? V + D : V))
          : (D = V),
        k)
      ) {
        case 1:
          var B = -1;
          break;
        case 2:
          B = 250;
          break;
        case 5:
          B = 1073741823;
          break;
        case 4:
          B = 1e4;
          break;
        default:
          B = 5e3;
      }
      return (
        (B = D + B),
        (k = {
          id: d++,
          callback: T,
          priorityLevel: k,
          startTime: D,
          expirationTime: B,
          sortIndex: -1,
        }),
        D > V
          ? ((k.sortIndex = D),
            t(u, k),
            n(a) === null &&
              k === n(u) &&
              (v ? (y(R), (R = -1)) : (v = !0), U(C, D - V)))
          : ((k.sortIndex = B), t(a, k), S || m || ((S = !0), z(E))),
        k
      );
    }),
    (e.unstable_shouldYield = $),
    (e.unstable_wrapCallback = function (k) {
      var T = g;
      return function () {
        var D = g;
        g = T;
        try {
          return k.apply(this, arguments);
        } finally {
          g = D;
        }
      };
    });
})(eh);
Jp.exports = eh;
var $0 = Jp.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var B0 = f,
  it = $0;
function j(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var th = new Set(),
  ai = {};
function br(e, t) {
  po(e, t), po(e + "Capture", t);
}
function po(e, t) {
  for (ai[e] = t, e = 0; e < t.length; e++) th.add(t[e]);
}
var sn = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  za = Object.prototype.hasOwnProperty,
  U0 =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Od = {},
  _d = {};
function W0(e) {
  return za.call(_d, e)
    ? !0
    : za.call(Od, e)
    ? !1
    : U0.test(e)
    ? (_d[e] = !0)
    : ((Od[e] = !0), !1);
}
function V0(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function H0(e, t, n, r) {
  if (t === null || typeof t > "u" || V0(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Ke(e, t, n, r, o, i, s) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = o),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = s);
}
var Ae = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    Ae[e] = new Ke(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Ae[t] = new Ke(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Ae[e] = new Ke(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  Ae[e] = new Ke(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Ae[e] = new Ke(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Ae[e] = new Ke(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Ae[e] = new Ke(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Ae[e] = new Ke(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Ae[e] = new Ke(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var rc = /[\-:]([a-z])/g;
function oc(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(rc, oc);
    Ae[t] = new Ke(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(rc, oc);
    Ae[t] = new Ke(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(rc, oc);
  Ae[t] = new Ke(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Ae[e] = new Ke(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Ae.xlinkHref = new Ke(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  Ae[e] = new Ke(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function ic(e, t, n, r) {
  var o = Ae.hasOwnProperty(t) ? Ae[t] : null;
  (o !== null
    ? o.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (H0(t, n, o, r) && (n = null),
    r || o === null
      ? W0(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : o.mustUseProperty
      ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : "") : n)
      : ((t = o.attributeName),
        (r = o.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((o = o.type),
            (n = o === 3 || (o === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var fn = B0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Hi = Symbol.for("react.element"),
  Dr = Symbol.for("react.portal"),
  Lr = Symbol.for("react.fragment"),
  sc = Symbol.for("react.strict_mode"),
  $a = Symbol.for("react.profiler"),
  nh = Symbol.for("react.provider"),
  rh = Symbol.for("react.context"),
  lc = Symbol.for("react.forward_ref"),
  Ba = Symbol.for("react.suspense"),
  Ua = Symbol.for("react.suspense_list"),
  ac = Symbol.for("react.memo"),
  Cn = Symbol.for("react.lazy"),
  oh = Symbol.for("react.offscreen"),
  Ad = Symbol.iterator;
function Io(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Ad && e[Ad]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var xe = Object.assign,
  Jl;
function Ho(e) {
  if (Jl === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Jl = (t && t[1]) || "";
    }
  return (
    `
` +
    Jl +
    e
  );
}
var ea = !1;
function ta(e, t) {
  if (!e || ea) return "";
  ea = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var o = u.stack.split(`
`),
          i = r.stack.split(`
`),
          s = o.length - 1,
          l = i.length - 1;
        1 <= s && 0 <= l && o[s] !== i[l];

      )
        l--;
      for (; 1 <= s && 0 <= l; s--, l--)
        if (o[s] !== i[l]) {
          if (s !== 1 || l !== 1)
            do
              if ((s--, l--, 0 > l || o[s] !== i[l])) {
                var a =
                  `
` + o[s].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    a.includes("<anonymous>") &&
                    (a = a.replace("<anonymous>", e.displayName)),
                  a
                );
              }
            while (1 <= s && 0 <= l);
          break;
        }
    }
  } finally {
    (ea = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Ho(e) : "";
}
function Q0(e) {
  switch (e.tag) {
    case 5:
      return Ho(e.type);
    case 16:
      return Ho("Lazy");
    case 13:
      return Ho("Suspense");
    case 19:
      return Ho("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = ta(e.type, !1)), e;
    case 11:
      return (e = ta(e.type.render, !1)), e;
    case 1:
      return (e = ta(e.type, !0)), e;
    default:
      return "";
  }
}
function Wa(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Lr:
      return "Fragment";
    case Dr:
      return "Portal";
    case $a:
      return "Profiler";
    case sc:
      return "StrictMode";
    case Ba:
      return "Suspense";
    case Ua:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case rh:
        return (e.displayName || "Context") + ".Consumer";
      case nh:
        return (e._context.displayName || "Context") + ".Provider";
      case lc:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case ac:
        return (
          (t = e.displayName || null), t !== null ? t : Wa(e.type) || "Memo"
        );
      case Cn:
        (t = e._payload), (e = e._init);
        try {
          return Wa(e(t));
        } catch {}
    }
  return null;
}
function K0(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Wa(t);
    case 8:
      return t === sc ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function Un(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function ih(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function G0(e) {
  var t = ih(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var o = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return o.call(this);
        },
        set: function (s) {
          (r = "" + s), i.call(this, s);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (s) {
          r = "" + s;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Qi(e) {
  e._valueTracker || (e._valueTracker = G0(e));
}
function sh(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = ih(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Ms(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Va(e, t) {
  var n = t.checked;
  return xe({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Md(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = Un(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function lh(e, t) {
  (t = t.checked), t != null && ic(e, "checked", t, !1);
}
function Ha(e, t) {
  lh(e, t);
  var n = Un(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? Qa(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Qa(e, t.type, Un(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Id(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function Qa(e, t, n) {
  (t !== "number" || Ms(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Qo = Array.isArray;
function Gr(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
    for (n = 0; n < e.length; n++)
      (o = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== o && (e[n].selected = o),
        o && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Un(n), t = null, o = 0; o < e.length; o++) {
      if (e[o].value === n) {
        (e[o].selected = !0), r && (e[o].defaultSelected = !0);
        return;
      }
      t !== null || e[o].disabled || (t = e[o]);
    }
    t !== null && (t.selected = !0);
  }
}
function Ka(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(j(91));
  return xe({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Dd(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(j(92));
      if (Qo(n)) {
        if (1 < n.length) throw Error(j(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: Un(n) };
}
function ah(e, t) {
  var n = Un(t.value),
    r = Un(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Ld(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function uh(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Ga(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? uh(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var Ki,
  ch = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, o) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, o);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        Ki = Ki || document.createElement("div"),
          Ki.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = Ki.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function ui(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Zo = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Y0 = ["Webkit", "ms", "Moz", "O"];
Object.keys(Zo).forEach(function (e) {
  Y0.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Zo[t] = Zo[e]);
  });
});
function dh(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Zo.hasOwnProperty(e) && Zo[e])
    ? ("" + t).trim()
    : t + "px";
}
function fh(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        o = dh(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : (e[n] = o);
    }
}
var X0 = xe(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function Ya(e, t) {
  if (t) {
    if (X0[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(j(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(j(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(j(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(j(62));
  }
}
function Xa(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var qa = null;
function uc(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Za = null,
  Yr = null,
  Xr = null;
function Fd(e) {
  if ((e = Li(e))) {
    if (typeof Za != "function") throw Error(j(280));
    var t = e.stateNode;
    t && ((t = yl(t)), Za(e.stateNode, e.type, t));
  }
}
function ph(e) {
  Yr ? (Xr ? Xr.push(e) : (Xr = [e])) : (Yr = e);
}
function hh() {
  if (Yr) {
    var e = Yr,
      t = Xr;
    if (((Xr = Yr = null), Fd(e), t)) for (e = 0; e < t.length; e++) Fd(t[e]);
  }
}
function mh(e, t) {
  return e(t);
}
function vh() {}
var na = !1;
function gh(e, t, n) {
  if (na) return e(t, n);
  na = !0;
  try {
    return mh(e, t, n);
  } finally {
    (na = !1), (Yr !== null || Xr !== null) && (vh(), hh());
  }
}
function ci(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = yl(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(j(231, t, typeof n));
  return n;
}
var Ja = !1;
if (sn)
  try {
    var Do = {};
    Object.defineProperty(Do, "passive", {
      get: function () {
        Ja = !0;
      },
    }),
      window.addEventListener("test", Do, Do),
      window.removeEventListener("test", Do, Do);
  } catch {
    Ja = !1;
  }
function q0(e, t, n, r, o, i, s, l, a) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (d) {
    this.onError(d);
  }
}
var Jo = !1,
  Is = null,
  Ds = !1,
  eu = null,
  Z0 = {
    onError: function (e) {
      (Jo = !0), (Is = e);
    },
  };
function J0(e, t, n, r, o, i, s, l, a) {
  (Jo = !1), (Is = null), q0.apply(Z0, arguments);
}
function ex(e, t, n, r, o, i, s, l, a) {
  if ((J0.apply(this, arguments), Jo)) {
    if (Jo) {
      var u = Is;
      (Jo = !1), (Is = null);
    } else throw Error(j(198));
    Ds || ((Ds = !0), (eu = u));
  }
}
function Nr(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function yh(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function zd(e) {
  if (Nr(e) !== e) throw Error(j(188));
}
function tx(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Nr(e)), t === null)) throw Error(j(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var o = n.return;
    if (o === null) break;
    var i = o.alternate;
    if (i === null) {
      if (((r = o.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (o.child === i.child) {
      for (i = o.child; i; ) {
        if (i === n) return zd(o), e;
        if (i === r) return zd(o), t;
        i = i.sibling;
      }
      throw Error(j(188));
    }
    if (n.return !== r.return) (n = o), (r = i);
    else {
      for (var s = !1, l = o.child; l; ) {
        if (l === n) {
          (s = !0), (n = o), (r = i);
          break;
        }
        if (l === r) {
          (s = !0), (r = o), (n = i);
          break;
        }
        l = l.sibling;
      }
      if (!s) {
        for (l = i.child; l; ) {
          if (l === n) {
            (s = !0), (n = i), (r = o);
            break;
          }
          if (l === r) {
            (s = !0), (r = i), (n = o);
            break;
          }
          l = l.sibling;
        }
        if (!s) throw Error(j(189));
      }
    }
    if (n.alternate !== r) throw Error(j(190));
  }
  if (n.tag !== 3) throw Error(j(188));
  return n.stateNode.current === n ? e : t;
}
function xh(e) {
  return (e = tx(e)), e !== null ? wh(e) : null;
}
function wh(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = wh(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Sh = it.unstable_scheduleCallback,
  $d = it.unstable_cancelCallback,
  nx = it.unstable_shouldYield,
  rx = it.unstable_requestPaint,
  be = it.unstable_now,
  ox = it.unstable_getCurrentPriorityLevel,
  cc = it.unstable_ImmediatePriority,
  Ch = it.unstable_UserBlockingPriority,
  Ls = it.unstable_NormalPriority,
  ix = it.unstable_LowPriority,
  Eh = it.unstable_IdlePriority,
  hl = null,
  Ht = null;
function sx(e) {
  if (Ht && typeof Ht.onCommitFiberRoot == "function")
    try {
      Ht.onCommitFiberRoot(hl, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var jt = Math.clz32 ? Math.clz32 : ux,
  lx = Math.log,
  ax = Math.LN2;
function ux(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((lx(e) / ax) | 0)) | 0;
}
var Gi = 64,
  Yi = 4194304;
function Ko(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Fs(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    o = e.suspendedLanes,
    i = e.pingedLanes,
    s = n & 268435455;
  if (s !== 0) {
    var l = s & ~o;
    l !== 0 ? (r = Ko(l)) : ((i &= s), i !== 0 && (r = Ko(i)));
  } else (s = n & ~o), s !== 0 ? (r = Ko(s)) : i !== 0 && (r = Ko(i));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & o) &&
    ((o = r & -r), (i = t & -t), o >= i || (o === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - jt(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
  return r;
}
function cx(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function dx(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      o = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var s = 31 - jt(i),
      l = 1 << s,
      a = o[s];
    a === -1
      ? (!(l & n) || l & r) && (o[s] = cx(l, t))
      : a <= t && (e.expiredLanes |= l),
      (i &= ~l);
  }
}
function tu(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function bh() {
  var e = Gi;
  return (Gi <<= 1), !(Gi & 4194240) && (Gi = 64), e;
}
function ra(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Ii(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - jt(t)),
    (e[t] = n);
}
function fx(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var o = 31 - jt(n),
      i = 1 << o;
    (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~i);
  }
}
function dc(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - jt(n),
      o = 1 << r;
    (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
  }
}
var le = 0;
function Nh(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var kh,
  fc,
  Ph,
  Th,
  Rh,
  nu = !1,
  Xi = [],
  Mn = null,
  In = null,
  Dn = null,
  di = new Map(),
  fi = new Map(),
  bn = [],
  px =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Bd(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      Mn = null;
      break;
    case "dragenter":
    case "dragleave":
      In = null;
      break;
    case "mouseover":
    case "mouseout":
      Dn = null;
      break;
    case "pointerover":
    case "pointerout":
      di.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      fi.delete(t.pointerId);
  }
}
function Lo(e, t, n, r, o, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [o],
      }),
      t !== null && ((t = Li(t)), t !== null && fc(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      o !== null && t.indexOf(o) === -1 && t.push(o),
      e);
}
function hx(e, t, n, r, o) {
  switch (t) {
    case "focusin":
      return (Mn = Lo(Mn, e, t, n, r, o)), !0;
    case "dragenter":
      return (In = Lo(In, e, t, n, r, o)), !0;
    case "mouseover":
      return (Dn = Lo(Dn, e, t, n, r, o)), !0;
    case "pointerover":
      var i = o.pointerId;
      return di.set(i, Lo(di.get(i) || null, e, t, n, r, o)), !0;
    case "gotpointercapture":
      return (
        (i = o.pointerId), fi.set(i, Lo(fi.get(i) || null, e, t, n, r, o)), !0
      );
  }
  return !1;
}
function jh(e) {
  var t = rr(e.target);
  if (t !== null) {
    var n = Nr(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = yh(n)), t !== null)) {
          (e.blockedOn = t),
            Rh(e.priority, function () {
              Ph(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function ys(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = ru(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (qa = r), n.target.dispatchEvent(r), (qa = null);
    } else return (t = Li(n)), t !== null && fc(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Ud(e, t, n) {
  ys(e) && n.delete(t);
}
function mx() {
  (nu = !1),
    Mn !== null && ys(Mn) && (Mn = null),
    In !== null && ys(In) && (In = null),
    Dn !== null && ys(Dn) && (Dn = null),
    di.forEach(Ud),
    fi.forEach(Ud);
}
function Fo(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    nu ||
      ((nu = !0),
      it.unstable_scheduleCallback(it.unstable_NormalPriority, mx)));
}
function pi(e) {
  function t(o) {
    return Fo(o, e);
  }
  if (0 < Xi.length) {
    Fo(Xi[0], e);
    for (var n = 1; n < Xi.length; n++) {
      var r = Xi[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    Mn !== null && Fo(Mn, e),
      In !== null && Fo(In, e),
      Dn !== null && Fo(Dn, e),
      di.forEach(t),
      fi.forEach(t),
      n = 0;
    n < bn.length;
    n++
  )
    (r = bn[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < bn.length && ((n = bn[0]), n.blockedOn === null); )
    jh(n), n.blockedOn === null && bn.shift();
}
var qr = fn.ReactCurrentBatchConfig,
  zs = !0;
function vx(e, t, n, r) {
  var o = le,
    i = qr.transition;
  qr.transition = null;
  try {
    (le = 1), pc(e, t, n, r);
  } finally {
    (le = o), (qr.transition = i);
  }
}
function gx(e, t, n, r) {
  var o = le,
    i = qr.transition;
  qr.transition = null;
  try {
    (le = 4), pc(e, t, n, r);
  } finally {
    (le = o), (qr.transition = i);
  }
}
function pc(e, t, n, r) {
  if (zs) {
    var o = ru(e, t, n, r);
    if (o === null) pa(e, t, r, $s, n), Bd(e, r);
    else if (hx(o, e, t, n, r)) r.stopPropagation();
    else if ((Bd(e, r), t & 4 && -1 < px.indexOf(e))) {
      for (; o !== null; ) {
        var i = Li(o);
        if (
          (i !== null && kh(i),
          (i = ru(e, t, n, r)),
          i === null && pa(e, t, r, $s, n),
          i === o)
        )
          break;
        o = i;
      }
      o !== null && r.stopPropagation();
    } else pa(e, t, r, null, n);
  }
}
var $s = null;
function ru(e, t, n, r) {
  if ((($s = null), (e = uc(r)), (e = rr(e)), e !== null))
    if (((t = Nr(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = yh(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return ($s = e), null;
}
function Oh(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (ox()) {
        case cc:
          return 1;
        case Ch:
          return 4;
        case Ls:
        case ix:
          return 16;
        case Eh:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var On = null,
  hc = null,
  xs = null;
function _h() {
  if (xs) return xs;
  var e,
    t = hc,
    n = t.length,
    r,
    o = "value" in On ? On.value : On.textContent,
    i = o.length;
  for (e = 0; e < n && t[e] === o[e]; e++);
  var s = n - e;
  for (r = 1; r <= s && t[n - r] === o[i - r]; r++);
  return (xs = o.slice(e, 1 < r ? 1 - r : void 0));
}
function ws(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function qi() {
  return !0;
}
function Wd() {
  return !1;
}
function lt(e) {
  function t(n, r, o, i, s) {
    (this._reactName = n),
      (this._targetInst = o),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = s),
      (this.currentTarget = null);
    for (var l in e)
      e.hasOwnProperty(l) && ((n = e[l]), (this[l] = n ? n(i) : i[l]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? qi
        : Wd),
      (this.isPropagationStopped = Wd),
      this
    );
  }
  return (
    xe(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = qi));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = qi));
      },
      persist: function () {},
      isPersistent: qi,
    }),
    t
  );
}
var bo = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  mc = lt(bo),
  Di = xe({}, bo, { view: 0, detail: 0 }),
  yx = lt(Di),
  oa,
  ia,
  zo,
  ml = xe({}, Di, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: vc,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== zo &&
            (zo && e.type === "mousemove"
              ? ((oa = e.screenX - zo.screenX), (ia = e.screenY - zo.screenY))
              : (ia = oa = 0),
            (zo = e)),
          oa);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : ia;
    },
  }),
  Vd = lt(ml),
  xx = xe({}, ml, { dataTransfer: 0 }),
  wx = lt(xx),
  Sx = xe({}, Di, { relatedTarget: 0 }),
  sa = lt(Sx),
  Cx = xe({}, bo, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Ex = lt(Cx),
  bx = xe({}, bo, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Nx = lt(bx),
  kx = xe({}, bo, { data: 0 }),
  Hd = lt(kx),
  Px = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  Tx = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  Rx = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function jx(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Rx[e]) ? !!t[e] : !1;
}
function vc() {
  return jx;
}
var Ox = xe({}, Di, {
    key: function (e) {
      if (e.key) {
        var t = Px[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = ws(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? Tx[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: vc,
    charCode: function (e) {
      return e.type === "keypress" ? ws(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? ws(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  _x = lt(Ox),
  Ax = xe({}, ml, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Qd = lt(Ax),
  Mx = xe({}, Di, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: vc,
  }),
  Ix = lt(Mx),
  Dx = xe({}, bo, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Lx = lt(Dx),
  Fx = xe({}, ml, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  zx = lt(Fx),
  $x = [9, 13, 27, 32],
  gc = sn && "CompositionEvent" in window,
  ei = null;
sn && "documentMode" in document && (ei = document.documentMode);
var Bx = sn && "TextEvent" in window && !ei,
  Ah = sn && (!gc || (ei && 8 < ei && 11 >= ei)),
  Kd = " ",
  Gd = !1;
function Mh(e, t) {
  switch (e) {
    case "keyup":
      return $x.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Ih(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Fr = !1;
function Ux(e, t) {
  switch (e) {
    case "compositionend":
      return Ih(t);
    case "keypress":
      return t.which !== 32 ? null : ((Gd = !0), Kd);
    case "textInput":
      return (e = t.data), e === Kd && Gd ? null : e;
    default:
      return null;
  }
}
function Wx(e, t) {
  if (Fr)
    return e === "compositionend" || (!gc && Mh(e, t))
      ? ((e = _h()), (xs = hc = On = null), (Fr = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Ah && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Vx = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Yd(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Vx[e.type] : t === "textarea";
}
function Dh(e, t, n, r) {
  ph(r),
    (t = Bs(t, "onChange")),
    0 < t.length &&
      ((n = new mc("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var ti = null,
  hi = null;
function Hx(e) {
  Kh(e, 0);
}
function vl(e) {
  var t = Br(e);
  if (sh(t)) return e;
}
function Qx(e, t) {
  if (e === "change") return t;
}
var Lh = !1;
if (sn) {
  var la;
  if (sn) {
    var aa = "oninput" in document;
    if (!aa) {
      var Xd = document.createElement("div");
      Xd.setAttribute("oninput", "return;"),
        (aa = typeof Xd.oninput == "function");
    }
    la = aa;
  } else la = !1;
  Lh = la && (!document.documentMode || 9 < document.documentMode);
}
function qd() {
  ti && (ti.detachEvent("onpropertychange", Fh), (hi = ti = null));
}
function Fh(e) {
  if (e.propertyName === "value" && vl(hi)) {
    var t = [];
    Dh(t, hi, e, uc(e)), gh(Hx, t);
  }
}
function Kx(e, t, n) {
  e === "focusin"
    ? (qd(), (ti = t), (hi = n), ti.attachEvent("onpropertychange", Fh))
    : e === "focusout" && qd();
}
function Gx(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return vl(hi);
}
function Yx(e, t) {
  if (e === "click") return vl(t);
}
function Xx(e, t) {
  if (e === "input" || e === "change") return vl(t);
}
function qx(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var _t = typeof Object.is == "function" ? Object.is : qx;
function mi(e, t) {
  if (_t(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var o = n[r];
    if (!za.call(t, o) || !_t(e[o], t[o])) return !1;
  }
  return !0;
}
function Zd(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Jd(e, t) {
  var n = Zd(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Zd(n);
  }
}
function zh(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? zh(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function $h() {
  for (var e = window, t = Ms(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Ms(e.document);
  }
  return t;
}
function yc(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function Zx(e) {
  var t = $h(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    zh(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && yc(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var o = n.textContent.length,
          i = Math.min(r.start, o);
        (r = r.end === void 0 ? i : Math.min(r.end, o)),
          !e.extend && i > r && ((o = r), (r = i), (i = o)),
          (o = Jd(n, i));
        var s = Jd(n, r);
        o &&
          s &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== o.node ||
            e.anchorOffset !== o.offset ||
            e.focusNode !== s.node ||
            e.focusOffset !== s.offset) &&
          ((t = t.createRange()),
          t.setStart(o.node, o.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(s.node, s.offset))
            : (t.setEnd(s.node, s.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Jx = sn && "documentMode" in document && 11 >= document.documentMode,
  zr = null,
  ou = null,
  ni = null,
  iu = !1;
function ef(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  iu ||
    zr == null ||
    zr !== Ms(r) ||
    ((r = zr),
    "selectionStart" in r && yc(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (ni && mi(ni, r)) ||
      ((ni = r),
      (r = Bs(ou, "onSelect")),
      0 < r.length &&
        ((t = new mc("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = zr))));
}
function Zi(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var $r = {
    animationend: Zi("Animation", "AnimationEnd"),
    animationiteration: Zi("Animation", "AnimationIteration"),
    animationstart: Zi("Animation", "AnimationStart"),
    transitionend: Zi("Transition", "TransitionEnd"),
  },
  ua = {},
  Bh = {};
sn &&
  ((Bh = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete $r.animationend.animation,
    delete $r.animationiteration.animation,
    delete $r.animationstart.animation),
  "TransitionEvent" in window || delete $r.transitionend.transition);
function gl(e) {
  if (ua[e]) return ua[e];
  if (!$r[e]) return e;
  var t = $r[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Bh) return (ua[e] = t[n]);
  return e;
}
var Uh = gl("animationend"),
  Wh = gl("animationiteration"),
  Vh = gl("animationstart"),
  Hh = gl("transitionend"),
  Qh = new Map(),
  tf =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Qn(e, t) {
  Qh.set(e, t), br(t, [e]);
}
for (var ca = 0; ca < tf.length; ca++) {
  var da = tf[ca],
    ew = da.toLowerCase(),
    tw = da[0].toUpperCase() + da.slice(1);
  Qn(ew, "on" + tw);
}
Qn(Uh, "onAnimationEnd");
Qn(Wh, "onAnimationIteration");
Qn(Vh, "onAnimationStart");
Qn("dblclick", "onDoubleClick");
Qn("focusin", "onFocus");
Qn("focusout", "onBlur");
Qn(Hh, "onTransitionEnd");
po("onMouseEnter", ["mouseout", "mouseover"]);
po("onMouseLeave", ["mouseout", "mouseover"]);
po("onPointerEnter", ["pointerout", "pointerover"]);
po("onPointerLeave", ["pointerout", "pointerover"]);
br(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
br(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
br("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
br(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
br(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
br(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Go =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  nw = new Set("cancel close invalid load scroll toggle".split(" ").concat(Go));
function nf(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), ex(r, t, void 0, e), (e.currentTarget = null);
}
function Kh(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      o = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var s = r.length - 1; 0 <= s; s--) {
          var l = r[s],
            a = l.instance,
            u = l.currentTarget;
          if (((l = l.listener), a !== i && o.isPropagationStopped())) break e;
          nf(o, l, u), (i = a);
        }
      else
        for (s = 0; s < r.length; s++) {
          if (
            ((l = r[s]),
            (a = l.instance),
            (u = l.currentTarget),
            (l = l.listener),
            a !== i && o.isPropagationStopped())
          )
            break e;
          nf(o, l, u), (i = a);
        }
    }
  }
  if (Ds) throw ((e = eu), (Ds = !1), (eu = null), e);
}
function fe(e, t) {
  var n = t[cu];
  n === void 0 && (n = t[cu] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Gh(t, e, 2, !1), n.add(r));
}
function fa(e, t, n) {
  var r = 0;
  t && (r |= 4), Gh(n, e, r, t);
}
var Ji = "_reactListening" + Math.random().toString(36).slice(2);
function vi(e) {
  if (!e[Ji]) {
    (e[Ji] = !0),
      th.forEach(function (n) {
        n !== "selectionchange" && (nw.has(n) || fa(n, !1, e), fa(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Ji] || ((t[Ji] = !0), fa("selectionchange", !1, t));
  }
}
function Gh(e, t, n, r) {
  switch (Oh(t)) {
    case 1:
      var o = vx;
      break;
    case 4:
      o = gx;
      break;
    default:
      o = pc;
  }
  (n = o.bind(null, t, n, e)),
    (o = void 0),
    !Ja ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (o = !0),
    r
      ? o !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: o })
        : e.addEventListener(t, n, !0)
      : o !== void 0
      ? e.addEventListener(t, n, { passive: o })
      : e.addEventListener(t, n, !1);
}
function pa(e, t, n, r, o) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var s = r.tag;
      if (s === 3 || s === 4) {
        var l = r.stateNode.containerInfo;
        if (l === o || (l.nodeType === 8 && l.parentNode === o)) break;
        if (s === 4)
          for (s = r.return; s !== null; ) {
            var a = s.tag;
            if (
              (a === 3 || a === 4) &&
              ((a = s.stateNode.containerInfo),
              a === o || (a.nodeType === 8 && a.parentNode === o))
            )
              return;
            s = s.return;
          }
        for (; l !== null; ) {
          if (((s = rr(l)), s === null)) return;
          if (((a = s.tag), a === 5 || a === 6)) {
            r = i = s;
            continue e;
          }
          l = l.parentNode;
        }
      }
      r = r.return;
    }
  gh(function () {
    var u = i,
      d = uc(n),
      p = [];
    e: {
      var g = Qh.get(e);
      if (g !== void 0) {
        var m = mc,
          S = e;
        switch (e) {
          case "keypress":
            if (ws(n) === 0) break e;
          case "keydown":
          case "keyup":
            m = _x;
            break;
          case "focusin":
            (S = "focus"), (m = sa);
            break;
          case "focusout":
            (S = "blur"), (m = sa);
            break;
          case "beforeblur":
          case "afterblur":
            m = sa;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            m = Vd;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            m = wx;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            m = Ix;
            break;
          case Uh:
          case Wh:
          case Vh:
            m = Ex;
            break;
          case Hh:
            m = Lx;
            break;
          case "scroll":
            m = yx;
            break;
          case "wheel":
            m = zx;
            break;
          case "copy":
          case "cut":
          case "paste":
            m = Nx;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            m = Qd;
        }
        var v = (t & 4) !== 0,
          w = !v && e === "scroll",
          y = v ? (g !== null ? g + "Capture" : null) : g;
        v = [];
        for (var h = u, x; h !== null; ) {
          x = h;
          var C = x.stateNode;
          if (
            (x.tag === 5 &&
              C !== null &&
              ((x = C),
              y !== null && ((C = ci(h, y)), C != null && v.push(gi(h, C, x)))),
            w)
          )
            break;
          h = h.return;
        }
        0 < v.length &&
          ((g = new m(g, S, null, n, d)), p.push({ event: g, listeners: v }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((g = e === "mouseover" || e === "pointerover"),
          (m = e === "mouseout" || e === "pointerout"),
          g &&
            n !== qa &&
            (S = n.relatedTarget || n.fromElement) &&
            (rr(S) || S[ln]))
        )
          break e;
        if (
          (m || g) &&
          ((g =
            d.window === d
              ? d
              : (g = d.ownerDocument)
              ? g.defaultView || g.parentWindow
              : window),
          m
            ? ((S = n.relatedTarget || n.toElement),
              (m = u),
              (S = S ? rr(S) : null),
              S !== null &&
                ((w = Nr(S)), S !== w || (S.tag !== 5 && S.tag !== 6)) &&
                (S = null))
            : ((m = null), (S = u)),
          m !== S)
        ) {
          if (
            ((v = Vd),
            (C = "onMouseLeave"),
            (y = "onMouseEnter"),
            (h = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((v = Qd),
              (C = "onPointerLeave"),
              (y = "onPointerEnter"),
              (h = "pointer")),
            (w = m == null ? g : Br(m)),
            (x = S == null ? g : Br(S)),
            (g = new v(C, h + "leave", m, n, d)),
            (g.target = w),
            (g.relatedTarget = x),
            (C = null),
            rr(d) === u &&
              ((v = new v(y, h + "enter", S, n, d)),
              (v.target = x),
              (v.relatedTarget = w),
              (C = v)),
            (w = C),
            m && S)
          )
            t: {
              for (v = m, y = S, h = 0, x = v; x; x = _r(x)) h++;
              for (x = 0, C = y; C; C = _r(C)) x++;
              for (; 0 < h - x; ) (v = _r(v)), h--;
              for (; 0 < x - h; ) (y = _r(y)), x--;
              for (; h--; ) {
                if (v === y || (y !== null && v === y.alternate)) break t;
                (v = _r(v)), (y = _r(y));
              }
              v = null;
            }
          else v = null;
          m !== null && rf(p, g, m, v, !1),
            S !== null && w !== null && rf(p, w, S, v, !0);
        }
      }
      e: {
        if (
          ((g = u ? Br(u) : window),
          (m = g.nodeName && g.nodeName.toLowerCase()),
          m === "select" || (m === "input" && g.type === "file"))
        )
          var E = Qx;
        else if (Yd(g))
          if (Lh) E = Xx;
          else {
            E = Gx;
            var N = Kx;
          }
        else
          (m = g.nodeName) &&
            m.toLowerCase() === "input" &&
            (g.type === "checkbox" || g.type === "radio") &&
            (E = Yx);
        if (E && (E = E(e, u))) {
          Dh(p, E, n, d);
          break e;
        }
        N && N(e, g, u),
          e === "focusout" &&
            (N = g._wrapperState) &&
            N.controlled &&
            g.type === "number" &&
            Qa(g, "number", g.value);
      }
      switch (((N = u ? Br(u) : window), e)) {
        case "focusin":
          (Yd(N) || N.contentEditable === "true") &&
            ((zr = N), (ou = u), (ni = null));
          break;
        case "focusout":
          ni = ou = zr = null;
          break;
        case "mousedown":
          iu = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (iu = !1), ef(p, n, d);
          break;
        case "selectionchange":
          if (Jx) break;
        case "keydown":
        case "keyup":
          ef(p, n, d);
      }
      var b;
      if (gc)
        e: {
          switch (e) {
            case "compositionstart":
              var R = "onCompositionStart";
              break e;
            case "compositionend":
              R = "onCompositionEnd";
              break e;
            case "compositionupdate":
              R = "onCompositionUpdate";
              break e;
          }
          R = void 0;
        }
      else
        Fr
          ? Mh(e, n) && (R = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (R = "onCompositionStart");
      R &&
        (Ah &&
          n.locale !== "ko" &&
          (Fr || R !== "onCompositionStart"
            ? R === "onCompositionEnd" && Fr && (b = _h())
            : ((On = d),
              (hc = "value" in On ? On.value : On.textContent),
              (Fr = !0))),
        (N = Bs(u, R)),
        0 < N.length &&
          ((R = new Hd(R, e, null, n, d)),
          p.push({ event: R, listeners: N }),
          b ? (R.data = b) : ((b = Ih(n)), b !== null && (R.data = b)))),
        (b = Bx ? Ux(e, n) : Wx(e, n)) &&
          ((u = Bs(u, "onBeforeInput")),
          0 < u.length &&
            ((d = new Hd("onBeforeInput", "beforeinput", null, n, d)),
            p.push({ event: d, listeners: u }),
            (d.data = b)));
    }
    Kh(p, t);
  });
}
function gi(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Bs(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var o = e,
      i = o.stateNode;
    o.tag === 5 &&
      i !== null &&
      ((o = i),
      (i = ci(e, n)),
      i != null && r.unshift(gi(e, i, o)),
      (i = ci(e, t)),
      i != null && r.push(gi(e, i, o))),
      (e = e.return);
  }
  return r;
}
function _r(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function rf(e, t, n, r, o) {
  for (var i = t._reactName, s = []; n !== null && n !== r; ) {
    var l = n,
      a = l.alternate,
      u = l.stateNode;
    if (a !== null && a === r) break;
    l.tag === 5 &&
      u !== null &&
      ((l = u),
      o
        ? ((a = ci(n, i)), a != null && s.unshift(gi(n, a, l)))
        : o || ((a = ci(n, i)), a != null && s.push(gi(n, a, l)))),
      (n = n.return);
  }
  s.length !== 0 && e.push({ event: t, listeners: s });
}
var rw = /\r\n?/g,
  ow = /\u0000|\uFFFD/g;
function of(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      rw,
      `
`
    )
    .replace(ow, "");
}
function es(e, t, n) {
  if (((t = of(t)), of(e) !== t && n)) throw Error(j(425));
}
function Us() {}
var su = null,
  lu = null;
function au(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var uu = typeof setTimeout == "function" ? setTimeout : void 0,
  iw = typeof clearTimeout == "function" ? clearTimeout : void 0,
  sf = typeof Promise == "function" ? Promise : void 0,
  sw =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof sf < "u"
      ? function (e) {
          return sf.resolve(null).then(e).catch(lw);
        }
      : uu;
function lw(e) {
  setTimeout(function () {
    throw e;
  });
}
function ha(e, t) {
  var n = t,
    r = 0;
  do {
    var o = n.nextSibling;
    if ((e.removeChild(n), o && o.nodeType === 8))
      if (((n = o.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(o), pi(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = o;
  } while (n);
  pi(t);
}
function Ln(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function lf(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var No = Math.random().toString(36).slice(2),
  Ut = "__reactFiber$" + No,
  yi = "__reactProps$" + No,
  ln = "__reactContainer$" + No,
  cu = "__reactEvents$" + No,
  aw = "__reactListeners$" + No,
  uw = "__reactHandles$" + No;
function rr(e) {
  var t = e[Ut];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[ln] || n[Ut])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = lf(e); e !== null; ) {
          if ((n = e[Ut])) return n;
          e = lf(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Li(e) {
  return (
    (e = e[Ut] || e[ln]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Br(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(j(33));
}
function yl(e) {
  return e[yi] || null;
}
var du = [],
  Ur = -1;
function Kn(e) {
  return { current: e };
}
function pe(e) {
  0 > Ur || ((e.current = du[Ur]), (du[Ur] = null), Ur--);
}
function ue(e, t) {
  Ur++, (du[Ur] = e.current), (e.current = t);
}
var Wn = {},
  Be = Kn(Wn),
  qe = Kn(!1),
  mr = Wn;
function ho(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Wn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var o = {},
    i;
  for (i in n) o[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    o
  );
}
function Ze(e) {
  return (e = e.childContextTypes), e != null;
}
function Ws() {
  pe(qe), pe(Be);
}
function af(e, t, n) {
  if (Be.current !== Wn) throw Error(j(168));
  ue(Be, t), ue(qe, n);
}
function Yh(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var o in r) if (!(o in t)) throw Error(j(108, K0(e) || "Unknown", o));
  return xe({}, n, r);
}
function Vs(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Wn),
    (mr = Be.current),
    ue(Be, e),
    ue(qe, qe.current),
    !0
  );
}
function uf(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(j(169));
  n
    ? ((e = Yh(e, t, mr)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      pe(qe),
      pe(Be),
      ue(Be, e))
    : pe(qe),
    ue(qe, n);
}
var Jt = null,
  xl = !1,
  ma = !1;
function Xh(e) {
  Jt === null ? (Jt = [e]) : Jt.push(e);
}
function cw(e) {
  (xl = !0), Xh(e);
}
function Gn() {
  if (!ma && Jt !== null) {
    ma = !0;
    var e = 0,
      t = le;
    try {
      var n = Jt;
      for (le = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (Jt = null), (xl = !1);
    } catch (o) {
      throw (Jt !== null && (Jt = Jt.slice(e + 1)), Sh(cc, Gn), o);
    } finally {
      (le = t), (ma = !1);
    }
  }
  return null;
}
var Wr = [],
  Vr = 0,
  Hs = null,
  Qs = 0,
  dt = [],
  ft = 0,
  vr = null,
  tn = 1,
  nn = "";
function tr(e, t) {
  (Wr[Vr++] = Qs), (Wr[Vr++] = Hs), (Hs = e), (Qs = t);
}
function qh(e, t, n) {
  (dt[ft++] = tn), (dt[ft++] = nn), (dt[ft++] = vr), (vr = e);
  var r = tn;
  e = nn;
  var o = 32 - jt(r) - 1;
  (r &= ~(1 << o)), (n += 1);
  var i = 32 - jt(t) + o;
  if (30 < i) {
    var s = o - (o % 5);
    (i = (r & ((1 << s) - 1)).toString(32)),
      (r >>= s),
      (o -= s),
      (tn = (1 << (32 - jt(t) + o)) | (n << o) | r),
      (nn = i + e);
  } else (tn = (1 << i) | (n << o) | r), (nn = e);
}
function xc(e) {
  e.return !== null && (tr(e, 1), qh(e, 1, 0));
}
function wc(e) {
  for (; e === Hs; )
    (Hs = Wr[--Vr]), (Wr[Vr] = null), (Qs = Wr[--Vr]), (Wr[Vr] = null);
  for (; e === vr; )
    (vr = dt[--ft]),
      (dt[ft] = null),
      (nn = dt[--ft]),
      (dt[ft] = null),
      (tn = dt[--ft]),
      (dt[ft] = null);
}
var rt = null,
  nt = null,
  ve = !1,
  Rt = null;
function Zh(e, t) {
  var n = pt(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function cf(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (rt = e), (nt = Ln(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (rt = e), (nt = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = vr !== null ? { id: tn, overflow: nn } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = pt(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (rt = e),
            (nt = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function fu(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function pu(e) {
  if (ve) {
    var t = nt;
    if (t) {
      var n = t;
      if (!cf(e, t)) {
        if (fu(e)) throw Error(j(418));
        t = Ln(n.nextSibling);
        var r = rt;
        t && cf(e, t)
          ? Zh(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (ve = !1), (rt = e));
      }
    } else {
      if (fu(e)) throw Error(j(418));
      (e.flags = (e.flags & -4097) | 2), (ve = !1), (rt = e);
    }
  }
}
function df(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  rt = e;
}
function ts(e) {
  if (e !== rt) return !1;
  if (!ve) return df(e), (ve = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !au(e.type, e.memoizedProps))),
    t && (t = nt))
  ) {
    if (fu(e)) throw (Jh(), Error(j(418)));
    for (; t; ) Zh(e, t), (t = Ln(t.nextSibling));
  }
  if ((df(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(j(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              nt = Ln(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      nt = null;
    }
  } else nt = rt ? Ln(e.stateNode.nextSibling) : null;
  return !0;
}
function Jh() {
  for (var e = nt; e; ) e = Ln(e.nextSibling);
}
function mo() {
  (nt = rt = null), (ve = !1);
}
function Sc(e) {
  Rt === null ? (Rt = [e]) : Rt.push(e);
}
var dw = fn.ReactCurrentBatchConfig;
function $o(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(j(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(j(147, e));
      var o = r,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (s) {
            var l = o.refs;
            s === null ? delete l[i] : (l[i] = s);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(j(284));
    if (!n._owner) throw Error(j(290, e));
  }
  return e;
}
function ns(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      j(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function ff(e) {
  var t = e._init;
  return t(e._payload);
}
function em(e) {
  function t(y, h) {
    if (e) {
      var x = y.deletions;
      x === null ? ((y.deletions = [h]), (y.flags |= 16)) : x.push(h);
    }
  }
  function n(y, h) {
    if (!e) return null;
    for (; h !== null; ) t(y, h), (h = h.sibling);
    return null;
  }
  function r(y, h) {
    for (y = new Map(); h !== null; )
      h.key !== null ? y.set(h.key, h) : y.set(h.index, h), (h = h.sibling);
    return y;
  }
  function o(y, h) {
    return (y = Bn(y, h)), (y.index = 0), (y.sibling = null), y;
  }
  function i(y, h, x) {
    return (
      (y.index = x),
      e
        ? ((x = y.alternate),
          x !== null
            ? ((x = x.index), x < h ? ((y.flags |= 2), h) : x)
            : ((y.flags |= 2), h))
        : ((y.flags |= 1048576), h)
    );
  }
  function s(y) {
    return e && y.alternate === null && (y.flags |= 2), y;
  }
  function l(y, h, x, C) {
    return h === null || h.tag !== 6
      ? ((h = Ca(x, y.mode, C)), (h.return = y), h)
      : ((h = o(h, x)), (h.return = y), h);
  }
  function a(y, h, x, C) {
    var E = x.type;
    return E === Lr
      ? d(y, h, x.props.children, C, x.key)
      : h !== null &&
        (h.elementType === E ||
          (typeof E == "object" &&
            E !== null &&
            E.$$typeof === Cn &&
            ff(E) === h.type))
      ? ((C = o(h, x.props)), (C.ref = $o(y, h, x)), (C.return = y), C)
      : ((C = Ps(x.type, x.key, x.props, null, y.mode, C)),
        (C.ref = $o(y, h, x)),
        (C.return = y),
        C);
  }
  function u(y, h, x, C) {
    return h === null ||
      h.tag !== 4 ||
      h.stateNode.containerInfo !== x.containerInfo ||
      h.stateNode.implementation !== x.implementation
      ? ((h = Ea(x, y.mode, C)), (h.return = y), h)
      : ((h = o(h, x.children || [])), (h.return = y), h);
  }
  function d(y, h, x, C, E) {
    return h === null || h.tag !== 7
      ? ((h = pr(x, y.mode, C, E)), (h.return = y), h)
      : ((h = o(h, x)), (h.return = y), h);
  }
  function p(y, h, x) {
    if ((typeof h == "string" && h !== "") || typeof h == "number")
      return (h = Ca("" + h, y.mode, x)), (h.return = y), h;
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case Hi:
          return (
            (x = Ps(h.type, h.key, h.props, null, y.mode, x)),
            (x.ref = $o(y, null, h)),
            (x.return = y),
            x
          );
        case Dr:
          return (h = Ea(h, y.mode, x)), (h.return = y), h;
        case Cn:
          var C = h._init;
          return p(y, C(h._payload), x);
      }
      if (Qo(h) || Io(h))
        return (h = pr(h, y.mode, x, null)), (h.return = y), h;
      ns(y, h);
    }
    return null;
  }
  function g(y, h, x, C) {
    var E = h !== null ? h.key : null;
    if ((typeof x == "string" && x !== "") || typeof x == "number")
      return E !== null ? null : l(y, h, "" + x, C);
    if (typeof x == "object" && x !== null) {
      switch (x.$$typeof) {
        case Hi:
          return x.key === E ? a(y, h, x, C) : null;
        case Dr:
          return x.key === E ? u(y, h, x, C) : null;
        case Cn:
          return (E = x._init), g(y, h, E(x._payload), C);
      }
      if (Qo(x) || Io(x)) return E !== null ? null : d(y, h, x, C, null);
      ns(y, x);
    }
    return null;
  }
  function m(y, h, x, C, E) {
    if ((typeof C == "string" && C !== "") || typeof C == "number")
      return (y = y.get(x) || null), l(h, y, "" + C, E);
    if (typeof C == "object" && C !== null) {
      switch (C.$$typeof) {
        case Hi:
          return (y = y.get(C.key === null ? x : C.key) || null), a(h, y, C, E);
        case Dr:
          return (y = y.get(C.key === null ? x : C.key) || null), u(h, y, C, E);
        case Cn:
          var N = C._init;
          return m(y, h, x, N(C._payload), E);
      }
      if (Qo(C) || Io(C)) return (y = y.get(x) || null), d(h, y, C, E, null);
      ns(h, C);
    }
    return null;
  }
  function S(y, h, x, C) {
    for (
      var E = null, N = null, b = h, R = (h = 0), O = null;
      b !== null && R < x.length;
      R++
    ) {
      b.index > R ? ((O = b), (b = null)) : (O = b.sibling);
      var _ = g(y, b, x[R], C);
      if (_ === null) {
        b === null && (b = O);
        break;
      }
      e && b && _.alternate === null && t(y, b),
        (h = i(_, h, R)),
        N === null ? (E = _) : (N.sibling = _),
        (N = _),
        (b = O);
    }
    if (R === x.length) return n(y, b), ve && tr(y, R), E;
    if (b === null) {
      for (; R < x.length; R++)
        (b = p(y, x[R], C)),
          b !== null &&
            ((h = i(b, h, R)), N === null ? (E = b) : (N.sibling = b), (N = b));
      return ve && tr(y, R), E;
    }
    for (b = r(y, b); R < x.length; R++)
      (O = m(b, y, R, x[R], C)),
        O !== null &&
          (e && O.alternate !== null && b.delete(O.key === null ? R : O.key),
          (h = i(O, h, R)),
          N === null ? (E = O) : (N.sibling = O),
          (N = O));
    return (
      e &&
        b.forEach(function ($) {
          return t(y, $);
        }),
      ve && tr(y, R),
      E
    );
  }
  function v(y, h, x, C) {
    var E = Io(x);
    if (typeof E != "function") throw Error(j(150));
    if (((x = E.call(x)), x == null)) throw Error(j(151));
    for (
      var N = (E = null), b = h, R = (h = 0), O = null, _ = x.next();
      b !== null && !_.done;
      R++, _ = x.next()
    ) {
      b.index > R ? ((O = b), (b = null)) : (O = b.sibling);
      var $ = g(y, b, _.value, C);
      if ($ === null) {
        b === null && (b = O);
        break;
      }
      e && b && $.alternate === null && t(y, b),
        (h = i($, h, R)),
        N === null ? (E = $) : (N.sibling = $),
        (N = $),
        (b = O);
    }
    if (_.done) return n(y, b), ve && tr(y, R), E;
    if (b === null) {
      for (; !_.done; R++, _ = x.next())
        (_ = p(y, _.value, C)),
          _ !== null &&
            ((h = i(_, h, R)), N === null ? (E = _) : (N.sibling = _), (N = _));
      return ve && tr(y, R), E;
    }
    for (b = r(y, b); !_.done; R++, _ = x.next())
      (_ = m(b, y, R, _.value, C)),
        _ !== null &&
          (e && _.alternate !== null && b.delete(_.key === null ? R : _.key),
          (h = i(_, h, R)),
          N === null ? (E = _) : (N.sibling = _),
          (N = _));
    return (
      e &&
        b.forEach(function (I) {
          return t(y, I);
        }),
      ve && tr(y, R),
      E
    );
  }
  function w(y, h, x, C) {
    if (
      (typeof x == "object" &&
        x !== null &&
        x.type === Lr &&
        x.key === null &&
        (x = x.props.children),
      typeof x == "object" && x !== null)
    ) {
      switch (x.$$typeof) {
        case Hi:
          e: {
            for (var E = x.key, N = h; N !== null; ) {
              if (N.key === E) {
                if (((E = x.type), E === Lr)) {
                  if (N.tag === 7) {
                    n(y, N.sibling),
                      (h = o(N, x.props.children)),
                      (h.return = y),
                      (y = h);
                    break e;
                  }
                } else if (
                  N.elementType === E ||
                  (typeof E == "object" &&
                    E !== null &&
                    E.$$typeof === Cn &&
                    ff(E) === N.type)
                ) {
                  n(y, N.sibling),
                    (h = o(N, x.props)),
                    (h.ref = $o(y, N, x)),
                    (h.return = y),
                    (y = h);
                  break e;
                }
                n(y, N);
                break;
              } else t(y, N);
              N = N.sibling;
            }
            x.type === Lr
              ? ((h = pr(x.props.children, y.mode, C, x.key)),
                (h.return = y),
                (y = h))
              : ((C = Ps(x.type, x.key, x.props, null, y.mode, C)),
                (C.ref = $o(y, h, x)),
                (C.return = y),
                (y = C));
          }
          return s(y);
        case Dr:
          e: {
            for (N = x.key; h !== null; ) {
              if (h.key === N)
                if (
                  h.tag === 4 &&
                  h.stateNode.containerInfo === x.containerInfo &&
                  h.stateNode.implementation === x.implementation
                ) {
                  n(y, h.sibling),
                    (h = o(h, x.children || [])),
                    (h.return = y),
                    (y = h);
                  break e;
                } else {
                  n(y, h);
                  break;
                }
              else t(y, h);
              h = h.sibling;
            }
            (h = Ea(x, y.mode, C)), (h.return = y), (y = h);
          }
          return s(y);
        case Cn:
          return (N = x._init), w(y, h, N(x._payload), C);
      }
      if (Qo(x)) return S(y, h, x, C);
      if (Io(x)) return v(y, h, x, C);
      ns(y, x);
    }
    return (typeof x == "string" && x !== "") || typeof x == "number"
      ? ((x = "" + x),
        h !== null && h.tag === 6
          ? (n(y, h.sibling), (h = o(h, x)), (h.return = y), (y = h))
          : (n(y, h), (h = Ca(x, y.mode, C)), (h.return = y), (y = h)),
        s(y))
      : n(y, h);
  }
  return w;
}
var vo = em(!0),
  tm = em(!1),
  Ks = Kn(null),
  Gs = null,
  Hr = null,
  Cc = null;
function Ec() {
  Cc = Hr = Gs = null;
}
function bc(e) {
  var t = Ks.current;
  pe(Ks), (e._currentValue = t);
}
function hu(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Zr(e, t) {
  (Gs = e),
    (Cc = Hr = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (Xe = !0), (e.firstContext = null));
}
function mt(e) {
  var t = e._currentValue;
  if (Cc !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Hr === null)) {
      if (Gs === null) throw Error(j(308));
      (Hr = e), (Gs.dependencies = { lanes: 0, firstContext: e });
    } else Hr = Hr.next = e;
  return t;
}
var or = null;
function Nc(e) {
  or === null ? (or = [e]) : or.push(e);
}
function nm(e, t, n, r) {
  var o = t.interleaved;
  return (
    o === null ? ((n.next = n), Nc(t)) : ((n.next = o.next), (o.next = n)),
    (t.interleaved = n),
    an(e, r)
  );
}
function an(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var En = !1;
function kc(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function rm(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function rn(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Fn(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), te & 2)) {
    var o = r.pending;
    return (
      o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
      (r.pending = t),
      an(e, n)
    );
  }
  return (
    (o = r.interleaved),
    o === null ? ((t.next = t), Nc(r)) : ((t.next = o.next), (o.next = t)),
    (r.interleaved = t),
    an(e, n)
  );
}
function Ss(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), dc(e, n);
  }
}
function pf(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var o = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var s = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        i === null ? (o = i = s) : (i = i.next = s), (n = n.next);
      } while (n !== null);
      i === null ? (o = i = t) : (i = i.next = t);
    } else o = i = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: o,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Ys(e, t, n, r) {
  var o = e.updateQueue;
  En = !1;
  var i = o.firstBaseUpdate,
    s = o.lastBaseUpdate,
    l = o.shared.pending;
  if (l !== null) {
    o.shared.pending = null;
    var a = l,
      u = a.next;
    (a.next = null), s === null ? (i = u) : (s.next = u), (s = a);
    var d = e.alternate;
    d !== null &&
      ((d = d.updateQueue),
      (l = d.lastBaseUpdate),
      l !== s &&
        (l === null ? (d.firstBaseUpdate = u) : (l.next = u),
        (d.lastBaseUpdate = a)));
  }
  if (i !== null) {
    var p = o.baseState;
    (s = 0), (d = u = a = null), (l = i);
    do {
      var g = l.lane,
        m = l.eventTime;
      if ((r & g) === g) {
        d !== null &&
          (d = d.next =
            {
              eventTime: m,
              lane: 0,
              tag: l.tag,
              payload: l.payload,
              callback: l.callback,
              next: null,
            });
        e: {
          var S = e,
            v = l;
          switch (((g = t), (m = n), v.tag)) {
            case 1:
              if (((S = v.payload), typeof S == "function")) {
                p = S.call(m, p, g);
                break e;
              }
              p = S;
              break e;
            case 3:
              S.flags = (S.flags & -65537) | 128;
            case 0:
              if (
                ((S = v.payload),
                (g = typeof S == "function" ? S.call(m, p, g) : S),
                g == null)
              )
                break e;
              p = xe({}, p, g);
              break e;
            case 2:
              En = !0;
          }
        }
        l.callback !== null &&
          l.lane !== 0 &&
          ((e.flags |= 64),
          (g = o.effects),
          g === null ? (o.effects = [l]) : g.push(l));
      } else
        (m = {
          eventTime: m,
          lane: g,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null,
        }),
          d === null ? ((u = d = m), (a = p)) : (d = d.next = m),
          (s |= g);
      if (((l = l.next), l === null)) {
        if (((l = o.shared.pending), l === null)) break;
        (g = l),
          (l = g.next),
          (g.next = null),
          (o.lastBaseUpdate = g),
          (o.shared.pending = null);
      }
    } while (!0);
    if (
      (d === null && (a = p),
      (o.baseState = a),
      (o.firstBaseUpdate = u),
      (o.lastBaseUpdate = d),
      (t = o.shared.interleaved),
      t !== null)
    ) {
      o = t;
      do (s |= o.lane), (o = o.next);
      while (o !== t);
    } else i === null && (o.shared.lanes = 0);
    (yr |= s), (e.lanes = s), (e.memoizedState = p);
  }
}
function hf(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        o = r.callback;
      if (o !== null) {
        if (((r.callback = null), (r = n), typeof o != "function"))
          throw Error(j(191, o));
        o.call(r);
      }
    }
}
var Fi = {},
  Qt = Kn(Fi),
  xi = Kn(Fi),
  wi = Kn(Fi);
function ir(e) {
  if (e === Fi) throw Error(j(174));
  return e;
}
function Pc(e, t) {
  switch ((ue(wi, t), ue(xi, e), ue(Qt, Fi), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Ga(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Ga(t, e));
  }
  pe(Qt), ue(Qt, t);
}
function go() {
  pe(Qt), pe(xi), pe(wi);
}
function om(e) {
  ir(wi.current);
  var t = ir(Qt.current),
    n = Ga(t, e.type);
  t !== n && (ue(xi, e), ue(Qt, n));
}
function Tc(e) {
  xi.current === e && (pe(Qt), pe(xi));
}
var ge = Kn(0);
function Xs(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var va = [];
function Rc() {
  for (var e = 0; e < va.length; e++)
    va[e]._workInProgressVersionPrimary = null;
  va.length = 0;
}
var Cs = fn.ReactCurrentDispatcher,
  ga = fn.ReactCurrentBatchConfig,
  gr = 0,
  ye = null,
  ke = null,
  Re = null,
  qs = !1,
  ri = !1,
  Si = 0,
  fw = 0;
function Le() {
  throw Error(j(321));
}
function jc(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!_t(e[n], t[n])) return !1;
  return !0;
}
function Oc(e, t, n, r, o, i) {
  if (
    ((gr = i),
    (ye = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Cs.current = e === null || e.memoizedState === null ? vw : gw),
    (e = n(r, o)),
    ri)
  ) {
    i = 0;
    do {
      if (((ri = !1), (Si = 0), 25 <= i)) throw Error(j(301));
      (i += 1),
        (Re = ke = null),
        (t.updateQueue = null),
        (Cs.current = yw),
        (e = n(r, o));
    } while (ri);
  }
  if (
    ((Cs.current = Zs),
    (t = ke !== null && ke.next !== null),
    (gr = 0),
    (Re = ke = ye = null),
    (qs = !1),
    t)
  )
    throw Error(j(300));
  return e;
}
function _c() {
  var e = Si !== 0;
  return (Si = 0), e;
}
function Ft() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return Re === null ? (ye.memoizedState = Re = e) : (Re = Re.next = e), Re;
}
function vt() {
  if (ke === null) {
    var e = ye.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ke.next;
  var t = Re === null ? ye.memoizedState : Re.next;
  if (t !== null) (Re = t), (ke = e);
  else {
    if (e === null) throw Error(j(310));
    (ke = e),
      (e = {
        memoizedState: ke.memoizedState,
        baseState: ke.baseState,
        baseQueue: ke.baseQueue,
        queue: ke.queue,
        next: null,
      }),
      Re === null ? (ye.memoizedState = Re = e) : (Re = Re.next = e);
  }
  return Re;
}
function Ci(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function ya(e) {
  var t = vt(),
    n = t.queue;
  if (n === null) throw Error(j(311));
  n.lastRenderedReducer = e;
  var r = ke,
    o = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (o !== null) {
      var s = o.next;
      (o.next = i.next), (i.next = s);
    }
    (r.baseQueue = o = i), (n.pending = null);
  }
  if (o !== null) {
    (i = o.next), (r = r.baseState);
    var l = (s = null),
      a = null,
      u = i;
    do {
      var d = u.lane;
      if ((gr & d) === d)
        a !== null &&
          (a = a.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var p = {
          lane: d,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        a === null ? ((l = a = p), (s = r)) : (a = a.next = p),
          (ye.lanes |= d),
          (yr |= d);
      }
      u = u.next;
    } while (u !== null && u !== i);
    a === null ? (s = r) : (a.next = l),
      _t(r, t.memoizedState) || (Xe = !0),
      (t.memoizedState = r),
      (t.baseState = s),
      (t.baseQueue = a),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    o = e;
    do (i = o.lane), (ye.lanes |= i), (yr |= i), (o = o.next);
    while (o !== e);
  } else o === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function xa(e) {
  var t = vt(),
    n = t.queue;
  if (n === null) throw Error(j(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    o = n.pending,
    i = t.memoizedState;
  if (o !== null) {
    n.pending = null;
    var s = (o = o.next);
    do (i = e(i, s.action)), (s = s.next);
    while (s !== o);
    _t(i, t.memoizedState) || (Xe = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function im() {}
function sm(e, t) {
  var n = ye,
    r = vt(),
    o = t(),
    i = !_t(r.memoizedState, o);
  if (
    (i && ((r.memoizedState = o), (Xe = !0)),
    (r = r.queue),
    Ac(um.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (Re !== null && Re.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Ei(9, am.bind(null, n, r, o, t), void 0, null),
      je === null)
    )
      throw Error(j(349));
    gr & 30 || lm(n, t, o);
  }
  return o;
}
function lm(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = ye.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ye.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function am(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), cm(t) && dm(e);
}
function um(e, t, n) {
  return n(function () {
    cm(t) && dm(e);
  });
}
function cm(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !_t(e, n);
  } catch {
    return !0;
  }
}
function dm(e) {
  var t = an(e, 1);
  t !== null && Ot(t, e, 1, -1);
}
function mf(e) {
  var t = Ft();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Ci,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = mw.bind(null, ye, e)),
    [t.memoizedState, e]
  );
}
function Ei(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = ye.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (ye.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function fm() {
  return vt().memoizedState;
}
function Es(e, t, n, r) {
  var o = Ft();
  (ye.flags |= e),
    (o.memoizedState = Ei(1 | t, n, void 0, r === void 0 ? null : r));
}
function wl(e, t, n, r) {
  var o = vt();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (ke !== null) {
    var s = ke.memoizedState;
    if (((i = s.destroy), r !== null && jc(r, s.deps))) {
      o.memoizedState = Ei(t, n, i, r);
      return;
    }
  }
  (ye.flags |= e), (o.memoizedState = Ei(1 | t, n, i, r));
}
function vf(e, t) {
  return Es(8390656, 8, e, t);
}
function Ac(e, t) {
  return wl(2048, 8, e, t);
}
function pm(e, t) {
  return wl(4, 2, e, t);
}
function hm(e, t) {
  return wl(4, 4, e, t);
}
function mm(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function vm(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), wl(4, 4, mm.bind(null, t, e), n)
  );
}
function Mc() {}
function gm(e, t) {
  var n = vt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && jc(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function ym(e, t) {
  var n = vt();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && jc(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function xm(e, t, n) {
  return gr & 21
    ? (_t(n, t) || ((n = bh()), (ye.lanes |= n), (yr |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (Xe = !0)), (e.memoizedState = n));
}
function pw(e, t) {
  var n = le;
  (le = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = ga.transition;
  ga.transition = {};
  try {
    e(!1), t();
  } finally {
    (le = n), (ga.transition = r);
  }
}
function wm() {
  return vt().memoizedState;
}
function hw(e, t, n) {
  var r = $n(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Sm(e))
  )
    Cm(t, n);
  else if (((n = nm(e, t, n, r)), n !== null)) {
    var o = He();
    Ot(n, e, r, o), Em(n, t, r);
  }
}
function mw(e, t, n) {
  var r = $n(e),
    o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Sm(e)) Cm(t, o);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var s = t.lastRenderedState,
          l = i(s, n);
        if (((o.hasEagerState = !0), (o.eagerState = l), _t(l, s))) {
          var a = t.interleaved;
          a === null
            ? ((o.next = o), Nc(t))
            : ((o.next = a.next), (a.next = o)),
            (t.interleaved = o);
          return;
        }
      } catch {
      } finally {
      }
    (n = nm(e, t, o, r)),
      n !== null && ((o = He()), Ot(n, e, r, o), Em(n, t, r));
  }
}
function Sm(e) {
  var t = e.alternate;
  return e === ye || (t !== null && t === ye);
}
function Cm(e, t) {
  ri = qs = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Em(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), dc(e, n);
  }
}
var Zs = {
    readContext: mt,
    useCallback: Le,
    useContext: Le,
    useEffect: Le,
    useImperativeHandle: Le,
    useInsertionEffect: Le,
    useLayoutEffect: Le,
    useMemo: Le,
    useReducer: Le,
    useRef: Le,
    useState: Le,
    useDebugValue: Le,
    useDeferredValue: Le,
    useTransition: Le,
    useMutableSource: Le,
    useSyncExternalStore: Le,
    useId: Le,
    unstable_isNewReconciler: !1,
  },
  vw = {
    readContext: mt,
    useCallback: function (e, t) {
      return (Ft().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: mt,
    useEffect: vf,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Es(4194308, 4, mm.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Es(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Es(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Ft();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Ft();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = hw.bind(null, ye, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Ft();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: mf,
    useDebugValue: Mc,
    useDeferredValue: function (e) {
      return (Ft().memoizedState = e);
    },
    useTransition: function () {
      var e = mf(!1),
        t = e[0];
      return (e = pw.bind(null, e[1])), (Ft().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = ye,
        o = Ft();
      if (ve) {
        if (n === void 0) throw Error(j(407));
        n = n();
      } else {
        if (((n = t()), je === null)) throw Error(j(349));
        gr & 30 || lm(r, t, n);
      }
      o.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (o.queue = i),
        vf(um.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        Ei(9, am.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Ft(),
        t = je.identifierPrefix;
      if (ve) {
        var n = nn,
          r = tn;
        (n = (r & ~(1 << (32 - jt(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Si++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = fw++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  gw = {
    readContext: mt,
    useCallback: gm,
    useContext: mt,
    useEffect: Ac,
    useImperativeHandle: vm,
    useInsertionEffect: pm,
    useLayoutEffect: hm,
    useMemo: ym,
    useReducer: ya,
    useRef: fm,
    useState: function () {
      return ya(Ci);
    },
    useDebugValue: Mc,
    useDeferredValue: function (e) {
      var t = vt();
      return xm(t, ke.memoizedState, e);
    },
    useTransition: function () {
      var e = ya(Ci)[0],
        t = vt().memoizedState;
      return [e, t];
    },
    useMutableSource: im,
    useSyncExternalStore: sm,
    useId: wm,
    unstable_isNewReconciler: !1,
  },
  yw = {
    readContext: mt,
    useCallback: gm,
    useContext: mt,
    useEffect: Ac,
    useImperativeHandle: vm,
    useInsertionEffect: pm,
    useLayoutEffect: hm,
    useMemo: ym,
    useReducer: xa,
    useRef: fm,
    useState: function () {
      return xa(Ci);
    },
    useDebugValue: Mc,
    useDeferredValue: function (e) {
      var t = vt();
      return ke === null ? (t.memoizedState = e) : xm(t, ke.memoizedState, e);
    },
    useTransition: function () {
      var e = xa(Ci)[0],
        t = vt().memoizedState;
      return [e, t];
    },
    useMutableSource: im,
    useSyncExternalStore: sm,
    useId: wm,
    unstable_isNewReconciler: !1,
  };
function bt(e, t) {
  if (e && e.defaultProps) {
    (t = xe({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function mu(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : xe({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Sl = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Nr(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = He(),
      o = $n(e),
      i = rn(r, o);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = Fn(e, i, o)),
      t !== null && (Ot(t, e, o, r), Ss(t, e, o));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = He(),
      o = $n(e),
      i = rn(r, o);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = Fn(e, i, o)),
      t !== null && (Ot(t, e, o, r), Ss(t, e, o));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = He(),
      r = $n(e),
      o = rn(n, r);
    (o.tag = 2),
      t != null && (o.callback = t),
      (t = Fn(e, o, r)),
      t !== null && (Ot(t, e, r, n), Ss(t, e, r));
  },
};
function gf(e, t, n, r, o, i, s) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, s)
      : t.prototype && t.prototype.isPureReactComponent
      ? !mi(n, r) || !mi(o, i)
      : !0
  );
}
function bm(e, t, n) {
  var r = !1,
    o = Wn,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = mt(i))
      : ((o = Ze(t) ? mr : Be.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? ho(e, o) : Wn)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Sl),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = o),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function yf(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Sl.enqueueReplaceState(t, t.state, null);
}
function vu(e, t, n, r) {
  var o = e.stateNode;
  (o.props = n), (o.state = e.memoizedState), (o.refs = {}), kc(e);
  var i = t.contextType;
  typeof i == "object" && i !== null
    ? (o.context = mt(i))
    : ((i = Ze(t) ? mr : Be.current), (o.context = ho(e, i))),
    (o.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (mu(e, t, i, n), (o.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function" ||
      (typeof o.UNSAFE_componentWillMount != "function" &&
        typeof o.componentWillMount != "function") ||
      ((t = o.state),
      typeof o.componentWillMount == "function" && o.componentWillMount(),
      typeof o.UNSAFE_componentWillMount == "function" &&
        o.UNSAFE_componentWillMount(),
      t !== o.state && Sl.enqueueReplaceState(o, o.state, null),
      Ys(e, n, o, r),
      (o.state = e.memoizedState)),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function yo(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Q0(r)), (r = r.return);
    while (r);
    var o = n;
  } catch (i) {
    o =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: o, digest: null };
}
function wa(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function gu(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var xw = typeof WeakMap == "function" ? WeakMap : Map;
function Nm(e, t, n) {
  (n = rn(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      el || ((el = !0), (Pu = r)), gu(e, t);
    }),
    n
  );
}
function km(e, t, n) {
  (n = rn(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var o = t.value;
    (n.payload = function () {
      return r(o);
    }),
      (n.callback = function () {
        gu(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        gu(e, t),
          typeof r != "function" &&
            (zn === null ? (zn = new Set([this])) : zn.add(this));
        var s = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: s !== null ? s : "",
        });
      }),
    n
  );
}
function xf(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new xw();
    var o = new Set();
    r.set(t, o);
  } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
  o.has(n) || (o.add(n), (e = Aw.bind(null, e, t, n)), t.then(e, e));
}
function wf(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Sf(e, t, n, r, o) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = o), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = rn(-1, 1)), (t.tag = 2), Fn(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var ww = fn.ReactCurrentOwner,
  Xe = !1;
function We(e, t, n, r) {
  t.child = e === null ? tm(t, null, n, r) : vo(t, e.child, n, r);
}
function Cf(e, t, n, r, o) {
  n = n.render;
  var i = t.ref;
  return (
    Zr(t, o),
    (r = Oc(e, t, n, r, i, o)),
    (n = _c()),
    e !== null && !Xe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        un(e, t, o))
      : (ve && n && xc(t), (t.flags |= 1), We(e, t, r, o), t.child)
  );
}
function Ef(e, t, n, r, o) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !Uc(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), Pm(e, t, i, r, o))
      : ((e = Ps(n.type, null, r, t, t.mode, o)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & o))) {
    var s = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : mi), n(s, r) && e.ref === t.ref)
    )
      return un(e, t, o);
  }
  return (
    (t.flags |= 1),
    (e = Bn(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Pm(e, t, n, r, o) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (mi(i, r) && e.ref === t.ref)
      if (((Xe = !1), (t.pendingProps = r = i), (e.lanes & o) !== 0))
        e.flags & 131072 && (Xe = !0);
      else return (t.lanes = e.lanes), un(e, t, o);
  }
  return yu(e, t, n, r, o);
}
function Tm(e, t, n) {
  var r = t.pendingProps,
    o = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        ue(Kr, et),
        (et |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          ue(Kr, et),
          (et |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        ue(Kr, et),
        (et |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      ue(Kr, et),
      (et |= r);
  return We(e, t, o, n), t.child;
}
function Rm(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function yu(e, t, n, r, o) {
  var i = Ze(n) ? mr : Be.current;
  return (
    (i = ho(t, i)),
    Zr(t, o),
    (n = Oc(e, t, n, r, i, o)),
    (r = _c()),
    e !== null && !Xe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~o),
        un(e, t, o))
      : (ve && r && xc(t), (t.flags |= 1), We(e, t, n, o), t.child)
  );
}
function bf(e, t, n, r, o) {
  if (Ze(n)) {
    var i = !0;
    Vs(t);
  } else i = !1;
  if ((Zr(t, o), t.stateNode === null))
    bs(e, t), bm(t, n, r), vu(t, n, r, o), (r = !0);
  else if (e === null) {
    var s = t.stateNode,
      l = t.memoizedProps;
    s.props = l;
    var a = s.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = mt(u))
      : ((u = Ze(n) ? mr : Be.current), (u = ho(t, u)));
    var d = n.getDerivedStateFromProps,
      p =
        typeof d == "function" ||
        typeof s.getSnapshotBeforeUpdate == "function";
    p ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((l !== r || a !== u) && yf(t, s, r, u)),
      (En = !1);
    var g = t.memoizedState;
    (s.state = g),
      Ys(t, r, s, o),
      (a = t.memoizedState),
      l !== r || g !== a || qe.current || En
        ? (typeof d == "function" && (mu(t, n, d, r), (a = t.memoizedState)),
          (l = En || gf(t, n, l, r, g, a, u))
            ? (p ||
                (typeof s.UNSAFE_componentWillMount != "function" &&
                  typeof s.componentWillMount != "function") ||
                (typeof s.componentWillMount == "function" &&
                  s.componentWillMount(),
                typeof s.UNSAFE_componentWillMount == "function" &&
                  s.UNSAFE_componentWillMount()),
              typeof s.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = a)),
          (s.props = r),
          (s.state = a),
          (s.context = u),
          (r = l))
        : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (s = t.stateNode),
      rm(e, t),
      (l = t.memoizedProps),
      (u = t.type === t.elementType ? l : bt(t.type, l)),
      (s.props = u),
      (p = t.pendingProps),
      (g = s.context),
      (a = n.contextType),
      typeof a == "object" && a !== null
        ? (a = mt(a))
        : ((a = Ze(n) ? mr : Be.current), (a = ho(t, a)));
    var m = n.getDerivedStateFromProps;
    (d =
      typeof m == "function" ||
      typeof s.getSnapshotBeforeUpdate == "function") ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((l !== p || g !== a) && yf(t, s, r, a)),
      (En = !1),
      (g = t.memoizedState),
      (s.state = g),
      Ys(t, r, s, o);
    var S = t.memoizedState;
    l !== p || g !== S || qe.current || En
      ? (typeof m == "function" && (mu(t, n, m, r), (S = t.memoizedState)),
        (u = En || gf(t, n, u, r, g, S, a) || !1)
          ? (d ||
              (typeof s.UNSAFE_componentWillUpdate != "function" &&
                typeof s.componentWillUpdate != "function") ||
              (typeof s.componentWillUpdate == "function" &&
                s.componentWillUpdate(r, S, a),
              typeof s.UNSAFE_componentWillUpdate == "function" &&
                s.UNSAFE_componentWillUpdate(r, S, a)),
            typeof s.componentDidUpdate == "function" && (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof s.componentDidUpdate != "function" ||
              (l === e.memoizedProps && g === e.memoizedState) ||
              (t.flags |= 4),
            typeof s.getSnapshotBeforeUpdate != "function" ||
              (l === e.memoizedProps && g === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = S)),
        (s.props = r),
        (s.state = S),
        (s.context = a),
        (r = u))
      : (typeof s.componentDidUpdate != "function" ||
          (l === e.memoizedProps && g === e.memoizedState) ||
          (t.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" ||
          (l === e.memoizedProps && g === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return xu(e, t, n, r, i, o);
}
function xu(e, t, n, r, o, i) {
  Rm(e, t);
  var s = (t.flags & 128) !== 0;
  if (!r && !s) return o && uf(t, n, !1), un(e, t, i);
  (r = t.stateNode), (ww.current = t);
  var l =
    s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && s
      ? ((t.child = vo(t, e.child, null, i)), (t.child = vo(t, null, l, i)))
      : We(e, t, l, i),
    (t.memoizedState = r.state),
    o && uf(t, n, !0),
    t.child
  );
}
function jm(e) {
  var t = e.stateNode;
  t.pendingContext
    ? af(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && af(e, t.context, !1),
    Pc(e, t.containerInfo);
}
function Nf(e, t, n, r, o) {
  return mo(), Sc(o), (t.flags |= 256), We(e, t, n, r), t.child;
}
var wu = { dehydrated: null, treeContext: null, retryLane: 0 };
function Su(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Om(e, t, n) {
  var r = t.pendingProps,
    o = ge.current,
    i = !1,
    s = (t.flags & 128) !== 0,
    l;
  if (
    ((l = s) ||
      (l = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    l
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (o |= 1),
    ue(ge, o & 1),
    e === null)
  )
    return (
      pu(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((s = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (s = { mode: "hidden", children: s }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = s))
                : (i = bl(s, r, 0, null)),
              (e = pr(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = Su(n)),
              (t.memoizedState = wu),
              e)
            : Ic(t, s))
    );
  if (((o = e.memoizedState), o !== null && ((l = o.dehydrated), l !== null)))
    return Sw(e, t, s, r, l, o, n);
  if (i) {
    (i = r.fallback), (s = t.mode), (o = e.child), (l = o.sibling);
    var a = { mode: "hidden", children: r.children };
    return (
      !(s & 1) && t.child !== o
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = a),
          (t.deletions = null))
        : ((r = Bn(o, a)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
      l !== null ? (i = Bn(l, i)) : ((i = pr(i, s, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (s = e.child.memoizedState),
      (s =
        s === null
          ? Su(n)
          : {
              baseLanes: s.baseLanes | n,
              cachePool: null,
              transitions: s.transitions,
            }),
      (i.memoizedState = s),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = wu),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = Bn(i, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Ic(e, t) {
  return (
    (t = bl({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function rs(e, t, n, r) {
  return (
    r !== null && Sc(r),
    vo(t, e.child, null, n),
    (e = Ic(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Sw(e, t, n, r, o, i, s) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = wa(Error(j(422)))), rs(e, t, s, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = r.fallback),
        (o = t.mode),
        (r = bl({ mode: "visible", children: r.children }, o, 0, null)),
        (i = pr(i, o, s, null)),
        (i.flags |= 2),
        (r.return = t),
        (i.return = t),
        (r.sibling = i),
        (t.child = r),
        t.mode & 1 && vo(t, e.child, null, s),
        (t.child.memoizedState = Su(s)),
        (t.memoizedState = wu),
        i);
  if (!(t.mode & 1)) return rs(e, t, s, null);
  if (o.data === "$!") {
    if (((r = o.nextSibling && o.nextSibling.dataset), r)) var l = r.dgst;
    return (r = l), (i = Error(j(419))), (r = wa(i, r, void 0)), rs(e, t, s, r);
  }
  if (((l = (s & e.childLanes) !== 0), Xe || l)) {
    if (((r = je), r !== null)) {
      switch (s & -s) {
        case 4:
          o = 2;
          break;
        case 16:
          o = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          o = 32;
          break;
        case 536870912:
          o = 268435456;
          break;
        default:
          o = 0;
      }
      (o = o & (r.suspendedLanes | s) ? 0 : o),
        o !== 0 &&
          o !== i.retryLane &&
          ((i.retryLane = o), an(e, o), Ot(r, e, o, -1));
    }
    return Bc(), (r = wa(Error(j(421)))), rs(e, t, s, r);
  }
  return o.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Mw.bind(null, e)),
      (o._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (nt = Ln(o.nextSibling)),
      (rt = t),
      (ve = !0),
      (Rt = null),
      e !== null &&
        ((dt[ft++] = tn),
        (dt[ft++] = nn),
        (dt[ft++] = vr),
        (tn = e.id),
        (nn = e.overflow),
        (vr = t)),
      (t = Ic(t, r.children)),
      (t.flags |= 4096),
      t);
}
function kf(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), hu(e.return, t, n);
}
function Sa(e, t, n, r, o) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = o));
}
function _m(e, t, n) {
  var r = t.pendingProps,
    o = r.revealOrder,
    i = r.tail;
  if ((We(e, t, r.children, n), (r = ge.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && kf(e, n, t);
        else if (e.tag === 19) kf(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((ue(ge, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          (e = n.alternate),
            e !== null && Xs(e) === null && (o = n),
            (n = n.sibling);
        (n = o),
          n === null
            ? ((o = t.child), (t.child = null))
            : ((o = n.sibling), (n.sibling = null)),
          Sa(t, !1, o, n, i);
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (((e = o.alternate), e !== null && Xs(e) === null)) {
            t.child = o;
            break;
          }
          (e = o.sibling), (o.sibling = n), (n = o), (o = e);
        }
        Sa(t, !0, n, null, i);
        break;
      case "together":
        Sa(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function bs(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function un(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (yr |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(j(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Bn(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Bn(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function Cw(e, t, n) {
  switch (t.tag) {
    case 3:
      jm(t), mo();
      break;
    case 5:
      om(t);
      break;
    case 1:
      Ze(t.type) && Vs(t);
      break;
    case 4:
      Pc(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        o = t.memoizedProps.value;
      ue(Ks, r._currentValue), (r._currentValue = o);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (ue(ge, ge.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Om(e, t, n)
          : (ue(ge, ge.current & 1),
            (e = un(e, t, n)),
            e !== null ? e.sibling : null);
      ue(ge, ge.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return _m(e, t, n);
        t.flags |= 128;
      }
      if (
        ((o = t.memoizedState),
        o !== null &&
          ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
        ue(ge, ge.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Tm(e, t, n);
  }
  return un(e, t, n);
}
var Am, Cu, Mm, Im;
Am = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Cu = function () {};
Mm = function (e, t, n, r) {
  var o = e.memoizedProps;
  if (o !== r) {
    (e = t.stateNode), ir(Qt.current);
    var i = null;
    switch (n) {
      case "input":
        (o = Va(e, o)), (r = Va(e, r)), (i = []);
        break;
      case "select":
        (o = xe({}, o, { value: void 0 })),
          (r = xe({}, r, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (o = Ka(e, o)), (r = Ka(e, r)), (i = []);
        break;
      default:
        typeof o.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Us);
    }
    Ya(n, r);
    var s;
    n = null;
    for (u in o)
      if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
        if (u === "style") {
          var l = o[u];
          for (s in l) l.hasOwnProperty(s) && (n || (n = {}), (n[s] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (ai.hasOwnProperty(u)
              ? i || (i = [])
              : (i = i || []).push(u, null));
    for (u in r) {
      var a = r[u];
      if (
        ((l = o != null ? o[u] : void 0),
        r.hasOwnProperty(u) && a !== l && (a != null || l != null))
      )
        if (u === "style")
          if (l) {
            for (s in l)
              !l.hasOwnProperty(s) ||
                (a && a.hasOwnProperty(s)) ||
                (n || (n = {}), (n[s] = ""));
            for (s in a)
              a.hasOwnProperty(s) &&
                l[s] !== a[s] &&
                (n || (n = {}), (n[s] = a[s]));
          } else n || (i || (i = []), i.push(u, n)), (n = a);
        else
          u === "dangerouslySetInnerHTML"
            ? ((a = a ? a.__html : void 0),
              (l = l ? l.__html : void 0),
              a != null && l !== a && (i = i || []).push(u, a))
            : u === "children"
            ? (typeof a != "string" && typeof a != "number") ||
              (i = i || []).push(u, "" + a)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (ai.hasOwnProperty(u)
                ? (a != null && u === "onScroll" && fe("scroll", e),
                  i || l === a || (i = []))
                : (i = i || []).push(u, a));
    }
    n && (i = i || []).push("style", n);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
Im = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Bo(e, t) {
  if (!ve)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function Fe(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags & 14680064),
        (r |= o.flags & 14680064),
        (o.return = e),
        (o = o.sibling);
  else
    for (o = e.child; o !== null; )
      (n |= o.lanes | o.childLanes),
        (r |= o.subtreeFlags),
        (r |= o.flags),
        (o.return = e),
        (o = o.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function Ew(e, t, n) {
  var r = t.pendingProps;
  switch ((wc(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Fe(t), null;
    case 1:
      return Ze(t.type) && Ws(), Fe(t), null;
    case 3:
      return (
        (r = t.stateNode),
        go(),
        pe(qe),
        pe(Be),
        Rc(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (ts(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Rt !== null && (ju(Rt), (Rt = null)))),
        Cu(e, t),
        Fe(t),
        null
      );
    case 5:
      Tc(t);
      var o = ir(wi.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Mm(e, t, n, r, o),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(j(166));
          return Fe(t), null;
        }
        if (((e = ir(Qt.current)), ts(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[Ut] = t), (r[yi] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              fe("cancel", r), fe("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              fe("load", r);
              break;
            case "video":
            case "audio":
              for (o = 0; o < Go.length; o++) fe(Go[o], r);
              break;
            case "source":
              fe("error", r);
              break;
            case "img":
            case "image":
            case "link":
              fe("error", r), fe("load", r);
              break;
            case "details":
              fe("toggle", r);
              break;
            case "input":
              Md(r, i), fe("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                fe("invalid", r);
              break;
            case "textarea":
              Dd(r, i), fe("invalid", r);
          }
          Ya(n, i), (o = null);
          for (var s in i)
            if (i.hasOwnProperty(s)) {
              var l = i[s];
              s === "children"
                ? typeof l == "string"
                  ? r.textContent !== l &&
                    (i.suppressHydrationWarning !== !0 &&
                      es(r.textContent, l, e),
                    (o = ["children", l]))
                  : typeof l == "number" &&
                    r.textContent !== "" + l &&
                    (i.suppressHydrationWarning !== !0 &&
                      es(r.textContent, l, e),
                    (o = ["children", "" + l]))
                : ai.hasOwnProperty(s) &&
                  l != null &&
                  s === "onScroll" &&
                  fe("scroll", r);
            }
          switch (n) {
            case "input":
              Qi(r), Id(r, i, !0);
              break;
            case "textarea":
              Qi(r), Ld(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = Us);
          }
          (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (s = o.nodeType === 9 ? o : o.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = uh(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = s.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = s.createElement(n, { is: r.is }))
                : ((e = s.createElement(n)),
                  n === "select" &&
                    ((s = e),
                    r.multiple
                      ? (s.multiple = !0)
                      : r.size && (s.size = r.size)))
              : (e = s.createElementNS(e, n)),
            (e[Ut] = t),
            (e[yi] = r),
            Am(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((s = Xa(n, r)), n)) {
              case "dialog":
                fe("cancel", e), fe("close", e), (o = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                fe("load", e), (o = r);
                break;
              case "video":
              case "audio":
                for (o = 0; o < Go.length; o++) fe(Go[o], e);
                o = r;
                break;
              case "source":
                fe("error", e), (o = r);
                break;
              case "img":
              case "image":
              case "link":
                fe("error", e), fe("load", e), (o = r);
                break;
              case "details":
                fe("toggle", e), (o = r);
                break;
              case "input":
                Md(e, r), (o = Va(e, r)), fe("invalid", e);
                break;
              case "option":
                o = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (o = xe({}, r, { value: void 0 })),
                  fe("invalid", e);
                break;
              case "textarea":
                Dd(e, r), (o = Ka(e, r)), fe("invalid", e);
                break;
              default:
                o = r;
            }
            Ya(n, o), (l = o);
            for (i in l)
              if (l.hasOwnProperty(i)) {
                var a = l[i];
                i === "style"
                  ? fh(e, a)
                  : i === "dangerouslySetInnerHTML"
                  ? ((a = a ? a.__html : void 0), a != null && ch(e, a))
                  : i === "children"
                  ? typeof a == "string"
                    ? (n !== "textarea" || a !== "") && ui(e, a)
                    : typeof a == "number" && ui(e, "" + a)
                  : i !== "suppressContentEditableWarning" &&
                    i !== "suppressHydrationWarning" &&
                    i !== "autoFocus" &&
                    (ai.hasOwnProperty(i)
                      ? a != null && i === "onScroll" && fe("scroll", e)
                      : a != null && ic(e, i, a, s));
              }
            switch (n) {
              case "input":
                Qi(e), Id(e, r, !1);
                break;
              case "textarea":
                Qi(e), Ld(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Un(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? Gr(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      Gr(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof o.onClick == "function" && (e.onclick = Us);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return Fe(t), null;
    case 6:
      if (e && t.stateNode != null) Im(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(j(166));
        if (((n = ir(wi.current)), ir(Qt.current), ts(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Ut] = t),
            (i = r.nodeValue !== n) && ((e = rt), e !== null))
          )
            switch (e.tag) {
              case 3:
                es(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  es(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Ut] = t),
            (t.stateNode = r);
      }
      return Fe(t), null;
    case 13:
      if (
        (pe(ge),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (ve && nt !== null && t.mode & 1 && !(t.flags & 128))
          Jh(), mo(), (t.flags |= 98560), (i = !1);
        else if (((i = ts(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(j(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(j(317));
            i[Ut] = t;
          } else
            mo(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Fe(t), (i = !1);
        } else Rt !== null && (ju(Rt), (Rt = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || ge.current & 1 ? Pe === 0 && (Pe = 3) : Bc())),
          t.updateQueue !== null && (t.flags |= 4),
          Fe(t),
          null);
    case 4:
      return (
        go(), Cu(e, t), e === null && vi(t.stateNode.containerInfo), Fe(t), null
      );
    case 10:
      return bc(t.type._context), Fe(t), null;
    case 17:
      return Ze(t.type) && Ws(), Fe(t), null;
    case 19:
      if ((pe(ge), (i = t.memoizedState), i === null)) return Fe(t), null;
      if (((r = (t.flags & 128) !== 0), (s = i.rendering), s === null))
        if (r) Bo(i, !1);
        else {
          if (Pe !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((s = Xs(e)), s !== null)) {
                for (
                  t.flags |= 128,
                    Bo(i, !1),
                    r = s.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (s = i.alternate),
                    s === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = s.childLanes),
                        (i.lanes = s.lanes),
                        (i.child = s.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = s.memoizedProps),
                        (i.memoizedState = s.memoizedState),
                        (i.updateQueue = s.updateQueue),
                        (i.type = s.type),
                        (e = s.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return ue(ge, (ge.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            be() > xo &&
            ((t.flags |= 128), (r = !0), Bo(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Xs(s)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Bo(i, !0),
              i.tail === null && i.tailMode === "hidden" && !s.alternate && !ve)
            )
              return Fe(t), null;
          } else
            2 * be() - i.renderingStartTime > xo &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Bo(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((s.sibling = t.child), (t.child = s))
          : ((n = i.last),
            n !== null ? (n.sibling = s) : (t.child = s),
            (i.last = s));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = be()),
          (t.sibling = null),
          (n = ge.current),
          ue(ge, r ? (n & 1) | 2 : n & 1),
          t)
        : (Fe(t), null);
    case 22:
    case 23:
      return (
        $c(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? et & 1073741824 && (Fe(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Fe(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(j(156, t.tag));
}
function bw(e, t) {
  switch ((wc(t), t.tag)) {
    case 1:
      return (
        Ze(t.type) && Ws(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        go(),
        pe(qe),
        pe(Be),
        Rc(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Tc(t), null;
    case 13:
      if (
        (pe(ge), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(j(340));
        mo();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return pe(ge), null;
    case 4:
      return go(), null;
    case 10:
      return bc(t.type._context), null;
    case 22:
    case 23:
      return $c(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var os = !1,
  $e = !1,
  Nw = typeof WeakSet == "function" ? WeakSet : Set,
  F = null;
function Qr(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        Ee(e, t, r);
      }
    else n.current = null;
}
function Eu(e, t, n) {
  try {
    n();
  } catch (r) {
    Ee(e, t, r);
  }
}
var Pf = !1;
function kw(e, t) {
  if (((su = zs), (e = $h()), yc(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var o = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var s = 0,
            l = -1,
            a = -1,
            u = 0,
            d = 0,
            p = e,
            g = null;
          t: for (;;) {
            for (
              var m;
              p !== n || (o !== 0 && p.nodeType !== 3) || (l = s + o),
                p !== i || (r !== 0 && p.nodeType !== 3) || (a = s + r),
                p.nodeType === 3 && (s += p.nodeValue.length),
                (m = p.firstChild) !== null;

            )
              (g = p), (p = m);
            for (;;) {
              if (p === e) break t;
              if (
                (g === n && ++u === o && (l = s),
                g === i && ++d === r && (a = s),
                (m = p.nextSibling) !== null)
              )
                break;
              (p = g), (g = p.parentNode);
            }
            p = m;
          }
          n = l === -1 || a === -1 ? null : { start: l, end: a };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (lu = { focusedElem: e, selectionRange: n }, zs = !1, F = t; F !== null; )
    if (((t = F), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (F = e);
    else
      for (; F !== null; ) {
        t = F;
        try {
          var S = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (S !== null) {
                  var v = S.memoizedProps,
                    w = S.memoizedState,
                    y = t.stateNode,
                    h = y.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? v : bt(t.type, v),
                      w
                    );
                  y.__reactInternalSnapshotBeforeUpdate = h;
                }
                break;
              case 3:
                var x = t.stateNode.containerInfo;
                x.nodeType === 1
                  ? (x.textContent = "")
                  : x.nodeType === 9 &&
                    x.documentElement &&
                    x.removeChild(x.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(j(163));
            }
        } catch (C) {
          Ee(t, t.return, C);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (F = e);
          break;
        }
        F = t.return;
      }
  return (S = Pf), (Pf = !1), S;
}
function oi(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var o = (r = r.next);
    do {
      if ((o.tag & e) === e) {
        var i = o.destroy;
        (o.destroy = void 0), i !== void 0 && Eu(t, n, i);
      }
      o = o.next;
    } while (o !== r);
  }
}
function Cl(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function bu(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Dm(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Dm(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Ut], delete t[yi], delete t[cu], delete t[aw], delete t[uw])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Lm(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Tf(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Lm(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Nu(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Us));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Nu(e, t, n), e = e.sibling; e !== null; ) Nu(e, t, n), (e = e.sibling);
}
function ku(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ku(e, t, n), e = e.sibling; e !== null; ) ku(e, t, n), (e = e.sibling);
}
var Oe = null,
  Tt = !1;
function gn(e, t, n) {
  for (n = n.child; n !== null; ) Fm(e, t, n), (n = n.sibling);
}
function Fm(e, t, n) {
  if (Ht && typeof Ht.onCommitFiberUnmount == "function")
    try {
      Ht.onCommitFiberUnmount(hl, n);
    } catch {}
  switch (n.tag) {
    case 5:
      $e || Qr(n, t);
    case 6:
      var r = Oe,
        o = Tt;
      (Oe = null),
        gn(e, t, n),
        (Oe = r),
        (Tt = o),
        Oe !== null &&
          (Tt
            ? ((e = Oe),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : Oe.removeChild(n.stateNode));
      break;
    case 18:
      Oe !== null &&
        (Tt
          ? ((e = Oe),
            (n = n.stateNode),
            e.nodeType === 8
              ? ha(e.parentNode, n)
              : e.nodeType === 1 && ha(e, n),
            pi(e))
          : ha(Oe, n.stateNode));
      break;
    case 4:
      (r = Oe),
        (o = Tt),
        (Oe = n.stateNode.containerInfo),
        (Tt = !0),
        gn(e, t, n),
        (Oe = r),
        (Tt = o);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !$e &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        o = r = r.next;
        do {
          var i = o,
            s = i.destroy;
          (i = i.tag),
            s !== void 0 && (i & 2 || i & 4) && Eu(n, t, s),
            (o = o.next);
        } while (o !== r);
      }
      gn(e, t, n);
      break;
    case 1:
      if (
        !$e &&
        (Qr(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (l) {
          Ee(n, t, l);
        }
      gn(e, t, n);
      break;
    case 21:
      gn(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? (($e = (r = $e) || n.memoizedState !== null), gn(e, t, n), ($e = r))
        : gn(e, t, n);
      break;
    default:
      gn(e, t, n);
  }
}
function Rf(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Nw()),
      t.forEach(function (r) {
        var o = Iw.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(o, o));
      });
  }
}
function St(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var o = n[r];
      try {
        var i = e,
          s = t,
          l = s;
        e: for (; l !== null; ) {
          switch (l.tag) {
            case 5:
              (Oe = l.stateNode), (Tt = !1);
              break e;
            case 3:
              (Oe = l.stateNode.containerInfo), (Tt = !0);
              break e;
            case 4:
              (Oe = l.stateNode.containerInfo), (Tt = !0);
              break e;
          }
          l = l.return;
        }
        if (Oe === null) throw Error(j(160));
        Fm(i, s, o), (Oe = null), (Tt = !1);
        var a = o.alternate;
        a !== null && (a.return = null), (o.return = null);
      } catch (u) {
        Ee(o, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) zm(t, e), (t = t.sibling);
}
function zm(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((St(t, e), Lt(e), r & 4)) {
        try {
          oi(3, e, e.return), Cl(3, e);
        } catch (v) {
          Ee(e, e.return, v);
        }
        try {
          oi(5, e, e.return);
        } catch (v) {
          Ee(e, e.return, v);
        }
      }
      break;
    case 1:
      St(t, e), Lt(e), r & 512 && n !== null && Qr(n, n.return);
      break;
    case 5:
      if (
        (St(t, e),
        Lt(e),
        r & 512 && n !== null && Qr(n, n.return),
        e.flags & 32)
      ) {
        var o = e.stateNode;
        try {
          ui(o, "");
        } catch (v) {
          Ee(e, e.return, v);
        }
      }
      if (r & 4 && ((o = e.stateNode), o != null)) {
        var i = e.memoizedProps,
          s = n !== null ? n.memoizedProps : i,
          l = e.type,
          a = e.updateQueue;
        if (((e.updateQueue = null), a !== null))
          try {
            l === "input" && i.type === "radio" && i.name != null && lh(o, i),
              Xa(l, s);
            var u = Xa(l, i);
            for (s = 0; s < a.length; s += 2) {
              var d = a[s],
                p = a[s + 1];
              d === "style"
                ? fh(o, p)
                : d === "dangerouslySetInnerHTML"
                ? ch(o, p)
                : d === "children"
                ? ui(o, p)
                : ic(o, d, p, u);
            }
            switch (l) {
              case "input":
                Ha(o, i);
                break;
              case "textarea":
                ah(o, i);
                break;
              case "select":
                var g = o._wrapperState.wasMultiple;
                o._wrapperState.wasMultiple = !!i.multiple;
                var m = i.value;
                m != null
                  ? Gr(o, !!i.multiple, m, !1)
                  : g !== !!i.multiple &&
                    (i.defaultValue != null
                      ? Gr(o, !!i.multiple, i.defaultValue, !0)
                      : Gr(o, !!i.multiple, i.multiple ? [] : "", !1));
            }
            o[yi] = i;
          } catch (v) {
            Ee(e, e.return, v);
          }
      }
      break;
    case 6:
      if ((St(t, e), Lt(e), r & 4)) {
        if (e.stateNode === null) throw Error(j(162));
        (o = e.stateNode), (i = e.memoizedProps);
        try {
          o.nodeValue = i;
        } catch (v) {
          Ee(e, e.return, v);
        }
      }
      break;
    case 3:
      if (
        (St(t, e), Lt(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          pi(t.containerInfo);
        } catch (v) {
          Ee(e, e.return, v);
        }
      break;
    case 4:
      St(t, e), Lt(e);
      break;
    case 13:
      St(t, e),
        Lt(e),
        (o = e.child),
        o.flags & 8192 &&
          ((i = o.memoizedState !== null),
          (o.stateNode.isHidden = i),
          !i ||
            (o.alternate !== null && o.alternate.memoizedState !== null) ||
            (Fc = be())),
        r & 4 && Rf(e);
      break;
    case 22:
      if (
        ((d = n !== null && n.memoizedState !== null),
        e.mode & 1 ? (($e = (u = $e) || d), St(t, e), ($e = u)) : St(t, e),
        Lt(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !d && e.mode & 1)
        )
          for (F = e, d = e.child; d !== null; ) {
            for (p = F = d; F !== null; ) {
              switch (((g = F), (m = g.child), g.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  oi(4, g, g.return);
                  break;
                case 1:
                  Qr(g, g.return);
                  var S = g.stateNode;
                  if (typeof S.componentWillUnmount == "function") {
                    (r = g), (n = g.return);
                    try {
                      (t = r),
                        (S.props = t.memoizedProps),
                        (S.state = t.memoizedState),
                        S.componentWillUnmount();
                    } catch (v) {
                      Ee(r, n, v);
                    }
                  }
                  break;
                case 5:
                  Qr(g, g.return);
                  break;
                case 22:
                  if (g.memoizedState !== null) {
                    Of(p);
                    continue;
                  }
              }
              m !== null ? ((m.return = g), (F = m)) : Of(p);
            }
            d = d.sibling;
          }
        e: for (d = null, p = e; ; ) {
          if (p.tag === 5) {
            if (d === null) {
              d = p;
              try {
                (o = p.stateNode),
                  u
                    ? ((i = o.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((l = p.stateNode),
                      (a = p.memoizedProps.style),
                      (s =
                        a != null && a.hasOwnProperty("display")
                          ? a.display
                          : null),
                      (l.style.display = dh("display", s)));
              } catch (v) {
                Ee(e, e.return, v);
              }
            }
          } else if (p.tag === 6) {
            if (d === null)
              try {
                p.stateNode.nodeValue = u ? "" : p.memoizedProps;
              } catch (v) {
                Ee(e, e.return, v);
              }
          } else if (
            ((p.tag !== 22 && p.tag !== 23) ||
              p.memoizedState === null ||
              p === e) &&
            p.child !== null
          ) {
            (p.child.return = p), (p = p.child);
            continue;
          }
          if (p === e) break e;
          for (; p.sibling === null; ) {
            if (p.return === null || p.return === e) break e;
            d === p && (d = null), (p = p.return);
          }
          d === p && (d = null), (p.sibling.return = p.return), (p = p.sibling);
        }
      }
      break;
    case 19:
      St(t, e), Lt(e), r & 4 && Rf(e);
      break;
    case 21:
      break;
    default:
      St(t, e), Lt(e);
  }
}
function Lt(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Lm(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(j(160));
      }
      switch (r.tag) {
        case 5:
          var o = r.stateNode;
          r.flags & 32 && (ui(o, ""), (r.flags &= -33));
          var i = Tf(e);
          ku(e, i, o);
          break;
        case 3:
        case 4:
          var s = r.stateNode.containerInfo,
            l = Tf(e);
          Nu(e, l, s);
          break;
        default:
          throw Error(j(161));
      }
    } catch (a) {
      Ee(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Pw(e, t, n) {
  (F = e), $m(e);
}
function $m(e, t, n) {
  for (var r = (e.mode & 1) !== 0; F !== null; ) {
    var o = F,
      i = o.child;
    if (o.tag === 22 && r) {
      var s = o.memoizedState !== null || os;
      if (!s) {
        var l = o.alternate,
          a = (l !== null && l.memoizedState !== null) || $e;
        l = os;
        var u = $e;
        if (((os = s), ($e = a) && !u))
          for (F = o; F !== null; )
            (s = F),
              (a = s.child),
              s.tag === 22 && s.memoizedState !== null
                ? _f(o)
                : a !== null
                ? ((a.return = s), (F = a))
                : _f(o);
        for (; i !== null; ) (F = i), $m(i), (i = i.sibling);
        (F = o), (os = l), ($e = u);
      }
      jf(e);
    } else
      o.subtreeFlags & 8772 && i !== null ? ((i.return = o), (F = i)) : jf(e);
  }
}
function jf(e) {
  for (; F !== null; ) {
    var t = F;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              $e || Cl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !$e)
                if (n === null) r.componentDidMount();
                else {
                  var o =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : bt(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    o,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var i = t.updateQueue;
              i !== null && hf(t, i, r);
              break;
            case 3:
              var s = t.updateQueue;
              if (s !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                hf(t, s, n);
              }
              break;
            case 5:
              var l = t.stateNode;
              if (n === null && t.flags & 4) {
                n = l;
                var a = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    a.autoFocus && n.focus();
                    break;
                  case "img":
                    a.src && (n.src = a.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var d = u.memoizedState;
                  if (d !== null) {
                    var p = d.dehydrated;
                    p !== null && pi(p);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(j(163));
          }
        $e || (t.flags & 512 && bu(t));
      } catch (g) {
        Ee(t, t.return, g);
      }
    }
    if (t === e) {
      F = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (F = n);
      break;
    }
    F = t.return;
  }
}
function Of(e) {
  for (; F !== null; ) {
    var t = F;
    if (t === e) {
      F = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (F = n);
      break;
    }
    F = t.return;
  }
}
function _f(e) {
  for (; F !== null; ) {
    var t = F;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Cl(4, t);
          } catch (a) {
            Ee(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var o = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              Ee(t, o, a);
            }
          }
          var i = t.return;
          try {
            bu(t);
          } catch (a) {
            Ee(t, i, a);
          }
          break;
        case 5:
          var s = t.return;
          try {
            bu(t);
          } catch (a) {
            Ee(t, s, a);
          }
      }
    } catch (a) {
      Ee(t, t.return, a);
    }
    if (t === e) {
      F = null;
      break;
    }
    var l = t.sibling;
    if (l !== null) {
      (l.return = t.return), (F = l);
      break;
    }
    F = t.return;
  }
}
var Tw = Math.ceil,
  Js = fn.ReactCurrentDispatcher,
  Dc = fn.ReactCurrentOwner,
  ht = fn.ReactCurrentBatchConfig,
  te = 0,
  je = null,
  Ne = null,
  _e = 0,
  et = 0,
  Kr = Kn(0),
  Pe = 0,
  bi = null,
  yr = 0,
  El = 0,
  Lc = 0,
  ii = null,
  Ye = null,
  Fc = 0,
  xo = 1 / 0,
  Zt = null,
  el = !1,
  Pu = null,
  zn = null,
  is = !1,
  _n = null,
  tl = 0,
  si = 0,
  Tu = null,
  Ns = -1,
  ks = 0;
function He() {
  return te & 6 ? be() : Ns !== -1 ? Ns : (Ns = be());
}
function $n(e) {
  return e.mode & 1
    ? te & 2 && _e !== 0
      ? _e & -_e
      : dw.transition !== null
      ? (ks === 0 && (ks = bh()), ks)
      : ((e = le),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Oh(e.type))),
        e)
    : 1;
}
function Ot(e, t, n, r) {
  if (50 < si) throw ((si = 0), (Tu = null), Error(j(185)));
  Ii(e, n, r),
    (!(te & 2) || e !== je) &&
      (e === je && (!(te & 2) && (El |= n), Pe === 4 && Nn(e, _e)),
      Je(e, r),
      n === 1 && te === 0 && !(t.mode & 1) && ((xo = be() + 500), xl && Gn()));
}
function Je(e, t) {
  var n = e.callbackNode;
  dx(e, t);
  var r = Fs(e, e === je ? _e : 0);
  if (r === 0)
    n !== null && $d(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && $d(n), t === 1))
      e.tag === 0 ? cw(Af.bind(null, e)) : Xh(Af.bind(null, e)),
        sw(function () {
          !(te & 6) && Gn();
        }),
        (n = null);
    else {
      switch (Nh(r)) {
        case 1:
          n = cc;
          break;
        case 4:
          n = Ch;
          break;
        case 16:
          n = Ls;
          break;
        case 536870912:
          n = Eh;
          break;
        default:
          n = Ls;
      }
      n = Gm(n, Bm.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Bm(e, t) {
  if (((Ns = -1), (ks = 0), te & 6)) throw Error(j(327));
  var n = e.callbackNode;
  if (Jr() && e.callbackNode !== n) return null;
  var r = Fs(e, e === je ? _e : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = nl(e, r);
  else {
    t = r;
    var o = te;
    te |= 2;
    var i = Wm();
    (je !== e || _e !== t) && ((Zt = null), (xo = be() + 500), fr(e, t));
    do
      try {
        Ow();
        break;
      } catch (l) {
        Um(e, l);
      }
    while (!0);
    Ec(),
      (Js.current = i),
      (te = o),
      Ne !== null ? (t = 0) : ((je = null), (_e = 0), (t = Pe));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((o = tu(e)), o !== 0 && ((r = o), (t = Ru(e, o)))), t === 1)
    )
      throw ((n = bi), fr(e, 0), Nn(e, r), Je(e, be()), n);
    if (t === 6) Nn(e, r);
    else {
      if (
        ((o = e.current.alternate),
        !(r & 30) &&
          !Rw(o) &&
          ((t = nl(e, r)),
          t === 2 && ((i = tu(e)), i !== 0 && ((r = i), (t = Ru(e, i)))),
          t === 1))
      )
        throw ((n = bi), fr(e, 0), Nn(e, r), Je(e, be()), n);
      switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(j(345));
        case 2:
          nr(e, Ye, Zt);
          break;
        case 3:
          if (
            (Nn(e, r), (r & 130023424) === r && ((t = Fc + 500 - be()), 10 < t))
          ) {
            if (Fs(e, 0) !== 0) break;
            if (((o = e.suspendedLanes), (o & r) !== r)) {
              He(), (e.pingedLanes |= e.suspendedLanes & o);
              break;
            }
            e.timeoutHandle = uu(nr.bind(null, e, Ye, Zt), t);
            break;
          }
          nr(e, Ye, Zt);
          break;
        case 4:
          if ((Nn(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, o = -1; 0 < r; ) {
            var s = 31 - jt(r);
            (i = 1 << s), (s = t[s]), s > o && (o = s), (r &= ~i);
          }
          if (
            ((r = o),
            (r = be() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * Tw(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = uu(nr.bind(null, e, Ye, Zt), r);
            break;
          }
          nr(e, Ye, Zt);
          break;
        case 5:
          nr(e, Ye, Zt);
          break;
        default:
          throw Error(j(329));
      }
    }
  }
  return Je(e, be()), e.callbackNode === n ? Bm.bind(null, e) : null;
}
function Ru(e, t) {
  var n = ii;
  return (
    e.current.memoizedState.isDehydrated && (fr(e, t).flags |= 256),
    (e = nl(e, t)),
    e !== 2 && ((t = Ye), (Ye = n), t !== null && ju(t)),
    e
  );
}
function ju(e) {
  Ye === null ? (Ye = e) : Ye.push.apply(Ye, e);
}
function Rw(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var o = n[r],
            i = o.getSnapshot;
          o = o.value;
          try {
            if (!_t(i(), o)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function Nn(e, t) {
  for (
    t &= ~Lc,
      t &= ~El,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - jt(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Af(e) {
  if (te & 6) throw Error(j(327));
  Jr();
  var t = Fs(e, 0);
  if (!(t & 1)) return Je(e, be()), null;
  var n = nl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = tu(e);
    r !== 0 && ((t = r), (n = Ru(e, r)));
  }
  if (n === 1) throw ((n = bi), fr(e, 0), Nn(e, t), Je(e, be()), n);
  if (n === 6) throw Error(j(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    nr(e, Ye, Zt),
    Je(e, be()),
    null
  );
}
function zc(e, t) {
  var n = te;
  te |= 1;
  try {
    return e(t);
  } finally {
    (te = n), te === 0 && ((xo = be() + 500), xl && Gn());
  }
}
function xr(e) {
  _n !== null && _n.tag === 0 && !(te & 6) && Jr();
  var t = te;
  te |= 1;
  var n = ht.transition,
    r = le;
  try {
    if (((ht.transition = null), (le = 1), e)) return e();
  } finally {
    (le = r), (ht.transition = n), (te = t), !(te & 6) && Gn();
  }
}
function $c() {
  (et = Kr.current), pe(Kr);
}
function fr(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), iw(n)), Ne !== null))
    for (n = Ne.return; n !== null; ) {
      var r = n;
      switch ((wc(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Ws();
          break;
        case 3:
          go(), pe(qe), pe(Be), Rc();
          break;
        case 5:
          Tc(r);
          break;
        case 4:
          go();
          break;
        case 13:
          pe(ge);
          break;
        case 19:
          pe(ge);
          break;
        case 10:
          bc(r.type._context);
          break;
        case 22:
        case 23:
          $c();
      }
      n = n.return;
    }
  if (
    ((je = e),
    (Ne = e = Bn(e.current, null)),
    (_e = et = t),
    (Pe = 0),
    (bi = null),
    (Lc = El = yr = 0),
    (Ye = ii = null),
    or !== null)
  ) {
    for (t = 0; t < or.length; t++)
      if (((n = or[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var o = r.next,
          i = n.pending;
        if (i !== null) {
          var s = i.next;
          (i.next = o), (r.next = s);
        }
        n.pending = r;
      }
    or = null;
  }
  return e;
}
function Um(e, t) {
  do {
    var n = Ne;
    try {
      if ((Ec(), (Cs.current = Zs), qs)) {
        for (var r = ye.memoizedState; r !== null; ) {
          var o = r.queue;
          o !== null && (o.pending = null), (r = r.next);
        }
        qs = !1;
      }
      if (
        ((gr = 0),
        (Re = ke = ye = null),
        (ri = !1),
        (Si = 0),
        (Dc.current = null),
        n === null || n.return === null)
      ) {
        (Pe = 1), (bi = t), (Ne = null);
        break;
      }
      e: {
        var i = e,
          s = n.return,
          l = n,
          a = t;
        if (
          ((t = _e),
          (l.flags |= 32768),
          a !== null && typeof a == "object" && typeof a.then == "function")
        ) {
          var u = a,
            d = l,
            p = d.tag;
          if (!(d.mode & 1) && (p === 0 || p === 11 || p === 15)) {
            var g = d.alternate;
            g
              ? ((d.updateQueue = g.updateQueue),
                (d.memoizedState = g.memoizedState),
                (d.lanes = g.lanes))
              : ((d.updateQueue = null), (d.memoizedState = null));
          }
          var m = wf(s);
          if (m !== null) {
            (m.flags &= -257),
              Sf(m, s, l, i, t),
              m.mode & 1 && xf(i, u, t),
              (t = m),
              (a = u);
            var S = t.updateQueue;
            if (S === null) {
              var v = new Set();
              v.add(a), (t.updateQueue = v);
            } else S.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              xf(i, u, t), Bc();
              break e;
            }
            a = Error(j(426));
          }
        } else if (ve && l.mode & 1) {
          var w = wf(s);
          if (w !== null) {
            !(w.flags & 65536) && (w.flags |= 256),
              Sf(w, s, l, i, t),
              Sc(yo(a, l));
            break e;
          }
        }
        (i = a = yo(a, l)),
          Pe !== 4 && (Pe = 2),
          ii === null ? (ii = [i]) : ii.push(i),
          (i = s);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var y = Nm(i, a, t);
              pf(i, y);
              break e;
            case 1:
              l = a;
              var h = i.type,
                x = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof h.getDerivedStateFromError == "function" ||
                  (x !== null &&
                    typeof x.componentDidCatch == "function" &&
                    (zn === null || !zn.has(x))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var C = km(i, l, t);
                pf(i, C);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Hm(n);
    } catch (E) {
      (t = E), Ne === n && n !== null && (Ne = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Wm() {
  var e = Js.current;
  return (Js.current = Zs), e === null ? Zs : e;
}
function Bc() {
  (Pe === 0 || Pe === 3 || Pe === 2) && (Pe = 4),
    je === null || (!(yr & 268435455) && !(El & 268435455)) || Nn(je, _e);
}
function nl(e, t) {
  var n = te;
  te |= 2;
  var r = Wm();
  (je !== e || _e !== t) && ((Zt = null), fr(e, t));
  do
    try {
      jw();
      break;
    } catch (o) {
      Um(e, o);
    }
  while (!0);
  if ((Ec(), (te = n), (Js.current = r), Ne !== null)) throw Error(j(261));
  return (je = null), (_e = 0), Pe;
}
function jw() {
  for (; Ne !== null; ) Vm(Ne);
}
function Ow() {
  for (; Ne !== null && !nx(); ) Vm(Ne);
}
function Vm(e) {
  var t = Km(e.alternate, e, et);
  (e.memoizedProps = e.pendingProps),
    t === null ? Hm(e) : (Ne = t),
    (Dc.current = null);
}
function Hm(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = bw(n, t)), n !== null)) {
        (n.flags &= 32767), (Ne = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (Pe = 6), (Ne = null);
        return;
      }
    } else if (((n = Ew(n, t, et)), n !== null)) {
      Ne = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Ne = t;
      return;
    }
    Ne = t = e;
  } while (t !== null);
  Pe === 0 && (Pe = 5);
}
function nr(e, t, n) {
  var r = le,
    o = ht.transition;
  try {
    (ht.transition = null), (le = 1), _w(e, t, n, r);
  } finally {
    (ht.transition = o), (le = r);
  }
  return null;
}
function _w(e, t, n, r) {
  do Jr();
  while (_n !== null);
  if (te & 6) throw Error(j(327));
  n = e.finishedWork;
  var o = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(j(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (fx(e, i),
    e === je && ((Ne = je = null), (_e = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      is ||
      ((is = !0),
      Gm(Ls, function () {
        return Jr(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = ht.transition), (ht.transition = null);
    var s = le;
    le = 1;
    var l = te;
    (te |= 4),
      (Dc.current = null),
      kw(e, n),
      zm(n, e),
      Zx(lu),
      (zs = !!su),
      (lu = su = null),
      (e.current = n),
      Pw(n),
      rx(),
      (te = l),
      (le = s),
      (ht.transition = i);
  } else e.current = n;
  if (
    (is && ((is = !1), (_n = e), (tl = o)),
    (i = e.pendingLanes),
    i === 0 && (zn = null),
    sx(n.stateNode),
    Je(e, be()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
  if (el) throw ((el = !1), (e = Pu), (Pu = null), e);
  return (
    tl & 1 && e.tag !== 0 && Jr(),
    (i = e.pendingLanes),
    i & 1 ? (e === Tu ? si++ : ((si = 0), (Tu = e))) : (si = 0),
    Gn(),
    null
  );
}
function Jr() {
  if (_n !== null) {
    var e = Nh(tl),
      t = ht.transition,
      n = le;
    try {
      if (((ht.transition = null), (le = 16 > e ? 16 : e), _n === null))
        var r = !1;
      else {
        if (((e = _n), (_n = null), (tl = 0), te & 6)) throw Error(j(331));
        var o = te;
        for (te |= 4, F = e.current; F !== null; ) {
          var i = F,
            s = i.child;
          if (F.flags & 16) {
            var l = i.deletions;
            if (l !== null) {
              for (var a = 0; a < l.length; a++) {
                var u = l[a];
                for (F = u; F !== null; ) {
                  var d = F;
                  switch (d.tag) {
                    case 0:
                    case 11:
                    case 15:
                      oi(8, d, i);
                  }
                  var p = d.child;
                  if (p !== null) (p.return = d), (F = p);
                  else
                    for (; F !== null; ) {
                      d = F;
                      var g = d.sibling,
                        m = d.return;
                      if ((Dm(d), d === u)) {
                        F = null;
                        break;
                      }
                      if (g !== null) {
                        (g.return = m), (F = g);
                        break;
                      }
                      F = m;
                    }
                }
              }
              var S = i.alternate;
              if (S !== null) {
                var v = S.child;
                if (v !== null) {
                  S.child = null;
                  do {
                    var w = v.sibling;
                    (v.sibling = null), (v = w);
                  } while (v !== null);
                }
              }
              F = i;
            }
          }
          if (i.subtreeFlags & 2064 && s !== null) (s.return = i), (F = s);
          else
            e: for (; F !== null; ) {
              if (((i = F), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    oi(9, i, i.return);
                }
              var y = i.sibling;
              if (y !== null) {
                (y.return = i.return), (F = y);
                break e;
              }
              F = i.return;
            }
        }
        var h = e.current;
        for (F = h; F !== null; ) {
          s = F;
          var x = s.child;
          if (s.subtreeFlags & 2064 && x !== null) (x.return = s), (F = x);
          else
            e: for (s = h; F !== null; ) {
              if (((l = F), l.flags & 2048))
                try {
                  switch (l.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Cl(9, l);
                  }
                } catch (E) {
                  Ee(l, l.return, E);
                }
              if (l === s) {
                F = null;
                break e;
              }
              var C = l.sibling;
              if (C !== null) {
                (C.return = l.return), (F = C);
                break e;
              }
              F = l.return;
            }
        }
        if (
          ((te = o), Gn(), Ht && typeof Ht.onPostCommitFiberRoot == "function")
        )
          try {
            Ht.onPostCommitFiberRoot(hl, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (le = n), (ht.transition = t);
    }
  }
  return !1;
}
function Mf(e, t, n) {
  (t = yo(n, t)),
    (t = Nm(e, t, 1)),
    (e = Fn(e, t, 1)),
    (t = He()),
    e !== null && (Ii(e, 1, t), Je(e, t));
}
function Ee(e, t, n) {
  if (e.tag === 3) Mf(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Mf(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (zn === null || !zn.has(r)))
        ) {
          (e = yo(n, e)),
            (e = km(t, e, 1)),
            (t = Fn(t, e, 1)),
            (e = He()),
            t !== null && (Ii(t, 1, e), Je(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function Aw(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = He()),
    (e.pingedLanes |= e.suspendedLanes & n),
    je === e &&
      (_e & n) === n &&
      (Pe === 4 || (Pe === 3 && (_e & 130023424) === _e && 500 > be() - Fc)
        ? fr(e, 0)
        : (Lc |= n)),
    Je(e, t);
}
function Qm(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = Yi), (Yi <<= 1), !(Yi & 130023424) && (Yi = 4194304))
      : (t = 1));
  var n = He();
  (e = an(e, t)), e !== null && (Ii(e, t, n), Je(e, n));
}
function Mw(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Qm(e, n);
}
function Iw(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        o = e.memoizedState;
      o !== null && (n = o.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(j(314));
  }
  r !== null && r.delete(t), Qm(e, n);
}
var Km;
Km = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || qe.current) Xe = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (Xe = !1), Cw(e, t, n);
      Xe = !!(e.flags & 131072);
    }
  else (Xe = !1), ve && t.flags & 1048576 && qh(t, Qs, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      bs(e, t), (e = t.pendingProps);
      var o = ho(t, Be.current);
      Zr(t, n), (o = Oc(null, t, r, e, o, n));
      var i = _c();
      return (
        (t.flags |= 1),
        typeof o == "object" &&
        o !== null &&
        typeof o.render == "function" &&
        o.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Ze(r) ? ((i = !0), Vs(t)) : (i = !1),
            (t.memoizedState =
              o.state !== null && o.state !== void 0 ? o.state : null),
            kc(t),
            (o.updater = Sl),
            (t.stateNode = o),
            (o._reactInternals = t),
            vu(t, r, e, n),
            (t = xu(null, t, r, !0, i, n)))
          : ((t.tag = 0), ve && i && xc(t), We(null, t, o, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (bs(e, t),
          (e = t.pendingProps),
          (o = r._init),
          (r = o(r._payload)),
          (t.type = r),
          (o = t.tag = Lw(r)),
          (e = bt(r, e)),
          o)
        ) {
          case 0:
            t = yu(null, t, r, e, n);
            break e;
          case 1:
            t = bf(null, t, r, e, n);
            break e;
          case 11:
            t = Cf(null, t, r, e, n);
            break e;
          case 14:
            t = Ef(null, t, r, bt(r.type, e), n);
            break e;
        }
        throw Error(j(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : bt(r, o)),
        yu(e, t, r, o, n)
      );
    case 1:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : bt(r, o)),
        bf(e, t, r, o, n)
      );
    case 3:
      e: {
        if ((jm(t), e === null)) throw Error(j(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (o = i.element),
          rm(e, t),
          Ys(t, r, null, n);
        var s = t.memoizedState;
        if (((r = s.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: s.cache,
              pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
              transitions: s.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (o = yo(Error(j(423)), t)), (t = Nf(e, t, r, n, o));
            break e;
          } else if (r !== o) {
            (o = yo(Error(j(424)), t)), (t = Nf(e, t, r, n, o));
            break e;
          } else
            for (
              nt = Ln(t.stateNode.containerInfo.firstChild),
                rt = t,
                ve = !0,
                Rt = null,
                n = tm(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((mo(), r === o)) {
            t = un(e, t, n);
            break e;
          }
          We(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        om(t),
        e === null && pu(t),
        (r = t.type),
        (o = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (s = o.children),
        au(r, o) ? (s = null) : i !== null && au(r, i) && (t.flags |= 32),
        Rm(e, t),
        We(e, t, s, n),
        t.child
      );
    case 6:
      return e === null && pu(t), null;
    case 13:
      return Om(e, t, n);
    case 4:
      return (
        Pc(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = vo(t, null, r, n)) : We(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : bt(r, o)),
        Cf(e, t, r, o, n)
      );
    case 7:
      return We(e, t, t.pendingProps, n), t.child;
    case 8:
      return We(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return We(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (o = t.pendingProps),
          (i = t.memoizedProps),
          (s = o.value),
          ue(Ks, r._currentValue),
          (r._currentValue = s),
          i !== null)
        )
          if (_t(i.value, s)) {
            if (i.children === o.children && !qe.current) {
              t = un(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var l = i.dependencies;
              if (l !== null) {
                s = i.child;
                for (var a = l.firstContext; a !== null; ) {
                  if (a.context === r) {
                    if (i.tag === 1) {
                      (a = rn(-1, n & -n)), (a.tag = 2);
                      var u = i.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var d = u.pending;
                        d === null
                          ? (a.next = a)
                          : ((a.next = d.next), (d.next = a)),
                          (u.pending = a);
                      }
                    }
                    (i.lanes |= n),
                      (a = i.alternate),
                      a !== null && (a.lanes |= n),
                      hu(i.return, n, t),
                      (l.lanes |= n);
                    break;
                  }
                  a = a.next;
                }
              } else if (i.tag === 10) s = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((s = i.return), s === null)) throw Error(j(341));
                (s.lanes |= n),
                  (l = s.alternate),
                  l !== null && (l.lanes |= n),
                  hu(s, n, t),
                  (s = i.sibling);
              } else s = i.child;
              if (s !== null) s.return = i;
              else
                for (s = i; s !== null; ) {
                  if (s === t) {
                    s = null;
                    break;
                  }
                  if (((i = s.sibling), i !== null)) {
                    (i.return = s.return), (s = i);
                    break;
                  }
                  s = s.return;
                }
              i = s;
            }
        We(e, t, o.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (o = t.type),
        (r = t.pendingProps.children),
        Zr(t, n),
        (o = mt(o)),
        (r = r(o)),
        (t.flags |= 1),
        We(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (o = bt(r, t.pendingProps)),
        (o = bt(r.type, o)),
        Ef(e, t, r, o, n)
      );
    case 15:
      return Pm(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (o = t.pendingProps),
        (o = t.elementType === r ? o : bt(r, o)),
        bs(e, t),
        (t.tag = 1),
        Ze(r) ? ((e = !0), Vs(t)) : (e = !1),
        Zr(t, n),
        bm(t, r, o),
        vu(t, r, o, n),
        xu(null, t, r, !0, e, n)
      );
    case 19:
      return _m(e, t, n);
    case 22:
      return Tm(e, t, n);
  }
  throw Error(j(156, t.tag));
};
function Gm(e, t) {
  return Sh(e, t);
}
function Dw(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function pt(e, t, n, r) {
  return new Dw(e, t, n, r);
}
function Uc(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Lw(e) {
  if (typeof e == "function") return Uc(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === lc)) return 11;
    if (e === ac) return 14;
  }
  return 2;
}
function Bn(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = pt(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Ps(e, t, n, r, o, i) {
  var s = 2;
  if (((r = e), typeof e == "function")) Uc(e) && (s = 1);
  else if (typeof e == "string") s = 5;
  else
    e: switch (e) {
      case Lr:
        return pr(n.children, o, i, t);
      case sc:
        (s = 8), (o |= 8);
        break;
      case $a:
        return (
          (e = pt(12, n, t, o | 2)), (e.elementType = $a), (e.lanes = i), e
        );
      case Ba:
        return (e = pt(13, n, t, o)), (e.elementType = Ba), (e.lanes = i), e;
      case Ua:
        return (e = pt(19, n, t, o)), (e.elementType = Ua), (e.lanes = i), e;
      case oh:
        return bl(n, o, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case nh:
              s = 10;
              break e;
            case rh:
              s = 9;
              break e;
            case lc:
              s = 11;
              break e;
            case ac:
              s = 14;
              break e;
            case Cn:
              (s = 16), (r = null);
              break e;
          }
        throw Error(j(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = pt(s, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  );
}
function pr(e, t, n, r) {
  return (e = pt(7, e, r, t)), (e.lanes = n), e;
}
function bl(e, t, n, r) {
  return (
    (e = pt(22, e, r, t)),
    (e.elementType = oh),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Ca(e, t, n) {
  return (e = pt(6, e, null, t)), (e.lanes = n), e;
}
function Ea(e, t, n) {
  return (
    (t = pt(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Fw(e, t, n, r, o) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = ra(0)),
    (this.expirationTimes = ra(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = ra(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = o),
    (this.mutableSourceEagerHydrationData = null);
}
function Wc(e, t, n, r, o, i, s, l, a) {
  return (
    (e = new Fw(e, t, n, l, a)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = pt(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    kc(i),
    e
  );
}
function zw(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Dr,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function Ym(e) {
  if (!e) return Wn;
  e = e._reactInternals;
  e: {
    if (Nr(e) !== e || e.tag !== 1) throw Error(j(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Ze(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(j(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Ze(n)) return Yh(e, n, t);
  }
  return t;
}
function Xm(e, t, n, r, o, i, s, l, a) {
  return (
    (e = Wc(n, r, !0, e, o, i, s, l, a)),
    (e.context = Ym(null)),
    (n = e.current),
    (r = He()),
    (o = $n(n)),
    (i = rn(r, o)),
    (i.callback = t ?? null),
    Fn(n, i, o),
    (e.current.lanes = o),
    Ii(e, o, r),
    Je(e, r),
    e
  );
}
function Nl(e, t, n, r) {
  var o = t.current,
    i = He(),
    s = $n(o);
  return (
    (n = Ym(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = rn(i, s)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = Fn(o, t, s)),
    e !== null && (Ot(e, o, s, i), Ss(e, o, s)),
    s
  );
}
function rl(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function If(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Vc(e, t) {
  If(e, t), (e = e.alternate) && If(e, t);
}
function $w() {
  return null;
}
var qm =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Hc(e) {
  this._internalRoot = e;
}
kl.prototype.render = Hc.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(j(409));
  Nl(e, t, null, null);
};
kl.prototype.unmount = Hc.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    xr(function () {
      Nl(null, e, null, null);
    }),
      (t[ln] = null);
  }
};
function kl(e) {
  this._internalRoot = e;
}
kl.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Th();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < bn.length && t !== 0 && t < bn[n].priority; n++);
    bn.splice(n, 0, e), n === 0 && jh(e);
  }
};
function Qc(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function Pl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Df() {}
function Bw(e, t, n, r, o) {
  if (o) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var u = rl(s);
        i.call(u);
      };
    }
    var s = Xm(t, r, e, 0, null, !1, !1, "", Df);
    return (
      (e._reactRootContainer = s),
      (e[ln] = s.current),
      vi(e.nodeType === 8 ? e.parentNode : e),
      xr(),
      s
    );
  }
  for (; (o = e.lastChild); ) e.removeChild(o);
  if (typeof r == "function") {
    var l = r;
    r = function () {
      var u = rl(a);
      l.call(u);
    };
  }
  var a = Wc(e, 0, !1, null, null, !1, !1, "", Df);
  return (
    (e._reactRootContainer = a),
    (e[ln] = a.current),
    vi(e.nodeType === 8 ? e.parentNode : e),
    xr(function () {
      Nl(t, a, n, r);
    }),
    a
  );
}
function Tl(e, t, n, r, o) {
  var i = n._reactRootContainer;
  if (i) {
    var s = i;
    if (typeof o == "function") {
      var l = o;
      o = function () {
        var a = rl(s);
        l.call(a);
      };
    }
    Nl(t, s, e, o);
  } else s = Bw(n, t, e, o, r);
  return rl(s);
}
kh = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Ko(t.pendingLanes);
        n !== 0 &&
          (dc(t, n | 1), Je(t, be()), !(te & 6) && ((xo = be() + 500), Gn()));
      }
      break;
    case 13:
      xr(function () {
        var r = an(e, 1);
        if (r !== null) {
          var o = He();
          Ot(r, e, 1, o);
        }
      }),
        Vc(e, 1);
  }
};
fc = function (e) {
  if (e.tag === 13) {
    var t = an(e, 134217728);
    if (t !== null) {
      var n = He();
      Ot(t, e, 134217728, n);
    }
    Vc(e, 134217728);
  }
};
Ph = function (e) {
  if (e.tag === 13) {
    var t = $n(e),
      n = an(e, t);
    if (n !== null) {
      var r = He();
      Ot(n, e, t, r);
    }
    Vc(e, t);
  }
};
Th = function () {
  return le;
};
Rh = function (e, t) {
  var n = le;
  try {
    return (le = e), t();
  } finally {
    le = n;
  }
};
Za = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Ha(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var o = yl(r);
            if (!o) throw Error(j(90));
            sh(r), Ha(r, o);
          }
        }
      }
      break;
    case "textarea":
      ah(e, n);
      break;
    case "select":
      (t = n.value), t != null && Gr(e, !!n.multiple, t, !1);
  }
};
mh = zc;
vh = xr;
var Uw = { usingClientEntryPoint: !1, Events: [Li, Br, yl, ph, hh, zc] },
  Uo = {
    findFiberByHostInstance: rr,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  Ww = {
    bundleType: Uo.bundleType,
    version: Uo.version,
    rendererPackageName: Uo.rendererPackageName,
    rendererConfig: Uo.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: fn.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = xh(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Uo.findFiberByHostInstance || $w,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var ss = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!ss.isDisabled && ss.supportsFiber)
    try {
      (hl = ss.inject(Ww)), (Ht = ss);
    } catch {}
}
st.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Uw;
st.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Qc(t)) throw Error(j(200));
  return zw(e, t, null, n);
};
st.createRoot = function (e, t) {
  if (!Qc(e)) throw Error(j(299));
  var n = !1,
    r = "",
    o = qm;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    (t = Wc(e, 1, !1, null, null, n, !1, r, o)),
    (e[ln] = t.current),
    vi(e.nodeType === 8 ? e.parentNode : e),
    new Hc(t)
  );
};
st.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(j(188))
      : ((e = Object.keys(e).join(",")), Error(j(268, e)));
  return (e = xh(t)), (e = e === null ? null : e.stateNode), e;
};
st.flushSync = function (e) {
  return xr(e);
};
st.hydrate = function (e, t, n) {
  if (!Pl(t)) throw Error(j(200));
  return Tl(null, e, t, !0, n);
};
st.hydrateRoot = function (e, t, n) {
  if (!Qc(e)) throw Error(j(405));
  var r = (n != null && n.hydratedSources) || null,
    o = !1,
    i = "",
    s = qm;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (o = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
    (t = Xm(t, null, e, 1, n ?? null, o, !1, i, s)),
    (e[ln] = t.current),
    vi(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (o = n._getVersion),
        (o = o(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, o])
          : t.mutableSourceEagerHydrationData.push(n, o);
  return new kl(t);
};
st.render = function (e, t, n) {
  if (!Pl(t)) throw Error(j(200));
  return Tl(null, e, t, !1, n);
};
st.unmountComponentAtNode = function (e) {
  if (!Pl(e)) throw Error(j(40));
  return e._reactRootContainer
    ? (xr(function () {
        Tl(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[ln] = null);
        });
      }),
      !0)
    : !1;
};
st.unstable_batchedUpdates = zc;
st.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!Pl(n)) throw Error(j(200));
  if (e == null || e._reactInternals === void 0) throw Error(j(38));
  return Tl(e, t, n, !1, r);
};
st.version = "18.3.1-next-f1338f8080-20240426";
function Zm() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Zm);
    } catch (e) {
      console.error(e);
    }
}
Zm(), (Zp.exports = st);
var kr = Zp.exports;
const Jm = $p(kr);
var ev,
  Lf = kr;
(ev = Lf.createRoot), Lf.hydrateRoot;
const Vw = 1,
  Hw = 1e6;
let ba = 0;
function Qw() {
  return (ba = (ba + 1) % Number.MAX_SAFE_INTEGER), ba.toString();
}
const Na = new Map(),
  Ff = (e) => {
    if (Na.has(e)) return;
    const t = setTimeout(() => {
      Na.delete(e), li({ type: "REMOVE_TOAST", toastId: e });
    }, Hw);
    Na.set(e, t);
  },
  Kw = (e, t) => {
    switch (t.type) {
      case "ADD_TOAST":
        return { ...e, toasts: [t.toast, ...e.toasts].slice(0, Vw) };
      case "UPDATE_TOAST":
        return {
          ...e,
          toasts: e.toasts.map((n) =>
            n.id === t.toast.id ? { ...n, ...t.toast } : n
          ),
        };
      case "DISMISS_TOAST": {
        const { toastId: n } = t;
        return (
          n
            ? Ff(n)
            : e.toasts.forEach((r) => {
                Ff(r.id);
              }),
          {
            ...e,
            toasts: e.toasts.map((r) =>
              r.id === n || n === void 0 ? { ...r, open: !1 } : r
            ),
          }
        );
      }
      case "REMOVE_TOAST":
        return t.toastId === void 0
          ? { ...e, toasts: [] }
          : { ...e, toasts: e.toasts.filter((n) => n.id !== t.toastId) };
    }
  },
  Ts = [];
let Rs = { toasts: [] };
function li(e) {
  (Rs = Kw(Rs, e)),
    Ts.forEach((t) => {
      t(Rs);
    });
}
function Gw({ ...e }) {
  const t = Qw(),
    n = (o) => li({ type: "UPDATE_TOAST", toast: { ...o, id: t } }),
    r = () => li({ type: "DISMISS_TOAST", toastId: t });
  return (
    li({
      type: "ADD_TOAST",
      toast: {
        ...e,
        id: t,
        open: !0,
        onOpenChange: (o) => {
          o || r();
        },
      },
    }),
    { id: t, dismiss: r, update: n }
  );
}
function Yw() {
  const [e, t] = f.useState(Rs);
  return (
    f.useEffect(
      () => (
        Ts.push(t),
        () => {
          const n = Ts.indexOf(t);
          n > -1 && Ts.splice(n, 1);
        }
      ),
      [e]
    ),
    {
      ...e,
      toast: Gw,
      dismiss: (n) => li({ type: "DISMISS_TOAST", toastId: n }),
    }
  );
}
function q(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
  return function (o) {
    if ((e == null || e(o), n === !1 || !o.defaultPrevented))
      return t == null ? void 0 : t(o);
  };
}
function zf(e, t) {
  if (typeof e == "function") return e(t);
  e != null && (e.current = t);
}
function tv(...e) {
  return (t) => {
    let n = !1;
    const r = e.map((o) => {
      const i = zf(o, t);
      return !n && typeof i == "function" && (n = !0), i;
    });
    if (n)
      return () => {
        for (let o = 0; o < r.length; o++) {
          const i = r[o];
          typeof i == "function" ? i() : zf(e[o], null);
        }
      };
  };
}
function he(...e) {
  return f.useCallback(tv(...e), e);
}
function Xw(e, t) {
  const n = f.createContext(t),
    r = (i) => {
      const { children: s, ...l } = i,
        a = f.useMemo(() => l, Object.values(l));
      return c.jsx(n.Provider, { value: a, children: s });
    };
  r.displayName = e + "Provider";
  function o(i) {
    const s = f.useContext(n);
    if (s) return s;
    if (t !== void 0) return t;
    throw new Error(`\`${i}\` must be used within \`${e}\``);
  }
  return [r, o];
}
function ko(e, t = []) {
  let n = [];
  function r(i, s) {
    const l = f.createContext(s),
      a = n.length;
    n = [...n, s];
    const u = (p) => {
      var y;
      const { scope: g, children: m, ...S } = p,
        v = ((y = g == null ? void 0 : g[e]) == null ? void 0 : y[a]) || l,
        w = f.useMemo(() => S, Object.values(S));
      return c.jsx(v.Provider, { value: w, children: m });
    };
    u.displayName = i + "Provider";
    function d(p, g) {
      var v;
      const m = ((v = g == null ? void 0 : g[e]) == null ? void 0 : v[a]) || l,
        S = f.useContext(m);
      if (S) return S;
      if (s !== void 0) return s;
      throw new Error(`\`${p}\` must be used within \`${i}\``);
    }
    return [u, d];
  }
  const o = () => {
    const i = n.map((s) => f.createContext(s));
    return function (l) {
      const a = (l == null ? void 0 : l[e]) || i;
      return f.useMemo(() => ({ [`__scope${e}`]: { ...l, [e]: a } }), [l, a]);
    };
  };
  return (o.scopeName = e), [r, qw(o, ...t)];
}
function qw(...e) {
  const t = e[0];
  if (e.length === 1) return t;
  const n = () => {
    const r = e.map((o) => ({ useScope: o(), scopeName: o.scopeName }));
    return function (i) {
      const s = r.reduce((l, { useScope: a, scopeName: u }) => {
        const p = a(i)[`__scope${u}`];
        return { ...l, ...p };
      }, {});
      return f.useMemo(() => ({ [`__scope${t.scopeName}`]: s }), [s]);
    };
  };
  return (n.scopeName = t.scopeName), n;
}
function wo(e) {
  const t = Jw(e),
    n = f.forwardRef((r, o) => {
      const { children: i, ...s } = r,
        l = f.Children.toArray(i),
        a = l.find(t1);
      if (a) {
        const u = a.props.children,
          d = l.map((p) =>
            p === a
              ? f.Children.count(u) > 1
                ? f.Children.only(null)
                : f.isValidElement(u)
                ? u.props.children
                : null
              : p
          );
        return c.jsx(t, {
          ...s,
          ref: o,
          children: f.isValidElement(u) ? f.cloneElement(u, void 0, d) : null,
        });
      }
      return c.jsx(t, { ...s, ref: o, children: i });
    });
  return (n.displayName = `${e}.Slot`), n;
}
var Zw = wo("Slot");
function Jw(e) {
  const t = f.forwardRef((n, r) => {
    const { children: o, ...i } = n;
    if (f.isValidElement(o)) {
      const s = r1(o),
        l = n1(i, o.props);
      return (
        o.type !== f.Fragment && (l.ref = r ? tv(r, s) : s),
        f.cloneElement(o, l)
      );
    }
    return f.Children.count(o) > 1 ? f.Children.only(null) : null;
  });
  return (t.displayName = `${e}.SlotClone`), t;
}
var nv = Symbol("radix.slottable");
function e1(e) {
  const t = ({ children: n }) => c.jsx(c.Fragment, { children: n });
  return (t.displayName = `${e}.Slottable`), (t.__radixId = nv), t;
}
function t1(e) {
  return (
    f.isValidElement(e) &&
    typeof e.type == "function" &&
    "__radixId" in e.type &&
    e.type.__radixId === nv
  );
}
function n1(e, t) {
  const n = { ...t };
  for (const r in t) {
    const o = e[r],
      i = t[r];
    /^on[A-Z]/.test(r)
      ? o && i
        ? (n[r] = (...l) => {
            const a = i(...l);
            return o(...l), a;
          })
        : o && (n[r] = o)
      : r === "style"
      ? (n[r] = { ...o, ...i })
      : r === "className" && (n[r] = [o, i].filter(Boolean).join(" "));
  }
  return { ...e, ...n };
}
function r1(e) {
  var r, o;
  let t =
      (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null
        ? void 0
        : r.get,
    n = t && "isReactWarning" in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t =
        (o = Object.getOwnPropertyDescriptor(e, "ref")) == null
          ? void 0
          : o.get),
      (n = t && "isReactWarning" in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
function rv(e) {
  const t = e + "CollectionProvider",
    [n, r] = ko(t),
    [o, i] = n(t, { collectionRef: { current: null }, itemMap: new Map() }),
    s = (v) => {
      const { scope: w, children: y } = v,
        h = A.useRef(null),
        x = A.useRef(new Map()).current;
      return c.jsx(o, { scope: w, itemMap: x, collectionRef: h, children: y });
    };
  s.displayName = t;
  const l = e + "CollectionSlot",
    a = wo(l),
    u = A.forwardRef((v, w) => {
      const { scope: y, children: h } = v,
        x = i(l, y),
        C = he(w, x.collectionRef);
      return c.jsx(a, { ref: C, children: h });
    });
  u.displayName = l;
  const d = e + "CollectionItemSlot",
    p = "data-radix-collection-item",
    g = wo(d),
    m = A.forwardRef((v, w) => {
      const { scope: y, children: h, ...x } = v,
        C = A.useRef(null),
        E = he(w, C),
        N = i(d, y);
      return (
        A.useEffect(
          () => (
            N.itemMap.set(C, { ref: C, ...x }), () => void N.itemMap.delete(C)
          )
        ),
        c.jsx(g, { [p]: "", ref: E, children: h })
      );
    });
  m.displayName = d;
  function S(v) {
    const w = i(e + "CollectionConsumer", v);
    return A.useCallback(() => {
      const h = w.collectionRef.current;
      if (!h) return [];
      const x = Array.from(h.querySelectorAll(`[${p}]`));
      return Array.from(w.itemMap.values()).sort(
        (N, b) => x.indexOf(N.ref.current) - x.indexOf(b.ref.current)
      );
    }, [w.collectionRef, w.itemMap]);
  }
  return [{ Provider: s, Slot: u, ItemSlot: m }, S, r];
}
var o1 = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "select",
    "span",
    "svg",
    "ul",
  ],
  ee = o1.reduce((e, t) => {
    const n = wo(`Primitive.${t}`),
      r = f.forwardRef((o, i) => {
        const { asChild: s, ...l } = o,
          a = s ? n : t;
        return (
          typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
          c.jsx(a, { ...l, ref: i })
        );
      });
    return (r.displayName = `Primitive.${t}`), { ...e, [t]: r };
  }, {});
function ov(e, t) {
  e && kr.flushSync(() => e.dispatchEvent(t));
}
function At(e) {
  const t = f.useRef(e);
  return (
    f.useEffect(() => {
      t.current = e;
    }),
    f.useMemo(
      () =>
        (...n) => {
          var r;
          return (r = t.current) == null ? void 0 : r.call(t, ...n);
        },
      []
    )
  );
}
function i1(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = At(e);
  f.useEffect(() => {
    const r = (o) => {
      o.key === "Escape" && n(o);
    };
    return (
      t.addEventListener("keydown", r, { capture: !0 }),
      () => t.removeEventListener("keydown", r, { capture: !0 })
    );
  }, [n, t]);
}
var s1 = "DismissableLayer",
  Ou = "dismissableLayer.update",
  l1 = "dismissableLayer.pointerDownOutside",
  a1 = "dismissableLayer.focusOutside",
  $f,
  iv = f.createContext({
    layers: new Set(),
    layersWithOutsidePointerEventsDisabled: new Set(),
    branches: new Set(),
  }),
  zi = f.forwardRef((e, t) => {
    const {
        disableOutsidePointerEvents: n = !1,
        onEscapeKeyDown: r,
        onPointerDownOutside: o,
        onFocusOutside: i,
        onInteractOutside: s,
        onDismiss: l,
        ...a
      } = e,
      u = f.useContext(iv),
      [d, p] = f.useState(null),
      g =
        (d == null ? void 0 : d.ownerDocument) ??
        (globalThis == null ? void 0 : globalThis.document),
      [, m] = f.useState({}),
      S = he(t, (b) => p(b)),
      v = Array.from(u.layers),
      [w] = [...u.layersWithOutsidePointerEventsDisabled].slice(-1),
      y = v.indexOf(w),
      h = d ? v.indexOf(d) : -1,
      x = u.layersWithOutsidePointerEventsDisabled.size > 0,
      C = h >= y,
      E = c1((b) => {
        const R = b.target,
          O = [...u.branches].some((_) => _.contains(R));
        !C ||
          O ||
          (o == null || o(b),
          s == null || s(b),
          b.defaultPrevented || l == null || l());
      }, g),
      N = d1((b) => {
        const R = b.target;
        [...u.branches].some((_) => _.contains(R)) ||
          (i == null || i(b),
          s == null || s(b),
          b.defaultPrevented || l == null || l());
      }, g);
    return (
      i1((b) => {
        h === u.layers.size - 1 &&
          (r == null || r(b),
          !b.defaultPrevented && l && (b.preventDefault(), l()));
      }, g),
      f.useEffect(() => {
        if (d)
          return (
            n &&
              (u.layersWithOutsidePointerEventsDisabled.size === 0 &&
                (($f = g.body.style.pointerEvents),
                (g.body.style.pointerEvents = "none")),
              u.layersWithOutsidePointerEventsDisabled.add(d)),
            u.layers.add(d),
            Bf(),
            () => {
              n &&
                u.layersWithOutsidePointerEventsDisabled.size === 1 &&
                (g.body.style.pointerEvents = $f);
            }
          );
      }, [d, g, n, u]),
      f.useEffect(
        () => () => {
          d &&
            (u.layers.delete(d),
            u.layersWithOutsidePointerEventsDisabled.delete(d),
            Bf());
        },
        [d, u]
      ),
      f.useEffect(() => {
        const b = () => m({});
        return (
          document.addEventListener(Ou, b),
          () => document.removeEventListener(Ou, b)
        );
      }, []),
      c.jsx(ee.div, {
        ...a,
        ref: S,
        style: {
          pointerEvents: x ? (C ? "auto" : "none") : void 0,
          ...e.style,
        },
        onFocusCapture: q(e.onFocusCapture, N.onFocusCapture),
        onBlurCapture: q(e.onBlurCapture, N.onBlurCapture),
        onPointerDownCapture: q(e.onPointerDownCapture, E.onPointerDownCapture),
      })
    );
  });
zi.displayName = s1;
var u1 = "DismissableLayerBranch",
  sv = f.forwardRef((e, t) => {
    const n = f.useContext(iv),
      r = f.useRef(null),
      o = he(t, r);
    return (
      f.useEffect(() => {
        const i = r.current;
        if (i)
          return (
            n.branches.add(i),
            () => {
              n.branches.delete(i);
            }
          );
      }, [n.branches]),
      c.jsx(ee.div, { ...e, ref: o })
    );
  });
sv.displayName = u1;
function c1(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = At(e),
    r = f.useRef(!1),
    o = f.useRef(() => {});
  return (
    f.useEffect(() => {
      const i = (l) => {
          if (l.target && !r.current) {
            let a = function () {
              lv(l1, n, u, { discrete: !0 });
            };
            const u = { originalEvent: l };
            l.pointerType === "touch"
              ? (t.removeEventListener("click", o.current),
                (o.current = a),
                t.addEventListener("click", o.current, { once: !0 }))
              : a();
          } else t.removeEventListener("click", o.current);
          r.current = !1;
        },
        s = window.setTimeout(() => {
          t.addEventListener("pointerdown", i);
        }, 0);
      return () => {
        window.clearTimeout(s),
          t.removeEventListener("pointerdown", i),
          t.removeEventListener("click", o.current);
      };
    }, [t, n]),
    { onPointerDownCapture: () => (r.current = !0) }
  );
}
function d1(e, t = globalThis == null ? void 0 : globalThis.document) {
  const n = At(e),
    r = f.useRef(!1);
  return (
    f.useEffect(() => {
      const o = (i) => {
        i.target &&
          !r.current &&
          lv(a1, n, { originalEvent: i }, { discrete: !1 });
      };
      return (
        t.addEventListener("focusin", o),
        () => t.removeEventListener("focusin", o)
      );
    }, [t, n]),
    {
      onFocusCapture: () => (r.current = !0),
      onBlurCapture: () => (r.current = !1),
    }
  );
}
function Bf() {
  const e = new CustomEvent(Ou);
  document.dispatchEvent(e);
}
function lv(e, t, n, { discrete: r }) {
  const o = n.originalEvent.target,
    i = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }),
    r ? ov(o, i) : o.dispatchEvent(i);
}
var f1 = zi,
  p1 = sv,
  Me = globalThis != null && globalThis.document ? f.useLayoutEffect : () => {},
  h1 = "Portal",
  Rl = f.forwardRef((e, t) => {
    var l;
    const { container: n, ...r } = e,
      [o, i] = f.useState(!1);
    Me(() => i(!0), []);
    const s =
      n ||
      (o &&
        ((l = globalThis == null ? void 0 : globalThis.document) == null
          ? void 0
          : l.body));
    return s ? Jm.createPortal(c.jsx(ee.div, { ...r, ref: t }), s) : null;
  });
Rl.displayName = h1;
function m1(e, t) {
  return f.useReducer((n, r) => t[n][r] ?? n, e);
}
var Po = (e) => {
  const { present: t, children: n } = e,
    r = v1(t),
    o =
      typeof n == "function" ? n({ present: r.isPresent }) : f.Children.only(n),
    i = he(r.ref, g1(o));
  return typeof n == "function" || r.isPresent
    ? f.cloneElement(o, { ref: i })
    : null;
};
Po.displayName = "Presence";
function v1(e) {
  const [t, n] = f.useState(),
    r = f.useRef(null),
    o = f.useRef(e),
    i = f.useRef("none"),
    s = e ? "mounted" : "unmounted",
    [l, a] = m1(s, {
      mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" },
      unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
      unmounted: { MOUNT: "mounted" },
    });
  return (
    f.useEffect(() => {
      const u = ls(r.current);
      i.current = l === "mounted" ? u : "none";
    }, [l]),
    Me(() => {
      const u = r.current,
        d = o.current;
      if (d !== e) {
        const g = i.current,
          m = ls(u);
        e
          ? a("MOUNT")
          : m === "none" || (u == null ? void 0 : u.display) === "none"
          ? a("UNMOUNT")
          : a(d && g !== m ? "ANIMATION_OUT" : "UNMOUNT"),
          (o.current = e);
      }
    }, [e, a]),
    Me(() => {
      if (t) {
        let u;
        const d = t.ownerDocument.defaultView ?? window,
          p = (m) => {
            const v = ls(r.current).includes(m.animationName);
            if (m.target === t && v && (a("ANIMATION_END"), !o.current)) {
              const w = t.style.animationFillMode;
              (t.style.animationFillMode = "forwards"),
                (u = d.setTimeout(() => {
                  t.style.animationFillMode === "forwards" &&
                    (t.style.animationFillMode = w);
                }));
            }
          },
          g = (m) => {
            m.target === t && (i.current = ls(r.current));
          };
        return (
          t.addEventListener("animationstart", g),
          t.addEventListener("animationcancel", p),
          t.addEventListener("animationend", p),
          () => {
            d.clearTimeout(u),
              t.removeEventListener("animationstart", g),
              t.removeEventListener("animationcancel", p),
              t.removeEventListener("animationend", p);
          }
        );
      } else a("ANIMATION_END");
    }, [t, a]),
    {
      isPresent: ["mounted", "unmountSuspended"].includes(l),
      ref: f.useCallback((u) => {
        (r.current = u ? getComputedStyle(u) : null), n(u);
      }, []),
    }
  );
}
function ls(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
function g1(e) {
  var r, o;
  let t =
      (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null
        ? void 0
        : r.get,
    n = t && "isReactWarning" in t && t.isReactWarning;
  return n
    ? e.ref
    : ((t =
        (o = Object.getOwnPropertyDescriptor(e, "ref")) == null
          ? void 0
          : o.get),
      (n = t && "isReactWarning" in t && t.isReactWarning),
      n ? e.props.ref : e.props.ref || e.ref);
}
var y1 = nc[" useInsertionEffect ".trim().toString()] || Me;
function ol({ prop: e, defaultProp: t, onChange: n = () => {}, caller: r }) {
  const [o, i, s] = x1({ defaultProp: t, onChange: n }),
    l = e !== void 0,
    a = l ? e : o;
  {
    const d = f.useRef(e !== void 0);
    f.useEffect(() => {
      const p = d.current;
      p !== l &&
        console.warn(
          `${r} is changing from ${p ? "controlled" : "uncontrolled"} to ${
            l ? "controlled" : "uncontrolled"
          }. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
        ),
        (d.current = l);
    }, [l, r]);
  }
  const u = f.useCallback(
    (d) => {
      var p;
      if (l) {
        const g = w1(d) ? d(e) : d;
        g !== e && ((p = s.current) == null || p.call(s, g));
      } else i(d);
    },
    [l, e, i, s]
  );
  return [a, u];
}
function x1({ defaultProp: e, onChange: t }) {
  const [n, r] = f.useState(e),
    o = f.useRef(n),
    i = f.useRef(t);
  return (
    y1(() => {
      i.current = t;
    }, [t]),
    f.useEffect(() => {
      var s;
      o.current !== n &&
        ((s = i.current) == null || s.call(i, n), (o.current = n));
    }, [n, o]),
    [n, r, i]
  );
}
function w1(e) {
  return typeof e == "function";
}
var av = Object.freeze({
    position: "absolute",
    border: 0,
    width: 1,
    height: 1,
    padding: 0,
    margin: -1,
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    wordWrap: "normal",
  }),
  S1 = "VisuallyHidden",
  jl = f.forwardRef((e, t) =>
    c.jsx(ee.span, { ...e, ref: t, style: { ...av, ...e.style } })
  );
jl.displayName = S1;
var C1 = jl,
  Kc = "ToastProvider",
  [Gc, E1, b1] = rv("Toast"),
  [uv, _P] = ko("Toast", [b1]),
  [N1, Ol] = uv(Kc),
  cv = (e) => {
    const {
        __scopeToast: t,
        label: n = "Notification",
        duration: r = 5e3,
        swipeDirection: o = "right",
        swipeThreshold: i = 50,
        children: s,
      } = e,
      [l, a] = f.useState(null),
      [u, d] = f.useState(0),
      p = f.useRef(!1),
      g = f.useRef(!1);
    return (
      n.trim() ||
        console.error(
          `Invalid prop \`label\` supplied to \`${Kc}\`. Expected non-empty \`string\`.`
        ),
      c.jsx(Gc.Provider, {
        scope: t,
        children: c.jsx(N1, {
          scope: t,
          label: n,
          duration: r,
          swipeDirection: o,
          swipeThreshold: i,
          toastCount: u,
          viewport: l,
          onViewportChange: a,
          onToastAdd: f.useCallback(() => d((m) => m + 1), []),
          onToastRemove: f.useCallback(() => d((m) => m - 1), []),
          isFocusedToastEscapeKeyDownRef: p,
          isClosePausedRef: g,
          children: s,
        }),
      })
    );
  };
cv.displayName = Kc;
var dv = "ToastViewport",
  k1 = ["F8"],
  _u = "toast.viewportPause",
  Au = "toast.viewportResume",
  fv = f.forwardRef((e, t) => {
    const {
        __scopeToast: n,
        hotkey: r = k1,
        label: o = "Notifications ({hotkey})",
        ...i
      } = e,
      s = Ol(dv, n),
      l = E1(n),
      a = f.useRef(null),
      u = f.useRef(null),
      d = f.useRef(null),
      p = f.useRef(null),
      g = he(t, p, s.onViewportChange),
      m = r.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
      S = s.toastCount > 0;
    f.useEffect(() => {
      const w = (y) => {
        var x;
        r.length !== 0 &&
          r.every((C) => y[C] || y.code === C) &&
          ((x = p.current) == null || x.focus());
      };
      return (
        document.addEventListener("keydown", w),
        () => document.removeEventListener("keydown", w)
      );
    }, [r]),
      f.useEffect(() => {
        const w = a.current,
          y = p.current;
        if (S && w && y) {
          const h = () => {
              if (!s.isClosePausedRef.current) {
                const N = new CustomEvent(_u);
                y.dispatchEvent(N), (s.isClosePausedRef.current = !0);
              }
            },
            x = () => {
              if (s.isClosePausedRef.current) {
                const N = new CustomEvent(Au);
                y.dispatchEvent(N), (s.isClosePausedRef.current = !1);
              }
            },
            C = (N) => {
              !w.contains(N.relatedTarget) && x();
            },
            E = () => {
              w.contains(document.activeElement) || x();
            };
          return (
            w.addEventListener("focusin", h),
            w.addEventListener("focusout", C),
            w.addEventListener("pointermove", h),
            w.addEventListener("pointerleave", E),
            window.addEventListener("blur", h),
            window.addEventListener("focus", x),
            () => {
              w.removeEventListener("focusin", h),
                w.removeEventListener("focusout", C),
                w.removeEventListener("pointermove", h),
                w.removeEventListener("pointerleave", E),
                window.removeEventListener("blur", h),
                window.removeEventListener("focus", x);
            }
          );
        }
      }, [S, s.isClosePausedRef]);
    const v = f.useCallback(
      ({ tabbingDirection: w }) => {
        const h = l().map((x) => {
          const C = x.ref.current,
            E = [C, ...z1(C)];
          return w === "forwards" ? E : E.reverse();
        });
        return (w === "forwards" ? h.reverse() : h).flat();
      },
      [l]
    );
    return (
      f.useEffect(() => {
        const w = p.current;
        if (w) {
          const y = (h) => {
            var E, N, b;
            const x = h.altKey || h.ctrlKey || h.metaKey;
            if (h.key === "Tab" && !x) {
              const R = document.activeElement,
                O = h.shiftKey;
              if (h.target === w && O) {
                (E = u.current) == null || E.focus();
                return;
              }
              const I = v({ tabbingDirection: O ? "backwards" : "forwards" }),
                W = I.findIndex((M) => M === R);
              ka(I.slice(W + 1))
                ? h.preventDefault()
                : O
                ? (N = u.current) == null || N.focus()
                : (b = d.current) == null || b.focus();
            }
          };
          return (
            w.addEventListener("keydown", y),
            () => w.removeEventListener("keydown", y)
          );
        }
      }, [l, v]),
      c.jsxs(p1, {
        ref: a,
        role: "region",
        "aria-label": o.replace("{hotkey}", m),
        tabIndex: -1,
        style: { pointerEvents: S ? void 0 : "none" },
        children: [
          S &&
            c.jsx(Mu, {
              ref: u,
              onFocusFromOutsideViewport: () => {
                const w = v({ tabbingDirection: "forwards" });
                ka(w);
              },
            }),
          c.jsx(Gc.Slot, {
            scope: n,
            children: c.jsx(ee.ol, { tabIndex: -1, ...i, ref: g }),
          }),
          S &&
            c.jsx(Mu, {
              ref: d,
              onFocusFromOutsideViewport: () => {
                const w = v({ tabbingDirection: "backwards" });
                ka(w);
              },
            }),
        ],
      })
    );
  });
fv.displayName = dv;
var pv = "ToastFocusProxy",
  Mu = f.forwardRef((e, t) => {
    const { __scopeToast: n, onFocusFromOutsideViewport: r, ...o } = e,
      i = Ol(pv, n);
    return c.jsx(jl, {
      "aria-hidden": !0,
      tabIndex: 0,
      ...o,
      ref: t,
      style: { position: "fixed" },
      onFocus: (s) => {
        var u;
        const l = s.relatedTarget;
        !((u = i.viewport) != null && u.contains(l)) && r();
      },
    });
  });
Mu.displayName = pv;
var $i = "Toast",
  P1 = "toast.swipeStart",
  T1 = "toast.swipeMove",
  R1 = "toast.swipeCancel",
  j1 = "toast.swipeEnd",
  hv = f.forwardRef((e, t) => {
    const { forceMount: n, open: r, defaultOpen: o, onOpenChange: i, ...s } = e,
      [l, a] = ol({ prop: r, defaultProp: o ?? !0, onChange: i, caller: $i });
    return c.jsx(Po, {
      present: n || l,
      children: c.jsx(A1, {
        open: l,
        ...s,
        ref: t,
        onClose: () => a(!1),
        onPause: At(e.onPause),
        onResume: At(e.onResume),
        onSwipeStart: q(e.onSwipeStart, (u) => {
          u.currentTarget.setAttribute("data-swipe", "start");
        }),
        onSwipeMove: q(e.onSwipeMove, (u) => {
          const { x: d, y: p } = u.detail.delta;
          u.currentTarget.setAttribute("data-swipe", "move"),
            u.currentTarget.style.setProperty(
              "--radix-toast-swipe-move-x",
              `${d}px`
            ),
            u.currentTarget.style.setProperty(
              "--radix-toast-swipe-move-y",
              `${p}px`
            );
        }),
        onSwipeCancel: q(e.onSwipeCancel, (u) => {
          u.currentTarget.setAttribute("data-swipe", "cancel"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-end-y");
        }),
        onSwipeEnd: q(e.onSwipeEnd, (u) => {
          const { x: d, y: p } = u.detail.delta;
          u.currentTarget.setAttribute("data-swipe", "end"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
            u.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
            u.currentTarget.style.setProperty(
              "--radix-toast-swipe-end-x",
              `${d}px`
            ),
            u.currentTarget.style.setProperty(
              "--radix-toast-swipe-end-y",
              `${p}px`
            ),
            a(!1);
        }),
      }),
    });
  });
hv.displayName = $i;
var [O1, _1] = uv($i, { onClose() {} }),
  A1 = f.forwardRef((e, t) => {
    const {
        __scopeToast: n,
        type: r = "foreground",
        duration: o,
        open: i,
        onClose: s,
        onEscapeKeyDown: l,
        onPause: a,
        onResume: u,
        onSwipeStart: d,
        onSwipeMove: p,
        onSwipeCancel: g,
        onSwipeEnd: m,
        ...S
      } = e,
      v = Ol($i, n),
      [w, y] = f.useState(null),
      h = he(t, (M) => y(M)),
      x = f.useRef(null),
      C = f.useRef(null),
      E = o || v.duration,
      N = f.useRef(0),
      b = f.useRef(E),
      R = f.useRef(0),
      { onToastAdd: O, onToastRemove: _ } = v,
      $ = At(() => {
        var H;
        (w == null ? void 0 : w.contains(document.activeElement)) &&
          ((H = v.viewport) == null || H.focus()),
          s();
      }),
      I = f.useCallback(
        (M) => {
          !M ||
            M === 1 / 0 ||
            (window.clearTimeout(R.current),
            (N.current = new Date().getTime()),
            (R.current = window.setTimeout($, M)));
        },
        [$]
      );
    f.useEffect(() => {
      const M = v.viewport;
      if (M) {
        const H = () => {
            I(b.current), u == null || u();
          },
          z = () => {
            const U = new Date().getTime() - N.current;
            (b.current = b.current - U),
              window.clearTimeout(R.current),
              a == null || a();
          };
        return (
          M.addEventListener(_u, z),
          M.addEventListener(Au, H),
          () => {
            M.removeEventListener(_u, z), M.removeEventListener(Au, H);
          }
        );
      }
    }, [v.viewport, E, a, u, I]),
      f.useEffect(() => {
        i && !v.isClosePausedRef.current && I(E);
      }, [i, E, v.isClosePausedRef, I]),
      f.useEffect(() => (O(), () => _()), [O, _]);
    const W = f.useMemo(() => (w ? Sv(w) : null), [w]);
    return v.viewport
      ? c.jsxs(c.Fragment, {
          children: [
            W &&
              c.jsx(M1, {
                __scopeToast: n,
                role: "status",
                "aria-live": r === "foreground" ? "assertive" : "polite",
                "aria-atomic": !0,
                children: W,
              }),
            c.jsx(O1, {
              scope: n,
              onClose: $,
              children: kr.createPortal(
                c.jsx(Gc.ItemSlot, {
                  scope: n,
                  children: c.jsx(f1, {
                    asChild: !0,
                    onEscapeKeyDown: q(l, () => {
                      v.isFocusedToastEscapeKeyDownRef.current || $(),
                        (v.isFocusedToastEscapeKeyDownRef.current = !1);
                    }),
                    children: c.jsx(ee.li, {
                      role: "status",
                      "aria-live": "off",
                      "aria-atomic": !0,
                      tabIndex: 0,
                      "data-state": i ? "open" : "closed",
                      "data-swipe-direction": v.swipeDirection,
                      ...S,
                      ref: h,
                      style: {
                        userSelect: "none",
                        touchAction: "none",
                        ...e.style,
                      },
                      onKeyDown: q(e.onKeyDown, (M) => {
                        M.key === "Escape" &&
                          (l == null || l(M.nativeEvent),
                          M.nativeEvent.defaultPrevented ||
                            ((v.isFocusedToastEscapeKeyDownRef.current = !0),
                            $()));
                      }),
                      onPointerDown: q(e.onPointerDown, (M) => {
                        M.button === 0 &&
                          (x.current = { x: M.clientX, y: M.clientY });
                      }),
                      onPointerMove: q(e.onPointerMove, (M) => {
                        if (!x.current) return;
                        const H = M.clientX - x.current.x,
                          z = M.clientY - x.current.y,
                          U = !!C.current,
                          k = ["left", "right"].includes(v.swipeDirection),
                          T = ["left", "up"].includes(v.swipeDirection)
                            ? Math.min
                            : Math.max,
                          D = k ? T(0, H) : 0,
                          V = k ? 0 : T(0, z),
                          B = M.pointerType === "touch" ? 10 : 2,
                          Y = { x: D, y: V },
                          Q = { originalEvent: M, delta: Y };
                        U
                          ? ((C.current = Y), as(T1, p, Q, { discrete: !1 }))
                          : Uf(Y, v.swipeDirection, B)
                          ? ((C.current = Y),
                            as(P1, d, Q, { discrete: !1 }),
                            M.target.setPointerCapture(M.pointerId))
                          : (Math.abs(H) > B || Math.abs(z) > B) &&
                            (x.current = null);
                      }),
                      onPointerUp: q(e.onPointerUp, (M) => {
                        const H = C.current,
                          z = M.target;
                        if (
                          (z.hasPointerCapture(M.pointerId) &&
                            z.releasePointerCapture(M.pointerId),
                          (C.current = null),
                          (x.current = null),
                          H)
                        ) {
                          const U = M.currentTarget,
                            k = { originalEvent: M, delta: H };
                          Uf(H, v.swipeDirection, v.swipeThreshold)
                            ? as(j1, m, k, { discrete: !0 })
                            : as(R1, g, k, { discrete: !0 }),
                            U.addEventListener(
                              "click",
                              (T) => T.preventDefault(),
                              { once: !0 }
                            );
                        }
                      }),
                    }),
                  }),
                }),
                v.viewport
              ),
            }),
          ],
        })
      : null;
  }),
  M1 = (e) => {
    const { __scopeToast: t, children: n, ...r } = e,
      o = Ol($i, t),
      [i, s] = f.useState(!1),
      [l, a] = f.useState(!1);
    return (
      L1(() => s(!0)),
      f.useEffect(() => {
        const u = window.setTimeout(() => a(!0), 1e3);
        return () => window.clearTimeout(u);
      }, []),
      l
        ? null
        : c.jsx(Rl, {
            asChild: !0,
            children: c.jsx(jl, {
              ...r,
              children:
                i && c.jsxs(c.Fragment, { children: [o.label, " ", n] }),
            }),
          })
    );
  },
  I1 = "ToastTitle",
  mv = f.forwardRef((e, t) => {
    const { __scopeToast: n, ...r } = e;
    return c.jsx(ee.div, { ...r, ref: t });
  });
mv.displayName = I1;
var D1 = "ToastDescription",
  vv = f.forwardRef((e, t) => {
    const { __scopeToast: n, ...r } = e;
    return c.jsx(ee.div, { ...r, ref: t });
  });
vv.displayName = D1;
var gv = "ToastAction",
  yv = f.forwardRef((e, t) => {
    const { altText: n, ...r } = e;
    return n.trim()
      ? c.jsx(wv, {
          altText: n,
          asChild: !0,
          children: c.jsx(Yc, { ...r, ref: t }),
        })
      : (console.error(
          `Invalid prop \`altText\` supplied to \`${gv}\`. Expected non-empty \`string\`.`
        ),
        null);
  });
yv.displayName = gv;
var xv = "ToastClose",
  Yc = f.forwardRef((e, t) => {
    const { __scopeToast: n, ...r } = e,
      o = _1(xv, n);
    return c.jsx(wv, {
      asChild: !0,
      children: c.jsx(ee.button, {
        type: "button",
        ...r,
        ref: t,
        onClick: q(e.onClick, o.onClose),
      }),
    });
  });
Yc.displayName = xv;
var wv = f.forwardRef((e, t) => {
  const { __scopeToast: n, altText: r, ...o } = e;
  return c.jsx(ee.div, {
    "data-radix-toast-announce-exclude": "",
    "data-radix-toast-announce-alt": r || void 0,
    ...o,
    ref: t,
  });
});
function Sv(e) {
  const t = [];
  return (
    Array.from(e.childNodes).forEach((r) => {
      if (
        (r.nodeType === r.TEXT_NODE && r.textContent && t.push(r.textContent),
        F1(r))
      ) {
        const o = r.ariaHidden || r.hidden || r.style.display === "none",
          i = r.dataset.radixToastAnnounceExclude === "";
        if (!o)
          if (i) {
            const s = r.dataset.radixToastAnnounceAlt;
            s && t.push(s);
          } else t.push(...Sv(r));
      }
    }),
    t
  );
}
function as(e, t, n, { discrete: r }) {
  const o = n.originalEvent.currentTarget,
    i = new CustomEvent(e, { bubbles: !0, cancelable: !0, detail: n });
  t && o.addEventListener(e, t, { once: !0 }),
    r ? ov(o, i) : o.dispatchEvent(i);
}
var Uf = (e, t, n = 0) => {
  const r = Math.abs(e.x),
    o = Math.abs(e.y),
    i = r > o;
  return t === "left" || t === "right" ? i && r > n : !i && o > n;
};
function L1(e = () => {}) {
  const t = At(e);
  Me(() => {
    let n = 0,
      r = 0;
    return (
      (n = window.requestAnimationFrame(
        () => (r = window.requestAnimationFrame(t))
      )),
      () => {
        window.cancelAnimationFrame(n), window.cancelAnimationFrame(r);
      }
    );
  }, [t]);
}
function F1(e) {
  return e.nodeType === e.ELEMENT_NODE;
}
function z1(e) {
  const t = [],
    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (r) => {
        const o = r.tagName === "INPUT" && r.type === "hidden";
        return r.disabled || r.hidden || o
          ? NodeFilter.FILTER_SKIP
          : r.tabIndex >= 0
          ? NodeFilter.FILTER_ACCEPT
          : NodeFilter.FILTER_SKIP;
      },
    });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function ka(e) {
  const t = document.activeElement;
  return e.some((n) =>
    n === t ? !0 : (n.focus(), document.activeElement !== t)
  );
}
var $1 = cv,
  Cv = fv,
  Ev = hv,
  bv = mv,
  Nv = vv,
  kv = yv,
  Pv = Yc;
function Tv(e) {
  var t,
    n,
    r = "";
  if (typeof e == "string" || typeof e == "number") r += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var o = e.length;
      for (t = 0; t < o; t++)
        e[t] && (n = Tv(e[t])) && (r && (r += " "), (r += n));
    } else for (n in e) e[n] && (r && (r += " "), (r += n));
  return r;
}
function Rv() {
  for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)
    (e = arguments[n]) && (t = Tv(e)) && (r && (r += " "), (r += t));
  return r;
}
const Wf = (e) => (typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e),
  Vf = Rv,
  Xc = (e, t) => (n) => {
    var r;
    if ((t == null ? void 0 : t.variants) == null)
      return Vf(
        e,
        n == null ? void 0 : n.class,
        n == null ? void 0 : n.className
      );
    const { variants: o, defaultVariants: i } = t,
      s = Object.keys(o).map((u) => {
        const d = n == null ? void 0 : n[u],
          p = i == null ? void 0 : i[u];
        if (d === null) return null;
        const g = Wf(d) || Wf(p);
        return o[u][g];
      }),
      l =
        n &&
        Object.entries(n).reduce((u, d) => {
          let [p, g] = d;
          return g === void 0 || (u[p] = g), u;
        }, {}),
      a =
        t == null || (r = t.compoundVariants) === null || r === void 0
          ? void 0
          : r.reduce((u, d) => {
              let { class: p, className: g, ...m } = d;
              return Object.entries(m).every((S) => {
                let [v, w] = S;
                return Array.isArray(w)
                  ? w.includes({ ...i, ...l }[v])
                  : { ...i, ...l }[v] === w;
              })
                ? [...u, p, g]
                : u;
            }, []);
    return Vf(
      e,
      s,
      a,
      n == null ? void 0 : n.class,
      n == null ? void 0 : n.className
    );
  };
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const B1 = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  jv = (...e) =>
    e
      .filter((t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n)
      .join(" ")
      .trim();
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var U1 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const W1 = f.forwardRef(
  (
    {
      color: e = "currentColor",
      size: t = 24,
      strokeWidth: n = 2,
      absoluteStrokeWidth: r,
      className: o = "",
      children: i,
      iconNode: s,
      ...l
    },
    a
  ) =>
    f.createElement(
      "svg",
      {
        ref: a,
        ...U1,
        width: t,
        height: t,
        stroke: e,
        strokeWidth: r ? (Number(n) * 24) / Number(t) : n,
        className: jv("lucide", o),
        ...l,
      },
      [
        ...s.map(([u, d]) => f.createElement(u, d)),
        ...(Array.isArray(i) ? i : [i]),
      ]
    )
);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const gt = (e, t) => {
  const n = f.forwardRef(({ className: r, ...o }, i) =>
    f.createElement(W1, {
      ref: i,
      iconNode: t,
      className: jv(`lucide-${B1(e)}`, r),
      ...o,
    })
  );
  return (n.displayName = `${e}`), n;
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const V1 = gt("ArrowLeft", [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const H1 = gt("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ov = gt("ChevronDown", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Q1 = gt("ChevronUp", [
  ["path", { d: "m18 15-6-6-6 6", key: "153udz" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const K1 = gt("CircleCheckBig", [
  ["path", { d: "M21.801 10A10 10 0 1 1 17 3.335", key: "yps3ct" }],
  ["path", { d: "m9 11 3 3L22 4", key: "1pflzl" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const G1 = gt("Clock", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Y1 = gt("Mail", [
  [
    "rect",
    { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" },
  ],
  ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const X1 = gt("Menu", [
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
  ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
  ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const q1 = gt("Phone", [
  [
    "path",
    {
      d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",
      key: "foiqr5",
    },
  ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Z1 = gt("Shield", [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y",
    },
  ],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const J1 = gt("Sparkles", [
  [
    "path",
    {
      d: "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",
      key: "4pj2yx",
    },
  ],
  ["path", { d: "M20 3v4", key: "1olli1" }],
  ["path", { d: "M22 5h-4", key: "1gvqau" }],
  ["path", { d: "M4 17v2", key: "vumght" }],
  ["path", { d: "M5 18H3", key: "zchphs" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const qc = gt("X", [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ]),
  Zc = "-",
  eS = (e) => {
    const t = nS(e),
      { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
    return {
      getClassGroupId: (s) => {
        const l = s.split(Zc);
        return l[0] === "" && l.length !== 1 && l.shift(), _v(l, t) || tS(s);
      },
      getConflictingClassGroupIds: (s, l) => {
        const a = n[s] || [];
        return l && r[s] ? [...a, ...r[s]] : a;
      },
    };
  },
  _v = (e, t) => {
    var s;
    if (e.length === 0) return t.classGroupId;
    const n = e[0],
      r = t.nextPart.get(n),
      o = r ? _v(e.slice(1), r) : void 0;
    if (o) return o;
    if (t.validators.length === 0) return;
    const i = e.join(Zc);
    return (s = t.validators.find(({ validator: l }) => l(i))) == null
      ? void 0
      : s.classGroupId;
  },
  Hf = /^\[(.+)\]$/,
  tS = (e) => {
    if (Hf.test(e)) {
      const t = Hf.exec(e)[1],
        n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
      if (n) return "arbitrary.." + n;
    }
  },
  nS = (e) => {
    const { theme: t, prefix: n } = e,
      r = { nextPart: new Map(), validators: [] };
    return (
      oS(Object.entries(e.classGroups), n).forEach(([i, s]) => {
        Iu(s, r, i, t);
      }),
      r
    );
  },
  Iu = (e, t, n, r) => {
    e.forEach((o) => {
      if (typeof o == "string") {
        const i = o === "" ? t : Qf(t, o);
        i.classGroupId = n;
        return;
      }
      if (typeof o == "function") {
        if (rS(o)) {
          Iu(o(r), t, n, r);
          return;
        }
        t.validators.push({ validator: o, classGroupId: n });
        return;
      }
      Object.entries(o).forEach(([i, s]) => {
        Iu(s, Qf(t, i), n, r);
      });
    });
  },
  Qf = (e, t) => {
    let n = e;
    return (
      t.split(Zc).forEach((r) => {
        n.nextPart.has(r) ||
          n.nextPart.set(r, { nextPart: new Map(), validators: [] }),
          (n = n.nextPart.get(r));
      }),
      n
    );
  },
  rS = (e) => e.isThemeGetter,
  oS = (e, t) =>
    t
      ? e.map(([n, r]) => {
          const o = r.map((i) =>
            typeof i == "string"
              ? t + i
              : typeof i == "object"
              ? Object.fromEntries(
                  Object.entries(i).map(([s, l]) => [t + s, l])
                )
              : i
          );
          return [n, o];
        })
      : e,
  iS = (e) => {
    if (e < 1) return { get: () => {}, set: () => {} };
    let t = 0,
      n = new Map(),
      r = new Map();
    const o = (i, s) => {
      n.set(i, s), t++, t > e && ((t = 0), (r = n), (n = new Map()));
    };
    return {
      get(i) {
        let s = n.get(i);
        if (s !== void 0) return s;
        if ((s = r.get(i)) !== void 0) return o(i, s), s;
      },
      set(i, s) {
        n.has(i) ? n.set(i, s) : o(i, s);
      },
    };
  },
  Av = "!",
  sS = (e) => {
    const { separator: t, experimentalParseClassName: n } = e,
      r = t.length === 1,
      o = t[0],
      i = t.length,
      s = (l) => {
        const a = [];
        let u = 0,
          d = 0,
          p;
        for (let w = 0; w < l.length; w++) {
          let y = l[w];
          if (u === 0) {
            if (y === o && (r || l.slice(w, w + i) === t)) {
              a.push(l.slice(d, w)), (d = w + i);
              continue;
            }
            if (y === "/") {
              p = w;
              continue;
            }
          }
          y === "[" ? u++ : y === "]" && u--;
        }
        const g = a.length === 0 ? l : l.substring(d),
          m = g.startsWith(Av),
          S = m ? g.substring(1) : g,
          v = p && p > d ? p - d : void 0;
        return {
          modifiers: a,
          hasImportantModifier: m,
          baseClassName: S,
          maybePostfixModifierPosition: v,
        };
      };
    return n ? (l) => n({ className: l, parseClassName: s }) : s;
  },
  lS = (e) => {
    if (e.length <= 1) return e;
    const t = [];
    let n = [];
    return (
      e.forEach((r) => {
        r[0] === "[" ? (t.push(...n.sort(), r), (n = [])) : n.push(r);
      }),
      t.push(...n.sort()),
      t
    );
  },
  aS = (e) => ({ cache: iS(e.cacheSize), parseClassName: sS(e), ...eS(e) }),
  uS = /\s+/,
  cS = (e, t) => {
    const {
        parseClassName: n,
        getClassGroupId: r,
        getConflictingClassGroupIds: o,
      } = t,
      i = [],
      s = e.trim().split(uS);
    let l = "";
    for (let a = s.length - 1; a >= 0; a -= 1) {
      const u = s[a],
        {
          modifiers: d,
          hasImportantModifier: p,
          baseClassName: g,
          maybePostfixModifierPosition: m,
        } = n(u);
      let S = !!m,
        v = r(S ? g.substring(0, m) : g);
      if (!v) {
        if (!S) {
          l = u + (l.length > 0 ? " " + l : l);
          continue;
        }
        if (((v = r(g)), !v)) {
          l = u + (l.length > 0 ? " " + l : l);
          continue;
        }
        S = !1;
      }
      const w = lS(d).join(":"),
        y = p ? w + Av : w,
        h = y + v;
      if (i.includes(h)) continue;
      i.push(h);
      const x = o(v, S);
      for (let C = 0; C < x.length; ++C) {
        const E = x[C];
        i.push(y + E);
      }
      l = u + (l.length > 0 ? " " + l : l);
    }
    return l;
  };
function dS() {
  let e = 0,
    t,
    n,
    r = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (n = Mv(t)) && (r && (r += " "), (r += n));
  return r;
}
const Mv = (e) => {
  if (typeof e == "string") return e;
  let t,
    n = "";
  for (let r = 0; r < e.length; r++)
    e[r] && (t = Mv(e[r])) && (n && (n += " "), (n += t));
  return n;
};
function fS(e, ...t) {
  let n,
    r,
    o,
    i = s;
  function s(a) {
    const u = t.reduce((d, p) => p(d), e());
    return (n = aS(u)), (r = n.cache.get), (o = n.cache.set), (i = l), l(a);
  }
  function l(a) {
    const u = r(a);
    if (u) return u;
    const d = cS(a, n);
    return o(a, d), d;
  }
  return function () {
    return i(dS.apply(null, arguments));
  };
}
const de = (e) => {
    const t = (n) => n[e] || [];
    return (t.isThemeGetter = !0), t;
  },
  Iv = /^\[(?:([a-z-]+):)?(.+)\]$/i,
  pS = /^\d+\/\d+$/,
  hS = new Set(["px", "full", "screen"]),
  mS = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
  vS =
    /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
  gS = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
  yS = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
  xS =
    /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
  Xt = (e) => eo(e) || hS.has(e) || pS.test(e),
  yn = (e) => To(e, "length", PS),
  eo = (e) => !!e && !Number.isNaN(Number(e)),
  Pa = (e) => To(e, "number", eo),
  Wo = (e) => !!e && Number.isInteger(Number(e)),
  wS = (e) => e.endsWith("%") && eo(e.slice(0, -1)),
  X = (e) => Iv.test(e),
  xn = (e) => mS.test(e),
  SS = new Set(["length", "size", "percentage"]),
  CS = (e) => To(e, SS, Dv),
  ES = (e) => To(e, "position", Dv),
  bS = new Set(["image", "url"]),
  NS = (e) => To(e, bS, RS),
  kS = (e) => To(e, "", TS),
  Vo = () => !0,
  To = (e, t, n) => {
    const r = Iv.exec(e);
    return r
      ? r[1]
        ? typeof t == "string"
          ? r[1] === t
          : t.has(r[1])
        : n(r[2])
      : !1;
  },
  PS = (e) => vS.test(e) && !gS.test(e),
  Dv = () => !1,
  TS = (e) => yS.test(e),
  RS = (e) => xS.test(e),
  jS = () => {
    const e = de("colors"),
      t = de("spacing"),
      n = de("blur"),
      r = de("brightness"),
      o = de("borderColor"),
      i = de("borderRadius"),
      s = de("borderSpacing"),
      l = de("borderWidth"),
      a = de("contrast"),
      u = de("grayscale"),
      d = de("hueRotate"),
      p = de("invert"),
      g = de("gap"),
      m = de("gradientColorStops"),
      S = de("gradientColorStopPositions"),
      v = de("inset"),
      w = de("margin"),
      y = de("opacity"),
      h = de("padding"),
      x = de("saturate"),
      C = de("scale"),
      E = de("sepia"),
      N = de("skew"),
      b = de("space"),
      R = de("translate"),
      O = () => ["auto", "contain", "none"],
      _ = () => ["auto", "hidden", "clip", "visible", "scroll"],
      $ = () => ["auto", X, t],
      I = () => [X, t],
      W = () => ["", Xt, yn],
      M = () => ["auto", eo, X],
      H = () => [
        "bottom",
        "center",
        "left",
        "left-bottom",
        "left-top",
        "right",
        "right-bottom",
        "right-top",
        "top",
      ],
      z = () => ["solid", "dashed", "dotted", "double", "none"],
      U = () => [
        "normal",
        "multiply",
        "screen",
        "overlay",
        "darken",
        "lighten",
        "color-dodge",
        "color-burn",
        "hard-light",
        "soft-light",
        "difference",
        "exclusion",
        "hue",
        "saturation",
        "color",
        "luminosity",
      ],
      k = () => [
        "start",
        "end",
        "center",
        "between",
        "around",
        "evenly",
        "stretch",
      ],
      T = () => ["", "0", X],
      D = () => [
        "auto",
        "avoid",
        "all",
        "avoid-page",
        "page",
        "left",
        "right",
        "column",
      ],
      V = () => [eo, X];
    return {
      cacheSize: 500,
      separator: ":",
      theme: {
        colors: [Vo],
        spacing: [Xt, yn],
        blur: ["none", "", xn, X],
        brightness: V(),
        borderColor: [e],
        borderRadius: ["none", "", "full", xn, X],
        borderSpacing: I(),
        borderWidth: W(),
        contrast: V(),
        grayscale: T(),
        hueRotate: V(),
        invert: T(),
        gap: I(),
        gradientColorStops: [e],
        gradientColorStopPositions: [wS, yn],
        inset: $(),
        margin: $(),
        opacity: V(),
        padding: I(),
        saturate: V(),
        scale: V(),
        sepia: T(),
        skew: V(),
        space: I(),
        translate: I(),
      },
      classGroups: {
        aspect: [{ aspect: ["auto", "square", "video", X] }],
        container: ["container"],
        columns: [{ columns: [xn] }],
        "break-after": [{ "break-after": D() }],
        "break-before": [{ "break-before": D() }],
        "break-inside": [
          { "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] },
        ],
        "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
        box: [{ box: ["border", "content"] }],
        display: [
          "block",
          "inline-block",
          "inline",
          "flex",
          "inline-flex",
          "table",
          "inline-table",
          "table-caption",
          "table-cell",
          "table-column",
          "table-column-group",
          "table-footer-group",
          "table-header-group",
          "table-row-group",
          "table-row",
          "flow-root",
          "grid",
          "inline-grid",
          "contents",
          "list-item",
          "hidden",
        ],
        float: [{ float: ["right", "left", "none", "start", "end"] }],
        clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
        isolation: ["isolate", "isolation-auto"],
        "object-fit": [
          { object: ["contain", "cover", "fill", "none", "scale-down"] },
        ],
        "object-position": [{ object: [...H(), X] }],
        overflow: [{ overflow: _() }],
        "overflow-x": [{ "overflow-x": _() }],
        "overflow-y": [{ "overflow-y": _() }],
        overscroll: [{ overscroll: O() }],
        "overscroll-x": [{ "overscroll-x": O() }],
        "overscroll-y": [{ "overscroll-y": O() }],
        position: ["static", "fixed", "absolute", "relative", "sticky"],
        inset: [{ inset: [v] }],
        "inset-x": [{ "inset-x": [v] }],
        "inset-y": [{ "inset-y": [v] }],
        start: [{ start: [v] }],
        end: [{ end: [v] }],
        top: [{ top: [v] }],
        right: [{ right: [v] }],
        bottom: [{ bottom: [v] }],
        left: [{ left: [v] }],
        visibility: ["visible", "invisible", "collapse"],
        z: [{ z: ["auto", Wo, X] }],
        basis: [{ basis: $() }],
        "flex-direction": [
          { flex: ["row", "row-reverse", "col", "col-reverse"] },
        ],
        "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
        flex: [{ flex: ["1", "auto", "initial", "none", X] }],
        grow: [{ grow: T() }],
        shrink: [{ shrink: T() }],
        order: [{ order: ["first", "last", "none", Wo, X] }],
        "grid-cols": [{ "grid-cols": [Vo] }],
        "col-start-end": [{ col: ["auto", { span: ["full", Wo, X] }, X] }],
        "col-start": [{ "col-start": M() }],
        "col-end": [{ "col-end": M() }],
        "grid-rows": [{ "grid-rows": [Vo] }],
        "row-start-end": [{ row: ["auto", { span: [Wo, X] }, X] }],
        "row-start": [{ "row-start": M() }],
        "row-end": [{ "row-end": M() }],
        "grid-flow": [
          { "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] },
        ],
        "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", X] }],
        "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", X] }],
        gap: [{ gap: [g] }],
        "gap-x": [{ "gap-x": [g] }],
        "gap-y": [{ "gap-y": [g] }],
        "justify-content": [{ justify: ["normal", ...k()] }],
        "justify-items": [
          { "justify-items": ["start", "end", "center", "stretch"] },
        ],
        "justify-self": [
          { "justify-self": ["auto", "start", "end", "center", "stretch"] },
        ],
        "align-content": [{ content: ["normal", ...k(), "baseline"] }],
        "align-items": [
          { items: ["start", "end", "center", "baseline", "stretch"] },
        ],
        "align-self": [
          { self: ["auto", "start", "end", "center", "stretch", "baseline"] },
        ],
        "place-content": [{ "place-content": [...k(), "baseline"] }],
        "place-items": [
          { "place-items": ["start", "end", "center", "baseline", "stretch"] },
        ],
        "place-self": [
          { "place-self": ["auto", "start", "end", "center", "stretch"] },
        ],
        p: [{ p: [h] }],
        px: [{ px: [h] }],
        py: [{ py: [h] }],
        ps: [{ ps: [h] }],
        pe: [{ pe: [h] }],
        pt: [{ pt: [h] }],
        pr: [{ pr: [h] }],
        pb: [{ pb: [h] }],
        pl: [{ pl: [h] }],
        m: [{ m: [w] }],
        mx: [{ mx: [w] }],
        my: [{ my: [w] }],
        ms: [{ ms: [w] }],
        me: [{ me: [w] }],
        mt: [{ mt: [w] }],
        mr: [{ mr: [w] }],
        mb: [{ mb: [w] }],
        ml: [{ ml: [w] }],
        "space-x": [{ "space-x": [b] }],
        "space-x-reverse": ["space-x-reverse"],
        "space-y": [{ "space-y": [b] }],
        "space-y-reverse": ["space-y-reverse"],
        w: [{ w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", X, t] }],
        "min-w": [{ "min-w": [X, t, "min", "max", "fit"] }],
        "max-w": [
          {
            "max-w": [
              X,
              t,
              "none",
              "full",
              "min",
              "max",
              "fit",
              "prose",
              { screen: [xn] },
              xn,
            ],
          },
        ],
        h: [{ h: [X, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] }],
        "min-h": [
          { "min-h": [X, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
        ],
        "max-h": [
          { "max-h": [X, t, "min", "max", "fit", "svh", "lvh", "dvh"] },
        ],
        size: [{ size: [X, t, "auto", "min", "max", "fit"] }],
        "font-size": [{ text: ["base", xn, yn] }],
        "font-smoothing": ["antialiased", "subpixel-antialiased"],
        "font-style": ["italic", "not-italic"],
        "font-weight": [
          {
            font: [
              "thin",
              "extralight",
              "light",
              "normal",
              "medium",
              "semibold",
              "bold",
              "extrabold",
              "black",
              Pa,
            ],
          },
        ],
        "font-family": [{ font: [Vo] }],
        "fvn-normal": ["normal-nums"],
        "fvn-ordinal": ["ordinal"],
        "fvn-slashed-zero": ["slashed-zero"],
        "fvn-figure": ["lining-nums", "oldstyle-nums"],
        "fvn-spacing": ["proportional-nums", "tabular-nums"],
        "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
        tracking: [
          {
            tracking: [
              "tighter",
              "tight",
              "normal",
              "wide",
              "wider",
              "widest",
              X,
            ],
          },
        ],
        "line-clamp": [{ "line-clamp": ["none", eo, Pa] }],
        leading: [
          {
            leading: [
              "none",
              "tight",
              "snug",
              "normal",
              "relaxed",
              "loose",
              Xt,
              X,
            ],
          },
        ],
        "list-image": [{ "list-image": ["none", X] }],
        "list-style-type": [{ list: ["none", "disc", "decimal", X] }],
        "list-style-position": [{ list: ["inside", "outside"] }],
        "placeholder-color": [{ placeholder: [e] }],
        "placeholder-opacity": [{ "placeholder-opacity": [y] }],
        "text-alignment": [
          { text: ["left", "center", "right", "justify", "start", "end"] },
        ],
        "text-color": [{ text: [e] }],
        "text-opacity": [{ "text-opacity": [y] }],
        "text-decoration": [
          "underline",
          "overline",
          "line-through",
          "no-underline",
        ],
        "text-decoration-style": [{ decoration: [...z(), "wavy"] }],
        "text-decoration-thickness": [
          { decoration: ["auto", "from-font", Xt, yn] },
        ],
        "underline-offset": [{ "underline-offset": ["auto", Xt, X] }],
        "text-decoration-color": [{ decoration: [e] }],
        "text-transform": [
          "uppercase",
          "lowercase",
          "capitalize",
          "normal-case",
        ],
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
        indent: [{ indent: I() }],
        "vertical-align": [
          {
            align: [
              "baseline",
              "top",
              "middle",
              "bottom",
              "text-top",
              "text-bottom",
              "sub",
              "super",
              X,
            ],
          },
        ],
        whitespace: [
          {
            whitespace: [
              "normal",
              "nowrap",
              "pre",
              "pre-line",
              "pre-wrap",
              "break-spaces",
            ],
          },
        ],
        break: [{ break: ["normal", "words", "all", "keep"] }],
        hyphens: [{ hyphens: ["none", "manual", "auto"] }],
        content: [{ content: ["none", X] }],
        "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
        "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
        "bg-opacity": [{ "bg-opacity": [y] }],
        "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
        "bg-position": [{ bg: [...H(), ES] }],
        "bg-repeat": [
          { bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] },
        ],
        "bg-size": [{ bg: ["auto", "cover", "contain", CS] }],
        "bg-image": [
          {
            bg: [
              "none",
              { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] },
              NS,
            ],
          },
        ],
        "bg-color": [{ bg: [e] }],
        "gradient-from-pos": [{ from: [S] }],
        "gradient-via-pos": [{ via: [S] }],
        "gradient-to-pos": [{ to: [S] }],
        "gradient-from": [{ from: [m] }],
        "gradient-via": [{ via: [m] }],
        "gradient-to": [{ to: [m] }],
        rounded: [{ rounded: [i] }],
        "rounded-s": [{ "rounded-s": [i] }],
        "rounded-e": [{ "rounded-e": [i] }],
        "rounded-t": [{ "rounded-t": [i] }],
        "rounded-r": [{ "rounded-r": [i] }],
        "rounded-b": [{ "rounded-b": [i] }],
        "rounded-l": [{ "rounded-l": [i] }],
        "rounded-ss": [{ "rounded-ss": [i] }],
        "rounded-se": [{ "rounded-se": [i] }],
        "rounded-ee": [{ "rounded-ee": [i] }],
        "rounded-es": [{ "rounded-es": [i] }],
        "rounded-tl": [{ "rounded-tl": [i] }],
        "rounded-tr": [{ "rounded-tr": [i] }],
        "rounded-br": [{ "rounded-br": [i] }],
        "rounded-bl": [{ "rounded-bl": [i] }],
        "border-w": [{ border: [l] }],
        "border-w-x": [{ "border-x": [l] }],
        "border-w-y": [{ "border-y": [l] }],
        "border-w-s": [{ "border-s": [l] }],
        "border-w-e": [{ "border-e": [l] }],
        "border-w-t": [{ "border-t": [l] }],
        "border-w-r": [{ "border-r": [l] }],
        "border-w-b": [{ "border-b": [l] }],
        "border-w-l": [{ "border-l": [l] }],
        "border-opacity": [{ "border-opacity": [y] }],
        "border-style": [{ border: [...z(), "hidden"] }],
        "divide-x": [{ "divide-x": [l] }],
        "divide-x-reverse": ["divide-x-reverse"],
        "divide-y": [{ "divide-y": [l] }],
        "divide-y-reverse": ["divide-y-reverse"],
        "divide-opacity": [{ "divide-opacity": [y] }],
        "divide-style": [{ divide: z() }],
        "border-color": [{ border: [o] }],
        "border-color-x": [{ "border-x": [o] }],
        "border-color-y": [{ "border-y": [o] }],
        "border-color-s": [{ "border-s": [o] }],
        "border-color-e": [{ "border-e": [o] }],
        "border-color-t": [{ "border-t": [o] }],
        "border-color-r": [{ "border-r": [o] }],
        "border-color-b": [{ "border-b": [o] }],
        "border-color-l": [{ "border-l": [o] }],
        "divide-color": [{ divide: [o] }],
        "outline-style": [{ outline: ["", ...z()] }],
        "outline-offset": [{ "outline-offset": [Xt, X] }],
        "outline-w": [{ outline: [Xt, yn] }],
        "outline-color": [{ outline: [e] }],
        "ring-w": [{ ring: W() }],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [{ ring: [e] }],
        "ring-opacity": [{ "ring-opacity": [y] }],
        "ring-offset-w": [{ "ring-offset": [Xt, yn] }],
        "ring-offset-color": [{ "ring-offset": [e] }],
        shadow: [{ shadow: ["", "inner", "none", xn, kS] }],
        "shadow-color": [{ shadow: [Vo] }],
        opacity: [{ opacity: [y] }],
        "mix-blend": [{ "mix-blend": [...U(), "plus-lighter", "plus-darker"] }],
        "bg-blend": [{ "bg-blend": U() }],
        filter: [{ filter: ["", "none"] }],
        blur: [{ blur: [n] }],
        brightness: [{ brightness: [r] }],
        contrast: [{ contrast: [a] }],
        "drop-shadow": [{ "drop-shadow": ["", "none", xn, X] }],
        grayscale: [{ grayscale: [u] }],
        "hue-rotate": [{ "hue-rotate": [d] }],
        invert: [{ invert: [p] }],
        saturate: [{ saturate: [x] }],
        sepia: [{ sepia: [E] }],
        "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
        "backdrop-blur": [{ "backdrop-blur": [n] }],
        "backdrop-brightness": [{ "backdrop-brightness": [r] }],
        "backdrop-contrast": [{ "backdrop-contrast": [a] }],
        "backdrop-grayscale": [{ "backdrop-grayscale": [u] }],
        "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [d] }],
        "backdrop-invert": [{ "backdrop-invert": [p] }],
        "backdrop-opacity": [{ "backdrop-opacity": [y] }],
        "backdrop-saturate": [{ "backdrop-saturate": [x] }],
        "backdrop-sepia": [{ "backdrop-sepia": [E] }],
        "border-collapse": [{ border: ["collapse", "separate"] }],
        "border-spacing": [{ "border-spacing": [s] }],
        "border-spacing-x": [{ "border-spacing-x": [s] }],
        "border-spacing-y": [{ "border-spacing-y": [s] }],
        "table-layout": [{ table: ["auto", "fixed"] }],
        caption: [{ caption: ["top", "bottom"] }],
        transition: [
          {
            transition: [
              "none",
              "all",
              "",
              "colors",
              "opacity",
              "shadow",
              "transform",
              X,
            ],
          },
        ],
        duration: [{ duration: V() }],
        ease: [{ ease: ["linear", "in", "out", "in-out", X] }],
        delay: [{ delay: V() }],
        animate: [{ animate: ["none", "spin", "ping", "pulse", "bounce", X] }],
        transform: [{ transform: ["", "gpu", "none"] }],
        scale: [{ scale: [C] }],
        "scale-x": [{ "scale-x": [C] }],
        "scale-y": [{ "scale-y": [C] }],
        rotate: [{ rotate: [Wo, X] }],
        "translate-x": [{ "translate-x": [R] }],
        "translate-y": [{ "translate-y": [R] }],
        "skew-x": [{ "skew-x": [N] }],
        "skew-y": [{ "skew-y": [N] }],
        "transform-origin": [
          {
            origin: [
              "center",
              "top",
              "top-right",
              "right",
              "bottom-right",
              "bottom",
              "bottom-left",
              "left",
              "top-left",
              X,
            ],
          },
        ],
        accent: [{ accent: ["auto", e] }],
        appearance: [{ appearance: ["none", "auto"] }],
        cursor: [
          {
            cursor: [
              "auto",
              "default",
              "pointer",
              "wait",
              "text",
              "move",
              "help",
              "not-allowed",
              "none",
              "context-menu",
              "progress",
              "cell",
              "crosshair",
              "vertical-text",
              "alias",
              "copy",
              "no-drop",
              "grab",
              "grabbing",
              "all-scroll",
              "col-resize",
              "row-resize",
              "n-resize",
              "e-resize",
              "s-resize",
              "w-resize",
              "ne-resize",
              "nw-resize",
              "se-resize",
              "sw-resize",
              "ew-resize",
              "ns-resize",
              "nesw-resize",
              "nwse-resize",
              "zoom-in",
              "zoom-out",
              X,
            ],
          },
        ],
        "caret-color": [{ caret: [e] }],
        "pointer-events": [{ "pointer-events": ["none", "auto"] }],
        resize: [{ resize: ["none", "y", "x", ""] }],
        "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
        "scroll-m": [{ "scroll-m": I() }],
        "scroll-mx": [{ "scroll-mx": I() }],
        "scroll-my": [{ "scroll-my": I() }],
        "scroll-ms": [{ "scroll-ms": I() }],
        "scroll-me": [{ "scroll-me": I() }],
        "scroll-mt": [{ "scroll-mt": I() }],
        "scroll-mr": [{ "scroll-mr": I() }],
        "scroll-mb": [{ "scroll-mb": I() }],
        "scroll-ml": [{ "scroll-ml": I() }],
        "scroll-p": [{ "scroll-p": I() }],
        "scroll-px": [{ "scroll-px": I() }],
        "scroll-py": [{ "scroll-py": I() }],
        "scroll-ps": [{ "scroll-ps": I() }],
        "scroll-pe": [{ "scroll-pe": I() }],
        "scroll-pt": [{ "scroll-pt": I() }],
        "scroll-pr": [{ "scroll-pr": I() }],
        "scroll-pb": [{ "scroll-pb": I() }],
        "scroll-pl": [{ "scroll-pl": I() }],
        "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
        "snap-stop": [{ snap: ["normal", "always"] }],
        "snap-type": [{ snap: ["none", "x", "y", "both"] }],
        "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
        touch: [{ touch: ["auto", "none", "manipulation"] }],
        "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
        "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
        "touch-pz": ["touch-pinch-zoom"],
        select: [{ select: ["none", "text", "all", "auto"] }],
        "will-change": [
          { "will-change": ["auto", "scroll", "contents", "transform", X] },
        ],
        fill: [{ fill: [e, "none"] }],
        "stroke-w": [{ stroke: [Xt, yn, Pa] }],
        stroke: [{ stroke: [e, "none"] }],
        sr: ["sr-only", "not-sr-only"],
        "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }],
      },
      conflictingClassGroups: {
        overflow: ["overflow-x", "overflow-y"],
        overscroll: ["overscroll-x", "overscroll-y"],
        inset: [
          "inset-x",
          "inset-y",
          "start",
          "end",
          "top",
          "right",
          "bottom",
          "left",
        ],
        "inset-x": ["right", "left"],
        "inset-y": ["top", "bottom"],
        flex: ["basis", "grow", "shrink"],
        gap: ["gap-x", "gap-y"],
        p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
        px: ["pr", "pl"],
        py: ["pt", "pb"],
        m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
        mx: ["mr", "ml"],
        my: ["mt", "mb"],
        size: ["w", "h"],
        "font-size": ["leading"],
        "fvn-normal": [
          "fvn-ordinal",
          "fvn-slashed-zero",
          "fvn-figure",
          "fvn-spacing",
          "fvn-fraction",
        ],
        "fvn-ordinal": ["fvn-normal"],
        "fvn-slashed-zero": ["fvn-normal"],
        "fvn-figure": ["fvn-normal"],
        "fvn-spacing": ["fvn-normal"],
        "fvn-fraction": ["fvn-normal"],
        "line-clamp": ["display", "overflow"],
        rounded: [
          "rounded-s",
          "rounded-e",
          "rounded-t",
          "rounded-r",
          "rounded-b",
          "rounded-l",
          "rounded-ss",
          "rounded-se",
          "rounded-ee",
          "rounded-es",
          "rounded-tl",
          "rounded-tr",
          "rounded-br",
          "rounded-bl",
        ],
        "rounded-s": ["rounded-ss", "rounded-es"],
        "rounded-e": ["rounded-se", "rounded-ee"],
        "rounded-t": ["rounded-tl", "rounded-tr"],
        "rounded-r": ["rounded-tr", "rounded-br"],
        "rounded-b": ["rounded-br", "rounded-bl"],
        "rounded-l": ["rounded-tl", "rounded-bl"],
        "border-spacing": ["border-spacing-x", "border-spacing-y"],
        "border-w": [
          "border-w-s",
          "border-w-e",
          "border-w-t",
          "border-w-r",
          "border-w-b",
          "border-w-l",
        ],
        "border-w-x": ["border-w-r", "border-w-l"],
        "border-w-y": ["border-w-t", "border-w-b"],
        "border-color": [
          "border-color-s",
          "border-color-e",
          "border-color-t",
          "border-color-r",
          "border-color-b",
          "border-color-l",
        ],
        "border-color-x": ["border-color-r", "border-color-l"],
        "border-color-y": ["border-color-t", "border-color-b"],
        "scroll-m": [
          "scroll-mx",
          "scroll-my",
          "scroll-ms",
          "scroll-me",
          "scroll-mt",
          "scroll-mr",
          "scroll-mb",
          "scroll-ml",
        ],
        "scroll-mx": ["scroll-mr", "scroll-ml"],
        "scroll-my": ["scroll-mt", "scroll-mb"],
        "scroll-p": [
          "scroll-px",
          "scroll-py",
          "scroll-ps",
          "scroll-pe",
          "scroll-pt",
          "scroll-pr",
          "scroll-pb",
          "scroll-pl",
        ],
        "scroll-px": ["scroll-pr", "scroll-pl"],
        "scroll-py": ["scroll-pt", "scroll-pb"],
        touch: ["touch-x", "touch-y", "touch-pz"],
        "touch-x": ["touch"],
        "touch-y": ["touch"],
        "touch-pz": ["touch"],
      },
      conflictingClassGroupModifiers: { "font-size": ["leading"] },
    };
  },
  OS = fS(jS);
function ie(...e) {
  return OS(Rv(e));
}
const _S = $1,
  Lv = f.forwardRef(({ className: e, ...t }, n) =>
    c.jsx(Cv, {
      ref: n,
      className: ie(
        "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
        e
      ),
      ...t,
    })
  );
Lv.displayName = Cv.displayName;
const AS = Xc(
    "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
    {
      variants: {
        variant: {
          default: "border bg-background text-foreground",
          destructive:
            "destructive group border-destructive bg-destructive text-destructive-foreground",
        },
      },
      defaultVariants: { variant: "default" },
    }
  ),
  Fv = f.forwardRef(({ className: e, variant: t, ...n }, r) =>
    c.jsx(Ev, { ref: r, className: ie(AS({ variant: t }), e), ...n })
  );
Fv.displayName = Ev.displayName;
const MS = f.forwardRef(({ className: e, ...t }, n) =>
  c.jsx(kv, {
    ref: n,
    className: ie(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors group-[.destructive]:border-muted/40 hover:bg-secondary group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 group-[.destructive]:focus:ring-destructive disabled:pointer-events-none disabled:opacity-50",
      e
    ),
    ...t,
  })
);
MS.displayName = kv.displayName;
const zv = f.forwardRef(({ className: e, ...t }, n) =>
  c.jsx(Pv, {
    ref: n,
    className: ie(
      "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity group-hover:opacity-100 group-[.destructive]:text-red-300 hover:text-foreground group-[.destructive]:hover:text-red-50 focus:opacity-100 focus:outline-none focus:ring-2 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      e
    ),
    "toast-close": "",
    ...t,
    children: c.jsx(qc, { className: "h-4 w-4" }),
  })
);
zv.displayName = Pv.displayName;
const $v = f.forwardRef(({ className: e, ...t }, n) =>
  c.jsx(bv, { ref: n, className: ie("text-sm font-semibold", e), ...t })
);
$v.displayName = bv.displayName;
const Bv = f.forwardRef(({ className: e, ...t }, n) =>
  c.jsx(Nv, { ref: n, className: ie("text-sm opacity-90", e), ...t })
);
Bv.displayName = Nv.displayName;
function IS() {
  const { toasts: e } = Yw();
  return c.jsxs(_S, {
    children: [
      e.map(function ({ id: t, title: n, description: r, action: o, ...i }) {
        return c.jsxs(
          Fv,
          {
            ...i,
            children: [
              c.jsxs("div", {
                className: "grid gap-1",
                children: [
                  n && c.jsx($v, { children: n }),
                  r && c.jsx(Bv, { children: r }),
                ],
              }),
              o,
              c.jsx(zv, {}),
            ],
          },
          t
        );
      }),
      c.jsx(Lv, {}),
    ],
  });
}
var Kf = ["light", "dark"],
  DS = "(prefers-color-scheme: dark)",
  LS = f.createContext(void 0),
  FS = { setTheme: (e) => {}, themes: [] },
  zS = () => {
    var e;
    return (e = f.useContext(LS)) != null ? e : FS;
  };
f.memo(
  ({
    forcedTheme: e,
    storageKey: t,
    attribute: n,
    enableSystem: r,
    enableColorScheme: o,
    defaultTheme: i,
    value: s,
    attrs: l,
    nonce: a,
  }) => {
    let u = i === "system",
      d =
        n === "class"
          ? `var d=document.documentElement,c=d.classList;${`c.remove(${l
              .map((S) => `'${S}'`)
              .join(",")})`};`
          : `var d=document.documentElement,n='${n}',s='setAttribute';`,
      p = o
        ? Kf.includes(i) && i
          ? `if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${i}'`
          : "if(e==='light'||e==='dark')d.style.colorScheme=e"
        : "",
      g = (S, v = !1, w = !0) => {
        let y = s ? s[S] : S,
          h = v ? S + "|| ''" : `'${y}'`,
          x = "";
        return (
          o &&
            w &&
            !v &&
            Kf.includes(S) &&
            (x += `d.style.colorScheme = '${S}';`),
          n === "class"
            ? v || y
              ? (x += `c.add(${h})`)
              : (x += "null")
            : y && (x += `d[s](n,${h})`),
          x
        );
      },
      m = e
        ? `!function(){${d}${g(e)}}()`
        : r
        ? `!function(){try{${d}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${u})){var t='${DS}',m=window.matchMedia(t);if(m.media!==t||m.matches){${g(
            "dark"
          )}}else{${g("light")}}}else if(e){${
            s ? `var x=${JSON.stringify(s)};` : ""
          }${g(s ? "x[e]" : "e", !0)}}${
            u ? "" : "else{" + g(i, !1, !1) + "}"
          }${p}}catch(e){}}()`
        : `!function(){try{${d}var e=localStorage.getItem('${t}');if(e){${
            s ? `var x=${JSON.stringify(s)};` : ""
          }${g(s ? "x[e]" : "e", !0)}}else{${g(
            i,
            !1,
            !1
          )};}${p}}catch(t){}}();`;
    return f.createElement("script", {
      nonce: a,
      dangerouslySetInnerHTML: { __html: m },
    });
  }
);
var $S = (e) => {
    switch (e) {
      case "success":
        return WS;
      case "info":
        return HS;
      case "warning":
        return VS;
      case "error":
        return QS;
      default:
        return null;
    }
  },
  BS = Array(12).fill(0),
  US = ({ visible: e, className: t }) =>
    A.createElement(
      "div",
      {
        className: ["sonner-loading-wrapper", t].filter(Boolean).join(" "),
        "data-visible": e,
      },
      A.createElement(
        "div",
        { className: "sonner-spinner" },
        BS.map((n, r) =>
          A.createElement("div", {
            className: "sonner-loading-bar",
            key: `spinner-bar-${r}`,
          })
        )
      )
    ),
  WS = A.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    A.createElement("path", {
      fillRule: "evenodd",
      d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
      clipRule: "evenodd",
    })
  ),
  VS = A.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    A.createElement("path", {
      fillRule: "evenodd",
      d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
      clipRule: "evenodd",
    })
  ),
  HS = A.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    A.createElement("path", {
      fillRule: "evenodd",
      d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
      clipRule: "evenodd",
    })
  ),
  QS = A.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor",
      height: "20",
      width: "20",
    },
    A.createElement("path", {
      fillRule: "evenodd",
      d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
      clipRule: "evenodd",
    })
  ),
  KS = A.createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "12",
      height: "12",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    },
    A.createElement("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
    A.createElement("line", { x1: "6", y1: "6", x2: "18", y2: "18" })
  ),
  GS = () => {
    let [e, t] = A.useState(document.hidden);
    return (
      A.useEffect(() => {
        let n = () => {
          t(document.hidden);
        };
        return (
          document.addEventListener("visibilitychange", n),
          () => window.removeEventListener("visibilitychange", n)
        );
      }, []),
      e
    );
  },
  Du = 1,
  YS = class {
    constructor() {
      (this.subscribe = (e) => (
        this.subscribers.push(e),
        () => {
          let t = this.subscribers.indexOf(e);
          this.subscribers.splice(t, 1);
        }
      )),
        (this.publish = (e) => {
          this.subscribers.forEach((t) => t(e));
        }),
        (this.addToast = (e) => {
          this.publish(e), (this.toasts = [...this.toasts, e]);
        }),
        (this.create = (e) => {
          var t;
          let { message: n, ...r } = e,
            o =
              typeof (e == null ? void 0 : e.id) == "number" ||
              ((t = e.id) == null ? void 0 : t.length) > 0
                ? e.id
                : Du++,
            i = this.toasts.find((l) => l.id === o),
            s = e.dismissible === void 0 ? !0 : e.dismissible;
          return (
            this.dismissedToasts.has(o) && this.dismissedToasts.delete(o),
            i
              ? (this.toasts = this.toasts.map((l) =>
                  l.id === o
                    ? (this.publish({ ...l, ...e, id: o, title: n }),
                      { ...l, ...e, id: o, dismissible: s, title: n })
                    : l
                ))
              : this.addToast({ title: n, ...r, dismissible: s, id: o }),
            o
          );
        }),
        (this.dismiss = (e) => (
          this.dismissedToasts.add(e),
          e ||
            this.toasts.forEach((t) => {
              this.subscribers.forEach((n) => n({ id: t.id, dismiss: !0 }));
            }),
          this.subscribers.forEach((t) => t({ id: e, dismiss: !0 })),
          e
        )),
        (this.message = (e, t) => this.create({ ...t, message: e })),
        (this.error = (e, t) =>
          this.create({ ...t, message: e, type: "error" })),
        (this.success = (e, t) =>
          this.create({ ...t, type: "success", message: e })),
        (this.info = (e, t) => this.create({ ...t, type: "info", message: e })),
        (this.warning = (e, t) =>
          this.create({ ...t, type: "warning", message: e })),
        (this.loading = (e, t) =>
          this.create({ ...t, type: "loading", message: e })),
        (this.promise = (e, t) => {
          if (!t) return;
          let n;
          t.loading !== void 0 &&
            (n = this.create({
              ...t,
              promise: e,
              type: "loading",
              message: t.loading,
              description:
                typeof t.description != "function" ? t.description : void 0,
            }));
          let r = e instanceof Promise ? e : e(),
            o = n !== void 0,
            i,
            s = r
              .then(async (a) => {
                if (((i = ["resolve", a]), A.isValidElement(a)))
                  (o = !1), this.create({ id: n, type: "default", message: a });
                else if (qS(a) && !a.ok) {
                  o = !1;
                  let u =
                      typeof t.error == "function"
                        ? await t.error(`HTTP error! status: ${a.status}`)
                        : t.error,
                    d =
                      typeof t.description == "function"
                        ? await t.description(`HTTP error! status: ${a.status}`)
                        : t.description;
                  this.create({
                    id: n,
                    type: "error",
                    message: u,
                    description: d,
                  });
                } else if (t.success !== void 0) {
                  o = !1;
                  let u =
                      typeof t.success == "function"
                        ? await t.success(a)
                        : t.success,
                    d =
                      typeof t.description == "function"
                        ? await t.description(a)
                        : t.description;
                  this.create({
                    id: n,
                    type: "success",
                    message: u,
                    description: d,
                  });
                }
              })
              .catch(async (a) => {
                if (((i = ["reject", a]), t.error !== void 0)) {
                  o = !1;
                  let u =
                      typeof t.error == "function" ? await t.error(a) : t.error,
                    d =
                      typeof t.description == "function"
                        ? await t.description(a)
                        : t.description;
                  this.create({
                    id: n,
                    type: "error",
                    message: u,
                    description: d,
                  });
                }
              })
              .finally(() => {
                var a;
                o && (this.dismiss(n), (n = void 0)),
                  (a = t.finally) == null || a.call(t);
              }),
            l = () =>
              new Promise((a, u) =>
                s.then(() => (i[0] === "reject" ? u(i[1]) : a(i[1]))).catch(u)
              );
          return typeof n != "string" && typeof n != "number"
            ? { unwrap: l }
            : Object.assign(n, { unwrap: l });
        }),
        (this.custom = (e, t) => {
          let n = (t == null ? void 0 : t.id) || Du++;
          return this.create({ jsx: e(n), id: n, ...t }), n;
        }),
        (this.getActiveToasts = () =>
          this.toasts.filter((e) => !this.dismissedToasts.has(e.id))),
        (this.subscribers = []),
        (this.toasts = []),
        (this.dismissedToasts = new Set());
    }
  },
  Ge = new YS(),
  XS = (e, t) => {
    let n = (t == null ? void 0 : t.id) || Du++;
    return Ge.addToast({ title: e, ...t, id: n }), n;
  },
  qS = (e) =>
    e &&
    typeof e == "object" &&
    "ok" in e &&
    typeof e.ok == "boolean" &&
    "status" in e &&
    typeof e.status == "number",
  ZS = XS,
  JS = () => Ge.toasts,
  eC = () => Ge.getActiveToasts(),
  tC = Object.assign(
    ZS,
    {
      success: Ge.success,
      info: Ge.info,
      warning: Ge.warning,
      error: Ge.error,
      custom: Ge.custom,
      message: Ge.message,
      promise: Ge.promise,
      dismiss: Ge.dismiss,
      loading: Ge.loading,
    },
    { getHistory: JS, getToasts: eC }
  );
function nC(e, { insertAt: t } = {}) {
  if (typeof document > "u") return;
  let n = document.head || document.getElementsByTagName("head")[0],
    r = document.createElement("style");
  (r.type = "text/css"),
    t === "top" && n.firstChild
      ? n.insertBefore(r, n.firstChild)
      : n.appendChild(r),
    r.styleSheet
      ? (r.styleSheet.cssText = e)
      : r.appendChild(document.createTextNode(e));
}
nC(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:var(--offset-right)}:where([data-sonner-toaster][data-x-position="left"]){left:var(--offset-left)}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:var(--offset-top)}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:var(--offset-bottom)}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:-50%;right:-50%;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y, 0px)) translate(var(--swipe-amount-x, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-bg-hover: hsl(0, 0%, 12%);--normal-border: hsl(0, 0%, 20%);--normal-border-hover: hsl(0, 0%, 25%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);
function us(e) {
  return e.label !== void 0;
}
var rC = 3,
  oC = "32px",
  iC = "16px",
  Gf = 4e3,
  sC = 356,
  lC = 14,
  aC = 20,
  uC = 200;
function Ct(...e) {
  return e.filter(Boolean).join(" ");
}
function cC(e) {
  let [t, n] = e.split("-"),
    r = [];
  return t && r.push(t), n && r.push(n), r;
}
var dC = (e) => {
  var t, n, r, o, i, s, l, a, u, d, p;
  let {
      invert: g,
      toast: m,
      unstyled: S,
      interacting: v,
      setHeights: w,
      visibleToasts: y,
      heights: h,
      index: x,
      toasts: C,
      expanded: E,
      removeToast: N,
      defaultRichColors: b,
      closeButton: R,
      style: O,
      cancelButtonStyle: _,
      actionButtonStyle: $,
      className: I = "",
      descriptionClassName: W = "",
      duration: M,
      position: H,
      gap: z,
      loadingIcon: U,
      expandByDefault: k,
      classNames: T,
      icons: D,
      closeButtonAriaLabel: V = "Close toast",
      pauseWhenPageIsHidden: B,
    } = e,
    [Y, Q] = A.useState(null),
    [ce, we] = A.useState(null),
    [L, se] = A.useState(!1),
    [Se, oe] = A.useState(!1),
    [J, ne] = A.useState(!1),
    [Ie, at] = A.useState(!1),
    [qn, pn] = A.useState(!1),
    [Zn, Ao] = A.useState(0),
    [Tr, Sd] = A.useState(0),
    Mo = A.useRef(m.duration || M || Gf),
    Cd = A.useRef(null),
    Jn = A.useRef(null),
    u0 = x === 0,
    c0 = x + 1 <= y,
    ut = m.type,
    Rr = m.dismissible !== !1,
    d0 = m.className || "",
    f0 = m.descriptionClassName || "",
    Ui = A.useMemo(
      () => h.findIndex((K) => K.toastId === m.id) || 0,
      [h, m.id]
    ),
    p0 = A.useMemo(() => {
      var K;
      return (K = m.closeButton) != null ? K : R;
    }, [m.closeButton, R]),
    Ed = A.useMemo(() => m.duration || M || Gf, [m.duration, M]),
    Yl = A.useRef(0),
    jr = A.useRef(0),
    bd = A.useRef(0),
    Or = A.useRef(null),
    [h0, m0] = H.split("-"),
    Nd = A.useMemo(
      () => h.reduce((K, ae, me) => (me >= Ui ? K : K + ae.height), 0),
      [h, Ui]
    ),
    kd = GS(),
    v0 = m.invert || g,
    Xl = ut === "loading";
  (jr.current = A.useMemo(() => Ui * z + Nd, [Ui, Nd])),
    A.useEffect(() => {
      Mo.current = Ed;
    }, [Ed]),
    A.useEffect(() => {
      se(!0);
    }, []),
    A.useEffect(() => {
      let K = Jn.current;
      if (K) {
        let ae = K.getBoundingClientRect().height;
        return (
          Sd(ae),
          w((me) => [
            { toastId: m.id, height: ae, position: m.position },
            ...me,
          ]),
          () => w((me) => me.filter((yt) => yt.toastId !== m.id))
        );
      }
    }, [w, m.id]),
    A.useLayoutEffect(() => {
      if (!L) return;
      let K = Jn.current,
        ae = K.style.height;
      K.style.height = "auto";
      let me = K.getBoundingClientRect().height;
      (K.style.height = ae),
        Sd(me),
        w((yt) =>
          yt.find((xt) => xt.toastId === m.id)
            ? yt.map((xt) => (xt.toastId === m.id ? { ...xt, height: me } : xt))
            : [{ toastId: m.id, height: me, position: m.position }, ...yt]
        );
    }, [L, m.title, m.description, w, m.id]);
  let hn = A.useCallback(() => {
    oe(!0),
      Ao(jr.current),
      w((K) => K.filter((ae) => ae.toastId !== m.id)),
      setTimeout(() => {
        N(m);
      }, uC);
  }, [m, N, w, jr]);
  A.useEffect(() => {
    if (
      (m.promise && ut === "loading") ||
      m.duration === 1 / 0 ||
      m.type === "loading"
    )
      return;
    let K;
    return (
      E || v || (B && kd)
        ? (() => {
            if (bd.current < Yl.current) {
              let ae = new Date().getTime() - Yl.current;
              Mo.current = Mo.current - ae;
            }
            bd.current = new Date().getTime();
          })()
        : Mo.current !== 1 / 0 &&
          ((Yl.current = new Date().getTime()),
          (K = setTimeout(() => {
            var ae;
            (ae = m.onAutoClose) == null || ae.call(m, m), hn();
          }, Mo.current))),
      () => clearTimeout(K)
    );
  }, [E, v, m, ut, B, kd, hn]),
    A.useEffect(() => {
      m.delete && hn();
    }, [hn, m.delete]);
  function g0() {
    var K, ae, me;
    return D != null && D.loading
      ? A.createElement(
          "div",
          {
            className: Ct(
              T == null ? void 0 : T.loader,
              (K = m == null ? void 0 : m.classNames) == null
                ? void 0
                : K.loader,
              "sonner-loader"
            ),
            "data-visible": ut === "loading",
          },
          D.loading
        )
      : U
      ? A.createElement(
          "div",
          {
            className: Ct(
              T == null ? void 0 : T.loader,
              (ae = m == null ? void 0 : m.classNames) == null
                ? void 0
                : ae.loader,
              "sonner-loader"
            ),
            "data-visible": ut === "loading",
          },
          U
        )
      : A.createElement(US, {
          className: Ct(
            T == null ? void 0 : T.loader,
            (me = m == null ? void 0 : m.classNames) == null
              ? void 0
              : me.loader
          ),
          visible: ut === "loading",
        });
  }
  return A.createElement(
    "li",
    {
      tabIndex: 0,
      ref: Jn,
      className: Ct(
        I,
        d0,
        T == null ? void 0 : T.toast,
        (t = m == null ? void 0 : m.classNames) == null ? void 0 : t.toast,
        T == null ? void 0 : T.default,
        T == null ? void 0 : T[ut],
        (n = m == null ? void 0 : m.classNames) == null ? void 0 : n[ut]
      ),
      "data-sonner-toast": "",
      "data-rich-colors": (r = m.richColors) != null ? r : b,
      "data-styled": !(m.jsx || m.unstyled || S),
      "data-mounted": L,
      "data-promise": !!m.promise,
      "data-swiped": qn,
      "data-removed": Se,
      "data-visible": c0,
      "data-y-position": h0,
      "data-x-position": m0,
      "data-index": x,
      "data-front": u0,
      "data-swiping": J,
      "data-dismissible": Rr,
      "data-type": ut,
      "data-invert": v0,
      "data-swipe-out": Ie,
      "data-swipe-direction": ce,
      "data-expanded": !!(E || (k && L)),
      style: {
        "--index": x,
        "--toasts-before": x,
        "--z-index": C.length - x,
        "--offset": `${Se ? Zn : jr.current}px`,
        "--initial-height": k ? "auto" : `${Tr}px`,
        ...O,
        ...m.style,
      },
      onDragEnd: () => {
        ne(!1), Q(null), (Or.current = null);
      },
      onPointerDown: (K) => {
        Xl ||
          !Rr ||
          ((Cd.current = new Date()),
          Ao(jr.current),
          K.target.setPointerCapture(K.pointerId),
          K.target.tagName !== "BUTTON" &&
            (ne(!0), (Or.current = { x: K.clientX, y: K.clientY })));
      },
      onPointerUp: () => {
        var K, ae, me, yt;
        if (Ie || !Rr) return;
        Or.current = null;
        let xt = Number(
            ((K = Jn.current) == null
              ? void 0
              : K.style
                  .getPropertyValue("--swipe-amount-x")
                  .replace("px", "")) || 0
          ),
          mn = Number(
            ((ae = Jn.current) == null
              ? void 0
              : ae.style
                  .getPropertyValue("--swipe-amount-y")
                  .replace("px", "")) || 0
          ),
          er =
            new Date().getTime() -
            ((me = Cd.current) == null ? void 0 : me.getTime()),
          wt = Y === "x" ? xt : mn,
          vn = Math.abs(wt) / er;
        if (Math.abs(wt) >= aC || vn > 0.11) {
          Ao(jr.current),
            (yt = m.onDismiss) == null || yt.call(m, m),
            we(
              Y === "x" ? (xt > 0 ? "right" : "left") : mn > 0 ? "down" : "up"
            ),
            hn(),
            at(!0),
            pn(!1);
          return;
        }
        ne(!1), Q(null);
      },
      onPointerMove: (K) => {
        var ae, me, yt, xt;
        if (
          !Or.current ||
          !Rr ||
          ((ae = window.getSelection()) == null
            ? void 0
            : ae.toString().length) > 0
        )
          return;
        let mn = K.clientY - Or.current.y,
          er = K.clientX - Or.current.x,
          wt = (me = e.swipeDirections) != null ? me : cC(H);
        !Y &&
          (Math.abs(er) > 1 || Math.abs(mn) > 1) &&
          Q(Math.abs(er) > Math.abs(mn) ? "x" : "y");
        let vn = { x: 0, y: 0 };
        Y === "y"
          ? (wt.includes("top") || wt.includes("bottom")) &&
            ((wt.includes("top") && mn < 0) ||
              (wt.includes("bottom") && mn > 0)) &&
            (vn.y = mn)
          : Y === "x" &&
            (wt.includes("left") || wt.includes("right")) &&
            ((wt.includes("left") && er < 0) ||
              (wt.includes("right") && er > 0)) &&
            (vn.x = er),
          (Math.abs(vn.x) > 0 || Math.abs(vn.y) > 0) && pn(!0),
          (yt = Jn.current) == null ||
            yt.style.setProperty("--swipe-amount-x", `${vn.x}px`),
          (xt = Jn.current) == null ||
            xt.style.setProperty("--swipe-amount-y", `${vn.y}px`);
      },
    },
    p0 && !m.jsx
      ? A.createElement(
          "button",
          {
            "aria-label": V,
            "data-disabled": Xl,
            "data-close-button": !0,
            onClick:
              Xl || !Rr
                ? () => {}
                : () => {
                    var K;
                    hn(), (K = m.onDismiss) == null || K.call(m, m);
                  },
            className: Ct(
              T == null ? void 0 : T.closeButton,
              (o = m == null ? void 0 : m.classNames) == null
                ? void 0
                : o.closeButton
            ),
          },
          (i = D == null ? void 0 : D.close) != null ? i : KS
        )
      : null,
    m.jsx || f.isValidElement(m.title)
      ? m.jsx
        ? m.jsx
        : typeof m.title == "function"
        ? m.title()
        : m.title
      : A.createElement(
          A.Fragment,
          null,
          ut || m.icon || m.promise
            ? A.createElement(
                "div",
                {
                  "data-icon": "",
                  className: Ct(
                    T == null ? void 0 : T.icon,
                    (s = m == null ? void 0 : m.classNames) == null
                      ? void 0
                      : s.icon
                  ),
                },
                m.promise || (m.type === "loading" && !m.icon)
                  ? m.icon || g0()
                  : null,
                m.type !== "loading"
                  ? m.icon || (D == null ? void 0 : D[ut]) || $S(ut)
                  : null
              )
            : null,
          A.createElement(
            "div",
            {
              "data-content": "",
              className: Ct(
                T == null ? void 0 : T.content,
                (l = m == null ? void 0 : m.classNames) == null
                  ? void 0
                  : l.content
              ),
            },
            A.createElement(
              "div",
              {
                "data-title": "",
                className: Ct(
                  T == null ? void 0 : T.title,
                  (a = m == null ? void 0 : m.classNames) == null
                    ? void 0
                    : a.title
                ),
              },
              typeof m.title == "function" ? m.title() : m.title
            ),
            m.description
              ? A.createElement(
                  "div",
                  {
                    "data-description": "",
                    className: Ct(
                      W,
                      f0,
                      T == null ? void 0 : T.description,
                      (u = m == null ? void 0 : m.classNames) == null
                        ? void 0
                        : u.description
                    ),
                  },
                  typeof m.description == "function"
                    ? m.description()
                    : m.description
                )
              : null
          ),
          f.isValidElement(m.cancel)
            ? m.cancel
            : m.cancel && us(m.cancel)
            ? A.createElement(
                "button",
                {
                  "data-button": !0,
                  "data-cancel": !0,
                  style: m.cancelButtonStyle || _,
                  onClick: (K) => {
                    var ae, me;
                    us(m.cancel) &&
                      Rr &&
                      ((me = (ae = m.cancel).onClick) == null || me.call(ae, K),
                      hn());
                  },
                  className: Ct(
                    T == null ? void 0 : T.cancelButton,
                    (d = m == null ? void 0 : m.classNames) == null
                      ? void 0
                      : d.cancelButton
                  ),
                },
                m.cancel.label
              )
            : null,
          f.isValidElement(m.action)
            ? m.action
            : m.action && us(m.action)
            ? A.createElement(
                "button",
                {
                  "data-button": !0,
                  "data-action": !0,
                  style: m.actionButtonStyle || $,
                  onClick: (K) => {
                    var ae, me;
                    us(m.action) &&
                      ((me = (ae = m.action).onClick) == null || me.call(ae, K),
                      !K.defaultPrevented && hn());
                  },
                  className: Ct(
                    T == null ? void 0 : T.actionButton,
                    (p = m == null ? void 0 : m.classNames) == null
                      ? void 0
                      : p.actionButton
                  ),
                },
                m.action.label
              )
            : null
        )
  );
};
function Yf() {
  if (typeof window > "u" || typeof document > "u") return "ltr";
  let e = document.documentElement.getAttribute("dir");
  return e === "auto" || !e
    ? window.getComputedStyle(document.documentElement).direction
    : e;
}
function fC(e, t) {
  let n = {};
  return (
    [e, t].forEach((r, o) => {
      let i = o === 1,
        s = i ? "--mobile-offset" : "--offset",
        l = i ? iC : oC;
      function a(u) {
        ["top", "right", "bottom", "left"].forEach((d) => {
          n[`${s}-${d}`] = typeof u == "number" ? `${u}px` : u;
        });
      }
      typeof r == "number" || typeof r == "string"
        ? a(r)
        : typeof r == "object"
        ? ["top", "right", "bottom", "left"].forEach((u) => {
            r[u] === void 0
              ? (n[`${s}-${u}`] = l)
              : (n[`${s}-${u}`] = typeof r[u] == "number" ? `${r[u]}px` : r[u]);
          })
        : a(l);
    }),
    n
  );
}
var pC = f.forwardRef(function (e, t) {
  let {
      invert: n,
      position: r = "bottom-right",
      hotkey: o = ["altKey", "KeyT"],
      expand: i,
      closeButton: s,
      className: l,
      offset: a,
      mobileOffset: u,
      theme: d = "light",
      richColors: p,
      duration: g,
      style: m,
      visibleToasts: S = rC,
      toastOptions: v,
      dir: w = Yf(),
      gap: y = lC,
      loadingIcon: h,
      icons: x,
      containerAriaLabel: C = "Notifications",
      pauseWhenPageIsHidden: E,
    } = e,
    [N, b] = A.useState([]),
    R = A.useMemo(
      () =>
        Array.from(
          new Set(
            [r].concat(N.filter((B) => B.position).map((B) => B.position))
          )
        ),
      [N, r]
    ),
    [O, _] = A.useState([]),
    [$, I] = A.useState(!1),
    [W, M] = A.useState(!1),
    [H, z] = A.useState(
      d !== "system"
        ? d
        : typeof window < "u" &&
          window.matchMedia &&
          window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"
    ),
    U = A.useRef(null),
    k = o.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
    T = A.useRef(null),
    D = A.useRef(!1),
    V = A.useCallback((B) => {
      b((Y) => {
        var Q;
        return (
          ((Q = Y.find((ce) => ce.id === B.id)) != null && Q.delete) ||
            Ge.dismiss(B.id),
          Y.filter(({ id: ce }) => ce !== B.id)
        );
      });
    }, []);
  return (
    A.useEffect(
      () =>
        Ge.subscribe((B) => {
          if (B.dismiss) {
            b((Y) => Y.map((Q) => (Q.id === B.id ? { ...Q, delete: !0 } : Q)));
            return;
          }
          setTimeout(() => {
            Jm.flushSync(() => {
              b((Y) => {
                let Q = Y.findIndex((ce) => ce.id === B.id);
                return Q !== -1
                  ? [...Y.slice(0, Q), { ...Y[Q], ...B }, ...Y.slice(Q + 1)]
                  : [B, ...Y];
              });
            });
          });
        }),
      []
    ),
    A.useEffect(() => {
      if (d !== "system") {
        z(d);
        return;
      }
      if (
        (d === "system" &&
          (window.matchMedia &&
          window.matchMedia("(prefers-color-scheme: dark)").matches
            ? z("dark")
            : z("light")),
        typeof window > "u")
      )
        return;
      let B = window.matchMedia("(prefers-color-scheme: dark)");
      try {
        B.addEventListener("change", ({ matches: Y }) => {
          z(Y ? "dark" : "light");
        });
      } catch {
        B.addListener(({ matches: Q }) => {
          try {
            z(Q ? "dark" : "light");
          } catch (ce) {
            console.error(ce);
          }
        });
      }
    }, [d]),
    A.useEffect(() => {
      N.length <= 1 && I(!1);
    }, [N]),
    A.useEffect(() => {
      let B = (Y) => {
        var Q, ce;
        o.every((we) => Y[we] || Y.code === we) &&
          (I(!0), (Q = U.current) == null || Q.focus()),
          Y.code === "Escape" &&
            (document.activeElement === U.current ||
              ((ce = U.current) != null &&
                ce.contains(document.activeElement))) &&
            I(!1);
      };
      return (
        document.addEventListener("keydown", B),
        () => document.removeEventListener("keydown", B)
      );
    }, [o]),
    A.useEffect(() => {
      if (U.current)
        return () => {
          T.current &&
            (T.current.focus({ preventScroll: !0 }),
            (T.current = null),
            (D.current = !1));
        };
    }, [U.current]),
    A.createElement(
      "section",
      {
        ref: t,
        "aria-label": `${C} ${k}`,
        tabIndex: -1,
        "aria-live": "polite",
        "aria-relevant": "additions text",
        "aria-atomic": "false",
        suppressHydrationWarning: !0,
      },
      R.map((B, Y) => {
        var Q;
        let [ce, we] = B.split("-");
        return N.length
          ? A.createElement(
              "ol",
              {
                key: B,
                dir: w === "auto" ? Yf() : w,
                tabIndex: -1,
                ref: U,
                className: l,
                "data-sonner-toaster": !0,
                "data-theme": H,
                "data-y-position": ce,
                "data-lifted": $ && N.length > 1 && !i,
                "data-x-position": we,
                style: {
                  "--front-toast-height": `${
                    ((Q = O[0]) == null ? void 0 : Q.height) || 0
                  }px`,
                  "--width": `${sC}px`,
                  "--gap": `${y}px`,
                  ...m,
                  ...fC(a, u),
                },
                onBlur: (L) => {
                  D.current &&
                    !L.currentTarget.contains(L.relatedTarget) &&
                    ((D.current = !1),
                    T.current &&
                      (T.current.focus({ preventScroll: !0 }),
                      (T.current = null)));
                },
                onFocus: (L) => {
                  (L.target instanceof HTMLElement &&
                    L.target.dataset.dismissible === "false") ||
                    D.current ||
                    ((D.current = !0), (T.current = L.relatedTarget));
                },
                onMouseEnter: () => I(!0),
                onMouseMove: () => I(!0),
                onMouseLeave: () => {
                  W || I(!1);
                },
                onDragEnd: () => I(!1),
                onPointerDown: (L) => {
                  (L.target instanceof HTMLElement &&
                    L.target.dataset.dismissible === "false") ||
                    M(!0);
                },
                onPointerUp: () => M(!1),
              },
              N.filter((L) => (!L.position && Y === 0) || L.position === B).map(
                (L, se) => {
                  var Se, oe;
                  return A.createElement(dC, {
                    key: L.id,
                    icons: x,
                    index: se,
                    toast: L,
                    defaultRichColors: p,
                    duration:
                      (Se = v == null ? void 0 : v.duration) != null ? Se : g,
                    className: v == null ? void 0 : v.className,
                    descriptionClassName:
                      v == null ? void 0 : v.descriptionClassName,
                    invert: n,
                    visibleToasts: S,
                    closeButton:
                      (oe = v == null ? void 0 : v.closeButton) != null
                        ? oe
                        : s,
                    interacting: W,
                    position: B,
                    style: v == null ? void 0 : v.style,
                    unstyled: v == null ? void 0 : v.unstyled,
                    classNames: v == null ? void 0 : v.classNames,
                    cancelButtonStyle: v == null ? void 0 : v.cancelButtonStyle,
                    actionButtonStyle: v == null ? void 0 : v.actionButtonStyle,
                    removeToast: V,
                    toasts: N.filter((J) => J.position == L.position),
                    heights: O.filter((J) => J.position == L.position),
                    setHeights: _,
                    expandByDefault: i,
                    gap: y,
                    loadingIcon: h,
                    expanded: $,
                    pauseWhenPageIsHidden: E,
                    swipeDirections: e.swipeDirections,
                  });
                }
              )
            )
          : null;
      })
    )
  );
});
const Uv = ({ ...e }) => {
  const { theme: t = "system" } = zS();
  return c.jsx(pC, {
    theme: t,
    className: "toaster group",
    toastOptions: {
      classNames: {
        toast:
          "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
        description: "group-[.toast]:text-muted-foreground",
        actionButton:
          "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
        cancelButton:
          "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
      },
    },
    ...e,
  });
};
var hC = nc[" useId ".trim().toString()] || (() => {}),
  mC = 0;
function to(e) {
  const [t, n] = f.useState(hC());
  return (
    Me(() => {
      n((r) => r ?? String(mC++));
    }, [e]),
    t ? `radix-${t}` : ""
  );
}
const vC = ["top", "right", "bottom", "left"],
  Vn = Math.min,
  tt = Math.max,
  il = Math.round,
  cs = Math.floor,
  Kt = (e) => ({ x: e, y: e }),
  gC = { left: "right", right: "left", bottom: "top", top: "bottom" },
  yC = { start: "end", end: "start" };
function Lu(e, t, n) {
  return tt(e, Vn(t, n));
}
function cn(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function dn(e) {
  return e.split("-")[0];
}
function Ro(e) {
  return e.split("-")[1];
}
function Jc(e) {
  return e === "x" ? "y" : "x";
}
function ed(e) {
  return e === "y" ? "height" : "width";
}
const xC = new Set(["top", "bottom"]);
function Vt(e) {
  return xC.has(dn(e)) ? "y" : "x";
}
function td(e) {
  return Jc(Vt(e));
}
function wC(e, t, n) {
  n === void 0 && (n = !1);
  const r = Ro(e),
    o = td(e),
    i = ed(o);
  let s =
    o === "x"
      ? r === (n ? "end" : "start")
        ? "right"
        : "left"
      : r === "start"
      ? "bottom"
      : "top";
  return t.reference[i] > t.floating[i] && (s = sl(s)), [s, sl(s)];
}
function SC(e) {
  const t = sl(e);
  return [Fu(e), t, Fu(t)];
}
function Fu(e) {
  return e.replace(/start|end/g, (t) => yC[t]);
}
const Xf = ["left", "right"],
  qf = ["right", "left"],
  CC = ["top", "bottom"],
  EC = ["bottom", "top"];
function bC(e, t, n) {
  switch (e) {
    case "top":
    case "bottom":
      return n ? (t ? qf : Xf) : t ? Xf : qf;
    case "left":
    case "right":
      return t ? CC : EC;
    default:
      return [];
  }
}
function NC(e, t, n, r) {
  const o = Ro(e);
  let i = bC(dn(e), n === "start", r);
  return (
    o && ((i = i.map((s) => s + "-" + o)), t && (i = i.concat(i.map(Fu)))), i
  );
}
function sl(e) {
  return e.replace(/left|right|bottom|top/g, (t) => gC[t]);
}
function kC(e) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...e };
}
function Wv(e) {
  return typeof e != "number"
    ? kC(e)
    : { top: e, right: e, bottom: e, left: e };
}
function ll(e) {
  const { x: t, y: n, width: r, height: o } = e;
  return {
    width: r,
    height: o,
    top: n,
    left: t,
    right: t + r,
    bottom: n + o,
    x: t,
    y: n,
  };
}
function Zf(e, t, n) {
  let { reference: r, floating: o } = e;
  const i = Vt(t),
    s = td(t),
    l = ed(s),
    a = dn(t),
    u = i === "y",
    d = r.x + r.width / 2 - o.width / 2,
    p = r.y + r.height / 2 - o.height / 2,
    g = r[l] / 2 - o[l] / 2;
  let m;
  switch (a) {
    case "top":
      m = { x: d, y: r.y - o.height };
      break;
    case "bottom":
      m = { x: d, y: r.y + r.height };
      break;
    case "right":
      m = { x: r.x + r.width, y: p };
      break;
    case "left":
      m = { x: r.x - o.width, y: p };
      break;
    default:
      m = { x: r.x, y: r.y };
  }
  switch (Ro(t)) {
    case "start":
      m[s] -= g * (n && u ? -1 : 1);
      break;
    case "end":
      m[s] += g * (n && u ? -1 : 1);
      break;
  }
  return m;
}
const PC = async (e, t, n) => {
  const {
      placement: r = "bottom",
      strategy: o = "absolute",
      middleware: i = [],
      platform: s,
    } = n,
    l = i.filter(Boolean),
    a = await (s.isRTL == null ? void 0 : s.isRTL(t));
  let u = await s.getElementRects({ reference: e, floating: t, strategy: o }),
    { x: d, y: p } = Zf(u, r, a),
    g = r,
    m = {},
    S = 0;
  for (let v = 0; v < l.length; v++) {
    const { name: w, fn: y } = l[v],
      {
        x: h,
        y: x,
        data: C,
        reset: E,
      } = await y({
        x: d,
        y: p,
        initialPlacement: r,
        placement: g,
        strategy: o,
        middlewareData: m,
        rects: u,
        platform: s,
        elements: { reference: e, floating: t },
      });
    (d = h ?? d),
      (p = x ?? p),
      (m = { ...m, [w]: { ...m[w], ...C } }),
      E &&
        S <= 50 &&
        (S++,
        typeof E == "object" &&
          (E.placement && (g = E.placement),
          E.rects &&
            (u =
              E.rects === !0
                ? await s.getElementRects({
                    reference: e,
                    floating: t,
                    strategy: o,
                  })
                : E.rects),
          ({ x: d, y: p } = Zf(u, g, a))),
        (v = -1));
  }
  return { x: d, y: p, placement: g, strategy: o, middlewareData: m };
};
async function Ni(e, t) {
  var n;
  t === void 0 && (t = {});
  const { x: r, y: o, platform: i, rects: s, elements: l, strategy: a } = e,
    {
      boundary: u = "clippingAncestors",
      rootBoundary: d = "viewport",
      elementContext: p = "floating",
      altBoundary: g = !1,
      padding: m = 0,
    } = cn(t, e),
    S = Wv(m),
    w = l[g ? (p === "floating" ? "reference" : "floating") : p],
    y = ll(
      await i.getClippingRect({
        element:
          (n = await (i.isElement == null ? void 0 : i.isElement(w))) == null ||
          n
            ? w
            : w.contextElement ||
              (await (i.getDocumentElement == null
                ? void 0
                : i.getDocumentElement(l.floating))),
        boundary: u,
        rootBoundary: d,
        strategy: a,
      })
    ),
    h =
      p === "floating"
        ? { x: r, y: o, width: s.floating.width, height: s.floating.height }
        : s.reference,
    x = await (i.getOffsetParent == null
      ? void 0
      : i.getOffsetParent(l.floating)),
    C = (await (i.isElement == null ? void 0 : i.isElement(x)))
      ? (await (i.getScale == null ? void 0 : i.getScale(x))) || { x: 1, y: 1 }
      : { x: 1, y: 1 },
    E = ll(
      i.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: l,
            rect: h,
            offsetParent: x,
            strategy: a,
          })
        : h
    );
  return {
    top: (y.top - E.top + S.top) / C.y,
    bottom: (E.bottom - y.bottom + S.bottom) / C.y,
    left: (y.left - E.left + S.left) / C.x,
    right: (E.right - y.right + S.right) / C.x,
  };
}
const TC = (e) => ({
    name: "arrow",
    options: e,
    async fn(t) {
      const {
          x: n,
          y: r,
          placement: o,
          rects: i,
          platform: s,
          elements: l,
          middlewareData: a,
        } = t,
        { element: u, padding: d = 0 } = cn(e, t) || {};
      if (u == null) return {};
      const p = Wv(d),
        g = { x: n, y: r },
        m = td(o),
        S = ed(m),
        v = await s.getDimensions(u),
        w = m === "y",
        y = w ? "top" : "left",
        h = w ? "bottom" : "right",
        x = w ? "clientHeight" : "clientWidth",
        C = i.reference[S] + i.reference[m] - g[m] - i.floating[S],
        E = g[m] - i.reference[m],
        N = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(u));
      let b = N ? N[x] : 0;
      (!b || !(await (s.isElement == null ? void 0 : s.isElement(N)))) &&
        (b = l.floating[x] || i.floating[S]);
      const R = C / 2 - E / 2,
        O = b / 2 - v[S] / 2 - 1,
        _ = Vn(p[y], O),
        $ = Vn(p[h], O),
        I = _,
        W = b - v[S] - $,
        M = b / 2 - v[S] / 2 + R,
        H = Lu(I, M, W),
        z =
          !a.arrow &&
          Ro(o) != null &&
          M !== H &&
          i.reference[S] / 2 - (M < I ? _ : $) - v[S] / 2 < 0,
        U = z ? (M < I ? M - I : M - W) : 0;
      return {
        [m]: g[m] + U,
        data: {
          [m]: H,
          centerOffset: M - H - U,
          ...(z && { alignmentOffset: U }),
        },
        reset: z,
      };
    },
  }),
  RC = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "flip",
        options: e,
        async fn(t) {
          var n, r;
          const {
              placement: o,
              middlewareData: i,
              rects: s,
              initialPlacement: l,
              platform: a,
              elements: u,
            } = t,
            {
              mainAxis: d = !0,
              crossAxis: p = !0,
              fallbackPlacements: g,
              fallbackStrategy: m = "bestFit",
              fallbackAxisSideDirection: S = "none",
              flipAlignment: v = !0,
              ...w
            } = cn(e, t);
          if ((n = i.arrow) != null && n.alignmentOffset) return {};
          const y = dn(o),
            h = Vt(l),
            x = dn(l) === l,
            C = await (a.isRTL == null ? void 0 : a.isRTL(u.floating)),
            E = g || (x || !v ? [sl(l)] : SC(l)),
            N = S !== "none";
          !g && N && E.push(...NC(l, v, S, C));
          const b = [l, ...E],
            R = await Ni(t, w),
            O = [];
          let _ = ((r = i.flip) == null ? void 0 : r.overflows) || [];
          if ((d && O.push(R[y]), p)) {
            const M = wC(o, s, C);
            O.push(R[M[0]], R[M[1]]);
          }
          if (
            ((_ = [..._, { placement: o, overflows: O }]),
            !O.every((M) => M <= 0))
          ) {
            var $, I;
            const M = ((($ = i.flip) == null ? void 0 : $.index) || 0) + 1,
              H = b[M];
            if (
              H &&
              (!(p === "alignment" ? h !== Vt(H) : !1) ||
                _.every((k) => k.overflows[0] > 0 && Vt(k.placement) === h))
            )
              return {
                data: { index: M, overflows: _ },
                reset: { placement: H },
              };
            let z =
              (I = _.filter((U) => U.overflows[0] <= 0).sort(
                (U, k) => U.overflows[1] - k.overflows[1]
              )[0]) == null
                ? void 0
                : I.placement;
            if (!z)
              switch (m) {
                case "bestFit": {
                  var W;
                  const U =
                    (W = _.filter((k) => {
                      if (N) {
                        const T = Vt(k.placement);
                        return T === h || T === "y";
                      }
                      return !0;
                    })
                      .map((k) => [
                        k.placement,
                        k.overflows
                          .filter((T) => T > 0)
                          .reduce((T, D) => T + D, 0),
                      ])
                      .sort((k, T) => k[1] - T[1])[0]) == null
                      ? void 0
                      : W[0];
                  U && (z = U);
                  break;
                }
                case "initialPlacement":
                  z = l;
                  break;
              }
            if (o !== z) return { reset: { placement: z } };
          }
          return {};
        },
      }
    );
  };
function Jf(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width,
  };
}
function ep(e) {
  return vC.some((t) => e[t] >= 0);
}
const jC = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "hide",
        options: e,
        async fn(t) {
          const { rects: n } = t,
            { strategy: r = "referenceHidden", ...o } = cn(e, t);
          switch (r) {
            case "referenceHidden": {
              const i = await Ni(t, { ...o, elementContext: "reference" }),
                s = Jf(i, n.reference);
              return {
                data: { referenceHiddenOffsets: s, referenceHidden: ep(s) },
              };
            }
            case "escaped": {
              const i = await Ni(t, { ...o, altBoundary: !0 }),
                s = Jf(i, n.floating);
              return { data: { escapedOffsets: s, escaped: ep(s) } };
            }
            default:
              return {};
          }
        },
      }
    );
  },
  Vv = new Set(["left", "top"]);
async function OC(e, t) {
  const { placement: n, platform: r, elements: o } = e,
    i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)),
    s = dn(n),
    l = Ro(n),
    a = Vt(n) === "y",
    u = Vv.has(s) ? -1 : 1,
    d = i && a ? -1 : 1,
    p = cn(t, e);
  let {
    mainAxis: g,
    crossAxis: m,
    alignmentAxis: S,
  } = typeof p == "number"
    ? { mainAxis: p, crossAxis: 0, alignmentAxis: null }
    : {
        mainAxis: p.mainAxis || 0,
        crossAxis: p.crossAxis || 0,
        alignmentAxis: p.alignmentAxis,
      };
  return (
    l && typeof S == "number" && (m = l === "end" ? S * -1 : S),
    a ? { x: m * d, y: g * u } : { x: g * u, y: m * d }
  );
}
const _C = function (e) {
    return (
      e === void 0 && (e = 0),
      {
        name: "offset",
        options: e,
        async fn(t) {
          var n, r;
          const { x: o, y: i, placement: s, middlewareData: l } = t,
            a = await OC(t, e);
          return s === ((n = l.offset) == null ? void 0 : n.placement) &&
            (r = l.arrow) != null &&
            r.alignmentOffset
            ? {}
            : { x: o + a.x, y: i + a.y, data: { ...a, placement: s } };
        },
      }
    );
  },
  AC = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "shift",
        options: e,
        async fn(t) {
          const { x: n, y: r, placement: o } = t,
            {
              mainAxis: i = !0,
              crossAxis: s = !1,
              limiter: l = {
                fn: (w) => {
                  let { x: y, y: h } = w;
                  return { x: y, y: h };
                },
              },
              ...a
            } = cn(e, t),
            u = { x: n, y: r },
            d = await Ni(t, a),
            p = Vt(dn(o)),
            g = Jc(p);
          let m = u[g],
            S = u[p];
          if (i) {
            const w = g === "y" ? "top" : "left",
              y = g === "y" ? "bottom" : "right",
              h = m + d[w],
              x = m - d[y];
            m = Lu(h, m, x);
          }
          if (s) {
            const w = p === "y" ? "top" : "left",
              y = p === "y" ? "bottom" : "right",
              h = S + d[w],
              x = S - d[y];
            S = Lu(h, S, x);
          }
          const v = l.fn({ ...t, [g]: m, [p]: S });
          return {
            ...v,
            data: { x: v.x - n, y: v.y - r, enabled: { [g]: i, [p]: s } },
          };
        },
      }
    );
  },
  MC = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        options: e,
        fn(t) {
          const { x: n, y: r, placement: o, rects: i, middlewareData: s } = t,
            { offset: l = 0, mainAxis: a = !0, crossAxis: u = !0 } = cn(e, t),
            d = { x: n, y: r },
            p = Vt(o),
            g = Jc(p);
          let m = d[g],
            S = d[p];
          const v = cn(l, t),
            w =
              typeof v == "number"
                ? { mainAxis: v, crossAxis: 0 }
                : { mainAxis: 0, crossAxis: 0, ...v };
          if (a) {
            const x = g === "y" ? "height" : "width",
              C = i.reference[g] - i.floating[x] + w.mainAxis,
              E = i.reference[g] + i.reference[x] - w.mainAxis;
            m < C ? (m = C) : m > E && (m = E);
          }
          if (u) {
            var y, h;
            const x = g === "y" ? "width" : "height",
              C = Vv.has(dn(o)),
              E =
                i.reference[p] -
                i.floating[x] +
                ((C && ((y = s.offset) == null ? void 0 : y[p])) || 0) +
                (C ? 0 : w.crossAxis),
              N =
                i.reference[p] +
                i.reference[x] +
                (C ? 0 : ((h = s.offset) == null ? void 0 : h[p]) || 0) -
                (C ? w.crossAxis : 0);
            S < E ? (S = E) : S > N && (S = N);
          }
          return { [g]: m, [p]: S };
        },
      }
    );
  },
  IC = function (e) {
    return (
      e === void 0 && (e = {}),
      {
        name: "size",
        options: e,
        async fn(t) {
          var n, r;
          const { placement: o, rects: i, platform: s, elements: l } = t,
            { apply: a = () => {}, ...u } = cn(e, t),
            d = await Ni(t, u),
            p = dn(o),
            g = Ro(o),
            m = Vt(o) === "y",
            { width: S, height: v } = i.floating;
          let w, y;
          p === "top" || p === "bottom"
            ? ((w = p),
              (y =
                g ===
                ((await (s.isRTL == null ? void 0 : s.isRTL(l.floating)))
                  ? "start"
                  : "end")
                  ? "left"
                  : "right"))
            : ((y = p), (w = g === "end" ? "top" : "bottom"));
          const h = v - d.top - d.bottom,
            x = S - d.left - d.right,
            C = Vn(v - d[w], h),
            E = Vn(S - d[y], x),
            N = !t.middlewareData.shift;
          let b = C,
            R = E;
          if (
            ((n = t.middlewareData.shift) != null && n.enabled.x && (R = x),
            (r = t.middlewareData.shift) != null && r.enabled.y && (b = h),
            N && !g)
          ) {
            const _ = tt(d.left, 0),
              $ = tt(d.right, 0),
              I = tt(d.top, 0),
              W = tt(d.bottom, 0);
            m
              ? (R = S - 2 * (_ !== 0 || $ !== 0 ? _ + $ : tt(d.left, d.right)))
              : (b =
                  v - 2 * (I !== 0 || W !== 0 ? I + W : tt(d.top, d.bottom)));
          }
          await a({ ...t, availableWidth: R, availableHeight: b });
          const O = await s.getDimensions(l.floating);
          return S !== O.width || v !== O.height
            ? { reset: { rects: !0 } }
            : {};
        },
      }
    );
  };
function _l() {
  return typeof window < "u";
}
function jo(e) {
  return Hv(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function ot(e) {
  var t;
  return (
    (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) ||
    window
  );
}
function Yt(e) {
  var t;
  return (t = (Hv(e) ? e.ownerDocument : e.document) || window.document) == null
    ? void 0
    : t.documentElement;
}
function Hv(e) {
  return _l() ? e instanceof Node || e instanceof ot(e).Node : !1;
}
function Mt(e) {
  return _l() ? e instanceof Element || e instanceof ot(e).Element : !1;
}
function Gt(e) {
  return _l() ? e instanceof HTMLElement || e instanceof ot(e).HTMLElement : !1;
}
function tp(e) {
  return !_l() || typeof ShadowRoot > "u"
    ? !1
    : e instanceof ShadowRoot || e instanceof ot(e).ShadowRoot;
}
const DC = new Set(["inline", "contents"]);
function Bi(e) {
  const { overflow: t, overflowX: n, overflowY: r, display: o } = It(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !DC.has(o);
}
const LC = new Set(["table", "td", "th"]);
function FC(e) {
  return LC.has(jo(e));
}
const zC = [":popover-open", ":modal"];
function Al(e) {
  return zC.some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
const $C = ["transform", "translate", "scale", "rotate", "perspective"],
  BC = ["transform", "translate", "scale", "rotate", "perspective", "filter"],
  UC = ["paint", "layout", "strict", "content"];
function nd(e) {
  const t = rd(),
    n = Mt(e) ? It(e) : e;
  return (
    $C.some((r) => (n[r] ? n[r] !== "none" : !1)) ||
    (n.containerType ? n.containerType !== "normal" : !1) ||
    (!t && (n.backdropFilter ? n.backdropFilter !== "none" : !1)) ||
    (!t && (n.filter ? n.filter !== "none" : !1)) ||
    BC.some((r) => (n.willChange || "").includes(r)) ||
    UC.some((r) => (n.contain || "").includes(r))
  );
}
function WC(e) {
  let t = Hn(e);
  for (; Gt(t) && !So(t); ) {
    if (nd(t)) return t;
    if (Al(t)) return null;
    t = Hn(t);
  }
  return null;
}
function rd() {
  return typeof CSS > "u" || !CSS.supports
    ? !1
    : CSS.supports("-webkit-backdrop-filter", "none");
}
const VC = new Set(["html", "body", "#document"]);
function So(e) {
  return VC.has(jo(e));
}
function It(e) {
  return ot(e).getComputedStyle(e);
}
function Ml(e) {
  return Mt(e)
    ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
    : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
}
function Hn(e) {
  if (jo(e) === "html") return e;
  const t = e.assignedSlot || e.parentNode || (tp(e) && e.host) || Yt(e);
  return tp(t) ? t.host : t;
}
function Qv(e) {
  const t = Hn(e);
  return So(t)
    ? e.ownerDocument
      ? e.ownerDocument.body
      : e.body
    : Gt(t) && Bi(t)
    ? t
    : Qv(t);
}
function ki(e, t, n) {
  var r;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const o = Qv(e),
    i = o === ((r = e.ownerDocument) == null ? void 0 : r.body),
    s = ot(o);
  if (i) {
    const l = zu(s);
    return t.concat(
      s,
      s.visualViewport || [],
      Bi(o) ? o : [],
      l && n ? ki(l) : []
    );
  }
  return t.concat(o, ki(o, [], n));
}
function zu(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Kv(e) {
  const t = It(e);
  let n = parseFloat(t.width) || 0,
    r = parseFloat(t.height) || 0;
  const o = Gt(e),
    i = o ? e.offsetWidth : n,
    s = o ? e.offsetHeight : r,
    l = il(n) !== i || il(r) !== s;
  return l && ((n = i), (r = s)), { width: n, height: r, $: l };
}
function od(e) {
  return Mt(e) ? e : e.contextElement;
}
function no(e) {
  const t = od(e);
  if (!Gt(t)) return Kt(1);
  const n = t.getBoundingClientRect(),
    { width: r, height: o, $: i } = Kv(t);
  let s = (i ? il(n.width) : n.width) / r,
    l = (i ? il(n.height) : n.height) / o;
  return (
    (!s || !Number.isFinite(s)) && (s = 1),
    (!l || !Number.isFinite(l)) && (l = 1),
    { x: s, y: l }
  );
}
const HC = Kt(0);
function Gv(e) {
  const t = ot(e);
  return !rd() || !t.visualViewport
    ? HC
    : { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop };
}
function QC(e, t, n) {
  return t === void 0 && (t = !1), !n || (t && n !== ot(e)) ? !1 : t;
}
function wr(e, t, n, r) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const o = e.getBoundingClientRect(),
    i = od(e);
  let s = Kt(1);
  t && (r ? Mt(r) && (s = no(r)) : (s = no(e)));
  const l = QC(i, n, r) ? Gv(i) : Kt(0);
  let a = (o.left + l.x) / s.x,
    u = (o.top + l.y) / s.y,
    d = o.width / s.x,
    p = o.height / s.y;
  if (i) {
    const g = ot(i),
      m = r && Mt(r) ? ot(r) : r;
    let S = g,
      v = zu(S);
    for (; v && r && m !== S; ) {
      const w = no(v),
        y = v.getBoundingClientRect(),
        h = It(v),
        x = y.left + (v.clientLeft + parseFloat(h.paddingLeft)) * w.x,
        C = y.top + (v.clientTop + parseFloat(h.paddingTop)) * w.y;
      (a *= w.x),
        (u *= w.y),
        (d *= w.x),
        (p *= w.y),
        (a += x),
        (u += C),
        (S = ot(v)),
        (v = zu(S));
    }
  }
  return ll({ width: d, height: p, x: a, y: u });
}
function id(e, t) {
  const n = Ml(e).scrollLeft;
  return t ? t.left + n : wr(Yt(e)).left + n;
}
function Yv(e, t, n) {
  n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(),
    o = r.left + t.scrollLeft - (n ? 0 : id(e, r)),
    i = r.top + t.scrollTop;
  return { x: o, y: i };
}
function KC(e) {
  let { elements: t, rect: n, offsetParent: r, strategy: o } = e;
  const i = o === "fixed",
    s = Yt(r),
    l = t ? Al(t.floating) : !1;
  if (r === s || (l && i)) return n;
  let a = { scrollLeft: 0, scrollTop: 0 },
    u = Kt(1);
  const d = Kt(0),
    p = Gt(r);
  if (
    (p || (!p && !i)) &&
    ((jo(r) !== "body" || Bi(s)) && (a = Ml(r)), Gt(r))
  ) {
    const m = wr(r);
    (u = no(r)), (d.x = m.x + r.clientLeft), (d.y = m.y + r.clientTop);
  }
  const g = s && !p && !i ? Yv(s, a, !0) : Kt(0);
  return {
    width: n.width * u.x,
    height: n.height * u.y,
    x: n.x * u.x - a.scrollLeft * u.x + d.x + g.x,
    y: n.y * u.y - a.scrollTop * u.y + d.y + g.y,
  };
}
function GC(e) {
  return Array.from(e.getClientRects());
}
function YC(e) {
  const t = Yt(e),
    n = Ml(e),
    r = e.ownerDocument.body,
    o = tt(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
    i = tt(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
  let s = -n.scrollLeft + id(e);
  const l = -n.scrollTop;
  return (
    It(r).direction === "rtl" && (s += tt(t.clientWidth, r.clientWidth) - o),
    { width: o, height: i, x: s, y: l }
  );
}
function XC(e, t) {
  const n = ot(e),
    r = Yt(e),
    o = n.visualViewport;
  let i = r.clientWidth,
    s = r.clientHeight,
    l = 0,
    a = 0;
  if (o) {
    (i = o.width), (s = o.height);
    const u = rd();
    (!u || (u && t === "fixed")) && ((l = o.offsetLeft), (a = o.offsetTop));
  }
  return { width: i, height: s, x: l, y: a };
}
const qC = new Set(["absolute", "fixed"]);
function ZC(e, t) {
  const n = wr(e, !0, t === "fixed"),
    r = n.top + e.clientTop,
    o = n.left + e.clientLeft,
    i = Gt(e) ? no(e) : Kt(1),
    s = e.clientWidth * i.x,
    l = e.clientHeight * i.y,
    a = o * i.x,
    u = r * i.y;
  return { width: s, height: l, x: a, y: u };
}
function np(e, t, n) {
  let r;
  if (t === "viewport") r = XC(e, n);
  else if (t === "document") r = YC(Yt(e));
  else if (Mt(t)) r = ZC(t, n);
  else {
    const o = Gv(e);
    r = { x: t.x - o.x, y: t.y - o.y, width: t.width, height: t.height };
  }
  return ll(r);
}
function Xv(e, t) {
  const n = Hn(e);
  return n === t || !Mt(n) || So(n)
    ? !1
    : It(n).position === "fixed" || Xv(n, t);
}
function JC(e, t) {
  const n = t.get(e);
  if (n) return n;
  let r = ki(e, [], !1).filter((l) => Mt(l) && jo(l) !== "body"),
    o = null;
  const i = It(e).position === "fixed";
  let s = i ? Hn(e) : e;
  for (; Mt(s) && !So(s); ) {
    const l = It(s),
      a = nd(s);
    !a && l.position === "fixed" && (o = null),
      (
        i
          ? !a && !o
          : (!a && l.position === "static" && !!o && qC.has(o.position)) ||
            (Bi(s) && !a && Xv(e, s))
      )
        ? (r = r.filter((d) => d !== s))
        : (o = l),
      (s = Hn(s));
  }
  return t.set(e, r), r;
}
function eE(e) {
  let { element: t, boundary: n, rootBoundary: r, strategy: o } = e;
  const s = [
      ...(n === "clippingAncestors"
        ? Al(t)
          ? []
          : JC(t, this._c)
        : [].concat(n)),
      r,
    ],
    l = s[0],
    a = s.reduce((u, d) => {
      const p = np(t, d, o);
      return (
        (u.top = tt(p.top, u.top)),
        (u.right = Vn(p.right, u.right)),
        (u.bottom = Vn(p.bottom, u.bottom)),
        (u.left = tt(p.left, u.left)),
        u
      );
    }, np(t, l, o));
  return {
    width: a.right - a.left,
    height: a.bottom - a.top,
    x: a.left,
    y: a.top,
  };
}
function tE(e) {
  const { width: t, height: n } = Kv(e);
  return { width: t, height: n };
}
function nE(e, t, n) {
  const r = Gt(t),
    o = Yt(t),
    i = n === "fixed",
    s = wr(e, !0, i, t);
  let l = { scrollLeft: 0, scrollTop: 0 };
  const a = Kt(0);
  function u() {
    a.x = id(o);
  }
  if (r || (!r && !i))
    if (((jo(t) !== "body" || Bi(o)) && (l = Ml(t)), r)) {
      const m = wr(t, !0, i, t);
      (a.x = m.x + t.clientLeft), (a.y = m.y + t.clientTop);
    } else o && u();
  i && !r && o && u();
  const d = o && !r && !i ? Yv(o, l) : Kt(0),
    p = s.left + l.scrollLeft - a.x - d.x,
    g = s.top + l.scrollTop - a.y - d.y;
  return { x: p, y: g, width: s.width, height: s.height };
}
function Ta(e) {
  return It(e).position === "static";
}
function rp(e, t) {
  if (!Gt(e) || It(e).position === "fixed") return null;
  if (t) return t(e);
  let n = e.offsetParent;
  return Yt(e) === n && (n = n.ownerDocument.body), n;
}
function qv(e, t) {
  const n = ot(e);
  if (Al(e)) return n;
  if (!Gt(e)) {
    let o = Hn(e);
    for (; o && !So(o); ) {
      if (Mt(o) && !Ta(o)) return o;
      o = Hn(o);
    }
    return n;
  }
  let r = rp(e, t);
  for (; r && FC(r) && Ta(r); ) r = rp(r, t);
  return r && So(r) && Ta(r) && !nd(r) ? n : r || WC(e) || n;
}
const rE = async function (e) {
  const t = this.getOffsetParent || qv,
    n = this.getDimensions,
    r = await n(e.floating);
  return {
    reference: nE(e.reference, await t(e.floating), e.strategy),
    floating: { x: 0, y: 0, width: r.width, height: r.height },
  };
};
function oE(e) {
  return It(e).direction === "rtl";
}
const iE = {
  convertOffsetParentRelativeRectToViewportRelativeRect: KC,
  getDocumentElement: Yt,
  getClippingRect: eE,
  getOffsetParent: qv,
  getElementRects: rE,
  getClientRects: GC,
  getDimensions: tE,
  getScale: no,
  isElement: Mt,
  isRTL: oE,
};
function Zv(e, t) {
  return (
    e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height
  );
}
function sE(e, t) {
  let n = null,
    r;
  const o = Yt(e);
  function i() {
    var l;
    clearTimeout(r), (l = n) == null || l.disconnect(), (n = null);
  }
  function s(l, a) {
    l === void 0 && (l = !1), a === void 0 && (a = 1), i();
    const u = e.getBoundingClientRect(),
      { left: d, top: p, width: g, height: m } = u;
    if ((l || t(), !g || !m)) return;
    const S = cs(p),
      v = cs(o.clientWidth - (d + g)),
      w = cs(o.clientHeight - (p + m)),
      y = cs(d),
      x = {
        rootMargin: -S + "px " + -v + "px " + -w + "px " + -y + "px",
        threshold: tt(0, Vn(1, a)) || 1,
      };
    let C = !0;
    function E(N) {
      const b = N[0].intersectionRatio;
      if (b !== a) {
        if (!C) return s();
        b
          ? s(!1, b)
          : (r = setTimeout(() => {
              s(!1, 1e-7);
            }, 1e3));
      }
      b === 1 && !Zv(u, e.getBoundingClientRect()) && s(), (C = !1);
    }
    try {
      n = new IntersectionObserver(E, { ...x, root: o.ownerDocument });
    } catch {
      n = new IntersectionObserver(E, x);
    }
    n.observe(e);
  }
  return s(!0), i;
}
function lE(e, t, n, r) {
  r === void 0 && (r = {});
  const {
      ancestorScroll: o = !0,
      ancestorResize: i = !0,
      elementResize: s = typeof ResizeObserver == "function",
      layoutShift: l = typeof IntersectionObserver == "function",
      animationFrame: a = !1,
    } = r,
    u = od(e),
    d = o || i ? [...(u ? ki(u) : []), ...ki(t)] : [];
  d.forEach((y) => {
    o && y.addEventListener("scroll", n, { passive: !0 }),
      i && y.addEventListener("resize", n);
  });
  const p = u && l ? sE(u, n) : null;
  let g = -1,
    m = null;
  s &&
    ((m = new ResizeObserver((y) => {
      let [h] = y;
      h &&
        h.target === u &&
        m &&
        (m.unobserve(t),
        cancelAnimationFrame(g),
        (g = requestAnimationFrame(() => {
          var x;
          (x = m) == null || x.observe(t);
        }))),
        n();
    })),
    u && !a && m.observe(u),
    m.observe(t));
  let S,
    v = a ? wr(e) : null;
  a && w();
  function w() {
    const y = wr(e);
    v && !Zv(v, y) && n(), (v = y), (S = requestAnimationFrame(w));
  }
  return (
    n(),
    () => {
      var y;
      d.forEach((h) => {
        o && h.removeEventListener("scroll", n),
          i && h.removeEventListener("resize", n);
      }),
        p == null || p(),
        (y = m) == null || y.disconnect(),
        (m = null),
        a && cancelAnimationFrame(S);
    }
  );
}
const aE = _C,
  uE = AC,
  cE = RC,
  dE = IC,
  fE = jC,
  op = TC,
  pE = MC,
  hE = (e, t, n) => {
    const r = new Map(),
      o = { platform: iE, ...n },
      i = { ...o.platform, _c: r };
    return PC(e, t, { ...o, platform: i });
  };
var mE = typeof document < "u",
  vE = function () {},
  js = mE ? f.useLayoutEffect : vE;
function al(e, t) {
  if (e === t) return !0;
  if (typeof e != typeof t) return !1;
  if (typeof e == "function" && e.toString() === t.toString()) return !0;
  let n, r, o;
  if (e && t && typeof e == "object") {
    if (Array.isArray(e)) {
      if (((n = e.length), n !== t.length)) return !1;
      for (r = n; r-- !== 0; ) if (!al(e[r], t[r])) return !1;
      return !0;
    }
    if (((o = Object.keys(e)), (n = o.length), n !== Object.keys(t).length))
      return !1;
    for (r = n; r-- !== 0; ) if (!{}.hasOwnProperty.call(t, o[r])) return !1;
    for (r = n; r-- !== 0; ) {
      const i = o[r];
      if (!(i === "_owner" && e.$$typeof) && !al(e[i], t[i])) return !1;
    }
    return !0;
  }
  return e !== e && t !== t;
}
function Jv(e) {
  return typeof window > "u"
    ? 1
    : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function ip(e, t) {
  const n = Jv(e);
  return Math.round(t * n) / n;
}
function Ra(e) {
  const t = f.useRef(e);
  return (
    js(() => {
      t.current = e;
    }),
    t
  );
}
function gE(e) {
  e === void 0 && (e = {});
  const {
      placement: t = "bottom",
      strategy: n = "absolute",
      middleware: r = [],
      platform: o,
      elements: { reference: i, floating: s } = {},
      transform: l = !0,
      whileElementsMounted: a,
      open: u,
    } = e,
    [d, p] = f.useState({
      x: 0,
      y: 0,
      strategy: n,
      placement: t,
      middlewareData: {},
      isPositioned: !1,
    }),
    [g, m] = f.useState(r);
  al(g, r) || m(r);
  const [S, v] = f.useState(null),
    [w, y] = f.useState(null),
    h = f.useCallback((k) => {
      k !== N.current && ((N.current = k), v(k));
    }, []),
    x = f.useCallback((k) => {
      k !== b.current && ((b.current = k), y(k));
    }, []),
    C = i || S,
    E = s || w,
    N = f.useRef(null),
    b = f.useRef(null),
    R = f.useRef(d),
    O = a != null,
    _ = Ra(a),
    $ = Ra(o),
    I = Ra(u),
    W = f.useCallback(() => {
      if (!N.current || !b.current) return;
      const k = { placement: t, strategy: n, middleware: g };
      $.current && (k.platform = $.current),
        hE(N.current, b.current, k).then((T) => {
          const D = { ...T, isPositioned: I.current !== !1 };
          M.current &&
            !al(R.current, D) &&
            ((R.current = D),
            kr.flushSync(() => {
              p(D);
            }));
        });
    }, [g, t, n, $, I]);
  js(() => {
    u === !1 &&
      R.current.isPositioned &&
      ((R.current.isPositioned = !1), p((k) => ({ ...k, isPositioned: !1 })));
  }, [u]);
  const M = f.useRef(!1);
  js(
    () => (
      (M.current = !0),
      () => {
        M.current = !1;
      }
    ),
    []
  ),
    js(() => {
      if ((C && (N.current = C), E && (b.current = E), C && E)) {
        if (_.current) return _.current(C, E, W);
        W();
      }
    }, [C, E, W, _, O]);
  const H = f.useMemo(
      () => ({ reference: N, floating: b, setReference: h, setFloating: x }),
      [h, x]
    ),
    z = f.useMemo(() => ({ reference: C, floating: E }), [C, E]),
    U = f.useMemo(() => {
      const k = { position: n, left: 0, top: 0 };
      if (!z.floating) return k;
      const T = ip(z.floating, d.x),
        D = ip(z.floating, d.y);
      return l
        ? {
            ...k,
            transform: "translate(" + T + "px, " + D + "px)",
            ...(Jv(z.floating) >= 1.5 && { willChange: "transform" }),
          }
        : { position: n, left: T, top: D };
    }, [n, l, z.floating, d.x, d.y]);
  return f.useMemo(
    () => ({ ...d, update: W, refs: H, elements: z, floatingStyles: U }),
    [d, W, H, z, U]
  );
}
const yE = (e) => {
    function t(n) {
      return {}.hasOwnProperty.call(n, "current");
    }
    return {
      name: "arrow",
      options: e,
      fn(n) {
        const { element: r, padding: o } = typeof e == "function" ? e(n) : e;
        return r && t(r)
          ? r.current != null
            ? op({ element: r.current, padding: o }).fn(n)
            : {}
          : r
          ? op({ element: r, padding: o }).fn(n)
          : {};
      },
    };
  },
  xE = (e, t) => ({ ...aE(e), options: [e, t] }),
  wE = (e, t) => ({ ...uE(e), options: [e, t] }),
  SE = (e, t) => ({ ...pE(e), options: [e, t] }),
  CE = (e, t) => ({ ...cE(e), options: [e, t] }),
  EE = (e, t) => ({ ...dE(e), options: [e, t] }),
  bE = (e, t) => ({ ...fE(e), options: [e, t] }),
  NE = (e, t) => ({ ...yE(e), options: [e, t] });
var kE = "Arrow",
  eg = f.forwardRef((e, t) => {
    const { children: n, width: r = 10, height: o = 5, ...i } = e;
    return c.jsx(ee.svg, {
      ...i,
      ref: t,
      width: r,
      height: o,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? n : c.jsx("polygon", { points: "0,0 30,0 15,10" }),
    });
  });
eg.displayName = kE;
var PE = eg;
function TE(e) {
  const [t, n] = f.useState(void 0);
  return (
    Me(() => {
      if (e) {
        n({ width: e.offsetWidth, height: e.offsetHeight });
        const r = new ResizeObserver((o) => {
          if (!Array.isArray(o) || !o.length) return;
          const i = o[0];
          let s, l;
          if ("borderBoxSize" in i) {
            const a = i.borderBoxSize,
              u = Array.isArray(a) ? a[0] : a;
            (s = u.inlineSize), (l = u.blockSize);
          } else (s = e.offsetWidth), (l = e.offsetHeight);
          n({ width: s, height: l });
        });
        return r.observe(e, { box: "border-box" }), () => r.unobserve(e);
      } else n(void 0);
    }, [e]),
    t
  );
}
var sd = "Popper",
  [tg, Il] = ko(sd),
  [RE, ng] = tg(sd),
  rg = (e) => {
    const { __scopePopper: t, children: n } = e,
      [r, o] = f.useState(null);
    return c.jsx(RE, { scope: t, anchor: r, onAnchorChange: o, children: n });
  };
rg.displayName = sd;
var og = "PopperAnchor",
  ig = f.forwardRef((e, t) => {
    const { __scopePopper: n, virtualRef: r, ...o } = e,
      i = ng(og, n),
      s = f.useRef(null),
      l = he(t, s);
    return (
      f.useEffect(() => {
        i.onAnchorChange((r == null ? void 0 : r.current) || s.current);
      }),
      r ? null : c.jsx(ee.div, { ...o, ref: l })
    );
  });
ig.displayName = og;
var ld = "PopperContent",
  [jE, OE] = tg(ld),
  sg = f.forwardRef((e, t) => {
    var L, se, Se, oe, J, ne;
    const {
        __scopePopper: n,
        side: r = "bottom",
        sideOffset: o = 0,
        align: i = "center",
        alignOffset: s = 0,
        arrowPadding: l = 0,
        avoidCollisions: a = !0,
        collisionBoundary: u = [],
        collisionPadding: d = 0,
        sticky: p = "partial",
        hideWhenDetached: g = !1,
        updatePositionStrategy: m = "optimized",
        onPlaced: S,
        ...v
      } = e,
      w = ng(ld, n),
      [y, h] = f.useState(null),
      x = he(t, (Ie) => h(Ie)),
      [C, E] = f.useState(null),
      N = TE(C),
      b = (N == null ? void 0 : N.width) ?? 0,
      R = (N == null ? void 0 : N.height) ?? 0,
      O = r + (i !== "center" ? "-" + i : ""),
      _ =
        typeof d == "number"
          ? d
          : { top: 0, right: 0, bottom: 0, left: 0, ...d },
      $ = Array.isArray(u) ? u : [u],
      I = $.length > 0,
      W = { padding: _, boundary: $.filter(AE), altBoundary: I },
      {
        refs: M,
        floatingStyles: H,
        placement: z,
        isPositioned: U,
        middlewareData: k,
      } = gE({
        strategy: "fixed",
        placement: O,
        whileElementsMounted: (...Ie) =>
          lE(...Ie, { animationFrame: m === "always" }),
        elements: { reference: w.anchor },
        middleware: [
          xE({ mainAxis: o + R, alignmentAxis: s }),
          a &&
            wE({
              mainAxis: !0,
              crossAxis: !1,
              limiter: p === "partial" ? SE() : void 0,
              ...W,
            }),
          a && CE({ ...W }),
          EE({
            ...W,
            apply: ({
              elements: Ie,
              rects: at,
              availableWidth: qn,
              availableHeight: pn,
            }) => {
              const { width: Zn, height: Ao } = at.reference,
                Tr = Ie.floating.style;
              Tr.setProperty("--radix-popper-available-width", `${qn}px`),
                Tr.setProperty("--radix-popper-available-height", `${pn}px`),
                Tr.setProperty("--radix-popper-anchor-width", `${Zn}px`),
                Tr.setProperty("--radix-popper-anchor-height", `${Ao}px`);
            },
          }),
          C && NE({ element: C, padding: l }),
          ME({ arrowWidth: b, arrowHeight: R }),
          g && bE({ strategy: "referenceHidden", ...W }),
        ],
      }),
      [T, D] = ug(z),
      V = At(S);
    Me(() => {
      U && (V == null || V());
    }, [U, V]);
    const B = (L = k.arrow) == null ? void 0 : L.x,
      Y = (se = k.arrow) == null ? void 0 : se.y,
      Q = ((Se = k.arrow) == null ? void 0 : Se.centerOffset) !== 0,
      [ce, we] = f.useState();
    return (
      Me(() => {
        y && we(window.getComputedStyle(y).zIndex);
      }, [y]),
      c.jsx("div", {
        ref: M.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...H,
          transform: U ? H.transform : "translate(0, -200%)",
          minWidth: "max-content",
          zIndex: ce,
          "--radix-popper-transform-origin": [
            (oe = k.transformOrigin) == null ? void 0 : oe.x,
            (J = k.transformOrigin) == null ? void 0 : J.y,
          ].join(" "),
          ...(((ne = k.hide) == null ? void 0 : ne.referenceHidden) && {
            visibility: "hidden",
            pointerEvents: "none",
          }),
        },
        dir: e.dir,
        children: c.jsx(jE, {
          scope: n,
          placedSide: T,
          onArrowChange: E,
          arrowX: B,
          arrowY: Y,
          shouldHideArrow: Q,
          children: c.jsx(ee.div, {
            "data-side": T,
            "data-align": D,
            ...v,
            ref: x,
            style: { ...v.style, animation: U ? void 0 : "none" },
          }),
        }),
      })
    );
  });
sg.displayName = ld;
var lg = "PopperArrow",
  _E = { top: "bottom", right: "left", bottom: "top", left: "right" },
  ag = f.forwardRef(function (t, n) {
    const { __scopePopper: r, ...o } = t,
      i = OE(lg, r),
      s = _E[i.placedSide];
    return c.jsx("span", {
      ref: i.onArrowChange,
      style: {
        position: "absolute",
        left: i.arrowX,
        top: i.arrowY,
        [s]: 0,
        transformOrigin: {
          top: "",
          right: "0 0",
          bottom: "center 0",
          left: "100% 0",
        }[i.placedSide],
        transform: {
          top: "translateY(100%)",
          right: "translateY(50%) rotate(90deg) translateX(-50%)",
          bottom: "rotate(180deg)",
          left: "translateY(50%) rotate(-90deg) translateX(50%)",
        }[i.placedSide],
        visibility: i.shouldHideArrow ? "hidden" : void 0,
      },
      children: c.jsx(PE, {
        ...o,
        ref: n,
        style: { ...o.style, display: "block" },
      }),
    });
  });
ag.displayName = lg;
function AE(e) {
  return e !== null;
}
var ME = (e) => ({
  name: "transformOrigin",
  options: e,
  fn(t) {
    var w, y, h;
    const { placement: n, rects: r, middlewareData: o } = t,
      s = ((w = o.arrow) == null ? void 0 : w.centerOffset) !== 0,
      l = s ? 0 : e.arrowWidth,
      a = s ? 0 : e.arrowHeight,
      [u, d] = ug(n),
      p = { start: "0%", center: "50%", end: "100%" }[d],
      g = (((y = o.arrow) == null ? void 0 : y.x) ?? 0) + l / 2,
      m = (((h = o.arrow) == null ? void 0 : h.y) ?? 0) + a / 2;
    let S = "",
      v = "";
    return (
      u === "bottom"
        ? ((S = s ? p : `${g}px`), (v = `${-a}px`))
        : u === "top"
        ? ((S = s ? p : `${g}px`), (v = `${r.floating.height + a}px`))
        : u === "right"
        ? ((S = `${-a}px`), (v = s ? p : `${m}px`))
        : u === "left" &&
          ((S = `${r.floating.width + a}px`), (v = s ? p : `${m}px`)),
      { data: { x: S, y: v } }
    );
  },
});
function ug(e) {
  const [t, n = "center"] = e.split("-");
  return [t, n];
}
var IE = rg,
  cg = ig,
  dg = sg,
  fg = ag,
  [Dl, AP] = ko("Tooltip", [Il]),
  ad = Il(),
  pg = "TooltipProvider",
  DE = 700,
  sp = "tooltip.open",
  [LE, hg] = Dl(pg),
  mg = (e) => {
    const {
        __scopeTooltip: t,
        delayDuration: n = DE,
        skipDelayDuration: r = 300,
        disableHoverableContent: o = !1,
        children: i,
      } = e,
      s = f.useRef(!0),
      l = f.useRef(!1),
      a = f.useRef(0);
    return (
      f.useEffect(() => {
        const u = a.current;
        return () => window.clearTimeout(u);
      }, []),
      c.jsx(LE, {
        scope: t,
        isOpenDelayedRef: s,
        delayDuration: n,
        onOpen: f.useCallback(() => {
          window.clearTimeout(a.current), (s.current = !1);
        }, []),
        onClose: f.useCallback(() => {
          window.clearTimeout(a.current),
            (a.current = window.setTimeout(() => (s.current = !0), r));
        }, [r]),
        isPointerInTransitRef: l,
        onPointerInTransitChange: f.useCallback((u) => {
          l.current = u;
        }, []),
        disableHoverableContent: o,
        children: i,
      })
    );
  };
mg.displayName = pg;
var vg = "Tooltip",
  [MP, Ll] = Dl(vg),
  $u = "TooltipTrigger",
  FE = f.forwardRef((e, t) => {
    const { __scopeTooltip: n, ...r } = e,
      o = Ll($u, n),
      i = hg($u, n),
      s = ad(n),
      l = f.useRef(null),
      a = he(t, l, o.onTriggerChange),
      u = f.useRef(!1),
      d = f.useRef(!1),
      p = f.useCallback(() => (u.current = !1), []);
    return (
      f.useEffect(
        () => () => document.removeEventListener("pointerup", p),
        [p]
      ),
      c.jsx(cg, {
        asChild: !0,
        ...s,
        children: c.jsx(ee.button, {
          "aria-describedby": o.open ? o.contentId : void 0,
          "data-state": o.stateAttribute,
          ...r,
          ref: a,
          onPointerMove: q(e.onPointerMove, (g) => {
            g.pointerType !== "touch" &&
              !d.current &&
              !i.isPointerInTransitRef.current &&
              (o.onTriggerEnter(), (d.current = !0));
          }),
          onPointerLeave: q(e.onPointerLeave, () => {
            o.onTriggerLeave(), (d.current = !1);
          }),
          onPointerDown: q(e.onPointerDown, () => {
            o.open && o.onClose(),
              (u.current = !0),
              document.addEventListener("pointerup", p, { once: !0 });
          }),
          onFocus: q(e.onFocus, () => {
            u.current || o.onOpen();
          }),
          onBlur: q(e.onBlur, o.onClose),
          onClick: q(e.onClick, o.onClose),
        }),
      })
    );
  });
FE.displayName = $u;
var zE = "TooltipPortal",
  [IP, $E] = Dl(zE, { forceMount: void 0 }),
  Co = "TooltipContent",
  gg = f.forwardRef((e, t) => {
    const n = $E(Co, e.__scopeTooltip),
      { forceMount: r = n.forceMount, side: o = "top", ...i } = e,
      s = Ll(Co, e.__scopeTooltip);
    return c.jsx(Po, {
      present: r || s.open,
      children: s.disableHoverableContent
        ? c.jsx(yg, { side: o, ...i, ref: t })
        : c.jsx(BE, { side: o, ...i, ref: t }),
    });
  }),
  BE = f.forwardRef((e, t) => {
    const n = Ll(Co, e.__scopeTooltip),
      r = hg(Co, e.__scopeTooltip),
      o = f.useRef(null),
      i = he(t, o),
      [s, l] = f.useState(null),
      { trigger: a, onClose: u } = n,
      d = o.current,
      { onPointerInTransitChange: p } = r,
      g = f.useCallback(() => {
        l(null), p(!1);
      }, [p]),
      m = f.useCallback(
        (S, v) => {
          const w = S.currentTarget,
            y = { x: S.clientX, y: S.clientY },
            h = QE(y, w.getBoundingClientRect()),
            x = KE(y, h),
            C = GE(v.getBoundingClientRect()),
            E = XE([...x, ...C]);
          l(E), p(!0);
        },
        [p]
      );
    return (
      f.useEffect(() => () => g(), [g]),
      f.useEffect(() => {
        if (a && d) {
          const S = (w) => m(w, d),
            v = (w) => m(w, a);
          return (
            a.addEventListener("pointerleave", S),
            d.addEventListener("pointerleave", v),
            () => {
              a.removeEventListener("pointerleave", S),
                d.removeEventListener("pointerleave", v);
            }
          );
        }
      }, [a, d, m, g]),
      f.useEffect(() => {
        if (s) {
          const S = (v) => {
            const w = v.target,
              y = { x: v.clientX, y: v.clientY },
              h =
                (a == null ? void 0 : a.contains(w)) ||
                (d == null ? void 0 : d.contains(w)),
              x = !YE(y, s);
            h ? g() : x && (g(), u());
          };
          return (
            document.addEventListener("pointermove", S),
            () => document.removeEventListener("pointermove", S)
          );
        }
      }, [a, d, s, u, g]),
      c.jsx(yg, { ...e, ref: i })
    );
  }),
  [UE, WE] = Dl(vg, { isInside: !1 }),
  VE = e1("TooltipContent"),
  yg = f.forwardRef((e, t) => {
    const {
        __scopeTooltip: n,
        children: r,
        "aria-label": o,
        onEscapeKeyDown: i,
        onPointerDownOutside: s,
        ...l
      } = e,
      a = Ll(Co, n),
      u = ad(n),
      { onClose: d } = a;
    return (
      f.useEffect(
        () => (
          document.addEventListener(sp, d),
          () => document.removeEventListener(sp, d)
        ),
        [d]
      ),
      f.useEffect(() => {
        if (a.trigger) {
          const p = (g) => {
            const m = g.target;
            m != null && m.contains(a.trigger) && d();
          };
          return (
            window.addEventListener("scroll", p, { capture: !0 }),
            () => window.removeEventListener("scroll", p, { capture: !0 })
          );
        }
      }, [a.trigger, d]),
      c.jsx(zi, {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: i,
        onPointerDownOutside: s,
        onFocusOutside: (p) => p.preventDefault(),
        onDismiss: d,
        children: c.jsxs(dg, {
          "data-state": a.stateAttribute,
          ...u,
          ...l,
          ref: t,
          style: {
            ...l.style,
            "--radix-tooltip-content-transform-origin":
              "var(--radix-popper-transform-origin)",
            "--radix-tooltip-content-available-width":
              "var(--radix-popper-available-width)",
            "--radix-tooltip-content-available-height":
              "var(--radix-popper-available-height)",
            "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
            "--radix-tooltip-trigger-height":
              "var(--radix-popper-anchor-height)",
          },
          children: [
            c.jsx(VE, { children: r }),
            c.jsx(UE, {
              scope: n,
              isInside: !0,
              children: c.jsx(C1, {
                id: a.contentId,
                role: "tooltip",
                children: o || r,
              }),
            }),
          ],
        }),
      })
    );
  });
gg.displayName = Co;
var xg = "TooltipArrow",
  HE = f.forwardRef((e, t) => {
    const { __scopeTooltip: n, ...r } = e,
      o = ad(n);
    return WE(xg, n).isInside ? null : c.jsx(fg, { ...o, ...r, ref: t });
  });
HE.displayName = xg;
function QE(e, t) {
  const n = Math.abs(t.top - e.y),
    r = Math.abs(t.bottom - e.y),
    o = Math.abs(t.right - e.x),
    i = Math.abs(t.left - e.x);
  switch (Math.min(n, r, o, i)) {
    case i:
      return "left";
    case o:
      return "right";
    case n:
      return "top";
    case r:
      return "bottom";
    default:
      throw new Error("unreachable");
  }
}
function KE(e, t, n = 5) {
  const r = [];
  switch (t) {
    case "top":
      r.push({ x: e.x - n, y: e.y + n }, { x: e.x + n, y: e.y + n });
      break;
    case "bottom":
      r.push({ x: e.x - n, y: e.y - n }, { x: e.x + n, y: e.y - n });
      break;
    case "left":
      r.push({ x: e.x + n, y: e.y - n }, { x: e.x + n, y: e.y + n });
      break;
    case "right":
      r.push({ x: e.x - n, y: e.y - n }, { x: e.x - n, y: e.y + n });
      break;
  }
  return r;
}
function GE(e) {
  const { top: t, right: n, bottom: r, left: o } = e;
  return [
    { x: o, y: t },
    { x: n, y: t },
    { x: n, y: r },
    { x: o, y: r },
  ];
}
function YE(e, t) {
  const { x: n, y: r } = e;
  let o = !1;
  for (let i = 0, s = t.length - 1; i < t.length; s = i++) {
    const l = t[i],
      a = t[s],
      u = l.x,
      d = l.y,
      p = a.x,
      g = a.y;
    d > r != g > r && n < ((p - u) * (r - d)) / (g - d) + u && (o = !o);
  }
  return o;
}
function XE(e) {
  const t = e.slice();
  return (
    t.sort((n, r) =>
      n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0
    ),
    qE(t)
  );
}
function qE(e) {
  if (e.length <= 1) return e.slice();
  const t = [];
  for (let r = 0; r < e.length; r++) {
    const o = e[r];
    for (; t.length >= 2; ) {
      const i = t[t.length - 1],
        s = t[t.length - 2];
      if ((i.x - s.x) * (o.y - s.y) >= (i.y - s.y) * (o.x - s.x)) t.pop();
      else break;
    }
    t.push(o);
  }
  t.pop();
  const n = [];
  for (let r = e.length - 1; r >= 0; r--) {
    const o = e[r];
    for (; n.length >= 2; ) {
      const i = n[n.length - 1],
        s = n[n.length - 2];
      if ((i.x - s.x) * (o.y - s.y) >= (i.y - s.y) * (o.x - s.x)) n.pop();
      else break;
    }
    n.push(o);
  }
  return (
    n.pop(),
    t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y
      ? t
      : t.concat(n)
  );
}
var ZE = mg,
  wg = gg;
const JE = ZE,
  eb = f.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) =>
    c.jsx(wg, {
      ref: r,
      sideOffset: t,
      className: ie(
        "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        e
      ),
      ...n,
    })
  );
eb.displayName = wg.displayName;
var Fl = class {
    constructor() {
      (this.listeners = new Set()),
        (this.subscribe = this.subscribe.bind(this));
    }
    subscribe(e) {
      return (
        this.listeners.add(e),
        this.onSubscribe(),
        () => {
          this.listeners.delete(e), this.onUnsubscribe();
        }
      );
    }
    hasListeners() {
      return this.listeners.size > 0;
    }
    onSubscribe() {}
    onUnsubscribe() {}
  },
  zl = typeof window > "u" || "Deno" in globalThis;
function Nt() {}
function tb(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function nb(e) {
  return typeof e == "number" && e >= 0 && e !== 1 / 0;
}
function rb(e, t) {
  return Math.max(e + (t || 0) - Date.now(), 0);
}
function Bu(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function ob(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function lp(e, t) {
  const {
    type: n = "all",
    exact: r,
    fetchStatus: o,
    predicate: i,
    queryKey: s,
    stale: l,
  } = e;
  if (s) {
    if (r) {
      if (t.queryHash !== ud(s, t.options)) return !1;
    } else if (!Ti(t.queryKey, s)) return !1;
  }
  if (n !== "all") {
    const a = t.isActive();
    if ((n === "active" && !a) || (n === "inactive" && a)) return !1;
  }
  return !(
    (typeof l == "boolean" && t.isStale() !== l) ||
    (o && o !== t.state.fetchStatus) ||
    (i && !i(t))
  );
}
function ap(e, t) {
  const { exact: n, status: r, predicate: o, mutationKey: i } = e;
  if (i) {
    if (!t.options.mutationKey) return !1;
    if (n) {
      if (Pi(t.options.mutationKey) !== Pi(i)) return !1;
    } else if (!Ti(t.options.mutationKey, i)) return !1;
  }
  return !((r && t.state.status !== r) || (o && !o(t)));
}
function ud(e, t) {
  return ((t == null ? void 0 : t.queryKeyHashFn) || Pi)(e);
}
function Pi(e) {
  return JSON.stringify(e, (t, n) =>
    Uu(n)
      ? Object.keys(n)
          .sort()
          .reduce((r, o) => ((r[o] = n[o]), r), {})
      : n
  );
}
function Ti(e, t) {
  return e === t
    ? !0
    : typeof e != typeof t
    ? !1
    : e && t && typeof e == "object" && typeof t == "object"
    ? Object.keys(t).every((n) => Ti(e[n], t[n]))
    : !1;
}
function Sg(e, t) {
  if (e === t) return e;
  const n = up(e) && up(t);
  if (n || (Uu(e) && Uu(t))) {
    const r = n ? e : Object.keys(e),
      o = r.length,
      i = n ? t : Object.keys(t),
      s = i.length,
      l = n ? [] : {},
      a = new Set(r);
    let u = 0;
    for (let d = 0; d < s; d++) {
      const p = n ? d : i[d];
      ((!n && a.has(p)) || n) && e[p] === void 0 && t[p] === void 0
        ? ((l[p] = void 0), u++)
        : ((l[p] = Sg(e[p], t[p])), l[p] === e[p] && e[p] !== void 0 && u++);
    }
    return o === s && u === o ? e : l;
  }
  return t;
}
function up(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length;
}
function Uu(e) {
  if (!cp(e)) return !1;
  const t = e.constructor;
  if (t === void 0) return !0;
  const n = t.prototype;
  return !(
    !cp(n) ||
    !n.hasOwnProperty("isPrototypeOf") ||
    Object.getPrototypeOf(e) !== Object.prototype
  );
}
function cp(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function ib(e) {
  return new Promise((t) => {
    setTimeout(t, e);
  });
}
function sb(e, t, n) {
  return typeof n.structuralSharing == "function"
    ? n.structuralSharing(e, t)
    : n.structuralSharing !== !1
    ? Sg(e, t)
    : t;
}
function lb(e, t, n = 0) {
  const r = [...e, t];
  return n && r.length > n ? r.slice(1) : r;
}
function ab(e, t, n = 0) {
  const r = [t, ...e];
  return n && r.length > n ? r.slice(0, -1) : r;
}
var cd = Symbol();
function Cg(e, t) {
  return !e.queryFn && t != null && t.initialPromise
    ? () => t.initialPromise
    : !e.queryFn || e.queryFn === cd
    ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`))
    : e.queryFn;
}
var sr,
  kn,
  oo,
  _p,
  ub =
    ((_p = class extends Fl {
      constructor() {
        super();
        re(this, sr);
        re(this, kn);
        re(this, oo);
        G(this, oo, (t) => {
          if (!zl && window.addEventListener) {
            const n = () => t();
            return (
              window.addEventListener("visibilitychange", n, !1),
              () => {
                window.removeEventListener("visibilitychange", n);
              }
            );
          }
        });
      }
      onSubscribe() {
        P(this, kn) || this.setEventListener(P(this, oo));
      }
      onUnsubscribe() {
        var t;
        this.hasListeners() ||
          ((t = P(this, kn)) == null || t.call(this), G(this, kn, void 0));
      }
      setEventListener(t) {
        var n;
        G(this, oo, t),
          (n = P(this, kn)) == null || n.call(this),
          G(
            this,
            kn,
            t((r) => {
              typeof r == "boolean" ? this.setFocused(r) : this.onFocus();
            })
          );
      }
      setFocused(t) {
        P(this, sr) !== t && (G(this, sr, t), this.onFocus());
      }
      onFocus() {
        const t = this.isFocused();
        this.listeners.forEach((n) => {
          n(t);
        });
      }
      isFocused() {
        var t;
        return typeof P(this, sr) == "boolean"
          ? P(this, sr)
          : ((t = globalThis.document) == null ? void 0 : t.visibilityState) !==
              "hidden";
      }
    }),
    (sr = new WeakMap()),
    (kn = new WeakMap()),
    (oo = new WeakMap()),
    _p),
  Eg = new ub(),
  io,
  Pn,
  so,
  Ap,
  cb =
    ((Ap = class extends Fl {
      constructor() {
        super();
        re(this, io, !0);
        re(this, Pn);
        re(this, so);
        G(this, so, (t) => {
          if (!zl && window.addEventListener) {
            const n = () => t(!0),
              r = () => t(!1);
            return (
              window.addEventListener("online", n, !1),
              window.addEventListener("offline", r, !1),
              () => {
                window.removeEventListener("online", n),
                  window.removeEventListener("offline", r);
              }
            );
          }
        });
      }
      onSubscribe() {
        P(this, Pn) || this.setEventListener(P(this, so));
      }
      onUnsubscribe() {
        var t;
        this.hasListeners() ||
          ((t = P(this, Pn)) == null || t.call(this), G(this, Pn, void 0));
      }
      setEventListener(t) {
        var n;
        G(this, so, t),
          (n = P(this, Pn)) == null || n.call(this),
          G(this, Pn, t(this.setOnline.bind(this)));
      }
      setOnline(t) {
        P(this, io) !== t &&
          (G(this, io, t),
          this.listeners.forEach((r) => {
            r(t);
          }));
      }
      isOnline() {
        return P(this, io);
      }
    }),
    (io = new WeakMap()),
    (Pn = new WeakMap()),
    (so = new WeakMap()),
    Ap),
  ul = new cb();
function db() {
  let e, t;
  const n = new Promise((o, i) => {
    (e = o), (t = i);
  });
  (n.status = "pending"), n.catch(() => {});
  function r(o) {
    Object.assign(n, o), delete n.resolve, delete n.reject;
  }
  return (
    (n.resolve = (o) => {
      r({ status: "fulfilled", value: o }), e(o);
    }),
    (n.reject = (o) => {
      r({ status: "rejected", reason: o }), t(o);
    }),
    n
  );
}
function fb(e) {
  return Math.min(1e3 * 2 ** e, 3e4);
}
function bg(e) {
  return (e ?? "online") === "online" ? ul.isOnline() : !0;
}
var Ng = class extends Error {
  constructor(e) {
    super("CancelledError"),
      (this.revert = e == null ? void 0 : e.revert),
      (this.silent = e == null ? void 0 : e.silent);
  }
};
function ja(e) {
  return e instanceof Ng;
}
function kg(e) {
  let t = !1,
    n = 0,
    r = !1,
    o;
  const i = db(),
    s = (v) => {
      var w;
      r || (g(new Ng(v)), (w = e.abort) == null || w.call(e));
    },
    l = () => {
      t = !0;
    },
    a = () => {
      t = !1;
    },
    u = () =>
      Eg.isFocused() &&
      (e.networkMode === "always" || ul.isOnline()) &&
      e.canRun(),
    d = () => bg(e.networkMode) && e.canRun(),
    p = (v) => {
      var w;
      r ||
        ((r = !0),
        (w = e.onSuccess) == null || w.call(e, v),
        o == null || o(),
        i.resolve(v));
    },
    g = (v) => {
      var w;
      r ||
        ((r = !0),
        (w = e.onError) == null || w.call(e, v),
        o == null || o(),
        i.reject(v));
    },
    m = () =>
      new Promise((v) => {
        var w;
        (o = (y) => {
          (r || u()) && v(y);
        }),
          (w = e.onPause) == null || w.call(e);
      }).then(() => {
        var v;
        (o = void 0), r || (v = e.onContinue) == null || v.call(e);
      }),
    S = () => {
      if (r) return;
      let v;
      const w = n === 0 ? e.initialPromise : void 0;
      try {
        v = w ?? e.fn();
      } catch (y) {
        v = Promise.reject(y);
      }
      Promise.resolve(v)
        .then(p)
        .catch((y) => {
          var N;
          if (r) return;
          const h = e.retry ?? (zl ? 0 : 3),
            x = e.retryDelay ?? fb,
            C = typeof x == "function" ? x(n, y) : x,
            E =
              h === !0 ||
              (typeof h == "number" && n < h) ||
              (typeof h == "function" && h(n, y));
          if (t || !E) {
            g(y);
            return;
          }
          n++,
            (N = e.onFail) == null || N.call(e, n, y),
            ib(C)
              .then(() => (u() ? void 0 : m()))
              .then(() => {
                t ? g(y) : S();
              });
        });
    };
  return {
    promise: i,
    cancel: s,
    continue: () => (o == null || o(), i),
    cancelRetry: l,
    continueRetry: a,
    canStart: d,
    start: () => (d() ? S() : m().then(S), i),
  };
}
var pb = (e) => setTimeout(e, 0);
function hb() {
  let e = [],
    t = 0,
    n = (l) => {
      l();
    },
    r = (l) => {
      l();
    },
    o = pb;
  const i = (l) => {
      t
        ? e.push(l)
        : o(() => {
            n(l);
          });
    },
    s = () => {
      const l = e;
      (e = []),
        l.length &&
          o(() => {
            r(() => {
              l.forEach((a) => {
                n(a);
              });
            });
          });
    };
  return {
    batch: (l) => {
      let a;
      t++;
      try {
        a = l();
      } finally {
        t--, t || s();
      }
      return a;
    },
    batchCalls:
      (l) =>
      (...a) => {
        i(() => {
          l(...a);
        });
      },
    schedule: i,
    setNotifyFunction: (l) => {
      n = l;
    },
    setBatchNotifyFunction: (l) => {
      r = l;
    },
    setScheduler: (l) => {
      o = l;
    },
  };
}
var Ve = hb(),
  lr,
  Mp,
  Pg =
    ((Mp = class {
      constructor() {
        re(this, lr);
      }
      destroy() {
        this.clearGcTimeout();
      }
      scheduleGc() {
        this.clearGcTimeout(),
          nb(this.gcTime) &&
            G(
              this,
              lr,
              setTimeout(() => {
                this.optionalRemove();
              }, this.gcTime)
            );
      }
      updateGcTime(e) {
        this.gcTime = Math.max(
          this.gcTime || 0,
          e ?? (zl ? 1 / 0 : 5 * 60 * 1e3)
        );
      }
      clearGcTimeout() {
        P(this, lr) && (clearTimeout(P(this, lr)), G(this, lr, void 0));
      }
    }),
    (lr = new WeakMap()),
    Mp),
  lo,
  ar,
  ct,
  ur,
  ze,
  _i,
  cr,
  kt,
  qt,
  Ip,
  mb =
    ((Ip = class extends Pg {
      constructor(t) {
        super();
        re(this, kt);
        re(this, lo);
        re(this, ar);
        re(this, ct);
        re(this, ur);
        re(this, ze);
        re(this, _i);
        re(this, cr);
        G(this, cr, !1),
          G(this, _i, t.defaultOptions),
          this.setOptions(t.options),
          (this.observers = []),
          G(this, ur, t.client),
          G(this, ct, P(this, ur).getQueryCache()),
          (this.queryKey = t.queryKey),
          (this.queryHash = t.queryHash),
          G(this, lo, gb(this.options)),
          (this.state = t.state ?? P(this, lo)),
          this.scheduleGc();
      }
      get meta() {
        return this.options.meta;
      }
      get promise() {
        var t;
        return (t = P(this, ze)) == null ? void 0 : t.promise;
      }
      setOptions(t) {
        (this.options = { ...P(this, _i), ...t }),
          this.updateGcTime(this.options.gcTime);
      }
      optionalRemove() {
        !this.observers.length &&
          this.state.fetchStatus === "idle" &&
          P(this, ct).remove(this);
      }
      setData(t, n) {
        const r = sb(this.state.data, t, this.options);
        return (
          De(this, kt, qt).call(this, {
            data: r,
            type: "success",
            dataUpdatedAt: n == null ? void 0 : n.updatedAt,
            manual: n == null ? void 0 : n.manual,
          }),
          r
        );
      }
      setState(t, n) {
        De(this, kt, qt).call(this, {
          type: "setState",
          state: t,
          setStateOptions: n,
        });
      }
      cancel(t) {
        var r, o;
        const n = (r = P(this, ze)) == null ? void 0 : r.promise;
        return (
          (o = P(this, ze)) == null || o.cancel(t),
          n ? n.then(Nt).catch(Nt) : Promise.resolve()
        );
      }
      destroy() {
        super.destroy(), this.cancel({ silent: !0 });
      }
      reset() {
        this.destroy(), this.setState(P(this, lo));
      }
      isActive() {
        return this.observers.some((t) => ob(t.options.enabled, this) !== !1);
      }
      isDisabled() {
        return this.getObserversCount() > 0
          ? !this.isActive()
          : this.options.queryFn === cd ||
              this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
      }
      isStatic() {
        return this.getObserversCount() > 0
          ? this.observers.some(
              (t) => Bu(t.options.staleTime, this) === "static"
            )
          : !1;
      }
      isStale() {
        return this.getObserversCount() > 0
          ? this.observers.some((t) => t.getCurrentResult().isStale)
          : this.state.data === void 0 || this.state.isInvalidated;
      }
      isStaleByTime(t = 0) {
        return this.state.data === void 0
          ? !0
          : t === "static"
          ? !1
          : this.state.isInvalidated
          ? !0
          : !rb(this.state.dataUpdatedAt, t);
      }
      onFocus() {
        var n;
        const t = this.observers.find((r) => r.shouldFetchOnWindowFocus());
        t == null || t.refetch({ cancelRefetch: !1 }),
          (n = P(this, ze)) == null || n.continue();
      }
      onOnline() {
        var n;
        const t = this.observers.find((r) => r.shouldFetchOnReconnect());
        t == null || t.refetch({ cancelRefetch: !1 }),
          (n = P(this, ze)) == null || n.continue();
      }
      addObserver(t) {
        this.observers.includes(t) ||
          (this.observers.push(t),
          this.clearGcTimeout(),
          P(this, ct).notify({
            type: "observerAdded",
            query: this,
            observer: t,
          }));
      }
      removeObserver(t) {
        this.observers.includes(t) &&
          ((this.observers = this.observers.filter((n) => n !== t)),
          this.observers.length ||
            (P(this, ze) &&
              (P(this, cr)
                ? P(this, ze).cancel({ revert: !0 })
                : P(this, ze).cancelRetry()),
            this.scheduleGc()),
          P(this, ct).notify({
            type: "observerRemoved",
            query: this,
            observer: t,
          }));
      }
      getObserversCount() {
        return this.observers.length;
      }
      invalidate() {
        this.state.isInvalidated ||
          De(this, kt, qt).call(this, { type: "invalidate" });
      }
      fetch(t, n) {
        var u, d, p;
        if (this.state.fetchStatus !== "idle") {
          if (this.state.data !== void 0 && n != null && n.cancelRefetch)
            this.cancel({ silent: !0 });
          else if (P(this, ze))
            return P(this, ze).continueRetry(), P(this, ze).promise;
        }
        if ((t && this.setOptions(t), !this.options.queryFn)) {
          const g = this.observers.find((m) => m.options.queryFn);
          g && this.setOptions(g.options);
        }
        const r = new AbortController(),
          o = (g) => {
            Object.defineProperty(g, "signal", {
              enumerable: !0,
              get: () => (G(this, cr, !0), r.signal),
            });
          },
          i = () => {
            const g = Cg(this.options, n),
              S = (() => {
                const v = {
                  client: P(this, ur),
                  queryKey: this.queryKey,
                  meta: this.meta,
                };
                return o(v), v;
              })();
            return (
              G(this, cr, !1),
              this.options.persister ? this.options.persister(g, S, this) : g(S)
            );
          },
          l = (() => {
            const g = {
              fetchOptions: n,
              options: this.options,
              queryKey: this.queryKey,
              client: P(this, ur),
              state: this.state,
              fetchFn: i,
            };
            return o(g), g;
          })();
        (u = this.options.behavior) == null || u.onFetch(l, this),
          G(this, ar, this.state),
          (this.state.fetchStatus === "idle" ||
            this.state.fetchMeta !==
              ((d = l.fetchOptions) == null ? void 0 : d.meta)) &&
            De(this, kt, qt).call(this, {
              type: "fetch",
              meta: (p = l.fetchOptions) == null ? void 0 : p.meta,
            });
        const a = (g) => {
          var m, S, v, w;
          (ja(g) && g.silent) ||
            De(this, kt, qt).call(this, { type: "error", error: g }),
            ja(g) ||
              ((S = (m = P(this, ct).config).onError) == null ||
                S.call(m, g, this),
              (w = (v = P(this, ct).config).onSettled) == null ||
                w.call(v, this.state.data, g, this)),
            this.scheduleGc();
        };
        return (
          G(
            this,
            ze,
            kg({
              initialPromise: n == null ? void 0 : n.initialPromise,
              fn: l.fetchFn,
              abort: r.abort.bind(r),
              onSuccess: (g) => {
                var m, S, v, w;
                if (g === void 0) {
                  a(new Error(`${this.queryHash} data is undefined`));
                  return;
                }
                try {
                  this.setData(g);
                } catch (y) {
                  a(y);
                  return;
                }
                (S = (m = P(this, ct).config).onSuccess) == null ||
                  S.call(m, g, this),
                  (w = (v = P(this, ct).config).onSettled) == null ||
                    w.call(v, g, this.state.error, this),
                  this.scheduleGc();
              },
              onError: a,
              onFail: (g, m) => {
                De(this, kt, qt).call(this, {
                  type: "failed",
                  failureCount: g,
                  error: m,
                });
              },
              onPause: () => {
                De(this, kt, qt).call(this, { type: "pause" });
              },
              onContinue: () => {
                De(this, kt, qt).call(this, { type: "continue" });
              },
              retry: l.options.retry,
              retryDelay: l.options.retryDelay,
              networkMode: l.options.networkMode,
              canRun: () => !0,
            })
          ),
          P(this, ze).start()
        );
      }
    }),
    (lo = new WeakMap()),
    (ar = new WeakMap()),
    (ct = new WeakMap()),
    (ur = new WeakMap()),
    (ze = new WeakMap()),
    (_i = new WeakMap()),
    (cr = new WeakMap()),
    (kt = new WeakSet()),
    (qt = function (t) {
      const n = (r) => {
        switch (t.type) {
          case "failed":
            return {
              ...r,
              fetchFailureCount: t.failureCount,
              fetchFailureReason: t.error,
            };
          case "pause":
            return { ...r, fetchStatus: "paused" };
          case "continue":
            return { ...r, fetchStatus: "fetching" };
          case "fetch":
            return {
              ...r,
              ...vb(r.data, this.options),
              fetchMeta: t.meta ?? null,
            };
          case "success":
            return (
              G(this, ar, void 0),
              {
                ...r,
                data: t.data,
                dataUpdateCount: r.dataUpdateCount + 1,
                dataUpdatedAt: t.dataUpdatedAt ?? Date.now(),
                error: null,
                isInvalidated: !1,
                status: "success",
                ...(!t.manual && {
                  fetchStatus: "idle",
                  fetchFailureCount: 0,
                  fetchFailureReason: null,
                }),
              }
            );
          case "error":
            const o = t.error;
            return ja(o) && o.revert && P(this, ar)
              ? { ...P(this, ar), fetchStatus: "idle" }
              : {
                  ...r,
                  error: o,
                  errorUpdateCount: r.errorUpdateCount + 1,
                  errorUpdatedAt: Date.now(),
                  fetchFailureCount: r.fetchFailureCount + 1,
                  fetchFailureReason: o,
                  fetchStatus: "idle",
                  status: "error",
                };
          case "invalidate":
            return { ...r, isInvalidated: !0 };
          case "setState":
            return { ...r, ...t.state };
        }
      };
      (this.state = n(this.state)),
        Ve.batch(() => {
          this.observers.forEach((r) => {
            r.onQueryUpdate();
          }),
            P(this, ct).notify({ query: this, type: "updated", action: t });
        });
    }),
    Ip);
function vb(e, t) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: bg(t.networkMode) ? "fetching" : "paused",
    ...(e === void 0 && { error: null, status: "pending" }),
  };
}
function gb(e) {
  const t =
      typeof e.initialData == "function" ? e.initialData() : e.initialData,
    n = t !== void 0,
    r = n
      ? typeof e.initialDataUpdatedAt == "function"
        ? e.initialDataUpdatedAt()
        : e.initialDataUpdatedAt
      : 0;
  return {
    data: t,
    dataUpdateCount: 0,
    dataUpdatedAt: n ? r ?? Date.now() : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: n ? "success" : "pending",
    fetchStatus: "idle",
  };
}
var zt,
  Dp,
  yb =
    ((Dp = class extends Fl {
      constructor(t = {}) {
        super();
        re(this, zt);
        (this.config = t), G(this, zt, new Map());
      }
      build(t, n, r) {
        const o = n.queryKey,
          i = n.queryHash ?? ud(o, n);
        let s = this.get(i);
        return (
          s ||
            ((s = new mb({
              client: t,
              queryKey: o,
              queryHash: i,
              options: t.defaultQueryOptions(n),
              state: r,
              defaultOptions: t.getQueryDefaults(o),
            })),
            this.add(s)),
          s
        );
      }
      add(t) {
        P(this, zt).has(t.queryHash) ||
          (P(this, zt).set(t.queryHash, t),
          this.notify({ type: "added", query: t }));
      }
      remove(t) {
        const n = P(this, zt).get(t.queryHash);
        n &&
          (t.destroy(),
          n === t && P(this, zt).delete(t.queryHash),
          this.notify({ type: "removed", query: t }));
      }
      clear() {
        Ve.batch(() => {
          this.getAll().forEach((t) => {
            this.remove(t);
          });
        });
      }
      get(t) {
        return P(this, zt).get(t);
      }
      getAll() {
        return [...P(this, zt).values()];
      }
      find(t) {
        const n = { exact: !0, ...t };
        return this.getAll().find((r) => lp(n, r));
      }
      findAll(t = {}) {
        const n = this.getAll();
        return Object.keys(t).length > 0 ? n.filter((r) => lp(t, r)) : n;
      }
      notify(t) {
        Ve.batch(() => {
          this.listeners.forEach((n) => {
            n(t);
          });
        });
      }
      onFocus() {
        Ve.batch(() => {
          this.getAll().forEach((t) => {
            t.onFocus();
          });
        });
      }
      onOnline() {
        Ve.batch(() => {
          this.getAll().forEach((t) => {
            t.onOnline();
          });
        });
      }
    }),
    (zt = new WeakMap()),
    Dp),
  $t,
  Ue,
  dr,
  Bt,
  wn,
  Lp,
  xb =
    ((Lp = class extends Pg {
      constructor(t) {
        super();
        re(this, Bt);
        re(this, $t);
        re(this, Ue);
        re(this, dr);
        (this.mutationId = t.mutationId),
          G(this, Ue, t.mutationCache),
          G(this, $t, []),
          (this.state = t.state || wb()),
          this.setOptions(t.options),
          this.scheduleGc();
      }
      setOptions(t) {
        (this.options = t), this.updateGcTime(this.options.gcTime);
      }
      get meta() {
        return this.options.meta;
      }
      addObserver(t) {
        P(this, $t).includes(t) ||
          (P(this, $t).push(t),
          this.clearGcTimeout(),
          P(this, Ue).notify({
            type: "observerAdded",
            mutation: this,
            observer: t,
          }));
      }
      removeObserver(t) {
        G(
          this,
          $t,
          P(this, $t).filter((n) => n !== t)
        ),
          this.scheduleGc(),
          P(this, Ue).notify({
            type: "observerRemoved",
            mutation: this,
            observer: t,
          });
      }
      optionalRemove() {
        P(this, $t).length ||
          (this.state.status === "pending"
            ? this.scheduleGc()
            : P(this, Ue).remove(this));
      }
      continue() {
        var t;
        return (
          ((t = P(this, dr)) == null ? void 0 : t.continue()) ??
          this.execute(this.state.variables)
        );
      }
      async execute(t) {
        var i, s, l, a, u, d, p, g, m, S, v, w, y, h, x, C, E, N, b, R;
        const n = () => {
          De(this, Bt, wn).call(this, { type: "continue" });
        };
        G(
          this,
          dr,
          kg({
            fn: () =>
              this.options.mutationFn
                ? this.options.mutationFn(t)
                : Promise.reject(new Error("No mutationFn found")),
            onFail: (O, _) => {
              De(this, Bt, wn).call(this, {
                type: "failed",
                failureCount: O,
                error: _,
              });
            },
            onPause: () => {
              De(this, Bt, wn).call(this, { type: "pause" });
            },
            onContinue: n,
            retry: this.options.retry ?? 0,
            retryDelay: this.options.retryDelay,
            networkMode: this.options.networkMode,
            canRun: () => P(this, Ue).canRun(this),
          })
        );
        const r = this.state.status === "pending",
          o = !P(this, dr).canStart();
        try {
          if (r) n();
          else {
            De(this, Bt, wn).call(this, {
              type: "pending",
              variables: t,
              isPaused: o,
            }),
              await ((s = (i = P(this, Ue).config).onMutate) == null
                ? void 0
                : s.call(i, t, this));
            const _ = await ((a = (l = this.options).onMutate) == null
              ? void 0
              : a.call(l, t));
            _ !== this.state.context &&
              De(this, Bt, wn).call(this, {
                type: "pending",
                context: _,
                variables: t,
                isPaused: o,
              });
          }
          const O = await P(this, dr).start();
          return (
            await ((d = (u = P(this, Ue).config).onSuccess) == null
              ? void 0
              : d.call(u, O, t, this.state.context, this)),
            await ((g = (p = this.options).onSuccess) == null
              ? void 0
              : g.call(p, O, t, this.state.context)),
            await ((S = (m = P(this, Ue).config).onSettled) == null
              ? void 0
              : S.call(
                  m,
                  O,
                  null,
                  this.state.variables,
                  this.state.context,
                  this
                )),
            await ((w = (v = this.options).onSettled) == null
              ? void 0
              : w.call(v, O, null, t, this.state.context)),
            De(this, Bt, wn).call(this, { type: "success", data: O }),
            O
          );
        } catch (O) {
          try {
            throw (
              (await ((h = (y = P(this, Ue).config).onError) == null
                ? void 0
                : h.call(y, O, t, this.state.context, this)),
              await ((C = (x = this.options).onError) == null
                ? void 0
                : C.call(x, O, t, this.state.context)),
              await ((N = (E = P(this, Ue).config).onSettled) == null
                ? void 0
                : N.call(
                    E,
                    void 0,
                    O,
                    this.state.variables,
                    this.state.context,
                    this
                  )),
              await ((R = (b = this.options).onSettled) == null
                ? void 0
                : R.call(b, void 0, O, t, this.state.context)),
              O)
            );
          } finally {
            De(this, Bt, wn).call(this, { type: "error", error: O });
          }
        } finally {
          P(this, Ue).runNext(this);
        }
      }
    }),
    ($t = new WeakMap()),
    (Ue = new WeakMap()),
    (dr = new WeakMap()),
    (Bt = new WeakSet()),
    (wn = function (t) {
      const n = (r) => {
        switch (t.type) {
          case "failed":
            return {
              ...r,
              failureCount: t.failureCount,
              failureReason: t.error,
            };
          case "pause":
            return { ...r, isPaused: !0 };
          case "continue":
            return { ...r, isPaused: !1 };
          case "pending":
            return {
              ...r,
              context: t.context,
              data: void 0,
              failureCount: 0,
              failureReason: null,
              error: null,
              isPaused: t.isPaused,
              status: "pending",
              variables: t.variables,
              submittedAt: Date.now(),
            };
          case "success":
            return {
              ...r,
              data: t.data,
              failureCount: 0,
              failureReason: null,
              error: null,
              status: "success",
              isPaused: !1,
            };
          case "error":
            return {
              ...r,
              data: void 0,
              error: t.error,
              failureCount: r.failureCount + 1,
              failureReason: t.error,
              isPaused: !1,
              status: "error",
            };
        }
      };
      (this.state = n(this.state)),
        Ve.batch(() => {
          P(this, $t).forEach((r) => {
            r.onMutationUpdate(t);
          }),
            P(this, Ue).notify({ mutation: this, type: "updated", action: t });
        });
    }),
    Lp);
function wb() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: !1,
    status: "idle",
    variables: void 0,
    submittedAt: 0,
  };
}
var en,
  Pt,
  Ai,
  Fp,
  Sb =
    ((Fp = class extends Fl {
      constructor(t = {}) {
        super();
        re(this, en);
        re(this, Pt);
        re(this, Ai);
        (this.config = t),
          G(this, en, new Set()),
          G(this, Pt, new Map()),
          G(this, Ai, 0);
      }
      build(t, n, r) {
        const o = new xb({
          mutationCache: this,
          mutationId: ++Wi(this, Ai)._,
          options: t.defaultMutationOptions(n),
          state: r,
        });
        return this.add(o), o;
      }
      add(t) {
        P(this, en).add(t);
        const n = ds(t);
        if (typeof n == "string") {
          const r = P(this, Pt).get(n);
          r ? r.push(t) : P(this, Pt).set(n, [t]);
        }
        this.notify({ type: "added", mutation: t });
      }
      remove(t) {
        if (P(this, en).delete(t)) {
          const n = ds(t);
          if (typeof n == "string") {
            const r = P(this, Pt).get(n);
            if (r)
              if (r.length > 1) {
                const o = r.indexOf(t);
                o !== -1 && r.splice(o, 1);
              } else r[0] === t && P(this, Pt).delete(n);
          }
        }
        this.notify({ type: "removed", mutation: t });
      }
      canRun(t) {
        const n = ds(t);
        if (typeof n == "string") {
          const r = P(this, Pt).get(n),
            o =
              r == null ? void 0 : r.find((i) => i.state.status === "pending");
          return !o || o === t;
        } else return !0;
      }
      runNext(t) {
        var r;
        const n = ds(t);
        if (typeof n == "string") {
          const o =
            (r = P(this, Pt).get(n)) == null
              ? void 0
              : r.find((i) => i !== t && i.state.isPaused);
          return (o == null ? void 0 : o.continue()) ?? Promise.resolve();
        } else return Promise.resolve();
      }
      clear() {
        Ve.batch(() => {
          P(this, en).forEach((t) => {
            this.notify({ type: "removed", mutation: t });
          }),
            P(this, en).clear(),
            P(this, Pt).clear();
        });
      }
      getAll() {
        return Array.from(P(this, en));
      }
      find(t) {
        const n = { exact: !0, ...t };
        return this.getAll().find((r) => ap(n, r));
      }
      findAll(t = {}) {
        return this.getAll().filter((n) => ap(t, n));
      }
      notify(t) {
        Ve.batch(() => {
          this.listeners.forEach((n) => {
            n(t);
          });
        });
      }
      resumePausedMutations() {
        const t = this.getAll().filter((n) => n.state.isPaused);
        return Ve.batch(() =>
          Promise.all(t.map((n) => n.continue().catch(Nt)))
        );
      }
    }),
    (en = new WeakMap()),
    (Pt = new WeakMap()),
    (Ai = new WeakMap()),
    Fp);
function ds(e) {
  var t;
  return (t = e.options.scope) == null ? void 0 : t.id;
}
function dp(e) {
  return {
    onFetch: (t, n) => {
      var d, p, g, m, S;
      const r = t.options,
        o =
          (g =
            (p = (d = t.fetchOptions) == null ? void 0 : d.meta) == null
              ? void 0
              : p.fetchMore) == null
            ? void 0
            : g.direction,
        i = ((m = t.state.data) == null ? void 0 : m.pages) || [],
        s = ((S = t.state.data) == null ? void 0 : S.pageParams) || [];
      let l = { pages: [], pageParams: [] },
        a = 0;
      const u = async () => {
        let v = !1;
        const w = (x) => {
            Object.defineProperty(x, "signal", {
              enumerable: !0,
              get: () => (
                t.signal.aborted
                  ? (v = !0)
                  : t.signal.addEventListener("abort", () => {
                      v = !0;
                    }),
                t.signal
              ),
            });
          },
          y = Cg(t.options, t.fetchOptions),
          h = async (x, C, E) => {
            if (v) return Promise.reject();
            if (C == null && x.pages.length) return Promise.resolve(x);
            const b = (() => {
                const $ = {
                  client: t.client,
                  queryKey: t.queryKey,
                  pageParam: C,
                  direction: E ? "backward" : "forward",
                  meta: t.options.meta,
                };
                return w($), $;
              })(),
              R = await y(b),
              { maxPages: O } = t.options,
              _ = E ? ab : lb;
            return {
              pages: _(x.pages, R, O),
              pageParams: _(x.pageParams, C, O),
            };
          };
        if (o && i.length) {
          const x = o === "backward",
            C = x ? Cb : fp,
            E = { pages: i, pageParams: s },
            N = C(r, E);
          l = await h(E, N, x);
        } else {
          const x = e ?? i.length;
          do {
            const C = a === 0 ? s[0] ?? r.initialPageParam : fp(r, l);
            if (a > 0 && C == null) break;
            (l = await h(l, C)), a++;
          } while (a < x);
        }
        return l;
      };
      t.options.persister
        ? (t.fetchFn = () => {
            var v, w;
            return (w = (v = t.options).persister) == null
              ? void 0
              : w.call(
                  v,
                  u,
                  {
                    client: t.client,
                    queryKey: t.queryKey,
                    meta: t.options.meta,
                    signal: t.signal,
                  },
                  n
                );
          })
        : (t.fetchFn = u);
    },
  };
}
function fp(e, { pages: t, pageParams: n }) {
  const r = t.length - 1;
  return t.length > 0 ? e.getNextPageParam(t[r], t, n[r], n) : void 0;
}
function Cb(e, { pages: t, pageParams: n }) {
  var r;
  return t.length > 0
    ? (r = e.getPreviousPageParam) == null
      ? void 0
      : r.call(e, t[0], t, n[0], n)
    : void 0;
}
var Ce,
  Tn,
  Rn,
  ao,
  uo,
  jn,
  co,
  fo,
  zp,
  Eb =
    ((zp = class {
      constructor(e = {}) {
        re(this, Ce);
        re(this, Tn);
        re(this, Rn);
        re(this, ao);
        re(this, uo);
        re(this, jn);
        re(this, co);
        re(this, fo);
        G(this, Ce, e.queryCache || new yb()),
          G(this, Tn, e.mutationCache || new Sb()),
          G(this, Rn, e.defaultOptions || {}),
          G(this, ao, new Map()),
          G(this, uo, new Map()),
          G(this, jn, 0);
      }
      mount() {
        Wi(this, jn)._++,
          P(this, jn) === 1 &&
            (G(
              this,
              co,
              Eg.subscribe(async (e) => {
                e &&
                  (await this.resumePausedMutations(), P(this, Ce).onFocus());
              })
            ),
            G(
              this,
              fo,
              ul.subscribe(async (e) => {
                e &&
                  (await this.resumePausedMutations(), P(this, Ce).onOnline());
              })
            ));
      }
      unmount() {
        var e, t;
        Wi(this, jn)._--,
          P(this, jn) === 0 &&
            ((e = P(this, co)) == null || e.call(this),
            G(this, co, void 0),
            (t = P(this, fo)) == null || t.call(this),
            G(this, fo, void 0));
      }
      isFetching(e) {
        return P(this, Ce).findAll({ ...e, fetchStatus: "fetching" }).length;
      }
      isMutating(e) {
        return P(this, Tn).findAll({ ...e, status: "pending" }).length;
      }
      getQueryData(e) {
        var n;
        const t = this.defaultQueryOptions({ queryKey: e });
        return (n = P(this, Ce).get(t.queryHash)) == null
          ? void 0
          : n.state.data;
      }
      ensureQueryData(e) {
        const t = this.defaultQueryOptions(e),
          n = P(this, Ce).build(this, t),
          r = n.state.data;
        return r === void 0
          ? this.fetchQuery(e)
          : (e.revalidateIfStale &&
              n.isStaleByTime(Bu(t.staleTime, n)) &&
              this.prefetchQuery(t),
            Promise.resolve(r));
      }
      getQueriesData(e) {
        return P(this, Ce)
          .findAll(e)
          .map(({ queryKey: t, state: n }) => {
            const r = n.data;
            return [t, r];
          });
      }
      setQueryData(e, t, n) {
        const r = this.defaultQueryOptions({ queryKey: e }),
          o = P(this, Ce).get(r.queryHash),
          i = o == null ? void 0 : o.state.data,
          s = tb(t, i);
        if (s !== void 0)
          return P(this, Ce)
            .build(this, r)
            .setData(s, { ...n, manual: !0 });
      }
      setQueriesData(e, t, n) {
        return Ve.batch(() =>
          P(this, Ce)
            .findAll(e)
            .map(({ queryKey: r }) => [r, this.setQueryData(r, t, n)])
        );
      }
      getQueryState(e) {
        var n;
        const t = this.defaultQueryOptions({ queryKey: e });
        return (n = P(this, Ce).get(t.queryHash)) == null ? void 0 : n.state;
      }
      removeQueries(e) {
        const t = P(this, Ce);
        Ve.batch(() => {
          t.findAll(e).forEach((n) => {
            t.remove(n);
          });
        });
      }
      resetQueries(e, t) {
        const n = P(this, Ce);
        return Ve.batch(
          () => (
            n.findAll(e).forEach((r) => {
              r.reset();
            }),
            this.refetchQueries({ type: "active", ...e }, t)
          )
        );
      }
      cancelQueries(e, t = {}) {
        const n = { revert: !0, ...t },
          r = Ve.batch(() =>
            P(this, Ce)
              .findAll(e)
              .map((o) => o.cancel(n))
          );
        return Promise.all(r).then(Nt).catch(Nt);
      }
      invalidateQueries(e, t = {}) {
        return Ve.batch(
          () => (
            P(this, Ce)
              .findAll(e)
              .forEach((n) => {
                n.invalidate();
              }),
            (e == null ? void 0 : e.refetchType) === "none"
              ? Promise.resolve()
              : this.refetchQueries(
                  {
                    ...e,
                    type:
                      (e == null ? void 0 : e.refetchType) ??
                      (e == null ? void 0 : e.type) ??
                      "active",
                  },
                  t
                )
          )
        );
      }
      refetchQueries(e, t = {}) {
        const n = { ...t, cancelRefetch: t.cancelRefetch ?? !0 },
          r = Ve.batch(() =>
            P(this, Ce)
              .findAll(e)
              .filter((o) => !o.isDisabled() && !o.isStatic())
              .map((o) => {
                let i = o.fetch(void 0, n);
                return (
                  n.throwOnError || (i = i.catch(Nt)),
                  o.state.fetchStatus === "paused" ? Promise.resolve() : i
                );
              })
          );
        return Promise.all(r).then(Nt);
      }
      fetchQuery(e) {
        const t = this.defaultQueryOptions(e);
        t.retry === void 0 && (t.retry = !1);
        const n = P(this, Ce).build(this, t);
        return n.isStaleByTime(Bu(t.staleTime, n))
          ? n.fetch(t)
          : Promise.resolve(n.state.data);
      }
      prefetchQuery(e) {
        return this.fetchQuery(e).then(Nt).catch(Nt);
      }
      fetchInfiniteQuery(e) {
        return (e.behavior = dp(e.pages)), this.fetchQuery(e);
      }
      prefetchInfiniteQuery(e) {
        return this.fetchInfiniteQuery(e).then(Nt).catch(Nt);
      }
      ensureInfiniteQueryData(e) {
        return (e.behavior = dp(e.pages)), this.ensureQueryData(e);
      }
      resumePausedMutations() {
        return ul.isOnline()
          ? P(this, Tn).resumePausedMutations()
          : Promise.resolve();
      }
      getQueryCache() {
        return P(this, Ce);
      }
      getMutationCache() {
        return P(this, Tn);
      }
      getDefaultOptions() {
        return P(this, Rn);
      }
      setDefaultOptions(e) {
        G(this, Rn, e);
      }
      setQueryDefaults(e, t) {
        P(this, ao).set(Pi(e), { queryKey: e, defaultOptions: t });
      }
      getQueryDefaults(e) {
        const t = [...P(this, ao).values()],
          n = {};
        return (
          t.forEach((r) => {
            Ti(e, r.queryKey) && Object.assign(n, r.defaultOptions);
          }),
          n
        );
      }
      setMutationDefaults(e, t) {
        P(this, uo).set(Pi(e), { mutationKey: e, defaultOptions: t });
      }
      getMutationDefaults(e) {
        const t = [...P(this, uo).values()],
          n = {};
        return (
          t.forEach((r) => {
            Ti(e, r.mutationKey) && Object.assign(n, r.defaultOptions);
          }),
          n
        );
      }
      defaultQueryOptions(e) {
        if (e._defaulted) return e;
        const t = {
          ...P(this, Rn).queries,
          ...this.getQueryDefaults(e.queryKey),
          ...e,
          _defaulted: !0,
        };
        return (
          t.queryHash || (t.queryHash = ud(t.queryKey, t)),
          t.refetchOnReconnect === void 0 &&
            (t.refetchOnReconnect = t.networkMode !== "always"),
          t.throwOnError === void 0 && (t.throwOnError = !!t.suspense),
          !t.networkMode && t.persister && (t.networkMode = "offlineFirst"),
          t.queryFn === cd && (t.enabled = !1),
          t
        );
      }
      defaultMutationOptions(e) {
        return e != null && e._defaulted
          ? e
          : {
              ...P(this, Rn).mutations,
              ...((e == null ? void 0 : e.mutationKey) &&
                this.getMutationDefaults(e.mutationKey)),
              ...e,
              _defaulted: !0,
            };
      }
      clear() {
        P(this, Ce).clear(), P(this, Tn).clear();
      }
    }),
    (Ce = new WeakMap()),
    (Tn = new WeakMap()),
    (Rn = new WeakMap()),
    (ao = new WeakMap()),
    (uo = new WeakMap()),
    (jn = new WeakMap()),
    (co = new WeakMap()),
    (fo = new WeakMap()),
    zp),
  bb = f.createContext(void 0),
  Nb = ({ client: e, children: t }) => (
    f.useEffect(
      () => (
        e.mount(),
        () => {
          e.unmount();
        }
      ),
      [e]
    ),
    c.jsx(bb.Provider, { value: e, children: t })
  );
/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Ri() {
  return (
    (Ri = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Ri.apply(this, arguments)
  );
}
var An;
(function (e) {
  (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(An || (An = {}));
const pp = "popstate";
function kb(e) {
  e === void 0 && (e = {});
  function t(r, o) {
    let { pathname: i, search: s, hash: l } = r.location;
    return Wu(
      "",
      { pathname: i, search: s, hash: l },
      (o.state && o.state.usr) || null,
      (o.state && o.state.key) || "default"
    );
  }
  function n(r, o) {
    return typeof o == "string" ? o : Rg(o);
  }
  return Tb(t, n, null, e);
}
function Te(e, t) {
  if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function Tg(e, t) {
  if (!e) {
    typeof console < "u" && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function Pb() {
  return Math.random().toString(36).substr(2, 8);
}
function hp(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function Wu(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    Ri(
      { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
      typeof t == "string" ? Oo(t) : t,
      { state: n, key: (t && t.key) || r || Pb() }
    )
  );
}
function Rg(e) {
  let { pathname: t = "/", search: n = "", hash: r = "" } = e;
  return (
    n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
    r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
    t
  );
}
function Oo(e) {
  let t = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf("?");
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e);
  }
  return t;
}
function Tb(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: o = document.defaultView, v5Compat: i = !1 } = r,
    s = o.history,
    l = An.Pop,
    a = null,
    u = d();
  u == null && ((u = 0), s.replaceState(Ri({}, s.state, { idx: u }), ""));
  function d() {
    return (s.state || { idx: null }).idx;
  }
  function p() {
    l = An.Pop;
    let w = d(),
      y = w == null ? null : w - u;
    (u = w), a && a({ action: l, location: v.location, delta: y });
  }
  function g(w, y) {
    l = An.Push;
    let h = Wu(v.location, w, y);
    u = d() + 1;
    let x = hp(h, u),
      C = v.createHref(h);
    try {
      s.pushState(x, "", C);
    } catch (E) {
      if (E instanceof DOMException && E.name === "DataCloneError") throw E;
      o.location.assign(C);
    }
    i && a && a({ action: l, location: v.location, delta: 1 });
  }
  function m(w, y) {
    l = An.Replace;
    let h = Wu(v.location, w, y);
    u = d();
    let x = hp(h, u),
      C = v.createHref(h);
    s.replaceState(x, "", C),
      i && a && a({ action: l, location: v.location, delta: 0 });
  }
  function S(w) {
    let y = o.location.origin !== "null" ? o.location.origin : o.location.href,
      h = typeof w == "string" ? w : Rg(w);
    return (
      (h = h.replace(/ $/, "%20")),
      Te(
        y,
        "No window.location.(origin|href) available to create URL for href: " +
          h
      ),
      new URL(h, y)
    );
  }
  let v = {
    get action() {
      return l;
    },
    get location() {
      return e(o, s);
    },
    listen(w) {
      if (a) throw new Error("A history only accepts one active listener");
      return (
        o.addEventListener(pp, p),
        (a = w),
        () => {
          o.removeEventListener(pp, p), (a = null);
        }
      );
    },
    createHref(w) {
      return t(o, w);
    },
    createURL: S,
    encodeLocation(w) {
      let y = S(w);
      return { pathname: y.pathname, search: y.search, hash: y.hash };
    },
    push: g,
    replace: m,
    go(w) {
      return s.go(w);
    },
  };
  return v;
}
var mp;
(function (e) {
  (e.data = "data"),
    (e.deferred = "deferred"),
    (e.redirect = "redirect"),
    (e.error = "error");
})(mp || (mp = {}));
function Rb(e, t, n) {
  return n === void 0 && (n = "/"), jb(e, t, n, !1);
}
function jb(e, t, n, r) {
  let o = typeof t == "string" ? Oo(t) : t,
    i = _g(o.pathname || "/", n);
  if (i == null) return null;
  let s = jg(e);
  Ob(s);
  let l = null;
  for (let a = 0; l == null && a < s.length; ++a) {
    let u = Ub(i);
    l = $b(s[a], u, r);
  }
  return l;
}
function jg(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
  let o = (i, s, l) => {
    let a = {
      relativePath: l === void 0 ? i.path || "" : l,
      caseSensitive: i.caseSensitive === !0,
      childrenIndex: s,
      route: i,
    };
    a.relativePath.startsWith("/") &&
      (Te(
        a.relativePath.startsWith(r),
        'Absolute route path "' +
          a.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (a.relativePath = a.relativePath.slice(r.length)));
    let u = hr([r, a.relativePath]),
      d = n.concat(a);
    i.children &&
      i.children.length > 0 &&
      (Te(
        i.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + u + '".')
      ),
      jg(i.children, t, d, u)),
      !(i.path == null && !i.index) &&
        t.push({ path: u, score: Fb(u, i.index), routesMeta: d });
  };
  return (
    e.forEach((i, s) => {
      var l;
      if (i.path === "" || !((l = i.path) != null && l.includes("?"))) o(i, s);
      else for (let a of Og(i.path)) o(i, s, a);
    }),
    t
  );
}
function Og(e) {
  let t = e.split("/");
  if (t.length === 0) return [];
  let [n, ...r] = t,
    o = n.endsWith("?"),
    i = n.replace(/\?$/, "");
  if (r.length === 0) return o ? [i, ""] : [i];
  let s = Og(r.join("/")),
    l = [];
  return (
    l.push(...s.map((a) => (a === "" ? i : [i, a].join("/")))),
    o && l.push(...s),
    l.map((a) => (e.startsWith("/") && a === "" ? "/" : a))
  );
}
function Ob(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : zb(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex)
        )
  );
}
const _b = /^:[\w-]+$/,
  Ab = 3,
  Mb = 2,
  Ib = 1,
  Db = 10,
  Lb = -2,
  vp = (e) => e === "*";
function Fb(e, t) {
  let n = e.split("/"),
    r = n.length;
  return (
    n.some(vp) && (r += Lb),
    t && (r += Mb),
    n
      .filter((o) => !vp(o))
      .reduce((o, i) => o + (_b.test(i) ? Ab : i === "" ? Ib : Db), r)
  );
}
function zb(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, o) => r === t[o])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function $b(e, t, n) {
  let { routesMeta: r } = e,
    o = {},
    i = "/",
    s = [];
  for (let l = 0; l < r.length; ++l) {
    let a = r[l],
      u = l === r.length - 1,
      d = i === "/" ? t : t.slice(i.length) || "/",
      p = gp(
        { path: a.relativePath, caseSensitive: a.caseSensitive, end: u },
        d
      ),
      g = a.route;
    if (
      (!p &&
        u &&
        n &&
        !r[r.length - 1].route.index &&
        (p = gp(
          { path: a.relativePath, caseSensitive: a.caseSensitive, end: !1 },
          d
        )),
      !p)
    )
      return null;
    Object.assign(o, p.params),
      s.push({
        params: o,
        pathname: hr([i, p.pathname]),
        pathnameBase: Gb(hr([i, p.pathnameBase])),
        route: g,
      }),
      p.pathnameBase !== "/" && (i = hr([i, p.pathnameBase]));
  }
  return s;
}
function gp(e, t) {
  typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = Bb(e.path, e.caseSensitive, e.end),
    o = t.match(n);
  if (!o) return null;
  let i = o[0],
    s = i.replace(/(.)\/+$/, "$1"),
    l = o.slice(1);
  return {
    params: r.reduce((u, d, p) => {
      let { paramName: g, isOptional: m } = d;
      if (g === "*") {
        let v = l[p] || "";
        s = i.slice(0, i.length - v.length).replace(/(.)\/+$/, "$1");
      }
      const S = l[p];
      return (
        m && !S ? (u[g] = void 0) : (u[g] = (S || "").replace(/%2F/g, "/")), u
      );
    }, {}),
    pathname: i,
    pathnameBase: s,
    pattern: e,
  };
}
function Bb(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    Tg(
      e === "*" || !e.endsWith("*") || e.endsWith("/*"),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
    );
  let r = [],
    o =
      "^" +
      e
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (s, l, a) => (
            r.push({ paramName: l, isOptional: a != null }),
            a ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    e.endsWith("*")
      ? (r.push({ paramName: "*" }),
        (o += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : n
      ? (o += "\\/*$")
      : e !== "" && e !== "/" && (o += "(?:(?=\\/|$))"),
    [new RegExp(o, t ? void 0 : "i"), r]
  );
}
function Ub(e) {
  try {
    return e
      .split("/")
      .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
      .join("/");
  } catch (t) {
    return (
      Tg(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + t + ").")
      ),
      e
    );
  }
}
function _g(e, t) {
  if (t === "/") return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith("/") ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== "/" ? null : e.slice(n) || "/";
}
function Wb(e, t) {
  t === void 0 && (t = "/");
  let {
    pathname: n,
    search: r = "",
    hash: o = "",
  } = typeof e == "string" ? Oo(e) : e;
  return {
    pathname: n ? (n.startsWith("/") ? n : Vb(n, t)) : t,
    search: Yb(r),
    hash: Xb(o),
  };
}
function Vb(e, t) {
  let n = t.replace(/\/+$/, "").split("/");
  return (
    e.split("/").forEach((o) => {
      o === ".." ? n.length > 1 && n.pop() : o !== "." && n.push(o);
    }),
    n.length > 1 ? n.join("/") : "/"
  );
}
function Oa(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ("`to." +
      t +
      "` field [" +
      JSON.stringify(r) +
      "].  Please separate it out to the ") +
    ("`to." + n + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function Hb(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
  );
}
function Qb(e, t) {
  let n = Hb(e);
  return t
    ? n.map((r, o) => (o === n.length - 1 ? r.pathname : r.pathnameBase))
    : n.map((r) => r.pathnameBase);
}
function Kb(e, t, n, r) {
  r === void 0 && (r = !1);
  let o;
  typeof e == "string"
    ? (o = Oo(e))
    : ((o = Ri({}, e)),
      Te(
        !o.pathname || !o.pathname.includes("?"),
        Oa("?", "pathname", "search", o)
      ),
      Te(
        !o.pathname || !o.pathname.includes("#"),
        Oa("#", "pathname", "hash", o)
      ),
      Te(!o.search || !o.search.includes("#"), Oa("#", "search", "hash", o)));
  let i = e === "" || o.pathname === "",
    s = i ? "/" : o.pathname,
    l;
  if (s == null) l = n;
  else {
    let p = t.length - 1;
    if (!r && s.startsWith("..")) {
      let g = s.split("/");
      for (; g[0] === ".."; ) g.shift(), (p -= 1);
      o.pathname = g.join("/");
    }
    l = p >= 0 ? t[p] : "/";
  }
  let a = Wb(o, l),
    u = s && s !== "/" && s.endsWith("/"),
    d = (i || s === ".") && n.endsWith("/");
  return !a.pathname.endsWith("/") && (u || d) && (a.pathname += "/"), a;
}
const hr = (e) => e.join("/").replace(/\/\/+/g, "/"),
  Gb = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
  Yb = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
  Xb = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function qb(e) {
  return (
    e != null &&
    typeof e.status == "number" &&
    typeof e.statusText == "string" &&
    typeof e.internal == "boolean" &&
    "data" in e
  );
}
const Ag = ["post", "put", "patch", "delete"];
new Set(Ag);
const Zb = ["get", ...Ag];
new Set(Zb);
/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ji() {
  return (
    (ji = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    ji.apply(this, arguments)
  );
}
const dd = f.createContext(null),
  Jb = f.createContext(null),
  $l = f.createContext(null),
  Bl = f.createContext(null),
  Pr = f.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  Mg = f.createContext(null);
function Ul() {
  return f.useContext(Bl) != null;
}
function fd() {
  return Ul() || Te(!1), f.useContext(Bl).location;
}
function Ig(e) {
  f.useContext($l).static || f.useLayoutEffect(e);
}
function Dg() {
  let { isDataRoute: e } = f.useContext(Pr);
  return e ? pN() : eN();
}
function eN() {
  Ul() || Te(!1);
  let e = f.useContext(dd),
    { basename: t, future: n, navigator: r } = f.useContext($l),
    { matches: o } = f.useContext(Pr),
    { pathname: i } = fd(),
    s = JSON.stringify(Qb(o, n.v7_relativeSplatPath)),
    l = f.useRef(!1);
  return (
    Ig(() => {
      l.current = !0;
    }),
    f.useCallback(
      function (u, d) {
        if ((d === void 0 && (d = {}), !l.current)) return;
        if (typeof u == "number") {
          r.go(u);
          return;
        }
        let p = Kb(u, JSON.parse(s), i, d.relative === "path");
        e == null &&
          t !== "/" &&
          (p.pathname = p.pathname === "/" ? t : hr([t, p.pathname])),
          (d.replace ? r.replace : r.push)(p, d.state, d);
      },
      [t, r, s, i, e]
    )
  );
}
function tN() {
  let { matches: e } = f.useContext(Pr),
    t = e[e.length - 1];
  return t ? t.params : {};
}
function nN(e, t) {
  return rN(e, t);
}
function rN(e, t, n, r) {
  Ul() || Te(!1);
  let { navigator: o } = f.useContext($l),
    { matches: i } = f.useContext(Pr),
    s = i[i.length - 1],
    l = s ? s.params : {};
  s && s.pathname;
  let a = s ? s.pathnameBase : "/";
  s && s.route;
  let u = fd(),
    d;
  if (t) {
    var p;
    let w = typeof t == "string" ? Oo(t) : t;
    a === "/" || ((p = w.pathname) != null && p.startsWith(a)) || Te(!1),
      (d = w);
  } else d = u;
  let g = d.pathname || "/",
    m = g;
  if (a !== "/") {
    let w = a.replace(/^\//, "").split("/");
    m = "/" + g.replace(/^\//, "").split("/").slice(w.length).join("/");
  }
  let S = Rb(e, { pathname: m }),
    v = aN(
      S &&
        S.map((w) =>
          Object.assign({}, w, {
            params: Object.assign({}, l, w.params),
            pathname: hr([
              a,
              o.encodeLocation
                ? o.encodeLocation(w.pathname).pathname
                : w.pathname,
            ]),
            pathnameBase:
              w.pathnameBase === "/"
                ? a
                : hr([
                    a,
                    o.encodeLocation
                      ? o.encodeLocation(w.pathnameBase).pathname
                      : w.pathnameBase,
                  ]),
          })
        ),
      i,
      n,
      r
    );
  return t && v
    ? f.createElement(
        Bl.Provider,
        {
          value: {
            location: ji(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              d
            ),
            navigationType: An.Pop,
          },
        },
        v
      )
    : v;
}
function oN() {
  let e = fN(),
    t = qb(e)
      ? e.status + " " + e.statusText
      : e instanceof Error
      ? e.message
      : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    o = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
  return f.createElement(
    f.Fragment,
    null,
    f.createElement("h2", null, "Unexpected Application Error!"),
    f.createElement("h3", { style: { fontStyle: "italic" } }, t),
    n ? f.createElement("pre", { style: o }, n) : null,
    null
  );
}
const iN = f.createElement(oN, null);
class sN extends f.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== "idle" && t.revalidation === "idle")
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        };
  }
  componentDidCatch(t, n) {
    console.error(
      "React Router caught the following error during render",
      t,
      n
    );
  }
  render() {
    return this.state.error !== void 0
      ? f.createElement(
          Pr.Provider,
          { value: this.props.routeContext },
          f.createElement(Mg.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function lN(e) {
  let { routeContext: t, match: n, children: r } = e,
    o = f.useContext(dd);
  return (
    o &&
      o.static &&
      o.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (o.staticContext._deepestRenderedBoundaryId = n.route.id),
    f.createElement(Pr.Provider, { value: t }, r)
  );
}
function aN(e, t, n, r) {
  var o;
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var i;
    if (!n) return null;
    if (n.errors) e = n.matches;
    else if (
      (i = r) != null &&
      i.v7_partialHydration &&
      t.length === 0 &&
      !n.initialized &&
      n.matches.length > 0
    )
      e = n.matches;
    else return null;
  }
  let s = e,
    l = (o = n) == null ? void 0 : o.errors;
  if (l != null) {
    let d = s.findIndex(
      (p) => p.route.id && (l == null ? void 0 : l[p.route.id]) !== void 0
    );
    d >= 0 || Te(!1), (s = s.slice(0, Math.min(s.length, d + 1)));
  }
  let a = !1,
    u = -1;
  if (n && r && r.v7_partialHydration)
    for (let d = 0; d < s.length; d++) {
      let p = s[d];
      if (
        ((p.route.HydrateFallback || p.route.hydrateFallbackElement) && (u = d),
        p.route.id)
      ) {
        let { loaderData: g, errors: m } = n,
          S =
            p.route.loader &&
            g[p.route.id] === void 0 &&
            (!m || m[p.route.id] === void 0);
        if (p.route.lazy || S) {
          (a = !0), u >= 0 ? (s = s.slice(0, u + 1)) : (s = [s[0]]);
          break;
        }
      }
    }
  return s.reduceRight((d, p, g) => {
    let m,
      S = !1,
      v = null,
      w = null;
    n &&
      ((m = l && p.route.id ? l[p.route.id] : void 0),
      (v = p.route.errorElement || iN),
      a &&
        (u < 0 && g === 0
          ? ((S = !0), (w = null))
          : u === g &&
            ((S = !0), (w = p.route.hydrateFallbackElement || null))));
    let y = t.concat(s.slice(0, g + 1)),
      h = () => {
        let x;
        return (
          m
            ? (x = v)
            : S
            ? (x = w)
            : p.route.Component
            ? (x = f.createElement(p.route.Component, null))
            : p.route.element
            ? (x = p.route.element)
            : (x = d),
          f.createElement(lN, {
            match: p,
            routeContext: { outlet: d, matches: y, isDataRoute: n != null },
            children: x,
          })
        );
      };
    return n && (p.route.ErrorBoundary || p.route.errorElement || g === 0)
      ? f.createElement(sN, {
          location: n.location,
          revalidation: n.revalidation,
          component: v,
          error: m,
          children: h(),
          routeContext: { outlet: null, matches: y, isDataRoute: !0 },
        })
      : h();
  }, null);
}
var Lg = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      e
    );
  })(Lg || {}),
  cl = (function (e) {
    return (
      (e.UseBlocker = "useBlocker"),
      (e.UseLoaderData = "useLoaderData"),
      (e.UseActionData = "useActionData"),
      (e.UseRouteError = "useRouteError"),
      (e.UseNavigation = "useNavigation"),
      (e.UseRouteLoaderData = "useRouteLoaderData"),
      (e.UseMatches = "useMatches"),
      (e.UseRevalidator = "useRevalidator"),
      (e.UseNavigateStable = "useNavigate"),
      (e.UseRouteId = "useRouteId"),
      e
    );
  })(cl || {});
function uN(e) {
  let t = f.useContext(dd);
  return t || Te(!1), t;
}
function cN(e) {
  let t = f.useContext(Jb);
  return t || Te(!1), t;
}
function dN(e) {
  let t = f.useContext(Pr);
  return t || Te(!1), t;
}
function Fg(e) {
  let t = dN(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || Te(!1), n.route.id;
}
function fN() {
  var e;
  let t = f.useContext(Mg),
    n = cN(cl.UseRouteError),
    r = Fg(cl.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function pN() {
  let { router: e } = uN(Lg.UseNavigateStable),
    t = Fg(cl.UseNavigateStable),
    n = f.useRef(!1);
  return (
    Ig(() => {
      n.current = !0;
    }),
    f.useCallback(
      function (o, i) {
        i === void 0 && (i = {}),
          n.current &&
            (typeof o == "number"
              ? e.navigate(o)
              : e.navigate(o, ji({ fromRouteId: t }, i)));
      },
      [e, t]
    )
  );
}
function hN(e, t) {
  e == null || e.v7_startTransition, e == null || e.v7_relativeSplatPath;
}
function Os(e) {
  Te(!1);
}
function mN(e) {
  let {
    basename: t = "/",
    children: n = null,
    location: r,
    navigationType: o = An.Pop,
    navigator: i,
    static: s = !1,
    future: l,
  } = e;
  Ul() && Te(!1);
  let a = t.replace(/^\/*/, "/"),
    u = f.useMemo(
      () => ({
        basename: a,
        navigator: i,
        static: s,
        future: ji({ v7_relativeSplatPath: !1 }, l),
      }),
      [a, l, i, s]
    );
  typeof r == "string" && (r = Oo(r));
  let {
      pathname: d = "/",
      search: p = "",
      hash: g = "",
      state: m = null,
      key: S = "default",
    } = r,
    v = f.useMemo(() => {
      let w = _g(d, a);
      return w == null
        ? null
        : {
            location: { pathname: w, search: p, hash: g, state: m, key: S },
            navigationType: o,
          };
    }, [a, d, p, g, m, S, o]);
  return v == null
    ? null
    : f.createElement(
        $l.Provider,
        { value: u },
        f.createElement(Bl.Provider, { children: n, value: v })
      );
}
function vN(e) {
  let { children: t, location: n } = e;
  return nN(Vu(t), n);
}
new Promise(() => {});
function Vu(e, t) {
  t === void 0 && (t = []);
  let n = [];
  return (
    f.Children.forEach(e, (r, o) => {
      if (!f.isValidElement(r)) return;
      let i = [...t, o];
      if (r.type === f.Fragment) {
        n.push.apply(n, Vu(r.props.children, i));
        return;
      }
      r.type !== Os && Te(!1), !r.props.index || !r.props.children || Te(!1);
      let s = {
        id: r.props.id || i.join("-"),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      };
      r.props.children && (s.children = Vu(r.props.children, i)), n.push(s);
    }),
    n
  );
}
/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ const gN = "6";
try {
  window.__reactRouterVersion = gN;
} catch {}
const yN = "startTransition",
  yp = nc[yN];
function xN(e) {
  let { basename: t, children: n, future: r, window: o } = e,
    i = f.useRef();
  i.current == null && (i.current = kb({ window: o, v5Compat: !0 }));
  let s = i.current,
    [l, a] = f.useState({ action: s.action, location: s.location }),
    { v7_startTransition: u } = r || {},
    d = f.useCallback(
      (p) => {
        u && yp ? yp(() => a(p)) : a(p);
      },
      [a, u]
    );
  return (
    f.useLayoutEffect(() => s.listen(d), [s, d]),
    f.useEffect(() => hN(r), [r]),
    f.createElement(mN, {
      basename: t,
      children: n,
      location: l.location,
      navigationType: l.action,
      navigator: s,
      future: r,
    })
  );
}
var xp;
(function (e) {
  (e.UseScrollRestoration = "useScrollRestoration"),
    (e.UseSubmit = "useSubmit"),
    (e.UseSubmitFetcher = "useSubmitFetcher"),
    (e.UseFetcher = "useFetcher"),
    (e.useViewTransitionState = "useViewTransitionState");
})(xp || (xp = {}));
var wp;
(function (e) {
  (e.UseFetcher = "useFetcher"),
    (e.UseFetchers = "useFetchers"),
    (e.UseScrollRestoration = "useScrollRestoration");
})(wp || (wp = {}));
const wN = Xc(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
    {
      variants: {
        variant: {
          default: "bg-primary text-primary-foreground hover:bg-primary/90",
          destructive:
            "bg-destructive text-destructive-foreground hover:bg-destructive/90",
          outline:
            "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
          secondary:
            "bg-secondary text-secondary-foreground hover:bg-secondary/80",
          ghost: "hover:bg-accent hover:text-accent-foreground",
          link: "text-primary underline-offset-4 hover:underline",
        },
        size: {
          default: "h-10 px-4 py-2",
          sm: "h-9 rounded-md px-3",
          lg: "h-11 rounded-md px-8",
          icon: "h-10 w-10",
        },
      },
      defaultVariants: { variant: "default", size: "default" },
    }
  ),
  on = f.forwardRef(
    ({ className: e, variant: t, size: n, asChild: r = !1, ...o }, i) => {
      const s = r ? Zw : "button";
      return c.jsx(s, {
        className: ie(wN({ variant: t, size: n, className: e })),
        ref: i,
        ...o,
      });
    }
  );
on.displayName = "Button";
var _a = "focusScope.autoFocusOnMount",
  Aa = "focusScope.autoFocusOnUnmount",
  Sp = { bubbles: !1, cancelable: !0 },
  SN = "FocusScope",
  pd = f.forwardRef((e, t) => {
    const {
        loop: n = !1,
        trapped: r = !1,
        onMountAutoFocus: o,
        onUnmountAutoFocus: i,
        ...s
      } = e,
      [l, a] = f.useState(null),
      u = At(o),
      d = At(i),
      p = f.useRef(null),
      g = he(t, (v) => a(v)),
      m = f.useRef({
        paused: !1,
        pause() {
          this.paused = !0;
        },
        resume() {
          this.paused = !1;
        },
      }).current;
    f.useEffect(() => {
      if (r) {
        let v = function (x) {
            if (m.paused || !l) return;
            const C = x.target;
            l.contains(C) ? (p.current = C) : Sn(p.current, { select: !0 });
          },
          w = function (x) {
            if (m.paused || !l) return;
            const C = x.relatedTarget;
            C !== null && (l.contains(C) || Sn(p.current, { select: !0 }));
          },
          y = function (x) {
            if (document.activeElement === document.body)
              for (const E of x) E.removedNodes.length > 0 && Sn(l);
          };
        document.addEventListener("focusin", v),
          document.addEventListener("focusout", w);
        const h = new MutationObserver(y);
        return (
          l && h.observe(l, { childList: !0, subtree: !0 }),
          () => {
            document.removeEventListener("focusin", v),
              document.removeEventListener("focusout", w),
              h.disconnect();
          }
        );
      }
    }, [r, l, m.paused]),
      f.useEffect(() => {
        if (l) {
          Ep.add(m);
          const v = document.activeElement;
          if (!l.contains(v)) {
            const y = new CustomEvent(_a, Sp);
            l.addEventListener(_a, u),
              l.dispatchEvent(y),
              y.defaultPrevented ||
                (CN(PN(zg(l)), { select: !0 }),
                document.activeElement === v && Sn(l));
          }
          return () => {
            l.removeEventListener(_a, u),
              setTimeout(() => {
                const y = new CustomEvent(Aa, Sp);
                l.addEventListener(Aa, d),
                  l.dispatchEvent(y),
                  y.defaultPrevented || Sn(v ?? document.body, { select: !0 }),
                  l.removeEventListener(Aa, d),
                  Ep.remove(m);
              }, 0);
          };
        }
      }, [l, u, d, m]);
    const S = f.useCallback(
      (v) => {
        if ((!n && !r) || m.paused) return;
        const w = v.key === "Tab" && !v.altKey && !v.ctrlKey && !v.metaKey,
          y = document.activeElement;
        if (w && y) {
          const h = v.currentTarget,
            [x, C] = EN(h);
          x && C
            ? !v.shiftKey && y === C
              ? (v.preventDefault(), n && Sn(x, { select: !0 }))
              : v.shiftKey &&
                y === x &&
                (v.preventDefault(), n && Sn(C, { select: !0 }))
            : y === h && v.preventDefault();
        }
      },
      [n, r, m.paused]
    );
    return c.jsx(ee.div, { tabIndex: -1, ...s, ref: g, onKeyDown: S });
  });
pd.displayName = SN;
function CN(e, { select: t = !1 } = {}) {
  const n = document.activeElement;
  for (const r of e)
    if ((Sn(r, { select: t }), document.activeElement !== n)) return;
}
function EN(e) {
  const t = zg(e),
    n = Cp(t, e),
    r = Cp(t.reverse(), e);
  return [n, r];
}
function zg(e) {
  const t = [],
    n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: (r) => {
        const o = r.tagName === "INPUT" && r.type === "hidden";
        return r.disabled || r.hidden || o
          ? NodeFilter.FILTER_SKIP
          : r.tabIndex >= 0
          ? NodeFilter.FILTER_ACCEPT
          : NodeFilter.FILTER_SKIP;
      },
    });
  for (; n.nextNode(); ) t.push(n.currentNode);
  return t;
}
function Cp(e, t) {
  for (const n of e) if (!bN(n, { upTo: t })) return n;
}
function bN(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function NN(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Sn(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const n = document.activeElement;
    e.focus({ preventScroll: !0 }), e !== n && NN(e) && t && e.select();
  }
}
var Ep = kN();
function kN() {
  let e = [];
  return {
    add(t) {
      const n = e[0];
      t !== n && (n == null || n.pause()), (e = bp(e, t)), e.unshift(t);
    },
    remove(t) {
      var n;
      (e = bp(e, t)), (n = e[0]) == null || n.resume();
    },
  };
}
function bp(e, t) {
  const n = [...e],
    r = n.indexOf(t);
  return r !== -1 && n.splice(r, 1), n;
}
function PN(e) {
  return e.filter((t) => t.tagName !== "A");
}
var Ma = 0;
function $g() {
  f.useEffect(() => {
    const e = document.querySelectorAll("[data-radix-focus-guard]");
    return (
      document.body.insertAdjacentElement("afterbegin", e[0] ?? Np()),
      document.body.insertAdjacentElement("beforeend", e[1] ?? Np()),
      Ma++,
      () => {
        Ma === 1 &&
          document
            .querySelectorAll("[data-radix-focus-guard]")
            .forEach((t) => t.remove()),
          Ma--;
      }
    );
  }, []);
}
function Np() {
  const e = document.createElement("span");
  return (
    e.setAttribute("data-radix-focus-guard", ""),
    (e.tabIndex = 0),
    (e.style.outline = "none"),
    (e.style.opacity = "0"),
    (e.style.position = "fixed"),
    (e.style.pointerEvents = "none"),
    e
  );
}
var Wt = function () {
  return (
    (Wt =
      Object.assign ||
      function (t) {
        for (var n, r = 1, o = arguments.length; r < o; r++) {
          n = arguments[r];
          for (var i in n)
            Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
        }
        return t;
      }),
    Wt.apply(this, arguments)
  );
};
function Bg(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) < 0 &&
      (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
        (n[r[o]] = e[r[o]]);
  return n;
}
function TN(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, o = t.length, i; r < o; r++)
      (i || !(r in t)) &&
        (i || (i = Array.prototype.slice.call(t, 0, r)), (i[r] = t[r]));
  return e.concat(i || Array.prototype.slice.call(t));
}
var _s = "right-scroll-bar-position",
  As = "width-before-scroll-bar",
  RN = "with-scroll-bars-hidden",
  jN = "--removed-body-scroll-bar-size";
function Ia(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function ON(e, t) {
  var n = f.useState(function () {
    return {
      value: e,
      callback: t,
      facade: {
        get current() {
          return n.value;
        },
        set current(r) {
          var o = n.value;
          o !== r && ((n.value = r), n.callback(r, o));
        },
      },
    };
  })[0];
  return (n.callback = t), n.facade;
}
var _N = typeof window < "u" ? f.useLayoutEffect : f.useEffect,
  kp = new WeakMap();
function AN(e, t) {
  var n = ON(null, function (r) {
    return e.forEach(function (o) {
      return Ia(o, r);
    });
  });
  return (
    _N(
      function () {
        var r = kp.get(n);
        if (r) {
          var o = new Set(r),
            i = new Set(e),
            s = n.current;
          o.forEach(function (l) {
            i.has(l) || Ia(l, null);
          }),
            i.forEach(function (l) {
              o.has(l) || Ia(l, s);
            });
        }
        kp.set(n, e);
      },
      [e]
    ),
    n
  );
}
function MN(e) {
  return e;
}
function IN(e, t) {
  t === void 0 && (t = MN);
  var n = [],
    r = !1,
    o = {
      read: function () {
        if (r)
          throw new Error(
            "Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`."
          );
        return n.length ? n[n.length - 1] : e;
      },
      useMedium: function (i) {
        var s = t(i, r);
        return (
          n.push(s),
          function () {
            n = n.filter(function (l) {
              return l !== s;
            });
          }
        );
      },
      assignSyncMedium: function (i) {
        for (r = !0; n.length; ) {
          var s = n;
          (n = []), s.forEach(i);
        }
        n = {
          push: function (l) {
            return i(l);
          },
          filter: function () {
            return n;
          },
        };
      },
      assignMedium: function (i) {
        r = !0;
        var s = [];
        if (n.length) {
          var l = n;
          (n = []), l.forEach(i), (s = n);
        }
        var a = function () {
            var d = s;
            (s = []), d.forEach(i);
          },
          u = function () {
            return Promise.resolve().then(a);
          };
        u(),
          (n = {
            push: function (d) {
              s.push(d), u();
            },
            filter: function (d) {
              return (s = s.filter(d)), n;
            },
          });
      },
    };
  return o;
}
function DN(e) {
  e === void 0 && (e = {});
  var t = IN(null);
  return (t.options = Wt({ async: !0, ssr: !1 }, e)), t;
}
var Ug = function (e) {
  var t = e.sideCar,
    n = Bg(e, ["sideCar"]);
  if (!t)
    throw new Error(
      "Sidecar: please provide `sideCar` property to import the right car"
    );
  var r = t.read();
  if (!r) throw new Error("Sidecar medium not found");
  return f.createElement(r, Wt({}, n));
};
Ug.isSideCarExport = !0;
function LN(e, t) {
  return e.useMedium(t), Ug;
}
var Wg = DN(),
  Da = function () {},
  Wl = f.forwardRef(function (e, t) {
    var n = f.useRef(null),
      r = f.useState({
        onScrollCapture: Da,
        onWheelCapture: Da,
        onTouchMoveCapture: Da,
      }),
      o = r[0],
      i = r[1],
      s = e.forwardProps,
      l = e.children,
      a = e.className,
      u = e.removeScrollBar,
      d = e.enabled,
      p = e.shards,
      g = e.sideCar,
      m = e.noRelative,
      S = e.noIsolation,
      v = e.inert,
      w = e.allowPinchZoom,
      y = e.as,
      h = y === void 0 ? "div" : y,
      x = e.gapMode,
      C = Bg(e, [
        "forwardProps",
        "children",
        "className",
        "removeScrollBar",
        "enabled",
        "shards",
        "sideCar",
        "noRelative",
        "noIsolation",
        "inert",
        "allowPinchZoom",
        "as",
        "gapMode",
      ]),
      E = g,
      N = AN([n, t]),
      b = Wt(Wt({}, C), o);
    return f.createElement(
      f.Fragment,
      null,
      d &&
        f.createElement(E, {
          sideCar: Wg,
          removeScrollBar: u,
          shards: p,
          noRelative: m,
          noIsolation: S,
          inert: v,
          setCallbacks: i,
          allowPinchZoom: !!w,
          lockRef: n,
          gapMode: x,
        }),
      s
        ? f.cloneElement(f.Children.only(l), Wt(Wt({}, b), { ref: N }))
        : f.createElement(h, Wt({}, b, { className: a, ref: N }), l)
    );
  });
Wl.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 };
Wl.classNames = { fullWidth: As, zeroRight: _s };
var FN = function () {
  if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
};
function zN() {
  if (!document) return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = FN();
  return t && e.setAttribute("nonce", t), e;
}
function $N(e, t) {
  e.styleSheet
    ? (e.styleSheet.cssText = t)
    : e.appendChild(document.createTextNode(t));
}
function BN(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var UN = function () {
    var e = 0,
      t = null;
    return {
      add: function (n) {
        e == 0 && (t = zN()) && ($N(t, n), BN(t)), e++;
      },
      remove: function () {
        e--,
          !e && t && (t.parentNode && t.parentNode.removeChild(t), (t = null));
      },
    };
  },
  WN = function () {
    var e = UN();
    return function (t, n) {
      f.useEffect(
        function () {
          return (
            e.add(t),
            function () {
              e.remove();
            }
          );
        },
        [t && n]
      );
    };
  },
  Vg = function () {
    var e = WN(),
      t = function (n) {
        var r = n.styles,
          o = n.dynamic;
        return e(r, o), null;
      };
    return t;
  },
  VN = { left: 0, top: 0, right: 0, gap: 0 },
  La = function (e) {
    return parseInt(e || "", 10) || 0;
  },
  HN = function (e) {
    var t = window.getComputedStyle(document.body),
      n = t[e === "padding" ? "paddingLeft" : "marginLeft"],
      r = t[e === "padding" ? "paddingTop" : "marginTop"],
      o = t[e === "padding" ? "paddingRight" : "marginRight"];
    return [La(n), La(r), La(o)];
  },
  QN = function (e) {
    if ((e === void 0 && (e = "margin"), typeof window > "u")) return VN;
    var t = HN(e),
      n = document.documentElement.clientWidth,
      r = window.innerWidth;
    return {
      left: t[0],
      top: t[1],
      right: t[2],
      gap: Math.max(0, r - n + t[2] - t[0]),
    };
  },
  KN = Vg(),
  ro = "data-scroll-locked",
  GN = function (e, t, n, r) {
    var o = e.left,
      i = e.top,
      s = e.right,
      l = e.gap;
    return (
      n === void 0 && (n = "margin"),
      `
  .`
        .concat(
          RN,
          ` {
   overflow: hidden `
        )
        .concat(
          r,
          `;
   padding-right: `
        )
        .concat(l, "px ")
        .concat(
          r,
          `;
  }
  body[`
        )
        .concat(
          ro,
          `] {
    overflow: hidden `
        )
        .concat(
          r,
          `;
    overscroll-behavior: contain;
    `
        )
        .concat(
          [
            t && "position: relative ".concat(r, ";"),
            n === "margin" &&
              `
    padding-left: `
                .concat(
                  o,
                  `px;
    padding-top: `
                )
                .concat(
                  i,
                  `px;
    padding-right: `
                )
                .concat(
                  s,
                  `px;
    margin-left:0;
    margin-top:0;
    margin-right: `
                )
                .concat(l, "px ")
                .concat(
                  r,
                  `;
    `
                ),
            n === "padding" &&
              "padding-right: ".concat(l, "px ").concat(r, ";"),
          ]
            .filter(Boolean)
            .join(""),
          `
  }
  
  .`
        )
        .concat(
          _s,
          ` {
    right: `
        )
        .concat(l, "px ")
        .concat(
          r,
          `;
  }
  
  .`
        )
        .concat(
          As,
          ` {
    margin-right: `
        )
        .concat(l, "px ")
        .concat(
          r,
          `;
  }
  
  .`
        )
        .concat(_s, " .")
        .concat(
          _s,
          ` {
    right: 0 `
        )
        .concat(
          r,
          `;
  }
  
  .`
        )
        .concat(As, " .")
        .concat(
          As,
          ` {
    margin-right: 0 `
        )
        .concat(
          r,
          `;
  }
  
  body[`
        )
        .concat(
          ro,
          `] {
    `
        )
        .concat(jN, ": ")
        .concat(
          l,
          `px;
  }
`
        )
    );
  },
  Pp = function () {
    var e = parseInt(document.body.getAttribute(ro) || "0", 10);
    return isFinite(e) ? e : 0;
  },
  YN = function () {
    f.useEffect(function () {
      return (
        document.body.setAttribute(ro, (Pp() + 1).toString()),
        function () {
          var e = Pp() - 1;
          e <= 0
            ? document.body.removeAttribute(ro)
            : document.body.setAttribute(ro, e.toString());
        }
      );
    }, []);
  },
  XN = function (e) {
    var t = e.noRelative,
      n = e.noImportant,
      r = e.gapMode,
      o = r === void 0 ? "margin" : r;
    YN();
    var i = f.useMemo(
      function () {
        return QN(o);
      },
      [o]
    );
    return f.createElement(KN, { styles: GN(i, !t, o, n ? "" : "!important") });
  },
  Hu = !1;
if (typeof window < "u")
  try {
    var fs = Object.defineProperty({}, "passive", {
      get: function () {
        return (Hu = !0), !0;
      },
    });
    window.addEventListener("test", fs, fs),
      window.removeEventListener("test", fs, fs);
  } catch {
    Hu = !1;
  }
var Ar = Hu ? { passive: !1 } : !1,
  qN = function (e) {
    return e.tagName === "TEXTAREA";
  },
  Hg = function (e, t) {
    if (!(e instanceof Element)) return !1;
    var n = window.getComputedStyle(e);
    return (
      n[t] !== "hidden" &&
      !(n.overflowY === n.overflowX && !qN(e) && n[t] === "visible")
    );
  },
  ZN = function (e) {
    return Hg(e, "overflowY");
  },
  JN = function (e) {
    return Hg(e, "overflowX");
  },
  Tp = function (e, t) {
    var n = t.ownerDocument,
      r = t;
    do {
      typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
      var o = Qg(e, r);
      if (o) {
        var i = Kg(e, r),
          s = i[1],
          l = i[2];
        if (s > l) return !0;
      }
      r = r.parentNode;
    } while (r && r !== n.body);
    return !1;
  },
  ek = function (e) {
    var t = e.scrollTop,
      n = e.scrollHeight,
      r = e.clientHeight;
    return [t, n, r];
  },
  tk = function (e) {
    var t = e.scrollLeft,
      n = e.scrollWidth,
      r = e.clientWidth;
    return [t, n, r];
  },
  Qg = function (e, t) {
    return e === "v" ? ZN(t) : JN(t);
  },
  Kg = function (e, t) {
    return e === "v" ? ek(t) : tk(t);
  },
  nk = function (e, t) {
    return e === "h" && t === "rtl" ? -1 : 1;
  },
  rk = function (e, t, n, r, o) {
    var i = nk(e, window.getComputedStyle(t).direction),
      s = i * r,
      l = n.target,
      a = t.contains(l),
      u = !1,
      d = s > 0,
      p = 0,
      g = 0;
    do {
      if (!l) break;
      var m = Kg(e, l),
        S = m[0],
        v = m[1],
        w = m[2],
        y = v - w - i * S;
      (S || y) && Qg(e, l) && ((p += y), (g += S));
      var h = l.parentNode;
      l = h && h.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? h.host : h;
    } while ((!a && l !== document.body) || (a && (t.contains(l) || t === l)));
    return (
      ((d && (Math.abs(p) < 1 || !o)) || (!d && (Math.abs(g) < 1 || !o))) &&
        (u = !0),
      u
    );
  },
  ps = function (e) {
    return "changedTouches" in e
      ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
      : [0, 0];
  },
  Rp = function (e) {
    return [e.deltaX, e.deltaY];
  },
  jp = function (e) {
    return e && "current" in e ? e.current : e;
  },
  ok = function (e, t) {
    return e[0] === t[0] && e[1] === t[1];
  },
  ik = function (e) {
    return `
  .block-interactivity-`
      .concat(
        e,
        ` {pointer-events: none;}
  .allow-interactivity-`
      )
      .concat(
        e,
        ` {pointer-events: all;}
`
      );
  },
  sk = 0,
  Mr = [];
function lk(e) {
  var t = f.useRef([]),
    n = f.useRef([0, 0]),
    r = f.useRef(),
    o = f.useState(sk++)[0],
    i = f.useState(Vg)[0],
    s = f.useRef(e);
  f.useEffect(
    function () {
      s.current = e;
    },
    [e]
  ),
    f.useEffect(
      function () {
        if (e.inert) {
          document.body.classList.add("block-interactivity-".concat(o));
          var v = TN([e.lockRef.current], (e.shards || []).map(jp), !0).filter(
            Boolean
          );
          return (
            v.forEach(function (w) {
              return w.classList.add("allow-interactivity-".concat(o));
            }),
            function () {
              document.body.classList.remove("block-interactivity-".concat(o)),
                v.forEach(function (w) {
                  return w.classList.remove("allow-interactivity-".concat(o));
                });
            }
          );
        }
      },
      [e.inert, e.lockRef.current, e.shards]
    );
  var l = f.useCallback(function (v, w) {
      if (
        ("touches" in v && v.touches.length === 2) ||
        (v.type === "wheel" && v.ctrlKey)
      )
        return !s.current.allowPinchZoom;
      var y = ps(v),
        h = n.current,
        x = "deltaX" in v ? v.deltaX : h[0] - y[0],
        C = "deltaY" in v ? v.deltaY : h[1] - y[1],
        E,
        N = v.target,
        b = Math.abs(x) > Math.abs(C) ? "h" : "v";
      if ("touches" in v && b === "h" && N.type === "range") return !1;
      var R = Tp(b, N);
      if (!R) return !0;
      if ((R ? (E = b) : ((E = b === "v" ? "h" : "v"), (R = Tp(b, N))), !R))
        return !1;
      if (
        (!r.current && "changedTouches" in v && (x || C) && (r.current = E), !E)
      )
        return !0;
      var O = r.current || E;
      return rk(O, w, v, O === "h" ? x : C, !0);
    }, []),
    a = f.useCallback(function (v) {
      var w = v;
      if (!(!Mr.length || Mr[Mr.length - 1] !== i)) {
        var y = "deltaY" in w ? Rp(w) : ps(w),
          h = t.current.filter(function (E) {
            return (
              E.name === w.type &&
              (E.target === w.target || w.target === E.shadowParent) &&
              ok(E.delta, y)
            );
          })[0];
        if (h && h.should) {
          w.cancelable && w.preventDefault();
          return;
        }
        if (!h) {
          var x = (s.current.shards || [])
              .map(jp)
              .filter(Boolean)
              .filter(function (E) {
                return E.contains(w.target);
              }),
            C = x.length > 0 ? l(w, x[0]) : !s.current.noIsolation;
          C && w.cancelable && w.preventDefault();
        }
      }
    }, []),
    u = f.useCallback(function (v, w, y, h) {
      var x = { name: v, delta: w, target: y, should: h, shadowParent: ak(y) };
      t.current.push(x),
        setTimeout(function () {
          t.current = t.current.filter(function (C) {
            return C !== x;
          });
        }, 1);
    }, []),
    d = f.useCallback(function (v) {
      (n.current = ps(v)), (r.current = void 0);
    }, []),
    p = f.useCallback(function (v) {
      u(v.type, Rp(v), v.target, l(v, e.lockRef.current));
    }, []),
    g = f.useCallback(function (v) {
      u(v.type, ps(v), v.target, l(v, e.lockRef.current));
    }, []);
  f.useEffect(function () {
    return (
      Mr.push(i),
      e.setCallbacks({
        onScrollCapture: p,
        onWheelCapture: p,
        onTouchMoveCapture: g,
      }),
      document.addEventListener("wheel", a, Ar),
      document.addEventListener("touchmove", a, Ar),
      document.addEventListener("touchstart", d, Ar),
      function () {
        (Mr = Mr.filter(function (v) {
          return v !== i;
        })),
          document.removeEventListener("wheel", a, Ar),
          document.removeEventListener("touchmove", a, Ar),
          document.removeEventListener("touchstart", d, Ar);
      }
    );
  }, []);
  var m = e.removeScrollBar,
    S = e.inert;
  return f.createElement(
    f.Fragment,
    null,
    S ? f.createElement(i, { styles: ik(o) }) : null,
    m
      ? f.createElement(XN, { noRelative: e.noRelative, gapMode: e.gapMode })
      : null
  );
}
function ak(e) {
  for (var t = null; e !== null; )
    e instanceof ShadowRoot && ((t = e.host), (e = e.host)), (e = e.parentNode);
  return t;
}
const uk = LN(Wg, lk);
var hd = f.forwardRef(function (e, t) {
  return f.createElement(Wl, Wt({}, e, { ref: t, sideCar: uk }));
});
hd.classNames = Wl.classNames;
var ck = function (e) {
    if (typeof document > "u") return null;
    var t = Array.isArray(e) ? e[0] : e;
    return t.ownerDocument.body;
  },
  Ir = new WeakMap(),
  hs = new WeakMap(),
  ms = {},
  Fa = 0,
  Gg = function (e) {
    return e && (e.host || Gg(e.parentNode));
  },
  dk = function (e, t) {
    return t
      .map(function (n) {
        if (e.contains(n)) return n;
        var r = Gg(n);
        return r && e.contains(r)
          ? r
          : (console.error(
              "aria-hidden",
              n,
              "in not contained inside",
              e,
              ". Doing nothing"
            ),
            null);
      })
      .filter(function (n) {
        return !!n;
      });
  },
  fk = function (e, t, n, r) {
    var o = dk(t, Array.isArray(e) ? e : [e]);
    ms[n] || (ms[n] = new WeakMap());
    var i = ms[n],
      s = [],
      l = new Set(),
      a = new Set(o),
      u = function (p) {
        !p || l.has(p) || (l.add(p), u(p.parentNode));
      };
    o.forEach(u);
    var d = function (p) {
      !p ||
        a.has(p) ||
        Array.prototype.forEach.call(p.children, function (g) {
          if (l.has(g)) d(g);
          else
            try {
              var m = g.getAttribute(r),
                S = m !== null && m !== "false",
                v = (Ir.get(g) || 0) + 1,
                w = (i.get(g) || 0) + 1;
              Ir.set(g, v),
                i.set(g, w),
                s.push(g),
                v === 1 && S && hs.set(g, !0),
                w === 1 && g.setAttribute(n, "true"),
                S || g.setAttribute(r, "true");
            } catch (y) {
              console.error("aria-hidden: cannot operate on ", g, y);
            }
        });
    };
    return (
      d(t),
      l.clear(),
      Fa++,
      function () {
        s.forEach(function (p) {
          var g = Ir.get(p) - 1,
            m = i.get(p) - 1;
          Ir.set(p, g),
            i.set(p, m),
            g || (hs.has(p) || p.removeAttribute(r), hs.delete(p)),
            m || p.removeAttribute(n);
        }),
          Fa--,
          Fa ||
            ((Ir = new WeakMap()),
            (Ir = new WeakMap()),
            (hs = new WeakMap()),
            (ms = {}));
      }
    );
  },
  Yg = function (e, t, n) {
    n === void 0 && (n = "data-aria-hidden");
    var r = Array.from(Array.isArray(e) ? e : [e]),
      o = ck(e);
    return o
      ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))),
        fk(r, o, n, "aria-hidden"))
      : function () {
          return null;
        };
  },
  Vl = "Dialog",
  [Xg, DP] = ko(Vl),
  [pk, Dt] = Xg(Vl),
  qg = (e) => {
    const {
        __scopeDialog: t,
        children: n,
        open: r,
        defaultOpen: o,
        onOpenChange: i,
        modal: s = !0,
      } = e,
      l = f.useRef(null),
      a = f.useRef(null),
      [u, d] = ol({ prop: r, defaultProp: o ?? !1, onChange: i, caller: Vl });
    return c.jsx(pk, {
      scope: t,
      triggerRef: l,
      contentRef: a,
      contentId: to(),
      titleId: to(),
      descriptionId: to(),
      open: u,
      onOpenChange: d,
      onOpenToggle: f.useCallback(() => d((p) => !p), [d]),
      modal: s,
      children: n,
    });
  };
qg.displayName = Vl;
var Zg = "DialogTrigger",
  hk = f.forwardRef((e, t) => {
    const { __scopeDialog: n, ...r } = e,
      o = Dt(Zg, n),
      i = he(t, o.triggerRef);
    return c.jsx(ee.button, {
      type: "button",
      "aria-haspopup": "dialog",
      "aria-expanded": o.open,
      "aria-controls": o.contentId,
      "data-state": gd(o.open),
      ...r,
      ref: i,
      onClick: q(e.onClick, o.onOpenToggle),
    });
  });
hk.displayName = Zg;
var md = "DialogPortal",
  [mk, Jg] = Xg(md, { forceMount: void 0 }),
  ey = (e) => {
    const { __scopeDialog: t, forceMount: n, children: r, container: o } = e,
      i = Dt(md, t);
    return c.jsx(mk, {
      scope: t,
      forceMount: n,
      children: f.Children.map(r, (s) =>
        c.jsx(Po, {
          present: n || i.open,
          children: c.jsx(Rl, { asChild: !0, container: o, children: s }),
        })
      ),
    });
  };
ey.displayName = md;
var dl = "DialogOverlay",
  ty = f.forwardRef((e, t) => {
    const n = Jg(dl, e.__scopeDialog),
      { forceMount: r = n.forceMount, ...o } = e,
      i = Dt(dl, e.__scopeDialog);
    return i.modal
      ? c.jsx(Po, {
          present: r || i.open,
          children: c.jsx(gk, { ...o, ref: t }),
        })
      : null;
  });
ty.displayName = dl;
var vk = wo("DialogOverlay.RemoveScroll"),
  gk = f.forwardRef((e, t) => {
    const { __scopeDialog: n, ...r } = e,
      o = Dt(dl, n);
    return c.jsx(hd, {
      as: vk,
      allowPinchZoom: !0,
      shards: [o.contentRef],
      children: c.jsx(ee.div, {
        "data-state": gd(o.open),
        ...r,
        ref: t,
        style: { pointerEvents: "auto", ...r.style },
      }),
    });
  }),
  Sr = "DialogContent",
  ny = f.forwardRef((e, t) => {
    const n = Jg(Sr, e.__scopeDialog),
      { forceMount: r = n.forceMount, ...o } = e,
      i = Dt(Sr, e.__scopeDialog);
    return c.jsx(Po, {
      present: r || i.open,
      children: i.modal
        ? c.jsx(yk, { ...o, ref: t })
        : c.jsx(xk, { ...o, ref: t }),
    });
  });
ny.displayName = Sr;
var yk = f.forwardRef((e, t) => {
    const n = Dt(Sr, e.__scopeDialog),
      r = f.useRef(null),
      o = he(t, n.contentRef, r);
    return (
      f.useEffect(() => {
        const i = r.current;
        if (i) return Yg(i);
      }, []),
      c.jsx(ry, {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: !0,
        onCloseAutoFocus: q(e.onCloseAutoFocus, (i) => {
          var s;
          i.preventDefault(), (s = n.triggerRef.current) == null || s.focus();
        }),
        onPointerDownOutside: q(e.onPointerDownOutside, (i) => {
          const s = i.detail.originalEvent,
            l = s.button === 0 && s.ctrlKey === !0;
          (s.button === 2 || l) && i.preventDefault();
        }),
        onFocusOutside: q(e.onFocusOutside, (i) => i.preventDefault()),
      })
    );
  }),
  xk = f.forwardRef((e, t) => {
    const n = Dt(Sr, e.__scopeDialog),
      r = f.useRef(!1),
      o = f.useRef(!1);
    return c.jsx(ry, {
      ...e,
      ref: t,
      trapFocus: !1,
      disableOutsidePointerEvents: !1,
      onCloseAutoFocus: (i) => {
        var s, l;
        (s = e.onCloseAutoFocus) == null || s.call(e, i),
          i.defaultPrevented ||
            (r.current || (l = n.triggerRef.current) == null || l.focus(),
            i.preventDefault()),
          (r.current = !1),
          (o.current = !1);
      },
      onInteractOutside: (i) => {
        var a, u;
        (a = e.onInteractOutside) == null || a.call(e, i),
          i.defaultPrevented ||
            ((r.current = !0),
            i.detail.originalEvent.type === "pointerdown" && (o.current = !0));
        const s = i.target;
        ((u = n.triggerRef.current) == null ? void 0 : u.contains(s)) &&
          i.preventDefault(),
          i.detail.originalEvent.type === "focusin" &&
            o.current &&
            i.preventDefault();
      },
    });
  }),
  ry = f.forwardRef((e, t) => {
    const {
        __scopeDialog: n,
        trapFocus: r,
        onOpenAutoFocus: o,
        onCloseAutoFocus: i,
        ...s
      } = e,
      l = Dt(Sr, n),
      a = f.useRef(null),
      u = he(t, a);
    return (
      $g(),
      c.jsxs(c.Fragment, {
        children: [
          c.jsx(pd, {
            asChild: !0,
            loop: !0,
            trapped: r,
            onMountAutoFocus: o,
            onUnmountAutoFocus: i,
            children: c.jsx(zi, {
              role: "dialog",
              id: l.contentId,
              "aria-describedby": l.descriptionId,
              "aria-labelledby": l.titleId,
              "data-state": gd(l.open),
              ...s,
              ref: u,
              onDismiss: () => l.onOpenChange(!1),
            }),
          }),
          c.jsxs(c.Fragment, {
            children: [
              c.jsx(wk, { titleId: l.titleId }),
              c.jsx(Ck, { contentRef: a, descriptionId: l.descriptionId }),
            ],
          }),
        ],
      })
    );
  }),
  vd = "DialogTitle",
  oy = f.forwardRef((e, t) => {
    const { __scopeDialog: n, ...r } = e,
      o = Dt(vd, n);
    return c.jsx(ee.h2, { id: o.titleId, ...r, ref: t });
  });
oy.displayName = vd;
var iy = "DialogDescription",
  sy = f.forwardRef((e, t) => {
    const { __scopeDialog: n, ...r } = e,
      o = Dt(iy, n);
    return c.jsx(ee.p, { id: o.descriptionId, ...r, ref: t });
  });
sy.displayName = iy;
var ly = "DialogClose",
  ay = f.forwardRef((e, t) => {
    const { __scopeDialog: n, ...r } = e,
      o = Dt(ly, n);
    return c.jsx(ee.button, {
      type: "button",
      ...r,
      ref: t,
      onClick: q(e.onClick, () => o.onOpenChange(!1)),
    });
  });
ay.displayName = ly;
function gd(e) {
  return e ? "open" : "closed";
}
var uy = "DialogTitleWarning",
  [LP, cy] = Xw(uy, { contentName: Sr, titleName: vd, docsSlug: "dialog" }),
  wk = ({ titleId: e }) => {
    const t = cy(uy),
      n = `\`${t.contentName}\` requires a \`${t.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${t.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${t.docsSlug}`;
    return (
      f.useEffect(() => {
        e && (document.getElementById(e) || console.error(n));
      }, [n, e]),
      null
    );
  },
  Sk = "DialogDescriptionWarning",
  Ck = ({ contentRef: e, descriptionId: t }) => {
    const r = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${
      cy(Sk).contentName
    }}.`;
    return (
      f.useEffect(() => {
        var i;
        const o =
          (i = e.current) == null ? void 0 : i.getAttribute("aria-describedby");
        t && o && (document.getElementById(t) || console.warn(r));
      }, [r, e, t]),
      null
    );
  },
  Ek = qg,
  bk = ey,
  dy = ty,
  fy = ny,
  py = oy,
  hy = sy,
  Nk = ay;
const kk = Ek,
  Pk = bk,
  my = f.forwardRef(({ className: e, ...t }, n) =>
    c.jsx(dy, {
      ref: n,
      className: ie(
        "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        e
      ),
      ...t,
    })
  );
my.displayName = dy.displayName;
const vy = f.forwardRef(({ className: e, children: t, ...n }, r) =>
  c.jsxs(Pk, {
    children: [
      c.jsx(my, {}),
      c.jsxs(fy, {
        ref: r,
        className: ie(
          "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
          e
        ),
        ...n,
        children: [
          t,
          c.jsxs(Nk, {
            className:
              "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity data-[state=open]:bg-accent data-[state=open]:text-muted-foreground hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none",
            children: [
              c.jsx(qc, { className: "h-4 w-4" }),
              c.jsx("span", { className: "sr-only", children: "Close" }),
            ],
          }),
        ],
      }),
    ],
  })
);
vy.displayName = fy.displayName;
const gy = ({ className: e, ...t }) =>
  c.jsx("div", {
    className: ie("flex flex-col space-y-1.5 text-center sm:text-left", e),
    ...t,
  });
gy.displayName = "DialogHeader";
const yy = f.forwardRef(({ className: e, ...t }, n) =>
  c.jsx(py, {
    ref: n,
    className: ie("text-lg font-semibold leading-none tracking-tight", e),
    ...t,
  })
);
yy.displayName = py.displayName;
const Tk = f.forwardRef(({ className: e, ...t }, n) =>
  c.jsx(hy, { ref: n, className: ie("text-sm text-muted-foreground", e), ...t })
);
Tk.displayName = hy.displayName;
const Qu = f.forwardRef(({ className: e, type: t, ...n }, r) =>
  c.jsx("input", {
    type: t,
    className: ie(
      "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
      e
    ),
    ref: r,
    ...n,
  })
);
Qu.displayName = "Input";
var Rk = "Label",
  xy = f.forwardRef((e, t) =>
    c.jsx(ee.label, {
      ...e,
      ref: t,
      onMouseDown: (n) => {
        var o;
        n.target.closest("button, input, select, textarea") ||
          ((o = e.onMouseDown) == null || o.call(e, n),
          !n.defaultPrevented && n.detail > 1 && n.preventDefault());
      },
    })
  );
xy.displayName = Rk;
var wy = xy;
const jk = Xc(
    "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
  ),
  Yo = f.forwardRef(({ className: e, ...t }, n) =>
    c.jsx(wy, { ref: n, className: ie(jk(), e), ...t })
  );
Yo.displayName = wy.displayName;
function Op(e, [t, n]) {
  return Math.min(n, Math.max(t, e));
}
var Ok = f.createContext(void 0);
function _k(e) {
  const t = f.useContext(Ok);
  return e || t || "ltr";
}
function Ak(e) {
  const t = f.useRef({ value: e, previous: e });
  return f.useMemo(
    () => (
      t.current.value !== e &&
        ((t.current.previous = t.current.value), (t.current.value = e)),
      t.current.previous
    ),
    [e]
  );
}
var Mk = [" ", "Enter", "ArrowUp", "ArrowDown"],
  Ik = [" ", "Enter"],
  Cr = "Select",
  [Hl, Ql, Dk] = rv(Cr),
  [_o, FP] = ko(Cr, [Dk, Il]),
  Kl = Il(),
  [Lk, Yn] = _o(Cr),
  [Fk, zk] = _o(Cr),
  Sy = (e) => {
    const {
        __scopeSelect: t,
        children: n,
        open: r,
        defaultOpen: o,
        onOpenChange: i,
        value: s,
        defaultValue: l,
        onValueChange: a,
        dir: u,
        name: d,
        autoComplete: p,
        disabled: g,
        required: m,
        form: S,
      } = e,
      v = Kl(t),
      [w, y] = f.useState(null),
      [h, x] = f.useState(null),
      [C, E] = f.useState(!1),
      N = _k(u),
      [b, R] = ol({ prop: r, defaultProp: o ?? !1, onChange: i, caller: Cr }),
      [O, _] = ol({ prop: s, defaultProp: l, onChange: a, caller: Cr }),
      $ = f.useRef(null),
      I = w ? S || !!w.closest("form") : !0,
      [W, M] = f.useState(new Set()),
      H = Array.from(W)
        .map((z) => z.props.value)
        .join(";");
    return c.jsx(IE, {
      ...v,
      children: c.jsxs(Lk, {
        required: m,
        scope: t,
        trigger: w,
        onTriggerChange: y,
        valueNode: h,
        onValueNodeChange: x,
        valueNodeHasChildren: C,
        onValueNodeHasChildrenChange: E,
        contentId: to(),
        value: O,
        onValueChange: _,
        open: b,
        onOpenChange: R,
        dir: N,
        triggerPointerDownPosRef: $,
        disabled: g,
        children: [
          c.jsx(Hl.Provider, {
            scope: t,
            children: c.jsx(Fk, {
              scope: e.__scopeSelect,
              onNativeOptionAdd: f.useCallback((z) => {
                M((U) => new Set(U).add(z));
              }, []),
              onNativeOptionRemove: f.useCallback((z) => {
                M((U) => {
                  const k = new Set(U);
                  return k.delete(z), k;
                });
              }, []),
              children: n,
            }),
          }),
          I
            ? c.jsxs(
                Hy,
                {
                  "aria-hidden": !0,
                  required: m,
                  tabIndex: -1,
                  name: d,
                  autoComplete: p,
                  value: O,
                  onChange: (z) => _(z.target.value),
                  disabled: g,
                  form: S,
                  children: [
                    O === void 0 ? c.jsx("option", { value: "" }) : null,
                    Array.from(W),
                  ],
                },
                H
              )
            : null,
        ],
      }),
    });
  };
Sy.displayName = Cr;
var Cy = "SelectTrigger",
  Ey = f.forwardRef((e, t) => {
    const { __scopeSelect: n, disabled: r = !1, ...o } = e,
      i = Kl(n),
      s = Yn(Cy, n),
      l = s.disabled || r,
      a = he(t, s.onTriggerChange),
      u = Ql(n),
      d = f.useRef("touch"),
      [p, g, m] = Ky((v) => {
        const w = u().filter((x) => !x.disabled),
          y = w.find((x) => x.value === s.value),
          h = Gy(w, v, y);
        h !== void 0 && s.onValueChange(h.value);
      }),
      S = (v) => {
        l || (s.onOpenChange(!0), m()),
          v &&
            (s.triggerPointerDownPosRef.current = {
              x: Math.round(v.pageX),
              y: Math.round(v.pageY),
            });
      };
    return c.jsx(cg, {
      asChild: !0,
      ...i,
      children: c.jsx(ee.button, {
        type: "button",
        role: "combobox",
        "aria-controls": s.contentId,
        "aria-expanded": s.open,
        "aria-required": s.required,
        "aria-autocomplete": "none",
        dir: s.dir,
        "data-state": s.open ? "open" : "closed",
        disabled: l,
        "data-disabled": l ? "" : void 0,
        "data-placeholder": Qy(s.value) ? "" : void 0,
        ...o,
        ref: a,
        onClick: q(o.onClick, (v) => {
          v.currentTarget.focus(), d.current !== "mouse" && S(v);
        }),
        onPointerDown: q(o.onPointerDown, (v) => {
          d.current = v.pointerType;
          const w = v.target;
          w.hasPointerCapture(v.pointerId) &&
            w.releasePointerCapture(v.pointerId),
            v.button === 0 &&
              v.ctrlKey === !1 &&
              v.pointerType === "mouse" &&
              (S(v), v.preventDefault());
        }),
        onKeyDown: q(o.onKeyDown, (v) => {
          const w = p.current !== "";
          !(v.ctrlKey || v.altKey || v.metaKey) &&
            v.key.length === 1 &&
            g(v.key),
            !(w && v.key === " ") &&
              Mk.includes(v.key) &&
              (S(), v.preventDefault());
        }),
      }),
    });
  });
Ey.displayName = Cy;
var by = "SelectValue",
  Ny = f.forwardRef((e, t) => {
    const {
        __scopeSelect: n,
        className: r,
        style: o,
        children: i,
        placeholder: s = "",
        ...l
      } = e,
      a = Yn(by, n),
      { onValueNodeHasChildrenChange: u } = a,
      d = i !== void 0,
      p = he(t, a.onValueNodeChange);
    return (
      Me(() => {
        u(d);
      }, [u, d]),
      c.jsx(ee.span, {
        ...l,
        ref: p,
        style: { pointerEvents: "none" },
        children: Qy(a.value) ? c.jsx(c.Fragment, { children: s }) : i,
      })
    );
  });
Ny.displayName = by;
var $k = "SelectIcon",
  ky = f.forwardRef((e, t) => {
    const { __scopeSelect: n, children: r, ...o } = e;
    return c.jsx(ee.span, {
      "aria-hidden": !0,
      ...o,
      ref: t,
      children: r || "▼",
    });
  });
ky.displayName = $k;
var Bk = "SelectPortal",
  Py = (e) => c.jsx(Rl, { asChild: !0, ...e });
Py.displayName = Bk;
var Er = "SelectContent",
  Ty = f.forwardRef((e, t) => {
    const n = Yn(Er, e.__scopeSelect),
      [r, o] = f.useState();
    if (
      (Me(() => {
        o(new DocumentFragment());
      }, []),
      !n.open)
    ) {
      const i = r;
      return i
        ? kr.createPortal(
            c.jsx(Ry, {
              scope: e.__scopeSelect,
              children: c.jsx(Hl.Slot, {
                scope: e.__scopeSelect,
                children: c.jsx("div", { children: e.children }),
              }),
            }),
            i
          )
        : null;
    }
    return c.jsx(jy, { ...e, ref: t });
  });
Ty.displayName = Er;
var Et = 10,
  [Ry, Xn] = _o(Er),
  Uk = "SelectContentImpl",
  Wk = wo("SelectContent.RemoveScroll"),
  jy = f.forwardRef((e, t) => {
    const {
        __scopeSelect: n,
        position: r = "item-aligned",
        onCloseAutoFocus: o,
        onEscapeKeyDown: i,
        onPointerDownOutside: s,
        side: l,
        sideOffset: a,
        align: u,
        alignOffset: d,
        arrowPadding: p,
        collisionBoundary: g,
        collisionPadding: m,
        sticky: S,
        hideWhenDetached: v,
        avoidCollisions: w,
        ...y
      } = e,
      h = Yn(Er, n),
      [x, C] = f.useState(null),
      [E, N] = f.useState(null),
      b = he(t, (L) => C(L)),
      [R, O] = f.useState(null),
      [_, $] = f.useState(null),
      I = Ql(n),
      [W, M] = f.useState(!1),
      H = f.useRef(!1);
    f.useEffect(() => {
      if (x) return Yg(x);
    }, [x]),
      $g();
    const z = f.useCallback(
        (L) => {
          const [se, ...Se] = I().map((ne) => ne.ref.current),
            [oe] = Se.slice(-1),
            J = document.activeElement;
          for (const ne of L)
            if (
              ne === J ||
              (ne == null || ne.scrollIntoView({ block: "nearest" }),
              ne === se && E && (E.scrollTop = 0),
              ne === oe && E && (E.scrollTop = E.scrollHeight),
              ne == null || ne.focus(),
              document.activeElement !== J)
            )
              return;
        },
        [I, E]
      ),
      U = f.useCallback(() => z([R, x]), [z, R, x]);
    f.useEffect(() => {
      W && U();
    }, [W, U]);
    const { onOpenChange: k, triggerPointerDownPosRef: T } = h;
    f.useEffect(() => {
      if (x) {
        let L = { x: 0, y: 0 };
        const se = (oe) => {
            var J, ne;
            L = {
              x: Math.abs(
                Math.round(oe.pageX) -
                  (((J = T.current) == null ? void 0 : J.x) ?? 0)
              ),
              y: Math.abs(
                Math.round(oe.pageY) -
                  (((ne = T.current) == null ? void 0 : ne.y) ?? 0)
              ),
            };
          },
          Se = (oe) => {
            L.x <= 10 && L.y <= 10
              ? oe.preventDefault()
              : x.contains(oe.target) || k(!1),
              document.removeEventListener("pointermove", se),
              (T.current = null);
          };
        return (
          T.current !== null &&
            (document.addEventListener("pointermove", se),
            document.addEventListener("pointerup", Se, {
              capture: !0,
              once: !0,
            })),
          () => {
            document.removeEventListener("pointermove", se),
              document.removeEventListener("pointerup", Se, { capture: !0 });
          }
        );
      }
    }, [x, k, T]),
      f.useEffect(() => {
        const L = () => k(!1);
        return (
          window.addEventListener("blur", L),
          window.addEventListener("resize", L),
          () => {
            window.removeEventListener("blur", L),
              window.removeEventListener("resize", L);
          }
        );
      }, [k]);
    const [D, V] = Ky((L) => {
        const se = I().filter((J) => !J.disabled),
          Se = se.find((J) => J.ref.current === document.activeElement),
          oe = Gy(se, L, Se);
        oe && setTimeout(() => oe.ref.current.focus());
      }),
      B = f.useCallback(
        (L, se, Se) => {
          const oe = !H.current && !Se;
          ((h.value !== void 0 && h.value === se) || oe) &&
            (O(L), oe && (H.current = !0));
        },
        [h.value]
      ),
      Y = f.useCallback(() => (x == null ? void 0 : x.focus()), [x]),
      Q = f.useCallback(
        (L, se, Se) => {
          const oe = !H.current && !Se;
          ((h.value !== void 0 && h.value === se) || oe) && $(L);
        },
        [h.value]
      ),
      ce = r === "popper" ? Ku : Oy,
      we =
        ce === Ku
          ? {
              side: l,
              sideOffset: a,
              align: u,
              alignOffset: d,
              arrowPadding: p,
              collisionBoundary: g,
              collisionPadding: m,
              sticky: S,
              hideWhenDetached: v,
              avoidCollisions: w,
            }
          : {};
    return c.jsx(Ry, {
      scope: n,
      content: x,
      viewport: E,
      onViewportChange: N,
      itemRefCallback: B,
      selectedItem: R,
      onItemLeave: Y,
      itemTextRefCallback: Q,
      focusSelectedItem: U,
      selectedItemText: _,
      position: r,
      isPositioned: W,
      searchRef: D,
      children: c.jsx(hd, {
        as: Wk,
        allowPinchZoom: !0,
        children: c.jsx(pd, {
          asChild: !0,
          trapped: h.open,
          onMountAutoFocus: (L) => {
            L.preventDefault();
          },
          onUnmountAutoFocus: q(o, (L) => {
            var se;
            (se = h.trigger) == null || se.focus({ preventScroll: !0 }),
              L.preventDefault();
          }),
          children: c.jsx(zi, {
            asChild: !0,
            disableOutsidePointerEvents: !0,
            onEscapeKeyDown: i,
            onPointerDownOutside: s,
            onFocusOutside: (L) => L.preventDefault(),
            onDismiss: () => h.onOpenChange(!1),
            children: c.jsx(ce, {
              role: "listbox",
              id: h.contentId,
              "data-state": h.open ? "open" : "closed",
              dir: h.dir,
              onContextMenu: (L) => L.preventDefault(),
              ...y,
              ...we,
              onPlaced: () => M(!0),
              ref: b,
              style: {
                display: "flex",
                flexDirection: "column",
                outline: "none",
                ...y.style,
              },
              onKeyDown: q(y.onKeyDown, (L) => {
                const se = L.ctrlKey || L.altKey || L.metaKey;
                if (
                  (L.key === "Tab" && L.preventDefault(),
                  !se && L.key.length === 1 && V(L.key),
                  ["ArrowUp", "ArrowDown", "Home", "End"].includes(L.key))
                ) {
                  let oe = I()
                    .filter((J) => !J.disabled)
                    .map((J) => J.ref.current);
                  if (
                    (["ArrowUp", "End"].includes(L.key) &&
                      (oe = oe.slice().reverse()),
                    ["ArrowUp", "ArrowDown"].includes(L.key))
                  ) {
                    const J = L.target,
                      ne = oe.indexOf(J);
                    oe = oe.slice(ne + 1);
                  }
                  setTimeout(() => z(oe)), L.preventDefault();
                }
              }),
            }),
          }),
        }),
      }),
    });
  });
jy.displayName = Uk;
var Vk = "SelectItemAlignedPosition",
  Oy = f.forwardRef((e, t) => {
    const { __scopeSelect: n, onPlaced: r, ...o } = e,
      i = Yn(Er, n),
      s = Xn(Er, n),
      [l, a] = f.useState(null),
      [u, d] = f.useState(null),
      p = he(t, (b) => d(b)),
      g = Ql(n),
      m = f.useRef(!1),
      S = f.useRef(!0),
      {
        viewport: v,
        selectedItem: w,
        selectedItemText: y,
        focusSelectedItem: h,
      } = s,
      x = f.useCallback(() => {
        if (i.trigger && i.valueNode && l && u && v && w && y) {
          const b = i.trigger.getBoundingClientRect(),
            R = u.getBoundingClientRect(),
            O = i.valueNode.getBoundingClientRect(),
            _ = y.getBoundingClientRect();
          if (i.dir !== "rtl") {
            const J = _.left - R.left,
              ne = O.left - J,
              Ie = b.left - ne,
              at = b.width + Ie,
              qn = Math.max(at, R.width),
              pn = window.innerWidth - Et,
              Zn = Op(ne, [Et, Math.max(Et, pn - qn)]);
            (l.style.minWidth = at + "px"), (l.style.left = Zn + "px");
          } else {
            const J = R.right - _.right,
              ne = window.innerWidth - O.right - J,
              Ie = window.innerWidth - b.right - ne,
              at = b.width + Ie,
              qn = Math.max(at, R.width),
              pn = window.innerWidth - Et,
              Zn = Op(ne, [Et, Math.max(Et, pn - qn)]);
            (l.style.minWidth = at + "px"), (l.style.right = Zn + "px");
          }
          const $ = g(),
            I = window.innerHeight - Et * 2,
            W = v.scrollHeight,
            M = window.getComputedStyle(u),
            H = parseInt(M.borderTopWidth, 10),
            z = parseInt(M.paddingTop, 10),
            U = parseInt(M.borderBottomWidth, 10),
            k = parseInt(M.paddingBottom, 10),
            T = H + z + W + k + U,
            D = Math.min(w.offsetHeight * 5, T),
            V = window.getComputedStyle(v),
            B = parseInt(V.paddingTop, 10),
            Y = parseInt(V.paddingBottom, 10),
            Q = b.top + b.height / 2 - Et,
            ce = I - Q,
            we = w.offsetHeight / 2,
            L = w.offsetTop + we,
            se = H + z + L,
            Se = T - se;
          if (se <= Q) {
            const J = $.length > 0 && w === $[$.length - 1].ref.current;
            l.style.bottom = "0px";
            const ne = u.clientHeight - v.offsetTop - v.offsetHeight,
              Ie = Math.max(ce, we + (J ? Y : 0) + ne + U),
              at = se + Ie;
            l.style.height = at + "px";
          } else {
            const J = $.length > 0 && w === $[0].ref.current;
            l.style.top = "0px";
            const Ie = Math.max(Q, H + v.offsetTop + (J ? B : 0) + we) + Se;
            (l.style.height = Ie + "px"), (v.scrollTop = se - Q + v.offsetTop);
          }
          (l.style.margin = `${Et}px 0`),
            (l.style.minHeight = D + "px"),
            (l.style.maxHeight = I + "px"),
            r == null || r(),
            requestAnimationFrame(() => (m.current = !0));
        }
      }, [g, i.trigger, i.valueNode, l, u, v, w, y, i.dir, r]);
    Me(() => x(), [x]);
    const [C, E] = f.useState();
    Me(() => {
      u && E(window.getComputedStyle(u).zIndex);
    }, [u]);
    const N = f.useCallback(
      (b) => {
        b && S.current === !0 && (x(), h == null || h(), (S.current = !1));
      },
      [x, h]
    );
    return c.jsx(Qk, {
      scope: n,
      contentWrapper: l,
      shouldExpandOnScrollRef: m,
      onScrollButtonChange: N,
      children: c.jsx("div", {
        ref: a,
        style: {
          display: "flex",
          flexDirection: "column",
          position: "fixed",
          zIndex: C,
        },
        children: c.jsx(ee.div, {
          ...o,
          ref: p,
          style: { boxSizing: "border-box", maxHeight: "100%", ...o.style },
        }),
      }),
    });
  });
Oy.displayName = Vk;
var Hk = "SelectPopperPosition",
  Ku = f.forwardRef((e, t) => {
    const {
        __scopeSelect: n,
        align: r = "start",
        collisionPadding: o = Et,
        ...i
      } = e,
      s = Kl(n);
    return c.jsx(dg, {
      ...s,
      ...i,
      ref: t,
      align: r,
      collisionPadding: o,
      style: {
        boxSizing: "border-box",
        ...i.style,
        "--radix-select-content-transform-origin":
          "var(--radix-popper-transform-origin)",
        "--radix-select-content-available-width":
          "var(--radix-popper-available-width)",
        "--radix-select-content-available-height":
          "var(--radix-popper-available-height)",
        "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
        "--radix-select-trigger-height": "var(--radix-popper-anchor-height)",
      },
    });
  });
Ku.displayName = Hk;
var [Qk, yd] = _o(Er, {}),
  Gu = "SelectViewport",
  _y = f.forwardRef((e, t) => {
    const { __scopeSelect: n, nonce: r, ...o } = e,
      i = Xn(Gu, n),
      s = yd(Gu, n),
      l = he(t, i.onViewportChange),
      a = f.useRef(0);
    return c.jsxs(c.Fragment, {
      children: [
        c.jsx("style", {
          dangerouslySetInnerHTML: {
            __html:
              "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}",
          },
          nonce: r,
        }),
        c.jsx(Hl.Slot, {
          scope: n,
          children: c.jsx(ee.div, {
            "data-radix-select-viewport": "",
            role: "presentation",
            ...o,
            ref: l,
            style: {
              position: "relative",
              flex: 1,
              overflow: "hidden auto",
              ...o.style,
            },
            onScroll: q(o.onScroll, (u) => {
              const d = u.currentTarget,
                { contentWrapper: p, shouldExpandOnScrollRef: g } = s;
              if (g != null && g.current && p) {
                const m = Math.abs(a.current - d.scrollTop);
                if (m > 0) {
                  const S = window.innerHeight - Et * 2,
                    v = parseFloat(p.style.minHeight),
                    w = parseFloat(p.style.height),
                    y = Math.max(v, w);
                  if (y < S) {
                    const h = y + m,
                      x = Math.min(S, h),
                      C = h - x;
                    (p.style.height = x + "px"),
                      p.style.bottom === "0px" &&
                        ((d.scrollTop = C > 0 ? C : 0),
                        (p.style.justifyContent = "flex-end"));
                  }
                }
              }
              a.current = d.scrollTop;
            }),
          }),
        }),
      ],
    });
  });
_y.displayName = Gu;
var Ay = "SelectGroup",
  [Kk, Gk] = _o(Ay),
  Yk = f.forwardRef((e, t) => {
    const { __scopeSelect: n, ...r } = e,
      o = to();
    return c.jsx(Kk, {
      scope: n,
      id: o,
      children: c.jsx(ee.div, {
        role: "group",
        "aria-labelledby": o,
        ...r,
        ref: t,
      }),
    });
  });
Yk.displayName = Ay;
var My = "SelectLabel",
  Iy = f.forwardRef((e, t) => {
    const { __scopeSelect: n, ...r } = e,
      o = Gk(My, n);
    return c.jsx(ee.div, { id: o.id, ...r, ref: t });
  });
Iy.displayName = My;
var fl = "SelectItem",
  [Xk, Dy] = _o(fl),
  Ly = f.forwardRef((e, t) => {
    const {
        __scopeSelect: n,
        value: r,
        disabled: o = !1,
        textValue: i,
        ...s
      } = e,
      l = Yn(fl, n),
      a = Xn(fl, n),
      u = l.value === r,
      [d, p] = f.useState(i ?? ""),
      [g, m] = f.useState(!1),
      S = he(t, (h) => {
        var x;
        return (x = a.itemRefCallback) == null ? void 0 : x.call(a, h, r, o);
      }),
      v = to(),
      w = f.useRef("touch"),
      y = () => {
        o || (l.onValueChange(r), l.onOpenChange(!1));
      };
    if (r === "")
      throw new Error(
        "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
      );
    return c.jsx(Xk, {
      scope: n,
      value: r,
      disabled: o,
      textId: v,
      isSelected: u,
      onItemTextChange: f.useCallback((h) => {
        p((x) => x || ((h == null ? void 0 : h.textContent) ?? "").trim());
      }, []),
      children: c.jsx(Hl.ItemSlot, {
        scope: n,
        value: r,
        disabled: o,
        textValue: d,
        children: c.jsx(ee.div, {
          role: "option",
          "aria-labelledby": v,
          "data-highlighted": g ? "" : void 0,
          "aria-selected": u && g,
          "data-state": u ? "checked" : "unchecked",
          "aria-disabled": o || void 0,
          "data-disabled": o ? "" : void 0,
          tabIndex: o ? void 0 : -1,
          ...s,
          ref: S,
          onFocus: q(s.onFocus, () => m(!0)),
          onBlur: q(s.onBlur, () => m(!1)),
          onClick: q(s.onClick, () => {
            w.current !== "mouse" && y();
          }),
          onPointerUp: q(s.onPointerUp, () => {
            w.current === "mouse" && y();
          }),
          onPointerDown: q(s.onPointerDown, (h) => {
            w.current = h.pointerType;
          }),
          onPointerMove: q(s.onPointerMove, (h) => {
            var x;
            (w.current = h.pointerType),
              o
                ? (x = a.onItemLeave) == null || x.call(a)
                : w.current === "mouse" &&
                  h.currentTarget.focus({ preventScroll: !0 });
          }),
          onPointerLeave: q(s.onPointerLeave, (h) => {
            var x;
            h.currentTarget === document.activeElement &&
              ((x = a.onItemLeave) == null || x.call(a));
          }),
          onKeyDown: q(s.onKeyDown, (h) => {
            var C;
            (((C = a.searchRef) == null ? void 0 : C.current) !== "" &&
              h.key === " ") ||
              (Ik.includes(h.key) && y(), h.key === " " && h.preventDefault());
          }),
        }),
      }),
    });
  });
Ly.displayName = fl;
var Xo = "SelectItemText",
  Fy = f.forwardRef((e, t) => {
    const { __scopeSelect: n, className: r, style: o, ...i } = e,
      s = Yn(Xo, n),
      l = Xn(Xo, n),
      a = Dy(Xo, n),
      u = zk(Xo, n),
      [d, p] = f.useState(null),
      g = he(
        t,
        (y) => p(y),
        a.onItemTextChange,
        (y) => {
          var h;
          return (h = l.itemTextRefCallback) == null
            ? void 0
            : h.call(l, y, a.value, a.disabled);
        }
      ),
      m = d == null ? void 0 : d.textContent,
      S = f.useMemo(
        () =>
          c.jsx(
            "option",
            { value: a.value, disabled: a.disabled, children: m },
            a.value
          ),
        [a.disabled, a.value, m]
      ),
      { onNativeOptionAdd: v, onNativeOptionRemove: w } = u;
    return (
      Me(() => (v(S), () => w(S)), [v, w, S]),
      c.jsxs(c.Fragment, {
        children: [
          c.jsx(ee.span, { id: a.textId, ...i, ref: g }),
          a.isSelected && s.valueNode && !s.valueNodeHasChildren
            ? kr.createPortal(i.children, s.valueNode)
            : null,
        ],
      })
    );
  });
Fy.displayName = Xo;
var zy = "SelectItemIndicator",
  $y = f.forwardRef((e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return Dy(zy, n).isSelected
      ? c.jsx(ee.span, { "aria-hidden": !0, ...r, ref: t })
      : null;
  });
$y.displayName = zy;
var Yu = "SelectScrollUpButton",
  By = f.forwardRef((e, t) => {
    const n = Xn(Yu, e.__scopeSelect),
      r = yd(Yu, e.__scopeSelect),
      [o, i] = f.useState(!1),
      s = he(t, r.onScrollButtonChange);
    return (
      Me(() => {
        if (n.viewport && n.isPositioned) {
          let l = function () {
            const u = a.scrollTop > 0;
            i(u);
          };
          const a = n.viewport;
          return (
            l(),
            a.addEventListener("scroll", l),
            () => a.removeEventListener("scroll", l)
          );
        }
      }, [n.viewport, n.isPositioned]),
      o
        ? c.jsx(Wy, {
            ...e,
            ref: s,
            onAutoScroll: () => {
              const { viewport: l, selectedItem: a } = n;
              l && a && (l.scrollTop = l.scrollTop - a.offsetHeight);
            },
          })
        : null
    );
  });
By.displayName = Yu;
var Xu = "SelectScrollDownButton",
  Uy = f.forwardRef((e, t) => {
    const n = Xn(Xu, e.__scopeSelect),
      r = yd(Xu, e.__scopeSelect),
      [o, i] = f.useState(!1),
      s = he(t, r.onScrollButtonChange);
    return (
      Me(() => {
        if (n.viewport && n.isPositioned) {
          let l = function () {
            const u = a.scrollHeight - a.clientHeight,
              d = Math.ceil(a.scrollTop) < u;
            i(d);
          };
          const a = n.viewport;
          return (
            l(),
            a.addEventListener("scroll", l),
            () => a.removeEventListener("scroll", l)
          );
        }
      }, [n.viewport, n.isPositioned]),
      o
        ? c.jsx(Wy, {
            ...e,
            ref: s,
            onAutoScroll: () => {
              const { viewport: l, selectedItem: a } = n;
              l && a && (l.scrollTop = l.scrollTop + a.offsetHeight);
            },
          })
        : null
    );
  });
Uy.displayName = Xu;
var Wy = f.forwardRef((e, t) => {
    const { __scopeSelect: n, onAutoScroll: r, ...o } = e,
      i = Xn("SelectScrollButton", n),
      s = f.useRef(null),
      l = Ql(n),
      a = f.useCallback(() => {
        s.current !== null &&
          (window.clearInterval(s.current), (s.current = null));
      }, []);
    return (
      f.useEffect(() => () => a(), [a]),
      Me(() => {
        var d;
        const u = l().find((p) => p.ref.current === document.activeElement);
        (d = u == null ? void 0 : u.ref.current) == null ||
          d.scrollIntoView({ block: "nearest" });
      }, [l]),
      c.jsx(ee.div, {
        "aria-hidden": !0,
        ...o,
        ref: t,
        style: { flexShrink: 0, ...o.style },
        onPointerDown: q(o.onPointerDown, () => {
          s.current === null && (s.current = window.setInterval(r, 50));
        }),
        onPointerMove: q(o.onPointerMove, () => {
          var u;
          (u = i.onItemLeave) == null || u.call(i),
            s.current === null && (s.current = window.setInterval(r, 50));
        }),
        onPointerLeave: q(o.onPointerLeave, () => {
          a();
        }),
      })
    );
  }),
  qk = "SelectSeparator",
  Vy = f.forwardRef((e, t) => {
    const { __scopeSelect: n, ...r } = e;
    return c.jsx(ee.div, { "aria-hidden": !0, ...r, ref: t });
  });
Vy.displayName = qk;
var qu = "SelectArrow",
  Zk = f.forwardRef((e, t) => {
    const { __scopeSelect: n, ...r } = e,
      o = Kl(n),
      i = Yn(qu, n),
      s = Xn(qu, n);
    return i.open && s.position === "popper"
      ? c.jsx(fg, { ...o, ...r, ref: t })
      : null;
  });
Zk.displayName = qu;
var Jk = "SelectBubbleInput",
  Hy = f.forwardRef(({ __scopeSelect: e, value: t, ...n }, r) => {
    const o = f.useRef(null),
      i = he(r, o),
      s = Ak(t);
    return (
      f.useEffect(() => {
        const l = o.current;
        if (!l) return;
        const a = window.HTMLSelectElement.prototype,
          d = Object.getOwnPropertyDescriptor(a, "value").set;
        if (s !== t && d) {
          const p = new Event("change", { bubbles: !0 });
          d.call(l, t), l.dispatchEvent(p);
        }
      }, [s, t]),
      c.jsx(ee.select, {
        ...n,
        style: { ...av, ...n.style },
        ref: i,
        defaultValue: t,
      })
    );
  });
Hy.displayName = Jk;
function Qy(e) {
  return e === "" || e === void 0;
}
function Ky(e) {
  const t = At(e),
    n = f.useRef(""),
    r = f.useRef(0),
    o = f.useCallback(
      (s) => {
        const l = n.current + s;
        t(l),
          (function a(u) {
            (n.current = u),
              window.clearTimeout(r.current),
              u !== "" && (r.current = window.setTimeout(() => a(""), 1e3));
          })(l);
      },
      [t]
    ),
    i = f.useCallback(() => {
      (n.current = ""), window.clearTimeout(r.current);
    }, []);
  return f.useEffect(() => () => window.clearTimeout(r.current), []), [n, o, i];
}
function Gy(e, t, n) {
  const o = t.length > 1 && Array.from(t).every((u) => u === t[0]) ? t[0] : t,
    i = n ? e.indexOf(n) : -1;
  let s = eP(e, Math.max(i, 0));
  o.length === 1 && (s = s.filter((u) => u !== n));
  const a = s.find((u) =>
    u.textValue.toLowerCase().startsWith(o.toLowerCase())
  );
  return a !== n ? a : void 0;
}
function eP(e, t) {
  return e.map((n, r) => e[(t + r) % e.length]);
}
var tP = Sy,
  Yy = Ey,
  nP = Ny,
  rP = ky,
  oP = Py,
  Xy = Ty,
  iP = _y,
  qy = Iy,
  Zy = Ly,
  sP = Fy,
  lP = $y,
  Jy = By,
  e0 = Uy,
  t0 = Vy;
const aP = tP,
  uP = nP,
  n0 = f.forwardRef(({ className: e, children: t, ...n }, r) =>
    c.jsxs(Yy, {
      ref: r,
      className: ie(
        "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
        e
      ),
      ...n,
      children: [
        t,
        c.jsx(rP, {
          asChild: !0,
          children: c.jsx(Ov, { className: "h-4 w-4 opacity-50" }),
        }),
      ],
    })
  );
n0.displayName = Yy.displayName;
const r0 = f.forwardRef(({ className: e, ...t }, n) =>
  c.jsx(Jy, {
    ref: n,
    className: ie("flex cursor-default items-center justify-center py-1", e),
    ...t,
    children: c.jsx(Q1, { className: "h-4 w-4" }),
  })
);
r0.displayName = Jy.displayName;
const o0 = f.forwardRef(({ className: e, ...t }, n) =>
  c.jsx(e0, {
    ref: n,
    className: ie("flex cursor-default items-center justify-center py-1", e),
    ...t,
    children: c.jsx(Ov, { className: "h-4 w-4" }),
  })
);
o0.displayName = e0.displayName;
const i0 = f.forwardRef(
  ({ className: e, children: t, position: n = "popper", ...r }, o) =>
    c.jsx(oP, {
      children: c.jsxs(Xy, {
        ref: o,
        className: ie(
          "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
          n === "popper" &&
            "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
          e
        ),
        position: n,
        ...r,
        children: [
          c.jsx(r0, {}),
          c.jsx(iP, {
            className: ie(
              "p-1",
              n === "popper" &&
                "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
            ),
            children: t,
          }),
          c.jsx(o0, {}),
        ],
      }),
    })
);
i0.displayName = Xy.displayName;
const cP = f.forwardRef(({ className: e, ...t }, n) =>
  c.jsx(qy, {
    ref: n,
    className: ie("py-1.5 pl-8 pr-2 text-sm font-semibold", e),
    ...t,
  })
);
cP.displayName = qy.displayName;
const qo = f.forwardRef(({ className: e, children: t, ...n }, r) =>
  c.jsxs(Zy, {
    ref: r,
    className: ie(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
      e
    ),
    ...n,
    children: [
      c.jsx("span", {
        className:
          "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
        children: c.jsx(lP, { children: c.jsx(H1, { className: "h-4 w-4" }) }),
      }),
      c.jsx(sP, { children: t }),
    ],
  })
);
qo.displayName = Zy.displayName;
const dP = f.forwardRef(({ className: e, ...t }, n) =>
  c.jsx(t0, { ref: n, className: ie("-mx-1 my-1 h-px bg-muted", e), ...t })
);
dP.displayName = t0.displayName;
const s0 = f.forwardRef(({ className: e, ...t }, n) =>
  c.jsx("textarea", {
    className: ie(
      "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      e
    ),
    ref: n,
    ...t,
  })
);
s0.displayName = "Textarea";
const Gl = ({ open: e, onOpenChange: t }) => {
    const [n, r] = f.useState({
        name: "",
        phone: "",
        service: "",
        address: "",
      }),
      o = async (i) => {
        i.preventDefault();
        try {
          const payload = {
            name: n.name,
            phone: n.phone,
            service: n.service,
            address: n.address,
          };
          const res = await fetch("/api/book", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
          });
          if (!res.ok) throw new Error(`Server responded with ${res.status}`);
          // Try to parse optional redirect URL from server response
          let redirectTo = "/";
          try {
            const json = await res.json();
            if (json && json.redirectUrl) redirectTo = json.redirectUrl;
          } catch (e) {
            // ignore parse errors, use default redirect
          }
          // Clear form and close modal, then redirect
          r({ name: "", phone: "", service: "", address: "" });
          t(!1);
          try {
            window.location.href = redirectTo;
          } catch (e) {
            console.error("Redirect failed", e);
          }
          tC.success("Booking request submitted! We'll contact you shortly.");
        } catch (err) {
          console.error(err);
          // Clear form and close modal before opening WhatsApp
          try {
            r({ name: "", phone: "", service: "", address: "" });
            t(!1);
          } catch (e3) {
            console.error(e3);
          }
          try {
            tC.info("Opening WhatsApp to contact us.");
          } catch {}
          try {
            const whatsappNumber = "7856066176";
            const msg = `*New Service Booking Request*\n\nName: ${n.name}\nPhone: ${n.phone}\nService: ${n.service}\nAddress: ${n.address}`;
            const url =
              "https://wa.me/" +
              whatsappNumber +
              "?text=" +
              encodeURIComponent(msg);
            window.open(url, "_blank");
          } catch (e2) {
            console.error(e2);
          }
        }
      };
    return c.jsx(kk, {
      open: e,
      onOpenChange: t,
      children: c.jsxs(vy, {
        className: "sm:max-w-md rounded-3xl p-8 border-none shadow-2xl",
        children: [
          c.jsx(gy, {
            children: c.jsx(yy, {
              className: "text-2xl font-semibold text-center mb-6",
              children: "Book a Service",
            }),
          }),
          c.jsxs("form", {
            onSubmit: o,
            className: "space-y-5",
            children: [
              c.jsxs("div", {
                className: "space-y-2",
                children: [
                  c.jsx(Yo, {
                    htmlFor: "name",
                    className: "text-sm font-medium",
                    children: "Your Name",
                  }),
                  c.jsx(Qu, {
                    id: "name",
                    placeholder: "Enter your name",
                    value: n.name,
                    onChange: (i) => r({ ...n, name: i.target.value }),
                    required: !0,
                    className: "h-11 rounded-xl",
                  }),
                ],
              }),
              c.jsxs("div", {
                className: "space-y-2",
                children: [
                  c.jsx(Yo, {
                    htmlFor: "phone",
                    className: "text-sm font-medium",
                    children: "Phone Number",
                  }),
                  c.jsx(Qu, {
                    id: "phone",
                    type: "tel",
                    placeholder: "Enter your phone number",
                    value: n.phone,
                    onChange: (i) => r({ ...n, phone: i.target.value }),
                    required: !0,
                    className: "h-11 rounded-xl",
                  }),
                ],
              }),
              c.jsxs("div", {
                className: "space-y-2",
                children: [
                  c.jsx(Yo, {
                    htmlFor: "service",
                    className: "text-sm font-medium",
                    children: "Select Service",
                  }),
                  c.jsxs(aP, {
                    value: n.service,
                    onValueChange: (i) => r({ ...n, service: i }),
                    required: !0,
                    children: [
                      c.jsx(n0, {
                        className: "h-11 rounded-xl",
                        children: c.jsx(uP, {
                          placeholder: "Choose a service",
                        }),
                      }),
                      c.jsxs(i0, {
                        children: [
                          c.jsx(qo, {
                            value: "deep-cleaning",
                            children: "AC Deep Cleaning",
                          }),
                          c.jsx(qo, {
                            value: "maintenance",
                            children: "AC Maintenance",
                          }),
                          c.jsx(qo, { value: "repair", children: "AC Repair" }),
                          c.jsx(qo, {
                            value: "installation",
                            children: "AC Installation",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              c.jsxs("div", {
                className: "space-y-2",
                children: [
                  c.jsx(Yo, {
                    htmlFor: "address",
                    className: "text-sm font-medium",
                    children: "Service Address",
                  }),
                  c.jsx(s0, {
                    id: "address",
                    placeholder: "Enter your complete address",
                    value: n.address,
                    onChange: (i) => r({ ...n, address: i.target.value }),
                    required: !0,
                    className: "rounded-xl min-h-[80px] resize-none",
                  }),
                ],
              }),
              c.jsx(on, {
                type: "submit",
                className: "w-full h-12 rounded-xl text-base font-medium mt-6",
                children: "Submit Request",
              }),
            ],
          }),
        ],
      }),
    });
  },
  fP = () => {
    const [e, t] = f.useState(!1),
      [n, r] = f.useState(!1),
      o = (i, s) => {
        i.preventDefault();
        const l = document.querySelector(s);
        l && l.scrollIntoView({ behavior: "smooth", block: "start" }), r(!1);
      };
    return c.jsxs(c.Fragment, {
      children: [
        c.jsx("nav", {
          className: "border-b border-border bg-background sticky top-0 z-50",
          children: c.jsxs("div", {
            className: "container mx-auto px-6 lg:px-12",
            children: [
              c.jsxs("div", {
                className: "flex h-20 items-center justify-between",
                children: [
                  c.jsx("div", {
                    className: "flex items-center",
                    children: c.jsx("h1", {
                      className: "text-xl text-foreground tracking-tight",
                      children: "Ac Fridge Care.in",
                    }),
                  }),
                  c.jsxs("div", {
                    className:
                      "hidden lg:flex absolute left-1/2 transform -translate-x-1/2 items-center gap-8",
                    children: [
                      c.jsx("a", {
                        href: "#services",
                        onClick: (i) => o(i, "#services"),
                        className:
                          "text-sm text-foreground hover:text-primary transition-colors cursor-pointer",
                        children: "Services",
                      }),
                      c.jsx("a", {
                        href: "#about",
                        onClick: (i) => o(i, "#about"),
                        className:
                          "text-sm text-foreground hover:text-primary transition-colors cursor-pointer",
                        children: "About",
                      }),
                      c.jsx("a", {
                        href: "#contact",
                        onClick: (i) => o(i, "#contact"),
                        className:
                          "text-sm text-foreground hover:text-primary transition-colors cursor-pointer",
                        children: "Contact",
                      }),
                    ],
                  }),
                  c.jsx("div", {
                    className: "hidden lg:flex items-center",
                    children: c.jsx(on, {
                      onClick: () => t(!0),
                      className: "rounded-2xl px-8 h-11",
                      children: "Book a Service",
                    }),
                  }),
                  c.jsx("button", {
                    onClick: () => r(!n),
                    className:
                      "lg:hidden text-foreground hover:text-primary transition-colors p-2",
                    "aria-label": "Toggle menu",
                    children: n
                      ? c.jsx(qc, { className: "h-6 w-6" })
                      : c.jsx(X1, { className: "h-6 w-6" }),
                  }),
                ],
              }),
              n &&
                c.jsx("div", {
                  className: "lg:hidden py-6 border-t border-border",
                  children: c.jsxs("div", {
                    className: "flex flex-col space-y-4",
                    children: [
                      c.jsx("a", {
                        href: "#services",
                        onClick: (i) => o(i, "#services"),
                        className:
                          "text-sm text-foreground hover:text-primary transition-colors cursor-pointer py-2",
                        children: "Services",
                      }),
                      c.jsx("a", {
                        href: "#about",
                        onClick: (i) => o(i, "#about"),
                        className:
                          "text-sm text-foreground hover:text-primary transition-colors cursor-pointer py-2",
                        children: "About",
                      }),
                      c.jsx("a", {
                        href: "#contact",
                        onClick: (i) => o(i, "#contact"),
                        className:
                          "text-sm text-foreground hover:text-primary transition-colors cursor-pointer py-2",
                        children: "Contact",
                      }),
                      c.jsx(on, {
                        onClick: () => {
                          t(!0), r(!1);
                        },
                        className: "rounded-2xl px-8 h-11 w-full",
                        children: "Book a Service",
                      }),
                    ],
                  }),
                }),
            ],
          }),
        }),
        c.jsx(Gl, { open: e, onOpenChange: t }),
      ],
    });
  },
  pP = "/assets/hero-service-C6PyzeBi.jpg",
  xd = "/assets/ac-service-BAMRU9wP.jpg",
  wd = "/assets/fridge-service-DPGxSsWh.jpg",
  hP = "/assets/ro-service-Bnbl7AgE.jpg",
  mP = () => {
    const [e, t] = f.useState(!1);
    return c.jsxs(c.Fragment, {
      children: [
        c.jsx("section", {
          className: "bg-background py-20 lg:py-28",
          children: c.jsx("div", {
            className: "container mx-auto px-6 lg:px-12",
            children: c.jsxs("div", {
              className: "grid lg:grid-cols-2 gap-16 lg:gap-24 items-center",
              children: [
                c.jsxs("div", {
                  className: "space-y-8 max-w-xl",
                  children: [
                    c.jsxs("div", {
                      className: "space-y-6",
                      children: [
                        c.jsx("h1", {
                          className:
                            "text-5xl lg:text-6xl xl:text-7xl text-foreground leading-[1.1] tracking-tight",
                          children: "Your AC's Care, Done Right.",
                        }),
                        c.jsx("p", {
                          className:
                            "text-lg text-muted-foreground leading-relaxed",
                          children:
                            "Professional AC maintenance and deep cleaning you can trust.",
                        }),
                      ],
                    }),
                    c.jsx(on, {
                      onClick: () => t(!0),
                      size: "lg",
                      className: "rounded-full px-10 h-14 text-base",
                      children: "Book a Service",
                    }),
                  ],
                }),
                c.jsx("div", {
                  className: "relative",
                  children: c.jsxs("div", {
                    className: "grid grid-cols-2 gap-4",
                    children: [
                      c.jsx("div", {
                        className: "col-span-1 row-span-2",
                        children: c.jsx("div", {
                          className:
                            "rounded-3xl overflow-hidden h-full shadow-lg",
                          children: c.jsx("img", {
                            src: pP,
                            alt: "AC maintenance professional at work",
                            className: "w-full h-full object-cover",
                          }),
                        }),
                      }),
                      c.jsx("div", {
                        className: "rounded-3xl overflow-hidden shadow-lg h-48",
                        children: c.jsx("img", {
                          src: xd,
                          alt: "Modern AC unit",
                          className: "w-full h-full object-cover",
                        }),
                      }),
                      c.jsx("div", {
                        className: "rounded-3xl overflow-hidden shadow-lg h-48",
                        children: c.jsx("img", {
                          src: wd,
                          alt: "Clean AC filter",
                          className: "w-full h-full object-cover",
                        }),
                      }),
                      c.jsx("div", {
                        className: "rounded-3xl overflow-hidden shadow-lg h-40",
                        children: c.jsx("img", {
                          src: hP,
                          alt: "AC tools and equipment",
                          className: "w-full h-full object-cover",
                        }),
                      }),
                      c.jsx("div", {
                        className:
                          "rounded-3xl overflow-hidden shadow-lg h-40 bg-primary flex items-center justify-center",
                        children: c.jsxs("div", {
                          className: "text-center text-primary-foreground p-6",
                          children: [
                            c.jsx("div", {
                              className: "text-4xl mb-1",
                              children: "100+",
                            }),
                            c.jsx("div", {
                              className: "text-sm",
                              children: "Happy Clients",
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                }),
              ],
            }),
          }),
        }),
        c.jsx(Gl, { open: e, onOpenChange: t }),
      ],
    });
  },
  vP = () =>
    c.jsx("section", {
      className: "bg-secondary py-20 lg:py-28",
      children: c.jsx("div", {
        className: "container mx-auto px-6 lg:px-12",
        children: c.jsxs("div", {
          className: "max-w-5xl mx-auto",
          children: [
            c.jsxs("div", {
              className: "text-center mb-16 space-y-4",
              children: [
                c.jsx("h2", {
                  className:
                    "text-4xl lg:text-5xl text-foreground tracking-tight",
                  children: "About Ac Fridge Care.in Refresh Studio",
                }),
                c.jsx("p", {
                  className:
                    "text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed",
                  children:
                    "We bring precision and care to every AC service. Our goal is simple — keep your cooling clean, efficient, and worry-free.",
                }),
              ],
            }),
            c.jsxs("div", {
              className: "grid md:grid-cols-3 gap-8 lg:gap-12",
              children: [
                c.jsxs("div", {
                  className: "text-center space-y-4",
                  children: [
                    c.jsx("div", {
                      className:
                        "inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-background shadow-sm",
                      children: c.jsx(J1, {
                        className: "h-8 w-8 text-primary",
                      }),
                    }),
                    c.jsxs("div", {
                      className: "space-y-2",
                      children: [
                        c.jsx("h3", {
                          className: "text-xl text-foreground",
                          children: "Thorough Cleaning",
                        }),
                        c.jsx("p", {
                          className:
                            "text-sm text-muted-foreground leading-relaxed",
                          children:
                            "Deep cleaning that restores your AC's efficiency and air quality.",
                        }),
                      ],
                    }),
                  ],
                }),
                c.jsxs("div", {
                  className: "text-center space-y-4",
                  children: [
                    c.jsx("div", {
                      className:
                        "inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-background shadow-sm",
                      children: c.jsx(Z1, {
                        className: "h-8 w-8 text-primary",
                      }),
                    }),
                    c.jsxs("div", {
                      className: "space-y-2",
                      children: [
                        c.jsx("h3", {
                          className: "text-xl text-foreground",
                          children: "Trusted Experts",
                        }),
                        c.jsx("p", {
                          className:
                            "text-sm text-muted-foreground leading-relaxed",
                          children:
                            "Certified technicians with years of experience you can rely on.",
                        }),
                      ],
                    }),
                  ],
                }),
                c.jsxs("div", {
                  className: "text-center space-y-4",
                  children: [
                    c.jsx("div", {
                      className:
                        "inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-background shadow-sm",
                      children: c.jsx(G1, {
                        className: "h-8 w-8 text-primary",
                      }),
                    }),
                    c.jsxs("div", {
                      className: "space-y-2",
                      children: [
                        c.jsx("h3", {
                          className: "text-xl text-foreground",
                          children: "Fast Service",
                        }),
                        c.jsx("p", {
                          className:
                            "text-sm text-muted-foreground leading-relaxed",
                          children:
                            "Quick, efficient service that fits your schedule perfectly.",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            c.jsx("div", {
              className: "mt-16 flex justify-center",
              children: c.jsx("div", {
                className: "w-32 h-1 bg-primary/20 rounded-full",
              }),
            }),
          ],
        }),
      }),
    }),
  Oi = f.forwardRef(({ className: e, ...t }, n) =>
    c.jsx("div", {
      ref: n,
      className: ie(
        "rounded-lg border bg-card text-card-foreground shadow-sm",
        e
      ),
      ...t,
    })
  );
Oi.displayName = "Card";
const gP = f.forwardRef(({ className: e, ...t }, n) =>
  c.jsx("div", {
    ref: n,
    className: ie("flex flex-col space-y-1.5 p-6", e),
    ...t,
  })
);
gP.displayName = "CardHeader";
const yP = f.forwardRef(({ className: e, ...t }, n) =>
  c.jsx("h3", {
    ref: n,
    className: ie("text-2xl font-semibold leading-none tracking-tight", e),
    ...t,
  })
);
yP.displayName = "CardTitle";
const xP = f.forwardRef(({ className: e, ...t }, n) =>
  c.jsx("p", {
    ref: n,
    className: ie("text-sm text-muted-foreground", e),
    ...t,
  })
);
xP.displayName = "CardDescription";
const wP = f.forwardRef(({ className: e, ...t }, n) =>
  c.jsx("div", { ref: n, className: ie("p-6 pt-0", e), ...t })
);
wP.displayName = "CardContent";
const SP = f.forwardRef(({ className: e, ...t }, n) =>
  c.jsx("div", { ref: n, className: ie("flex items-center p-6 pt-0", e), ...t })
);
SP.displayName = "CardFooter";
const l0 = "/assets/washingmachine-BIYxpe1V.png",
  a0 = "/assets/microwaveoven-CtKGQam5.jpg",
  CP = [
    {
      id: 1,
      title: "Washing Machine",
      description:
        "Expert repair and maintenance for all types of washing machines.",
      image: l0,
      slug: "washing-machine",
    },
    {
      id: 2,
      title: "Microwave Oven",
      description: "Professional servicing and repairs for microwave ovens.",
      image: a0,
      slug: "microwave",
    },
    {
      id: 3,
      title: "Refrigerator",
      description: "Comprehensive cooling solutions and refrigerator repairs.",
      image: wd,
      slug: "refrigerator",
    },
    {
      id: 4,
      title: "Air Conditioner",
      description:
        "Complete AC services including cleaning, maintenance, and repair.",
      image: xd,
      slug: "ac",
    },
  ],
  EP = () => {
    const [e, t] = f.useState(!1),
      n = Dg();
    return c.jsxs(c.Fragment, {
      children: [
        c.jsx("section", {
          className: "py-20 lg:py-28 bg-background",
          children: c.jsxs("div", {
            className: "container mx-auto px-6 lg:px-12",
            children: [
              c.jsxs("div", {
                className: "text-center mb-16 space-y-4",
                children: [
                  c.jsx("h2", {
                    className:
                      "text-4xl lg:text-5xl text-foreground tracking-tight",
                    children: "Our Services",
                  }),
                  c.jsx("p", {
                    className:
                      "text-lg text-muted-foreground max-w-2xl mx-auto",
                    children:
                      "Professional appliance care tailored to your needs.",
                  }),
                ],
              }),
              c.jsx("div", {
                className:
                  "grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto",
                children: CP.map((r) =>
                  c.jsxs(
                    Oi,
                    {
                      onClick: () => n(`/service/${r.slug}`),
                      className:
                        "overflow-hidden border border-border hover:shadow-xl transition-all duration-300 rounded-3xl group bg-card cursor-pointer",
                      children: [
                        c.jsx("div", {
                          className:
                            "relative h-64 overflow-hidden bg-secondary",
                          children: c.jsx("img", {
                            src: r.image,
                            alt: r.title,
                            className:
                              "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500",
                          }),
                        }),
                        c.jsxs("div", {
                          className: "p-8 space-y-6",
                          children: [
                            c.jsxs("div", {
                              className: "space-y-3",
                              children: [
                                c.jsx("h3", {
                                  className: "text-xl text-foreground",
                                  children: r.title,
                                }),
                                c.jsx("p", {
                                  className:
                                    "text-sm text-muted-foreground leading-relaxed",
                                  children: r.description,
                                }),
                              ],
                            }),
                            c.jsx(on, {
                              onClick: (o) => {
                                o.stopPropagation(), t(!0);
                              },
                              className: "w-full rounded-full h-11",
                              children: "Book Service",
                            }),
                          ],
                        }),
                      ],
                    },
                    r.id
                  )
                ),
              }),
            ],
          }),
        }),
        c.jsx(Gl, { open: e, onOpenChange: t }),
      ],
    });
  },
  bP = () =>
    c.jsx("section", {
      className: "py-20 lg:py-28 bg-secondary",
      children: c.jsx("div", {
        className: "container mx-auto px-6 lg:px-12",
        children: c.jsxs("div", {
          className: "max-w-4xl mx-auto",
          children: [
            c.jsxs("div", {
              className: "text-center mb-16 space-y-4",
              children: [
                c.jsx("h2", {
                  className:
                    "text-4xl lg:text-5xl text-foreground tracking-tight",
                  children: "Get In Touch",
                }),
                c.jsx("p", {
                  className: "text-lg text-muted-foreground max-w-2xl mx-auto",
                  children:
                    "Have questions? We're here to help. Reach out to us anytime.",
                }),
              ],
            }),
            c.jsxs("div", {
              className: "grid md:grid-cols-2 gap-8",
              children: [
                c.jsx(Oi, {
                  className:
                    "p-8 border border-border hover:shadow-xl transition-all duration-300 rounded-3xl bg-card",
                  children: c.jsxs("div", {
                    className:
                      "flex flex-col items-center text-center space-y-4",
                    children: [
                      c.jsx("div", {
                        className:
                          "inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10",
                        children: c.jsx(q1, {
                          className: "h-8 w-8 text-primary",
                        }),
                      }),
                      c.jsxs("div", {
                        className: "space-y-2",
                        children: [
                          c.jsx("h3", {
                            className: "text-xl text-foreground",
                            children: "Call Us",
                          }),
                          c.jsx("a", {
                            href: "tel:7856066176",
                            className:
                              "text-2xl text-primary hover:text-primary/80 transition-colors block",
                            children: "7856066176",
                          }),
                          c.jsx("p", {
                            className: "text-sm text-muted-foreground",
                            children: "Available 24/7 for your convenience",
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                c.jsx(Oi, {
                  className:
                    "p-8 border border-border hover:shadow-xl transition-all duration-300 rounded-3xl bg-card",
                  children: c.jsxs("div", {
                    className:
                      "flex flex-col items-center text-center space-y-4",
                    children: [
                      c.jsx("div", {
                        className:
                          "inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10",
                        children: c.jsx(Y1, {
                          className: "h-8 w-8 text-primary",
                        }),
                      }),
                      c.jsxs("div", {
                        className: "space-y-2",
                        children: [
                          c.jsx("h3", {
                            className: "text-xl text-foreground",
                            children: "Email Us",
                          }),
                          c.jsx("a", {
                            href: "mailto:acfridgecare247@gmail.com",
                            className:
                              "text-lg text-primary hover:text-primary/80 transition-colors block break-all",
                            children: "acfridgecare247@gmail.com",
                          }),
                          c.jsx("p", {
                            className: "text-sm text-muted-foreground",
                            children: "We'll respond within 24 hours",
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              ],
            }),
          ],
        }),
      }),
    }),
  NP = () =>
    c.jsxs("div", {
      className: "min-h-screen bg-background",
      children: [
        c.jsx(fP, {}),
        c.jsxs("main", {
          children: [
            c.jsx(mP, {}),
            c.jsx("div", { id: "services", children: c.jsx(EP, {}) }),
            c.jsx("div", { id: "about", children: c.jsx(vP, {}) }),
            c.jsx("div", { id: "contact", children: c.jsx(bP, {}) }),
          ],
        }),
        c.jsx("footer", {
          className: "border-t border-border py-12 bg-background",
          children: c.jsx("div", {
            className: "container mx-auto px-6 lg:px-12",
            children: c.jsx("div", {
              className: "text-center text-sm text-muted-foreground",
              children: c.jsx("p", {
                children: "© 2025 Ac Fridge Care.in. All rights reserved.",
              }),
            }),
          }),
        }),
        c.jsx(Uv, {}),
      ],
    }),
  kP = {
    "washing-machine": {
      title: "Washing Machine",
      image: l0,
      description:
        "Expert repair and maintenance services for all types of washing machines. We handle everything from basic servicing to complex repairs.",
      features: [
        "Complete drum cleaning and maintenance",
        "Motor and belt inspection & replacement",
        "Water inlet valve servicing",
        "Drain pump cleaning",
        "Control panel diagnosis and repair",
        "Warranty on all parts replaced",
      ],
      details:
        "Our washing machine service includes thorough inspection of all components, deep cleaning, and preventive maintenance to ensure optimal performance. We work with all major brands and models, providing same-day service in most cases.",
    },
    microwave: {
      title: "Microwave Oven",
      image: a0,
      description:
        "Professional servicing and repairs for microwave ovens. Quick turnaround time with genuine parts replacement.",
      features: [
        "Magnetron testing and replacement",
        "Door seal inspection and replacement",
        "Turntable motor servicing",
        "Control panel repair",
        "Interior deep cleaning",
        "Safety inspection included",
      ],
      details:
        "We specialize in microwave oven repairs with certified technicians who can diagnose and fix issues quickly. From heating problems to electronic failures, we handle it all with expertise and care.",
    },
    refrigerator: {
      title: "Refrigerator",
      image: wd,
      description:
        "Comprehensive cooling solutions and refrigerator repairs. Expert technicians for all refrigerator brands and models.",
      features: [
        "Compressor repair and replacement",
        "Gas filling and leak detection",
        "Thermostat calibration",
        "Door seal replacement",
        "Ice maker servicing",
        "Energy efficiency optimization",
      ],
      details:
        "Keep your food fresh with our professional refrigerator service. We handle cooling issues, strange noises, water leaks, and all other refrigerator problems with guaranteed satisfaction.",
    },
    ac: {
      title: "Air Conditioner",
      image: xd,
      description:
        "Complete AC services including cleaning, maintenance, and repair. Professional care for optimal cooling performance.",
      features: [
        "Deep cleaning of filters and coils",
        "Gas refilling and pressure check",
        "Compressor servicing",
        "Thermostat calibration",
        "Duct cleaning and sanitization",
        "Annual maintenance contracts available",
      ],
      details:
        "Our AC service ensures your air conditioner runs efficiently and provides optimal cooling. We offer deep cleaning, repairs, installation, and preventive maintenance packages to keep your AC in perfect condition year-round.",
    },
  },
  PP = () => {
    const { serviceId: e } = tN(),
      t = Dg(),
      [n, r] = f.useState(!1),
      o = e ? kP[e] : null;
    return o
      ? c.jsxs(c.Fragment, {
          children: [
            c.jsxs("div", {
              className: "min-h-screen bg-background",
              children: [
                c.jsx("div", {
                  className: "container mx-auto px-6 lg:px-12 py-6",
                  children: c.jsxs(on, {
                    variant: "ghost",
                    onClick: () => t("/"),
                    className: "gap-2",
                    children: [
                      c.jsx(V1, { className: "h-4 w-4" }),
                      "Back to Home",
                    ],
                  }),
                }),
                c.jsx("section", {
                  className: "py-12 lg:py-20",
                  children: c.jsx("div", {
                    className: "container mx-auto px-6 lg:px-12",
                    children: c.jsxs("div", {
                      className: "grid lg:grid-cols-3 gap-12",
                      children: [
                        c.jsxs("div", {
                          className: "lg:col-span-2 space-y-8",
                          children: [
                            c.jsx("div", {
                              className:
                                "w-full h-80 rounded-3xl overflow-hidden shadow-xl bg-secondary",
                              children: c.jsx("img", {
                                src: o.image,
                                alt: o.title,
                                className: "w-full h-full object-cover",
                              }),
                            }),
                            c.jsxs("div", {
                              className: "space-y-4",
                              children: [
                                c.jsxs("h1", {
                                  className:
                                    "text-4xl lg:text-5xl text-foreground tracking-tight",
                                  children: [o.title, " Service"],
                                }),
                                c.jsx("p", {
                                  className:
                                    "text-lg text-muted-foreground leading-relaxed",
                                  children: o.description,
                                }),
                              ],
                            }),
                            c.jsxs("div", {
                              className: "space-y-4",
                              children: [
                                c.jsx("h2", {
                                  className: "text-2xl text-foreground",
                                  children: "What We Offer",
                                }),
                                c.jsx("div", {
                                  className: "grid md:grid-cols-2 gap-4",
                                  children: o.features.map((i, s) =>
                                    c.jsxs(
                                      "div",
                                      {
                                        className: "flex items-start gap-3",
                                        children: [
                                          c.jsx(K1, {
                                            className:
                                              "h-5 w-5 text-primary flex-shrink-0 mt-0.5",
                                          }),
                                          c.jsx("span", {
                                            className: "text-foreground",
                                            children: i,
                                          }),
                                        ],
                                      },
                                      s
                                    )
                                  ),
                                }),
                              ],
                            }),
                            c.jsxs("div", {
                              className: "space-y-4",
                              children: [
                                c.jsx("h2", {
                                  className: "text-2xl text-foreground",
                                  children: "Service Details",
                                }),
                                c.jsx("p", {
                                  className:
                                    "text-muted-foreground leading-relaxed",
                                  children: o.details,
                                }),
                              ],
                            }),
                          ],
                        }),
                        c.jsx("div", {
                          className: "lg:col-span-1",
                          children: c.jsx("div", {
                            className: "sticky top-24",
                            children: c.jsx(Oi, {
                              className:
                                "p-8 border border-border rounded-3xl bg-card shadow-xl",
                              children: c.jsxs("div", {
                                className: "space-y-6",
                                children: [
                                  c.jsxs("div", {
                                    className: "space-y-2",
                                    children: [
                                      c.jsx("h3", {
                                        className: "text-2xl text-foreground",
                                        children: "Book This Service",
                                      }),
                                      c.jsxs("p", {
                                        className:
                                          "text-sm text-muted-foreground",
                                        children: [
                                          "Get professional ",
                                          o.title.toLowerCase(),
                                          " service at your doorstep",
                                        ],
                                      }),
                                    ],
                                  }),
                                  c.jsxs("div", {
                                    className:
                                      "space-y-4 py-4 border-y border-border",
                                    children: [
                                      c.jsxs("div", {
                                        className:
                                          "flex items-center justify-between",
                                        children: [
                                          c.jsx("span", {
                                            className: "text-muted-foreground",
                                            children: "Response Time",
                                          }),
                                          c.jsx("span", {
                                            className: "text-foreground",
                                            children: "Same Day",
                                          }),
                                        ],
                                      }),
                                      c.jsxs("div", {
                                        className:
                                          "flex items-center justify-between",
                                        children: [
                                          c.jsx("span", {
                                            className: "text-muted-foreground",
                                            children: "Warranty",
                                          }),
                                          c.jsx("span", {
                                            className: "text-foreground",
                                            children: "30 Days",
                                          }),
                                        ],
                                      }),
                                      c.jsxs("div", {
                                        className:
                                          "flex items-center justify-between",
                                        children: [
                                          c.jsx("span", {
                                            className: "text-muted-foreground",
                                            children: "Service Type",
                                          }),
                                          c.jsx("span", {
                                            className: "text-foreground",
                                            children: "At Home",
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  c.jsx(on, {
                                    onClick: () => r(!0),
                                    className:
                                      "w-full rounded-2xl h-12 text-base",
                                    size: "lg",
                                    children: "Book a Service",
                                  }),
                                  c.jsx("p", {
                                    className:
                                      "text-xs text-muted-foreground text-center",
                                    children:
                                      "Available 24/7 for emergency services",
                                  }),
                                ],
                              }),
                            }),
                          }),
                        }),
                      ],
                    }),
                  }),
                }),
              ],
            }),
            c.jsx(Gl, { open: n, onOpenChange: r }),
          ],
        })
      : c.jsx("div", {
          className: "min-h-screen flex items-center justify-center",
          children: c.jsxs("div", {
            className: "text-center",
            children: [
              c.jsx("h2", {
                className: "text-2xl text-foreground mb-4",
                children: "Service not found",
              }),
              c.jsx(on, { onClick: () => t("/"), children: "Go Back Home" }),
            ],
          }),
        });
  },
  TP = () => {
    const e = fd();
    return (
      f.useEffect(() => {
        console.error(
          "404 Error: User attempted to access non-existent route:",
          e.pathname
        );
      }, [e.pathname]),
      c.jsx("div", {
        className: "flex min-h-screen items-center justify-center bg-gray-100",
        children: c.jsxs("div", {
          className: "text-center",
          children: [
            c.jsx("h1", {
              className: "mb-4 text-4xl font-bold",
              children: "404",
            }),
            c.jsx("p", {
              className: "mb-4 text-xl text-gray-600",
              children: "Oops! Page not found",
            }),
            c.jsx("a", {
              href: "/",
              className: "text-blue-500 underline hover:text-blue-700",
              children: "Return to Home",
            }),
          ],
        }),
      })
    );
  },
  RP = new Eb(),
  jP = () =>
    c.jsx(Nb, {
      client: RP,
      children: c.jsxs(JE, {
        children: [
          c.jsx(IS, {}),
          c.jsx(Uv, {}),
          c.jsx(xN, {
            children: c.jsxs(vN, {
              children: [
                c.jsx(Os, { path: "/", element: c.jsx(NP, {}) }),
                c.jsx(Os, {
                  path: "/service/:serviceId",
                  element: c.jsx(PP, {}),
                }),
                c.jsx(Os, { path: "*", element: c.jsx(TP, {}) }),
              ],
            }),
          }),
        ],
      }),
    });
ev(document.getElementById("root")).render(c.jsx(jP, {}));
