import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shell-template-header',
  templateUrl: './shell-template-header.component.html',
  styleUrls: ['./shell-template-header.component.css']
})
export class ShellTemplateHeaderComponent implements OnInit {

  items = [
    {
      label: 'Update',
      icon: 'pi pi-refresh'
  },
  {
      label: 'Delete',
      icon: 'pi pi-times'
  },
  {
      label: 'Angular',
      icon: 'pi pi-external-link',
      url: 'http://angular.io'
  },
  {
      label: 'Router',
      icon: 'pi pi-upload',
      routerLink: '/fileupload'
  }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
