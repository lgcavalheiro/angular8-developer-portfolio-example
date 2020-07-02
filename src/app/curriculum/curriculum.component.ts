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
  badges = [
    { src: 'https://api.accredible.com/v1/frontend/credential_website_embed_image/badge/15189734', link: '' , style: ''},
    { src: 'https://api.accredible.com/v1/frontend/credential_website_embed_image/badge/15189782', link: '' , style: ''},
    { src: 'https://hermes.digitalinnovation.one/certificates/cover/51F46D69.jpg', link: 'https://certificates.digitalinnovation.one/51F46D69' , style: 'width: 80%; height: 90%;' },
    { src: 'https://hermes.digitalinnovation.one/certificates/cover/AB480133.jpg', link: 'https://certificates.digitalinnovation.one/AB480133' , style: 'width: 80%; height: 90%;' },
    { src: '', link: '' , style: '' },
  ];

}

// <div data-iframe-width="150" data-iframe-height="270"
//   data-share-badge-id="961793d4-9ec7-4823-a7c9-8a28648d52bf"
//   data-share-badge-host="https://www.youracclaim.com">
// </div>
// <script type="text/javascript" async src="//cdn.youracclaim.com/assets/utilities/embed.js"></script>
