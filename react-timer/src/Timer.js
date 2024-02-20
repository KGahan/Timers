import React, { useState } from 'react';

function Timer() {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [output, setOutput] = useState('');

  function startTimer() {
    const totalSeconds = hours * 3600 + minutes * 60 + seconds;

    if (totalSeconds <= 0) {
      alert('Please enter a valid duration.');
      return;
    }

    const endTime = new Date();
    endTime.setSeconds(endTime.getSeconds() + totalSeconds);

    const timerInterval = setInterval(() => {
      const now = new Date();
      const timeLeft = Math.max(0, endTime - now);

      if (timeLeft <= 0) {
        clearInterval(timerInterval);
        setOutput('Time\'s up!');
        return;
      }

      const hoursLeft = Math.floor(timeLeft / (1000 * 60 * 60));
      const minutesLeft = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      const secondsLeft = Math.ceil((timeLeft % (1000 * 60)) / 1000);

      setOutput(`Time remaining: ${hoursLeft} hours ${minutesLeft} minutes ${secondsLeft} seconds`);
    }, 1000);
  }

  return (
    <div>
      <label htmlFor="hours">Hours:</label>
      <input type="number" id="hours" min="0" step="1" value={hours} onChange={(e) => setHours(parseInt(e.target.value, 10))} />
      <label htmlFor="minutes">Minutes:</label>
      <input type="number" id="minutes" min="0" max="59" step="1" value={minutes} onChange={(e) => setMinutes(parseInt(e.target.value, 10))} />
      <label htmlFor="seconds">Seconds:</label>
      <input type="number" id="seconds" min="0" max="59" step="1" value={seconds} onChange={(e) => setSeconds(parseInt(e.target.value, 10))} />
      <button onClick={startTimer}>Start Timer</button>
      <p>{output}</p>
    </div>
  );
}

export default Timer;