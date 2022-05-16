import {Component} from '@angular/core';
import {BioService} from '../services/bio.service';
import {HeaderService} from '../services/header.service';
import {Bio} from "../models/bio";
import {Observable} from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  menuItems = [
    {title: 'About Me', homePath: '/', fragment: 'about', pagePath: '/about'},
    {title: 'My Projects', homePath: '/', fragment: 'projects', pagePath: '/projects'},
    {title: 'My Blog', homePath: '/blog', fragment: '', pagePath: '/blog'}
  ];

  isHome: Promise<boolean>;
  bio: Observable<Bio>;

  constructor(private bioService: BioService, private headerService: HeaderService) {
    this.bio = this.bioService.getBio();
    this.isHome = this.headerService.isHome();
  }
}
