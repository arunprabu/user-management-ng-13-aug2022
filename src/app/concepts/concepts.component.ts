import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-concepts',
  templateUrl: './concepts.component.html',
  styles: [
  ]
})
export class ConceptsComponent implements OnInit {

  // ideal place for public and private variables 
  appName = 'User Manager App!'; // public 

  constructor() { }

  ngOnInit(): void {
  }

}
