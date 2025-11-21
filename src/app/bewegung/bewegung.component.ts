import { Component } from '@angular/core';
import { LanguageService } from '../shared/language.service';

@Component({
  selector: 'app-bewegung',
  standalone: true,
  imports: [],
  templateUrl: './bewegung.component.html',
  styleUrl: './bewegung.component.scss'
})
export class BewegungComponent {
  constructor(public language: LanguageService) { }
}
