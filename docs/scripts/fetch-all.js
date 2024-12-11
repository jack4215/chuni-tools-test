( () => {
    "use strict";
    var e;
    function t(e) {
        const t = Array.from(document.querySelectorAll("script"));
        for (; t.length; ) {
            const r = t.pop();
            if (r?.src.includes(e)) {
                const e = new URL(r.src)
                  , t = e.pathname;
                return e.origin + t.substring(0, t.lastIndexOf("/scripts"))
            }
        }
        return "https://jack4215.github.io/chuni-tools"
    }
    function r(e) {
        const t = document.cookie.split(";").map((e => decodeURIComponent(e.trim()))).map((e => e.split("="))).find((t => t[0] === e));
        return t ? t[1] : ""
    }
    !function(e) {
        e.en_US = "en_US",
        e.zh_TW = "zh_TW"
    }(e || (e = {}));
    const a = "https://chunithm-net-eng.com";
    function n(e) {
        return Number([...e].filter((e => "," !== e)).join(""))
    }
    var o;
    !function(e) {
        e.basic = "BAS",
        e.advanced = "ADV",
        e.expert = "EXP",
        e.master = "MAS",
        e.ultima = "ULT"
    }(o || (o = {}));
    const c = Object.values(o);
    var l;
    async function i(e, t) {
        const r = await fetch(a + e, {
            headers: {
                "Cache-Control": "no-cache"
            },
            method: t ? "POST" : "GET",
            body: t
        });
        if (503 === r.status || 405 === r.status)
            throw new Error("Service temporarily unavailable");
        if (-1 != r.url.indexOf("/error"))
            throw new Error("Request failed: rejected by server");
        return (new DOMParser).parseFromString(await r.text(), "text/html")
    }
    !function(e) {
        e["P & A"] = "0",
        e.niconico = "2",
        e["東方Project"] = "3",
        e.ORIGINAL = "5",
        e.VARIETY = "6",
        e["イロドリ"] = "7",
        e["ゲキマイ"] = "9"
    }(l || (l = {})),
    Object.keys(l),
    async function(l) {
        const s = {
            [e.en_US]: {
                pleaseLogin: "Please login to CHUNITHM-NET first.",
                needReload: "Please reload CHUNITHM-NET.",
                analyzeRating: "Analyze Rating (Beta)"
            },
            [e.zh_TW]: {
                pleaseLogin: "請先登入 CHUNITHM-NET 再執行本程式。",
                needReload: "請重新整理 CHUNITHM-NET 再執行本程式。",
                analyzeRating: "分析遊戲成績 (Beta)"
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
        if (!r("_t"))
            return alert(s.pleaseLogin),
            void (window.location.href = a);
        try {
            !function() {
                const e = l.createElement("a");
                e.className = "chuni-tool-btn";
                const r = l.createElement("link");
                r.rel = "stylesheet",
                r.href = t("fetch-all") + "/common/styles/inject.css",
                e.innerText = s.analyzeRating,
                e.href = t("fetch-all") + "/record-viewer/#all",
                e.target = "recordViewer",
                l.getElementsByTagName("head")[0].appendChild(r),
                r.addEventListener("load", ( () => {
                    l.querySelector(".clearfix")?.insertAdjacentElement("afterend", e)
                }
                ))
            }(),
            window.addEventListener("message", (function(e) {
                switch (e.data.action) {
                case "request":
                    !function(e) {
                        const {payload: t, uuid: a} = e.data;
                        console.log("%cReceived request for: %c" + t.target, "color: gray", "color: white");
                        const l = function(e, t) {
                            if (!e)
                                throw new Error("Target window does not exist");
                            return (r, a, n) => {
                                const o = {
                                    action: r,
                                    payload: a
                                };
                                n && (o.uuid = n),
                                e.postMessage(o, t)
                            }
                        }(e.source, e.origin);
                        let s;
                        switch (t.target) {
                            case "allRecord":
                                console.log("%c    Target difficulty: %c" + t.data.difficulty, "color: gray", "color: white"),
                                s = async function(e=o.master) {
                                    const t = new FormData;
                                    t.append("genre", "99"),
                                    t.append("token", r("_t"));
                                    const a = {
                                        [o.ultima]: "sendUltima",
                                        [o.master]: "sendMaster",
                                        [o.expert]: "sendExpert",
                                        [o.advanced]: "sendAdvanced",
                                        [o.basic]: "sendBasic"
                                    }[e];   
                                    const c = await i("/mobile/record/musicGenre/" + a, t);
                                    const records = Array.from(c.querySelectorAll(".box01.w420")[1].querySelectorAll("form")).map((t => {
                                        const r = t.querySelector(".play_musicdata_icon"),
                                              a = t.querySelector(".text_b")?.innerHTML;
                                        return {
                                            title: t.querySelector(".music_title")?.innerHTML,
                                            score: a ? n(a) : -1,
                                            difficulty: e,
                                            clear: r?.querySelector('img[src*="alljustice"]') ? "AJ" : r?.querySelector('img[src*="fullcombo"]') ? "FC" : "",
                                            idx: t.querySelector('input[name="idx"]').value
                                        };
                                    })).filter((e => e.title && e.score));
                                    // Add hidden song
                                    const difficultyNames = {
                                        [o.ultima]: "ultima",
                                        [o.master]: "master",
                                        [o.expert]: "expert",
                                        [o.advanced]: "advanced",
                                        [o.basic]: "basic"
                                    };   
                                    const difficultyScore = sumScores(records);
                                    const totalHighScore = await fetchTotalHighScore(difficultyNames[e]);
                                 /**/    records.push({
                                        title: "Latent Kingdom",
                                        score: totalHighScore - difficultyScore === 0 ? -1 : totalHighScore - difficultyScore, 
                                        difficulty: e,
                                        clear: "",
                                        idx: "2605"
                                    }); /**/
                                    // Add hidden song end
                                    return records;
                                }(t.data.difficulty);
                                break;
                            // Calculate total score
                            function sumScores(records) {
                                return records.reduce((sum, record) => sum + (record.score !== -1 ? record.score : 0), 0);
                            }                
                            async function fetchTotalHighScore(difficulty) {
                                const response = await fetch(`https://chunithm-net-eng.com/mobile/ranking/totalHighScore/${difficulty}`);
                                const html = await response.text();
                                const parser = new DOMParser();
                                const doc = parser.parseFromString(html, "text/html");                        
                                const totalHighScoreDiv = doc.querySelector(".mb_5.text_b");
                                return totalHighScoreDiv ? totalHighScoreDiv.innerText.replace(/,/g, "").trim() : "Error";
                            }         
                            // Calculate total score end         
                        
                        case "playerStats":
                            s = async function() {
                                const e = await i("/mobile/home/playerData")
                                  , t = e.querySelector(".player_honor_short")
                                  , r = /honor_bg_.*(?=\.png)/.exec(t.style.backgroundImage)
                                  , a = Array.from(e.querySelectorAll(".player_rating_num_block img")).map((e => /rating_.*_comma.png/.test(e.src) ? "." : /rating_.*_[0-9]*(?=\.png)/.exec(e.src)[0].slice(-1))).join("");
                                  const profileDiv = e.querySelector(".box_playerprofile.clearfix, .box_playerprofile");
                                let background = "normal";
                                if (profileDiv) {
                                    const styleAttr = profileDiv.getAttribute("style");
                                    const match = styleAttr.match(/profile_(\w+)\.png/);
                                    if (match && match[1]) {
                                        background = match[1];
                                    }
                                }
                                return {
                                    name: e.querySelector(".player_name_in").innerHTML,
                                    honor: {
                                        text: e.querySelector(".player_honor_text_view span").innerHTML,
                                        color: r ? r[0].slice(9) : "normal"
                                    },
                                    rating: a,
                                    overPower: e.querySelector(".player_overpower_text").innerHTML.match(/\(([^)]+)\)/)[1],
                                    playCount: e.querySelector(".user_data_play_count .user_data_text").innerHTML,
                                    lastPlayed: Date.parse(e.querySelector(".player_lastplaydate_text").innerHTML),
                                    ratingPn: background
                                }
                            }();
                            break;
                        case "songPlayCount":
                            console.log("%c    Target song id: %c" + t.data.idx, "color: gray", "color: white"),
                            console.log("%c    Target difficulty: %c" + t.data.difficulty, "color: gray", "color: white"),
                            s = async function(e, t) {
                                const a = new FormData;
                                a.append("idx", e),
                                a.append("genre", "99"),
                                a.append("diff", c.indexOf(t).toString()),
                                a.append("token", r("_t"));
                                const n = await i("/mobile/record/musicGenre/sendMusicDetail/", a)
                                  , l = n.querySelectorAll(`.music_box.bg_${Object.entries(o).find((e => e[1] === t))[0]} .box14 > div`)[1].querySelector(".text_b")?.innerHTML.replace("times", "");
                                return parseInt(l)
                            }(t.data.idx, t.data.difficulty)
                        }
                        l("ping", {
                            target: t.target
                        }, a),
                        s?.then((e => {
                            l("respond", {
                                target: t.target,
                                data: e
                            }, a)
                        }
                        )).catch((e => {
                            console.error(e),
                            l("respond", {
                                target: t.target,
                                error: e
                            }, a)
                        }
                        ))
                    }(e);
                    break;
                case "saveConfig":
                    const t = e.data.payload.data?.lang;
                    t && (function(e) {
                        localStorage.setItem("language", e)
                    }(t),
                    console.log("%cChange language preferences to: %c" + t, "color: gray", "color: white"))
                }
            }
            ), !1)
        } catch (e) {
            alert(s.needReload),
            console.log(e)
        }
    }(document)
}
)();