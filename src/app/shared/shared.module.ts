import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './components/navbar/navbar.component';
import { BtnComponent } from './components/btn/btn.component';


@NgModule({
  declarations: [
    NavbarComponent,
    BtnComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    NavbarComponent,
    BtnComponent,
  ]
})
export class SharedModule { }
