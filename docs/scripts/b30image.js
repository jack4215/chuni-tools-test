/* (c) 2021 chunirec */ ! function(e) {
    "use strict";
    let n = !1,
        t = 6,
        i = "v2.40",
        r = "ja",
        o = "",
        l = "",
        a = "",
        c = [
            ["chunithm-net.com", "jp_lim", ["Basic", "Advanced", "Expert", "Master"],
                ["BASIC", "ADVANCED", "EXPERT", "MASTER", "WORLD'S END"]
            ],
            ["new.chunithm-net.com", "int", ["Basic", "Advanced", "Expert", "Master"],
                ["BASIC", "ADVANCED", "EXPERT", "MASTER", "WORLD'S END"]
            ],
            ["chunithm-net-eng.com", "jp2", ["Basic", "Advanced", "Expert", "Master", "Ultima"],
                ["BASIC", "ADVANCED", "EXPERT", "MASTER", "ULTIMA", "WORLD'S END"]
            ]
        ],
        s = {
            jp_lim: "Paradice Lost (Limited)",
            jp2: "CHUNITHM New",
            int: "CHUNITHM International ver."
        },
        u = [
            ["chunirec.net", !0],
            ["localhost:8080", !1]
        ],
        d = "",
        p = {
            pl: 0,
            r: 0,
            mr: 0,
            pc: 0,
            ce: 0,
            jt: 0,
            pn: "",
            pt: [],
            tr: [],
            br: 0,
            bc: 0
        },
        f = [],
        m = [],
        h = [],
        g = [],
        b = [],
        x = {},
        v = [],
        C = [],
        _ = [],
        T = ["x", "normal", "copper", "silver", "gold", "platina", "rainbow", "ongeki", "staff", "maimai"],
        E = {
            ja: ["chunirec", "CHUNITHM-NET", "失敗", "chunirec", "chunirec", "。", "接続中", "取得", "取得中", "取得中...", "取得中...", "取得中...", "送信中...", "chunirec", "開始", "続行", "中止", "既に実行中です。", "<< 戻る", "取得中...", "利用権","",""],
            en: ["Chunirec hasn't been able to work on this version yet.", "Sign in to your CHUNITHM-NET account and select an Aime card.", "Failed to connect.", "Chunirec Score Updater", "Checking the connection to Chunirec", "Please wait a moment.", "Connecting to CHUNITHM-NET...", "Collecting your play data", "Collecting records...", "Collecting course records...", "Collecting rating info...", "Collecting player profile...", "Sending...", "Chunirec is down for maintenance", "Click [Continue] to start extracting your play data.", "Continue", "Stop", "This bookmarklet is already running.", , "<< Back", "Collecting net-battle result...", "", "",""]
        },
        y = he("body", "overflow:hidden;") + he(".urec-container", "position:fixed;left:0;right:0;top:0;bottom:0;z-index:10000;") + he(".urec-container .urec-modal", "position:absolute;height:min-content;width:400px;border:1px solid rgb(197,206,215);border-radius:.25rem;box-shadow:0 .5rem 1rem rgb(0 0 0 / 15%);margin:auto;padding:1rem;background:#fff;z-index:10001;left:0;right:0;top:0;bottom:0;text-align:left;-webkit-user-select:none;-moz-user-select:none;user-select:none;") + he(".urec-container .urec-modal-backdrop", "position:absolute;background:rgba(0, 0, 0, .5);z-index:1;left:0;right:0;top:0;bottom:0;") + he(".urec-container .urec-modal h3", "margin-top:0;margin-bottom:1rem;") + he(".urec-container .urec-modal .urec-ver", "text-align:right;font-size:.875rem;margin-top:1rem;margin-bottom:-.5rem;") + he(".urec-container .urec-modal .urec-btn-container", "display:flex;justify-content:center;margin-top:2rem;margin-bottom:-.5rem;") + he(".urec-container .urec-modal .urec-btn-1,.urec-container .urec-modal .urec-btn-2", "font-size:1rem;min-width:110px;min-height: 2.25rem;padding:.25em;margin:0 10px;color:#ffffff;background:#007bff;border:2px solid #007bff;border-radius:.25em;font-weight: bold;") + he(".urec-container .urec-modal .urec-btn-2", "color:#212529;background:#f8f9fa;border:2px solid #f8f9fa;") + he(".urec-container .urec-modal .urec-btn-1:focus,.urec-container .urec-modal .urec-btn-2:focus", "outline:none;") + he(".urec-container .urec-modal .urec-btn-1:active", "background-color:#0062cc;border-color: #005cbf;") + he(".urec-container .urec-modal .urec-btn-2:active", "background-color:#e2e6ea;border-color: #dae0e5;"),
        S = null,
        N = null,
        w = null,
        j = null,
        M = null,
        A = 1e3;

    function k() {
        e.addEventListener("touchmove", function(e) {
            e.preventDefault()
        }, !1);
        let n = se("style");
        n.textContent = y, e.head.appendChild(n), S = ue("urec-container"), e.body.appendChild(S), N = ue("urec-modal"), S.appendChild(N);
        let t = ue("urec-modal-backdrop");
        S.appendChild(t), w = se("h3"), N.appendChild(w), j = ue(), N.appendChild(j), (M = ue("urec-btn-container")).style.display = "none", N.appendChild(M);
        let r = ue("urec-ver");
        r.innerText = "chunirec PTTGR " + i, N.appendChild(r)
    }

    function H(e, n, t) {
        t ? j.innerHTML = e : j.innerText = e, w.innerText = n
    }

    function I(e) {
        void 0 === e ? (M.innerHTML = "", M.style.display = "none") : (M.style.display = "", fe(e, function(e) {
            let n = se("button", "urec-btn-" + (e[2] ? "1" : "2"));
            n.innerText = e[0], n.addEventListener("click", e[1]), M.appendChild(n)
        }))
    }

    function R(e) {
        return void 0 === E[r][e] ? E.ja[e] : E[r][e]
    }

    function D(e, n) {
        alert(e + "\n(Error code: " + n + ")"), ie()
    }

    function O(e) {
        switch (l) {
            case "jp2":
                return "https://" + a + "/mobile/" + e;
            default:
                return "https://" + a + "/mobile/" + e
        }
    }

    function L(e, t) {
        let i = u[n ? 1 : 0];
        return "http" + (i[1] ? "s" : "") + "://" + (void 0 !== t ? t + "." : "") + i[0] + "/" + e
    }

    function U(e, n) {
        return e % 20480 + 20480 * n
    }

    function P() {
        function e(e) {
            let n = "";
            return fe(e, function(e) {
                switch (e[0]) {
                    case 0:
                        n += ce(ne(ae(e[1], e[2], e[3])), e[4], "0");
                        break;
                    case 1:
                        n += ce(e[1], e[4], " ");
                        break;
                    case 2:
                        n += function(e) {
                            if (null === e) return;
                            let n = Number(e);
                            if (isNaN(n)) return;
                            if (Math.floor(n) !== n) return;
                            n = Math.abs(n);
                            let t = "",
                                i = 0,
                                r = !0;
                            for (; i = n % 31, r ? r = !1 : i += 31, t += i < 10 ? String(i) : i < 36 ? String.fromCharCode(i + 55) : String.fromCharCode(i + 61), !(n < 31);) n = Math.floor(n / 31);
                            return t.split("").reverse().join("")
                        }(e[1])
                }
            }), n
        }
        H(R(12), R(7));
        let n = "",
            i = te(p.pn).substring(0, 3843),
            r = function(e) {
                let n = 0;
                return fe(c, function(t, i) {
                    if (t[1] === e) return n = i + 1, !0
                }), n
            }(l);
        n += e([
            [0, t, 0, 3843, 2],
            [0, p.pl, 0, 9999, 3],
            [0, p.r, 0, 9999, 3],
            [0, p.mr, 0, 9999, 3],
            [0, p.pc, 0, 14776335, 4],
            [0, p.ce, 0, 48, 1],
            [0, p.jt, 0, 1, 1],
            [0, p.tr.length, 0, 48, 1]
        ]);
        for (const t of p.tr) n += e([
            [0, t, 0, 9, 1]
        ]);
        n += e([
            [0, 0, 0, 31, 1],
            [0, r, 0, 31, 1],
            [0, p.br, 0, 61, 1],
            [0, p.bc, 0, 238327, 3],
            [0, i.length, 0, 3843, 2],
            [1, i, 0, 0, null]
        ]);
        for (const t of p.pt) {
            let i = te(t).substring(0, 3843);
            n += e([
                [0, i.length, 0, 3843, 2],
                [1, i, 0, 0, null]
            ])
        }
        return n += e([
            [0, f.length, 0, 238327, 3],
            [1, "S", 0, 0, null]
        ]), fe(f, function(t) {
            n += e([
                [0, U(t.idx, t.diff), 0, 238327, 3],
                [0, t.score, 0, 101e4, 4],
                [0, t.lamp, 0, 31, 1],
                [0, t.clr, 0, 31, 1]
            ])
        }), n += e([
            [0, m.length, 0, 238327, 3],
            [1, "C", 0, 0, null]
        ]), fe(m, function(t) {
            n += e([
                [0, t.idx, 0, 238327, 3],
                [0, t.score, 0, 303e4, 4],
                [0, t.lamp, 0, 7, 1]
            ])
        }), n += e([
            [0, h.length, 0, 238327, 3],
            [1, "R", 0, 0, null]
        ]), fe(h, function(t) {
            n += e([
                [0, U(t.idx, t.diff), 0, 238327, 3],
                [0, t.score, 0, 303e4, 4]
            ])
        }), n += e([
            [0, g.length, 0, 238327, 3],
            [1, "B", 0, 0, null]
        ]), fe(g, function(t) {
            n += e([
                [0, U(t.idx, t.diff), 0, 238327, 3],
                [0, t.score, 0, 303e4, 4]
            ])
        }), n += e([
            [0, b.length, 0, 238327, 3],
            [1, "O", 0, 0, null]
        ]), fe(b, function(t) {
            n += e([
                [0, U(t.idx, t.diff), 0, 238327, 3],
                [0, t.score, 0, 303e4, 4]
            ])
        }), n += ce(ne(function(e) {
            let n = 4294967295,
                t = [];
            for (let e = 0; e < 256; ++e) {
                let n = e;
                for (let e = 0; e < 8; ++e) n = 1 & n ? 3988292384 ^ n >>> 1 : n >>> 1;
                t[e] = n
            }
            for (let i = 0; i < e.length; ++i) n = t[255 & (n ^ e.codePointAt(i))] ^ n >>> 8;
            let i = 4294967295 ^ n;
            return 65536 * (i >>> 16 & 65535) + (65535 & i)
        }(n)), 6, "0")
    }

    function z() {
        let e = se("form");
        e.method = "POST", e.action = L("api/pttgr/receiver"), e.style.display = "none";
        let n = se("input");
        n.name = "task_id", n.value = d, e.appendChild(n), S.appendChild(e), e.submit()
    }

    function G(e) {
        H(R(5), R(12)), me("POST", L("2.0/pttgr/gdhtts.json", "api"), "data=" + encodeURIComponent(P()), function(n, t) {
            if (n && 200 === t.status) {
                let n = JSON.parse(t.responseText);
                if ("ok" !== n.status) return void D(R(2), "140002");
                d = n.task_id, ee(e, !0)
            } else D(R(2), "140001")
        }, !1, !1)
    }

    function W(e) {
        H(R(11), R(7)), me(void 0, O("home/playerData/"), null, function(n, t) {
            if (n) {
                let n = t.responseText,
                    i = null;
                (i = n.match(/<div class="player_honor_text"><span>(.*?)<\/span>/)) && p.pt.push(oe(i[1])), (i = n.match(/images\/honor_bg_(.*?)\.png/)) && p.tr.push(Math.max(T.indexOf(i[1]), 0)), (i = n.match(/<div class="player_lv"><span class="font_small mr_5">Lv\.<\/span>([\d]*?)<\/div>/)) && (p.pl = le(i[1])), (i = n.match(/<div class="player_reborn">([\d]*?)<\/div>/)) && (p.pl += 100 * le(i[1])), (i = n.match(/<span class="ml_10">([\S\s]*?)<\/span>/)) && (p.pn = oe(i[1])), (i = n.match(/RATING : ([0-9.]*?) \/ \(<span class="font_small">MAX<\/span> ([0-9.]*?)\)/)) && (p.r = le(i[1].split(".").join("")), p.mr = le(i[2].split(".").join(""))), (i = n.match(/<div class="user_data_play">([\d,]*?)回<\/div>/s)) && (p.pc = le(i[1].split(",").join(""))), -1 !== n.indexOf('<div class="player_team_name') && (p.jt = 1), ee(e)
            } else D(R(2), "120301")
        })
    }

    function X(e) {
        H(R(11), R(7)), me(void 0, O("home/playerData/"), null, function(n, t) {
            if (n) {
                let n = t.responseText,
                    i = null,
                    r = (new DOMParser).parseFromString(n, "text/html").getElementsByClassName("player_honor_short");
                for (let e = 0; e < 3; ++e) {
                    if (!r[e]) continue;
                    let n = r[e].style.backgroundImage;
                    if (n !== "") {
                        p.pt.push(r[e].textContent.trim());
                        let i = n.match(/images\/honor_bg_(.*?)\.png/);
                        p.tr.push(i ? Math.max(T.indexOf(i[1]), 0) : 0);
                    }
                }
                if ((i = n.match(/<div class="player_lv">([\d]*?)<\/div>/)) && (p.pl = le(i[1])), (i = n.match(/<div class="player_reborn">([\d]*?)<\/div>/)) && (p.pl += 100 * le(i[1])), (i = n.match(/<div class="player_name_in">([\S\s]*?)<\/div>/)) && (p.pn = oe(i[1])), i = n.match(/images\/rating\/rating_[a-z]*_([0-9a-z]*)\.png"/gs)) {
                    let e, n = /images\/rating\/rating_[a-z]*_([0-9a-z]*)\.png"/,
                        t = "";
                    fe(i, function(i) {
                        (e = i.match(n)) && ("comma" === e[1] ? t += "." : t += le(e[1]).toString())
                    }), p.r = le(t.split(".").join(""))
                }
                if (p.mr = p.r, (i = n.match(/<div class="user_data_play_count">\s*?<div class="user_data_text">([\d,]*?)<\/div>/s)) && (p.pc = le(i[1].split(",").join(""))), i = n.match(/images\/classemblem_medal_([\d]*?)\.png\" \/>/)) {
                    let e = 0,
                        t = le(i[1]);
                    if (1 === t ? e = 1 : 2 === t ? e = 2 : 3 === t ? e = 3 : 4 === t ? e = 4 : 5 === t ? e = 5 : 6 === t && (e = 6), i = n.match(/images\/classemblem_base_([\d]*?)\.png\" \/>/), e > 0 && i) {
                        let n = le(i[1]);
                        1 === n ? e += 7 : 2 === n ? e += 14 : 3 === n ? e += 21 : 4 === n ? e += 28 : 5 === n ? e += 35 : 6 === n && (e += 42)
                    }
                    p.ce = e
                } - 1 !== n.indexOf('<div class="player_team_name') && (p.jt = 1), "" !== p.pt && "" !== p.pn || (alert("データ取得中に問題が発生しました (120381)\n再度実行しても同様のエラーが発生する場合は Twitter @chunirec へご連絡ください。"), ie()), ee(e)
            } else D(R(2), "120301")
        })
    }

    function q(e) {
        H(R(10), R(7));
        let n = new RegExp('<form action="' + re(O("record/musicGenre/sendMusicDetail/")) + '".*?<\\/form>', "gs");
        me(void 0, O("home/playerData/ratingDetailRecent/"), null, function(t, i) {
            if (t) {
                let t = i.responseText.match(n);
                t && fe(t, function(e) {
                    h.push(V(e))
                }), ee(e)
            } else D(R(2), "120201")
        })
    }

    function V(e) {
        let n = {
                idx: 0,
                diff: 0,
                score: 0
            },
            t = null;
        return (t = e.match(/<input type="hidden" name="idx" value="(\d*?)"/)) ? (n.idx = le(t[1]), (t = e.match(/musiclist_box bg_([a-z]*?)"/)) ? (n.diff = C.indexOf(t[1]), -1 !== n.diff ? (t = e.match(/SCORE：<span class="text_b">([0-9,]*?)<\/span>/)) ? (n.score = le(t[1].split(",").join("")), n) : null : void 0) : null) : null
    }

    function F(e) {
        let n = '<img src="' + O("images/") + "icon_",
            t = [n + 'course_clear.png"', n + 'fullcombo.png"', n + 'alljustice.png"', n + 'alljusticecritical.png"'];
        H(R(9), R(7));
        let i = new RegExp('<div class="play_musicdata_highscore">.*?<\\/form>', "gs");
        me(void 0, O(("jp2" === l ? "record" : "course") + "/courseList/"), null, function(n, r) {
            if (n) {
                let n = r.responseText.match(i);
                if (n) {
                    let e = null;
                    fe(n, function(n) {
                        let i = {
                            idx: 0,
                            score: 0,
                            lamp: 0
                        };
                        (e = n.match(/<input type="hidden" name="idx" value="(\d*?)"/)) && (i.idx = le(e[1]), (e = n.match(/HIGH SCORE：<span class="text_b">([0-9,]*?)<\/span>/)) && (i.score = le(e[1].split(",").join("")), fe(t, function(e, t) {
                            3 === t && (t = 2), i.lamp |= (-1 !== n.indexOf(e)) << t
                        }), m.push(i)))
                    })
                }
                ee(e)
            } else D(R(2), "120111")
        }, !0)
    }

    function J(e) {
        let n = '<img src="' + O("images/") + "icon_",
            t = [n + 'fullcombo.png"', n + 'alljustice.png"', n + 'fullchain2.png"', n + 'fullchain.png"', n + 'alljusticecritical.png"'],
            i = [n + 'clear.png"', n + 'hard.png"', n + 'brave.png"', n + 'absolute.png"', n + 'catastrophy.png"'];
        de(function() {
            ! function n(r) {
                H(R(8) + " [" + _[r] + "]", R(7));
                let a = null,
                    c = void 0,
                    s = "",
                    u = null;
                r < v.length ? (a = new RegExp('<form action="' + re(O("record/musicGenre/sendMusicDetail/")) + '".*?<\\/form>', "gs"), c = "POST", s = O("record/musicGenre/send" + v[r]), u = "genre=99&token=" + o) : (a = new RegExp('<form action="' + re(O(("jp2" === l ? "record" : "worldsEnd") + "/worldsEndList/sendWorldsEndDetail/")) + '".*?<\\/form>', "gs"), s = O(("jp2" === l ? "record" : "worldsEnd") + "/worldsEndList/")), me(c, s, u, function(o, l) {
                    if (o) {
                        let o = l.responseText.match(a);
                        if (o) {
                            let e = null;
                            fe(o, function(n) {
                                let o = {
                                    idx: 0,
                                    diff: r,
                                    score: 0,
                                    lamp: 0,
                                    clr: 0
                                };
                                (e = n.match(/<input type="hidden" name="idx" value="(\d*?)"/)) && (o.idx = le(e[1]), (e = n.match(/HIGH SCORE：<span class="text_b">([0-9,]*?)<\/span>/)) && (o.score = le(e[1].split(",").join("")), fe(t, function(e, t) {
                                    4 === t && (t = 1), o.lamp |= (-1 !== n.indexOf(e)) << t
                                }), fe(i, function(e, t) {
                                    if (-1 !== n.indexOf(e)) return o.clr = t + 1, !0
                                }), f.push(o)))
                            })
                        }
                        r < v.length ? pe(function() {
                            n(r + 1)
                        }, A) : ee(e)
                    } else D(R(2), (120100 + r).toString())
                })
            }(0)
        })
    }

    function Z(e) {
        H(R(6), R(7)), me(void 0, O("record/musicGenre"), null, function(n, t) {
            if (n) {
                let e = t.responseText.match(/name="token" value="([0-9a-f]*)"/);
                e && e[1] && (o = e[1])
            }
            "" !== o ? ee(e) : D(R(2), "110101")
        }, !0)
    }

    function $(e) {
        H(R(6), R(7)), me(void 0, O("record/musicGenre"), null, function(n, t) {
            if (n) {
                let e = t.responseText.match(/name="token" value="([0-9a-f]*)"/);
                e && e[1] && (o = e[1])
            }
            "" !== o ? ee(e) : D(R(2) + "\n" + R(20), "110101")
        }, !0)
    }

    function K(e) {
        H(R(14), R(3)), I([
            [R(16), function() {
                ie()
            }, !1],
            [R(15), function() {
                I(), ee(e, !0)
            }, !0]
        ])
    }

    function Q(e) {
        H(R(4), R(3)), me(void 0, L("2.0/pttgr/status.json?region=" + l, "api"), null, function(n, t) {
            if (n && 200 === t.status) {
                {
                    let e = JSON.parse(t.responseText);
                    if (!0 !== e.available) return void D(R(0), "110002");
                    if (!0 === e.maintenance) return H(e.maintenance_msg, R(13), !0), void I([
                        [R(18), function() {
                            ie()
                        }, !1]
                    ])
                }
                ee(e, !0)
            } else D(R(2), "100001")
        }, !1, !1)
    }

    function Y(e) {
        e.length && de(function() {
            e[0]({
                list: e,
                idx: 0
            })
        })
    }

    function ee(e, n) {
        let t = e.idx + 1;
        e.list[t] && pe(function() {
            e.list[t]({
                list: e.list,
                idx: t
            })
        }, n ? 0 : A)
    }

    function ne(e) {
        if (null === e) return;
        let n = Number(e);
        if (isNaN(n)) return;
        if (Math.floor(n) !== n) return;
        n = Math.abs(n);
        let t = "",
            i = 0;
        for (; t += (i = n % 62) < 10 ? String(i) : i < 36 ? String.fromCharCode(i + 55) : String.fromCharCode(i + 61), !(n < 62);) n = Math.floor(n / 62);
        return t.split("").reverse().join("")
    }

    function te(e) {
        let n, t = "",
            i = e.length,
            r = !1;
        for (let o = 0; o < i; ++o) {
            let i = e.charCodeAt(o);
            n = r, (r = i >= 48 && i <= 57 || i >= 65 && i <= 90 || i >= 97 && i <= 122) !== n && (t += "-"), r ? t += e[o] : i <= 65535 && (t += ce(ne(i), 3, "0"))
        }
        return t
    }

    function ie() {
        location.reload()
    }

    function re(e) {
        return e.replace(/[\\^$.**?()[\]{}|]/g, "\\$&")
    }

    function oe(e) {
        return e.replace(/&amp;/g, "&").replace(/&#x27;/g, "'").replace(/&#039;/g, "'").replace(/&#x60;/g, "`").replace(/&#096;/g, "`").replace(/&quot;/g, '"').replace(/&lt;/g, "<").replace(/&gt;/g, ">")
    }

    function le(e) {
        return parseInt(e)
    }

    function ae(e, n, t) {
        return Math.max(Math.min(e, t), n)
    }

    function ce(e, n, t) {
        if (null === n) return e;
        let i = e.length;
        return i >= n ? e : (t.repeat(n) + e).substr(i, n)
    }

    function se(n, t, i) {
        let r = e.createElement(n);
        return "string" == typeof t && "" !== t && r.setAttribute("class", t), "string" == typeof i && "" !== i && (r.id = i), r
    }

    function ue(e, n) {
        return se("div", e, n)
    }

    function de(e) {
        pe(e, 0)
    }

    function pe(e, n) {
        return setTimeout(e, n)
    }

    function fe(e, n) {
        for (let t = 0; t < e.length && !n(e[t], t); ++t);
    }

    function me(e, n, t, i, r, o) {
        let l = void 0 === e ? "GET" : e;
        if (r && "GET" === l && x[n]) return void i(!0, {
            responseText: x[n]
        });
        let a = new XMLHttpRequest;
        a.open(l, n, !0), a.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), void 0 !== o && (a.withCredentials = o), a.onload = function() {
            i(!0, this), r && "GET" === l && (x[n] = a.responseText)
        }, a.onerror = function() {
            i(!1, this)
        }, a.send(t)
    }

    function he(e, n) {
        return e + "{" + n + "}"
    }! function() {
        if (r = navigator.language.substr(0, 2), void 0 === E[r] && (r = "en"), window.chunirec_08gjwir) return void alert(R(17));
        if (window.chunirec_08gjwir = !0, function(e) {
                let n = new URL(e).host;
                fe(c, function(e) {
                    if (e[0] === n) return a = e[0], l = e[1], v = e[2], C = v.map(function(e) {
                        return e.toLocaleLowerCase()
                    }), _ = e[3], !0
                })
            }(location.href), "" === l) return void D(R(1), "110001");
        if ("jp_lim" === l) return k(), H(R(21), R(22), !0), void I([
            [R(18), function() {
                ie()
            }, !1]
        ]);
        if (! function(e) {
                switch (e) {
                    case "jp2":
                        return !0
                }
                return !1
            }(l)) return void D(R(0) + ": " + s[l], "110002");
        let e = location.pathname;
        ["/", "/mobile/", "/mobile/error/"].includes(e) ? D(R(1), "110003") : (k(), H("", R(3)), "jp2" === l ? Y([Q, K, $, J, F, X, G, z]) : "jp_lim" === l && Y([Q, K, Z, J, q, W, G, z]))
    }()
}(document);