import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LanguageService } from '../language.service';
import { YellowArrowLeftComponent } from '../svg/yellow-arrow-left/yellow-arrow-left.component';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [YellowArrowLeftComponent],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss'
})
export class ImprintComponent {
  constructor(private router: Router, public language: LanguageService) { }

  /**
   * Scroll to bottom of page
   */
  back(): void {
    this.router.navigate(['/'])
  }
}
