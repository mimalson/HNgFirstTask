 const currentDate = new Date();

        // Get the current UTC time
        const currentUTCTime = currentDate.toUTCString();

        // Calculate UTC+1 time by adding one hour
        const utcPlusOneTime = new Date(currentDate.getTime() + 60 * 60 * 1000); // Add 1 hour in milliseconds

        // Display the current UTC time
        const utcTimeElement = document.getElementById('utcTime');
        const utcTimePlusOneElement = document.getElementById('utcTimePlusOne');

        utcTimeElement.textContent = 'Current UTC time: ' + currentUTCTime;
        utcTimePlusOneElement.textContent = 'UTC+1 time: ' + utcPlusOneTime.toUTCString();
