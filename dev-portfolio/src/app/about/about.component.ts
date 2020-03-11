import { Component, OnInit } from '@angular/core';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  info = {
    greet: '',
    experience: '',
    work: '',
  }

  constructor() {
    this.info.greet = `Hi! I'm Lucas Cavalheiro, glad you came by!`;
    this.info.experience = `I'm a programmer with over 2 years of experience in the areas of telecommunications and banking.`;
    this.info.work = `So far, i've worked maintaining I.T systems, developing software and single page applications.`;
  }

  ngOnInit(): void {

  }

}
