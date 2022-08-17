import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesTemplateComponent } from './pages-template/pages-template.component';
import { NaoEncontradaComponent } from './nao-encontrada/nao-encontrada.component';


@NgModule({
  declarations: [
    PagesTemplateComponent,
    NaoEncontradaComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
