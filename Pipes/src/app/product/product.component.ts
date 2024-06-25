import { CommonModule } from '@angular/common';
import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChange, SimpleChanges } from '@angular/core';

import { FilterPipe } from '../Pipes/filter.pipe';
import { Product } from '../Models/Product';
import { shortenDescription } from '../Pipes/ShortenDescription';
import { log } from 'node:console';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, FilterPipe, shortenDescription],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit,
OnChanges, AfterContentInit, AfterContentChecked, 
AfterViewInit,AfterViewChecked, DoCheck,  OnDestroy{
searchTerm: string = '';
@Input() products!:Product[]


//8 life cyle methods.

constructor(){console.log("Constructor is called!!!");
//propety was created and initialized with the default of the datatype / value given
}
ngOnInit(): void {
    /// perfect place to initialize any property
    console.log("On Init is called!!!");
}
ngOnChanges(changes: SimpleChanges): void{
  //A life cycle method that deals with changes of our bound input coming from the parent
  console.log("On Changes is called")
  console.log(changes);
}
ngDoCheck(): void{
  console.log("ngDoCheck is called!!");
  
}
ngAfterContentInit(): void {
  console.log("AfterContentInit is Called!");
}
ngAfterContentChecked(): void {
    console.log("AfterContentChecked is Called!");
    
}

ngAfterViewInit(): void {
    console.log("AfterViewInit is called!!!");
    
}

ngAfterViewChecked(): void {
    console.log("AfterViewChecked is called!!!!");
    
}

ngOnDestroy(): void {
    //cleansups- destroys a component so that we can see a new view, a new component
    console.log("On Destroy called!");
    
}

}
