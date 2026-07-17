import { Component, ChangeDetectionStrategy, inject } from "@angular/core";
import { FormArray, FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "create-course-step-3",
  templateUrl: "create-course-step-3.component.html",
  styleUrls: ["create-course-step-3.component.scss"],
  changeDetection: ChangeDetectionStrategy.Eager,
  standalone: false,
})
export class CreateCourseStep3Component {
  private fb = inject(FormBuilder);
  form = this.fb.group({
    lessons: this.fb.array([]),
  });
  lessonsLevel = ["Beginner", "Intermediate", "Advanced"];

  get lessons(): FormArray {
    return this.form.controls["lessons"] as FormArray;
  }

  get lessonGroups(): FormGroup[] {
    return this.lessons.controls as FormGroup[];
  }

  deleteLesson(index: number) {
    this.lessons.removeAt(index);
  }

  addLessons() {
    const lessonForm = this.fb.group({
      title: ['', Validators.required],
      level: ['Beginner', Validators.required]
    });
    this.lessons.push(lessonForm);
  }
}
