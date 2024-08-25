import { Component, OnInit } from "@angular/core";
import { MatTableModule } from "@angular/material/table";
import { Course } from "../model/course";

@Component({
  selector: "app-courses",
  standalone: true,
  imports: [MatTableModule],
  templateUrl: "./courses.component.html",
  styleUrl: "./courses.component.scss",
})
export class CoursesComponent implements OnInit {
  courses: Course[] = [
    { _id: "1", name: "course1", category: "category1" },
    { _id: "2", name: "course2", category: "category2" },
  ];
  displayedColumns = ["name", "category"];

  constructor() {}

  ngOnInit(): void {}
}
