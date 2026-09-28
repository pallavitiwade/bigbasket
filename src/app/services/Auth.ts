import { Injectable } from "@angular/core";

@Injectable({
    providedIn:'root'
})

export class AuthService{
 
 constructor() {}

  login(
    name: string,
    Number: string,
    email: string
  ): boolean {

    const user = {
      name: name,
      Number: Number,
      email: email
    };

    localStorage.setItem(
      'user',
      JSON.stringify(user)
    );

    return true;
  }

  logout(): void {

    localStorage.removeItem('user');

  }

  isLoggedIn(): boolean {
return localStorage.getItem('user') !== null;

  }


}
