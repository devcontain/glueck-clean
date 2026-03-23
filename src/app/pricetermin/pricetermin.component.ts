import { Component } from '@angular/core';
import { LanguageService } from '../shared/language.service';

@Component({
  selector: 'app-pricetermin',
  standalone: true,
  imports: [],
  templateUrl: './pricetermin.component.html',
  styleUrl: './pricetermin.component.scss'
})
export class PriceterminComponent {
  constructor(public language: LanguageService) { }
}
