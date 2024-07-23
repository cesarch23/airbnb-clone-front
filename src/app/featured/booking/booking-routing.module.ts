import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingLayoutComponent } from './pages/booking-layout/booking-layout.component';
import { IconsPageComponent } from './pages/icons-page/icons-page.component';
import { CountrysidePageComponent } from './pages/countryside-page/countryside-page.component';
import { RoomsPageComponent } from './pages/rooms-page/rooms-page.component';

const routes: Routes = [
  {
    path:'',
    component: BookingLayoutComponent,
    children:[
      {path:'home',component:IconsPageComponent },
      {path:'countryside',component:CountrysidePageComponent },
      {path:'rooms',component:RoomsPageComponent },
      {path:'**', redirectTo:'home'},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookingRoutingModule { }
