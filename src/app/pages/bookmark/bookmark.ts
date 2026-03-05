import { Component } from '@angular/core';
import { Navbar } from '../../components/navbar/navbar';
import { BackNav } from '../../components/back-nav/back-nav';

@Component({
  selector: 'app-bookmark',
  imports: [Navbar, BackNav],
  templateUrl: './bookmark.html',
  styles: ``,
})
export class Bookmark {}
