import { Component } from '@angular/core';
import { LanguageService } from '../shared/language.service';
import { SunflowerTestComponent } from '../shared/svg/sunflower-test/sunflower-test.component';

@Component({
  selector: 'app-resilienz',
  standalone: true,
  imports: [SunflowerTestComponent],
  templateUrl: './resilienz.component.html',
  styleUrl: './resilienz.component.scss'
})
export class ResilienzComponent {
  constructor(public language: LanguageService) { }
}
