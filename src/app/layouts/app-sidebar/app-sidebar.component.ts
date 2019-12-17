import { Component } from '@angular/core';
import { Key } from 'protractor';

@Component({
  selector: '[app-sidebar]',
  templateUrl: './app-sidebar.component.html'
})
export class AppSidebar {
  public name_User;
  ngOnInit() {
    this.name_User = localStorage.getItem('name_User');
    
  }
}
