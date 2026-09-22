(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 24411, e => {
  "use strict";
  var t = e.i(43476),
    r = e.i(33209);
  e.s(["Logo", 0, function({
    size: e = 40,
    className: a,
    priority: n = !1
  }) {
    return (0, t.jsx)("img", {
      src: "/brand/kika-logo-instagram-150.webp",
      alt: "Kika Bebidas",
      width: e,
      height: e,
      loading: n ? "eager" : "lazy",
      decoding: "async",
      className: (0, r.cn)("block shrink-0 rounded-full bg-black", a),
      style: {
        width: e,
        height: e
      }
    })
  }])
}, 52224, e => {
  "use strict";
  var t = e.i(43476),
    r = e.i(71645),
    a = e.i(70703),
    n = e.i(18566),
    s = e.i(22016),
    o = e.i(16327),
    i = e.i(20865),
    l = e.i(63448),
    c = e.i(75183),
    u = e.i(80799),
    d = e.i(83742),
    p = e.i(57049),
    f = e.i(26922),
    b = e.i(25412),
    h = e.i(79350),
    m = e.i(33209),
    g = e.i(24411),
    x = e.i(68877),
    w = e.i(66595),
    y = e.i(63676),
    v = e.i(92762),
    j = e.i(91392),
    k = e.i(52002),
    S = e.i(89567);

  function P({
    size: e = "md",
    onNavigate: a,
    className: o
  }) {
    let i = (0, n.useRouter)(),
      {
        data: l
      } = (0, f.useData)(),
      {
        storeId: c,
        store: u
      } = (0, d.useStore)(),
      p = l.settings.searchSuggestions,
      h = (0, b.useNow)(),
      [g, C] = (0, r.useState)(""),
      [N, E] = (0, r.useState)(!1),
      M = (0, r.useRef)(null),
      I = (0, r.useMemo)(() => g.trim().length < 2 ? [] : (0, v.filterCatalog)(l, c, {
        search: g
      }, h).slice(0, 6), [l, c, g, h]);
    (0, r.useEffect)(() => {
      let e = e => {
        M.current?.contains(e.target) || E(!1)
      };
      return document.addEventListener("mousedown", e), () => document.removeEventListener("mousedown", e)
    }, []);
    let O = e => {
        e.trim() && (E(!1), a?.(), i.push(`/produtos?busca=${encodeURIComponent(e.trim())}`))
      },
      $ = N && (g.trim().length >= 2 || 0 === g.trim().length && p.length > 0);
    return (0, t.jsxs)("div", {
      ref: M,
      className: (0, m.cn)("relative w-full", o),
      children: [(0, t.jsx)("form", {
        onSubmit: e => {
          e.preventDefault(), O(g)
        },
        role: "search",
        children: (0, t.jsxs)("div", {
          className: "relative",
          children: [(0, t.jsx)(w.Search, {
            size: "lg" === e ? 18 : 17,
            className: "pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-muted"
          }), (0, t.jsx)("input", {
            type: "search",
            value: g,
            onChange: e => {
              C(e.target.value), E(!0)
            },
            onFocus: () => E(!0),
            onKeyDown: e => "Escape" === e.key && E(!1),
            placeholder: `Buscar bebidas na Kika ${u.name}`,
            "aria-label": "Buscar produtos",
            enterKeyHint: "search",
            className: (0, m.cn)("w-full rounded-full border border-transparent bg-surface-2 pl-11 pr-11 text-foreground outline-none transition placeholder:text-muted", "focus:border-border-strong focus:bg-surface focus:shadow-[0_0_0_4px_rgba(18,18,18,0.06)]", "lg" === e ? "h-12 text-[15px]" : "h-11 text-[14px]")
          }), g ? (0, t.jsx)("button", {
            type: "button",
            onClick: () => C(""),
            "aria-label": "Limpar busca",
            className: "icon-btn absolute right-2 top-1/2 h-8 w-8 -translate-y-1/2 text-muted hover:bg-surface-3 hover:text-foreground",
            children: (0, t.jsx)(y.X, {
              size: 15
            })
          }) : "lg" === e && (0, t.jsx)("button", {
            type: "submit",
            "aria-label": "Buscar",
            className: "icon-btn absolute right-1.5 top-1/2 h-9 w-9 -translate-y-1/2 bg-primary text-white hover:bg-primary-hover",
            children: (0, t.jsx)(w.Search, {
              size: 16
            })
          })]
        })
      }), $ && (0, t.jsx)("div", {
        className: "animate-rise absolute inset-x-0 top-[calc(100%+8px)] z-50 overflow-hidden rounded-[16px] border border-border bg-surface shadow-panel",
        children: 0 === g.trim().length ? (0, t.jsxs)("div", {
          className: "p-4",
          children: [(0, t.jsx)("p", {
            className: "eyebrow mb-2.5 text-muted",
            children: "Mais procurados"
          }), (0, t.jsx)("div", {
            className: "flex flex-wrap gap-2",
            children: p.map(e => (0, t.jsx)("button", {
              type: "button",
              onClick: () => O(e),
              className: "rounded-full bg-surface-2 px-3 py-1.5 text-[13px] font-medium transition hover:bg-surface-3",
              children: e
            }, e))
          })]
        }) : 0 === I.length ? (0, t.jsxs)("div", {
          className: "px-4 py-6 text-center",
          children: [(0, t.jsxs)("p", {
            className: "text-[14px] font-semibold",
            children: ["Nada encontrado na Kika ", u.name]
          }), (0, t.jsx)("p", {
            className: "mt-1 text-[13px] text-muted",
            children: "Tente outra palavra ou veja o catálogo."
          })]
        }) : (0, t.jsxs)(t.Fragment, {
          children: [(0, t.jsx)("ul", {
            className: "max-h-[60vh] overflow-y-auto py-1",
            children: I.map(e => (0, t.jsx)("li", {
              children: (0, t.jsxs)(s.default, {
                href: `/produto/${e.slug}`,
                onClick: () => {
                  (0, S.setPendingOrigin)("busca"), E(!1), a?.()
                },
                className: "flex items-center gap-3 px-3 py-2 transition hover:bg-surface-2",
                children: [(0, t.jsx)("span", {
                  className: "h-12 w-12 shrink-0 rounded-[10px] border border-border bg-white p-0.5",
                  children: (0, t.jsx)(k.ProductImage, {
                    image: e.image,
                    name: "",
                    shape: (0, k.productShape)(e),
                    colorway: e.colorway,
                    dimmed: "indisponivel" === e.stock,
                    sizes: "48px"
                  })
                }), (0, t.jsxs)("span", {
                  className: "min-w-0 flex-1",
                  children: [(0, t.jsx)("span", {
                    className: "clamp-1 block text-[13.5px] font-semibold",
                    children: e.name
                  }), (0, t.jsxs)("span", {
                    className: "text-[12px] text-muted",
                    children: [e.volume, "indisponivel" === e.stock && " · em falta nesta loja", "ultimas-unidades" === e.stock && " · últimas unidades"]
                  })]
                }), (0, t.jsx)("span", {
                  className: (0, m.cn)("font-display shrink-0 text-[14px] tabular-nums", null != e.originalPriceCents && "text-sale"),
                  children: (0, j.money)(e.finalPriceCents)
                })]
              })
            }, e.id))
          }), (0, t.jsxs)("button", {
            type: "button",
            onClick: () => O(g),
            className: "flex w-full items-center justify-center gap-1.5 border-t border-border bg-surface-2 px-4 py-3 text-[13px] font-semibold transition hover:bg-surface-3",
            children: ["Ver todos os resultados para “", g.trim(), "”", (0, t.jsx)(x.ArrowRight, {
              size: 14
            })]
          })]
        })
      })]
    })
  }

  function C() {
    let {
      store: e,
      distanceKm: t,
      openPicker: r,
      storeConfirmed: a
    } = (0, d.useStore)(), n = (0, b.useStoreStatus)(e), s = (0, h.formatDistance)(t), o = n ? n.open ? n.detail : n.label : null;
    return {
      store: e,
      status: n,
      statusText: o,
      distance: s,
      openPicker: r,
      storeConfirmed: a
    }
  }

  function N() {
    let {
      store: e,
      status: r,
      statusText: a,
      distance: n,
      openPicker: s
    } = C();
    return (0, t.jsxs)("button", {
      type: "button",
      onClick: s,
      className: "group flex shrink-0 items-center gap-2.5 rounded-full border border-border bg-surface py-1.5 pl-1.5 pr-3 text-left transition hover:border-border-strong",
      children: [(0, t.jsx)("span", {
        className: "icon-btn h-8 w-8 bg-primary text-white",
        children: (0, t.jsx)(i.MapPin, {
          size: 15
        })
      }), (0, t.jsxs)("span", {
        className: "min-w-0",
        children: [(0, t.jsx)("span", {
          className: "block text-[10.5px] font-semibold uppercase leading-none tracking-[0.08em] text-muted",
          children: "Sua Kika"
        }), (0, t.jsxs)("span", {
          className: "mt-1 flex items-center gap-1.5 text-[13px] font-semibold leading-none",
          children: [(0, t.jsx)("span", {
            className: "max-w-[150px] truncate",
            children: e.name
          }), a && (0, t.jsxs)("span", {
            className: (0, m.cn)("hidden items-center gap-1 text-[12px] font-medium lg:inline-flex", r?.open ? "text-success" : "text-muted"),
            children: [(0, t.jsx)("span", {
              className: "h-1.5 w-1.5 rounded-full bg-current"
            }), a]
          }), n && (0, t.jsxs)("span", {
            className: "hidden text-[12px] font-medium text-muted xl:inline",
            children: ["· ", n]
          })]
        })]
      }), (0, t.jsx)(o.ChevronDown, {
        size: 15,
        className: "shrink-0 text-muted transition group-hover:text-foreground"
      })]
    })
  }

  function E() {
    let e = (0, n.usePathname)(),
      {
        count: r,
        openDrawer: a
      } = (0, p.useCart)(),
      {
        menu: o
      } = (0, f.useData)().data.settings,
      i = (r, a, n) => {
        let o = e.startsWith(r);
        return (0, t.jsxs)(s.default, {
          href: r,
          className: (0, m.cn)("flex flex-col items-center gap-0.5 rounded-[12px] px-2.5 py-1.5 text-[11.5px] font-medium transition", o ? "text-foreground" : "text-muted hover:bg-surface-2 hover:text-foreground"),
          children: [(0, t.jsx)(n, {
            size: 20,
            strokeWidth: o ? 2.2 : 1.8
          }), a]
        })
      };
    return (0, t.jsxs)("header", {
      className: "fx-header sticky top-0 z-50 hidden border-b border-border bg-background/95 backdrop-blur-md md:block",
      children: [(0, t.jsxs)("div", {
        className: "shell flex h-[76px] items-center gap-4 lg:gap-6",
        children: [(0, t.jsx)(s.default, {
          href: "/",
          "aria-label": "Kika Bebidas — início",
          className: "shrink-0",
          children: (0, t.jsx)(g.Logo, {
            size: 48,
            priority: !0
          })
        }), (0, t.jsx)(N, {}), (0, t.jsx)(P, {
          size: "lg",
          className: "min-w-0 flex-1"
        }), (0, t.jsxs)("nav", {
          className: "flex shrink-0 items-center gap-0.5",
          "aria-label": "Atalhos",
          children: [i("/ofertas", "Ofertas", u.Tag), i("/lojas", "Lojas", c.Store), (0, t.jsxs)("button", {
            type: "button",
            onClick: a,
            className: "relative flex flex-col items-center gap-0.5 rounded-[12px] px-2.5 py-1.5 text-[11.5px] font-medium text-muted transition hover:bg-surface-2 hover:text-foreground",
            "aria-label": `Carrinho com ${r} ${1===r?"item":"itens"}`,
            children: [(0, t.jsx)(l.ShoppingBag, {
              size: 20,
              strokeWidth: 1.8
            }), "Carrinho", r > 0 && (0, t.jsx)("span", {
              className: "animate-pop absolute right-1 top-0 flex h-[18px] min-w-[18px] items-center justify-center rounded-full bg-sale px-1 text-[10.5px] font-bold text-white",
              children: r
            })]
          })]
        })]
      }), (0, t.jsx)("div", {
        className: "shell flex h-10 items-center gap-6 text-[13px]",
        children: (0, t.jsx)("nav", {
          className: "no-scrollbar flex min-w-0 items-center gap-5 overflow-x-auto",
          "aria-label": "Categorias",
          children: o.map(e => (0, t.jsx)(s.default, {
            href: e.href,
            className: (0, m.cn)("shrink-0 transition", e.highlight ? "font-semibold text-sale hover:opacity-80" : "font-medium text-foreground/80 hover:text-foreground"),
            children: e.label
          }, e.id))
        })
      })]
    })
  }

  function M() {
    let {
      store: e,
      status: r,
      statusText: a,
      distance: n,
      openPicker: c
    } = C(), {
      count: u,
      openDrawer: d
    } = (0, p.useCart)();
    return (0, t.jsxs)(t.Fragment, {
      children: [(0, t.jsxs)("div", {
        className: "shell flex h-[60px] items-center gap-2.5 md:hidden",
        children: [(0, t.jsx)(s.default, {
          href: "/",
          "aria-label": "Kika Bebidas — início",
          className: "shrink-0",
          children: (0, t.jsx)(g.Logo, {
            size: 40,
            priority: !0
          })
        }), (0, t.jsx)("button", {
          type: "button",
          onClick: c,
          className: "tap flex min-w-0 flex-1 items-center gap-1 rounded-[12px] px-2 text-left",
          children: (0, t.jsxs)("span", {
            className: "min-w-0",
            children: [(0, t.jsxs)("span", {
              className: "flex items-center gap-1 text-[11px] font-semibold uppercase tracking-[0.06em] text-muted",
              children: [(0, t.jsx)(i.MapPin, {
                size: 11
              }), "Sua Kika"]
            }), (0, t.jsxs)("span", {
              className: "flex items-center gap-1 text-[14.5px] font-semibold leading-tight",
              children: [(0, t.jsx)("span", {
                className: "truncate",
                children: e.name
              }), (0, t.jsx)(o.ChevronDown, {
                size: 15,
                className: "shrink-0 text-muted"
              })]
            }), (a || n) && (0, t.jsxs)("span", {
              className: "flex items-center gap-1 truncate text-[11.5px] leading-tight",
              children: [a && (0, t.jsx)("span", {
                className: r?.open ? "text-success" : "text-muted",
                children: a
              }), n && (0, t.jsxs)("span", {
                className: "text-muted",
                children: ["· ", n]
              })]
            })]
          })
        }), (0, t.jsxs)("button", {
          type: "button",
          onClick: d,
          "aria-label": `Carrinho com ${u} ${1===u?"item":"itens"}`,
          className: "icon-btn relative h-11 w-11 shrink-0 bg-surface text-foreground shadow-card",
          children: [(0, t.jsx)(l.ShoppingBag, {
            size: 20
          }), u > 0 && (0, t.jsx)("span", {
            className: "animate-pop absolute -right-0.5 -top-0.5 flex h-[18px] min-w-[18px] items-center justify-center rounded-full bg-sale px-1 text-[10.5px] font-bold text-white",
            children: u
          })]
        })]
      }), (0, t.jsx)("div", {
        className: "fx-header sticky top-0 z-50 bg-background/95 pb-2.5 pt-1 backdrop-blur-md md:hidden",
        children: (0, t.jsx)("div", {
          className: "shell",
          children: (0, t.jsx)(P, {})
        })
      })]
    })
  }
  var I = e.i(1344);

  function O() {
    let {
      data: e
    } = (0, f.useData)(), r = e.settings.instagram.replace(/^@/, "").trim(), {
      selectStore: a
    } = (0, d.useStore)();
    return (0, t.jsx)("footer", {
      className: "mt-16 bg-primary text-white md:mt-24",
      children: (0, t.jsxs)("div", {
        className: "shell py-12 md:py-14",
        children: [(0, t.jsxs)("div", {
          className: "grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,2.4fr)]",
          children: [(0, t.jsxs)("div", {
            children: [(0, t.jsx)(g.Logo, {
              size: 64
            }), (0, t.jsx)("p", {
              className: "mt-4 max-w-[34ch] text-[14px] leading-relaxed text-white/60",
              children: "Tradição, qualidade e confiança. 5 lojas em Palhoça e São José — uma delas aberta 24 horas."
            }), r && (0, t.jsxs)("a", {
              href: `https://www.instagram.com/${r}/`,
              target: "_blank",
              rel: "noopener noreferrer",
              className: "mt-5 inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-[13px] font-semibold transition hover:bg-white hover:text-primary",
              children: ["@", r]
            })]
          }), (0, t.jsxs)("div", {
            children: [(0, t.jsx)("p", {
              className: "eyebrow mb-5 text-accent",
              children: "Nossas unidades"
            }), (0, t.jsx)("ul", {
              className: "grid gap-x-8 gap-y-6 sm:grid-cols-2 xl:grid-cols-3",
              children: e.stores.filter(e => e.active).map(e => {
                let r = (0, I.summarizeHours)(e);
                return (0, t.jsxs)("li", {
                  children: [(0, t.jsx)("p", {
                    className: "text-[15px] font-semibold",
                    children: e.name
                  }), (0, t.jsxs)("p", {
                    className: "mt-1 text-[13px] leading-snug text-white/55",
                    children: [e.address ?? "Endereço a confirmar", (0, t.jsx)("br", {}), e.city, " — ", e.state]
                  }), (0, t.jsx)("p", {
                    className: "mt-1 text-[12.5px] text-white/45",
                    children: r.length ? r.map(e => `${e.days} ${e.time}`).join(" · ") : "Horário a confirmar"
                  }), (0, t.jsxs)("div", {
                    className: "mt-2 flex gap-4 text-[12.5px] font-semibold",
                    children: [(0, t.jsx)("button", {
                      type: "button",
                      onClick: () => {
                        a(e.id), window.scrollTo({
                          top: 0,
                          behavior: "smooth"
                        })
                      },
                      className: "text-accent transition hover:text-white",
                      children: "Ver produtos"
                    }), (0, t.jsx)("a", {
                      href: (0, h.directionsUrl)(e),
                      target: "_blank",
                      rel: "noopener noreferrer",
                      onClick: () => (0, S.track)({
                        type: "directions",
                        storeId: e.id
                      }),
                      className: "text-white/60 transition hover:text-white",
                      children: "Como chegar"
                    })]
                  })]
                }, e.id)
              })
            })]
          })]
        }), (0, t.jsxs)("div", {
          className: "mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-[12px] text-white/45 md:flex-row md:items-center md:justify-between",
          children: [(0, t.jsx)("p", {
            children: "Venda de bebida alcoólica proibida para menores de 18 anos. Se beber, não dirija."
          }), (0, t.jsxs)("nav", {
            className: "flex flex-wrap gap-x-5 gap-y-2",
            children: [(0, t.jsx)(s.default, {
              href: "/produtos",
              className: "hover:text-white",
              children: "Produtos"
            }), (0, t.jsx)(s.default, {
              href: "/ofertas",
              className: "hover:text-white",
              children: "Ofertas"
            }), (0, t.jsx)(s.default, {
              href: "/combos",
              className: "hover:text-white",
              children: "Combos"
            }), (0, t.jsx)(s.default, {
              href: "/lojas",
              className: "hover:text-white",
              children: "Lojas"
            })]
          })]
        }), (0, t.jsx)("p", {
          className: "mt-5 text-[11px] leading-relaxed text-white/30",
          children: "Protótipo de demonstração. Preços, ofertas, estoque e métricas são fictícios. Imagens de produtos e ambientes são provisórias (bases de licença livre) e serão substituídas pelos arquivos oficiais."
        })]
      })
    })
  }
  var $ = e.i(56420);
  let A = {
    name: "house",
    size: 24,
    node: [
      ["path", {
        d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",
        key: "5wwlr5"
      }],
      ["path", {
        d: "M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
        key: "r6nss1"
      }]
    ],
    aliases: ["home"]
  };
  A.node;
  let _ = (0, $.default)(A),
    L = {
      name: "layout-grid",
      size: 24,
      node: [
        ["rect", {
          width: "7",
          height: "7",
          x: "3",
          y: "3",
          rx: "1",
          key: "1g98yp"
        }],
        ["rect", {
          width: "7",
          height: "7",
          x: "14",
          y: "3",
          rx: "1",
          key: "6d4xhi"
        }],
        ["rect", {
          width: "7",
          height: "7",
          x: "14",
          y: "14",
          rx: "1",
          key: "nxv5o0"
        }],
        ["rect", {
          width: "7",
          height: "7",
          x: "3",
          y: "14",
          rx: "1",
          key: "1bb6yr"
        }]
      ]
    };
  L.node;
  let z = [{
    href: "/",
    label: "Início",
    icon: _,
    match: e => "/" === e
  }, {
    href: "/produtos",
    label: "Categorias",
    icon: (0, $.default)(L),
    match: e => e.startsWith("/produto")
  }, {
    href: "/ofertas",
    label: "Ofertas",
    icon: u.Tag,
    match: e => e.startsWith("/ofertas")
  }, {
    href: "/lojas",
    label: "Lojas",
    icon: i.MapPin,
    match: e => e.startsWith("/lojas")
  }];

  function T() {
    let e = (0, n.usePathname)(),
      {
        count: r,
        openDrawer: a
      } = (0, p.useCart)();
    return (0, t.jsxs)(t.Fragment, {
      children: [(0, t.jsx)("div", {
        className: "h-[72px] md:hidden",
        "aria-hidden": "true"
      }), (0, t.jsx)("nav", {
        "aria-label": "Navegação principal",
        className: "pb-safe fixed inset-x-0 bottom-0 z-50 border-t border-border bg-surface/95 shadow-bar backdrop-blur-md md:hidden",
        children: (0, t.jsxs)("div", {
          className: "mx-auto grid h-[62px] max-w-lg grid-cols-5",
          children: [z.map(r => {
            let a = r.match(e),
              n = r.icon;
            return (0, t.jsxs)(s.default, {
              href: r.href,
              "aria-current": a ? "page" : void 0,
              className: (0, m.cn)("flex flex-col items-center justify-center gap-1 text-[10.5px] font-semibold transition", a ? "text-foreground" : "text-subtle"),
              children: [(0, t.jsx)("span", {
                className: (0, m.cn)("flex h-7 w-12 items-center justify-center rounded-full transition", a && "bg-surface-2"),
                children: (0, t.jsx)(n, {
                  size: 20,
                  strokeWidth: a ? 2.3 : 1.8
                })
              }), r.label]
            }, r.href)
          }), (0, t.jsxs)("button", {
            type: "button",
            onClick: a,
            className: "flex flex-col items-center justify-center gap-1 text-[10.5px] font-semibold text-subtle",
            children: [(0, t.jsxs)("span", {
              className: "relative flex h-7 w-12 items-center justify-center",
              children: [(0, t.jsx)(l.ShoppingBag, {
                size: 20,
                strokeWidth: 1.8
              }), r > 0 && (0, t.jsx)("span", {
                className: "animate-pop absolute right-1.5 -top-1 flex h-[17px] min-w-[17px] items-center justify-center rounded-full bg-sale px-1 text-[10px] font-bold text-white",
                children: r
              })]
            }), "Carrinho"]
          })]
        })
      })]
    })
  }
  let D = "[data-reveal], [data-reveal-stagger], [data-reveal-each]",
    R = (e, t, r) => Math.min(r, Math.max(t, e));

  function B() {
    return (0, r.useEffect)(() => {
      let e = document.documentElement,
        t = () => {
          window.scrollY > 8 ? e.setAttribute("data-scrolled", "") : e.removeAttribute("data-scrolled")
        };
      t(), window.addEventListener("scroll", t, {
        passive: !0
      });
      let r = window.matchMedia("(prefers-reduced-motion: reduce)").matches,
        a = 0 === window.innerHeight;
      if (r || a || !("IntersectionObserver" in window)) return () => window.removeEventListener("scroll", t);
      let n = new WeakSet,
        s = new Set,
        o = (e, t, r = 0) => {
          if ((e instanceof HTMLElement || e instanceof SVGElement) && e.style.setProperty("--fx-i", String(Math.min(r, 8))), e.setAttribute("data-fx", t), "in" === t) {
            let t = window.setTimeout(() => {
              e.setAttribute("data-fx", "done"), s.delete(t)
            }, 1600 + 80 * Math.min(r, 8));
            s.add(t)
          }
        },
        i = e => {
          e.hasAttribute("data-reveal-stagger") ? Array.from(e.children).forEach((e, t) => o(e, "in", t)) : o(e, "in", Number(e.getAttribute("data-fx-i") ?? 0))
        },
        l = new IntersectionObserver(e => {
          for (let t of e) t.isIntersecting && (l.unobserve(t.target), i(t.target))
        }, {
          rootMargin: "0px 0px -7% 0px",
          threshold: .12
        }),
        c = e => {
          let t = e.getBoundingClientRect();
          return t.top < .93 * window.innerHeight && t.bottom > 0
        },
        u = (e, t) => {
          if (n.has(e)) return;
          if (n.add(e), e.hasAttribute("data-reveal-each")) {
            let r = e.getAttribute("data-reveal-each") || "up";
            Array.from(e.children).forEach((e, a) => {
              e.setAttribute("data-reveal", r), e.setAttribute("data-fx-i", String(a % 4)), u(e, t)
            });
            return
          }
          let r = c(e);
          (!t || !r) && (e.hasAttribute("data-reveal-stagger") ? Array.from(e.children).forEach(e => o(e, "hidden")) : o(e, "hidden"), r ? requestAnimationFrame(() => requestAnimationFrame(() => i(e))) : l.observe(e))
        },
        d = new Set,
        p = new Set,
        f = e => {
          let t = window.innerHeight,
            r = e.getBoundingClientRect(),
            a = R((r.top + r.height / 2 - t / 2) / ((t + r.height) / 2), -1, 1),
            n = R((t - r.top) / (.32 * t), 0, 1),
            s = R(-r.top / Math.max(r.height, 1), 0, 1);
          e.style.setProperty("--fx-p", a.toFixed(4)), e.style.setProperty("--fx-in", n.toFixed(4)), e.style.setProperty("--fx-out", s.toFixed(4))
        },
        b = new IntersectionObserver(e => {
          for (let t of e) {
            let e = t.target;
            t.isIntersecting ? (p.add(e), f(e)) : p.delete(e)
          }
        }, {
          rootMargin: "15% 0px 15% 0px"
        }),
        h = (e, t) => {
          d.has(e) || t && "rise" === e.dataset.parallax && c(e) || (d.add(e), f(e), b.observe(e))
        },
        m = 0,
        g = () => {
          m || (m = requestAnimationFrame(() => {
            m = 0, p.forEach(f)
          }))
        };
      window.addEventListener("scroll", g, {
        passive: !0
      }), window.addEventListener("resize", g, {
        passive: !0
      });
      let x = (e, t) => {
        e instanceof Element && (e.matches(D) && u(e, t), e instanceof HTMLElement && e.hasAttribute("data-parallax") && h(e, t)), e.querySelectorAll(D).forEach(e => u(e, t)), e.querySelectorAll("[data-parallax]").forEach(e => h(e, t))
      };
      x(document.body, !0);
      let w = new MutationObserver(e => {
        for (let t of e) t.addedNodes.forEach(e => {
          if (!(e instanceof Element)) return;
          let t = e.parentElement;
          t?.hasAttribute("data-reveal-each") && n.has(t) && (e.setAttribute("data-reveal", t.getAttribute("data-reveal-each") || "up"), u(e, !1)), x(e, !1)
        })
      });
      return w.observe(document.body, {
        childList: !0,
        subtree: !0
      }), () => {
        window.removeEventListener("scroll", t), window.removeEventListener("scroll", g), window.removeEventListener("resize", g), l.disconnect(), b.disconnect(), w.disconnect(), s.forEach(e => window.clearTimeout(e)), m && cancelAnimationFrame(m)
      }
    }, []), null
  }

  function q() {
    let e = (0, n.usePathname)(),
      t = (0, n.useSearchParams)(),
      {
        storeId: a,
        hydrated: s
      } = (0, d.useStore)(),
      o = (0, r.useRef)(null),
      i = t.toString();
    return (0, r.useEffect)(() => {
      if (!s) return;
      let t = i ? `${e}?${i}` : e;
      o.current !== t && (o.current = t, (0, S.track)({
        type: "page_view",
        storeId: a,
        path: t,
        page: "/" === e ? "inicio" : e.startsWith("/produto/") ? "produto" : e.startsWith("/produtos") ? "catalogo" : e.startsWith("/ofertas") ? "ofertas" : e.startsWith("/combos") ? "combos" : e.startsWith("/lojas") ? "lojas" : "outra"
      }))
    }, [e, i, s, a]), null
  }
  let F = (0, a.default)(() => e.A(14515).then(e => e.CartDrawer), {
      loadableGenerated: {
        modules: [21543]
      },
      ssr: !1
    }),
    U = (0, a.default)(() => e.A(67426).then(e => e.StoreSelectorSheet), {
      loadableGenerated: {
        modules: [28439]
      },
      ssr: !1
    });
  e.s(["SiteChrome", 0, function({
    children: e
  }) {
    return (0, n.usePathname)().startsWith("/admin") ? (0, t.jsx)(t.Fragment, {
      children: e
    }) : (0, t.jsxs)("div", {
      className: "flex min-h-dvh flex-col",
      children: [(0, t.jsx)(M, {}), (0, t.jsx)(E, {}), (0, t.jsx)("main", {
        className: "flex-1",
        children: e
      }), (0, t.jsx)(O, {}), (0, t.jsx)(T, {}), (0, t.jsx)(F, {}), (0, t.jsx)(U, {}), (0, t.jsx)(B, {}), (0, t.jsx)(r.Suspense, {
        fallback: null,
        children: (0, t.jsx)(q, {})
      })]
    })
  }], 52224)
}, 52002, e => {
  "use strict";
  var t = e.i(43476),
    r = e.i(33209),
    a = e.i(49542),
    n = e.i(91931);
  e.s(["ProductImage", 0, function({
    image: e,
    name: s,
    shape: o,
    colorway: i,
    dimmed: l = !1,
    className: c,
    sizes: u,
    eager: d = !1
  }) {
    return e ? (0, t.jsx)("img", {
      src: e,
      srcSet: (0, a.srcSetOf)(e),
      alt: s,
      sizes: u ?? "(min-width: 1024px) 240px, 45vw",
      loading: d ? "eager" : "lazy",
      decoding: "async",
      draggable: !1,
      className: (0, r.cn)("h-full w-full object-contain transition duration-300", l && "opacity-40 grayscale", c)
    }) : (0, t.jsx)(n.ProductVisual, {
      shape: o,
      colorway: i,
      alt: s,
      dimmed: l,
      className: c
    })
  }, "productShape", 0, function(e, t = "garrafa-longneck") {
    return e.shape ?? e.category?.shape ?? t
  }])
}, 91931, e => {
  "use strict";
  var t = e.i(43476),
    r = e.i(33209);

  function a({
    shape: e,
    base: r,
    accent: n
  }) {
    switch (e) {
      case "lata":
        return (0, t.jsxs)("g", {
          children: [(0, t.jsx)("rect", {
            x: "33",
            y: "30",
            width: "54",
            height: "146",
            rx: "7",
            fill: r
          }), (0, t.jsx)("rect", {
            x: "33",
            y: "30",
            width: "54",
            height: "9",
            rx: "4",
            fill: "#C9CDD2"
          }), (0, t.jsx)("rect", {
            x: "33",
            y: "167",
            width: "54",
            height: "9",
            rx: "4",
            fill: "#C9CDD2"
          }), (0, t.jsx)("rect", {
            x: "33",
            y: "78",
            width: "54",
            height: "34",
            fill: n
          }), (0, t.jsx)("rect", {
            x: "33",
            y: "118",
            width: "54",
            height: "5",
            fill: "#fff",
            opacity: "0.5"
          })]
        });
      case "garrafa-destilado":
        return (0, t.jsxs)("g", {
          children: [(0, t.jsx)("path", {
            d: "M50 16h20v26c0 6 17 16 17 34v92c0 8-5 14-13 14H46c-8 0-13-6-13-14V76c0-18 17-28 17-34V16Z",
            fill: r
          }), (0, t.jsx)("rect", {
            x: "47",
            y: "12",
            width: "26",
            height: "12",
            rx: "2",
            fill: n
          }), (0, t.jsx)("rect", {
            x: "33",
            y: "96",
            width: "54",
            height: "46",
            fill: n,
            opacity: "0.92"
          }), (0, t.jsx)("rect", {
            x: "33",
            y: "148",
            width: "54",
            height: "4",
            fill: "#fff",
            opacity: "0.35"
          })]
        });
      case "garrafa-vinho":
        return (0, t.jsxs)("g", {
          children: [(0, t.jsx)("path", {
            d: "M52 14h16v40c0 8 14 14 14 32v78c0 8-5 12-12 12H50c-7 0-12-4-12-12V86c0-18 14-24 14-32V14Z",
            fill: r
          }), (0, t.jsx)("rect", {
            x: "49",
            y: "10",
            width: "22",
            height: "16",
            rx: "1",
            fill: n
          }), (0, t.jsx)("rect", {
            x: "38",
            y: "104",
            width: "44",
            height: "44",
            fill: "#F3EFE4",
            opacity: "0.94"
          }), (0, t.jsx)("rect", {
            x: "38",
            y: "104",
            width: "44",
            height: "6",
            fill: n
          })]
        });
      case "garrafa-pet":
        return (0, t.jsxs)("g", {
          children: [(0, t.jsx)("path", {
            d: "M48 18h24v14c0 6 15 12 15 30v100c0 8-5 12-13 12H46c-8 0-13-4-13-12V62c0-18 15-24 15-30V18Z",
            fill: r,
            opacity: "0.9"
          }), (0, t.jsx)("rect", {
            x: "45",
            y: "10",
            width: "30",
            height: "12",
            rx: "2",
            fill: n
          }), (0, t.jsx)("rect", {
            x: "33",
            y: "92",
            width: "54",
            height: "42",
            fill: n
          }), (0, t.jsx)("rect", {
            x: "33",
            y: "140",
            width: "54",
            height: "3",
            fill: "#fff",
            opacity: "0.4"
          }), (0, t.jsx)("rect", {
            x: "33",
            y: "150",
            width: "54",
            height: "3",
            fill: "#fff",
            opacity: "0.4"
          })]
        });
      case "galao":
        return (0, t.jsxs)("g", {
          children: [(0, t.jsx)("rect", {
            x: "26",
            y: "40",
            width: "68",
            height: "136",
            rx: "10",
            fill: r,
            opacity: "0.88"
          }), (0, t.jsx)("rect", {
            x: "50",
            y: "22",
            width: "20",
            height: "22",
            rx: "3",
            fill: n
          }), (0, t.jsx)("rect", {
            x: "26",
            y: "92",
            width: "68",
            height: "40",
            fill: n,
            opacity: "0.9"
          })]
        });
      case "saco":
        return (0, t.jsxs)("g", {
          children: [(0, t.jsx)("path", {
            d: "M28 60c0-7 6-12 14-12h36c8 0 14 5 14 12v96c0 9-7 16-16 16H44c-9 0-16-7-16-16V60Z",
            fill: r
          }), (0, t.jsx)("path", {
            d: "M40 48h40l-4-12H44l-4 12Z",
            fill: r,
            opacity: "0.75"
          }), (0, t.jsx)("rect", {
            x: "42",
            y: "30",
            width: "36",
            height: "8",
            rx: "3",
            fill: "#B9BFC4"
          }), (0, t.jsx)("rect", {
            x: "28",
            y: "96",
            width: "64",
            height: "40",
            fill: n,
            opacity: "0.9"
          }), (0, t.jsx)("path", {
            d: "M28 60c0-7 6-12 14-12h10v124H44c-9 0-16-7-16-16V60Z",
            fill: "#fff",
            opacity: "0.12"
          })]
        });
      case "caixa":
        return (0, t.jsxs)("g", {
          children: [(0, t.jsx)("rect", {
            x: "30",
            y: "40",
            width: "60",
            height: "132",
            fill: r
          }), (0, t.jsx)("path", {
            d: "M30 40h60l-10 14H40L30 40Z",
            fill: n,
            opacity: "0.85"
          }), (0, t.jsx)("rect", {
            x: "30",
            y: "96",
            width: "60",
            height: "38",
            fill: n,
            opacity: "0.9"
          }), (0, t.jsx)("rect", {
            x: "30",
            y: "40",
            width: "6",
            height: "132",
            fill: "#000",
            opacity: "0.18"
          })]
        });
      default:
        return (0, t.jsxs)("g", {
          children: [(0, t.jsx)("path", {
            d: "M53 12h14v34c0 7 14 13 14 30v90c0 8-5 12-12 12H47c-7 0-12-4-12-12V76c0-17 14-23 14-30V12Z",
            fill: r
          }), (0, t.jsx)("rect", {
            x: "50",
            y: "8",
            width: "20",
            height: "14",
            rx: "2",
            fill: n
          }), (0, t.jsx)("rect", {
            x: "35",
            y: "100",
            width: "46",
            height: "40",
            fill: n,
            opacity: "0.95"
          }), (0, t.jsx)("rect", {
            x: "35",
            y: "146",
            width: "46",
            height: "4",
            fill: "#fff",
            opacity: "0.4"
          })]
        })
    }
  }

  function n({
    shape: e
  }) {
    let r = "saco" === e || "caixa" === e || "galao" === e;
    return (0, t.jsx)("rect", {
      x: r ? 26 : 33,
      y: "saco" === e ? 30 : 8,
      width: r ? 68 : 54,
      height: "saco" === e ? 142 : 168,
      fill: `url(#gl-${e})`,
      style: {
        mixBlendMode: "overlay"
      }
    })
  }
  e.s(["ProductVisual", 0, function({
    shape: e,
    colorway: s,
    src: o,
    alt: i,
    className: l,
    dimmed: c
  }) {
    if (o) return (0, t.jsx)("img", {
      src: o,
      alt: i,
      loading: "lazy",
      className: (0, r.cn)("h-full w-full object-contain", c && "opacity-45 saturate-50", l)
    });
    let [u, d] = s;
    return (0, t.jsxs)("svg", {
      viewBox: "0 0 120 200",
      role: "img",
      "aria-label": i,
      className: (0, r.cn)("h-full w-full", c && "opacity-40 saturate-[0.35]", l),
      children: [(0, t.jsx)("defs", {
        children: (0, t.jsxs)("linearGradient", {
          id: `gl-${e}`,
          x1: "0",
          y1: "0",
          x2: "1",
          y2: "0",
          children: [(0, t.jsx)("stop", {
            offset: "0%",
            stopColor: "#000",
            stopOpacity: "0.22"
          }), (0, t.jsx)("stop", {
            offset: "26%",
            stopColor: "#fff",
            stopOpacity: "0.30"
          }), (0, t.jsx)("stop", {
            offset: "52%",
            stopColor: "#fff",
            stopOpacity: "0.04"
          }), (0, t.jsx)("stop", {
            offset: "100%",
            stopColor: "#000",
            stopOpacity: "0.26"
          })]
        })
      }), (0, t.jsx)(a, {
        shape: e,
        base: u,
        accent: d
      }), (0, t.jsx)(n, {
        shape: e
      })]
    })
  }])
}, 27382, e => {
  "use strict";
  var t = e.i(43476),
    r = e.i(26922),
    a = e.i(83742),
    n = e.i(57049);
  e.s(["AppProviders", 0, function({
    children: e
  }) {
    return (0, t.jsx)(r.DataProvider, {
      children: (0, t.jsx)(a.StoreProvider, {
        children: (0, t.jsx)(n.CartProvider, {
          children: e
        })
      })
    })
  }])
}, 57049, e => {
  "use strict";
  var t = e.i(43476),
    r = e.i(71645),
    a = e.i(89567),
    n = e.i(91392),
    s = e.i(26922),
    o = e.i(83742);
  let i = "kika:carrinho:v4",
    l = (0, r.createContext)(null);
  e.s(["CartProvider", 0, function({
    children: e
  }) {
    let {
      store: c,
      storeId: u
    } = (0, o.useStore)(), {
      data: d
    } = (0, s.useData)(), [p, f] = (0, r.useState)({}), [b, h] = (0, r.useState)(!1), [m, g] = (0, r.useState)(!1), [x, w] = (0, r.useState)(null);
    (0, r.useEffect)(() => {
      try {
        let e = window.localStorage.getItem(i);
        e && f(JSON.parse(e))
      } catch {}
      h(!0)
    }, []), (0, r.useEffect)(() => {
      if (b) try {
        window.localStorage.setItem(i, JSON.stringify(p))
      } catch {}
    }, [p, b]);
    let y = (0, r.useMemo)(() => p[u] ?? [], [p, u]),
      v = (0, r.useCallback)((e, t = 1, r) => {
        f(r => {
          let a = r[u] ?? [],
            n = a.findIndex(t => t.kind === e.kind && t.refId === e.refId),
            s = [...a];
          return n >= 0 ? s[n] = {
            ...s[n],
            quantity: s[n].quantity + t
          } : s.push({
            ...e,
            quantity: t
          }), {
            ...r,
            [u]: s
          }
        }), w(`${e.kind}:${e.refId}`), window.setTimeout(() => w(null), 1600), (0, a.track)({
          type: "add_to_cart",
          storeId: u,
          kind: e.kind,
          refId: e.refId,
          productId: "produto" === e.kind ? e.refId : void 0,
          origin: r,
          qty: t,
          valueCents: e.unitPriceCents * t
        })
      }, [u]),
      j = (0, r.useCallback)((e, t, r) => {
        f(a => {
          let n = a[u] ?? [],
            s = r <= 0 ? n.filter(r => r.kind !== e || r.refId !== t) : n.map(a => a.kind === e && a.refId === t ? {
              ...a,
              quantity: r
            } : a);
          return {
            ...a,
            [u]: s
          }
        })
      }, [u]),
      k = (0, r.useCallback)((e, t) => j(e, t, 0), [j]),
      S = (0, r.useCallback)(() => {
        f(e => ({
          ...e,
          [u]: []
        }))
      }, [u]),
      P = (0, r.useMemo)(() => y.reduce((e, t) => e + t.quantity, 0), [y]),
      C = (0, r.useMemo)(() => y.reduce((e, t) => e + t.unitPriceCents * t.quantity, 0), [y]),
      {
        orderGreeting: N,
        orderClosing: E
      } = d.settings,
      M = (0, r.useCallback)(() => {
        let e = N.replaceAll("{loja}", c.name),
          t = y.map(e => `• ${e.quantity}x ${e.name}${e.volume?` (${e.volume})`:""} — ${(0,n.money)(e.unitPriceCents*e.quantity)}`).join("\n"),
          r = `
Total: ${(0,n.money)(C)}`,
          a = E.trim() ? `

${E.trim()}` : "";
        return `${e}

${t}${r}${a}`
      }, [y, c.name, C, N, E]),
      I = (0, r.useMemo)(() => ({
        lines: y,
        count: P,
        subtotalCents: C,
        add: v,
        setQuantity: j,
        remove: k,
        clear: S,
        buildOrderMessage: M,
        drawerOpen: m,
        openDrawer: () => g(!0),
        closeDrawer: () => g(!1),
        lastAdded: x
      }), [y, P, C, v, j, k, S, M, m, x]);
    return (0, t.jsx)(l.Provider, {
      value: I,
      children: e
    })
  }, "useCart", 0, function() {
    let e = (0, r.useContext)(l);
    if (!e) throw Error("useCart precisa estar dentro de <CartProvider>");
    return e
  }])
}, 83742, 79350, e => {
  "use strict";
  var t = e.i(43476),
    r = e.i(71645);

  function a(e) {
    return e * Math.PI / 180
  }

  function n(e, t) {
    let r = e.map(e => {
      var r;
      let n, s;
      return {
        ...e,
        distanceKm: t && null != e.lat && null != e.lng ? (n = a((r = {
          lat: e.lat,
          lng: e.lng
        }).lat - t.lat), s = a(r.lng - t.lng), 12742 * Math.asin(Math.sqrt(Math.sin(n / 2) ** 2 + Math.sin(s / 2) ** 2 * Math.cos(a(t.lat)) * Math.cos(a(r.lat))))) : null
      }
    });
    return t ? r.sort((e, t) => (e.distanceKm ?? 999) - (t.distanceKm ?? 999)) : r
  }
  let s = [{
    prefix: "88130",
    label: "Centro, Palhoça",
    coords: {
      lat: -27.6455,
      lng: -48.67
    }
  }, {
    prefix: "88131",
    label: "Aririú, Palhoça",
    coords: {
      lat: -27.6748,
      lng: -48.6621
    }
  }, {
    prefix: "88132",
    label: "Jardim Eldorado, Palhoça",
    coords: {
      lat: -27.6305,
      lng: -48.6555
    }
  }, {
    prefix: "88133",
    label: "Brejaru, Palhoça",
    coords: {
      lat: -27.6361,
      lng: -48.6662
    }
  }, {
    prefix: "88134",
    label: "Passa Vinte, Palhoça",
    coords: {
      lat: -27.6291,
      lng: -48.6663
    }
  }, {
    prefix: "88135",
    label: "Bela Vista, Palhoça",
    coords: {
      lat: -27.6702,
      lng: -48.6802
    }
  }, {
    prefix: "88136",
    label: "São Sebastião, Palhoça",
    coords: {
      lat: -27.6545,
      lng: -48.6751
    }
  }, {
    prefix: "88137",
    label: "Pagani, Palhoça",
    coords: {
      lat: -27.6538,
      lng: -48.6785
    }
  }, {
    prefix: "88103",
    label: "Campinas, São José",
    coords: {
      lat: -27.5931,
      lng: -48.6132
    }
  }, {
    prefix: "88104",
    label: "Kobrasol, São José",
    coords: {
      lat: -27.5901,
      lng: -48.6142
    }
  }, {
    prefix: "88106",
    label: "Forquilhinhas, São José",
    coords: {
      lat: -27.5742,
      lng: -48.6461
    }
  }, {
    prefix: "88117",
    label: "Barreiros, São José",
    coords: {
      lat: -27.5588,
      lng: -48.6098
    }
  }, {
    prefix: "88122",
    label: "Sertão do Maruim, São José",
    coords: {
      lat: -27.5931,
      lng: -48.6902
    }
  }, {
    prefix: "88123",
    label: "Sertão do Maruim, São José",
    coords: {
      lat: -27.5874,
      lng: -48.6981
    }
  }];

  function o(e) {
    let t = e.replace(/\D/g, "");
    if (t.length < 5) return null;
    let r = t.slice(0, 5),
      a = s.find(e => e.prefix === r);
    return a ? {
      coords: a.coords,
      label: a.label
    } : t.startsWith("881") ? {
      coords: {
        lat: -27.6,
        lng: -48.65
      },
      label: "Grande Florianópolis"
    } : null
  }
  e.s(["directionsUrl", 0, function(e) {
    let t = e.address ? `${e.address}, ${e.neighborhood}, ${e.city} - ${e.state}` : `Kika Bebidas ${e.neighborhood}, ${e.city} - ${e.state}`;
    return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(t)}`
  }, "formatDistance", 0, function(e) {
    return null === e || Number.isNaN(e) ? null : e < .1 ? "bem pertinho" : e < 1 ? `${10*Math.round(100*e)} m` : `${e.toFixed(1).replace(".",",")} km`
  }, "lookupZip", 0, o, "rankStoresByDistance", 0, n, "whatsappUrl", 0, function(e, t) {
    if (!e.whatsapp) return null;
    let r = encodeURIComponent(t ?? `Ol\xe1! Vim pelo site da Kika e queria falar com a unidade ${e.name}.`);
    return `https://wa.me/${e.whatsapp}?text=${r}`
  }], 79350);
  var i = e.i(89567),
    l = e.i(26922);
  let c = "kika:loja:v2",
    u = "kika:local:v2",
    d = (0, r.createContext)(null);
  e.s(["StoreProvider", 0, function({
    children: e
  }) {
    let {
      data: a
    } = (0, l.useData)(), [s, p] = (0, r.useState)("loja-sao-sebastiao"), [f, b] = (0, r.useState)(!1), [h, m] = (0, r.useState)(null), [g, x] = (0, r.useState)(null), [w, y] = (0, r.useState)(null), [v, j] = (0, r.useState)(!1), [k, S] = (0, r.useState)(null), [P, C] = (0, r.useState)(!1), [N, E] = (0, r.useState)(!1), [M, I] = (0, r.useState)(!1);
    (0, r.useEffect)(() => {
      try {
        let e = window.localStorage.getItem(c);
        if (e) {
          let t = JSON.parse(e);
          p(t.id), b(!0), y(t.source ?? "manual")
        }
        let t = window.localStorage.getItem(u);
        if (t) {
          let e = JSON.parse(t);
          m(e.coords), x(e.label)
        }
      } catch {}
      I(!0)
    }, []);
    let O = a.settings.defaultStoreId;
    (0, r.useEffect)(() => {
      if (!M || f) return;
      let e = a.stores.find(e => e.id === O && e.active) ?? a.stores.find(e => e.active);
      e && p(e.id)
    }, [M, f, O, a.stores]);
    let $ = (0, r.useCallback)((e, t) => {
        try {
          window.localStorage.setItem(c, JSON.stringify({
            id: e,
            source: t
          }))
        } catch {}
      }, []),
      A = (0, r.useCallback)((e, t) => {
        try {
          e && t ? window.localStorage.setItem(u, JSON.stringify({
            coords: e,
            label: t
          })) : window.localStorage.removeItem(u)
        } catch {}
      }, []),
      _ = (0, r.useCallback)((e, t = "manual") => {
        p(e), b(!0), y(e => t ?? e), $(e, t), C(!1), E(!1), (0, i.track)({
          type: "store_select",
          storeId: e,
          method: t ?? "manual"
        })
      }, [$]),
      L = (0, r.useMemo)(() => n(a.stores.filter(e => e.active), h), [a.stores, h]),
      z = (0, r.useMemo)(() => a.stores.find(e => e.id === s) ?? a.stores[0], [a.stores, s]),
      T = (0, r.useMemo)(() => {
        let e = L.find(e => e.id === s);
        return e?.distanceKm ?? null
      }, [L, s]),
      D = (0, r.useCallback)(() => {
        "u" < typeof navigator || !navigator.geolocation ? S("Seu navegador não permite localização. Informe seu CEP.") : (j(!0), S(null), navigator.geolocation.getCurrentPosition(e => {
          let t = {
            lat: e.coords.latitude,
            lng: e.coords.longitude
          };
          m(t), x("Sua localização atual"), A(t, "Sua localização atual");
          let r = n(a.stores.filter(e => e.active), t)[0];
          r && (p(r.id), b(!0), y("gps"), $(r.id, "gps"), (0, i.track)({
            type: "store_select",
            storeId: r.id,
            method: "gps"
          })), j(!1), E(!1)
        }, () => {
          j(!1), S("Não conseguimos sua localização. Informe seu CEP.")
        }, {
          enableHighAccuracy: !1,
          timeout: 8e3,
          maximumAge: 3e5
        }))
      }, [a.stores, A, $]),
      R = (0, r.useCallback)(e => {
        let t = o(e);
        if (!t) return S("CEP fora da região atendida pelas nossas lojas."), {
          ok: !1,
          message: "Ainda não temos loja perto desse CEP. Escolha uma unidade abaixo."
        };
        m(t.coords), x(t.label), S(null), A(t.coords, t.label);
        let r = n(a.stores.filter(e => e.active), t.coords)[0];
        return r ? (p(r.id), b(!0), y("cep"), $(r.id, "cep"), (0, i.track)({
          type: "store_select",
          storeId: r.id,
          method: "cep"
        }), E(!1), {
          ok: !0,
          message: `A Kika mais perto de voc\xea \xe9 a ${r.name}.`
        }) : {
          ok: !0,
          message: t.label
        }
      }, [a.stores, A, $]),
      B = (0, r.useCallback)(() => {
        m(null), x(null), y("manual"), S(null), A(null, null)
      }, [A]),
      q = (0, r.useMemo)(() => ({
        store: z,
        storeId: s,
        storeConfirmed: f,
        rankedStores: L,
        distanceKm: T,
        coords: h,
        locationLabel: g,
        locationSource: w,
        locating: v,
        locationError: k,
        selectStore: _,
        requestGeolocation: D,
        applyZip: R,
        clearLocation: B,
        pickerOpen: P,
        openPicker: () => C(!0),
        closePicker: () => C(!1),
        onboardingOpen: N,
        dismissOnboarding: () => E(!1),
        hydrated: M
      }), [z, s, f, L, T, h, g, w, v, k, _, D, R, B, P, N, M]);
    return (0, t.jsx)(d.Provider, {
      value: q,
      children: e
    })
  }, "useStore", 0, function() {
    let e = (0, r.useContext)(d);
    if (!e) throw Error("useStore precisa estar dentro de <StoreProvider>");
    return e
  }], 83742)
}, 89567, e => {
  "use strict";
  var t = e.i(56563);
  let r = "events:v1",
    a = "orders-status:v1",
    n = "kika:visitante",
    s = "kika:visita",
    o = "kika:origem",
    i = "kika:pedido-seq",
    l = () => Math.random().toString(36).slice(2, 10) + Date.now().toString(36).slice(-4),
    c = [],
    u = 0;
  async function d() {
    if (u = 0, 0 === c.length) return;
    let e = c;
    c = [];
    let a = [...await (0, t.loadValue)(r) ?? [], ...e].slice(-6e3);
    await (0, t.saveValue)(r, a), (0, t.notifyChange)("events")
  }
  async function p() {
    return await (0, t.loadValue)(r) ?? []
  }
  async function f() {
    c = [], await (0, t.removeValue)(r), await (0, t.removeValue)(a), (0, t.notifyChange)("events"), (0, t.notifyChange)("orders")
  }
  async function b() {
    return await (0, t.loadValue)(a) ?? {}
  }
  async function h(e, r) {
    let n = await b();
    await (0, t.saveValue)(a, {
      ...n,
      [e]: r
    }), (0, t.notifyChange)("orders")
  }
  window.addEventListener("pagehide", () => {
    c.length && d()
  }), e.s(["clearRealEvents", 0, f, "flushNow", 0, function() {
    return u && window.clearTimeout(u), d()
  }, "loadOrderStatuses", 0, b, "loadRealEvents", 0, p, "nextOrderNumber", 0, function() {
    try {
      let e = Number(window.localStorage.getItem(i) ?? "5000") + 1;
      return window.localStorage.setItem(i, String(e)), e
    } catch {
      return 5e3 + Math.floor(900 * Math.random())
    }
  }, "saveOrderStatus", 0, h, "setPendingOrigin", 0, function(e) {
    try {
      window.sessionStorage.setItem(o, JSON.stringify({
        origin: e,
        at: Date.now()
      }))
    } catch {}
  }, "takePendingOrigin", 0, function() {
    try {
      let e = window.sessionStorage.getItem(o);
      if (window.sessionStorage.removeItem(o), e) {
        let {
          origin: t,
          at: r
        } = JSON.parse(e);
        if (Date.now() - r < 15e3) return t
      }
    } catch {}
    return "direto"
  }, "track", 0, function(e) {
    try {
      c.push({
        ...e,
        t: Date.now(),
        ... function() {
          let e, t, r = "anon",
            a = {
              id: l(),
              last: Date.now(),
              source: "direto"
            };
          try {
            (r = window.localStorage.getItem(n) ?? "") || (r = l(), window.localStorage.setItem(n, r));
            let e = window.sessionStorage.getItem(s),
              t = e ? JSON.parse(e) : null;
            a = t && Date.now() - t.last < 18e5 ? {
              ...t,
              last: Date.now()
            } : {
              id: l(),
              last: Date.now(),
              source: function() {
                try {
                  let e = new URLSearchParams(window.location.search).get("utm_source")?.toLowerCase() ?? "",
                    t = document.referrer ? new URL(document.referrer).hostname : "",
                    r = `${e} ${t}`;
                  if (/instagram|ig\b|facebook|fb\b/.test(r)) return "instagram";
                  if (/google|bing|yahoo|duckduckgo/.test(r)) return "google";
                  if (/whatsapp|wa\.me/.test(r)) return "whatsapp";
                  if (!e && (!t || t === window.location.hostname)) return "direto";
                  return "outros"
                } catch {
                  return "direto"
                }
              }()
            }, window.sessionStorage.setItem(s, JSON.stringify(a))
          } catch {}
          return {
            vid: r,
            sid: a.id,
            source: a.source,
            device: (e = window.matchMedia("(pointer: coarse)").matches, (t = window.innerWidth) < 768 ? "celular" : e && t < 1100 ? "tablet" : "computador")
          }
        }()
      }), u || (u = window.setTimeout(d, 700))
    } catch {}
  }])
}, 91392, e => {
  "use strict";
  let t = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL"
  });
  e.s(["discountPercent", 0, function(e, t) {
    return e <= 0 || t >= e ? 0 : Math.round((e - t) / e * 100)
  }, "formatZip", 0, function(e) {
    let t = e.replace(/\D/g, "").slice(0, 8);
    return t.length <= 5 ? t : `${t.slice(0,5)}-${t.slice(5)}`
  }, "fromDateInput", 0, function(e, t = !1) {
    return e ? `${e}T${t?"23:59:59":"00:00:00"}-03:00` : new Date().toISOString()
  }, "money", 0, function(e) {
    return t.format(e / 100)
  }, "moneyParts", 0, function(e) {
    let t = Math.round(e);
    return {
      reais: Math.floor(t / 100).toLocaleString("pt-BR"),
      centavos: String(t % 100).padStart(2, "0")
    }
  }, "normalize", 0, function(e) {
    return e.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().trim()
  }, "shortDate", 0, function(e) {
    let t = new Date(e);
    return Number.isNaN(t.getTime()) ? "—" : t.toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric"
    })
  }, "toDateInput", 0, function(e) {
    let t = new Date(e);
    if (Number.isNaN(t.getTime())) return "";
    let r = e => String(e).padStart(2, "0");
    return `${t.getFullYear()}-${r(t.getMonth()+1)}-${r(t.getDate())}`
  }])
}, 25412, 1344, e => {
  "use strict";
  var t = e.i(71645);
  let r = ["domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado"];

  function a(e) {
    let [t, r] = e.split(":").map(Number);
    return 60 * t + r
  }

  function n(e) {
    let [t, r] = e.split(":");
    return "00" === r ? `${t}h` : `${t}h${r}`
  }

  function s(e, t) {
    return e.hours.find(e => e.day === t) ?? null
  }

  function o(e, t = new Date) {
    if (0 === e.hours.length) return null;
    if (i(e)) return {
      open: !0,
      label: "Aberta 24h",
      detail: "Aberta 24 horas"
    };
    let l = t.getDay(),
      c = 60 * t.getHours() + t.getMinutes(),
      u = s(e, ((l - 1) % 7 + 7) % 7);
    if (u?.opens && u.closes) {
      let e = a(u.opens),
        t = a(u.closes);
      if (t < e && c < t) return {
        open: !0,
        label: "Aberta agora",
        detail: `Aberta at\xe9 ${n(u.closes)}`
      }
    }
    let d = s(e, l);
    if (d?.opens && d.closes) {
      let e = a(d.opens),
        t = a(d.closes);
      if (t < e ? c >= e : c >= e && c < t) return {
        open: !0,
        label: "Aberta agora",
        detail: `Aberta at\xe9 ${n(d.closes)}`
      };
      if (c < e) return {
        open: !1,
        label: "Fechada",
        detail: `Abre \xe0s ${n(d.opens)}`
      }
    }
    for (let t = 1; t <= 7; t++) {
      let a = (l + t) % 7,
        o = s(e, a);
      if (o?.opens) {
        let e = 1 === t ? "amanhã" : r[a];
        return {
          open: !1,
          label: "Fechada",
          detail: `Abre ${e} \xe0s ${n(o.opens)}`
        }
      }
    }
    return {
      open: !1,
      label: "Fechada",
      detail: "Consulte a unidade"
    }
  }

  function i(e) {
    return 7 === e.hours.length && e.hours.every(e => null !== e.opens && e.opens === e.closes)
  }
  e.s(["getStoreStatus", 0, o, "summarizeHours", 0, function(e) {
    if (0 === e.hours.length) return [];
    if (i(e)) return [{
      days: "Todos os dias",
      time: "24 horas"
    }];
    let t = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"],
      r = [],
      a = null,
      o = null,
      l = null,
      c = () => {
        if (null === a || null === o || null === l) return;
        let e = a === o ? t[a] : `${t[a]} a ${t[o]}`;
        r.push({
          days: e,
          time: l
        })
      };
    for (let t of [1, 2, 3, 4, 5, 6, 0]) {
      let r = s(e, t),
        i = r?.opens && r.closes ? `${n(r.opens)} - ${n(r.closes)}` : "Fechada";
      i === l ? o = t : (c(), a = t, o = t, l = i)
    }
    return c(), r
  }], 1344), e.s(["useBodyScrollLock", 0, function(e) {
    (0, t.useEffect)(() => {
      if (!e) return;
      let t = document.body.style.overflow;
      return document.body.style.overflow = "hidden", () => {
        document.body.style.overflow = t
      }
    }, [e])
  }, "useCarousel", 0, function() {
    let e = (0, t.useRef)(null),
      [r, a] = (0, t.useState)({
        canPrev: !1,
        canNext: !1
      }),
      n = () => {
        let t = e.current;
        if (!t) return;
        let r = t.scrollWidth - t.clientWidth;
        a({
          canPrev: t.scrollLeft > 8,
          canNext: t.scrollLeft < r - 8
        })
      };
    return (0, t.useEffect)(() => {
      let t = e.current;
      if (!t) return;
      n(), t.addEventListener("scroll", n, {
        passive: !0
      });
      let r = new ResizeObserver(n);
      return r.observe(t), () => {
        t.removeEventListener("scroll", n), r.disconnect()
      }
    }, []), {
      ref: e,
      ...r,
      scrollBy: t => {
        let r = e.current;
        r && r.scrollBy({
          left: t * Math.max(280, .82 * r.clientWidth),
          behavior: "smooth"
        })
      }
    }
  }, "useEscapeKey", 0, function(e, r) {
    let a = (0, t.useRef)(r);
    a.current = r, (0, t.useEffect)(() => {
      if (!e) return;
      let t = e => {
        "Escape" === e.key && a.current()
      };
      return window.addEventListener("keydown", t), () => window.removeEventListener("keydown", t)
    }, [e])
  }, "useMediaQuery", 0, function(e) {
    let [r, a] = (0, t.useState)(!1);
    return (0, t.useEffect)(() => {
      let t = window.matchMedia(e),
        r = () => a(t.matches);
      return r(), t.addEventListener("change", r), () => t.removeEventListener("change", r)
    }, [e]), r
  }, "useNow", 0, function() {
    let [e] = (0, t.useState)(() => new Date);
    return e
  }, "useStoreStatus", 0, function(e) {
    let [r, a] = (0, t.useState)(null);
    return (0, t.useEffect)(() => {
      if (!e) return void a(null);
      let t = () => a(o(e, new Date));
      t();
      let r = window.setInterval(t, 6e4);
      return () => window.clearInterval(r)
    }, [e]), r
  }], 25412)
}, 49542, e => {
  "use strict";
  let t = {
    "/products/absolut-1l.webp": [
      [400, "/products/absolut-1l-400.webp"],
      [800, "/products/absolut-1l.webp"]
    ],
    "/products/absolut-vanilia-750.webp": [
      [400, "/products/absolut-vanilia-750-400.webp"],
      [800, "/products/absolut-vanilia-750.webp"]
    ],
    "/products/agua-mineral-15l.webp": [
      [400, "/products/agua-mineral-15l-400.webp"],
      [800, "/products/agua-mineral-15l.webp"]
    ],
    "/products/amstel-350.webp": [
      [400, "/products/amstel-350-400.webp"],
      [800, "/products/amstel-350.webp"]
    ],
    "/products/aperol-750.webp": [
      [400, "/products/aperol-750-400.webp"],
      [800, "/products/aperol-750.webp"]
    ],
    "/products/ballantines-1l.webp": [
      [400, "/products/ballantines-1l-400.webp"],
      [800, "/products/ballantines-1l.webp"]
    ],
    "/products/baly-2l.webp": [
      [400, "/products/baly-2l-400.webp"],
      [800, "/products/baly-2l.webp"]
    ],
    "/products/beats-senses-269.webp": [
      [400, "/products/beats-senses-269-400.webp"],
      [800, "/products/beats-senses-269.webp"]
    ],
    "/products/beefeater-750.webp": [
      [400, "/products/beefeater-750-400.webp"],
      [800, "/products/beefeater-750.webp"]
    ],
    "/products/bombay-750.webp": [
      [400, "/products/bombay-750-400.webp"],
      [800, "/products/bombay-750.webp"]
    ],
    "/products/buchanans-12-1l.webp": [
      [400, "/products/buchanans-12-1l-400.webp"],
      [800, "/products/buchanans-12-1l.webp"]
    ],
    "/products/campari-998.webp": [
      [400, "/products/campari-998-400.webp"],
      [800, "/products/campari-998.webp"]
    ],
    "/products/carvao-3kg.webp": [
      [400, "/products/carvao-3kg-400.webp"],
      [800, "/products/carvao-3kg.webp"]
    ],
    "/products/carvao-5kg.webp": [
      [400, "/products/carvao-5kg-400.webp"],
      [800, "/products/carvao-5kg.webp"]
    ],
    "/products/casillero-cabernet-750.webp": [
      [400, "/products/casillero-cabernet-750-400.webp"],
      [800, "/products/casillero-cabernet-750.webp"]
    ],
    "/products/chivas-12-1l.webp": [
      [400, "/products/chivas-12-1l-400.webp"],
      [800, "/products/chivas-12-1l.webp"]
    ],
    "/products/ciroc-750.webp": [
      [400, "/products/ciroc-750-400.webp"],
      [800, "/products/ciroc-750.webp"]
    ],
    "/products/coca-2l.webp": [
      [400, "/products/coca-2l-400.webp"],
      [800, "/products/coca-2l.webp"]
    ],
    "/products/coca-zero-2l.webp": [
      [400, "/products/coca-zero-2l-400.webp"],
      [800, "/products/coca-zero-2l.webp"]
    ],
    "/products/corona-330.webp": [
      [400, "/products/corona-330-400.webp"],
      [800, "/products/corona-330.webp"]
    ],
    "/products/eisenbahn-355.webp": [
      [400, "/products/eisenbahn-355-400.webp"],
      [800, "/products/eisenbahn-355.webp"]
    ],
    "/products/fanta-2l.webp": [
      [400, "/products/fanta-2l-400.webp"],
      [800, "/products/fanta-2l.webp"]
    ],
    "/products/freixenet-prosecco-750.webp": [
      [400, "/products/freixenet-prosecco-750-400.webp"],
      [800, "/products/freixenet-prosecco-750.webp"]
    ],
    "/products/gelo-cubos-3kg.webp": [
      [400, "/products/gelo-cubos-3kg-400.webp"],
      [800, "/products/gelo-cubos-3kg.webp"]
    ],
    "/products/gelo-cubos-5kg.webp": [
      [400, "/products/gelo-cubos-5kg-400.webp"],
      [800, "/products/gelo-cubos-5kg.webp"]
    ],
    "/products/gordons-750.webp": [
      [400, "/products/gordons-750-400.webp"],
      [800, "/products/gordons-750.webp"]
    ],
    "/products/guarana-2l.webp": [
      [400, "/products/guarana-2l-400.webp"],
      [800, "/products/guarana-2l.webp"]
    ],
    "/products/heineken-330.webp": [
      [400, "/products/heineken-330-400.webp"],
      [800, "/products/heineken-330.webp"]
    ],
    "/products/hendricks-750.webp": [
      [400, "/products/hendricks-750-400.webp"],
      [800, "/products/hendricks-750.webp"]
    ],
    "/products/jack-1l.webp": [
      [400, "/products/jack-1l-400.webp"],
      [800, "/products/jack-1l.webp"]
    ],
    "/products/jameson-750.webp": [
      [400, "/products/jameson-750-400.webp"],
      [800, "/products/jameson-750.webp"]
    ],
    "/products/jw-black-1l.webp": [
      [400, "/products/jw-black-1l-400.webp"],
      [800, "/products/jw-black-1l.webp"]
    ],
    "/products/jw-red-1l.webp": [
      [400, "/products/jw-red-1l-400.webp"],
      [800, "/products/jw-red-1l.webp"]
    ],
    "/products/monster-473.webp": [
      [400, "/products/monster-473-400.webp"],
      [800, "/products/monster-473.webp"]
    ],
    "/products/monster-mango-473.webp": [
      [400, "/products/monster-mango-473-400.webp"],
      [800, "/products/monster-mango-473.webp"]
    ],
    "/products/redbull-250.webp": [
      [400, "/products/redbull-250-400.webp"],
      [800, "/products/redbull-250.webp"]
    ],
    "/products/schweppes-tonica-350.webp": [
      [400, "/products/schweppes-tonica-350-400.webp"],
      [800, "/products/schweppes-tonica-350.webp"]
    ],
    "/products/seagers-980.webp": [
      [400, "/products/seagers-980-400.webp"],
      [800, "/products/seagers-980.webp"]
    ],
    "/products/smirnoff-998.webp": [
      [400, "/products/smirnoff-998-400.webp"],
      [800, "/products/smirnoff-998.webp"]
    ],
    "/products/smirnoff-ice-275.webp": [
      [400, "/products/smirnoff-ice-275-400.webp"],
      [800, "/products/smirnoff-ice-275.webp"]
    ],
    "/products/spaten-350.webp": [
      [400, "/products/spaten-350-400.webp"],
      [800, "/products/spaten-350.webp"]
    ],
    "/products/sprite-2l.webp": [
      [400, "/products/sprite-2l-400.webp"],
      [800, "/products/sprite-2l.webp"]
    ],
    "/products/stella-330.webp": [
      [400, "/products/stella-330-400.webp"],
      [800, "/products/stella-330.webp"]
    ],
    "/products/tanqueray-750.webp": [
      [400, "/products/tanqueray-750-400.webp"],
      [800, "/products/tanqueray-750.webp"]
    ],
    "/products/tnt-269.webp": [
      [400, "/products/tnt-269-400.webp"],
      [800, "/products/tnt-269.webp"]
    ],
    "/banners/arte-aberto-24h-desktop.webp": [
      [1280, "/banners/arte-aberto-24h-desktop-1280.webp"],
      [2e3, "/banners/arte-aberto-24h-desktop.webp"]
    ],
    "/banners/arte-aberto-24h-mobile.webp": [
      [720, "/banners/arte-aberto-24h-mobile-720.webp"],
      [1064, "/banners/arte-aberto-24h-mobile.webp"]
    ],
    "/banners/arte-cerveja-gelada-desktop.webp": [
      [1280, "/banners/arte-cerveja-gelada-desktop-1280.webp"],
      [2e3, "/banners/arte-cerveja-gelada-desktop.webp"]
    ],
    "/banners/arte-cerveja-gelada-mobile.webp": [
      [720, "/banners/arte-cerveja-gelada-mobile-720.webp"],
      [1060, "/banners/arte-cerveja-gelada-mobile.webp"]
    ],
    "/banners/arte-churrasco-desktop.webp": [
      [1280, "/banners/arte-churrasco-desktop-1280.webp"],
      [2e3, "/banners/arte-churrasco-desktop.webp"]
    ],
    "/banners/arte-churrasco-mobile.webp": [
      [720, "/banners/arte-churrasco-mobile-720.webp"],
      [1056, "/banners/arte-churrasco-mobile.webp"]
    ],
    "/banners/arte-combo-gin-desktop.webp": [
      [800, "/banners/arte-combo-gin-desktop-800.webp"],
      [1600, "/banners/arte-combo-gin-desktop.webp"]
    ],
    "/banners/arte-combo-gin-mobile.webp": [
      [720, "/banners/arte-combo-gin-mobile-720.webp"],
      [1080, "/banners/arte-combo-gin-mobile.webp"]
    ],
    "/banners/arte-monster-desktop.webp": [
      [800, "/banners/arte-monster-desktop-800.webp"],
      [1600, "/banners/arte-monster-desktop.webp"]
    ],
    "/banners/arte-monster-mobile.webp": [
      [720, "/banners/arte-monster-mobile-720.webp"],
      [1080, "/banners/arte-monster-mobile.webp"]
    ],
    "/banners/arte-tanqueray-desktop.webp": [
      [1280, "/banners/arte-tanqueray-desktop-1280.webp"],
      [1946, "/banners/arte-tanqueray-desktop.webp"]
    ],
    "/banners/arte-tanqueray-mobile.webp": [
      [720, "/banners/arte-tanqueray-mobile-720.webp"],
      [1080, "/banners/arte-tanqueray-mobile.webp"]
    ],
    "/banners/destilados-desktop.webp": [
      [1280, "/banners/destilados-desktop-1280.webp"],
      [2e3, "/banners/destilados-desktop.webp"]
    ],
    "/banners/destilados-mobile.webp": [
      [720, "/banners/destilados-mobile-720.webp"],
      [1080, "/banners/destilados-mobile.webp"]
    ],
    "/banners/fim-de-semana-desktop.webp": [
      [1280, "/banners/fim-de-semana-desktop-1280.webp"],
      [2e3, "/banners/fim-de-semana-desktop.webp"]
    ],
    "/banners/fim-de-semana-mobile.webp": [
      [720, "/banners/fim-de-semana-mobile-720.webp"],
      [1080, "/banners/fim-de-semana-mobile.webp"]
    ],
    "/banners/presentes-desktop.webp": [
      [1280, "/banners/presentes-desktop-1280.webp"],
      [2e3, "/banners/presentes-desktop.webp"]
    ],
    "/banners/presentes-mobile.webp": [
      [720, "/banners/presentes-mobile-720.webp"],
      [1080, "/banners/presentes-mobile.webp"]
    ],
    "/combos/combo-churrasco.webp": [
      [480, "/combos/combo-churrasco-480.webp"],
      [900, "/combos/combo-churrasco.webp"]
    ],
    "/combos/combo-esquenta.webp": [
      [480, "/combos/combo-esquenta-480.webp"],
      [900, "/combos/combo-esquenta.webp"]
    ],
    "/combos/combo-festa.webp": [
      [480, "/combos/combo-festa-480.webp"],
      [900, "/combos/combo-festa.webp"]
    ],
    "/combos/combo-gelada.webp": [
      [480, "/combos/combo-gelada-480.webp"],
      [900, "/combos/combo-gelada.webp"]
    ],
    "/combos/combo-gin.webp": [
      [480, "/combos/combo-gin-480.webp"],
      [900, "/combos/combo-gin.webp"]
    ],
    "/combos/combo-praia.webp": [
      [480, "/combos/combo-praia-480.webp"],
      [900, "/combos/combo-praia.webp"]
    ],
    "/combos/combo-whisky.webp": [
      [480, "/combos/combo-whisky-480.webp"],
      [900, "/combos/combo-whisky.webp"]
    ],
    "/stores/loja-1.webp": [
      [160, "/stores/loja-1-160.webp"],
      [800, "/stores/loja-1.webp"]
    ],
    "/stores/loja-2.webp": [
      [160, "/stores/loja-2-160.webp"],
      [800, "/stores/loja-2.webp"]
    ],
    "/stores/loja-3.webp": [
      [160, "/stores/loja-3-160.webp"],
      [800, "/stores/loja-3.webp"]
    ],
    "/stores/loja-4.webp": [
      [160, "/stores/loja-4-160.webp"],
      [800, "/stores/loja-4.webp"]
    ],
    "/stores/loja-5.webp": [
      [160, "/stores/loja-5-160.webp"],
      [800, "/stores/loja-5.webp"]
    ]
  };
  e.s(["srcSetOf", 0, function(e) {
    if (!e) return;
    let r = t[e];
    return r ? r.map(([e, t]) => `${t} ${e}w`).join(", ") : void 0
  }], 49542)
}, 92762, e => {
  "use strict";
  var t = e.i(91392);

  function r(e, t, r) {
    let a = e.inventory.find(e => e.storeId === t && e.productId === r);
    return a?.status ?? "indisponivel"
  }

  function a(e, t, r) {
    if (!e.active) return !1;
    let a = r.getTime();
    return !(a < new Date(e.startsAt).getTime() || a > new Date(e.endsAt).getTime()) && (null === e.storeIds || !!t && e.storeIds.includes(t))
  }

  function n(e, t, r, n) {
    let s = e.promotions.filter(e => e.productId === t && a(e, r, n));
    return 0 === s.length ? null : s.reduce((e, t) => t.promoPriceCents < e.promoPriceCents ? t : e)
  }

  function s(e, a, s, o) {
    let i = n(e, a.id, s, o),
      l = e.categories.find(e => e.id === a.categoryId) ?? e.categories[0],
      c = i ? i.promoPriceCents : a.priceCents;
    return {
      ...a,
      storeId: s,
      stock: r(e, s, a.id),
      category: l,
      finalPriceCents: c,
      originalPriceCents: i ? a.priceCents : null,
      discountPercent: i ? (0, t.discountPercent)(a.priceCents, i.promoPriceCents) : null,
      promoLabel: i?.label ?? null
    }
  }

  function o(e, t, r) {
    return e.products.filter(e => e.active).map(a => s(e, a, t, r))
  }
  let i = {
    disponivel: 0,
    "ultimas-unidades": 1,
    indisponivel: 2
  };
  e.s(["campaignState", 0, function(e, t) {
    if (!e.active) return "inativa";
    let r = t.getTime();
    return r < new Date(e.startsAt).getTime() ? "agendada" : r > new Date(e.endsAt).getTime() ? "encerrada" : "vigente"
  }, "countAvailable", 0, function(e, t) {
    return e.inventory.filter(e => e.storeId === t && "indisponivel" !== e.status).length
  }, "filterCatalog", 0, function(e, r, a, n) {
    let s = a.categorySlug ? e.categories.find(e => e.slug === a.categorySlug) : null,
      l = a.search ? (0, t.normalize)(a.search) : "",
      c = o(e, r, n);
    switch (s && (c = c.filter(e => e.categoryId === s.id)), a.tag && (c = c.filter(e => e.tags.includes(a.tag))), a.brands?.length && (c = c.filter(e => a.brands.includes(e.brand))), a.onlyPromo && (c = c.filter(e => null !== e.originalPriceCents)), a.onlyAvailable && (c = c.filter(e => "indisponivel" !== e.stock)), null != a.minPriceCents && (c = c.filter(e => e.finalPriceCents >= a.minPriceCents)), null != a.maxPriceCents && (c = c.filter(e => e.finalPriceCents <= a.maxPriceCents)), l && (c = c.filter(e => {
        let r = (0, t.normalize)(`${e.name} ${e.brand} ${e.volume} ${e.category.name} ${e.tags.join(" ")}`);
        return l.split(/\s+/).every(e => r.includes(e))
      })), a.sort) {
      case "menor-preco":
        c.sort((e, t) => e.finalPriceCents - t.finalPriceCents);
        break;
      case "maior-preco":
        c.sort((e, t) => t.finalPriceCents - e.finalPriceCents);
        break;
      case "maior-desconto":
        c.sort((e, t) => (t.discountPercent ?? 0) - (e.discountPercent ?? 0));
        break;
      case "a-z":
        c.sort((e, t) => e.name.localeCompare(t.name, "pt-BR"));
        break;
      default:
        c.sort((e, t) => i[e.stock] - i[t.stock] || t.popularity - e.popularity)
    }
    return c
  }, "getAvailabilityAcrossStores", 0, function(e, t, a) {
    let s = e.products.find(e => e.id === t);
    return e.stores.filter(e => e.active).map(o => {
      let i = s ? n(e, s.id, o.id, a) : null;
      return {
        store: o,
        stock: r(e, o.id, t),
        finalPriceCents: i ? i.promoPriceCents : s?.priceCents ?? 0
      }
    })
  }, "getBanners", 0, function(e, t, r, n) {
    return e.banners.filter(e => e.format === r && a(e, t, n)).sort((e, t) => e.order - t.order)
  }, "getBestSellers", 0, function(e, t, r, a = 12) {
    return o(e, t, r).filter(e => "indisponivel" !== e.stock).sort((e, t) => t.popularity - e.popularity).slice(0, a)
  }, "getBrandFacets", 0, function(e, t, r, a) {
    let n = a ? e.categories.find(e => e.slug === a) : null,
      s = new Map;
    for (let a of o(e, t, r)) n && a.categoryId !== n.id || s.set(a.brand, (s.get(a.brand) ?? 0) + 1);
    return [...s.entries()].map(([e, t]) => ({
      brand: e,
      count: t
    })).sort((e, t) => e.brand.localeCompare(t.brand, "pt-BR"))
  }, "getComboIssues", 0, function(e, t) {
    return t.items.flatMap(t => {
      let r = e.products.find(e => e.id === t.productId);
      return r ? r.active ? [] : [`${r.name} est\xe1 oculto no cat\xe1logo`] : ["Um item foi excluído do catálogo"]
    })
  }, "getOffers", 0, function(e, t, r, a) {
    let n = o(e, t, r).filter(e => null !== e.originalPriceCents).sort((e, t) => {
      let r = i[e.stock] - i[t.stock];
      return 0 !== r ? r : (t.discountPercent ?? 0) - (e.discountPercent ?? 0)
    });
    return a ? n.slice(0, a) : n
  }, "getProductBySlug", 0, function(e, t) {
    return e.products.find(e => e.slug === t && e.active) ?? null
  }, "getProductUsage", 0, function(e, t) {
    let r = `/produto/${t.slug}`;
    return {
      combos: e.combos.filter(e => e.items.some(e => e.productId === t.id)),
      banners: e.banners.filter(e => e.linkedProductId === t.id || e.href === r),
      promotions: e.promotions.filter(e => e.productId === t.id)
    }
  }, "getProductsByCategory", 0, function(e, t, r, a, n) {
    let s = o(e, t, a).filter(e => e.categoryId === r).sort((e, t) => i[e.stock] - i[t.stock] || t.popularity - e.popularity);
    return n ? s.slice(0, n) : s
  }, "getProductsByTag", 0, function(e, t, r, a, n) {
    let s = o(e, t, a).filter(e => e.tags.includes(r)).sort((e, t) => i[e.stock] - i[t.stock] || t.popularity - e.popularity);
    return n ? s.slice(0, n) : s
  }, "getStock", 0, r, "getStoreCombos", 0, function(e, a, n) {
    return e.combos.filter(e => e.active).filter(e => null === e.storeIds || e.storeIds.includes(a)).map(n => {
      let s, o, i, l, c;
      return i = Math.max(0, (o = (s = n.items.map(t => ({
        product: e.products.find(e => e.id === t.productId),
        quantity: t.quantity,
        stock: r(e, a, t.productId)
      })).filter(e => e.product)).reduce((e, t) => e + t.product.priceCents * t.quantity, 0)) - n.priceCents), l = null === n.storeIds || n.storeIds.includes(a), c = s.every(e => "indisponivel" !== e.stock), {
        ...n,
        storeId: a,
        products: s,
        listPriceCents: o,
        savingsCents: i,
        discountPercent: (0, t.discountPercent)(o, n.priceCents),
        available: l && c && s.length === n.items.length
      }
    }).sort((e, t) => Number(t.available) - Number(e.available) || t.savingsCents - e.savingsCents)
  }, "resolveProduct", 0, s])
}, 68877, e => {
  "use strict";
  var t = e.i(56420);
  let r = {
    name: "arrow-right",
    size: 24,
    node: [
      ["path", {
        d: "M5 12h14",
        key: "1ays0h"
      }],
      ["path", {
        d: "m12 5 7 7-7 7",
        key: "xquz4c"
      }]
    ]
  };
  r.node;
  let a = (0, t.default)(r);
  e.s(["ArrowRight", 0, a], 68877)
}, 16327, e => {
  "use strict";
  var t = e.i(56420);
  let r = {
    name: "chevron-down",
    size: 24,
    node: [
      ["path", {
        d: "m6 9 6 6 6-6",
        key: "qrunsl"
      }]
    ]
  };
  r.node;
  let a = (0, t.default)(r);
  e.s(["ChevronDown", 0, a], 16327)
}, 20865, e => {
  "use strict";
  var t = e.i(56420);
  let r = {
    name: "map-pin",
    size: 24,
    node: [
      ["path", {
        d: "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",
        key: "1r0f0z"
      }],
      ["circle", {
        cx: "12",
        cy: "10",
        r: "3",
        key: "ilqhr7"
      }]
    ]
  };
  r.node;
  let a = (0, t.default)(r);
  e.s(["MapPin", 0, a], 20865)
}, 66595, e => {
  "use strict";
  var t = e.i(56420);
  let r = {
    name: "search",
    size: 24,
    node: [
      ["path", {
        d: "m21 21-4.34-4.34",
        key: "14j7rj"
      }],
      ["circle", {
        cx: "11",
        cy: "11",
        r: "8",
        key: "4ej97u"
      }]
    ]
  };
  r.node;
  let a = (0, t.default)(r);
  e.s(["Search", 0, a], 66595)
}, 63448, e => {
  "use strict";
  var t = e.i(56420);
  let r = {
    name: "shopping-bag",
    size: 24,
    node: [
      ["path", {
        d: "M16 10a4 4 0 0 1-8 0",
        key: "1ltviw"
      }],
      ["path", {
        d: "M3.103 6.034h17.794",
        key: "awc11p"
      }],
      ["path", {
        d: "M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z",
        key: "o988cm"
      }]
    ]
  };
  r.node;
  let a = (0, t.default)(r);
  e.s(["ShoppingBag", 0, a], 63448)
}, 75183, e => {
  "use strict";
  var t = e.i(56420);
  let r = {
    name: "store",
    size: 24,
    node: [
      ["path", {
        d: "M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5",
        key: "slp6dd"
      }],
      ["path", {
        d: "M17.774 10.31a1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.451 0 1.12 1.12 0 0 0-1.548 0 2.5 2.5 0 0 1-3.452 0 1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244",
        key: "o0xfot"
      }],
      ["path", {
        d: "M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05",
        key: "wn3emo"
      }]
    ]
  };
  r.node;
  let a = (0, t.default)(r);
  e.s(["Store", 0, a], 75183)
}, 80799, e => {
  "use strict";
  var t = e.i(56420);
  let r = {
    name: "tag",
    size: 24,
    node: [
      ["path", {
        d: "M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",
        key: "vktsd0"
      }],
      ["circle", {
        cx: "7.5",
        cy: "7.5",
        r: ".5",
        fill: "currentColor",
        key: "kqv944"
      }]
    ]
  };
  r.node;
  let a = (0, t.default)(r);
  e.s(["Tag", 0, a], 80799)
}, 63676, e => {
  "use strict";
  var t = e.i(56420);
  let r = {
    name: "x",
    size: 24,
    node: [
      ["path", {
        d: "M18 6 6 18",
        key: "1bl5f8"
      }],
      ["path", {
        d: "m6 6 12 12",
        key: "d8bk6v"
      }]
    ]
  };
  r.node;
  let a = (0, t.default)(r);
  e.s(["X", 0, a], 63676)
}, 22016, (e, t, r) => {
  "use strict";
  e.i(47167), Object.defineProperty(r, "__esModule", {
    value: !0
  });
  var a = {
    default: function() {
      return g
    },
    useLinkStatus: function() {
      return w
    }
  };
  for (var n in a) Object.defineProperty(r, n, {
    enumerable: !0,
    get: a[n]
  });
  let s = e.r(90809),
    o = e.r(43476),
    i = s._(e.r(71645)),
    l = e.r(95057),
    c = e.r(8372),
    u = e.r(18581),
    d = e.r(18967),
    p = e.r(5550),
    f = e.r(88540),
    b = e.r(91949),
    h = e.r(73668),
    m = e.r(9396);

  function g(t) {
    var r;
    let a, n, s, [g, w] = (0, i.useOptimistic)(b.IDLE_LINK_STATUS),
      y = (0, i.useRef)(null),
      {
        href: v,
        as: j,
        children: k,
        prefetch: S = null,
        passHref: P,
        replace: C,
        shallow: N,
        scroll: E,
        onClick: M,
        onMouseEnter: I,
        onTouchStart: O,
        legacyBehavior: $ = !1,
        onNavigate: A,
        transitionTypes: _,
        ref: L,
        unstable_dynamicOnHover: z,
        ...T
      } = t;
    a = k, $ && ("string" == typeof a || "number" == typeof a) && (a = (0, o.jsx)("a", {
      children: a
    }));
    let D = i.default.useContext(c.AppRouterContext),
      R = !1 !== S,
      B = !1 === S ? "none" : !0 === S ? "full" : "auto",
      q = "none" !== B ? "auto" === B ? m.FetchStrategy.PPR : m.FetchStrategy.Full : m.FetchStrategy.PPR,
      F = "string" == typeof(r = j || v) ? r : (0, l.formatUrl)(r);
    if ($) {
      if (a?.$$typeof === Symbol.for("react.lazy")) throw Object.defineProperty(Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."), "__NEXT_ERROR_CODE", {
        value: "E863",
        enumerable: !1,
        configurable: !0
      });
      n = i.default.Children.only(a)
    }
    let U = $ ? n && "object" == typeof n && n.ref : L,
      V, K = i.default.useCallback(e => (null !== D && (y.current = (0, b.mountLinkInstance)(e, F, D, q, R, w, V)), () => {
        y.current && ((0, b.unmountLinkForCurrentNavigation)(y.current), y.current = null), (0, b.unmountPrefetchableInstance)(e)
      }), [R, F, D, q, w, V]),
      W = {
        ref: (0, u.useMergedRef)(K, U),
        onClick(t) {
          $ || "function" != typeof M || M(t), $ && n.props && "function" == typeof n.props.onClick && n.props.onClick(t), !D || t.defaultPrevented || function(t, r, a, n, s, o, l, c = "none") {
            if ("u" > typeof window) {
              let u, {
                nodeName: d
              } = t.currentTarget;
              if ("A" === d.toUpperCase() && ((u = t.currentTarget.getAttribute("target")) && "_self" !== u || t.metaKey || t.ctrlKey || t.shiftKey || t.altKey || t.nativeEvent && 2 === t.nativeEvent.which) || t.currentTarget.hasAttribute("download")) return;
              if (!(0, h.isLocalURL)(r)) {
                n && (t.preventDefault(), location.replace(r));
                return
              }
              if (t.preventDefault(), o) {
                let e = !1;
                if (o({
                    preventDefault: () => {
                      e = !0
                    }
                  }), e) return
              }
              let {
                dispatchNavigateAction: p
              } = e.r(99781);
              i.default.startTransition(() => {
                p(r, n ? "replace" : "push", !1 === s ? f.ScrollBehavior.NoScroll : f.ScrollBehavior.Default, a.current, l, c)
              })
            }
          }(t, F, y, C, E, A, _, B)
        },
        onMouseEnter(e) {
          $ || "function" != typeof I || I(e), $ && n.props && "function" == typeof n.props.onMouseEnter && n.props.onMouseEnter(e), D && R && (0, b.onNavigationIntent)(e.currentTarget, !0 === z)
        },
        onTouchStart: function(e) {
          $ || "function" != typeof O || O(e), $ && n.props && "function" == typeof n.props.onTouchStart && n.props.onTouchStart(e), D && R && (0, b.onNavigationIntent)(e.currentTarget, !0 === z)
        }
      };
    return (0, d.isAbsoluteUrl)(F) ? W.href = F : $ && !P && ("a" !== n.type || "href" in n.props) || (W.href = (0, p.addBasePath)(F)), s = $ ? i.default.cloneElement(n, W) : (0, o.jsx)("a", {
      ...T,
      ...W,
      children: a
    }), (0, o.jsx)(x.Provider, {
      value: g,
      children: s
    })
  }
  let x = (0, i.createContext)(b.IDLE_LINK_STATUS),
    w = () => (0, i.useContext)(x);
  ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
    value: !0
  }), Object.assign(r.default, r), t.exports = r.default)
}, 18581, (e, t, r) => {
  "use strict";
  Object.defineProperty(r, "__esModule", {
    value: !0
  }), Object.defineProperty(r, "useMergedRef", {
    enumerable: !0,
    get: function() {
      return n
    }
  });
  let a = e.r(71645);

  function n(e, t) {
    let r = (0, a.useRef)(null),
      n = (0, a.useRef)(null);
    return (0, a.useCallback)(a => {
      if (null === a) {
        let e = r.current;
        e && (r.current = null, e());
        let t = n.current;
        t && (n.current = null, t())
      } else e && (r.current = s(e, a)), t && (n.current = s(t, a))
    }, [e, t])
  }

  function s(e, t) {
    if ("function" != typeof e) return e.current = t, () => {
      e.current = null
    };
    {
      let r = e(t);
      return "function" == typeof r ? r : () => e(null)
    }
  }("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
    value: !0
  }), Object.assign(r.default, r), t.exports = r.default)
}, 18967, (e, t, r) => {
  "use strict";
  e.i(47167), Object.defineProperty(r, "__esModule", {
    value: !0
  });
  var a = {
    DecodeError: function() {
      return g
    },
    MiddlewareNotFoundError: function() {
      return v
    },
    MissingStaticPage: function() {
      return y
    },
    NormalizeError: function() {
      return x
    },
    PageNotFoundError: function() {
      return w
    },
    SP: function() {
      return h
    },
    ST: function() {
      return m
    },
    WEB_VITALS: function() {
      return s
    },
    execOnce: function() {
      return o
    },
    getDisplayName: function() {
      return d
    },
    getLocationOrigin: function() {
      return c
    },
    getURL: function() {
      return u
    },
    isAbsoluteUrl: function() {
      return l
    },
    isResSent: function() {
      return p
    },
    loadGetInitialProps: function() {
      return b
    },
    normalizeRepeatedSlashes: function() {
      return f
    },
    stringifyError: function() {
      return j
    }
  };
  for (var n in a) Object.defineProperty(r, n, {
    enumerable: !0,
    get: a[n]
  });
  let s = ["CLS", "FCP", "FID", "INP", "LCP", "TTFB"];

  function o(e) {
    let t, r = !1;
    return (...a) => (r || (r = !0, t = e(...a)), t)
  }
  let i = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/,
    l = e => {
      let t = e.charCodeAt(0);
      return !!(t >= 65 && t <= 90 || t >= 97 && t <= 122) && i.test(e)
    };

  function c() {
    let {
      protocol: e,
      hostname: t,
      port: r
    } = window.location;
    return `${e}//${t}${r?":"+r:""}`
  }

  function u() {
    let {
      href: e
    } = window.location, t = c();
    return e.substring(t.length)
  }

  function d(e) {
    return "string" == typeof e ? e : e.displayName || e.name || "Unknown"
  }

  function p(e) {
    return e.finished || e.headersSent
  }

  function f(e) {
    let t = e.split("?");
    return t[0].replace(/\\/g, "/").replace(/\/\/+/g, "/") + (t[1] ? `?${t.slice(1).join("?")}` : "")
  }
  async function b(e, t) {
    let r = t.res || t.ctx && t.ctx.res;
    if (!e.getInitialProps) return t.ctx && t.Component ? {
      pageProps: await b(t.Component, t.ctx)
    } : {};
    let a = await e.getInitialProps(t);
    if (r && p(r)) return a;
    if (!a) throw Object.defineProperty(Error(`"${d(e)}.getInitialProps()" should resolve to an object. But found "${a}" instead.`), "__NEXT_ERROR_CODE", {
      value: "E1025",
      enumerable: !1,
      configurable: !0
    });
    return a
  }
  let h = "u" > typeof performance,
    m = h && ["mark", "measure", "getEntriesByName"].every(e => "function" == typeof performance[e]);
  class g extends Error {}
  class x extends Error {}
  class w extends Error {
    constructor(e) {
      super(), this.code = "ENOENT", this.name = "PageNotFoundError", this.message = `Cannot find module for page: ${e}`
    }
  }
  class y extends Error {
    constructor(e, t) {
      super(), this.message = `Failed to load static file for page: ${e} ${t}`
    }
  }
  class v extends Error {
    constructor() {
      super(), this.code = "ENOENT", this.message = "Cannot find the middleware module"
    }
  }

  function j(e) {
    return JSON.stringify({
      message: e.message,
      stack: e.stack
    })
  }
}, 90317, (e, t, r) => {
  "use strict";
  Object.defineProperty(r, "__esModule", {
    value: !0
  });
  var a = {
    bindSnapshot: function() {
      return c
    },
    createAsyncLocalStorage: function() {
      return l
    },
    createSnapshot: function() {
      return u
    }
  };
  for (var n in a) Object.defineProperty(r, n, {
    enumerable: !0,
    get: a[n]
  });
  let s = Object.defineProperty(Error("Invariant: AsyncLocalStorage accessed in runtime where it is not available"), "__NEXT_ERROR_CODE", {
    value: "E504",
    enumerable: !1,
    configurable: !0
  });
  class o {
    disable() {
      throw s
    }
    getStore() {}
    run() {
      throw s
    }
    exit() {
      throw s
    }
    enterWith() {
      throw s
    }
    static bind(e) {
      return e
    }
  }
  let i = "u" > typeof globalThis && globalThis.AsyncLocalStorage;

  function l() {
    return i ? new i : new o
  }

  function c(e) {
    return i ? i.bind(e) : o.bind(e)
  }

  function u() {
    return i ? i.snapshot() : function(e, ...t) {
      return e(...t)
    }
  }
}, 42344, (e, t, r) => {
  "use strict";
  Object.defineProperty(r, "__esModule", {
    value: !0
  }), Object.defineProperty(r, "workAsyncStorageInstance", {
    enumerable: !0,
    get: function() {
      return a
    }
  });
  let a = (0, e.r(90317).createAsyncLocalStorage)()
}, 63599, (e, t, r) => {
  "use strict";
  Object.defineProperty(r, "__esModule", {
    value: !0
  }), Object.defineProperty(r, "workAsyncStorage", {
    enumerable: !0,
    get: function() {
      return a.workAsyncStorageInstance
    }
  });
  let a = e.r(42344)
}, 9885, (e, t, r) => {
  "use strict";

  function a(e) {
    return e.split("/").map(e => encodeURIComponent(e)).join("/")
  }
  Object.defineProperty(r, "__esModule", {
    value: !0
  }), Object.defineProperty(r, "encodeURIPath", {
    enumerable: !0,
    get: function() {
      return a
    }
  })
}, 67585, (e, t, r) => {
  "use strict";
  Object.defineProperty(r, "__esModule", {
    value: !0
  }), Object.defineProperty(r, "BailoutToCSR", {
    enumerable: !0,
    get: function() {
      return n
    }
  });
  let a = e.r(32061);

  function n({
    reason: e,
    children: t
  }) {
    if ("u" < typeof window) throw Object.defineProperty(new a.BailoutToCSRError(e), "__NEXT_ERROR_CODE", {
      value: "E394",
      enumerable: !1,
      configurable: !0
    });
    return t
  }
}, 52157, (e, t, r) => {
  "use strict";
  Object.defineProperty(r, "__esModule", {
    value: !0
  }), Object.defineProperty(r, "PreloadChunks", {
    enumerable: !0,
    get: function() {
      return l
    }
  });
  let a = e.r(43476),
    n = e.r(74080),
    s = e.r(63599),
    o = e.r(9885),
    i = e.r(43369);

  function l({
    moduleIds: e
  }) {
    if ("u" > typeof window) return null;
    let t = s.workAsyncStorage.getStore();
    if (void 0 === t) return null;
    let r = [];
    if (t.reactLoadableManifest && e) {
      let a = t.reactLoadableManifest;
      for (let t of e) {
        if (!a[t]) continue;
        let e = a[t].files;
        r.push(...e)
      }
    }
    if (0 === r.length) return null;
    let c = (0, i.getAssetTokenQuery)();
    return (0, a.jsx)(a.Fragment, {
      children: r.map(e => {
        let r = `${t.assetPrefix}/_next/${(0,o.encodeURIPath)(e)}${c}`;
        return e.endsWith(".css") ? (0, a.jsx)("link", {
          precedence: "dynamic",
          href: r,
          rel: "stylesheet",
          as: "style",
          nonce: t.nonce
        }, e) : ((0, n.preload)(r, {
          as: "script",
          fetchPriority: "low",
          nonce: t.nonce
        }), null)
      })
    })
  }
}, 69093, (e, t, r) => {
  "use strict";
  Object.defineProperty(r, "__esModule", {
    value: !0
  }), Object.defineProperty(r, "default", {
    enumerable: !0,
    get: function() {
      return c
    }
  });
  let a = e.r(43476),
    n = e.r(71645),
    s = e.r(67585),
    o = e.r(52157);

  function i(e) {
    return {
      default: e && "default" in e ? e.default : e
    }
  }
  let l = {
      loader: () => Promise.resolve(i(() => null)),
      loading: null,
      ssr: !0
    },
    c = function(e) {
      let t = {
          ...l,
          ...e
        },
        r = (0, n.lazy)(() => t.loader().then(i)),
        c = t.loading;

      function u(e) {
        let i = c ? (0, a.jsx)(c, {
            isLoading: !0,
            pastDelay: !0,
            error: null
          }) : null,
          l = !t.ssr || !!t.loading,
          u = l ? n.Suspense : n.Fragment,
          d = t.ssr ? (0, a.jsxs)(a.Fragment, {
            children: ["u" < typeof window ? (0, a.jsx)(o.PreloadChunks, {
              moduleIds: t.modules
            }) : null, (0, a.jsx)(r, {
              ...e
            })]
          }) : (0, a.jsx)(s.BailoutToCSR, {
            reason: "next/dynamic",
            children: (0, a.jsx)(r, {
              ...e
            })
          });
        return (0, a.jsx)(u, {
          ...l ? {
            fallback: i
          } : {},
          children: d
        })
      }
      return u.displayName = "LoadableComponent", u
    }
}, 70703, (e, t, r) => {
  "use strict";
  Object.defineProperty(r, "__esModule", {
    value: !0
  }), Object.defineProperty(r, "default", {
    enumerable: !0,
    get: function() {
      return n
    }
  });
  let a = e.r(55682)._(e.r(69093));

  function n(e, t) {
    let r = {};
    "function" == typeof e && (r.loader = e);
    let n = {
      ...r,
      ...t
    };
    return (0, a.default)({
      ...n,
      modules: n.loadableGenerated?.modules
    })
  }("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
    value: !0
  }), Object.assign(r.default, r), t.exports = r.default)
}, 73668, (e, t, r) => {
  "use strict";
  Object.defineProperty(r, "__esModule", {
    value: !0
  }), Object.defineProperty(r, "isLocalURL", {
    enumerable: !0,
    get: function() {
      return s
    }
  });
  let a = e.r(18967),
    n = e.r(52817);

  function s(e) {
    if (!(0, a.isAbsoluteUrl)(e)) return !0;
    try {
      let t = (0, a.getLocationOrigin)(),
        r = new URL(e, t);
      return r.origin === t && (0, n.hasBasePath)(r.pathname)
    } catch (e) {
      return !1
    }
  }
}, 98183, (e, t, r) => {
  "use strict";
  Object.defineProperty(r, "__esModule", {
    value: !0
  });
  var a = {
    assign: function() {
      return l
    },
    searchParamsToUrlQuery: function() {
      return s
    },
    urlQueryToSearchParams: function() {
      return i
    }
  };
  for (var n in a) Object.defineProperty(r, n, {
    enumerable: !0,
    get: a[n]
  });

  function s(e) {
    let t = {};
    for (let [r, a] of e.entries()) {
      let e = t[r];
      void 0 === e ? t[r] = a : Array.isArray(e) ? e.push(a) : t[r] = [e, a]
    }
    return t
  }

  function o(e) {
    return "string" == typeof e ? e : ("number" != typeof e || isNaN(e)) && "boolean" != typeof e ? "" : String(e)
  }

  function i(e) {
    let t = new URLSearchParams;
    for (let [r, a] of Object.entries(e))
      if (Array.isArray(a))
        for (let e of a) t.append(r, o(e));
      else t.set(r, o(a));
    return t
  }

  function l(e, ...t) {
    for (let r of t) {
      for (let t of r.keys()) e.delete(t);
      for (let [t, a] of r.entries()) e.append(t, a)
    }
    return e
  }
}, 95057, (e, t, r) => {
  "use strict";
  e.i(47167), Object.defineProperty(r, "__esModule", {
    value: !0
  });
  var a = {
    formatUrl: function() {
      return i
    },
    formatWithValidation: function() {
      return c
    },
    urlObjectKeys: function() {
      return l
    }
  };
  for (var n in a) Object.defineProperty(r, n, {
    enumerable: !0,
    get: a[n]
  });
  let s = e.r(90809)._(e.r(98183)),
    o = /https?|ftp|gopher|file/;

  function i(e) {
    let {
      auth: t,
      hostname: r
    } = e, a = e.protocol || "", n = e.pathname || "", i = e.hash || "", l = e.query || "", c = !1;
    t = t ? encodeURIComponent(t).replace(/%3A/i, ":") + "@" : "", e.host ? c = t + e.host : r && (c = t + (~r.indexOf(":") ? `[${r}]` : r), e.port && (c += ":" + e.port)), l && "object" == typeof l && (l = String(s.urlQueryToSearchParams(l)));
    let u = e.search || l && `?${l}` || "";
    return a && !a.endsWith(":") && (a += ":"), e.slashes || (!a || o.test(a)) && !1 !== c ? (c = "//" + (c || ""), n && "/" !== n[0] && (n = "/" + n)) : c || (c = ""), i && "#" !== i[0] && (i = "#" + i), u && "?" !== u[0] && (u = "?" + u), n = n.replace(/[?#]/g, encodeURIComponent), u = u.replace("#", "%23"), `${a}${c}${n}${u}${i}`
  }
  let l = ["auth", "hash", "host", "hostname", "href", "path", "pathname", "port", "protocol", "query", "search", "slashes"];

  function c(e) {
    return i(e)
  }
}, 18566, (e, t, r) => {
  t.exports = e.r(76562)
}]);