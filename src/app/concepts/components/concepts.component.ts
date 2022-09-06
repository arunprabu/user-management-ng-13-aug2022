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

  dataReceivedFromChildComp = {
    name: '',
    age: ''
  };

  // directives related
  isLoggedIn = false;

  skills = ['html', 'js', 'ts', 'ng'] ;

  randomTxt = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare orci eu maximus gravida.';
  today: Date = new Date();

  constructor() { }

  ngOnInit(): void {
  }

  handleClickMe(event: any){
    console.log(event);
    alert('clicked');
    // TODO: disable the button
    // TODO: change the label 'Clicked' 
  }

  // Step 6: Let's handle the event -- and receive the data
  handleProfileLoaded(event: any) {
    console.log(event);
    this.dataReceivedFromChildComp = event;
  }

}
