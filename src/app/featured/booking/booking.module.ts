import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookingRoutingModule } from './booking-routing.module';
import { BookingLayoutComponent } from './pages/booking-layout/booking-layout.component';
import { IconsPageComponent } from './pages/icons-page/icons-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CountrysidePageComponent } from './pages/countryside-page/countryside-page.component';
import { RoomsPageComponent } from './pages/rooms-page/rooms-page.component';


@NgModule({
  declarations: [
    BookingLayoutComponent,
    IconsPageComponent,
    CountrysidePageComponent,
    RoomsPageComponent,
   
  ],
  imports: [
    CommonModule,
    BookingRoutingModule,
    SharedModule
  ]
})
export class BookingModule { }
