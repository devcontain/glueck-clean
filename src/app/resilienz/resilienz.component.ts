import { Component } from '@angular/core';
import { LanguageService } from '../shared/language.service';

@Component({
  selector: 'app-resilienz',
  standalone: true,
  imports: [],
  templateUrl: './resilienz.component.html',
  styleUrl: './resilienz.component.scss'
})
export class ResilienzComponent {
  constructor(public language: LanguageService) { }
}
