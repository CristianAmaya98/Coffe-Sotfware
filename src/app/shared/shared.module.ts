import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderStepComponent } from './components/header-step/header-step.component';
import { CardProductComponent } from './components/card-product/card-product.component';


@NgModule({
  declarations: [
    NavbarComponent,
    HeaderStepComponent,
    CardProductComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    NavbarComponent,
    HeaderStepComponent,
    CardProductComponent
  ]
})
export class SharedModule { }
