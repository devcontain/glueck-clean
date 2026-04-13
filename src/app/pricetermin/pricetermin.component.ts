import { Component } from '@angular/core';
import { LanguageService } from '../shared/language.service';

type PriceSectionType = 'default' | 'schedule' | 'prices' | 'notice' | 'process';

interface PriceSection {
  paragraphs: string[];
  type: PriceSectionType;
}

interface ScheduleRow {
  day: string;
  time: string;
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

  get scheduleRows(): ScheduleRow[] {
    const scheduleParagraphs = this.language.pricesdate.containers[2] ?? [];

    return scheduleParagraphs.map((entry) => {
      const separatorIndex = entry.indexOf(':');

      if (separatorIndex === -1) {
        return {
          day: '',
          time: entry
        };
      }

      return {
        day: entry.slice(0, separatorIndex).trim(),
        time: entry.slice(separatorIndex + 1).trim()
      };
    });
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
