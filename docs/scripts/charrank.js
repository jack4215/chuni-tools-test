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
        if (i < 10) {
            totalExp += 2;
        } else if (i < 15) {
            totalExp += 10;
        } else if (i < 20) {
            totalExp += 15;
        } else if (i < 25) {
            totalExp += 20;
        } else if (i < 30) {
            totalExp += 30;
        } else if (i < 35) {
            totalExp += 40;
        } else if (i < 40) {
            totalExp += 50;
        } else if (i < 45) {
            totalExp += 60;
        } else if (i < 50) {
            totalExp += 70;
        } else if (i < 55) {
            totalExp += 90;
        } else if (i < 60) {
            totalExp += 110;
        } else if (i < 65) {
            totalExp += 130;
        } else if (i < 70) {
            totalExp += 150;
        } else if (i < 75) {
            totalExp += 170;
        } else if (i < 80) {
            totalExp += 190;
        } else if (i < 85) {
            totalExp += 210;
        } else if (i < 90) {
            totalExp += 230;
        } else if (i < 95) {
            totalExp += 250;
        } else if (i < 100) {
            totalExp += 270;
        } else if (i < 105) {
            totalExp += 300;
        } else if (i < 110) {
            totalExp += 330;
        } else if (i < 115) {
            totalExp += 360;
        } else if (i < 120) {
            totalExp += 390;
        } else if (i < 125) {
            totalExp += 420;
        } else if (i < 130) {
            totalExp += 450;
        } else if (i < 135) {
            totalExp += 480;
        } else if (i < 140) {
            totalExp += 510;
        } else if (i < 145) {
            totalExp += 540;
        } else if (i < 150) {
            totalExp += 570;
        } else if (i < 155) {
            totalExp += 610;
        } else if (i < 160) {
            totalExp += 650;
        } else if (i < 165) {
            totalExp += 690;
        } else if (i < 170) {
            totalExp += 730;
        } else if (i < 175) {
            totalExp += 770;
        } else if (i < 180) {
            totalExp += 810;
        } else if (i < 185) {
            totalExp += 850;
        } else if (i < 190) {
            totalExp += 890;
        } else if (i < 195) {
            totalExp += 930;
        } else if (i < 200) {
            totalExp += 970;
        }
    }
    return totalExp;
}

function displayCharacterInfo() {
    const level = getCharacterLevel();
    const totalExp = calculateTotalExperience(level);

    const resultContainer = document.createElement("div");
    resultContainer.className = "character-info-container";
    resultContainer.innerHTML = `
        <p>Rank：${level}</p>
        <p>Exp：${totalExp}</p>
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
