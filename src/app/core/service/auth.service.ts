/*
All service under core module are global. And should be 
loaded at root
*/


import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
}
