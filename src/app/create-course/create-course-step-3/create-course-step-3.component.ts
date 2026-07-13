import { Component, signal } from '@angular/core';
import { form, FormRoot } from '@angular/forms/signals';
import { Lesson, Step3Data } from './step3.model';

@Component({
  selector: 'create-course-step-3',
  templateUrl: 'create-course-step-3.component.html',
  styleUrls: ['create-course-step-3.component.scss'],
  imports: [FormRoot],
})
export class CreateCourseStep3Component {

  step3Model = signal<Step3Data>({ lessons: [] });

  step3Form = form(this.step3Model, (path) => {

  });

  addLesson() {
    this.step3Model.update((m) => ({
      ...m,
      lessons: [...m.lessons, { title: '', level: '' }],
    }));
  }

  deleteLesson(i: number) {
    this.step3Model.update((m) => ({
      ...m,
      lessons: m.lessons.filter((_, idx) => idx !== i),
    }));
  }
}
