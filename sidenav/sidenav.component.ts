
import { Component, EventEmitter, Output } from '@angular/core';
import { navbarData } from './nav-data';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';





@Component({
  selector: 'app-sidenav',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})


export class SidenavComponent {


  navData=navbarData;
  collapsed=false;





}
