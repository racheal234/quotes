import { Component } from '@angular/core';
import {Quote} from './quote'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
quotes = [
 new Quote(1, 'I still think I am the greatest','Kanye west'),
 new Quote(2, 'What do I wear in bed? Why Chanel No 5','Marylin Monroe'),
 new Quote(4, 'Learning never exhausts the mind','Socrates'),
 new Quote(5, 'speed so fast i felt like i was drunk','Jonas Blue'),
]

}
