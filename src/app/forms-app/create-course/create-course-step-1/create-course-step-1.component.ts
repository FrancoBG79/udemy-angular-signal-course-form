import {Component, OnInit, ChangeDetectionStrategy, inject} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CoursesService} from '../../services/courses.service';
import { courseTitleValidtor } from '../../validators/course-title.validator';
import { Observable } from 'rxjs';
import { CourseCategory } from '../../../signal-form-app/create-course/create-course-step-1/step1.model';
import { filter } from 'rxjs/operators';

@Component({
    selector: 'create-course-step-1',
    templateUrl: './create-course-step-1.component.html',
    styleUrls: ['./create-course-step-1.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class CreateCourseStep1Component implements OnInit {
  private fb = inject(FormBuilder);
  private coursesService = inject(CoursesService);

  form = this.fb.group({
    title: ['', {
      validators: [
        Validators.required, 
        Validators.minLength(5), 
        Validators.maxLength(60)
      ],
      asyncValidators: [courseTitleValidtor(this.coursesService)],
      updateOn: 'blur'
    }],
    releaseDateAt: [new Date(), [Validators.required]],
    category: ['BEGINNER', [Validators.required]],
    downLoadsAllowed: [false, [Validators.requiredTrue]],
    longDescription: ['', [Validators.required, Validators.minLength(3)]],
    address: [null, [Validators.required]],
  });

  courseCategories$: Observable<CourseCategory[]>;

  ngOnInit() {
    this.courseCategories$ = this.coursesService.findCourseCategories();
    const draft = localStorage.getItem('STEP_1');
    if (draft) {
      this.form.setValue(JSON.parse(draft))
    }
    this.form.valueChanges
      .pipe(
        filter(() => this.form.valid)
      ).subscribe(val => localStorage.setItem('STEP_1', JSON.stringify(val)))
  }

  get courseTitle() {
    return this.form.controls.title;
  }

}
