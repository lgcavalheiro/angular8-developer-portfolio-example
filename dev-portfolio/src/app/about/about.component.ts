import { Component, OnInit } from '@angular/core';
import { stringify } from '@angular/compiler/src/util';
import { about } from '../appUtils/sot';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  info = {
    greet: about.greet,
    experience: about.experience,
    work: about.work,
  }

  constructor() {

  }

  ngOnInit(): void {

  }

}
