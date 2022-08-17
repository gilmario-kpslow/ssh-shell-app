import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShellRoutingModule } from './shell-routing.module';
import { ShellTemplateComponent } from './shell-template/shell-template.component';
import { WhiteboardComponent } from './whiteboard/whiteboard.component';
import { TerminalComponent } from './terminal/terminal.component';
import { ShellTemplateHeaderComponent } from './shell-template/shell-template-header/shell-template-header.component';


@NgModule({
  declarations: [
    ShellTemplateComponent,
    WhiteboardComponent,
    TerminalComponent,
    ShellTemplateHeaderComponent
  ],
  imports: [
    CommonModule,
    ShellRoutingModule
  ]
})
export class ShellModule { }
