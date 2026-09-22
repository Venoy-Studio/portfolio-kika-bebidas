(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 58713, e => {
  "use strict";
  var t = e.i(43476),
    a = e.i(71645),
    s = e.i(22016),
    i = e.i(68877),
    l = e.i(33209),
    r = e.i(49542),
    n = e.i(83742),
    o = e.i(89567);

  function c(e) {
    let t = !!(e.imageDesktop || e.imageMobile),
      a = e.showText && !!(e.title || e.eyebrow || e.ctaLabel);
    return t && !a
  }
  let d = {
      hero: {
        title: "text-[24px] leading-[1.05] sm:text-[32px] md:text-[42px] lg:text-[50px]",
        subtitle: "text-[13px] md:text-[15px]",
        pad: "p-5 sm:p-7 md:p-10 lg:p-14",
        maxW: "max-w-[92%] md:max-w-[52%]"
      },
      duplo: {
        title: "text-[22px] leading-[1.08] md:text-[28px]",
        subtitle: "text-[13px]",
        pad: "p-5 md:p-7",
        maxW: "max-w-[80%] md:max-w-[62%]"
      },
      faixa: {
        title: "text-[20px] leading-[1.1] md:text-[30px]",
        subtitle: "text-[13px] md:text-[14px]",
        pad: "p-5 md:px-10 md:py-8",
        maxW: "max-w-[90%] md:max-w-[55%]"
      }
    },
    x = {
      hero: {
        mobile: "100vw",
        desktop: "(min-width: 1280px) 1216px, 100vw"
      },
      duplo: {
        mobile: "86vw",
        desktop: "(min-width: 1280px) 600px, 50vw"
      },
      faixa: {
        mobile: "100vw",
        desktop: "(min-width: 1280px) 1216px, 100vw"
      }
    };
  e.s(["BannerSlide", 0, function({
    banner: e,
    size: m,
    eager: p = !1,
    natural: u = !1,
    deferImage: h = !1,
    sizes: g,
    trackable: f = !0,
    className: b
  }) {
    let {
      storeId: j
    } = (0, n.useStore)(), v = (0, a.useRef)(null);
    (0, a.useEffect)(() => {
      let t = v.current;
      if (!f || !t || !("IntersectionObserver" in window)) return;
      let a = new IntersectionObserver(t => {
        t.some(e => e.isIntersecting) && ((0, o.track)({
          type: "banner_view",
          storeId: j,
          bannerId: e.id
        }), a.disconnect())
      }, {
        threshold: .5
      });
      return a.observe(t), () => a.disconnect()
    }, [f, j, e.id]);
    let y = d[m],
      w = !!(e.imageDesktop || e.imageMobile),
      k = e.imageMobile ?? e.imageDesktop,
      N = e.imageDesktop ?? e.imageMobile,
      C = e.showText && !!(e.title || e.eyebrow || e.ctaLabel),
      $ = u && c(e),
      S = g ?? x[m],
      z = (0, t.jsxs)("div", {
        ref: v,
        className: (0, l.cn)("relative block h-full w-full overflow-hidden", b),
        style: {
          backgroundColor: e.theme.bg
        },
        children: [w && !h && (0, t.jsx)("div", {
          className: (0, l.cn)("fx-layer", $ ? "relative" : "absolute inset-0"),
          children: (0, t.jsxs)("picture", {
            className: $ ? "block" : void 0,
            children: [N && (0, t.jsx)("source", {
              media: "(min-width: 768px)",
              srcSet: (0, r.srcSetOf)(N) ?? N,
              sizes: S.desktop
            }), (0, t.jsx)("img", {
              src: k ?? void 0,
              srcSet: (0, r.srcSetOf)(k),
              sizes: S.mobile,
              alt: e.alt,
              loading: p ? "eager" : "lazy",
              fetchPriority: p ? "high" : "auto",
              decoding: "async",
              draggable: !1,
              className: (0, l.cn)("w-full object-cover transition-transform duration-700 ease-out group-hover/banner:scale-[1.03]", $ ? "block h-auto" : "absolute inset-0 h-full")
            })]
          })
        }), C && (0, t.jsxs)(t.Fragment, {
          children: [(0, t.jsx)("div", {
            "aria-hidden": "true",
            className: "absolute inset-0 md:hidden",
            style: {
              background: `linear-gradient(to top, ${e.theme.bg}F2 0%, ${e.theme.bg}B3 38%, ${e.theme.bg}00 78%)`
            }
          }), (0, t.jsx)("div", {
            "aria-hidden": "true",
            className: "absolute inset-0 hidden md:block",
            style: {
              background: `linear-gradient(90deg, ${e.theme.bg}F0 0%, ${e.theme.bg}B8 36%, ${e.theme.bg}00 70%)`
            }
          }), (0, t.jsx)("div", {
            className: (0, l.cn)("relative flex h-full flex-col justify-end md:justify-center", y.pad),
            children: (0, t.jsxs)("div", {
              className: y.maxW,
              children: [e.eyebrow && (0, t.jsx)("p", {
                className: "mb-2 inline-flex rounded-full px-2.5 py-1 text-[10.5px] font-bold uppercase tracking-[0.1em] md:mb-3 md:text-[11px]",
                style: {
                  backgroundColor: e.theme.accent,
                  color: e.theme.bg
                },
                children: e.eyebrow
              }), e.title && (0, t.jsx)("h3", {
                className: (0, l.cn)("font-display whitespace-pre-line text-balance", y.title),
                style: {
                  color: e.theme.ink
                },
                children: e.title
              }), e.subtitle && (0, t.jsx)("p", {
                className: (0, l.cn)("mt-2 hidden max-w-[44ch] leading-snug sm:block", y.subtitle),
                style: {
                  color: `${e.theme.ink}C8`
                },
                children: e.subtitle
              }), e.ctaLabel && (0, t.jsxs)("span", {
                className: "btn btn-light mt-3 px-4 py-2.5 text-[13px] md:mt-5 md:px-5 md:py-3 md:text-[14px]",
                children: [e.ctaLabel, (0, t.jsx)(i.ArrowRight, {
                  size: 15,
                  className: "transition group-hover/banner:translate-x-0.5"
                })]
              })]
            })
          })]
        })]
      });
    return e.href ? (0, t.jsx)(s.default, {
      href: e.href,
      onClick: () => {
        f && ((0, o.track)({
          type: "banner_click",
          storeId: j,
          bannerId: e.id
        }), e.href?.startsWith("/produto/") && (0, o.setPendingOrigin)("banner"))
      },
      className: "group/banner block h-full focus-visible:outline-offset-[-4px]",
      "aria-label": C ? void 0 : e.alt,
      draggable: !1,
      children: z
    }) : (0, t.jsx)("div", {
      className: "group/banner h-full",
      children: z
    })
  }, "isArtOnly", 0, c])
}, 2277, e => {
  "use strict";
  var t = e.i(43476),
    a = e.i(89664),
    s = e.i(77071),
    i = e.i(57049),
    l = e.i(26922),
    r = e.i(91392),
    n = e.i(33209),
    o = e.i(49542);
  e.s(["ComboCard", 0, function({
    combo: e,
    variant: c = "rail",
    className: d
  }) {
    let {
      add: x,
      lastAdded: m
    } = (0, i.useCart)(), {
      data: p
    } = (0, l.useData)(), u = m === `combo:${e.id}`, h = [...e.products].sort((e, t) => t.quantity - e.quantity), g = h[0]?.product;
    return (0, t.jsxs)("article", {
      className: (0, n.cn)("group flex flex-col overflow-hidden rounded-[18px] bg-primary text-white", "rail" === c && "w-[270px] sm:w-[300px] lg:w-[312px]", !e.available && "opacity-80", d),
      children: [(0, t.jsxs)("div", {
        "data-parallax": "photo",
        className: "relative aspect-[3/2] overflow-hidden bg-[#1d1a17]",
        children: [e.image && (0, t.jsx)("div", {
          className: "fx-layer absolute inset-0",
          children: (0, t.jsx)("img", {
            src: e.image,
            srcSet: (0, o.srcSetOf)(e.image),
            sizes: "(min-width: 1024px) 400px, 300px",
            alt: "",
            loading: "lazy",
            decoding: "async",
            className: "absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          })
        }), (0, t.jsx)("div", {
          "aria-hidden": "true",
          className: "absolute inset-x-0 bottom-0 h-1/3",
          style: {
            background: "linear-gradient(to top, rgba(18,18,18,0.55), rgba(18,18,18,0))"
          }
        }), e.savingsCents > 0 && (0, t.jsxs)("span", {
          className: "absolute left-3 top-3 rounded-full bg-accent px-2.5 py-1 text-[11px] font-bold text-white",
          children: ["Economize ", (0, r.money)(e.savingsCents)]
        }), e.discountPercent > 0 && (0, t.jsxs)("span", {
          className: "badge-off absolute right-3 top-3",
          children: ["-", e.discountPercent, "%"]
        })]
      }), (0, t.jsxs)("div", {
        className: "flex flex-1 flex-col p-4",
        children: [(0, t.jsxs)("p", {
          className: "eyebrow text-accent",
          children: ["Combo · Serve ", e.serves]
        }), (0, t.jsx)("h3", {
          className: "font-display mt-1 text-[19px] leading-tight",
          children: e.name
        }), e.tagline && (0, t.jsx)("p", {
          className: "clamp-2 mt-1 text-[12.5px] leading-snug text-white/60",
          children: e.tagline
        }), (0, t.jsx)("ul", {
          className: "mt-2.5 space-y-1 text-[12.5px] leading-snug text-white/70",
          children: h.map(e => (0, t.jsxs)("li", {
            className: "flex gap-2",
            children: [(0, t.jsxs)("span", {
              className: "w-7 shrink-0 font-semibold tabular-nums text-white",
              children: [e.quantity, "x"]
            }), (0, t.jsxs)("span", {
              className: "min-w-0 truncate",
              children: [e.product.name, " ", (0, t.jsx)("span", {
                className: "text-white/45",
                children: e.product.volume
              })]
            })]
          }, e.product.id))
        }), (0, t.jsxs)("div", {
          className: "mt-auto flex items-end justify-between gap-3 pt-4",
          children: [(0, t.jsxs)("div", {
            children: [e.savingsCents > 0 && (0, t.jsx)("p", {
              className: "text-[12px] tabular-nums text-white/40 line-through",
              children: (0, r.money)(e.listPriceCents)
            }), (0, t.jsx)("p", {
              className: "font-display text-[24px] leading-none tabular-nums",
              children: (0, r.money)(e.priceCents)
            })]
          }), e.available ? (0, t.jsxs)("button", {
            type: "button",
            onClick: () => {
              x({
                kind: "combo",
                refId: e.id,
                name: e.name,
                volume: e.serves,
                unitPriceCents: e.priceCents,
                image: e.image ?? g?.image ?? null,
                colorway: g?.colorway ?? ["#121212", "#C08A3E"],
                shape: g ? g.shape ?? p.categories.find(e => e.id === g.categoryId)?.shape ?? "garrafa-longneck" : "caixa"
              })
            },
            className: (0, n.cn)("btn shrink-0 px-4 py-2.5 text-[13px]", u ? "bg-success text-white" : "btn-light"),
            children: [u ? (0, t.jsx)(a.Check, {
              size: 15,
              className: "animate-pop"
            }) : (0, t.jsx)(s.Plus, {
              size: 15,
              strokeWidth: 2.4
            }), u ? "Adicionado" : "Adicionar"]
          }) : (0, t.jsx)("span", {
            className: "shrink-0 rounded-full border border-white/20 px-3 py-2 text-[12px] text-white/70",
            children: "Item em falta aqui"
          })]
        })]
      })]
    })
  }])
}, 99500, e => {
  "use strict";
  var t = e.i(43476),
    a = e.i(22016),
    s = e.i(74544),
    i = e.i(56420);
  let l = {
    name: "credit-card",
    size: 24,
    node: [
      ["rect", {
        width: "20",
        height: "14",
        x: "2",
        y: "5",
        rx: "2",
        key: "ynyp8z"
      }],
      ["line", {
        x1: "2",
        x2: "22",
        y1: "10",
        y2: "10",
        key: "1b3vmo"
      }],
      ["path", {
        d: "M6 14h2",
        key: "mk7k0u"
      }]
    ]
  };
  l.node;
  let r = (0, i.default)(l);
  var n = e.i(20865),
    o = e.i(15227);
  let c = {
    name: "package-check",
    size: 24,
    node: [
      ["path", {
        d: "M12 22V12",
        key: "d0xqtd"
      }],
      ["path", {
        d: "m16 17 2 2 4-4",
        key: "uh5qu3"
      }],
      ["path", {
        d: "M21 11.127V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.729l7 4a2 2 0 0 0 2 .001l1.32-.753",
        key: "kpkbpo"
      }],
      ["path", {
        d: "M3.29 7 12 12l8.71-5",
        key: "19ckod"
      }],
      ["path", {
        d: "m7.5 4.27 8.997 5.148",
        key: "9yrvtv"
      }]
    ]
  };
  c.node;
  let d = (0, i.default)(c),
    x = {
      name: "snowflake",
      size: 24,
      node: [
        ["path", {
          d: "m10 20-1.25-2.5L6 18",
          key: "18frcb"
        }],
        ["path", {
          d: "M10 4 8.75 6.5 6 6",
          key: "7mghy3"
        }],
        ["path", {
          d: "m14 20 1.25-2.5L18 18",
          key: "1chtki"
        }],
        ["path", {
          d: "m14 4 1.25 2.5L18 6",
          key: "1b4wsy"
        }],
        ["path", {
          d: "m17 21-3-6h-4",
          key: "15hhxa"
        }],
        ["path", {
          d: "m17 3-3 6 1.5 3",
          key: "11697g"
        }],
        ["path", {
          d: "M2 12h6.5L10 9",
          key: "kv9z4n"
        }],
        ["path", {
          d: "m20 10-1.5 2 1.5 2",
          key: "1swlpi"
        }],
        ["path", {
          d: "M22 12h-6.5L14 15",
          key: "1mxi28"
        }],
        ["path", {
          d: "m4 10 1.5 2L4 14",
          key: "k9enpj"
        }],
        ["path", {
          d: "m7 21 3-6-1.5-3",
          key: "j8hb9u"
        }],
        ["path", {
          d: "m7 3 3 6h4",
          key: "1otusx"
        }]
      ]
    };
  x.node;
  let m = (0, i.default)(x),
    p = {
      name: "truck",
      size: 24,
      node: [
        ["path", {
          d: "M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",
          key: "wrbu53"
        }],
        ["path", {
          d: "M15 18H9",
          key: "1lyqi6"
        }],
        ["path", {
          d: "M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",
          key: "lysw3i"
        }],
        ["circle", {
          cx: "17",
          cy: "18",
          r: "2",
          key: "332jqn"
        }],
        ["circle", {
          cx: "7",
          cy: "18",
          r: "2",
          key: "19iecd"
        }]
      ]
    };
  p.node;
  let u = (0, i.default)(p);
  var h = e.i(26922);
  let g = {
    lojas: {
      icon: n.MapPin,
      label: "Localização"
    },
    relogio: {
      icon: s.Clock,
      label: "Horário"
    },
    estoque: {
      icon: d,
      label: "Estoque"
    },
    whatsapp: {
      icon: o.MessageCircle,
      label: "WhatsApp"
    },
    entrega: {
      icon: u,
      label: "Entrega"
    },
    gelo: {
      icon: m,
      label: "Gelado"
    },
    cartao: {
      icon: r,
      label: "Pagamento"
    }
  };
  e.s(["BENEFIT_ICONS", 0, g, "BenefitStrip", 0, function({
    className: e
  }) {
    let {
      benefits: s,
      showBenefits: i
    } = (0, h.useData)().data.settings;
    return i && 0 !== s.length ? (0, t.jsx)("section", {
      className: `relative z-10 ${e??""}`,
      "aria-label": "Por que comprar na Kika",
      children: (0, t.jsx)("ul", {
        className: "rail rail-bleed gap-2.5 md:grid md:gap-3 md:overflow-visible md:[grid-template-columns:repeat(var(--cols),minmax(0,1fr))]",
        style: {
          "--cols": Math.min(s.length, 5)
        },
        children: s.map(({
          id: e,
          icon: s,
          title: i,
          text: l,
          href: r
        }, o) => {
          let c = g[s]?.icon ?? n.MapPin;
          return (0, t.jsx)("li", {
            className: "fx-load-up w-[210px] md:w-auto",
            style: {
              "--fx-i": o
            },
            children: (0, t.jsxs)(a.default, {
              href: r || "/",
              className: "flex h-full items-center gap-3 rounded-[14px] bg-surface px-3.5 py-3 transition hover:bg-surface-2",
              children: [(0, t.jsx)("span", {
                className: "icon-btn h-10 w-10 shrink-0 bg-accent-soft text-accent-strong",
                children: (0, t.jsx)(c, {
                  size: 18
                })
              }), (0, t.jsxs)("span", {
                className: "min-w-0",
                children: [(0, t.jsx)("span", {
                  className: "block text-[13.5px] font-semibold leading-tight",
                  children: i
                }), (0, t.jsx)("span", {
                  className: "block truncate text-[12px] text-muted",
                  children: l
                })]
              })]
            })
          }, e)
        })
      })
    }) : null
  }], 99500)
}, 69311, e => {
  "use strict";
  var t = e.i(43476),
    a = e.i(22016),
    s = e.i(26922),
    i = e.i(83742),
    l = e.i(89567),
    r = e.i(55396),
    n = e.i(33209);

  function o({
    item: e,
    index: s,
    active: r
  }) {
    let {
      storeId: c
    } = (0, i.useStore)();
    return (0, t.jsxs)(a.default, {
      href: e.href,
      onClick: () => (0, l.track)({
        type: "category_click",
        storeId: c,
        slug: e.match ?? e.id
      }),
      className: "fx-load-pop group flex w-[72px] flex-col items-center gap-2 sm:w-[84px] lg:w-[92px]",
      style: {
        "--fx-i": s
      },
      children: [(0, t.jsx)("span", {
        className: (0, n.cn)("relative block h-[68px] w-[68px] overflow-hidden rounded-full bg-surface-2 ring-offset-2 ring-offset-background transition sm:h-[80px] sm:w-[80px] lg:h-[88px] lg:w-[88px]", r ? "ring-2 ring-primary" : "group-hover:ring-2 group-hover:ring-border-strong"),
        style: e.image ? void 0 : {
          backgroundColor: `${e.tint}22`
        },
        children: e.image && (0, t.jsx)("img", {
          src: e.image,
          alt: "",
          loading: "lazy",
          decoding: "async",
          className: "h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
        })
      }), (0, t.jsx)("span", {
        className: (0, n.cn)("w-full text-center text-[12px] font-medium leading-tight sm:text-[12.5px]", r ? "font-semibold text-foreground" : "text-foreground/85"),
        children: e.label
      })]
    })
  }
  e.s(["CategoryCarousel", 0, function({
    className: e,
    activeSlug: a = null
  }) {
    let {
      data: i
    } = (0, s.useData)(), l = [...i.categories.filter(e => e.active).map(e => ({
      id: e.id,
      label: e.name,
      image: e.image,
      href: `/produtos?categoria=${e.slug}`,
      tint: e.tint,
      order: e.order,
      match: e.slug
    })), ...i.categoryShortcuts.filter(e => e.active).map(e => ({
      id: e.id,
      label: e.label,
      image: e.image,
      href: e.href,
      tint: "#121212",
      order: e.order,
      match: e.id
    }))].sort((e, t) => e.order - t.order);
    return (0, t.jsx)(r.CarouselSection, {
      className: e,
      title: "Categorias",
      href: "/produtos",
      hrefLabel: "Ver catálogo",
      railClassName: "gap-3 md:gap-4",
      stagger: !1,
      children: l.map((e, s) => (0, t.jsx)(o, {
        item: e,
        index: s,
        active: !!(e.match && e.match === a)
      }, e.id))
    })
  }])
}, 67421, e => {
  "use strict";
  var t = e.i(43476),
    a = e.i(71645),
    s = e.i(24071),
    i = e.i(67927),
    l = e.i(26922),
    r = e.i(83742),
    n = e.i(92762),
    o = e.i(25412),
    c = e.i(33209),
    d = e.i(58713);
  e.s(["HeroCarousel", 0, function() {
    let {
      data: e
    } = (0, l.useData)(), {
      storeId: x,
      store: m
    } = (0, r.useStore)(), p = (0, o.useNow)(), u = (0, n.getBanners)(e, x, "hero", p), h = (0, a.useRef)(null), [g, f] = (0, a.useState)(0), [b, j] = (0, a.useState)(!1), v = (0, a.useRef)(!1);
    (0, a.useEffect)(() => {
      let e = 0,
        t = () => {
          e = window.setTimeout(() => j(!0), 400)
        };
      return "complete" === document.readyState ? t() : window.addEventListener("load", t, {
        once: !0
      }), () => {
        window.removeEventListener("load", t), window.clearTimeout(e)
      }
    }, []);
    let y = (0, a.useCallback)(e => {
      j(!0);
      let t = h.current;
      if (!t) return;
      let a = t.children.length;
      0 === a || t.scrollTo({
        left: (e % a + a) % a * t.clientWidth,
        behavior: "smooth"
      })
    }, []);
    if ((0, a.useEffect)(() => {
        h.current?.scrollTo({
          left: 0
        }), f(0)
      }, [x]), (0, a.useEffect)(() => {
        let e = h.current;
        if (!e) return;
        let t = () => {
          f(Math.round(e.scrollLeft / Math.max(1, e.clientWidth)))
        };
        return e.addEventListener("scroll", t, {
          passive: !0
        }), () => e.removeEventListener("scroll", t)
      }, [u.length]), (0, a.useEffect)(() => {
        if (u.length <= 1 || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
        let e = window.setInterval(() => {
          v.current || "visible" !== document.visibilityState || y(g + 1)
        }, 6500);
        return () => window.clearInterval(e)
      }, [u.length, y, g]), 0 === u.length) return (0, t.jsx)("div", {
      className: "flex aspect-[3/2] items-center justify-center rounded-[18px] bg-surface-2 p-6 text-center md:aspect-[2000/680]",
      children: (0, t.jsxs)("p", {
        className: "text-[14px] text-muted",
        children: ["Nenhuma campanha ativa na Kika ", m.name, " neste momento."]
      })
    });
    let w = () => v.current = !0,
      k = () => v.current = !1;
    return (0, t.jsxs)("section", {
      "aria-roledescription": "carrossel",
      "aria-label": "Campanhas em destaque",
      "data-parallax": "hero",
      className: "group/hero relative",
      onMouseEnter: w,
      onMouseLeave: k,
      onTouchStart: () => {
        w(), j(!0)
      },
      onTouchEnd: k,
      onFocusCapture: w,
      onBlurCapture: k,
      children: [(0, t.jsx)("div", {
        ref: h,
        className: "fx-hero-in no-scrollbar flex snap-x snap-mandatory overflow-x-auto overscroll-x-contain rounded-[18px] bg-primary",
        children: u.map((e, a) => (0, t.jsx)("div", {
          className: "w-full shrink-0 snap-center",
          "aria-roledescription": "slide",
          "aria-label": `${a+1} de ${u.length}`,
          children: (0, t.jsx)(d.BannerSlide, {
            banner: e,
            eager: 0 === a,
            deferImage: a > 0 && !b,
            size: "hero",
            className: "aspect-[3/2] md:aspect-[2000/680]"
          })
        }, e.id))
      }), u.length > 1 && (0, t.jsxs)(t.Fragment, {
        children: [(0, t.jsx)("div", {
          className: "pointer-events-none mt-2.5 flex justify-center md:absolute md:inset-x-0 md:bottom-4 md:mt-0",
          children: (0, t.jsx)("div", {
            className: "pointer-events-auto flex items-center gap-1.5 md:rounded-full md:bg-black/25 md:px-2 md:py-1.5 md:backdrop-blur-sm",
            children: u.map((e, a) => (0, t.jsx)("button", {
              type: "button",
              onClick: () => y(a),
              "aria-label": `Ir para campanha ${a+1}`,
              "aria-current": a === g,
              className: (0, c.cn)("h-1.5 rounded-full transition-all duration-300", a === g ? "w-5 bg-primary md:bg-white" : "w-1.5 bg-black/20 hover:bg-black/40 md:bg-white/50 md:hover:bg-white/80")
            }, e.id))
          })
        }), (0, t.jsx)("div", {
          className: "absolute bottom-3 right-4 hidden gap-2 opacity-0 transition group-hover/hero:opacity-100 focus-within:opacity-100 md:flex",
          children: ["prev", "next"].map(e => (0, t.jsx)("button", {
            type: "button",
            onClick: () => y(g + ("next" === e ? 1 : -1)),
            "aria-label": "next" === e ? "Próxima campanha" : "Campanha anterior",
            className: "icon-btn h-10 w-10 bg-white/90 text-primary shadow-card hover:bg-white",
            children: "next" === e ? (0, t.jsx)(i.ChevronRight, {
              size: 20
            }) : (0, t.jsx)(s.ChevronLeft, {
              size: 20
            })
          }, e))
        })]
      })]
    })
  }])
}, 32864, e => {
  "use strict";
  var t = e.i(43476),
    a = e.i(26922),
    s = e.i(83742),
    i = e.i(92762),
    l = e.i(25412),
    r = e.i(74515),
    n = e.i(55396);

  function o({
    className: e
  }) {
    let {
      data: c
    } = (0, a.useData)(), {
      storeId: d,
      store: x
    } = (0, s.useStore)(), m = (0, l.useNow)(), p = (0, i.getOffers)(c, d, m, 14);
    return 0 === p.length ? null : (0, t.jsx)(n.CarouselSection, {
      className: e,
      eyebrow: `${(0,i.getOffers)(c,d,m).length} ofertas hoje`,
      title: `Ofertas na Kika ${x.name}`,
      href: "/ofertas",
      children: p.map(e => (0, t.jsx)(r.ProductCard, {
        product: e,
        variant: "rail",
        origin: "ofertas"
      }, e.id))
    })
  }

  function c({
    className: e
  }) {
    let {
      data: o
    } = (0, a.useData)(), {
      storeId: d,
      store: x
    } = (0, s.useStore)(), m = (0, l.useNow)(), p = (0, i.getBestSellers)(o, d, m, 14);
    return 0 === p.length ? null : (0, t.jsx)(n.CarouselSection, {
      className: e,
      eyebrow: "Os campeões daqui",
      title: `Mais vendidos na ${x.name}`,
      href: "/produtos",
      children: p.map(e => (0, t.jsx)(r.ProductCard, {
        product: e,
        variant: "rail",
        origin: "mais-vendidos"
      }, e.id))
    })
  }

  function d({
    tag: e,
    eyebrow: o,
    title: c,
    href: x,
    className: m
  }) {
    let {
      data: p
    } = (0, a.useData)(), {
      storeId: u
    } = (0, s.useStore)(), h = (0, l.useNow)(), g = (0, i.getProductsByTag)(p, u, e, h, 14);
    return 0 === g.length ? null : (0, t.jsx)(n.CarouselSection, {
      className: m,
      eyebrow: o,
      title: c,
      href: x,
      children: g.map(e => (0, t.jsx)(r.ProductCard, {
        product: e,
        variant: "rail",
        origin: "vitrine"
      }, e.id))
    })
  }
  var x = e.i(2277);

  function m({
    className: e
  }) {
    let {
      data: r
    } = (0, a.useData)(), {
      storeId: o,
      store: c
    } = (0, s.useStore)(), d = (0, l.useNow)(), p = (0, i.getStoreCombos)(r, o, d).filter(e => e.featured);
    return 0 === p.length ? null : (0, t.jsx)(n.CarouselSection, {
      className: e,
      eyebrow: "Kits fechados",
      title: "Combos para a ocasião",
      description: `Montados e conferidos na Kika ${c.name}. Um pedido s\xf3, tudo junto.`,
      href: "/combos",
      hrefLabel: "Todos os combos",
      railClassName: "gap-3 md:gap-4",
      children: p.map(e => (0, t.jsx)(x.ComboCard, {
        combo: e
      }, e.id))
    })
  }
  var p = e.i(22016),
    u = e.i(75775),
    h = e.i(89567);

  function g({
    className: e
  }) {
    let {
      data: i
    } = (0, a.useData)(), {
      storeId: l
    } = (0, s.useStore)(), r = i.occasions.filter(e => e.active).sort((e, t) => e.order - t.order);
    return 0 === r.length ? null : (0, t.jsx)(n.CarouselSection, {
      className: e,
      eyebrow: "Compre pelo motivo",
      title: "O que você vai fazer hoje?",
      railClassName: "gap-3 lg:grid lg:grid-cols-7 lg:overflow-visible",
      stagger: "deal",
      parallax: "wave",
      children: r.map(e => {
        let a = !!e.image && !e.showText;
        return (0, t.jsxs)(p.default, {
          href: `/produtos?ocasiao=${e.slug}`,
          onClick: () => (0, h.track)({
            type: "occasion_click",
            storeId: l,
            slug: e.slug
          }),
          className: "group relative block aspect-[3/4] w-[148px] overflow-hidden rounded-[16px] sm:w-[168px] lg:w-auto",
          style: {
            backgroundColor: e.image ? "#1d1a17" : e.tint
          },
          children: [e.image && (0, t.jsx)("img", {
            src: e.image,
            alt: "",
            loading: "lazy",
            decoding: "async",
            className: "absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
          }), a ? (0, t.jsxs)("span", {
            className: "sr-only",
            children: [e.name, ": ", e.caption]
          }) : (0, t.jsxs)(t.Fragment, {
            children: [(0, t.jsx)("div", {
              "aria-hidden": "true",
              className: "absolute inset-0",
              style: {
                background: "linear-gradient(to top, rgba(10,10,10,0.82) 0%, rgba(10,10,10,0.15) 55%, rgba(10,10,10,0) 100%)"
              }
            }), (0, t.jsx)("span", {
              className: "icon-btn absolute right-2.5 top-2.5 h-8 w-8 bg-white/15 text-white backdrop-blur-sm transition group-hover:bg-white group-hover:text-primary",
              children: (0, t.jsx)(u.ArrowUpRight, {
                size: 16
              })
            }), (0, t.jsxs)("span", {
              className: "absolute inset-x-3 bottom-3",
              children: [(0, t.jsx)("span", {
                className: "font-display block text-[16px] leading-tight text-white",
                children: e.name
              }), (0, t.jsx)("span", {
                className: "mt-0.5 block text-[11.5px] leading-snug text-white/70",
                children: e.caption
              })]
            })]
          })]
        }, e.id)
      })
    })
  }
  var f = e.i(68877),
    b = e.i(834),
    j = e.i(11568),
    v = e.i(79350),
    y = e.i(33209),
    w = e.i(87305),
    k = e.i(49542);

  function N({
    className: e
  }) {
    let {
      rankedStores: a,
      storeId: i,
      selectStore: l,
      coords: r,
      requestGeolocation: o,
      locating: c
    } = (0, s.useStore)();
    return (0, t.jsxs)("section", {
      className: e,
      children: [(0, t.jsx)(n.SectionHeader, {
        eyebrow: "Onde a gente está",
        title: "Uma Kika perto de você",
        description: "5 lojas em Palhoça e São José. Toque numa unidade para ver os preços e o estoque dela.",
        href: "/lojas",
        hrefLabel: "Ver lojas"
      }), (0, t.jsxs)("div", {
        className: "grid gap-3 [&>*]:min-w-0 lg:grid-cols-[1.25fr_1fr] lg:gap-4",
        children: [(0, t.jsx)(w.RegionMap, {
          "data-reveal": "map",
          stores: a,
          activeId: i,
          userCoords: r,
          onSelect: e => l(e),
          className: "aspect-[4/3] rounded-[18px] sm:aspect-[16/10] lg:aspect-auto lg:min-h-[400px]"
        }), (0, t.jsxs)("div", {
          className: "flex flex-col gap-2",
          children: [!r && (0, t.jsxs)("button", {
            type: "button",
            onClick: o,
            disabled: c,
            className: "btn btn-primary tap w-full",
            children: [c ? (0, t.jsx)(j.LoaderCircle, {
              size: 16,
              className: "animate-spin"
            }) : (0, t.jsx)(b.Crosshair, {
              size: 16
            }), c ? "Localizando..." : "Qual fica mais perto de mim?"]
          }), (0, t.jsx)("ul", {
            "data-reveal-stagger": "up",
            className: "flex flex-1 flex-col gap-2",
            children: a.map((e, a) => (0, t.jsx)(C, {
              store: e,
              nearest: !!r && 0 === a && null != e.distanceKm,
              active: e.id === i,
              onSelect: () => l(e.id)
            }, e.id))
          }), (0, t.jsxs)(p.default, {
            href: "/lojas",
            className: "btn btn-quiet tap w-full",
            children: ["Endereços e horários", (0, t.jsx)(f.ArrowRight, {
              size: 15
            })]
          })]
        })]
      })]
    })
  }

  function C({
    store: e,
    nearest: a,
    active: s,
    onSelect: i
  }) {
    let r = (0, l.useStoreStatus)(e),
      n = (0, v.formatDistance)(e.distanceKm);
    return (0, t.jsx)("li", {
      className: "flex-1",
      children: (0, t.jsxs)("button", {
        type: "button",
        onClick: i,
        className: (0, y.cn)("flex h-full w-full items-center gap-3 rounded-[14px] px-3 py-2.5 text-left transition", s ? "bg-primary text-white" : "bg-surface hover:bg-surface-2"),
        children: [(0, t.jsx)("span", {
          className: "h-11 w-11 shrink-0 overflow-hidden rounded-[10px] bg-surface-2",
          children: e.photo && (0, t.jsx)("img", {
            src: e.photo,
            srcSet: (0, k.srcSetOf)(e.photo),
            sizes: "44px",
            alt: "",
            loading: "lazy",
            decoding: "async",
            className: "h-full w-full object-cover"
          })
        }), (0, t.jsxs)("span", {
          className: "min-w-0 flex-1",
          children: [(0, t.jsxs)("span", {
            className: "flex items-center gap-2",
            children: [(0, t.jsx)("span", {
              className: "truncate text-[14.5px] font-semibold",
              children: e.name
            }), a && !s && (0, t.jsx)("span", {
              className: "pill bg-accent-soft text-[10px] text-accent-strong",
              children: "Mais perto"
            }), s && (0, t.jsx)("span", {
              className: "pill bg-white/15 text-[10px] text-white",
              children: "Sua loja"
            })]
          }), (0, t.jsxs)("span", {
            className: (0, y.cn)("mt-0.5 flex items-center gap-1.5 truncate text-[12px]", s ? "text-white/65" : "text-muted"),
            children: [r ? (0, t.jsx)("span", {
              className: (0, y.cn)("font-medium", r.open && (s ? "text-[#7fe0ad]" : "text-success")),
              children: r.open ? r.detail : r.label
            }) : (0, t.jsx)("span", {
              children: "Horário a confirmar"
            }), (0, t.jsxs)("span", {
              children: ["· ", e.city]
            }), n && (0, t.jsxs)("span", {
              children: ["· ", n]
            })]
          })]
        }), (0, t.jsx)(f.ArrowRight, {
          size: 16,
          className: (0, y.cn)("shrink-0", s ? "text-white" : "text-subtle")
        })]
      })
    })
  }
  var $ = e.i(58713);

  function S({
    className: e
  }) {
    let {
      data: r
    } = (0, a.useData)(), {
      storeId: n
    } = (0, s.useStore)(), o = (0, l.useNow)(), c = (0, i.getBanners)(r, n, "duplo", o).slice(0, 2);
    return 0 === c.length ? null : (0, t.jsx)("section", {
      className: e,
      "aria-label": "Campanhas",
      children: (0, t.jsx)("div", {
        className: "rail rail-bleed md:grid md:grid-cols-2 md:gap-4 md:overflow-visible md:[scroll-snap-type:none]",
        children: c.map(e => (0, t.jsx)("div", {
          "data-parallax": "rise",
          className: "w-[86%] overflow-hidden rounded-[16px] sm:w-[70%] md:w-auto",
          children: (0, t.jsx)($.BannerSlide, {
            banner: e,
            size: "duplo",
            className: "aspect-[1080/760] md:aspect-[2/1]"
          })
        }, e.id))
      })
    })
  }

  function z({
    position: e = 0,
    className: r
  }) {
    let {
      data: n
    } = (0, a.useData)(), {
      storeId: o
    } = (0, s.useStore)(), c = (0, l.useNow)(), d = (0, i.getBanners)(n, o, "faixa", c)[e];
    return d ? (0, t.jsx)("section", {
      "data-parallax": "rise",
      className: (0, y.cn)("overflow-hidden rounded-[16px]", r),
      "aria-label": "Campanha",
      children: (0, t.jsx)($.BannerSlide, {
        banner: d,
        size: "faixa",
        natural: !0,
        className: (0, $.isArtOnly)(d) ? void 0 : "aspect-[1080/620] md:aspect-[2400/560]"
      })
    }) : null
  }
  let M = "mt-10 md:mt-14";
  e.s(["HOME_SECTION_LABEL", 0, {
    ofertas: "Ofertas da loja",
    "banners-duplos": "Banners duplos",
    "mais-vendidos": "Mais vendidos",
    combos: "Combos",
    faixa: "Faixa de campanha",
    "trilho-ocasiao": "Trilho temático",
    ocasioes: "Compre pelo motivo",
    lojas: "Lojas perto de você"
  }, "HomeSections", 0, function() {
    let {
      data: e
    } = (0, a.useData)(), {
      homeSections: s,
      tagRail: i
    } = e.settings, l = e.occasions.find(e => e.tag === i.tag && e.active), r = {
      ofertas: () => (0, t.jsx)(o, {
        className: M
      }),
      "banners-duplos": () => (0, t.jsx)(S, {
        className: M
      }),
      "mais-vendidos": () => (0, t.jsx)(c, {
        className: M
      }),
      combos: () => (0, t.jsx)(m, {
        className: M
      }),
      faixa: () => (0, t.jsx)(z, {
        position: 0,
        className: M
      }),
      "trilho-ocasiao": () => (0, t.jsx)(d, {
        className: M,
        tag: i.tag,
        eyebrow: i.eyebrow,
        title: i.title,
        href: l ? `/produtos?ocasiao=${l.slug}` : "/produtos"
      }),
      ocasioes: () => (0, t.jsx)(g, {
        className: M
      }),
      lojas: () => (0, t.jsx)(N, {
        className: M
      })
    };
    return (0, t.jsx)(t.Fragment, {
      children: [...s].filter(e => e.visible).sort((e, t) => e.order - t.order).map(e => (0, t.jsx)("div", {
        children: r[e.id]?.()
      }, e.id))
    })
  }], 32864)
}, 73114, e => {
  "use strict";
  var t = e.i(43476),
    a = e.i(71645),
    s = e.i(834),
    i = e.i(11568),
    l = e.i(20865),
    r = e.i(63676),
    n = e.i(83742),
    o = e.i(26922);
  e.s(["StoreNotice", 0, function() {
    let {
      store: e,
      storeConfirmed: c,
      hydrated: d,
      requestGeolocation: x,
      locating: m,
      openPicker: p
    } = (0, n.useStore)(), [u, h] = (0, a.useState)(!1), {
      storeNotice: g
    } = (0, o.useData)().data.settings;
    return !g.enabled || !d || c || u ? null : (0, t.jsxs)("div", {
      className: "animate-rise mb-4 flex items-center gap-3 rounded-[16px] bg-primary px-4 py-3 text-white md:mb-5 md:px-5",
      children: [(0, t.jsx)(l.MapPin, {
        size: 18,
        className: "hidden shrink-0 text-accent sm:block"
      }), (0, t.jsxs)("p", {
        className: "min-w-0 flex-1 text-[13px] leading-snug md:text-[14px]",
        children: ["Mostrando preços e estoque da ", (0, t.jsxs)("strong", {
          className: "font-semibold",
          children: ["Kika ", e.name]
        }), ".", g.text && (0, t.jsxs)("span", {
          className: "hidden text-white/60 sm:inline",
          children: [" ", g.text]
        })]
      }), (0, t.jsxs)("div", {
        className: "flex shrink-0 items-center gap-1.5",
        children: [(0, t.jsxs)("button", {
          type: "button",
          onClick: x,
          disabled: m,
          className: "btn btn-light hidden px-3.5 py-2 text-[12.5px] sm:inline-flex",
          children: [m ? (0, t.jsx)(i.LoaderCircle, {
            size: 14,
            className: "animate-spin"
          }) : (0, t.jsx)(s.Crosshair, {
            size: 14
          }), "Usar localização"]
        }), (0, t.jsx)("button", {
          type: "button",
          onClick: p,
          className: "btn btn-light px-3.5 py-2 text-[12.5px] sm:bg-white/10 sm:text-white sm:hover:bg-white/20",
          children: "Escolher loja"
        }), (0, t.jsx)("button", {
          type: "button",
          onClick: () => h(!0),
          "aria-label": "Dispensar",
          className: "icon-btn h-8 w-8 text-white/60 hover:bg-white/10 hover:text-white",
          children: (0, t.jsx)(r.X, {
            size: 16
          })
        })]
      })]
    })
  }])
}, 87305, e => {
  "use strict";
  var t = e.i(43476),
    a = e.i(33209);

  function s(e, t) {
    let a = t.maxLng - t.minLng || .01,
      s = t.maxLat - t.minLat || .01;
    return {
      x: 74 + (e.lng - t.minLng) / a * 532,
      y: 74 + (t.maxLat - e.lat) / s * 372
    }
  }
  e.s(["RegionMap", 0, function({
    stores: e,
    activeId: i,
    userCoords: l,
    onSelect: r,
    className: n,
    "data-reveal": o
  }) {
    var c;
    let d, x, m = e.filter(e => null != e.lat && null != e.lng),
      p = (d = (c = [...m.map(e => ({
        lat: e.lat,
        lng: e.lng
      })), ...l ? [l] : []]).map(e => e.lat), {
        minLat: Math.min(...d),
        maxLat: Math.max(...d),
        minLng: Math.min(...x = c.map(e => e.lng)),
        maxLng: Math.max(...x)
      }),
      u = l ? s(l, p) : null;
    return (0, t.jsxs)("div", {
      "data-reveal": o,
      className: (0, a.cn)("relative overflow-hidden bg-[#E9E4DB]", n),
      children: [(0, t.jsxs)("svg", {
        viewBox: "0 0 680 520",
        className: "h-full w-full",
        role: "img",
        "aria-label": "Mapa esquemático das unidades Kika em Palhoça e São José",
        children: [(0, t.jsx)("path", {
          d: `M${584} 0 Q${530} ${156} ${610} ${286} Q${670} ${416} ${620} 520 L680 520 L680 0 Z`,
          fill: "#CFDCDF"
        }), (0, t.jsx)("path", {
          d: `M0 ${62.4} Q110 ${145.60000000000002} 70 ${270.40000000000003} Q30 ${395.2} 120 520 L0 520 Z`,
          fill: "#D8DCCB"
        }), (0, t.jsxs)("g", {
          stroke: "#FFFFFF",
          fill: "none",
          strokeLinecap: "round",
          children: [(0, t.jsx)("path", {
            d: `M${421.6} -10 Q${340} ${182} ${380.8} ${322.4} Q${421.6} ${442} ${340} ${530}`,
            strokeWidth: "11"
          }), (0, t.jsx)("path", {
            d: `M${421.6} -10 Q${340} ${182} ${380.8} ${322.4} Q${421.6} ${442} ${340} ${530}`,
            stroke: "#C08A3E",
            strokeWidth: "2",
            strokeDasharray: "14 12"
          }), (0, t.jsx)("path", {
            d: `M60 ${145.60000000000002} Q${272} ${114.4} 680 ${176.8}`,
            strokeWidth: "5"
          }), (0, t.jsx)("path", {
            d: `M40 ${343.2} Q${306} ${312} 680 ${364}`,
            strokeWidth: "5"
          }), (0, t.jsx)("path", {
            d: `M${149.6} 0 Q${204} ${260} ${163.2} 520`,
            strokeWidth: "4"
          })]
        }), (0, t.jsx)("text", {
          x: "52",
          y: "44",
          className: "fill-ink/35",
          fontSize: "15",
          fontWeight: "700",
          letterSpacing: "2",
          children: "SÃO JOSÉ"
        }), (0, t.jsx)("text", {
          x: "52",
          y: 494,
          className: "fill-ink/35",
          fontSize: "15",
          fontWeight: "700",
          letterSpacing: "2",
          children: "PALHOÇA"
        }), (0, t.jsx)("text", {
          x: 628,
          y: 260,
          textAnchor: "end",
          className: "fill-[#5A8494]",
          fontSize: "12",
          fontWeight: "600",
          letterSpacing: "1.5",
          children: "BAÍA SUL"
        }), u && (0, t.jsxs)("g", {
          children: [(0, t.jsxs)("circle", {
            cx: u.x,
            cy: u.y,
            r: "26",
            fill: "#1E8FD5",
            opacity: "0.16",
            children: [(0, t.jsx)("animate", {
              attributeName: "r",
              values: "18;30;18",
              dur: "2.8s",
              repeatCount: "indefinite"
            }), (0, t.jsx)("animate", {
              attributeName: "opacity",
              values: "0.22;0.05;0.22",
              dur: "2.8s",
              repeatCount: "indefinite"
            })]
          }), (0, t.jsx)("circle", {
            cx: u.x,
            cy: u.y,
            r: "7",
            fill: "#1E8FD5",
            stroke: "#fff",
            strokeWidth: "2.5"
          }), (0, t.jsx)("text", {
            x: u.x,
            y: u.y + 24,
            textAnchor: "middle",
            fontSize: "11",
            fontWeight: "700",
            className: "fill-[#0F5F93]",
            children: "Você"
          })]
        }), m.map((e, a) => {
          let {
            x: l,
            y: n
          } = s({
            lat: e.lat,
            lng: e.lng
          }, p), o = e.id === i;
          return (0, t.jsxs)("g", {
            onClick: () => r(e.id),
            className: "cursor-pointer",
            role: "button",
            tabIndex: 0,
            "aria-label": `Kika ${e.name}`,
            onKeyDown: t => {
              ("Enter" === t.key || " " === t.key) && r(e.id)
            },
            children: [(0, t.jsx)("circle", {
              cx: l,
              cy: n,
              r: "30",
              fill: "transparent"
            }), (0, t.jsxs)("g", {
              style: {
                transform: `translate(${l}px, ${n}px) scale(${o?1.18:1})`,
                transformOrigin: "center",
                transition: "transform 0.22s cubic-bezier(0.22,1,0.36,1)"
              },
              children: [(0, t.jsx)("ellipse", {
                cx: "0",
                cy: "3",
                rx: "11",
                ry: "4",
                fill: "#101014",
                opacity: "0.18"
              }), (0, t.jsxs)("g", {
                className: "fx-pin",
                style: {
                  "--fx-i": a
                },
                children: [(0, t.jsx)("path", {
                  d: "M0-34c-8.6 0-15.5 7-15.5 15.6C-15.5-9 0 2-0 2s15.5-11 15.5-20.4C15.5-27 8.6-34 0-34Z",
                  fill: o ? "#C08A3E" : "#121212",
                  stroke: "#fff",
                  strokeWidth: "2.5"
                }), (0, t.jsx)("circle", {
                  cx: "0",
                  cy: "-19",
                  r: "5.4",
                  fill: "#fff"
                })]
              })]
            }), (0, t.jsx)("text", {
              x: l,
              y: n + 22,
              textAnchor: "middle",
              fontSize: o ? "13" : "12",
              fontWeight: "700",
              className: o ? "fill-accent-strong" : "fill-ink",
              style: {
                paintOrder: "stroke",
                stroke: "#E9E4DB",
                strokeWidth: 4
              },
              children: e.name
            }), null != e.distanceKm && (0, t.jsxs)("text", {
              x: l,
              y: n + 36,
              textAnchor: "middle",
              fontSize: "10.5",
              fontWeight: "600",
              className: "fill-ink/55",
              style: {
                paintOrder: "stroke",
                stroke: "#E9E4DB",
                strokeWidth: 3.5
              },
              children: [e.distanceKm.toFixed(1).replace(".", ","), " km"]
            })]
          }, e.id)
        })]
      }), (0, t.jsx)("p", {
        className: "absolute bottom-2 right-3 text-[10.5px] text-ink/40",
        children: "Mapa esquemático · posição aproximada dos bairros"
      })]
    })
  }])
}, 74515, 90663, 65656, e => {
  "use strict";
  var t = e.i(43476),
    a = e.i(22016),
    s = e.i(89664),
    i = e.i(20865),
    l = e.i(77071),
    r = e.i(57049),
    n = e.i(33209),
    o = e.i(52002),
    c = e.i(91392);
  let d = {
    sm: {
      reais: "text-[15px]",
      cents: "text-[10px]",
      prefix: "text-[10px]",
      from: "text-[11px]"
    },
    md: {
      reais: "text-[18px] md:text-[20px]",
      cents: "text-[11px]",
      prefix: "text-[11px]",
      from: "text-[11.5px]"
    },
    lg: {
      reais: "text-[26px]",
      cents: "text-[14px]",
      prefix: "text-[13px]",
      from: "text-[13px]"
    },
    xl: {
      reais: "text-[40px] md:text-[46px]",
      cents: "text-[20px]",
      prefix: "text-[16px]",
      from: "text-[15px]"
    }
  };

  function x({
    cents: e,
    originalCents: a,
    size: s = "md",
    tone: i,
    stacked: l = !1,
    className: r
  }) {
    let {
      reais: o,
      centavos: m
    } = (0, c.moneyParts)(e), p = d[s], u = null != a && a > e, h = i ?? (u ? "sale" : "default"), g = u ? (0, t.jsx)("span", {
      className: (0, n.cn)("tabular-nums line-through", p.from, "light" === h ? "text-white/50" : "text-subtle"),
      children: (0, c.money)(a)
    }) : null;
    return (0, t.jsxs)("div", {
      className: (0, n.cn)(l ? "flex flex-col" : "flex flex-wrap items-baseline gap-x-2", r),
      children: [l && g, (0, t.jsxs)("span", {
        className: (0, n.cn)("font-display inline-flex items-start leading-none tabular-nums", "sale" === h ? "text-sale" : "light" === h ? "text-white" : "text-foreground"),
        children: [(0, t.jsx)("span", {
          className: (0, n.cn)("mr-0.5 mt-[0.2em] font-bold", p.prefix),
          children: "R$"
        }), (0, t.jsx)("span", {
          className: p.reais,
          children: o
        }), (0, t.jsxs)("span", {
          className: (0, n.cn)("mt-[0.15em] font-bold", p.cents),
          children: [",", m]
        })]
      }), !l && g]
    })
  }

  function m({
    percent: e,
    className: a
  }) {
    return e <= 0 ? null : (0, t.jsxs)("span", {
      className: (0, n.cn)("badge-off", a),
      children: ["-", e, "%"]
    })
  }

  function p({
    label: e,
    className: a
  }) {
    return (0, t.jsx)("span", {
      className: (0, n.cn)("inline-flex items-center rounded-full bg-primary px-2 py-[5px] text-[10px] font-bold leading-none text-white", a),
      children: e
    })
  }
  e.s(["DiscountBadge", 0, m, "PriceTag", 0, x, "PromoLabel", 0, p], 90663);
  let u = {
      disponivel: "Disponível",
      "ultimas-unidades": "Últimas unidades",
      indisponivel: "Indisponível"
    },
    h = {
      disponivel: "bg-ok-soft text-ok",
      "ultimas-unidades": "bg-warn-soft text-warn",
      indisponivel: "bg-off-soft text-off"
    },
    g = {
      disponivel: "bg-ok",
      "ultimas-unidades": "bg-warn",
      indisponivel: "bg-off"
    };

  function f({
    status: e,
    className: a,
    showDot: s = !0
  }) {
    return (0, t.jsxs)("span", {
      className: (0, n.cn)("pill", h[e], a),
      children: [s && (0, t.jsx)("span", {
        className: (0, n.cn)("h-1.5 w-1.5 rounded-full", g[e])
      }), u[e]]
    })
  }
  e.s(["AvailabilityPill", 0, f, "STOCK_LABEL", 0, u], 65656);
  var b = e.i(89567);
  e.s(["ProductCard", 0, function({
    product: e,
    variant: c = "grid",
    origin: d = "catalogo",
    className: u
  }) {
    let {
      add: h,
      lastAdded: g
    } = (0, r.useCart)(), j = (0, o.productShape)(e), v = "indisponivel" === e.stock, y = g === `produto:${e.id}`;
    return (0, t.jsxs)("article", {
      className: (0, n.cn)("group relative flex flex-col rounded-[16px] bg-surface p-2 transition duration-200", "hover:shadow-lift", "rail" === c && "w-[152px] sm:w-[180px] lg:w-[200px]", u),
      children: [(0, t.jsxs)(a.default, {
        href: `/produto/${e.slug}`,
        onClick: () => (0, b.setPendingOrigin)(d),
        className: "flex flex-1 flex-col",
        "aria-label": `${e.name} ${e.volume}`,
        children: [(0, t.jsxs)("div", {
          className: "relative aspect-square overflow-hidden rounded-[12px] bg-white",
          children: [(0, t.jsx)("div", {
            className: "absolute inset-0 p-1.5 transition-transform duration-300 ease-out group-hover:scale-[1.04]",
            children: (0, t.jsx)(o.ProductImage, {
              image: e.image,
              name: e.name,
              shape: j,
              colorway: e.colorway,
              dimmed: v
            })
          }), (0, t.jsxs)("div", {
            className: "absolute left-2 top-2 flex flex-col items-start gap-1",
            children: [e.discountPercent ? (0, t.jsx)(m, {
              percent: e.discountPercent
            }) : null, e.promoLabel && (0, t.jsx)(p, {
              label: e.promoLabel
            })]
          }), v && (0, t.jsx)("span", {
            className: "absolute inset-x-2 bottom-2 rounded-full bg-primary/85 py-1 text-center text-[10.5px] font-semibold text-white backdrop-blur-sm",
            children: "Indisponível nesta loja"
          }), !v && e.imageIsIllustrative && (0, t.jsx)("span", {
            className: "absolute bottom-1.5 left-2 text-[9px] font-medium text-subtle",
            children: "Imagem ilustrativa"
          })]
        }), (0, t.jsxs)("div", {
          className: "flex flex-1 flex-col px-1 pt-2.5",
          children: [(0, t.jsx)("h3", {
            className: "clamp-2 text-[13px] font-semibold leading-[1.3] text-foreground md:text-[13.5px]",
            children: e.name
          }), (0, t.jsx)("p", {
            className: "mt-0.5 text-[12px] text-muted",
            children: e.volume
          }), "ultimas-unidades" === e.stock && (0, t.jsx)(f, {
            status: e.stock,
            className: "mt-1.5 self-start"
          }), (0, t.jsxs)("div", {
            className: "mt-auto flex items-end justify-between gap-2 pt-2.5",
            children: [(0, t.jsx)(x, {
              cents: e.finalPriceCents,
              originalCents: e.originalPriceCents,
              stacked: !0
            }), (0, t.jsx)("span", {
              className: "h-9 w-9 shrink-0",
              "aria-hidden": "true"
            })]
          })]
        })]
      }), (0, t.jsx)("div", {
        className: "absolute bottom-3 right-3",
        children: v ? (0, t.jsx)(a.default, {
          href: `/produto/${e.slug}`,
          "aria-label": "Ver em quais lojas tem",
          title: "Ver em quais lojas tem",
          className: "icon-btn h-9 w-9 border border-border-strong bg-surface text-foreground hover:border-primary",
          children: (0, t.jsx)(i.MapPin, {
            size: 16
          })
        }) : (0, t.jsx)("button", {
          type: "button",
          onClick: t => {
            t.preventDefault(), t.stopPropagation(), h({
              kind: "produto",
              refId: e.id,
              name: e.name,
              volume: e.volume,
              unitPriceCents: e.finalPriceCents,
              image: e.image,
              colorway: e.colorway,
              shape: j
            }, 1, d)
          },
          "aria-label": `Adicionar ${e.name} ao carrinho`,
          className: (0, n.cn)("icon-btn h-9 w-9 text-white", y ? "bg-success" : "bg-primary hover:bg-primary-hover"),
          children: y ? (0, t.jsx)(s.Check, {
            size: 17,
            className: "animate-pop"
          }) : (0, t.jsx)(l.Plus, {
            size: 18,
            strokeWidth: 2.4
          })
        })
      })]
    })
  }], 74515)
}, 55396, e => {
  "use strict";
  var t = e.i(43476),
    a = e.i(22016),
    s = e.i(68877),
    i = e.i(24071),
    l = e.i(67927),
    r = e.i(25412),
    n = e.i(33209);

  function o({
    eyebrow: e,
    title: i,
    description: l,
    href: r,
    hrefLabel: c = "Ver tudo",
    tone: d = "dark",
    controls: x,
    className: m
  }) {
    let p = "light" === d;
    return (0, t.jsxs)("div", {
      "data-reveal": "title",
      className: (0, n.cn)("mb-4 flex items-end justify-between gap-4 md:mb-5", m),
      children: [(0, t.jsxs)("div", {
        className: "min-w-0",
        children: [e && (0, t.jsx)("p", {
          className: (0, n.cn)("eyebrow mb-1", p ? "text-accent" : "text-accent-strong"),
          children: e
        }), (0, t.jsx)("h2", {
          className: (0, n.cn)("font-display text-[20px] leading-[1.15] md:text-[26px]", p ? "text-white" : "text-foreground"),
          children: (0, t.jsx)("span", {
            className: "fx-mask",
            children: (0, t.jsx)("span", {
              className: "fx-line",
              children: i
            })
          })
        }), l && (0, t.jsx)("p", {
          className: (0, n.cn)("fx-desc mt-1 max-w-[62ch] text-[13px] leading-snug md:text-[14px]", p ? "text-white/60" : "text-muted"),
          children: l
        })]
      }), (0, t.jsxs)("div", {
        className: "flex shrink-0 items-center gap-2",
        children: [x, r && (0, t.jsxs)(a.default, {
          href: r,
          className: (0, n.cn)("group inline-flex items-center gap-1 whitespace-nowrap text-[13px] font-semibold transition", p ? "text-white hover:text-accent" : "text-foreground hover:text-accent-strong"),
          children: [c, (0, t.jsx)(s.ArrowRight, {
            size: 15,
            className: "transition group-hover:translate-x-0.5"
          })]
        })]
      })]
    })
  }
  e.s(["CarouselSection", 0, function({
    eyebrow: e,
    title: a,
    description: s,
    href: c,
    hrefLabel: d,
    tone: x = "dark",
    children: m,
    className: p,
    railClassName: u,
    id: h,
    stagger: g = "up",
    parallax: f
  }) {
    let {
      ref: b,
      canPrev: j,
      canNext: v,
      scrollBy: y
    } = (0, r.useCarousel)(), w = "light" === x, k = (e, a) => (0, t.jsx)("button", {
      type: "button",
      onClick: () => y(e),
      disabled: !a,
      "aria-label": 1 === e ? "Avançar" : "Voltar",
      className: (0, n.cn)("icon-btn hidden h-9 w-9 border md:inline-flex", w ? "border-white/20 text-white enabled:hover:bg-white enabled:hover:text-primary" : "border-border-strong bg-surface text-foreground enabled:hover:border-primary enabled:hover:bg-primary enabled:hover:text-white", "disabled:opacity-30"),
      children: 1 === e ? (0, t.jsx)(l.ChevronRight, {
        size: 17
      }) : (0, t.jsx)(i.ChevronLeft, {
        size: 17
      })
    });
    return (0, t.jsxs)("section", {
      id: h,
      className: p,
      children: [(0, t.jsx)(o, {
        eyebrow: e,
        title: a,
        description: s,
        href: c,
        hrefLabel: d,
        tone: x,
        controls: (j || v) && (0, t.jsxs)("div", {
          className: "mr-1 flex gap-1.5",
          children: [k(-1, j), k(1, v)]
        })
      }), (0, t.jsx)("div", {
        ref: b,
        "data-reveal-stagger": g || void 0,
        "data-parallax": f,
        className: (0, n.cn)("rail rail-bleed pb-1", u),
        children: m
      })]
    })
  }, "SectionHeader", 0, o])
}, 75775, e => {
  "use strict";
  var t = e.i(56420);
  let a = {
    name: "arrow-up-right",
    size: 24,
    node: [
      ["path", {
        d: "M7 7h10v10",
        key: "1tivn9"
      }],
      ["path", {
        d: "M7 17 17 7",
        key: "1vkiza"
      }]
    ]
  };
  a.node;
  let s = (0, t.default)(a);
  e.s(["ArrowUpRight", 0, s], 75775)
}, 89664, e => {
  "use strict";
  var t = e.i(56420);
  let a = {
    name: "check",
    size: 24,
    node: [
      ["path", {
        d: "M20 6 9 17l-5-5",
        key: "1gmf2c"
      }]
    ]
  };
  a.node;
  let s = (0, t.default)(a);
  e.s(["Check", 0, s], 89664)
}, 24071, e => {
  "use strict";
  var t = e.i(56420);
  let a = {
    name: "chevron-left",
    size: 24,
    node: [
      ["path", {
        d: "m15 18-6-6 6-6",
        key: "1wnfg3"
      }]
    ]
  };
  a.node;
  let s = (0, t.default)(a);
  e.s(["ChevronLeft", 0, s], 24071)
}, 67927, e => {
  "use strict";
  var t = e.i(56420);
  let a = {
    name: "chevron-right",
    size: 24,
    node: [
      ["path", {
        d: "m9 18 6-6-6-6",
        key: "mthhwq"
      }]
    ]
  };
  a.node;
  let s = (0, t.default)(a);
  e.s(["ChevronRight", 0, s], 67927)
}, 74544, e => {
  "use strict";
  var t = e.i(56420);
  let a = {
    name: "clock",
    size: 24,
    node: [
      ["circle", {
        cx: "12",
        cy: "12",
        r: "10",
        key: "1mglay"
      }],
      ["path", {
        d: "M12 6v6l4 2",
        key: "mmk7yg"
      }]
    ]
  };
  a.node;
  let s = (0, t.default)(a);
  e.s(["Clock", 0, s], 74544)
}, 834, e => {
  "use strict";
  var t = e.i(56420);
  let a = {
    name: "crosshair",
    size: 24,
    node: [
      ["circle", {
        cx: "12",
        cy: "12",
        r: "10",
        key: "1mglay"
      }],
      ["line", {
        x1: "22",
        x2: "18",
        y1: "12",
        y2: "12",
        key: "l9bcsi"
      }],
      ["line", {
        x1: "6",
        x2: "2",
        y1: "12",
        y2: "12",
        key: "13hhkx"
      }],
      ["line", {
        x1: "12",
        x2: "12",
        y1: "6",
        y2: "2",
        key: "10w3f3"
      }],
      ["line", {
        x1: "12",
        x2: "12",
        y1: "22",
        y2: "18",
        key: "15g9kq"
      }]
    ]
  };
  a.node;
  let s = (0, t.default)(a);
  e.s(["Crosshair", 0, s], 834)
}, 11568, e => {
  "use strict";
  var t = e.i(56420);
  let a = {
    name: "loader-circle",
    size: 24,
    node: [
      ["path", {
        d: "M21 12a9 9 0 1 1-6.219-8.56",
        key: "13zald"
      }]
    ],
    aliases: ["loader-2"]
  };
  a.node;
  let s = (0, t.default)(a);
  e.s(["LoaderCircle", 0, s], 11568)
}, 15227, e => {
  "use strict";
  var t = e.i(56420);
  let a = {
    name: "message-circle",
    size: 24,
    node: [
      ["path", {
        d: "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",
        key: "1sd12s"
      }]
    ]
  };
  a.node;
  let s = (0, t.default)(a);
  e.s(["MessageCircle", 0, s], 15227)
}, 77071, e => {
  "use strict";
  var t = e.i(56420);
  let a = {
    name: "plus",
    size: 24,
    node: [
      ["path", {
        d: "M5 12h14",
        key: "1ays0h"
      }],
      ["path", {
        d: "M12 5v14",
        key: "s699le"
      }]
    ]
  };
  a.node;
  let s = (0, t.default)(a);
  e.s(["Plus", 0, s], 77071)
}]);