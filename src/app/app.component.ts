import { Component } from '@angular/core';

function log(target, name, descriptor) {
  console.log(target, name, descriptor);
  // Store the original function in a variable
  const original = descriptor.value
  // Do some manipulations in the descriptor.value which is the function
  descriptor.value = function() {
    console.log("Hi Michael, Kudos!!!"); 
  }
  // Return the descriptor
  return descriptor
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'intro2angular';

  constructor() {
    this.aSimpleMethod()
  }

  @log aSimpleMethod() {
    console.log("Hi Nicholas, I'm learning Angular!");
    
  }
}
