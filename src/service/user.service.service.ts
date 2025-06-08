import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  private darkModeSubject = new BehaviorSubject<boolean>(false);
  darkMode$ = this.darkModeSubject.asObservable();

  setDarkMode(isDark: boolean) {
    this.darkModeSubject.next(isDark);
  }

  constructor() {}
}
