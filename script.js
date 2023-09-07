// script.js
  // Get the current date
        const currentDate = new Date();

        // Get the current day of the week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
        const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const currentDayOfWeek = daysOfWeek[currentDate.getUTCDay()];

        // Get the current UTC time
        const currentUTCTime = currentDate.toUTCString();

        // Display the current day of the week and UTC time
        const dayOfWeekElement = document.getElementById('dayOfWeek');
        const utcTimeElement = document.getElementById('utcTime');

        dayOfWeekElement.textContent = 'Current day of the week: ' + currentDayOfWeek;
        utcTimeElement.textContent = 'Current UTC time: ' + currentUTCTime;
