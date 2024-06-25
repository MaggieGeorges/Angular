import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Product } from './Models/Product';
import { shortenDescription } from './Pipes/ShortenDescription';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './Pipes/filter.pipe';
import { CommonModule } from '@angular/common';
import { resolve } from 'path';
import { rejects } from 'assert';
import { ProductComponent } from './product/product.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, shortenDescription, ProductComponent, FormsModule, FilterPipe, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Pipes';
  searchTerm = ""
  products:Product[] =[{
    Id: 1,
    Name:"Laptop",
    Description: "Lenovo laptop with 16GB RAM.",
    price:3000
  },
  {
    Id: 2,
    Name:"Flash Disk",
    Description: "SanDisk Flash.",
    price:30
  },
  {
    Id: 3,
    Name:"Hp Mouse",
    Description: "Mouse.",
    price:40
  }
] 

addProduct(){
  this.products=[]
  
}

greeting = new Promise<string>((resolve, reject)=>{
  setTimeout(()=>{
    resolve("Hello There")
  }, 2000)
})

}
