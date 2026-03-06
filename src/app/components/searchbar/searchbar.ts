import { NgIf } from '@angular/common';
import { Component, ElementRef, OnInit, signal, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-searchbar',
  imports: [FormsModule, NgIf],
  templateUrl: './searchbar.html',
  styleUrls: ['./searchbar.css'],
})
export class Searchbar implements OnInit {
  searchTerm = signal('');
  @ViewChild('searchModal', { static: true }) modalEl!: ElementRef;
  @ViewChild('mainSearchInput', { static: true }) mainSearchInput!: ElementRef;
  @ViewChild('animatedInputWrapper', { static: true }) animatedInputWrapper!: ElementRef;
  @ViewChild('searchContainer', { static: true }) searchContainer!: ElementRef;

  modal!: bootstrap.Modal;

  clearSearch() {
    this.searchTerm.set('');
  }

  onSearchClick() {
    const input = this.mainSearchInput.nativeElement as HTMLInputElement;

    // Evitar múltiples animaciones si ya está abierto
    if ((this.modalEl.nativeElement as HTMLDivElement).classList.contains('show')) {
      input.focus();
      return;
    }

    const startRect = input.getBoundingClientRect();

    // 1. Convertir input en "volador"
    input.classList.add('moving');
    input.style.top = `${startRect.top}px`;
    input.style.left = `${startRect.left}px`;
    input.style.width = `${startRect.width}px`;

    // 2. Abrir modal
    this.modal.show();

    // 3. Pequeño delay para que el modal esté renderizado y las coords sean correctas
    setTimeout(() => {
      const targetRect = (
        this.animatedInputWrapper.nativeElement as HTMLInputElement
      ).getBoundingClientRect();

      // 4. Animar hacia el destino (arriba del modal)
      input.style.top = `${targetRect.top}px`;
      input.style.left = `${targetRect.left}px`;
      input.style.width = `${targetRect.width}px`;
      // input.style.borderRadius = '0.375rem';   // si quieres cambiar forma

      // 5. Cuando termine → anclarlo al DOM normal del modal
      const handleTransitionEnd = () => {
        input.classList.remove('moving');
        input.style.top = '';
        input.style.left = '';
        input.style.width = '';
        input.style.position = '';
        input.style.pointerEvents = 'auto';

        // Mover al contenedor real
        (this.animatedInputWrapper.nativeElement as HTMLDivElement).appendChild(input);

        // Enfocar de verdad
        input.focus();

        input.removeEventListener('transitionend', handleTransitionEnd);
      };

      input.addEventListener('transitionend', handleTransitionEnd);
    }, 50); // 50-100ms suele ser su
  }

  // onSearchClick() {
  //   if ((this.modalEl.nativeElement as HTMLDivElement).classList.contains('show')) {
  //     return; // ya está abierto → no hacer nada
  //   }

  //   const input = this.mainSearchInput.nativeElement as HTMLInputElement;
  //   const startRect = input.getBoundingClientRect();

  //   // 1. Convertimos el input en "volador"
  //   input.classList.add('moving');
  //   input.style.top = startRect.top + 'px';
  //   input.style.left = startRect.left + 'px';
  //   input.style.width = startRect.width + 'px';
  //   input.style.height = startRect.height + 'px';

  //   // 2. Abrimos el modal inmediatamente
  //   this.modal.show();

  //   // 3. Esperamos un micro-delay para que el modal esté visible y calculable
  //   setTimeout(() => {
  //     const targetRect = this.animatedInputWrapper.nativeElement.getBoundingClientRect();

  //     // 4. Animamos hacia el destino
  //     input.style.transition = 'all 0.8s cubic-bezier(0.25, 0.8, 0.25, 1)'; // lenta y elegante
  //     input.style.top = targetRect.top + 'px';
  //     input.style.left = targetRect.left + 'px';
  //     input.style.width = targetRect.width + 'px';
  //     // input.style.borderRadius = '0.375rem'; // opcional

  //     // 5. Cuando termine la animación → lo "soltamos" en su lugar natural
  //     const onTransitionEnd = () => {
  //       input.classList.remove('moving');
  //       input.style.top = '';
  //       input.style.left = '';
  //       input.style.width = '';
  //       input.style.position = '';
  //       input.style.pointerEvents = '';
  //       input.style.transition = '';

  //       // Lo movemos al DOM real del modal
  //       this.animatedInputWrapper.nativeElement.appendChild(input);

  //       // Focus real
  //       input.focus();

  //       input.removeEventListener('transitionend', onTransitionEnd);
  //     };

  //     input.addEventListener('transitionend', onTransitionEnd);
  //   }, 60); // pequeño retraso para que el modal renderice bien
  // }

  // Opcional: cuando cierran el modal, devolvemos el input a su lugar original
  ngOnInit() {
    (this.modalEl.nativeElement as HTMLInputElement).addEventListener('hidden.bs.modal', () =>
      this.resetInputPosition(),
    );

    this.modal = new bootstrap.Modal(this.modalEl.nativeElement as HTMLDivElement, {
      backdrop: true,
      keyboard: true,
    });
    document.getElementById('searchModal')?.addEventListener('hidden.bs.modal', () => {
      const input = this.mainSearchInput.nativeElement;
      if (input.parentElement !== document.querySelector('.search-wrapper')) {
        document.querySelector('.search-wrapper')?.appendChild(input);
        input.blur();
      }
    });
  }

  private resetInputPosition() {
    const input = this.mainSearchInput.nativeElement;
    const originalParent = document.querySelector('.search-box');

    if (originalParent && input.parentElement !== originalParent) {
      originalParent.appendChild(input);
      input.classList.remove('moving');
      input.style = ''; // limpiar todo
      input.blur();
    }
  }
}
