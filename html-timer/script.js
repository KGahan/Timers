function startTimer() {
    var hoursInput = document.getElementById('hours');
    var minutesInput = document.getElementById('minutes');
    var secondsInput = document.getElementById('seconds');
  
    var hours = parseInt(hoursInput.value, 10);
    var minutes = parseInt(minutesInput.value, 10);
    var seconds = parseInt(secondsInput.value, 10);
  
    var totalSeconds = hours * 3600 + minutes * 60 + seconds;
  
    if (totalSeconds <= 0) {
      alert('Please enter a valid duration.');
      return;
    }
  
    var endTime = new Date();
    endTime.setSeconds(endTime.getSeconds() + totalSeconds);
  
    var timerInterval = setInterval(function() {
      var now = new Date();
      var timeLeft = Math.max(0, endTime - now);
  
      if (timeLeft <= 0) {
        clearInterval(timerInterval);
        document.getElementById('output').textContent = 'Time\'s up!';
        return;
      }
  
      var hoursLeft = Math.floor(timeLeft / (1000 * 60 * 60));
      var minutesLeft = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      var secondsLeft = Math.ceil((timeLeft % (1000 * 60)) / 1000);
  
      document.getElementById('output').textContent = 'Time remaining: ' + hoursLeft + ' hours ' + minutesLeft + ' minutes ' + secondsLeft + ' seconds';
    }, 1000);
  }