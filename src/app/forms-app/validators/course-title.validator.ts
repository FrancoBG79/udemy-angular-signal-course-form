import { AbstractControl, AsyncValidatorFn } from "@angular/forms";
import { CoursesService } from "../services/courses.service";
import { map } from "rxjs/operators";

export function courseTitleValidtor(coursesService: CoursesService): AsyncValidatorFn {
  console.log('a')
  return (control: AbstractControl) => {
    return coursesService.findAllCourses()
      .pipe(
        map(courses => {
          const course = courses.find(
            course => 
              course.description.toLocaleLowerCase() === control.value.toLocaleLowerCase()
          );
          return course ? {
            titleExists: true,
          } : null;
        })
      )
  }
}