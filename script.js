document.addEventListener("DOMContentLoaded", function () {
    const dayOfWeek = new Date().toLocaleDateString(undefined, { weekday: 'long' });
    const currentTime = new Date()

    // Update the current day and time elements
    document.querySelector("[data-testid='currentDayOfTheWeek']").textContent = `Current Day: ${dayOfWeek}`;
    document.querySelector("[data-testid='currentUTCTime']")
});
