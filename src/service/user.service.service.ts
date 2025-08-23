import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  private darkModeSubject = new BehaviorSubject<boolean>(true);
  darkMode$ = this.darkModeSubject.asObservable();

  private animationFinishedSubject = new BehaviorSubject<boolean>(false);
  animationFinished$ = this.animationFinishedSubject.asObservable();

  setDarkMode(isDark: boolean) {
    this.darkModeSubject.next(isDark);
  }

  setAnimationFinished(finished: boolean) {
    this.animationFinishedSubject.next(finished);
  }

  constructor() {}
}
