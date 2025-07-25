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
        return "https://chuni-test.tsaibee.org"
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
                analyzeRating: "Submit Record"
            },
            [e.zh_TW]: {
                pleaseLogin: "請先登入 CHUNITHM-NET 再執行本程式。",
                needReload: "請重新整理 CHUNITHM-NET 再執行本程式。",
                analyzeRating: "賽事成績上傳"
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
            !(function () {
                const l = document;
                const e = l.createElement("a");
                e.className = "chuni-tool-btn2";
                e.target = "champrecordViewer";

                const r = l.createElement("link");
                r.rel = "stylesheet";
                r.href = t("fetch-champ") + "/common/styles/inject.css";
                l.getElementsByTagName("head")[0].appendChild(r);

                const lang = (() => {
                    const localLang = localStorage.getItem("language");
                    switch (localLang) {
                        case "zh_TW": return "zh_TW";
                        case "en_US": return "en_US";
                        default: return navigator.language.startsWith("zh") ? "zh_TW" : "en_US";
                    }
                })();
                r.addEventListener("load", () => {
                    fetch("https://chuni-event.tsaibee.org/event.json?t=" + Date.now())
                        .then(res => res.json())
                        .then((events) => {
                            const now = new Date();
                            const validEvents = events.filter(ev => !ev.expire || new Date(ev.expire) >= now);
                            if (validEvents.length === 0) return;
                            let currentEvent = validEvents[0];
                            e.innerText = s.analyzeRating;
                            e.href = t("fetch-champ") + currentEvent.href;
                            const target = l.querySelector(".clearfix");
                            if (!target) return;
                            target.insertAdjacentElement("afterend", e);
                            const div = l.createElement("div");
                            div.className = "fetch-champ-container";
                            const select = l.createElement("select");
                            select.className = "fetch-champ-select";
                            validEvents.forEach((ev, index) => {
                                const opt = l.createElement("option");
                                opt.value = index;
                                opt.innerText = ev.title[lang];
                                select.appendChild(opt);
                            });
                            const hint = l.createElement("p");
                            hint.className = "fetch-champ-hint";
                            hint.innerText = lang === "zh_TW" ? "請選擇上傳的賽事：" : "Please select a submitted event.";
                            const time = l.createElement("p");
                            time.innerText = currentEvent.time[lang];
                            select.addEventListener("change", (eChange) => {
                                const idx = parseInt(eChange.target.value);
                                currentEvent = validEvents[idx];
                                e.href = t("fetch-champ") + currentEvent.href;
                                time.innerText = currentEvent.time[lang];
                            });
                            div.appendChild(hint);
                            div.appendChild(select);
                            div.appendChild(time);
                            e.insertAdjacentElement("afterend", div);
                        })
                        .catch((err) => {
                            console.error("Error：", err);
                        });
                });
            })(),
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
                            case "champRecord":
                                console.log("%c    Target difficulty: %c" + t.data.difficulty, "color: gray", "color: white"),
                                s = async function(e = o.master) {
                                    return [{
                                        title: "千本桜",
                                        score: 0,
                                        difficulty: e,
                                        clear: "",
                                        clear2: "",
                                        idx: "9999"
                                    }];
                                }(t.data.difficulty);
                                break; 
                        case "playHistory":
                            s = async function() {
                                const e = await i("/mobile/record/playlog");
                                return Array.from(e.querySelectorAll(".mt_10 .frame02.w400")).map((e => {
                                    const t = e.querySelector(".play_musicdata_score_text")?.innerHTML
                                        , r = e.querySelector(".play_track_result img").src
                                        , a = /musiclevel_.*(?=\.png)/.exec(r)[0].slice(11)
                                        , c = Array.from(e.querySelectorAll(".play_musicdata_icon"));
                                    return {
                                        title: e.querySelector(".play_musicdata_title").innerHTML,
                                        score: n(t),
                                        difficulty: "ultimate" == a ? "ULT" : "worldsend" == a ? "WE" : o[a],
                                        clear: c.some((e => e.querySelector('img[src*="alljustice"]'))) ? "AJ" : c.some((e => e.querySelector('img[src*="fullcombo"]'))) ? "FC" : "",
                                        clear2: c.some((e => e.querySelector('img[src*="clear"]'))) ? "CLR" : c.some((e => e.querySelector('img[src*="hard"]'))) ? "HRD" : c.some((e => e.querySelector('img[src*="absolute"]'))) ? "ABS" : c.some((e => e.querySelector('img[src*="brave"]'))) ? "BRV" : c.some((e => e.querySelector('img[src*="catastrophy"]'))) ? "CTS" : "",
                                        timestamp: Date.parse(e.querySelector(".play_datalist_date").innerHTML)
                                    }
                                }
                                ))
                            }();
                            break;
                        case "playerStats":
                            s = async function() {
                                const e = await i("/mobile/home/playerData");
                                const t = e.querySelectorAll(".player_honor_short")[0];
                                const r = /honor_bg_.*(?=\.png)/.exec(t.style.backgroundImage);
                                let honorTextElement = t.querySelector(".player_honor_text_view span");
                                let honorText = honorTextElement ? honorTextElement.innerHTML : null;
                                let honorColor = r ? r[0].slice(9) : "normal";
                                if (!honorText && t) {
                                    const backgroundImage = t.style.backgroundImage;
                                    const imageUrlMatch = backgroundImage ? backgroundImage.match(/url\(["']?(.*?)["']?\)/) : null;
                                    const imageUrl = imageUrlMatch ? imageUrlMatch[1] : null;
                                    if (imageUrl) {
                                        try {
                                            const response = await fetch(`https://chuni-test.tsaibee.org/data/title.json?t=${Date.now()}`);
                                            const titleData = await response.json();
                                            const matchedTitle = titleData.find(item => item.image === imageUrl);
                                            if (matchedTitle) {
                                                honorText = matchedTitle.title;
                                                honorColor = matchedTitle.genre;
                                            }
                                        } catch (error) {
                                            console.error("Error:", error);
                                        }
                                    }
                                }
                                const a = Array.from(e.querySelectorAll(".player_rating_num_block img"))
                                    .map((e => /rating_.*_comma.png/.test(e.src) ? "." : /rating_.*_[0-9]*(?=\.png)/.exec(e.src)[0].slice(-1)))
                                    .join("");
                                const profileDiv = e.querySelector(".box_playerprofile.clearfix, .box_playerprofile");
                                let background = "normal";
                                if (profileDiv) {
                                    const styleAttr = profileDiv.getAttribute("style");
                                    const match = styleAttr.match(/profile_(\w+)\.png/);
                                    if (match && match[1]) {
                                        background = match[1];
                                    }
                                }
                                const playerData = {
                                    name: e.querySelector(".player_name_in").innerHTML,
                                    honor: {
                                        text: honorText || "Unknown",
                                        color: honorColor
                                    },
                                    rating: a,
                                    overPower: e.querySelector(".player_overpower_text").innerHTML.match(/\(([^)]+)\)/)[1],
                                    playCount: e.querySelector(".user_data_play_count .user_data_text").innerHTML,
                                    lastPlayed: Date.parse(e.querySelector(".player_lastplaydate_text").innerHTML),
                                    ratingPn: background,
                                    code: e.querySelector('.user_data_friend_code .user_data_text span[style="display:none;"]')?.innerText || "N/A",
                                };
                                return playerData;
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