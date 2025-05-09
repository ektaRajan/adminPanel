import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [NgClass],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Input() collapsed = false;
  @Input() screenWidth = 0;


  getHeadClass() : string{
    let styleClass = '';
    debugger;
    if(this.collapsed && this.screenWidth > 768){
      styleClass = 'head-trimmed';
    }else if(this.collapsed && this.screenWidth >= 768 && this.screenWidth > 0)
    {
      styleClass = 'head-md-screen'
    }
    return styleClass;
  }
}
