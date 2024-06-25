import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild, booleanAttribute } from '@angular/core';
import {AsyncValidatorFn, FormArray, FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { rejects } from 'node:assert';
import { resolve } from 'node:path';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule, ReactiveFormsModule ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] 
})
//creating template-driven forms:
// export class AppComponent {
//   languages = [ 'JavaScript', 'Java', 'Python', 'c#', 'PHP']
//   years = [ 'Year 1', 'Year 2', 'Year 3', 'Year 4']
//   @ViewChild('form') form!:NgForm
//   onSubmit(){
//     console.log(this.form.value);
//     //to reset a form we use method reset which resets also angular classes
//     this.form.reset()
//     }

//   prepopulate(){
//     // //using setvalues to update all the inputs 
//     // this.form.setValue({
//     //   personaldata:{
//     //     name:'Maggie Mburu',
//     //     email:'maggiegeorges254@gmail.com',
//     //     year:this.years[2] 
//     //   },
//     //   language:this.languages[3]

//     // })

//     //to update one thing we use patch
//     //patc desn't belong the form, but the form has a property to access the form
//     this.form.form.patchValue({
//       personalData:{
//         name:'Carol Mburu',
//       }
//     })
//  }
//}  


//Creating reactive forms:
export class AppComponent implements OnInit{
  languages = [ 'JavaScript', 'Java', 'Python', 'c#', 'PHP']
  years = [ 'Year 1', 'Year 2', 'Year 3', 'Year 4']
  unallowedNames=["test", "Hacker", "John Doe", "Jane Doe"]
  form!:FormGroup
  onSubmit(){
    console.log(this.form.value);
    //to reset a form we use method reset which resets also angular classes
    this.form.reset()
    }


  ngOnInit(): void {  
    this.form = new FormGroup({
      personalData: new FormGroup({
        name: new FormControl(null, [Validators.required], [<AsyncValidatorFn>this.unallowedNamesasyncValidator.bind(this)]),
        email: new FormControl(null, [Validators.email, Validators.required]),
        year: new FormControl(null, Validators.required),
      }),
      language: new FormControl(null, Validators.required),
      skills:new FormArray([])
    })
  }
//to add controls to the form array
  
addControl(){
  const control= new FormControl(null, Validators.required);
  (this.form.get('skills') as FormArray).push(control) 
}
    
getControl(){
  return (<FormArray>this.form.get('skills')).controls
}

delete(i:number){
  (<FormArray>this.form.get('skills')).removeAt(i)
}
  
  //Synchronous custom valiator
   // unallowedNamesValidator(control:FormControl):{[x:string]:boolean}|null{
  //   if(this.unallowedNames.includes(control.value)){
  //     return {unallowedName:true}
  //   }
  //   return null
  // }


  //Asynchronous custom valiator
  unallowedNamesasyncValidator(control:FormControl){
    const promise = new Promise((resolve,reject)=>{
     setTimeout(()=>{
      if(this.unallowedNames.includes(control.value)){
        resolve({unallowedName:true})
      }
     }, 15000)
    })
   return promise
  }
}