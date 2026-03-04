import { Component, input, signal } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styles: ``,
})
export class Navbar {
  notificationCount = input<number>(6);
  isDarkMode = signal<boolean>(true);

  constructor() {
    const saved = localStorage.getItem('theme');
    const dark = saved ? saved === 'dark' : true;
    this.isDarkMode.set(dark);
    document.body.setAttribute('data-bs-theme', dark ? 'dark' : 'light');
  }

  toggleTheme(): void {
    const next = !this.isDarkMode();
    this.isDarkMode.set(next);
    document.body.setAttribute('data-bs-theme', next ? 'dark' : 'light');
    localStorage.setItem('theme', next ? 'dark' : 'light');
  }
}
