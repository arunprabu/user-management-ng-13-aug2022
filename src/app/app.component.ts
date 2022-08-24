import { Component } from '@angular/core';

// Decorator 
@Component({
  selector: 'app-root', // comp is exposed in a selector app-root 
  templateUrl: './app.component.html', // html 
  styleUrls: ['./app.component.css'] // css 
})
export class AppComponent {
  // ts 
  title = 'user-management-ng-13';
}
