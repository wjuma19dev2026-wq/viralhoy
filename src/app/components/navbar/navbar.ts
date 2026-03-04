import { Component, input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styles: ``,
})
export class Navbar {
  notificationCount = input<number>(6); // pasa el valor desde el padre o usa un signal/servicio
}
