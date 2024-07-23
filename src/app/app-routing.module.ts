import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'airbnb',
    loadChildren:()=>import('./featured/booking/booking.module').then(m=>m.BookingModule)
  },
  {
    path:'**',
    redirectTo:'airbnb'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
