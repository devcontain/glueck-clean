import { Component } from '@angular/core';
import { LanguageService } from '../shared/language.service';

@Component({
  selector: 'app-zenbo',
  standalone: true,
  imports: [],
  templateUrl: './zenbo.component.html',
  styleUrl: './zenbo.component.scss'
})
export class ZenboComponent {
  constructor(public language: LanguageService) { }
}
