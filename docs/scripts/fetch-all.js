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
        return "https://chuni.tsaibee.org"
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
                analyzeRating: "Analyze Rating"
            },
            [e.zh_TW]: {
                pleaseLogin: "請先登入 CHUNITHM-NET 再執行本程式。",
                needReload: "請重新整理 CHUNITHM-NET 再執行本程式。",
                analyzeRating: "分析遊戲成績"
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
                    l.querySelector(".clearfix")?.insertAdjacentElement("afterend", e);
                    insertClearButtons();
                }
                ))
                function insertClearButtons() {
                    const container = document.createElement("div");
                    container.id = "clear-select-container";
                    container.className = "clear-select-container";
                
                    const title = document.createElement("p");
                    title.id = "clear-toggle-title";
                    title.innerText = "選擇各難度的 FC / AJ 狀態 ▼";
                    title.style.cursor = "pointer";
                    container.appendChild(title);
                
                    const grid = document.createElement("div");
                    grid.className = "clear-grid";
                    grid.style.display = "none"; // 一開始隱藏
                    container.appendChild(grid);
                
                    const defaultState = { BAS: "", ADV: "", EXP: "", MAS: "", ULT: "" };
                    const state = JSON.parse(localStorage.getItem("clearStatus") || JSON.stringify(defaultState));
                
                    // 難度與對應顏色
                    const colorMap = {
                        BAS: "#8ae29a",
                        ADV: "#ea8a55",
                        EXP: "#ed5a77",
                        MAS: "#dd8aee",
                        ULT: "#78deff",
                    };
                
                    // 第一列：難度名稱
                    Object.entries(o).forEach(([key, value]) => {
                        const label = document.createElement("div");
                        label.className = "diff-label";
                        label.innerText = value;
                        label.style.color = colorMap[value] || "#fff";
                        grid.appendChild(label);
                    });
                
                    // 第二列：FC 按鈕
                    Object.entries(o).forEach(([key, value]) => {
                        const btn = document.createElement("button");
                        btn.className = "sort-btn";
                        btn.innerText = "FC";
                        btn.dataset.difficulty = value;
                        btn.dataset.type = "FC";
                
                        if (state[value] === "FC") {
                            btn.classList.add("selected", "fc");
                        }
                
                        btn.addEventListener("click", () => {
                            const allBtns = grid.querySelectorAll(`button[data-difficulty="${value}"]`);
                            if (state[value] === "FC") {
                                state[value] = "";
                                btn.classList.remove("selected", "fc");
                            } else {
                                state[value] = "FC";
                                allBtns.forEach(b => b.classList.remove("selected", "fc", "aj"));
                                btn.classList.add("selected", "fc");
                            }
                            localStorage.setItem("clearStatus", JSON.stringify(state));
                            console.log("目前選取狀態：", state);
                        });
                
                        grid.appendChild(btn);
                    });
                
                    // 第三列：AJ 按鈕
                    Object.entries(o).forEach(([key, value]) => {
                        const btn = document.createElement("button");
                        btn.className = "sort-btn";
                        btn.innerText = "AJ";
                        btn.dataset.difficulty = value;
                        btn.dataset.type = "AJ";
                
                        if (state[value] === "AJ") {
                            btn.classList.add("selected", "aj");
                        }
                
                        btn.addEventListener("click", () => {
                            const allBtns = grid.querySelectorAll(`button[data-difficulty="${value}"]`);
                            if (state[value] === "AJ") {
                                state[value] = "";
                                btn.classList.remove("selected", "aj");
                            } else {
                                state[value] = "AJ";
                                allBtns.forEach(b => b.classList.remove("selected", "fc", "aj"));
                                btn.classList.add("selected", "aj");
                            }
                            localStorage.setItem("clearStatus", JSON.stringify(state));
                            console.log("目前選取狀態：", state);
                        });
                
                        grid.appendChild(btn);
                    });
                
                    // 切換摺疊
                    title.addEventListener("click", () => {
                        const isHidden = grid.style.display === "none";
                        grid.style.display = isHidden ? "grid" : "none";
                        title.innerText = `選擇各難度的 FC / AJ 狀態 ${isHidden ? "▲" : "▼"}`;
                    });
                
                    const style = document.createElement("style");
                    style.textContent = `
                        .clear-select-container {
                            padding: 8px;
                            background-color: rgb(34, 51, 68);
                            margin: 10px auto;
                            width: 440px;
                            font-family: Arial, sans-serif;
                            border-radius: 6px;
                            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
                        }
                
                        #clear-toggle-title {
                            margin: 5px 0 10px 0;
                            color: #ededed;
                            text-align: center;
                            font-size: 14px;
                            user-select: none;
                        }
                
                        .clear-grid {
                            display: grid;
                            grid-template-columns: repeat(5, 1fr);
                            gap: 6px;
                            text-align: center;
                            margin-top: 8px;
                        }
                
                        .clear-grid .diff-label {
                            font-weight: bold;
                            font-size: 13px;
                            padding: 5px 0;
                        }
                
                        .clear-grid .sort-btn {
                            padding: 8px;
                            border: none;
                            border-radius: 7px;
                            background-color: #ccc;
                            cursor: pointer;
                            font-weight: bold;
                            font-size: 14px;
                            transition: background-color 0.2s, color 0.2s;
                        }
                
                        .clear-grid .sort-btn.selected.fc {
                            background-color: #a3ccf5;
                            color: #000;
                        }
                
                        .clear-grid .sort-btn.selected.aj {
                            background-color: #ffd744;
                            color: #000;
                        }
                    `;
                    document.head.appendChild(style);
                
                    document.querySelector(".chuni-tool-btn")?.insertAdjacentElement("afterend", container);
                }
                              
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
                                            clear2: r?.querySelector('img[src*="clear"]') ? "CLR" : r?.querySelector('img[src*="hard"]') ? "HRD" : r?.querySelector('img[src*="absolute"]') ? "ABS" : r?.querySelector('img[src*="brave"]') ? "BRV" : r?.querySelector('img[src*="catastrophy"]') ? "CTS" : "",
                                            idx: t.querySelector('input[name="idx"]').value
                                        };
                                    })).filter((e => e.title && e.score && !e.title.includes("Floor Killer") && !e.title.includes("Dig Delight!")));
                                    const difficultyNames = {
                                        [o.ultima]: "ultima",
                                        [o.master]: "master",
                                        [o.expert]: "expert",
                                        [o.advanced]: "advanced",
                                        [o.basic]: "basic"
                                    };   
                                    const difficultyScore = sumScores(records);
                                    // Add hidden song
                                    const totalHighScore = await fetchTotalHighScore(difficultyNames[e]);
                                    const clearStatus = JSON.parse(localStorage.getItem("clearStatus") || "{}");
                                        records.push({
                                            title: "Theatore Creatore",
                                            score: totalHighScore - difficultyScore === 0 ? -1 : totalHighScore - difficultyScore, 
                                            difficulty: e,
                                            clear: clearStatus[e] || "",
                                            clear2: "",
                                            idx: "2712"
                                        });

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
                                            const response = await fetch(`https://chuni.tsaibee.org/data/title.json?t=${Date.now()}`);
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