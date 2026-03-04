import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from '../../components/navbar/navbar';
import { Header } from '../../components/header/header';
import { Searchbar } from '../../components/searchbar/searchbar';
import { Tabs } from '../../components/tabs/tabs';

@Component({
  selector: 'app-home',
  imports: [RouterOutlet, Navbar, Header, Searchbar, Tabs],
  templateUrl: './home.html',
  styles: ``,
})
export class Home {
  notificacionesGuardados = 5; // Ejemplo de valor para el contador de guardados, puedes actualizarlo dinámicamente según tus necesidades
}
