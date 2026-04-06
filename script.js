const salesTips = [
    "High performers don't sell products; they sell solutions to pain points.",
    "The fortune is in the follow-up. 80% of sales require 5 follow-up calls.",
    "Listen twice as much as you speak. Empathy builds rapport faster than a pitch.",
    "Consistency beats talent when talent doesn't work hard. Keep your pipeline full.",
    "Always be helping. If you provide value first, the sale follows naturally.",
    "Ask open-ended questions to let the prospect discover their own need for your service."
];

function displayRandomTip() {
    const tipElement = document.getElementById('sales-tip');
    if (tipElement) {
        const randomIndex = Math.floor(Math.random() * salesTips.length);
        tipElement.textContent = `"${salesTips[randomIndex]}"`;
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    displayRandomTip();
});