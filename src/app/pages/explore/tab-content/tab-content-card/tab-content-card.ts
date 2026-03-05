import { Component } from '@angular/core';

@Component({
  selector: 'app-tab-content-card',
  imports: [],
  templateUrl: './tab-content-card.html',
  styles: `
    /* Efectos suaves al pasar el mouse */
    .transition-all {
      transition: all 0.25s ease;
    }

    .hover-shadow:hover {
      transform: translateY(-4px);
      box-shadow: 0 12px 32px rgba(0, 0, 0, 0.12) !important;
    }

    /* Limitar líneas de texto (muy útil para títulos largos) */
    .line-clamp-2 {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    /* Mejor tracking en categorías */
    .tracking-wide {
      letter-spacing: 0.5px;
    }

    .hover-text-info:hover {
      color: var(--bs-info) !important;
    }
  `,
})
export class TabContentCard {}
