import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { SwiperModule } from 'swiper/angular';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { SwiperExampleComponent } from './swiper-example/swiper-example.component';

@NgModule({
  imports: [BrowserModule, FormsModule, SwiperModule],
  declarations: [AppComponent, HelloComponent, SwiperExampleComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
