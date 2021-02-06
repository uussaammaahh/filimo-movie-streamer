import { Component, Input, OnInit, ViewChild } from '@angular/core';
import SwiperCore, { SwiperOptions, Navigation } from 'swiper/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  @Input() title: any;
  @Input() sliderData: any;
  @Input() episodes: boolean = false;

  randomClass: any = 'btn-'+btoa(Math.random().toString()).replace(/[^a-zA-Z]/g, '');
  config: SwiperOptions = {
    slidesPerView: 5,
    spaceBetween: 15,
    navigation: {
      nextEl: '.button-next.' + this.randomClass,
      prevEl: '.button-prev.' + this.randomClass,
    }
  };

  constructor() { }

  ngOnInit() {
    SwiperCore.use([Navigation]);
    setTimeout(() => {
      console.log(this.sliderData);
      
    }, 1000);
  }

}
