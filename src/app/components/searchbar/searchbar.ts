import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-searchbar',
  imports: [FormsModule],
  templateUrl: './searchbar.html',
  styles: `
    .search-container {
      animation: slideDown 0.6s ease-out;
    }

    .search-wrapper {
      position: relative;
      display: flex;
      align-items: center;
    }

    .custom-search-input {
      border: 2px solid #e9ecef;
      background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
      padding: 0.75rem 3.5rem 0.75rem 1.5rem;
      font-size: 1.05rem;
      font-weight: 500;
      color: #212529;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      box-shadow: 0 4px 12px rgba(13, 110, 253, 0.08);
    }

    .custom-search-input::placeholder {
      color: #adb5bd;
      font-weight: 400;
    }

    .custom-search-input:hover {
      border-color: #0d6efd;
      box-shadow: 0 6px 20px rgba(13, 110, 253, 0.15);
    }

    .custom-search-input:focus {
      outline: none;
      border-color: #0d6efd;
      background: linear-gradient(135deg, #ffffff 0%, #e7f1ff 100%);
      box-shadow:
        0 0 0 0.25rem rgba(13, 110, 253, 0.25),
        0 6px 20px rgba(13, 110, 253, 0.15);
    }

    .search-icon-group {
      position: absolute;
      right: 1.25rem;
      top: 50%;
      transform: translateY(-50%);
      display: flex;
      align-items: center;
      gap: 0.5rem;
      z-index: 5;
    }

    .search-icon {
      font-size: 1.25rem;
      color: #0d6efd;
      transition: all 0.3s ease;
      opacity: 0.7;
    }

    .custom-search-input:focus ~ .search-icon-group .search-icon {
      opacity: 1;
      transform: scale(1.1);
    }

    .clear-search-icon {
      font-size: 1.25rem;
      color: #dc3545;
      cursor: pointer;
      transition: all 0.3s ease;
      padding: 0.25rem;
      border-radius: 50%;
    }

    .clear-search-icon:hover {
      color: #bb2d3b;
      transform: scale(1.2) rotate(90deg);
      background-color: rgba(220, 53, 69, 0.1);
    }

    .custom-search-input:focus ~ .clear-search-icon {
      opacity: 1;
    }

    @keyframes slideDown {
      from {
        opacity: 0;
        transform: translateY(-15px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @media (max-width: 768px) {
      .custom-search-input {
        font-size: 1rem;
        padding: 0.65rem 3rem 0.65rem 1.25rem;
      }

      .search-icon-group {
        right: 1rem;
      }

      .search-icon,
      .clear-search-icon {
        font-size: 1.1rem;
      }
    }
  `,
})
export class Searchbar {
  searchTerm = signal('');

  clearSearch() {
    this.searchTerm.set('');
  }
}
