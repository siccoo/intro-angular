import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

  myvariable = "Moya, Nich & Michael";
  bitwiseOR = 2 | 5 // 010 101 => 0 | 1 = 1 then 1 | 1 = 0 then 1 | 0 = 1; 111
  i = 9;

  constructor() { }

  doSomeHeavyTask() {
    console.log(`Called ${this.i++} times`);
    
  }

  ngOnInit() {
  }

}
