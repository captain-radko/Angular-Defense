import { Component, OnInit } from "@angular/core";
import { MatDialogRef } from "@angular/material";

@Component({
  selector: "app-question",
  templateUrl: "./question.component.html",
  styleUrls: ["./question.component.css"]
})
export class QuestionComponent implements OnInit {
  constructor(private dialogRef: MatDialogRef<QuestionComponent>) {}

  ngOnInit() {}

  close() {
    this.dialogRef.close();
  }

  delete() {
    this.dialogRef.close();
  }
}
