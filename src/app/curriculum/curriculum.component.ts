import { Component, OnInit } from '@angular/core';
import { curriculum } from '../appUtils/sot';

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.scss']
})
export class CurriculumComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let interval = setInterval(() => { this.changeBadge(1) }, 8000);
  }

  changeBadge(value: number) {
    this.currentBadge += value;
    if(this.currentBadge > this.badges.length - 1) this.currentBadge = 0;
    if(this.currentBadge < 0) this.currentBadge = this.badges.length - 1;
  }

  goToBadgeUrl(url: string) {
    window.open(url,'_blank')
  }

  work = curriculum.work;
  degrees = curriculum.degrees;
  skills = curriculum.skills;
  currentBadge = 0;
  badges = curriculum.badges;

}
