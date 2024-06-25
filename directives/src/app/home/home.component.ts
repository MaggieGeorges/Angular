import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { log } from 'console';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './home.compo nent.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  people: { Name: string, Age: number }[] = []
  name = ''
  age = ''
  day="Sunday"
  Showredp=false

  add() {
    this.people.push({ Name: this.name, Age: +this.age })
    console.log(this.people)
    this.Showredp= !this.Showredp
  }
  deletedPerson(i: number ) {
    this.people.splice(i, 1)
  }
}
