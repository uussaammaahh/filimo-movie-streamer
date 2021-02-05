import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { SwiperModule } from 'swiper/angular';
import { CustomComponentsModule } from 'src/app/components/custom-components.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SwiperModule,
    CustomComponentsModule
  ]
})
export class HomeModule { }
