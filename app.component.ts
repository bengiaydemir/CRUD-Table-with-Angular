import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidenavComponent } from './sidenav/sidenav.component';
import {CommonModule, NgFor, NgIf} from '@angular/common';
import { ListComponent } from './list/list.component';
import { UpdateComponent } from './update/update.component';
import { FormsModule } from '@angular/forms';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SidenavComponent, CommonModule, ListComponent, UpdateComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl:'./app.component.scss'
})
export class AppComponent {

  title = 'frontend';
 
}
