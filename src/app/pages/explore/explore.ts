import { Component } from '@angular/core';
import { Navbar } from '../../components/navbar/navbar';
import { NavUnderline } from './nav-underline/nav-underline';
import { TabContent } from './tab-content/tab-content';
import { BackNav } from '../../components/back-nav/back-nav';

@Component({
  selector: 'app-explore',
  imports: [Navbar, NavUnderline, TabContent, BackNav],
  templateUrl: './explore.html',
  styles: ``,
})
export class Explore {
  activeIndex = 0;
}
