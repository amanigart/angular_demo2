import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FakeauthService {

  _isConnected!: boolean;
  currentUSer!: User;

  get isConnected() : boolean {
    return localStorage.getItem('isConnected') == 'true' ? true : false;
  }

  isConnectedSubject : Subject<boolean> = new Subject<boolean>();

  constructor() { }

  login() {
    this._isConnected = true;
    this.currentUSer = {id: 1, login: 'toto'}
    sessionStorage.setItem('isConnected', this._isConnected.toString());
    localStorage.setItem('isConnected', this._isConnected.toString());
    sessionStorage.setItem('user', JSON.stringify(this.currentUSer));
  }

  logout() {
    this._isConnected = false;
    sessionStorage.removeItem('isConnected');
    sessionStorage.removeItem('user');
    //sessionStorage.clear()            // <-- vide tout au lieu de faire élément par élément (removeItem)
    localStorage.clear();
  }
}

export interface User {
  id: number;
  login: string;
}
