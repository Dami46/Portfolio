import {Component} from '@angular/core';
import {mergeMap} from 'rxjs/operators';
import {HeaderService} from '../../core/services/header.service';
import {ProjectsService} from "../../core/services/projects.service";
import {Observable} from "rxjs";
import {Project} from "../../core/models/project";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {

  isHome: Observable<boolean>;
  projects: Observable<Project[]>;

  respOptions = [
    {viewClasses: 'd-none d-md-flex', displayInColumn: false, useSmallerHeadings: false, titleClasses: 'display-3'},
    {viewClasses: 'd-flex d-md-none', displayInColumn: true, useSmallerHeadings: true, titleClasses: ''}
  ];

  constructor(private projectsService: ProjectsService, private headerService: HeaderService) {
    this.isHome = this.headerService.isHome();
    this.projects = this.isHome.pipe(
      mergeMap(atHome => this.projectsService.getProjects(atHome))
    );

  }
}
