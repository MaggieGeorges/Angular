import { CommonModule, } from '@angular/common';
import { Component, Input, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-display',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './display.component.html',
  styleUrl: './display.component.css'
})
export class DisplayComponent {


  @Input() people:{Name:string, Age:number}[]=[]
  //delete from parent to child, we use an output
  @Output() onDelete:EventEmitter<{id:number}>=new EventEmitter()
  //people value can be set by the parent
  deletePerson(i:number){
    this.onDelete.emit({id:i})

  }
} 
