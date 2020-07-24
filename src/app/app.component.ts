import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent implements OnInit {
  counterParent: number = 0;

  ngOnInit() {}

  increment() {
    this.counterParent++;
  }

  decrement() {
    this.counterParent--;
  }

  clearCounter(parameterExample: number) {
    console.log(parameterExample);
    this.counterParent = 0;
  }
}
