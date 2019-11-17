import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/types/product.model';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { AddProductFormComponent } from '../add-product-form/add-product-form.component';
import { EvaluationCriterea } from 'src/app/types/evaluationCriterea.model';
import { EvaluationFormComponent } from 'src/app/project-progress-details/evaluation-form/evaluation-form.component';
import { EvaluationCFormComponent } from '../evaluation-c-form/evaluation-c-form.component';

@Component({
  selector: 'app-evaluation-c',
  templateUrl: './evaluation-c.component.html',
  styleUrls: ['./evaluation-c.component.css']
})
export class EvaluationCComponent {
  @Input() public evaluationC: EvaluationCriterea;
  @Output() public deletedEvaluationC = new EventEmitter<EvaluationCriterea>();
  constructor(public dialog: MatDialog) { }


  deleteEvaluationC(): boolean {
    this.deletedEvaluationC.emit(this.evaluationC);
    return false;
  }

  editEvaluationCForm(p: EvaluationCriterea): void {
    const config = new MatDialogConfig();

    config.disableClose = true;
    config.width = "450px";
    config.autoFocus = true;
    config.data = {
      soort: true,
      title: p.title
    }


    const dialogRef = this.dialog.open(EvaluationCFormComponent, config);

    dialogRef.afterClosed().subscribe(
      data => {
        if(data){
          this.updateEc(data);
        }
      }
    );
  }

  updateEc(data: any){
    this.evaluationC.title = data.title;
  
  }

}
