import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidenavComponent } from "./components/sidenav/sidenav.component";
import { HeaderComponent } from "./components/header/header.component";
import { BodyComponent } from "./components/body/body.component";

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-root',
  imports: [SidenavComponent, HeaderComponent, BodyComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'adminPanel';

  isSideNavCollapsed = false;
  ScreenWidth = 0;

  onToggleSideNav(data: SideNavToggle):void{
    this.isSideNavCollapsed = data.collapsed;
    this.ScreenWidth = data.screenWidth;
  }
}
