import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-back-nav-button',
  imports: [RouterLink],
  templateUrl: './back-nav-button.html',
  styles: ``,
})
export class BackNavButton {
  navigateBack() {
    window.history.back();
  }
}
