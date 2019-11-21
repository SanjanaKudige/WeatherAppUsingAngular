import { Component } from '@angular/core';
import {CardComponent} from './card/card.component';
import data from './weatherData';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cards = ['1', '2', '3'];

  onSubmit(inputName: string, event: Event) {
    event.preventDefault();
    console.log("input name: " + inputName);

  }
  
  title = 'weatherMocks';
}
