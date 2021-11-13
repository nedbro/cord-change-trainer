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
  audio = new Audio();
  beatCount = 0;

  ngOnInit() {
    this.audio.src = '../assets/metronome.wav';
    this.audio.load();
  }

  startWorkout(workout: Workout) {
    this.getNewChord(workout.chords);
    this.beatCount = 0;

    let bpmInMs = (60 / workout.bpm) * 1000;

    const metronomeInterval = setInterval(() => {
      this.audio.play().then(r => {
        this.beatCount += 1;
        if (this.beatCount === workout.changeInterval) {
          this.getNewChord(workout.chords);
          this.beatCount = 0;
        }
      });
    }, bpmInMs);

    this.timeLeft = workout.workoutLength * 60000;
    this.workoutInProgress = true;

    const countdownInterval = setInterval(() => {
      if (this.timeLeft - 1000 > 0) {
        this.timeLeft = this.timeLeft - 1000;
      } else {
        clearInterval(metronomeInterval);
        clearInterval(countdownInterval);
        this.currentChord = '';
        this.workoutInProgress = false;
      }
    }, 1000);

    this.intervals = [metronomeInterval, countdownInterval];
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
