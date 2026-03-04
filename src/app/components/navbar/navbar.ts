import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styles: `
    .icon-button {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      border-radius: 50%;
      transition: background-color 0.2s ease-in-out;
      color: white;
      text-decoration: none;
    }
    .icon-button:hover,
    .icon-button:active {
      background-color: rgba(255, 255, 255, 0.15);
    }
    .icon-button:active {
      background-color: rgba(255, 255, 255, 0.25);
    }
  `,
})
export class Navbar {}
