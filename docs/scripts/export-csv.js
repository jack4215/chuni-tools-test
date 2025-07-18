( () => {
    "use strict";
    var e;
    function t(e) {
        const t = Array.from(document.querySelectorAll("script"));
        for (; t.length; ) {
            const n = t.pop();
            if (n?.src.includes(e)) {
                const e = new URL(n.src)
                  , t = e.pathname;
                return e.origin + t.substring(0, t.lastIndexOf("/scripts"))
            }
        }
        return "https://chuni-test.tsaibee.org"
    }
    function n(e) {
        const t = document.cookie.split(";").map((e => decodeURIComponent(e.trim()))).map((e => e.split("="))).find((t => t[0] === e));
        return t ? t[1] : ""
    }
    !function(e) {
        e.en_US = "en_US",
        e.zh_TW = "zh_TW"
    }(e || (e = {}));
    const o = "https://chunithm-net-eng.com";
    var r, a;
    (a = r || (r = {})).basic = "BAS",
    a.advanced = "ADV",
    a.expert = "EXP",
    a.master = "MAS",
    a.ultima = "ULT";
    const c = Object.values(r);
    var i;
    async function s(e=r.master) {
        const t = new FormData;
        t.append("genre", "99"),
        t.append("token", n("_t"));
        const a = {
            [r.ultima]: "sendUltima",
            [r.master]: "sendMaster",
            [r.expert]: "sendExpert",
            [r.advanced]: "sendAdvanced",
            [r.basic]: "sendBasic"
        }[e]
          , c = await async function(e, t) {
            const n = await fetch(o + e, {
                headers: {
                    "Cache-Control": "no-cache"
                },
                method: t ? "POST" : "GET",
                body: t
            });
            if (503 === n.status || 405 === n.status)
                throw new Error("Service temporarily unavailable");
            if (-1 != n.url.indexOf("/error"))
                throw new Error("Request failed: rejected by server");
            return (new DOMParser).parseFromString(await n.text(), "text/html")
        }("/mobile/record/musicGenre/" + a, t);
        return Array.from(c.querySelectorAll(".box01.w420")[1].querySelectorAll("form")).map((t => {
            const n = t.querySelector(".play_musicdata_icon"),
                  o = t.querySelector(".text_b")?.innerHTML;
            const score = o ? Number(o.replace(/,/g, "")) : -1; 
            
            return {
                title: t.querySelector(".music_title")?.innerHTML,
                score: score,
                difficulty: e,
                clear: n?.querySelector('img[src*="alljustice"]') ? "AJ" : n?.querySelector('img[src*="fullcombo"]') ? "FC" : "",
                idx: t.querySelector('input[name="idx"]').value
            };
        })).filter((e => e.title && e.score));
        
    }
    !function(e) {
        e["P & A"] = "0",
        e.niconico = "2",
        e["東方Project"] = "3",
        e.ORIGINAL = "5",
        e.VARIETY = "6",
        e["イロドリ"] = "7",
        e["ゲキマイ"] = "9"
    }(i || (i = {})),
    Object.keys(i);
    const l = [[101e4, "MAX"], [1009e3, "SSS+"], [1007500, "SSS"], [1005e3, "SS+"], [1e6, "SS"], [99e4, "S+"], [975e3, "S"], [95e4, "AAA"], [925e3, "AA"], [9e5, "A"], [8e5, "BBB"], [7e5, "BB"], [6e5, "B"], [5e5, "C"], [0, "D"]];
    function d(e) {
        let t = 0;
        return l.some(( (n, o) => (t = o,
        e >= n[0]))),
        l[t][1]
    }
    const u = [{
        score: 1009e3,
        base: 21500,
        ratio: 0
    }, {
        score: 1007500,
        base: 2e4,
        ratio: 1
    }, {
        score: 1005e3,
        base: 15e3,
        ratio: 2
    }, {
        score: 1e6,
        base: 1e4,
        ratio: 1
    }, {
        score: 975e3,
        base: 0,
        ratio: .4
    }, {
        score: 9e5,
        base: -5e4,
        ratio: 2 / 3
    }];
    function f(e) {
        return 5 * (e.const + 3) * 1e4
    }
    const p = (e, t) => e.score < 0 ? 1 : t.score < 0 ? -1 : t.rating - e.rating || t.const - e.const || e.score - t.score;
    function m(e) {
        return e.replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#039;/g, "'")
    }
    !async function(r) {
        const a = {
            [e.en_US]: {
                pleaseLogin: "Please login to CHUNITHM-NET first.",
                needReload: "Oops! Something went wrong, please reload CHUNITHM-NET.",
                downloadCSV: "Download Song Record as CSV",
                downloading: "Downloading {{diff}} data...",
                downloaded: "Completed!",
                triggerScript: "B30 Image @Qman",
                loadingMessage: "Loading song data, please do not click the button again."
            },
            [e.zh_TW]: {
                pleaseLogin: "請先登入 CHUNITHM-NET 再執行本程式。",
                needReload: "唉呀，看來我們這裡出了一點小意外，請重新整理 CHUNITHM-NET。",
                downloadCSV: "以CSV下載歌曲記錄",
                downloading: "正在下載 {{diff}} 資料...",
                downloaded: "下載完成！",
                triggerScript: "B30 圖片 @Qman",
                loadingMessage: "正在載入歌曲資料，請勿重複點擊按鈕。"
            }
        }[function() {
            const t = new URLSearchParams(location.search);
            return t.get("lang") ? t.get("lang").startsWith("zh") ? e.zh_TW : e.en_US : function() {
                switch (localStorage.getItem("language")) {
                case e.en_US:
                    return e.en_US;
                case e.zh_TW:
                    return e.zh_TW
                }
                return null
            }() || (navigator.language.startsWith("zh") ? e.zh_TW : e.en_US)
        }()];
        if (!n("_t"))
            return alert(a.pleaseLogin),
            void (window.location.href = o);
        try {
            const e = function() {
                const e = r.createElement("button");
                e.className = "chuni-tool-btn";
                const n = r.createElement("link");
                return n.rel = "stylesheet",
                n.href = t("export-csv") + "/common/styles/inject.css",
                e.innerText = a.downloadCSV,
                r.getElementsByTagName("head")[0].appendChild(n),
                n.addEventListener("load", ( () => {
                    r.querySelector(".clearfix")?.insertAdjacentElement("afterend", e)
                }
                )),
                e
            }();

            const triggerButton = function() {
                const e = r.createElement("button");
                e.className = "chuni-tool-btn";
                e.innerText = a.triggerScript;
                r.querySelector(".clearfix")?.insertAdjacentElement("afterend", e);
                return e;
            }();
            let isLoading = false;
            e.addEventListener("click", (async () => {
                if (isLoading) {
                    alert(a.loadingMessage);
                    return;
                }
                isLoading = true;
                const n = [];
                for (const t of c) {
                    e.innerText = a.downloading.replace("{{diff}}", t);
                    const o = (await s(t)).filter((e => e.score >= 0));
                    Array.prototype.push.apply(n, o)
                }
                const o = function(e, t, n) {
                    const o = e
                      , r = t
                      , a = [];
                    if (o.map((e => {
                        if ("WE" === e.difficulty)
                            return e.title = m(e.title),
                            e.const = -1,
                            e.rating = 0,
                            e.op = -1,
                            e.opMax = -1,
                            e.opPercent = -1,
                            void (e.rank = d(e.score));
                        void 0 === r[e.title] && (e.title = m(e.title));
                        let t = r[e.title];
                        void 0 === t ? (a.push(e),
                        e.const = -1,
                        e.rating = 0) : (e.const = t[e.difficulty].toFixed(1),
                        t.uncertain?.includes(e.difficulty) && (e.constUncertain = !0),
                        e.rawRating = function(e) {
                            let t, n = Math.floor(1e4 * e.const);
                            if (e.score >= 9e5) {
                                let t = u.find((t => e.score >= t.score));
                                return Math.max(0, n + t.base + t.ratio * (e.score - t.score))
                            }
                            if (e.score >= 8e5)
                                t = (n - 5e4) / 2 + (n - 5e4) / 2 * (e.score - 8e5) / 1e5;
                            else {
                                if (!(e.score >= 5e5))
                                    return 0;
                                t = (n - 5e4) / 2 * (e.score - 5e5) / 3e5
                            }
                            return Math.max(0, t)
                        }(e),
                        e.genre = `${t.genre}`,
                        e.rating = (Math.floor(e.rawRating / 100) / 100).toFixed(2),
                        e.op = function(e) {
                            if (e.score >= 101e4)
                                return f(e);
                            let t = {
                                AJ: 2e3,
                                FC: 1e3,
                                "": 0
                            }[e.clear]
                              , n = Math.floor(1e4 * e.const)
                              , o = e.score < 1007500 ? e.rawRating : n + 2e4 + 3 * (e.score - 1007500);
                            return o = e.score >= 975e3 ? 10 * Math.floor(o / 10) : 100 * Math.floor(o / 100),
                            5 * (o + t)
                        }(e),
                        e.opMax = f(e),
                        e.opPercent = 100 * e.op / e.opMax,
                        e.rank = d(e.score)
                    )}
                    )),
                    n && a.length) {
                        const e = {};
                        a.forEach((t => {
                            var n;
                            e[n = t.title] ?? (e[n] = []),
                            e[t.title].push(t.difficulty)
                        }
                        )),
                        console.log(e),
                        alert(n.replace("{{songs}}", Object.entries(e).map(( ([e,t]) => `    ${e} ${t.join(",")}`)).join("\n")))
                    }
                    return o.sort(p),
                    o.map(( (e, t) => {
                        e.order = t + 1
                    }
                    )),
                    o
                }(n, await fetch(t("export-csv") + "/data/song-const/verse.json").then((async e => await e.json())))
                  , i = o.map((e => `"${e.title.replace(/"/g, '""')}",${e.difficulty},${e.const},${e.score},${e.rating},${e.op}`));
                isLoading = false;
                e.innerText = a.downloaded;
                const l = document.createElement("a");
                l.href = "data:text/plain;charset=utf-8," + encodeURIComponent("title,difficulty,const,score,rating,op\n" + i.join("\n")),
                l.target = "_blank",
                l.download = `chunithm_record_${(new Date).toISOString()}.csv`,
                l.style.display = "none",
                r.body.appendChild(l),
                l.click(),
                r.body.removeChild(l),
                setTimeout(( () => {
                    e.innerText = a.downloadCSV
                }
                ), 3e3)
            }
            ));

            triggerButton.addEventListener("click", () => {
                var e = document.createElement("script");
                e.src = "https://chuni-test.tsaibee.org/scripts/b30image.js?" + String(Math.floor((new Date).getTime()/1e3));
                document.body.appendChild(e);
            });

        } catch (e) {
            alert(a.needReload),
            console.log(e)
        }
    }(document)
}
)();
