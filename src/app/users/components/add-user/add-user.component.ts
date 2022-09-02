import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styles: [
  ]
})
export class AddUserComponent implements OnInit {

  // Step 0:  Have HTML version of the form with form tag, inputs and button

  // Step 1: Let's have form tag equivalent on the TS side 
  contactForm!: FormGroup;
  isSaved = false;

  constructor( private usersService: UsersService) { // 1. connect with the service using dep injection
  }

  ngOnInit(): void {
    this.contactForm = new FormGroup({
      // Step 2: Let's have form input equivalents on the TS side
      name: new FormControl('John', Validators.required),  // Step 5: Let's work on validation
      phone: new FormControl('3543453345', Validators.required), // refer html for Step 6
      email: new FormControl('j@k.com', [Validators.required, Validators.email])
      // For Step 3: go to html 
    });
  }

  handleAddContact(): void {
    console.log('submitted');
    console.log(this.contactForm.value); // entire form state

    // 2. send the above data to the service
    this.usersService.createUser(this.contactForm.value)
      .subscribe( (res: any)=> { // 3. get the res from the service
        console.log(res);
        this.isSaved = true;
      });
  }
}
