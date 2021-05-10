import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  headers = new BehaviorSubject(null);
  constructor() { }

  setLocal() {
    let headers = { 'Content-Type': 'application/json' };
    let token = this.token;

    if (token) headers['Authorization'] = `Bearer ${token}`;
    this.headers.next(headers);
  }

  get token() {
    return localStorage.token2021;
  }

}
