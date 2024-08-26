import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { AppMaterialModule } from "../../@shared/app-material/app-material.module";
import { Course } from "../model/course";
import { CoursesService } from "../services/courses.service";

@Component({
  selector: "app-courses",
  standalone: true,
  imports: [CommonModule, AppMaterialModule],
  templateUrl: "./courses.component.html",
  styleUrl: "./courses.component.scss",
})
export class CoursesComponent implements OnInit {
  courses$: Observable<Course[]>;
  displayedColumns = ["name", "category"];

  constructor(private service: CoursesService) {
    this.courses$ = this.service.list();
  }

  ngOnInit(): void {}
}
