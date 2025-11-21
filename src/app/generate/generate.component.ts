import { Component } from '@angular/core';
import { MainComponent } from '../main/main.component';
import { BewegungComponent } from '../bewegung/bewegung.component';

@Component({
  selector: 'app-generate',
  standalone: true,
  imports: [
    MainComponent,
    BewegungComponent
  ],
  templateUrl: './generate.component.html',
  styleUrl: './generate.component.scss'
})
export class GenerateComponent {

}
