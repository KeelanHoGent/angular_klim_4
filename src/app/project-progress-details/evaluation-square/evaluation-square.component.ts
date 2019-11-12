import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Evaluation } from 'src/app/types/evaluation.model';

@Component({
  selector: 'app-evaluation-square',
  templateUrl: './evaluation-square.component.html',
  styleUrls: ['./evaluation-square.component.css']
})
export class EvaluationSquareComponent implements OnInit {

  @Input() evaluation: Evaluation;
  @Output() public clickEvaluation = new EventEmitter<Evaluation>();




  constructor() { }

  ngOnInit() {
    console.log(this.evaluation);
  }


  detailsEvaluation(){

    this.clickEvaluation.emit(this.evaluation);
  }
  

}
