import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Evaluation } from 'src/app/types/evaluation.model';

@Component({
  selector: 'app-horizontal-list-evaluations',
  templateUrl: './horizontal-list-evaluations.component.html',
  styleUrls: ['./horizontal-list-evaluations.component.css']
})
export class HorizontalListEvaluationsComponent implements OnInit {

  @Input() list: Evaluation[];
  @Input() ListTitle: string;
  @Output() public clickEvaluation = new EventEmitter<Evaluation>();

  constructor() { }

  ngOnInit() {

  }

  detailsEvaluation(evaluation: Evaluation){
    this.clickEvaluation.emit(evaluation);
  }

}
