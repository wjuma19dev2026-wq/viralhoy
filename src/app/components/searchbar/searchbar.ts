import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-searchbar',
  imports: [FormsModule],
  templateUrl: './searchbar.html',
  styles: `
    .custom-search-input:focus {
      border-color: var(--bs-info);
      box-shadow: 0 0 0 0.25rem rgba(var(--bs-info-rgb), 0.25);
    }
  `,
})
export class Searchbar {
  searchTerm = signal('');

  clearSearch() {
    this.searchTerm.set('');
  }
}
