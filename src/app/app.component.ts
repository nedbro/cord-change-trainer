import { Component } from '@angular/core';
import { Workout } from './workout-form/workout-form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  currentChord = '';
  timeLeft = 0;
  workoutInProgress = false;
  intervals: any[] = [];

  startWorkout(workout: Workout) {
    const cordChangeInterval = setInterval(() => {
      this.getNewChord(workout.chords);
    }, workout.changeInterval * 1000);

    this.timeLeft = workout.workoutLength * 60000;
    this.workoutInProgress = true;

    const countdownInterval = setInterval(() => {
      if (this.timeLeft - 1000 > 0) {
        this.timeLeft = this.timeLeft - 1000;
      } else {
        clearInterval(cordChangeInterval);
        clearInterval(countdownInterval);
        this.workoutInProgress = false;
      }
    }, 1000);

    this.intervals = [cordChangeInterval, countdownInterval];
  }

  getNewChord(chords: string[]) {
    const newChord = chords[Math.floor(Math.random() * chords.length)];

    if (newChord !== this.currentChord) {
      this.currentChord = newChord;
    } else {
      this.getNewChord(chords);
    }
  }

  stopWorkout() {
    this.workoutInProgress = false;
    this.intervals.forEach(interval => clearInterval(interval));
    this.intervals = [];
  }
}
