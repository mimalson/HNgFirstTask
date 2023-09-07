// script.js
window.onload = function () {
    // Simulated real-time data update
    setTimeout(() => {
        const realTimeDataElement = document.querySelector('[data-testid="real-time-data"]');
        realTimeDataElement.textContent = 'Real-time data: 42';
    }, 2000);
};
