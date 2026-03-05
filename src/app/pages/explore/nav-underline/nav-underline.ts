import { Component, input } from '@angular/core';

@Component({
  selector: 'app-nav-underline',
  imports: [],
  templateUrl: './nav-underline.html',
  styles: ``,
})
export class NavUnderline {
  activeIndex = input<number>(0);
}
