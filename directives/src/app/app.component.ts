import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DisplayComponent } from './display/display.component';
import { AddPeopleComponent } from './add-people/add-people.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AddPeopleComponent,  DisplayComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'getting_started';
  peoples:{Name:string, Age:number}[]=[{Name:'John', Age:12}]
  //Manipulates the list in our parent, and whenever the variable changes the dom/angular rerenders.
  addNewPerson(eventData:{Name:string, Age:number}){
    this.peoples.push(eventData)
  }

  deletePerson(eventData:{id:number}){
    this.peoples.splice(eventData.id, 1)
  }
}
