import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
// import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  // title = 'Task3';
  myForm : any;
  header : any;
  content : any;
  tabs = [
    { header: 'Section 1', 
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi maiores quidem rerum aut expedita sit veniam, cum numquam ipsum esse aliquam ducimus ab. Explicabo animi saepe voluptatibus facere eos, neque nesciunt architecto delectus itaque nobis ducimus, enim optio earum fuga consequuntur aliquam et, possimus voluptates perspiciatis magni id rerum sequi?' },
    { header: 'Section 2', 
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi maiores quidem rerum aut expedita sit veniam, cum numquam ipsum esse aliquam ducimus ab. Explicabo animi saepe voluptatibus facere eos, neque nesciunt architecto delectus itaque nobis ducimus, enim optio earum fuga consequuntur aliquam et, possimus voluptates perspiciatis magni id rerum sequi?' },
    { header: 'Section 3',
       content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi maiores quidem rerum aut expedita sit veniam, cum numquam ipsum esse aliquam ducimus ab. Explicabo animi saepe voluptatibus facere eos, neque nesciunt architecto delectus itaque nobis ducimus, enim optio earum fuga consequuntur aliquam et, possimus voluptates perspiciatis magni id rerum sequi?' }
];


 ngOnInit(): void {
 }
 addNewSection(){
  this.tabs.push({
    header : this.header,
    content : this.content
  })
  console.log("here", this.myForm);
  
 }
}
