import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-ceb',
  template: `
    <div>
      <button (click)="handleSendDataToParent()">Send Data to Parent Comp</button>
    </div>
  `,
  styles: [
  ]
})
export class CebComponent implements OnInit {

  // Step 1: Let's have data here - will send this data to parent comp
  myProfile = { 
    name: 'John',
    age: 30
  }

  // Custom Event -- creating event thru JS 
  // Step 2: Let's create custom event 
  // Step 2.1 Create an obj for EventEmitter class
  @Output() profileLoaded = new EventEmitter(); // Step 2.2 Let's make it custom event -- with @Output()
  
  constructor() { }

  ngOnInit(): void {
  }

  handleSendDataToParent(): void{
    console.log('will send data soon');
    // Step 3: LEt's trigger/emit the custom event thru program
    this.profileLoaded.emit(this.myProfile); // Step 4. Send the data while emitting the event
  }
}
