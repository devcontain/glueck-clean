import { Component } from '@angular/core';
import { LanguageService } from '../shared/language.service';

type BlockType = 'default' | 'schedule' | 'prices' | 'notice' | 'process';

interface TextBlock {
  paragraphs: string[];
  type: BlockType;
}

interface TimeRow {
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

  get blocks(): TextBlock[] {
    return this.language.pricesdate.containers.map((paragraphs, index) => ({
      paragraphs,
      type: this.getType(index)
    }));
  }

  get times(): TimeRow[] {
    const text = this.language.pricesdate.containers[2] ?? [];

    return text.map((entry) => {
      const split = entry.indexOf(':');

      if (split === -1) {
        return {
          day: '',
          time: entry
        };
      }

      return {
        day: entry.slice(0, split).trim(),
        time: entry.slice(split + 1).trim()
      };
    });
  }

  private getType(index: number): BlockType {
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
