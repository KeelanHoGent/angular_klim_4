import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Evaluation } from 'src/app/types/evaluation.model';
import { EvaluationFormComponent } from '../evaluation-form/evaluation-form.component';
import { MatDialogConfig, MatDialog } from '@angular/material';

@Component({
  selector: 'app-evaluation-square',
  templateUrl: './evaluation-square.component.html',
  styleUrls: ['./evaluation-square.component.css']
})
export class EvaluationSquareComponent {

  @Input() evaluation: Evaluation;
  @Output() public clickEvaluation = new EventEmitter<Evaluation>();

  constructor(public dialog: MatDialog) { }

  editEvaluationForm(p: Evaluation): void {
    const config = new MatDialogConfig();

    config.disableClose = true;
    config.width = "450px";
    config.autoFocus = true;
    config.data = {
      soort: true,
      title: p.title,
      descriptionPupil : p.descriptionPupil,
      descriptionPrivate : p.descriptionPrivate,
      extra : p.extra
    }


    const dialogRef = this.dialog.open(EvaluationFormComponent, config);

    dialogRef.afterClosed().subscribe(
      data => {
        if(data){
          this.updateEc(data);
        }
      }
    );
  }

  updateEc(data: any){
    this.evaluation.title = data.title;
    this.evaluation.descriptionPupil = data.descriptionPupil;
    this.evaluation.descriptionPrivate = data.descriptionPrivate;
    this.evaluation.extra = data.extra;

    this.clickEvaluation.emit(this.evaluation);
  
  }

  

}
