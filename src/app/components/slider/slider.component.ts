import { Component, Input, OnInit } from '@angular/core';
import SwiperCore from 'swiper/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  @Input() title: any;
  @Input() sliderData: any;
  @Input() episodes: boolean = false;

  constructor() { }

  ngOnInit() { }
  
}
