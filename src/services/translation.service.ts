import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private currentLang = 'en';

  constructor(private translate: TranslateService) {
    this.initLanguage();
  }

  private initLanguage() {
    // Get saved language or use browser language
    const savedLang = localStorage.getItem('selectedLanguage');
    const browserLang = this.translate.getBrowserLang();

    const langToUse = savedLang || browserLang || 'en';
    const supportedLang = ['en', 'fr'].includes(langToUse) ? langToUse : 'en';

    this.translate.setDefaultLang('en');
    this.setLanguage(supportedLang);
  }

  setLanguage(lang: string) {
    this.translate.use(lang);
    this.currentLang = lang;
    localStorage.setItem('selectedLanguage', lang);
  }

  getCurrentLanguage(): string {
    return this.currentLang;
  }

  getAvailableLanguages(): string[] {
    return ['en', 'fr'];
  }
}
