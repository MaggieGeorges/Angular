import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'getting_started'
}




// export class AppComponent {
//   disable = true;
//   greetings: String = "Hello World Again";
//   text = "Starting text";

//   constructor() {
//     setTimeout(() => {
//       this.disable = false;
//     }, 4000);
//   }

//   greet() {
//     return "Hi There";
//   }

//   AddName() {
//     console.log("Clicked!!");
//   }

//   takeInput(event: Event) {
//     console.log(event);
//   }

//   textng:string = "eseat"
// }
