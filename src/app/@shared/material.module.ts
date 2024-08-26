import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatCard, MatCardContent } from "@angular/material/card";
import { MatProgressSpinner } from "@angular/material/progress-spinner";
import { MatToolbar } from "@angular/material/toolbar";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCard,
    MatToolbar,
    MatCardContent,
    MatProgressSpinner,
  ],
  exports: [MatCard, MatToolbar, MatCardContent, MatProgressSpinner],
})
export class MaterialModule {}
