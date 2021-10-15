import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

export type Workout = {
  chords: string[];
  changeInterval: number;
  workoutLength: number;
};

@Component({
  selector: 'app-workout-form',
  templateUrl: './workout-form.component.html',
  styleUrls: ['./workout-form.component.scss'],
})
export class WorkoutFormComponent {
  chords: string[] = [];

  @Output() workoutFormEmitter = new EventEmitter<Workout>();

  workoutForm = this.formBuilder.group({
    changeInterval: [1, [Validators.min(0.5), Validators.max(5)]],
    workoutLength: [1, [Validators.min(1), Validators.max(5)]],
  });

  chordForm = this.formBuilder.group({
    chord: ['', Validators.maxLength(10)],
  });

  constructor(private formBuilder: FormBuilder) {}

  submitWorkoutForm() {
    const { changeInterval, workoutLength } = this.workoutForm.getRawValue();

    if (this.chords.length > 1) {
      this.workoutFormEmitter.emit({
        chords: this.chords,
        changeInterval,
        workoutLength,
      });
    }
  }

  addChord() {
    this.chords.push(this.chordForm.getRawValue().chord);
    this.chordForm.reset();
  }

  removeChord(chord: string) {
    let i = 0;
    while (i < this.chords.length) {
      if (this.chords[i] === chord) {
        this.chords.splice(i, 1);
      } else {
        ++i;
      }
    }
  }
}
