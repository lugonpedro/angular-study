import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatDialogModule } from "@angular/material/dialog";
import { ErrorDialogComponent } from "./components/error-dialog/error-dialog.component";
import { CategoryPipe } from "./pipes/category.pipe";

@NgModule({
  declarations: [],
  imports: [CommonModule, MatDialogModule, ErrorDialogComponent, CategoryPipe],
  exports: [ErrorDialogComponent, CategoryPipe],
})
export class SharedModule {}
