import { NgClass } from '@angular/common';
import { Component, input } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgClass],
  template: `
    <div class="tabs-wrapper fixed-bottom mx-auto mb-4">
      <nav
        class="nav-container bg-black rounded-pill d-flex justify-content-between align-items-center px-4 py-3 shadow-lg"
      >
        <!-- Home -->
        <a
          class="nav-item position-relative text-white text-decoration-none d-flex flex-column align-items-center"
          routerLinkActive="active"
          [routerLinkActiveOptions]="{ exact: true }"
          routerLink="/home"
        >
          <i class="bi bi-house-door-fill fs-5"></i>
          <span class="dot bg-white rounded-circle"></span>
        </a>

        <!-- Explore -->
        <a
          class="nav-item position-relative text-white text-decoration-none d-flex flex-column align-items-center"
          routerLinkActive="active"
          routerLink="/explore"
        >
          <i class="bi bi-compass fs-5"></i>
        </a>

        <!-- Bookmark -->
        <a
          class="nav-item position-relative text-white text-decoration-none d-flex flex-column align-items-center"
          routerLinkActive="active"
          routerLink="/bookmark"
        >
          <i class="bi bi-bookmark fs-5"></i>
          @if (bookmarkCount() > 0) {
            <span
              class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
              style="font-size: 0.6rem; padding: 0.25em 0.4em;"
            >
              {{ bookmarkCount() }}
            </span>
          }
        </a>

        <!-- Profile -->
        <a
          class="nav-item position-relative text-white text-decoration-none d-flex flex-column align-items-center"
          routerLink="/profile"
          routerLinkActive="active"
        >
          <img
            src="https://i.pravatar.cc/100?img=11"
            alt="Profile"
            [ngClass]="{ true: 'border border-danger border-2' }"
            class="rounded-circle profile-img "
            width="24"
            height="24"
          />
        </a>
      </nav>
    </div>
  `,
  styles: [
    `
      .tabs-wrapper {
        max-width: 320px;
        width: 90%;
        z-index: 1030;
      }

      .nav-container {
        background-color: #121212 !important; /* Color oscuro similar a la imagen */
      }

      .nav-item {
        transition: all 0.2s ease-in-out;
        opacity: 0.6;
      }

      .nav-item.active {
        opacity: 1;
      }

      .nav-item:hover {
        opacity: 1;
      }

      .dot {
        width: 4px;
        height: 4px;
        position: absolute;
        bottom: -10px;
      }

      .nav-item.active i {
        transform: translateY(-2px);
      }

      .nav-item.active .dot {
        display: block;
      }

      .nav-item:not(.active) .dot {
        display: none;
      }

      .profile-img {
        object-fit: cover;
      }
      .nav-item.active .profile-img {
        // Image active options
      }
    `,
  ],
})
export class Tabs {
  // Puedes usar input() o un servicio para el contador dinámico
  bookmarkCount = input<number>(2); // ejemplo: pasa el valor desde el padre o usa un signal/servicio
}
