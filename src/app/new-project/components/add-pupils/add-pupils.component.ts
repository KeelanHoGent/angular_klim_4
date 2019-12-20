import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ClassroomService } from 'src/app/services/classroom.service';
import { Classroom } from 'src/app/types/classroom.model';
import { Pupil } from 'src/app/types/pupil.model';
import { Observable, pipe, Subject } from 'rxjs';

@Component({
  selector: 'app-add-pupils',
  templateUrl: './add-pupils.component.html',
  styleUrls: ['./add-pupils.component.css']
})
export class AddPupilsComponent implements OnInit {
  public classes: Observable<Classroom[]>;
  public chosenClassroom: Classroom;
  public pupils: Observable<Pupil[]>;
  public chosenPupils: Pupil[];
  public loaded: boolean;
  public selectedPupils: Pupil[];
  public selectedPupil: Pupil;
  private classRoomId = 1;

  @Output() public pupilsToAdd = new EventEmitter<Pupil[]>()
  @Output() public pupilToAdd = new EventEmitter<Pupil>()
  @Output() public pupilToDelete = new EventEmitter<Pupil>()
  @Input() public pInList: Pupil[];

  constructor(private _classRoomService: ClassroomService,
  ) {
    this.classes = this._classRoomService.getClassrooms$();
    this.selectedPupils = Array<Pupil>();
  }

  ngOnInit() {
    this.getPupils();
    // if(!this.pInList === undefined){
    //   this.pInList.forEach(p => {
    //     this.addPupil(p)
    //   })
    // }

    console.log(this.pInList)
  }

  public getPupils() {
    return new Promise(
      (resolve) => {
        this._classRoomService.getClassroom(this.classRoomId)
          .toPromise()
          .then(
            cr => {
              this.chosenPupils = cr.pupils
              resolve()
            }
          )
      })
  }

  onSelect(pupil: Pupil) {
    if (this.selectedPupils.includes(pupil)) {
      let index = this.selectedPupils.indexOf(pupil);
      this.selectedPupils.splice(index, 1);
      this.deletePupil(pupil);
    }
    else { 
      
      //this.pupilToAdd.emit(this.selectedPupil)
      this.addPupil(pupil);
    }

  }

  isSelected(pupil: Pupil) {
    return this.selectedPupils.includes(pupil);
  }

  // public addPupils(){
  //   this.pupilsToAdd.emit(this.selectedPupils);
  // }

  public addPupil(pupil: Pupil){
    this.selectedPupils.push(pupil) 
    this.pupilToAdd.emit(pupil);
    return false;
  }

  public deletePupil(pupil: Pupil){
    this.pupilToDelete.emit(pupil);
    return false;
  }
}
