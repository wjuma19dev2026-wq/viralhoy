import { Component, input } from '@angular/core';
import { BackNavButton } from './back-nav-button/back-nav-button';

@Component({
  selector: 'app-back-nav',
  imports: [BackNavButton],
  templateUrl: './back-nav.html',
  styles: ``,
})
export class BackNav {
  encabezado = input.required<string>();
}
