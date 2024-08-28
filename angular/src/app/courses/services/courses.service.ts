import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { first } from "rxjs";
import { Course } from "../model/course";

@Injectable({
  providedIn: "root",
})
export class CoursesService {
  constructor(private httpClient: HttpClient) {}

  private readonly API = "api/courses";

  list() {
    return this.httpClient.get<Course[]>(this.API).pipe(first());
  }
}
