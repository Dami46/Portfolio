import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import {FeatherModule} from "angular-feather";
import {ExternalLink, Folder, Github, Linkedin, Send} from "angular-feather/icons";

const icons = {
  Github,
  Folder,
  ExternalLink,
  Linkedin,
  Send,
};

@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ProjectsComponent
  ],
  imports: [
    CommonModule,
    PortfolioRoutingModule,
    FeatherModule.pick(icons)
  ]
})
export class PortfolioModule { }
