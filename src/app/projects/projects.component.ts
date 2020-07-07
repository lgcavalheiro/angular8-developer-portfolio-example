import { Component, OnInit } from '@angular/core';
import { projects } from '../appUtils/sot';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  goToUrl(url: string) {
    window.open(url,'_blank')
  }

  projects = projects;

}
