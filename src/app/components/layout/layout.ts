import { Component } from '@angular/core';
import { Tabs } from '../tabs/tabs';
import { RouterOutlet } from '@angular/router';
import { Navbar } from '../navbar/navbar';
import { Header } from '../header/header';
import { Searchbar } from '../searchbar/searchbar';

@Component({
  selector: 'app-layout',
  imports: [Tabs, RouterOutlet, Navbar, Header, Searchbar],
  templateUrl: './layout.html',
  styles: ``,
})
export class Layout {
  notificacionesGuardados = 3;
}
