import { Component } from '@angular/core';
import { LanguageService } from '../shared/language.service';

type PriceSectionType = 'default' | 'schedule' | 'prices' | 'notice' | 'process';

interface PriceSection {
  paragraphs: string[];
  type: PriceSectionType;
}

@Component({
  selector: 'app-pricetermin',
  standalone: true,
  imports: [],
  templateUrl: './pricetermin.component.html',
  styleUrl: './pricetermin.component.scss'
})
export class PriceterminComponent {
  constructor(public language: LanguageService) { }

  get sections(): PriceSection[] {
    return this.language.pricesdate.containers.map((paragraphs, index) => ({
      paragraphs,
      type: this.getSectionType(index)
    }));
  }

  private getSectionType(index: number): PriceSectionType {
    if (index === 2) {
      return 'schedule';
    }

    if (index === 3) {
      return 'prices';
    }

    if (index === 4) {
      return 'notice';
    }

    if (index === 5) {
      return 'process';
    }

    return 'default';
  }
}
