import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';




@Component({
    selector: 'create-course',
    templateUrl: './create-course.component.html',
    styleUrls: ['./create-course.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false,
    providers: [
      {
        provide: STEPPER_GLOBAL_OPTIONS, useValue: { showError: true }
      }
    ]
})
export class CreateCourseComponent implements OnInit {


  ngOnInit() {

  }

  submit(step1, step2, step3) {
    console.log(
      '\nStep 1 Form Value: ', step1, 
      '\nStep 2 Form Value: ', step2, 
      '\nStep 3 Form Value: ', step3
    )
  }
}
