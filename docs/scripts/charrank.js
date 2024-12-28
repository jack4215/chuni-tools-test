function getExpForLevel(level) {
    const expMap = [
        { range: [1, 9], exp: 2 },
        { range: [10, 14], exp: 10 },
        { range: [15, 19], exp: 15 },
        { range: [20, 24], exp: 20 },
        { range: [25, 29], exp: 30 },
        { range: [30, 34], exp: 40 },
        { range: [35, 39], exp: 50 },
        { range: [40, 44], exp: 60 },
        { range: [45, 49], exp: 70 },
        { range: [50, 54], exp: 90 },
        { range: [55, 59], exp: 110 },
        { range: [60, 64], exp: 130 },
        { range: [65, 69], exp: 150 },
        { range: [70, 74], exp: 170 },
        { range: [75, 79], exp: 190 },
        { range: [80, 84], exp: 210 },
        { range: [85, 89], exp: 230 },
        { range: [90, 94], exp: 250 },
        { range: [95, 99], exp: 270 },
        { range: [100, 104], exp: 300 },
        { range: [105, 109], exp: 330 },
        { range: [110, 114], exp: 360 },
        { range: [115, 119], exp: 390 },
        { range: [120, 124], exp: 420 },
        { range: [125, 129], exp: 450 },
        { range: [130, 134], exp: 480 },
        { range: [135, 139], exp: 510 },
        { range: [140, 144], exp: 540 },
        { range: [145, 149], exp: 570 },
        { range: [150, 154], exp: 610 },
        { range: [155, 159], exp: 650 },
        { range: [160, 164], exp: 690 },
        { range: [165, 169], exp: 730 },
        { range: [170, 174], exp: 770 },
        { range: [175, 179], exp: 810 },
        { range: [180, 184], exp: 850 },
        { range: [185, 189], exp: 890 },
        { range: [190, 194], exp: 930 },
        { range: [195, 199], exp: 970 },
    ];

    const range = expMap.find(({ range }) => level >= range[0] && level <= range[1]);
    return range ? range.exp : 0;
}

function getCharacterLevel() {
    const levelBox = document.querySelector(".character_lv_box_num");
    if (!levelBox) return 0;

    const numberImages = levelBox.querySelectorAll("img");
    const level = Array.from(numberImages)
        .map(img => {
            const src = img.getAttribute("src");
            const match = src.match(/num_lv_(\d)\.png/);
            return match ? match[1] : "0";
        })
        .join("");

    return parseInt(level, 10) || 0;
}

function calculateTotalExperience(level) {
    if (level < 1) return 0;

    let totalExp = 0;
    for (let i = 1; i < level; i++) {
        totalExp += getExpForLevel(i);
    }
    return totalExp;
}

function getExpPercentage() {
    const gageBase = document.querySelector(".character_gage_base img");
    if (!gageBase) return 0;

    const width = parseFloat(gageBase.getAttribute("width").replace("px", ""));
    const remainingPx = 374 - width;
    return (remainingPx / 374) * 100;
}

function displayCharacterInfo() {
    const level = getCharacterLevel();
    const expPercentage = getExpPercentage();
    const levelExp = getExpForLevel(level);
    const totalExp = calculateTotalExperience(level) + Math.floor((levelExp * expPercentage) / 100);

    const resultContainer = document.createElement("div");
    resultContainer.className = "character-info-container";
    resultContainer.innerHTML = `
        <p>Rank：${level} (${expPercentage.toFixed(1)}%) / Exp：${totalExp}</p>
    `;

    const style = document.createElement("style");
    style.textContent = `
        .character-info-container {
            padding: 8px;
            background-color: #405c7b;
            margin: 10px auto;
            width: 404px;
            text-align: center;
            font-family: Arial, sans-serif;
            color: #ededed;
        }
        .character-info-container p {
            margin: 5px 0;
        }
    `;
    document.head.appendChild(style);

    const characterBlock = document.querySelector(".character_block");
    if (characterBlock) {
        characterBlock.insertAdjacentElement("afterend", resultContainer);
    }
}

displayCharacterInfo();
