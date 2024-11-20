function displayPt() {
    const monthlyData = {}; 
    const logBlocks = document.querySelectorAll(".net_point_log_block > div[name^='aggr']");
    const selectElement = document.querySelector("select[name='aggrDate']");
    const options = selectElement.querySelectorAll("option");

    // 依據 <select> 元素中的月份初始化
    const availableMonths = Array.from(options).map(option => option.value);

    logBlocks.forEach(block => {
        const monthName = block.getAttribute("name")?.slice(4); 
        if (!monthName) return; // 確保 name 屬性存在
        
        const logEntries = block.querySelectorAll(".net_point_log_history");
        if (!monthlyData[monthName]) {
            monthlyData[monthName] = 0;
        }

        logEntries.forEach(entry => {
            const pointElement = entry.querySelector(".net_point_log_history_point");
            if (pointElement?.classList.contains("text_light_blue")) {
                const pointText = pointElement.textContent.trim();
                const pointValue = parseInt(pointText.replace(/[^\d]/g, '')); 
                monthlyData[monthName] += isNaN(pointValue) ? 0 : pointValue;
            }
        });
    });

    let message = "點數統計：(每日上限 30 pt)\n";
    availableMonths.forEach((month, index) => {
        const points = monthlyData[month] || 0;
        message += `${month.slice(0, 4)}/${month.slice(4)}: ${points} pt`;
        if (index === availableMonths.length - 1) {
            message += " (資料未齊)";
        }
        message += "\n";
    });

    alert(message);
}

// 執行函數
displayPt();
