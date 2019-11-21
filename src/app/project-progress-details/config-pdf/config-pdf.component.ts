import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { EvaluationFormComponent } from '../evaluation-form/evaluation-form.component';
import { GroupService } from 'src/app/services/group.service';
import { Project } from 'src/app/types/project.model';
import { PdfSettings } from 'src/app/types/customDTOs/PdfSettings.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-config-pdf',
  templateUrl: './config-pdf.component.html',
  styleUrls: ['./config-pdf.component.css']
})
export class ConfigPdfComponent implements OnInit {

  project: Project;

  settings = new PdfSettings();

  

  constructor(private _fb: FormBuilder,
    public dialogRef: MatDialogRef<EvaluationFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data, private gs: GroupService) {
      this.project = data.project;
  }

  ngOnInit() {
    console.log(this.project)
  }


  getPdf(){
    

    var arrStr = encodeURIComponent(JSON.stringify(this.settings.groupsToShow));
    console.log(arrStr)

    window.open(`${environment.apiUrl}/pdfgen/custompdf/evaluaties?projectId=${this.project.id}&showPupil=${this.settings.showPupil}
    &showTeacher=${this.settings.showTeacher}&groupNums=${arrStr}`,'_blank');

  }

  teacherToggle(){
    this.settings.showTeacher = !this.settings.showTeacher;
  }

  pupilToggle(){
    this.settings.showPupil = !this.settings.showPupil;
  }

  toggleAddGroup(id: number){

    if(!this.settings.groupsToShow.includes(id)){
      this.settings.groupsToShow.push(id);
    } else {
      const index = this.settings.groupsToShow.indexOf(id, 0);
      this.settings.groupsToShow.splice(index, 1);
    }

  }

}
