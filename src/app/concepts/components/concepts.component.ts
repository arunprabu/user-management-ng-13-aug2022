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

  companyName = 'Cognizant';

  courseName = 'Angular 13';

  myAge = 50;

  constructor() { }

  ngOnInit(): void {
  }

  handleClickMe(event: any){
    console.log(event);
    alert('clicked');
    // TODO: disable the button
    // TODO: change the label 'Clicked' 
  }

}
