import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from "@angular/router";
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LogoComponent } from '../svg/logo/logo.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink, LogoComponent, RouterLinkActive ],
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

  public scrollToId(id: string, duration = 800): void {
    if (this.tryScroll(id, duration)) return;

    this.router.navigate(['/']).then(() =>
      setTimeout(() => this.tryScroll(id, duration), 0)
    );
  }

  private tryScroll(id: string, duration: number): boolean {
    const el = document.getElementById(id);
    if (!el) return false;

    const { start, distance } = this.scrollMetrics(el);
    this.rafTween(duration, t => window.scrollTo(0, start + distance * this.easeInOut(t)));
    return true;
  }

  private scrollMetrics(el: HTMLElement): { start: number; distance: number } {
    const start = window.pageYOffset;
    const end = el.getBoundingClientRect().top + start;
    return { start, distance: end - start };
  }

  private easeInOut(t: number): number {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  }

  private rafTween(duration: number, frame: (t: number) => void): void {
    const t0 = performance.now();
    const step = (now: number) => {
      const t = Math.min((now - t0) / duration, 1);
      frame(t);
      if (t < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }

/*   get toggleValue(): string {
    return this.languageService.toggleValue;
  }

  set toggleValue(value: string) {
    this.languageService.toggleValue = value;
  } */
}
