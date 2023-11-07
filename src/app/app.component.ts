import { Component } from '@angular/core';
import { MenuItem } from './menu-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'chirpusPizza';
  menuItems: MenuItem[]=[
    { name: 'Margherita', category: 'Pizza', price: 9.99 },
    { name: 'Pepperoni', category: 'Pizza', price: 10.99 },
    { name: 'Vegetarian', category: 'Pizza', price: 11.99 },
    { name: 'Garlic Bread', category: 'Appetizer', price: 4.99 },
    { name: 'Caesar Salad', category: 'Salad', price: 7.99 },
    { name: 'BBQ Chicken', category: 'Pizza', price: 12.99 },
    { name: 'Mushroom Risotto', category: 'Pasta', price: 8.99 },
    { name: 'Cannoli', category: 'Dessert', price: 5.99 }
  ]
}
