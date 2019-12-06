import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/types/product.model';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { AddProductFormComponent } from '../add-product-form/add-product-form.component';
import { Evaluation } from 'src/app/types/evaluation.model';
import { EvaluationFormComponent } from 'src/app/project-progress-details/evaluation-form/evaluation-form.component';
import { EvaluationCriterea } from 'src/app/types/evaluationCriterea.model';
import { EvaluationCFormComponent } from '../evaluation-c-form/evaluation-c-form.component';
import { tryParse } from 'selenium-webdriver/http';

@Component({
  selector: 'app-evaluation-c-add-button',
  templateUrl: './evaluation-c-add-button.component.html',
  styleUrls: ['./evaluation-c-add-button.component.css']
})
export class EvaluationCAddButtonComponent  {
  @Output() public newEvaluationC = new EventEmitter<EvaluationCriterea>();
  public evaluationC: EvaluationCriterea;
  

  constructor(public dialog: MatDialog) { }
  
  addEvaluationCForm(): void {
    const config = new MatDialogConfig();
    

    config.disableClose = true;
    config.width = "450px";
    config.autoFocus = true;
    config.data = {
      title: ""
    }

    const dialogRef = this.dialog.open(EvaluationCFormComponent, config);

    this.evaluationC = new EvaluationCriterea();

    dialogRef.afterClosed().subscribe(
      data => {
        if(data){
          this.addEvaluationC(data)
        }
      }
    );
  }

  addEvaluationC(data: any): boolean {
    const e = new EvaluationCriterea();
    e.title = data.title;
    this.newEvaluationC.emit(e);
    return false;
  }

}
