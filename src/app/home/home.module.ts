import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomePageComponent } from './screen/home-page/home-page.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    SidebarComponent,
    HomePageComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
