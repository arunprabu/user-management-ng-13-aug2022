import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs';

// Decorator
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private usersApiURL = 'https://jsonplaceholder.typicode.com/users';

  constructor( private http: HttpClient) { }

  createUser(formData: any){ // 1. get the form data from the comp
    console.log(formData);

    // 2. send the form data to the REST API 
    // 2.1. What's the REST API endpoint? https://jsonplaceholder.typicode.com/users
    // 2.2. What's the REST API Client Tool? HttpClient
    // 2.3. What's the Http Method? POST
    return this.http.post(this.usersApiURL, formData)
      .pipe(map((res: any) => {     // 3. get the res from the REST API 
        console.log(res);
        return res; // 4. send it to the comp 
      }));
  }

  getUsers() {
    return this.http.get(this.usersApiURL)
      .pipe(map((res: any) => {     // 3. get the res from the REST API 
        console.log(res);
        // right place for us to sort, filter, remove, tranform, add, modify 
        return res; // 4. send it to the comp 
      }), 
      catchError( (err: any) => {
        return err;
      }));
  }

  getUserById(id: any){
    console.log(id);
    return this.http.get(this.usersApiURL+ '/' + id)
      .pipe(map((res: any) => {     // 3. get the res from the REST API 
        console.log(res);
        return res; // 4. send it to the comp 
      }));
  }

  updateUser(formData: any) {
    console.log(formData);

    return this.http.put(this.usersApiURL + '/' + formData.id, formData)
      .pipe(map((res: any) => {     // 3. get the res from the REST API 
        console.log(res);
        return res; // 4. send it to the comp 
      }));

  }
}
