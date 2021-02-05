import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from './slider/slider.component';
import { RouterModule } from '@angular/router';
import { SwiperModule } from 'swiper/angular';



@NgModule({
  declarations: [
    SliderComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    SliderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SwiperModule
  ]
})
export class CustomComponentsModule { }
