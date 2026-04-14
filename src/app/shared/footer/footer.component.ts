import { Component } from '@angular/core';
import { RouterLink, Router, NavigationEnd } from '@angular/router';
import { LanguageService } from '../language.service';
import { filter } from 'rxjs/operators';
import { LogoComponent } from '../svg/logo/logo.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, LogoComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  constructor(
    public language: LanguageService,
    private router: Router
  ) {
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd)
    ).subscribe(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    });
  }

  back(): void {
    const isHome = this.router.url === '/';

    if (isHome) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    this.router.navigate(['/'], { replaceUrl: true }).then(() => {
      setTimeout(() => {
        document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 0);
    });
  }

}


