function updateCurrentTimeAndDay() {
            const currentTimeElement = document.getElementById('currentUTCTime');
            const currentDayElement = document.getElementById('currentDayOfTheWeek');
            const currentTimeMillis = new Date().getTime();
            
            // Get the current day of the week
            const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            const currentDayIndex = new Date().getDay();
            const currentDay = daysOfWeek[currentDayIndex];

            currentTimeElement.textContent = `Current Time: ${currentTimeMillis}`;
            currentDayElement.textContent = `Current Day: ${currentDay}`;
        }

        // Update the time and day every second (1000 milliseconds)
        setInterval(updateCurrentTimeAndDay, 1000);

        // Initial update
        updateCurrentTimeAndDay();

        const names = document.querySelector('[data-testid= "SlackUserName"]');
        names.innerHTML = 'meena__xx'

        const track = document.querySelector('[data-testid= "myTrack"]');
        track.innerHTML = 'Frontend'

    //     const  githubURL= document.querySelector('[data-testid= "myTrack"]');
    //  githubURL.innerHTML = 'Github Repository'