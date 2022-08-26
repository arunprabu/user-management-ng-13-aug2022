import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cpb', 
  template: `
    <div>
      <p>Age is: {{age}}</p>
    </div>
  `,
  styles: [
  ]
})
export class CpbComponent implements OnInit {

  // Step 1: Have a variable  
  @Input() age = 20; // Step 2: then make it custom property using @Input()

  constructor() { }

  ngOnInit(): void {
  }

}
