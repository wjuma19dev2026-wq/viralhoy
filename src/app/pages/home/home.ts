import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from '../../components/navbar/navbar';
import { Header } from '../../components/header/header';
import { Searchbar } from '../../components/searchbar/searchbar';

@Component({
  selector: 'app-home',
  imports: [RouterOutlet, Navbar, Header, Searchbar],
  templateUrl: './home.html',
  styles: ``,
})
export class Home {}
