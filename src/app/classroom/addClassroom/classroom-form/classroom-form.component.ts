import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ClassroomService} from "../../../services/classroom.service";
import {Pupil} from "../../../types/pupil.model";
import {Classroom} from "../../../types/classroom.model";

@Component({
  selector: 'app-classroom-form',
  templateUrl: './classroom-form.component.html',
  styleUrls: ['./classroom-form.component.css']
})
export class ClassroomFormComponent implements OnInit {

  public error = 'assets/images/error.svg';
  public correct = 'assets/images/correct.svg';

  public classForm: FormGroup;

  public records: any[] = [];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private classroomService: ClassroomService) { }

  ngOnInit() {
    this.classForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(1)]]
      }
    )
  }

  getErrorMessage(errors: any) {
    if (errors.required) {
      return 'Dit veld is verplicht';
    }
  }

  save() {
    let classroom = new Classroom();
    classroom.name = this.classForm.value.name;
      classroom.pupils = this.records;

    this.classroomService.addNewClassroom(classroom).subscribe();
  }

  uploadListener($event: any): void {
    let text = [];
    let files = $event.target.files;
    if (this.isValidCSVFile(files[0])) {
      let input = $event.target;
      let reader = new FileReader();
      reader.readAsText(input.files[0]);
      reader.onload = () => {
        let csvData = reader.result;
        let csvRecordsArray = (<string>csvData).split(/\r\n|\n/);
        let headersRow = this.getHeaderArray(csvRecordsArray);
        console.log(headersRow);
        this.records = this.getDataRecordsArrayFromCSVFile(csvRecordsArray, headersRow.length);
      };
      reader.onerror = function () {
        console.log('error is occured while reading file!');
      };
    } else {
      alert("Please import valid .csv file.");
    }
  }

  getDataRecordsArrayFromCSVFile(csvRecordsArray: any, headerLength: any) {
    let csvArr = new Array<Pupil>();
    for (let i = 1; i < csvRecordsArray.length-1; i++) {

      let currentRecord = (<string>csvRecordsArray[i]).split(';');
      console.log(headerLength)
      if (currentRecord.length == headerLength) {
        let pupil: Pupil = new Pupil();
        pupil.surName = currentRecord[0].trim();
        pupil.firstName = currentRecord[1].trim();
        console.log(pupil);
        csvArr.push(pupil);
      }
    }
    console.log(csvArr);
    return csvArr;
  }
  isValidCSVFile(file: any) {
    return file.name.endsWith(".csv");
  }
  getHeaderArray(csvRecordsArr: any) {
    let headers = (<string>csvRecordsArr[0]).split(';');
    let headerArray = [];
    for (let j = 0; j < headers.length; j++) {
      headerArray.push(headers[j]);
    }
    return headerArray;
  }
}
