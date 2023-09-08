document.addEventListener("DOMContentLoaded", function () {
    const dayOfWeek = new Date().toLocaleDateString(undefined, { weekday: 'long' });
    const currentTime = new Date().getTime()

    // Update the current day and time elements
    document.querySelector("[data-testid='currentDayOfTheWeek']").textContent = `Current Day: ${dayOfWeek}`;
    document.querySelector("[data-testid='currentUTCTime']").textContent = `Current UTC Time: ${currentTime}`;
});

// function displayCurrentDayAndTime() {
//     var currentDate = new Date();

//     var currentDay = currentDate.toDateString();

//     var currentTimeInMillis = currentDate.getTime()

//     document.querySelector("[data-testid='currentDayOfTheWeek']").textContent = `Current Day: ${currentDate}`;
//     document.querySelector("[data-testid='currentUTCTime']").textContent = `Current UTC Time: ${currentTimeInMillis}`;

//     displayCurrentDayAndTime();
// }