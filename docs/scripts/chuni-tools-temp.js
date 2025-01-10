( () => {
    "use strict";
    var n;
    !function(n) {
        n.en_US = "en_US",
        n.zh_TW = "zh_TW"
    }(n || (n = {}));
    const e = "chunithm-net-eng.com"
      , t = "https://" + e;
    !function(o, r) {
        const a = {
            [n.en_US]: {
                alreadyRun: "Please refresh the page before running CHUNI TOOLS again!",
                wrongBase: `Please open CHUNITHM-NET Intl. (${e}) and login, then try again.`
            },
            [n.zh_TW]: {
                alreadyRun: "請重新整理頁面後再執行 CHUNITHM 查分器！",
                wrongBase: `請到 CHUNITHM-NET Intl. (${e}) 登入之後再試一次。`
            }
        }[function() {
            const e = new URLSearchParams(location.search);
            return e.get("lang") ? e.get("lang").startsWith("zh") ? n.zh_TW : n.en_US : function() {
                switch (localStorage.getItem("language")) {
                case n.en_US:
                    return n.en_US;
                case n.zh_TW:
                    return n.zh_TW
                }
                return null
            }() || (navigator.language.startsWith("zh") ? n.zh_TW : n.en_US)
        }()];
        if (r.chuniTools)
            return void alert(a.alreadyRun);
        if (r.chuniTools = !0,
        r.location.hostname !== e)
            return alert(a.wrongBase),
            void (r.location.href = t);

        // chuni-tools-container
        function insertResult(targetElement) {
            const resultContainer = document.createElement("div");
            resultContainer.className = "chuni-tools-container";
            resultContainer.innerHTML = `
                <p>新版查分器將於 2025-04-03 停用</p>
                <p>屆時請改回使用原有書籤工具</p><br>
                <p>The Beta Version Record Viewer will be retired on April 3, 2025.</p>
                <p>Please switch back to using the original tools by then.</p><br>
                <p><a href="https://github.com/jack4215/chuni-tools/blob/main/README.MD" target="_blank">完整內容 / More Details.</a></p>
            `;
            const style = document.createElement("style");
            style.textContent = `
                .chuni-tools-container {
                    padding: 8px;
                    background-color:rgb(34, 51, 68);
                    margin: 10px auto;
                    width: 420px;
                    font-family: Arial, sans-serif;
                    border-radius: 4px;
                    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
                }
                .chuni-tools-container p {
                    margin: 5px 0;
                    color: #ededed;
                    text-align: center;
                }
            `;
            document.head.appendChild(style);
            targetElement?.insertAdjacentElement("afterend", resultContainer);
        }
        // End of chuni-tools-container
        const l = o.querySelector(".clearfix");
        if (l) {
            insertResult(l);
        }
        function s(n) {
            const e = o.createElement("script");
            e.src = `https://chuni.tsaibee.org/scripts/${n}.js?t=${Date.now()}`;
            o.body.append(e);
        }
        const i = o.location.pathname;
        -1 != i.indexOf("/mobile/home/userOption/updateUserName") ? s("idxmap-generate") : -1 != i.indexOf("/mobile/loginBonus") ? s("export-csv") : -1 != i.indexOf("/mobile/ranking/teamPoint/") ? s("team-ranking") : -1 != i.indexOf("/mobile/friend/friendDetail/") ? s("friendidx") : -1 != i.indexOf("/mobile/record/playlogDetail/") ? (s("targetrank"), setTimeout(() => {s("fetch-all-temp");}, 5)) : -1 != i.indexOf("/mobile/collection/") || -1 != i.indexOf("/mobile/collection/characterDetail/") ? (s("charrank"), setTimeout(() => {s("fetch-all-temp");}, 5)) : -1 != i.indexOf("/mobile/friend/genreVs/battleStart")  ? (s("export-friend-csv"), setTimeout(() => {s("fetch-friend-temp");}, 5)) : -1 != i.indexOf("/mobile/netStore/netpointLog")  ? (s("ptcount"), setTimeout(() => {s("fetch-all");}, 5)) : s("fetch-all-temp")
    }(document, window)
}
)();
