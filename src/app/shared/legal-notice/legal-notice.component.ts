import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LanguageService } from '../language.service';
import { YellowArrowLeftComponent } from '../svg/yellow-arrow-left/yellow-arrow-left.component';

@Component({
  selector: 'app-legal-notice',
  standalone: true,
  imports: [YellowArrowLeftComponent],
  templateUrl: './legal-notice.component.html',
  styleUrl: './legal-notice.component.scss'
})
export class LegalNoticeComponent {
  constructor(private router: Router, public language: LanguageService) { }

  /**
   * Scroll to bottom of page
   */
  back(): void {
    this.router.navigate(['/'])
  }
}
