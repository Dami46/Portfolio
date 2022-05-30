import {Component, HostListener} from '@angular/core';
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
    {title: 'O mnie', homePath: '/', fragment: 'about', pagePath: '/about'},
    {title: 'Moje projekty', homePath: '/', fragment: 'projects', pagePath: '/projects'}
  ];

  isHome: Observable<boolean>;
  bio: Observable<Bio>;

  constructor(private bioService: BioService, private headerService: HeaderService) {
    this.bio = this.bioService.getBio();
    this.isHome = this.headerService.isHome();
  }

  @HostListener('window:scroll', ['$event']) onScrollEvent() {
    this.headerService.resetPathFragment();
  }

}
