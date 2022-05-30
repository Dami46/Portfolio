import {Component, OnInit} from '@angular/core';
import {BioService} from "../../core/services/bio.service";
import {Bio} from "../../core/models/bio";
import {Observable} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  bio: Observable<Bio> ;

  responsiveOptions = [
    {viewClasses: 'd-none d-md-flex', headingClass: 'display-3', useSmallerHeadings: false},
    {viewClasses: 'd-flex d-md-none', headingClass: '', useSmallerHeadings: true}
  ];

  constructor(private bioService: BioService) {
  }

  ngOnInit(): void {
   this.bio =  this.bioService.getBio()
  }

}
