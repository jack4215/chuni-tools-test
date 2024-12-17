async function fetchPageDoc(url) {
    return new DOMParser().parseFromString(await (await fetch(url)).text(), "text/html");
}

async function fetchMusicFormDoc(url, token) {
    return new DOMParser().parseFromString(await (await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: `genre=99&token=${token}`
    })).text(), "text/html");
}

function switchNumToDiff(n) {
    switch (n) {
        case 0:
            return "Basic";
        case 1:
            return "Advanced";
        case 2:
            return "Expert";
        case 3:
            return "Master";
        case 4:
            return "Ultima";
        default:
            return "Unknown";
    }
}

// https://qiita.com/h53/items/05139982c6fd81212b08
function toISOStringWithTimezone(date) {
    const pad = function (str) {
        return ('0' + str).slice(-2);
    };
    const year = (date.getFullYear()).toString();
    const month = pad((date.getMonth() + 1).toString());
    const day = pad(date.getDate().toString());
    const hour = pad(date.getHours().toString());
    const min = pad(date.getMinutes().toString());
    const sec = pad(date.getSeconds().toString());
    const tz = -date.getTimezoneOffset();
    const sign = tz >= 0 ? '+' : '-';
    const tzHour = pad((tz / 60).toString());
    const tzMin = pad((tz % 60).toString());

    return `${year}-${month}-${day}T${hour}:${min}:${sec}${sign}${tzHour}:${tzMin}`;
}

async function main() {

    
    // https://note.affi-sapo-sv.com/js-sleep.php
    const sleep = waitTime => new Promise(resolve => setTimeout(resolve, waitTime));

    const VERSION = "1.0.0";
    const difficulties = ["Basic", "Advanced", "Expert", "Master", "Ultima"];
    const engMode = location.hostname === "chunithm-net-eng.com";
    let baseUrl = engMode ? "https://chunithm-net-eng.com/" : "https://new.chunithm-net.com/chuni-mobile/html/";
    baseUrl += "mobile/";
    const homeUrl = baseUrl + "home/";
    const musicUrl = baseUrl + "record/musicGenre/";
    const sendUrl = musicUrl + "send";
    const ratingsUrlBase = homeUrl + "playerData/";
    const ratingsBestUrl = ratingsUrlBase + "ratingDetailBest/"; // ベスト枠
    const ratingsRecentUrl = ratingsUrlBase + "ratingDetailRecent/"; // リーセント枠
    const ratingsNextUrl = ratingsUrlBase + "ratingDetailNext/"; // 候補楽曲
    const playerData = {};

    // location check
    if (location.hostname !== "new.chunithm-net.com" && location.hostname !== "chunithm-net-eng.com") {
        alert("このページでは実行できません。 You can't run this script on this page.");
        return;
    }

    const homeDoc = await fetchPageDoc(homeUrl);
    if (homeDoc.querySelector(".player_honor_text") === null) {
        alert("CHUNITHM-NETにログインし、Aimeカードを選択してから実行してください。 Please login to CHUNITHM-NET and select your Aime card.");
        return;
    }

    const UiBase = document.body.appendChild(document.createElement("div"));

    // GUI
    UiBase.style.position = "absolute";
    UiBase.style.top = "50%";
    UiBase.style.left = "50%";
    UiBase.style.transform = "translate(-50%, -50%)";
    UiBase.style.backgroundColor = "#fff";
    UiBase.style.padding = "10px";
    UiBase.style.borderRadius = "10px";
    UiBase.style.width = "min(90%, 400px)";
    UiBase.style.height = "min(90%, 500px)";
    UiBase.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.5)";
    UiBase.style.overflowX = "hidden";
    UiBase.style.textAlign = "left";
    UiBase.innerHTML = `<p>CHUNITHM Score Data Downloader v${VERSION}</p><p>by <a href="https://reiwa.f5.si/" target="_blank">音ゲーツール置き場</a></p><hr>`;
    UiBase.innerHTML += engMode ? "<p>Fetching player's profiles...</p>" : "<p>プレイヤープロフィールを取得しています...</p>";

    await sleep(1000);
    async function sendToGoogleSheet(playerData1) {
        const scriptUrl = 'https://script.google.com/macros/s/AKfycbzCyyL-S1WCcOAKqg43r5AnHrNia6dgEJiO0QbZSD2Srp-X-eePn9L2bf5xZ0y0nUUl/exec'; // 替換為部署的 URL
        try {
            const response = await fetch(scriptUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(playerData1),
            });
            const result = await response.json();
            if (result.status === 'success') {
                console.log('成功新增資料到 Google Sheet');
            } else {
                console.error('新增資料失敗', result);
            }
        } catch (error) {
            console.error('無法連線到 Google Apps Script:', error);
        }
    }
    
    // 蒐集 Player Data 的部分
    const honor = homeDoc.querySelector(".player_honor_text").textContent;
    const name = homeDoc.querySelector(".player_name_in").textContent;
    const ratingBlockImgs = homeDoc.querySelectorAll(".player_rating_num_block img");
    const ratingStr = [];
    for (let i = 0; i < ratingBlockImgs.length; i++) {
        let src = ratingBlockImgs[i].src;
        if (src.includes("comma")) {
            ratingStr.push(".");
            continue;
        }
        let match = src.match(/([0-9])\.png/);
        if (match) ratingStr.push(match[1]);
    }
    const rating = Number(ratingStr.join(""));
    const ratingMax = Number(homeDoc.querySelector(".player_rating_max").textContent);

    const playerData1 = {
        honor: honor,
        name: name,
        rating: rating,
        ratingMax: ratingMax,
        updatedAt: toISOStringWithTimezone(new Date()),
    };

    // 傳送資料到 Google Sheet
    sendToGoogleSheet(playerData1);

    const musicData = [];

    // token取得
    const preDoc = await fetchPageDoc(musicUrl);
    const token = preDoc.querySelector("input[name=token]").value;

    // フォーム取得
    const form = preDoc.getElementsByTagName("form")[0];
    const formData = new FormData(form);
    formData.set("genre", 99);
    formData.set("token", token);

    for (let i = 0; i < difficulties.length; i++) {
        let difficulty = difficulties[i];
        UiBase.innerHTML += engMode ? `<p>Fetching ${difficulty.toUpperCase()} data...</p>` : `<p>${difficulty.toUpperCase()}のデータを取得しています...</p>`;
        let musicDoc = await fetchMusicFormDoc(sendUrl + difficulty, token);

        let forms = musicDoc.querySelectorAll("form");
        for (let j = 0; j < forms.length; j++) {
            if (forms[j].querySelector(".music_title") === null) continue;
            let title = forms[j].querySelector(".music_title").textContent.trim();
            if (!title) continue;

            let score = 0;
            if (forms[j].querySelector(".play_musicdata_highscore") !== null) {
                score = Number(forms[j].querySelector(".play_musicdata_highscore").querySelector("span").textContent.replaceAll(",", ""));
            }
            let isAllJustice = false;
            let isFullCombo = false;
            let lampImgsDiv = forms[j].querySelector(".play_musicdata_icon");
            if (lampImgsDiv !== null) {
                let lampImgs = forms[j].querySelector(".play_musicdata_icon").querySelectorAll("img");
                for (let k = 0; k < lampImgs.length; k++) {
                    let src = lampImgs[k].src;
                    if (src.includes("alljustice")) {
                        isAllJustice = true;
                        isFullCombo = true;
                        break;
                    } else if (src.includes("fullcombo")) {
                        isFullCombo = true;
                        break;
                    }
                }
            };

            musicData.push({
                title: title,
                difficulty: difficulty,
                score: score,
                isAllJustice: isAllJustice,
                isFullCombo: isFullCombo
            });
        }

        await sleep(1000);
    }

    // レーティング対象楽曲: AJ/FCの照合のためmusicDataを使う
    // ベスト枠
    UiBase.innerHTML += engMode ? "<p>Fetching best songs...</p>" : "<p>ベスト枠楽曲を取得しています...</p>";
    const ratingsBestDoc = await fetchPageDoc(ratingsBestUrl);
    const bestMusics = ratingsBestDoc.getElementsByTagName("form");
    const bestMusicData = [];
    for (let i = 0; i < bestMusics.length; i++) {
        let music = bestMusics[i];
        let title = music.querySelector(".music_title").textContent.trim();
        let difficulty = switchNumToDiff(Number(music.querySelector('input[type="hidden"][name="diff"]').getAttribute("value")));
        let score = Number(music.querySelector(".play_musicdata_highscore").querySelector("span").textContent.replaceAll(",", ""));

        // AJ/FCの照合
        let isAllJustice = false;
        let isFullCombo = false;
        let musicInMusicData = musicData.filter(m => m.title === title && m.difficulty === difficulty && m.score === score)[0];
        if (musicInMusicData) {
            isAllJustice = musicInMusicData.isAllJustice;
            isFullCombo = musicInMusicData.isFullCombo;
        }

        bestMusicData.push({
            title: title,
            difficulty: difficulty,
            score: score,
            isAllJustice: isAllJustice,
            isFullCombo: isFullCombo
        });
    }
    await sleep(1000);

    // 當資料少於 30 首時，自動填入 "Stardust:RAY" 並詢問分數
    if (bestMusicData.length < 30) {
        UiBase.innerHTML += engMode
            ? `<p>Missing some songs. Filling with "Stardust:RAY".</p>`
            : `<p>不足的歌曲將以「Stardust:RAY」填補。</p>`;
        
        let userScore;
        do {
            userScore = prompt(`請輸入「Stardust:RAY」的分數：`);
            userScore = Number(userScore);
        } while (!Number.isInteger(userScore) || userScore <= 0);

        bestMusicData.push({
            title: "Stardust:RAY",
            difficulty: "Master",
            score: userScore,
            isAllJustice: false,
            isFullCombo: false
        });
    }


    // リーセント枠
    UiBase.innerHTML += engMode ? "<p>Fetching recent songs...</p>" : "<p>リーセント枠楽曲を取得しています...</p>";
    const ratingsRecentDoc = await fetchPageDoc(ratingsRecentUrl);
    const recentMusics = ratingsRecentDoc.getElementsByTagName("form");
    const recentMusicData = [];
    for (let i = 0; i < recentMusics.length; i++) {
        let music = recentMusics[i];
        let title = music.querySelector(".music_title").textContent.trim();
        let difficulty = switchNumToDiff(Number(music.querySelector('input[type="hidden"][name="diff"]').getAttribute("value")));
        let score = Number(music.querySelector(".play_musicdata_highscore").querySelector("span").textContent.replaceAll(",", ""));

        recentMusicData.push({
            title: title,
            difficulty: difficulty,
            score: score,
        });
    }
    await sleep(1000);

    // 候補楽曲
    UiBase.innerHTML += engMode ? "<p>Fetching best-candidate songs...</p>" : "<p>ベスト枠候補楽曲を取得しています...</p>";
    const ratingsNextDoc = await fetchPageDoc(ratingsNextUrl);
    const nextMusics = ratingsNextDoc.getElementsByTagName("form");
    const nextMusicData = [];
    for (let i = 0; i < nextMusics.length; i++) {
        let music = nextMusics[i];
        let title = music.querySelector(".music_title").textContent.trim();
        let difficulty = switchNumToDiff(Number(music.querySelector('input[type="hidden"][name="diff"]').getAttribute("value")));
        let score = Number(music.querySelector(".play_musicdata_highscore").querySelector("span").textContent.replaceAll(",", ""));

        // AJ/FCの照合
        let isAllJustice = false;
        let isFullCombo = false;
        let musicInMusicData = musicData.filter(m => m.title === title && m.difficulty === difficulty && m.score === score)[0];
        if (musicInMusicData) {
            isAllJustice = musicInMusicData.isAllJustice;
            isFullCombo = musicInMusicData.isFullCombo;
        }

        nextMusicData.push({
            title: title,
            difficulty: difficulty,
            score: score,
            isAllJustice: isAllJustice,
            isFullCombo: isFullCombo
        });
    }
    await sleep(1000);

    UiBase.innerHTML += engMode ? "<p>Finished!</p>" : `<p>完了しました！</p>`;
    // UiBase.innerHTML += `<button id="closer">${engMode ? "Close" : "閉じる"}</button>`
    const closer = UiBase.appendChild(document.createElement("button"));
    closer.id = "closer";
    closer.textContent = engMode ? "Close" : "閉じる";
    closer.style = "display: block; margin: 0 auto; padding: 5px 10px; font-size: 1.2rem; border: none; border-radius: 5px; background-color: rgb(13, 155, 13); color: #fff; cursor: pointer;"
    UiBase.querySelector("#closer").addEventListener("click", () => UiBase.remove());
    playerData.best = bestMusicData;
    playerData.recent = recentMusicData;
    playerData.candidate = nextMusicData;
    playerData.score = musicData;
    const now = new Date();
    const blob = new Blob([JSON.stringify(playerData)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `chunithm-player-data_${String(Math.floor(now.getTime() / 1000))}.json`;
    a.click();
}

main();