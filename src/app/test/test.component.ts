import { Component, OnInit } from '@angular/core'; @Component({ 
  selector: 'app-test', 
  template: ` 
  <div> 
     <p> DigitCount Pipe </p> 
     <h1>{{ digits | digitcount }}</h1> 
  </div> 
  `, 
  styleUrls: ['./test.component.css'] 
}) 
export class TestComponent implements OnInit { 
  digits : number = 100; 
  ngOnInit() { 
  } 
}