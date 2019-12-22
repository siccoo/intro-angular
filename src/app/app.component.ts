import { Component } from '@angular/core';
import { HelloComponent } from './hello/hello.component';

// function log(className) {
//    console.log(className);
//    return(...args) => {
//      console.log("Arguments passed to this class constructor are ", args)
//     //  return new className(...args)
     
//    }
//   }

// @log("myExample")
//   class myExample {
//   constructor(arg1, arg2) {
//     console.log("Constructor fired"); 
//   }
// }

// const myClass = new myExample(5, 10)

function log<T extends { new (...args: any[]): {} }>(constructor: T) {
  return class extends constructor {
    constructor(...args: any[]) {
      super(...args);
      console.log("Did something after the original constructor!");
    }
  };
}

@log
class MyExample {
  constructor(arg1, arg2) {
    console.log("Constructor fired");
  }
}

const myClass = new MyExample(5, 10);


@Component({ 
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  text = 'intro2angular';
  myDisabledValue = false

  // constructor() {
  //   console.log('This statement was generated by the constructor', this.aSimpleMethod(5, 2));   
  // }

  // aSimpleMethod(m, n) {
  //   // console.log("Hi Nicholas, I'm learning Angular!");
  //   return m*n
  // }

  constructor() {

  }

  callMyFunction() {
    this.myDisabledValue = !this.myDisabledValue  
    console.log("Function called!");
    
  }
}



