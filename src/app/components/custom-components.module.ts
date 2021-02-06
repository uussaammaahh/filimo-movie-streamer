import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from './slider/slider.component';
import { RouterModule } from '@angular/router';
import { SwiperModule } from 'swiper/angular';
import { AboutComponent } from './about/about.component';
import { CommentsComponent } from './comments/comments.component';



@NgModule({
  declarations: [
    SliderComponent,
    AboutComponent,
    CommentsComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    SliderComponent,
    AboutComponent,
    CommentsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SwiperModule
  ]
})
export class CustomComponentsModule { }
