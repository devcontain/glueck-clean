import { Component } from '@angular/core';
import { LanguageService } from '../shared/language.service';
import { HomeHeroComponent } from '../shared/svg/home-hero/home-hero.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HomeHeroComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(public language: LanguageService) { }
}
