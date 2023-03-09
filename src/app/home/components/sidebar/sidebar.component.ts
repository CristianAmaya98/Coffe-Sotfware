import { Component } from '@angular/core';
import { MenuItem } from 'src/app/shared/interfaces/MenuItem.interface';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  menusItem: MenuItem[] = [
    {
      name: 'Cafe',
      icon: 'assets/latte.png',
      active: true
    },
    {
      name: 'Hamburgesas',
      icon: 'assets/hamburger.png'
    },
    {
      name: 'Pizzas',
      icon: 'assets/pizza.png'
    },
    {
      name: 'Donas',
      icon: 'assets/rosquilla.png'
    },
    {
      name: 'Pasteles',
      icon: 'assets/pastel.png'
    },
    {
      name: 'Galletas',
      icon: 'assets/galletas.png'
    }]
}
