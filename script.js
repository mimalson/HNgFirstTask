function updateData() {
            const currentDate = new Date();
            const options = { weekday: 'long', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZone: 'UTC' };

            // Update the day of the week
            const dayOfWeekElement = document.getElementById('currentDayOfTheWeek');
            dayOfWeekElement.textContent = new Intl.DateTimeFormat('en-US', options).format(currentDate);

            // Update the current UTC time
            const currentTimeElement = document.getElementById('currentUTCTime');
            currentTimeElement.textContent = currentDate.toUTCString();
        }

        // Call the function to update data initially and set it to update every second
        updateData();
        setInterval(updateData, 1000);
