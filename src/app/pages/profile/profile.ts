import { Component, inject } from '@angular/core';
import { BackNav } from '../../components/back-nav/back-nav';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [BackNav],
  templateUrl: './profile.html',
  styles: ``,
})
export class Profile {
  router = inject(Router);
  route = inject(ActivatedRoute);
  navigateTo() {
    this.router.navigate(['edit/1'], { relativeTo: this.route });
  }
}
