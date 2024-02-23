import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-timer',
  standalone: true,
  imports: [FormsModule ],
  templateUrl: './timer.component.html',
  styleUrl: './timer.component.css'
})
export class TimerComponent {
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;
  timerDisplay: string = '';

  startTimer() {
    const totalSeconds = this.hours * 3600 + this.minutes * 60 + this.seconds;

    if (totalSeconds <= 0) {
      alert('Please enter a valid duration.');
      return;
    }

    const endTime = new Date();
    endTime.setSeconds(endTime.getSeconds() + totalSeconds);

    const timerInterval = setInterval(() => {
      const now = new Date();
      const timeLeft = Math.max(0, endTime.getTime() - now.getTime());

      if (timeLeft <= 0) {
        clearInterval(timerInterval);
        this.timerDisplay = 'Time\'s up!';
        return;
      }

      const hoursLeft = Math.floor(timeLeft / (1000 * 60 * 60));
      const minutesLeft = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      const secondsLeft = Math.ceil((timeLeft % (1000 * 60)) / 1000);

      this.timerDisplay = `Time remaining: ${hoursLeft} hours ${minutesLeft} minutes ${secondsLeft} seconds`;
    }, 1000);
  }
}
