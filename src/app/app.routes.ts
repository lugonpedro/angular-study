import { Routes } from "@angular/router";

export const routes: Routes = [
  { path: "", redirectTo: "courses", pathMatch: "full" },
  {
    path: "",
    loadChildren: () =>
      import("./courses/courses.module").then((m) => m.CoursesModule),
  },
];
