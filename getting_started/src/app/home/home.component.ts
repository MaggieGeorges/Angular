import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  disable = true
  greetings:String = "Hello World Again!!"
  text ="Starting text"

  greet(){
    return  "Hi There!"
  }

  constructor(){
    setTimeout(()=>{
      this.disable=false
    }, 4000)
  }

  AddName(){
    console.log("Clicked!!1")
  }

  takeInput(event:Event){
    console.log(event);
    
  }
}
