import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CoursesComponent } from "./component/courses.component";
import { CourseFormComponent } from "./course-form/course-form.component";

const routes: Routes = [
  { path: "courses", component: CoursesComponent },
  { path: "courses/new", component: CourseFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoursesRoutingModule {}
