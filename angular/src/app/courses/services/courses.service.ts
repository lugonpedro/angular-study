import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { delay, first, tap } from "rxjs";
import { Course } from "../model/course";

@Injectable({
  providedIn: "root",
})
export class CoursesService {
  constructor(private httpClient: HttpClient) {}

  private readonly API = "/assets/courses.json";

  list() {
    return this.httpClient.get<Course[]>(this.API).pipe(
      first(),
      delay(1000),
      tap((courses) => console.log(courses))
    );
  }
}
