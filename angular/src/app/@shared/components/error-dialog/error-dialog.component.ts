import { Component, Inject, OnInit } from "@angular/core";
import { MatButton } from "@angular/material/button";
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from "@angular/material/dialog";

@Component({
  selector: "app-error-dialog",
  standalone: true,
  imports: [
    MatDialogContent,
    MatDialogTitle,
    MatDialogActions,
    MatButton,
    MatDialogClose,
  ],
  templateUrl: "./error-dialog.component.html",
  styleUrl: "./error-dialog.component.scss",
})
export class ErrorDialogComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: string) {}

  ngOnInit(): void {}
}
