import { Component } from '@angular/core';

function log(className) {
   console.log(className);
   return(...args) => {
     console.log("Arguments passed to this class constructor are ", args)
     return new className(...args)
     
   }
  }

@log
class myExample {
  constructor(arg1, arg2) {
    console.log("Constructor fired"); 
  }
}

const myClass = new myExample(5, 10)

@Component({ 
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'intro2angular';

  constructor() {
    console.log('This statement was generated by the constructor', this.aSimpleMethod(5, 2));   
  }

  aSimpleMethod(m, n) {
    // console.log("Hi Nicholas, I'm learning Angular!");
    return m*n
  }
}
