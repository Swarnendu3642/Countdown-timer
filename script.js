// script.js
function countdownTimer(eventDate) {
    const timer = document.getElementById('timer');
    const daysElement = document.getElementById('days');
    const hoursElement = document.getElementById('hours');
    const minutesElement = document.getElementById('minutes');
    const secondsElement = document.getElementById('seconds');
  
    function updateTimer() {
      const now = new Date().getTime();
      const timeRemaining = eventDate - now;
  
      if (timeRemaining > 0) {
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
  
        daysElement.textContent = days < 10 ? '0' + days : days;
        hoursElement.textContent = hours < 10 ? '0' + hours : hours;
        minutesElement.textContent = minutes < 10 ? '0' + minutes : minutes;
        secondsElement.textContent = seconds < 10 ? '0' + seconds : seconds;
      } else {
        clearInterval(interval);
        timer.innerHTML = '<h2>Event Started!</h2>';
      }
    }
  
    const interval = setInterval(updateTimer, 1000);
  }
  
  // When the user clicks the Start button
  document.getElementById('startButton').addEventListener('click', function() {
    const eventDateTimeInput = document.getElementById('eventDateTime').value;
    
    if (eventDateTimeInput) {
      const eventDate = new Date(eventDateTimeInput).getTime();
      document.getElementById('timer').style.display = 'flex';
      countdownTimer(eventDate);
    } else {
      alert('Please select a valid date and time for the event.');
    }
  });
  