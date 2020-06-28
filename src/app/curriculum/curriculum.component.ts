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
  }

  work = curriculum.work;

}
