import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component ,EventEmitter, HostListener, OnInit, Output} from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { navbarData } from './navbarData';

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-sidenav',
  imports: [NgIf, NgFor, NgClass, FormsModule, RouterLink],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.css',
 
})
export class SidenavComponent implements OnInit {
  @Output() onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter();

  collapsed = false;
  screenWidth = 0;
  navData = navbarData;

  @HostListener('window:resize',['$event'])
  onResize(event:any){
    this.screenWidth=window.innerWidth;
    if(this.screenWidth <= 768){
      this.collapsed=false;
      this.onToggleSideNav.emit({collapsed:this.collapsed,screenWidth:this.screenWidth});
    }
  }
  ngOnInit() : void{
    this.screenWidth = window.innerWidth;
  }
  toggleCollapsed(): void {
    this.collapsed = !this.collapsed;
    this.onToggleSideNav.emit({ collapsed: this.collapsed, screenWidth: this.screenWidth })
  }

  closeSidenav(): void {
    this.collapsed = false;
    this.onToggleSideNav.emit({ collapsed: this.collapsed, screenWidth: this.screenWidth })
  }

}
function trigger(arg0: string, arg1: any[]): any {
  throw new Error('Function not implemented.');
}

