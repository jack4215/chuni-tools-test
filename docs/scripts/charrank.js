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

function displayCharacterLevel() {
    const level = getCharacterLevel();
    const resultContainer = document.createElement("div");
    resultContainer.className = "character-level-container";
    resultContainer.innerHTML = `<p>Rank：${level}</p>`;

    const style = document.createElement("style");
    style.textContent = `
        .character-level-container {
            padding: 8px;
            background-color: #405c7b;
            margin: 10px auto;
            width: 404px;
            text-align: center;
            font-family: Arial, sans-serif;
            color: #ededed;
        }
        .character-level-container p {
            margin: 0;
        }
    `;
    document.head.appendChild(style);

    const characterBlock = document.querySelector(".character_block");
    if (characterBlock) {
        characterBlock.insertAdjacentElement("afterend", resultContainer);
    }
}

displayCharacterLevel();
