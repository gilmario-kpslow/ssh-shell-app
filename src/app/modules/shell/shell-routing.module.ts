import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShellTemplateComponent } from './shell-template/shell-template.component';
import { WhiteboardComponent } from './whiteboard/whiteboard.component';

const routes: Routes = [
  {path: '', component: ShellTemplateComponent, children: [
    {path: '', component: WhiteboardComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShellRoutingModule { }
