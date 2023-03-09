import { Component, Input } from '@angular/core';
import { MenuItem } from '../../interfaces/MenuItem.interface';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  @Input() itemsMenu: MenuItem[] = []
}
