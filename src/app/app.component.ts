import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from './types/project.model';
import { ProjectService } from './services/project.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'klimaatmobiel';

  private _fetchProject$: Observable<Project[]> 
    = this._projectDataService.projects$;

  public loadingError$ = this._projectDataService.loadingError$;

  constructor(private _projectDataService: ProjectService) {}

  get recipes$(): Observable<Project[]> {
    return this._fetchProject$;
  } 
}
