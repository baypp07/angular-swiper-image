import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import SwiperCore, { Pagination } from 'swiper/core';
SwiperCore.use([Pagination]);

@Component({
  selector: 'app-swiper-example',
  templateUrl: './swiper-example.component.html',
  styleUrls: [
    './swiper-example.component.css',
    './swiper-example.component.scss'
  ],
  encapsulation: ViewEncapsulation.None
})
export class SwiperExampleComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
