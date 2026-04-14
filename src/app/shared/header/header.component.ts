import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LogoComponent } from '../svg/logo/logo.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, LogoComponent, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(
    private router: Router,
  ) { }

  back(): void {
    this.router.navigate(['/'], { replaceUrl: true }).then(() => {
      setTimeout(() => {
        document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 0);
    });
  }
}
