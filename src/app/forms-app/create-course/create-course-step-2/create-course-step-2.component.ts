import {Component, OnInit, ChangeDetectionStrategy, inject} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { createPromoRangeValitor } from '../../validators/date-range.validator';


@Component({
    selector: 'create-course-step-2',
    templateUrl: 'create-course-step-2.component.html',
    styleUrls: ['create-course-step-2.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class CreateCourseStep2Component implements OnInit {
  private fb = inject(FormBuilder);

  form = this.fb.group({
    courseType: ['premium', [Validators.required]],
    price: [null, [
      Validators.required, 
      Validators.min(1), 
      Validators.max(9999),
      Validators.pattern('[0-9]+')
    ]],
    thumbnail: [null],
    promoStartAt: [null],
    promoEndAt: [null],
  }, {
    validators: [createPromoRangeValitor()],
  });

  ngOnInit() {
    this.form.valueChanges.subscribe(val => {
      const priceControl = this.form.controls.price;
      if (val.courseType === 'free' && priceControl.enabled) {
        priceControl.disable({ emitEvent: false });
      } else if (val.courseType === 'premium' && priceControl.disabled) {
        priceControl.enable({ emitEvent: false });
      }
    });
  }

}
