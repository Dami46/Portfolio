import {Component, OnInit} from '@angular/core';
import {BioService} from "../../core/services/bio.service";
import {Bio} from "../../core/models/bio";
import {Observable} from "rxjs";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  bio: Observable<Bio>

  respOptions = [
    {viewClasses: 'd-none d-md-flex', headingClass: 'display-3', useSmallerHeadings: false},
    {viewClasses: 'd-flex d-md-none', headingClass: '', useSmallerHeadings: true}
  ];

  constructor(private bioService: BioService) {
    this.bio = this.bioService.getBio();
  }

  ngOnInit(): void {

  }

}
