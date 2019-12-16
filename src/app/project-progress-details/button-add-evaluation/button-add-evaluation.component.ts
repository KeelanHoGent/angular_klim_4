import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { EvaluationFormComponent } from '../evaluation-form/evaluation-form.component';
import { Evaluation } from 'src/app/types/evaluation.model';
import { MatDialog, MatDialogConfig } from '@angular/material';

@Component({
  selector: 'app-button-add-evaluation',
  templateUrl: './button-add-evaluation.component.html',
  styleUrls: ['./button-add-evaluation.component.css']
})
export class ButtonAddEvaluationComponent {
  @Output() public newEvaluation = new EventEmitter<Evaluation>();
  public evaluation: Evaluation;


  constructor(public dialog: MatDialog) { }

  addEvaluationForm(): void {
    const config = new MatDialogConfig();
    config.disableClose = true;
    config.width = '450px';
    config.autoFocus = true;
    config.data = {
      descriptionPrivate: '',
      descriptionPupil: '',
      title: '',
      extra: true
    };

    const dialogRef = this.dialog.open(EvaluationFormComponent, config);

    this.evaluation = new Evaluation();

    dialogRef.afterClosed().subscribe(
      data => {
        if (data) {
          this.addEvaluation(data);
        }
      }
    );
  }

  addEvaluation(data: any): boolean {
    const e = new Evaluation();
    e.descriptionPrivate = data.descriptionPrivate;
    e.descriptionPupil = data.descriptionPupil;
    e.extra = data.extra;
    e.title = data.title;


    this.newEvaluation.emit(e);
    return false;
  }

}
