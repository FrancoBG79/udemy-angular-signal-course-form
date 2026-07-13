import { Component, input, signal } from '@angular/core';
import { Course } from '../model/course';
import { RouterLink } from '@angular/router';
import { CourseDialogComponent } from '../course-dialog/course-dialog.component';
import { EditIconComponent, PlayIconComponent } from './courses-card-list-icons';

@Component({
  selector: 'courses-card-list',
  templateUrl: './courses-card-list.component.html',
  styleUrls: ['./courses-card-list.component.css'],
  imports: [RouterLink, CourseDialogComponent, PlayIconComponent, EditIconComponent]
})
export class CoursesCardListComponent {
  courses = input<Course[]>([]);
  selectedCourse = signal<Course | null>(null);

  editCourse(course: Course) {
    this.selectedCourse.set(course);
  }
}
