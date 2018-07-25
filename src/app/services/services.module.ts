import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToursService } from './tours.service';
import { HttpClientModule } from '../../../node_modules/@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    ToursService
  ]
})
export class ServicesModule { }
