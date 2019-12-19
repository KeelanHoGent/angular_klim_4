import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ClassroomService} from '../../../services/classroom.service';
import {Pupil} from '../../../types/pupil.model';
import {Classroom} from '../../../types/classroom.model';

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
  public displayedColumns = ['firstName', 'surName'];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private classroomService: ClassroomService) { }

  ngOnInit() {
    this.classForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(1)]]
      }
    );
  }

  getErrorMessage(errors: any) {
    if (errors.required) {
      return 'Dit veld is verplicht';
    }
  }

  save() {
    const classroom = new Classroom();
    classroom.name = this.classForm.value.name;
    classroom.pupils = this.records;

    this.classroomService.addNewClassroom(classroom).subscribe(r =>
      this.router.navigateByUrl('/klassen')
    );
  }

  uploadListener($event: any): void {
    const text = [];
    const files = $event.target.files;
    if (this.isValidCSVFile(files[0])) {
      const input = $event.target;
      const reader = new FileReader();
      reader.readAsText(input.files[0]);
      reader.onload = () => {
        const csvData = reader.result;
        const csvRecordsArray = (csvData as string).split(/\r\n|\n/);
        const headersRow = this.getHeaderArray(csvRecordsArray);
        this.records = this.getDataRecordsArrayFromCSVFile(csvRecordsArray, headersRow.length);
      };
      // reader.onerror = function() {
      //   console.log('error is occured while reading file!');
      // };
    } else {
      alert('Please import valid .csv file.');
    }
  }

  getDataRecordsArrayFromCSVFile(csvRecordsArray: any, headerLength: any) {
    const csvArr = new Array<Pupil>();
    for (let i = 1; i < csvRecordsArray.length - 1; i++) {

      const currentRecord = (csvRecordsArray[i] as string).split(';');
      if (currentRecord.length == headerLength) {
        const pupil: Pupil = new Pupil(currentRecord[1].trim(), currentRecord[0].trim());
        // pupil.surName = currentRecord[0].trim();
        // pupil.firstName = currentRecord[1].trim();
        csvArr.push(pupil);
      }
    }
    return csvArr;
  }

  isValidCSVFile(file: any) {
    return file.name.endsWith('.csv');
  }

  getHeaderArray(csvRecordsArr: any) {
    const headers = (csvRecordsArr[0] as string).split(';');
    const headerArray = [];
    for (let j = 0; j < headers.length; j++) {
      headerArray.push(headers[j]);
    }
    return headerArray;
  }
}
